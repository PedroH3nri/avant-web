<script setup lang="ts">
/** A aba Clientes da régua: quem passou por ela, o gerente, onde está, se abriu e a situação. */
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Search, Users } from 'lucide-vue-next'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { formatDate, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { filterMembers, MEMBER_LABEL, MEMBER_STATES, MEMBER_TONE, memberState } from '@/modules/internal/nurture/rules'
import type { NurtureMember } from '@/modules/internal/nurture/types'
import FiltersMenu from '@/modules/views/components/FiltersMenu.vue'
import { useLocalBarFilters } from '@/modules/views/barFilters'

const props = defineProps<{ members: NurtureMember[] | null }>()
const FILTERS = ['state', 'manager', 'opened']
const FILTER_LABELS: Record<string, Key> = { state: 'nurture.col.state', manager: 'nurture.col.manager', opened: 'nurture.col.opened' }
const router = useRouter()
const query = ref('')
const state = ref('all')
const manager = ref('all')
const opened = ref('all')
const barFilters = useLocalBarFilters('nurture-members', FILTERS, ['state'], {
  state: () => (state.value = 'all'),
  manager: () => (manager.value = 'all'),
  opened: () => (opened.value = 'all'),
})
const rows = computed(() => filterMembers(props.members ?? [], state.value, manager.value, opened.value, query.value))
const stateOptions = computed(() => [{ value: 'all', label: t('nurture.allStates') }, ...MEMBER_STATES.map((value) => ({ value, label: t(MEMBER_LABEL[value]) }))])
const managerOptions = computed(() => {
  const names = [...new Set((props.members ?? []).map((member) => member.manager_name ?? ''))].sort()
  return [{ value: 'all', label: t('nurture.anyManager') }, ...names.map((name) => ({ value: name, label: name || t('nurture.noManager') }))]
})
const openedOptions = computed(() => [
  { value: 'all', label: t('nurture.allOpened') },
  { value: 'true', label: t('nurture.openedYes') },
  { value: 'false', label: t('nurture.openedNo') },
])

/** O nome do filtro no menu de filtros. */
const filterLabel = (filter: string) => t(FILTER_LABELS[filter] as Key)

/** Onde o cliente está na régua: quantos e-mails saíram e quando foi o último. */
function where(member: NurtureMember) {
  if (!member.last_sent_at) return t('nurture.noneSent', { total: member.total_emails })
  return t('nurture.sentOf', { n: member.sent, total: member.total_emails, when: formatDate(member.last_sent_at, false) })
}

/** Abre a página do cliente. */
function openClient(clientId: string) {
  void router.push(`/interno/clientes/${clientId}`)
}
</script>

<template>
  <section class="overflow-hidden rounded-lg border bg-card">
    <div class="flex flex-wrap items-center gap-3 p-4">
      <div class="relative w-full sm:w-[260px]">
        <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input v-model="query" type="search" :aria-label="t('nurture.searchClient')" class="h-9 pl-9" :placeholder="t('nurture.searchClient')" />
      </div>
      <Select v-if="barFilters.isShown('state')" v-model="state" :options="stateOptions" :aria-label="t('nurture.col.state')" class="h-9 w-full sm:w-[170px]" />
      <Select v-if="barFilters.isShown('manager')" v-model="manager" :options="managerOptions" :aria-label="t('nurture.col.manager')" class="h-9 w-full sm:w-[200px]" />
      <Select v-if="barFilters.isShown('opened')" v-model="opened" :options="openedOptions" :aria-label="t('nurture.col.opened')" class="h-9 w-full sm:w-[160px]" />
      <FiltersMenu v-model:shown="barFilters.shown.value" :filters="FILTERS" :label="filterLabel" />
    </div>
    <DataTable :min="760">
      <thead>
        <tr>
          <th :class="th">{{ t('nurture.col.client') }}</th>
          <th :class="th">{{ t('nurture.col.manager') }}</th>
          <th :class="th">{{ t('nurture.col.entered') }}</th>
          <th :class="th">{{ t('nurture.col.where') }}</th>
          <th :class="th">{{ t('nurture.col.opened') }}</th>
          <th :class="th">{{ t('nurture.col.state') }}</th>
        </tr>
      </thead>
      <tbody>
        <TableState :cols="6" :loading="members === null" :empty="rows.length === 0" :icon="Users" :title="members?.length ? t('nurture.noMembersFiltered') : t('nurture.noMembers')" />
        <tr v-for="member in rows" :key="member.enrollment_id" class="cursor-pointer hover:bg-muted" tabindex="0" @click="openClient(member.client_id)" @keydown.enter="openClient(member.client_id)">
          <td :class="[td, 'font-medium']">{{ member.client_name }}</td>
          <td :class="[td, 'text-muted-foreground']">{{ member.manager_name ?? t('nurture.noManager') }}</td>
          <td :class="[td, 'tnum']">{{ formatDate(member.entered_at, false) }}</td>
          <td :class="td">{{ where(member) }}</td>
          <td :class="[td, 'text-muted-foreground']">{{ member.opened ? t('nurture.openedYes') : t('nurture.openedNo') }}</td>
          <td :class="td">
            <Status :tone="MEMBER_TONE[memberState(member)]">{{ t(MEMBER_LABEL[memberState(member)]) }}</Status>
          </td>
        </tr>
      </tbody>
    </DataTable>
  </section>
</template>
