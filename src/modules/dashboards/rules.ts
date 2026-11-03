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
const ACCOUNT_SIZE = { w: 12, h: 4 }

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

/** O lugar e o tamanho de um widget na grade. */
export interface Box {
  x: number
  y: number
  w: number
  h: number
}

/** Diz se as duas caixas ocupam alguma célula em comum. */
function overlaps(first: Box, second: Box): boolean {
  return first.x < second.x + second.w && second.x < first.x + first.w && first.y < second.y + second.h && second.y < first.y + first.h
}

/** A caixa cabendo na grade: largura de 1 a 12, altura de 1 ao máximo, sem sair pela direita nem pelo topo. */
export function fitBox(box: Box): Box {
  const width = clamp(box.w, 1, GRID_COLUMNS)
  return { x: clamp(box.x, 0, GRID_COLUMNS - width), y: Math.max(box.y, 0), w: width, h: clamp(box.h, 1, MAX_HEIGHT) }
}

/** Os widgets na ordem da lista original, com as posições novas. */
function inOriginalOrder(original: Widget[], placed: Widget[]): Widget[] {
  const byId = new Map(placed.map((widget) => [widget.id, widget]))
  return original.map((widget) => byId.get(widget.id) ?? widget)
}

/** Sobe cada widget até encostar no de cima ou no topo, na ordem de leitura; no empate, o mexido vem antes. */
export function compactLayout(widgets: Widget[], movedId: string | null = null): Widget[] {
  const ordered = [...widgets].sort(
    (first, second) => first.y - second.y || Number(second.id === movedId) - Number(first.id === movedId) || first.x - second.x,
  )
  const placed: Widget[] = []
  for (const widget of ordered) {
    let row = widget.y
    while (row > 0 && !placed.some((other) => overlaps({ ...widget, y: row - 1 }, other))) row -= 1
    while (placed.some((other) => overlaps({ ...widget, y: row }, other))) row += 1
    placed.push({ ...widget, y: row })
  }
  return inOriginalOrder(widgets, placed)
}

/** Põe o widget na caixa: quem estava embaixo desce (ou sobe por cima dele, se começava mais acima e
 * cabe), e depois todos sobem para fechar os vãos. */
export function placeWidget(widgets: Widget[], id: string, box: Box): Widget[] {
  const target = widgets.find((widget) => widget.id === id)
  if (!target) return widgets
  const moved = { ...target, ...fitBox(box) }
  const placed: Widget[] = [moved]
  for (const widget of readingOrder(widgets.filter((other) => other.id !== id))) {
    let candidate = { ...widget }
    if (overlaps(candidate, moved) && candidate.y <= moved.y) {
      const above = { ...candidate, y: moved.y - candidate.h }
      if (above.y >= 0 && !placed.some((other) => overlaps(above, other))) candidate = above
    }
    let blockers = placed.filter((other) => overlaps(candidate, other))
    while (blockers.length) {
      candidate = { ...candidate, y: Math.max(...blockers.map((other) => other.y + other.h)) }
      blockers = placed.filter((other) => overlaps(candidate, other))
    }
    placed.push(candidate)
  }
  return compactLayout(inOriginalOrder(widgets, placed), id)
}

/** Diz se as duas grades têm os mesmos lugares e tamanhos. */
export function sameLayout(first: Widget[], second: Widget[]): boolean {
  const byId = new Map(second.map((widget) => [widget.id, widget]))
  return (
    first.length === second.length &&
    first.every((widget) => {
      const other = byId.get(widget.id)
      return !!other && other.x === widget.x && other.y === widget.y && other.w === widget.w && other.h === widget.h
    })
  )
}

/** O widget andando pelo menu (teclado e celular): anda de passo em passo até a grade mudar, ou fica. */
export function moveWidget(widgets: Widget[], id: string, columns: number, rows: number): Widget[] {
  const widget = widgets.find((item) => item.id === id)
  if (!widget) return widgets
  let previous = fitBox(widget)
  for (let step = 1; step <= GRID_COLUMNS + MAX_HEIGHT * MAX_WIDGETS; step += 1) {
    const box = fitBox({ ...widget, x: widget.x + columns * step, y: widget.y + rows * step })
    if (box.x === previous.x && box.y === previous.y) break
    previous = box
    const result = placeWidget(widgets, id, box)
    if (!sameLayout(result, widgets)) return result
  }
  return widgets
}

/** O widget mais largo ou mais estreito, mais alto ou mais baixo, cabendo na grade e empurrando os outros. */
export function resizeWidget(widgets: Widget[], id: string, columns: number, rows: number): Widget[] {
  const widget = widgets.find((item) => item.id === id)
  if (!widget) return widgets
  return placeWidget(widgets, id, { x: widget.x, y: widget.y, w: clamp(widget.w + columns, 1, GRID_COLUMNS - widget.x), h: widget.h + rows })
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

/** A situação da conta (vagas e networks com problema) na primeira linha livre, na largura toda. */
export function accountWidget(widgets: Widget[]): Widget {
  return { id: newWidgetId(widgets, 'account'), type: 'account', x: 0, y: nextRow(widgets), ...ACCOUNT_SIZE, title: null }
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
