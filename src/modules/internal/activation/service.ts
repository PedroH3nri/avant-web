/** Chamadas da API do Funil de ativação no painel interno. */

import { api } from '@/lib/api'
import type { ActivationFunnel } from '@/modules/internal/activation/types'

export const activationService = {
  /** O funil de quem entrou nos últimos 90 ou 180 dias e os clientes parados. */
  funnel: (days: number) => api.get<ActivationFunnel>(`/internal/activation?days=${days}`),
  /** Abre a tarefa de suporte do cliente parado para o gerente com o texto dado. */
  task: (clientId: string, description: string) => api.post<{ task_id: string }>(`/internal/activation/${clientId}/task`, { description }),
}
