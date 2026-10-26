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
