import { describe, expect, it } from 'vitest'
import {
  axisSplit,
  chartAllowed,
  completeAt,
  emptyDraft,
  fieldAvailable,
  fromReport,
  fromTemplate,
  pickSource,
  scaleError,
  scaleHue,
  toInput,
  toQuery,
  withDimensions,
  withMetrics,
  wordAt,
  type ReportDraft,
} from '@/modules/reports/rules'
import type { MetricCatalog, ReportTemplate, SavedReport } from '@/modules/reports/types'

const label = { pt: 'x', en: 'x', es: 'x' }
const catalog: MetricCatalog = {
  metrics: [
    { key: 'revenue', label, kind: 'sum', format: 'currency', sources: ['gam'] },
    { key: 'ecpm', label, kind: 'ratio', format: 'currency', sources: ['gam'] },
    { key: 'page_views', label, kind: 'sum', format: 'number', sources: ['gam', 'page_views'] },
  ],
  custom_metrics: [{ query_key: 'custom.rpm', name: 'RPM', description: null, format: 'currency', decimals: 2, sources: ['gam'] }],
  dimensions: [
    { key: 'date', label, sources: ['gam', 'page_views', 'gam_key_values'], filterable: false },
    { key: 'site', label, sources: ['gam', 'page_views'], filterable: true },
    { key: 'hour', label, sources: ['page_views'], filterable: false },
    { key: 'ad_unit', label, sources: ['gam'], filterable: true },
    { key: 'key_value', label, sources: ['gam_key_values'], filterable: true },
  ],
  operators: ['in'],
  periods: ['last_30_days'],
  max_days: 400,
  max_limit: 10000,
}

/** Rascunho vazio com o que o teste muda. */
const draft = (patch: Partial<ReportDraft> = {}): ReportDraft => ({ ...emptyDraft(), ...patch })

