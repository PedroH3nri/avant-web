/** Regras de tela das réguas de nutrição: rótulos, frases, contas e o rascunho do editor. */

import type { Key } from '@/lib/i18n'
import type {
  NurtureComparison,
  NurtureEmail,
  NurtureEnrollmentStatus,
  NurtureLang,
  NurtureMeasure,
  NurtureMember,
  NurtureRuleInput,
  NurtureSend,
  NurtureSendStatus,
  NurtureStats,
  NurtureTaskDue,
  OnboardingStep,
} from '@/modules/internal/nurture/types'

export type Tone = 'ok' | 'warn' | 'bad' | 'ochre' | 'neutral'

export const LANGS: NurtureLang[] = ['pt', 'en', 'es']
export const MAX_EMAILS = 3
export const MEASURES: NurtureMeasure[] = [
  'days_without_access',
  'active_days_30d',
  'client_sessions_30d',
  'company_active_days_30d',
  'active_people_30d',
  'screens_30d',
  'minutes_30d',
  'onboarding_step',
]
export const COMPARISONS: NurtureComparison[] = ['gte', 'lte', 'eq']
export const STEPS: OnboardingStep[] = ['network', 'sites', 'ad_tag', 'install']
export const TASK_DUES: NurtureTaskDue[] = ['today', 'one_business_day', 'two_business_days', 'one_week']
export const REPEATS = ['once', '30', '60', '90'] as const
export type Repeat = (typeof REPEATS)[number]
export const STAGE_PATTERN = /^[a-z0-9_]{1,64}$/
export const SAMPLE: Record<string, string> = {
  '{nome}': 'Marina',
  '{empresa}': 'Guia do Pet',
  '{gerente}': 'Marina Souza',
  '{dias_sem_acesso}': '16',
  '{link_avant}': 'avant.groone.com',
  '{link_guia_ad_tag}': 'avant.groone.com/ajuda',
  '{link_equipe}': 'avant.groone.com/equipe',
  '{link_agenda}': 'avant.groone.com/ajuda',
  '{link_ajuda}': 'avant.groone.com/ajuda',
}

export const MEASURE_LABEL: Record<NurtureMeasure, Key> = {
  days_without_access: 'nurture.measure.days_without_access',
  active_days_30d: 'nurture.measure.active_days_30d',
  client_sessions_30d: 'nurture.measure.client_sessions_30d',
  company_active_days_30d: 'nurture.measure.company_active_days_30d',
  active_people_30d: 'nurture.measure.active_people_30d',
  screens_30d: 'nurture.measure.screens_30d',
  minutes_30d: 'nurture.measure.minutes_30d',
  onboarding_step: 'nurture.measure.onboarding_step',
}
export const MEASURE_UNIT: Record<NurtureMeasure, Key> = {
  days_without_access: 'nurture.unit.days',
  active_days_30d: 'nurture.unit.days',
  client_sessions_30d: 'nurture.unit.sessions',
  company_active_days_30d: 'nurture.unit.days',
  active_people_30d: 'nurture.unit.people',
  screens_30d: 'nurture.unit.screens',
  minutes_30d: 'nurture.unit.minutes',
  onboarding_step: 'nurture.unit.days',
}
export const COMPARISON_LABEL: Record<NurtureComparison, Key> = { gte: 'nurture.cmp.gte', lte: 'nurture.cmp.lte', eq: 'nurture.cmp.eq' }
export const STEP_LABEL: Record<OnboardingStep, Key> = {
  network: 'nurture.step.network',
  sites: 'nurture.step.sites',
  ad_tag: 'nurture.step.ad_tag',
  install: 'nurture.step.install',
  done: 'nurture.step.done',
}
export const DUE_LABEL: Record<NurtureTaskDue, Key> = {
  today: 'nurture.due.today',
  one_business_day: 'nurture.due.one_business_day',
  two_business_days: 'nurture.due.two_business_days',
  one_week: 'nurture.due.one_week',
}
export const REPEAT_LABEL: Record<Repeat, Key> = { once: 'nurture.repeat.once', '30': 'nurture.repeat.30', '60': 'nurture.repeat.60', '90': 'nurture.repeat.90' }
export const SEND_LABEL: Record<NurtureSendStatus, Key> = {
  queued: 'nurture.send.queued',
  sent: 'nurture.send.sent',
  delivered: 'nurture.send.delivered',
  opened: 'nurture.send.opened',
  clicked: 'nurture.send.clicked',
  bounced: 'nurture.send.bounced',
  failed: 'nurture.send.failed',
}
export const SEND_TONE: Record<NurtureSendStatus, Tone> = {
  queued: 'neutral',
  sent: 'neutral',
  delivered: 'neutral',
  opened: 'ok',
  clicked: 'ok',
  bounced: 'bad',
  failed: 'bad',
}
export const SEND_STATUSES: NurtureSendStatus[] = ['queued', 'sent', 'delivered', 'opened', 'clicked', 'bounced', 'failed']

