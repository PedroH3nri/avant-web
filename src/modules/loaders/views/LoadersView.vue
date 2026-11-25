<script setup lang="ts">
/** Lista dos loaders: no painel do cliente os da Empresa, no interno os de todos os clientes (com a coluna Cliente). */
import OpenLink from '@/components/OpenLink.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { BookOpen, LoaderCircle, Plus, Search } from 'lucide-vue-next'
import InstallGuideDialog from '@/components/InstallGuideDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Select from '@/components/ui/Select.vue'
import TableState from '@/components/ui/TableState.vue'
import InstallCheckCell from '@/modules/install_checks/components/InstallCheckCell.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { ADBLOCK_SHORT, loaderPermission, loadersPath, STYLE_LABEL } from '@/modules/loaders/rules'
import { loaderService } from '@/modules/loaders/service'
import type { Loader } from '@/modules/loaders/types'
import { clientInventoryService, type FilterOption } from '@/modules/internal/inventory/service'
import ColumnsMenu from '@/modules/views/components/ColumnsMenu.vue'
import FiltersMenu from '@/modules/views/components/FiltersMenu.vue'
import ListToolbar from '@/modules/views/components/ListToolbar.vue'
import { useListTable } from '@/modules/views/listTable'
import { sortValue } from '@/modules/views/rules'
import type { ViewSort } from '@/modules/views/types'
import { useSession } from '@/stores/session'

const route = useRoute()
const router = useRouter()
const session = useSession()
const internal = route.meta.internal === true
const service = loaderService(internal)
const base = loadersPath(internal)
const INSTALL_STATES = ['error', 'warning', 'ok', 'unchecked']
const FILTERS = internal ? ['company_id', 'install'] : ['install']
const FILTER_LABELS: Record<string, Key> = { company_id: 'inv.filter.client', install: 'ic.col' }
const COLUMNS = internal ? ['client', 'template', 'adblock', 'tags', 'install', 'updated'] : ['template', 'adblock', 'tags', 'install', 'updated']
const COLUMN_LABELS: Record<string, Key> = {
  client: 'ld.col.client',
  template: 'ld.col.template',
  adblock: 'ld.col.adblock',
  tags: 'ld.col.tags',
  install: 'ic.col',
  updated: 'ld.col.updated',
}
const SORTS: ViewSort[] = [
  { key: 'created_at', direction: 'desc' },
  { key: 'created_at', direction: 'asc' },
  { key: 'name', direction: 'asc' },
  { key: 'name', direction: 'desc' },
]
const table = useListTable(
  { table: 'loaders', filters: FILTERS, defaultFilters: FILTERS, columns: COLUMNS, defaultColumns: COLUMNS, sorts: SORTS, local: !internal },
  () => refilter(),
)
const loaders = ref<Loader[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)
const companies = ref<FilterOption[]>([])

const canManage = computed(() => session.can(loaderPermission(internal, 'manage')))
const columns = computed(() => table.columns.value.length + 2)
const companyOptions = computed(() => [{ value: '', label: t('int.allClients') }, ...companies.value])
const installOptions = computed(() => [{ value: '', label: t('ic.filter.all') }, ...INSTALL_STATES.map((value) => ({ value, label: t(`ic.filter.${value}` as Key) }))])
const sortOptions = SORTS.map((option) => ({ value: sortValue(option), label: t(`int.sort.${option.key}.${option.direction}` as Key) }))
/** O nome do filtro no menu de filtros. */
const filterLabel = (filter: string) => t(FILTER_LABELS[filter] as Key)
/** O nome da coluna no menu de colunas. */
const columnLabel = (column: string) => t(COLUMN_LABELS[column] as Key)

