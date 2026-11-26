/** Regras de tela da central de ajuda e do NPS: rótulos, busca, link do WhatsApp e o grupo da nota. */

import type { Key } from '@/lib/i18n'
import type { HelpCategory, HelpCenterItem } from '@/modules/help/types'

export const CATEGORIES: HelpCategory[] = ['technologies', 'getting_started', 'payments', 'ads', 'reports']
export const ARTICLE_CATEGORIES: HelpCategory[] = ['getting_started', 'payments', 'ads', 'reports']
export const CATEGORY_LABEL: Record<HelpCategory, Key> = {
  technologies: 'help.cat.technologies',
  getting_started: 'help.cat.getting_started',
  payments: 'help.cat.payments',
  ads: 'help.cat.ads',
  reports: 'help.cat.reports',
}
const WORDS_PER_MINUTE = 200
export const DETRACTOR_MAX = 6
export const PROMOTER_MIN = 9

export type NpsGroup = 'promoter' | 'passive' | 'detractor'
export const NPS_GROUP_LABEL: Record<NpsGroup, Key> = { promoter: 'nps.promoter', passive: 'nps.passive', detractor: 'nps.detractor' }
export const NPS_GROUP_TONE: Record<NpsGroup, 'ok' | 'ochre' | 'bad'> = { promoter: 'ok', passive: 'ochre', detractor: 'bad' }

/** O link do WhatsApp da Groone com a mensagem já escrita; vazio sem número configurado. */
export function whatsappLink(number: string | null | undefined, message: string): string {
  const digits = (number ?? '').replace(/\D/g, '')
  return digits ? `https://wa.me/${digits}?text=${encodeURIComponent(message)}` : ''
}

/** Os guias publicados, na ordem da equipe. */
export function guidesOf(items: HelpCenterItem[]): HelpCenterItem[] {
  return items.filter((item) => item.kind === 'guide')
}

/** Os artigos da categoria escolhida (ou todos) que têm a busca no título, no resumo ou no texto. */
export function filterArticles(items: HelpCenterItem[], category: HelpCategory | 'all', query: string): HelpCenterItem[] {
  const needle = query.trim().toLowerCase()
  return items.filter(
    (item) =>
      item.kind === 'article' &&
      (category === 'all' || item.category === category) &&
      `${item.content.title} ${item.content.summary} ${item.content.body}`.toLowerCase().includes(needle),
  )
}

/** Os guias que têm a busca no título, no resumo ou nos passos. */
export function filterGuides(items: HelpCenterItem[], query: string): HelpCenterItem[] {
  const needle = query.trim().toLowerCase()
  return guidesOf(items).filter((item) =>
    [item.content.title, item.content.summary, ...item.content.steps.map((step) => `${step.title} ${step.text}`)].join(' ').toLowerCase().includes(needle),
  )
}

/** Minutos de leitura do artigo, no mínimo 1. */
export function readingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}

/** Os parágrafos do artigo, separados por linha em branco (sem HTML: o texto aparece como foi escrito). */
export function paragraphs(body: string): string[] {
  return body
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)
}

/** O grupo da nota do NPS: promotor (9 e 10), neutro (7 e 8) ou detrator (0 a 6). */
export function npsGroup(score: number): NpsGroup {
  if (score >= PROMOTER_MIN) return 'promoter'
  if (score > DETRACTOR_MAX) return 'passive'
  return 'detractor'
}
