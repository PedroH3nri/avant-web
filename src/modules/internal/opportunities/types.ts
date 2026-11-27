/** Formatos da API das Oportunidades de receita (iguais ao dto.py de modules/internal/opportunities no avant-api). Valores em dólar como texto decimal; datas em ISO 8601 UTC. */

export type OpportunityRule = 'reward' | 'cascade' | 'ads_txt' | 'anchor' | 'country_floor' | 'lazy_load'
export type OpportunityConfidence = 'high' | 'medium' | 'low'
export type OpportunityStatus = 'open' | 'task' | 'dismissed' | 'done'

/** Uma oportunidade aberta de um site, com o ganho no mês, a parte da Groone e os números da evidência. */
export interface Opportunity {
  id: string
  rule: OpportunityRule
  subject: string
  status: OpportunityStatus
  site_id: string
  domain: string
  client_id: string | null
  client_name: string | null
  manager_id: string | null
  manager_name: string | null
  gain: string
  groone_gain: string
  confidence: OpportunityConfidence
  evidence: Record<string, string | number>
  opened_at: string
}

/** A tela: o ganho das abertas, a parte da Groone, as feitas no mês com o ganho real e as linhas. */
export interface OpportunityOverview {
  gain: string
  groone_gain: string
  done: number
  done_gain: string
  rows: Opportunity[]
}
