/** Chamadas da API do sino e do envio manual de notificações. */

import { api } from '@/lib/api'
import type { Page } from '@/lib/types'
import type { AppNotification, NotificationSend, NotificationSendInput, SentResult } from '@/modules/notifications/types'

/** Serviço das notificações. */
export const notificationService = {
  /** Uma página do sino de quem pede, só as não lidas com ``unread``. */
  list: (unread: boolean, page = 1) => api.get<Page<AppNotification>>('/notifications', { unread: unread ? 'true' : 'false', page }),
  /** Quantas ainda não foram lidas, para o número do sino. */
  unreadCount: () => api.get<{ unread: number }>('/notifications/unread-count'),
  /** Marca como lidas as dadas, ou todas com ``null``. */
  read: (ids: string[] | null) => api.post<{ changed: number }>('/notifications/read', { ids }),
  /** Manda uma notificação: pela Empresa ativa ou, na Groone, pela rota interna. */
  send: (input: NotificationSendInput, internal: boolean) => api.post<SentResult>(internal ? '/internal/notifications/send' : '/notifications/send', input),
  /** Uma página dos envios da Empresa ativa (ou da Groone). */
  sent: (internal: boolean, page = 1) => api.get<Page<NotificationSend>>(internal ? '/internal/notifications/sent' : '/notifications/sent', { page }),
}
