/** Regras de tela da Previsão do mês: o cenário escolhido, a variação contra o mês passado, as datas e os textos do caixa. */

import { formatMetric } from '@/lib/metrics'
import { locale, t } from '@/lib/i18n'
import type { CashEvent, ForecastScenario, MonthForecast, ScenarioTotals } from '@/modules/internal/forecast/types'

export const SCENARIOS: ForecastScenario[] = ['low', 'base', 'high']
export const DIRECTION_TONE = { in: 'neutral', out: 'bad', gam: 'ochre' } as const

/** Dólares no formato do idioma, sem centavos. */
export function money(value: string | number | null | undefined): string {
  return formatMetric(Math.round(Number(value ?? 0)), 'currency', locale.value, false, 'USD')
}

/** Os números do cenário escolhido. */
export function scenarioOf(forecast: MonthForecast, scenario: ForecastScenario): ScenarioTotals | undefined {
  return forecast.scenarios.find((item) => item.scenario === scenario)
}

/** A variação em % do previsto contra o mês passado; vazia sem mês passado. */
export function changeOf(gross: string, previous: string): number | null {
  const before = Number(previous)
  return before > 0 ? Math.round(((Number(gross) - before) / before) * 100) : null
}

/** A taxa de dedução como porcentagem com uma casa. */
export function ratePercent(rate: string | null): string {
  return rate == null ? '–' : `${(Number(rate) * 100).toLocaleString(locale.value, { maximumFractionDigits: 1 })}%`
}

/** O dia AAAA-MM-DD como dia e mês no idioma. */
export function shortDate(day: string): string {
  const [year, month, date] = day.split('-').map(Number)
  return new Date(Date.UTC(year ?? 1970, (month ?? 1) - 1, date ?? 1)).toLocaleDateString(locale.value, { day: '2-digit', month: '2-digit', timeZone: 'UTC' })
}

/** O nome do mês do AAAA-MM-DD no idioma. */
export function monthName(day: string): string {
  const [year, month] = day.split('-').map(Number)
  return new Date(Date.UTC(year ?? 1970, (month ?? 1) - 1, 1)).toLocaleDateString(locale.value, { month: 'long', timeZone: 'UTC' })
}

/** Quando: um dia ou de um dia a outro. */
export function whenText(event: CashEvent): string {
  return event.starts_on === event.ends_on ? shortDate(event.starts_on) : t('fc.range', { start: shortDate(event.starts_on), end: shortDate(event.ends_on) })
}

/** O valor da data: o dinheiro previsto ou quantos itens. */
export function valueText(event: CashEvent): string {
  if (event.kind === 'team_invoices') return t('fc.cash.invoices', { n: event.count ?? 0 })
  if (event.kind === 'gam_payment') return t('fc.cash.noCash', { n: event.count ?? 0 })
  return t('fc.cash.forecast', { value: money(event.amount) })
}
