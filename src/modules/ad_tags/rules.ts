/** Regras de tela das ad tags: nomes dos blocos, problemas do rascunho, o que mudou, situação e saúde. */

import { t, type Key } from '@/lib/i18n'
import type { AdTag, AdTagBlock, AdTagBlockKind, AdTagDraft, AdTagHealth, AdTagSettings, AdTagUnitDay } from '@/modules/ad_tags/types'

export const UNIT_ORDER = [...Array.from({ length: 9 }, (_item, index) => `Content${index + 1}`), 'Anchor', 'Interstitial', 'Fixed']
export const REFRESH_OPTIONS: (number | null)[] = [null, 30, 45, 60, 90, 120]
export const LIMITS = { name: 60, selector: 300, path: 300, paths: 50, text: 100 } as const
export const KIND_HINT: Record<AdTagBlockKind, Key> = {
  content: 'at.kindHint.content',
  anchor: 'at.kindHint.anchor',
  interstitial: 'at.kindHint.interstitial',
  fixed: 'at.kindHint.fixed',
}
const ANALYTICS = /^(G|UA|GT|AW)-[A-Z0-9-]{4,20}$/
const MGID = /^[A-Za-z0-9_.-]{1,100}$/
const UNIT_KIND: Record<string, AdTagBlockKind> = { Anchor: 'anchor', Interstitial: 'interstitial', Fixed: 'fixed' }

export type StatusTone = 'ok' | 'warn' | 'bad' | 'ochre' | 'neutral'

/** A permissão da ação no painel: a do cliente ou a interna. */
export function adTagPermission(internal: boolean, action: 'view' | 'manage'): string {
  return internal ? `internal.ad_tags.${action}` : `ad_tags.${action}`
}

/** O caminho da lista de ad tags no painel. */
export function adTagsPath(internal: boolean): string {
  return internal ? '/interno/ad-tags' : '/ad-tags'
}

/** As configurações de uma tag nova, como a API cria. */
export function blankSettings(): AdTagSettings {
  return {
    lazy_load: true,
    ad_unit_day: null,
    analytics_id: null,
    mgid_tag_id: null,
    mgid_smart_widget: null,
    mgid_back_button: null,
    mgid_sidebar: null,
    reward: false,
    price_rules: false,
    loader_id: null,
  }
}

/** O tipo do ad unit no GAM do bloco (`Content3`, `Anchor`...). */
export function unitCode(block: Pick<AdTagBlock, 'kind' | 'number'>): string {
  if (block.kind === 'content') return `Content${block.number ?? 0}`
  return block.kind.charAt(0).toUpperCase() + block.kind.slice(1)
}

/** O nome do bloco no painel a partir do tipo do ad unit: Conteúdo 3, Âncora... */
export function unitName(code: string): string {
  if (code.startsWith('Content')) return t('at.kind.content', { n: code.slice('Content'.length) })
  const kind = UNIT_KIND[code]
  return kind ? t(`at.kind.${kind}`) : code
}

/** O nome do bloco no painel. */
export function blockName(block: Pick<AdTagBlock, 'kind' | 'number'>): string {
  return unitName(unitCode(block))
}

/** Um bloco novo do tipo do ad unit, com os valores mais comuns; o fixo vai para o lado livre. */
export function newBlock(code: string, anchorEdge: AdTagBlock['edge']): AdTagBlock {
  const kind = code.startsWith('Content') ? 'content' : (UNIT_KIND[code] ?? 'anchor')
  const edge = kind === 'anchor' ? 'bottom' : kind === 'fixed' ? (anchorEdge === 'top' ? 'bottom' : 'top') : null
  return {
    kind,
    desktop: true,
    mobile: true,
    number: kind === 'content' ? Number(code.slice('Content'.length)) : null,
    edge,
    selector: null,
    side: kind === 'content' ? 'after' : null,
    refresh_seconds: null,
    mgid_article: null,
    rule_mode: 'all',
    paths: [],
  }
}

/** O dia dos blocos que vale: o fixado ou o mais recente. */
export function chosenDay(days: AdTagUnitDay[], adUnitDay: string | null): AdTagUnitDay | null {
  if (!adUnitDay) return days[0] ?? null
  return days.find((day) => day.day === adUnitDay) ?? null
}

/** O lado da âncora no aparelho, se houver âncora ligada nele. */
function anchorEdgeOn(blocks: AdTagBlock[], device: 'desktop' | 'mobile'): AdTagBlock['edge'] {
  return blocks.find((block) => block.kind === 'anchor' && block[device])?.edge ?? null
}

