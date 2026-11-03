/** Regras de tela das tarefas de suporte: rótulos, filtros e textos da linha do tempo. */

import { t, type Key } from '@/lib/i18n'
import type { SupportTask, TaskEvent, TaskPerson, TaskPriority, TaskStatus } from '@/modules/internal/tasks/types'

export const SUBJECT_MIN = 3
export const SUBJECT_MAX = 1000
export const DESCRIPTION_MAX = 10000
export const COMMENT_MIN = 3
export const COMMENT_MAX = 2000
export const STATUSES: TaskStatus[] = ['open', 'working', 'delivered', 'closed']
export const PRIORITIES: TaskPriority[] = ['high', 'normal', 'low']
export const STATUS_TONE: Record<TaskStatus, 'ok' | 'warn' | 'ochre' | 'neutral'> = {
  open: 'ochre',
  working: 'warn',
  delivered: 'ok',
  closed: 'neutral',
}

/** O filtro de situação da lista: as em andamento, uma situação ou todas. */
export type StatusFilter = 'active' | TaskStatus | 'any'

/** As situações que a API recebe para o filtro escolhido. */
export function statusesFor(filter: StatusFilter): TaskStatus[] | undefined {
  if (filter === 'any') return undefined
  return filter === 'active' ? ['open', 'working'] : [filter]
}

/** Nome da situação no idioma da pessoa. */
export const statusLabel = (status: string) => t(`task.status.${status}` as Key)

/** Nome da prioridade no idioma da pessoa. */
export const priorityLabel = (priority: string) => t(`task.priority.${priority}` as Key)

/** Nome da pessoa, ou "pessoa removida" quando ela foi apagada. */
export const personName = (person: TaskPerson | null) => person?.name ?? t('task.removedPerson')

/** O texto de uma mudança na linha do tempo, depois do nome de quem fez. */
export function eventText(event: TaskEvent): string {
  if (event.kind === 'created') {
    return event.new_user ? t('task.event.createdFor', { name: event.new_user.name }) : t('task.event.created')
  }
  if (event.kind === 'status_changed') {
    return t('task.event.status', { from: statusLabel(event.old_value ?? ''), to: statusLabel(event.new_value ?? '') })
  }
  if (event.kind === 'priority_changed') return t('task.event.priority', { to: priorityLabel(event.new_value ?? '') })
  if (event.kind === 'assignee_changed') {
    return event.new_user ? t('task.event.assigned', { name: event.new_user.name }) : t('task.event.unassigned')
  }
  return t('task.event.edited')
}

/** Quem recebe o e-mail de um comentário: quem criou e o responsável, menos quem escreveu. */
export function commentRecipients(task: SupportTask, authorId: string | undefined): string[] {
  const people = [task.creator, task.assignee].filter((person): person is TaskPerson => !!person && person.id !== authorId)
  return [...new Map(people.map((person) => [person.id, person.name])).values()]
}

/** Onde a tarefa acontece: o site, o domínio a cadastrar ou nada. */
export function taskPlace(task: SupportTask): { domain: string; pending: boolean } | null {
  if (task.site) return { domain: task.site.domain, pending: false }
  return task.domain ? { domain: task.domain, pending: true } : null
}
