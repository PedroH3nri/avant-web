<script setup lang="ts">
/** Relatórios salvos: os que a pessoa vê, com busca, abas, duplicar, exportar, apagar e os modelos. */
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { DropdownMenuRoot, DropdownMenuSeparator, DropdownMenuTrigger } from 'reka-ui'
import { FileChartColumn, Lock, MoreHorizontal, Plus, Search } from 'lucide-vue-next'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, lang, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { cn } from '@/lib/utils'
import { exportUrl, reportService } from '@/modules/reports/service'
import type { ReportTemplate, SavedReport } from '@/modules/reports/types'
import { teamService } from '@/modules/team/service'
import { useSession } from '@/stores/session'

type Tab = 'all' | 'mine' | 'shared' | 'templates'

const session = useSession()
const router = useRouter()
const reports = ref<SavedReport[] | null>(null)
const templates = ref<ReportTemplate[] | null>(null)
const owners = ref<Record<string, string>>({})
const loadError = ref<string | null>(null)
const tab = ref<Tab>('all')
const search = ref('')
const removing = ref<SavedReport | null>(null)
const busy = ref(false)
const canManage = computed(() => session.can('reports.manage'))
const myId = computed(() => session.me?.user.id ?? '')
const tabs: { key: Tab; label: Key }[] = [
  { key: 'all', label: 'report.tabAll' },
  { key: 'mine', label: 'report.tabMine' },
  { key: 'shared', label: 'report.tabShared' },
  { key: 'templates', label: 'report.tabTemplates' },
]
/** Quantos itens cada aba tem. */
const counts = computed<Record<Tab, number>>(() => {
  const all = reports.value ?? []
  const mine = all.filter((report) => report.owner_user_id === myId.value).length
  return { all: all.length, mine, shared: all.length - mine, templates: templates.value?.length ?? 0 }
})
const visible = computed(() => {
  const term = search.value.trim().toLowerCase()
  return (reports.value ?? [])
    .filter((report) => tab.value === 'all' || (tab.value === 'mine') === (report.owner_user_id === myId.value))
    .filter((report) => report.name.toLowerCase().includes(term))
})

