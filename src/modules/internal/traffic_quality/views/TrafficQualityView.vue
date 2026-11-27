<script setup lang="ts">
/** Crescimento > Qualidade do tráfego: os sinais de tráfego inválido por site e network, com o detalhe num modal, os links para investigar e a tarefa para o gerente. */
import { computed, onMounted, ref } from 'vue'
import { toast } from 'vue-sonner'
import { Search, ShieldAlert } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import StatTile from '@/components/StatTile.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, locale, t, type Key } from '@/lib/i18n'
import { formatMetric } from '@/lib/metrics'
import { td, th } from '@/lib/table'
import TrafficAlertDialog from '@/modules/internal/traffic_quality/components/TrafficAlertDialog.vue'
import { filterAlerts, normalText, RISKS, RISK_TONE, SIGNALS, signalText, sourceText, taskDescription, type TrafficFilters } from '@/modules/internal/traffic_quality/rules'
import { trafficQualityService } from '@/modules/internal/traffic_quality/service'
import type { TrafficAlert, TrafficAlertDetail, TrafficOverview } from '@/modules/internal/traffic_quality/types'
import FiltersMenu from '@/modules/views/components/FiltersMenu.vue'
import { useLocalBarFilters } from '@/modules/views/barFilters'
import { useSession } from '@/stores/session'

const FILTERS = ['risk', 'signal']
const DEFAULT_FILTERS = ['risk']
const FILTER_LABELS: Record<string, Key> = { risk: 'tq.col.risk', signal: 'tq.col.signal' }

const session = useSession()
const overview = ref<TrafficOverview | null>(null)
const loadError = ref<string | null>(null)
const filters = ref<TrafficFilters>({ risk: 'all', signal: 'all', query: '' })
const barFilters = useLocalBarFilters('traffic-quality', FILTERS, DEFAULT_FILTERS, {
  risk: () => (filters.value.risk = 'all'),
  signal: () => (filters.value.signal = 'all'),
})
const detail = ref<TrafficAlertDetail | null>(null)
const detailOpen = ref(false)
const busy = ref(false)
const canManage = computed(() => session.can('internal.growth.manage'))
const rows = computed(() => filterAlerts(overview.value?.rows ?? [], filters.value))
const total = computed(() => overview.value?.rows.length ?? 0)
const riskOptions = computed(() => [{ value: 'all', label: t('tq.allRisks') }, ...RISKS.map((value) => ({ value, label: t(`tq.risk.${value}`) }))])
const signalOptions = computed(() => [{ value: 'all', label: t('tq.allSignals') }, ...SIGNALS.map((value) => ({ value, label: t(`tq.kind.${value}`) }))])
const openHint = computed(() => (overview.value ? t('tq.kpi.openHint', { high: overview.value.high, cloaker: overview.value.cloaker }) : ''))
const deductionHint = computed(() => {
  const previous = overview.value?.previous_deduction_percent
  return previous === null || previous === undefined ? t('tq.kpi.deductionHint') : t('tq.kpi.deductionPrevious', { n: percent(previous) })
})

/** O nome do filtro no menu de filtros. */
const filterLabel = (filter: string) => t(FILTER_LABELS[filter] as Key)

/** Dólares no formato do idioma. */
const money = (value: string | number) => formatMetric(Number(value), 'currency', locale.value, false, 'USD')

/** Uma porcentagem com até uma casa. */
const percent = (value: number) => `${value.toLocaleString(locale.value, { maximumFractionDigits: 1 })}%`

