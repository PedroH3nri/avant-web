/** Formatos da API do domínio reports (iguais ao dto.py dele no avant-api). Datas em ISO 8601 UTC. */

import type { Lang } from '@/lib/types'

export type MetricKind = 'sum' | 'ratio'

export type MetricFormat = 'number' | 'currency' | 'percent'

export type MetricSource = 'gam' | 'gam_key_values' | 'page_views'

export type RelativePeriod = 'today' | 'yesterday' | 'last_7_days' | 'last_30_days' | 'this_month' | 'last_month'

export type FilterOperator = 'eq' | 'neq' | 'in' | 'not_in' | 'contains' | 'gt' | 'gte' | 'lt' | 'lte'

export interface MetricDef {
  key: string
  label: Record<Lang, string>
  kind: MetricKind
  format: MetricFormat
  sources: MetricSource[]
}

export interface DimensionDef {
  key: string
  label: Record<Lang, string>
  sources: MetricSource[]
  filterable: boolean
}

export interface MetricCatalog {
  metrics: MetricDef[]
  /** As métricas personalizadas da Empresa ativa. */
  custom_metrics: CustomCatalogMetric[]
  dimensions: DimensionDef[]
  operators: FilterOperator[]
  periods: RelativePeriod[]
  max_days: number
  max_limit: number
}

export interface ReportPeriod {
  preset?: RelativePeriod | null
  start?: string | null
  end?: string | null
}

export interface ReportQuery {
  source?: MetricSource
  metrics: string[]
  period: ReportPeriod
  dimensions?: string[]
  filters?: { field: string; operator: FilterOperator; values: string[] }[]
  compare?: boolean
  order?: { field: string; descending?: boolean }[]
  limit?: number
  currency?: string
}

/** Valores decimais chegam como texto, para não perder centavos no caminho. */
export type MetricValues = Record<string, string | null>

export interface ReportRow {
  dimensions: Record<string, string | null>
  metrics: MetricValues
  previous: MetricValues | null
}

export interface ReportRange {
  start: string
  end: string
}

export interface ReportResult {
  period: ReportRange
  rows: ReportRow[]
  totals: MetricValues
  previous_period: ReportRange | null
  previous_totals: MetricValues | null
  truncated: boolean
  labels: Record<string, Record<string, string>>
  currency: string
}

/** Métrica personalizada da Empresa como o catálogo mostra (chave da consulta e fontes). */
export interface CustomCatalogMetric {
  query_key: string
  name: string
  description: string | null
  format: MetricFormat
  decimals: number
  sources: MetricSource[]
}

export type ChartType = 'table' | 'line' | 'bar' | 'area' | 'pie' | 'kpi' | 'funnel'

export type Visibility = 'private' | 'company' | 'roles'

export type SeriesColor = 'lime' | 'cyan' | 'magenta' | 'violet' | 'orange' | 'yellow' | 'red'

export type ScaleMode = 'green_red' | 'red_green'

export interface MetricScale {
  mode: ScaleMode
  from: number
  to: number
}

export interface MetricStyle {
  color?: SeriesColor
  scale?: MetricScale
}

export interface ChartOptions {
  stacked?: boolean
  metrics?: Record<string, MetricStyle>
}

/** A consulta salva: a de ``/reports/query`` sem a moeda (cada um roda na sua). */
export interface SavedQuery {
  source: MetricSource
  metrics: string[]
  period: ReportPeriod
  dimensions: string[]
  filters: { field: string; operator: FilterOperator; values: string[] }[]
  compare: boolean
  order: { field: string; descending: boolean }[]
  limit: number
}

export interface SavedReport {
  id: string
  name: string
  description: string | null
  query: SavedQuery
  chart_type: ChartType
  chart_options: ChartOptions
  visibility: Visibility
  role_ids: string[]
  owner_user_id: string
  created_by: string
  created_at: string
  updated_at: string
  /** A pessoa pode editar e apagar (é a dona ou tem reports.manage). */
  editable: boolean
}

export interface SavedReportInput {
  name: string
  description: string | null
  query: ReportQuery
  chart_type: ChartType
  chart_options: ChartOptions
  visibility: Visibility
  role_ids: string[]
}

export interface ReportTemplate {
  key: string
  name: Record<Lang, string>
  query: SavedQuery
  chart_type: ChartType
  chart_options: ChartOptions
}

export interface CustomMetric {
  id: string
  key: string
  query_key: string
  name: string
  description: string | null
  formula: string
  format: MetricFormat
  decimals: number
  sources: MetricSource[]
  created_at: string
  updated_at: string
}

export interface CustomMetricInput {
  name: string
  formula: string
  format: MetricFormat
  decimals: number
  description: string | null
}

export interface CustomMetricCheckInput extends CustomMetricInput {
  metric_id?: string | null
  sample?: Record<string, string> | null
}

export interface CustomMetricCheck {
  valid: boolean
  code: string | null
  error: string | null
  variables: string[]
  /** A fórmula calculada sobre a amostra; vazio sem amostra ou sem denominador. */
  value: string | null
}
