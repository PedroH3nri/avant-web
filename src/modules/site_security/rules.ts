/** Regras de tela do card Segurança do site: a soma dos 7 dias, as linhas de sinal e o resumo. */

import { t } from '@/lib/i18n'
import type { IntegritySignal, SiteSecurity } from '@/modules/site_security/types'

export const SIGNAL_ORDER: IntegritySignal[] = ['content_mismatch', 'body_swap', 'frame', 'covered_ad', 'overlay', 'cloaker_script', 'redirect', 'back_hijack']
export const MIN_ROWS = 4

/** Os 7 dias somados: visitas, visitas com sinal, com os anúncios tirados e a contagem por sinal. */
export function securityTotals(security: SiteSecurity): { pageViews: number; flagged: number; blocked: number; signals: Map<IntegritySignal, number> } {
  const signals = new Map<IntegritySignal, number>()
  let pageViews = 0
  let flagged = 0
  let blocked = 0
  for (const day of security.days) {
    pageViews += day.page_views
    flagged += day.flagged
    blocked += day.blocked
    for (const signal of SIGNAL_ORDER) signals.set(signal, (signals.get(signal) ?? 0) + (day.signals[signal] ?? 0))
  }
  return { pageViews, flagged, blocked, signals }
}

/** As linhas da lista: os sinais vistos, do mais comum ao menos, completadas até quatro com os zerados. */
export function signalRows(signals: Map<IntegritySignal, number>): { signal: IntegritySignal; count: number }[] {
  const rows = SIGNAL_ORDER.map((signal) => ({ signal, count: signals.get(signal) ?? 0 }))
  const seen = rows.filter((row) => row.count > 0).sort((first, second) => second.count - first.count)
  const empty = rows.filter((row) => row.count === 0).slice(0, Math.max(0, MIN_ROWS - seen.length))
  return [...seen, ...empty]
}

/** O selo dos sinais: suspeita aberta, sem visitas com a ad tag, com sinais ou nada suspeito. */
export function signalStatus(security: SiteSecurity, pageViews: number, flagged: number): { tone: 'bad' | 'warn' | 'ok' | 'neutral'; label: string } {
  if (security.alert) return { tone: 'bad', label: t('sec.suspected') }
  if (pageViews === 0) return { tone: 'neutral', label: t('sec.noVisits') }
  if (flagged > 0) return { tone: 'warn', label: t('sec.someSignals') }
  return { tone: 'ok', label: t('sec.clean') }
}
