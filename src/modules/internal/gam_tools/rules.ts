/** Regras de tela das ferramentas do GAM: rótulos dos passos, situação e o que vai ser escrito. */

import { t, type Key } from '@/lib/i18n'
import type { GamFormat, GamRunState, GamStep, GamStepState, GamToolKind, GamToolSite } from '@/modules/internal/gam_tools/types'

export type ToolCard = GamToolKind | 'install' | 'ads_txt'
export const TOOL_CARDS: ToolCard[] = ['config', 'setup', 'key_values', 'sync', 'install', 'ads_txt']
export const WRITING_TOOLS: GamToolKind[] = ['config', 'setup', 'key_values']
export const FORMATS: GamFormat[] = ['light', 'gtag']
export const BLOCK_COUNT: Record<GamFormat, number> = { light: 14, gtag: 27 }
export const KEY_NAMES = ['utm_term', 'utm_source', 'utm_medium', 'utm_content', 'utm_campaign', 'land_uri', 'id_post_wp', 'content_hash', 'groone_prices', 'groone_group']
export const STEP_TONE: Record<GamStepState, 'ok' | 'bad' | 'neutral' | 'ochre'> = {
  pending: 'neutral',
  running: 'ochre',
  done: 'ok',
  existed: 'ok',
  failed: 'bad',
}
export const RUN_TONE: Record<GamRunState, 'ok' | 'bad' | 'ochre'> = { running: 'ochre', done: 'ok', failed: 'bad' }

/** Diz se a ferramenta escreve no GAM (e pede internal.gam_tools.run). */
export function writes(tool: ToolCard): boolean {
  return (WRITING_TOOLS as ToolCard[]).includes(tool)
}

/** O nome do passo, com o site quando o passo é de um site. */
export function stepLabel(step: GamStep, format: GamFormat | null): string {
  const blocks = format ? BLOCK_COUNT[format] : 0
  if (step.key === 'parent') return t('gamt.step.parent', { site: step.site ?? '' })
  if (step.key === 'children') return t('gamt.step.children', { site: step.site ?? '', count: blocks })
  if (step.key === 'line_items') return format === 'light' ? t('gamt.step.lineItemDisplay') : t('gamt.step.lineItems', { count: blocks })
  return t(`gamt.step.${step.key}` as Key)
}

/** O detalhe do passo: o que encontrou ou criou no GAM. */
export function stepDetail(step: GamStep): string {
  if (step.state === 'failed') return step.error ? t('gamt.detail.failed', { code: step.error }) : ''
  if (step.state !== 'done' && step.state !== 'existed') return ''
  const existed = step.state === 'existed'
  if (step.key === 'info') return t('gamt.detail.info', { code: step.gam_id ?? '' })
  if (step.key === 'seller') return t('gamt.detail.seller', { seller: step.gam_id ?? '' })
  if (step.key === 'children' && step.gam_id) return t(existed ? 'gamt.detail.childrenExisted' : 'gamt.detail.children', { count: step.count ?? 0, day: step.gam_id })
  if (step.key === 'keys' || step.key === 'values' || step.key === 'line_items' || step.key === 'association')
    return existed ? t('gamt.detail.nothingNew') : t('gamt.detail.created', { count: step.count ?? 0 })
  if (step.gam_id) return t(existed ? 'gamt.detail.existedId' : 'gamt.detail.createdId', { id: step.gam_id })
  return existed ? t('gamt.detail.existed') : ''
}

/** Quantos passos já terminaram. */
export function finishedSteps(steps: GamStep[]): number {
  return steps.filter((step) => step.state === 'done' || step.state === 'existed').length
}

/** Os sites que começam marcados no setup: os que ainda não têm blocos. */
export function defaultSites(sites: GamToolSite[]): string[] {
  return sites.filter((site) => site.blocks === 0).map((site) => site.domain)
}

/** Troca a marcação de um domínio na lista. */
export function toggleDomain(chosen: string[], domain: string): string[] {
  return chosen.includes(domain) ? chosen.filter((item) => item !== domain) : [...chosen, domain]
}

/** O resumo do que o site já tem no GAM, para a lista de escolha. */
export function siteSummary(site: GamToolSite): string {
  if (site.blocks) return t('gamt.site.blocks', { count: site.blocks, format: site.format ? formatName(site.format) : '' })
  return site.has_parent ? t('gamt.site.parentOnly') : t('gamt.site.nothing')
}

/** Os sites que podem sair no arquivo de instalação: os que têm blocos importados ou nenhum formato conhecido. */
export function installable(sites: GamToolSite[]): GamToolSite[] {
  return sites.filter((site) => site.format !== 'gtag')
}

/** O nome da ferramenta. */
export function toolName(tool: ToolCard): string {
  return t(`gamt.tool.${tool}` as Key)
}

/** O que a ferramenta faz. */
export function toolDesc(tool: ToolCard): string {
  return t(`gamt.tool.${tool}.desc` as Key)
}

/** O nome do formato dos blocos. */
export function formatName(format: GamFormat): string {
  return t(`gamt.format.${format}` as Key)
}

/** O que o formato cria. */
export function formatDesc(format: GamFormat): string {
  return t(`gamt.format.${format}.desc` as Key)
}

/** A situação da execução. */
export function runStateLabel(state: GamRunState): string {
  return t(`gamt.run.${state}` as Key)
}

/** A situação do passo. */
export function stepStateLabel(state: GamStepState): string {
  return t(`gamt.step.state.${state}` as Key)
}

/** O tipo de delegação do MCM. */
export function delegationLabel(delegation: 'manage_inventory' | 'manage_account' | null): string {
  return delegation ? t(`gamt.delegation.${delegation}` as Key) : '–'
}

/** O nome do idioma do arquivo de instalação. */
export function languageLabel(language: 'pt' | 'en' | 'es'): string {
  return t(`gamt.lang.${language}` as Key)
}
