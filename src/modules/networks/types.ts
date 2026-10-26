/** Formatos da API do domínio networks (iguais ao dto.py dele no avant-api). Datas em ISO 8601 UTC. */

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
