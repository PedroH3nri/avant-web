<script setup lang="ts">
/** Lista das ad tags agrupadas por site: no painel do cliente as da Empresa, no interno as de todos os clientes. */
import OpenLink from '@/components/OpenLink.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDebounceFn } from '@vueuse/core'
import { BarChart3, BookOpen, Code2, Plus, Search } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import InstallGuideDialog from '@/components/InstallGuideDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import InstallCheckCell from '@/modules/install_checks/components/InstallCheckCell.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, t, tn, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import AdTagInstallDialog from '@/modules/ad_tags/components/AdTagInstallDialog.vue'
import { adTagPermission, adTagsPath, installLine, LIMITS, tagStatus } from '@/modules/ad_tags/rules'
import { adTagService } from '@/modules/ad_tags/service'
import type { AdTag, AdTagSiteOption } from '@/modules/ad_tags/types'
import { clientInventoryService, type FilterOption } from '@/modules/internal/inventory/service'
import ColumnsMenu from '@/modules/views/components/ColumnsMenu.vue'
import FiltersMenu from '@/modules/views/components/FiltersMenu.vue'
import ListToolbar from '@/modules/views/components/ListToolbar.vue'
import { useListTable } from '@/modules/views/listTable'
import { useSession } from '@/stores/session'

const route = useRoute()
const router = useRouter()
const session = useSession()
const internal = route.meta.internal === true
const service = adTagService(internal)
const base = adTagsPath(internal)
const INSTALL_STATES = ['error', 'warning', 'ok', 'unchecked']
const FILTER_LABELS: Record<string, Key> = { site_id: 'at.filter.site', company_id: 'inv.filter.client', status: 'at.col.status', install: 'ic.col' }
const COLUMN_LABELS: Record<string, Key> = { client: 'at.col.client', status: 'at.col.status', install: 'ic.col', seen: 'at.col.seen', draft: 'at.col.draft' }
const COLUMNS = internal ? ['client', 'status', 'install', 'seen', 'draft'] : ['status', 'install', 'seen', 'draft']
const FILTERS = internal ? ['company_id', 'status', 'install'] : ['site_id', 'status', 'install']
const table = useListTable(
  {
    table: 'ad-tags',
    filters: FILTERS,
    defaultFilters: internal ? ['company_id', 'status'] : ['site_id', 'status'],
    columns: COLUMNS,
    defaultColumns: COLUMNS,
    sorts: [{ key: 'created_at', direction: 'desc' }],
    local: !internal,
  },
  () => refilter(),
)
const tags = ref<AdTag[] | null>(null)
const lastSeen = ref<Record<string, string | null>>({})
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const companies = ref<FilterOption[]>([])
const filterSites = ref<AdTagSiteOption[]>([])
const loadError = ref<string | null>(null)
const newOpen = ref(false)
const newSite = ref('')
const newName = ref('')
const siteQuery = ref('')
const sites = ref<AdTagSiteOption[]>([])
const busy = ref(false)
const nameTaken = ref(false)

const canManage = computed(() => session.can(adTagPermission(internal, 'manage')))
/** Quantas colunas o nome ocupa (com o cliente ao lado no interno) e quantas vêm depois dele. */
const nameSpan = computed(() => 1 + (table.showsColumn('client') ? 1 : 0))
const restSpan = computed(() => table.columns.value.filter((column) => column !== 'client').length + 1)
const columns = computed(() => nameSpan.value + restSpan.value)
/** Os filtros que a pessoa pode pôr na barra: site só no painel do cliente com mais de um. */
const availableFilters = computed(() => FILTERS.filter((key) => key !== 'site_id' || filterSites.value.length > 1))
/** O nome do filtro no menu de filtros. */
const filterLabel = (filter: string) => t(FILTER_LABELS[filter] as Key)
/** O nome da coluna no menu de colunas. */
const columnLabel = (column: string) => t(COLUMN_LABELS[column] as Key)
const companyOptions = computed(() => [{ value: '', label: t('int.allClients') }, ...companies.value])
const filterSiteOptions = computed(() => [{ value: '', label: t('at.filter.allSites') }, ...filterSites.value.map((site) => ({ value: site.id, label: site.domain }))])
const statusOptions = computed(() => [
  { value: '', label: t('at.filter.allStatus') },
  { value: 'live', label: t('at.filter.live') },
  { value: 'draft', label: t('at.filter.draft') },
])
const installOptions = computed(() => [{ value: '', label: t('ic.filter.all') }, ...INSTALL_STATES.map((value) => ({ value, label: t(`ic.filter.${value}` as Key) }))])
const groups = computed(() => {
  const bySite = new Map<string, { siteId: string; domain: string; client: string | null; tags: AdTag[] }>()
  for (const tag of tags.value ?? []) {
    const group = bySite.get(tag.site_id) ?? { siteId: tag.site_id, domain: tag.domain, client: tag.client?.name ?? null, tags: [] }
    group.tags.push(tag)
    bySite.set(tag.site_id, group)
  }
  return [...bySite.values()].sort((first, second) => first.domain.localeCompare(second.domain))
})
const siteOptions = computed(() => [
  { value: '', label: t('at.chooseSite') },
  ...sites.value.map((site) => ({ value: site.id, label: site.client ? `${site.domain} · ${site.client}` : site.domain })),
])

