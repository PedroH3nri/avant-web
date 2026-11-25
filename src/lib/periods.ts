/** Atalhos de período do seletor de datas e a leitura e escrita do período na URL. */
import { t, type Key } from '@/lib/i18n'
import { shiftDay, type DayRange } from '@/lib/dates'

export type PeriodPreset = { value: string; label: string; range: DayRange }
export type PeriodValue = { preset: string | null } & DayRange

export type PresetKey = 'today' | 'yesterday' | 'last_7_days' | 'last_14_days' | 'last_30_days' | 'last_90_days' | 'this_month' | 'last_month' | 'this_year'

const LAST_DAYS: Partial<Record<PresetKey, number>> = { last_7_days: 7, last_14_days: 14, last_30_days: 30, last_90_days: 90 }

/** As datas de um atalho; ``untilToday`` conta os últimos dias até hoje, senão até ontem (como o motor de relatórios). */
export function presetDays(key: PresetKey, today: string, untilToday: boolean): DayRange {
  const yesterday = shiftDay(today, -1)
  const firstOfMonth = `${today.slice(0, 8)}01`
  const lastMonthEnd = shiftDay(firstOfMonth, -1)
  const count = LAST_DAYS[key]
  if (count !== undefined) {
    const end = untilToday ? today : yesterday
    return { start: shiftDay(end, -(count - 1)), end }
  }
  if (key === 'today') return { start: today, end: today }
  if (key === 'yesterday') return { start: yesterday, end: yesterday }
  if (key === 'this_month') return { start: firstOfMonth, end: today }
  if (key === 'last_month') return { start: `${lastMonthEnd.slice(0, 8)}01`, end: lastMonthEnd }
  return { start: `${today.slice(0, 4)}-01-01`, end: today }
}

/** Os atalhos do seletor com o nome no idioma e as datas contadas a partir de ``today``. */
export function periodPresets(keys: PresetKey[], today: string, untilToday: boolean): PeriodPreset[] {
  return keys.map((key) => ({ value: key, label: t(`period.${key}` as Key), range: presetDays(key, today, untilToday) }))
}

/** O período de um atalho, pronto para o seletor. */
export function presetValue(key: PresetKey, today: string, untilToday: boolean): PeriodValue {
  return { preset: key, ...presetDays(key, today, untilToday) }
}

/** O período escrito na URL: ``periodo`` para atalho, ``de`` e ``ate`` para datas escolhidas. */
export function periodQuery(value: PeriodValue): Record<string, string> {
  return value.preset ? { periodo: value.preset } : { de: value.start, ate: value.end }
}

const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/

/** Lê o período da URL; sem nada válido, usa o atalho ``fallback``. Aceita o ``dias`` antigo (7, 14, 30, 90). */
export function periodFromQuery(query: Record<string, unknown>, keys: PresetKey[], fallback: PresetKey, today: string, untilToday: boolean): PeriodValue {
  const preset = typeof query.periodo === 'string' ? query.periodo : typeof query.dias === 'string' ? `last_${query.dias}_days` : null
  if (preset && (keys as string[]).includes(preset)) return presetValue(preset as PresetKey, today, untilToday)
  const start = query.de
  const end = query.ate
  if (typeof start === 'string' && typeof end === 'string' && ISO_DAY.test(start) && ISO_DAY.test(end) && start <= end) return { preset: null, start, end }
  return presetValue(fallback, today, untilToday)
}
