/** Formatos da API do Google Ads (iguais ao dto.py de modules/google_ads no avant-api). Dinheiro em texto decimal, na moeda da conta. */

export type GoogleAdsLoginStatus = 'ok' | 'revoked' | 'disconnected'
export type GoogleAdsAccountStatus = 'enabled' | 'canceled' | 'suspended' | 'closed'
export type GoogleAdsSuffixState = 'ok' | 'missing' | 'other'
export type GoogleAdsOnLimit = 'warn' | 'pause'
export type GoogleAdsLevel = 'campaign' | 'ad_group' | 'ad'
export type GoogleAdsReview = 'approved' | 'limited' | 'disapproved' | 'pending'
export type GoogleAdsChangeOrigin = 'avant' | 'rule' | 'limit' | 'google'
export type GoogleAdsAlertKind = 'limit_paused' | 'limit_near' | 'limit_reached' | 'login_revoked' | 'ad_disapproved' | 'account_suspended' | 'suffix_other' | 'bad_terms'

export interface GoogleAdsPersonRef {
  id: string
  name: string
  email: string
}

export interface GoogleAdsLogin {
  id: string
  email: string
  google_user_id: string
  status: GoogleAdsLoginStatus
  connected_by: GoogleAdsPersonRef | null
  connected_at: string
  last_synced_at: string | null
  last_error: string | null
  account_count: number
}

export interface GoogleAdsAccount {
  id: string
  company_id: string
  customer_id: string
  name: string
  manager_customer_id: string | null
  manager_name: string | null
  currency: string
  time_zone: string
  status: GoogleAdsAccountStatus
  login_id: string | null
  login_email: string | null
  suffix_state: GoogleAdsSuffixState
  url_suffix: string | null
  site_id: string | null
  holder: GoogleAdsPersonRef | null
  daily_limit: string | null
  monthly_limit: string | null
  on_limit: GoogleAdsOnLimit
  month_spend: string
  synced_at: string | null
}

export interface GoogleAdsAccountInput {
  site_id: string | null
  user_id: string | null
  daily_limit: string | null
  monthly_limit: string | null
  on_limit: GoogleAdsOnLimit
}

export interface GoogleAdsPerson {
  person: GoogleAdsPersonRef
  account_ids: string[]
  daily_limit: string | null
  monthly_limit: string | null
}

export interface GoogleAdsPersonInput {
  account_ids: string[]
  daily_limit: string | null
  monthly_limit: string | null
}

export interface GoogleAdsAccountRef {
  id: string
  customer_id: string
  name: string
  currency: string
}

export interface GoogleAdsTotals {
  spend: string
  impressions: number
  clicks: number
  conversions: number
  cpc: string | null
  ctr: number | null
  revenue: string | null
  visits: number | null
  profit: string | null
  roi: number | null
}

export interface GoogleAdsObject {
  id: string
  external_id: string
  level: GoogleAdsLevel
  name: string
  parent_external_id: string | null
  campaign_external_id: string
  status: string
  active: boolean
  channel_type: string | null
  bidding_strategy: string | null
  budget: string | null
  cpc_bid: string | null
  ad_type: string | null
  final_url: string | null
  review: GoogleAdsReview | null
  review_reasons: string[]
  synced_at: string
  account: GoogleAdsAccountRef
  company_id: string
  totals: GoogleAdsTotals
}

export interface GoogleAdsParent {
  external_id: string
  name: string
  bidding_strategy: string | null
  channel_type: string | null
}

export interface GoogleAdsObjectDetail extends GoogleAdsObject {
  daily: { day: string; totals: GoogleAdsTotals }[]
  campaign: GoogleAdsParent | null
  ad_group: GoogleAdsParent | null
}

export interface GoogleAdsKeyword {
  id: string
  criterion_id: string
  target_id: string
  ad_group_external_id: string
  campaign_external_id: string
  text: string
  match_type: string
  status: string
  active: boolean
  cpc_bid: string | null
  quality_score: number | null
  totals: GoogleAdsTotals
}

/** Um termo de pesquisa (``detail`` é a palavra-chave que casou) ou um posicionamento (``detail`` é o tipo). */
export interface GoogleAdsTerm {
  text: string
  detail: string
  totals: GoogleAdsTotals
}

export interface GoogleAdsChange {
  id: string
  company_id: string
  account_id: string
  origin: GoogleAdsChangeOrigin
  what: string
  data: Record<string, unknown>
  happened_at: string
  object_external_id: string | null
  level: GoogleAdsLevel | null
  object_name: string | null
  user_id: string | null
  actor_name: string | null
}

