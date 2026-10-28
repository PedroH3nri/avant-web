/**
 * Regras de tela do construtor de relatórios: que fonte a consulta usa, que campo combina com a
 * escolha atual, que gráfico serve, a cor da aparência pelo valor e a conversão do rascunho de e
 * para a API. Quem decide de verdade é a API; aqui só se antecipa para apagar o que não serve.
 */

import type { Key } from '@/lib/i18n'
import { countryName, hourLabel, shortDay, toNumber } from '@/lib/metrics'
import type { Lang } from '@/lib/types'
import type {
  ChartOptions,
  ChartType,
  MetricCatalog,
  MetricFormat,
  MetricScale,
  MetricSource,
  MetricStyle,
  RelativePeriod,
  ReportQuery,
  ReportRow,
  ReportTemplate,
  SavedQuery,
  SavedReport,
  SavedReportInput,
  SeriesColor,
  Visibility,
} from '@/modules/reports/types'

export interface DraftFilter {
  field: string
  values: string[]
}

export interface ReportDraft {
  id: string | null
  name: string
  description: string | null
  metrics: string[]
  dimensions: string[]
  filters: DraftFilter[]
  period: RelativePeriod
  /** Datas fixas de um relatório salvo assim; o construtor ainda não as escolhe. */
  fixedPeriod: { start: string; end: string } | null
  compare: boolean
  chart: ChartType
  stacked: boolean
  limit: number
  visibility: Visibility
  roleIds: string[]
  styles: Record<string, MetricStyle>
  editable: boolean
  ownerUserId: string | null
}

export const SOURCE_PREFERENCE: MetricSource[] = ['gam', 'page_views', 'gam_key_values']
export const TIME_DIMENSIONS = ['date', 'week', 'month', 'hour']
const AXIS_CHARTS: ChartType[] = ['line', 'bar', 'area']
const STACKABLE: ChartType[] = ['bar', 'area']
const GREEN_HUE = 135
const DEFAULT_LIMIT = 100
export const MAX_SERIES = 10
export const SERIES_COLORS: SeriesColor[] = ['lime', 'cyan', 'magenta', 'violet', 'orange', 'yellow', 'red']
/** Ordem das cores quando a segunda dimensão divide o gráfico em séries. */
export const SPLIT_COLORS: SeriesColor[] = ['cyan', 'magenta', 'lime', 'orange', 'violet', 'yellow', 'red']

/** Rascunho de um relatório novo: receita por dia, em linha, nos últimos 30 dias. */
export function emptyDraft(name = ''): ReportDraft {
  return {
    id: null,
    name,
    description: null,
    metrics: ['revenue'],
    dimensions: ['date'],
    filters: [],
    period: 'last_30_days',
    fixedPeriod: null,
    compare: false,
    chart: 'line',
    stacked: false,
    limit: DEFAULT_LIMIT,
    visibility: 'private',
    roleIds: [],
    styles: {},
    editable: true,
    ownerUserId: null,
  }
}

/** As fontes em que uma métrica (do catálogo ou personalizada) pode ser pedida. */
function metricSources(key: string, catalog: MetricCatalog): MetricSource[] {
  const metric = catalog.metrics.find((item) => item.key === key) ?? catalog.custom_metrics.find((item) => item.query_key === key)
  return metric?.sources ?? []
}

/** As fontes em que uma dimensão existe. */
function dimensionSources(key: string, catalog: MetricCatalog): MetricSource[] {
  return catalog.dimensions.find((item) => item.key === key)?.sources ?? []
}

/** A fonte da consulta: a preferida entre as que todos os campos aceitam; nenhuma, vazio. */
export function pickSource(metrics: string[], dimensions: string[], filterFields: string[], catalog: MetricCatalog): MetricSource | null {
  const lists = [
    ...metrics.map((key) => metricSources(key, catalog)),
    ...[...dimensions, ...filterFields].map((key) => dimensionSources(key, catalog)),
  ]
  return SOURCE_PREFERENCE.find((source) => lists.every((list) => list.includes(source))) ?? null
}

