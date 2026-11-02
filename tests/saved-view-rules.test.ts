import { describe, expect, it } from 'vitest'
import { cleanFilters, firstValue, monthPeriod, parseSort, periodMonth, sameDefinition, sortValue, toggleColumn } from '@/modules/views/rules'

describe('visões salvas', () => {
  it('tira os filtros vazios', () => {
    expect(cleanFilters({ query: '  ', status: 'active', account_manager_ids: [], role_ids: ['papel'], other: undefined })).toEqual({ status: 'active', role_ids: ['papel'] })
  })

  it('compara definições sem ligar para a ordem dos filtros nem para os vazios', () => {
    const base = { columns: ['client'], filters: { status: 'active', query: 'x' }, sort: { key: 'name', direction: 'asc' as const } }
    expect(sameDefinition(base, { ...base, filters: { query: 'x', status: 'active', account_manager_ids: [] } })).toBe(true)
    expect(sameDefinition(base, { ...base, columns: ['client', 'status'] })).toBe(false)
    expect(sameDefinition(base, { ...base, sort: { key: 'name', direction: 'desc' } })).toBe(false)
  })

  it('monta e lê a ordem do seletor', () => {
    expect(sortValue({ key: 'created_at', direction: 'desc' })).toBe('created_at:desc')
    expect(parseSort('name:asc')).toEqual({ key: 'name', direction: 'asc' })
    expect(parseSort('name:up')).toBeNull()
  })

  it('liga e desliga colunas na ordem do catálogo, sem ficar sem nenhuma', () => {
    const order = ['client', 'contact', 'manager', 'status']
    expect(toggleColumn(['status', 'client'], 'manager', order)).toEqual(['client', 'manager', 'status'])
    expect(toggleColumn(['client'], 'client', order)).toEqual(['client'])
    expect(firstValue(['a', 'b'])).toBe('a')
    expect(firstValue(undefined)).toBe('')
  })
})

describe('período das visões', () => {
  it('traduz mês atual e anterior, inclusive na virada do ano', () => {
    expect(periodMonth('current_month', '2026-11-02')).toBe('2026-11')
    expect(periodMonth('previous_month', '2026-01-15')).toBe('2025-12')
    expect(monthPeriod('2026-10-01', '2026-11-02')).toBe('previous_month')
    expect(monthPeriod('2026-11', '2026-11-02')).toBe('current_month')
    expect(monthPeriod('2026-08', '2026-11-02')).toBeUndefined()
  })
})
