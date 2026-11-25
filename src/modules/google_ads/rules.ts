/** Regras de tela do Google Ads: caminhos, cores da situação, níveis e textos do histórico e dos avisos.
 * Dinheiro, porcentagem, períodos e limites seguem as mesmas regras do Facebook. */

import type { Key } from '@/lib/i18n'
import type {
  GoogleAdsAccount,
  GoogleAdsAccountStatus,
  GoogleAdsAlert,
  GoogleAdsChange,
  GoogleAdsLevel,
  GoogleAdsLoginStatus,
  GoogleAdsObject,
  GoogleAdsSuffixState,
} from '@/modules/google_ads/types'

export { ADS_MAX_DAYS, ADS_PRESETS, PERIODS, formatCount, formatMoney, formatRatio, overLimit, parseLimit, periodRange, roiTone } from '@/modules/facebook/rules'

type Tone = 'ok' | 'warn' | 'bad' | 'neutral'

export const LEVELS: GoogleAdsLevel[] = ['campaign', 'ad_group', 'ad']

const ACCOUNT_TONES: Record<GoogleAdsAccountStatus, Tone> = { enabled: 'ok', suspended: 'bad', canceled: 'neutral', closed: 'neutral' }
const LOGIN_TONES: Record<GoogleAdsLoginStatus, Tone> = { ok: 'ok', revoked: 'bad', disconnected: 'neutral' }
const SUFFIX_TONES: Record<GoogleAdsSuffixState, Tone> = { ok: 'ok', missing: 'warn', other: 'bad' }

/** O caminho da tela do Google Ads em cada painel. */
export function googleAdsPath(internal: boolean): string {
  return internal ? '/interno/google-ads' : '/google-ads'
}

/** O caminho das campanhas do Google Ads em cada painel (fora de /google-ads, para o menu acender um item só). */
export function campaignsPath(internal: boolean): string {
  return internal ? '/interno/campanhas-google-ads' : '/campanhas-google-ads'
}

/** O caminho do detalhe de uma campanha, grupo ou anúncio. */
export function objectPath(internal: boolean, item: Pick<GoogleAdsObject, 'level' | 'external_id'>): string {
  return `${campaignsPath(internal)}/${item.level}/${item.external_id}`
}

/** A cor da situação da conta no Google Ads. */
export function accountTone(status: GoogleAdsAccountStatus): Tone {
  return ACCOUNT_TONES[status]
}

/** A cor do acesso do login. */
export function loginTone(status: GoogleAdsLoginStatus): Tone {
  return LOGIN_TONES[status]
}

/** A cor do sufixo de URL com os UTMs. */
export function suffixTone(state: GoogleAdsSuffixState): Tone {
  return SUFFIX_TONES[state]
}

/** Diz se o nível existe (para ler o nível da rota sem confiar no endereço). */
export function isLevel(value: unknown): value is GoogleAdsLevel {
  return typeof value === 'string' && (LEVELS as string[]).includes(value)
}

/** O nível que vem abaixo (campanha abre os grupos; grupo abre os anúncios); anúncio não tem. */
export function childLevel(level: GoogleAdsLevel): GoogleAdsLevel | null {
  if (level === 'campaign') return 'ad_group'
  if (level === 'ad_group') return 'ad'
  return null
}

/** As contas agrupadas pela MCC de onde vieram; as sem MCC ficam num grupo sem nome, por último. */
export function byManager(accounts: GoogleAdsAccount[]): { manager: string | null; accounts: GoogleAdsAccount[] }[] {
  const groups = new Map<string | null, GoogleAdsAccount[]>()
  for (const account of accounts) {
    const manager = account.manager_name ?? account.manager_customer_id
    groups.set(manager, [...(groups.get(manager) ?? []), account])
  }
  return [...groups.entries()]
    .sort(([first], [second]) => (first === null ? 1 : second === null ? -1 : first.localeCompare(second)))
    .map(([manager, items]) => ({ manager, accounts: items }))
}

