/** Chamadas da API do Controle de custos. */

import { api, type Query } from '@/lib/api'
import type { CostControl } from '@/modules/cost_control/types'

/** Serviço do Controle de custos da Empresa ativa e, no painel interno, de uma Empresa cliente. */
export const costControlService = {
  /** O Controle de custos da Empresa ativa com os filtros. */
  company: (query: Query) => api.get<CostControl>('/cost-control', query),
  /** O Controle de custos de uma Empresa cliente, no painel interno. */
  client: (query: Query) => api.get<CostControl>('/internal/cost-control', query),
}
