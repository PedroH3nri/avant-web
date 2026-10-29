<script setup lang="ts">
/** A tabela do relatório: uma coluna por dimensão e por métrica, com a aparência pelo valor. */
import { computed } from 'vue'
import DataTable from '@/components/ui/DataTable.vue'
import { lang, locale, t } from '@/lib/i18n'
import { formatMetric, toNumber } from '@/lib/metrics'
import { td, th } from '@/lib/table'
import { dimensionText, metricInfo, scaleHue, type ReportDraft } from '@/modules/reports/rules'
import type { MetricCatalog, ReportResult } from '@/modules/reports/types'

const props = defineProps<{ draft: ReportDraft; result: ReportResult; catalog: MetricCatalog }>()

const dimensions = computed(() => props.draft.dimensions.map((key) => ({ key, label: props.catalog.dimensions.find((item) => item.key === key)?.label[lang.value] ?? key })))
const metrics = computed(() => props.draft.metrics.map((key) => ({ key, ...metricInfo(key, props.catalog, lang.value), scale: props.draft.styles[key]?.scale })))
/** O valor formatado na moeda da resposta. */
const show = (key: string, value: string | null | undefined) =>
  formatMetric(toNumber(value), metricInfo(key, props.catalog, lang.value).format, locale.value, false, props.result.currency)
/** O fundo da célula pela aparência da métrica; sem aparência, nada. */
function background(key: string, value: string | null | undefined) {
  const scale = props.draft.styles[key]?.scale
  const number = toNumber(value)
  return scale && number !== null ? { background: `hsl(${scaleHue(scale, number)} 80% 45% / 0.18)` } : undefined
}
</script>

<template>
  <DataTable :min="Math.max(480, (dimensions.length + metrics.length * (draft.compare ? 2 : 1)) * 140)">
    <thead>
      <tr>
        <th v-for="dimension in dimensions" :key="dimension.key" :class="th">{{ dimension.label }}</th>
        <template v-for="metric in metrics" :key="metric.key">
          <th :class="[th, 'text-right']">{{ metric.label }}</th>
          <th v-if="draft.compare" :class="[th, 'text-right']">{{ t('report.previousOf', { metric: metric.label }) }}</th>
        </template>
      </tr>
    </thead>
    <tbody>
      <tr v-if="!draft.dimensions.length" class="hover:bg-muted">
        <template v-for="metric in metrics" :key="metric.key">
          <td :class="[td, 'text-right tnum whitespace-nowrap']" :style="background(metric.key, result.totals[metric.key])">{{ show(metric.key, result.totals[metric.key]) }}</td>
          <td v-if="draft.compare" :class="[td, 'text-right tnum whitespace-nowrap text-muted-foreground']">{{ show(metric.key, result.previous_totals?.[metric.key]) }}</td>
        </template>
      </tr>
      <tr v-for="(row, index) in draft.dimensions.length ? result.rows : []" :key="index" class="hover:bg-muted">
        <td v-for="dimension in dimensions" :key="dimension.key" :class="[td, 'whitespace-nowrap font-medium']">
          {{ dimensionText(dimension.key, row.dimensions[dimension.key] ?? null, result.labels, locale) ?? t('report.empty') }}
        </td>
        <template v-for="metric in metrics" :key="metric.key">
          <td :class="[td, 'text-right tnum whitespace-nowrap']" :style="background(metric.key, row.metrics[metric.key])">{{ show(metric.key, row.metrics[metric.key]) }}</td>
          <td v-if="draft.compare" :class="[td, 'text-right tnum whitespace-nowrap text-muted-foreground']">{{ show(metric.key, row.previous?.[metric.key]) }}</td>
        </template>
      </tr>
    </tbody>
  </DataTable>
  <p v-if="result.truncated" class="mt-2 text-[13px] text-muted-foreground">{{ t('report.truncated', { n: result.rows.length }) }}</p>
</template>