/** Se o campo pode entrar sem deixar a consulta sem fonte (o já escolhido sempre pode sair). */
export function fieldAvailable(field: { kind: 'metric' | 'dimension'; key: string }, draft: ReportDraft, catalog: MetricCatalog): boolean {
  const filterFields = draft.filters.map((item) => item.field)
  if (field.kind === 'metric') {
    if (draft.metrics.includes(field.key)) return true
    return pickSource([...draft.metrics, field.key], draft.dimensions, filterFields, catalog) !== null
  }
  if (draft.dimensions.includes(field.key)) return true
  return pickSource(draft.metrics, [...draft.dimensions, field.key], filterFields, catalog) !== null
}

/** Se o gráfico serve para a quantidade de métricas e dimensões (as mesmas regras do core). */
export function chartAllowed(chart: ChartType, metricCount: number, dimensionCount: number): boolean {
  if (AXIS_CHARTS.includes(chart)) return dimensionCount === 1 || (dimensionCount === 2 && metricCount === 1)
  if (chart === 'pie') return metricCount === 1 && dimensionCount === 1
  if (chart === 'kpi') return metricCount === 1 && dimensionCount === 0
  if (chart === 'funnel') return metricCount >= 2 && dimensionCount === 0
  return true
}

/** O mesmo gráfico se ainda serve; senão, a tabela. */
function fittingChart(chart: ChartType, metricCount: number, dimensionCount: number): ChartType {
  return chartAllowed(chart, metricCount, dimensionCount) ? chart : 'table'
}

/** Troca as métricas e tira dimensões, filtros e estilos que ficaram sem fonte ou sem métrica. */
export function withMetrics(draft: ReportDraft, metrics: string[], catalog: MetricCatalog): ReportDraft {
  const dimensions: string[] = []
  for (const key of draft.dimensions) {
    if (pickSource(metrics, [...dimensions, key], [], catalog) !== null) dimensions.push(key)
  }
  const filters: DraftFilter[] = []
  for (const item of draft.filters) {
    if (pickSource(metrics, dimensions, [...filters.map((kept) => kept.field), item.field], catalog) !== null) filters.push(item)
  }
  const styles = Object.fromEntries(Object.entries(draft.styles).filter(([key]) => metrics.includes(key)))
  return { ...draft, metrics, dimensions, filters, styles, chart: fittingChart(draft.chart, metrics.length, dimensions.length) }
}

/** Troca as dimensões e volta para a tabela se o gráfico deixou de servir. */
export function withDimensions(draft: ReportDraft, dimensions: string[], _catalog: MetricCatalog): ReportDraft {
  return { ...draft, dimensions, chart: fittingChart(draft.chart, draft.metrics.length, dimensions.length) }
}

/** O eixo do gráfico (a dimensão de tempo, se houver) e a dimensão que divide em séries. */
export function axisSplit(dimensions: string[]): { axis: string | null; split: string | null } {
  if (dimensions.length < 2) return { axis: dimensions[0] ?? null, split: null }
  const axis = dimensions.find((key) => TIME_DIMENSIONS.includes(key)) ?? dimensions[0] ?? null
  return { axis, split: dimensions.find((key) => key !== axis) ?? null }
}

/** O matiz da aparência: 135 (verde) a 0 (vermelho), passando aos poucos entre o início e o fim. */
export function scaleHue(scale: MetricScale, value: number): number {
  const span = scale.to - scale.from
  const ratio = span <= 0 ? (value >= scale.to ? 1 : 0) : Math.min(1, Math.max(0, (value - scale.from) / span))
  return scale.mode === 'green_red' ? GREEN_HUE * (1 - ratio) : GREEN_HUE * ratio
}

/** O erro da aparência (dois números, o início menor que o fim) ou vazio. */
export function scaleError(scale: MetricScale): Key | null {
  return Number.isFinite(scale.from) && Number.isFinite(scale.to) && scale.from < scale.to ? null : 'report.scaleOrder'
}

