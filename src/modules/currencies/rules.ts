/** Regras do card do dólar: variação desde o dia anterior e a linha dos últimos dias. */

import type { DollarQuote } from '@/modules/currencies/types'

/** A variação em porcentagem desde o dia anterior; ``null`` sem o dia anterior. */
export function quoteChange(quote: DollarQuote): number | null {
  const previous = quote.previous === null ? Number.NaN : Number(quote.previous)
  if (!Number.isFinite(previous) || previous <= 0) return null
  return ((Number(quote.rate) - previous) / previous) * 100
}

/** Os pontos da linha num quadro de ``width`` por ``height``, com 4 de folga em cima e embaixo. */
export function linePoints(values: number[], width: number, height: number): string {
  if (!values.length) return ''
  const low = Math.min(...values)
  const high = Math.max(...values)
  const step = values.length > 1 ? width / (values.length - 1) : 0
  return values
    .map((value, index) => {
      const ratio = high === low ? 0.5 : (value - low) / (high - low)
      return `${(index * step).toFixed(1)},${(height - 4 - ratio * (height - 8)).toFixed(1)}`
    })
    .join(' ')
}
