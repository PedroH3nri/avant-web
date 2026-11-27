/** Regras de tela do Comparativo com a rede: o formato de cada métrica, a faixa do site e o resumo dos cards. */

import { locale } from '@/lib/i18n'
import type { BenchmarkMetric, BenchmarkRow } from '@/modules/benchmark/types'

export type BenchmarkBand = 'low' | 'mid' | 'top'

const DOLLAR_METRICS: BenchmarkMetric[] = ['session_rpm', 'ecpm']
const PERCENT_METRICS: BenchmarkMetric[] = ['fill_rate', 'viewability']

/** O valor no formato da métrica: dólar, porcentagem ou número com uma casa. */
export function valueText(metric: BenchmarkMetric, value: string | null): string {
  if (value == null) return '–'
  const amount = Number(value)
  if (DOLLAR_METRICS.includes(metric)) {
    return new Intl.NumberFormat(locale.value, { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 3 }).format(amount)
  }
  const text = amount.toLocaleString(locale.value, { maximumFractionDigits: 1 })
  return PERCENT_METRICS.includes(metric) ? `${text}%` : text
}

/** A faixa do percentil: abaixo da mediana, entre a mediana e os 25% melhores, ou entre os melhores. */
export function bandOf(percentile: number): BenchmarkBand {
  if (percentile >= 75) return 'top'
  return percentile >= 50 ? 'mid' : 'low'
}

/** Quantas métricas do site estão na mediana ou acima. */
export function aboveMedian(rows: BenchmarkRow[]): number {
  return rows.filter((row) => row.percentile != null && row.percentile >= 50).length
}

/** A métrica com o menor percentil, onde há mais espaço para crescer. */
export function weakest(rows: BenchmarkRow[]): BenchmarkRow | undefined {
  return rows
    .filter((row) => row.percentile != null)
    .reduce<BenchmarkRow | undefined>((lowest, row) => (lowest == null || (row.percentile ?? 0) < (lowest.percentile ?? 0) ? row : lowest), undefined)
}
