/** Formatos da API do Facebook (iguais ao dto.py de modules/facebook no avant-api). Dinheiro em texto decimal, na moeda da conta. */

export type FacebookProfileStatus = 'ok' | 'expired' | 'checkpoint' | 'disconnected'
export type FacebookAccountState = 'active' | 'unsettled' | 'disabled' | 'closed' | 'pending'
export type FacebookOnLimit = 'warn' | 'pause'
export type FacebookLevel = 'campaign' | 'adset' | 'ad'
export type FacebookReview = 'pending' | 'approved' | 'rejected'
export type FacebookChangeOrigin = 'avant' | 'facebook'
export type FacebookAlertKind = 'limit_paused' | 'limit_near' | 'profile_expired' | 'ad_rejected' | 'account_unsettled' | 'account_disabled'

export interface FacebookPersonRef {
  id: string
  name: string
  email: string
}

export interface FacebookProfile {
  id: string
  name: string
  facebook_user_id: string
  status: FacebookProfileStatus
  connected_by: FacebookPersonRef | null
  connected_at: string
  token_expires_at: string | null
  last_synced_at: string | null
  last_error: string | null
  account_count: number
}

export interface FacebookAccount {
  id: string
  company_id: string
  external_id: string
  name: string
  business_id: string | null
  business_name: string | null
  currency: string
  time_zone: string
  state: FacebookAccountState
  profile_id: string | null
  profile_name: string | null
  site_id: string | null
  holder: FacebookPersonRef | null
  daily_limit: string | null
  monthly_limit: string | null
  on_limit: FacebookOnLimit
  month_spend: string
  synced_at: string | null
}

export interface FacebookAccountInput {
  site_id: string | null
  user_id: string | null
  daily_limit: string | null
  monthly_limit: string | null
  on_limit: FacebookOnLimit
}

export interface FacebookPerson {
  person: FacebookPersonRef
  account_ids: string[]
  daily_limit: string | null
  monthly_limit: string | null
}

export interface FacebookPersonInput {
  account_ids: string[]
  daily_limit: string | null
  monthly_limit: string | null
}

export interface FacebookAccountRef {
  id: string
  external_id: string
  name: string
  currency: string
}

export interface FacebookTotals {
  spend: string
  impressions: number
  reach: number
  clicks: number
  link_clicks: number
  landing_page_views: number
  cpc: string | null
  ctr: number | null
  revenue: string | null
  visits: number | null
  profit: string | null
  roi: number | null
}

export interface FacebookObject {
  id: string
  external_id: string
  level: FacebookLevel
  name: string
  parent_external_id: string | null
  campaign_external_id: string
  status: string
  effective_status: string
  active: boolean
  objective: string | null
  daily_budget: string | null
  lifetime_budget: string | null
  review: FacebookReview | null
  review_reasons: string[]
  url_tags: string | null
  synced_at: string
  account: FacebookAccountRef
  company_id: string
  totals: FacebookTotals
}

export interface FacebookObjectDetail extends FacebookObject {
  daily: { day: string; totals: FacebookTotals }[]
  countries: { country: string; totals: FacebookTotals }[]
  campaign: { external_id: string; name: string } | null
  adset: { external_id: string; name: string } | null
}

export interface FacebookChange {
  id: string
  company_id: string
  account_id: string
  origin: FacebookChangeOrigin
  what: string
  data: Record<string, unknown>
  happened_at: string
  object_external_id: string | null
  level: FacebookLevel | null
  object_name: string | null
  user_id: string | null
  actor_name: string | null
}

export interface FacebookAlert {
  id: string
  company_id: string
  kind: FacebookAlertKind
  created_at: string
  account: FacebookAccountRef | null
  profile_id: string | null
  object_external_id: string | null
  data: Record<string, unknown>
  read: boolean
}

export interface FacebookAlertSetting {
  kind: FacebookAlertKind
  owner: boolean
  users: boolean
  connector: boolean
  email: boolean
}
