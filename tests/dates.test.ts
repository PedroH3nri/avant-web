import { describe, expect, it } from 'vitest'
import { dayCount, monthWeeks, ordered, outOfBounds, rangeText, shiftDay, shiftMonth } from '@/lib/dates'
import { periodFromQuery, periodQuery, presetDays } from '@/lib/periods'

describe('datas do seletor', () => {
  it('soma dias e meses atravessando o ano', () => {
    expect(shiftDay('2026-12-31', 1)).toBe('2027-01-01')
    expect(shiftMonth('2026-01', -1)).toBe('2025-12')
    expect(shiftMonth('2026-11', 2)).toBe('2027-01')
  })

  it('monta as semanas do mês de domingo a sábado', () => {
    const weeks = monthWeeks('2026-11')
    expect(weeks[0]?.[0]).toEqual({ iso: '2026-11-01', inside: true })
    expect(weeks.at(-1)?.at(-1)).toEqual({ iso: '2026-12-05', inside: false })
    expect(weeks.every((week) => week.length === 7)).toBe(true)
  })

  it('ordena o período, conta os dias e respeita os limites', () => {
    expect(ordered('2026-11-25', '2026-11-19')).toEqual({ start: '2026-11-19', end: '2026-11-25' })
    expect(dayCount({ start: '2026-11-19', end: '2026-11-25' })).toBe(7)
    expect(outOfBounds('2026-11-26', undefined, '2026-11-25')).toBe(true)
    expect(outOfBounds('2026-11-25', '2026-11-25', '2026-11-25')).toBe(false)
  })

  it('escreve o período curto', () => {
    expect(rangeText({ start: '2026-11-19', end: '2026-11-25' }, 'pt-BR')).toBe('19 – 25 de nov. de 2026')
    expect(rangeText({ start: '2026-11-25', end: '2026-11-25' }, 'pt-BR')).toBe('25 de nov. de 2026')
  })

  it('conta os atalhos até hoje ou até ontem', () => {
    expect(presetDays('last_7_days', '2026-11-25', true)).toEqual({ start: '2026-11-19', end: '2026-11-25' })
    expect(presetDays('last_7_days', '2026-11-25', false)).toEqual({ start: '2026-11-18', end: '2026-11-24' })
    expect(presetDays('last_month', '2026-01-10', true)).toEqual({ start: '2025-12-01', end: '2025-12-31' })
  })

  it('lê e escreve o período na URL, aceitando o dias antigo', () => {
    const keys = ['last_7_days', 'last_30_days'] as const
    expect(periodFromQuery({ dias: '30' }, [...keys], 'last_7_days', '2026-11-25', true)).toEqual({ preset: 'last_30_days', start: '2026-10-27', end: '2026-11-25' })
    expect(periodFromQuery({ de: '2026-11-01', ate: '2026-11-10' }, [...keys], 'last_7_days', '2026-11-25', true)).toEqual({ preset: null, start: '2026-11-01', end: '2026-11-10' })
    expect(periodFromQuery({ de: 'x', ate: '2026-11-10' }, [...keys], 'last_7_days', '2026-11-25', true).preset).toBe('last_7_days')
    expect(periodQuery({ preset: null, start: '2026-11-01', end: '2026-11-10' })).toEqual({ de: '2026-11-01', ate: '2026-11-10' })
  })
})
