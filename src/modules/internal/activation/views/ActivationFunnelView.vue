<script setup lang="ts">
/** Crescimento > Funil de ativação: do lead à primeira receita, quanto passa em cada etapa, quanto tempo leva e quem está parado, com a tarefa para o gerente. */
import { computed, onMounted, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import { Funnel, Info, Search } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import StatTile from '@/components/StatTile.vue'
import Avatar from '@/components/ui/Avatar.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import Segmented from '@/components/ui/Segmented.vue'
import Select from '@/components/ui/Select.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { LATE_DAYS, NO_MANAGER, PERIODS, STALLED_STAGES, barWidth, filterStalled, managersOf, percentOf, stageLabel, stalledLabel, taskDescription, type StalledFilters } from '@/modules/internal/activation/rules'
import { activationService } from '@/modules/internal/activation/service'
import type { ActivationFunnel, StalledClient } from '@/modules/internal/activation/types'
import FiltersMenu from '@/modules/views/components/FiltersMenu.vue'
import { useLocalBarFilters } from '@/modules/views/barFilters'
import { useSession } from '@/stores/session'

const FILTERS = ['stage', 'manager']
const DEFAULT_FILTERS = ['stage']
const FILTER_LABELS: Record<string, Key> = { stage: 'af.col.stage', manager: 'af.col.manager' }

const session = useSession()
const period = ref<string>('90')
const funnel = ref<ActivationFunnel | null>(null)
const loadError = ref<string | null>(null)
const busy = ref<string | null>(null)
const filters = ref<StalledFilters>({ stage: 'all', manager: 'all', query: '' })
const barFilters = useLocalBarFilters('activation', FILTERS, DEFAULT_FILTERS, {
  stage: () => (filters.value.stage = 'all'),
  manager: () => (filters.value.manager = 'all'),
})
const canManage = computed(() => session.can('internal.growth.manage'))
const periodOptions = computed(() => PERIODS.map((value) => ({ value, label: t('af.period', { days: value }) })))
const stages = computed(() => funnel.value?.stages ?? [])
const top = computed(() => stages.value[0]?.count ?? 0)
const last = computed(() => stages.value[stages.value.length - 1]?.count ?? 0)
const conversion = computed(() => percentOf(last.value, top.value))
const slowest = computed(() => stages.value.find((stage) => stage.stage === funnel.value?.slowest) ?? null)
const stalled = computed(() => filterStalled(funnel.value?.stalled ?? [], filters.value))
const totalStalled = computed(() => funnel.value?.stalled.length ?? 0)
const stageOptions = computed(() => [{ value: 'all', label: t('af.allStages') }, ...STALLED_STAGES.map((value) => ({ value, label: stalledLabel(value) }))])
const managerOptions = computed(() => [
  { value: 'all', label: t('af.allManagers') },
  ...managersOf(funnel.value?.stalled ?? []).map((manager) => ({ value: manager.id, label: manager.name })),
  { value: NO_MANAGER, label: t('af.noManager') },
])

/** O nome do filtro no menu de filtros. */
const filterLabel = (filter: string) => t(FILTER_LABELS[filter] as Key)

/** Carrega o funil do período escolhido. */
async function load() {
  loadError.value = null
  funnel.value = null
  try {
    funnel.value = await activationService.funnel(Number(period.value))
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** O texto da coluna da direita de cada etapa: quanto passa da etapa de antes e a mediana de dias. */
function stageNote(index: number): string {
  const stage = stages.value[index]
  const previous = stages.value[index - 1]
  if (!stage || !previous) return t('af.start')
  const share = percentOf(stage.count, previous.count)
  const days = stage.median_days == null ? '–' : t('af.days', { n: stage.median_days })
  return t('af.passes', { share: share == null ? '–' : `${share}%`, days })
}

/** Cria a tarefa de suporte do parado para o gerente e marca a linha com ela. */
async function createTask(row: StalledClient) {
  busy.value = row.client_id
  try {
    const created = await activationService.task(row.client_id, taskDescription(row))
    row.task_id = created.task_id
    toast.success(t('af.taskCreated'), { description: `${row.name}: ${stalledLabel(row.stage)}` })
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = null
  }
}

watch(period, load)
onMounted(load)
</script>

<template>
  <PageHeader :title="t('af.title')" :sub="t('af.sub')">
    <template #actions><Segmented v-model="period" :options="periodOptions" :label="t('af.periodLabel')" /></template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else>
      <div class="grid gap-4 sm:grid-cols-3">
        <StatTile framed :label="t('af.kpi.conversion')" :value="conversion == null ? '–' : `${conversion}%`" :hint="t('af.kpi.conversionHint', { n: last, total: top })" />
        <StatTile framed :label="t('af.kpi.days')" :value="funnel ? funnel.total_days : '–'" :hint="t('af.kpi.daysHint')" />
        <StatTile framed :label="t('af.kpi.slowest')" :value="slowest?.median_days != null ? t('af.days', { n: slowest.median_days }) : '–'" :tone="slowest ? 'text-warn' : undefined" :hint="slowest ? stageLabel(slowest.stage) : t('af.kpi.slowestNone')" />
      </div>
      <section class="rounded-lg border bg-card p-4">
        <h2 class="mb-4 text-[14px] font-semibold">{{ t('af.stages') }}</h2>
        <ol v-if="funnel" class="grid gap-4">
          <li v-for="(stage, index) in stages" :key="stage.stage" class="grid gap-1.5 sm:grid-cols-[220px_1fr_170px] sm:items-center sm:gap-4">
            <div class="text-[14px] font-medium">{{ stageLabel(stage.stage) }}</div>
            <div class="h-7 rounded bg-muted">
              <div :class="['flex h-full items-center rounded px-2 text-[12px] font-medium text-primary-foreground', stage.stage === funnel.slowest ? 'bg-warn' : 'bg-foreground']" :style="{ width: `${barWidth(stage, top)}%` }">
                <span class="tnum">{{ stage.count }}</span>
              </div>
            </div>
            <div class="text-[13px] text-muted-foreground tnum">{{ stageNote(index) }}</div>
          </li>
        </ol>
        <p v-else class="text-[13px] text-muted-foreground">{{ t('af.loading') }}</p>
      </section>
      <section class="overflow-hidden rounded-lg border bg-card">
        <div class="flex flex-wrap items-center gap-3 p-4">
          <div class="relative w-full sm:w-[260px]">
            <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input v-model="filters.query" type="search" :aria-label="t('af.search')" class="h-9 pl-9" :placeholder="t('af.search')" />
          </div>
          <Select v-if="barFilters.isShown('stage')" v-model="filters.stage" :options="stageOptions" :aria-label="t('af.col.stage')" class="h-9 w-full sm:w-[260px]" />
          <Select v-if="barFilters.isShown('manager')" v-model="filters.manager" :options="managerOptions" :aria-label="t('af.col.manager')" class="h-9 w-full sm:w-[200px]" />
          <FiltersMenu v-model:shown="barFilters.shown.value" :filters="FILTERS" :label="filterLabel" />
        </div>
        <DataTable :min="760">
          <thead>
            <tr>
              <th :class="th">{{ t('af.col.client') }}</th>
              <th :class="th">{{ t('af.col.stage') }}</th>
              <th :class="[th, 'text-right']">{{ t('af.col.days') }}</th>
              <th :class="th">{{ t('af.col.manager') }}</th>
              <th :class="th"><span class="sr-only">{{ t('af.actions') }}</span></th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="5" :loading="funnel === null" :empty="stalled.length === 0" :icon="Funnel" :title="totalStalled ? t('af.noneFiltered') : t('af.none')" />
            <tr v-for="row in stalled" :key="row.client_id" class="hover:bg-muted">
              <td :class="[td, 'font-medium']"><RouterLink :to="`/interno/clientes/${row.client_id}`" class="hover:underline">{{ row.name }}</RouterLink></td>
              <td :class="td">{{ stalledLabel(row.stage) }}</td>
              <td :class="[td, 'text-right tnum', row.days > LATE_DAYS && 'font-medium text-bad']">{{ row.days }}</td>
              <td :class="td">
                <span v-if="row.manager_name" class="flex items-center gap-2"><Avatar :name="row.manager_name" :size="24" />{{ row.manager_name }}</span>
                <span v-else class="text-muted-foreground">{{ t('af.noManager') }}</span>
              </td>
              <td :class="[td, 'text-right']">
                <RouterLink v-if="row.task_id" :to="`/interno/tarefas/${row.task_id}`" class="inline-flex h-8 items-center rounded-md px-3 text-[13px] font-medium hover:bg-accent">{{ t('af.seeTask') }}</RouterLink>
                <Button v-else-if="canManage" size="sm" variant="outline" class="h-8" :disabled="busy === row.client_id" @click="createTask(row)">{{ t('af.createTask') }}</Button>
              </td>
            </tr>
          </tbody>
        </DataTable>
      </section>
      <p class="flex items-start gap-2 text-[13px] text-muted-foreground"><Info class="mt-0.5 size-4 shrink-0" aria-hidden="true" />{{ t('af.note') }}</p>
    </template>
  </PageBody>
</template>
