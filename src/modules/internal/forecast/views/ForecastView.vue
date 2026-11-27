<script setup lang="ts">
/** Crescimento > Previsão do mês: onde o mês deve fechar pelo realizado e pelo ritmo dos últimos 14 dias, e o que entra e sai do caixa da Groone. */
import { computed, onMounted, ref } from 'vue'
import { Info } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import StatTile from '@/components/StatTile.vue'
import Badge from '@/components/ui/Badge.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Select from '@/components/ui/Select.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import MonthBars from '@/modules/internal/forecast/components/MonthBars.vue'
import { DIRECTION_TONE, SCENARIOS, changeOf, money, monthName, ratePercent, scenarioOf, valueText, whenText } from '@/modules/internal/forecast/rules'
import { forecastService } from '@/modules/internal/forecast/service'
import type { ForecastScenario, MonthForecast } from '@/modules/internal/forecast/types'

const FACTOR: Record<ForecastScenario, number> = { low: 0.94, base: 1, high: 1.05 }

const forecast = ref<MonthForecast | null>(null)
const loadError = ref<string | null>(null)
const scenario = ref<ForecastScenario>('base')
const totals = computed(() => (forecast.value ? scenarioOf(forecast.value, scenario.value) : undefined))
const month = computed(() => (forecast.value ? monthName(forecast.value.month) : ''))
const change = computed(() => (forecast.value && totals.value ? changeOf(totals.value.gross, forecast.value.previous_month) : null))
const scenarioOptions = computed(() => SCENARIOS.map((value) => ({ value, label: t(`fc.scenario.${value}`) })))
const grossHint = computed(() => {
  if (!forecast.value) return ''
  const realized = t('fc.kpi.realized', { value: money(forecast.value.realized) })
  return change.value == null ? realized : `${realized} · ${t('fc.kpi.change', { n: change.value > 0 ? `+${change.value}` : String(change.value) })}`
})

/** Carrega a previsão do mês. */
async function load() {
  loadError.value = null
  try {
    forecast.value = await forecastService.month()
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

onMounted(load)
</script>

<template>
  <PageHeader :title="t('fc.title')" :sub="t('fc.sub', { month })">
    <template #actions><Select v-model="scenario" :options="scenarioOptions" :aria-label="t('fc.scenarioLabel')" class="h-9 w-[180px]" /></template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatTile framed :label="t('fc.kpi.gross')" :value="totals ? money(totals.gross) : '–'" :hint="grossHint" />
        <StatTile framed :label="t('fc.kpi.groone')" :value="totals ? money(totals.groone) : '–'" tone="text-ok" :hint="t('fc.kpi.grooneHint')" />
        <StatTile framed :label="t('fc.kpi.deduction')" :value="totals ? money(totals.deduction) : '–'" tone="text-bad" :hint="t('fc.kpi.deductionHint', { rate: ratePercent(forecast?.deduction_rate ?? null) })" />
        <StatTile framed :label="t('fc.kpi.commission')" :value="totals ? money(totals.commission) : '–'" :hint="t('fc.kpi.commissionHint')" />
      </div>
      <section class="rounded-lg border bg-card p-4">
        <h2 class="text-[14px] font-semibold">{{ t('fc.chartTitle') }}</h2>
        <p class="mb-4 text-[13px] text-muted-foreground">{{ t('fc.chartHint') }}</p>
        <MonthBars v-if="forecast" :days="forecast.days" :factor="FACTOR[scenario]" />
        <p v-else class="text-[13px] text-muted-foreground">{{ t('fc.loading') }}</p>
      </section>
      <section class="overflow-hidden rounded-lg border bg-card">
        <DataTable :min="640">
          <thead>
            <tr>
              <th :class="th">{{ t('fc.col.when') }}</th>
              <th :class="th">{{ t('fc.col.what') }}</th>
              <th :class="th">{{ t('fc.col.kind') }}</th>
              <th :class="th">{{ t('fc.col.value') }}</th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="4" :loading="forecast === null" :empty="(forecast?.cash.length ?? 0) === 0" :icon="Info" :title="t('fc.noCash')" />
            <tr v-for="event in forecast?.cash ?? []" :key="event.kind">
              <td :class="[td, 'tnum']">{{ whenText(event) }}</td>
              <td :class="td">{{ t(`fc.cash.${event.kind}`, { month }) }}</td>
              <td :class="td"><Badge :tone="DIRECTION_TONE[event.direction]">{{ t(`fc.direction.${event.direction}`) }}</Badge></td>
              <td :class="[td, 'tnum']">{{ valueText(event) }}</td>
            </tr>
          </tbody>
        </DataTable>
      </section>
      <p class="flex items-start gap-2 text-[13px] text-muted-foreground"><Info class="mt-0.5 size-4 shrink-0" aria-hidden="true" />{{ t('fc.note') }}</p>
    </template>
  </PageBody>
</template>
