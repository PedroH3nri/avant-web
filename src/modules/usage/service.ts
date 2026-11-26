/** Chamada da API que conta o uso do painel. */

import { api } from '@/lib/api'
import type { UsageArea, UsageSignal } from '@/modules/usage/types'

export const usageService = {
  /** Conta a tela aberta (com a área) ou o minuto com a aba visível. */
  ping: (signal: UsageSignal, area?: UsageArea) => api.post<void>('/usage/ping', area ? { signal, area } : { signal }),
}
