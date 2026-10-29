<script setup lang="ts">
/** O gráfico do relatório: escolhe a peça pelo tipo e pinta com a cor e a aparência de cada métrica. */
import { computed } from 'vue'
import BarChart from '@/components/charts/BarChart.vue'
import FunnelChart, { type FunnelStep } from '@/components/charts/FunnelChart.vue'
import GroupedBarChart from '@/components/charts/GroupedBarChart.vue'
import LineChart, { type LineSeries } from '@/components/charts/LineChart.vue'
import PieChart from '@/components/charts/PieChart.vue'
import { lang, locale, t } from '@/lib/i18n'
import { change, formatMetric, toNumber } from '@/lib/metrics'
import { axisSplit, dimensionText, metricInfo, scaleHue, seriesColor, splitSeries, SPLIT_COLORS, type ReportDraft } from '@/modules/reports/rules'
import type { MetricCatalog, ReportResult } from '@/modules/reports/types'

const props = defineProps<{ draft: ReportDraft; result: ReportResult; catalog: MetricCatalog }>()

const metrics = computed(() => props.draft.metrics.map((key) => ({ key, ...metricInfo(key, props.catalog, lang.value), style: props.draft.styles[key] ?? {} })))
const first = computed(() => metrics.value[0])
const layout = computed(() => axisSplit(props.draft.dimensions))
const empty = computed(() => props.result.rows.length === 0)
/** Formata o valor de uma métrica na moeda da resposta. */
const formatter = (key: string) => (value: number | null, compact = false) =>
  formatMetric(value, metricInfo(key, props.catalog, lang.value).format, locale.value, compact, props.result.currency)
/** O valor de uma dimensão como a pessoa lê; vazio vira "(vazio)". */
const text = (dimension: string, value: string | null) => dimensionText(dimension, value, props.result.labels, locale.value) ?? t('report.empty')
const description = computed(() =>
  layout.value.axis ? t('report.chartOf', { metric: first.value?.label ?? '', dimension: layout.value.axis }) : (first.value?.label ?? ''),
)

const kpi = computed(() => {
  const metric = first.value
  if (!metric) return null
  const value = toNumber(props.result.totals[metric.key])
  const previous = toNumber(props.result.previous_totals?.[metric.key])
  const scale = metric.style.scale
  const color = scale && value !== null ? `hsl(${scaleHue(scale, value)} 75% 42%)` : seriesColor(metric.style.color)
  return { label: metric.label, text: formatter(metric.key)(value), delta: change(value, previous), color }
})

const funnel = computed<FunnelStep[]>(() =>
  metrics.value.map((metric) => ({ key: metric.key, label: metric.label, value: toNumber(props.result.totals[metric.key]), color: seriesColor(metric.style.color) })),
)

const items = computed(() => {
  const metric = first.value
  const axis = layout.value.axis
  if (!metric || !axis) return []
  return props.result.rows.map((row, index) => ({ key: `${row.dimensions[axis]}-${index}`, label: text(axis, row.dimensions[axis] ?? null), value: toNumber(row.metrics[metric.key]) }))
})

const lines = computed(() => {
  const axis = layout.value.axis
  if (!axis) return { labels: [] as string[], series: [] as LineSeries[], hidden: 0 }
  if (layout.value.split && first.value) {
    const split = splitSeries(props.result.rows, axis, layout.value.split, first.value.key)
    return {
      labels: split.axisValues.map((value) => text(axis, value)),
      series: split.series.map((line, index) => ({
        key: String(line.value),
        name: text(layout.value.split ?? '', line.value),
        values: line.values,
        color: seriesColor(SPLIT_COLORS[index % SPLIT_COLORS.length]),
      })),
      hidden: split.hidden,
    }
  }
  const rows = props.result.rows
  const series: LineSeries[] = metrics.value.map((metric, index) => ({
    key: metric.key,
    name: metric.label,
    values: rows.map((row) => toNumber(row.metrics[metric.key])),
    color: seriesColor(metric.style.color),
    dashed: index > 0 && !metric.style.color,
  }))
  if (props.draft.compare && first.value && rows.some((row) => row.previous)) {
    const key = first.value.key
    series.push({ key: 'previous', name: t('perf.previous'), values: rows.map((row) => toNumber(row.previous?.[key])), tone: 'muted', dashed: true })
  }
  return { labels: rows.map((row) => text(axis, row.dimensions[axis] ?? null)), series, hidden: 0 }
})
const firstFormat = computed(() => formatter(first.value?.key ?? ''))
</script>

<template>
  <p v-if="empty && draft.chart !== 'kpi'" class="py-16 text-center text-[14px] text-muted-foreground">{{ t('report.noData') }}</p>
  <div v-else-if="draft.chart === 'kpi' && kpi" class="py-10 text-center">
    <div class="text-[13px] font-medium text-muted-foreground">{{ kpi.label }}</div>
    <div class="mt-2 text-[44px] font-semibold tracking-[-0.04em] tnum" :style="{ color: kpi.color }">{{ kpi.text }}</div>
    <div v-if="draft.compare && kpi.delta !== null" class="mt-2 text-[13px] tnum" :class="kpi.delta >= 0 ? 'text-ok' : 'text-bad'">
      <span aria-hidden="true">{{ kpi.delta >= 0 ? '↑' : '↓' }}</span> {{ t('report.vsPrevious', { value: `${Math.abs(kpi.delta).toFixed(1)}%` }) }}
    </div>
  </div>
  <FunnelChart v-else-if="draft.chart === 'funnel'" :steps="funnel" :format="(step) => formatter(step.key)(step.value)" :description="description" />
  <PieChart v-else-if="draft.chart === 'pie'" :items="items" :format="(value) => firstFormat(value)" :description="description" :color="seriesColor(first?.style.color)" />
  <GroupedBarChart v-else-if="draft.chart === 'bar' && layout.split" :labels="lines.labels" :series="lines.series" :format="firstFormat" :description="description" />
  <BarChart v-else-if="draft.chart === 'bar'" :items="items" :format="(value) => firstFormat(value)" :description="description" :color="seriesColor(first?.style.color)" />
  <LineChart v-else-if="draft.chart === 'line' || draft.chart === 'area'" :labels="lines.labels" :series="lines.series" :format="firstFormat" :description="description" :area="draft.chart === 'area'" />
  <p v-if="lines.hidden > 0 && layout.split" class="mt-2 text-[13px] text-muted-foreground">{{ t('report.hiddenSeries', { shown: lines.series.length, total: lines.series.length + lines.hidden }) }}</p>
</template>