/** Carrega a página dos loaders com a busca. */
async function load() {
  loadError.value = null
  try {
    const found = await service.list({
      page: page.value,
      q: table.searchText.value.trim() || undefined,
      company_id: table.param('company_id'),
      install: table.param('install'),
      order: table.order(),
    })
    if (found.items.length === 0 && page.value > 1 && found.pages > 0) {
      page.value = found.pages
      return
    }
    loaders.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Volta para a primeira página quando a busca muda. */
function refilter() {
  if (page.value === 1) void load()
  else page.value = 1
}

/** Carrega a primeira página e, no interno, os clientes do filtro. */
async function start() {
  void load()
  if (internal) companies.value = (await clientInventoryService.filterOptions()).companies
}

onMounted(start)
watch(page, load)

/** O modelo do loader em uma linha: GroOne com o blur ou Tela cheia com a animação, mais o tempo máximo. */
function templateText(loader: Loader): string {
  const look = loader.template === 'groone' ? t('ld.summary.groone', { n: loader.blur }) : t('ld.summary.solid', { style: t(STYLE_LABEL[loader.style]).toLowerCase() })
  return t('ld.summary.upTo', { look, n: loader.max_seconds })
}

const guideOpen = ref(false)
const guideSteps = computed(() => [t('ld.guideStep1'), t('ld.guideStep2'), t('ld.guideStep3'), t('ld.guideStep4')])
const guideNotes = computed(() => [t('ld.guideNoteEdit'), t('ld.guideNoteOne')])
</script>

<template>
  <PageHeader :title="t('nav.loaders')" :sub="internal ? t('ld.subInternal') : t('ld.sub')">
    <template #actions>
      <Button variant="outline" @click="guideOpen = true"><BookOpen />{{ t('ld.howToInstall') }}</Button>
      <Button v-if="canManage" @click="router.push(`${base}/novo`)"><Plus />{{ t('ld.new') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <ListToolbar :screen="internal ? 'loaders' : null" :default-label="t('ld.allLoaders')" :current="table.current.value" :defaults="table.defaults" @apply="table.apply">
      <div class="relative w-full sm:w-[280px]">
        <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input v-model="table.searchText.value" :aria-label="t('ld.search')" class="h-9 bg-card pl-9" :placeholder="t('ld.searchPlaceholder')" />
      </div>
      <Select v-if="internal && table.bar.isShown('company_id')" v-model="table.values.company_id" :options="companyOptions" :aria-label="t('inv.filter.client')" class="h-9 w-full sm:w-52" />
      <Select v-if="table.bar.isShown('install')" v-model="table.values.install" :options="installOptions" :aria-label="t('ic.col')" class="h-9 w-full sm:w-48" />
      <Select v-model="table.sort.value" :options="sortOptions" :aria-label="t('views.sort')" class="h-9 w-full sm:w-52" />
      <FiltersMenu v-model:shown="table.bar.shown.value" :filters="FILTERS" :label="filterLabel" />
      <ColumnsMenu v-model:shown="table.columns.value" :columns="COLUMNS" :label="columnLabel" />
    </ListToolbar>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="internal ? 1040 : 900">
      <thead>
        <tr>
          <th :class="th">{{ t('ld.col.loader') }}</th>
          <th v-if="table.showsColumn('client')" :class="th">{{ t('ld.col.client') }}</th>
          <th v-if="table.showsColumn('template')" :class="th">{{ t('ld.col.template') }}</th>
          <th v-if="table.showsColumn('adblock')" :class="th">{{ t('ld.col.adblock') }}</th>
          <th v-if="table.showsColumn('tags')" :class="th">{{ t('ld.col.tags') }}</th>
          <th v-if="table.showsColumn('install')" :class="th">{{ t('ic.col') }}</th>
          <th v-if="table.showsColumn('updated')" :class="th">{{ t('ld.col.updated') }}</th>
          <th :class="[th, 'w-px']"><span class="sr-only">{{ t('common.open') }}</span></th>
        </tr>
      </thead>
      <tbody>
        <TableState
          :cols="columns"
          :loading="!loaders"
          :empty="loaders?.length === 0"
          :icon="LoaderCircle"
          :title="table.filtered.value ? t('inv.filteredNone') : undefined"
          :desc="table.filtered.value ? t('inv.filteredNoneSub') : t('ld.empty')"
        >
          <Button v-if="table.filtered.value" variant="outline" size="sm" @click="table.clearFilters">{{ t('int.clear') }}</Button>
        </TableState>
        <tr v-for="loader in loaders ?? []" :key="loader.id" class="hover:bg-muted">
          <td :class="td">
            <button type="button" class="flex items-center gap-3 text-left" @click="router.push(`${base}/${loader.id}`)">
              <span class="grid size-9 shrink-0 place-items-center rounded-md border" :style="{ background: loader.background }" aria-hidden="true">
                <span v-if="loader.template === 'groone'" class="size-4 rounded-full border-2 border-black/15" :style="{ borderTopColor: loader.accent }" />
                <span v-else class="h-1 w-5 rounded-full" :style="{ background: loader.accent }" />
              </span>
              <span class="font-medium hover:underline">{{ loader.name }}</span>
            </button>
          </td>
          <td v-if="table.showsColumn('client')" :class="td">{{ loader.client?.name ?? '—' }}</td>
          <td v-if="table.showsColumn('template')" :class="td">{{ templateText(loader) }}</td>
          <td v-if="table.showsColumn('adblock')" :class="td">
            <span :class="loader.adblock === 'off' ? 'text-muted-foreground' : undefined">{{ t(ADBLOCK_SHORT[loader.adblock]) }}</span>
          </td>
          <td v-if="table.showsColumn('tags')" :class="[td, 'text-[13px]']">
            <template v-if="loader.tags.length">{{ loader.tags.map((tag) => `${tag.domain} · ${tag.name}`).join(', ') }}</template>
            <span v-else class="text-muted-foreground">{{ t('ld.noTags') }}</span>
          </td>
          <td v-if="table.showsColumn('install')" :class="td"><InstallCheckCell target="loader" :id="loader.id" :name="loader.name" :internal="internal" :summary="loader.install" /></td>
          <td v-if="table.showsColumn('updated')" :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground tnum']">{{ formatDate(loader.updated_at) }}</td>
          <td :class="[td, 'text-right']"><OpenLink :to="`${base}/${loader.id}`" :name="loader.name" /></td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
  </PageBody>
  <InstallGuideDialog v-model:open="guideOpen" :title="t('ld.guideTitle')" :desc="t('ld.guideDesc')" :steps="guideSteps" :notes="guideNotes" />
</template>
