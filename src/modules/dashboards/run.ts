/** Roda todos os widgets do dashboard numa requisição, para a tela gastar uma consulta do limite. */

import { onBeforeUnmount, ref, watch } from 'vue'
import { ApiError } from '@/lib/api'
import { errorText } from '@/lib/i18n'
import { dashboardService } from '@/modules/dashboards/service'
import type { DashboardFilters, DashboardRun, Widget, WidgetError } from '@/modules/dashboards/types'

/** O que a grade precisa saber para rodar os widgets. */
export interface RunTarget {
  dashboardId?: string
  templateId?: string
  /** Os widgets como estão gravados no dashboard ou no modelo. */
  saved: Widget[]
  filters: DashboardFilters | null
  preview?: boolean
}

/** Diz se o widget tem consulta que roda na API (relatório salvo ou consulta própria). */
export const runsQuery = (widget: Widget) => widget.type === 'query' || widget.type === 'report'

/** O texto do erro de um widget: o da API quando já explica, senão o do código. */
export const widgetErrorText = (error: WidgetError) => (error.code === 'invalid_input' && error.message ? error.message : errorText(error.code))

/** A execução sem resultado nem erro, de antes da primeira resposta ou de quando nada roda. */
const emptyRun = (): DashboardRun => ({ results: {}, errors: {} })

/** Os widgets gravados que rodam na API, com o que muda o resultado deles. */
const savedQueries = (target: RunTarget) =>
  target.saved.filter(runsQuery).map((widget) => [widget.id, widget.query ?? null, widget.report_id ?? null])

/** A chave que muda quando é preciso rodar de novo: alvo, filtros e consultas gravadas. */
export function runKey(target: RunTarget) {
  return JSON.stringify([target.dashboardId ?? '', target.templateId ?? '', target.filters, savedQueries(target), Boolean(target.preview)])
}

/** Roda o dashboard (ou o modelo) inteiro; só a última resposta vale e o limite de taxa agenda nova tentativa. */
export function useDashboardRun(target: () => RunTarget) {
  const run = ref<DashboardRun>(emptyRun())
  const failure = ref<string | null>(null)
  const loading = ref(false)
  let latest = 0
  let retryTimer: ReturnType<typeof setTimeout> | null = null
  let disposed = false

  /** Pede todos os resultados de uma vez, quando há widget gravado com consulta. */
  async function load() {
    if (retryTimer) clearTimeout(retryTimer)
    const current = target()
    const ticket = ++latest
    loading.value = false
    failure.value = null
    if (disposed || current.preview || !savedQueries(current).length || !(current.templateId || current.dashboardId)) {
      run.value = emptyRun()
      return
    }
    loading.value = true
    try {
      const found = current.templateId
        ? await dashboardService.runTemplateAll(current.templateId, current.filters)
        : await dashboardService.runAll(current.dashboardId ?? '', current.filters)
      if (ticket === latest) run.value = found
    } catch (error) {
      if (ticket !== latest) return
      if (error instanceof ApiError && error.code === 'rate_limited') retryTimer = setTimeout(load, Math.max(error.retryAfter ?? 2, 1) * 1000)
      else failure.value = error instanceof ApiError ? widgetErrorText({ code: error.code, message: error.message }) : errorText('unknown')
    } finally {
      if (ticket === latest) loading.value = false
    }
  }

  watch(() => runKey(target()), load, { immediate: true })
  onBeforeUnmount(() => {
    disposed = true
    if (retryTimer) clearTimeout(retryTimer)
  })
  return { run, failure, loading }
}
