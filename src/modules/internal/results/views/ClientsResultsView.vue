<script setup lang="ts">
/** Painel interno: o resultado de cada Empresa cliente no mês escolhido. */
import { computed, onMounted, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import DataTable from '@/components/ui/DataTable.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { formatMonth } from '@/modules/costs/rules'
import { errorText, locale, t } from '@/lib/i18n'
import { formatMetric } from '@/lib/metrics'
import { negative, resultRange } from '@/modules/results/rules'
import { td, th } from '@/lib/table'
import { cn } from '@/lib/utils'
import type { CompanyResults } from '@/modules/results/types'
import { useSession } from '@/stores/session'
import { resultService } from '@/modules/results/service'

const MONTHS_TO_PICK = 12

const session = useSession()
const monthChoices = (() => {
  const { start } = resultRange('last_12_months')
  const [year = 1970, month = 1] = start.split('-').map(Number)
  return Array.from({ length: MONTHS_TO_PICK }, (_, offset) => {
    const index = year * 12 + month - 1 + offset
    return `${Math.floor(index / 12)}-${String((index % 12) + 1).padStart(2, '0')}-01`
  }).reverse()
})()
const month = ref<string>(monthChoices[1] ?? monthChoices[0] ?? '')
const clients = ref<CompanyResults[] | null>(null)
const loadError = ref<string | null>(null)
let latestLoad = 0

const monthOptions = computed(() => monthChoices.map((value) => ({ value, label: formatMonth(value, locale.value) })))
const currency = computed(() => clients.value?.[0]?.currency ?? session.displayCurrency)
const rows = computed(() =>
  (clients.value ?? []).map((client) => ({ client, month: client.months[0] ?? null })).sort((first, second) => Number(second.month?.result ?? 0) - Number(first.month?.result ?? 0)),
)

/** Carrega o resultado do mês de todas as Empresas cliente. */
async function load() {
  const current = ++latestLoad
  loadError.value = null
  clients.value = null
  try {
    const query = new URLSearchParams({ start: month.value, end: month.value, currency: session.displayCurrency })
    const page = await resultService.clients(query)
    if (current === latestLoad) clients.value = page.items
  } catch (error) {
    if (current === latestLoad) loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)
watch([month, () => session.displayCurrency], load)

/** Valor em dinheiro na moeda do resultado. */
const money = (value: number | string) => formatMetric(Number(value), 'currency', locale.value, false, currency.value)
/** Classe do valor: saídas em cinza, resultado negativo em vermelho. */
const valueClass = (value: number | string, strong = false) =>
  cn('tnum whitespace-nowrap', strong && 'font-semibold', Number(value) < 0 && (strong ? 'text-bad' : 'text-muted-foreground'))
</script>

<template>
  <PageHeader :title="t('int.results')" :sub="t('res.clientsSub')">
    <template #actions>
      <NativeSelect v-model="month" :options="monthOptions" class="w-[180px]" :aria-label="t('res.month')" />
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="860">
      <thead>
        <tr>
          <th :class="th">{{ t('ct.client') }}</th>
          <th :class="[th, 'text-right']">{{ t('res.billing') }}</th>
          <th :class="[th, 'text-right']">{{ t('res.deductions') }}</th>
          <th :class="[th, 'text-right']">{{ t('res.revenue') }}</th>
          <th :class="[th, 'text-right']">{{ t('res.costs') }}</th>
          <th :class="[th, 'text-right']">{{ t('res.result') }}</th>
        </tr>
      </thead>
      <tbody>
        <TableState :cols="6" :loading="!clients" :empty="clients?.length === 0" :desc="t('res.clientsEmpty')" />
        <tr v-for="row in rows" :key="row.client.company.id">
          <td :class="[td, 'font-medium']">
            <RouterLink :to="`/interno/clientes/${row.client.company.id}`" class="hover:underline">{{ row.client.company.name }}</RouterLink>
          </td>
          <template v-if="row.month">
            <td :class="[td, 'text-right']"><span :class="valueClass(row.month.billing)">{{ money(row.month.billing) }}</span></td>
            <td :class="[td, 'text-right']">
              <Status v-if="row.month.deductions_pending" tone="ochre">{{ t('res.pendingShort') }}</Status>
              <span v-else :class="valueClass(negative(row.month.deductions))">{{ money(negative(row.month.deductions)) }}</span>
            </td>
            <td :class="[td, 'text-right']"><span :class="valueClass(row.month.revenue)">{{ money(row.month.revenue) }}</span></td>
            <td :class="[td, 'text-right']"><span :class="valueClass(negative(row.month.costs))">{{ money(negative(row.month.costs)) }}</span></td>
            <td :class="[td, 'text-right']"><span :class="valueClass(row.month.result, true)">{{ money(row.month.result) }}</span></td>
          </template>
          <td v-else :class="[td, 'text-muted-foreground']" colspan="5">–</td>
        </tr>
      </tbody>
    </DataTable>
  </PageBody>
</template>