/** Carrega a página das tags e, em paralelo, a última vez que cada uma foi vista. */
async function load() {
  loadError.value = null
  try {
    const found = await service.list({
      page: page.value,
      q: table.searchText.value.trim() || undefined,
      site_id: table.param('site_id'),
      company_id: table.param('company_id'),
      status: table.param('status'),
      install: table.param('install'),
    })
    if (found.items.length === 0 && page.value > 1 && found.pages > 0) {
      page.value = found.pages
      return
    }
    tags.value = found.items
    total.value = found.total
    pages.value = found.pages
    void loadSeen(found.items)
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** A última vez vista de cada tag publicada; uma que falhar fica sem a informação. */
async function loadSeen(items: AdTag[]) {
  const pairs = await Promise.all(
    items.filter((tag) => tag.live).map(async (tag) => [tag.id, await service.health(tag.id, 1).then((health) => health.last_seen_at).catch(() => undefined)] as const),
  )
  const seen: Record<string, string | null> = {}
  pairs.forEach(([id, value]) => {
    if (value !== undefined) seen[id] = value
  })
  lastSeen.value = seen
}

/** Volta para a primeira página quando a busca muda. */
function refilter() {
  if (page.value === 1) void load()
  else page.value = 1
}

/** Busca os sites pelo domínio no painel interno. */
const searchSites = useDebounceFn(async () => {
  sites.value = await service.sites(siteQuery.value.trim()).catch(() => [])
}, 300)

/** Carrega a primeira página e as opções dos filtros (clientes no interno, sites no do cliente). */
async function start() {
  void load()
  if (internal) companies.value = (await clientInventoryService.filterOptions()).companies
  else filterSites.value = await service.sites('').catch(() => [])
}

onMounted(start)
watch(page, load)
watch(siteQuery, searchSites)

/** Abre o modal da tag nova, já no site da linha; a primeira tag do site se chama Principal. */
async function startNew(siteId = '') {
  nameTaken.value = false
  newSite.value = siteId
  newName.value = siteId && groups.value.some((group) => group.siteId === siteId) ? '' : t('at.defaultName')
  newOpen.value = true
  if (!sites.value.length) sites.value = await service.sites('').catch(() => [])
  const known = groups.value.find((group) => group.siteId === siteId)
  if (known && !sites.value.some((site) => site.id === siteId)) sites.value = [{ id: known.siteId, domain: known.domain, client: known.client }, ...sites.value]
}

/** Cria a tag e abre o editor dela. */
async function create() {
  if (!newSite.value || !newName.value.trim()) return
  busy.value = true
  nameTaken.value = false
  try {
    const created = await service.create(newSite.value, newName.value.trim())
    newOpen.value = false
    toast.success(t('at.created'))
    await router.push(`${base}/${created.id}`)
  } catch (error) {
    const code = error instanceof ApiError ? error.code : 'unknown'
    nameTaken.value = code === 'ad_tag_name_taken'
    if (!nameTaken.value) toast.error(errorText(code))
  } finally {
    busy.value = false
  }
}

/** A última vez vista da tag para a coluna: a data, nunca ou um traço enquanto carrega. */
function seenText(tag: AdTag): string {
  if (!tag.live) return '—'
  if (!(tag.id in lastSeen.value)) return '…'
  const seen = lastSeen.value[tag.id]
  return seen ? formatDate(seen) : t('at.never')
}

const guideOpen = ref(false)
const origin = window.location.origin
const guideSteps = computed(() => [t('at.guideStep1'), t('at.guideStep2'), t('at.guideStep3'), t('at.guideStep4'), t('at.guideStep5')])
const guideNotes = computed(() => [t('at.installReward'), t('at.installOne'), t('at.installGenius')])
const installing = ref<AdTag | null>(null)
const installOpen = computed({
  get: () => installing.value !== null,
  set: (value) => {
    if (!value) installing.value = null
  },
})
</script>

<template>
  <PageHeader :title="t('nav.adTags')" :sub="internal ? t('at.subInternal') : t('at.sub')">
    <template #actions>
      <Button variant="outline" @click="guideOpen = true"><BookOpen />{{ t('at.howToInstall') }}</Button>
      <Button v-if="canManage" @click="startNew()"><Plus />{{ t('at.new') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <ListToolbar :screen="internal ? 'ad_tags' : null" :default-label="t('at.allTags')" :current="table.current.value" :defaults="table.defaults" @apply="table.apply">
      <div class="relative w-full sm:w-[280px]">
        <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input v-model="table.searchText.value" :aria-label="t('at.search')" class="h-9 bg-card pl-9" :placeholder="internal ? t('at.searchPlaceholderInternal') : t('at.searchPlaceholder')" />
      </div>
      <Select v-if="internal && table.bar.isShown('company_id')" v-model="table.values.company_id" :options="companyOptions" :aria-label="t('inv.filter.client')" class="h-9 w-full sm:w-52" />
      <Select v-if="!internal && filterSites.length > 1 && table.bar.isShown('site_id')" v-model="table.values.site_id" :options="filterSiteOptions" :aria-label="t('at.filter.site')" class="h-9 w-full sm:w-52" />
      <Select v-if="table.bar.isShown('status')" v-model="table.values.status" :options="statusOptions" :aria-label="t('at.col.status')" class="h-9 w-full sm:w-48" />
      <Select v-if="table.bar.isShown('install')" v-model="table.values.install" :options="installOptions" :aria-label="t('ic.col')" class="h-9 w-full sm:w-48" />
      <FiltersMenu v-model:shown="table.bar.shown.value" :filters="availableFilters" :label="filterLabel" />
      <ColumnsMenu v-model:shown="table.columns.value" :columns="COLUMNS" :label="columnLabel" />
    </ListToolbar>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="internal ? 1120 : 980">
      <thead>
        <tr>
          <th :class="th">{{ t('at.col.tag') }}</th>
          <th v-if="table.showsColumn('client')" :class="th">{{ t('at.col.client') }}</th>
          <th v-if="table.showsColumn('status')" :class="th">{{ t('at.col.status') }}</th>
          <th v-if="table.showsColumn('install')" :class="th">{{ t('ic.col') }}</th>
          <th v-if="table.showsColumn('seen')" :class="th">{{ t('at.col.seen') }}</th>
          <th v-if="table.showsColumn('draft')" :class="th">{{ t('at.col.draft') }}</th>
          <th :class="th"><span class="sr-only">{{ t('at.col.actions') }}</span></th>
        </tr>
      </thead>
      <tbody v-if="!tags || tags.length === 0">
        <TableState
          :cols="columns"
          :loading="!tags"
          :empty="tags?.length === 0"
          :icon="Code2"
          :title="table.filtered.value ? t('inv.filteredNone') : undefined"
          :desc="table.filtered.value ? t('inv.filteredNoneSub') : t('at.empty')"
        >
          <Button v-if="table.filtered.value" variant="outline" size="sm" @click="table.clearFilters">{{ t('int.clear') }}</Button>
        </TableState>
      </tbody>
      <tbody v-for="group in groups" :key="group.siteId" class="border-t first:border-t-0">
        <tr class="bg-muted/60">
          <td :class="[td, 'py-2']" :colspan="nameSpan">
            <span class="font-mono text-[13px] font-medium">{{ group.domain }}</span>
            <span v-if="internal && group.client" class="ml-2 text-[12px] text-muted-foreground">{{ group.client }}</span>
            <span class="ml-2 text-[12px] text-muted-foreground">· {{ tn('at.tagCount', group.tags.length) }}</span>
          </td>
          <td :class="[td, 'py-2 text-right']" :colspan="restSpan">
            <Button v-if="canManage" size="sm" variant="ghost" @click="startNew(group.siteId)"><Plus />{{ t('at.newOnSite') }}</Button>
          </td>
        </tr>
        <tr v-for="tag in group.tags" :key="tag.id" class="hover:bg-muted">
          <td :class="[td, 'pl-8']" :colspan="nameSpan">
            <RouterLink :to="`${base}/${tag.id}`" class="font-medium hover:underline">{{ tag.name }}</RouterLink>
            <span class="ml-2 font-mono text-[12px] text-muted-foreground">{{ tag.key }}</span>
          </td>
          <td v-if="table.showsColumn('status')" :class="td">
            <Status :tone="tagStatus(tag, tag.live && tag.id in lastSeen ? lastSeen[tag.id] : undefined).tone">{{ tagStatus(tag, tag.live && tag.id in lastSeen ? lastSeen[tag.id] : undefined).label }}</Status>
          </td>
          <td v-if="table.showsColumn('install')" :class="td">
            <InstallCheckCell v-if="tag.live" target="ad_tag" :id="tag.id" :name="tag.name" :internal="internal" :summary="tag.install" />
            <span v-else class="text-[13px] text-muted-foreground">{{ t('ic.publishFirst') }}</span>
          </td>
          <td v-if="table.showsColumn('seen')" :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground tnum']">{{ seenText(tag) }}</td>
          <td v-if="table.showsColumn('draft')" :class="td">
            <Badge v-if="tag.has_changes" tone="ochre">{{ t('at.draftPending') }}</Badge>
            <span v-else class="text-[13px] text-muted-foreground">—</span>
          </td>
          <td :class="[td, 'text-right']">
            <div class="flex justify-end gap-2">
              <Button size="sm" variant="outline" @click="installing = tag"><Code2 />{{ t('at.install') }}</Button>
              <Button v-if="tag.live" size="sm" variant="outline" @click="router.push(`${base}/${tag.id}/metricas`)"><BarChart3 />{{ t('at.metrics') }}</Button>
              <OpenLink :to="`${base}/${tag.id}`" :name="tag.name" />
            </div>
          </td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
  </PageBody>
  <Dialog v-model:open="newOpen" :title="t('at.newTitle')" :desc="t('at.newDesc')">
    <form id="at-new" class="grid gap-4" @submit.prevent="create">
      <Input v-if="internal" v-model="siteQuery" :aria-label="t('at.searchSite')" class="h-9" :placeholder="t('at.searchSite')" />
      <Field id="at-new-site" :label="t('at.site')">
        <Select id="at-new-site" v-model="newSite" :options="siteOptions" />
      </Field>
      <Field id="at-new-name" :label="t('at.name')" :hint="t('at.nameHint')" :error="nameTaken && t('at.nameTaken')">
        <Input id="at-new-name" v-model="newName" :maxlength="LIMITS.name" :placeholder="t('at.defaultName')" />
      </Field>
    </form>
    <template #footer>
      <Button variant="outline" @click="newOpen = false">{{ t('common.cancel') }}</Button>
      <Button type="submit" form="at-new" :disabled="busy || !newSite || !newName.trim()">{{ t('at.create') }}</Button>
    </template>
  </Dialog>
  <InstallGuideDialog
    v-model:open="guideOpen"
    :title="t('at.guideTitle')"
    :desc="t('at.guideDesc')"
    :steps="guideSteps"
    :line="installLine(origin, t('at.guideKey'))"
    :line-hint="t('at.guideLineHint')"
    :notes="guideNotes"
  />
  <AdTagInstallDialog v-if="installing" v-model:open="installOpen" :name="installing.name" :domain="installing.domain" :tag-key="installing.key" />
</template>
