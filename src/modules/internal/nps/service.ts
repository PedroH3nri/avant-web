/** Chamadas da API do NPS dos clientes no painel interno. */

import { api } from '@/lib/api'
import type { NpsOverview } from '@/modules/internal/nps/types'

export const internalNpsService = {
  /** O NPS e as respostas dos últimos ``days`` dias. */
  overview: (days: number) => api.get<NpsOverview>('/internal/nps', { days }),
}
