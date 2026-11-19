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
