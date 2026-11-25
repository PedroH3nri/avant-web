/** Testes da execução do dashboard inteiro numa requisição. */

import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, nextTick, ref } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { ApiError } from '@/lib/api'
import { runKey, runsQuery, useDashboardRun, widgetErrorText, type RunTarget } from '@/modules/dashboards/run'
import { dashboardService } from '@/modules/dashboards/service'
import type { Widget } from '@/modules/dashboards/types'

/** Um widget mínimo do tipo pedido. */
const widgetOf = (type: Widget['type']) => ({ id: 'w1', type, x: 0, y: 0, w: 4, h: 3 }) as Widget

describe('runsQuery', () => {
  it('só os widgets de relatório e de consulta rodam na API', () => {
    expect(runsQuery(widgetOf('query'))).toBe(true)
    expect(runsQuery(widgetOf('report'))).toBe(true)
    expect(runsQuery(widgetOf('goal'))).toBe(false)
    expect(runsQuery(widgetOf('text'))).toBe(false)
    expect(runsQuery(widgetOf('account'))).toBe(false)
  })
})

describe('widgetErrorText', () => {
  it('usa o texto da API quando a entrada é inválida', () => {
    expect(widgetErrorText({ code: 'invalid_input', message: 'Período inválido.' })).toBe('Período inválido.')
  })

  it('usa o texto do código nos outros erros', () => {
    expect(widgetErrorText({ code: 'not_found', message: 'x' })).not.toBe('x')
  })
})

describe('runKey', () => {
  it('muda quando a consulta gravada muda e ignora widgets sem consulta', () => {
    const saved = [{ ...widgetOf('query'), query: { metrics: ['revenue'] } }] as Widget[]
    const key = runKey({ dashboardId: 'd1', saved, filters: null })
    const edited = [{ ...widgetOf('query'), query: { metrics: ['impressions'] } }] as Widget[]
    expect(runKey({ dashboardId: 'd1', saved: edited, filters: null })).not.toBe(key)
    expect(runKey({ dashboardId: 'd1', saved: [...saved, { ...widgetOf('text'), id: 'w2' }], filters: null })).toBe(key)
  })
})

afterEach(() => vi.restoreAllMocks())

/** Monta a execução num componente de teste e devolve o alvo e o estado. */
function mountRun(initial: RunTarget) {
  const target = ref(initial)
  let state: ReturnType<typeof useDashboardRun> | null = null
  mount(
    defineComponent({
      /** Componente vazio que só usa a execução. */
      setup() {
        state = useDashboardRun(() => target.value)
        return () => null
      },
    }),
  )
  return { target, state: state as unknown as ReturnType<typeof useDashboardRun> }
}

describe('useDashboardRun', () => {
  const saved = [{ ...widgetOf('query'), query: { metrics: ['revenue'] } }] as Widget[]

  it('na execução pulada limpa a falha e ignora a resposta que ainda estava no caminho', async () => {
    let reject: (error: unknown) => void = () => undefined
    vi.spyOn(dashboardService, 'runAll').mockReturnValue(new Promise((_, failWith) => (reject = failWith)))
    const { target, state } = mountRun({ dashboardId: 'd1', saved, filters: null })
    expect(state.loading.value).toBe(true)
    target.value = { ...target.value, preview: true }
    await nextTick()
    reject(new ApiError(500, 'unknown', 'falhou'))
    await flushPromises()
    expect(state.failure.value).toBeNull()
    expect(state.loading.value).toBe(false)
  })

  it('na execução pulada apaga a falha da execução anterior', async () => {
    vi.spyOn(dashboardService, 'runAll').mockRejectedValue(new ApiError(500, 'unknown', 'falhou'))
    const { target, state } = mountRun({ dashboardId: 'd1', saved, filters: null })
    await flushPromises()
    expect(state.failure.value).not.toBeNull()
    target.value = { ...target.value, saved: [] }
    await flushPromises()
    expect(state.failure.value).toBeNull()
  })

  it('na execução pulada apaga os resultados da execução anterior', async () => {
    vi.spyOn(dashboardService, 'runAll').mockResolvedValue({ results: { w1: { rows: [] } }, errors: {} } as never)
    const { target, state } = mountRun({ dashboardId: 'd1', saved, filters: null })
    await flushPromises()
    expect(Object.keys(state.run.value.results)).toEqual(['w1'])
    target.value = { ...target.value, saved: [] }
    await flushPromises()
    expect(state.run.value).toEqual({ results: {}, errors: {} })
  })
})
