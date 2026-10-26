/** Chamadas da API dos contratos de revshare no painel interno. */

import { api } from '@/lib/api'
import type { Items } from '@/lib/types'
import type { Contract, ContractNetwork } from '@/modules/internal/contracts/types'

/** Serviço dos contratos. */
export const contractService = {
  /** Os contratos; ``query`` já vem montada (com ``?`` ou vazia). */
  list: (query: string) => api.get<Items<Contract>>(`/internal/contracts${query}`),
  /** Networks MCM ativas com o contrato em vigor. */
  networks: () => api.get<Items<ContractNetwork>>('/internal/contracts/networks'),
  /** Contrato à mão de uma network Manage Inventory. */
  create: (body: unknown) => api.post<Contract>('/internal/contracts', body),
  /** Edita a observação do contrato. */
  update: (contractId: string, body: unknown) => api.patch<Contract>(`/internal/contracts/${contractId}`, body),
  /** Encerra um contrato feito à mão. */
  end: (contractId: string) => api.post(`/internal/contracts/${contractId}/end`),
  /** Exclui um contrato feito à mão. */
  remove: (contractId: string) => api.delete(`/internal/contracts/${contractId}`),
}
