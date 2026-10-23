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
  is_internal: boolean // a Company Groone
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

export type CompanyPlan = 'groone_network' | 'external'
export type CompanyStatus = 'active' | 'suspended'

export interface CompanyDetail {
  id: string
  name: string
  slug: string
  accent_color: string | null
  plan: CompanyPlan
  status: CompanyStatus
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

export type MembershipStatus = 'active' | 'suspended' | 'removed'

export interface RoleRef {
  id: string
  key: string
  name: Localized
}

export interface Member {
  id: string // id da Membership
  user: UserRef
  role: RoleRef | null
  status: MembershipStatus
  is_owner: boolean
  joined_at: string
}

export interface Invitation {
  id: string
  email: string
  role_id: string | null
  status: 'pending' | 'accepted' | 'canceled' | 'expired'
  expires_at: string
  invited_by: string
}

export interface Role {
  id: string
  key: string
  name: Localized
  permissions: string[]
  site_scope: SiteScope
  is_system: boolean
  member_count: number
}

export interface Permission {
  key: string
  group: string
  name: Localized
}

export interface DirectPermission {
  permission: string
  effect: 'allow' | 'deny'
  expires_at: string | null
}

export interface MemberDetail extends Member {
  permissions: DirectPermission[]
}

export interface Site {
  id: string
  network_id: string
  domain: string
  approval_status: string | null
  status: 'active' | 'archived'
  synced_at: string
}

export interface SiteListItem extends Site {
  ad_units: number
}

export interface AdUnit {
  id: string
  network_id: string
  parent_id: string | null
  site_id: string | null
  site_manual: boolean
  name: string
  code: string | null
  status: 'active' | 'archived'
  synced_at: string
}

export interface SiteDetail extends Site {
  ad_units: AdUnit[]
  assigned_to: string[] | null
}

export interface SiteMember extends Member {
  via: 'assigned' | 'all'
}

export interface AuthSession {
  id: string
  created_at: string
  last_seen_at: string
  expires_at: string
  user_agent: string | null
  ip: string | null
  current: boolean
}

export interface GoogleStatus {
  available: boolean
  linked: boolean
}

export interface MfaSetup {
  secret: string
  uri: string
}

export interface RecoveryCodes {
  recovery_codes: string[]
}

export interface ApiKey {
  id: string
  name: string
  prefix: string
  permissions: string[]
  owner: UserRef
  created_at: string
  expires_at: string
  last_used_at: string | null
  revoked_at: string | null
}

export interface ApiKeyCreated extends ApiKey {
  token: string
}

// Painel interno (/api/v1/internal)

export interface Client {
  id: string
  name: string
  slug: string
  plan: CompanyPlan
  status: CompanyStatus
  seat_limit: number
  seats_used: number // pessoas mais convites pendentes
  owner: UserRef
}

export interface ClientDetail extends Client {
  members: Member[]
  invitations: Invitation[]
}

export interface OwnerInvitation {
  id: string
  email: string
  status: Invitation['status']
  seat_limit: number | null
  plan: CompanyPlan | null
  expires_at: string
  invited_by: string
}

export interface AuditEntry {
  id: string
  action: string
  actor_kind: string
  actor_user_id: string | null
  target_type: string | null
  target_id: string | null
  data: Record<string, unknown>
  created_at: string
}

export interface Person {
  user: UserRef
  status: 'active' | 'disabled'
  mfa_enabled: boolean
  last_login_at: string | null
  companies: { id: string; name: string; slug: string; is_internal: boolean }[]
}

export interface McmCandidate {
  id: string
  network_code: string
  display_name: string | null
  email: string
  delegation: string | null
  account_status: string
  first_seen_at: string
  last_seen_at: string
}
