/** Formatos da central de ajuda e do NPS no painel, iguais aos DTOs do avant-api (modules/help e modules/nps). */

import type { UserRef } from '@/lib/types'

export type HelpKind = 'guide' | 'article'
export type HelpCategory = 'technologies' | 'getting_started' | 'payments' | 'ads' | 'reports'
export type HelpLanguage = 'pt' | 'en' | 'es'

export interface HelpStep {
  title: string
  text: string
  image_url: string | null
}

export interface HelpContent {
  title: string
  summary: string
  body: string
  steps: HelpStep[]
}

export interface HelpCenterItem {
  id: string
  kind: HelpKind
  category: HelpCategory
  /** O idioma mostrado: o da pessoa ou o português quando falta tradução. */
  locale: HelpLanguage
  updated_at: string
  content: HelpContent
}

export interface SupportContact {
  /** O gerente de conta do cliente; vazio quando o cliente não tem gerente ativo. */
  manager: UserRef | null
  /** O WhatsApp de atendimento da Groone, só dígitos com o DDI. */
  whatsapp: string | null
}

export interface NpsPromptState {
  ask: boolean
}
