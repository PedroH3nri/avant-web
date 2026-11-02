/** Chamadas da API dos envios agendados. */

import { api, type Query } from '@/lib/api'
import type { Schedule, ScheduleInput, SchedulePage } from '@/modules/schedules/types'

/** Serviço dos envios agendados. */
export const scheduleService = {
  /** Uma página dos envios que a pessoa vê, o mais novo primeiro, com a busca (`q`). */
  list: (query?: Query) => api.get<SchedulePage>('/schedules', query),
  /** Cria um envio; o primeiro sai no próximo horário. */
  create: (input: ScheduleInput) => api.post<Schedule>('/schedules', input),
  /** Troca o que manda, quando e para quem. */
  update: (id: string, input: ScheduleInput) => api.put<Schedule>(`/schedules/${id}`, input),
  /** Pausa o envio ou volta a mandar. */
  pause: (id: string, paused: boolean) => api.put<Schedule>(`/schedules/${id}/pause`, { paused }),
  /** Apaga o envio e o histórico dele. */
  remove: (id: string) => api.delete(`/schedules/${id}`),
}
