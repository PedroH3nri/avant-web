import { afterEach, describe, expect, it, vi } from 'vitest'
import { api } from '@/lib/api'
import type { ReportResult } from '@/modules/reports/types'
import {
  cascadeFunnel,
  cascadeLadder,
  cascadePoints,
  CASCADE_REASON_KEY,
  DROP_TIERS,
  dropPercent,
  gainQuery,
  gainSeries,
  hourPeriod,
  hourLabel,
  hourPoints,
  lastDayTotals,
  modelChoices,
  modelCounts,
  moneyText,
  nearestTier,
  percentText,
  tierOptions,
  priceRulePermission,
  priceRulesPath,
  REASON_KEY,
  recommendedModel,
  siteStatus,
} from '@/modules/price_rules/rules'
import { priceRuleService } from '@/modules/price_rules/service'
import type { CascadeHour, PriceRuleHistoryEntry, PriceRuleHour } from '@/modules/price_rules/types'

/** Uma hora do GAM com 200 requisições, 150 respostas e 100 impressões. */
function hour(date: string, at: number, revenue = 400_000): PriceRuleHour {
  return { date, hour: at, eligible_requests: 200, responses_served: 150, impressions: 100, revenue_micros: revenue, pmr: 75, ecpm_micros: revenue * 10 }
}

/** Uma decisão do motor que levou o floor ao valor dado. */
function decision(date: string, at: number, floor: number): PriceRuleHistoryEntry {
  return { date, hour: at, action: 'up', reason: 'pmr_up_over_roof', floor_before_micros: floor - 10_000, floor_applied_micros: floor, created_at: `${date}T00:00:00Z` }
}

const USD_TIERS = [1_010_000, 1_050_000, 1_090_000, 1_130_000, 1_170_000, 1_220_000, 1_260_000]

