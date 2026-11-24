<script setup lang="ts">
/** Campanhas, grupos e anúncios do Google Ads com gasto, receita, lucro e ROI do período; no interno, de todos os clientes. */
import OpenLink from '@/components/OpenLink.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDebounceFn } from '@vueuse/core'
import { ChevronRight, Search } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Segmented from '@/components/ui/Segmented.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, locale, t, type Key } from '@/lib/i18n'
import FiltersMenu from '@/modules/views/components/FiltersMenu.vue'
import { useLocalBarFilters } from '@/modules/views/barFilters'
import { td, th } from '@/lib/table'
import { clientService } from '@/modules/internal/clients/service'
import { PERIODS, channelKey, childLevel, formatCount, formatMoney, formatRatio, objectPath, objectState, periodRange } from '@/modules/google_ads/rules'
import { googleAdsReader } from '@/modules/google_ads/service'
import type { GoogleAdsAccount, GoogleAdsLevel, GoogleAdsObject } from '@/modules/google_ads/types'

const FILTERS = ['client', 'with_issues']
const DEFAULT_FILTERS = ['client', 'with_issues']
const FILTER_LABELS: Record<string, Key> = {
  client: 'gads.col.client',
  with_issues: 'gads.withIssues',
}

const route = useRoute()
const router = useRouter()
const internal = route.meta.internal === true
const reader = googleAdsReader(internal)

const level = ref<GoogleAdsLevel>('campaign')
const parent = ref<{ id: string; name: string; level: GoogleAdsLevel } | null>(null)
const accountId = ref(typeof route.query.conta === 'string' ? route.query.conta : '')
const companyId = ref('')
const days = ref('7')
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

const levelOptions = computed(() => [
  { value: 'campaign', label: t('gads.level.campaign') },
  { value: 'ad_group', label: t('gads.level.ad_group') },
  { value: 'ad', label: t('gads.level.ad') },
])
const periodOptions = computed(() => PERIODS.map((count) => ({ value: String(count), label: t('gads.period.days', { n: count }) })))
const accountOptions = computed(() => [{ value: '', label: t('gads.allAccounts') }, ...accounts.value.map((account) => ({ value: account.id, label: account.name }))])
const clientOptions = computed(() => [{ value: '', label: t('gads.allClients') }, ...clients.value.map((client) => ({ value: client.id, label: client.name }))])
const columns = computed(() => (internal ? 11 : 10))

/** O nome do cliente pelo id da Empresa (só no painel interno). */
function clientName(id: string): string {
  return clients.value.find((client) => client.id === id)?.name ?? ''
}

/** Carrega a página com os filtros e o período. */
async function load() {
  loadError.value = null
  try {
    const found = await reader.objects({
      ...periodRange(Number(days.value), new Date()),
      level: level.value,
      parent: parent.value?.id,
      account_id: accountId.value || undefined,
      company_id: internal ? companyId.value || undefined : undefined,
      with_issues: withIssues.value || undefined,
      q: query.value.trim() || undefined,
      page: page.value,
    })
    items.value = found.items
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
  void router.push({ path: objectPath(internal, item), query: { dias: days.value } })
}

onMounted(() => {
  void load()
  void reader.accounts().then((found) => (accounts.value = found)).catch(() => undefined)
  if (internal) void clientService.companyOptions().then((found) => (clients.value = found.items)).catch(() => undefined)
})
watch(page, load)
watch(query, searchLater)
watch([level, parent, accountId, companyId, days, withIssues], refilter)
</script>

<template>
  <PageHeader :title="t('gads.campaignsTitle')" :sub="internal ? t('gads.campaignsSubInternal') : t('gads.campaignsSub')" />
  <PageBody>
    <div class="flex flex-wrap items-center gap-3">
      <Segmented :model-value="level" :label="t('gads.level')" :options="levelOptions" @update:model-value="pickLevel" />
      <Select v-model="days" :aria-label="t('gads.period')" class="w-full sm:w-[160px]" :options="periodOptions" />
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
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="internal ? 1240 : 1120">
      <thead>
        <tr>
          <th :class="th">{{ t(`gads.level.${level}` as Key) }}</th>
          <th v-if="internal" :class="th">{{ t('gads.col.client') }}</th>
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
          <td :class="td">
            <button type="button" class="text-left font-medium hover:underline" @click="open(item)">{{ item.name }}</button>
            <span class="block text-[12px] text-muted-foreground">{{ item.account.name }}<template v-if="item.channel_type"> · {{ t(channelKey(item.channel_type)) }}</template></span>
          </td>
          <td v-if="internal" :class="td">{{ clientName(item.company_id) }}</td>
          <td :class="td"><Status :tone="objectState(item).tone">{{ t(objectState(item).key) }}</Status></td>
          <td :class="[td, 'text-right tnum']">{{ formatMoney(item.totals.spend, item.account.currency, locale) }}</td>
          <td :class="[td, 'text-right tnum']">{{ formatCount(item.totals.clicks, locale) }}</td>
          <td :class="[td, 'text-right tnum']">{{ formatMoney(item.totals.cpc, item.account.currency, locale) }}</td>
          <td :class="[td, 'text-right tnum']">{{ formatCount(item.totals.conversions, locale) }}</td>
          <td :class="[td, 'text-right tnum']">{{ formatMoney(item.totals.revenue, item.account.currency, locale) }}</td>
          <td :class="[td, 'text-right tnum', Number(item.totals.profit) < 0 ? 'text-bad' : '']">{{ formatMoney(item.totals.profit, item.account.currency, locale) }}</td>
          <td :class="[td, 'text-right tnum']">{{ formatRatio(item.totals.roi, locale) }}</td>
          <td :class="[td, 'text-right']">
            <OpenLink :to="{ path: objectPath(internal, item), query: { dias: days } }" :name="item.name" />
          </td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
    <p class="text-[13px] text-muted-foreground">{{ t('gads.objects.foot') }}</p>
  </PageBody>
</template>