/** A ordem: o tempo crescente no eixo dos gráficos de eixo; senão, a primeira métrica decrescente. */
function orderOf(draft: ReportDraft): { field: string; descending: boolean }[] {
  const { axis } = axisSplit(draft.dimensions)
  if (AXIS_CHARTS.includes(draft.chart) && axis && TIME_DIMENSIONS.includes(axis)) return [{ field: axis, descending: false }]
  const first = draft.metrics[0]
  return first ? [{ field: first, descending: true }] : []
}

/** A consulta que a API roda, sem a moeda. */
function savedQuery(draft: ReportDraft, catalog: MetricCatalog): SavedQuery {
  const filters = draft.filters.filter((item) => item.values.length > 0)
  return {
    source: pickSource(draft.metrics, draft.dimensions, filters.map((item) => item.field), catalog) ?? 'gam',
    metrics: draft.metrics,
    period: draft.fixedPeriod ?? { preset: draft.period },
    dimensions: draft.dimensions,
    filters: filters.map((item) => ({ field: item.field, operator: 'in', values: item.values })),
    compare: draft.compare,
    order: orderOf(draft),
    limit: draft.limit,
  }
}

/** A consulta da prévia, na moeda de quem vê. */
export function toQuery(draft: ReportDraft, currency: string, catalog: MetricCatalog): ReportQuery {
  return { ...savedQuery(draft, catalog), currency }
}

/** O formulário de salvar: só as métricas com cor ou aparência e só os papéis de ``roles``. */
export function toInput(draft: ReportDraft, catalog: MetricCatalog): SavedReportInput {
  const options: ChartOptions = {}
  if (STACKABLE.includes(draft.chart) && draft.stacked) options.stacked = true
  const styles = Object.fromEntries(
    Object.entries(draft.styles).filter(([key, style]) => draft.metrics.includes(key) && (style.color || style.scale)),
  )
  if (Object.keys(styles).length) options.metrics = styles
  return {
    name: draft.name.trim(),
    description: draft.description?.trim() || null,
    query: savedQuery(draft, catalog),
    chart_type: draft.chart,
    chart_options: options,
    visibility: draft.visibility,
    role_ids: draft.visibility === 'roles' ? draft.roleIds : [],
  }
}

/** Os campos da consulta salva no formato do rascunho. */
function fromQuery(query: SavedQuery): Pick<ReportDraft, 'metrics' | 'dimensions' | 'filters' | 'period' | 'fixedPeriod' | 'compare' | 'limit'> {
  const fixed = !query.period.preset && query.period.start && query.period.end ? { start: query.period.start, end: query.period.end } : null
  return {
    metrics: [...query.metrics],
    dimensions: [...query.dimensions],
    filters: query.filters.map((item) => ({ field: item.field, values: [...item.values] })),
    period: query.period.preset ?? 'last_30_days',
    fixedPeriod: fixed,
    compare: query.compare,
    limit: query.limit,
  }
}

/** O rascunho de um relatório salvo. */
export function fromReport(report: SavedReport): ReportDraft {
  return {
    ...emptyDraft(report.name),
    ...fromQuery(report.query),
    id: report.id,
    description: report.description,
    chart: report.chart_type,
    stacked: !!report.chart_options.stacked,
    visibility: report.visibility,
    roleIds: [...report.role_ids],
    styles: { ...(report.chart_options.metrics ?? {}) },
    editable: report.editable,
    ownerUserId: report.owner_user_id,
  }
}

/** O rascunho de um modelo pronto, com o nome no idioma da pessoa; nasce privado e dela. */
export function fromTemplate(template: ReportTemplate, lang: Lang): ReportDraft {
  return {
    ...emptyDraft(template.name[lang] ?? template.name.pt),
    ...fromQuery(template.query),
    chart: template.chart_type,
    stacked: !!template.chart_options.stacked,
    styles: { ...(template.chart_options.metrics ?? {}) },
  }
}

