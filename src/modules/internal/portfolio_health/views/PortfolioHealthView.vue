<script setup lang="ts">
/** Crescimento > Saúde da carteira: a nota de cada cliente com os piores primeiro, os sinais num modal e o aviso de queda de receita. */
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { HeartPulse, Search } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import StatTile from '@/components/StatTile.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'
import Status from '@/components/ui/Status.vue'
import Switch from '@/components/ui/Switch.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, locale, t, type Key } from '@/lib/i18n'
import { formatMetric } from '@/lib/metrics'
import { td, th } from '@/lib/table'
import { cn } from '@/lib/utils'
import { NO_MANAGER, SIGNAL_LABEL, STATUSES, STATUS_LABEL, STATUS_TONE, dropPercentOk, filterRows, managersOf, scoreColor, signalDetail, type HealthFilters } from '@/modules/internal/portfolio_health/rules'
import { portfolioHealthService } from '@/modules/internal/portfolio_health/service'
import type { ClientHealth, PortfolioHealth, PortfolioHealthRow } from '@/modules/internal/portfolio_health/types'
import FiltersMenu from '@/modules/views/components/FiltersMenu.vue'
import { useLocalBarFilters } from '@/modules/views/barFilters'
import { useSession } from '@/stores/session'

const FILTERS = ['status', 'manager']
const DEFAULT_FILTERS = ['status', 'manager']
const FILTER_LABELS: Record<string, Key> = { status: 'ph.col.status', manager: 'ph.col.manager' }

const router = useRouter()
const session = useSession()
const overview = ref<PortfolioHealth | null>(null)
const loadError = ref<string | null>(null)
const filters = ref<HealthFilters>({ status: 'all', manager: 'all', query: '' })
const barFilters = useLocalBarFilters('portfolio-health', FILTERS, DEFAULT_FILTERS, {
  status: () => (filters.value.status = 'all'),
  manager: () => (filters.value.manager = 'all'),
})
const detail = ref<ClientHealth | null>(null)
const detailOpen = ref(false)
const dropPercent = ref('25')
const hubspotTask = ref(false)
const saving = ref(false)
const canManage = computed(() => session.can('internal.growth.manage'))
const rows = computed(() => filterRows(overview.value?.rows ?? [], filters.value))
const total = computed(() => overview.value?.rows.length ?? 0)
const dropValid = computed(() => dropPercentOk(dropPercent.value))
const statusOptions = computed(() => [{ value: 'all', label: t('ph.allStatuses') }, ...STATUSES.map((value) => ({ value, label: t(STATUS_LABEL[value]) }))])
const managerOptions = computed(() => [
  { value: 'all', label: t('ph.allManagers') },
  ...managersOf(overview.value?.rows ?? []).map((manager) => ({ value: manager.id, label: manager.name })),
  { value: NO_MANAGER, label: t('ph.noManager') },
])

/** O nome do filtro no menu de filtros. */
const filterLabel = (filter: string) => t(FILTER_LABELS[filter] as Key)

/** Dólares no formato do idioma. */
const money = (value: string | number) => formatMetric(Number(value), 'currency', locale.value, false, 'USD')

/** A variação da receita com o sinal, ou vazio sem base. */
const changeText = (value: string | null) => (value === null ? '' : `${Number(value) > 0 ? '+' : ''}${Number(value).toLocaleString(locale.value, { maximumFractionDigits: 1 })}%`)

