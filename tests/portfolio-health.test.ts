import { describe, expect, it } from 'vitest'
import { dropPercentOk, filterRows, managersOf, scoreColor, signalDetail } from '@/modules/internal/portfolio_health/rules'
import type { PortfolioHealthRow } from '@/modules/internal/portfolio_health/types'

/** Uma linha da carteira com os campos que o teste muda. */
function row(changes: Partial<PortfolioHealthRow>): PortfolioHealthRow {
  return {
    client_id: 'c1',
    client_name: 'Blog Exemplo',
    score: 35,
    status: 'at_risk',
    main_reason: 'revenue',
    revenue_30d: '120.00',
    revenue_change: '-40.00',
    last_access: null,
    manager_id: 'm1',
    manager_name: 'Marina',
    day: '2026-11-27',
    revenue_drop: false,
    ...changes,
  }
}

describe('saúde da carteira', () => {
  it('filtra pela situação, pelo gerente e pelo nome', () => {
    const rows = [row({}), row({ client_id: 'c2', client_name: 'Guia do Pet', status: 'healthy', manager_id: null, manager_name: null })]
    expect(filterRows(rows, { status: 'at_risk', manager: 'all', query: '' }).map((item) => item.client_id)).toEqual(['c1'])
    expect(filterRows(rows, { status: 'all', manager: 'none', query: '' }).map((item) => item.client_id)).toEqual(['c2'])
    expect(filterRows(rows, { status: 'all', manager: 'all', query: 'pet' }).map((item) => item.client_id)).toEqual(['c2'])
    expect(managersOf(rows)).toEqual([{ id: 'm1', name: 'Marina' }])
  })

  it('pinta a nota pela situação', () => {
    expect(scoreColor(70)).toBe('bg-ok')
    expect(scoreColor(40)).toBe('bg-ochre')
    expect(scoreColor(39)).toBe('bg-bad')
  })

  it('explica cada sinal com os números da API', () => {
    expect(signalDetail({ signal: 'usage', points: 50, weight: 20, values: { active_days_30d: 6 } })).toContain('6')
    expect(signalDetail({ signal: 'nps', points: 60, weight: 15, values: { nps: null } })).not.toContain('{n}')
    expect(signalDetail({ signal: 'onboarding', points: 50, weight: 10, values: { step: 'ad_tag' } })).not.toBe('')
  })

  it('aceita o limite do aviso de 5 a 90', () => {
    expect(dropPercentOk('25')).toBe(true)
    expect(dropPercentOk('4')).toBe(false)
    expect(dropPercentOk('91')).toBe(false)
    expect(dropPercentOk('2,5')).toBe(false)
  })
})
