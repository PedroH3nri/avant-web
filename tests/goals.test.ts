import { describe, expect, it } from 'vitest'
import { companyGoalOf, companyGoalYears, formatAmount, goalTone, monthOptions, paceMark, parseAmount, roleTemplates, templateValid } from '@/modules/internal/goals/rules'
import type { GoalProgress, GoalTemplate } from '@/modules/internal/goals/types'

/** Andamento com o que o teste muda. */
const progress = (patch: Partial<GoalProgress>): GoalProgress => ({ done: '0', goal: '1000', share: '0', on_pace: null, projected: null, ...patch })

/** Modelo de meta com o que o teste muda. */
const template = (patch: Partial<GoalTemplate>): GoalTemplate => ({
  id: 'modelo',
  name: 'Modelo',
  year: 2026,
  currency: 'USD',
  months: Array.from({ length: 12 }, () => '0'),
  is_company_goal: false,
  created_at: '2026-01-01T00:00:00Z',
  updated_at: '2026-01-01T00:00:00Z',
  ...patch,
})

describe('regras das metas', () => {
  it('separa a meta da Groone dos modelos dos papéis', () => {
    const vendas = template({ id: 'vendas' })
    const groone2026 = template({ id: 'groone-2026', is_company_goal: true })
    const groone2027 = template({ id: 'groone-2027', is_company_goal: true, year: 2027 })
    const all = [vendas, groone2026, groone2027]
    expect(roleTemplates(all)).toEqual([vendas])
    expect(companyGoalOf(all, 2027)).toBe(groone2027)
    expect(companyGoalOf([vendas], 2026)).toBeNull()
  })

  it('oferece o ano anterior, o atual e o próximo para a meta da Groone', () => {
    expect(companyGoalYears('2026-10-30')).toEqual([2025, 2026, 2027])
  })

  it('pinta pelo ritmo e fica neutro sem meta ou sem ritmo', () => {
    expect(goalTone(progress({ on_pace: true }))).toBe('ok')
    expect(goalTone(progress({ on_pace: false }))).toBe('ochre')
    expect(goalTone(progress({ on_pace: null }))).toBe('neutral')
    expect(goalTone(progress({ goal: null, on_pace: null }))).toBe('neutral')
  })

  it('lista os últimos 12 meses, do atual para trás', () => {
    const options = monthOptions('2026-10-29', 'pt-BR')
    expect(options).toHaveLength(12)
    expect(options[0]).toEqual({ value: '2026-10', label: 'outubro de 2026' })
    expect(options[11]?.value).toBe('2025-11')
  })

  it('marca onde o mês deveria estar hoje', () => {
    expect(paceMark('2026-10', '2026-10-29')).toBeCloseTo(28 / 31)
    expect(paceMark('2026-10', '2026-10-01')).toBe(0)
    expect(paceMark('2026-09', '2026-10-29')).toBe(1)
    expect(paceMark('2026-11', '2026-10-29')).toBe(0)
  })

  it('aceita só 12 valores de zero para cima', () => {
    expect(templateValid(Array(12).fill('1000'), 'pt')).toBe(true)
    expect(templateValid(Array(11).fill('1000'), 'pt')).toBe(false)
    expect(templateValid([...Array(11).fill('1000'), '-1'], 'pt')).toBe(false)
    expect(templateValid([...Array(11).fill('1000'), 'abc'], 'pt')).toBe(false)
    expect(templateValid([...Array(11).fill('1000'), '1.234,50'], 'pt')).toBe(true)
  })

  it('lê o valor pelo jeito de escrever número do idioma', () => {
    expect(parseAmount('50.000', 'pt')).toBe(50000)
    expect(parseAmount('1.234,50', 'pt')).toBe(1234.5)
    expect(parseAmount('1234,5', 'es')).toBe(1234.5)
    expect(parseAmount('1,000', 'en')).toBe(1000)
    expect(parseAmount('1,234.50', 'en')).toBe(1234.5)
    expect(parseAmount('1000', 'pt')).toBe(1000)
    expect(parseAmount('1.234,567', 'pt')).toBeNaN()
    expect(parseAmount('1000.50', 'pt')).toBeNaN()
    expect(parseAmount('1,0000', 'en')).toBeNaN()
  })

  it('mostra o valor da API no jeito do idioma', () => {
    expect(formatAmount('15000.00', 'pt')).toBe('15000,00')
    expect(formatAmount('15000.00', 'en')).toBe('15000.00')
  })
})
