/** Formatos da API (avant-api/src/avant_api/schemas.py). Datas em ISO 8601 UTC. */

export type Lang = 'pt' | 'en' | 'es'
export type Localized = Partial<Record<Lang, string>>
export type SiteScope = 'all' | 'assigned'

export interface Items<T> {
  items: T[]
  next_cursor: string | null
}

export interface UserRef {
  id: string
  email: string
  name: string
  locale: Lang
}

export interface CompanyRef {
  id: string
  name: string
  slug: string
  accent_color: string | null
  is_owner: boolean
}

export interface Me {
  user: UserRef
  companies: CompanyRef[]
  active_company_id: string | null
  permissions: string[]
  site_scope: SiteScope | null
  is_staff: boolean
  mfa_enabled: boolean
  mfa_setup_required: boolean
}

export interface LoginResult {
  mfa_required: boolean
  me: Me | null
}

export interface InvitationPreview {
  kind: 'owner' | 'team'
  email: string
  status: 'pending' | 'accepted' | 'canceled' | 'expired'
  expires_at: string
  company_name: string | null
  role_name: Localized | null
  account_exists: boolean
}

export interface CompanyDetail {
  id: string
  name: string
  slug: string
  accent_color: string | null
  plan: 'groone_network' | 'external'
  status: 'active' | 'suspended'
  seat_limit: number
  seats_used: number
  settings: Record<string, unknown>
}

export type NetworkStatus = 'pending' | 'connected' | 'error' | 'disconnected'

export interface SyncRun {
  id: string
  kind: 'test' | 'sites' | 'ad_units'
  status: 'running' | 'ok' | 'failed'
  started_at: string
  finished_at: string | null
  counts: Record<string, number>
  error_code: string | null
  error_message: string | null
}

export interface Network {
  id: string
  network_code: string
  display_name: string | null
  connection_type: 'service_account' | 'mcm'
  delegation: string | null
  status: NetworkStatus
  last_error: string | null
  failures: number
  last_checked_at: string | null
  last_synced_at: string | null
  sync_requested_at: string | null
  created_at: string
  sites: number
  last_runs: Partial<Record<SyncRun['kind'], SyncRun>>
}
