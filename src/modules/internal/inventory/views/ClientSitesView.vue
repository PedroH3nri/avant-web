<script setup lang="ts">
/** Painel interno: os sites de todos os clientes, com visões salvas (colunas, filtros e ordem),
 * o cliente, a aprovação, o faturamento, o checklist do mês e o botão de abrir o site. */
import OpenLink from '@/components/OpenLink.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { Globe, Search } from 'lucide-vue-next'
import CompanyIcon from '@/components/CompanyIcon.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Select from '@/components/ui/Select.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, t, type Key } from '@/lib/i18n'
import { latestCall } from '@/lib/latest'
import { td, th } from '@/lib/table'
import { clientInventoryService, type FilterOption } from '@/modules/internal/inventory/service'
import type { ClientSite } from '@/modules/internal/inventory/types'
import RevenueStatusBadge from '@/modules/revenue/components/RevenueStatusBadge.vue'
import { SITE_CATEGORIES, approval, categoryLabel } from '@/modules/sites/rules'
import ColumnsMenu from '@/modules/views/components/ColumnsMenu.vue'
import SavedViewsBar from '@/modules/views/components/SavedViewsBar.vue'
import { cleanFilters, firstValue, parseSort, sortValue } from '@/modules/views/rules'
import type { ViewDefinition, ViewSort } from '@/modules/views/types'
import { useSession } from '@/stores/session'

const SEARCH_DELAY_MS = 300
const ALL = 'all'
const NONE = 'none'
const APPROVALS = ['approved', 'disapproved', 'draft', 'review', 'awaiting_gam']
const APPROVAL_LABELS: Record<string, Key> = {
  approved: 'sites.approval.APPROVED',
  disapproved: 'sites.approval.DISAPPROVED',
  draft: 'sites.approval.DRAFT',
  review: 'sites.approval.review',
  awaiting_gam: 'inv.awaitingGam',
}
const COLUMNS = ['site', 'client', 'approval', 'revenue', 'units', 'checklist', 'category', 'responsible']
const SORTS: ViewSort[] = [
  { key: 'created_at', direction: 'desc' },
  { key: 'created_at', direction: 'asc' },
  { key: 'domain', direction: 'asc' },
  { key: 'domain', direction: 'desc' },
]
const DEFAULT_VIEW: ViewDefinition = { columns: ['site', 'client', 'approval', 'revenue', 'units', 'checklist'], filters: {}, sort: SORTS[0] ?? null }

const session = useSession()
const canSeeChecklists = computed(() => session.can('internal.checklists.view'))
const sites = ref<ClientSite[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)
const searchText = ref('')
const approvalFilter = ref(ALL)
const company = ref(ALL)
const category = ref(ALL)
const sort = ref(sortValue(SORTS[0] as ViewSort))
const columns = ref<string[]>([...DEFAULT_VIEW.columns])
const staff = ref<FilterOption[]>([])
const companies = ref<FilterOption[]>([])
const staffNames = computed(() => new Map(staff.value.map((person) => [person.value, person.label])))
const visibleColumns = computed(() => columns.value.filter((column) => column !== 'checklist' || canSeeChecklists.value))
const filtered = computed(() => Object.keys(current.value.filters).length > 0)

/** O valor do seletor, ou vazio quando ele está em "todos". */
const chosen = (value: string) => (value === ALL ? undefined : value)

const current = computed<ViewDefinition>(() => ({
  columns: columns.value,
  filters: cleanFilters({
    query: searchText.value,
    approval: chosen(approvalFilter.value),
    company_id: chosen(company.value),
    category: chosen(category.value),
  }),
  sort: parseSort(sort.value),
}))

