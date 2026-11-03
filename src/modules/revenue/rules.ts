/** Regras de tela do status de faturamento: a cor de cada tendência e o texto da média e da variação. */

import { REPORT_CURRENCY, toNumber } from '@/lib/metrics'
import type { RevenueStatus, RevenueTrend } from '@/modules/revenue/types'

/** Classes da badge de cada tendência: verde, cinza, ocre e vermelho. */
export const TREND_CLASS: Record<RevenueTrend, string> = {
  scaling: 'bg-ok-soft text-ok',
  steady: 'bg-secondary text-secondary-foreground',
  reducing: 'bg-ochre-soft text-ochre',
  stopped: 'bg-bad-soft text-bad',
}

/** A média por dia em dólares, sem centavos. */
export function perDayText(status: RevenueStatus, locale: string): string {
  const value = toNumber(status.per_day)
  if (value === null) return '–'
  return new Intl.NumberFormat(locale, { style: 'currency', currency: REPORT_CURRENCY, maximumFractionDigits: 0 }).format(value)
}

/** A variação com sinal, como "+28%"; vazia sem receita antes. */
export function changeText(status: RevenueStatus): string {
  if (status.change_percent === null) return ''
  return `${status.change_percent > 0 ? '+' : ''}${status.change_percent}%`
}
