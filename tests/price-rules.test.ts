import { afterEach, describe, expect, it, vi } from 'vitest'
import { api } from '@/lib/api'
import type { ReportResult } from '@/modules/reports/types'
import {
  gainQuery,
  gainSeries,
  hourPeriod,
  hourLabel,
  hourPoints,
  lastDayTotals,
  moneyInput,
  moneyText,
  parseMoney,
  priceRulePermission,
  priceRulesPath,
  siteStatus,
} from '@/modules/price_rules/rules'
import { priceRuleService } from '@/modules/price_rules/service'
import type { PriceRuleHistoryEntry, PriceRuleHour } from '@/modules/price_rules/types'

/** Uma hora do GAM com 200 requisições, 150 respostas e 100 impressões. */
function hour(date: string, at: number, revenue = 400_000): PriceRuleHour {
  return { date, hour: at, eligible_requests: 200, responses_served: 150, impressions: 100, revenue_micros: revenue, pmr: 75, ecpm_micros: revenue * 10 }
}

/** Uma decisão do motor que levou o floor ao valor dado. */
function decision(date: string, at: number, floor: number): PriceRuleHistoryEntry {
  return { date, hour: at, action: 'up', reason: 'pmr_up_over_roof', floor_before_micros: floor - 10_000, floor_applied_micros: floor, created_at: `${date}T00:00:00Z` }
}

/** O resultado de uma consulta de relatório com as linhas por dia e grupo. */
function report(rows: [string, string, number, number][]): ReportResult {
  return {
    period: { start: '2026-11-01', end: '2026-11-02' },
    rows: rows.map(([date, group, revenue, requests]) => ({
      dimensions: { date, custom_value: group },
      metrics: { rpmre: String((revenue * 1000) / requests), revenue: String(revenue), eligible_requests: String(requests) },
      previous: null,
    })),
    totals: {},
    previous_period: null,
    previous_totals: null,
    truncated: false,
    labels: {},
    currency: 'USD',
  }
}

describe('regras de tela das regras de preço', () => {
  it('troca a permissão e o caminho no painel interno', () => {
    expect(priceRulePermission(false, 'manage')).toBe('price_rules.manage')
    expect(priceRulePermission(true, 'view')).toBe('internal.price_rules.view')
    expect(priceRulesPath(true)).toBe('/interno/regras-de-preco')
  })

  it('mostra a situação do site na ordem: moeda, degraus, ligada e blocos', () => {
    const site = { active: true, currency: 'BRL', currency_supported: true, automatic_blocks: 2 }
    expect(siteStatus({ ...site, currency: null }).key).toBe('pr.status.waiting')
    expect(siteStatus({ ...site, currency_supported: false }).key).toBe('pr.status.unsupported')
    expect(siteStatus({ ...site, active: false }).key).toBe('pr.status.off')
    expect(siteStatus({ ...site, automatic_blocks: 0 }).key).toBe('pr.status.noBlocks')
    expect(siteStatus(site)).toEqual({ tone: 'ok', key: 'pr.status.on' })
  })

  it('formata e lê dinheiro em micros na moeda da network', () => {
    expect(moneyText(1_250_000, 'BRL', 'pt-BR')).toBe('R$ 1,25')
    expect(moneyText(1_250_000, null, 'en')).toBe('1.25')
    expect(parseMoney('1,25')).toBe(1_250_000)
    expect(parseMoney(' 0.5 ')).toBe(500_000)
    expect(parseMoney('abc')).toBeNull()
    expect(parseMoney('-1')).toBeNull()
    expect(moneyInput(840_000, 'pt')).toBe('0,84')
    expect(moneyInput(840_000, 'en')).toBe('0.84')
  })

  it('monta o período no fuso de São Paulo', () => {
    expect(hourPeriod(2, new Date('2026-11-10T02:00:00Z'))).toEqual({ start: '2026-11-08', end: '2026-11-09' })
    expect(hourPeriod(1, new Date('2026-11-10T15:00:00Z'))).toEqual({ start: '2026-11-10', end: '2026-11-10' })
  })

  it('escreve a hora curta no formato do idioma', () => {
    expect(hourLabel('2026-11-09', 4, 'pt-BR')).toBe('09/11 04h')
    expect(hourLabel('2026-11-09', 14, 'en')).toBe('11/09 14h')
  })

  it('junta horas e decisões em ordem e repete o floor nas horas sem decisão', () => {
    const points = hourPoints([hour('2026-11-10', 9), hour('2026-11-10', 8)], [decision('2026-11-10', 8, 500_000), decision('2026-11-10', 10, 520_000)])
    expect(points.map((point) => [point.hour, point.floor, point.revenue])).toEqual([
      [8, 500_000, 400_000],
      [9, 500_000, 400_000],
      [10, 520_000, null],
    ])
  })

  it('soma as últimas 24 horas com número', () => {
    const rows = Array.from({ length: 30 }, (_item, index) => hour(index < 24 ? '2026-11-10' : '2026-11-09', index % 24))
    const totals = lastDayTotals(rows)
    expect(totals).toEqual({ revenue: 24 * 400_000, requests: 24 * 200, pmr: 75, ecpm: 4_000_000 })
    expect(lastDayTotals([])).toBeNull()
  })

  it('calcula o ganho da regra sobre o controle pela receita somada', () => {
    const series = gainSeries(
      report([
        ['2026-11-01', 'regra', 11, 1000],
        ['2026-11-01', 'controle', 1, 100],
        ['2026-11-02', 'regra', 11, 1000],
        ['2026-11-02', 'controle', 1, 100],
      ]),
    )
    expect(series?.days).toEqual(['2026-11-01', '2026-11-02'])
    expect(series?.rule).toEqual([11, 11])
    expect(series?.gain).toBeCloseTo(10)
    expect(gainSeries(report([['2026-11-01', 'regra', 11, 1000]]))).toBeNull()
    expect(gainQuery('s1').filters).toEqual([
      { field: 'site', operator: 'eq', values: ['s1'] },
      { field: 'custom_key', operator: 'eq', values: ['groone_group'] },
    ])
  })
})

describe('service das regras de preço', () => {
  afterEach(() => vi.restoreAllMocks())

  it('usa as rotas do cliente e do interno', async () => {
    const get = vi.spyOn(api, 'get').mockResolvedValue({ items: [] })
    const put = vi.spyOn(api, 'put').mockResolvedValue({})
    const patch = vi.spyOn(api, 'patch').mockResolvedValue({})
    await priceRuleService(false).sites({ page: 1 })
    await priceRuleService(true).hours('s1', 'r1', '2026-11-01', '2026-11-02')
    await priceRuleService(false).saveSettings('s1', true, 10)
    await priceRuleService(true).setStatus('s1', 'r1', 'paused')
    expect(get).toHaveBeenCalledWith('/price-rules/sites', { page: 1 })
    expect(get).toHaveBeenCalledWith('/internal/sites/s1/price-rules/r1/hours', { start: '2026-11-01', end: '2026-11-02' })
    expect(put).toHaveBeenCalledWith('/sites/s1/price-rules/settings', { active: true, control_percent: 10 })
    expect(patch).toHaveBeenCalledWith('/internal/sites/s1/price-rules/r1', { status: 'paused' })
  })
})
