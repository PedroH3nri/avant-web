import { describe, expect, it } from 'vitest'
import {
  cleanFilters,
  filtersChanged,
  goalWidget,
  gridArea,
  kpiWidget,
  moveWidget,
  newWidgetId,
  nextRow,
  readingOrder,
  removeWidget,
  reportWidget,
  resizeWidget,
  textWidget,
  withLayout,
  withPeriod,
  withValue,
} from '@/modules/dashboards/rules'
import type { Widget } from '@/modules/dashboards/types'

const kpi: Widget = { id: 'kpi_1', type: 'text', x: 0, y: 0, w: 3, h: 2, title: null, text: 'a' }
const chart: Widget = { id: 'report_1', type: 'report', x: 3, y: 0, w: 6, h: 4, title: null, report_id: 'r1' }
const note: Widget = { id: 'text_1', type: 'text', x: 0, y: 2, w: 3, h: 2, title: null, text: 'b' }

describe('regras dos dashboards', () => {
  it('ordena por linha e coluna e calcula o lugar na grade', () => {
    expect(readingOrder([note, chart, kpi]).map((widget) => widget.id)).toEqual(['kpi_1', 'report_1', 'text_1'])
    expect(gridArea(chart)).toEqual({ gridColumn: '4 / span 6', gridRow: '1 / span 4' })
  })

  it('põe widgets novos na primeira linha livre com id que não se repete', () => {
    const widgets = [kpi, chart, note]
    expect(nextRow(widgets)).toBe(4)
    expect(nextRow([])).toBe(0)
    expect(newWidgetId(widgets, 'text')).toBe('text_2')
    expect(kpiWidget(widgets, 'revenue_gross', 'gam')).toMatchObject({ id: 'kpi_2', y: 4, w: 3, chart_type: 'kpi' })
    expect(reportWidget(widgets, 'r2')).toMatchObject({ type: 'report', report_id: 'r2', y: 4 })
    expect(textWidget(widgets, 'oi')).toMatchObject({ id: 'text_2', text: 'oi' })
    expect(goalWidget(widgets, 'team')).toMatchObject({ type: 'goal', goal_scope: 'team' })
  })

  it('move e redimensiona sem sair da grade', () => {
    expect(moveWidget([chart], 'report_1', 10, -3)[0]).toMatchObject({ x: 6, y: 0 })
    expect(moveWidget([chart], 'report_1', -10, 2)[0]).toMatchObject({ x: 0, y: 2 })
    expect(resizeWidget([chart], 'report_1', 10, 20)[0]).toMatchObject({ w: 9, h: 12 })
    expect(resizeWidget([chart], 'report_1', -10, -10)[0]).toMatchObject({ w: 1, h: 1 })
    expect(removeWidget([kpi, chart], 'kpi_1')).toEqual([chart])
  })

  it('limpa os filtros e percebe quando mudaram', () => {
    const period = withPeriod({}, 'this_month')
    expect(period.period).toEqual({ preset: 'this_month', start: null, end: null })
    expect(withPeriod(period, '').period).toBeNull()
    const filtered = withValue(period, 'client', 'c1')
    expect(cleanFilters(withValue(filtered, 'site', ''))).toEqual({ period: period.period, client: ['c1'] })
    expect(filtersChanged(filtered, { client: ['c1'], period: period.period })).toBe(false)
    expect(filtersChanged(filtered, {})).toBe(true)
    expect(withLayout({ schema_version: 1, filters: {}, widgets: [] }, [kpi], filtered)).toEqual({
      schema_version: 1,
      filters: { period: period.period, client: ['c1'] },
      widgets: [kpi],
    })
  })
})
