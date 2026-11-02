<script setup lang="ts">
/** Alertas da equipe Groone: a lista com a regra, onde olha, quem recebe e o estado de cada um. */
import { computed, onMounted, ref, watch } from 'vue'
import { DropdownMenuRoot, DropdownMenuSeparator, DropdownMenuTrigger } from 'reka-ui'
import { MoreHorizontal, Plus } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Avatar from '@/components/ui/Avatar.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, locale, pick, t, tn } from '@/lib/i18n'
import { formatMetric, toNumber } from '@/lib/metrics'
import { td, th } from '@/lib/table'
import AlertDialog from '@/modules/alerts/components/AlertDialog.vue'
import AlertEventsDialog from '@/modules/alerts/components/AlertEventsDialog.vue'
import { alertState, conditionText, muteUntil } from '@/modules/alerts/rules'
import { alertService } from '@/modules/alerts/service'
import type { Alert } from '@/modules/alerts/types'
import { clientService } from '@/modules/internal/clients/service'
import { staffService } from '@/modules/internal/staff/service'
import { reportService } from '@/modules/reports/service'
import type { MetricDef } from '@/modules/reports/types'
import { useSession } from '@/stores/session'

const MAX_AVATARS = 3
const STATE_TONE = { on: 'ok', firing: 'bad', muted: 'neutral' } as const

const session = useSession()
const alerts = ref<Alert[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)
const metrics = ref<MetricDef[]>([])
const clients = ref<{ value: string; label: string }[]>([])
const people = ref<{ value: string; label: string }[]>([])
const editing = ref<Alert | null>(null)
const formOpen = ref(false)
const showing = ref<Alert | null>(null)
const eventsOpen = ref(false)
const removing = ref<Alert | null>(null)
const busy = ref(false)

const canManage = computed(() => session.can('alerts.manage'))
const userId = computed(() => session.me?.user.id ?? '')
const metricByKey = computed(() => new Map(metrics.value.map((metric) => [metric.key, metric])))
const clientNames = computed(() => new Map(clients.value.map((client) => [client.value, client.label])))
const peopleNames = computed(() => new Map(people.value.map((person) => [person.value, person.label])))

