/** Formatos da Saúde da carteira, iguais aos DTOs do avant-api (modules/internal/portfolio_health). */

export type HealthStatus = 'healthy' | 'attention' | 'at_risk'
export type HealthSignal = 'revenue' | 'usage' | 'install' | 'nps' | 'onboarding'

export interface PortfolioHealthRow {
  client_id: string
  client_name: string
  score: number
  status: HealthStatus
  main_reason: HealthSignal | null
  /** Em dólares, como texto decimal. */
  revenue_30d: string
  /** Em %, contra os 30 dias anteriores; vazia sem receita antes. */
  revenue_change: string | null
  last_access: string | null
  manager_id: string | null
  manager_name: string | null
  day: string
  revenue_drop: boolean
}

export interface PortfolioHealth {
  tracked: number
  at_risk: number
  attention: number
  revenue_at_risk: string
  rows: PortfolioHealthRow[]
}

export interface HealthSignalScore {
  signal: HealthSignal
  points: number
  weight: number
  values: Record<string, string | number | boolean | null>
}

export interface HealthDay {
  day: string
  score: number
  status: HealthStatus
}

export interface ClientHealth {
  row: PortfolioHealthRow
  signals: HealthSignalScore[]
  history: HealthDay[]
}

export interface PortfolioHealthSettings {
  drop_percent: number
  hubspot_task: boolean
}
