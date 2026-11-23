<script setup lang="ts">
/** Painel interno: as Empresas cliente, com visões salvas (colunas, filtros e ordem); cada uma
 * abre o detalhe com a equipe e os grupos. */
import OpenLink from '@/components/OpenLink.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { Building, Search } from 'lucide-vue-next'
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
import type { CompanyStatus } from '@/modules/company/types'
import { STATUS_TONE } from '@/modules/internal/clients/rules'
import { clientService } from '@/modules/internal/clients/service'
import type { Client } from '@/modules/internal/clients/types'
import { clientInventoryService, type FilterOption } from '@/modules/internal/inventory/service'
import RevenueStatusBadge from '@/modules/revenue/components/RevenueStatusBadge.vue'
import ColumnsMenu from '@/modules/views/components/ColumnsMenu.vue'
import SavedViewsBar from '@/modules/views/components/SavedViewsBar.vue'
import { cleanFilters, firstValue, parseSort, sortValue } from '@/modules/views/rules'
import type { ViewDefinition, ViewSort } from '@/modules/views/types'

const SEARCH_DELAY_MS = 300
const ALL = 'all'
const STATUSES: CompanyStatus[] = ['active', 'pending', 'inactive', 'banned']
const COLUMNS = ['company', 'owner', 'manager', 'seats', 'status', 'revenue']
const SORTS: ViewSort[] = [
  { key: 'created_at', direction: 'desc' },
  { key: 'created_at', direction: 'asc' },
  { key: 'name', direction: 'asc' },
  { key: 'name', direction: 'desc' },
]
const DEFAULT_VIEW: ViewDefinition = { columns: ['company', 'owner', 'seats', 'status'], filters: {}, sort: SORTS[0] ?? null }

const companies = ref<Client[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)
const searchText = ref('')
const companyStatus = ref(ALL)
const manager = ref(ALL)
const sort = ref(sortValue(SORTS[0] as ViewSort))
const columns = ref<string[]>([...DEFAULT_VIEW.columns])
const staff = ref<FilterOption[]>([])
const staffNames = computed(() => new Map(staff.value.map((person) => [person.value, person.label])))

const current = computed<ViewDefinition>(() => ({
  columns: columns.value,
  filters: cleanFilters({
    query: searchText.value,
    status: companyStatus.value === ALL ? undefined : companyStatus.value,
    account_manager_ids: manager.value === ALL ? [] : [manager.value],
  }),
  sort: parseSort(sort.value),
}))
const filtered = computed(() => Object.keys(current.value.filters).length > 0)

