import { describe, expect, it } from 'vitest'
import { dict } from '@/lib/i18n/source'
import {
  emptyEmail,
  emptyRule,
  fillSample,
  filterMembers,
  filterSends,
  memberState,
  percent,
  repeatDays,
  repeatOf,
  ruleProblem,
} from '@/modules/internal/nurture/rules'
import type { NurtureMember, NurtureRuleInput, NurtureSend } from '@/modules/internal/nurture/types'

/** Uma régua pronta para salvar, com os textos nos três idiomas. */
function readyRule(changes: Partial<NurtureRuleInput> = {}): NurtureRuleInput {
  const texts = { pt: 'Oi {nome}', en: 'Hi {nome}', es: 'Hola {nome}' }
  return { ...emptyRule(), name: 'Esfriando', emails: [{ delay_days: 0, subject: texts, body: texts }], ...changes }
}

/** Um cliente da régua. */
function member(changes: Partial<NurtureMember> = {}): NurtureMember {
  return {
    enrollment_id: 'e1',
    client_id: 'c1',
    client_name: 'Guia do Pet',
    manager_name: 'Marina',
    entered_at: '2026-11-20T10:00:00Z',
    status: 'active',
    sent: 1,
    total_emails: 2,
    last_sent_at: '2026-11-20T10:00:00Z',
    opened: false,
    returned: false,
    unsubscribed: false,
    ...changes,
  }
}

/** Um envio da régua. */
function send(changes: Partial<NurtureSend> = {}): NurtureSend {
  return {
    id: 's1',
    rule_id: 'r1',
    rule_name: 'Esfriando',
    client_id: 'c1',
    client_name: 'Açaí Notícias',
    email_index: 0,
    locale: 'pt',
    to_email: 'contato@acai.com',
    subject: 'Oi',
    status: 'delivered',
    created_at: '2026-11-22T10:00:00Z',
    sent_at: '2026-11-22T10:00:00Z',
    status_at: null,
    returned_at: null,
    ...changes,
  }
}

describe('réguas de nutrição', () => {
  it('diz o que falta para salvar a régua', () => {
    expect(ruleProblem(readyRule())).toBeNull()
    expect(ruleProblem(readyRule({ name: 'ab' }))).toBe('nurture.problem.name')
    expect(ruleProblem(readyRule({ measure: 'onboarding_step', step: null }))).toBe('nurture.problem.step')
    expect(ruleProblem(readyRule({ manager_scope: 'one', manager_id: null }))).toBe('nurture.problem.manager')
    expect(ruleProblem(readyRule({ stage: 'Esfriando!' }))).toBe('nurture.problem.stage')
    expect(ruleProblem({ ...readyRule(), emails: [emptyEmail(true)] })).toBe('nurture.problem.texts')
    const second = { ...readyRule().emails[0]!, delay_days: 0 }
    expect(ruleProblem(readyRule({ emails: [...readyRule().emails, second] }))).toBe('nurture.problem.delay')
  })

  it('troca as variáveis pelo cliente de exemplo e converte a repetição', () => {
    expect(fillSample('Oi {nome}, a {empresa} sumiu há {dias_sem_acesso} dias')).toBe('Oi Marina, a Guia do Pet sumiu há 16 dias')
    expect(repeatOf(null)).toBe('once')
    expect(repeatOf(60)).toBe('60')
    expect(repeatDays('90')).toBe(90)
    expect(repeatDays('once')).toBeNull()
    expect(percent(1, 3)).toBe(33)
    expect(percent(0, 0)).toBeNull()
  })

  it('mostra quem voltou e quem se descadastrou antes da situação da passagem', () => {
    expect(memberState(member())).toBe('active')
    expect(memberState(member({ returned: true }))).toBe('returned')
    expect(memberState(member({ returned: true, unsubscribed: true }))).toBe('unsubscribed')
    expect(memberState(member({ status: 'completed' }))).toBe('completed')
  })

  it('filtra clientes e envios por situação, gerente, abertura e busca sem acento', () => {
    const members = [member(), member({ enrollment_id: 'e2', client_name: 'Açaí', manager_name: null, opened: true })]
    expect(filterMembers(members, 'all', 'all', 'true', '').map((item) => item.enrollment_id)).toEqual(['e2'])
    expect(filterMembers(members, 'all', '', 'all', '').map((item) => item.enrollment_id)).toEqual(['e2'])
    expect(filterMembers(members, 'active', 'all', 'all', 'acai').map((item) => item.enrollment_id)).toEqual(['e2'])
    const sends = [send(), send({ id: 's2', email_index: 1, status: 'opened', client_name: 'Blog' })]
    expect(filterSends(sends, 'opened', 'all', '').map((item) => item.id)).toEqual(['s2'])
    expect(filterSends(sends, 'all', '0', 'ACAI').map((item) => item.id)).toEqual(['s1'])
  })

  it('tem os textos da nutrição nos três idiomas', () => {
    const keys = Object.keys(dict).filter((key) => key.startsWith('nurture.') || key.startsWith('unsub.'))
    expect(keys.length).toBeGreaterThan(100)
    for (const key of keys) expect((dict as unknown as Record<string, readonly string[]>)[key]!.every((text) => text.length > 0)).toBe(true)
  })
})
