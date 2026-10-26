import { describe, expect, it } from 'vitest'
import { costBody, costForm, formatMonth, fromMonthInput, parseAmount, toMonthInput } from '@/modules/costs/rules'
import { margin, negative, resultRange } from '@/modules/results/rules'

describe('custos', () => {
  it('lê valores com vírgula ou ponto e recusa o que não é número', () => {
    expect(parseAmount('1.200,50')).toBe('1200.50')
    expect(parseAmount('250.5')).toBe('250.5')
    expect(parseAmount(' 99 ')).toBe('99')
    expect(parseAmount('-3')).toBeNull()
    expect(parseAmount('abc')).toBeNull()
  })

  it('converte o campo de mês para o primeiro dia e de volta', () => {
    expect(fromMonthInput('2026-09')).toBe('2026-09-01')
    expect(fromMonthInput('')).toBeNull()
    expect(toMonthInput('2026-09-01')).toBe('2026-09')
    expect(formatMonth('2026-09-01', 'en')).toBe('Sep 2026')
  })

  it('monta o corpo conforme o tipo e recusa o incompleto', () => {
    const form = costForm(null, 'BRL', new Date(2026, 9, 26))
    expect(form.start).toBe('2026-10')
    expect(costBody({ ...form, name: 'Servidor', amount: '180' })).toEqual({
      name: 'Servidor',
      kind: 'recurring',
      currency: 'BRL',
      start_month: '2026-10-01',
      end_month: null,
      amount: '180',
      formula: null,
    })
    expect(costBody({ ...form, name: 'Imposto', kind: 'formula', formula: ' faturamento * 6% ' })?.formula).toBe('faturamento * 6%')
    expect(costBody({ ...form, name: 'Evento', kind: 'one_time', amount: '10', end: '2026-12' })?.end_month).toBeNull()
    expect(costBody({ ...form, name: 'Servidor', amount: '1', end: '2026-01' })).toBeNull()
    expect(costBody({ ...form, name: '', amount: '1' })).toBeNull()
    expect(costBody({ ...form, name: 'Imposto', kind: 'formula' })).toBeNull()
  })
})

describe('resultado', () => {
  it('conta os períodos a partir do mês de hoje', () => {
    const today = new Date(2026, 9, 26)
    expect(resultRange('last_6_months', today)).toEqual({ start: '2026-05-01', end: '2026-10-01' })
    expect(resultRange('last_12_months', today)).toEqual({ start: '2025-11-01', end: '2026-10-01' })
    expect(resultRange('this_year', today)).toEqual({ start: '2026-01-01', end: '2026-10-01' })
    expect(resultRange('last_year', today)).toEqual({ start: '2025-01-01', end: '2025-12-01' })
  })

  it('margem só com faturamento e saídas como negativos', () => {
    expect(margin('50', '200')).toBe(25)
    expect(margin('10', '0')).toBeNull()
    expect(negative('12.5')).toBe(-12.5)
    expect(negative('0.00')).toBe(0)
  })
})
