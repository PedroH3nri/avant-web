/** Formatos da API do Controle de custos (iguais ao dto.py de cost_control no avant-api). Dinheiro na moeda pedida. */

export type CostIntegration = 'facebook' | 'google_ads'

export interface CostPersonRef {
  id: string
  name: string
  email: string
}

export interface CostControlAccount {
  integration: CostIntegration
  account_id: string
  name: string
  account_currency: string
  site_id: string | null
  site_domain: string | null
  person: CostPersonRef | null
  /** Ninguém usa a conta: ela fica com o dono da Empresa. */
  by_owner: boolean
  spend: string
  /** Sem site ligado à conta, não há receita. */
  revenue: string | null
  month_spend: string
  monthly_limit: string | null
}

export interface CostControlDay {
  day: string
  spend: string
  revenue: string
}

export interface CostControl {
  currency: string
  start: string
  end: string
  accounts: CostControlAccount[]
  days: CostControlDay[]
}
