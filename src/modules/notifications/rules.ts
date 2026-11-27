/** Regras do sino: o texto de cada aviso automático no idioma da pessoa, os ícones e o link. */

import { t } from '@/lib/i18n'
import type { AppNotification, NotificationIcon } from '@/modules/notifications/types'

/** Os ícones que o envio manual oferece, na ordem da grade. */
export const NOTIFICATION_ICONS: NotificationIcon[] = ['megaphone', 'bell', 'info', 'alert', 'check', 'star', 'gift', 'calendar', 'wrench', 'chart', 'dollar', 'users', 'task']

export const MAX_TITLE = 120
export const MAX_TEXT = 1000
export const UNREAD_POLL_MS = 60_000

/** Um dado do aviso como texto (vazio quando não veio). */
function field(item: AppNotification, key: string): string {
  const value = item.data[key]
  return value === null || value === undefined ? '' : String(value)
}

/** O título do aviso: o escrito no envio manual ou o do tipo, traduzido. */
export function noticeTitle(item: AppNotification): string {
  if (item.kind === 'manual') return item.title ?? ''
  if (item.kind === 'alert') return t('notif.alert.title', { name: field(item, 'alert_name') })
  if (item.kind === 'task_assigned') return t('notif.taskAssigned.title')
  if (item.kind === 'task_comment') return t('notif.taskComment.title', { author: field(item, 'author') })
  if (item.kind === 'gam_tool') return t(field(item, 'state') === 'failed' ? 'notif.gamTool.failed' : 'notif.gamTool.done')
  if (item.kind === 'revenue_drop') return t('notif.revenueDrop.title', { client: field(item, 'client') })
  if (item.kind === 'nps_detractor') return t('notif.npsDetractor.title')
  return t('notif.invite.title')
}

/** A linha de baixo do aviso: a descrição do envio manual ou os dados do tipo. */
export function noticeText(item: AppNotification): string {
  if (item.kind === 'manual') return item.text ?? ''
  if (item.kind === 'alert') {
    const count = Number(item.data.count ?? 0)
    const subject = field(item, 'subject')
    return count > 1 ? t('notif.alert.many', { n: count }) : subject || t('notif.alert.one')
  }
  if (item.kind === 'task_assigned') return t('notif.taskAssigned.text', { subject: field(item, 'subject'), author: field(item, 'author') })
  if (item.kind === 'task_comment') return `${field(item, 'subject')}: ${field(item, 'comment')}`
  if (item.kind === 'gam_tool') return t('notif.gamTool.text', { network: field(item, 'network'), n: Number(item.data.domains ?? 0) })
  if (item.kind === 'revenue_drop') return t('notif.revenueDrop.text', { change: Math.abs(Number(item.data.change ?? 0)) })
  if (item.kind === 'nps_detractor') return t('notif.npsDetractor.text', { person: field(item, 'person'), company: field(item, 'company'), score: field(item, 'score') })
  return t('notif.invite.text', { name: field(item, 'name'), company: field(item, 'company') })
}

/** Link aceito no envio: tela do painel (``/algo``, nunca ``//``) ou, na Groone, ``https://``. */
export function validLink(link: string, allowHttps: boolean): boolean {
  if (!link) return true
  if (link.length > 500 || /\s/.test(link) || link.includes('\\')) return false
  if (link.startsWith('/') && !link.startsWith('//')) return true
  return allowHttps && link.startsWith('https://') && link.length > 'https://'.length
}

/** Diz se o link sai do painel (abre em outra aba). */
export function isExternal(link: string): boolean {
  return link.startsWith('https://')
}
