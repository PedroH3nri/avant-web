<script setup lang="ts">
/** Painel interno: as networks do GAM de todos os clientes, com visões salvas (colunas, filtros e
 * ordem), o cliente, a situação, o faturamento e a confirmação das que vieram do MCM. */
import OpenLink from '@/components/OpenLink.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { Network as NetworkIcon, Search } from 'lucide-vue-next'
import CompanyIcon from '@/components/CompanyIcon.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
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
import type { ClientNetwork } from '@/modules/internal/inventory/types'
import NetworkReviewActions from '@/modules/internal/inventory/components/NetworkReviewActions.vue'
import { networkName, networkTone, statusKey } from '@/modules/networks/rules'
import RevenueStatusBadge from '@/modules/revenue/components/RevenueStatusBadge.vue'
import ColumnsMenu from '@/modules/views/components/ColumnsMenu.vue'
import FiltersMenu from '@/modules/views/components/FiltersMenu.vue'
import SavedViewsBar from '@/modules/views/components/SavedViewsBar.vue'
import { useBarFilters } from '@/modules/views/barFilters'
import { cleanFilters, firstValue, parseSort, sortValue } from '@/modules/views/rules'
import type { ViewDefinition, ViewSort } from '@/modules/views/types'
import { useSession } from '@/stores/session'

const SEARCH_DELAY_MS = 300
const ALL = 'all'
const YES = 'yes'
const STATUSES = ['pending', 'connected', 'error', 'disconnected']
const DELEGATIONS = ['manage_inventory', 'manage_account']
const COLUMNS = ['network', 'client', 'delegation', 'status', 'revenue', 'sites']
const SORTS: ViewSort[] = [
  { key: 'created_at', direction: 'desc' },
  { key: 'created_at', direction: 'asc' },
  { key: 'name', direction: 'asc' },
  { key: 'name', direction: 'desc' },
]
const FILTERS = ['status', 'delegation', 'company_id', 'account_manager_ids', 'awaiting']
const DEFAULT_FILTERS = ['status', 'company_id', 'awaiting']
const FILTER_LABELS: Record<string, Key> = {
  status: 'inv.filter.status',
  delegation: 'netd.delegation',
  company_id: 'inv.filter.client',
  account_manager_ids: 'inv.column.manager',
  awaiting: 'inv.awaitingOnly',
}
const DEFAULT_VIEW: ViewDefinition = { columns: [...COLUMNS], filters: {}, sort: SORTS[0] ?? null, shown_filters: DEFAULT_FILTERS }

const session = useSession()
const canAssign = computed(() => session.can('internal.networks.assign'))
const networks = ref<ClientNetwork[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)
const searchText = ref('')
const awaitingOnly = ref(false)
const networkStatus = ref(ALL)
const delegation = ref(ALL)
const company = ref(ALL)
const manager = ref(ALL)
const barFilters = useBarFilters(FILTERS, DEFAULT_FILTERS, {
  status: () => (networkStatus.value = ALL),
  delegation: () => (delegation.value = ALL),
  company_id: () => (company.value = ALL),
  account_manager_ids: () => (manager.value = ALL),
  awaiting: () => (awaitingOnly.value = false),
})
const sort = ref(sortValue(SORTS[0] as ViewSort))
const columns = ref<string[]>([...DEFAULT_VIEW.columns])
const staff = ref<FilterOption[]>([])
const companies = ref<FilterOption[]>([])

/** O valor do seletor, ou vazio quando ele está em "todos". */
const chosen = (value: string) => (value === ALL ? undefined : value)

const current = computed<ViewDefinition>(() => ({
  columns: columns.value,
  filters: cleanFilters({
    query: searchText.value,
    status: chosen(networkStatus.value),
    delegation: chosen(delegation.value),
    awaiting: awaitingOnly.value ? YES : undefined,
    company_id: chosen(company.value),
    account_manager_ids: manager.value === ALL ? [] : [manager.value],
  }),
  sort: parseSort(sort.value),
  shown_filters: barFilters.shown.value,
}))
const filtered = computed(() => Object.keys(current.value.filters).length > 0)