/** Uma hora da Cascata: a 1ª com 100 pedidos e 40 compras, as outras com o que sobrou. */
function cascadeHour(date: string, at: number, floor = 1_220_000): CascadeHour {
  return {
    date,
    hour: at,
    floor_micros: floor,
    tries: [
      { eligible_requests: 100, responses_served: 40, impressions: 40, revenue_micros: 60_000 },
      { eligible_requests: 60, responses_served: 20, impressions: 20, revenue_micros: 25_000 },
      { eligible_requests: 40, responses_served: 10, impressions: 10, revenue_micros: 10_000 },
      { eligible_requests: 30, responses_served: 20, impressions: 20, revenue_micros: 5_000 },
    ],
  }
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

  it('formata dinheiro em micros e acha o degrau da moeda', () => {
    expect(moneyText(1_250_000, 'BRL', 'pt-BR')).toBe('R$ 1,25')
    expect(moneyText(1_250_000, null, 'en')).toBe('1.25')
    expect(nearestTier([500_000, 520_000, 540_000], 528_000)).toBe(520_000)
    expect(nearestTier([], 528_000)).toBe(528_000)
    expect(tierOptions([500_000, 520_000, 540_000], 'USD', 'en-US', 520_000).map((option) => option.label)).toEqual(['$0.52', '$0.54'])
    expect(tierOptions([500_000, 520_000], 'USD', 'en-US', 0, 500_000)).toEqual([{ value: '500000', label: '$0.50' }])
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

  it('soma as 24 horas do relógio até a hora mais nova, não as últimas 24 linhas', () => {
    const rows = [hour('2026-11-10', 14), hour('2026-11-10', 2), hour('2026-11-09', 15), hour('2026-11-09', 14), hour('2026-11-08', 20)]
    expect(lastDayTotals(rows)?.requests).toBe(3 * 200)
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

describe('regras de tela da Cascata', () => {
  it('recomenda o modelo que a api manda; bloco fora da lista (como o offerwall) fica sem modelo', () => {
    const site = { recommended_models: { Content3_Mobile: 'cascade' as const, Interstitial_Mobile: 'cascade' as const } }
    expect(recommendedModel(site, 'Content3_Mobile')).toBe('cascade')
    expect(recommendedModel(site, 'Interstitial_Mobile')).toBe('cascade')
    expect(recommendedModel(site, 'Offerwall')).toBeNull()
    expect(recommendedModel(site, 'Content1_Desktop')).toBeNull()
  })

  it('oferece Automática, Cascata e Sem regra em todo bloco e marca a recomendada', () => {
    expect(modelChoices('cascade')).toEqual([
      { value: 'automatic', key: 'pr.model.automatic', recommended: false },
      { value: 'cascade', key: 'pr.model.cascade', recommended: true },
      { value: 'none', key: 'pr.model.none', recommended: false },
    ])
    expect(modelChoices('automatic').filter((choice) => choice.recommended).map((choice) => choice.value)).toEqual(['automatic'])
  })

  it('conta os blocos de cada modelo com qualquer combinação', () => {
    expect(modelCounts({ Content1: 'cascade', Anchor: 'automatic', Fixed: 'cascade', Reward: 'none' })).toEqual({ automatic: 1, cascade: 2 })
    expect(modelCounts({})).toEqual({ automatic: 0, cascade: 0 })
  })

  it('cascadeLadder', () => {
    expect(cascadeLadder(USD_TIERS, 1_220_000, 2)).toEqual([1_220_000, 1_130_000, 1_050_000, null])
    expect(cascadeLadder(USD_TIERS, 1_090_000, 3)).toEqual([1_090_000, 1_010_000, 1_010_000, null])
    expect(DROP_TIERS).toEqual(['1', '2', '3'])
    expect(percentText(40, 'pt-BR')).toBe('40,00%')
    expect(percentText(null, 'pt-BR')).toBe('—')
  })

  it('dá a queda aproximada de cada lance pelos degraus', () => {
    expect(dropPercent([1_000_000, 1_037_000], 2)).toBeCloseTo(7.01, 1)
    expect(dropPercent([], 2)).toBe(0)
  })

  it('soma o funil das últimas 24 horas por tentativa', () => {
    const rows = Array.from({ length: 30 }, (_item, index) => cascadeHour(index < 24 ? '2026-11-10' : '2026-11-09', index % 24))
    const funnel = cascadeFunnel(rows)
    expect(funnel.tries.map((step) => [step.requests, step.filled, step.revenue])).toEqual([
      [2400, 960, 1_440_000],
      [1440, 480, 600_000],
      [960, 240, 240_000],
      [720, 480, 120_000],
    ])
    expect(funnel.firstFill).toBeCloseTo(40)
    expect(funnel.ladderFill).toBeCloseTo(90)
    expect(funnel.revenue).toBe(2_400_000)
    expect(cascadeFunnel([]).firstFill).toBeNull()
  })

  it('soma o funil das 24 horas do relógio até a hora mais nova, com horas sem número no meio', () => {
    const rows = [cascadeHour('2026-11-10', 14), cascadeHour('2026-11-10', 0), cascadeHour('2026-11-09', 15), cascadeHour('2026-11-09', 14), cascadeHour('2026-11-07', 3)]
    expect(cascadeFunnel(rows).offered).toBe(3 * 100)
  })

  it('monta os pontos por hora da mais velha à mais nova', () => {
    const points = cascadePoints([cascadeHour('2026-11-10', 9, 1_260_000), cascadeHour('2026-11-10', 8)])
    expect(points.map((point) => [point.hour, point.start, point.requests, point.revenue])).toEqual([
      [8, 1_220_000, 100, 100_000],
      [9, 1_260_000, 100, 100_000],
    ])
    expect(points[0]!.firstFill).toBeCloseTo(40)
    expect(points[0]!.ladderFill).toBeCloseTo(90)
    expect(points[0]!.ecpm).toBe(1_111_111)
  })

  it('tem texto para os motivos novos e os da Cascata', () => {
    expect(REASON_KEY.fills_first).toBe('pr.reason.fillsFirst')
    expect(REASON_KEY.fills_late).toBe('pr.reason.fillsLate')
    expect(REASON_KEY.no_new_data).toBe('pr.reason.noNewData')
    expect(CASCADE_REASON_KEY.stable).toBe('pr.cascadeReason.stable')
    expect(CASCADE_REASON_KEY.initial_rule_creation).toBe('pr.cascadeReason.initial')
    expect(CASCADE_REASON_KEY.manual).toBe('pr.reason.manual')
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

  it('pede as horas da Cascata e filtra as regras pelo modelo', async () => {
    const get = vi.spyOn(api, 'get').mockResolvedValue([])
    await priceRuleService(true).cascadeHours('s1', 'r1', '2026-11-01', '2026-11-02')
    await priceRuleService(false).rules('s1', { page: 1, model: 'cascade' })
    expect(get).toHaveBeenCalledWith('/internal/sites/s1/price-rules/r1/cascade-hours', { start: '2026-11-01', end: '2026-11-02' })
    expect(get).toHaveBeenCalledWith('/sites/s1/price-rules', { page: 1, model: 'cascade' })
  })
})
