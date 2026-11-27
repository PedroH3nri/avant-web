/** Regras de tela da Saúde da carteira: filtros, rótulos e o texto de cada sinal. */

import { t, type Key } from '@/lib/i18n'
import type { HealthSignal, HealthSignalScore, HealthStatus, PortfolioHealthRow } from '@/modules/internal/portfolio_health/types'

export interface HealthFilters {
  status: HealthStatus | 'all'
  manager: string
  query: string
}

export const NO_MANAGER = 'none'
export const STATUSES: HealthStatus[] = ['at_risk', 'attention', 'healthy']
export const DROP_MIN = 5
export const DROP_MAX = 90

export const STATUS_LABEL: Record<HealthStatus, Key> = { healthy: 'ph.status.healthy', attention: 'ph.status.attention', at_risk: 'ph.status.at_risk' }
export const STATUS_TONE: Record<HealthStatus, 'ok' | 'ochre' | 'bad'> = { healthy: 'ok', attention: 'ochre', at_risk: 'bad' }
export const SIGNAL_LABEL: Record<HealthSignal, Key> = {
  revenue: 'ph.signal.revenue',
  usage: 'ph.signal.usage',
  install: 'ph.signal.install',
  nps: 'ph.signal.nps',
  onboarding: 'ph.signal.onboarding',
}
const STEP_LABEL: Record<string, Key> = {
  network: 'ph.step.network',
  sites: 'ph.step.sites',
  ad_tag: 'ph.step.ad_tag',
  install: 'ph.step.install',
  done: 'ph.step.done',
}

/** Os clientes que passam pela situação, pelo gerente e pela busca no nome. */
export function filterRows(rows: PortfolioHealthRow[], filters: HealthFilters): PortfolioHealthRow[] {
  const needle = filters.query.trim().toLowerCase()
  return rows.filter(
    (row) =>
      (filters.status === 'all' || row.status === filters.status) &&
      (filters.manager === 'all' || (row.manager_id ?? NO_MANAGER) === filters.manager) &&
      row.client_name.toLowerCase().includes(needle),
  )
}

/** Os gerentes que aparecem na tabela, sem repetir, pelo nome. */
export function managersOf(rows: PortfolioHealthRow[]): { id: string; name: string }[] {
  const found = new Map<string, string>()
  for (const row of rows) if (row.manager_id && row.manager_name) found.set(row.manager_id, row.manager_name)
  return [...found].map(([id, name]) => ({ id, name })).sort((first, second) => first.name.localeCompare(second.name))
}

/** A cor da barra da nota: verde, ocre ou vermelho pela situação. */
export function scoreColor(score: number): string {
  if (score >= 70) return 'bg-ok'
  if (score >= 40) return 'bg-ochre'
  return 'bg-bad'
}

/** O texto que explica o sinal, com os números que vieram da API. */
export function signalDetail(signal: HealthSignalScore): string {
  const values = signal.values
  if (signal.signal === 'revenue') {
    return values.change === null || values.change === undefined ? t('ph.detail.revenueNew') : t('ph.detail.revenue', { change: String(values.change) })
  }
  if (signal.signal === 'usage') return t('ph.detail.usage', { n: Number(values.active_days_30d ?? 0) })
  if (signal.signal === 'install') {
    if (values.install_ok) return t('ph.detail.installOk')
    return values.ad_tag_published ? t('ph.detail.installError') : t('ph.detail.installPending')
  }
  if (signal.signal === 'nps') return values.nps === null || values.nps === undefined ? t('ph.detail.npsNone') : t('ph.detail.nps', { n: Number(values.nps) })
  return t(STEP_LABEL[String(values.step)] ?? 'ph.step.network')
}

/** Diz se o limite do aviso é um número inteiro de 5 a 90. */
export function dropPercentOk(value: string): boolean {
  if (!/^\d{1,2}$/.test(value.trim())) return false
  const percent = Number(value)
  return percent >= DROP_MIN && percent <= DROP_MAX
}
