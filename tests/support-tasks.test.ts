import { beforeAll, describe, expect, it } from 'vitest'
import { lang } from '@/lib/i18n'
import { commentRecipients, eventText, statusesFor, taskPlace } from '@/modules/internal/tasks/rules'
import type { SupportTask, TaskEvent } from '@/modules/internal/tasks/types'

const ana = { id: 'ana', name: 'Ana Souza' }
const bruno = { id: 'bruno', name: 'Bruno Lima' }
const task: SupportTask = {
  id: 'task',
  subject: 'Revisar ads.txt',
  description: '',
  priority: 'high',
  status: 'open',
  creator: ana,
  assignee: bruno,
  client: null,
  network: null,
  site: null,
  domain: 'novo.com',
  created_at: '2026-11-03T14:00:00Z',
  updated_at: '2026-11-03T14:00:00Z',
  editable: true,
}

/** Um item da linha do tempo com os campos dados. */
function event(fields: Partial<TaskEvent>): TaskEvent {
  return { id: 'event', kind: 'created', author: ana, created_at: task.created_at, message: null, old_value: null, new_value: null, old_user: null, new_user: null, ...fields }
}

describe('tarefas de suporte', () => {
  beforeAll(() => (lang.value = 'pt'))

  it('manda as situações do filtro para a API', () => {
    expect(statusesFor('active')).toEqual(['open', 'working'])
    expect(statusesFor('closed')).toEqual(['closed'])
    expect(statusesFor('any')).toBeUndefined()
  })

  it('escreve as mudanças da linha do tempo', () => {
    expect(eventText(event({ new_user: bruno }))).toBe('criou a tarefa e atribuiu a Bruno Lima')
    expect(eventText(event({ kind: 'status_changed', old_value: 'open', new_value: 'working' }))).toBe('mudou a situação de Aberta para Trabalhando')
    expect(eventText(event({ kind: 'assignee_changed', old_user: bruno }))).toBe('tirou o responsável')
  })

  it('manda o e-mail do comentário para quem criou e o responsável, menos quem escreveu', () => {
    expect(commentRecipients(task, 'bruno')).toEqual(['Ana Souza'])
    expect(commentRecipients(task, 'carla')).toEqual(['Ana Souza', 'Bruno Lima'])
    expect(commentRecipients({ ...task, assignee: ana }, 'carla')).toEqual(['Ana Souza'])
  })

  it('mostra o site ou o domínio a cadastrar', () => {
    expect(taskPlace(task)).toEqual({ domain: 'novo.com', pending: true })
    expect(taskPlace({ ...task, site: { id: 'site', domain: 'blog.com' } })).toEqual({ domain: 'blog.com', pending: false })
    expect(taskPlace({ ...task, domain: null })).toBeNull()
  })
})
