<script setup lang="ts">
/** Lista dos rewards: no painel do cliente os da Empresa, no interno os de todos os clientes (com a coluna Cliente). */
import OpenLink from '@/components/OpenLink.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { BarChart3, BookOpen, Gift, Plus, Search } from 'lucide-vue-next'
import InstallGuideDialog from '@/components/InstallGuideDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import InstallCheckCell from '@/modules/install_checks/components/InstallCheckCell.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, t, tn, type Key } from '@/lib/i18n'
import FiltersMenu from '@/modules/views/components/FiltersMenu.vue'
import ColumnsMenu from '@/modules/views/components/ColumnsMenu.vue'
import ListToolbar from '@/modules/views/components/ListToolbar.vue'
import { useListTable } from '@/modules/views/listTable'
import { sortValue } from '@/modules/views/rules'
import type { ViewSort } from '@/modules/views/types'
import { clientInventoryService, type FilterOption } from '@/modules/internal/inventory/service'
import { td, th } from '@/lib/table'
import { installSnippet, rewardPermission, rewardsPath } from '@/modules/rewards/rules'
import { rewardService } from '@/modules/rewards/service'
import type { Reward, RewardSiteOption } from '@/modules/rewards/types'
import { useSession } from '@/stores/session'

const INSTALL_STATES = ['error', 'warning', 'ok', 'unchecked']
const FILTER_LABELS: Record<string, Key> = {
  site_id: 'rw.site',
  company_id: 'inv.filter.client',
  state: 'rw.col.state',
  install: 'ic.col',
  deleted: 'rw.showDeleted',
}
const COLUMN_LABELS: Record<string, Key> = {
  client: 'rw.col.client',
  site: 'rw.col.site',
  state: 'rw.col.state',
  install: 'ic.col',
  cooldown: 'rw.col.cooldown',
  updated: 'rw.col.updated',
}
const SORTS: ViewSort[] = [
  { key: 'created_at', direction: 'desc' },
  { key: 'created_at', direction: 'asc' },
  { key: 'name', direction: 'asc' },
  { key: 'name', direction: 'desc' },
]

