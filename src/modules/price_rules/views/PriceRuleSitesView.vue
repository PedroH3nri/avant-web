<script setup lang="ts">
/** Lista dos sites com a regra de preço: ligada ou não, controle, blocos com a Automática e regras ativas; no interno, de todos os clientes. */
import OpenLink from '@/components/OpenLink.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { CircleDollarSign, Search } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/Button.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Select from '@/components/ui/Select.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, locale, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { priceRulesPath, siteStatus } from '@/modules/price_rules/rules'
import { priceRuleService } from '@/modules/price_rules/service'
import type { PriceRuleSiteSummary } from '@/modules/price_rules/types'
import { clientInventoryService, type FilterOption } from '@/modules/internal/inventory/service'
import ColumnsMenu from '@/modules/views/components/ColumnsMenu.vue'
import FiltersMenu from '@/modules/views/components/FiltersMenu.vue'
import ListToolbar from '@/modules/views/components/ListToolbar.vue'
import { useListTable } from '@/modules/views/listTable'
import { sortValue } from '@/modules/views/rules'
import type { ViewSort } from '@/modules/views/types'

const FILTER_LABELS: Record<string, Key> = { company_id: 'inv.filter.client', active: 'pr.filter.rule' }
const COLUMN_LABELS: Record<string, Key> = {
  client: 'pr.col.client',
  status: 'pr.col.status',
  control: 'pr.col.control',
  blocks: 'pr.col.blocks',
  active_rules: 'pr.col.activeRules',
}
const SORTS: ViewSort[] = [
  { key: 'created_at', direction: 'desc' },
  { key: 'created_at', direction: 'asc' },
  { key: 'domain', direction: 'asc' },
  { key: 'domain', direction: 'desc' },
]

const route = useRoute()
const internal = route.meta.internal === true
const service = priceRuleService(internal)
const base = priceRulesPath(internal)
const FILTERS = internal ? ['company_id', 'active'] : ['active']
const COLUMNS = internal ? ['client', 'status', 'control', 'blocks', 'active_rules'] : ['status', 'control', 'blocks', 'active_rules']
const table = useListTable(
  { table: 'price-rules', filters: FILTERS, defaultFilters: FILTERS, columns: COLUMNS, defaultColumns: COLUMNS, sorts: SORTS, local: !internal },
  () => refilter(),
)
const sites = ref<PriceRuleSiteSummary[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)
const companies = ref<FilterOption[]>([])

const integer = computed(() => new Intl.NumberFormat(locale.value))
const columns = computed(() => table.columns.value.length + 2)
const companyOptions = computed(() => [{ value: '', label: t('int.allClients') }, ...companies.value])
const activeOptions = computed(() => [
  { value: '', label: t('pr.filter.allRules') },
  { value: 'on', label: t('pr.status.on') },
  { value: 'off', label: t('pr.status.off') },
])
const sortOptions = SORTS.map((option) => ({
  value: sortValue(option),
  label: t((option.key === 'domain' ? `inv.sort.domain.${option.direction}` : `int.sort.${option.key}.${option.direction}`) as Key),
}))
/** O nome do filtro no menu de filtros. */
const filterLabel = (filter: string) => t(FILTER_LABELS[filter] as Key)
/** O nome da coluna no menu de colunas. */
const columnLabel = (column: string) => t(COLUMN_LABELS[column] as Key)

