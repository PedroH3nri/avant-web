<script setup lang="ts">
/** Inventário > NPS dos clientes: a nota geral, a distribuição e cada resposta da pesquisa do painel do cliente. */
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { MessageSquare, Search } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import StatTile from '@/components/StatTile.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { cn } from '@/lib/utils'
import { NPS_GROUP_LABEL, NPS_GROUP_TONE, npsGroup, type NpsGroup } from '@/modules/help/rules'
import { NO_MANAGER, filterAnswers, managersOf, type NpsFilters } from '@/modules/internal/nps/rules'
import { internalNpsService } from '@/modules/internal/nps/service'
import type { NpsOverview } from '@/modules/internal/nps/types'
import FiltersMenu from '@/modules/views/components/FiltersMenu.vue'
import { useLocalBarFilters } from '@/modules/views/barFilters'

const FILTERS = ['group', 'manager']
const DEFAULT_FILTERS = ['group']
const FILTER_LABELS: Record<string, Key> = { group: 'npsint.col.group', manager: 'npsint.col.manager' }
const GROUPS: NpsGroup[] = ['promoter', 'passive', 'detractor']
const GROUP_COLOR: Record<NpsGroup, string> = { promoter: 'bg-ok', passive: 'bg-ochre', detractor: 'bg-bad' }

const router = useRouter()
const overview = ref<NpsOverview | null>(null)
const loadError = ref<string | null>(null)
const days = ref('90')
const filters = ref<NpsFilters>({ group: 'all', manager: 'all', query: '' })
const barFilters = useLocalBarFilters('nps-answers', FILTERS, DEFAULT_FILTERS, {
  group: () => (filters.value.group = 'all'),
  manager: () => (filters.value.manager = 'all'),
})
const answers = computed(() => filterAnswers(overview.value?.answers ?? [], filters.value))
const total = computed(() => overview.value?.answers.length ?? 0)
const parts = computed(() => {
  const found = overview.value
  if (!found) return []
  const counts: Record<NpsGroup, number> = { promoter: found.promoters, passive: found.passives, detractor: found.detractors }
  return GROUPS.map((group) => ({ group, count: counts[group], color: GROUP_COLOR[group] }))
})
const dayOptions = computed(() => ['30', '90', '180', '365'].map((value) => ({ value, label: t('npsint.days', { n: value }) })))
const groupOptions = computed(() => [{ value: 'all', label: t('npsint.allGroups') }, ...GROUPS.map((value) => ({ value, label: t(NPS_GROUP_LABEL[value]) }))])
const managerOptions = computed(() => [
  { value: 'all', label: t('npsint.allManagers') },
  ...managersOf(overview.value?.answers ?? []).map((manager) => ({ value: manager.id, label: manager.name })),
  { value: NO_MANAGER, label: t('npsint.noManager') },
])

/** O nome do filtro no menu de filtros. */
const filterLabel = (filter: string) => t(FILTER_LABELS[filter] as Key)

/** Carrega o NPS do período escolhido. */
async function load() {
  loadError.value = null
  try {
    overview.value = await internalNpsService.overview(Number(days.value))
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Abre a Empresa da resposta. */
function openCompany(companyId: string) {
  void router.push(`/interno/empresas/${companyId}`)
}

watch(days, load)
onMounted(load)
</script>

<template>
  <PageHeader :title="t('npsint.title')" :sub="t('npsint.sub')">
    <template #actions>
      <Select v-model="days" :options="dayOptions" :aria-label="t('npsint.period')" class="h-9 w-[160px]" />
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatTile framed :label="t('npsint.score', { n: days })" :value="overview?.score ?? '–'" :hint="t('npsint.scoreHint')" />
        <StatTile framed :label="t('npsint.answers')" :value="overview ? total : '–'" />
        <StatTile framed :label="t('npsint.detractors')" :value="overview ? overview.detractors : '–'" :tone="overview?.detractors ? 'text-bad' : undefined" :hint="t('npsint.detractorsHint')" />
        <div class="rounded-lg border bg-card p-4">
          <div class="text-[13px] font-medium text-muted-foreground">{{ t('npsint.distribution') }}</div>
          <div class="mt-3 flex h-2.5 overflow-hidden rounded-full bg-muted">
            <span v-for="part in parts" :key="part.group" :class="part.color" :style="{ width: total ? `${(part.count / total) * 100}%` : '0%' }" />
          </div>
          <div class="mt-3 grid gap-1 text-[12px]">
            <span v-for="part in parts" :key="part.group" class="flex items-center gap-2"
              ><span :class="cn('size-2 rounded-full', part.color)" />{{ t(NPS_GROUP_LABEL[part.group]) }}<span class="ml-auto tnum text-muted-foreground">{{ part.count }}</span></span
            >
          </div>
        </div>
      </div>
      <section class="overflow-hidden rounded-lg border bg-card">
        <div class="flex flex-wrap items-center gap-3 p-4">
          <div class="relative w-full sm:w-[260px]">
            <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input v-model="filters.query" type="search" :aria-label="t('npsint.search')" class="h-9 pl-9" :placeholder="t('npsint.search')" />
          </div>
          <Select v-if="barFilters.isShown('group')" v-model="filters.group" :options="groupOptions" :aria-label="t('npsint.col.group')" class="h-9 w-full sm:w-[160px]" />
          <Select v-if="barFilters.isShown('manager')" v-model="filters.manager" :options="managerOptions" :aria-label="t('npsint.col.manager')" class="h-9 w-full sm:w-[200px]" />
          <FiltersMenu v-model:shown="barFilters.shown.value" :filters="FILTERS" :label="filterLabel" />
        </div>
        <DataTable :min="820">
          <thead>
            <tr>
              <th :class="th">{{ t('npsint.col.company') }}</th>
              <th :class="th">{{ t('npsint.col.score') }}</th>
              <th :class="th">{{ t('npsint.col.comment') }}</th>
              <th :class="th">{{ t('npsint.col.manager') }}</th>
              <th :class="th">{{ t('npsint.col.when') }}</th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="5" :loading="overview === null" :empty="answers.length === 0" :icon="MessageSquare" :title="total ? t('npsint.noneFiltered') : t('npsint.none')" />
            <tr v-for="answer in answers" :key="answer.id" class="cursor-pointer hover:bg-muted" tabindex="0" @click="openCompany(answer.company_id)" @keydown.enter="openCompany(answer.company_id)">
              <td :class="[td, 'font-medium']">
                {{ answer.company_name }}
                <div class="text-[13px] font-normal text-muted-foreground">{{ answer.user_name }}</div>
              </td>
              <td :class="td">
                <span class="flex items-center gap-2"
                  ><span class="w-6 text-[16px] font-semibold tnum">{{ answer.score }}</span
                  ><Status :tone="NPS_GROUP_TONE[npsGroup(answer.score)]">{{ t(NPS_GROUP_LABEL[npsGroup(answer.score)]) }}</Status></span
                >
              </td>
              <td :class="[td, 'max-w-[40ch] text-muted-foreground']">{{ answer.comment || '—' }}</td>
              <td :class="td">{{ answer.manager_name ?? t('npsint.noManager') }}</td>
              <td :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground']">{{ formatDate(answer.answered_at, false) }}</td>
            </tr>
          </tbody>
        </DataTable>
      </section>
    </template>
  </PageBody>
</template>
