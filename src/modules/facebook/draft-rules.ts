/** Regras de tela do rascunho de campanha (decisão 16, F3): opções do Gerenciador de Anúncios, rascunho em branco e a lista "Para criar" com os mesmos códigos do core. */

import type { Key } from '@/lib/i18n'
import type {
  FacebookAdFormat,
  FacebookAdInput,
  FacebookAdsetInput,
  FacebookDraftInput,
  FacebookEditInput,
  FacebookJob,
  FacebookJobStep,
  FacebookLevel,
  FacebookObjective,
  FacebookPick,
} from '@/modules/facebook/types'

export const OBJECTIVES: FacebookObjective[] = ['awareness', 'traffic', 'engagement', 'leads', 'app_promotion', 'sales']
/** Promoção de app não entra pelo Avant (o site é o destino); a tela mostra e explica. */
export const UNSUPPORTED_OBJECTIVES: FacebookObjective[] = ['app_promotion']
export const OPTIMIZATIONS: Record<FacebookObjective, string[]> = {
  awareness: ['REACH', 'IMPRESSIONS'],
  traffic: ['LANDING_PAGE_VIEWS', 'LINK_CLICKS', 'IMPRESSIONS'],
  engagement: ['POST_ENGAGEMENT', 'THRUPLAY'],
  leads: ['OFFSITE_CONVERSIONS', 'LINK_CLICKS'],
  app_promotion: [],
  sales: ['OFFSITE_CONVERSIONS', 'VALUE'],
}
export const PIXEL_OBJECTIVES: FacebookObjective[] = ['leads', 'sales']
export const EVENTS = ['PURCHASE', 'LEAD', 'COMPLETE_REGISTRATION', 'CONTENT_VIEW', 'ADD_TO_CART', 'INITIATED_CHECKOUT', 'SEARCH', 'SUBSCRIBE']
export const CALLS_TO_ACTION = ['LEARN_MORE', 'SHOP_NOW', 'SIGN_UP', 'SUBSCRIBE', 'WATCH_MORE', 'CONTACT_US', 'DOWNLOAD', 'GET_OFFER', 'APPLY_NOW', 'NO_BUTTON']
export const PLACEMENTS = ['facebook_feed', 'facebook_story', 'facebook_reels', 'marketplace', 'instagram_feed', 'instagram_story', 'instagram_reels', 'audience_network']
export const SPECIAL_CATEGORIES = ['FINANCIAL_PRODUCTS_SERVICES', 'EMPLOYMENT', 'HOUSING', 'ISSUES_ELECTIONS_POLITICS']
export const FORMATS: FacebookAdFormat[] = ['image', 'video', 'carousel']
export const JOB_STEPS: FacebookJobStep[] = ['media', 'campaign', 'adsets', 'creatives', 'ads', 'activate']
export const UTM_TAGS = 'utm_campaign={{campaign.id}}&utm_content={{adset.id}}&utm_term={{ad.id}}'
export const MAX_TEXTS = 5
export const MIN_CARDS = 2
export const MAX_CARDS = 10
export const MAX_ADSETS = 10
export const MAX_ADS = 50
const MIN_BUDGET = 1

/** Um anúncio em branco: imagem, botão "Saiba mais" e um texto e um título vazios. */
export function blankAd(name: string): FacebookAdInput {
  return {
    name,
    format: 'image',
    page_id: '',
    texts: [''],
    titles: [''],
    path: '/',
    call_to_action: 'LEARN_MORE',
    instagram_id: null,
    description: '',
    display_link: '',
    image_hash: null,
    video_id: null,
    cards: [],
  }
}

