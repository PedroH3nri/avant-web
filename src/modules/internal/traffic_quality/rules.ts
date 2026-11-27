/** Regras de tela da Qualidade do tráfego: filtros, os textos de cada sinal, os rótulos dos recortes e os links para investigar fora do Avant. */

import { formatDate, locale, t, type Key } from '@/lib/i18n'
import type { TrafficAlert, TrafficDimension, TrafficRisk, TrafficSignal } from '@/modules/internal/traffic_quality/types'

export interface TrafficFilters {
  risk: TrafficRisk | 'all'
  signal: TrafficSignal | 'all'
  query: string
}

export type LinkGroup = 'ads' | 'spread' | 'security'

/** Um link pronto para investigar o domínio numa aba nova. */
export interface InvestigateLink {
  group: LinkGroup
  label: Key
  hint: Key
  href: string
}

export const RISKS: TrafficRisk[] = ['high', 'medium']
export const SIGNALS: TrafficSignal[] = ['cloaker', 'ctr', 'quick_bounce', 'page_view_spike', 'deduction']
export const LINK_GROUPS: LinkGroup[] = ['ads', 'spread', 'security']
export const RISK_TONE: Record<TrafficRisk, 'bad' | 'warn'> = { high: 'bad', medium: 'warn' }
export const BIG_GAP = 15
const KNOWN_LABELS = new Set(['(direct)', '(referral)', '0-6', '6-18', '18-24', '0-5', '5-30', '30+', 'desktop', 'mobile'])

/** Os alertas que passam pelo risco, pelo sinal e pela busca no alvo ou no cliente. */
export function filterAlerts(rows: TrafficAlert[], filters: TrafficFilters): TrafficAlert[] {
  const needle = filters.query.trim().toLowerCase()
  return rows.filter(
    (row) =>
      (filters.risk === 'all' || row.risk === filters.risk) &&
      (filters.signal === 'all' || row.signal === filters.signal) &&
      `${row.target_name} ${row.client_name ?? ''}`.toLowerCase().includes(needle),
  )
}

/** Um número no idioma da pessoa, com até uma casa. */
function number(value: number): string {
  return value.toLocaleString(locale.value, { maximumFractionDigits: 1 })
}

/** A linha do sinal na tabela, com o valor atual. */
export function signalText(alert: TrafficAlert): string {
  if (alert.signal === 'ctr') return t('tq.signal.ctr', { value: number(alert.value) })
  if (alert.signal === 'quick_bounce') return t('tq.signal.quick_bounce', { value: number(alert.value) })
  if (alert.signal === 'page_view_spike') return t('tq.signal.page_view_spike', { factor: number(alert.normal ? alert.value / alert.normal : 0) })
  if (alert.signal === 'deduction') return t('tq.signal.deduction', { value: number(alert.value) })
  return t('tq.signal.cloaker', { value: number(alert.value) })
}

/** O normal do sinal, para comparar. */
export function normalText(alert: TrafficAlert): string {
  if (alert.signal === 'page_view_spike') return t('tq.normal.page_view_spike', { value: number(alert.normal) })
  if (alert.signal === 'deduction') return t('tq.normal.deduction', { value: number(alert.normal) })
  if (alert.signal === 'cloaker') return t('tq.normal.cloaker')
  return t('tq.normal.site', { value: number(alert.normal) })
}

/** De onde veio o sinal: a fonte e o dia (ou o mês, ou o referrer que puxou o pico). */
export function sourceText(alert: TrafficAlert): string {
  const day = alert.context.day ? formatDate(alert.context.day, false) : ''
  if (alert.signal === 'ctr') return t('tq.source.ctr', { day })
  if (alert.signal === 'quick_bounce') return t('tq.source.adTag', { day })
  if (alert.signal === 'page_view_spike') return alert.context.referrer ? t('tq.source.referrer', { referrer: shareLabel('referrer', alert.context.referrer), day }) : t('tq.source.adTag', { day })
  if (alert.signal === 'deduction') return t('tq.source.deduction', { month: monthText(alert.context.month) })
  return t('tq.source.cloaker')
}

