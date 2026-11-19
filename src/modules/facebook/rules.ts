/** Regras de tela do Facebook: situação, dinheiro na moeda da conta, períodos, níveis e textos do histórico e dos avisos. */

import type { Key } from '@/lib/i18n'
import type {
  FacebookAccount,
  FacebookAccountState,
  FacebookAlert,
  FacebookChange,
  FacebookLevel,
  FacebookObject,
  FacebookProfileStatus,
} from '@/modules/facebook/types'

type Tone = 'ok' | 'warn' | 'bad' | 'neutral'

export const PERIODS = [7, 14, 30, 90] as const
export const LEVELS: FacebookLevel[] = ['campaign', 'adset', 'ad']

const ACCOUNT_TONES: Record<FacebookAccountState, Tone> = { active: 'ok', pending: 'warn', unsettled: 'bad', disabled: 'bad', closed: 'neutral' }
const PROFILE_TONES: Record<FacebookProfileStatus, Tone> = { ok: 'ok', checkpoint: 'warn', expired: 'bad', disconnected: 'neutral' }

/** O caminho da tela do Facebook em cada painel. */
export function facebookPath(internal: boolean): string {
  return internal ? '/interno/facebook' : '/facebook'
}

/** O caminho das campanhas do Facebook em cada painel (fora de /facebook, para o menu acender um item só). */
export function campaignsPath(internal: boolean): string {
  return internal ? '/interno/campanhas-facebook' : '/campanhas-facebook'
}

/** A cor da situação da conta no Facebook. */
export function accountTone(state: FacebookAccountState): Tone {
  return ACCOUNT_TONES[state]
}

/** A cor do acesso do perfil. */
export function profileTone(status: FacebookProfileStatus): Tone {
  return PROFILE_TONES[status]
}

/** Valor em texto decimal da API formatado na moeda; vazio vira traço. */
export function formatMoney(value: string | null, currency: string, locale: string): string {
  if (value === null || value === '') return '–'
  const amount = Number(value)
  if (!Number.isFinite(amount)) return '–'
  return new Intl.NumberFormat(locale, { style: 'currency', currency, minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount)
}

/** Fração (0,25) como porcentagem; vazio vira traço. */
export function formatRatio(value: number | null, locale: string): string {
  if (value === null) return '–'
  return new Intl.NumberFormat(locale, { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(value)
}

/** Número inteiro no idioma. */
export function formatCount(value: number | null, locale: string): string {
  return value === null ? '–' : new Intl.NumberFormat(locale).format(value)
}

/** Os últimos ``days`` dias até ``today`` (inclusive), como a API pede em ``from`` e ``to``. */
export function periodRange(days: number, today: Date): { from: string; to: string } {
  const end = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()))
  const start = new Date(end)
  start.setUTCDate(end.getUTCDate() - (days - 1))
  return { from: start.toISOString().slice(0, 10), to: end.toISOString().slice(0, 10) }
}

/** O nível que vem abaixo (campanha abre os conjuntos; conjunto abre os anúncios); anúncio não tem. */
export function childLevel(level: FacebookLevel): FacebookLevel | null {
  if (level === 'campaign') return 'adset'
  if (level === 'adset') return 'ad'
  return null
}

/** Diz se o gasto do mês passou do limite mensal (ou chegou a 80% dele, com ``near``). */
export function overLimit(account: Pick<FacebookAccount, 'month_spend' | 'monthly_limit'>, near = false): boolean {
  if (account.monthly_limit === null) return false
  const spend = Number(account.month_spend)
  const limit = Number(account.monthly_limit)
  return near ? spend >= limit * 0.8 : spend >= limit
}

/** Texto do limite digitado para a API: vazio é sem limite; inválido ou zero devolve ``undefined``. */
export function parseLimit(text: string): string | null | undefined {
  const clean = text.trim().replace(/\s/g, '').replace(',', '.')
  if (clean === '') return null
  if (!/^\d+(\.\d{1,2})?$/.test(clean) || Number(clean) <= 0) return undefined
  return clean
}

/** A situação do objeto: em revisão, reprovado, ativo ou pausado. */
export function objectState(item: Pick<FacebookObject, 'active' | 'review' | 'effective_status'>): { tone: Tone; key: Key } {
  if (item.review === 'rejected') return { tone: 'bad', key: 'fb.state.rejected' }
  if (item.review === 'pending') return { tone: 'warn', key: 'fb.state.review' }
  return item.active ? { tone: 'ok', key: 'fb.state.active' } : { tone: 'neutral', key: 'fb.state.paused' }
}

const CHANGE_KEYS: Record<string, Key> = {
  'account.holder': 'fb.change.holder',
  'account.limits': 'fb.change.limits',
  'object.created': 'fb.change.created',
  'object.status': 'fb.change.status',
  'object.budget': 'fb.change.budget',
  'object.name': 'fb.change.name',
}

/** A chave do texto de uma linha do histórico e os valores dela. */
export function changeText(change: FacebookChange): { key: Key; params: Record<string, string> } {
  const data = change.data
  return {
    key: CHANGE_KEYS[change.what] ?? 'fb.change.other',
    params: { before: shown(data.before), after: shown(data.after), what: change.what },
  }
}

/** Um valor do histórico como texto; vazio vira traço. */
function shown(value: unknown): string {
  return value === null || value === undefined ? '–' : String(value)
}

const ALERT_KEYS: Record<FacebookAlert['kind'], Key> = {
  limit_paused: 'fb.alert.limit_paused',
  limit_near: 'fb.alert.limit_near',
  profile_expired: 'fb.alert.profile_expired',
  ad_rejected: 'fb.alert.ad_rejected',
  account_unsettled: 'fb.alert.account_unsettled',
  account_disabled: 'fb.alert.account_disabled',
}

/** A chave do texto do aviso e os valores dela (conta, perfil e anúncio). */
export function alertText(alert: FacebookAlert): { key: Key; params: Record<string, string> } {
  const data = alert.data
  return {
    key: ALERT_KEYS[alert.kind],
    params: {
      account: alert.account?.name ?? '–',
      profile: typeof data.profile_name === 'string' ? data.profile_name : '–',
      ad: typeof data.object_name === 'string' ? data.object_name : '–',
    },
  }
}
