/** Chamadas da API do resultado mês a mês. */

import { api, type Query } from '@/lib/api'
import type { Page } from '@/lib/types'
import type { CompanyResults } from '@/modules/results/types'

/** Serviço do resultado. */
export const resultService = {
  /** O resultado da Empresa ativa; ``query`` já vem montada como URLSearchParams. */
  company: (query: URLSearchParams) => api.get<CompanyResults>(`/results?${query}`),
  /** Uma página do ranking das Empresas cliente pelo resultado, no painel interno. */
  clients: (query: Query) => api.get<Page<CompanyResults>>('/internal/results', query),
}
