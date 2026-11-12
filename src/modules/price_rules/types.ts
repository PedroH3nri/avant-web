/** Formatos da API das regras de preço (iguais ao dto.py de modules/price_rules no avant-api). Valores em micros, na moeda da network do site. Datas em ISO 8601 UTC. */

export type PriceRuleModel = 'automatic' | 'cascade'
export type PriceRuleStatus = 'active' | 'paused' | 'disabled'
export type PriceRuleAction = 'up' | 'down' | 'hold' | 'initial'
export type PriceRuleReason =
  | 'manual'
  | 'stable'
  | 'pmr_down_floor'
  | 'pmr_up_over_roof'
  | 'insufficient_volume'
  | 'responses_server_drop'
  | 'initial_rule_creation'
  | 'fills_first'
  | 'fills_late'
  | 'no_new_data'
export type BlockKind = 'offerwall' | 'reward' | 'interstitial' | 'content' | 'anchor' | 'fixed'

/** Uma linha da lista de sites; `client` só no interno. */
export interface PriceRuleSiteSummary {
  site_id: string
  domain: string
  client: string | null
  active: boolean
  control_percent: number
  currency: string | null
  currency_supported: boolean
  automatic_blocks: number
  active_rules: number
}

export interface PriceRuleBlock {
  block: string
  model: PriceRuleModel
}

/** A configuração do site; `currency` vem vazia até a primeira sincronia do GAM e
 * `recommended_models` traz o modelo recomendado de cada bloco (sem o offerwall). */
export interface PriceRuleSite {
  site_id: string
  domain: string
  active: boolean
  control_percent: number
  currency: string | null
  currency_supported: boolean
  blocks: PriceRuleBlock[]
  available_blocks: string[]
  recommended_models: Record<string, PriceRuleModel>
  updated_at: string
}

export interface PriceRule {
  id: string
  site_id: string
  content_hash: string
  block: string
  kind: BlockKind
  model: PriceRuleModel
  country_code: string
  currency: string
  floor_micros: number
  status: PriceRuleStatus
  created_at: string
  updated_at: string
}

export interface PriceRuleConfig {
  pmr_floor: number
  pmr_emergency: number
  min_eligible_requests: number
  floor_min_micros: number
  floor_max_micros: number
  step_size: number
  drop_tiers: number
  automatic: boolean
  updated_at: string
}

/** A regra com os limites; `config` vazio até a primeira hora do motor. `tiers_micros` são os degraus da moeda, os únicos floors aceitos. */
export interface PriceRuleDetails extends PriceRule {
  config: PriceRuleConfig | null
  tiers_micros: number[]
}

/** Os limites para gravar; sem `drop_tiers`, a API mantém a descida guardada (a Automática ignora). */
export type PriceRuleConfigInput = Omit<PriceRuleConfig, 'updated_at' | 'drop_tiers'> & { drop_tiers?: number }

export interface PriceRuleHistoryEntry {
  date: string
  hour: number
  action: PriceRuleAction
  reason: PriceRuleReason
  floor_before_micros: number
  floor_applied_micros: number
  created_at: string
}

/** Os números do GAM de uma hora da regra. */
export interface PriceRuleHour {
  date: string
  hour: number
  eligible_requests: number
  responses_served: number
  impressions: number
  revenue_micros: number
  pmr: number
  ecpm_micros: number
}

/** Os números de uma tentativa da Cascata numa hora (key `groone_try`). */
export interface CascadeTry {
  eligible_requests: number
  responses_served: number
  impressions: number
  revenue_micros: number
}

/** Uma hora da regra Cascata: o ponto de partida e as quatro tentativas, da 1ª à 4ª. */
export interface CascadeHour {
  date: string
  hour: number
  floor_micros: number
  tries: CascadeTry[]
}
