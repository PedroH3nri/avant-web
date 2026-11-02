/** Chamadas da API das visões salvas das tabelas internas. */

import { api } from '@/lib/api'
import type { Items } from '@/lib/types'
import type { SavedView, SavedViewInput, ScreenCatalog, ViewScreen } from '@/modules/views/types'

/** Serviço das visões salvas. */
export const viewService = {
  /** As colunas, os filtros e as ordens que uma visão da tela pode guardar. */
  catalog: (screen: ViewScreen) => api.get<ScreenCatalog>(`/internal/views/catalog/${screen}`),
  /** As visões da tela que a pessoa vê, na ordem das abas. */
  list: (screen: ViewScreen) => api.get<Items<SavedView>>('/internal/views', { screen }),
  /** Salva uma visão nova, da pessoa. */
  create: (input: SavedViewInput) => api.post<SavedView>('/internal/views', input),
  /** Troca o nome, a definição e quem vê. */
  update: (id: string, input: SavedViewInput) => api.put<SavedView>(`/internal/views/${id}`, input),
  /** Apaga uma visão da pessoa. */
  remove: (id: string) => api.delete(`/internal/views/${id}`),
}
