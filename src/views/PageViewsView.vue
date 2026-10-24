<script setup lang="ts">
/** Page Views: visitas do período por dia, por hora do dia, por país e por site. */
import { computed, onMounted, ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { Eye } from 'lucide-vue-next'
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
import { errorText, locale, t } from '@/lib/i18n'
import { change, countryName, dailySeries, daysOf, formatMetric, hourLabel, hourlyItems, peakHour, shortDay, toNumber } from '@/lib/metrics'
import { td, th } from '@/lib/table'
import type { RelativePeriod, ReportQuery, ReportResult } from '@/lib/types'

const METRIC = 'page_views'
const REFRESH_DELAY_MS = 5000

const period = ref<RelativePeriod>('last_30_days')
const compare = ref(true)
const daily = ref<ReportResult | null>(null)
const previousDaily = ref<ReportResult | null>(null)
const byHour = ref<ReportResult | null>(null)
const bySite = ref<ReportResult | null>(null)
const byCountry = ref<ReportResult | null>(null)
const loading = ref(true)
const loadError = ref<string | null>(null)
let latestLoad = 0

const empty = computed(() => !!daily.value && daily.value.rows.length === 0)

/** Consulta das visitas no motor de relatórios, no período escolhido. */
function query(body: Omit<ReportQuery, 'period' | 'source' | 'metrics'>, range?: { start: string; end: string }): Promise<ReportResult> {
  return api.post<ReportResult>('/reports/query', { ...body, source: 'page_views', metrics: [METRIC], period: range ?? { preset: period.value } })
}

/** Carrega as consultas da tela; resposta atrasada de outro período é ignorada. */
async function load() {
  const current = ++latestLoad
  loading.value = true
  loadError.value = null
  try {
    const [days, hours, sites, countries] = await Promise.all([
      query({ dimensions: ['date'], compare: compare.value, order: [{ field: 'date', descending: false }], limit: 400 }),
      query({ dimensions: ['hour'], order: [{ field: 'hour', descending: false }], limit: 24 }),
      query({ dimensions: ['site'], compare: compare.value, order: [{ field: METRIC }], limit: 100 }),
      query({ dimensions: ['country'], order: [{ field: METRIC }], limit: 8 }),
    ])
    const before = compare.value && days.previous_period
      ? await query({ dimensions: ['date'], order: [{ field: 'date', descending: false }], limit: 400 }, days.previous_period)
      : null
    if (current !== latestLoad) return
    daily.value = days
    byHour.value = hours
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

/** Número de visitas formatado no idioma atual. */
const show = (value: number | null, compact = false) => formatMetric(value, 'number', locale.value, compact)
/** Variação em % já formatada, sem sinal (a seta diz a direção). */
const deltaText = (delta: number | null) =>
  delta === null ? '' : new Intl.NumberFormat(locale.value, { maximumFractionDigits: 1, minimumFractionDigits: 1 }).format(Math.abs(delta)) + '%'

const total = computed(() => toNumber(daily.value?.totals[METRIC]))
const totalDelta = computed(() => change(total.value, toNumber(daily.value?.previous_totals?.[METRIC])))
const siteCount = computed(() => (bySite.value?.rows ?? []).filter((row) => row.dimensions.site).length)
const peak = computed(() => peakHour(byHour.value?.rows ?? [], METRIC))

const chart = computed(() => {
  if (!daily.value) return null
  const labels = daysOf(daily.value.period).map((day) => shortDay(day, locale.value))
  const series: LineSeries[] = [{ key: 'current', name: t('perf.current'), values: dailySeries(daily.value.rows, daily.value.period, METRIC, 'sum') }]
  if (compare.value && previousDaily.value) {
    const values = dailySeries(previousDaily.value.rows, previousDaily.value.period, METRIC, 'sum')
    series.push({ key: 'previous', name: t('perf.previous'), values: values.slice(0, labels.length), tone: 'muted', dashed: true })
  }
  return { labels, series }
})

const hourBars = computed(() => hourlyItems(byHour.value?.rows ?? [], METRIC))
const countryBars = computed(() =>
  (byCountry.value?.rows ?? []).map((row) => ({
    key: row.dimensions.country ?? 'none',
    label: countryName(row.dimensions.country ?? null, locale.value) ?? t('perf.noCountry'),
    value: toNumber(row.metrics[METRIC]),
  })),
)
const siteRows = computed(() =>
  (bySite.value?.rows ?? []).map((row) => {
    const id = row.dimensions.site
    const delta = change(toNumber(row.metrics[METRIC]), toNumber(row.previous?.[METRIC]))
    return { key: id ?? 'none', name: id ? (bySite.value?.labels.site?.[id] ?? id) : t('pv.noSite'), value: toNumber(row.metrics[METRIC]), delta }
  }),
)
</script>

<template>
  <PageHeader :title="t('pv.title')" :sub="t('pv.sub')">
    <template #actions>
      <PeriodPicker v-model:period="period" v-model:compare="compare" />
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />

    <div class="grid grid-cols-1 gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-3" :aria-busy="loading">
      <KpiTile
        :label="t('pv.total')"
        :value="daily ? show(total) : '–'"
        :delta="totalDelta"
        :delta-text="deltaText(totalDelta)"
        :comparing="compare && !!daily"
      />
      <KpiTile :label="t('pv.sites')" :value="bySite ? show(siteCount) : '–'" :delta="null" delta-text="" :comparing="false" />
      <KpiTile :label="t('pv.peak')" :value="peak === null ? '–' : hourLabel(peak)" :delta="null" delta-text="" :comparing="false" />
    </div>

    <Card :footer-note="t('pv.partial')">
      <h2 class="text-[16px] font-semibold tracking-[-0.015em]">{{ t('pv.byDay') }}</h2>
      <div class="mt-4 min-h-[260px]">
        <div v-if="empty" class="flex h-[260px] flex-col items-center justify-center gap-3 text-center">
          <span class="flex size-10 items-center justify-center rounded-full border text-muted-foreground"><Eye class="size-4" aria-hidden="true" /></span>
          <p class="text-[14px] font-medium">{{ t('pv.empty') }}</p>
          <p class="max-w-[52ch] text-[13px] text-muted-foreground">{{ t('pv.emptyDesc') }}</p>
        </div>
        <LineChart v-else-if="chart" :labels="chart.labels" :series="chart.series" :format="show" :description="t('pv.byDay')" area />
        <div v-else class="h-[260px] animate-pulse rounded-md bg-muted" aria-hidden="true" />
      </div>
    </Card>

    <div class="grid gap-6 lg:grid-cols-2">
      <section class="grid content-start gap-3">
        <h2 class="text-[16px] font-semibold tracking-[-0.015em]">{{ t('pv.byHour') }}</h2>
        <Card>
          <BarChart v-if="hourBars.length" :items="hourBars" :format="show" :description="t('pv.byHour')" />
          <p v-else-if="!loading" class="text-[13px] text-muted-foreground">{{ t('pv.empty') }}</p>
          <div v-else class="h-40 animate-pulse rounded-md bg-muted" aria-hidden="true" />
        </Card>
      </section>
      <section class="grid content-start gap-3">
        <h2 class="text-[16px] font-semibold tracking-[-0.015em]">{{ t('pv.byCountry') }}</h2>
        <Card>
          <BarChart v-if="countryBars.length" :items="countryBars" :format="show" :description="t('pv.byCountry')" />
          <p v-else-if="!loading" class="text-[13px] text-muted-foreground">{{ t('pv.empty') }}</p>
          <div v-else class="h-40 animate-pulse rounded-md bg-muted" aria-hidden="true" />
        </Card>
      </section>
    </div>

    <section class="grid content-start gap-3">
      <h2 class="text-[16px] font-semibold tracking-[-0.015em]">{{ t('perf.bySite') }}</h2>
      <DataTable :min="520">
        <thead>
          <tr>
            <th :class="th">{{ t('perf.site') }}</th>
            <th :class="[th, 'text-right']">{{ t('pv.total') }}</th>
            <th v-if="compare" :class="[th, 'text-right']">{{ t('pv.change') }}</th>
          </tr>
        </thead>
        <tbody>
          <TableState :cols="compare ? 3 : 2" :loading="loading && !bySite" :empty="!!bySite && siteRows.length === 0" :title="t('pv.empty')" />
          <tr v-for="site in siteRows" :key="site.key" class="hover:bg-muted">
            <td :class="[td, 'whitespace-nowrap font-medium', site.key === 'none' ? 'text-muted-foreground' : '']">{{ site.name }}</td>
            <td :class="[td, 'whitespace-nowrap text-right tnum']">{{ show(site.value) }}</td>
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
  </PageBody>
</template>
