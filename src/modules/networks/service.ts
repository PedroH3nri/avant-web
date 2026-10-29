/** Chamadas da API das networks do Google Ad Manager. */

import { api, type Query } from '@/lib/api'
import type { Items, Page } from '@/lib/types'
import type { Network, SyncRun } from '@/modules/networks/types'

/** Serviço das networks da Empresa ativa. */
export const networkService = {
  /** Uma página das networks da Empresa ativa, a mais recente primeiro. */
  list: (query?: Query) => api.get<Page<Network>>('/networks', query),
  /** Todas as networks, para seletores e telas que juntam dados. */
  options: () => api.get<Items<Network>>('/networks/options'),
  /** Uma network com sites e últimas sincronizações. */
  show: (networkId: string) => api.get<Network>(`/networks/${networkId}`),
  /** O e-mail da conta de serviço que o cliente adiciona no GAM. */
  serviceAccount: () => api.get<{ email: string }>('/networks/service-account'),
  /** Conecta uma network pelo código. */
  connect: (networkCode: string) => api.post<Network>('/networks', { network_code: networkCode }),
  /** Pede uma sincronização. */
  sync: (networkId: string) => api.post<Network>(`/networks/${networkId}/sync`),
  /** Uma página das sincronizações, a mais recente primeiro. */
  syncRuns: (networkId: string, query?: Query) => api.get<Page<SyncRun>>(`/networks/${networkId}/sync-runs`, query),
  /** Desconecta uma network. */
  disconnect: (networkId: string) => api.post<Network>(`/networks/${networkId}/disconnect`),
}
