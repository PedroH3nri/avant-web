<script setup lang="ts">
/** Campanhas, grupos e anúncios do Google Ads com gasto, receita, lucro e ROI do período; no interno, de todos os clientes. */
import StatTile from '@/components/StatTile.vue'
import DateRangePicker from '@/components/ui/DateRangePicker.vue'
import { todayIso } from '@/lib/dates'
import { periodFromQuery, periodPresets, periodQuery, type PeriodValue } from '@/lib/periods'
import OpenLink from '@/components/OpenLink.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDebounceFn } from '@vueuse/core'
import { toast } from 'vue-sonner'
import { ChevronRight, Search } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Segmented from '@/components/ui/Segmented.vue'
import Status from '@/components/ui/Status.vue'
import Switch from '@/components/ui/Switch.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError, type Query } from '@/lib/api'
import { errorText, locale, t, type Key } from '@/lib/i18n'
import FiltersMenu from '@/modules/views/components/FiltersMenu.vue'
import { useLocalBarFilters } from '@/modules/views/barFilters'
import { td, th } from '@/lib/table'
import { clientService } from '@/modules/internal/clients/service'
import { ADS_MAX_DAYS, ADS_PRESETS, channelKey, childLevel, controlErrorText, formatCount, formatMoney, formatRatio, objectPath, objectState, roiTone } from '@/modules/google_ads/rules'
import { googleAdsReader, googleAdsService } from '@/modules/google_ads/service'
import type { GoogleAdsAccount, GoogleAdsLevel, GoogleAdsObject, GoogleAdsSummary } from '@/modules/google_ads/types'
import { useSession } from '@/stores/session'

const FILTERS = ['client', 'with_issues']
const DEFAULT_FILTERS = ['client', 'with_issues']
const FILTER_LABELS: Record<string, Key> = {
  client: 'gads.col.client',
  with_issues: 'gads.withIssues',
}

const route = useRoute()
const router = useRouter()
const internal = route.meta.internal === true
const session = useSession()
const reader = googleAdsReader(internal)
const canManage = computed(() => !internal && session.can('google_ads.manage'))
const selected = ref<string[]>([])
const switching = ref(false)

const level = ref<GoogleAdsLevel>('campaign')
const parent = ref<{ id: string; name: string; level: GoogleAdsLevel } | null>(null)
const accountId = ref(typeof route.query.conta === 'string' ? route.query.conta : '')
const companyId = ref('')
const period = ref<PeriodValue>(periodFromQuery(route.query, ADS_PRESETS, 'last_7_days', todayIso(), true))
const query = ref('')
const withIssues = ref(false)
const barFilters = useLocalBarFilters('gads-campaigns', FILTERS, DEFAULT_FILTERS, {
  client: () => (companyId.value = ''),
  with_issues: () => (withIssues.value = false),
})
/** O nome do filtro no menu de filtros. */
const filterLabel = (filter: string) => t(FILTER_LABELS[filter] as Key)
/** Os filtros que a pessoa pode pôr na barra: cliente só no painel interno. */
const availableFilters = FILTERS.filter((key) => key !== 'client' || internal)
const items = ref<GoogleAdsObject[] | null>(null)
const accounts = ref<GoogleAdsAccount[]>([])
const clients = ref<{ id: string; name: string }[]>([])
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)
const summary = ref<GoogleAdsSummary | null>(null)
let summaryKey = ''
let summaryTicket = 0

const levelOptions = computed(() => [
  { value: 'campaign', label: t('gads.level.campaign') },
  { value: 'ad_group', label: t('gads.level.ad_group') },
  { value: 'ad', label: t('gads.level.ad') },
])
const presets = computed(() => periodPresets(ADS_PRESETS, todayIso(), true))
const accountOptions = computed(() => [{ value: '', label: t('gads.allAccounts') }, ...accounts.value.map((account) => ({ value: account.id, label: account.name }))])
const clientOptions = computed(() => [{ value: '', label: t('gads.allClients') }, ...clients.value.map((client) => ({ value: client.id, label: client.name }))])
const columns = computed(() => (internal ? 11 : canManage.value ? 12 : 10))
const allSelected = computed(() => !!items.value?.length && items.value.every((item) => selected.value.includes(item.external_id)))

