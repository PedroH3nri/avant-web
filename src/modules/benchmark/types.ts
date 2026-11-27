/** Formatos da API do Comparativo com a rede (iguais ao `dto.py` do módulo benchmark do avant-api). */

export type BenchmarkMetric = 'session_rpm' | 'ecpm' | 'fill_rate' | 'viewability' | 'pages_per_session'

export interface BenchmarkRow {
  metric: BenchmarkMetric
  value: string | null
  median: string
  p75: string
  percentile: number | null
}

export interface SiteBenchmark {
  site_id: string
  domain: string
  category: string | null
  country: string | null
  countries: string[]
  eligible: boolean
  size: number
  rows: BenchmarkRow[]
}
