/** Formatos do editor da central de ajuda, iguais aos DTOs do avant-api (modules/internal/help). */

import type { HelpCategory, HelpKind, HelpLanguage } from '@/modules/help/types'

export interface HelpStepEdit {
  title: string
  text: string
  image_id: string | null
  image_url: string | null
}

export interface HelpContentEdit {
  title: string
  summary: string
  body: string
  steps: HelpStepEdit[]
}

export interface HelpItemRow {
  id: string
  kind: HelpKind
  category: HelpCategory
  published: boolean
  published_at: string | null
  position: number
  created_at: string
  updated_at: string
  languages: HelpLanguage[]
  /** O título em português, para a tabela. */
  title: string
  /** Leituras dos últimos 30 dias, de todas as Empresas. */
  reads: number
  /** O texto de cada idioma; só vem ao abrir um guia ou artigo. */
  translations: Partial<Record<HelpLanguage, HelpContentEdit>>
}

export interface HelpItemBody {
  kind: HelpKind
  category: HelpCategory
  published: boolean
  position: number
  translations: Partial<Record<HelpLanguage, { title: string; summary: string; body: string; steps: { title: string; text: string; image_id: string | null }[] }>>
}

export interface HelpImageRef {
  id: string
  url: string
}
