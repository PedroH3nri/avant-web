/** Chamadas da API do checklist de domínio e dos itens do checklist. */

import { api } from '@/lib/api'
import type { Items, Page } from '@/lib/types'
import type {
  ChecklistFilters,
  ChecklistItem,
  ChecklistItemInput,
  ChecklistMonth,
  SiteChecklist,
  SiteChecklistDetail,
} from '@/modules/internal/checklists/types'

/** Serviço dos checklists: meses, lista do mês, checklist do site, marcações e observações. */
export const checklistService = {
  /** Os meses com checklist, do mais novo para o mais antigo. */
  months: () => api.get<Items<string>>('/internal/checklists/months'),
  /** O resumo do mês: sites, feitos e a última conferência. */
  summary: (month: string) => api.get<ChecklistMonth>('/internal/checklists/summary', { month }),
  /** Uma página dos checklists do mês com os filtros. */
  list: (filters: ChecklistFilters) => api.get<Page<SiteChecklist>>('/internal/checklists', { ...filters }),
  /** O checklist do site com os itens e as observações. */
  get: (checklistId: string) => api.get<SiteChecklistDetail>(`/internal/checklists/${checklistId}`),
  /** Marca o item como ok ou tira a marcação. */
  mark: (checklistId: string, itemId: string, ok: boolean) => api.put<SiteChecklistDetail>(`/internal/checklists/${checklistId}/items/${itemId}`, { ok }),
  /** Pede ao worker uma conferência nova do site. */
  check: (checklistId: string) => api.post<void>(`/internal/checklists/${checklistId}/check`),
  /** Escreve uma observação. */
  addNote: (checklistId: string, message: string) => api.post<void>(`/internal/checklists/${checklistId}/notes`, { message }),
  /** Troca o texto da observação. */
  editNote: (checklistId: string, noteId: string, message: string) => api.patch<void>(`/internal/checklists/${checklistId}/notes/${noteId}`, { message }),
  /** Apaga a observação. */
  deleteNote: (checklistId: string, noteId: string) => api.delete(`/internal/checklists/${checklistId}/notes/${noteId}`),
}

/** Serviço dos itens do checklist: uma lista para todos os sites. */
export const checklistItemService = {
  /** Os itens na ordem do checklist. */
  list: () => api.get<Items<ChecklistItem>>('/internal/checklist-items'),
  /** Cria um item no fim da lista. */
  create: (body: ChecklistItemInput) => api.post<ChecklistItem>('/internal/checklist-items', body),
  /** Edita o item. */
  update: (itemId: string, body: ChecklistItemInput) => api.put<ChecklistItem>(`/internal/checklist-items/${itemId}`, body),
  /** Sobe (-1) ou desce (1) o item e devolve a lista na ordem nova. */
  move: (itemId: string, step: -1 | 1) => api.post<Items<ChecklistItem>>(`/internal/checklist-items/${itemId}/move`, { step }),
}
