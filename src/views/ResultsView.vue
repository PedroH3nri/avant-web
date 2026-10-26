<script setup lang="ts">
/** Resultado da Empresa mês a mês: faturamento, deduções do Ad Manager, receita, custos e o que sobra. */
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { api, ApiError } from '@/lib/api'
import { formatMonth } from '@/lib/costs'
import { errorText, locale, t } from '@/lib/i18n'
import { formatMetric } from '@/lib/metrics'
import { margin, negative, RESULT_PERIODS, resultRange, type ResultPeriod } from '@/lib/results'
import { td, th } from '@/lib/table'
import { cn } from '@/lib/utils'
import type { CompanyResults, MonthResult } from '@/lib/types'
import { useSession } from '@/stores/session'

const session = useSession()
const router = useRouter()
const period = ref<ResultPeriod>('last_6_months')
const results = ref<CompanyResults | null>(null)
const selectedMonth = ref<string | null>(null)
const loading = ref(true)
const loadError = ref<string | null>(null)
let latestLoad = 0

const periodOptions = computed(() => RESULT_PERIODS.map((value) => ({ value, label: t(`res.period.${value}`) })))
const months = computed(() => [...(results.value?.months ?? [])].reverse())
const selected = computed<MonthResult | null>(
  () => results.value?.months.find((month) => month.month === selectedMonth.value) ?? results.value?.months.at(-1) ?? null,
)
const currency = computed(() => results.value?.currency ?? session.displayCurrency)

/** Carrega o resultado do período na moeda de visualização da pessoa. */
async function load() {
  const current = ++latestLoad
  loading.value = true
  loadError.value = null
  try {
    const range = resultRange(period.value)
    const query = new URLSearchParams({ ...range, currency: session.displayCurrency })
    const loaded = await api.get<CompanyResults>(`/results?${query}`)
    if (current !== latestLoad) return
    results.value = loaded
    selectedMonth.value = loaded.months.at(-1)?.month ?? null
  } catch (error) {
    if (current !== latestLoad) return
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  } finally {
    if (current === latestLoad) loading.value = false
  }
}
onMounted(load)
watch([period, () => session.displayCurrency], load)

/** Valor em dinheiro na moeda do resultado. */
const money = (value: number | string) => formatMetric(Number(value), 'currency', locale.value, false, currency.value)
/** Classe do valor: saídas em cinza, resultado negativo em vermelho. */
const valueClass = (value: number | string, strong = false) =>
  cn('tnum whitespace-nowrap', strong && 'font-semibold', Number(value) < 0 && (strong ? 'text-bad' : 'text-muted-foreground'))
const tiles = computed(() => {
  const month = selected.value
  if (!month) return []
  return [
    { key: 'billing', value: Number(month.billing), strong: false },
    { key: 'deductions', value: negative(month.deductions), strong: false },
    { key: 'revenue', value: Number(month.revenue), strong: false },
    { key: 'costs', value: negative(month.costs), strong: false },
    { key: 'result', value: Number(month.result), strong: true },
  ] as const
})
const marginText = computed(() => {
  const month = selected.value
  const value = month ? margin(month.result, month.billing) : null
  return value === null ? '–' : formatMetric(value, 'percent', locale.value)
})
</script>

