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
  /** Diz se é a Company Groone. */
  is_internal: boolean
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
  /** Vazio na Company Groone: limites valem só para clientes. */
  seat_limit: number | null
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
  /** O id é o da Membership. */
  id: string
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
  /** Vazio enquanto aguarda o GAM. */
  network_id: string | null
  domain: string
  approval_status: string | null
  status: 'active' | 'archived'
  synced_at: string | null
  /** Cadastrado à mão, o GAM ainda não trouxe. */
  awaiting_gam: boolean
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
  /** Pessoas mais convites pendentes. */
  seats_used: number
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

export type ContractStatus = 'active' | 'ended'
export type ContractSource = 'gam' | 'manual'

export interface ContractNetworkRef {
  id: string
  network_code: string
  display_name: string | null
  delegation: string | null
}

export interface ContractClientRef {
  id: string
  name: string
}

export interface Contract {
  id: string
  revshare: string
  status: ContractStatus
  source: ContractSource
  started_at: string
  ended_at: string | null
  notes: string | null
  created_by: string | null
  network: ContractNetworkRef
  company: ContractClientRef
}

export interface ContractSummary {
  id: string
  revshare: string
  source: ContractSource
  started_at: string
}

export interface ContractNetwork {
  network: ContractNetworkRef
  company: ContractClientRef
  active: ContractSummary | null
  manual: boolean
}

export type MetricKind = 'sum' | 'ratio'
export type MetricFormat = 'number' | 'currency' | 'percent'
export type MetricSource = 'gam' | 'gam_key_values'
export type RelativePeriod = 'today' | 'yesterday' | 'last_7_days' | 'last_30_days' | 'this_month' | 'last_month'
export type FilterOperator = 'eq' | 'neq' | 'in' | 'not_in' | 'contains' | 'gt' | 'gte' | 'lt' | 'lte'

export interface MetricDef {
  key: string
  label: Record<Lang, string>
  kind: MetricKind
  format: MetricFormat
}

export interface DimensionDef {
  key: string
  label: Record<Lang, string>
  sources: MetricSource[]
  filterable: boolean
}

export interface MetricCatalog {
  metrics: MetricDef[]
  dimensions: DimensionDef[]
  operators: FilterOperator[]
  periods: RelativePeriod[]
  max_days: number
  max_limit: number
}

export interface ReportPeriod {
  preset?: RelativePeriod | null
  start?: string | null
  end?: string | null
}

export interface ReportQuery {
  source?: MetricSource
  metrics: string[]
  period: ReportPeriod
  dimensions?: string[]
  filters?: { field: string; operator: FilterOperator; values: string[] }[]
  compare?: boolean
  order?: { field: string; descending?: boolean }[]
  limit?: number
}

/** Valores decimais chegam como texto, para não perder centavos no caminho. */
export type MetricValues = Record<string, string | null>

export interface ReportRow {
  dimensions: Record<string, string | null>
  metrics: MetricValues
  previous: MetricValues | null
}

export interface ReportRange {
  start: string
  end: string
}

export interface ReportResult {
  period: ReportRange
  rows: ReportRow[]
  totals: MetricValues
  previous_period: ReportRange | null
  previous_totals: MetricValues | null
  truncated: boolean
  labels: Record<string, Record<string, string>>
}
