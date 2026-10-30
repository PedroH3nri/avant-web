/** Regras de tela das metas: a cor do andamento, os meses para escolher, os valores do modelo e a meta da Groone. */

import type { Lang } from '@/lib/types'
import type { GoalProgress, GoalTemplate } from '@/modules/internal/goals/types'

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

/** O valor digitado como número, no jeito do idioma (PT/ES "1.234,50"; EN "1,234.50"), com até 2
 * casas; o que foge do formato vira NaN em vez de virar outro número. */
export function parseAmount(text: string, lang: Lang): number {
  const clean = text.trim()
  const [group, decimal] = lang === 'en' ? [',', '.'] : ['.', ',']
  /** O separador pronto para a expressão regular (o ponto precisa de barra). */
  const escape = (mark: string) => (mark === '.' ? '\\.' : mark)
  const grouped = new RegExp(`^\\d{1,3}(${escape(group)}\\d{3})+(${escape(decimal)}\\d{1,2})?$`)
  const plain = new RegExp(`^\\d+(${escape(decimal)}\\d{1,2})?$`)
  if (!grouped.test(clean) && !plain.test(clean)) return Number.NaN
  return Number(clean.split(group).join('').replace(decimal, '.'))
}

/** O valor da API (texto com ponto) no jeito de escrever do idioma, para editar. */
export function formatAmount(value: string, lang: Lang): string {
  return lang === 'en' ? value : value.replace('.', ',')
}

/** Os valores do modelo: 12 números de zero para cima. */
export function templateValid(months: string[], lang: Lang): boolean {
  return months.length === MONTHS_IN_YEAR && months.every((value) => Number.isFinite(parseAmount(value, lang)))
}

/** Os modelos que os papéis podem usar: todos menos a meta da Groone. */
export function roleTemplates(templates: GoalTemplate[]): GoalTemplate[] {
  return templates.filter((template) => !template.is_company_goal)
}

/** A meta da Groone do ano, se já existir. */
export function companyGoalOf(templates: GoalTemplate[], year: number): GoalTemplate | null {
  return templates.find((template) => template.is_company_goal && template.year === year) ?? null
}

/** Os anos para escolher a meta da Groone: o anterior, o atual e o próximo. */
export function companyGoalYears(today: string): number[] {
  const current = Number(today.slice(0, 4))
  return [current - 1, current, current + 1]
}
