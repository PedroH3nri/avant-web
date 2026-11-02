/** Regras de tela das visões salvas: comparar definições, montar a ordem e as colunas. */

import type { FilterValue, ViewDefinition, ViewSort } from '@/modules/views/types'

/** Tira os filtros vazios, para comparar e salvar só o que filtra. */
export function cleanFilters(filters: Record<string, FilterValue | undefined | null>): Record<string, FilterValue> {
  const clean: Record<string, FilterValue> = {}
  for (const [key, value] of Object.entries(filters)) {
    if (Array.isArray(value)) {
      if (value.length > 0) clean[key] = [...value]
    } else if (typeof value === 'string' && value.trim() !== '') clean[key] = value.trim()
  }
  return clean
}

/** O texto de uma ordem, para usar como valor de um seletor. */
export const sortValue = (sort: ViewSort) => `${sort.key}:${sort.direction}`

/** A ordem a partir do valor do seletor; vazio quando o texto não é uma ordem. */
export function parseSort(value: string): ViewSort | null {
  const [key, direction] = value.split(':')
  return key && (direction === 'asc' || direction === 'desc') ? { key, direction } : null
}

/** Diz se duas definições guardam as mesmas colunas, filtros e ordem. */
export function sameDefinition(first: ViewDefinition, second: ViewDefinition): boolean {
  return normalized(first) === normalized(second)
}

/** A definição em texto, com os filtros vazios fora e as chaves em ordem, para comparar. */
function normalized(definition: ViewDefinition): string {
  const filters = cleanFilters(definition.filters)
  const sortedFilters = Object.keys(filters)
    .sort()
    .map((key) => [key, filters[key]])
  return JSON.stringify([definition.columns, sortedFilters, definition.sort ? sortValue(definition.sort) : null])
}

/** Liga ou desliga uma coluna, mantendo a ordem do catálogo e ao menos uma ligada. */
export function toggleColumn(shown: string[], column: string, order: string[]): string[] {
  const next = shown.includes(column) ? shown.filter((kept) => kept !== column) : [...shown, column]
  if (next.length === 0) return shown
  return order.filter((key) => next.includes(key))
}

/** O primeiro valor de um filtro de lista ou o texto do filtro; vazio sem filtro. */
export function firstValue(value: FilterValue | undefined): string {
  if (Array.isArray(value)) return value[0] ?? ''
  return value ?? ''
}
