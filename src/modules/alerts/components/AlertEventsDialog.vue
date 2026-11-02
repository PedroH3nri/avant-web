<script setup lang="ts">
/** Histórico de disparos de um alerta: dia, onde, valor, base e se já voltou ao normal. */
import { ref, watch } from 'vue'
import Dialog from '@/components/ui/Dialog.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import LoadError from '@/components/LoadError.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { alertService } from '@/modules/alerts/service'
import type { Alert, AlertEvent } from '@/modules/alerts/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ alert: Alert | null; valueText: (value: string | null) => string }>()

const events = ref<AlertEvent[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)

/** Carrega a página dos disparos do alerta aberto. */
async function load() {
  if (!props.alert) return
  loadError.value = null
  try {
    const found = await alertService.events(props.alert.id, { page: page.value })
    events.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

watch(open, (value) => {
  if (!value) return
  events.value = null
  page.value = 1
  void load()
})
watch(page, load)
</script>

<template>
  <Dialog v-model:open="open" :title="t('alerts.events.title', { name: alert?.name ?? '' })" :desc="t('alerts.events.desc')" class="max-w-[720px]">
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else>
      <DataTable :min="560">
        <thead>
          <tr>
            <th :class="th">{{ t('alerts.events.day') }}</th>
            <th :class="th">{{ t('alerts.events.subject') }}</th>
            <th :class="[th, 'text-right']">{{ t('alerts.events.value') }}</th>
            <th :class="[th, 'text-right']">{{ t('alerts.events.baseline') }}</th>
            <th :class="th">{{ t('alerts.events.state') }}</th>
          </tr>
        </thead>
        <tbody>
          <TableState :cols="5" :loading="!events" :empty="events?.length === 0" :desc="t('alerts.events.empty')" :rows="4" />
          <tr v-for="event in events ?? []" :key="event.id">
            <td :class="[td, 'whitespace-nowrap']">{{ formatDate(`${event.day}T12:00:00Z`, false) }}</td>
            <td :class="[td, 'font-medium']">{{ event.subject_label || t('alerts.preview.total') }}</td>
            <td :class="[td, 'tnum text-right']">{{ valueText(event.value) }}</td>
            <td :class="[td, 'tnum text-right text-muted-foreground']">{{ event.baseline === null ? '—' : valueText(event.baseline) }}</td>
            <td :class="td">
              <Status :tone="event.resolved_at ? 'neutral' : 'bad'">{{ event.resolved_at ? t('alerts.events.closed') : t('alerts.events.open') }}</Status>
            </td>
          </tr>
        </tbody>
      </DataTable>
      <Pagination v-model:page="page" :total="total" :pages="pages" />
    </template>
  </Dialog>
</template>
