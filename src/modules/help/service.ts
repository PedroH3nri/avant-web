/** Chamadas da API da central de ajuda e da pesquisa de NPS no painel do cliente. */

import { api } from '@/lib/api'
import type { HelpCenterItem, HelpLanguage, NpsPromptState, SupportContact } from '@/modules/help/types'

export const helpService = {
  /** Os guias e artigos publicados no idioma pedido (ou em português). */
  items: (locale: HelpLanguage) => api.get<HelpCenterItem[]>('/help', { locale }),
  /** O gerente de conta e o WhatsApp da Groone. */
  contact: () => api.get<SupportContact>('/help/contact'),
  /** Conta uma leitura do guia ou artigo. */
  read: (itemId: string) => api.post<void>(`/help/${itemId}/read`),
  /** Guarda o "ajudou?". */
  rate: (itemId: string, helpful: boolean) => api.post<void>(`/help/${itemId}/rating`, { helpful }),
}

export const npsService = {
  /** Diz se a pergunta do NPS aparece agora. */
  prompt: () => api.get<NpsPromptState>('/nps/prompt'),
  /** Guarda a nota e o comentário. */
  answer: (score: number, comment: string) => api.post<void>('/nps/answer', { score, comment: comment.trim() || null }),
  /** Fecha a pergunta até o próximo trimestre. */
  dismiss: () => api.post<void>('/nps/dismiss'),
}