describe('regras do construtor de relatórios', () => {
  it('escolhe a fonte pela interseção dos campos', () => {
    expect(pickSource(['revenue'], ['site'], [], catalog)).toBe('gam')
    expect(pickSource(['page_views'], ['hour'], [], catalog)).toBe('page_views')
    expect(pickSource(['revenue'], ['hour'], [], catalog)).toBeNull()
    expect(pickSource(['custom.rpm'], ['key_value'], [], catalog)).toBeNull()
    expect(pickSource(['revenue'], [], ['ad_unit'], catalog)).toBe('gam')
  })

  it('apaga o campo que deixaria a consulta sem fonte', () => {
    expect(fieldAvailable({ kind: 'dimension', key: 'hour' }, draft({ metrics: ['revenue'] }), catalog)).toBe(false)
    expect(fieldAvailable({ kind: 'dimension', key: 'hour' }, draft({ metrics: ['page_views'] }), catalog)).toBe(true)
    expect(fieldAvailable({ kind: 'metric', key: 'revenue' }, draft({ metrics: ['page_views'], dimensions: ['hour'] }), catalog)).toBe(false)
  })

  it('tira dimensões, filtros e estilos que ficam sem fonte ou sem métrica', () => {
    const next = withMetrics(
      draft({ metrics: ['page_views'], dimensions: ['hour'], filters: [{ field: 'site', values: ['a'] }], styles: { page_views: { color: 'lime' } } }),
      ['revenue'],
      catalog,
    )
    expect(next.dimensions).toEqual([])
    expect(next.filters).toEqual([{ field: 'site', values: ['a'] }])
    expect(next.styles).toEqual({})
  })

  it('confere o gráfico como o core', () => {
    expect(chartAllowed('pie', 1, 1)).toBe(true)
    expect(chartAllowed('pie', 2, 1)).toBe(false)
    expect(chartAllowed('kpi', 1, 0)).toBe(true)
    expect(chartAllowed('funnel', 1, 0)).toBe(false)
    expect(chartAllowed('line', 1, 2)).toBe(true)
    expect(chartAllowed('line', 2, 2)).toBe(false)
    expect(chartAllowed('bar', 1, 3)).toBe(false)
    expect(chartAllowed('table', 5, 4)).toBe(true)
    expect(withDimensions(draft({ chart: 'line', dimensions: ['date'] }), [], catalog).chart).toBe('table')
  })

  it('põe o tempo no eixo e a outra dimensão nas séries', () => {
    expect(axisSplit(['site', 'date'])).toEqual({ axis: 'date', split: 'site' })
    expect(axisSplit(['site', 'ad_unit'])).toEqual({ axis: 'site', split: 'ad_unit' })
    expect(axisSplit(['date'])).toEqual({ axis: 'date', split: null })
    expect(axisSplit([])).toEqual({ axis: null, split: null })
  })

  it('pinta pela aparência entre o início e o fim', () => {
    expect(scaleHue({ mode: 'green_red', from: 0, to: 100 }, 0)).toBe(135)
    expect(scaleHue({ mode: 'green_red', from: 0, to: 100 }, 100)).toBe(0)
    expect(scaleHue({ mode: 'red_green', from: 0, to: 100 }, 50)).toBeCloseTo(67.5)
    expect(scaleHue({ mode: 'red_green', from: 0, to: 100 }, 500)).toBe(135)
    expect(scaleError({ mode: 'red_green', from: 5, to: 5 })).toBe('report.scaleOrder')
    expect(scaleError({ mode: 'red_green', from: Number.NaN, to: 5 })).toBe('report.scaleOrder')
    expect(scaleError({ mode: 'red_green', from: 1, to: 5 })).toBeNull()
  })

  it('monta a consulta com a fonte, a ordem e a moeda', () => {
    expect(toQuery(draft({ metrics: ['revenue'], dimensions: ['date'], chart: 'line' }), 'BRL', catalog)).toMatchObject({
      source: 'gam',
      order: [{ field: 'date', descending: false }],
      currency: 'BRL',
    })
    expect(toQuery(draft({ metrics: ['revenue'], dimensions: ['site'] }), 'USD', catalog).order).toEqual([{ field: 'revenue', descending: true }])
    expect(toQuery(draft({ filters: [{ field: 'site', values: ['a', 'b'] }] }), 'USD', catalog).filters).toEqual([{ field: 'site', operator: 'in', values: ['a', 'b'] }])
    expect(toQuery(draft({ filters: [{ field: 'site', values: [] }] }), 'USD', catalog).filters).toEqual([])
  })

  it('salva só as métricas com cor ou aparência', () => {
    const input = toInput(draft({ metrics: ['revenue', 'ecpm'], styles: { revenue: {}, ecpm: { color: 'lime' } } }), catalog)
    expect(input.chart_options).toEqual({ metrics: { ecpm: { color: 'lime' } } })
    expect(input.query).not.toHaveProperty('currency')
    expect(toInput(draft({ chart: 'bar', dimensions: ['site'], stacked: true }), catalog).chart_options).toEqual({ stacked: true })
  })

  it('lê o relatório salvo e o modelo', () => {
    const saved: SavedReport = {
      id: 'r1',
      name: 'Receita',
      description: null,
      query: { source: 'gam', metrics: ['revenue'], period: { preset: 'last_7_days' }, dimensions: ['site'], filters: [{ field: 'site', operator: 'in', values: ['a'] }], compare: true, order: [], limit: 10 },
      chart_type: 'bar',
      chart_options: {},
      visibility: 'roles',
      role_ids: ['p1'],
      owner_user_id: 'u2',
      created_by: 'u2',
      created_at: '2026-10-28T00:00:00Z',
      updated_at: '2026-10-28T00:00:00Z',
      editable: false,
    }
    expect(fromReport(saved)).toMatchObject({ id: 'r1', period: 'last_7_days', compare: true, filters: [{ field: 'site', values: ['a'] }], styles: {}, roleIds: ['p1'], editable: false, limit: 10 })
    const template: ReportTemplate = { key: 'k', name: { pt: 'Receita por site', en: 'Revenue by site', es: 'x' }, query: saved.query, chart_type: 'table', chart_options: { metrics: { revenue: { color: 'red' } } } }
    expect(fromTemplate(template, 'en')).toMatchObject({ id: null, name: 'Revenue by site', visibility: 'private', editable: true, styles: { revenue: { color: 'red' } } })
  })

  it('completa a palavra da fórmula onde está o cursor', () => {
    expect(wordAt('revenue / ad_re', 15)).toEqual({ word: 'ad_re', start: 10 })
    expect(wordAt('revenue / ', 10)).toEqual({ word: '', start: 10 })
    expect(wordAt('custom.rp', 9)).toEqual({ word: 'custom.rp', start: 0 })
    expect(completeAt('revenue / ad_re', 15, 'ad_requests')).toEqual({ text: 'revenue / ad_requests ', cursor: 22 })
    expect(completeAt('(reve) * 2', 5, 'revenue')).toEqual({ text: '(revenue ) * 2', cursor: 9 })
  })
})