/** Carrega os relatórios, os modelos e, para quem vê a equipe, o nome dos donos. */
async function load() {
  loadError.value = null
  try {
    const [list, models] = await Promise.all([reportService.list(), reportService.templates()])
    reports.value = list.items
    templates.value = models.items
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
  if (!session.can('team.view')) return
  try {
    const members = await teamService.memberOptions()
    owners.value = Object.fromEntries(members.items.map((member) => [member.user.id, member.user.name]))
  } catch {
    owners.value = {}
  }
}

/** Nome do dono: "Você", o nome pela equipe ou "Outra pessoa". */
const ownerName = (report: SavedReport) =>
  report.owner_user_id === myId.value ? t('report.you') : (owners.value[report.owner_user_id] ?? t('report.someoneElse'))

/** Faz uma cópia privada e abre a lista com ela no topo. */
async function duplicate(report: SavedReport) {
  try {
    const copy = await reportService.duplicate(report.id)
    reports.value = [copy, ...(reports.value ?? [])]
    toast.success(t('report.duplicated'))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}

/** Apaga o relatório confirmado. */
async function remove() {
  const report = removing.value
  if (!report) return
  busy.value = true
  try {
    await reportService.remove(report.id)
    reports.value = (reports.value ?? []).filter((item) => item.id !== report.id)
    removing.value = null
    toast.success(t('report.deleted'))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

/** Baixa o relatório no formato escolhido. */
function download(report: SavedReport, format: 'csv' | 'xlsx') {
  window.location.assign(exportUrl(report.id, format, lang.value))
}

onMounted(load)
</script>

<template>
  <PageHeader :title="t('nav.reports')" :sub="t('report.listSub')">
    <template v-if="canManage" #actions>
      <Button @click="router.push('/relatorios/novo')"><Plus />{{ t('report.create') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div class="flex flex-wrap gap-1 rounded-md border bg-background p-0.5" role="tablist" :aria-label="t('report.filter')">
        <button
          v-for="item in tabs"
          :key="item.key"
          role="tab"
          :aria-selected="tab === item.key"
          :class="cn('h-8 rounded-[4px] px-3 text-[13px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', tab === item.key ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground')"
          @click="tab = item.key"
        >
          {{ t(item.label) }}<span class="ml-1.5 tnum text-muted-foreground">{{ counts[item.key] }}</span>
        </button>
      </div>
      <div v-if="tab !== 'templates'" class="relative w-full sm:w-[280px]">
        <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input v-model="search" :placeholder="t('report.searchName')" :aria-label="t('report.searchName')" class="pl-9" />
      </div>
    </div>

    <div v-if="tab === 'templates'" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <section v-for="template in templates ?? []" :key="template.key" class="flex flex-col rounded-lg border bg-card p-5">
        <div><Badge>{{ t(`report.chart.${template.chart_type}` as Key) }}</Badge></div>
        <h2 class="mt-3 flex-1 text-[16px] font-semibold tracking-tight">{{ template.name[lang] }}</h2>
        <Button v-if="canManage" variant="outline" class="mt-4 self-start" @click="router.push(`/relatorios/modelo/${template.key}`)">{{ t('report.useTemplate') }}</Button>
      </section>
    </div>

    <DataTable v-else :min="760">
      <thead>
        <tr>
          <th :class="th">{{ t('report.name') }}</th>
          <th :class="th">{{ t('report.chartType') }}</th>
          <th :class="th">{{ t('report.owner') }}</th>
          <th :class="th">{{ t('report.whoSees') }}</th>
          <th :class="th">{{ t('report.updated') }}</th>
          <th :class="[th, 'w-12']"><span class="sr-only">{{ t('report.actions') }}</span></th>
        </tr>
      </thead>
      <tbody>
        <TableState
          :cols="6"
          :loading="!reports && !loadError"
          :empty="!!reports && visible.length === 0"
          :icon="FileChartColumn"
          :title="search ? t('report.noMatch', { term: search }) : t('report.noneTitle')"
          :desc="search ? undefined : t('report.noneDesc')"
        />
        <tr v-for="report in visible" :key="report.id" class="hover:bg-muted">
          <td :class="td">
            <RouterLink :to="`/relatorios/${report.id}`" class="font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{{ report.name }}</RouterLink>
          </td>
          <td :class="td"><Badge>{{ t(`report.chart.${report.chart_type}` as Key) }}</Badge></td>
          <td :class="[td, 'whitespace-nowrap']">{{ ownerName(report) }}</td>
          <td :class="[td, 'whitespace-nowrap text-muted-foreground']">
            <Lock v-if="report.visibility === 'private'" class="mr-1.5 inline size-3.5" aria-hidden="true" />{{ t(`report.visibility.${report.visibility}` as Key) }}
          </td>
          <td :class="[td, 'whitespace-nowrap text-muted-foreground']">{{ formatDate(report.updated_at) }}</td>
          <td :class="td">
            <DropdownMenuRoot>
              <DropdownMenuTrigger as-child>
                <Button variant="ghost" size="icon" :aria-label="t('report.actionsOf', { name: report.name })"><MoreHorizontal /></Button>
              </DropdownMenuTrigger>
              <MenuContent align="end">
                <MenuItem @select="router.push(`/relatorios/${report.id}`)">{{ t('report.open') }}</MenuItem>
                <MenuItem v-if="canManage" @select="duplicate(report)">{{ t('report.duplicate') }}</MenuItem>
                <MenuItem @select="download(report, 'csv')">{{ t('report.exportCsv') }}</MenuItem>
                <MenuItem @select="download(report, 'xlsx')">{{ t('report.exportXlsx') }}</MenuItem>
                <template v-if="report.editable">
                  <DropdownMenuSeparator class="-mx-1 my-1 h-px bg-border" />
                  <MenuItem danger @select="removing = report">{{ t('common.delete') }}</MenuItem>
                </template>
              </MenuContent>
            </DropdownMenuRoot>
          </td>
        </tr>
      </tbody>
    </DataTable>
  </PageBody>
  <ConfirmDialog
    :open="!!removing"
    :title="t('report.deleteTitle', { name: removing?.name ?? '' })"
    :desc="t('report.deleteDesc')"
    :action="t('common.delete')"
    :busy="busy"
    @update:open="(open) => !open && (removing = null)"
    @confirm="remove"
  />
</template>
