/** Regras de tela do editor da central de ajuda: idiomas que faltam, filtros da tabela e o formulário. */

import type { HelpCategory, HelpKind, HelpLanguage } from '@/modules/help/types'
import type { HelpContentEdit, HelpItemBody, HelpItemRow } from '@/modules/internal/help/types'

export const LANGUAGES: HelpLanguage[] = ['pt', 'en', 'es']

export interface HelpFilters {
  kind: HelpKind | 'all'
  state: 'all' | 'published' | 'draft'
  category: HelpCategory | 'all'
  query: string
}

export interface HelpDraft {
  id: string | null
  kind: HelpKind
  category: HelpCategory
  published: boolean
  position: number
  translations: Record<HelpLanguage, HelpContentEdit>
}

/** Os idiomas que ainda não têm tradução. */
export function missingLanguages(row: Pick<HelpItemRow, 'languages'>): HelpLanguage[] {
  return LANGUAGES.filter((code) => !row.languages.includes(code))
}

/** As linhas que passam pelos filtros e pela busca no título. */
export function filterHelpItems(rows: HelpItemRow[], filters: HelpFilters): HelpItemRow[] {
  const needle = filters.query.trim().toLowerCase()
  return rows.filter(
    (row) =>
      (filters.kind === 'all' || row.kind === filters.kind) &&
      (filters.state === 'all' || (filters.state === 'published') === row.published) &&
      (filters.category === 'all' || row.category === filters.category) &&
      row.title.toLowerCase().includes(needle),
  )
}

/** Um idioma vazio, com um passo em branco no guia. */
export function emptyContent(kind: HelpKind): HelpContentEdit {
  return { title: '', summary: '', body: '', steps: kind === 'guide' ? [{ title: '', text: '', image_id: null, image_url: null }] : [] }
}

/** O formulário de um guia ou artigo novo. */
export function newDraft(kind: HelpKind): HelpDraft {
  return {
    id: null,
    kind,
    category: kind === 'guide' ? 'technologies' : 'getting_started',
    published: false,
    position: 0,
    translations: { pt: emptyContent(kind), en: emptyContent(kind), es: emptyContent(kind) },
  }
}

/** O formulário de um guia ou artigo aberto; o idioma sem tradução começa com os passos do português (sem texto) para traduzir. */
export function draftOf(row: HelpItemRow): HelpDraft {
  const portuguese = row.translations.pt ?? emptyContent(row.kind)
  /** Copia o idioma ou, sem tradução, monta um com os prints do português. */
  const language = (code: HelpLanguage): HelpContentEdit =>
    row.translations[code] ?? { title: '', summary: '', body: '', steps: portuguese.steps.map((step) => ({ title: '', text: '', image_id: step.image_id, image_url: step.image_url })) }
  return { id: row.id, kind: row.kind, category: row.category, published: row.published, position: row.position, translations: { pt: language('pt'), en: language('en'), es: language('es') } }
}

/** O corpo que a API recebe: só os idiomas com título, e no artigo sem passos. */
export function bodyOf(draft: HelpDraft): HelpItemBody {
  const translations: HelpItemBody['translations'] = {}
  for (const code of LANGUAGES) {
    const content = draft.translations[code]
    if (!content.title.trim()) continue
    translations[code] = {
      title: content.title,
      summary: content.summary,
      body: draft.kind === 'article' ? content.body : '',
      steps: draft.kind === 'guide' ? content.steps.map((step) => ({ title: step.title, text: step.text, image_id: step.image_id })) : [],
    }
  }
  return { kind: draft.kind, category: draft.category, published: draft.published, position: draft.position, translations }
}
