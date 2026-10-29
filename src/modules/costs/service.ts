/** Chamadas da API dos custos da Empresa ativa. */

import { api, type Query } from '@/lib/api'
import type { Page } from '@/lib/types'
import type { Cost, FormulaCheck } from '@/modules/costs/types'

/** Serviço dos custos. */
export const costService = {
  /** Uma página dos custos da Empresa ativa, do mês mais novo para o mais antigo. */
  list: (query?: Query) => api.get<Page<Cost>>('/costs', query),
  /** Cria um custo. */
  create: (body: unknown) => api.post<Cost>('/costs', body),
  /** Troca um custo. */
  update: (costId: string, body: unknown) => api.put<Cost>(`/costs/${costId}`, body),
  /** Apaga um custo. */
  remove: (costId: string) => api.delete(`/costs/${costId}`),
  /** Confere uma fórmula com valores de exemplo. */
  checkFormula: (body: unknown) => api.post<FormulaCheck>('/costs/formula', body),
}
