import { describe, expect, it } from 'vitest'
import { change, countryName, dailySeries, daysOf, formatMetric, hourLabel, hourlyItems, niceTicks, peakHour, toNumber } from '@/lib/metrics'
import type { ReportRow } from '@/modules/reports/types'

/** Linha do resultado com a data e a receita. */
const row = (date: string, revenue: string, ecpm: string | null): ReportRow => ({
  dimensions: { date },
  metrics: { revenue, ecpm },
  previous: null,
})

describe('metrics', () => {
  it('formata pelo idioma e pelo formato da métrica', () => {
    expect(formatMetric(1234.5, 'currency', 'pt-BR')).toBe('US$ 1.234,50')
    expect(formatMetric(1234.5, 'currency', 'en')).toBe('$1,234.50')
    expect(formatMetric(5299713, 'number', 'pt-BR')).toBe('5.299.713')
    expect(formatMetric(0.59, 'percent', 'en')).toBe('0.59%')
    expect(formatMetric(1_500_000, 'number', 'en', true)).toBe('1.5M')
    expect(formatMetric(null, 'number', 'en')).toBe('–')
  })

  it('calcula a variação só quando há anterior', () => {
    expect(change(110, 100)).toBeCloseTo(10)
    expect(change(90, 100)).toBeCloseTo(-10)
    expect(change(5, 0)).toBeNull()
    expect(change(5, null)).toBeNull()
    expect(toNumber('16.800000')).toBe(16.8)
    expect(toNumber(null)).toBeNull()
  })

  it('preenche os dias sem linha: zero na soma, vazio na razão', () => {
    const range = { start: '2026-10-30', end: '2026-11-02' }
    expect(daysOf(range)).toEqual(['2026-10-30', '2026-10-31', '2026-11-01', '2026-11-02'])
    const rows = [row('2026-10-30', '10', '2.5'), row('2026-11-01', '4', null)]
    expect(dailySeries(rows, range, 'revenue', 'sum')).toEqual([10, 0, 4, 0])
    expect(dailySeries(rows, range, 'ecpm', 'ratio')).toEqual([2.5, null, null, null])
  })

  it('escolhe marcas redondas para o eixo', () => {
    expect(niceTicks(776)).toEqual([0, 200, 400, 600, 800])
    expect(niceTicks(0)).toEqual([0, 1])
    expect(niceTicks(0.59)).toEqual([0, 0.2, 0.4, 0.6])
  })

  it('mostra o país pelo nome', () => {
    expect(countryName('BR', 'pt-BR')).toBe('Brasil')
    expect(countryName(null, 'en')).toBeNull()
  })

  it('preenche as 24 horas e acha a hora de pico', () => {
    const rows: ReportRow[] = [
      { dimensions: { hour: '9' }, metrics: { page_views: '120' }, previous: null },
      { dimensions: { hour: '21' }, metrics: { page_views: '300' }, previous: null },
    ]
    const items = hourlyItems(rows, 'page_views')
    expect(items).toHaveLength(24)
    expect(items[9]).toEqual({ key: '9', label: '09h', value: 120 })
    expect(items[0]?.value).toBe(0)
    expect(hourlyItems([], 'page_views')).toEqual([])
    expect(peakHour(rows, 'page_views')).toBe(21)
    expect(peakHour([], 'page_views')).toBeNull()
    expect(hourLabel(23)).toBe('23h')
  })
})