/** O nome do cliente pelo id da Empresa (só no painel interno). */
function clientName(id: string): string {
  return clients.value.find((client) => client.id === id)?.name ?? ''
}

/** Carrega a página com os filtros e o período. */
async function load() {
  loadError.value = null
  try {
    const filters = {
      from: period.value.start,
      to: period.value.end,
      level: level.value,
      parent: parent.value?.id,
      account_id: accountId.value || undefined,
      company_id: internal ? companyId.value || undefined : undefined,
      with_issues: withIssues.value || undefined,
      q: query.value.trim() || undefined,
    }
    void loadSummary(filters)
    const found = await reader.objects({ ...filters, page: page.value })
    selected.value = []
    items.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Busca a soma de todo o filtro quando ele muda (trocar de página não muda a soma); só a última resposta vale. */
async function loadSummary(filters: Query) {
  const key = JSON.stringify(filters)
  if (key === summaryKey) return
  summaryKey = key
  const ticket = ++summaryTicket
  summary.value = null
  try {
    const found = await reader.summary({ ...filters, currency: session.displayCurrency })
    if (ticket === summaryTicket) summary.value = found
  } catch {
    if (ticket === summaryTicket) summaryKey = ''
  }
}

/** Os cards com a soma de todo o filtro, na ordem das colunas da tabela. */
const tiles = computed(() => {
  const found = summary.value
  if (!found) return []
  return [
    { key: 'spend', label: 'gads.metric.spend', text: formatMoney(found.spend, found.currency, locale.value), tone: '' },
    { key: 'clicks', label: 'gads.metric.clicks', text: formatCount(found.clicks, locale.value), tone: '' },
    { key: 'cpc', label: 'gads.metric.cpc', text: formatMoney(found.cpc, found.currency, locale.value), tone: '' },
    { key: 'conversions', label: 'gads.metric.conversions', text: formatCount(found.conversions, locale.value), tone: '' },
    { key: 'revenue', label: 'gads.metric.revenue', text: formatMoney(found.revenue, found.currency, locale.value), tone: '' },
    { key: 'profit', label: 'gads.metric.profit', text: formatMoney(found.profit, found.currency, locale.value), tone: Number(found.profit) < 0 ? 'text-bad' : '' },
    { key: 'roi', label: 'gads.metric.roi', text: formatRatio(found.roi, locale.value), tone: roiTone(found.roi) },
  ]
})

/** Volta para a primeira página quando um filtro muda. */
function refilter() {
  if (page.value === 1) void load()
  else page.value = 1
}

const searchLater = useDebounceFn(refilter, 300)

/** Abre o nível de baixo (campanha → grupos → anúncios) ou o detalhe do anúncio. */
function open(item: GoogleAdsObject) {
  const next = childLevel(item.level)
  if (!next) {
    details(item)
    return
  }
  parent.value = { id: item.external_id, name: item.name, level: item.level }
  level.value = next
}

/** Troca o nível pelo seletor: sai do filtro do objeto de cima. */
function pickLevel(value: string) {
  parent.value = null
  level.value = value as GoogleAdsLevel
}

/** Abre o detalhe com os números por dia, palavras-chave e termos. */
function details(item: GoogleAdsObject) {
  void router.push({ path: objectPath(internal, item), query: periodQuery(period.value) })
}

/** Marca ou desmarca um item para a ação em lote. */
function pick(externalId: string, chosen: boolean) {
  selected.value = chosen ? [...selected.value, externalId] : selected.value.filter((id) => id !== externalId)
}

/** Marca ou desmarca todos os itens da página. */
function pickAll(chosen: boolean) {
  selected.value = chosen ? (items.value ?? []).map((item) => item.external_id) : []
}

/** Liga ou pausa no Google Ads; o que ele recusar aparece num aviso, e o limite diz quanto ainda cabe. */
async function setStatus(externalIds: string[], active: boolean) {
  if (!externalIds.length) return
  switching.value = true
  try {
    const result = await googleAdsService.setStatus(level.value, externalIds, active)
    if (result.done.length) toast.success(active ? t('gads.control.activated', { n: result.done.length }) : t('gads.control.paused', { n: result.done.length }))
    const failures = Object.values(result.failed)
    if (failures.length) toast.error(t('gads.control.failed', { n: failures.length, reason: errorText(failures[0] ?? 'unknown') }))
    await load()
  } catch (error) {
    const api = error instanceof ApiError ? error : null
    const limit = api ? controlErrorText(api.code, api.details, locale.value) : null
    toast.error(limit ? t(limit.key, limit.params) : errorText(api?.code ?? 'unknown'))
  } finally {
    switching.value = false
  }
}

onMounted(() => {
  void load()
  void reader.accounts().then((found) => (accounts.value = found)).catch(() => undefined)
  if (internal) void clientService.companyOptions().then((found) => (clients.value = found.items)).catch(() => undefined)
})
watch(page, load)
watch(query, searchLater)
watch([level, parent, accountId, companyId, period, withIssues], refilter)
</script>

<template>
  <PageHeader :title="t('gads.campaignsTitle')" :sub="internal ? t('gads.campaignsSubInternal') : t('gads.campaignsSub')" />
  <PageBody>
    <div class="flex flex-wrap items-center gap-3">
      <Segmented :model-value="level" :label="t('gads.level')" :options="levelOptions" @update:model-value="pickLevel" />
      <DateRangePicker v-model="period" :presets="presets" :max-days="ADS_MAX_DAYS" :aria-label="t('gads.period')" class="w-full sm:w-auto" />
      <Select v-if="internal && barFilters.isShown('client')" v-model="companyId" :aria-label="t('gads.col.client')" class="w-full sm:w-[220px]" :options="clientOptions" />
      <Select v-model="accountId" :aria-label="t('gads.account')" class="w-full sm:w-[220px]" :options="accountOptions" />
      <div class="relative w-full sm:w-[240px]">
        <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input v-model="query" :aria-label="t('gads.search')" class="h-9 bg-card pl-9" :placeholder="t('gads.searchPlaceholder')" />
      </div>
      <Checkbox v-if="barFilters.isShown('with_issues')" id="gads-with-issues" v-model="withIssues" :label="t('gads.withIssues')" />
      <FiltersMenu v-model:shown="barFilters.shown.value" :filters="availableFilters" :label="filterLabel" />
    </div>
    <p v-if="parent" class="flex flex-wrap items-center gap-1 text-[14px]">
      <button type="button" class="text-muted-foreground hover:text-foreground hover:underline" @click="pickLevel(parent.level)">{{ t(`gads.levelPlural.${parent.level}` as Key) }}</button>
      <ChevronRight class="size-4 text-muted-foreground" aria-hidden="true" />
      <span class="font-medium">{{ parent.name }}</span>
    </p>
    <div v-if="!loadError && tiles.length" class="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-4 xl:grid-cols-7">
      <StatTile report v-for="tile in tiles" :key="tile.key" :label="t(tile.label as Key)" :value="tile.text" :tone="tile.tone" />
    </div>
    <div v-if="canManage && selected.length" class="flex flex-wrap items-center gap-3 rounded-lg border bg-card px-4 py-2.5" role="region" :aria-label="t('gads.control.bulk')">
      <span class="text-[14px]">{{ t('gads.control.selected', { n: selected.length }) }}</span>
      <Button size="sm" variant="outline" :disabled="switching" @click="setStatus(selected, true)">{{ t('gads.control.activate') }}</Button>
      <Button size="sm" variant="outline" :disabled="switching" @click="setStatus(selected, false)">{{ t('gads.control.pause') }}</Button>
      <Button size="sm" variant="ghost" @click="selected = []">{{ t('gads.control.clear') }}</Button>
    </div>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="internal || canManage ? 1240 : 1120">
      <thead>
        <tr>
          <th v-if="canManage" :class="[th, 'w-10']">
            <input type="checkbox" class="size-4 accent-primary" :checked="allSelected" :aria-label="t('gads.control.selectAll')" @change="(event) => pickAll((event.target as HTMLInputElement).checked)" />
          </th>
          <th :class="th">{{ t(`gads.level.${level}` as Key) }}</th>
          <th v-if="internal" :class="th">{{ t('gads.col.client') }}</th>
          <th v-if="canManage" :class="th">{{ t('gads.control.on') }}</th>
          <th :class="th">{{ t('gads.col.state') }}</th>
          <th :class="[th, 'text-right']">{{ t('gads.metric.spend') }}</th>
          <th :class="[th, 'text-right']">{{ t('gads.metric.clicks') }}</th>
          <th :class="[th, 'text-right']">{{ t('gads.metric.cpc') }}</th>
          <th :class="[th, 'text-right']">{{ t('gads.metric.conversions') }}</th>
          <th :class="[th, 'text-right']">{{ t('gads.metric.revenue') }}</th>
          <th :class="[th, 'text-right']">{{ t('gads.metric.profit') }}</th>
          <th :class="[th, 'text-right']">{{ t('gads.metric.roi') }}</th>
          <th :class="th"><span class="sr-only">{{ t('gads.details') }}</span></th>
        </tr>
      </thead>
      <tbody>
        <TableState :cols="columns" :loading="!items" :empty="items?.length === 0" :desc="t('gads.objects.empty')" />
        <tr v-for="item in items ?? []" :key="item.id" class="hover:bg-muted">
          <td v-if="canManage" :class="td">
            <input type="checkbox" class="size-4 accent-primary" :checked="selected.includes(item.external_id)" :aria-label="t('gads.control.select', { name: item.name })" @change="(event) => pick(item.external_id, (event.target as HTMLInputElement).checked)" />
          </td>
          <td :class="td">
            <button type="button" class="text-left font-medium hover:underline" @click="open(item)">{{ item.name }}</button>
            <span class="block text-[12px] text-muted-foreground">{{ item.account.name }}<template v-if="item.channel_type"> · {{ t(channelKey(item.channel_type)) }}</template></span>
          </td>
          <td v-if="internal" :class="td">{{ clientName(item.company_id) }}</td>
          <td v-if="canManage" :class="td">
            <Switch :model-value="item.active" :label="t('gads.control.toggle', { name: item.name })" :disabled="switching || item.status === 'REMOVED'" @update:model-value="(active) => setStatus([item.external_id], active)" />
          </td>
          <td :class="td"><Status :tone="objectState(item).tone">{{ t(objectState(item).key) }}</Status></td>
          <td :class="[td, 'text-right tnum']">{{ formatMoney(item.totals.spend, item.account.currency, locale) }}</td>
          <td :class="[td, 'text-right tnum']">{{ formatCount(item.totals.clicks, locale) }}</td>
          <td :class="[td, 'text-right tnum']">{{ formatMoney(item.totals.cpc, item.account.currency, locale) }}</td>
          <td :class="[td, 'text-right tnum']">{{ formatCount(item.totals.conversions, locale) }}</td>
          <td :class="[td, 'text-right tnum']">{{ formatMoney(item.totals.revenue, item.account.currency, locale) }}</td>
          <td :class="[td, 'text-right tnum', Number(item.totals.profit) < 0 ? 'text-bad' : '']">{{ formatMoney(item.totals.profit, item.account.currency, locale) }}</td>
          <td :class="[td, 'text-right tnum', roiTone(item.totals.roi)]">{{ formatRatio(item.totals.roi, locale) }}</td>
          <td :class="[td, 'text-right']">
            <OpenLink :to="{ path: objectPath(internal, item), query: periodQuery(period) }" :name="item.name" />
          </td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
    <p class="text-[13px] text-muted-foreground">{{ t('gads.objects.foot') }}</p>
  </PageBody>
</template>
