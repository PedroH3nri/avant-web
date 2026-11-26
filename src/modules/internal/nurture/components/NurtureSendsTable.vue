<script setup lang="ts">
/** A aba Envios da régua: quando, para quem, qual e-mail e a situação no Resend. */
import { computed, ref } from 'vue'
import { Mail, Search } from 'lucide-vue-next'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { formatDate, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { filterSends, SEND_LABEL, SEND_STATUSES, SEND_TONE } from '@/modules/internal/nurture/rules'
import type { NurtureSend } from '@/modules/internal/nurture/types'
import FiltersMenu from '@/modules/views/components/FiltersMenu.vue'
import { useLocalBarFilters } from '@/modules/views/barFilters'

const props = defineProps<{ sends: NurtureSend[] | null }>()
const FILTERS = ['state', 'email']
const FILTER_LABELS: Record<string, Key> = { state: 'nurture.col.state', email: 'nurture.col.email' }
const query = ref('')
const state = ref('all')
const email = ref('all')
const barFilters = useLocalBarFilters('nurture-sends', FILTERS, ['state'], {
  state: () => (state.value = 'all'),
  email: () => (email.value = 'all'),
})
const rows = computed(() => filterSends(props.sends ?? [], state.value, email.value, query.value))
const stateOptions = computed(() => [{ value: 'all', label: t('nurture.allStates') }, ...SEND_STATUSES.map((value) => ({ value, label: t(SEND_LABEL[value]) }))])
const emailOptions = computed(() => {
  const positions = [...new Set((props.sends ?? []).map((send) => send.email_index))].sort()
  return [{ value: 'all', label: t('nurture.allEmails') }, ...positions.map((position) => ({ value: String(position), label: t('nurture.emailN', { n: position + 1 }) }))]
})

/** O nome do filtro no menu de filtros. */
const filterLabel = (filter: string) => t(FILTER_LABELS[filter] as Key)
</script>

<template>
  <section class="overflow-hidden rounded-lg border bg-card">
    <div class="flex flex-wrap items-center gap-3 p-4">
      <div class="relative w-full sm:w-[280px]">
        <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input v-model="query" type="search" :aria-label="t('nurture.searchSend')" class="h-9 pl-9" :placeholder="t('nurture.searchSend')" />
      </div>
      <Select v-if="barFilters.isShown('state')" v-model="state" :options="stateOptions" :aria-label="t('nurture.col.state')" class="h-9 w-full sm:w-[170px]" />
      <Select v-if="barFilters.isShown('email')" v-model="email" :options="emailOptions" :aria-label="t('nurture.col.email')" class="h-9 w-full sm:w-[160px]" />
      <FiltersMenu v-model:shown="barFilters.shown.value" :filters="FILTERS" :label="filterLabel" />
    </div>
    <DataTable :min="760">
      <thead>
        <tr>
          <th :class="th">{{ t('nurture.col.when') }}</th>
          <th :class="th">{{ t('nurture.col.client') }}</th>
          <th :class="th">{{ t('nurture.col.to') }}</th>
          <th :class="th">{{ t('nurture.col.email') }}</th>
          <th :class="th">{{ t('nurture.col.state') }}</th>
        </tr>
      </thead>
      <tbody>
        <TableState :cols="5" :loading="sends === null" :empty="rows.length === 0" :icon="Mail" :title="sends?.length ? t('nurture.noSendsFiltered') : t('nurture.noSends')" />
        <tr v-for="send in rows" :key="send.id" class="hover:bg-muted">
          <td :class="[td, 'whitespace-nowrap tnum']">{{ formatDate(send.sent_at ?? send.created_at) }}</td>
          <td :class="[td, 'font-medium']">{{ send.client_name }}</td>
          <td :class="[td, 'text-muted-foreground']">{{ send.to_email }}</td>
          <td :class="td">{{ t('nurture.emailLang', { n: send.email_index + 1, lang: send.locale.toUpperCase() }) }}</td>
          <td :class="td">
            <Status :tone="SEND_TONE[send.status]">{{ t(SEND_LABEL[send.status]) }}</Status>
          </td>
        </tr>
      </tbody>
    </DataTable>
  </section>
</template>