/** Um conjunto em branco com o público amplo do Advantage+ e a primeira otimização do objetivo. */
export function blankAdset(name: string, objective: FacebookObjective, adName: string): FacebookAdsetInput {
  return {
    name,
    optimization: OPTIMIZATIONS[objective][0] ?? '',
    countries: [],
    ads: [blankAd(adName)],
    start_time: null,
    end_time: null,
    budget: null,
    places: [],
    age_min: 18,
    age_max: 65,
    gender: 'all',
    locales: [],
    advantage_audience: true,
    interests: [],
    audiences: [],
    excluded_audiences: [],
    placements: [],
    pixel_id: null,
    event: null,
  }
}

/** O rascunho inicial: tráfego, orçamento diário na campanha, criada pausada. */
export function blankDraft(accountId: string, names: { adset: string; ad: string }): FacebookDraftInput {
  return {
    account_id: accountId,
    name: '',
    objective: 'traffic',
    adsets: [blankAdset(names.adset, 'traffic', names.ad)],
    budget_at: 'campaign',
    budget_kind: 'daily',
    budget: null,
    special_categories: [],
    bid: 'volume',
    bid_amount: null,
    spend_cap: null,
    start_active: false,
  }
}

/** Troca o objetivo e ajusta a otimização dos conjuntos que não cabe no novo. */
export function withObjective(draft: FacebookDraftInput, objective: FacebookObjective): FacebookDraftInput {
  const options = OPTIMIZATIONS[objective]
  const adsets = draft.adsets.map((adset) => (options.includes(adset.optimization) ? adset : { ...adset, optimization: options[0] ?? '' }))
  return { ...draft, objective, adsets }
}

/** Diz se o valor digitado é um dinheiro de pelo menos 1 na moeda da conta. */
function amountOk(value: string | null): boolean {
  const amount = Number(value ?? '')
  return Number.isFinite(amount) && amount >= MIN_BUDGET
}

/** Diz se o anúncio tem a mídia do formato: imagem, vídeo ou de 2 a 10 cartões com imagem e caminho. */
function hasMedia(ad: FacebookAdInput): boolean {
  if (ad.format === 'carousel') return ad.cards.length >= MIN_CARDS && ad.cards.length <= MAX_CARDS && ad.cards.every((card) => !!card.image_hash && !!card.path)
  if (ad.format === 'video') return !!ad.video_id
  return !!ad.image_hash
}

/** O que falta num anúncio, com os códigos do core. */
export function adProblems(ad: FacebookAdInput): string[] {
  const problems: string[] = []
  if (!ad.name.trim()) problems.push('ad_name_missing')
  if (!ad.page_id) problems.push('ad_page_missing')
  if (!hasMedia(ad)) problems.push('ad_media_missing')
  const texts = ad.texts.filter((text) => text.trim())
  const titles = ad.titles.filter((title) => title.trim())
  if (!texts.length || (ad.format !== 'carousel' && !titles.length)) problems.push('ad_text_missing')
  if (ad.texts.length > MAX_TEXTS || ad.titles.length > MAX_TEXTS) problems.push('ad_too_many_texts')
  if (!ad.path.startsWith('/')) problems.push('ad_path_invalid')
  if (!CALLS_TO_ACTION.includes(ad.call_to_action)) problems.push('ad_button_invalid')
  return problems
}

/** O que falta num conjunto, com os códigos do core. */
export function adsetProblems(draft: Pick<FacebookDraftInput, 'objective' | 'budget_at' | 'budget_kind'>, adset: FacebookAdsetInput): string[] {
  const problems: string[] = []
  if (!adset.name.trim()) problems.push('adset_name_missing')
  if (!adset.countries.length && !adset.places.length) problems.push('adset_location_missing')
  if (!(adset.age_min >= 13 && adset.age_min <= adset.age_max && adset.age_max <= 65)) problems.push('adset_age_invalid')
  if (!OPTIMIZATIONS[draft.objective].includes(adset.optimization)) problems.push('adset_optimization_invalid')
  if (PIXEL_OBJECTIVES.includes(draft.objective) && (!adset.pixel_id || !EVENTS.includes(adset.event ?? ''))) problems.push('adset_pixel_missing')
  if (adset.start_time && adset.end_time && adset.end_time <= adset.start_time) problems.push('adset_dates_invalid')
  if (draft.budget_kind === 'lifetime' && !adset.end_time) problems.push('lifetime_needs_end')
  if (draft.budget_at === 'adset' && !amountOk(adset.budget)) problems.push('adset_budget_missing')
  if (!adset.ads.length) problems.push('ad_missing')
  return problems
}