/** O problema do bloco que impede publicar, ou vazio. */
export function blockProblem(block: AdTagBlock, blocks: AdTagBlock[], day: AdTagUnitDay | null): Key | null {
  const unit = day?.units.find((item) => item.unit_type === unitCode(block))
  if (!unit) return 'at.problem.missingUnit'
  if (!block.desktop && !block.mobile) return 'at.problem.noDevice'
  if (block.kind === 'content' && !(block.selector ?? '').trim()) return 'at.problem.noSelector'
  if (block.rule_mode !== 'all' && block.paths.length === 0) return 'at.problem.noPaths'
  if (block.kind === 'fixed') {
    const clash = (['desktop', 'mobile'] as const).some((device) => block[device] && anchorEdgeOn(blocks, device) === block.edge)
    if (clash) return 'at.problem.edgeClash'
  }
  const repeated = blocks.some((other) => other !== block && unitCode(other) === unitCode(block) && ((other.desktop && block.desktop) || (other.mobile && block.mobile)))
  if (repeated) return 'at.problem.repeated'
  return null
}

/** O problema das integrações que impede salvar, ou vazio. */
export function settingsProblem(settings: AdTagSettings): Key | null {
  const analytics = (settings.analytics_id ?? '').trim()
  if (analytics && !ANALYTICS.test(analytics.toUpperCase())) return 'at.problem.analytics'
  const mgid = [settings.mgid_tag_id, settings.mgid_smart_widget, settings.mgid_back_button, settings.mgid_sidebar]
  if (mgid.some((value) => (value ?? '').trim() && !MGID.test((value ?? '').trim()))) return 'at.problem.mgid'
  return null
}

/** O rascunho no formato que a API guarda: textos limpos, vazios como nulo e caminhos sem barra. */
export function toPayload(draft: AdTagDraft): AdTagDraft {
  /** O texto aparado, ou nulo quando fica vazio. */
  const text = (value: string | null) => (value ?? '').trim() || null
  return {
    blocks: draft.blocks.map((block) => ({
      ...block,
      selector: block.kind === 'content' ? text(block.selector) : null,
      mgid_article: text(block.mgid_article),
      paths: block.rule_mode === 'all' ? [] : block.paths,
    })),
    settings: {
      ...draft.settings,
      analytics_id: text(draft.settings.analytics_id)?.toUpperCase() ?? null,
      mgid_tag_id: text(draft.settings.mgid_tag_id),
      mgid_smart_widget: text(draft.settings.mgid_smart_widget),
      mgid_back_button: text(draft.settings.mgid_back_button),
      mgid_sidebar: text(draft.settings.mgid_sidebar),
    },
  }
}

/** Um caminho digitado no formato da regra: sem domínio e sem barras nas pontas (`receitas/*`). */
export function cleanPath(value: string): string {
  return value
    .trim()
    .replace(/^https?:\/\/[^/]+/i, '')
    .replace(/^\/+|\/+$/g, '')
    .slice(0, LIMITS.path)
}

/** O caminho casa com o padrão da regra, como no tag.js: `*` é curinga e a barra do fim não conta. */
export function pathMatches(pattern: string, path: string): boolean {
  const clean = `/${pattern.trim().replace(/^\/+/, '')}`
  const escaped = clean.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*')
  return new RegExp(`^${escaped}/?$`, 'i').test(path || '/')
}

/** O bloco entra nesta página pela regra de páginas (sem caminhos, vale em todas). */
export function blockOnPage(block: AdTagBlock, path: string): boolean {
  if (block.rule_mode === 'all' || block.paths.length === 0) return true
  const matched = block.paths.some((pattern) => pathMatches(pattern, path))
  return block.rule_mode === 'include' ? matched : !matched
}

