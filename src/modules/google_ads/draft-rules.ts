/** Regras de tela da criação e da edição de campanhas do Google Ads: rascunho em branco, os limites dos anúncios responsivos e a lista "Para criar". */

import type { Key } from '@/lib/i18n'
import type { GoogleAdsAdGroupInput, GoogleAdsAdInput, GoogleAdsBidding, GoogleAdsChannel, GoogleAdsDraftInput, GoogleAdsEditInput, GoogleAdsJob, GoogleAdsLevel } from '@/modules/google_ads/types'

export const CHANNELS: GoogleAdsChannel[] = ['SEARCH', 'DISPLAY', 'DEMAND_GEN']
export const MAX_AD_GROUPS = 10
export const MAX_DISPLAY_PATH = 15
export const MAX_DESCRIPTION = 90
export const MAX_LONG_HEADLINE = 90
export const MAX_BUSINESS_NAME = 25
export const MAX_KEYWORD_CHARS = 80

const HEADLINES: Record<GoogleAdsChannel, { least: number; most: number; chars: number }> = {
  SEARCH: { least: 3, most: 15, chars: 30 },
  DISPLAY: { least: 1, most: 5, chars: 30 },
  DEMAND_GEN: { least: 1, most: 5, chars: 40 },
}
const DESCRIPTIONS: Record<GoogleAdsChannel, { least: number; most: number }> = {
  SEARCH: { least: 2, most: 4 },
  DISPLAY: { least: 1, most: 5 },
  DEMAND_GEN: { least: 1, most: 5 },
}

/** Os títulos que o tipo de campanha aceita: quantos no mínimo, no máximo e o tamanho de cada um. */
export function headlineLimits(channel: GoogleAdsChannel) {
  return HEADLINES[channel]
}

/** As descrições que o tipo de campanha aceita. */
export function descriptionLimits(channel: GoogleAdsChannel) {
  return DESCRIPTIONS[channel]
}

/** Os lances que o tipo aceita: o Demand Gen só maximiza conversões. */
export function biddingsFor(channel: GoogleAdsChannel): GoogleAdsBidding[] {
  return channel === 'DEMAND_GEN' ? ['MAXIMIZE_CONVERSIONS'] : ['MANUAL_CPC', 'MAXIMIZE_CLICKS', 'MAXIMIZE_CONVERSIONS']
}

/** Um anúncio em branco com os campos de texto que o tipo pede. */
export function blankAd(channel: GoogleAdsChannel): GoogleAdsAdInput {
  const headlines = HEADLINES[channel].least
  const descriptions = DESCRIPTIONS[channel].least
  return {
    link_path: '/',
    headlines: Array.from({ length: Math.max(headlines, 3) }, () => ''),
    descriptions: Array.from({ length: Math.max(descriptions, 2) }, () => ''),
    path1: '',
    path2: '',
    long_headline: '',
    business_name: '',
    marketing_images: [],
    square_images: [],
    logo_images: [],
  }
}

/** Um grupo em branco com um anúncio. */
export function blankAdGroup(name: string, channel: GoogleAdsChannel): GoogleAdsAdGroupInput {
  return { name, ads: [blankAd(channel)], keywords: [], audiences: [], cpc: null }
}

/** O rascunho em branco: pesquisa com CPC máximo automático e um grupo. */
export function blankDraft(accountId: string, groupName: string): GoogleAdsDraftInput {
  return { account_id: accountId, name: '', channel: 'SEARCH', budget: null, bidding: 'MAXIMIZE_CLICKS', ad_groups: [blankAdGroup(groupName, 'SEARCH')], locations: [], languages: [] }
}

/** Troca o tipo do rascunho: os anúncios recomeçam em branco e o lance vira um que o tipo aceita. */
export function withChannel(draft: GoogleAdsDraftInput, channel: GoogleAdsChannel): GoogleAdsDraftInput {
  const bidding = biddingsFor(channel).includes(draft.bidding) ? draft.bidding : 'MAXIMIZE_CONVERSIONS'
  const groups = draft.ad_groups.map((group) => ({ ...group, ads: [blankAd(channel)], keywords: channel === 'SEARCH' ? group.keywords : [], audiences: channel === 'SEARCH' ? [] : group.audiences }))
  return { ...draft, channel, bidding, ad_groups: groups }
}

