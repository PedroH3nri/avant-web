/** Cor de cada métrica nos gráficos do Avant: a mesma métrica tem sempre a mesma cor neon, em qualquer tela. */

import type { SeriesColor } from '@/modules/reports/types'

/** Ordem de reserva para métricas sem cor própria (personalizadas) ou quando duas métricas da mesma família se cruzam. */
const FALLBACK: SeriesColor[] = ['lime', 'cyan', 'magenta', 'violet', 'orange', 'yellow', 'red']

/** A cor fixa de cada métrica do catálogo, por família:
 * receita verde, valor por mil (eCPM e RPM) dourado, impressões violeta, requisições laranja,
 * taxas ciano, cliques, page views e floor magenta, o que falta vermelho. Inclui as séries de
 * rewards, tag e regras de preço, que não estão no catálogo. */
export const METRIC_COLOR: Record<string, SeriesColor> = {
  revenue: 'lime',
  revenue_gross: 'lime',
  revenue_groone: 'lime',
  ecpm: 'yellow',
  ecpm_gross: 'yellow',
  rpmre: 'yellow',
  page_rpm: 'yellow',
  page_rpm_gross: 'yellow',
  impressions: 'violet',
  viewable_impressions: 'violet',
  measurable_impressions: 'violet',
  unfilled_impressions: 'red',
  eligible_requests: 'orange',
  responses_served: 'orange',
  pmr: 'cyan',
  fill_rate: 'cyan',
  ctr: 'cyan',
  active_view: 'cyan',
  clicks: 'magenta',
  page_views: 'magenta',
  floor: 'magenta',
  requests: 'orange',
  opens: 'violet',
  completed: 'lime',
  pages: 'magenta',
  rendered: 'violet',
  empty: 'red',
}

/** A variável CSS de uma cor da paleta, que já muda entre o tema claro e o escuro. */
export function colorVar(color: SeriesColor): string {
  return `var(--series-${color})`
}

/** A cor de uma métrica; sem cor própria, a de reserva na posição dada. */
export function metricColor(key: string, position = 0): SeriesColor {
  return METRIC_COLOR[key] ?? FALLBACK[position % FALLBACK.length] ?? 'lime'
}

/** As cores de várias métricas do mesmo gráfico: cada uma fica com a sua e, se duas
 * caírem na mesma cor, a segunda passa para a próxima livre da reserva. */
export function metricColors(keys: string[]): SeriesColor[] {
  const used = new Set<SeriesColor>()
  return keys.map((key, index) => {
    const own = metricColor(key, index)
    const color = used.has(own) ? (FALLBACK.find((candidate) => !used.has(candidate)) ?? own) : own
    used.add(color)
    return color
  })
}