/** A unidade da série do modal. */
export function seriesUnit(alert: TrafficAlert): string {
  return t(`tq.unit.${alert.signal}`)
}

/** O mês da dedução no idioma da pessoa. */
export function monthText(month: string | undefined): string {
  if (!month) return ''
  return new Date(`${month}T12:00:00Z`).toLocaleDateString(locale.value, { month: 'long', year: 'numeric', timeZone: 'UTC' })
}

/** O rótulo de um item do recorte: os códigos do Avant traduzidos, o resto como veio. */
export function shareLabel(dimension: TrafficDimension, label: string): string {
  if (dimension === 'country' || !KNOWN_LABELS.has(label)) return label
  return t(`tq.label.${label}` as Key)
}

/** O nome do sinal da ad tag; um sinal novo sem texto mostra o código. */
export function integrityLabel(signal: string): string {
  const key = `integrity.${signal}` as Key
  const text = t(key)
  return text === key ? signal : text
}

/** Diz se o item ganhou muita parte contra o normal (fica em vermelho). */
export function grew(now: number, normal: number): boolean {
  return now - normal >= BIG_GAP
}

/** Os links para investigar o domínio: bibliotecas de anúncios, divulgação e segurança. O Avant não chama esses sites. */
export function investigateLinks(domain: string): InvestigateLink[] {
  const term = encodeURIComponent(domain)
  return [
    { group: 'ads', label: 'tq.link.meta', hint: 'tq.link.metaHint', href: `https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=ALL&q=${term}&search_type=keyword_unordered&media_type=all` },
    { group: 'ads', label: 'tq.link.google', hint: 'tq.link.googleHint', href: `https://adstransparency.google.com/?region=anywhere&domain=${term}` },
    { group: 'ads', label: 'tq.link.tiktok', hint: 'tq.link.euOnly', href: `https://library.tiktok.com/ads?region=all&query=${term}` },
    { group: 'ads', label: 'tq.link.xAds', hint: 'tq.link.euOnly', href: 'https://ads.x.com/ads-repository' },
    { group: 'spread', label: 'tq.link.xPosts', hint: 'tq.link.xPostsHint', href: `https://x.com/search?q=${encodeURIComponent(`url:${domain}`)}&f=live` },
    { group: 'spread', label: 'tq.link.mentions', hint: 'tq.link.mentionsHint', href: `https://www.google.com/search?q=${encodeURIComponent(`"${domain}" -site:${domain}`)}` },
    { group: 'spread', label: 'tq.link.fbPosts', hint: 'tq.link.fbPostsHint', href: `https://www.facebook.com/search/posts/?q=${term}` },
    { group: 'security', label: 'tq.link.safeBrowsing', hint: 'tq.link.safeBrowsingHint', href: `https://transparencyreport.google.com/safe-browsing/search?url=${term}` },
    { group: 'security', label: 'tq.link.wayback', hint: 'tq.link.waybackHint', href: `https://web.archive.org/web/*/${term}` },
  ]
}

/** O texto da tarefa: o sinal, o normal, de onde veio e os links para investigar. */
export function taskDescription(alert: TrafficAlert): string {
  const lines = [`${signalText(alert)} · ${normalText(alert)}`, sourceText(alert)]
  if (alert.domain) lines.push('', t('tq.investigate'), ...investigateLinks(alert.domain).map((link) => `- ${t(link.label)}: ${link.href}`))
  return lines.join('\n')
}

/** Os pontos da linha da série no quadro dado, com a altura do normal. */
export function seriesPoints(series: number[], normal: number, width: number, height: number): { points: { x: number; y: number; value: number }[]; normalY: number } {
  const peak = Math.max(...series, normal, 1) * 1.1
  const step = series.length > 1 ? width / (series.length - 1) : 0
  const points = series.map((value, index) => ({ x: index * step, y: height - (value / peak) * height, value }))
  return { points, normalY: height - (normal / peak) * height }
}
