/** Regras de tela dos rewards: valores iniciais, modelos de cor, conferência do formulário, prévia e métricas. */

import { luminance } from 'avant-tag/reward'
import type { PublicReward } from 'avant-tag/reward'
import type { Reward, RewardInput, RewardLayout, RewardMetrics, RewardStyle } from '@/modules/rewards/types'

export const MAX_QUESTIONS = 5
export const COOLDOWN_RANGE = [5, 1440] as const
export const SCROLL_RANGE = [5, 100] as const
export const LIMITS = { name: 120, title: 120, description: 300, button: 40, answer: 80, question: 200, selector: 200, path: 500, emoji: 16 }
export const LAYOUTS: RewardLayout[] = ['simple', 'highlight', 'header']
export const EMOJIS = ['🎁', '🏆', '🎉', '🚀', '🥳', '🎊', '🔓', '⭐']
export const FONTS = ['Geist', 'Inter', 'Roboto', 'Montserrat', 'Poppins', 'Lora', 'Merriweather', 'Playfair Display']
export const ICON_ACCEPT = 'image/png,image/jpeg,image/webp'
export const ICON_MAX_BYTES = 2 * 1024 * 1024

type Palette = Pick<RewardStyle, 'body_color' | 'border_color' | 'title_color' | 'text_color' | 'button_color' | 'button_text_color'>

/** Os modelos de cor do protótipo: claro, escuro, quente e natureza. */
export const PRESETS: { key: 'light' | 'dark' | 'warm' | 'nature'; palette: Palette }[] = [
  { key: 'light', palette: { body_color: '#ffffff', border_color: '#e5e5e5', title_color: '#0a0a0a', text_color: '#525252', button_color: '#0a0a0a', button_text_color: '#ffffff' } },
  { key: 'dark', palette: { body_color: '#0a213d', border_color: '#1e3a5f', title_color: '#ffffff', text_color: '#c7d2e0', button_color: '#1976d2', button_text_color: '#ffffff' } },
  { key: 'warm', palette: { body_color: '#fff7ed', border_color: '#fdba74', title_color: '#7c2d12', text_color: '#9a3412', button_color: '#ea580c', button_text_color: '#ffffff' } },
  { key: 'nature', palette: { body_color: '#f0fdf4', border_color: '#86efac', title_color: '#14532d', text_color: '#166534', button_color: '#16a34a', button_text_color: '#ffffff' } },
]

/** O corpo padrão de um reward novo (o mesmo default da API). */
export function defaultStyle(): RewardStyle {
  return { ...PRESETS[1]!.palette, layout: 'simple', border_width: 1, radius: 24, font: 'Geist', shadow: true }
}

/** O formulário de um reward novo no site dado, com os textos iniciais no idioma do painel. */
export function blankInput(siteId: string, texts: { title: string; description: string; button: string }): RewardInput {
  return {
    site_id: siteId,
    name: '',
    page_path: '',
    title: texts.title,
    description: texts.description,
    button_text: texts.button,
    icon_kind: 'emoji',
    icon_emoji: '🎁',
    style: defaultStyle(),
    trigger: 'load',
    scroll_percent: null,
    click_selector: null,
    cooldown_minutes: 30,
    ad_unit_day: null,
    redirect_path: null,
    questions: [],
    lead: null,
    active: true,
  }
}

/** O formulário com os dados de um reward que já existe. */
export function inputOf(reward: Reward): RewardInput {
  return {
    site_id: reward.site_id,
    name: reward.name,
    page_path: reward.page_path,
    title: reward.title,
    description: reward.description,
    button_text: reward.button_text,
    icon_kind: reward.icon_kind,
    icon_emoji: reward.icon_emoji,
    style: { ...reward.style },
    trigger: reward.trigger,
    scroll_percent: reward.scroll_percent,
    click_selector: reward.click_selector,
    cooldown_minutes: reward.cooldown_minutes,
    ad_unit_day: reward.ad_unit_day,
    redirect_path: reward.redirect_path,
    questions: reward.questions.map((question) => ({ id: question.id, title: question.title, description: question.description, answers: [...question.answers] })),
    lead: reward.lead ? { ...reward.lead } : null,
    active: reward.active,
  }
}

