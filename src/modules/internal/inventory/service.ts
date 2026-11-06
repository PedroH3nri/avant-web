/** Chamadas da API das networks e dos sites de todos os clientes, no painel interno. */

import { api, type Query } from '@/lib/api'
import type { Page } from '@/lib/types'
import type { ClientNetwork, ClientSite } from '@/modules/internal/inventory/types'
import type { NetworkSummary } from '@/modules/networks/types'

/** Serviço das networks e dos sites dos clientes. */
export const clientInventoryService = {
  /** Uma página das networks dos clientes, a mais recente primeiro, com busca e os filtros de um cliente e das que aguardam confirmação. */
  networks: (query?: Query) => api.get<Page<ClientNetwork>>('/internal/networks', query),
  /** Cadastra a network do cliente, ligada a ele e ao dono, e agenda o teste. */
  register: (clientId: string, networkCode: string) => api.post<NetworkSummary>('/internal/networks', { company_id: clientId, network_code: networkCode }),
  /** Confirma que a network do MCM cadastrada pelo cliente é dele e agenda o teste. */
  confirm: (networkId: string) => api.post<NetworkSummary>(`/internal/networks/${networkId}/confirm`),
  /** Recusa a network do MCM cadastrada pelo cliente que não é dele; o código fica livre. */
  reject: (networkId: string) => api.post<void>(`/internal/networks/${networkId}/reject`),
  /** Uma página dos sites dos clientes, o mais recente primeiro, com busca pelo domínio. */
  sites: (query?: Query) => api.get<Page<ClientSite>>('/internal/sites', query),
}
