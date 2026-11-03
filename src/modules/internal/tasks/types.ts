/** Formatos da API das tarefas de suporte, iguais ao `dto.py` de /internal/tasks. */

export type TaskStatus = 'open' | 'working' | 'delivered' | 'closed'
export type TaskPriority = 'high' | 'normal' | 'low'
export type TaskScope = 'mine' | 'all'
export type TaskEventKind = 'created' | 'comment' | 'status_changed' | 'priority_changed' | 'assignee_changed' | 'edited'

export interface TaskPerson {
  id: string
  name: string
}

export interface SupportTask {
  id: string
  subject: string
  description: string
  priority: TaskPriority
  status: TaskStatus
  creator: TaskPerson | null
  assignee: TaskPerson | null
  client: { id: string; name: string } | null
  network: { id: string; network_code: string; name: string | null } | null
  site: { id: string; domain: string } | null
  domain: string | null
  created_at: string
  updated_at: string
  editable: boolean
}

export interface TaskEvent {
  id: string
  kind: TaskEventKind
  author: TaskPerson | null
  created_at: string
  message: string | null
  old_value: string | null
  new_value: string | null
  old_user: TaskPerson | null
  new_user: TaskPerson | null
}

export interface SupportTaskDetail extends SupportTask {
  events: TaskEvent[]
}

export interface TaskFilters {
  page: number
  scope: TaskScope
  status?: TaskStatus[]
  priority?: TaskPriority
  q?: string
}

export interface TaskInput {
  subject: string
  description: string
  priority: TaskPriority
  client_id: string | null
  domain: string | null
  assignee_id: string | null
}

export interface TaskPatch {
  status?: TaskStatus
  priority?: TaskPriority
  assignee_id?: string | null
}