/** Tira o domínio de um link colado e as barras das pontas: fica só o caminho da página. */
export function cleanPath(value: string): string {
  return value.trim().replace(/^https?:\/\/[^/]+/i, '').replace(/^\/+/, '')
}

/** Contraste entre duas cores, de 1 a 21 (WCAG). */
export function contrast(first: string, second: string): number {
  const [light, dark] = [luminance(first), luminance(second)].sort((left, right) => right - left)
  return ((light ?? 0) + 0.05) / ((dark ?? 0) + 0.05)
}

/** O aviso de contraste: botão ou texto difícil de ler, ou nada. */
export function contrastWarning(style: RewardStyle): 'button' | 'text' | null {
  if (contrast(style.button_color, style.button_text_color) < 4.5) return 'button'
  if (contrast(style.body_color, style.title_color) < 3 || contrast(style.body_color, style.text_color) < 4.5) return 'text'
  return null
}

export type FormProblem =
  | 'name'
  | 'page'
  | 'title'
  | 'button'
  | 'emoji'
  | 'image'
  | 'scroll'
  | 'selector'
  | 'cooldown'
  | 'questions'
  | 'lead'
  | 'redirect'
  | 'redirectSame'

/** O que falta ou está errado no formulário, antes de mandar para a API. */
export function formProblems(input: RewardInput, hasImage: boolean): Set<FormProblem> {
  const problems = new Set<FormProblem>()
  const page = cleanPath(input.page_path)
  if (!input.name.trim()) problems.add('name')
  if (!page) problems.add('page')
  if (!input.title.trim()) problems.add('title')
  if (!input.button_text.trim()) problems.add('button')
  if (input.icon_kind === 'emoji' && !input.icon_emoji?.trim()) problems.add('emoji')
  if (input.icon_kind === 'image' && !hasImage) problems.add('image')
  const scroll = input.scroll_percent ?? 0
  if (input.trigger === 'scroll' && (scroll < SCROLL_RANGE[0] || scroll > SCROLL_RANGE[1])) problems.add('scroll')
  if (input.trigger === 'click' && !input.click_selector?.trim()) problems.add('selector')
  const cooldown = input.cooldown_minutes
  if (!Number.isInteger(cooldown) || cooldown < COOLDOWN_RANGE[0] || cooldown > COOLDOWN_RANGE[1]) problems.add('cooldown')
  if (input.questions.some((question) => !question.title.trim() || question.answers.some((answer) => !answer.trim()))) problems.add('questions')
  if (input.lead && (!input.lead.title.trim() || !input.lead.button.trim())) problems.add('lead')
  if (input.redirect_path !== null) {
    const redirect = cleanPath(input.redirect_path)
    if (!redirect) problems.add('redirect')
    else if (redirect.replace(/\/$/, '') === page.replace(/\/$/, '')) problems.add('redirectSame')
  }
  return problems
}

/** O corpo que vai para a API: caminhos limpos e campos do gatilho só quando valem. */
export function toPayload(input: RewardInput): RewardInput {
  return {
    ...input,
    name: input.name.trim(),
    page_path: cleanPath(input.page_path),
    icon_emoji: input.icon_kind === 'emoji' ? (input.icon_emoji?.trim() ?? null) : null,
    scroll_percent: input.trigger === 'scroll' ? input.scroll_percent : null,
    click_selector: input.trigger === 'click' ? (input.click_selector?.trim() ?? null) : null,
    redirect_path: input.redirect_path === null ? null : cleanPath(input.redirect_path),
    lead: input.lead && input.questions.length === 0 ? { ...input.lead, position: 'start' } : input.lead,
  }
}

