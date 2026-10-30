import { describe, expect, it } from 'vitest'
import { activeByRole, adjustmentValid, changeNotes, discount, emptyRuleForm, eventOf, formatDay, localToday, newRuleForm, personGoalAmount, ruleBody, ruleErrors, splitEvent, takenEvents, toIssue, windowState } from '@/modules/internal/commissions/rules'
import type { CommissionStatus } from '@/modules/internal/commissions/types'

describe('regras de comissão no papel', () => {
  it('o evento sai do tipo e do alvo, e volta', () => {
    expect(eventOf('reactivated', 'network')).toBe('network_reactivated')
    expect(splitEvent('site_created')).toEqual({ kind: 'created', target: 'site' })
  })

  it('confere percentual, espera e dias recebendo', () => {
    const form = { ...emptyRuleForm(), percentage: '5,5', offset: '7', duration: '30' }
    expect(ruleErrors(form, 'pt')).toEqual({})
    expect(ruleErrors({ ...form, percentage: '0' }, 'pt').percentage).toBeTruthy()
    expect(ruleErrors({ ...form, percentage: '1,234' }, 'pt').percentage).toBeTruthy()
    expect(ruleErrors({ ...form, offset: '366' }, 'pt').offset).toBeTruthy()
    expect(ruleErrors({ ...form, duration: '0' }, 'pt').duration).toBeTruthy()
    expect(ruleErrors({ ...form, duration: '', noEnd: true }, 'pt')).toEqual({})
  })

  it('monta o corpo: transferência só com cliente e com prazo', () => {
    const form = { ...emptyRuleForm(), percentage: '5,5', offset: '7', duration: '30', transfer: 'r2' }
    expect(ruleBody(form, 'pt')).toEqual({ event: 'client_created', percentage: '5.50', start_offset_days: 7, duration_days: 30, transfer_to_role_id: 'r2' })
    expect(ruleBody({ ...form, target: 'site' }, 'pt').transfer_to_role_id).toBeNull()
    expect(ruleBody({ ...form, noEnd: true }, 'pt')).toMatchObject({ duration_days: null, transfer_to_role_id: null })
  })

  it('o evento que o papel já tem fica fora, menos o da própria regra', () => {
    const rules = [{ id: 'a', event: 'client_created' as const }, { id: 'b', event: 'site_created' as const }]
    expect([...takenEvents(rules, 'a')]).toEqual(['site_created'])
  })
})

describe('telas da comissão', () => {
  it('mostra a data do dia sem andar com o fuso', () => {
    expect(formatDay('2026-10-01', 'pt-BR')).toBe('01/10/2026')
  })

  it('diz como o prazo está no mês', () => {
    const base = { starts_on: '2026-10-01', ends_on: '2026-10-30', stopped_on: null }
    expect(windowState(base, '2026-10-29')).toEqual({ kind: 'ends', date: '2026-10-30' })
    expect(windowState(base, '2026-10-31')).toEqual({ kind: 'ended', date: '2026-10-30' })
    expect(windowState({ ...base, stopped_on: '2026-10-10' }, '2026-10-29')).toEqual({ kind: 'stopped', date: '2026-10-10' })
    expect(windowState({ ...base, ends_on: null }, '2026-10-29')).toEqual({ kind: 'endless', date: null })
    expect(windowState({ ...base, starts_on: null, ends_on: null }, '2026-10-29')).toEqual({ kind: 'waiting', date: null })
  })

  it('separa quem tem o mês validado para emitir', () => {
    const person = (id: string, status: CommissionStatus) => ({ user: { id, name: id, email: `${id}@g.com`, locale: 'pt' as const, image_url: null }, role_name: null, month: { month: '2026-09-01', base: '0', commission: '0', deduction: '0', adjustments: '0', total: '10.50', status } })
    const ready = toIssue([person('ana', 'validated'), person('bia', 'issued'), person('caio', 'validated')])
    expect(ready.map((item) => item.user.id)).toEqual(['ana', 'caio'])
  })

  it('aceita desconto só maior que zero e com motivo', () => {
    expect(adjustmentValid('40,00', 'banida', 'pt')).toBe(true)
    expect(adjustmentValid('0', 'banida', 'pt')).toBe(false)
    expect(adjustmentValid('40', '  ', 'pt')).toBe(false)
  })
})

describe('regra nova', () => {
  it('abre no primeiro evento que o papel ainda não tem', () => {
    expect(newRuleForm(new Set())).toMatchObject({ kind: 'created', target: 'client' })
    expect(newRuleForm(new Set(['client_created']))).toMatchObject({ kind: 'created', target: 'network' })
    expect(newRuleForm(new Set(['client_created', 'network_created', 'site_created']))).toMatchObject({ kind: 'reactivated', target: 'client' })
  })
})

describe('meta mensal do papel', () => {
  const months = Array.from({ length: 12 }, (_, index) => String((index + 1) * 1000))
  it('por pessoa: cada pessoa tem o valor do mês inteiro', () => {
    expect(personGoalAmount(months, 'per_member', 3, '2026-10')).toBe(10000)
  })
  it('dividida: o valor do mês é dividido por quem tem o papel', () => {
    expect(personGoalAmount(months, 'split', 4, '2026-10')).toBe(2500)
  })
  it('dividida sem ninguém no papel fica sem valor', () => {
    expect(personGoalAmount(months, 'split', 0, '2026-10')).toBeNull()
  })
})

describe('correções da revisão', () => {
  it('o desconto vem negativo da API e aparece como valor positivo', () => {
    expect(discount('-40.00')).toBe(40)
    expect(discount('0.00')).toBe(0)
    expect(discount(null)).toBe(0)
  })

  it('o dia de hoje é o do relógio local, não o de UTC', () => {
    expect(localToday(new Date(2026, 9, 31, 22, 30))).toBe('2026-10-31')
    expect(localToday(new Date(2026, 0, 5, 0, 10))).toBe('2026-01-05')
  })

  it('conta só as pessoas ativas de cada papel', () => {
    const member = (role: string | null, status: 'active' | 'suspended') => ({ role: role ? { id: role } : null, status })
    const counts = activeByRole([member('r1', 'active'), member('r1', 'suspended'), member('r1', 'active'), member('r2', 'active'), member(null, 'active')])
    expect(counts.get('r1')).toBe(2)
    expect(counts.get('r2')).toBe(1)
  })
})

describe('pendências da revisão', () => {
  it('a troca de responsável diz o que segue, o que para e o que chega', () => {
    expect(changeNotes({ continues: 2, stops: 0, arrives: 0 })).toEqual(['continues'])
    expect(changeNotes({ continues: 1, stops: 1, arrives: 1 })).toEqual(['continues', 'stops', 'arrives'])
    expect(changeNotes({ continues: 0, stops: 0, arrives: 0 })).toEqual(['none'])
  })
})
