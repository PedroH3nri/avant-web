<script setup lang="ts">
/** Desempenho: KPIs do GAM no período, receita (ou outra métrica) por dia, sites e países. */
import { computed, onMounted, ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { ChartLine } from 'lucide-vue-next'
import BarChart from '@/components/charts/BarChart.vue'
import KpiTile from '@/components/charts/KpiTile.vue'
import LineChart, { type LineSeries } from '@/components/charts/LineChart.vue'
import PeriodPicker from '@/components/charts/PeriodPicker.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import TableState from '@/components/ui/TableState.vue'
import { api, ApiError } from '@/lib/api'
import { onEvent } from '@/lib/events'
import { errorText, lang, locale, t } from '@/lib/i18n'
import { change, countryName, dailySeries, daysOf, formatMetric, shortDay, toNumber } from '@/lib/metrics'
import { td, th } from '@/lib/table'
import type { MetricCatalog, MetricDef, MetricValues, RelativePeriod, ReportQuery, ReportResult } from '@/lib/types'

const KPI_KEYS = ['revenue', 'impressions', 'ecpm', 'ctr', 'active_view']
const REFRESH_DELAY_MS = 5000

const period = ref<RelativePeriod>('last_30_days')
const compare = ref(true)
const chosen = ref('revenue')
const catalog = ref<MetricCatalog | null>(null)
const daily = ref<ReportResult | null>(null)
const previousDaily = ref<ReportResult | null>(null)
const bySite = ref<ReportResult | null>(null)
const byCountry = ref<ReportResult | null>(null)
const loading = ref(true)
const loadError = ref<string | null>(null)
let latestLoad = 0

const kpis = computed<MetricDef[]>(() =>
  KPI_KEYS.map((key) => catalog.value?.metrics.find((metric) => metric.key === key)).filter((metric): metric is MetricDef => !!metric),
)
const chosenMetric = computed(() => kpis.value.find((metric) => metric.key === chosen.value) ?? kpis.value[0])
const empty = computed(() => !!daily.value && daily.value.rows.length === 0)

/** Consulta do motor de relatórios no período escolhido. */
function query(body: Omit<ReportQuery, 'period'>, range?: { start: string; end: string }): Promise<ReportResult> {
  return api.post<ReportResult>('/reports/query', { ...body, period: range ?? { preset: period.value } })
}

/** Carrega o catálogo (uma vez) e as consultas da tela; resposta atrasada de outro período é ignorada. */
async function load() {
  const current = ++latestLoad
  loading.value = true
  loadError.value = null
  try {
    catalog.value ??= await api.get<MetricCatalog>('/metrics/catalog')
    const [days, sites, countries] = await Promise.all([
      query({ metrics: KPI_KEYS, dimensions: ['date'], compare: compare.value, order: [{ field: 'date', descending: false }], limit: 400 }),
      query({ metrics: KPI_KEYS, dimensions: ['site'], compare: compare.value, order: [{ field: 'revenue' }], limit: 100 }),
      query({ metrics: ['revenue'], dimensions: ['country'], order: [{ field: 'revenue' }], limit: 8 }),
    ])
    const before = compare.value && days.previous_period
      ? await query({ metrics: KPI_KEYS, dimensions: ['date'], order: [{ field: 'date', descending: false }], limit: 400 }, days.previous_period)
      : null
    if (current !== latestLoad) return
    daily.value = days
    bySite.value = sites
    byCountry.value = countries
    previousDaily.value = before
  } catch (error) {
    if (current !== latestLoad) return
    const code = error instanceof ApiError ? error.code : 'unknown'
    loadError.value = errorText(code, { s: error instanceof ApiError ? (error.retryAfter ?? 1) : 1 })
  } finally {
    if (current === latestLoad) loading.value = false
  }
}

onMounted(load)
watch([period, compare], load)
onEvent('metrics.updated', useDebounceFn(load, REFRESH_DELAY_MS))

/** Valor de uma métrica formatado no idioma atual. */
const show = (metric: MetricDef | undefined, value: number | null, compact = false) =>
  metric ? formatMetric(value, metric.format, locale.value, compact) : '–'
/** Valor numérico de uma métrica num conjunto de valores da API. */
const valueOf = (values: MetricValues | null | undefined, key: string) => toNumber(values?.[key])
/** Variação em % já formatada, sem sinal (a seta diz a direção). */
const deltaText = (delta: number | null) =>
  delta === null ? '' : new Intl.NumberFormat(locale.value, { maximumFractionDigits: 1, minimumFractionDigits: 1 }).format(Math.abs(delta)) + '%'
/** Nome da métrica no idioma atual. */
const label = (metric: MetricDef) => metric.label[lang.value]

const chart = computed(() => {
  const metric = chosenMetric.value
  if (!daily.value || !metric) return null
  const labels = daysOf(daily.value.period).map((day) => shortDay(day, locale.value))
  const series: LineSeries[] = [{ key: 'current', name: t('perf.current'), values: dailySeries(daily.value.rows, daily.value.period, metric.key, metric.kind) }]
  if (compare.value && previousDaily.value) {
    const values = dailySeries(previousDaily.value.rows, previousDaily.value.period, metric.key, metric.kind)
    series.push({ key: 'previous', name: t('perf.previous'), values: values.slice(0, labels.length), tone: 'muted', dashed: true })
  }
  return { labels, series, metric }
})
/** Formato do eixo e da dica do gráfico. */
const chartFormat = (value: number | null, compact?: boolean) => show(chosenMetric.value, value, compact)

const siteRows = computed(() =>
  (bySite.value?.rows ?? []).map((row) => {
    const id = row.dimensions.site
    const delta = change(valueOf(row.metrics, 'revenue'), valueOf(row.previous, 'revenue'))
    return { key: id ?? 'none', name: id ? (bySite.value?.labels.site?.[id] ?? id) : t('perf.noSite'), row, delta }
  }),
)
const revenue = computed(() => kpis.value.find((metric) => metric.key === 'revenue'))
const countryBars = computed(() =>
  (byCountry.value?.rows ?? []).map((row) => ({
    key: row.dimensions.country ?? 'none',
    label: countryName(row.dimensions.country ?? null, locale.value) ?? t('perf.noCountry'),
    value: valueOf(row.metrics, 'revenue'),
  })),
)
/** Formato do valor das barras de país (receita). */
const barFormat = (value: number | null) => show(revenue.value, value)
</script>

<template>
  <PageHeader :title="t('perf.title')" :sub="t('perf.sub')">
    <template #actions>
      <PeriodPicker v-model:period="period" v-model:compare="compare" />
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />

    <div class="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-3 lg:grid-cols-5" :aria-busy="loading">
      <template v-if="kpis.length">
        <KpiTile
          v-for="(metric, position) in kpis"
          :key="metric.key"
          :class="position === kpis.length - 1 ? 'col-span-2 md:col-span-1' : ''"
          :label="label(metric)"
          :value="daily ? show(metric, valueOf(daily.totals, metric.key)) : '–'"
          :delta="change(valueOf(daily?.totals, metric.key), valueOf(daily?.previous_totals, metric.key))"
          :delta-text="deltaText(change(valueOf(daily?.totals, metric.key), valueOf(daily?.previous_totals, metric.key)))"
          :comparing="compare && !!daily"
          :selected="metric.key === chosenMetric?.key"
          @select="chosen = metric.key"
        />
      </template>
      <template v-else>
        <div v-for="slot in KPI_KEYS" :key="slot" class="h-[108px] bg-card p-4" aria-hidden="true">
          <span class="block h-4 w-20 animate-pulse rounded bg-muted" />
          <span class="mt-3 block h-6 w-28 animate-pulse rounded bg-muted" />
        </div>
      </template>
    </div>

    <Card :footer-note="t('perf.partial')">
      <div class="flex flex-wrap items-baseline justify-between gap-3">
        <h2 class="text-[16px] font-semibold tracking-[-0.015em]">
          {{ chosenMetric ? t('perf.byDay', { metric: label(chosenMetric) }) : t('perf.title') }}
        </h2>
      </div>
      <div class="mt-4 min-h-[260px]">
        <div v-if="empty" class="flex h-[260px] flex-col items-center justify-center gap-3 text-center">
          <span class="flex size-10 items-center justify-center rounded-full border text-muted-foreground"><ChartLine class="size-4" aria-hidden="true" /></span>
          <p class="text-[14px] font-medium">{{ t('perf.empty') }}</p>
          <p class="max-w-[52ch] text-[13px] text-muted-foreground">{{ t('perf.emptyDesc') }}</p>
        </div>
        <LineChart
          v-else-if="chart"
          :labels="chart.labels"
          :series="chart.series"
          :format="chartFormat"
          :description="t('perf.byDay', { metric: label(chart.metric) })"
          area
        />
        <div v-else class="h-[260px] animate-pulse rounded-md bg-muted" aria-hidden="true" />
      </div>
    </Card>

    <section class="grid content-start gap-3">
        <h2 class="text-[16px] font-semibold tracking-[-0.015em]">{{ t('perf.bySite') }}</h2>
        <DataTable :min="820">
          <thead>
            <tr>
              <th :class="th">{{ t('perf.site') }}</th>
              <th v-for="metric in kpis" :key="metric.key" :class="[th, 'text-right']">{{ label(metric) }}</th>
              <th v-if="compare" :class="[th, 'text-right']">{{ t('perf.revenueChange') }}</th>
            </tr>
          </thead>
          <tbody>
            <TableState
              :cols="kpis.length + (compare ? 2 : 1)"
              :loading="loading && !bySite"
              :empty="!!bySite && siteRows.length === 0"
              :title="t('perf.empty')"
            />
            <tr v-for="site in siteRows" :key="site.key" class="hover:bg-muted">
              <td :class="[td, 'whitespace-nowrap font-medium', site.key === 'none' ? 'text-muted-foreground' : '']">{{ site.name }}</td>
              <td v-for="metric in kpis" :key="metric.key" :class="[td, 'whitespace-nowrap text-right tnum']">{{ show(metric, valueOf(site.row.metrics, metric.key)) }}</td>
              <td v-if="compare" :class="[td, 'whitespace-nowrap text-right tnum']">
                <span v-if="site.delta === null" class="text-muted-foreground">{{ t('perf.noPrevious') }}</span>
                <span v-else :class="site.delta >= 0 ? 'text-ok' : 'text-bad'">
                  <span aria-hidden="true">{{ site.delta >= 0 ? '↑' : '↓' }}</span> {{ deltaText(site.delta) }}
                  <span class="sr-only">{{ site.delta >= 0 ? t('perf.above') : t('perf.below') }}</span>
                </span>
              </td>
            </tr>
          </tbody>
        </DataTable>
    </section>
    <div class="grid gap-6 lg:grid-cols-2">
      <section class="grid content-start gap-3">
        <h2 class="text-[16px] font-semibold tracking-[-0.015em]">{{ t('perf.byCountry') }}</h2>
        <Card>
          <BarChart v-if="countryBars.length" :items="countryBars" :format="barFormat" :description="t('perf.byCountry')" />
          <p v-else-if="!loading" class="text-[13px] text-muted-foreground">{{ t('perf.empty') }}</p>
          <div v-else class="h-40 animate-pulse rounded-md bg-muted" aria-hidden="true" />
        </Card>
      </section>
    </div>
  </PageBody>
</template>
