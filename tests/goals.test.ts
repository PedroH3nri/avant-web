import { describe, expect, it } from 'vitest'
import { goalTone, monthOptions, paceMark, templateValid } from '@/modules/internal/goals/rules'
import type { GoalProgress } from '@/modules/internal/goals/types'

/** Andamento com o que o teste muda. */
const progress = (patch: Partial<GoalProgress>): GoalProgress => ({ done: '0', goal: '1000', share: '0', on_pace: null, projected: null, ...patch })

describe('regras das metas', () => {
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
    expect(templateValid(Array(12).fill('1000'))).toBe(true)
    expect(templateValid(Array(11).fill('1000'))).toBe(false)
    expect(templateValid([...Array(11).fill('1000'), '-1'])).toBe(false)
    expect(templateValid([...Array(11).fill('1000'), 'abc'])).toBe(false)
    expect(templateValid([...Array(11).fill('1000'), '1.234,50'])).toBe(true)
  })
})