const networksCall = latestCall()
/** Busca a página atual das networks com os filtros e a ordem escolhidos. */
async function load() {
  loadError.value = null
  try {
    const order = parseSort(sort.value)
    const found = await networksCall(() =>
      clientInventoryService.networks({
        page: page.value,
        q: searchText.value.trim() || undefined,
        awaiting_confirmation: awaitingOnly.value || undefined,
        status: chosen(networkStatus.value),
        delegation: chosen(delegation.value),
        client_id: chosen(company.value),
        manager: manager.value === ALL ? undefined : [manager.value],
        sort: order?.key,
        direction: order?.direction,
      }),
    )
    if (!found) return
    networks.value = found.items
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
const searchNetworks = useDebounceFn(firstPage, SEARCH_DELAY_MS)
watch(searchText, () => void searchNetworks())
watch([awaitingOnly, networkStatus, delegation, company, manager, sort], firstPage)
watch(page, load)

const statusOptions = computed(() => [{ value: ALL, label: t('int.allStatuses') }, ...STATUSES.map((value) => ({ value, label: t(`net.status.${value}` as Key) }))])
const delegationOptions = computed(() => [{ value: ALL, label: t('inv.allDelegations') }, ...DELEGATIONS.map((value) => ({ value, label: t(`netd.delegation.${value}` as Key) }))])
const companyOptions = computed(() => [{ value: ALL, label: t('int.allClients') }, ...companies.value])
const managerOptions = computed(() => [{ value: ALL, label: t('int.allManagers') }, ...staff.value])
const sortOptions = SORTS.map((option) => ({ value: sortValue(option), label: t(`int.sort.${option.key}.${option.direction}` as Key) }))
/** O nome do filtro no menu de filtros. */
const filterLabel = (filter: string) => t(FILTER_LABELS[filter] as Key)
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
  networkStatus.value = STATUSES.includes(status) ? status : ALL
  const kind = firstValue(definition.filters.delegation)
  delegation.value = DELEGATIONS.includes(kind) ? kind : ALL
  awaitingOnly.value = firstValue(definition.filters.awaiting) === YES
  company.value = firstValue(definition.filters.company_id) || ALL
  manager.value = firstValue(definition.filters.account_manager_ids) || ALL
  barFilters.apply(definition)
  const found = definition.sort && SORTS.find((option) => sortValue(option) === sortValue(definition.sort as ViewSort))
  sort.value = sortValue(found || (SORTS[0] as ViewSort))
}

/** Limpa a busca e os filtros. */
function clearFilters() {
  searchText.value = ''
  awaitingOnly.value = false
  networkStatus.value = ALL
  delegation.value = ALL
  company.value = ALL
  manager.value = ALL
}
</script>

<template>
  <PageHeader :title="t('nav.networks')" :sub="t('inv.networksSub')" />
  <PageBody>
    <SavedViewsBar screen="networks" :default-label="t('inv.allNetworks')" :current="current" :defaults="DEFAULT_VIEW" @apply="applyView">
      <div class="relative w-full sm:w-64">
        <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input v-model="searchText" type="search" :aria-label="t('inv.networksSearch')" class="h-9 bg-card pl-9" :placeholder="t('inv.networksSearch')" />
      </div>
      <Select v-if="barFilters.isShown('status')" v-model="networkStatus" :options="statusOptions" :aria-label="t('inv.filter.status')" class="h-9 w-full sm:w-48" />
      <Select v-if="barFilters.isShown('delegation')" v-model="delegation" :options="delegationOptions" :aria-label="t('netd.delegation')" class="h-9 w-full sm:w-48" />
      <Select v-if="barFilters.isShown('company_id')" v-model="company" :options="companyOptions" :aria-label="t('inv.filter.client')" class="h-9 w-full sm:w-52" />
      <Select v-if="barFilters.isShown('account_manager_ids')" v-model="manager" :options="managerOptions" :aria-label="t('inv.column.manager')" class="h-9 w-full sm:w-52" />
      <Select v-model="sort" :options="sortOptions" :aria-label="t('views.sort')" class="h-9 w-full sm:w-52" />
      <FiltersMenu v-model:shown="barFilters.shown.value" :filters="FILTERS" :label="filterLabel" />
      <ColumnsMenu v-model:shown="columns" :columns="COLUMNS" :label="columnLabel" />
      <Checkbox v-if="barFilters.isShown('awaiting')" id="networks-awaiting" v-model="awaitingOnly" :label="t('inv.awaitingOnly')" />
    </SavedViewsBar>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="900">
      <thead>
        <tr>
          <th v-if="shown('network')" :class="th">{{ t('net.col.network') }}</th>
          <th v-if="shown('client')" :class="th">{{ t('int.column.client') }}</th>
          <th v-if="shown('delegation')" :class="th">{{ t('netd.delegation') }}</th>
          <th v-if="shown('status')" :class="th">{{ t('net.col.status') }}</th>
          <th v-if="shown('revenue')" :class="th">{{ t('int.column.revenue') }}</th>
          <th v-if="shown('sites')" :class="[th, 'text-right']">{{ t('net.col.sites') }}</th>
          <th :class="th"><span class="sr-only">{{ t('team.actions') }}</span></th>
          <th :class="[th, 'w-px']"><span class="sr-only">{{ t('common.open') }}</span></th>
        </tr>
      </thead>
      <tbody>
        <TableState
          :cols="columns.length + 2"
          :loading="!networks"
          :empty="networks?.length === 0"
          :icon="NetworkIcon"
          :title="filtered ? t('inv.filteredNone') : t('inv.networksNone')"
          :desc="filtered ? t('inv.filteredNoneSub') : undefined"
        >
          <Button v-if="filtered" variant="outline" size="sm" @click="clearFilters">{{ t('int.clear') }}</Button>
        </TableState>
        <tr v-for="network in networks ?? []" :key="network.id" class="hover:bg-muted">
          <td v-if="shown('network')" :class="td">
            <div class="font-medium">{{ networkName(network) }}</div>
            <div class="tnum font-mono text-[13px] text-muted-foreground">{{ network.network_code }}</div>
          </td>
          <td v-if="shown('client')" :class="td">
            <div class="flex items-center gap-2">
              <CompanyIcon :name="network.client.name" :image-url="network.client.image_url" :size="20" />
              <RouterLink :to="`/interno/clientes/${network.client.id}`" class="truncate hover:underline">{{ network.client.name }}</RouterLink>
            </div>
          </td>
          <td v-if="shown('delegation')" :class="td">
            <span
              v-if="network.delegation"
              class="inline-flex rounded-md border px-1.5 py-0.5 font-mono text-[12px] font-medium"
              :title="t(`netd.delegation.${network.delegation}` as Key)"
            >
              {{ t(`inv.delegationShort.${network.delegation}` as Key) }}
            </span>
            <span v-else class="text-muted-foreground">–</span>
          </td>
          <td v-if="shown('status')" :class="td">
            <Status :tone="networkTone(network)">{{ t(statusKey(network)) }}</Status>
            <div v-if="network.mcm_email" class="mt-1 text-[13px] text-muted-foreground">{{ t('inv.mcmEmail', { email: network.mcm_email }) }}</div>
          </td>
          <td v-if="shown('revenue')" :class="td"><RevenueStatusBadge :status="network.revenue_status" /></td>
          <td v-if="shown('sites')" :class="[td, 'tnum text-right']">{{ network.sites }}</td>
          <td :class="td">
            <NetworkReviewActions
              v-if="canAssign && network.awaiting_confirmation"
              :network-id="network.id"
              :network-code="network.network_code"
              :client-name="network.client.name"
              @changed="load"
            />
          </td>
          <td :class="[td, 'text-right']"><OpenLink :to="`/interno/networks/${network.id}`" :name="networkName(network)" /></td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
  </PageBody>
</template>
