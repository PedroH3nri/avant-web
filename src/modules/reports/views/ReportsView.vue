<script setup lang="ts">
/**
 * Relatórios customizados: os fixados no topo e os outros em cartões com a miniatura guardada (ou em
 * lista), com busca, abas, duplicar, fixar, exportar, apagar e os modelos.
 */
import { computed, onMounted, ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { FileChartColumn, LayoutGrid, List, Lock, Pin, Plus, Search } from 'lucide-vue-next'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Input from '@/components/ui/Input.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { latestCall } from '@/lib/latest'
import { errorText, formatDate, lang, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { cn } from '@/lib/utils'
import ReportCard from '@/modules/reports/components/ReportCard.vue'
import ReportMenu from '@/modules/reports/components/ReportMenu.vue'
import ReportThumb from '@/modules/reports/components/ReportThumb.vue'
import { exportUrl, reportService } from '@/modules/reports/service'
import type { MetricCatalog, ReportTemplate, SavedReport } from '@/modules/reports/types'
import { teamService } from '@/modules/team/service'
import { useSession } from '@/stores/session'

type Tab = 'all' | 'mine' | 'shared' | 'templates'
type Layout = 'cards' | 'list'

const SEARCH_DELAY_MS = 300
const LAYOUT_STORAGE = 'avant.reports.layout'
const session = useSession()
const router = useRouter()
const reports = ref<SavedReport[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const tabCounts = ref({ all: 0, mine: 0, shared: 0 })
const templates = ref<ReportTemplate[] | null>(null)
const pinned = ref<SavedReport[]>([])
const catalog = ref<MetricCatalog | null>(null)
const layout = ref<Layout>(storedLayout())
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
const layouts: { key: Layout; label: Key; icon: typeof List }[] = [
  { key: 'cards', label: 'report.layoutCards', icon: LayoutGrid },
  { key: 'list', label: 'report.layoutList', icon: List },
]
/** Os fixados da aba e da busca atuais (a página da API já vem sem eles). */
const shownPinned = computed(() => {
  const term = search.value.trim().toLowerCase()
  return pinned.value.filter((report) => {
    const mine = report.owner_user_id === myId.value
    const inTab = tab.value === 'all' || (tab.value === 'mine' ? mine : !mine)
    return inTab && report.name.toLowerCase().includes(term)
  })
})
const pinnedIds = computed(() => new Set(pinned.value.map((report) => report.id)))
/** Quantos itens cada aba tem (com os fixados, que a página não traz). */
const counts = computed<Record<Tab, number>>(() => {
  const mine = pinned.value.filter((report) => report.owner_user_id === myId.value).length
  return {
    all: tabCounts.value.all + pinned.value.length,
    mine: tabCounts.value.mine + mine,
    shared: tabCounts.value.shared + pinned.value.length - mine,
    templates: templates.value?.length ?? 0,
  }
})
const empty = computed(() => !!reports.value && reports.value.length === 0 && shownPinned.value.length === 0)

/** O jeito de mostrar escolhido da última vez (cartões, se o navegador não guarda). */
function storedLayout(): Layout {
  try {
    return localStorage.getItem(LAYOUT_STORAGE) === 'list' ? 'list' : 'cards'
  } catch {
    return 'cards'
  }
}
watch(layout, (current) => {
  try {
    localStorage.setItem(LAYOUT_STORAGE, current)
  } catch {
    return
  }
})

const reportsCall = latestCall()
/** Carrega a página dos relatórios da aba com a busca; se ela ficou vazia, volta uma. */
async function loadReports() {
  try {
    const found = await reportsCall(() => reportService.list({
      page: page.value,
      scope: tab.value === 'mine' || tab.value === 'shared' ? tab.value : undefined,
      q: search.value.trim() || undefined,
    }))
    if (!found) return
    if (found.items.length === 0 && page.value > 1) {
      page.value = Math.max(1, found.pages)
      return
    }
    reports.value = found.items
    total.value = found.total
    pages.value = found.pages
    tabCounts.value = found.counts
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Volta para a página 1 com a aba ou a busca nova, ou recarrega se já estiver nela. */
function firstPage() {
  if (page.value === 1) void loadReports()
  else page.value = 1
}
const searchReports = useDebounceFn(firstPage, SEARCH_DELAY_MS)
watch(page, loadReports)
watch(tab, (current) => current !== 'templates' && firstPage())
watch(search, () => void searchReports())

/** Carrega os relatórios fixados pela pessoa. */
async function loadPinned() {
  pinned.value = (await reportService.pinned()).items
}

/** Carrega os relatórios, os fixados, os modelos, o catálogo (nomes das métricas) e o nome dos donos. */
async function load() {
  loadError.value = null
  try {
    const [models] = await Promise.all([reportService.templates(), loadReports(), loadPinned()])
    templates.value = models.items
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
  reportService.catalog().then((found) => (catalog.value = found), () => (catalog.value = null))
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

/** Fixa no topo ou solta; no limite de fixados, a API diz por quê. */
async function togglePin(report: SavedReport) {
  try {
    if (pinnedIds.value.has(report.id)) await reportService.unpin(report.id)
    else await reportService.pin(report.id)
    await Promise.all([loadPinned(), loadReports()])
  } catch (error) {
    toast.error(error instanceof ApiError && error.code === 'invalid_input' && error.message ? error.message : errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}

/** Faz uma cópia privada e abre a lista com ela no topo. */
async function duplicate(report: SavedReport) {
  try {
    await reportService.duplicate(report.id)
    if (tab.value === 'shared') tab.value = 'mine'
    else firstPage()
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
    await Promise.all([loadPinned(), loadReports()])
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
  <PageHeader :title="t('nav.customReports')" :sub="t('report.listSub')">
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
      <div v-if="tab !== 'templates'" class="flex w-full items-center gap-2 sm:w-auto">
        <div class="relative flex-1 sm:w-[280px] sm:flex-none">
          <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input v-model="search" :placeholder="t('report.searchName')" :aria-label="t('report.searchName')" class="pl-9" />
        </div>
        <div class="flex rounded-md border bg-background p-0.5" role="group" :aria-label="t('report.layout')">
          <button
            v-for="item in layouts"
            :key="item.key"
            type="button"
            :aria-pressed="layout === item.key"
            :title="t(item.label)"
            :class="cn('flex size-8 items-center justify-center rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', layout === item.key ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground')"
            @click="layout = item.key"
          >
            <component :is="item.icon" class="size-4" /><span class="sr-only">{{ t(item.label) }}</span>
          </button>
        </div>
      </div>
    </div>

    <div v-if="tab === 'templates'" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <section v-for="template in templates ?? []" :key="template.key" class="flex flex-col rounded-lg border bg-card p-5">
        <div><Badge>{{ t(`report.chart.${template.chart_type}` as Key) }}</Badge></div>
        <h2 class="mt-3 flex-1 text-[16px] font-semibold tracking-tight">{{ template.name[lang] }}</h2>
        <Button v-if="canManage" variant="outline" class="mt-4 self-start" @click="router.push(`/relatorios/modelo/${template.key}`)">{{ t('report.useTemplate') }}</Button>
      </section>
    </div>

    <div v-else-if="layout === 'cards' && empty" class="grid justify-items-center gap-2 rounded-lg border bg-card px-6 py-16 text-center">
      <FileChartColumn class="size-6 text-muted-foreground" aria-hidden="true" />
      <p class="text-[14px] font-medium">{{ search ? t('report.noMatch', { term: search }) : t('report.noneTitle') }}</p>
      <p v-if="!search" class="text-[13px] text-muted-foreground">{{ t('report.noneDesc') }}</p>
    </div>

    <div v-else-if="layout === 'cards' && !reports" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true">
      <div v-for="index in 3" :key="index" class="h-[236px] animate-pulse rounded-lg border bg-muted" />
    </div>

    <template v-else>
      <section v-for="block in [{ key: 'pinned', items: shownPinned }, { key: 'others', items: reports ?? [] }]" :key="block.key" class="grid gap-3" :class="block.items.length === 0 && (block.key === 'pinned' || (!!reports && !empty)) ? 'hidden' : undefined">
        <h2 v-if="shownPinned.length" class="text-[12px] font-medium uppercase tracking-wide text-muted-foreground">{{ block.key === 'pinned' ? t('report.pinned') : t('report.others') }}</h2>
        <div v-if="layout === 'cards'" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ReportCard
            v-for="report in block.items"
            :key="report.id"
            :report="report"
            :catalog="catalog"
            :pinned="pinnedIds.has(report.id)"
            :owner="ownerName(report)"
            :owner-avatar="report.owner_user_id === myId ? (session.me?.user.name ?? '') : ownerName(report)"
            :can-duplicate="canManage"
            @edit="router.push(`/relatorios/${report.id}/editar`)"
            @duplicate="duplicate(report)"
            @pin="togglePin(report)"
            @download="(format) => download(report, format)"
            @remove="removing = report"
          />
        </div>
        <DataTable v-else :min="820">
          <thead>
            <tr>
              <th :class="[th, 'w-[120px]']"><span class="sr-only">{{ t('report.chartType') }}</span></th>
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
              v-if="block.key === 'others'"
              :cols="7"
              :loading="!reports && !loadError"
              :empty="empty"
              :icon="FileChartColumn"
              :title="search ? t('report.noMatch', { term: search }) : t('report.noneTitle')"
              :desc="search ? undefined : t('report.noneDesc')"
            />
            <tr v-for="report in block.items" :key="report.id" class="hover:bg-muted">
              <td :class="[td, 'py-1.5']"><div class="h-10 w-[104px] overflow-hidden rounded border bg-muted/60"><ReportThumb :report="report" :catalog="catalog" compact /></div></td>
              <td :class="td">
                <RouterLink :to="`/relatorios/${report.id}`" class="font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{{ report.name }}</RouterLink>
                <Pin v-if="pinnedIds.has(report.id)" class="ml-1.5 inline size-3.5 text-muted-foreground" :aria-label="t('report.pinned')" />
              </td>
              <td :class="td"><Badge>{{ t(`report.chart.${report.chart_type}` as Key) }}</Badge></td>
              <td :class="[td, 'whitespace-nowrap']">{{ ownerName(report) }}</td>
              <td :class="[td, 'whitespace-nowrap text-muted-foreground']">
                <Lock v-if="report.visibility === 'private'" class="mr-1.5 inline size-3.5" aria-hidden="true" />{{ t(`report.visibility.${report.visibility}` as Key) }}
              </td>
              <td :class="[td, 'whitespace-nowrap text-muted-foreground']">{{ formatDate(report.updated_at) }}</td>
              <td :class="td">
                <ReportMenu :report="report" :pinned="pinnedIds.has(report.id)" :can-duplicate="canManage" with-open
                  @open="router.push(`/relatorios/${report.id}`)"
                  @edit="router.push(`/relatorios/${report.id}/editar`)"
                  @duplicate="duplicate(report)"
                  @pin="togglePin(report)"
                  @download="(format) => download(report, format)"
                  @remove="removing = report"
                />
              </td>
            </tr>
          </tbody>
        </DataTable>
        <Pagination v-if="block.key === 'others' && reports" v-model:page="page" :total="total" :pages="pages" />
      </section>
    </template>
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
