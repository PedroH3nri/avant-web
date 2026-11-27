import { describe, expect, it } from 'vitest'
import { alertText, byManager, changeText, channelKey, childLevel, controlErrorText, customerText, decisionTone, decisionValues, isLevel, objectPath, objectState, parseAmount } from '@/modules/google_ads/rules'
import type { GoogleAdsAccount, GoogleAdsAlert, GoogleAdsChange, GoogleAdsRuleDecision } from '@/modules/google_ads/types'

/** Uma conta de teste com a MCC escolhida. */
function account(name: string, manager: string | null): GoogleAdsAccount {
  return {
    id: name,
    company_id: 'c1',
    customer_id: '1234567890',
    name,
    manager_customer_id: manager,
    manager_name: manager,
    currency: 'BRL',
    time_zone: 'America/Sao_Paulo',
    status: 'enabled',
    login_id: null,
    login_email: null,
    suffix_state: 'missing',
    url_suffix: null,
    site_id: null,
    holder: null,
    daily_limit: null,
    monthly_limit: null,
    on_limit: 'warn',
    month_spend: '0',
    synced_at: null,
  }
}

describe('regras do Google Ads', () => {
  it('formata o número da conta e reconhece os níveis', () => {
    expect(customerText('1234567890')).toBe('123-456-7890')
    expect(customerText('abc')).toBe('abc')
    expect(isLevel('ad_group')).toBe(true)
    expect(isLevel('adset')).toBe(false)
    expect(childLevel('campaign')).toBe('ad_group')
    expect(childLevel('ad')).toBeNull()
    expect(objectPath(true, { level: 'ad', external_id: '9' })).toBe('/interno/campanhas-google-ads/ad/9')
  })

  it('agrupa as contas pela MCC e deixa as sem MCC por último', () => {
    const groups = byManager([account('a', null), account('b', 'Zeta'), account('c', 'Alfa')])
    expect(groups.map((group) => group.manager)).toEqual(['Alfa', 'Zeta', null])
  })

  it('mostra reprovado antes de pausado e o tipo desconhecido como outro', () => {
    expect(objectState({ active: false, review: 'disapproved' }).key).toBe('gads.state.disapproved')
    expect(objectState({ active: true, review: null }).key).toBe('gads.state.active')
    expect(channelKey('SEARCH')).toBe('gads.channel.SEARCH')
    expect(channelKey('LOCAL')).toBe('gads.channel.other')
  })

  it('monta os textos do histórico e dos avisos', () => {
    const change = { what: 'google.update', data: { fields: ['budget', 'status'] } } as unknown as GoogleAdsChange
    expect(changeText(change)).toMatchObject({ key: 'gads.change.googleUpdate', params: { fields: 'budget, status' } })
    const alert = { kind: 'login_revoked', account: null, data: { email: 'dono@gmail.com' } } as unknown as GoogleAdsAlert
    expect(alertText(alert)).toMatchObject({ key: 'gads.alert.login_revoked', params: { email: 'dono@gmail.com' } })
  })

  it('mostra as decisões, o erro de limite e as mudanças pelo Avant', () => {
    const decision = { action: 'cpc_up', data: { before: 1_200_000, after: 1_320_000, text: 'cartão' } } as unknown as GoogleAdsRuleDecision
    expect(decisionValues(decision)).toEqual({ before: '1.2', after: '1.32' })
    expect(decisionTone('failed')).toBe('bad')
    const limit = controlErrorText('google_ads_limit_exceeded', { period: 'daily', scope: 'account', room: '12.50', currency: 'BRL' }, 'pt-BR')
    expect(limit?.key).toBe('gads.limitExceeded.daily.account')
    expect(controlErrorText('facebook_limit_exceeded', {}, 'pt-BR')).toBeNull()
    expect(parseAmount('12,5')).toBe('12.5')
    expect(parseAmount('0')).toBeUndefined()
    const budget = { what: 'object.budget', data: { before: 50_000_000, after: 55_000_000 } } as unknown as GoogleAdsChange
    expect(changeText(budget)).toMatchObject({ key: 'gads.change.budget', params: { budgetBefore: '50', budgetAfter: '55' } })
  })
})
