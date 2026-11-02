import { describe, expect, it } from 'vitest'
import { alertDefinition, alertForm, alertInput, alertState, conditionText, muteUntil, parseValue } from '@/modules/alerts/rules'
import type { Alert } from '@/modules/alerts/types'

/** Um alerta salvo de queda de receita por cliente, num cliente só. */
function savedAlert(overrides: Partial<Alert> = {}): Alert {
  const form = { ...alertForm(null, 'revenue', 'user-1'), name: 'Queda', clientId: 'client-9' }
  const definition = alertDefinition(form)
  if (!definition) throw new Error('definição vazia')
  return {
    id: 'alert-1',
    name: 'Queda',
    definition,
    recipient_user_ids: ['user-1', 'user-2'],
    currency: 'USD',
    owner_user_id: 'user-1',
    created_by: 'user-1',
    created_at: '2026-11-01T10:00:00Z',
    updated_at: '2026-11-01T10:00:00Z',
    muted_until: null,
    last_checked_at: null,
    firing: false,
    last_event: null,
    editable: true,
    ...overrides,
  }
}

describe('alertas', () => {
  it('lê o valor com % ou vírgula e recusa o que não é número', () => {
    expect(parseValue('20%')).toBe('20')
    expect(parseValue(' 1,5 ')).toBe('1.5')
    expect(parseValue('abc')).toBeNull()
    expect(parseValue('')).toBeNull()
  })

  it('monta a definição com o cliente, a dimensão e a base só na queda ou alta', () => {
    const form = { ...alertForm(null, 'revenue', 'user-1'), clientId: 'client-9' }
    const definition = alertDefinition(form)
    expect(definition?.query.metrics).toEqual(['revenue'])
    expect(definition?.query.dimensions).toEqual(['client'])
    expect(definition?.query.filters).toEqual([{ field: 'client', operator: 'eq', values: ['client-9'] }])
    expect(definition?.baseline).toBe('average_7_days')
    const above = alertDefinition({ ...form, condition: 'above', value: '100', groupBy: '' })
    expect(above?.baseline).toBeNull()
    expect(above?.query.dimensions).toEqual([])
    expect(alertDefinition({ ...form, value: '0' })).toBeNull()
    expect(alertDefinition({ ...form, metric: '' })).toBeNull()
  })

  it('só monta o corpo com nome, regra e alguém para receber', () => {
    const form = alertForm(null, 'revenue', 'user-1')
    expect(alertInput(form)).toBeNull()
    expect(alertInput({ ...form, name: ' Queda ' })?.name).toBe('Queda')
    expect(alertInput({ ...form, name: 'Queda', recipients: [] })).toBeNull()
  })

  it('volta ao formulário a partir do alerta salvo', () => {
    const form = alertForm(savedAlert(), 'ecpm', 'user-3')
    expect(form).toMatchObject({ name: 'Queda', metric: 'revenue', groupBy: 'client', clientId: 'client-9', condition: 'drop', value: '20', recipients: ['user-1', 'user-2'] })
  })

  it('descreve a regra e o estado', () => {
    const alert = savedAlert()
    expect(conditionText(alert.definition, 'Receita', String)).toContain('20%')
    expect(alertState(alert)).toBe('on')
    expect(alertState(savedAlert({ firing: true }))).toBe('firing')
    const now = new Date('2026-11-02T12:00:00Z')
    expect(alertState(savedAlert({ firing: true, muted_until: muteUntil(1, now) }), now)).toBe('muted')
    expect(muteUntil(7, now)).toBe('2026-11-09T12:00:00.000Z')
  })
})
