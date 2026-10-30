<script setup lang="ts">
/**
 * Miniatura do relatório salvo no cartão da lista, desenhada com a miniatura guardada (nada de
 * consulta). Sem miniatura (ainda não calculada ou a pessoa só vê alguns sites), só o desenho do tipo.
 */
import { computed } from 'vue'
import { lang, locale, t } from '@/lib/i18n'
import { change, formatMetric, toNumber } from '@/lib/metrics'
import { dimensionText, metricInfo, seriesColor, thumbPath, thumbShape } from '@/modules/reports/rules'
import type { MetricCatalog, MetricFormat, SavedReport } from '@/modules/reports/types'

const props = defineProps<{ report: SavedReport; catalog: MetricCatalog | null; compact?: boolean }>()

const WIDTH = 300
const HEIGHT = 96
const BAR_ROWS = 4
const TABLE_ROWS = 3
const SKETCH = [3, 5, 4, 6, 5, 7, 6, 8]

const preview = computed(() => props.report.preview ?? null)
const shape = computed(() => thumbShape(props.report.chart_type, preview.value))
const metricKey = computed(() => preview.value?.metric ?? props.report.query.metrics[0] ?? '')
const label = computed(() => (props.catalog ? metricInfo(metricKey.value, props.catalog, lang.value).label : ''))
const format = computed<MetricFormat>(() =>
  props.catalog ? metricInfo(metricKey.value, props.catalog, lang.value).format : preview.value?.money ? 'currency' : 'number',
)
const color = computed(() => seriesColor(props.report.chart_options.metrics?.[metricKey.value]?.color))
const values = computed(() => (preview.value ? preview.value.points.map((point) => toNumber(point.value)) : SKETCH))
const path = computed(() => thumbPath(values.value, WIDTH, HEIGHT))
const highest = computed(() => Math.max(...values.value.map((value) => value ?? 0), 0) || 1)
const rows = computed(() =>
  values.value.map((value, index) => {
    const point = preview.value?.points[index]
    const text = point ? (dimensionText(preview.value?.dimension ?? '', point.label, {}, locale.value) ?? t('report.empty')) : ''
    return { key: `${index}-${text}`, text, value, width: `${((value ?? 0) / highest.value) * 100}%` }
  }),
)
const total = computed(() => toNumber(preview.value?.total))
const delta = computed(() => (props.report.query.compare ? change(total.value, toNumber(preview.value?.previous_total)) : null))

/** O valor curto na moeda da miniatura. */
const formatted = (value: number | null) => formatMetric(value, format.value, locale.value, true, preview.value?.currency)
</script>

<template>
  <div class="h-full" :class="preview ? undefined : 'opacity-40'">
    <div v-if="shape === 'total'" class="flex h-full flex-col justify-center" :class="compact ? 'px-2' : 'px-5'">
      <span v-if="!compact" class="truncate text-[12px] font-medium text-muted-foreground">{{ label }}</span>
      <span class="font-semibold tracking-[-0.04em] tnum" :class="compact ? 'text-[14px]' : 'text-[28px]'" :style="{ color }">{{ preview ? formatted(total) : '–' }}</span>
      <span v-if="delta !== null && !compact" class="text-[12px] tnum" :class="delta >= 0 ? 'text-ok' : 'text-bad'">
        <span aria-hidden="true">{{ delta >= 0 ? '↑' : '↓' }}</span> {{ t('report.vsPrevious', { value: `${Math.abs(delta).toFixed(1)}%` }) }}
      </span>
    </div>
    <svg v-else-if="shape === 'line' || shape === 'area'" :viewBox="`0 0 ${WIDTH} ${HEIGHT}`" preserveAspectRatio="none" class="h-full w-full" aria-hidden="true">
      <path v-if="shape === 'area'" :d="`${path}L${WIDTH},${HEIGHT}L0,${HEIGHT}Z`" class="fill-foreground/[0.06]" />
      <path :d="path" fill="none" stroke-width="2" vector-effect="non-scaling-stroke" class="stroke-foreground" :style="{ stroke: color }" />
    </svg>
    <div v-else-if="shape === 'bars' || compact" class="flex h-full flex-col justify-center" :class="compact ? 'gap-0.5 px-2' : 'gap-1.5 px-5'" aria-hidden="true">
      <div v-for="(row, index) in rows.slice(0, BAR_ROWS)" :key="row.key" class="grid items-center gap-2 text-[11px] text-muted-foreground" :class="compact ? 'grid-cols-1' : 'grid-cols-[96px_1fr]'">
        <span v-if="!compact" class="truncate">{{ row.text }}</span>
        <span class="block h-2 rounded-sm bg-foreground" :style="{ width: row.width, background: color, opacity: color ? 1 : 1 - index * 0.15 }" />
      </div>
    </div>
    <div v-else class="grid h-full content-center gap-1 px-5 text-[11px]" aria-hidden="true">
      <div v-for="row in rows.slice(0, TABLE_ROWS)" :key="row.key" class="flex items-center justify-between gap-3 border-b border-border/60 pb-1 last:border-0">
        <span v-if="preview" class="truncate text-muted-foreground">{{ row.text }}</span>
        <span v-else class="block h-2 w-24 rounded-sm bg-foreground/20" />
        <span v-if="preview" class="tnum">{{ formatted(row.value) }}</span>
        <span v-else class="block h-2 w-10 rounded-sm bg-foreground/20" />
      </div>
    </div>
  </div>
</template>
