/** Regras de tela dos alertas: o formulário, a definição enviada à API, o texto da regra e o estado. */

import { t, type Key } from '@/lib/i18n'
import type { Alert, AlertBaseline, AlertCondition, AlertDefinition, AlertInput } from '@/modules/alerts/types'

export const ALERT_CONDITIONS: AlertCondition[] = ['drop', 'rise', 'below', 'above']

export const ALERT_BASELINES: AlertBaseline[] = ['average_7_days', 'same_day_last_week', 'previous_day']

/** Como o alerta se separa: no total ('') ou um por cliente, network ou site. */
export const ALERT_GROUPS = ['', 'client', 'network', 'site'] as const

export type AlertGroup = (typeof ALERT_GROUPS)[number]

export interface AlertForm {
  name: string
  metric: string
  groupBy: AlertGroup
  /** Um cliente só ('' para todos os que a pessoa vê). */
  clientId: string
  condition: AlertCondition
  value: string
  baseline: AlertBaseline
  recipients: string[]
}

/** Diz se a condição compara com uma base (queda ou alta em %). */
export const compares = (condition: AlertCondition) => condition === 'drop' || condition === 'rise'

/** O formulário de um alerta existente, ou o de um novo com a métrica e a pessoa dadas. */
export function alertForm(alert: Alert | null, metric: string, userId: string): AlertForm {
  if (!alert) {
    return { name: '', metric, groupBy: 'client', clientId: '', condition: 'drop', value: '20', baseline: 'average_7_days', recipients: [userId] }
  }
  const { query, condition, value, baseline } = alert.definition
  const clientFilter = query.filters.find((item) => item.field === 'client')
  const groupBy = (query.dimensions[0] ?? '') as AlertGroup
  return {
    name: alert.name,
    metric: query.metrics[0] ?? metric,
    groupBy: ALERT_GROUPS.includes(groupBy) ? groupBy : '',
    clientId: clientFilter?.values[0] ?? '',
    condition,
    value,
    baseline: baseline ?? 'average_7_days',
    recipients: [...alert.recipient_user_ids],
  }
}

/** O número digitado ("20%", "1,5") como texto decimal, ou vazio se não é número. */
export function parseValue(raw: string): string | null {
  const cleaned = raw.trim().replace('%', '').replace(/\s/g, '').replace(',', '.')
  if (!cleaned || !/^-?\d+(\.\d+)?$/.test(cleaned)) return null
  return cleaned
}

/** A definição que a API confere, ou vazio enquanto o formulário não fecha uma regra. */
export function alertDefinition(form: AlertForm): AlertDefinition | null {
  const value = parseValue(form.value)
  if (!form.metric || value === null) return null
  if (compares(form.condition) && Number(value) <= 0) return null
  const filters = form.clientId ? [{ field: 'client', operator: 'eq' as const, values: [form.clientId] }] : []
  return {
    schema_version: 1,
    query: {
      schema_version: 1,
      source: 'gam',
      metrics: [form.metric],
      period: { preset: 'yesterday', start: null, end: null },
      dimensions: form.groupBy ? [form.groupBy] : [],
      filters,
      compare: false,
      order: [],
      limit: 1000,
    },
    condition: form.condition,
    value,
    baseline: compares(form.condition) ? form.baseline : null,
  }
}

/** O corpo do POST/PUT, ou vazio enquanto falta nome, regra ou quem recebe. */
export function alertInput(form: AlertForm): AlertInput | null {
  const definition = alertDefinition(form)
  const name = form.name.trim()
  if (!definition || !name || form.recipients.length === 0) return null
  return { name, definition, recipient_user_ids: form.recipients }
}

/** A regra em uma frase: "eCPM cai mais de 20% contra a média dos 7 dias anteriores". */
export function conditionText(definition: AlertDefinition, metricLabel: string, formatValue: (value: number) => string): string {
  const { condition, value, baseline } = definition
  if (compares(condition)) {
    return t(`alerts.rule.${condition}` as Key, { metric: metricLabel, value: `${Number(value)}%`, baseline: baseline ? t(`alerts.baseline.${baseline}` as Key) : '' })
  }
  return t(`alerts.rule.${condition}` as Key, { metric: metricLabel, value: formatValue(Number(value)), baseline: '' })
}

/** O estado do alerta agora: silenciado, disparado (algum assunto fora do normal) ou ativo. */
export function alertState(alert: Alert, now: Date = new Date()): 'muted' | 'firing' | 'on' {
  if (alert.muted_until && new Date(alert.muted_until) > now) return 'muted'
  return alert.firing ? 'firing' : 'on'
}

/** A data de agora mais os dias dados, em ISO, para silenciar. */
export function muteUntil(days: number, now: Date = new Date()): string {
  return new Date(now.getTime() + days * 24 * 3600 * 1000).toISOString()
}
