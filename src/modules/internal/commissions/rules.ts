/** Regras de tela da comissão; quem confere de verdade é a API. */
import type { Lang } from '@/lib/types'
import type { CommissionEvent, CommissionKind, CommissionRuleInput, CommissionStatus, CommissionTarget, PersonMonth, WindowMonth } from '@/modules/internal/commissions/types'
import { parseAmount } from '@/modules/internal/goals/rules'

export const KINDS: CommissionKind[] = ['created', 'reactivated']
export const TARGETS: CommissionTarget[] = ['client', 'network', 'site']
const MAX_OFFSET = 365
const MAX_DURATION = 3650

/** Tom do selo de cada situação do mês. */
export const STATUS_TONE: Record<CommissionStatus, 'ochre' | 'neutral' | 'ok'> = { draft: 'ochre', validated: 'neutral', issued: 'ok', paid: 'ok' }

/** O que se preenche na modal da regra. */
export interface RuleForm {
  kind: CommissionKind
  target: CommissionTarget
  percentage: string
  offset: string
  duration: string
  noEnd: boolean
  transfer: string
}

/** Formulário vazio: cadastro do cliente, 30 dias, sem espera. */
export function emptyRuleForm(): RuleForm {
  return { kind: 'created', target: 'client', percentage: '', offset: '0', duration: '30', noEnd: false, transfer: '' }
}

/** Formulário de regra nova no primeiro evento que o papel ainda não tem. */
export function newRuleForm(taken: Set<CommissionEvent>): RuleForm {
  const free = KINDS.flatMap((kind) => TARGETS.map((target) => ({ kind, target }))).find((pair) => !taken.has(eventOf(pair.kind, pair.target)))
  return { ...emptyRuleForm(), ...free }
}

/** O evento a partir do tipo (cadastro ou reativação) e do alvo. */
export function eventOf(kind: CommissionKind, target: CommissionTarget): CommissionEvent {
  return `${target}_${kind}`
}

/** O tipo e o alvo de um evento. */
export function splitEvent(event: CommissionEvent): { kind: CommissionKind; target: CommissionTarget } {
  const [target, kind] = event.split('_') as [CommissionTarget, CommissionKind]
  return { kind, target }
}

/** Número inteiro digitado, ou NaN. */
const whole = (text: string) => (/^\d+$/.test(text.trim()) ? Number(text.trim()) : Number.NaN)

/** Os erros do formulário, por campo (vazio quando está tudo certo). */
export function ruleErrors(form: RuleForm, lang: Lang): Partial<Record<'percentage' | 'offset' | 'duration', true>> {
  const errors: Partial<Record<'percentage' | 'offset' | 'duration', true>> = {}
  const percentage = parseAmount(form.percentage, lang)
  if (!Number.isFinite(percentage) || percentage < 0.01 || percentage > 100) errors.percentage = true
  const offset = whole(form.offset)
  if (!(offset >= 0 && offset <= MAX_OFFSET)) errors.offset = true
  const duration = whole(form.duration)
  if (!form.noEnd && !(duration >= 1 && duration <= MAX_DURATION)) errors.duration = true
  return errors
}

/** O corpo para a API: a transferência só vai com cliente e com prazo. */
export function ruleBody(form: RuleForm, lang: Lang): CommissionRuleInput {
  const transfers = form.target === 'client' && !form.noEnd && form.transfer !== ''
  return {
    event: eventOf(form.kind, form.target),
    percentage: parseAmount(form.percentage, lang).toFixed(2),
    start_offset_days: whole(form.offset),
    duration_days: form.noEnd ? null : whole(form.duration),
    transfer_to_role_id: transfers ? form.transfer : null,
  }
}

/** Os eventos que o papel já tem, menos o da regra que está sendo editada. */
export function takenEvents(rules: { id: string; event: CommissionEvent }[], editingId: string | null): Set<CommissionEvent> {
  return new Set(rules.filter((rule) => rule.id !== editingId).map((rule) => rule.event))
}

/** O que acontece com os prazos abertos quando o responsável muda. */
export function managerChange(currentRoleId: string | null, nextRoleId: string | null): 'first' | 'continues' | 'stops' {
  if (currentRoleId === null) return 'first'
  return currentRoleId === nextRoleId ? 'continues' : 'stops'
}

/** Dia da API (``AAAA-MM-DD``) no formato do idioma, sem andar com o fuso. */
export function formatDay(iso: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, { dateStyle: 'short', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`))
}

/** Como o prazo está: esperando o responsável, sem prazo, terminando, terminado ou parado. */
export type WindowState = { kind: 'waiting'; date: null } | { kind: 'endless'; date: null } | { kind: 'ends' | 'ended' | 'stopped'; date: string }

/** A situação do prazo hoje (``AAAA-MM-DD``), para a coluna Termina. */
export function windowState(window: Pick<WindowMonth, 'starts_on' | 'ends_on' | 'stopped_on'>, today: string): WindowState {
  if (window.stopped_on) return { kind: 'stopped', date: window.stopped_on }
  if (!window.starts_on) return { kind: 'waiting', date: null }
  if (!window.ends_on) return { kind: 'endless', date: null }
  return { kind: window.ends_on < today ? 'ended' : 'ends', date: window.ends_on }
}

/** As pessoas com o mês validado, que ainda falta emitir. */
export function toIssue(people: PersonMonth[]): PersonMonth[] {
  return people.filter((person) => person.month.status === 'validated')
}

/** O desconto vale com valor maior que zero e um motivo. */
export function adjustmentValid(amount: string, reason: string, lang: Lang): boolean {
  const value = parseAmount(amount, lang)
  return Number.isFinite(value) && value > 0 && reason.trim().length > 0
}