/** Diz se algum anúncio do rascunho já tem texto ou imagem (trocar o tipo apagaria isso). */
export function hasAdContent(draft: GoogleAdsDraftInput): boolean {
  return draft.ad_groups.some((group) =>
    group.ads.some((ad) => {
      const texts = [...ad.headlines, ...ad.descriptions, ad.path1, ad.path2, ad.long_headline, ad.business_name]
      const images = ad.marketing_images.length + ad.square_images.length + ad.logo_images.length
      return images > 0 || texts.some((text) => text.trim() !== '') || ad.link_path.trim() !== '/'
    }),
  )
}

/** Troca a conta do rascunho: as imagens enviadas ficam na conta antiga, então saem dos anúncios. */
export function withAccount(draft: GoogleAdsDraftInput, accountId: string): GoogleAdsDraftInput {
  if (accountId === draft.account_id) return draft
  const groups = draft.ad_groups.map((group) => ({ ...group, ads: group.ads.map((ad) => ({ ...ad, marketing_images: [], square_images: [], logo_images: [] })) }))
  return { ...draft, account_id: accountId, ad_groups: groups }
}

/** Os textos preenchidos, sem espaço nas pontas, como vão para a API. */
export function filled(texts: string[]): string[] {
  return texts.map((text) => text.trim()).filter((text) => text !== '')
}

/** O anúncio como vai para a API, só com os textos preenchidos. */
export function cleanAd(ad: GoogleAdsAdInput): GoogleAdsAdInput {
  return { ...ad, headlines: filled(ad.headlines), descriptions: filled(ad.descriptions) }
}

/** O rascunho como vai para a API: textos preenchidos e valores com ponto. */
export function cleanDraft(draft: GoogleAdsDraftInput): GoogleAdsDraftInput {
  return {
    ...draft,
    name: draft.name.trim(),
    budget: amount(draft.budget),
    ad_groups: draft.ad_groups.map((group) => ({ ...group, cpc: draft.bidding === 'MANUAL_CPC' ? amount(group.cpc) : null, ads: group.ads.map(cleanAd) })),
  }
}

/** Valor digitado como texto decimal da API, com milhar ou não ("1.234,56", "1,234.56", "1234,5"); vazio ou inválido é ``null``. */
export function amount(text: string | null): string | null {
  const compact = (text ?? '').trim().replace(/\s/g, '')
  const decimalMark = Math.max(compact.lastIndexOf(','), compact.lastIndexOf('.'))
  const hasDecimals = decimalMark >= 0 && compact.length - decimalMark - 1 <= 2
  const whole = hasDecimals ? compact.slice(0, decimalMark) : compact
  const cents = hasDecimals ? compact.slice(decimalMark + 1) : ''
  const grouped = /^\d{1,3}([.,]\d{3})+$/.test(whole)
  if (!grouped && !/^\d+$/.test(whole)) return null
  if (hasDecimals && (!/^\d{1,2}$/.test(cents) || whole.includes(compact.charAt(decimalMark)))) return null
  const clean = whole.replace(/[.,]/g, '') + (cents ? `.${cents}` : '')
  return Number(clean) > 0 ? clean : null
}

/** O que falta no anúncio, com os mesmos códigos que a API devolve. */
export function adProblems(channel: GoogleAdsChannel, ad: GoogleAdsAdInput): string[] {
  const problems: string[] = []
  if (!ad.link_path.startsWith('/')) problems.push('ad_path_invalid')
  const headlines = filled(ad.headlines)
  const heads = HEADLINES[channel]
  if (headlines.length < heads.least || headlines.length > heads.most || headlines.some((text) => text.length > heads.chars)) problems.push('ad_headlines_invalid')
  const descriptions = filled(ad.descriptions)
  const descs = DESCRIPTIONS[channel]
  if (descriptions.length < descs.least || descriptions.length > descs.most || descriptions.some((text) => text.length > MAX_DESCRIPTION)) problems.push('ad_descriptions_invalid')
  if (channel === 'SEARCH') {
    if (ad.path1.length > MAX_DISPLAY_PATH || ad.path2.length > MAX_DISPLAY_PATH || (ad.path2 && !ad.path1)) problems.push('ad_display_path_invalid')
    return problems
  }
  if (!ad.business_name.trim() || ad.business_name.length > MAX_BUSINESS_NAME) problems.push('ad_business_name_invalid')
  if (channel === 'DISPLAY' && (!ad.long_headline.trim() || ad.long_headline.length > MAX_LONG_HEADLINE)) problems.push('ad_long_headline_invalid')
  if (!ad.marketing_images.length || !ad.square_images.length) problems.push('ad_images_missing')
  if (channel === 'DEMAND_GEN' && !ad.logo_images.length) problems.push('ad_logo_missing')
  return problems
}

