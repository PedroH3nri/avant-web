/** Regras de tela do HubSpot: nomes dos tipos, a fase do contato, os fatos do card, o filtro dos erros, a saúde, as tarefas do gerente e a Prospecção. */

import { formatDate, locale, t, type Key } from '@/lib/i18n'
import type { HubspotActivity, HubspotActivityKind, HubspotFailure, HubspotHealthProperty, HubspotKind, HubspotProspect, HubspotRun, HubspotSettingsInput, HubspotTaskDue, HubspotTaskRule, HubspotTaskRuleSetting, HubspotTaskState } from '@/modules/internal/hubspot/types'

export const KINDS: HubspotKind[] = ['contact', 'company', 'deal', 'site', 'metric', 'commission']
export const ACTIVITY_KINDS: HubspotActivityKind[] = ['note', 'call', 'meeting', 'task']
export const FACT_ORDER = ['status', 'created_at', 'last_contacted_at', 'deals', 'revshare', 'closed_at']
export const KIND_LABEL: Record<HubspotKind, Key> = {
  contact: 'hs.kind.contact',
  company: 'hs.kind.company',
  deal: 'hs.kind.deal',
  site: 'hs.kind.site',
  metric: 'hs.kind.metric',
  commission: 'hs.kind.commission',
}
export const KIND_SOURCE: Record<HubspotKind, Key> = {
  contact: 'hs.source.contact',
  company: 'hs.source.company',
  deal: 'hs.source.deal',
  site: 'hs.source.site',
  metric: 'hs.source.metric',
  commission: 'hs.source.commission',
}
export const CUSTOM_KINDS: HubspotKind[] = ['site', 'metric', 'commission']
export const ACTIVITY_LABEL: Record<HubspotActivityKind, Key> = { note: 'hs.activity.note', call: 'hs.activity.call', meeting: 'hs.activity.meeting', task: 'hs.activity.task' }

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
const SITE_STATUS_LABEL: Record<string, Key> = {
  active: 'hs.siteStatus.active',
  pending: 'hs.siteStatus.pending',
  banned: 'hs.siteStatus.banned',
  inactive: 'hs.siteStatus.inactive',
}
const FACT_LABEL: Record<string, Key> = {
  status: 'hs.fact.status',
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

/** O valor de um fato: datas no formato da pessoa, revshare em porcentagem, números com separador e a situação do site traduzida. */
export function factValue(code: string, value: string): string {
  if (code === 'status') return SITE_STATUS_LABEL[value] ? t(SITE_STATUS_LABEL[value] as Key) : value
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

export type HealthGroup = 'onboarding' | 'revenue' | 'nps'
const HEALTH_GROUP: Record<string, HealthGroup> = {
  avant_onboarding_step: 'onboarding',
  avant_checklist_progress: 'onboarding',
  avant_install_ok: 'onboarding',
  avant_ad_tag_published: 'onboarding',
  avant_last_login: 'onboarding',
  avant_revenue_30d: 'revenue',
  avant_revenue_change: 'revenue',
  avant_last_revenue_day: 'revenue',
  avant_nps: 'nps',
  avant_nps_date: 'nps',
}
export const HEALTH_GROUP_LABEL: Record<HealthGroup, Key> = { onboarding: 'hsh.group.onboarding', revenue: 'hsh.group.revenue', nps: 'hsh.group.nps' }
export const RULE_LABEL: Record<HubspotTaskRule, Key> = {
  network_error: 'hst.rule.network_error',
  network_disconnected: 'hst.rule.network_disconnected',
  install: 'hst.rule.install',
  alert: 'hst.rule.alert',
  detractor: 'hst.rule.detractor',
  revenue_drop: 'hst.rule.revenue_drop',
}
export const RULE_TEXT: Record<HubspotTaskRule, Key> = {
  network_error: 'hst.ruleText.network_error',
  network_disconnected: 'hst.ruleText.network_disconnected',
  install: 'hst.ruleText.install',
  alert: 'hst.ruleText.alert',
  detractor: 'hst.ruleText.detractor',
  revenue_drop: 'hst.ruleText.revenue_drop',
}
export const DUES: HubspotTaskDue[] = ['today', 'one_business_day', 'two_business_days', 'one_week']
export const DUE_LABEL: Record<HubspotTaskDue, Key> = {
  today: 'hst.due.today',
  one_business_day: 'hst.due.one_business_day',
  two_business_days: 'hst.due.two_business_days',
  one_week: 'hst.due.one_week',
}
export const TASK_STATE_LABEL: Record<HubspotTaskState, Key> = { pending: 'hst.state.pending', open: 'hst.state.open', completed: 'hst.state.completed', failed: 'hst.state.failed' }
export const TASK_STATE_TONE: Record<HubspotTaskState, 'neutral' | 'ochre' | 'ok' | 'bad'> = { pending: 'neutral', open: 'ochre', completed: 'ok', failed: 'bad' }
export const PROSPECT_STAGES = ['lead', 'marketingqualifiedlead', 'salesqualifiedlead', 'opportunity', 'customer']

/** O grupo da propriedade de saúde na tabela (onboarding, receita ou NPS). */
export function healthGroup(name: string): HealthGroup {
  return HEALTH_GROUP[name] ?? 'onboarding'
}

/** O nome da propriedade de saúde no idioma da pessoa; a que a tela não conhece aparece como veio da API. */
export function healthLabel(property: HubspotHealthProperty): string {
  const key = `hsh.prop.${property.name}` as Key
  const text = t(key)
  return text === key ? property.label : text
}

/** O corpo para salvar: as propriedades desligadas e todas as regras com a chave e o prazo. */
export function settingsBody(enabled: Record<string, boolean>, rules: HubspotTaskRuleSetting[]): HubspotSettingsInput {
  return {
    disabled_properties: Object.entries(enabled).filter(([, on]) => !on).map(([name]) => name),
    rules: rules.map((rule) => ({ rule: rule.rule, enabled: rule.enabled, due: rule.due })),
  }
}

/** O nome do contato, ou o e-mail quando o HubSpot não tem nome. */
export function prospectName(prospect: HubspotProspect): string {
  return `${prospect.first_name} ${prospect.last_name}`.trim() || prospect.email || prospect.hubspot_id
}

/** Os donos dos contatos da página, sem repetir, em ordem alfabética. */
export function prospectOwners(prospects: HubspotProspect[]): string[] {
  return [...new Set(prospects.map((prospect) => prospect.owner).filter((owner): owner is string => Boolean(owner)))].sort((first, second) => first.localeCompare(second, locale.value))
}

/** Os contatos do dono escolhido (ou todos), separados pela fase do funil. */
export function prospectsByStage(prospects: HubspotProspect[], owner: string): Record<string, HubspotProspect[]> {
  const chosen = owner === 'all' ? prospects : prospects.filter((prospect) => prospect.owner === owner)
  return Object.fromEntries(PROSPECT_STAGES.map((stage) => [stage, chosen.filter((prospect) => prospect.stage === stage)]))
}

/** O endereço do cadastro de cliente já preenchido com os dados do contato. */
export function registerLink(prospect: HubspotProspect): { path: string; query: Record<string, string> } {
  const query: Record<string, string> = { novo: '1', nome: prospect.company || prospectName(prospect), contato: prospect.first_name, sobrenome: prospect.last_name }
  if (prospect.email) query.email = prospect.email
  if (prospect.phone) query.telefone = prospect.phone
  if (prospect.owner) query.gerente = prospect.owner
  return { path: '/interno/clientes', query }
}
