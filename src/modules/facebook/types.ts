/** Formatos da API do Facebook (iguais ao dto.py de modules/facebook no avant-api). Dinheiro em texto decimal, na moeda da conta. */

export type FacebookProfileStatus = 'ok' | 'expired' | 'checkpoint' | 'disconnected'
export type FacebookAccountState = 'active' | 'unsettled' | 'disabled' | 'closed' | 'pending'
export type FacebookOnLimit = 'warn' | 'pause'
export type FacebookLevel = 'campaign' | 'adset' | 'ad'
export type FacebookReview = 'pending' | 'approved' | 'rejected'
export type FacebookChangeOrigin = 'avant' | 'rule' | 'limit' | 'facebook'
export type FacebookAlertKind = 'limit_paused' | 'limit_near' | 'limit_reached' | 'profile_expired' | 'ad_rejected' | 'account_unsettled' | 'account_disabled'

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

export type FacebookRuleAction = 'scale_up' | 'scale_down' | 'pause' | 'duplicate' | 'held_by_limit' | 'failed'

/** O que mudou num lote de ligar ou pausar e o código do erro de cada item que o Facebook recusou. */
export interface FacebookControlResult {
  done: string[]
  failed: Record<string, string>
}

/** O orçamento novo: o diário ou o vitalício, um dos dois. */
export interface FacebookBudgetInput {
  daily_budget?: string
  lifetime_budget?: string
}

export interface FacebookBudget {
  external_id: string
  daily_budget: string | null
  lifetime_budget: string | null
}

/** As três regras automáticas; ROI em pontos percentuais, passos em % do orçamento. */
export interface FacebookRuleInput {
  scale: boolean
  up_roi: number
  up_by: number
  down_roi: number
  down_by: number
  pause: boolean
  min_roi: number
  days: number
  duplicate: boolean
  duplicate_roi: number
}

export interface FacebookRule extends FacebookRuleInput {
  object_external_id: string
  level: FacebookLevel
  enabled: boolean
  updated_at: string
  updated_by: string | null
  last_duplicated_at: string | null
}

export interface FacebookRuleDecision {
  id: string
  object_external_id: string
  day: string
  action: FacebookRuleAction
  decided_at: string
  roi: number | null
  data: Record<string, unknown>
}

/** Os detalhes do erro facebook_limit_exceeded: qual limite, de quem e quanto ainda cabe. */
export interface FacebookLimitDetails {
  period: 'daily' | 'monthly'
  scope: 'account' | 'person'
  room: string
  currency: string
}

export type FacebookObjective = 'awareness' | 'traffic' | 'engagement' | 'leads' | 'app_promotion' | 'sales'
export type FacebookAdFormat = 'image' | 'video' | 'carousel'
export type FacebookListKind = 'pages' | 'instagram' | 'pixels' | 'audiences' | 'interests' | 'locations' | 'locales'
export type FacebookJobKind = 'create' | 'edit' | 'duplicate'
export type FacebookJobState = 'queued' | 'running' | 'done' | 'failed'
export type FacebookJobStep = 'media' | 'campaign' | 'adsets' | 'creatives' | 'ads' | 'activate'

/** Um item escolhido numa lista do Facebook: o id que ele deu e o nome para a tela. */
export interface FacebookPick {
  id: string
  name: string
  kind?: string
}

/** Um cartão do carrossel com a imagem já enviada. */
export interface FacebookCardInput {
  title: string
  path: string
  image_hash: string
}

/** Um anúncio do rascunho, igual ao FacebookAdIn da API. */
export interface FacebookAdInput {
  name: string
  format: FacebookAdFormat
  page_id: string
  texts: string[]
  titles: string[]
  path: string
  call_to_action: string
  instagram_id: string | null
  description: string
  display_link: string
  image_hash: string | null
  video_id: string | null
  cards: FacebookCardInput[]
}

/** Um conjunto do rascunho, igual ao FacebookAdsetIn da API. */
export interface FacebookAdsetInput {
  name: string
  optimization: string
  countries: string[]
  ads: FacebookAdInput[]
  start_time: string | null
  end_time: string | null
  budget: string | null
  places: FacebookPick[]
  age_min: number
  age_max: number
  gender: 'all' | 'men' | 'women'
  locales: FacebookPick[]
  advantage_audience: boolean
  interests: FacebookPick[]
  audiences: FacebookPick[]
  excluded_audiences: FacebookPick[]
  placements: string[]
  pixel_id: string | null
  event: string | null
}

/** A campanha nova, igual ao FacebookDraftIn da API. */
export interface FacebookDraftInput {
  account_id: string
  name: string
  objective: FacebookObjective
  adsets: FacebookAdsetInput[]
  budget_at: 'campaign' | 'adset'
  budget_kind: 'daily' | 'lifetime'
  budget: string | null
  special_categories: string[]
  bid: 'volume' | 'cost_cap' | 'bid_cap'
  bid_amount: string | null
  spend_cap: string | null
  start_active: boolean
}

/** O que muda num objeto que já existe: nome e, conforme o nível, limite de gasto, público ou anúncio. */
export interface FacebookEditInput {
  name?: string | null
  spend_cap?: string | null
  adset?: FacebookAdsetInput | null
  ad?: FacebookAdInput | null
}

/** Um job de criar, editar ou duplicar: o passo, os ids criados, o erro e o aviso. */
export interface FacebookJob {
  id: string
  account_id: string
  kind: FacebookJobKind
  state: FacebookJobState
  step: FacebookJobStep | null
  target_external_id: string | null
  created: Record<string, unknown>
  error_code: string | null
  error_message: string | null
  warning_code: string | null
  created_at: string
  updated_at: string
  finished_at: string | null
}

export interface FacebookOption {
  id: string
  name: string
  detail: string
}

export interface FacebookMedia {
  kind: 'image' | 'video'
  ref: string
}

/** A soma de todo o filtro numa moeda só, igual ao ``FacebookSummaryOut`` da API. */
export interface FacebookSummary {
  currency: string
  spend: string
  impressions: number
  link_clicks: number
  cpc: string | null
  revenue: string | null
  profit: string | null
  roi: number | null
}