const companiesCall = latestCall()
/** Busca a página atual das Empresas cliente com os filtros e a ordem escolhidos. */
async function load() {
  loadError.value = null
  try {
    const order = parseSort(sort.value)
    const found = await companiesCall(() =>
      clientService.list({
        page: page.value,
        q: searchText.value.trim() || undefined,
        status: companyStatus.value === ALL ? undefined : companyStatus.value,
        manager: manager.value === ALL ? undefined : [manager.value],
        sort: order?.key,
        direction: order?.direction,
      }),
    )
    if (!found) return
    companies.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Carrega a equipe Groone para o filtro e a coluna de responsável, e a primeira página. */
async function start() {
  staff.value = (await clientInventoryService.filterOptions()).staff
  await load()
}
onMounted(start)

/** Volta para a página 1 com os filtros novos, ou recarrega se já estiver nela. */
function firstPage() {
  if (page.value === 1) void load()
  else page.value = 1
}
const searchCompanies = useDebounceFn(firstPage, SEARCH_DELAY_MS)
watch(searchText, () => void searchCompanies())
watch([companyStatus, manager, sort], firstPage)
watch(page, load)

const statusOptions = computed(() => [{ value: ALL, label: t('int.allStatuses') }, ...STATUSES.map((value) => ({ value, label: t(`int.tab.${value}` as Key) }))])
const managerOptions = computed(() => [{ value: ALL, label: t('int.allManagers') }, ...staff.value])
const sortOptions = SORTS.map((option) => ({ value: sortValue(option), label: t(`int.sort.${option.key}.${option.direction}` as Key) }))
/** Diz se a coluna aparece na tabela. */
const shown = (column: string) => columns.value.includes(column)
/** O nome da coluna no menu de colunas. */
const columnLabel = (column: string) => t(`inv.column.${column}` as Key)

/** Põe na tabela as colunas, os filtros e a ordem da visão escolhida. */
function applyView(definition: ViewDefinition) {
  const kept = definition.columns.filter((column) => COLUMNS.includes(column))
  columns.value = kept.length ? kept : [...DEFAULT_VIEW.columns]
  searchText.value = firstValue(definition.filters.query)
  const status = firstValue(definition.filters.status)
  companyStatus.value = (STATUSES as string[]).includes(status) ? status : ALL
  manager.value = firstValue(definition.filters.account_manager_ids) || ALL
  const found = definition.sort && SORTS.find((option) => sortValue(option) === sortValue(definition.sort as ViewSort))
  sort.value = sortValue(found || (SORTS[0] as ViewSort))
}

/** Limpa a busca e os filtros. */
function clearFilters() {
  searchText.value = ''
  companyStatus.value = ALL
  manager.value = ALL
}

/** A página da Empresa, ou a do cliente enquanto ele não criou a Empresa. */
const rowLink = (row: Client) => (row.company ? `/interno/empresas/${row.company.id}` : `/interno/clientes/${row.id}`)
/** O nome de quem cuida do cliente na Groone, quando há. */
const managerName = (row: Client) => (row.profile?.account_manager_id ? staffNames.value.get(row.profile.account_manager_id) : undefined)
</script>

<template>
  <PageHeader :title="t('int.companies')" :sub="t('int.companiesSub')" />
  <PageBody>
    <SavedViewsBar screen="companies" :default-label="t('inv.allCompanies')" :current="current" :defaults="DEFAULT_VIEW" @apply="applyView">
      <div class="relative w-full sm:w-64">
        <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input v-model="searchText" type="search" :aria-label="t('int.companiesSearch')" class="h-9 bg-card pl-9" :placeholder="t('int.companiesSearch')" />
      </div>
      <Select v-model="companyStatus" :options="statusOptions" :aria-label="t('inv.filter.status')" class="h-9 w-full sm:w-44" />
      <Select v-model="manager" :options="managerOptions" :aria-label="t('inv.column.manager')" class="h-9 w-full sm:w-52" />
      <Select v-model="sort" :options="sortOptions" :aria-label="t('views.sort')" class="h-9 w-full sm:w-52" />
      <ColumnsMenu v-model:shown="columns" :columns="COLUMNS" :label="columnLabel" />
    </SavedViewsBar>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="640">
      <thead>
        <tr>
          <th v-if="shown('company')" :class="th">{{ t('int.company') }}</th>
          <th v-if="shown('owner')" :class="th">{{ t('int.owner') }}</th>
          <th v-if="shown('manager')" :class="th">{{ t('inv.column.manager') }}</th>
          <th v-if="shown('seats')" :class="th">{{ t('int.seatsColumn') }}</th>
          <th v-if="shown('status')" :class="th">{{ t('team.status') }}</th>
          <th v-if="shown('revenue')" :class="th">{{ t('int.column.revenue') }}</th>
          <th :class="[th, 'w-px']"><span class="sr-only">{{ t('common.open') }}</span></th>
        </tr>
      </thead>
      <tbody>
        <TableState
          :cols="columns.length + 1"
          :loading="!companies"
          :empty="companies?.length === 0"
          :icon="Building"
          :title="filtered ? t('inv.filteredNone') : t('int.companiesNone')"
          :desc="filtered ? t('inv.filteredNoneSub') : undefined"
        >
          <Button v-if="filtered" variant="outline" size="sm" @click="clearFilters">{{ t('int.clear') }}</Button>
        </TableState>
        <tr v-for="company in companies ?? []" :key="company.id" class="hover:bg-muted">
          <td v-if="shown('company')" :class="td">
            <RouterLink :to="rowLink(company)" class="flex items-center gap-3 font-medium hover:underline">
              <CompanyIcon :name="company.company?.name ?? company.name" :image-url="company.image_url" :size="28" />
              <span>
                {{ company.company?.name ?? company.name }}
                <span v-if="!company.company" class="block text-[13px] font-normal text-muted-foreground">{{ t('int.noCompany') }}</span>
              </span>
            </RouterLink>
          </td>
          <td v-if="shown('owner')" :class="td">
            <template v-if="company.owner">
              <div>{{ company.owner.name }}</div>
              <div class="text-[13px] text-muted-foreground">{{ company.owner.email }}</div>
            </template>
            <span v-else class="text-muted-foreground">{{ t('int.none.dash') }}</span>
          </td>
          <td v-if="shown('manager')" :class="td">
            <span v-if="managerName(company)">{{ managerName(company) }}</span>
            <span v-else class="text-muted-foreground">{{ t('int.none.dash') }}</span>
          </td>
          <td v-if="shown('seats')" :class="[td, 'tnum']">{{ t('int.seatsLabel', { used: company.seats_used, limit: company.seat_limit }) }}</td>
          <td v-if="shown('status')" :class="td">
            <Status :tone="STATUS_TONE[company.status]">{{ t(`int.status.${company.status}`) }}</Status>
          </td>
          <td v-if="shown('revenue')" :class="td"><RevenueStatusBadge :status="company.revenue_status" /></td>
          <td :class="[td, 'text-right']"><OpenLink :to="rowLink(company)" :name="company.company?.name ?? company.name" /></td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="pages > 1" v-model:page="page" :total="total" :pages="pages" />
  </PageBody>
</template>
