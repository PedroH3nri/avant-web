/** Estado de uma tabela no formato novo: busca, filtros que entram e saem da barra, colunas e ordem.
 * No painel interno a visão salva guarda tudo; no do cliente a escolha fica neste navegador. */

import { computed, reactive, ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { useBarFilters, useLocalBarFilters } from '@/modules/views/barFilters'
import { cleanFilters, firstValue, parseSort, sortValue } from '@/modules/views/rules'
import type { ViewDefinition, ViewSort } from '@/modules/views/types'

const SEARCH_DELAY_MS = 300

/** O que a tela diz da tabela: a chave, os filtros, as colunas e as ordens (a primeira é a padrão). */
export interface ListTableSetup {
  table: string
  filters: string[]
  defaultFilters: string[]
  columns: string[]
  defaultColumns: string[]
  sorts: ViewSort[]
  local: boolean
}

/** A ordem que a API entende a partir da ordem da tabela; sem ordem, a padrão da API. */
export function listOrder(sort: ViewSort | null): string | undefined {
  if (!sort) return undefined
  if (sort.key === 'created_at') return sort.direction === 'asc' ? 'oldest' : 'newest'
  return sort.direction === 'asc' ? 'name_asc' : 'name_desc'
}

/** As colunas guardadas no navegador, só as que a tabela conhece; vazio sem nada guardado. */
function readColumns(storageKey: string, all: string[]): string[] | null {
  try {
    const saved: unknown = JSON.parse(localStorage.getItem(storageKey) ?? 'null')
    const known = Array.isArray(saved) ? all.filter((key) => saved.includes(key)) : []
    return known.length ? known : null
  } catch {
    return null
  }
}

/** Monta o estado da tabela e chama ``reload`` quando a busca, um filtro ou a ordem mudam. */
export function useListTable(setup: ListTableSetup, reload: () => void) {
  const searchText = ref('')
  const values = reactive<Record<string, string>>(Object.fromEntries(setup.filters.map((key) => [key, ''])))
  const clear = Object.fromEntries(setup.filters.map((key) => [key, () => (values[key] = '')]))
  const bar = setup.local ? useLocalBarFilters(setup.table, setup.filters, setup.defaultFilters, clear) : useBarFilters(setup.filters, setup.defaultFilters, clear)
  const columnsKey = `avant.columns.${setup.table}`
  const columns = ref<string[]>((setup.local && readColumns(columnsKey, setup.columns)) || [...setup.defaultColumns])
  const sort = ref(sortValue(setup.sorts[0] as ViewSort))
  const defaults: ViewDefinition = {
    columns: [...setup.defaultColumns],
    filters: {},
    sort: setup.sorts[0] ?? null,
    shown_filters: [...setup.defaultFilters],
  }
  const current = computed<ViewDefinition>(() => ({
    columns: columns.value,
    filters: cleanFilters({ query: searchText.value, ...values }),
    sort: parseSort(sort.value),
    shown_filters: bar.shown.value,
  }))
  const filtered = computed(() => Object.keys(current.value.filters).length > 0)

  if (setup.local) {
    watch(columns, (shown) => {
      try {
        localStorage.setItem(columnsKey, JSON.stringify(shown))
      } catch {
        return
      }
    })
  }
  watch(searchText, useDebounceFn(reload, SEARCH_DELAY_MS))
  watch([() => ({ ...values }), sort], reload, { deep: true })

  /** Diz se a coluna aparece. */
  const showsColumn = (column: string) => columns.value.includes(column)
  /** O valor de um filtro para a API, ou vazio quando está em "todos". */
  const param = (key: string) => values[key] || undefined

  /** Põe na tabela as colunas, os filtros e a ordem de uma visão salva. */
  function apply(definition: ViewDefinition) {
    const kept = definition.columns.filter((column) => setup.columns.includes(column))
    columns.value = kept.length ? kept : [...setup.defaultColumns]
    searchText.value = firstValue(definition.filters.query)
    for (const key of setup.filters) values[key] = firstValue(definition.filters[key])
    bar.apply(definition)
    const found = definition.sort && setup.sorts.find((option) => sortValue(option) === sortValue(definition.sort as ViewSort))
    sort.value = sortValue(found || (setup.sorts[0] as ViewSort))
  }

  /** Limpa a busca e os filtros. */
  function clearFilters() {
    searchText.value = ''
    for (const key of setup.filters) values[key] = ''
  }

  return { searchText, values, bar, columns, sort, defaults, current, filtered, showsColumn, param, apply, clearFilters, order: () => listOrder(parseSort(sort.value)) }
}