/** Carrega a página dos sites. */
async function load() {
  loadError.value = null
  try {
    const found = await service.sites({
      page: page.value,
      q: table.searchText.value.trim() || undefined,
      company_id: table.param('company_id'),
      active: table.param('active'),
      order: table.order(),
    })
    if (found.items.length === 0 && page.value > 1 && found.pages > 0) {
      page.value = found.pages
      return
    }
    sites.value = found.items
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
</script>

<template>
  <PageHeader :title="t('nav.priceRules')" :sub="internal ? t('pr.subInternal') : t('pr.sub')" />
  <PageBody>
    <ListToolbar :screen="internal ? 'price_rules' : null" :default-label="t('pr.allSites')" :current="table.current.value" :defaults="table.defaults" @apply="table.apply">
      <div class="relative w-full sm:w-[280px]">
        <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input v-model="table.searchText.value" :aria-label="t('pr.search')" class="h-9 bg-card pl-9" :placeholder="t('pr.searchPlaceholder')" />
      </div>
      <Select v-if="internal && table.bar.isShown('company_id')" v-model="table.values.company_id" :options="companyOptions" :aria-label="t('inv.filter.client')" class="h-9 w-full sm:w-52" />
      <Select v-if="table.bar.isShown('active')" v-model="table.values.active" :options="activeOptions" :aria-label="t('pr.filter.rule')" class="h-9 w-full sm:w-48" />
      <Select v-model="table.sort.value" :options="sortOptions" :aria-label="t('views.sort')" class="h-9 w-full sm:w-52" />
      <FiltersMenu v-model:shown="table.bar.shown.value" :filters="FILTERS" :label="filterLabel" />
      <ColumnsMenu v-model:shown="table.columns.value" :columns="COLUMNS" :label="columnLabel" />
    </ListToolbar>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="internal ? 900 : 760">
      <thead>
        <tr>
          <th :class="th">{{ t('pr.col.site') }}</th>
          <th v-if="table.showsColumn('client')" :class="th">{{ t('pr.col.client') }}</th>
          <th v-if="table.showsColumn('status')" :class="th">{{ t('pr.col.status') }}</th>
          <th v-if="table.showsColumn('control')" :class="[th, 'text-right']">{{ t('pr.col.control') }}</th>
          <th v-if="table.showsColumn('blocks')" :class="[th, 'text-right']">{{ t('pr.col.blocks') }}</th>
          <th v-if="table.showsColumn('active_rules')" :class="[th, 'text-right']">{{ t('pr.col.activeRules') }}</th>
          <th :class="th"><span class="sr-only">{{ t('pr.col.actions') }}</span></th>
        </tr>
      </thead>
      <tbody>
        <TableState
          v-if="!sites || sites.length === 0"
          :cols="columns"
          :loading="!sites"
          :empty="sites?.length === 0"
          :icon="CircleDollarSign"
          :title="table.filtered.value ? t('inv.filteredNone') : undefined"
          :desc="table.filtered.value ? t('inv.filteredNoneSub') : t('pr.empty')"
        >
          <Button v-if="table.filtered.value" variant="outline" size="sm" @click="table.clearFilters">{{ t('int.clear') }}</Button>
        </TableState>
        <tr v-for="site in sites ?? []" :key="site.site_id" class="hover:bg-muted">
          <td :class="td">
            <RouterLink :to="`${base}/${site.site_id}`" class="font-mono text-[13px] font-medium hover:underline">{{ site.domain }}</RouterLink>
            <div v-if="site.currency" class="text-[12px] text-muted-foreground">{{ site.currency }}</div>
          </td>
          <td v-if="table.showsColumn('client')" :class="td">{{ site.client ?? '—' }}</td>
          <td v-if="table.showsColumn('status')" :class="td">
            <Status :tone="siteStatus(site).tone">{{ t(siteStatus(site).key, { currency: site.currency ?? '' }) }}</Status>
          </td>
          <td v-if="table.showsColumn('control')" :class="[td, 'text-right tnum']">{{ site.active ? `${site.control_percent}%` : '—' }}</td>
          <td v-if="table.showsColumn('blocks')" :class="[td, 'text-right tnum']">{{ integer.format(site.automatic_blocks) }}</td>
          <td v-if="table.showsColumn('active_rules')" :class="[td, 'text-right tnum']">{{ site.active ? integer.format(site.active_rules) : '—' }}</td>
          <td :class="[td, 'text-right']">
            <OpenLink :to="`${base}/${site.site_id}`" :name="site.domain" />
          </td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
  </PageBody>
</template>
