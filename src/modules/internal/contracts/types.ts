/** Formatos da API do domínio internal/contracts (iguais ao dto.py dele no avant-api). Datas em ISO 8601 UTC. */

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
