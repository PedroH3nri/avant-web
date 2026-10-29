/** Regras de tela das metas: a cor do andamento, os meses para escolher e os valores do modelo. */

import type { GoalProgress } from '@/modules/internal/goals/types'

const MONTHS_IN_YEAR = 12
const LAST_MONTHS = 12

/** A cor do andamento: verde no ritmo, ocre abaixo, neutro sem meta ou no primeiro dia. */
export function goalTone(progress: GoalProgress): 'ok' | 'ochre' | 'neutral' {
  if (progress.on_pace === null) return 'neutral'
  return progress.on_pace ? 'ok' : 'ochre'
}

/** Os últimos 12 meses, do atual para trás, como ``AAAA-MM`` e o nome no idioma. */
export function monthOptions(today: string, locale: string): { value: string; label: string }[] {
  const [year, month] = today.split('-').map(Number) as [number, number]
  return Array.from({ length: LAST_MONTHS }, (_, back) => {
    const date = new Date(Date.UTC(year, month - 1 - back, 1))
    const value = `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}`
    const label = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date)
    return { value, label }
  })
}

/** Onde o mês deveria estar hoje (fração dos dias que já passaram, até ontem). */
export function paceMark(month: string, today: string): number {
  const [year, number] = month.split('-').map(Number) as [number, number]
  const [todayYear, todayMonth, todayDay] = today.split('-').map(Number) as [number, number, number]
  const days = new Date(Date.UTC(year, number, 0)).getUTCDate()
  if (year * 12 + number < todayYear * 12 + todayMonth) return 1
  if (year * 12 + number > todayYear * 12 + todayMonth) return 0
  return (todayDay - 1) / days
}

/** O valor digitado como número: aceita "1.234,50" e "1234.50"; texto inválido vira NaN. */
export function parseAmount(text: string): number {
  const clean = text.trim()
  if (!clean) return Number.NaN
  const normalized = clean.includes(',') ? clean.replace(/\./g, '').replace(',', '.') : clean
  return /^\d+(\.\d+)?$/.test(normalized) ? Number(normalized) : Number.NaN
}

/** Os valores do modelo: 12 números de zero para cima. */
export function templateValid(months: string[]): boolean {
  return months.length === MONTHS_IN_YEAR && months.every((value) => Number.isFinite(parseAmount(value)) && parseAmount(value) >= 0)
}
