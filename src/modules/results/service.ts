/** Chamadas da API do resultado mês a mês. */

import { api } from '@/lib/api'
import type { Items } from '@/lib/types'
import type { CompanyResults } from '@/modules/results/types'

/** Serviço do resultado. */
export const resultService = {
  /** O resultado da Empresa ativa; ``query`` já vem montada como URLSearchParams. */
  company: (query: URLSearchParams) => api.get<CompanyResults>(`/results?${query}`),
  /** O resultado de cada Empresa cliente, no painel interno. */
  clients: (query: URLSearchParams) => api.get<Items<CompanyResults>>(`/internal/results?${query}`),
}
