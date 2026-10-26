export type ResultPeriod = 'last_6_months' | 'last_12_months' | 'this_year' | 'last_year'
export const RESULT_PERIODS: ResultPeriod[] = ['last_6_months', 'last_12_months', 'this_year', 'last_year']

/** Primeiro dia de um mês em ISO. */
function monthIso(year: number, month: number): string {
  const index = year * 12 + month
  return `${Math.floor(index / 12)}-${String((index % 12) + 1).padStart(2, '0')}-01`
}

/** Os meses do período escolhido, contados a partir do mês de hoje. */
export function resultRange(period: ResultPeriod, today = new Date()): { start: string; end: string } {
  const year = today.getFullYear()
  const month = today.getMonth()
  if (period === 'last_12_months') return { start: monthIso(year, month - 11), end: monthIso(year, month) }
  if (period === 'this_year') return { start: monthIso(year, 0), end: monthIso(year, month) }
  if (period === 'last_year') return { start: monthIso(year - 1, 0), end: monthIso(year - 1, 11) }
  return { start: monthIso(year, month - 5), end: monthIso(year, month) }
}

/** Margem do resultado sobre o faturamento, em %; sem faturamento não há margem. */
export function margin(result: string, billing: string): number | null {
  const base = Number(billing)
  return base > 0 ? (Number(result) / base) * 100 : null
}

/** O número negado, para mostrar deduções e custos como saída. */
export function negative(value: string): number {
  const number = Number(value)
  return number === 0 ? 0 : -number
}
