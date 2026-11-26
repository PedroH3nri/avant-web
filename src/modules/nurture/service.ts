/** Chamadas públicas do descadastro das réguas (o link do rodapé do e-mail). */

import { api } from '@/lib/api'
import type { NurtureSubscription } from '@/modules/nurture/types'

export const unsubscribeService = {
  /** Tira o cliente das réguas pelo token do link. */
  unsubscribe: (token: string) => api.post<NurtureSubscription>(`/nurture/unsubscribe/${encodeURIComponent(token)}`),
  /** Devolve o cliente às réguas pelo token do link. */
  resubscribe: (token: string) => api.post<NurtureSubscription>(`/nurture/resubscribe/${encodeURIComponent(token)}`),
}
