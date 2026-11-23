/** Chamadas da API dos contratos de revshare no painel interno. */

import { api, type Query } from '@/lib/api'
import type { Items, Page } from '@/lib/types'
import type { Contract, ContractNetwork } from '@/modules/internal/contracts/types'

/** Serviço dos contratos. */
export const contractService = {
  /** Uma página dos contratos, do mais novo para o mais antigo, com filtros. */
  list: (query?: Query) => api.get<Page<Contract>>('/internal/contracts', query),
  /** Networks MCM ativas com o contrato em vigor; as Manage Inventory aceitam contrato à mão. */
  networks: () => api.get<Items<ContractNetwork>>('/internal/contracts/networks'),
  /** Pede ao worker a verificação do revshare das networks Manage Account no GAM agora. */
  check: () => api.post<{ queued: boolean }>('/internal/contracts/check'),
  /** Contrato à mão de uma network Manage Inventory. */
  create: (body: unknown) => api.post<Contract>('/internal/contracts', body),
  /** Edita a observação do contrato. */
  update: (contractId: string, body: unknown) => api.patch<Contract>(`/internal/contracts/${contractId}`, body),
  /** Encerra um contrato feito à mão. */
  end: (contractId: string) => api.post(`/internal/contracts/${contractId}/end`),
  /** Exclui um contrato feito à mão. */
  remove: (contractId: string) => api.delete(`/internal/contracts/${contractId}`),
}