export type MemberState = 'active' | 'returned' | 'completed' | 'left' | 'unsubscribed'
export const MEMBER_STATES: MemberState[] = ['active', 'returned', 'completed', 'left', 'unsubscribed']
export const MEMBER_LABEL: Record<MemberState, Key> = {
  active: 'nurture.member.active',
  returned: 'nurture.member.returned',
  completed: 'nurture.member.completed',
  left: 'nurture.member.left',
  unsubscribed: 'nurture.member.unsubscribed',
}
export const MEMBER_TONE: Record<MemberState, Tone> = { active: 'ochre', returned: 'ok', completed: 'neutral', left: 'neutral', unsubscribed: 'bad' }
export const ENROLLMENT_LABEL: Record<NurtureEnrollmentStatus, Key> = {
  active: 'nurture.member.active',
  left: 'nurture.member.left',
  completed: 'nurture.member.completed',
  unsubscribed: 'nurture.member.unsubscribed',
}

/** A situação do cliente na régua como a aba Clientes mostra: descadastro e volta ao Avant vêm antes. */
export function memberState(member: NurtureMember): MemberState {
  if (member.unsubscribed || member.status === 'unsubscribed') return 'unsubscribed'
  if (member.returned) return 'returned'
  return member.status
}

/** A porcentagem inteira de ``part`` em ``whole``; vazia sem base. */
export function percent(part: number, whole: number): number | null {
  return whole ? Math.round((part / whole) * 100) : null
}

/** A abertura e a volta ao Avant das estatísticas da régua, em porcentagem. */
export function rates(stats: NurtureStats): { opened: number | null; returned: number | null } {
  return { opened: percent(stats.opened_30d, stats.sent_30d), returned: percent(stats.returned_30d, stats.sent_30d) }
}

/** A repetição do editor a partir dos dias da régua. */
export function repeatOf(days: number | null): Repeat {
  return days === 30 || days === 60 || days === 90 ? (String(days) as Repeat) : 'once'
}

/** Os dias de repetição da régua a partir da escolha do editor. */
export function repeatDays(repeat: Repeat): number | null {
  return repeat === 'once' ? null : Number(repeat)
}

/** Um e-mail vazio nos três idiomas; o primeiro sai na entrada, os outros 3 dias depois. */
export function emptyEmail(first: boolean): NurtureEmail {
  return { delay_days: first ? 0 : 3, subject: { pt: '', en: '', es: '' }, body: { pt: '', en: '', es: '' } }
}

/** Uma régua nova, desligada, com um e-mail. */
export function emptyRule(): NurtureRuleInput {
  return {
    name: '',
    priority: 5,
    enabled: false,
    measure: 'days_without_access',
    comparison: 'gte',
    value: 7,
    step: null,
    manager_scope: 'all',
    manager_id: null,
    min_client_age_days: 0,
    emails: [emptyEmail(true)],
    hubspot_task: false,
    task_due: 'one_business_day',
    stage: null,
    repeat_days: null,
  }
}

/** Diz o que falta para salvar a régua; vazio quando está pronta. */
export function ruleProblem(rule: NurtureRuleInput): Key | null {
  const name = rule.name.trim()
  if (name.length < 3 || name.length > 80) return 'nurture.problem.name'
  if (rule.measure === 'onboarding_step' && !rule.step) return 'nurture.problem.step'
  if (rule.manager_scope === 'one' && !rule.manager_id) return 'nurture.problem.manager'
  if (rule.stage && !STAGE_PATTERN.test(rule.stage)) return 'nurture.problem.stage'
  const incomplete = rule.emails.some((email) => LANGS.some((lang) => !email.subject[lang].trim() || !email.body[lang].trim()))
  if (incomplete) return 'nurture.problem.texts'
  const badDelay = rule.emails.some((email, position) => position > 0 && (email.delay_days < 1 || email.delay_days > 30))
  if (badDelay) return 'nurture.problem.delay'
  return null
}

/** Troca as variáveis do texto pelos dados do cliente de exemplo. */
export function fillSample(text: string): string {
  return Object.entries(SAMPLE).reduce((current, [variable, value]) => current.split(variable).join(value), text)
}

/** Busca sem acento e sem diferença de maiúsculas. */
export function normalized(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
}

/** Os envios que passam pela situação, pelo e-mail e pela busca (cliente ou destinatário). */
export function filterSends(sends: NurtureSend[], status: string, email: string, query: string): NurtureSend[] {
  const needle = normalized(query.trim())
  return sends.filter(
    (send) =>
      (status === 'all' || send.status === status) &&
      (email === 'all' || String(send.email_index) === email) &&
      (!needle || normalized(`${send.client_name} ${send.to_email}`).includes(needle)),
  )
}

/** Os clientes que passam pela situação, pelo gerente, pela abertura e pela busca. */
export function filterMembers(members: NurtureMember[], state: string, manager: string, opened: string, query: string): NurtureMember[] {
  const needle = normalized(query.trim())
  return members.filter(
    (member) =>
      (state === 'all' || memberState(member) === state) &&
      (manager === 'all' || (member.manager_name ?? '') === manager) &&
      (opened === 'all' || String(member.opened) === opened) &&
      (!needle || normalized(member.client_name).includes(needle)),
  )
}
