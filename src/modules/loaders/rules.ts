/** Regras de tela dos loaders: formulário, validação, prévia e caminhos. */

import type { Key } from '@/lib/i18n'
import type { Loader, LoaderAdblock, LoaderInput, LoaderStyle, LoaderTemplate } from '@/modules/loaders/types'

export const BLUR_LEVELS = [0, 1, 2, 3] as const
export const BLUR_PIXELS = [0, 4, 8, 14] as const
export const MAX_SECONDS = [1, 2, 3, 5] as const
export const TEMPLATES: LoaderTemplate[] = ['groone', 'solid']
export const STYLES: LoaderStyle[] = ['bar', 'spinner', 'dots']
export const LIMITS = { name: 200, text: 60 } as const

const HEX_COLOR = /^#[0-9a-f]{6}$/

/** A configuração que a tag recebe, no formato `PublicLoader` do avant-tag. */
export interface PreviewLoader {
  template: LoaderTemplate
  blur: number
  background: string
  accent: string
  style: LoaderStyle
  text: string | null
  max_seconds: number
  adblock: Loader['adblock']
}

/** A permissão das ad tags que vale para os loaders em cada painel. */
export function loaderPermission(internal: boolean, action: 'view' | 'manage'): string {
  return `${internal ? 'internal.' : ''}ad_tags.${action}`
}

/** O caminho da tela de loaders de cada painel. */
export function loadersPath(internal: boolean): string {
  return internal ? '/interno/loaders' : '/loaders'
}

/** Um loader novo com os valores padrão da API. */
export function blankInput(companyId?: string): LoaderInput {
  return {
    name: '',
    template: 'groone',
    blur: 2,
    background: '#ffffff',
    accent: '#171717',
    style: 'spinner',
    text: null,
    max_seconds: 3,
    adblock: 'warn',
    ...(companyId !== undefined ? { company_id: companyId } : {}),
  }
}

/** O formulário a partir do loader salvo. */
export function inputOf(loader: Loader): LoaderInput {
  const { name, template, blur, background, accent, style, text, max_seconds, adblock } = loader
  return { name, template, blur, background, accent, style, text, max_seconds, adblock }
}

/** Troca o modelo: o GroOne usa sempre o círculo e um blur, o texto só existe no Tela cheia. */
export function withTemplate(input: LoaderInput, template: LoaderTemplate): LoaderInput {
  if (template === 'groone') return { ...input, template, style: 'spinner', blur: input.blur || 2 }
  return { ...input, template }
}

/** Os campos com problema: nome vazio, cor fora do `#rrggbb` ou texto longo. */
export function formProblems(input: LoaderInput, internal = false): Set<string> {
  const problems = new Set<string>()
  if (!input.name.trim()) problems.add('name')
  if (!HEX_COLOR.test(input.background)) problems.add('background')
  if (!HEX_COLOR.test(input.accent)) problems.add('accent')
  if ((input.text ?? '').trim().length > LIMITS.text) problems.add('text')
  if (internal && input.company_id === '') problems.add('company')
  return problems
}

/** O corpo para a API: nome aparado e texto só no Tela cheia (vazio vira nulo). */
export function toPayload(input: LoaderInput): LoaderInput {
  const text = input.template === 'solid' ? input.text?.trim() || null : null
  return { ...input, name: input.name.trim(), text }
}

/** O loader no formato da tag, para a prévia desenhada pelo avant-tag. */
export function previewLoader(input: LoaderInput): PreviewLoader {
  const { template, blur, background, accent, style, max_seconds, adblock } = input
  const text = template === 'solid' ? input.text?.trim() || null : null
  return { template, blur, background, accent, style, text, max_seconds, adblock }
}

/** O site de exemplo da prévia: o da primeira ad tag que usa o loader, ou um genérico. */
export function previewDomain(loader: Pick<Loader, 'tags'> | null): string {
  return loader?.tags[0]?.domain ?? 'seusite.com.br'
}

export const TEMPLATE_LABEL: Record<LoaderTemplate, Key> = { groone: 'ld.template.groone', solid: 'ld.template.solid' }
export const TEMPLATE_HINT: Record<LoaderTemplate, Key> = { groone: 'ld.template.grooneHint', solid: 'ld.template.solidHint' }
export const STYLE_LABEL: Record<LoaderStyle, Key> = { bar: 'ld.style.bar', spinner: 'ld.style.spinner', dots: 'ld.style.dots' }
export const ADBLOCK_TITLE: Record<LoaderAdblock, Key> = { off: 'ld.adblock.off', warn: 'ld.adblock.warn', block: 'ld.adblock.block' }
export const ADBLOCK_HINT: Record<LoaderAdblock, Key> = { off: 'ld.adblock.offHint', warn: 'ld.adblock.warnHint', block: 'ld.adblock.blockHint' }
export const ADBLOCK_SHORT: Record<LoaderAdblock, Key> = { off: 'ld.adblock.offShort', warn: 'ld.adblock.warnShort', block: 'ld.adblock.blockShort' }