export interface GoogleAdsAlert {
  id: string
  company_id: string
  kind: GoogleAdsAlertKind
  created_at: string
  account: GoogleAdsAccountRef | null
  login_id: string | null
  object_external_id: string | null
  data: Record<string, unknown>
  read: boolean
}

export interface GoogleAdsAlertSetting {
  kind: GoogleAdsAlertKind
  owner: boolean
  users: boolean
  connector: boolean
  email: boolean
}

/** A soma de todo o filtro numa moeda só, igual ao ``GoogleAdsSummaryOut`` da API. */
export interface GoogleAdsSummary {
  currency: string
  spend: string
  impressions: number
  clicks: number
  conversions: number
  cpc: string | null
  revenue: string | null
  profit: string | null
  roi: number | null
}

export type GoogleAdsRuleAction = 'scale_up' | 'scale_down' | 'pause' | 'cpc_up' | 'cpc_down' | 'keyword_pause' | 'held_by_limit' | 'failed'

/** O que mudou num lote de ligar ou pausar e o código do erro de cada item que o Google recusou. */
export interface GoogleAdsControlResult {
  done: string[]
  failed: Record<string, string>
}

export interface GoogleAdsBudget {
  external_id: string
  budget: string | null
}

export interface GoogleAdsCpc {
  criterion_id: string
  cpc: string | null
}

/** As regras de um objeto: na campanha ``scale`` mexe no orçamento; no grupo, no CPC das palavras-chave. */
export interface GoogleAdsRuleInput {
  scale: boolean
  up_roi: number
  up_by: number
  down_roi: number
  down_by: number
  pause: boolean
  min_roi: number
  days: number
  pause_keywords: boolean
}

export interface GoogleAdsRule extends GoogleAdsRuleInput {
  object_external_id: string
  level: GoogleAdsLevel
  enabled: boolean
  updated_at: string
  updated_by: string | null
}

export interface GoogleAdsRuleDecision {
  id: string
  object_external_id: string
  day: string
  action: GoogleAdsRuleAction
  decided_at: string
  roi: number | null
  data: Record<string, unknown>
}

export type GoogleAdsChannel = 'SEARCH' | 'DISPLAY' | 'DEMAND_GEN'
export type GoogleAdsBidding = 'MANUAL_CPC' | 'MAXIMIZE_CLICKS' | 'MAXIMIZE_CONVERSIONS'
export type GoogleAdsMatchType = 'EXACT' | 'PHRASE' | 'BROAD'
export type GoogleAdsOptionKind = 'location' | 'language' | 'audience'
export type GoogleAdsJobKind = 'create' | 'edit'
export type GoogleAdsJobState = 'queued' | 'running' | 'done' | 'failed'

export interface GoogleAdsKeywordInput {
  text: string
  match_type: GoogleAdsMatchType
}

/** Um anúncio responsivo: caminho no site da conta, textos e as imagens já enviadas (recursos do Google). */
export interface GoogleAdsAdInput {
  link_path: string
  headlines: string[]
  descriptions: string[]
  path1: string
  path2: string
  long_headline: string
  business_name: string
  marketing_images: string[]
  square_images: string[]
  logo_images: string[]
}

export interface GoogleAdsAdGroupInput {
  name: string
  ads: GoogleAdsAdInput[]
  keywords: GoogleAdsKeywordInput[]
  audiences: string[]
  cpc: string | null
}

/** A campanha nova: sempre nasce pausada, com orçamento diário próprio. */
export interface GoogleAdsDraftInput {
  account_id: string
  name: string
  channel: GoogleAdsChannel
  budget: string | null
  bidding: GoogleAdsBidding
  ad_groups: GoogleAdsAdGroupInput[]
  locations: string[]
  languages: string[]
}

export interface GoogleAdsEditInput {
  name: string | null
  cpc: string | null
  ad: GoogleAdsAdInput | null
}

export interface GoogleAdsJob {
  id: string
  account_id: string
  kind: GoogleAdsJobKind
  state: GoogleAdsJobState
  target_level: GoogleAdsLevel | null
  target_external_id: string | null
  created: Record<string, unknown>
  error_code: string | null
  error_message: string | null
  created_at: string
  updated_at: string
  finished_at: string | null
}

export interface GoogleAdsOption {
  id: string
  name: string
  detail: string
}

export interface GoogleAdsMedia {
  asset: string
  name: string
}