const sitesCall = latestCall()
/** Busca a página atual dos sites com os filtros e a ordem escolhidos. */
async function load() {
  loadError.value = null
  try {
    const order = parseSort(sort.value)
    const found = await sitesCall(() =>
      clientInventoryService.sites({
        page: page.value,
        q: searchText.value.trim() || undefined,
        approval: chosen(approvalFilter.value),
        client_id: chosen(company.value),
        category: chosen(category.value),
        sort: order?.key,
        direction: order?.direction,
      }),
    )
    if (!found) return
    sites.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Carrega as opções dos filtros e a primeira página. */
async function start() {
  const options = await clientInventoryService.filterOptions()
  staff.value = options.staff
  companies.value = options.companies
  await load()
}
onMounted(start)

/** Volta para a página 1 com os filtros novos, ou recarrega se já estiver nela. */
function firstPage() {
  if (page.value === 1) void load()
  else page.value = 1
}
const searchSites = useDebounceFn(firstPage, SEARCH_DELAY_MS)
watch(searchText, () => void searchSites())
watch([approvalFilter, company, category, sort], firstPage)
watch(page, load)

const approvalOptions = computed(() => [{ value: ALL, label: t('inv.allApprovals') }, ...APPROVALS.map((value) => ({ value, label: t(APPROVAL_LABELS[value] as Key) }))])
const companyOptions = computed(() => [{ value: ALL, label: t('int.allClients') }, ...companies.value])
const categoryOptions = computed(() => [
  { value: ALL, label: t('sites.filter.allCategories') },
  { value: NONE, label: t('sites.category.none') },
  ...SITE_CATEGORIES.map((value) => ({ value, label: categoryLabel(value) })),
])
const sortOptions = SORTS.map((option) => ({
  value: sortValue(option),
  label: t((option.key === 'domain' ? `inv.sort.domain.${option.direction}` : `int.sort.${option.key}.${option.direction}`) as Key),
}))
/** Diz se a coluna aparece na tabela. */
const shown = (column: string) => visibleColumns.value.includes(column)
/** O nome da coluna no menu de colunas. */
const columnLabel = (column: string) => t(`inv.column.${column}` as Key)
/** O nome de quem cuida do site; sem nome conhecido, "Outra pessoa". */
const responsibleName = (site: ClientSite) =>
  site.responsible_user_id ? (staffNames.value.get(site.responsible_user_id) ?? t('sites.responsible.someone')) : t('sites.responsible.none')

/** Escolhe a opção do seletor que existe, ou "todos". */
const known = (value: string, options: { value: string }[]) => (options.some((option) => option.value === value) ? value : ALL)

/** Põe na tabela as colunas, os filtros e a ordem da visão escolhida. */
function applyView(definition: ViewDefinition) {
  const kept = definition.columns.filter((column) => COLUMNS.includes(column))
  columns.value = kept.length ? kept : [...DEFAULT_VIEW.columns]
  searchText.value = firstValue(definition.filters.query)
  approvalFilter.value = known(firstValue(definition.filters.approval), approvalOptions.value)
  company.value = firstValue(definition.filters.company_id) || ALL
  category.value = known(firstValue(definition.filters.category), categoryOptions.value)
  const found = definition.sort && SORTS.find((option) => sortValue(option) === sortValue(definition.sort as ViewSort))
  sort.value = sortValue(found || (SORTS[0] as ViewSort))
}

/** Limpa a busca e os filtros. */
function clearFilters() {
  searchText.value = ''
  approvalFilter.value = ALL
  company.value = ALL
  category.value = ALL
}
</script>

<template>
  <PageHeader :title="t('nav.sites')" :sub="t('inv.sitesSub')" />
  <PageBody>
    <SavedViewsBar screen="sites" :default-label="t('inv.allSites')" :current="current" :defaults="DEFAULT_VIEW" @apply="applyView">
      <div class="relative w-full sm:w-64">
        <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input v-model="searchText" type="search" :aria-label="t('inv.sitesSearch')" class="h-9 bg-card pl-9" :placeholder="t('inv.sitesSearch')" />
      </div>
      <Select v-model="approvalFilter" :options="approvalOptions" :aria-label="t('inv.filter.approval')" class="h-9 w-full sm:w-52" />
      <Select v-model="company" :options="companyOptions" :aria-label="t('inv.filter.client')" class="h-9 w-full sm:w-52" />
      <Select v-model="category" :options="categoryOptions" :aria-label="t('inv.filter.category')" class="h-9 w-full sm:w-48" />
      <Select v-model="sort" :options="sortOptions" :aria-label="t('views.sort')" class="h-9 w-full sm:w-52" />
      <ColumnsMenu v-model:shown="columns" :columns="COLUMNS" :label="columnLabel" />
    </SavedViewsBar>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="900">
      <thead>
        <tr>
          <th v-if="shown('site')" :class="th">{{ t('sites.col.site') }}</th>
          <th v-if="shown('client')" :class="th">{{ t('int.column.client') }}</th>
          <th v-if="shown('approval')" :class="th">{{ t('sites.col.approval') }}</th>
          <th v-if="shown('revenue')" :class="th">{{ t('int.column.revenue') }}</th>
          <th v-if="shown('units')" :class="[th, 'text-right']">{{ t('sites.col.units') }}</th>
          <th v-if="shown('checklist')" :class="th">{{ t('check.col.checklist') }}</th>
          <th v-if="shown('category')" :class="th">{{ t('sites.col.category') }}</th>
          <th v-if="shown('responsible')" :class="th">{{ t('inv.column.responsible') }}</th>
          <th :class="[th, 'w-px']"><span class="sr-only">{{ t('common.open') }}</span></th>
        </tr>
      </thead>
      <tbody>
        <TableState
          :cols="visibleColumns.length + 1"
          :loading="!sites"
          :empty="sites?.length === 0"
          :icon="Globe"
          :title="filtered ? t('inv.filteredNone') : t('inv.sitesNone')"
          :desc="filtered ? t('inv.filteredNoneSub') : undefined"
        >
          <Button v-if="filtered" variant="outline" size="sm" @click="clearFilters">{{ t('int.clear') }}</Button>
        </TableState>
        <tr v-for="site in sites ?? []" :key="site.id" class="hover:bg-muted">
          <td v-if="shown('site')" :class="td">
            <RouterLink :to="`/interno/sites/${site.id}`" class="font-medium hover:underline">{{ site.domain }}</RouterLink>
            <div class="truncate text-[13px] text-muted-foreground">{{ site.network_name ?? t('inv.awaitingGam') }}</div>
          </td>
          <td v-if="shown('client')" :class="td">
            <div class="flex items-center gap-2">
              <CompanyIcon :name="site.client.name" :image-url="site.client.image_url" :size="20" />
              <RouterLink :to="`/interno/clientes/${site.client.id}`" class="truncate hover:underline">{{ site.client.name }}</RouterLink>
            </div>
          </td>
          <td v-if="shown('approval')" :class="td">
            <Status :tone="approval(site).tone">{{ approval(site).label }}</Status>
          </td>
          <td v-if="shown('revenue')" :class="td"><RevenueStatusBadge :status="site.revenue_status" /></td>
          <td v-if="shown('units')" :class="[td, 'tnum text-right']">{{ site.ad_units }}</td>
          <td v-if="shown('checklist')" :class="td">
            <RouterLink v-if="site.checklist" :to="`/interno/checklists/${site.checklist.id}`" class="hover:underline">
              <Status v-if="site.checklist.complete" tone="ok">{{ t('check.done') }}</Status>
              <Status v-else tone="ochre">{{ t('check.okCount', { done: site.checklist.done, total: site.checklist.total }) }}</Status>
            </RouterLink>
            <span v-else class="text-[13px] text-muted-foreground">–</span>
          </td>
          <td v-if="shown('category')" :class="[td, !site.category && 'text-muted-foreground']">{{ categoryLabel(site.category) }}</td>
          <td v-if="shown('responsible')" :class="[td, !site.responsible_user_id && 'text-muted-foreground']">{{ responsibleName(site) }}</td>
          <td :class="[td, 'text-right']"><OpenLink :to="`/interno/sites/${site.id}`" :name="site.domain" /></td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
  </PageBody>
</template>
