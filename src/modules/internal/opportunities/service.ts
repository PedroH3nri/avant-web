/** Chamadas da API das Oportunidades de receita no painel interno. */

import { api } from '@/lib/api'
import type { OpportunityOverview } from '@/modules/internal/opportunities/types'

export const opportunityService = {
  /** Os números do topo e as oportunidades abertas. */
  overview: () => api.get<OpportunityOverview>('/internal/opportunities'),
  /** Dispensa a oportunidade até a evidência mudar. */
  dismiss: (opportunityId: string) => api.post<void>(`/internal/opportunities/${opportunityId}/dismiss`),
  /** Abre a tarefa de suporte para o gerente com o texto dado. */
  task: (opportunityId: string, description: string) => api.post<{ task_id: string }>(`/internal/opportunities/${opportunityId}/task`, { description }),
}
