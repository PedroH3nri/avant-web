import { describe, expect, it } from 'vitest'
import { contractActions, formatRevshare, manualNetworks, parseRevshare } from '@/lib/contracts'
import type { ContractNetwork } from '@/lib/types'

/** Network de contrato mínima para os testes. */
function network(code: string, manual: boolean): ContractNetwork {
  return {
    network: { id: code, network_code: code, display_name: null, delegation: manual ? 'manage_inventory' : 'manage_account' },
    company: { id: 'c1', name: 'Açaí' },
    active: null,
    manual,
  }
}

describe('contratos', () => {
  it('mostra o revshare sem zeros à direita', () => {
    expect(formatRevshare('12.500', 'pt-BR')).toBe('12,5%')
    expect(formatRevshare('15.000', 'en')).toBe('15%')
    expect(formatRevshare('0.125', 'en')).toBe('0.125%')
    expect(formatRevshare('x', 'en')).toBe('–')
  })

  it('lê o revshare digitado com vírgula ou ponto', () => {
    expect(parseRevshare('30')).toBe('30')
    expect(parseRevshare(' 12,5 % ')).toBe('12.5')
    expect(parseRevshare('100.000')).toBe('100.000')
    for (const invalid of ['', '101', '-1', '1.2345', 'abc', '1,2,3']) expect(parseRevshare(invalid)).toBeNull()
  })

  it('só oferece contrato à mão para Manage Inventory', () => {
    expect(manualNetworks([network('1', true), network('2', false)]).map((item) => item.network.id)).toEqual(['1'])
  })

  it('encerra e exclui só contrato manual', () => {
    expect(contractActions({ source: 'manual', status: 'active' })).toEqual({ end: true, remove: true })
    expect(contractActions({ source: 'manual', status: 'ended' })).toEqual({ end: false, remove: true })
    expect(contractActions({ source: 'gam', status: 'active' })).toEqual({ end: false, remove: false })
  })
})