<template>
  <PageHeader :title="t('nav.results')" :sub="t('res.sub')">
    <template #actions>
      <NativeSelect v-model="period" :options="periodOptions" class="w-[200px]" :aria-label="t('res.periodLabel')" />
      <Button v-if="session.can('costs.view')" variant="outline" @click="router.push('/custos')">{{ t('nav.costs') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else>
      <div v-if="selected" class="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-5">
        <div v-for="tile in tiles" :key="tile.key" class="bg-card p-4">
          <span class="block text-[13px] font-medium text-muted-foreground">{{ t(`res.${tile.key}`) }} · {{ formatMonth(selected.month, locale) }}</span>
          <span :class="cn('mt-1 block truncate text-[20px] font-semibold tracking-[-0.03em] sm:text-[24px]', valueClass(tile.value, tile.strong))">{{ money(tile.value) }}</span>
          <Status v-if="tile.key === 'deductions' && selected.deductions_pending" tone="ochre" class="mt-1">{{ t('res.pending') }}</Status>
          <span v-if="tile.key === 'result'" class="mt-1 block text-[13px] text-muted-foreground tnum">{{ t('res.margin', { value: marginText }) }}</span>
        </div>
      </div>

      <DataTable :min="820">
        <thead>
          <tr>
            <th :class="th">{{ t('res.month') }}</th>
            <th :class="[th, 'text-right']">{{ t('res.billing') }}</th>
            <th :class="[th, 'text-right']">{{ t('res.deductions') }}</th>
            <th :class="[th, 'text-right']">{{ t('res.revenue') }}</th>
            <th :class="[th, 'text-right']">{{ t('res.costs') }}</th>
            <th :class="[th, 'text-right']">{{ t('res.result') }}</th>
          </tr>
        </thead>
        <tbody>
          <TableState :cols="6" :loading="loading && !results" :empty="results?.months.length === 0" :desc="t('res.empty')" />
          <tr
            v-for="month in months"
            :key="month.month"
            :aria-selected="month.month === selected?.month"
            :class="cn('cursor-pointer hover:bg-muted', month.month === selected?.month && 'bg-muted')"
            @click="selectedMonth = month.month"
          >
            <td :class="[td, 'font-medium whitespace-nowrap']">
              <button type="button" class="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" @click.stop="selectedMonth = month.month">
                {{ formatMonth(month.month, locale) }}
              </button>
            </td>
            <td :class="[td, 'text-right']"><span :class="valueClass(month.billing)">{{ money(month.billing) }}</span></td>
            <td :class="[td, 'text-right']">
              <Status v-if="month.deductions_pending" tone="ochre">{{ t('res.pendingShort') }}</Status>
              <span v-else :class="valueClass(negative(month.deductions))">{{ money(negative(month.deductions)) }}</span>
            </td>
            <td :class="[td, 'text-right']"><span :class="valueClass(month.revenue)">{{ money(month.revenue) }}</span></td>
            <td :class="[td, 'text-right']"><span :class="valueClass(negative(month.costs))">{{ money(negative(month.costs)) }}</span></td>
            <td :class="[td, 'text-right']"><span :class="valueClass(month.result, true)">{{ money(month.result) }}</span></td>
          </tr>
          <tr v-if="results && results.months.length" class="bg-muted/60">
            <td :class="[td, 'font-medium']">{{ t('res.total') }}</td>
            <td :class="[td, 'text-right']"><span :class="valueClass(results.totals.billing)">{{ money(results.totals.billing) }}</span></td>
            <td :class="[td, 'text-right']"><span :class="valueClass(negative(results.totals.deductions))">{{ money(negative(results.totals.deductions)) }}</span></td>
            <td :class="[td, 'text-right']"><span :class="valueClass(results.totals.revenue)">{{ money(results.totals.revenue) }}</span></td>
            <td :class="[td, 'text-right']"><span :class="valueClass(negative(results.totals.costs))">{{ money(negative(results.totals.costs)) }}</span></td>
            <td :class="[td, 'text-right']"><span :class="valueClass(results.totals.result, true)">{{ money(results.totals.result) }}</span></td>
          </tr>
        </tbody>
      </DataTable>

      <Card v-if="selected" :title="t('res.costsOf', { month: formatMonth(selected.month, locale) })" :desc="t('res.costsDesc')" :footer-note="t('res.deductionsNote')">
        <p v-if="!selected.cost_lines.length" class="text-[14px] text-muted-foreground">{{ t('res.noCosts') }}</p>
        <ul v-else class="divide-y rounded-md border">
          <li v-for="line in selected.cost_lines" :key="line.cost_id" class="flex items-center justify-between gap-4 px-4 py-3 text-[14px]">
            <span class="min-w-0 truncate">{{ line.name }}</span>
            <span :class="valueClass(negative(line.amount))">{{ money(negative(line.amount)) }}</span>
          </li>
        </ul>
        <template v-if="session.can('costs.view')" #footer>
          <Button variant="outline" size="sm" @click="router.push('/custos')">{{ t('res.editCosts') }}</Button>
        </template>
      </Card>
    </template>
  </PageBody>
</template>