/** As frases do que mudou entre a versão no ar e o rascunho; sem versão, conta os blocos. */
export function draftChanges(live: AdTagDraft | null, draft: AdTagDraft): string[] {
  if (!live) return draft.blocks.length ? [t('at.change.first', { n: draft.blocks.length })] : [t('at.change.firstEmpty')]
  const changes: string[] = []
  const before = new Map(live.blocks.map((block, index) => [unitCode(block), { block, index }]))
  draft.blocks.forEach((block, index) => {
    const name = blockName(block)
    const found = before.get(unitCode(block))
    if (!found) {
      changes.push(t('at.change.added', { name }))
      return
    }
    const old = found.block
    if (found.index !== index) changes.push(t('at.change.order', { name }))
    if ((old.selector ?? '') !== (block.selector ?? '') || old.side !== block.side) changes.push(t('at.change.place', { name }))
    if (old.edge !== block.edge) changes.push(t('at.change.edge', { name }))
    if (old.refresh_seconds !== block.refresh_seconds) changes.push(t('at.change.refresh', { name }))
    if (old.desktop !== block.desktop || old.mobile !== block.mobile) changes.push(t('at.change.devices', { name }))
    if (old.rule_mode !== block.rule_mode || old.paths.join() !== block.paths.join()) changes.push(t('at.change.pages', { name }))
    if ((old.mgid_article ?? '') !== (block.mgid_article ?? '')) changes.push(t('at.change.mgidArticle', { name }))
  })
  const codes = new Set(draft.blocks.map(unitCode))
  live.blocks.filter((block) => !codes.has(unitCode(block))).forEach((block) => changes.push(t('at.change.removed', { name: blockName(block) })))
  const labels: [keyof AdTagSettings, Key][] = [
    ['lazy_load', 'at.lazyLoad'],
    ['ad_unit_day', 'at.adUnits'],
    ['loader_id', 'at.loader'],
    ['analytics_id', 'at.analytics'],
    ['mgid_tag_id', 'at.mgid.tag'],
    ['mgid_smart_widget', 'at.mgid.smart'],
    ['mgid_back_button', 'at.mgid.back'],
    ['mgid_sidebar', 'at.mgid.sidebar'],
    ['reward', 'at.reward'],
    ['price_rules', 'at.priceRules'],
  ]
  labels.forEach(([key, label]) => {
    if ((live.settings[key] ?? null) !== (draft.settings[key] ?? null)) changes.push(t('at.change.setting', { name: t(label) }))
  })
  return changes
}

/** A situação da tag para a lista e o cabeçalho: pausada, nunca publicada, sem rodar ou no ar. */
export function tagStatus(tag: Pick<AdTag, 'active' | 'live'>, lastSeen: string | null | undefined): { tone: StatusTone; label: string } {
  if (!tag.active) return { tone: 'neutral', label: t('at.status.paused') }
  if (!tag.live) return { tone: 'ochre', label: t('at.status.never') }
  if (lastSeen === null) return { tone: 'warn', label: t('at.status.notInstalled') }
  return { tone: 'ok', label: t('at.status.live', { n: tag.live.number }) }
}

/** A linha que vai no <head> do site, com a chave da tag. */
export function installLine(origin: string, key: string): string {
  return `<script async src="${origin}/tag.js" data-tag="${key}"></script>`
}

/** Uma linha da tabela de blocos da saúde. */
export interface HealthBlockRow {
  placement: string
  pages: number
  rendered: number
  empty: number
}

/** As somas da saúde no período: páginas, por dia e por bloco. */
export function healthSummary(health: AdTagHealth): { pages: number; days: { day: string; pages: number; rendered: number; empty: number }[]; blocks: HealthBlockRow[] } {
  const days = new Map<string, { day: string; pages: number; rendered: number; empty: number }>()
  const blocks = new Map<string, HealthBlockRow>()
  let pages = 0
  for (const row of health.days) {
    const day = days.get(row.day) ?? { day: row.day, pages: 0, rendered: 0, empty: 0 }
    if (row.placement === 'page') {
      day.pages += row.page_views
      pages += row.page_views
    } else {
      day.rendered += row.rendered
      day.empty += row.empty
      const block = blocks.get(row.placement) ?? { placement: row.placement, pages: 0, rendered: 0, empty: 0 }
      block.pages += row.page_views
      block.rendered += row.rendered
      block.empty += row.empty
      blocks.set(row.placement, block)
    }
    days.set(row.day, day)
  }
  /** A posição do bloco na ordem dos tipos do GAM; um tipo desconhecido vai para o fim. */
  const order = (code: string) => (UNIT_ORDER.includes(code) ? UNIT_ORDER.indexOf(code) : UNIT_ORDER.length)
  return {
    pages,
    days: [...days.values()].sort((first, second) => first.day.localeCompare(second.day)),
    blocks: [...blocks.values()].sort((first, second) => order(first.placement) - order(second.placement)),
  }
}

/** Uma parte do todo em porcentagem (0 quando o todo é zero). */
export function share(part: number, whole: number): number {
  return whole > 0 ? (part / whole) * 100 : 0
}
