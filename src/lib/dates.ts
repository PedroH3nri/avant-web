/** Datas do painel como texto ISO (``2026-11-25``) e mês como ``2026-11``, sem fuso: contas de calendário puras. */

export type DayRange = { start: string; end: string }

/** O dia de hoje do navegador em ISO. */
export function todayIso(now = new Date()): string {
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${now.getFullYear()}-${month}-${day}`
}

/** A data ISO como ``Date`` em UTC, para contar dias sem horário de verão. */
function utcDate(iso: string): Date {
  return new Date(`${iso}T00:00:00Z`)
}

/** O dia ISO somado de ``days`` dias (negativo volta). */
export function shiftDay(iso: string, days: number): string {
  const date = utcDate(iso)
  date.setUTCDate(date.getUTCDate() + days)
  return date.toISOString().slice(0, 10)
}

/** O mês ``YYYY-MM`` somado de ``months`` meses. */
export function shiftMonth(month: string, months: number): string {
  const total = Number(month.slice(0, 4)) * 12 + (Number(month.slice(5, 7)) - 1) + months
  return `${Math.floor(total / 12)}-${String((total % 12) + 1).padStart(2, '0')}`
}

/** Quantos dias o período tem, contando o primeiro e o último. */
export function dayCount(range: DayRange): number {
  return Math.round((utcDate(range.end).getTime() - utcDate(range.start).getTime()) / 86_400_000) + 1
}

/** As semanas do mês, de domingo a sábado, com os dias de fora do mês marcados. */
export function monthWeeks(month: string): { iso: string; inside: boolean }[][] {
  const first = `${month}-01`
  const start = shiftDay(first, -utcDate(first).getUTCDay())
  const weeks: { iso: string; inside: boolean }[][] = []
  let cursor = start
  do {
    const week = Array.from({ length: 7 }, (_, offset) => {
      const iso = shiftDay(cursor, offset)
      return { iso, inside: iso.startsWith(month) }
    })
    weeks.push(week)
    cursor = shiftDay(cursor, 7)
  } while (cursor.startsWith(month))
  return weeks
}

/** Põe o período na ordem certa quando o fim foi escolhido antes do começo. */
export function ordered(first: string, second: string): DayRange {
  return first <= second ? { start: first, end: second } : { start: second, end: first }
}

/** O dia está fora dos limites ``min`` e ``max`` (ISO, opcionais). */
export function outOfBounds(iso: string, min?: string, max?: string): boolean {
  return (!!min && iso < min) || (!!max && iso > max)
}

/** Data ISO no formato curto do idioma, como "19 de nov." ou "19 de nov. de 2026". */
export function shortDate(iso: string, locale: string, withYear = false): string {
  return utcDate(iso).toLocaleDateString(locale, { day: 'numeric', month: 'short', timeZone: 'UTC', ...(withYear ? { year: 'numeric' } : {}) })
}

/** Data ISO no formato numérico do idioma, como "01/12/2026". */
export function numericDate(iso: string, locale: string): string {
  return utcDate(iso).toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' })
}

/** O período em texto curto: "19 – 25 de nov. de 2026", ou um dia só quando começa e termina igual. */
export function rangeText(range: DayRange, locale: string): string {
  if (range.start === range.end) return shortDate(range.start, locale, true)
  if (range.start.slice(0, 7) === range.end.slice(0, 7)) return `${Number(range.start.slice(8))} – ${shortDate(range.end, locale, true)}`
  const sameYear = range.start.slice(0, 4) === range.end.slice(0, 4)
  return `${shortDate(range.start, locale, !sameYear)} – ${shortDate(range.end, locale, true)}`
}

/** O nome do mês com o ano, como "novembro de 2026". */
export function monthTitle(month: string, locale: string): string {
  return utcDate(`${month}-01`).toLocaleDateString(locale, { month: 'long', year: 'numeric', timeZone: 'UTC' })
}

/** O nome curto do mês, como "nov.". */
export function monthShort(month: string, locale: string): string {
  return utcDate(`${month}-01`).toLocaleDateString(locale, { month: 'short', timeZone: 'UTC' })
}

/** As iniciais dos dias da semana, de domingo a sábado, no idioma. */
export function weekdayNames(locale: string): string[] {
  return Array.from({ length: 7 }, (_, offset) => utcDate(shiftDay('2026-11-01', offset)).toLocaleDateString(locale, { weekday: 'short', timeZone: 'UTC' }).replace('.', ''))
}
