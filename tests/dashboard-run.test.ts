/** Testes da execução do dashboard inteiro numa requisição. */

import { describe, expect, it } from 'vitest'
import { runsQuery, widgetErrorText } from '@/modules/dashboards/run'
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
