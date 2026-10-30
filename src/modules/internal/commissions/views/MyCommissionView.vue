<script setup lang="ts">
/** Minha comissão: os números do mês, os prazos que geraram e o histórico dos meses. */
import { computed, onMounted, ref, watch } from 'vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import DataTable from '@/components/ui/DataTable.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, lang, locale, t, type Key } from '@/lib/i18n'
import { formatMetric, toNumber } from '@/lib/metrics'
import { td, th } from '@/lib/table'
import CommissionKpis from '@/modules/internal/commissions/components/CommissionKpis.vue'
import { STATUS_TONE, formatDay, windowState } from '@/modules/internal/commissions/rules'
import { commissionService } from '@/modules/internal/commissions/service'
import type { MyCommissions, WindowMonth } from '@/modules/internal/commissions/types'
import { formatAmount, monthOptions } from '@/modules/internal/goals/rules'

const today = new Date().toISOString().slice(0, 10)
const months = computed(() => monthOptions(today, locale.value))
const month = ref(today.slice(0, 7))
const data = ref<MyCommissions | null>(null)
const loadError = ref<string | null>(null)

/** Carrega a minha comissão do mês escolhido. */
async function load() {
  loadError.value = null
  try {
    data.value = await commissionService.mine(month.value)
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)
watch(month, load)

/** Valor em dólar no idioma da pessoa. */
const money = (value: string) => formatMetric(toNumber(value), 'currency', locale.value)
/** Valor descontado, com o sinal de menos; zero vira traço. */
const minus = (value: string) => ((toNumber(value) ?? 0) === 0 ? '–' : `− ${money(value)}`)
/** Nome do mês da API (``AAAA-MM-DD``). */
const monthName = (iso: string) => new Intl.DateTimeFormat(locale.value, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`))
const openWindows = computed(() => (data.value?.windows ?? []).filter((entry) => ['ends', 'endless'].includes(windowState(entry, today).kind)).length)
const kpis = computed(() => {
  const current = data.value?.month
  if (!current) return []
  return [
    { label: t('com.kpi.month'), value: money(current.commission), hint: t('com.kpi.monthHint') },
    { label: t('com.kpi.deduction'), value: minus(current.deduction), hint: t('com.kpi.deductionHint') },
    { label: t('com.kpi.windows'), value: String(openWindows.value), hint: t('com.kpi.windowsHint') },
    { label: t('com.kpi.total'), value: money(current.total), hint: t(`com.status.${current.status}` as Key) },
  ]
})
/** O texto da coluna Termina. */
function endText(entry: WindowMonth): string {
  const state = windowState(entry, today)
  if (state.kind === 'waiting') return t('com.waiting')
  if (state.kind === 'endless') return t('com.endless')
  if (state.kind === 'stopped') return t('com.stoppedOn', { date: formatDay(state.date, locale.value) })
  if (state.kind === 'ended') return t('com.endedOn', { date: formatDay(state.date, locale.value) })
  return formatDay(state.date, locale.value)
}
</script>

<template>
  <PageHeader :title="t('com.mine.title')" :sub="t('com.mine.sub')">
    <template #actions>
      <NativeSelect v-model="month" :options="months" :aria-label="t('com.month')" class="h-9 w-[200px]" />
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <p v-else-if="!data" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <template v-else>
      <CommissionKpis :items="kpis" />
      <section class="grid gap-3" aria-labelledby="windows-title">
        <h2 id="windows-title" class="text-[16px] font-semibold tracking-tight">{{ t('com.windows') }}</h2>
        <DataTable :min="820">
          <thead>
            <tr>
              <th :class="th">{{ t('com.col.target') }}</th>
              <th :class="th">{{ t('com.col.rule') }}</th>
              <th :class="th">{{ t('com.col.started') }}</th>
              <th :class="th">{{ t('com.col.ends') }}</th>
              <th :class="[th, 'text-right']">{{ t('com.col.percentage') }}</th>
              <th :class="[th, 'text-right']">{{ t('com.col.monthCommission') }}</th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="6" :empty="data.windows.length === 0" :desc="t('com.noWindows')" />
            <tr v-for="entry in data.windows" :key="entry.id" class="hover:bg-muted">
              <td :class="[td, 'font-medium']">{{ entry.target_name }}</td>
              <td :class="[td, 'whitespace-nowrap']">{{ t(`com.event.${entry.event}` as Key) }}</td>
              <td :class="[td, 'whitespace-nowrap tnum']">{{ entry.starts_on ? formatDay(entry.starts_on, locale) : '–' }}</td>
              <td :class="[td, 'whitespace-nowrap']">
                <Status v-if="['ended', 'stopped', 'waiting'].includes(windowState(entry, today).kind)" tone="neutral">{{ endText(entry) }}</Status>
                <span v-else class="tnum">{{ endText(entry) }}</span>
              </td>
              <td :class="[td, 'text-right tnum']">{{ entry.percentage ? `${formatAmount(entry.percentage, lang)}%` : '–' }}</td>
              <td :class="[td, 'whitespace-nowrap text-right tnum']">{{ money(entry.commission) }}</td>
            </tr>
          </tbody>
        </DataTable>
      </section>
      <section class="grid gap-3" aria-labelledby="history-title">
        <h2 id="history-title" class="text-[16px] font-semibold tracking-tight">{{ t('com.history') }}</h2>
        <DataTable :min="820">
          <thead>
            <tr>
              <th :class="th">{{ t('com.col.month') }}</th>
              <th :class="[th, 'text-right']">{{ t('com.col.base') }}</th>
              <th :class="[th, 'text-right']">{{ t('com.col.commission') }}</th>
              <th :class="[th, 'text-right']">{{ t('com.col.deduction') }}</th>
              <th :class="[th, 'text-right']">{{ t('com.col.adjustments') }}</th>
              <th :class="[th, 'text-right']">{{ t('com.col.total') }}</th>
              <th :class="th">{{ t('com.col.status') }}</th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="7" :empty="data.history.length === 0" :desc="t('com.noHistory')" />
            <tr v-for="item in data.history" :key="item.month" class="hover:bg-muted">
              <td :class="[td, 'whitespace-nowrap font-medium first-letter:uppercase']">{{ monthName(item.month) }}</td>
              <td :class="[td, 'text-right tnum']">{{ money(item.base) }}</td>
              <td :class="[td, 'text-right tnum']">{{ money(item.commission) }}</td>
              <td :class="[td, 'text-right tnum text-muted-foreground']">{{ minus(item.deduction) }}</td>
              <td :class="[td, 'text-right tnum text-muted-foreground']">{{ minus(item.adjustments) }}</td>
              <td :class="[td, 'text-right tnum font-medium']">{{ money(item.total) }}</td>
              <td :class="td"><Status :tone="STATUS_TONE[item.status]">{{ t(`com.status.${item.status}` as Key) }}</Status></td>
            </tr>
          </tbody>
        </DataTable>
      </section>
    </template>
  </PageBody>
</template>
