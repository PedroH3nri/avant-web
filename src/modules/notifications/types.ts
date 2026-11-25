/** Formatos da API do domínio notifications (iguais ao dto.py dele no avant-api). Datas em ISO 8601 UTC. */

/** De onde a notificação veio: os avisos automáticos trazem dados para a tela traduzir. */
export type NotificationKind = 'alert' | 'task_assigned' | 'task_comment' | 'gam_tool' | 'invite_accepted' | 'manual'

/** Ícones que o envio manual pode escolher (e que os avisos automáticos usam). */
export type NotificationIcon = 'bell' | 'megaphone' | 'info' | 'alert' | 'check' | 'star' | 'gift' | 'calendar' | 'wrench' | 'chart' | 'dollar' | 'users' | 'task'

/** Para quem vai o envio: na Empresa (todos ou pessoas) ou, pela Groone, equipe e clientes. */
export type NotificationAudience = 'company' | 'people' | 'groone' | 'all_clients' | 'clients'

/** Uma notificação do sino, de GET /notifications. */
export interface AppNotification {
  id: string
  kind: NotificationKind
  icon: NotificationIcon
  data: Record<string, string | number | null>
  title: string | null
  text: string | null
  link: string | null
  created_at: string
  read_at: string | null
}

/** O formulário do envio manual, de POST /notifications/send e /internal/notifications/send. */
export interface NotificationSendInput {
  icon: NotificationIcon
  title: string
  text: string
  link: string | null
  audience: NotificationAudience
  target_ids: string[]
}

/** O envio gravado e quantas pessoas receberam. */
export interface SentResult {
  id: string
  recipients: number
}

/** Um envio da lista de enviados, com quantas pessoas já leram. */
export interface NotificationSend {
  id: string
  icon: NotificationIcon
  title: string
  text: string
  link: string | null
  audience: NotificationAudience
  target_ids: string[]
  recipients: number
  read: number
  sender: { id: string; name: string } | null
  created_at: string
}