/** A lista "Para criar": os códigos do que falta, sem repetir, na ordem da tela. */
export function draftProblems(draft: FacebookDraftInput, hasSite: boolean): string[] {
  const problems: string[] = []
  if (!hasSite) problems.push('account_without_site')
  if (!draft.name.trim()) problems.push('name_missing')
  if (UNSUPPORTED_OBJECTIVES.includes(draft.objective)) problems.push('objective_unsupported')
  if (draft.budget_at === 'campaign' && !amountOk(draft.budget)) problems.push('budget_missing')
  if (draft.bid !== 'volume' && !amountOk(draft.bid_amount)) problems.push('bid_value_missing')
  if (!draft.adsets.length) problems.push('adset_missing')
  if (draft.adsets.length > MAX_ADSETS) problems.push('too_many_adsets')
  for (const adset of draft.adsets) {
    problems.push(...adsetProblems(draft, adset))
    for (const ad of adset.ads) problems.push(...adProblems(ad))
  }
  if (draft.adsets.reduce((total, adset) => total + adset.ads.length, 0) > MAX_ADS) problems.push('too_many_ads')
  return [...new Set(problems)]
}

/** O que falta numa edição, conforme o nível do objeto (o resto não muda no Facebook). */
export function editProblems(level: FacebookLevel, edit: FacebookEditInput, objective: FacebookObjective): string[] {
  if (level === 'adset' && edit.adset) {
    const ignored = ['ad_missing', 'adset_budget_missing', 'lifetime_needs_end']
    return adsetProblems({ objective, budget_at: 'campaign', budget_kind: 'daily' }, edit.adset).filter((problem) => !ignored.includes(problem))
  }
  if (level === 'ad' && edit.ad) return adProblems(edit.ad)
  return edit.name?.trim() || edit.spend_cap ? [] : ['edit_empty']
}

/** Os dias entre o início e o fim do conjunto; sem uma das datas conta como 1. */
function adsetDays(adset: FacebookAdsetInput): number {
  if (!adset.start_time || !adset.end_time) return 1
  return Math.max(1, Math.floor((Date.parse(adset.end_time) - Date.parse(adset.start_time)) / 86_400_000))
}

/** O valor por dia de um orçamento: o diário como está, o vitalício dividido pelos dias. */
function budgetPerDay(kind: FacebookDraftInput['budget_kind'], value: string | null, days: number): number {
  const amount = Number(value ?? 0)
  return (kind === 'daily' ? amount : amount / days) || 0
}

/** A soma diária do rascunho na moeda da conta, para o resumo: o vitalício conta dividido pelos dias. */
export function draftDaily(draft: FacebookDraftInput): number {
  if (draft.budget_at === 'campaign') return budgetPerDay(draft.budget_kind, draft.budget, Math.max(1, ...draft.adsets.map(adsetDays)))
  return draft.adsets.reduce((total, adset) => total + budgetPerDay(draft.budget_kind, adset.budget, adsetDays(adset)), 0)
}

/** A chave do texto de um problema da lista "Para criar"; código desconhecido vira o genérico. */
export function problemKey(code: string): Key {
  return (KNOWN_PROBLEMS.has(code) ? `fb.problem.${code}` : 'fb.problem.other') as Key
}

