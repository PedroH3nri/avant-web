import { describe, expect, it } from 'vitest'
import { accountRoi, byIntegration, byPerson, costTotals, limitUse, spendShare } from '@/modules/cost_control/rules'
import type { CostControlAccount } from '@/modules/cost_control/types'

/** Uma conta de anúncio com o mínimo que as regras usam. */
function account(overrides: Partial<CostControlAccount>): CostControlAccount {
  return {
    integration: 'facebook',
    account_id: 'a1',
    name: 'Conta',
    account_currency: 'USD',
    site_id: 's1',
    site_domain: 'site.com',
    person: { id: 'p1', name: 'Ana', email: 'ana@site.com' },
    by_owner: false,
    spend: '100',
    revenue: '150',
    month_spend: '100',
    monthly_limit: null,
    ...overrides,
  }
}

const ACCOUNTS = [
  account({ account_id: 'a1', spend: '100', revenue: '150' }),
  account({ account_id: 'a2', integration: 'google_ads', spend: '50', revenue: '25', person: { id: 'p2', name: 'Dono', email: 'dono@site.com' }, by_owner: true }),
  account({ account_id: 'a3', integration: 'google_ads', spend: '50', revenue: null, site_id: null, site_domain: null }),
]

describe('regras do Controle de custos', () => {
  it('soma o gasto de todas e o lucro e o ROI só das contas com site', () => {
    expect(costTotals(ACCOUNTS)).toEqual({ accounts: 3, spend: 200, revenue: 175, profit: 25, roi: 25 / 150, noSite: 1 })
    expect(costTotals([]).roi).toBeNull()
  })

  it('agrupa por integração e por pessoa, da pessoa que mais gasta para a que menos gasta', () => {
    expect(byIntegration(ACCOUNTS).map((item) => [item.integration, item.spend])).toEqual([
      ['facebook', 100],
      ['google_ads', 100],
    ])
    const people = byPerson(ACCOUNTS, 'Dono da Empresa')
    expect(people.map((item) => [item.name, item.spend, item.byOwner, item.integrations])).toEqual([
      ['Ana', 150, false, ['facebook', 'google_ads']],
      ['Dono', 50, true, ['google_ads']],
    ])
    expect(byPerson([account({ person: null, by_owner: true })], 'Dono da Empresa')[0]?.name).toBe('Dono da Empresa')
  })

  it('ROI da conta, parte do gasto e uso do limite do mês', () => {
    expect(accountRoi(ACCOUNTS[0]!)).toBe(0.5)
    expect(accountRoi(ACCOUNTS[2]!)).toBeNull()
    expect(accountRoi(account({ spend: '0' }))).toBeNull()
    expect(spendShare(50, 200)).toBe(0.25)
    expect(spendShare(50, 0)).toBe(0)
    expect(limitUse(account({ month_spend: '80', monthly_limit: '100' }))).toBe(0.8)
    expect(limitUse(account({ month_spend: '180', monthly_limit: '100' }))).toBe(1)
    expect(limitUse(account({ monthly_limit: null }))).toBeNull()
  })
})
