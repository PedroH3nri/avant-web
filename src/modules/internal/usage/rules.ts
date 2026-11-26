/** Regras das telas de uso: os nomes das áreas, os minutos em horas e a parte de cada área. */

import { locale, t, type Key } from '@/lib/i18n'
import type { UsagePeriod } from '@/modules/internal/usage/types'

export const PERIODS: UsagePeriod[] = [7, 30]
const MINUTES_PER_HOUR = 60
const PERCENT = 100

const AREA_KEYS: Record<string, Key> = {
  dashboard: 'nav.home',
  tasks: 'nav.tasks',
  inventory: 'nav.groupInventory',
  reports: 'nav.groupReports',
  integrations: 'nav.groupIntegrations',
  tools: 'nav.groupTools',
  commissions: 'nav.groupCommissions',
  company: 'nav.groupCompany',
  settings: 'nav.settings',
  help: 'nav.groupHelp',
}

/** O nome da área do menu no idioma atual; a área desconhecida vira "Outras". */
export function areaLabel(area: string | null): string {
  if (!area) return t('int.none.dash')
  const key = AREA_KEYS[area]
  return key ? t(key) : t('usage.area.other')
}

/** Os minutos ativos como "6 h 02" ou "25 min". */
export function formatMinutes(minutes: number): string {
  if (minutes < MINUTES_PER_HOUR) return `${minutes} min`
  const hours = Math.floor(minutes / MINUTES_PER_HOUR)
  return `${hours} h ${String(minutes % MINUTES_PER_HOUR).padStart(2, '0')}`
}

/** As áreas com a parte (%) de cada uma nas telas vistas, da maior para a menor. */
export function areaShares(areas: Record<string, number>): { area: string; share: number }[] {
  const total = Object.values(areas).reduce((sum, count) => sum + count, 0)
  if (!total) return []
  return Object.entries(areas)
    .sort((first, second) => second[1] - first[1])
    .map(([area, count]) => ({ area, share: Math.round((count * PERCENT) / total) }))
}

/** O dia (``2026-11-26``) como "26/11" no idioma atual, sem mudar de fuso. */
export function dayLabel(isoDay: string): string {
  const [year, month, day] = isoDay.split('-').map(Number)
  return new Intl.DateTimeFormat(locale.value, { day: '2-digit', month: '2-digit' }).format(new Date(year ?? 0, (month ?? 1) - 1, day ?? 1))
}

/** O número inteiro no formato do idioma atual. */
export function formatCount(value: number): string {
  return new Intl.NumberFormat(locale.value).format(value)
}

export type UsageFilter = 'all' | 'active' | 'idle'

/** As pessoas da busca (nome ou e-mail) e do filtro de uso (com uso ou sem uso no período). */
export function peopleMatching<Person extends { name: string; email: string; totals: { active_days: number } }>(people: Person[], query: string, filter: UsageFilter): Person[] {
  const needle = query.trim().toLowerCase()
  return people.filter((person) => {
    if (needle && !person.name.toLowerCase().includes(needle) && !person.email.toLowerCase().includes(needle)) return false
    if (filter === 'active') return person.totals.active_days > 0
    if (filter === 'idle') return person.totals.active_days === 0
    return true
  })
}
