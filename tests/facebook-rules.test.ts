import { describe, expect, it } from 'vitest'
import {
  accountTone,
  alertText,
  campaignsPath,
  changeText,
  childLevel,
  controlErrorText,
  decisionBudget,
  facebookPath,
  formatMoney,
  formatRatio,
  objectState,
  limitDetails,
  overLimit,
  parseAmount,
  parseLimit,
  periodRange,
} from '@/modules/facebook/rules'
import type { FacebookAlert, FacebookChange, FacebookRuleDecision } from '@/modules/facebook/types'

/** Uma linha do histórico de exemplo. */
function change(what: string, data: Record<string, unknown>): FacebookChange {
  return {
    id: 'h1',
    company_id: 'c1',
    account_id: 'a1',
    origin: 'facebook',
    what,
    data,
    happened_at: '2026-11-18T12:00:00Z',
    object_external_id: null,
    level: null,
    object_name: null,
    user_id: null,
    actor_name: null,
  }
}

describe('regras do Facebook', () => {
  it('campanhas ficam fora de /facebook para o menu acender um item só', () => {
    expect(facebookPath(false)).toBe('/facebook')
    expect(campaignsPath(false)).toBe('/campanhas-facebook')
    expect(campaignsPath(true)).toBe('/interno/campanhas-facebook')
  })

  it('o limite digitado aceita vírgula, vazio é sem limite e zero é inválido', () => {
    expect(parseLimit('')).toBeNull()
    expect(parseLimit(' 150,50 ')).toBe('150.50')
    expect(parseLimit('0')).toBeUndefined()
    expect(parseLimit('12.345')).toBeUndefined()
    expect(parseLimit('abc')).toBeUndefined()
  })

  it('o período inclui hoje', () => {
    expect(periodRange(7, new Date(2026, 10, 18))).toEqual({ from: '2026-11-12', to: '2026-11-18' })
  })

  it('campanha abre conjuntos, conjunto abre anúncios e anúncio abre o detalhe', () => {
    expect(childLevel('campaign')).toBe('adset')
    expect(childLevel('adset')).toBe('ad')
    expect(childLevel('ad')).toBeNull()
  })

  it('o gasto do mês é comparado ao limite mensal', () => {
    expect(overLimit({ month_spend: '100', monthly_limit: null })).toBe(false)
    expect(overLimit({ month_spend: '85', monthly_limit: '100' }, true)).toBe(true)
    expect(overLimit({ month_spend: '85', monthly_limit: '100' })).toBe(false)
    expect(overLimit({ month_spend: '100', monthly_limit: '100' })).toBe(true)
  })

  it('a situação do objeto prioriza a revisão do Facebook', () => {
    expect(objectState({ active: true, review: 'rejected', effective_status: 'DISAPPROVED' }).key).toBe('fb.state.rejected')
    expect(objectState({ active: true, review: 'pending', effective_status: 'PENDING_REVIEW' }).key).toBe('fb.state.review')
    expect(objectState({ active: false, review: null, effective_status: 'PAUSED' }).tone).toBe('neutral')
    expect(accountTone('unsettled')).toBe('bad')
  })

  it('formata dinheiro na moeda da conta e frações como porcentagem', () => {
    expect(formatMoney('1234.5', 'BRL', 'pt-BR')).toBe('R$ 1.234,50')
    expect(formatMoney(null, 'BRL', 'pt-BR')).toBe('–')
    expect(formatRatio(0.255, 'en')).toBe('25.5%')
  })

  it('monta os textos do histórico e dos avisos', () => {
    expect(changeText(change('object.status', { before: 'ACTIVE', after: 'PAUSED' }))).toEqual({
      key: 'fb.change.status',
      params: { before: 'ACTIVE', after: 'PAUSED', what: 'object.status' },
    })
    expect(changeText(change('outra.coisa', {})).key).toBe('fb.change.other')
    const alert: FacebookAlert = {
      id: 'x1',
      company_id: 'c1',
      kind: 'ad_rejected',
      created_at: '2026-11-18T12:00:00Z',
      account: { id: 'a1', external_id: 'act_1', name: 'CA 01', currency: 'BRL' },
      profile_id: null,
      object_external_id: 'ad1',
      data: { object_name: 'Carrossel' },
      read: false,
    }
    expect(alertText(alert)).toEqual({ key: 'fb.alert.ad_rejected', params: { account: 'CA 01', profile: '–', ad: 'Carrossel' } })
  })

  it('o erro de limite diz qual limite e quanto ainda cabe', () => {
    const details = { period: 'daily', scope: 'account', room: '150', currency: 'BRL' }
    expect(limitDetails(details)).toEqual(details)
    expect(limitDetails({ period: 'weekly' })).toBeNull()
    const text = controlErrorText('facebook_limit_exceeded', details, 'pt-BR')
    expect(text?.key).toBe('fb.limitExceeded.daily.account')
    expect(text?.params.room).toContain('150,00')
    expect(controlErrorText('facebook_error', details, 'pt-BR')).toBeNull()
  })

  it('a decisão das regras mostra o orçamento antes e depois, de micros para o valor', () => {
    const decision: FacebookRuleDecision = {
      id: 'd1',
      object_external_id: 's1',
      day: '2026-11-18',
      action: 'scale_up',
      decided_at: '2026-11-19T09:00:00Z',
      roi: 64,
      data: { before: 100_000_000, after: 110_000_000 },
    }
    expect(decisionBudget(decision)).toEqual({ before: '100', after: '110' })
    expect(decisionBudget({ ...decision, data: {} })).toEqual({ before: null, after: null })
  })

  it('o orçamento digitado precisa ser maior que zero', () => {
    expect(parseAmount('12,50')).toBe('12.50')
    expect(parseAmount('')).toBeUndefined()
    expect(parseAmount('0')).toBeUndefined()
  })
})
