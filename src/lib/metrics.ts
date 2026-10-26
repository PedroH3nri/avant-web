/**
 * Métricas do GAM na tela: formatos pelo idioma, variação contra o período anterior e a
 * série por dia com os dias sem linha preenchidos. As contas de verdade são da API; aqui
 * só se mostra o que ela devolveu.
 */

import type { BarItem } from '@/components/charts/BarChart.vue'
import type { MetricFormat, MetricKind, MetricValues, ReportRange, ReportRow, RelativePeriod } from './types'

/** Moeda em que o GAM paga e o padrão do painel (``BASE_CURRENCY`` do avant-core). */
export const REPORT_CURRENCY = 'USD'

export const PERIOD_PRESETS: RelativePeriod[] = ['yesterday', 'last_7_days', 'last_30_days', 'this_month', 'last_month']

/** Número da API (texto decimal) para conta e gráfico; vazio continua vazio. */
export function toNumber(value: string | number | null | undefined): number | null {
  if (value === null || value === undefined || value === '') return null
  const parsed = typeof value === 'number' ? value : Number(value)
  return Number.isFinite(parsed) ? parsed : null
}

/** Formata uma métrica no idioma: moeda (a da resposta), número inteiro ou porcentagem (que já vem vezes 100). */
export function formatMetric(value: number | null, format: MetricFormat, locale: string, compact = false, currency = REPORT_CURRENCY): string {
  if (value === null) return '–'
  const notation = compact ? ('compact' as const) : ('standard' as const)
  if (format === 'currency') {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      notation,
      maximumFractionDigits: compact ? 1 : 2,
      minimumFractionDigits: compact ? 0 : 2,
    }).format(value)
  }
  if (format === 'percent') {
    return new Intl.NumberFormat(locale, { style: 'percent', minimumFractionDigits: compact ? 0 : 2, maximumFractionDigits: 2 }).format(value / 100)
  }
  return new Intl.NumberFormat(locale, { notation, maximumFractionDigits: compact ? 1 : 0 }).format(value)
}

/** Variação em % contra o anterior; sem anterior (ou anterior zero) não há variação. */
export function change(current: number | null, previous: number | null): number | null {
  if (current === null || previous === null || previous === 0) return null
  return ((current - previous) / Math.abs(previous)) * 100
}

/** Os dias do período, de ``start`` a ``end``, em ISO. */
export function daysOf(range: ReportRange): string[] {
  const days: string[] = []
  const cursor = new Date(`${range.start}T00:00:00Z`)
  const last = new Date(`${range.end}T00:00:00Z`)
  while (cursor <= last && days.length <= 400) {
    days.push(cursor.toISOString().slice(0, 10))
    cursor.setUTCDate(cursor.getUTCDate() + 1)
  }
  return days
}

/** Valor de uma métrica por dia: dia sem linha vale zero numa soma e fica vazio numa razão. */
export function dailySeries(rows: ReportRow[], range: ReportRange, metric: string, kind: MetricKind): (number | null)[] {
  const byDay = new Map(rows.map((row) => [row.dimensions.date, row.metrics]))
  return daysOf(range).map((day) => {
    const values: MetricValues | undefined = byDay.get(day)
    if (!values) return kind === 'sum' ? 0 : null
    return toNumber(values[metric])
  })
}

/** Data curta do eixo e da dica (dia e mês) no idioma. */
export function shortDay(iso: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`))
}

/** Nome do país pelo código ISO, no idioma; código desconhecido aparece como veio. */
export function countryName(code: string | null, locale: string): string | null {
  if (!code) return null
  try {
    return new Intl.DisplayNames([locale], { type: 'region' }).of(code.toUpperCase()) ?? code
  } catch {
    return code
  }
}

/** Valores redondos para as linhas de grade do eixo, de zero até passar do maior valor. */
export function niceTicks(maxValue: number, count = 4): number[] {
  if (!(maxValue > 0)) return [0, 1]
  const rough = maxValue / count
  const magnitude = 10 ** Math.floor(Math.log10(rough))
  const step = [1, 2, 2.5, 5, 10].map((factor) => factor * magnitude).find((candidate) => candidate >= rough) ?? rough
  const ticks: number[] = []
  for (let tick = 0; tick < maxValue + step / 2; tick += step) ticks.push(Number(tick.toPrecision(12)))
  const last = ticks[ticks.length - 1] ?? 0
  if (last < maxValue) ticks.push(Number((last + step).toPrecision(12)))
  return ticks
}

/** Hora do dia como no relógio: ``9`` vira ``09h``. */
export function hourLabel(hour: number): string {
  return `${String(hour).padStart(2, '0')}h`
}

/** As 24 horas do dia com as visitas de cada uma; hora sem linha vale zero. */
export function hourlyItems(rows: ReportRow[], metric: string): BarItem[] {
  if (rows.length === 0) return []
  const byHour = new Map(rows.map((row) => [Number(row.dimensions.hour), toNumber(row.metrics[metric]) ?? 0]))
  return Array.from({ length: 24 }, (_, hour) => ({ key: String(hour), label: hourLabel(hour), value: byHour.get(hour) ?? 0 }))
}

/** A hora com mais visitas; sem visitas, nenhuma. */
export function peakHour(rows: ReportRow[], metric: string): number | null {
  let best: { hour: number; value: number } | null = null
  for (const row of rows) {
    const value = toNumber(row.metrics[metric]) ?? 0
    if (value > 0 && (best === null || value > best.value)) best = { hour: Number(row.dimensions.hour), value }
  }
  return best?.hour ?? null
}