/** O reward do formulário no formato do script, para a prévia usar o mesmo desenho do site. */
export function previewReward(input: RewardInput, iconUrl: string | null): PublicReward {
  return {
    id: 'preview',
    title: input.title,
    description: input.description,
    button_text: input.button_text,
    icon: { kind: input.icon_kind, emoji: input.icon_emoji, url: iconUrl },
    style: input.style,
    trigger: input.trigger,
    scroll_percent: input.scroll_percent,
    click_selector: input.click_selector,
    cooldown_minutes: input.cooldown_minutes,
    redirect_url: null,
    questions: input.questions.map((question, index) => ({ id: question.id ?? `new-${index}`, title: question.title, description: question.description, answers: question.answers })),
    lead: input.lead,
    ad_units: { desktop: [], mobile: [] },
  }
}

export interface FunnelRow {
  key: string
  value: number
}

/** As etapas do funil na ordem do reward: abriu, contato e perguntas, clicou e concluiu. */
export function funnelRows(reward: Pick<Reward, 'questions' | 'lead'>, metrics: RewardMetrics): FunnelRow[] {
  const questions = reward.questions.map((_question, index) => `question_${index + 1}`)
  const lead = reward.lead ? ['lead'] : []
  const middle = reward.lead?.position === 'start' ? [...lead, ...questions] : [...questions, ...lead]
  return [
    { key: 'opens', value: metrics.total.opens },
    ...middle.map((key) => ({ key, value: metrics.steps[key] ?? 0 })),
    { key: 'clicks', value: metrics.total.clicks },
    { key: 'completed', value: metrics.total.completed },
  ]
}

/** Quantas vezes cada resposta (0 a 2) da pergunta foi escolhida. */
export function answerCounts(metrics: RewardMetrics, questionId: string): [number, number, number] {
  const counts: [number, number, number] = [0, 0, 0]
  for (const row of metrics.answers) {
    if (row.question_id === questionId && row.answer >= 0 && row.answer <= 2) counts[row.answer as 0 | 1 | 2] += row.count
  }
  return counts
}

/** Uma parte de um todo em porcentagem com uma casa; todo zero dá zero. */
export function share(part: number, whole: number): number {
  return whole > 0 ? Math.round((part / whole) * 1000) / 10 : 0
}

/** A permissão de rewards de cada painel: `rewards.*` no do cliente e `internal.rewards.*` no interno. */
export function rewardPermission(internal: boolean, action: 'view' | 'manage' | 'leads'): string {
  return `${internal ? 'internal.' : ''}rewards.${action}`
}

/** O caminho da tela de rewards de cada painel. */
export function rewardsPath(internal: boolean): string {
  return internal ? '/interno/rewards' : '/rewards'
}

/** A linha do script para pôr no `<head>` do site, com a origem do painel. */
export function installSnippet(origin: string): string {
  return `<script async src="${origin}/reward.js"></script>`
}

/** Um dia `AAAA-MM-DD` no formato curto do idioma, sem o fuso mudar o dia. */
export function dayText(day: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, { dateStyle: 'short', timeZone: 'UTC' }).format(new Date(`${day}T00:00:00Z`))
}

/** O período dos últimos `days` dias até hoje, como a API espera (`from` e `to`). */
export function lastDays(days: number, today = new Date()): { from: string; to: string } {
  /** O dia local em `AAAA-MM-DD`. */
  const iso = (date: Date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
  const start = new Date(today)
  start.setDate(start.getDate() - (days - 1))
  return { from: iso(start), to: iso(today) }
}

/** Os nomes dos ad units do grupo, com o aparelho de cada um quando não cobre os dois. */
export function adUnitNames(units: { name: string; desktop: boolean; mobile: boolean }[], devices: { desktop: string; mobile: string }): string {
  return units.map((unit) => (unit.desktop && unit.mobile ? unit.name : `${unit.name} (${unit.desktop ? devices.desktop : devices.mobile})`)).join(', ')
}
