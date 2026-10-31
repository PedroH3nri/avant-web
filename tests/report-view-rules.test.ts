import { describe, expect, it } from 'vitest'
import { emptyDraft, savedPeriod, thumbPath, thumbShape, viewChanged, viewDraft } from '@/modules/reports/rules'
import type { ReportPreview } from '@/modules/reports/types'
import { pageCount, pageSlice } from '@/lib/pagination'

/** Miniatura com os pontos dados. */
const preview = (values: string[]): ReportPreview => ({
  metric: 'revenue',
  money: true,
  dimension: values.length ? 'date' : null,
  points: values.map((value, index) => ({ label: `2026-10-0${index + 1}`, value })),
  total: '10',
  previous_total: '8',
  currency: 'BRL',
})

describe('miniatura e leitura do relatório salvo', () => {
  it('escolhe o desenho pelo tipo do gráfico e cai no total sem pontos', () => {
    expect(thumbShape('line', preview(['1', '2']))).toBe('line')
    expect(thumbShape('area', null)).toBe('area')
    expect(thumbShape('pie', preview(['1']))).toBe('bars')
    expect(thumbShape('table', undefined)).toBe('rows')
    expect(thumbShape('kpi', preview(['1']))).toBe('total')
    expect(thumbShape('line', preview([]))).toBe('total')
  })

  it('desenha a série do maior para o alto do quadro, vazio como zero', () => {
    expect(thumbPath([0, 10, null], 100, 50, 5)).toBe('M0.0,45.0L50.0,5.0L100.0,45.0')
    expect(thumbPath([4], 100, 50, 5)).toBe('M50.0,5.0')
    expect(thumbPath([], 100, 50)).toBe('')
    expect(thumbPath([0, 0], 100, 50, 5)).toBe('M0.0,45.0L100.0,45.0')
  })

  it('muda o período só na visita e sabe voltar ao salvo', () => {
    const saved = { ...emptyDraft('R'), period: 'last_7_days' as const, compare: false }
    expect(savedPeriod(saved)).toBe('last_7_days')
    expect(viewChanged(saved, 'last_7_days', false)).toBe(false)
    const shown = viewDraft(saved, 'last_month', true)
    expect(shown).toMatchObject({ period: 'last_month', compare: true, fixedPeriod: null, name: 'R' })
    expect(viewChanged(saved, 'last_month', false)).toBe(true)
  })

  it('mantém as datas fixas do relatório enquanto a visita não troca o período', () => {
    const saved = { ...emptyDraft('R'), fixedPeriod: { start: '2026-09-01', end: '2026-09-30' } }
    expect(savedPeriod(saved)).toBe('fixed')
    expect(viewDraft(saved, 'fixed', true).fixedPeriod).toEqual(saved.fixedPeriod)
    expect(viewDraft(saved, 'yesterday', false).fixedPeriod).toBeNull()
  })
})

describe('páginas de uma lista que já chegou inteira', () => {
  it('corta 10 por página e conta as páginas', () => {
    const items = Array.from({ length: 23 }, (_, index) => index)
    expect(pageSlice(items, 1)).toEqual(items.slice(0, 10))
    expect(pageSlice(items, 3)).toEqual([20, 21, 22])
    expect(pageCount(23)).toBe(3)
    expect(pageCount(0)).toBe(0)
  })
})
