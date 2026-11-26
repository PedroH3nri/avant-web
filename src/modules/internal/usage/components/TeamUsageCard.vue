<script setup lang="ts">
/** O card "Uso por pessoa" da página da Empresa: o último acesso e o uso de cada pessoa da equipe, com "Ver detalhes". */
import { computed, ref, watch } from 'vue'
import { Eye, Search, Users } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatAgo, t, type Key } from '@/lib/i18n'
import { latestCall } from '@/lib/latest'
import { td, th } from '@/lib/table'
import { staleAccess } from '@/modules/internal/clients/rules'
import PersonUsageDialog from '@/modules/internal/usage/components/PersonUsageDialog.vue'
import UsagePeriodSwitch from '@/modules/internal/usage/components/UsagePeriodSwitch.vue'
import { areaLabel, formatCount, formatMinutes, peopleMatching, type UsageFilter } from '@/modules/internal/usage/rules'
import { usageAdminService } from '@/modules/internal/usage/service'
import type { PersonUsage, UsagePeriod } from '@/modules/internal/usage/types'
import FiltersMenu from '@/modules/views/components/FiltersMenu.vue'
import { useLocalBarFilters } from '@/modules/views/barFilters'

const props = defineProps<{ companyId: string; companyName: string }>()
const FILTERS = ['usage']
const FILTER_LABELS: Record<string, Key> = { usage: 'usage.filter' }
const USAGE_FILTERS: UsageFilter[] = ['all', 'active', 'idle']
const period = ref<UsagePeriod>(30)
const people = ref<PersonUsage[] | null>(null)
const loadError = ref<string | null>(null)
const query = ref('')
const usageFilter = ref<UsageFilter>('all')
const opened = ref<PersonUsage | null>(null)
const barFilters = useLocalBarFilters('team-usage', FILTERS, FILTERS, { usage: () => (usageFilter.value = 'all') })
const peopleCall = latestCall()

/** Carrega o uso de cada pessoa no período escolhido. */
async function load() {
  loadError.value = null
  try {
    const result = await peopleCall(() => usageAdminService.people(props.companyId, period.value))
    if (result) people.value = result.items
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
watch([() => props.companyId, period], load, { immediate: true })

const rows = computed(() => peopleMatching(people.value ?? [], query.value, usageFilter.value))
const usageOptions = computed(() => USAGE_FILTERS.map((choice) => ({ value: choice, label: t(`usage.filter.${choice}` as Key) })))
const detailsOpen = computed({
  get: () => opened.value !== null,
  set: (value: boolean) => {
    if (!value) opened.value = null
  },
})
/** O nome do filtro no menu de filtros. */
const filterLabel = (filter: string) => t(FILTER_LABELS[filter] as Key)
/** Limpa a busca e o filtro. */
function clearFilters() {
  query.value = ''
  usageFilter.value = 'all'
}
</script>

<template>
  <section class="grid gap-3">
    <div class="flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2 class="text-[20px] font-semibold tracking-[-0.025em]">{{ t('usage.teamTitle') }}</h2>
        <p class="mt-1 max-w-[70ch] text-[14px] text-muted-foreground">{{ t('usage.teamDesc') }}</p>
      </div>
      <UsagePeriodSwitch v-model="period" />
    </div>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else-if="people">
      <div class="flex flex-wrap items-center gap-3">
        <div class="relative w-full sm:w-64">
          <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input v-model="query" :aria-label="t('usage.search')" class="h-9 bg-card pl-9" :placeholder="t('usage.search')" />
        </div>
        <Select v-if="barFilters.isShown('usage')" v-model="usageFilter" :options="usageOptions" :aria-label="t('usage.filter')" class="h-9 w-full sm:w-52" />
        <FiltersMenu v-model:shown="barFilters.shown.value" :filters="FILTERS" :label="filterLabel" />
      </div>
      <DataTable :min="1000">
        <thead>
          <tr>
            <th :class="th">{{ t('int.person') }}</th>
            <th :class="th">{{ t('int.column.last_access') }}</th>
            <th :class="th">{{ t('usage.activeDays') }}</th>
            <th :class="th">{{ t('usage.sessions') }}</th>
            <th :class="th">{{ t('usage.screens') }}</th>
            <th :class="th">{{ t('usage.minutes') }}</th>
            <th :class="th">{{ t('usage.topArea') }}</th>
            <th :class="[th, 'w-px']"><span class="sr-only">{{ t('usage.details') }}</span></th>
          </tr>
        </thead>
        <tbody>
          <TableState :cols="8" :empty="!rows.length" :icon="Users" :title="t('usage.noneTitle')" :desc="t('usage.noneDesc')">
            <Button v-if="query || usageFilter !== 'all'" variant="outline" size="sm" @click="clearFilters">{{ t('int.clear') }}</Button>
          </TableState>
          <tr v-for="person in rows" :key="person.user_id" class="hover:bg-muted">
            <td :class="td">
              <div class="font-medium">{{ person.name }}</div>
              <div class="text-[13px] text-muted-foreground">{{ person.is_owner ? t('usage.ownerRole') : person.email }}</div>
            </td>
            <td :class="[td, 'text-[13px]', staleAccess(person.last_access_at) ? 'text-ochre' : 'text-muted-foreground']">
              {{ person.last_access_at ? formatAgo(person.last_access_at) : t('int.neverAccessed') }}
            </td>
            <td :class="td">
              <span class="tnum">{{ person.totals.active_days }}</span><span class="text-muted-foreground"> {{ t('usage.of', { n: period }) }}</span>
            </td>
            <td :class="[td, 'tnum']">{{ formatCount(person.totals.sessions) }}</td>
            <td :class="[td, 'tnum']">{{ formatCount(person.totals.screens) }}</td>
            <td :class="[td, 'tnum']">{{ formatMinutes(person.totals.active_minutes) }}</td>
            <td :class="[td, 'text-muted-foreground']">{{ areaLabel(person.totals.top_area) }}</td>
            <td :class="[td, 'text-right']">
              <Button size="sm" variant="outline" @click="opened = person"><Eye />{{ t('usage.details') }}</Button>
            </td>
          </tr>
        </tbody>
      </DataTable>
    </template>
    <PersonUsageDialog v-model:open="detailsOpen" :company-id="companyId" :company-name="companyName" :person="opened" />
  </section>
</template>
