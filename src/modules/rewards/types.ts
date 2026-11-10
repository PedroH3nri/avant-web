/** Formatos da API dos rewards (iguais ao dto.py de modules/rewards no avant-api). Datas em ISO 8601 UTC. */

import type {
  PublicRewardLead,
  PublicRewardStyle,
  RewardIconKind,
  RewardLayout,
  RewardLeadKind,
  RewardTrigger,
} from 'avant-tag/reward'

export type { RewardIconKind, RewardLayout, RewardLeadKind, RewardTrigger }

export type RewardStyle = PublicRewardStyle
export type RewardLeadRequest = PublicRewardLead

export interface RewardQuestion {
  id: string
  position: number
  title: string
  description: string
  answers: string[]
}

/** Um reward como a API devolve; `client` só no painel interno, `deleted_at` só na lista dos apagados. */
export interface Reward {
  id: string
  site_id: string
  domain: string
  client: { id: string; name: string } | null
  name: string
  page_path: string
  active: boolean
  title: string
  description: string
  button_text: string
  icon_kind: RewardIconKind
  icon_emoji: string | null
  icon_url: string | null
  style: RewardStyle
  trigger: RewardTrigger
  scroll_percent: number | null
  click_selector: string | null
  cooldown_minutes: number
  ad_unit_day: string | null
  redirect_path: string | null
  questions: RewardQuestion[]
  lead: RewardLeadRequest | null
  created_at: string
  updated_at: string
  deleted_at: string | null
}

/** Uma pergunta do formulário: com `id` mantém métricas e respostas; sem, cria uma nova. */
export interface RewardQuestionInput {
  id: string | null
  title: string
  description: string
  answers: string[]
}

/** O corpo do POST e do PUT de /rewards. */
export interface RewardInput {
  site_id: string
  name: string
  page_path: string
  title: string
  description: string
  button_text: string
  icon_kind: RewardIconKind
  icon_emoji: string | null
  style: RewardStyle
  trigger: RewardTrigger
  scroll_percent: number | null
  click_selector: string | null
  cooldown_minutes: number
  ad_unit_day: string | null
  redirect_path: string | null
  questions: RewardQuestionInput[]
  lead: RewardLeadRequest | null
  active: boolean
}

export interface RewardAdUnit {
  name: string
  desktop: boolean
  mobile: boolean
}

/** Os ad units de reward de um site criados num dia, com os aparelhos que cobrem. */
export interface RewardAdUnitGroup {
  day: string
  desktop: boolean
  mobile: boolean
  ad_units: RewardAdUnit[]
}

export interface RewardDay {
  day: string
  opens: number
  clicks: number
  completed: number
  closed: number
}

export interface RewardAnswerCount {
  question_id: string
  answer: number
  count: number
}

/** Métricas de um período; `steps` diz quantos terminaram `question_1` a `question_5` e `lead`. */
export interface RewardMetrics {
  start: string
  end: string
  total: RewardDay
  days: RewardDay[]
  steps: Record<string, number>
  answers: RewardAnswerCount[]
}

export interface RewardLead {
  id: string
  name: string
  contact: string
  kind: RewardLeadKind
  language: string
  answers: { question_id: string; answer: number }[]
  created_at: string
}

/** Um site que pode receber reward: no painel interno vem com o cliente. */
export interface RewardSiteOption {
  id: string
  domain: string
  client: string | null
}
