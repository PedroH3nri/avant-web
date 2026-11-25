/** Os filtros que aparecem na barra de uma tabela com visões salvas. */

import { ref, watch } from 'vue'
import { shownFromView } from '@/modules/views/rules'
import type { ViewDefinition } from '@/modules/views/types'

/** Começa nos filtros padrão, segue a visão escolhida e limpa o valor de um filtro removido. */
export function useBarFilters(all: string[], defaults: string[], clear: Record<string, () => void>) {
  const shown = ref<string[]>([...defaults])
  watch(
    shown,
    (keys) => {
      for (const key of all) if (!keys.includes(key)) clear[key]?.()
    },
    { immediate: true },
  )
  /** Diz se o filtro está na barra. */
  const isShown = (key: string) => shown.value.includes(key)
  /** Põe na barra os filtros da visão aplicada. */
  const apply = (definition: ViewDefinition) => {
    shown.value = shownFromView(definition, all, defaults)
  }
  return { shown, isShown, apply }
}

/** Para tabela sem visões salvas: a escolha fica guardada neste navegador, pela chave da tabela. */
export function useLocalBarFilters(table: string, all: string[], defaults: string[], clear: Record<string, () => void>) {
  const storageKey = `avant.filters.${table}`
  const bar = useBarFilters(all, readShown(storageKey, all) ?? defaults, clear)
  watch(bar.shown, (keys) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(keys))
    } catch {
      return
    }
  })
  return bar
}

/** Os filtros guardados no navegador, só os que a tabela conhece; vazio sem nada guardado. */
function readShown(storageKey: string, all: string[]): string[] | null {
  try {
    const saved: unknown = JSON.parse(localStorage.getItem(storageKey) ?? 'null')
    return Array.isArray(saved) ? all.filter((key) => saved.includes(key)) : null
  } catch {
    return null
  }
}
