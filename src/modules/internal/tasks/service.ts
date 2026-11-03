/** Chamadas da API das tarefas de suporte da equipe Groone. */

import { api } from '@/lib/api'
import type { Page } from '@/lib/types'
import type { SupportTask, SupportTaskDetail, TaskFilters, TaskInput, TaskPatch } from '@/modules/internal/tasks/types'

/** Serviço das tarefas: lista, detalhe, criação, mudanças e comentários. */
export const taskService = {
  /** Uma página das tarefas com os filtros. */
  list: (filters: TaskFilters) => api.get<Page<SupportTask>>('/internal/tasks', { ...filters }),
  /** A tarefa com a linha do tempo. */
  get: (taskId: string) => api.get<SupportTaskDetail>(`/internal/tasks/${taskId}`),
  /** Abre uma tarefa. */
  create: (body: TaskInput) => api.post<SupportTaskDetail>('/internal/tasks', body),
  /** Muda situação, prioridade ou responsável. */
  change: (taskId: string, body: TaskPatch) => api.patch<SupportTaskDetail>(`/internal/tasks/${taskId}`, body),
  /** Comenta na tarefa. */
  comment: (taskId: string, message: string) => api.post<SupportTaskDetail>(`/internal/tasks/${taskId}/comments`, { message }),
}