/** A palavra da fórmula que termina no cursor (o que o autocompletar procura). */
export function wordAt(text: string, cursor: number): { word: string; start: number } {
  const word = /[A-Za-z0-9_.]*$/.exec(text.slice(0, cursor))?.[0] ?? ''
  return { word, start: cursor - word.length }
}

/** Troca a palavra do cursor pela chave escolhida, com um espaço depois. */
export function completeAt(text: string, cursor: number, key: string): { text: string; cursor: number } {
  const { start } = wordAt(text, cursor)
  const inserted = `${key} `
  return { text: `${text.slice(0, start)}${inserted}${text.slice(cursor)}`, cursor: start + inserted.length }
}

/** A cor da paleta como variável CSS (o tom claro e o escuro ficam no styles.css). */
export function seriesColor(color: SeriesColor | undefined): string | undefined {
  return color ? `var(--series-${color})` : undefined
}

export interface SplitSeries {
  axisValues: (string | null)[]
  series: { value: string | null; values: (number | null)[] }[]
  /** Quantas séries ficaram de fora por passar de ``MAX_SERIES``. */
  hidden: number
}

/** A segunda dimensão em séries: o eixo na ordem das linhas, as séries pela soma, até 10. */
export function splitSeries(rows: ReportRow[], axis: string, split: string, metric: string): SplitSeries {
  const axisValues = [...new Set(rows.map((row) => row.dimensions[axis] ?? null))]
  const position = new Map(axisValues.map((value, index) => [value, index]))
  const groups = new Map<string | null, (number | null)[]>()
  for (const row of rows) {
    const key = row.dimensions[split] ?? null
    const values = groups.get(key) ?? axisValues.map(() => null)
    values[position.get(row.dimensions[axis] ?? null) ?? 0] = toNumber(row.metrics[metric])
    groups.set(key, values)
  }
  /** A soma da série, para ordenar as maiores primeiro. */
  const total = (values: (number | null)[]) => values.reduce<number>((sum, value) => sum + (value ?? 0), 0)
  const series = [...groups.entries()]
    .map(([value, values]) => ({ value, values }))
    .sort((first, second) => total(second.values) - total(first.values))
  return { axisValues, series: series.slice(0, MAX_SERIES), hidden: Math.max(0, series.length - MAX_SERIES) }
}

/** O valor de uma dimensão como a pessoa lê: nome do site, data curta, hora, país; vazio é vazio. */
export function dimensionText(dimension: string, value: string | null, labels: Record<string, Record<string, string>>, locale: string): string | null {
  if (value === null) return null
  if (dimension === 'date' || dimension === 'week') return shortDay(value, locale)
  if (dimension === 'month') return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value.slice(0, 7)}-01T00:00:00Z`))
  if (dimension === 'hour') return hourLabel(Number(value))
  if (dimension === 'country') return countryName(value, locale)
  return labels[dimension]?.[value] ?? value
}

/** O nome (no idioma) e o formato de uma métrica do catálogo ou personalizada. */
export function metricInfo(key: string, catalog: MetricCatalog, lang: Lang): { label: string; format: MetricFormat } {
  const metric = catalog.metrics.find((item) => item.key === key)
  if (metric) return { label: metric.label[lang], format: metric.format }
  const custom = catalog.custom_metrics.find((item) => item.query_key === key)
  return custom ? { label: custom.name, format: custom.format } : { label: key, format: 'number' }
}

export type BuilderState = 'new' | 'dirty' | 'saved'

/** Novo (nunca salvo), com alterações ou igual ao que está salvo (comparando o que iria para a API). */
export function builderState(draft: ReportDraft, saved: SavedReportInput | null, catalog: MetricCatalog): BuilderState {
  if (draft.id === null || saved === null) return 'new'
  return JSON.stringify(toInput(draft, catalog)) === JSON.stringify(saved) ? 'saved' : 'dirty'
}

/** Só se exporta o que está salvo: o arquivo sai do relatório gravado, não do rascunho. */
export function canExport(state: BuilderState): boolean {
  return state === 'saved'
}
