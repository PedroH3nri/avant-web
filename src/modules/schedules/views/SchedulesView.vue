<script setup lang="ts">
/** Envios agendados da equipe Groone: o que vai, quando, para quantas pessoas e o próximo envio. */
import { computed, onMounted, ref, watch } from 'vue'
import { DropdownMenuRoot, DropdownMenuSeparator, DropdownMenuTrigger } from 'reka-ui'
import { MoreHorizontal, Plus } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, t, tn } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { dashboardService } from '@/modules/dashboards/service'
import { staffService } from '@/modules/internal/staff/service'
import { reportService } from '@/modules/reports/service'
import ScheduleDialog from '@/modules/schedules/components/ScheduleDialog.vue'
import { whenText } from '@/modules/schedules/rules'
import { scheduleService } from '@/modules/schedules/service'
import type { Schedule } from '@/modules/schedules/types'
import { useSession } from '@/stores/session'

type Option = { value: string; label: string }

const MAX_OPTION_PAGES = 10

const session = useSession()
const schedules = ref<Schedule[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)
const reports = ref<Option[]>([])
const dashboards = ref<Option[]>([])
const people = ref<Option[]>([])
const editing = ref<Schedule | null>(null)
const formOpen = ref(false)
const removing = ref<Schedule | null>(null)
const busy = ref(false)

const canManage = computed(() => session.can('schedules.manage'))
const userId = computed(() => session.me?.user.id ?? '')

/** Carrega a página dos envios. */
async function load() {
  loadError.value = null
  try {
    const found = await scheduleService.list({ page: page.value })
    if (found.items.length === 0 && page.value > 1) {
      page.value = Math.max(1, found.pages)
      return
    }
    schedules.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Junta as páginas de uma lista (até ``MAX_OPTION_PAGES``) como opções do seletor. */
async function allOptions(fetchPage: (page: number) => Promise<{ items: { id: string; name: string }[]; pages: number }>): Promise<Option[]> {
  const options: Option[] = []
  for (let current = 1; current <= MAX_OPTION_PAGES; current += 1) {
    const found = await fetchPage(current)
    options.push(...found.items.map((item) => ({ value: item.id, label: item.name })))
    if (current >= found.pages) break
  }
  return options
}

/** Carrega os relatórios (os fixados primeiro, que a lista não traz), os dashboards e a equipe Groone. */
async function loadOptions() {
  const [pinned, reportList, dashboardList, staff] = await Promise.allSettled([
    reportService.pinned(),
    allOptions((current) => reportService.list({ page: current })),
    allOptions((current) => dashboardService.list({ page: current })),
    staffService.options(),
  ])
  const pinnedOptions = pinned.status === 'fulfilled' ? pinned.value.items.map((report) => ({ value: report.id, label: report.name })) : []
  if (reportList.status === 'fulfilled') reports.value = [...pinnedOptions, ...reportList.value]
  if (dashboardList.status === 'fulfilled') dashboards.value = dashboardList.value
  if (staff.status === 'fulfilled') people.value = staff.value.items.map((member) => ({ value: member.user.id, label: member.user.name || member.user.email }))
}

onMounted(() => {
  void load()
  void loadOptions()
})
watch(page, load)

/** Abre o formulário, vazio ou com o envio escolhido. */
function openForm(schedule: Schedule | null) {
  editing.value = schedule
  formOpen.value = true
}

/** Pausa o envio ou volta a mandar. */
async function setPaused(schedule: Schedule, paused: boolean) {
  try {
    await scheduleService.pause(schedule.id, paused)
    toast.success(paused ? t('schedules.pausedToast') : t('schedules.resumedToast'))
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

/** Apaga o envio escolhido. */
async function confirmRemove() {
  const current = removing.value
  if (!current) return
  busy.value = true
  try {
    await scheduleService.remove(current.id)
    await load()
    removing.value = null
    toast.success(t('schedules.deleted'))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

/** O que o envio manda: tipo e nome. */
const targetText = (schedule: Schedule) => `${t(`schedules.target.${schedule.target}`)} · ${schedule.target_name ?? t('schedules.targetGone')}`
</script>

<template>
  <PageHeader :title="t('nav.schedules')" :sub="t('schedules.sub')">
    <template v-if="canManage" #actions>
      <Button @click="openForm(null)"><Plus />{{ t('schedules.new') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="820">
      <thead>
        <tr>
          <th :class="th">{{ t('schedules.col.schedule') }}</th>
          <th :class="th">{{ t('schedules.col.when') }}</th>
          <th :class="th">{{ t('schedules.col.to') }}</th>
          <th :class="th">{{ t('schedules.col.format') }}</th>
          <th :class="th">{{ t('schedules.col.next') }}</th>
          <th :class="th"><span class="sr-only">{{ t('schedules.actions') }}</span></th>
        </tr>
      </thead>
      <tbody>
        <TableState :cols="6" :loading="!schedules" :empty="schedules?.length === 0" :desc="t('schedules.empty')" />
        <tr v-for="schedule in schedules ?? []" :key="schedule.id">
          <td :class="td">
            <div class="font-medium">{{ schedule.name }}</div>
            <div class="text-[13px] text-muted-foreground">{{ targetText(schedule) }}</div>
          </td>
          <td :class="[td, 'text-[13px]']">{{ whenText(schedule) }}</td>
          <td :class="[td, 'whitespace-nowrap tnum']">{{ tn('alerts.people', schedule.recipient_user_ids.length) }}</td>
          <td :class="td"><Badge>{{ t('schedules.format') }}</Badge></td>
          <td :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground']">
            <Status v-if="schedule.paused" tone="neutral">{{ t('schedules.paused') }}</Status>
            <div v-else class="text-foreground">{{ formatDate(schedule.next_run_at) }}</div>
            <div v-if="schedule.last_sent_at">{{ t('schedules.lastSent', { date: formatDate(schedule.last_sent_at) }) }}</div>
          </td>
          <td :class="[td, 'text-right']">
            <DropdownMenuRoot v-if="schedule.editable">
              <DropdownMenuTrigger as-child>
                <Button variant="ghost" size="icon" class="size-8" :aria-label="t('schedules.actions')"><MoreHorizontal /></Button>
              </DropdownMenuTrigger>
              <MenuContent align="end" class="w-48">
                <MenuItem @select="openForm(schedule)">{{ t('common.edit') }}</MenuItem>
                <MenuItem v-if="schedule.paused" @select="setPaused(schedule, false)">{{ t('schedules.resume') }}</MenuItem>
                <MenuItem v-else @select="setPaused(schedule, true)">{{ t('schedules.pause') }}</MenuItem>
                <DropdownMenuSeparator class="-mx-1 my-1 h-px bg-border" />
                <MenuItem danger @select="removing = schedule">{{ t('common.delete') }}</MenuItem>
              </MenuContent>
            </DropdownMenuRoot>
          </td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
  </PageBody>

  <ScheduleDialog v-model:open="formOpen" :schedule="editing" :reports="reports" :dashboards="dashboards" :people="people" :user-id="userId" @saved="load" />
  <ConfirmDialog
    v-model:open="removeOpen"
    :title="t('schedules.deleteTitle', { name: removing?.name ?? '' })"
    :desc="t('schedules.deleteDesc')"
    :action="t('common.delete')"
    :busy="busy"
    @confirm="confirmRemove"
  />
</template>
