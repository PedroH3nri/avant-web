/** Chamadas da API da Qualidade do tráfego no painel interno. */

import { api } from '@/lib/api'
import type { TrafficAlertDetail, TrafficOverview } from '@/modules/internal/traffic_quality/types'

export const trafficQualityService = {
  /** Os números do topo e os alertas abertos. */
  overview: () => api.get<TrafficOverview>('/internal/traffic-quality'),
  /** Os recortes, as campanhas e os sinais da ad tag de um alerta. */
  detail: (alertId: string) => api.get<TrafficAlertDetail>(`/internal/traffic-quality/alerts/${alertId}`),
  /** Esconde o alerta por 7 dias. */
  dismiss: (alertId: string) => api.post<void>(`/internal/traffic-quality/alerts/${alertId}/dismiss`),
  /** Abre a tarefa de suporte com o resumo e os links. */
  task: (alertId: string, description: string) => api.post<{ task_id: string }>(`/internal/traffic-quality/alerts/${alertId}/task`, { description }),
}