/** Carrega os alertas abertos e os números do topo. */
async function load() {
  loadError.value = null
  try {
    overview.value = await trafficQualityService.overview()
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Abre o modal com os recortes, as campanhas e os links do alerta. */
async function openDetail(row: TrafficAlert) {
  try {
    detail.value = await trafficQualityService.detail(row.id)
    detailOpen.value = true
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}

/** Esconde o alerta por 7 dias e o tira da lista. */
async function dismiss() {
  const current = detail.value?.alert
  if (!current) return
  busy.value = true
  try {
    await trafficQualityService.dismiss(current.id)
    if (overview.value) overview.value.rows = overview.value.rows.filter((row) => row.id !== current.id)
    detailOpen.value = false
    toast(t('tq.dismissed'))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

/** Cria a tarefa de suporte com o resumo e os links, e liga ao alerta. */
async function createTask() {
  const current = detail.value?.alert
  if (!current) return
  busy.value = true
  try {
    const created = await trafficQualityService.task(current.id, taskDescription(current))
    current.task_id = created.task_id
    const listed = overview.value?.rows.find((row) => row.id === current.id)
    if (listed) listed.task_id = created.task_id
    toast.success(t('tq.taskCreated'), { description: `${current.target_name}: ${signalText(current)}` })
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

onMounted(load)
</script>

<template>
  <PageHeader :title="t('tq.title')" :sub="t('tq.sub')" />
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else>
      <div class="grid gap-4 sm:grid-cols-3">
        <StatTile framed :label="t('tq.kpi.open')" :value="overview ? overview.open : '–'" :tone="overview?.high ? 'text-bad' : undefined" :hint="openHint" />
        <StatTile framed :label="t('tq.kpi.deduction')" :value="overview?.deduction_percent != null ? percent(overview.deduction_percent) : '–'" :hint="deductionHint" />
        <StatTile framed :label="t('tq.kpi.revenue')" :value="overview ? money(overview.revenue_at_risk) : '–'" :hint="t('tq.kpi.revenueHint')" />
      </div>
      <section class="overflow-hidden rounded-lg border bg-card">
        <div class="flex flex-wrap items-center gap-3 p-4">
          <div class="relative w-full sm:w-[260px]">
            <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input v-model="filters.query" type="search" :aria-label="t('tq.search')" class="h-9 pl-9" :placeholder="t('tq.search')" />
          </div>
          <Select v-if="barFilters.isShown('risk')" v-model="filters.risk" :options="riskOptions" :aria-label="t('tq.col.risk')" class="h-9 w-full sm:w-[160px]" />
          <Select v-if="barFilters.isShown('signal')" v-model="filters.signal" :options="signalOptions" :aria-label="t('tq.col.signal')" class="h-9 w-full sm:w-[220px]" />
          <FiltersMenu v-model:shown="barFilters.shown.value" :filters="FILTERS" :label="filterLabel" />
        </div>
        <DataTable :min="860">
          <thead>
            <tr>
              <th :class="th">{{ t('tq.col.where') }}</th>
              <th :class="th">{{ t('tq.col.signal') }}</th>
              <th :class="th">{{ t('tq.col.since') }}</th>
              <th :class="th">{{ t('tq.col.risk') }}</th>
              <th :class="th"><span class="sr-only">{{ t('tq.details') }}</span></th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="5" :loading="overview === null" :empty="rows.length === 0" :icon="ShieldAlert" :title="total ? t('tq.noneFiltered') : t('tq.none')" />
            <tr v-for="row in rows" :key="row.id" class="hover:bg-muted">
              <td :class="td">
                <RouterLink v-if="row.site_id" :to="`/interno/sites/${row.site_id}`" class="font-medium hover:underline">{{ row.target_name }}</RouterLink>
                <RouterLink v-else-if="row.network_id" :to="`/interno/networks/${row.network_id}`" class="font-medium hover:underline">{{ row.target_name }}</RouterLink>
                <div class="text-[13px] text-muted-foreground">{{ [row.client_name, sourceText(row)].filter(Boolean).join(' · ') }}</div>
              </td>
              <td :class="td">
                <div>{{ signalText(row) }}</div>
                <div class="text-[13px] text-muted-foreground">{{ t('tq.normal', { text: normalText(row) }) }}</div>
              </td>
              <td :class="[td, 'whitespace-nowrap tnum']">{{ formatDate(row.opened_at, false) }}</td>
              <td :class="td"><Status :tone="RISK_TONE[row.risk]">{{ t(`tq.risk.${row.risk}`) }}</Status></td>
              <td :class="[td, 'text-right']"><Button size="sm" variant="outline" class="h-8" @click="openDetail(row)">{{ t('tq.details') }}</Button></td>
            </tr>
          </tbody>
        </DataTable>
      </section>
    </template>
  </PageBody>
  <TrafficAlertDialog v-model:open="detailOpen" :detail="detail" :can-manage="canManage" :busy="busy" @dismiss="dismiss" @task="createTask" />
</template>