const route = useRoute()
const router = useRouter()
const session = useSession()
const internal = route.meta.internal === true
const service = rewardService(internal)
const base = rewardsPath(internal)
const FILTERS = internal ? ['company_id', 'state', 'install', 'deleted'] : ['site_id', 'state', 'install', 'deleted']
const COLUMNS = internal ? ['client', 'site', 'state', 'install', 'cooldown', 'updated'] : ['site', 'state', 'install', 'cooldown', 'updated']
const table = useListTable(
  {
    table: 'rewards',
    filters: FILTERS,
    defaultFilters: internal ? ['company_id', 'state'] : ['site_id', 'state'],
    columns: COLUMNS,
    defaultColumns: COLUMNS,
    sorts: SORTS,
    local: !internal,
  },
  () => refilter(),
)
const rewards = ref<Reward[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const sites = ref<RewardSiteOption[]>([])
const companies = ref<FilterOption[]>([])
const deleted = computed({
  get: () => table.values.deleted === 'yes',
  set: (value: boolean) => (table.values.deleted = value ? 'yes' : ''),
})
/** O nome do filtro no menu de filtros. */
const filterLabel = (filter: string) => t(FILTER_LABELS[filter] as Key)
/** O nome da coluna no menu de colunas. */
const columnLabel = (column: string) => t(COLUMN_LABELS[column] as Key)
/** Os filtros que a pessoa pode pôr na barra: site só no painel do cliente com mais de um. */
const availableFilters = computed(() => FILTERS.filter((key) => key !== 'site_id' || sites.value.length > 1))
const companyOptions = computed(() => [{ value: '', label: t('int.allClients') }, ...companies.value])
const stateOptions = computed(() => [
  { value: '', label: t('rw.filter.allStates') },
  { value: 'active', label: t('rw.state.active') },
  { value: 'paused', label: t('rw.state.paused') },
])
const installOptions = computed(() => [{ value: '', label: t('ic.filter.all') }, ...INSTALL_STATES.map((value) => ({ value, label: t(`ic.filter.${value}` as Key) }))])
const sortOptions = SORTS.map((option) => ({ value: sortValue(option), label: t(`int.sort.${option.key}.${option.direction}` as Key) }))
const loadError = ref<string | null>(null)
const snippet = installSnippet(window.location.origin)
const guideOpen = ref(false)
const guideSteps = computed(() => [t('rw.guideStep1'), t('rw.guideStep2'), t('rw.guideStep3'), t('rw.guideStep4')])
const guideNotes = computed(() => [t('rw.guideNoteTag'), t('rw.guideNoteOnce')])

const canManage = computed(() => session.can(rewardPermission(internal, 'manage')))
const siteOptions = computed(() => [{ value: '', label: t('rw.allSites') }, ...sites.value.map((site) => ({ value: site.id, label: site.domain }))])
const columns = computed(() => table.columns.value.length + 2)

/** Carrega a página dos rewards com os filtros. */
async function load() {
  loadError.value = null
  try {
    const found = await service.list({
      page: page.value,
      q: table.searchText.value.trim() || undefined,
      site_id: table.param('site_id'),
      company_id: table.param('company_id'),
      state: table.param('state'),
      install: table.param('install'),
      deleted: deleted.value || undefined,
      order: table.order(),
    })
    if (found.items.length === 0 && page.value > 1 && found.pages > 0) {
      page.value = found.pages
      return
    }
    rewards.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Volta para a primeira página quando um filtro muda. */
function refilter() {
  if (page.value === 1) void load()
  else page.value = 1
}

onMounted(async () => {
  void load()
  if (internal) companies.value = (await clientInventoryService.filterOptions()).companies
  else sites.value = await service.sites('').catch(() => [])
})
watch(page, load)

/** Abre a edição do reward; um apagado abre as métricas. */
function open(reward: Reward) {
  void router.push(reward.deleted_at ? `${base}/${reward.id}/metricas` : `${base}/${reward.id}`)
}

/** A situação do reward: apagado, ativo ou pausado. */
function state(reward: Reward): { tone: 'ok' | 'neutral' | 'bad'; label: string } {
  if (reward.deleted_at) return { tone: 'bad', label: t('rw.state.deleted') }
  return reward.active ? { tone: 'ok', label: t('rw.state.active') } : { tone: 'neutral', label: t('rw.state.paused') }
}
</script>

<template>
  <PageHeader :title="t('nav.rewards')" :sub="internal ? t('rw.subInternal') : t('rw.sub')">
    <template #actions>
      <Button variant="outline" @click="guideOpen = true"><BookOpen />{{ t('rw.howToInstall') }}</Button>
      <Button v-if="canManage" @click="router.push(`${base}/novo`)"><Plus />{{ t('rw.new') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <ListToolbar :screen="internal ? 'rewards' : null" :default-label="t('rw.allRewards')" :current="table.current.value" :defaults="table.defaults" @apply="table.apply">
      <div class="relative w-full sm:w-[280px]">
        <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input v-model="table.searchText.value" :aria-label="t('rw.search')" class="h-9 bg-card pl-9" :placeholder="t('rw.searchPlaceholder')" />
      </div>
      <Select v-if="internal && table.bar.isShown('company_id')" v-model="table.values.company_id" :options="companyOptions" :aria-label="t('inv.filter.client')" class="h-9 w-full sm:w-52" />
      <Select v-if="!internal && sites.length > 1 && table.bar.isShown('site_id')" v-model="table.values.site_id" :aria-label="t('rw.site')" class="h-9 w-full sm:w-[240px]" :options="siteOptions" />
      <Select v-if="table.bar.isShown('state')" v-model="table.values.state" :options="stateOptions" :aria-label="t('rw.col.state')" class="h-9 w-full sm:w-48" />
      <Select v-if="table.bar.isShown('install')" v-model="table.values.install" :options="installOptions" :aria-label="t('ic.col')" class="h-9 w-full sm:w-48" />
      <Checkbox v-if="table.bar.isShown('deleted')" id="rw-deleted" v-model="deleted" :label="t('rw.showDeleted')" />
      <Select v-model="table.sort.value" :options="sortOptions" :aria-label="t('views.sort')" class="h-9 w-full sm:w-52" />
      <FiltersMenu v-model:shown="table.bar.shown.value" :filters="availableFilters" :label="filterLabel" />
      <ColumnsMenu v-model:shown="table.columns.value" :columns="COLUMNS" :label="columnLabel" />
    </ListToolbar>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="internal ? 1080 : 940">
      <thead>
        <tr>
          <th :class="th">{{ t('rw.col.reward') }}</th>
          <th v-if="table.showsColumn('client')" :class="th">{{ t('rw.col.client') }}</th>
          <th v-if="table.showsColumn('site')" :class="th">{{ t('rw.col.site') }}</th>
          <th v-if="table.showsColumn('state')" :class="th">{{ t('rw.col.state') }}</th>
          <th v-if="table.showsColumn('install')" :class="th">{{ t('ic.col') }}</th>
          <th v-if="table.showsColumn('cooldown')" :class="[th, 'text-right']">{{ t('rw.col.cooldown') }}</th>
          <th v-if="table.showsColumn('updated')" :class="th">{{ t('rw.col.updated') }}</th>
          <th :class="th"><span class="sr-only">{{ t('rw.metrics') }}</span></th>
        </tr>
      </thead>
      <tbody>
        <TableState
          :cols="columns"
          :loading="!rewards"
          :empty="rewards?.length === 0"
          :icon="Gift"
          :title="table.filtered.value && !deleted ? t('inv.filteredNone') : undefined"
          :desc="deleted ? t('rw.emptyDeleted') : table.filtered.value ? t('inv.filteredNoneSub') : t('rw.empty')"
        >
          <Button v-if="table.filtered.value" variant="outline" size="sm" @click="table.clearFilters">{{ t('int.clear') }}</Button>
        </TableState>
        <tr v-for="reward in rewards ?? []" :key="reward.id" class="hover:bg-muted">
          <td :class="td">
            <button type="button" class="flex items-center gap-3 text-left" @click="open(reward)">
              <span
                class="flex size-9 shrink-0 items-center justify-center overflow-hidden text-[18px]"
                :style="{ background: reward.style.body_color, border: `1px solid ${reward.style.border_color}`, borderRadius: `${Math.min(reward.style.radius, 10)}px` }"
                aria-hidden="true"
              >
                <img v-if="reward.icon_kind === 'image' && reward.icon_url" :src="reward.icon_url" alt="" class="size-6 object-contain" />
                <template v-else-if="reward.icon_kind === 'emoji'">{{ reward.icon_emoji }}</template>
                <Gift v-else class="size-4" :style="{ color: reward.style.title_color }" />
              </span>
              <span class="min-w-0">
                <span class="flex items-center gap-2 font-medium">
                  <span class="hover:underline">{{ reward.name }}</span>
                  <span v-if="reward.questions.length" class="rounded border px-1.5 text-[11px] font-medium text-muted-foreground">{{ tn('rw.questions', reward.questions.length) }}</span>
                </span>
                <span class="block break-all font-mono text-[12px] text-muted-foreground">/{{ reward.page_path }}</span>
              </span>
            </button>
          </td>
          <td v-if="table.showsColumn('client')" :class="td">{{ reward.client?.name ?? '—' }}</td>
          <td v-if="table.showsColumn('site')" :class="[td, 'font-mono text-[13px]']">{{ reward.domain }}</td>
          <td v-if="table.showsColumn('state')" :class="td"><Status :tone="state(reward).tone">{{ state(reward).label }}</Status></td>
          <td v-if="table.showsColumn('install')" :class="td">
            <InstallCheckCell v-if="reward.active && !reward.deleted_at" target="reward" :id="reward.id" :name="reward.name" :internal="internal" :summary="reward.install" />
            <span v-else class="text-[13px] text-muted-foreground">{{ reward.deleted_at ? '—' : t('ic.activateFirst') }}</span>
          </td>
          <td v-if="table.showsColumn('cooldown')" :class="[td, 'text-right tnum']">{{ t('rw.minutes', { n: reward.cooldown_minutes }) }}</td>
          <td v-if="table.showsColumn('updated')" :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground tnum']">{{ formatDate(reward.deleted_at ?? reward.updated_at) }}</td>
          <td :class="[td, 'text-right']">
            <div class="flex justify-end gap-2">
              <Button size="sm" variant="outline" @click="router.push(`${base}/${reward.id}/metricas`)"><BarChart3 />{{ t('rw.metrics') }}</Button>
              <OpenLink v-if="!reward.deleted_at" :to="`${base}/${reward.id}`" :name="reward.name" />
            </div>
          </td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
  </PageBody>
  <InstallGuideDialog
    v-model:open="guideOpen"
    :title="t('rw.guideTitle')"
    :desc="t('rw.guideDesc')"
    :steps="guideSteps"
    :line="snippet"
    :line-hint="t('rw.guideLineHint')"
    :notes="guideNotes"
  />
</template>