/** Carrega a carteira e a configuração do aviso. */
async function load() {
  loadError.value = null
  try {
    const [found, settings] = await Promise.all([portfolioHealthService.overview(), portfolioHealthService.settings()])
    overview.value = found
    dropPercent.value = String(settings.drop_percent)
    hubspotTask.value = settings.hubspot_task
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Abre o modal com os cinco sinais do cliente. */
async function openSignals(row: PortfolioHealthRow) {
  try {
    detail.value = await portfolioHealthService.client(row.client_id)
    detailOpen.value = true
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}

/** Abre o cadastro do cliente. */
function openClient(clientId: string) {
  void router.push(`/interno/clientes/${clientId}`)
}

/** Grava o limite e a chave da tarefa no HubSpot. */
async function saveSettings() {
  if (!dropValid.value) return
  saving.value = true
  try {
    const saved = await portfolioHealthService.saveSettings({ drop_percent: Number(dropPercent.value), hubspot_task: hubspotTask.value })
    dropPercent.value = String(saved.drop_percent)
    hubspotTask.value = saved.hubspot_task
    toast.success(t('ph.drop.saved'), { description: t('ph.drop.savedText', { n: saved.drop_percent }) })
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    saving.value = false
  }
}

onMounted(load)
</script>

<template>
  <PageHeader :title="t('ph.title')" :sub="t('ph.sub')" />
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatTile framed :label="t('ph.kpi.tracked')" :value="overview ? overview.tracked : '–'" :hint="t('ph.kpi.trackedHint')" />
        <StatTile framed :label="t('ph.kpi.atRisk')" :value="overview ? overview.at_risk : '–'" :tone="overview?.at_risk ? 'text-bad' : undefined" :hint="t('ph.kpi.atRiskHint')" />
        <StatTile framed :label="t('ph.kpi.attention')" :value="overview ? overview.attention : '–'" :hint="t('ph.kpi.attentionHint')" />
        <StatTile framed :label="t('ph.kpi.revenueAtRisk')" :value="overview ? money(overview.revenue_at_risk) : '–'" :hint="t('ph.kpi.revenueAtRiskHint')" />
      </div>
      <section class="overflow-hidden rounded-lg border bg-card">
        <div class="flex flex-wrap items-center gap-3 p-4">
          <div class="relative w-full sm:w-[260px]">
            <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input v-model="filters.query" type="search" :aria-label="t('ph.search')" class="h-9 pl-9" :placeholder="t('ph.search')" />
          </div>
          <Select v-if="barFilters.isShown('status')" v-model="filters.status" :options="statusOptions" :aria-label="t('ph.col.status')" class="h-9 w-full sm:w-[160px]" />
          <Select v-if="barFilters.isShown('manager')" v-model="filters.manager" :options="managerOptions" :aria-label="t('ph.col.manager')" class="h-9 w-full sm:w-[200px]" />
          <FiltersMenu v-model:shown="barFilters.shown.value" :filters="FILTERS" :label="filterLabel" />
        </div>
        <DataTable :min="980">
          <thead>
            <tr>
              <th :class="th">{{ t('ph.col.client') }}</th>
              <th :class="th">{{ t('ph.col.score') }}</th>
              <th :class="th">{{ t('ph.col.status') }}</th>
              <th :class="th">{{ t('ph.col.reason') }}</th>
              <th :class="th">{{ t('ph.col.revenue') }}</th>
              <th :class="th">{{ t('ph.col.lastAccess') }}</th>
              <th :class="th">{{ t('ph.col.manager') }}</th>
              <th :class="th"><span class="sr-only">{{ t('ph.signals') }}</span></th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="8" :loading="overview === null" :empty="rows.length === 0" :icon="HeartPulse" :title="total ? t('ph.noneFiltered') : t('ph.none')" />
            <tr v-for="row in rows" :key="row.client_id" class="hover:bg-muted">
              <td :class="[td, 'font-medium']">
                <button type="button" class="hover:underline" @click="openClient(row.client_id)">{{ row.client_name }}</button>
              </td>
              <td :class="td">
                <span class="flex items-center gap-2">
                  <span class="h-1.5 w-16 overflow-hidden rounded-full bg-muted"><span :class="cn('block h-full', scoreColor(row.score))" :style="{ width: `${row.score}%` }" /></span>
                  <span class="w-7 text-right font-semibold tnum">{{ row.score }}</span>
                </span>
              </td>
              <td :class="td"><Status :tone="STATUS_TONE[row.status]">{{ t(STATUS_LABEL[row.status]) }}</Status></td>
              <td :class="[td, 'text-muted-foreground']">{{ row.main_reason ? t(SIGNAL_LABEL[row.main_reason]) : '—' }}</td>
              <td :class="[td, 'whitespace-nowrap']">
                <span class="tnum">{{ money(row.revenue_30d) }}</span>
                <span v-if="row.revenue_change !== null" :class="cn('ml-2 text-[13px] tnum', Number(row.revenue_change) < 0 ? 'text-bad' : 'text-ok')">{{ changeText(row.revenue_change) }}</span>
              </td>
              <td :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground']">{{ row.last_access ? formatDate(row.last_access, false) : '—' }}</td>
              <td :class="td">{{ row.manager_name ?? t('ph.noManager') }}</td>
              <td :class="[td, 'text-right']"><Button size="sm" variant="outline" class="h-8" @click="openSignals(row)">{{ t('ph.signals') }}</Button></td>
            </tr>
          </tbody>
        </DataTable>
      </section>
      <Card :title="t('ph.drop.title')" :desc="t('ph.drop.desc')" :footer-note="t('ph.drop.note')">
        <div class="grid gap-5 sm:grid-cols-2">
          <Field id="drop-percent" :label="t('ph.drop.label')" :hint="t('ph.drop.hint')" :error="dropValid ? null : t('ph.drop.invalid')">
            <div class="flex items-center gap-2">
              <Input id="drop-percent" v-model="dropPercent" class="w-24 tnum" inputmode="numeric" :disabled="!canManage" />
              <span class="text-[14px] text-muted-foreground">%</span>
            </div>
          </Field>
          <div class="flex items-start justify-between gap-4 rounded-md border p-4">
            <div>
              <div class="text-[14px] font-medium">{{ t('ph.drop.hubspot') }}</div>
              <div class="text-[13px] text-muted-foreground">{{ t('ph.drop.hubspotText') }}</div>
            </div>
            <Switch v-model="hubspotTask" :label="t('ph.drop.hubspot')" :disabled="!canManage" />
          </div>
        </div>
        <template v-if="canManage" #footer>
          <Button :loading="saving" :disabled="!dropValid" @click="saveSettings">{{ t('ph.drop.save') }}</Button>
        </template>
      </Card>
    </template>
  </PageBody>
  <Dialog v-model:open="detailOpen" class="max-w-[560px]" :title="detail ? t('ph.dialog.title', { client: detail.row.client_name, n: detail.row.score }) : ''" :desc="t('ph.dialog.desc')">
    <ul v-if="detail" class="grid gap-3">
      <li v-for="signal in detail.signals" :key="signal.signal" class="grid gap-1 rounded-md border p-3">
        <div class="flex items-center justify-between gap-3 text-[14px]">
          <span class="font-medium">{{ t(SIGNAL_LABEL[signal.signal]) }}</span>
          <span class="text-[12px] text-muted-foreground tnum">{{ t('ph.dialog.weight', { n: signal.weight }) }}</span>
        </div>
        <div class="flex items-center justify-between gap-3">
          <span class="text-[13px] text-muted-foreground">{{ signalDetail(signal) }}</span>
          <span class="flex items-center gap-2">
            <span class="h-1.5 w-16 overflow-hidden rounded-full bg-muted"><span :class="cn('block h-full', scoreColor(signal.points))" :style="{ width: `${signal.points}%` }" /></span>
            <span class="w-7 text-right text-[13px] font-semibold tnum">{{ signal.points }}</span>
          </span>
        </div>
      </li>
    </ul>
    <template #footer>
      <Button variant="outline" @click="detailOpen = false">{{ t('ph.dialog.close') }}</Button>
      <Button v-if="detail" @click="openClient(detail.row.client_id)">{{ t('ph.dialog.openClient') }}</Button>
    </template>
  </Dialog>
</template>
