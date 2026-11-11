import { describe, expect, it } from 'vitest'
import {
  accountWidget,
  cleanFilters,
  compactLayout,
  editableWidgets,
  filtersChanged,
  goalWidget,
  gridArea,
  kpiWidget,
  moveWidget,
  newWidgetId,
  nextRow,
  placeWidget,
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
    expect(accountWidget(widgets)).toMatchObject({ id: 'account_1', type: 'account', x: 0, y: 4, w: 12 })
  })

  it('move e redimensiona sem sair da grade', () => {
    expect(moveWidget([chart], 'report_1', 10, -3)[0]).toMatchObject({ x: 6, y: 0 })
    expect(moveWidget([chart], 'report_1', -10, 2)[0]).toMatchObject({ x: 0, y: 0 })
    expect(resizeWidget([chart], 'report_1', 10, 20)[0]).toMatchObject({ w: 9, h: 12 })
    expect(resizeWidget([chart], 'report_1', -10, -10)[0]).toMatchObject({ w: 1, h: 1 })
    expect(removeWidget([kpi, chart], 'kpi_1')).toEqual([chart])
  })

  it('fecha os vãos subindo os widgets, sem sobrepor', () => {
    const loose = [{ ...kpi, y: 3 }, { ...note, y: 9 }]
    expect(compactLayout(loose).map((widget) => [widget.id, widget.y])).toEqual([
      ['kpi_1', 0],
      ['text_1', 2],
    ])
  })

  it('empurra para baixo quem estava no lugar e depois compacta', () => {
    const top: Widget = { ...kpi, w: 6 }
    const bottom: Widget = { ...note, w: 6 }
    const side: Widget = { ...chart, x: 6, w: 6 }
    const dropped = placeWidget([top, bottom, side], 'report_1', { x: 0, y: 0, w: 6, h: 4 })
    expect(dropped.map((widget) => [widget.id, widget.x, widget.y])).toEqual([
      ['kpi_1', 0, 4],
      ['text_1', 0, 6],
      ['report_1', 0, 0],
    ])
  })

  it('troca de lugar com o de baixo ao arrastar para cima dele', () => {
    const first: Widget = { ...kpi, w: 6 }
    const second: Widget = { ...note, w: 6 }
    const swapped = placeWidget([first, second], 'kpi_1', { x: 0, y: 2, w: 6, h: 2 })
    expect(swapped.map((widget) => [widget.id, widget.y])).toEqual([
      ['kpi_1', 2],
      ['text_1', 0],
    ])
    expect(moveWidget([first, second], 'text_1', 0, -1).map((widget) => widget.y)).toEqual([2, 0])
    expect(moveWidget([first, second], 'kpi_1', 0, 1).map((widget) => widget.y)).toEqual([2, 0])
  })

  it('redimensionar empurra os vizinhos para baixo', () => {
    const left: Widget = { ...kpi, w: 6 }
    const right: Widget = { ...note, x: 6, y: 0, w: 6 }
    const wider = resizeWidget([left, right], 'kpi_1', 2, 0)
    expect(wider.map((widget) => [widget.id, widget.x, widget.y, widget.w])).toEqual([
      ['kpi_1', 0, 0, 8],
      ['text_1', 6, 2, 6],
    ])
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

describe('editableWidgets', () => {
  it('copia os widgets sem dividir a consulta com o gravado', () => {
    const saved = [{ id: 'w1', type: 'query', x: 0, y: 0, w: 4, h: 3, title: null, query: { metrics: ['revenue'], schema_version: 1 } }] as Widget[]
    const copies = editableWidgets(saved)
    copies[0]?.query?.metrics.push('impressions')
    expect(saved[0]?.query?.metrics).toEqual(['revenue'])
  })
})
