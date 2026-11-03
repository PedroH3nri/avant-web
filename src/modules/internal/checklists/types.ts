/** Formatos da API do checklist de domínio, iguais aos `dto.py` de /internal/checklists e /internal/checklist-items. */

export type CheckKind = 'link' | 'categories' | 'search' | 'home' | 'author' | 'date' | 'pagination' | 'ads_txt' | 'manual'
export type CheckOutcome = 'ok' | 'failed' | 'unknown'
export type ChecklistState = 'all' | 'pending' | 'done'

export interface ChecklistPerson {
  id: string
  name: string
}

export interface ChecklistItem {
  id: string
  name: string
  kind: CheckKind
  /** Só no tipo link: as palavras procuradas nos links da página inicial. */
  words: string[]
  position: number
  active: boolean
  created_at: string
}

export interface ChecklistItemInput {
  name: string
  kind: CheckKind
  words: string[]
  active: boolean
}

export interface ChecklistProgress {
  done: number
  total: number
  complete: boolean
}

export interface SiteChecklist {
  id: string
  month: string
  site: { id: string; domain: string }
  client: { id: string; name: string } | null
  /** Faturamento bruto do site no mês anterior, em dólar. */
  revenue: string
  checked_at: string | null
  progress: ChecklistProgress
}

export interface ChecklistRow {
  item: ChecklistItem
  /** Vazio enquanto não foi conferido e sempre no item manual. */
  outcome: CheckOutcome | null
  /** Código da prova; o painel traduz. */
  evidence: string | null
  /** Endereço, linha do ads.txt ou palavras procuradas. */
  detail: string | null
  checked_at: string | null
  marked_by: ChecklistPerson | null
  marked_at: string | null
  ok: boolean
}

export interface ChecklistNote {
  id: string
  message: string
  created_at: string
  author: ChecklistPerson | null
  edited_at: string | null
  editor: ChecklistPerson | null
  editable: boolean
}

export interface SiteChecklistDetail extends SiteChecklist {
  rows: ChecklistRow[]
  notes: ChecklistNote[]
  /** Idioma do dono do cliente: as observações entram no relatório dele. */
  client_locale: string | null
  /** Só o checklist do mês atual muda. */
  current: boolean
}

export interface ChecklistMonth {
  month: string
  sites: number
  done: number
  checked_at: string | null
}

export interface ChecklistFilters {
  month: string
  page: number
  state: ChecklistState
  q?: string
}
