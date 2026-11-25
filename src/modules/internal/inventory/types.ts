/** Formatos da API do domínio internal/inventory (iguais ao dto.py dele no avant-api). Datas em ISO 8601 UTC. */

import type { Network, SyncRun } from '@/modules/networks/types'
import type { RevenueStatus } from '@/modules/revenue/types'
import type { AdUnit, Site } from '@/modules/sites/types'
import type { ContractSource, ContractStatus } from '@/modules/internal/contracts/types'

/** O cliente de uma linha, com a imagem. */
export interface ClientRef {
  id: string
  name: string
  /** Vazio sem imagem: o painel mostra a inicial do nome. */
  image_url: string | null
}

/** Uma network de cliente, com o cliente e o status de faturamento (GET /internal/networks). */
export interface ClientNetwork extends Omit<Network, 'last_runs'> {
  client: ClientRef
  /** Vazio sem receita nos últimos 60 dias. */
  revenue_status: RevenueStatus | null
  /** E-mail do child no MCM, só nas que aguardam a confirmação da equipe. */
  mcm_email: string | null
  /** Checklist do mês atual; vazio sem faturamento no mês anterior ou sem a permissão. */
  checklist?: { id: string; done: number; total: number; complete: boolean } | null
}

/** Um site de cliente, com o cliente, a network e o status de faturamento (GET /internal/sites). */
export interface ClientSite extends Site {
  client: ClientRef
  /** Vazio enquanto o site aguarda o GAM. */
  network_name: string | null
  ad_units: number
  /** Vazio sem receita nos últimos 60 dias. */
  revenue_status: RevenueStatus | null
  /** Checklist do mês atual; vazio sem faturamento no mês anterior ou sem a permissão. */
  checklist?: { id: string; done: number; total: number; complete: boolean } | null
}

/** Um site da network, com os ad units ativos. */
export interface NetworkSite extends Site {
  ad_units: number
}

/** Um contrato da network, sem repetir a network e o cliente. */
export interface NetworkContract {
  id: string
  /** Decimal em texto, como "15.000". */
  revshare: string
  status: ContractStatus
  source: ContractSource
  started_at: string
  ended_at: string | null
  notes: string | null
}

/** Uma network de cliente com tudo o que é dela (GET /internal/networks/{id}). */
export interface ClientNetworkDetail extends Omit<Network, 'sites'> {
  client: ClientRef
  revenue_status: RevenueStatus | null
  mcm_email: string | null
  sites: NetworkSite[]
  /** O ativo primeiro, depois os encerrados do mais novo para o mais antigo. */
  contracts: NetworkContract[]
  last_runs: Partial<Record<SyncRun['kind'], SyncRun>>
}

/** A network de um site, com o nome que aparece no painel. */
export interface SiteNetworkRef {
  id: string
  name: string
  network_code: string
}

/** O responsável por um site, só com o nome e o e-mail. */
export interface SiteResponsible {
  id: string
  name: string
  email: string
}

/** Um site de cliente com tudo o que é dele (GET /internal/sites/{id}). */
export interface ClientSiteDetail extends Site {
  client: ClientRef
  /** Vazio enquanto o site aguarda o GAM. */
  network: SiteNetworkRef | null
  /** Só os ativos, pelo nome. */
  ad_units: AdUnit[]
  /** Contrato ativo da network; vazio sem network ou sem contrato. */
  contract: NetworkContract | null
  responsible: SiteResponsible | null
  revenue_status: RevenueStatus | null
  /** Checklist do mês atual; vazio sem faturamento no mês anterior ou sem a permissão. */
  checklist?: { id: string; done: number; total: number; complete: boolean } | null
}
