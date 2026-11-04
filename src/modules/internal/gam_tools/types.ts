/** Formatos das ferramentas do GAM, iguais aos DTOs de modules/internal/gam_tools do avant-api. */

export type GamToolKind = 'config' | 'setup' | 'key_values' | 'sync'
export type GamFormat = 'light' | 'gtag'
export type GamRunState = 'running' | 'done' | 'failed'
export type GamStepState = 'pending' | 'running' | 'done' | 'existed' | 'failed'
export type Language = 'pt' | 'en' | 'es'

export interface GamToolNetwork {
  id: string
  network_code: string
  display_name: string | null
  delegation: 'manage_inventory' | 'manage_account' | null
  status: string
  seller_id: string | null
  client: { id: string; name: string }
}

export interface GamToolSite {
  id: string
  domain: string
  has_parent: boolean
  blocks: number
  format: GamFormat | null
  blocks_date: string | null
}

export interface GamToolNetworkDetail extends GamToolNetwork {
  sites: GamToolSite[]
}

export interface GamStep {
  key: string
  state: GamStepState
  site: string | null
  count: number | null
  gam_id: string | null
  error: string | null
}

export interface GamToolRun {
  id: string
  network_id: string
  kind: GamToolKind
  format: GamFormat | null
  domains: string[]
  state: GamRunState
  error_code: string | null
  requested_by: { id: string; name: string } | null
  /** A network e o cliente, na lista de execuções. */
  network?: { id: string; network_code: string; display_name: string | null; client_name: string } | null
  created_at: string
  updated_at: string | null
  finished_at: string | null
  steps: GamStep[]
}

export interface GamToolRunInput {
  network_id: string
  kind: GamToolKind
  domains: string[]
  format: GamFormat | null
}
