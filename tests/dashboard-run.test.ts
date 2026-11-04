/** Testes da execução do dashboard inteiro numa requisição. */

import { describe, expect, it } from 'vitest'
import { runKey, runsQuery, widgetErrorText } from '@/modules/dashboards/run'
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
