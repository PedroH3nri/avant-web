import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import { listOrder, useListTable, type ListTableSetup } from '@/modules/views/listTable'

const SETUP: ListTableSetup = {
  table: 'teste',
  filters: ['company_id', 'install', 'state'],
  defaultFilters: ['company_id'],
  columns: ['client', 'install', 'updated'],
  defaultColumns: ['client', 'install'],
  sorts: [
    { key: 'created_at', direction: 'desc' },
    { key: 'name', direction: 'asc' },
  ],
  local: false,
}

afterEach(() => {
  localStorage.clear()
  vi.useRealTimers()
})

describe('tabela no formato novo', () => {
  it('traduz a ordem da tabela para a da API', () => {
    expect(listOrder({ key: 'created_at', direction: 'desc' })).toBe('newest')
    expect(listOrder({ key: 'created_at', direction: 'asc' })).toBe('oldest')
    expect(listOrder({ key: 'domain', direction: 'asc' })).toBe('name_asc')
    expect(listOrder({ key: 'name', direction: 'desc' })).toBe('name_desc')
    expect(listOrder(null)).toBeUndefined()
  })

  it('aplica a visão, recarrega e limpa o valor do filtro que sai da barra', async () => {
    const reload = vi.fn()
    const table = useListTable(SETUP, reload)
    expect(table.current.value).toEqual({ columns: ['client', 'install'], filters: {}, sort: { key: 'created_at', direction: 'desc' }, shown_filters: ['company_id'] })
    table.apply({ columns: ['updated', 'sumiu'], filters: { install: 'error', company_id: 'c1' }, sort: { key: 'name', direction: 'asc' }, shown_filters: ['company_id', 'install'] })
    await nextTick()
    expect(reload).toHaveBeenCalled()
    expect(table.columns.value).toEqual(['updated'])
    expect(table.param('install')).toBe('error')
    expect(table.order()).toBe('name_asc')
    expect(table.filtered.value).toBe(true)
    table.bar.shown.value = ['company_id']
    await nextTick()
    expect(table.param('install')).toBeUndefined()
    table.clearFilters()
    await nextTick()
    expect(table.filtered.value).toBe(false)
  })

  it('no painel do cliente guarda filtros e colunas neste navegador', async () => {
    const first = useListTable({ ...SETUP, local: true }, vi.fn())
    first.bar.shown.value = ['company_id', 'state']
    first.columns.value = ['updated']
    await nextTick()
    const again = useListTable({ ...SETUP, local: true }, vi.fn())
    expect(again.bar.shown.value).toEqual(['company_id', 'state'])
    expect(again.columns.value).toEqual(['updated'])
  })
})
