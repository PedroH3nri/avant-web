/** Regras de tela do checklist de domínio: rótulos, estado de cada item, provas e meses. */

import { locale, t, type Key } from '@/lib/i18n'
import type { CheckKind, ChecklistPerson, ChecklistRow, ChecklistState } from '@/modules/internal/checklists/types'

export const NOTE_MIN = 3
export const NOTE_MAX = 5000
export const ITEM_NAME_MIN = 2
export const KINDS: CheckKind[] = ['link', 'categories', 'search', 'home', 'author', 'date', 'pagination', 'ads_txt', 'manual']
export const STATES: ChecklistState[] = ['all', 'pending', 'done']
const LANGUAGE_NAMES: Record<string, string> = { pt: 'Português', en: 'English', es: 'Español' }

/** Como o item está agora: marcado por alguém, ok no automático, falhou, não deu para conferir ou para marcar. */
export type RowState = 'marked' | 'ok' | 'failed' | 'unknown' | 'pending'

export const ROW_TONE: Record<RowState, 'ok' | 'bad' | 'ochre' | 'neutral'> = {
  marked: 'ok',
  ok: 'ok',
  failed: 'bad',
  unknown: 'ochre',
  pending: 'neutral',
}

/** O estado do item: o "ok" marcado vence o automático. */
export function rowState(row: ChecklistRow): RowState {
  if (row.marked_at) return 'marked'
  return row.outcome ?? 'pending'
}

/** Os itens que ainda pedem revisão e os que estão ok, na ordem do checklist. */
export function splitRows(rows: ChecklistRow[]): { review: ChecklistRow[]; fine: ChecklistRow[] } {
  return { review: rows.filter((row) => !row.ok), fine: rows.filter((row) => row.ok) }
}

/** Nome do tipo de conferência. */
export const kindLabel = (kind: CheckKind) => t(`check.kind.${kind}` as Key)

/** Como o Avant confere o tipo, em uma frase. */
export const kindDesc = (kind: CheckKind) => t(`check.kindDesc.${kind}` as Key)

/** Nome do estado do item. */
export const rowStateLabel = (state: RowState) => t(`check.row.${state}` as Key)

/** Nome do filtro de situação da lista. */
export const stateLabel = (state: ChecklistState) => t(`check.state.${state}` as Key)

/** O que o Avant achou, no idioma da pessoa; sem conferência, como o tipo é conferido. */
export function evidenceText(row: ChecklistRow): string {
  if (!row.evidence) return kindDesc(row.item.kind)
  return t(`check.evidence.${row.evidence}` as Key)
}

/** As palavras digitadas, separadas por vírgula, sem repetidas nem vazias. */
export function parseWords(text: string): string[] {
  const words = text.split(',').map((word) => word.trim().toLowerCase()).filter(Boolean)
  return [...new Set(words)]
}

/** Nome do mês de uma data ISO do dia 1: "Novembro de 2026" no começo da frase, "novembro de 2026" no meio. */
export function monthName(iso: string, capital = true): string {
  const name = new Intl.DateTimeFormat(locale.value, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`))
  return capital ? name.charAt(0).toUpperCase() + name.slice(1) : name
}

/** O mês anterior ao dado, em ISO, para o rótulo do faturamento. */
export function previousMonth(iso: string): string {
  const date = new Date(`${iso}T00:00:00Z`)
  date.setUTCMonth(date.getUTCMonth() - 1)
  return date.toISOString().slice(0, 10)
}

/** Valor em dólar sem centavos. */
export const dollars = (value: string) => new Intl.NumberFormat(locale.value, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(Number(value))

/** Nome do idioma do cliente, ou vazio sem dono. */
export const languageName = (code: string | null) => (code ? (LANGUAGE_NAMES[code] ?? code) : null)

/** Nome da pessoa, ou "pessoa removida" quando ela foi apagada. */
export const personName = (person: ChecklistPerson | null) => person?.name ?? t('task.removedPerson')

/** A porcentagem de itens ok, para a barra de progresso. */
export const progressPercent = (done: number, total: number) => (total ? Math.round((done / total) * 100) : 0)