const KNOWN_PROBLEMS = new Set([
  'account_not_active',
  'account_without_site',
  'name_missing',
  'objective_unsupported',
  'budget_invalid',
  'budget_missing',
  'bid_invalid',
  'bid_value_missing',
  'special_category_invalid',
  'adset_missing',
  'too_many_adsets',
  'too_many_ads',
  'adset_name_missing',
  'adset_location_missing',
  'adset_age_invalid',
  'adset_optimization_invalid',
  'adset_pixel_missing',
  'adset_placement_invalid',
  'adset_dates_invalid',
  'lifetime_needs_end',
  'adset_budget_missing',
  'ad_missing',
  'ad_name_missing',
  'ad_page_missing',
  'ad_media_missing',
  'ad_text_missing',
  'ad_too_many_texts',
  'ad_path_invalid',
  'ad_button_invalid',
  'edit_empty',
  'edit_level_invalid',
])

/** Os problemas que a API mandou no erro ``facebook_draft_invalid``. */
export function serverProblems(details: Record<string, unknown>): string[] {
  const problems = details.problems
  return Array.isArray(problems) ? problems.filter((item): item is string => typeof item === 'string') : []
}

/** Diz se o job terminou (feito ou com erro). */
export function jobFinished(job: Pick<FacebookJob, 'state'>): boolean {
  return job.state === 'done' || job.state === 'failed'
}

/** A situação de cada passo da criação na tela de acompanhamento. */
export function stepState(job: Pick<FacebookJob, 'state' | 'step'>, step: FacebookJobStep): 'done' | 'current' | 'waiting' {
  if (job.state === 'done') return 'done'
  const current = job.step ? JOB_STEPS.indexOf(job.step) : -1
  const position = JOB_STEPS.indexOf(step)
  if (position <= current) return 'done'
  return position === current + 1 && job.state === 'running' ? 'current' : 'waiting'
}

/** O id da campanha criada pelo job, quando já existe (para abrir a tela dela); a cópia de uma duplicação só chega com a sincronia. */
export function createdCampaign(job: Pick<FacebookJob, 'created'>): string | null {
  const created = job.created.campaign
  return typeof created === 'string' ? created : null
}

/** Texto local de data e hora (datetime-local) para ISO com o fuso do navegador; vazio vira nada. */
export function localToIso(value: string): string | null {
  if (!value) return null
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString()
}

/** Um número com 2 dígitos, para datas. */
function twoDigits(part: number): string {
  return String(part).padStart(2, '0')
}

/** ISO para o valor de um campo datetime-local, no fuso do navegador. */
export function isoToLocal(value: string | null): string {
  if (!value) return ''
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return ''
  return `${parsed.getFullYear()}-${twoDigits(parsed.getMonth() + 1)}-${twoDigits(parsed.getDate())}T${twoDigits(parsed.getHours())}:${twoDigits(parsed.getMinutes())}`
}

/** Os lugares do conjunto numa lista só: países (pelo código) e estados, cidades e CEPs (pela chave do Facebook). */
export function joinPlaces(adset: Pick<FacebookAdsetInput, 'countries' | 'places'>): FacebookPick[] {
  return [...adset.countries.map((code) => ({ id: code, name: code, kind: 'country' })), ...adset.places]
}

/** Separa a lista de lugares em países e no resto, como a API espera. */
export function splitPlaces(picks: FacebookPick[]): Pick<FacebookAdsetInput, 'countries' | 'places'> {
  return {
    countries: picks.filter((pick) => pick.kind === 'country').map((pick) => pick.id),
    places: picks.filter((pick) => pick.kind !== 'country'),
  }
}

/** O objetivo do Avant a partir do que o Facebook grava na campanha (``OUTCOME_TRAFFIC``); desconhecido vira tráfego. */
export function objectiveOf(graph: string | null): FacebookObjective {
  const key = (graph ?? '').replace(/^OUTCOME_/, '').toLowerCase()
  return OBJECTIVES.find((objective) => objective === key) ?? 'traffic'
}
