/** Chamadas da API dos alertas de métrica. */

import { api, type Query } from '@/lib/api'
import type { Page } from '@/lib/types'
import type { Alert, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview } from '@/modules/alerts/types'

/** Serviço dos alertas. */
export const alertService = {
  /** Uma página dos alertas que a pessoa vê, o mais novo primeiro, com a busca (`q`). */
  list: (query?: Query) => api.get<AlertPage>('/alerts', query),
  /** Cria um alerta. */
  create: (input: AlertInput) => api.post<Alert>('/alerts', input),
  /** Troca nome, regra e quem recebe. */
  update: (id: string, input: AlertInput) => api.put<Alert>(`/alerts/${id}`, input),
  /** Silencia até a data dada; vazio tira o silêncio. */
  mute: (id: string, until: string | null) => api.put<Alert>(`/alerts/${id}/mute`, { until }),
  /** Apaga o alerta e os disparos dele. */
  remove: (id: string) => api.delete(`/alerts/${id}`),
  /** Uma página dos disparos do alerta, o mais recente primeiro. */
  events: (id: string, query?: Query) => api.get<Page<AlertEvent>>(`/alerts/${id}/events`, query),
  /** O que o alerta mostraria com os dados do último dia fechado, sem gravar. */
  preview: (definition: AlertDefinition) => api.post<AlertPreview>('/alerts/preview', { definition }),
}
