/** Chamadas da API das networks e dos sites de todos os clientes, no painel interno. */

import { api, type Query } from '@/lib/api'
import type { Page } from '@/lib/types'
import type { ClientNetwork, ClientNetworkDetail, ClientSite, ClientSiteDetail } from '@/modules/internal/inventory/types'
import type { NetworkSummary, SyncRun } from '@/modules/networks/types'
import { clientService } from '@/modules/internal/clients/service'
import { staffService } from '@/modules/internal/staff/service'

/** Uma opção de seletor de filtro. */
export interface FilterOption {
  value: string
  label: string
}

/** A equipe Groone e as Empresas cliente para os filtros; sem acesso, a lista fica vazia. */
async function filterOptions(): Promise<{ staff: FilterOption[]; companies: FilterOption[] }> {
  const [people, clients] = await Promise.allSettled([staffService.options(), clientService.options()])
  return {
    staff: people.status === 'fulfilled' ? people.value.items.map((person) => ({ value: person.user.id, label: person.user.name })) : [],
    companies:
      clients.status === 'fulfilled'
        ? clients.value.items.flatMap((client) => (client.company_id ? [{ value: client.company_id, label: client.name }] : []))
        : [],
  }
}

/** Serviço das networks e dos sites dos clientes. */
export const clientInventoryService = {
  /** Uma página das networks dos clientes com busca, situação, cliente, responsável, as que aguardam confirmação e ordem. */
  networks: (query?: Query) => api.get<Page<ClientNetwork>>('/internal/networks', query),
  /** Uma network de cliente com sites, contratos, sincronizações e faturamento. */
  network: (networkId: string) => api.get<ClientNetworkDetail>(`/internal/networks/${networkId}`),
  /** Uma página das sincronizações de uma network de cliente, a mais recente primeiro. */
  syncRuns: (networkId: string, query?: Query) => api.get<Page<SyncRun>>(`/internal/networks/${networkId}/sync-runs`, query),
  /** Cadastra a network do cliente, ligada a ele e ao dono, e agenda o teste. */
  register: (clientId: string, networkCode: string) => api.post<NetworkSummary>('/internal/networks', { company_id: clientId, network_code: networkCode }),
  /** Confirma que a network do MCM cadastrada pelo cliente é dele e agenda o teste. */
  confirm: (networkId: string) => api.post<NetworkSummary>(`/internal/networks/${networkId}/confirm`),
  /** Recusa a network do MCM cadastrada pelo cliente que não é dele; o código fica livre. */
  reject: (networkId: string) => api.post<void>(`/internal/networks/${networkId}/reject`),
  /** Uma página dos sites dos clientes com busca, aprovação, cliente, categoria, responsáveis e ordem. */
  sites: (query?: Query) => api.get<Page<ClientSite>>('/internal/sites', query),
  /** As opções dos filtros de Empresas, Networks e Sites. */
  filterOptions,
  /** Um site de cliente com a network, os ad units ativos, o contrato ativo e o faturamento. */
  site: (siteId: string) => api.get<ClientSiteDetail>(`/internal/sites/${siteId}`),
}
