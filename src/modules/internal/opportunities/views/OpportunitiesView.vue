<script setup lang="ts">
/** Crescimento > Oportunidades de receita: o que mudar em cada site para ganhar mais, com o ganho estimado no mês, o detalhe num modal e a tarefa para o gerente. */
import { computed, onMounted, ref } from 'vue'
import { toast } from 'vue-sonner'
import { Info, Search, Sparkles, X } from 'lucide-vue-next'
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
import { errorText, locale, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import OpportunityDialog from '@/modules/internal/opportunities/components/OpportunityDialog.vue'
import { CONFIDENCES, CONFIDENCE_TONE, NO_MANAGER, RULES, filterOpportunities, managersOf, money, ruleLabel, taskDescription, whyText, type OpportunityFilters } from '@/modules/internal/opportunities/rules'
import { opportunityService } from '@/modules/internal/opportunities/service'
import type { Opportunity, OpportunityOverview } from '@/modules/internal/opportunities/types'
import FiltersMenu from '@/modules/views/components/FiltersMenu.vue'
import { useLocalBarFilters } from '@/modules/views/barFilters'
import { useSession } from '@/stores/session'

const FILTERS = ['rule', 'confidence', 'manager']
const DEFAULT_FILTERS = ['rule', 'confidence']
const FILTER_LABELS: Record<string, Key> = { rule: 'op.col.rule', confidence: 'op.col.confidence', manager: 'op.col.manager' }

const session = useSession()
const overview = ref<OpportunityOverview | null>(null)
const loadError = ref<string | null>(null)
const filters = ref<OpportunityFilters>({ rule: 'all', confidence: 'all', manager: 'all', query: '' })
const barFilters = useLocalBarFilters('opportunities', FILTERS, DEFAULT_FILTERS, {
  rule: () => (filters.value.rule = 'all'),
  confidence: () => (filters.value.confidence = 'all'),
  manager: () => (filters.value.manager = 'all'),
})
const selected = ref<Opportunity | null>(null)
const detailOpen = ref(false)
const busy = ref(false)
const canManage = computed(() => session.can('internal.growth.manage'))
const rows = computed(() => filterOpportunities(overview.value?.rows ?? [], filters.value))
const total = computed(() => overview.value?.rows.length ?? 0)
const month = computed(() => new Date().toLocaleDateString(locale.value, { month: 'long' }))
const ruleOptions = computed(() => [{ value: 'all', label: t('op.allRules') }, ...RULES.map((value) => ({ value, label: ruleLabel(value) }))])
const confidenceOptions = computed(() => [{ value: 'all', label: t('op.allConfidences') }, ...CONFIDENCES.map((value) => ({ value, label: t(`op.confidence.${value}`) }))])
const managerOptions = computed(() => [
  { value: 'all', label: t('op.allManagers') },
  ...managersOf(overview.value?.rows ?? []).map((manager) => ({ value: manager.id, label: manager.name })),
  { value: NO_MANAGER, label: t('op.noManager') },
])

/** O nome do filtro no menu de filtros. */
const filterLabel = (filter: string) => t(FILTER_LABELS[filter] as Key)

/** Carrega as oportunidades abertas e os números do topo. */
async function load() {
  loadError.value = null
  try {
    overview.value = await opportunityService.overview()
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Abre o modal com o porquê, a estimativa e a tarefa. */
function openDetail(row: Opportunity) {
  selected.value = row
  detailOpen.value = true
}

/** Tira a oportunidade da lista e desconta o ganho dela dos números do topo. */
function drop(row: Opportunity) {
  if (!overview.value) return
  overview.value.rows = overview.value.rows.filter((other) => other.id !== row.id)
  overview.value.gain = String(Number(overview.value.gain) - Number(row.gain))
  overview.value.groone_gain = String(Number(overview.value.groone_gain) - Number(row.groone_gain))
}

/** Dispensa a oportunidade; ela volta se a evidência mudar. */
async function dismiss(row: Opportunity) {
  try {
    await opportunityService.dismiss(row.id)
    drop(row)
    toast(t('op.dismissed'), { description: t('op.dismissedHint') })
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}

/** Cria a tarefa de suporte para o gerente e tira a oportunidade da lista. */
async function createTask() {
  const current = selected.value
  if (!current) return
  busy.value = true
  try {
    await opportunityService.task(current.id, taskDescription(current))
    drop(current)
    detailOpen.value = false
    toast.success(t('op.taskCreated'), { description: `${ruleLabel(current.rule)} · ${current.domain}` })
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

onMounted(load)
</script>

<template>
  <PageHeader :title="t('op.title')" :sub="t('op.sub')" />
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else>
      <div class="grid gap-4 sm:grid-cols-3">
        <StatTile framed :label="t('op.kpi.gain')" :value="overview ? money(overview.gain) : '–'" tone="text-ok" :hint="t('op.kpi.gainHint', { n: total })" />
        <StatTile framed :label="t('op.kpi.done', { month })" :value="overview ? overview.done : '–'" :hint="t('op.kpi.doneHint', { gain: money(overview?.done_gain) })" />
        <StatTile framed :label="t('op.kpi.groone')" :value="overview ? money(overview.groone_gain) : '–'" :hint="t('op.kpi.grooneHint')" />
      </div>
      <section class="overflow-hidden rounded-lg border bg-card">
        <div class="flex flex-wrap items-center gap-3 p-4">
          <div class="relative w-full sm:w-[260px]">
            <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input v-model="filters.query" type="search" :aria-label="t('op.search')" class="h-9 pl-9" :placeholder="t('op.search')" />
          </div>
          <Select v-if="barFilters.isShown('rule')" v-model="filters.rule" :options="ruleOptions" :aria-label="t('op.col.rule')" class="h-9 w-full sm:w-[220px]" />
          <Select v-if="barFilters.isShown('confidence')" v-model="filters.confidence" :options="confidenceOptions" :aria-label="t('op.col.confidence')" class="h-9 w-full sm:w-[160px]" />
          <Select v-if="barFilters.isShown('manager')" v-model="filters.manager" :options="managerOptions" :aria-label="t('op.col.manager')" class="h-9 w-full sm:w-[200px]" />
          <FiltersMenu v-model:shown="barFilters.shown.value" :filters="FILTERS" :label="filterLabel" />
        </div>
        <DataTable :min="900">
          <thead>
            <tr>
              <th :class="th">{{ t('op.col.site') }}</th>
              <th :class="th">{{ t('op.col.rule') }}</th>
              <th :class="th">{{ t('op.why') }}</th>
              <th :class="[th, 'text-right']">{{ t('op.col.gain') }}</th>
              <th :class="th">{{ t('op.col.confidence') }}</th>
              <th :class="th"><span class="sr-only">{{ t('op.actions') }}</span></th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="6" :loading="overview === null" :empty="rows.length === 0" :icon="Sparkles" :title="total ? t('op.noneFiltered') : t('op.none')" />
            <tr v-for="row in rows" :key="row.id" class="hover:bg-muted">
              <td :class="td">
                <RouterLink :to="`/interno/sites/${row.site_id}`" class="font-medium hover:underline">{{ row.domain }}</RouterLink>
                <div class="text-[13px] text-muted-foreground">{{ row.client_name }}</div>
              </td>
              <td :class="td"><span class="inline-flex items-center gap-1.5"><Sparkles class="size-3.5 text-muted-foreground" aria-hidden="true" />{{ ruleLabel(row.rule) }}</span></td>
              <td :class="[td, 'max-w-[340px] truncate text-muted-foreground']" :title="whyText(row)">{{ whyText(row) }}</td>
              <td :class="[td, 'text-right font-medium tnum']">{{ money(row.gain) }}</td>
              <td :class="td"><Status :tone="CONFIDENCE_TONE[row.confidence]">{{ t(`op.confidence.${row.confidence}`) }}</Status></td>
              <td :class="[td, 'text-right']">
                <div class="flex justify-end gap-1">
                  <Button size="sm" variant="outline" class="h-8" @click="openDetail(row)">{{ t('op.details') }}</Button>
                  <Button v-if="canManage" size="sm" variant="ghost" class="size-8 p-0" :aria-label="t('op.dismiss')" @click="dismiss(row)"><X class="size-4" /></Button>
                </div>
              </td>
            </tr>
          </tbody>
        </DataTable>
      </section>
      <p class="flex items-start gap-2 text-[13px] text-muted-foreground"><Info class="mt-0.5 size-4 shrink-0" aria-hidden="true" />{{ t('op.note') }}</p>
    </template>
  </PageBody>
  <OpportunityDialog v-model:open="detailOpen" :opportunity="selected" :can-manage="canManage" :busy="busy" @task="createTask" />
</template>
