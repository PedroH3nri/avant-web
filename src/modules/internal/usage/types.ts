/** Formatos do uso do Avant no painel interno (``modules/internal/usage/dto.py`` do avant-api). */

export type UsagePeriod = 7 | 30

export interface UsageTotals {
  active_days: number
  sessions: number
  screens: number
  active_minutes: number
  /** Telas vistas por área do menu, da mais usada para a menos usada. */
  areas: Record<string, number>
  top_area: string | null
}

export interface UsageDayPoint {
  day: string
  people: number
  screens: number
  active_minutes: number
}

export interface UsageDay {
  day: string
  sessions: number
  screens: number
  active_minutes: number
  areas: Record<string, number>
}

export interface PersonUsage {
  user_id: string
  name: string
  email: string
  /** A conta dona da Empresa: o cliente. */
  is_owner: boolean
  last_access_at: string | null
  totals: UsageTotals
}

export interface PersonUsageDetail {
  person: PersonUsage
  series: UsageDayPoint[]
  recent: UsageDay[]
}

export interface CompanyUsage {
  company_id: string
  days: number
  active_people: number
  team_size: number
  totals: UsageTotals
  series: UsageDayPoint[]
}

export interface ClientUsage {
  days: number
  /** Vazio enquanto o cliente não tem conta. */
  usage: PersonUsageDetail | null
}