/** A situação do objeto: reprovado, limitado, em revisão, ativo ou pausado. */
export function objectState(item: Pick<GoogleAdsObject, 'active' | 'review'>): { tone: Tone; key: Key } {
  if (item.review === 'disapproved') return { tone: 'bad', key: 'gads.state.disapproved' }
  if (item.review === 'limited') return { tone: 'warn', key: 'gads.state.limited' }
  if (item.review === 'pending') return { tone: 'warn', key: 'gads.state.review' }
  return item.active ? { tone: 'ok', key: 'gads.state.active' } : { tone: 'neutral', key: 'gads.state.paused' }
}

const MICROS = 1_000_000
const CHANGE_KEYS: Record<string, Key> = {
  'account.holder': 'gads.change.holder',
  'account.limits': 'gads.change.limits',
  'account.suffix': 'gads.change.suffix',
  'google.create': 'gads.change.googleCreate',
  'google.update': 'gads.change.googleUpdate',
  'google.remove': 'gads.change.googleRemove',
}

/** Um valor do histórico como texto; vazio vira traço. */
function shown(value: unknown): string {
  return value === null || value === undefined || value === '' ? '–' : String(value)
}

/** Um limite em micros do histórico como texto decimal; vazio vira traço. */
function limitText(value: unknown): string {
  return typeof value === 'number' ? String(value / MICROS) : '–'
}

/** A chave do texto de uma linha do histórico e os valores dela. */
export function changeText(change: GoogleAdsChange): { key: Key; params: Record<string, string> } {
  const data = change.data
  const fields = Array.isArray(data.fields) ? data.fields.map(String).join(', ') : ''
  return {
    key: CHANGE_KEYS[change.what] ?? 'gads.change.other',
    params: {
      before: shown(data.before),
      after: shown(data.after),
      daily: limitText(data.daily_after),
      monthly: limitText(data.monthly_after),
      fields: shown(fields),
      what: change.what,
    },
  }
}

const ALERT_KEYS: Record<GoogleAdsAlert['kind'], Key> = {
  limit_paused: 'gads.alert.limit_paused',
  limit_near: 'gads.alert.limit_near',
  limit_reached: 'gads.alert.limit_reached',
  login_revoked: 'gads.alert.login_revoked',
  ad_disapproved: 'gads.alert.ad_disapproved',
  account_suspended: 'gads.alert.account_suspended',
  suffix_other: 'gads.alert.suffix_other',
  bad_terms: 'gads.alert.bad_terms',
}

/** A chave do texto do aviso e os valores dela (conta, login, anúncio e sufixo). */
export function alertText(alert: GoogleAdsAlert): { key: Key; params: Record<string, string> } {
  const data = alert.data
  return {
    key: ALERT_KEYS[alert.kind],
    params: {
      account: alert.account?.name ?? '–',
      email: typeof data.email === 'string' ? data.email : '–',
      ad: typeof data.object_name === 'string' ? data.object_name : '–',
      suffix: typeof data.suffix === 'string' && data.suffix ? data.suffix : '–',
    },
  }
}

/** O número da conta no formato do Google Ads (123-456-7890). */
export function customerText(customerId: string): string {
  return /^\d{10}$/.test(customerId) ? `${customerId.slice(0, 3)}-${customerId.slice(3, 6)}-${customerId.slice(6)}` : customerId
}

const CHANNEL_KEYS: Record<string, Key> = {
  SEARCH: 'gads.channel.SEARCH',
  DISPLAY: 'gads.channel.DISPLAY',
  DEMAND_GEN: 'gads.channel.DEMAND_GEN',
  PERFORMANCE_MAX: 'gads.channel.PERFORMANCE_MAX',
  VIDEO: 'gads.channel.VIDEO',
  SHOPPING: 'gads.channel.SHOPPING',
}

/** A chave do nome do tipo de campanha do Google (Pesquisa, Display...); tipo desconhecido vira "Outro". */
export function channelKey(channelType: string): Key {
  return CHANNEL_KEYS[channelType] ?? 'gads.channel.other'
}

const MATCH_KEYS: Record<string, Key> = { EXACT: 'gads.match.EXACT', PHRASE: 'gads.match.PHRASE', BROAD: 'gads.match.BROAD' }

/** A chave do nome da correspondência da palavra-chave; tipo desconhecido vira traço. */
export function matchKey(matchType: string): Key {
  return MATCH_KEYS[matchType] ?? 'gads.match.other'
}