/** O que falta para o Google aceitar a campanha, sem repetir (a API confere de novo). */
export function draftProblems(draft: GoogleAdsDraftInput, hasSite: boolean): string[] {
  const problems: string[] = []
  if (!hasSite) problems.push('account_without_site')
  if (!draft.name.trim()) problems.push('campaign_name_missing')
  if (!amount(draft.budget)) problems.push('budget_missing')
  if (!draft.locations.length) problems.push('location_missing')
  for (const group of draft.ad_groups) {
    if (!group.name.trim()) problems.push('ad_group_name_missing')
    if (draft.bidding === 'MANUAL_CPC' && !amount(group.cpc)) problems.push('ad_group_cpc_missing')
    if (draft.channel === 'SEARCH' && !group.keywords.length) problems.push('keywords_missing')
    if (group.keywords.some((keyword) => keyword.text.length > MAX_KEYWORD_CHARS)) problems.push('keyword_invalid')
    for (const ad of group.ads) problems.push(...adProblems(draft.channel, ad))
  }
  return [...new Set(problems)]
}

/** O que falta na edição do nível: campanha e grupo mudam o nome (o grupo também o CPC); o anúncio muda inteiro. */
export function editProblems(level: GoogleAdsLevel, channel: GoogleAdsChannel, edit: GoogleAdsEditInput): string[] {
  if (level === 'ad') return edit.ad ? adProblems(channel, edit.ad) : ['edit_empty']
  return edit.name || edit.cpc ? [] : ['edit_empty']
}

/** Os códigos de problema que a tela sabe explicar; o resto cai no genérico. */
export const KNOWN_PROBLEMS = new Set([
  'account_not_active',
  'account_without_site',
  'campaign_name_missing',
  'budget_missing',
  'bidding_invalid',
  'location_missing',
  'language_invalid',
  'ad_group_missing',
  'too_many_ad_groups',
  'ad_group_name_missing',
  'ad_group_cpc_missing',
  'keywords_missing',
  'keyword_invalid',
  'audience_invalid',
  'ad_missing',
  'ad_path_invalid',
  'ad_headlines_invalid',
  'ad_descriptions_invalid',
  'ad_display_path_invalid',
  'ad_business_name_invalid',
  'ad_long_headline_invalid',
  'ad_images_missing',
  'ad_logo_missing',
  'ad_images_invalid',
  'audiences_not_for_search',
  'keywords_only_for_search',
  'too_many_ads',
  'edit_level_invalid',
  'ad_type_not_supported',
  'edit_empty',
  'channel_not_supported',
])

/** A chave do texto de um problema; código novo da API cai no genérico. */
export function problemKey(code: string): Key {
  return (KNOWN_PROBLEMS.has(code) ? `gads.problem.${code}` : 'gads.problem.other') as Key
}

/** Os códigos que a API mandou em ``details.problems``. */
export function serverProblems(details: Record<string, unknown>): string[] {
  const problems = details.problems
  return Array.isArray(problems) ? problems.filter((item): item is string => typeof item === 'string') : []
}

/** Diz se o job terminou (feito ou com erro). */
export function jobFinished(job: Pick<GoogleAdsJob, 'state'>): boolean {
  return job.state === 'done' || job.state === 'failed'
}

/** O id da campanha que o job criou, para abrir na tela. */
export function createdCampaign(job: Pick<GoogleAdsJob, 'kind' | 'created'>): string | null {
  const campaign = job.created.campaign
  return job.kind === 'create' && typeof campaign === 'string' && campaign ? campaign : null
}

/** O tipo da campanha do objeto, quando o Avant cria e edita esse tipo. */
export function channelOf(channelType: string | null): GoogleAdsChannel | null {
  return CHANNELS.find((channel) => channel === channelType) ?? null
}
