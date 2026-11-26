/** Regras de tela do HubSpot: nomes dos tipos, a fase do contato, os fatos do card e o filtro dos erros. */

import { formatDate, locale, t, type Key } from '@/lib/i18n'
import type { HubspotActivity, HubspotActivityKind, HubspotFailure, HubspotKind, HubspotRun } from '@/modules/internal/hubspot/types'

export const KINDS: HubspotKind[] = ['contact', 'company', 'deal']
export const ACTIVITY_KINDS: HubspotActivityKind[] = ['note', 'call', 'meeting', 'task']
export const FACT_ORDER = ['created_at', 'last_contacted_at', 'deals', 'revshare', 'closed_at']
export const KIND_LABEL: Record<HubspotKind, Key> = { contact: 'hs.kind.contact', company: 'hs.kind.company', deal: 'hs.kind.deal' }
export const KIND_SOURCE: Record<HubspotKind, Key> = { contact: 'hs.source.contact', company: 'hs.source.company', deal: 'hs.source.deal' }
export const ACTIVITY_LABEL: Record<HubspotActivityKind, Key> = { note: 'hs.activity.note', call: 'hs.activity.call', meeting: 'hs.activity.meeting', task: 'hs.activity.task' }
export const LICENSED_OBJECTS: { object: Key; source: Key }[] = [
  { object: 'hs.licensed.sites', source: 'hs.licensed.sitesSource' },
  { object: 'hs.licensed.metrics', source: 'hs.licensed.metricsSource' },
  { object: 'hs.licensed.commissions', source: 'hs.licensed.commissionsSource' },
]

const LIFECYCLE_LABEL: Record<string, Key> = {
  subscriber: 'hs.lifecycle.subscriber',
  lead: 'hs.lifecycle.lead',
  marketingqualifiedlead: 'hs.lifecycle.marketingqualifiedlead',
  salesqualifiedlead: 'hs.lifecycle.salesqualifiedlead',
  opportunity: 'hs.lifecycle.opportunity',
  customer: 'hs.lifecycle.customer',
  evangelist: 'hs.lifecycle.evangelist',
  other: 'hs.lifecycle.other',
}
const FACT_LABEL: Record<string, Key> = {
  created_at: 'hs.fact.created_at',
  last_contacted_at: 'hs.fact.last_contacted_at',
  deals: 'hs.fact.deals',
  revshare: 'hs.fact.revshare',
  closed_at: 'hs.fact.closed_at',
}
const DATE_FACTS = new Set(['created_at', 'last_contacted_at', 'closed_at'])

/** A fase do contato no idioma da pessoa; uma fase criada no portal aparece como veio. */
export function lifecycleLabel(code: string | null): string | null {
  if (!code) return null
  const key = LIFECYCLE_LABEL[code]
  return key ? t(key) : code
}

/** Os fatos do card na ordem da tela, com rótulo e valor já formatados; os que faltam ficam de fora. */
export function cardFacts(facts: Record<string, string>): { code: string; label: string; value: string }[] {
  return FACT_ORDER.filter((code) => facts[code]).map((code) => ({ code, label: t(FACT_LABEL[code] as Key), value: factValue(code, facts[code] as string) }))
}

/** O valor de um fato: datas no formato da pessoa, revshare em porcentagem e números com separador. */
export function factValue(code: string, value: string): string {
  if (DATE_FACTS.has(code)) return formatDate(value, false)
  if (code === 'revshare') return `${new Intl.NumberFormat(locale.value, { maximumFractionDigits: 3 }).format(Number(value))}%`
  if (code === 'deals') return new Intl.NumberFormat(locale.value).format(Number(value))
  return value
}

/** As atividades de um tipo, ou todas. */
export function activitiesOf(activities: HubspotActivity[], kind: HubspotActivityKind | 'all'): HubspotActivity[] {
  return kind === 'all' ? activities : activities.filter((activity) => activity.kind === kind)
}

/** Os erros do tipo escolhido que têm a busca no registro ou na mensagem. */
export function filterFailures(failures: HubspotFailure[], kind: HubspotKind | 'all', query: string): HubspotFailure[] {
  const needle = query.trim().toLowerCase()
  return failures.filter(
    (failure) => (kind === 'all' || failure.kind === kind) && (!needle || failure.label.toLowerCase().includes(needle) || failure.error.toLowerCase().includes(needle)),
  )
}

/** Diz se a sincronia ainda está na fila ou rodando, para a tela acompanhar. */
export function isRunning(run: HubspotRun | null | undefined): boolean {
  return run?.state === 'pending' || run?.state === 'running'
}

/** O resumo da última sincronia para o rodapé: rodando, quantos mudaram e quantos falharam, ou o erro. */
export function runSummary(run: HubspotRun | null | undefined): string {
  if (!run) return t('hs.run.never')
  if (run.state === 'pending') return t('hs.run.pending')
  if (run.state === 'running') return t('hs.run.running')
  if (run.state === 'failed') return t('hs.run.failed', { error: run.error ?? '' })
  return t('hs.run.done', { changed: run.changed, failed: run.failed, when: formatDate(run.finished_at) })
}
