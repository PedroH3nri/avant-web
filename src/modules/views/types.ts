/** Formatos da API das visões salvas (iguais ao dto.py de internal/views no avant-api). */

import type { Visibility } from '@/modules/reports/types'

/** As tabelas internas que têm visões salvas. */
export type ViewScreen = 'clients' | 'contracts' | 'client_results' | 'commissions' | 'invoices'

export type SortDirection = 'asc' | 'desc'

export interface ViewSort {
  key: string
  direction: SortDirection
}

/** Valor de um filtro: texto, id, lista de ids ou uma opção do catálogo. */
export type FilterValue = string | string[]

/** O que a visão guarda; o avant-core confere contra o catálogo da tela. */
export interface ViewDefinition {
  schema_version?: number
  columns: string[]
  filters: Record<string, FilterValue>
  sort: ViewSort | null
}

export interface SavedViewInput {
  screen: ViewScreen
  name: string
  definition: ViewDefinition
  visibility: Visibility
  role_ids: string[]
}

export interface SavedView extends SavedViewInput {
  id: string
  owner_user_id: string
  /** Só o dono edita e apaga. */
  editable: boolean
  created_at: string
  updated_at: string
}

export interface ViewFilterSpec {
  key: string
  kind: 'text' | 'id' | 'id_list' | 'choice'
  choices: string[]
}

/** O que uma visão da tela pode guardar; a primeira ordem é a padrão. */
export interface ScreenCatalog {
  screen: ViewScreen
  columns: string[]
  filters: ViewFilterSpec[]
  sorts: ViewSort[]
}
