/** Regras da tela dos dashboards: a grade de 12 colunas, os widgets novos e os filtros. */

import type { DashboardDefinition, DashboardFilters, FilterDimension, GoalScope, Widget } from '@/modules/dashboards/types'
import type { MetricSource, RelativePeriod } from '@/modules/reports/types'

export const GRID_COLUMNS = 12
export const MAX_HEIGHT = 12
export const MAX_WIDGETS = 24
export const FILTER_DIMENSIONS: FilterDimension[] = ['client', 'account_manager', 'network', 'site']
const KPI_SIZE = { w: 3, h: 2 }
const CHART_SIZE = { w: 6, h: 4 }
const TEXT_SIZE = { w: 4, h: 2 }

/** Os widgets na ordem de leitura (linha, depois coluna), que é a do celular, em uma coluna. */
export function readingOrder(widgets: Widget[]): Widget[] {
  return [...widgets].sort((first, second) => first.y - second.y || first.x - second.x)
}

/** O lugar do widget na grade (CSS grid), a partir da coluna, da linha e do tamanho. */
export function gridArea(widget: Widget): Record<string, string> {
  return { gridColumn: `${widget.x + 1} / span ${widget.w}`, gridRow: `${widget.y + 1} / span ${widget.h}` }
}

/** A primeira linha livre, abaixo de todos os widgets. */
export function nextRow(widgets: Widget[]): number {
  return widgets.reduce((row, widget) => Math.max(row, widget.y + widget.h), 0)
}

/** Um id de widget que ainda não existe no dashboard. */
export function newWidgetId(widgets: Widget[], prefix: string): string {
  const taken = new Set(widgets.map((widget) => widget.id))
  let number = 1
  while (taken.has(`${prefix}_${number}`)) number += 1
  return `${prefix}_${number}`
}

/** Limita um número entre o mínimo e o máximo. */
function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(Math.max(value, minimum), maximum)
}

/** O widget andando na grade, sem sair das 12 colunas nem subir acima da primeira linha. */
export function moveWidget(widgets: Widget[], id: string, columns: number, rows: number): Widget[] {
  return widgets.map((widget) =>
    widget.id === id ? { ...widget, x: clamp(widget.x + columns, 0, GRID_COLUMNS - widget.w), y: Math.max(widget.y + rows, 0) } : widget,
  )
}

/** O widget mais largo ou mais estreito, mais alto ou mais baixo, sempre cabendo na grade. */
export function resizeWidget(widgets: Widget[], id: string, columns: number, rows: number): Widget[] {
  return widgets.map((widget) =>
    widget.id === id ? { ...widget, w: clamp(widget.w + columns, 1, GRID_COLUMNS - widget.x), h: clamp(widget.h + rows, 1, MAX_HEIGHT) } : widget,
  )
}

/** O dashboard sem o widget. */
export function removeWidget(widgets: Widget[], id: string): Widget[] {
  return widgets.filter((widget) => widget.id !== id)
}

/** Um KPI dos últimos 30 dias, comparado ao período anterior, na primeira linha livre. */
export function kpiWidget(widgets: Widget[], metric: string, source: MetricSource): Widget {
  return {
    id: newWidgetId(widgets, 'kpi'),
    type: 'query',
    x: 0,
    y: nextRow(widgets),
    ...KPI_SIZE,
    title: null,
    chart_type: 'kpi',
    chart_options: {},
    query: {
      schema_version: 1,
      source,
      metrics: [metric],
      period: { preset: 'last_30_days', start: null, end: null },
      dimensions: [],
      filters: [],
      compare: true,
      order: [],
      limit: 1000,
    },
  }
}

/** Um relatório salvo, com o gráfico dele, na primeira linha livre. */
export function reportWidget(widgets: Widget[], reportId: string): Widget {
  return { id: newWidgetId(widgets, 'report'), type: 'report', x: 0, y: nextRow(widgets), ...CHART_SIZE, title: null, report_id: reportId }
}

/** Uma nota livre na primeira linha livre. */
export function textWidget(widgets: Widget[], text: string): Widget {
  return { id: newWidgetId(widgets, 'text'), type: 'text', x: 0, y: nextRow(widgets), ...TEXT_SIZE, title: null, text }
}

/** O progresso da meta (da pessoa ou da equipe Groone) na primeira linha livre. */
export function goalWidget(widgets: Widget[], scope: GoalScope): Widget {
  return { id: newWidgetId(widgets, 'goal'), type: 'goal', x: 0, y: nextRow(widgets), ...TEXT_SIZE, title: null, goal_scope: scope }
}

/** O período escolhido nos filtros, ou vazio (vale o de cada widget). */
export function filterPeriod(filters: DashboardFilters): RelativePeriod | '' {
  return filters.period?.preset ?? ''
}

/** Os filtros com outro período; vazio deixa cada widget com o dele. */
export function withPeriod(filters: DashboardFilters, preset: RelativePeriod | ''): DashboardFilters {
  return { ...filters, period: preset ? { preset, start: null, end: null } : null }
}

/** Os filtros com um valor só na dimensão (ou nenhum, com vazio). */
export function withValue(filters: DashboardFilters, dimension: FilterDimension, value: string): DashboardFilters {
  return { ...filters, [dimension]: value ? [value] : [] }
}

/** Diz se os filtros da tela são diferentes dos gravados no dashboard. */
export function filtersChanged(shown: DashboardFilters, saved: DashboardFilters): boolean {
  return JSON.stringify(cleanFilters(shown)) !== JSON.stringify(cleanFilters(saved))
}

/** Os filtros sem as listas vazias, no formato que a API grava. */
export function cleanFilters(filters: DashboardFilters): DashboardFilters {
  const clean: DashboardFilters = { period: filters.period?.preset || filters.period?.start ? filters.period : null }
  for (const dimension of FILTER_DIMENSIONS) {
    const values = filters[dimension] ?? []
    if (values.length) clean[dimension] = [...values]
  }
  return clean
}

/** A definição com os widgets e os filtros novos, pronta para salvar. */
export function withLayout(definition: DashboardDefinition, widgets: Widget[], filters: DashboardFilters): DashboardDefinition {
  return { schema_version: definition.schema_version, filters: cleanFilters(filters), widgets }
}

/** Um dashboard vazio, para começar do zero. */
export function emptyDefinition(): DashboardDefinition {
  return { schema_version: 1, filters: {}, widgets: [] }
}