/** Carrega a página dos alertas. */
async function load() {
  loadError.value = null
  try {
    const found = await alertService.list({ page: page.value })
    if (found.items.length === 0 && page.value > 1) {
      page.value = Math.max(1, found.pages)
      return
    }
    alerts.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Carrega as métricas do Ad Manager, os clientes e a equipe Groone para o formulário e a lista. */
async function loadOptions() {
  /** A lista que a pessoa não pode ver fica vazia. */
  const denied = () => Promise.reject(new Error('sem permissão'))
  const [catalog, clientList, staff] = await Promise.allSettled([
    reportService.catalog(),
    session.can('internal.clients.view') ? clientService.options() : denied(),
    staffService.options(),
  ])
  if (catalog.status === 'fulfilled') metrics.value = catalog.value.metrics.filter((metric) => metric.sources.includes('gam'))
  if (clientList.status === 'fulfilled') clients.value = clientList.value.items.map((client) => ({ value: client.id, label: client.name }))
  if (staff.status === 'fulfilled') people.value = staff.value.items.map((member) => ({ value: member.user.id, label: member.user.name || member.user.email }))
}

onMounted(() => {
  void load()
  void loadOptions()
})
watch(page, load)

/** Valor da métrica do alerta no formato dela, na moeda de quem olha. */
function valueText(alert: Alert | null, value: string | null): string {
  const metric = alert ? metricByKey.value.get(alert.definition.query.metrics[0] ?? '') : undefined
  return formatMetric(toNumber(value), metric?.format ?? 'number', locale.value, false, session.displayCurrency)
}

/** A regra do alerta em uma frase. */
function ruleText(alert: Alert): string {
  const key = alert.definition.query.metrics[0] ?? ''
  const metric = metricByKey.value.get(key)
  return conditionText(alert.definition, metric ? pick(metric.label) : key, (value) => valueText(alert, String(value)))
}

/** Onde o alerta olha: um cliente ou todos, e como se separa. */
function scopeText(alert: Alert): string {
  const { query } = alert.definition
  const clientId = query.filters.find((item) => item.field === 'client')?.values[0]
  const where = clientId ? (clientNames.value.get(clientId) ?? '—') : t('alerts.allClients')
  const group = query.dimensions[0]
  return group ? `${where} · ${t(`alerts.group.${group}` as Parameters<typeof t>[0])}` : where
}

/** Nomes de quem recebe, na ordem salva. */
const recipientNames = (alert: Alert) => alert.recipient_user_ids.map((id) => peopleNames.value.get(id) ?? '?')

/** Abre o formulário, vazio ou com o alerta escolhido. */
function openForm(alert: Alert | null) {
  editing.value = alert
  formOpen.value = true
}

/** Abre o histórico de disparos do alerta. */
function openEvents(alert: Alert) {
  showing.value = alert
  eventsOpen.value = true
}

/** Silencia o alerta pelos dias dados, ou tira o silêncio com zero. */
async function mute(alert: Alert, days: number) {
  try {
    await alertService.mute(alert.id, days > 0 ? muteUntil(days) : null)
    toast.success(days > 0 ? t('alerts.muted') : t('alerts.unmuted'))
    await load()
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}

const removeOpen = computed({
  get: () => removing.value !== null,
  set: (value) => {
    if (!value) removing.value = null
  },
})

/** Apaga o alerta escolhido. */
async function confirmRemove() {
  const current = removing.value
  if (!current) return
  busy.value = true
  try {
    await alertService.remove(current.id)
    await load()
    removing.value = null
    toast.success(t('alerts.deleted'))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <PageHeader :title="t('nav.alerts')" :sub="t('alerts.sub')">
    <template v-if="canManage" #actions>
      <Button @click="openForm(null)"><Plus />{{ t('alerts.new') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="860">
      <thead>
        <tr>
          <th :class="th">{{ t('alerts.col.alert') }}</th>
          <th :class="th">{{ t('alerts.col.scope') }}</th>
          <th :class="th">{{ t('alerts.col.recipients') }}</th>
          <th :class="th">{{ t('alerts.col.last') }}</th>
          <th :class="th">{{ t('alerts.col.state') }}</th>
          <th :class="th"><span class="sr-only">{{ t('alerts.actions') }}</span></th>
        </tr>
      </thead>
      <tbody>
        <TableState :cols="6" :loading="!alerts" :empty="alerts?.length === 0" :desc="t('alerts.empty')" />
        <tr v-for="alert in alerts ?? []" :key="alert.id">
          <td :class="td">
            <div class="font-medium">{{ alert.name }}</div>
            <div class="text-[13px] text-muted-foreground">{{ ruleText(alert) }}</div>
          </td>
          <td :class="[td, 'text-[13px]']">{{ scopeText(alert) }}</td>
          <td :class="td">
            <div class="flex items-center gap-2" :title="recipientNames(alert).join(', ')">
              <div class="flex -space-x-2">
                <Avatar v-for="name in recipientNames(alert).slice(0, MAX_AVATARS)" :key="name" :name="name" :size="24" class="ring-2 ring-background" />
              </div>
              <span class="text-[13px] text-muted-foreground">{{ tn('alerts.people', alert.recipient_user_ids.length) }}</span>
            </div>
          </td>
          <td :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground']">
            <template v-if="alert.last_event">
              <div class="text-foreground">{{ alert.last_event.subject_label || t('alerts.preview.total') }}</div>
              {{ formatDate(alert.last_event.fired_at) }}
            </template>
            <template v-else>{{ t('alerts.never') }}</template>
          </td>
          <td :class="td">
            <Status :tone="STATE_TONE[alertState(alert)]">{{ t(`alerts.state.${alertState(alert)}`) }}</Status>
          </td>
          <td :class="[td, 'text-right']">
            <DropdownMenuRoot>
              <DropdownMenuTrigger as-child>
                <Button variant="ghost" size="icon" class="size-8" :aria-label="t('alerts.actions')"><MoreHorizontal /></Button>
              </DropdownMenuTrigger>
              <MenuContent align="end" class="w-48">
                <MenuItem @select="openEvents(alert)">{{ t('alerts.showEvents') }}</MenuItem>
                <template v-if="alert.editable">
                  <MenuItem @select="openForm(alert)">{{ t('common.edit') }}</MenuItem>
                  <MenuItem v-if="alertState(alert) === 'muted'" @select="mute(alert, 0)">{{ t('alerts.unmute') }}</MenuItem>
                  <template v-else>
                    <MenuItem @select="mute(alert, 1)">{{ t('alerts.mute.day') }}</MenuItem>
                    <MenuItem @select="mute(alert, 7)">{{ t('alerts.mute.week') }}</MenuItem>
                  </template>
                  <DropdownMenuSeparator class="-mx-1 my-1 h-px bg-border" />
                  <MenuItem danger @select="removing = alert">{{ t('common.delete') }}</MenuItem>
                </template>
              </MenuContent>
            </DropdownMenuRoot>
          </td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
  </PageBody>

  <AlertDialog
    v-model:open="formOpen"
    :alert="editing"
    :metrics="metrics"
    :clients="clients"
    :people="people"
    :user-id="userId"
    :currency="session.displayCurrency"
    @saved="load"
  />
  <AlertEventsDialog v-model:open="eventsOpen" :alert="showing" :value-text="(value) => valueText(showing, value)" />
  <ConfirmDialog
    v-model:open="removeOpen"
    :title="t('alerts.deleteTitle', { name: removing?.name ?? '' })"
    :desc="t('alerts.deleteDesc')"
    :action="t('common.delete')"
    :busy="busy"
    @confirm="confirmRemove"
  />
</template>
