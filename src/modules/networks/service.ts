/** Chamadas da API das networks do Google Ad Manager. */

import { api } from '@/lib/api'
import type { Items } from '@/lib/types'
import type { Network, SyncRun } from '@/modules/networks/types'

/** Serviço das networks da Empresa ativa. */
export const networkService = {
  /** As networks da Empresa ativa. */
  list: () => api.get<Items<Network>>('/networks'),
  /** Uma network com sites e últimas sincronizações. */
  show: (networkId: string) => api.get<Network>(`/networks/${networkId}`),
  /** O e-mail da conta de serviço que o cliente adiciona no GAM. */
  serviceAccount: () => api.get<{ email: string }>('/networks/service-account'),
  /** Conecta uma network pelo código. */
  connect: (networkCode: string) => api.post<Network>('/networks', { network_code: networkCode }),
  /** Pede uma sincronização. */
  sync: (networkId: string) => api.post<Network>(`/networks/${networkId}/sync`),
  /** As sincronizações recentes. */
  syncRuns: (networkId: string, limit: number) => api.get<Items<SyncRun>>(`/networks/${networkId}/sync-runs`, { limit }),
  /** Desconecta uma network. */
  disconnect: (networkId: string) => api.post<Network>(`/networks/${networkId}/disconnect`),
}
