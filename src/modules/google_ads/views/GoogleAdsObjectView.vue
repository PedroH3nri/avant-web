<script setup lang="ts">
/** Uma campanha, grupo ou anúncio do Google Ads: números do período e por dia, o nível de baixo, as palavras-chave,
 * os termos de pesquisa, os posicionamentos e o histórico dele. */
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Select from '@/components/ui/Select.vue'
import Segmented from '@/components/ui/Segmented.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, locale, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import GoogleAdsHistoryPanel from '@/modules/google_ads/components/GoogleAdsHistoryPanel.vue'
import GoogleAdsTermsTable from '@/modules/google_ads/components/GoogleAdsTermsTable.vue'
import { PERIODS, campaignsPath, channelKey, childLevel, formatCount, formatMoney, formatRatio, isLevel, matchKey, objectPath, objectState, periodRange, roiTone } from '@/modules/google_ads/rules'
import { googleAdsReader, googleAdsService } from '@/modules/google_ads/service'
import type { GoogleAdsKeyword, GoogleAdsLevel, GoogleAdsObject, GoogleAdsObjectDetail, GoogleAdsTerm, GoogleAdsTotals } from '@/modules/google_ads/types'

const route = useRoute()
const internal = route.meta.internal === true
const reader = googleAdsReader(internal)
const base = campaignsPath(internal)
const level = computed<GoogleAdsLevel>(() => (isLevel(route.params.level) ? route.params.level : 'campaign'))
const externalId = computed(() => String(route.params.id))
const child = computed(() => childLevel(level.value))

const days = ref(typeof route.query.dias === 'string' && PERIODS.map(String).includes(route.query.dias) ? route.query.dias : '7')
const detail = ref<GoogleAdsObjectDetail | null>(null)
const children = ref<GoogleAdsObject[] | null>(null)
const keywords = ref<GoogleAdsKeyword[] | null>(null)
const terms = ref<GoogleAdsTerm[] | null>(null)
const termKind = ref('terms')
const loadError = ref<string | null>(null)
const periodOptions = computed(() => PERIODS.map((count) => ({ value: String(count), label: t('gads.period.days', { n: count }) })))
const currency = computed(() => detail.value?.account.currency ?? 'USD')
const showTerms = computed(() => !internal && level.value !== 'ad')
const termOptions = computed(() => [
  { value: 'terms', label: t('gads.terms.title') },
  { value: 'placements', label: t('gads.placements.title') },
])

/** Os números que a tela mostra em cartões. */
const summary = computed(() => {
  const totals = detail.value?.totals
  if (!totals) return []
  return [
    { key: 'gads.metric.spend' as Key, value: formatMoney(totals.spend, currency.value, locale.value) },
    { key: 'gads.metric.revenue' as Key, value: formatMoney(totals.revenue, currency.value, locale.value) },
    { key: 'gads.metric.profit' as Key, value: formatMoney(totals.profit, currency.value, locale.value) },
    { key: 'gads.metric.roi' as Key, value: formatRatio(totals.roi, locale.value) },
    { key: 'gads.metric.clicks' as Key, value: formatCount(totals.clicks, locale.value) },
    { key: 'gads.metric.cpc' as Key, value: formatMoney(totals.cpc, currency.value, locale.value) },
    { key: 'gads.metric.ctr' as Key, value: formatRatio(totals.ctr, locale.value) },
    { key: 'gads.metric.visits' as Key, value: formatCount(totals.visits, locale.value) },
  ]
})

let loadRequest = 0
let termsRequest = 0

/** O período escolhido, como a API pede. */
const range = () => periodRange(Number(days.value), new Date())

/** Carrega o objeto, o nível de baixo e as palavras-chave do grupo. */
async function load() {
  loadError.value = null
  const request = ++loadRequest
  const objectLevel = level.value
  const objectId = externalId.value
  const childObjects = child.value
  try {
    const [found, foundChildren, foundKeywords] = await Promise.all([
      reader.object(objectLevel, objectId, range()),
      childObjects ? reader.objects({ ...range(), level: childObjects, parent: objectId }) : Promise.resolve(null),
      objectLevel === 'ad_group' ? reader.keywords(objectId, range()) : Promise.resolve(null),
    ])
    if (request !== loadRequest) return
    detail.value = found
    children.value = foundChildren?.items ?? null
    keywords.value = foundKeywords
  } catch (error) {
    if (request !== loadRequest) return
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
  void loadTerms()
}

/** Carrega os termos de pesquisa ou os posicionamentos do período (só no painel do cliente). */
async function loadTerms() {
  if (!showTerms.value) return
  const request = ++termsRequest
  terms.value = null
  const fetchRows = termKind.value === 'terms' ? googleAdsService.searchTerms : googleAdsService.placements
  const rows = await fetchRows(level.value, externalId.value, range()).catch(() => [])
  if (request === termsRequest) terms.value = rows
}

/** As colunas de uma linha por dia. */
const row = (totals: GoogleAdsTotals) => [
  formatMoney(totals.spend, currency.value, locale.value),
  formatCount(totals.impressions, locale.value),
  formatCount(totals.clicks, locale.value),
  formatMoney(totals.revenue, currency.value, locale.value),
  formatMoney(totals.profit, currency.value, locale.value),
  formatRatio(totals.roi, locale.value),
]
const ROW_KEYS: Key[] = ['gads.metric.spend', 'gads.metric.impressions', 'gads.metric.clicks', 'gads.metric.revenue', 'gads.metric.profit', 'gads.metric.roi']

/** Troca de objeto pelos links da própria tela: limpa o que era do anterior e carrega o novo. */
function reloadObject() {
  if (route.params.id === undefined) return
  detail.value = null
  children.value = null
  keywords.value = null
  void load()
}

onMounted(load)
watch(days, load)
watch([level, externalId], reloadObject)
watch(termKind, loadTerms)
</script>

<template>
  <PageHeader :title="detail?.name ?? t('gads.loading')" :sub="detail ? `${t(`gads.level.${detail.level}` as Key)} · ${detail.account.name}` : undefined">
    <template #back>
      <RouterLink :to="base" class="mb-3 inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft class="size-4" aria-hidden="true" />{{ t('gads.campaignsTitle') }}</RouterLink>
    </template>
    <template #meta>
      <p v-if="detail" class="mt-3 flex flex-wrap items-center gap-3 text-[13px] text-muted-foreground">
        <Status :tone="objectState(detail).tone">{{ t(objectState(detail).key) }}</Status>
        <span v-if="detail.channel_type">{{ t(channelKey(detail.channel_type)) }}</span>
        <RouterLink v-if="detail.campaign" :to="objectPath(internal, { level: 'campaign', external_id: detail.campaign.external_id })" class="hover:underline">{{ t('gads.level.campaign') }}: {{ detail.campaign.name }}</RouterLink>
        <RouterLink v-if="detail.ad_group" :to="objectPath(internal, { level: 'ad_group', external_id: detail.ad_group.external_id })" class="hover:underline">{{ t('gads.level.ad_group') }}: {{ detail.ad_group.name }}</RouterLink>
        <span v-if="detail.budget">{{ t('gads.dailyBudget') }}: {{ formatMoney(detail.budget, currency, locale) }}</span>
        <span v-if="detail.cpc_bid">{{ t('gads.cpcBid') }}: {{ formatMoney(detail.cpc_bid, currency, locale) }}</span>
      </p>
    </template>
    <template #actions>
      <Select v-model="days" :aria-label="t('gads.period')" class="w-[160px]" :options="periodOptions" />
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else-if="detail">
      <div v-if="(detail.review === 'disapproved' || detail.review === 'limited') && detail.review_reasons.length" :class="['rounded-lg border bg-card p-4 text-[14px]', detail.review === 'disapproved' ? 'border-bad/25' : 'border-ochre/40']" role="alert">
        <p class="font-medium">{{ detail.review === 'disapproved' ? t('gads.disapprovedTitle') : t('gads.limitedTitle') }}</p>
        <ul class="mt-1 list-disc pl-5 text-muted-foreground">
          <li v-for="reason in detail.review_reasons" :key="reason">{{ reason }}</li>
        </ul>
      </div>
      <p v-if="detail.final_url" class="text-[13px] text-muted-foreground">{{ t('gads.finalUrl') }}: <span class="font-mono">{{ detail.final_url }}</span></p>
      <dl class="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-4">
        <div v-for="item in summary" :key="item.key" class="kpi-motion relative bg-card p-4 transition-colors hover:bg-muted">
          <dt class="text-[13px] text-muted-foreground">{{ t(item.key) }}</dt>
          <dd class="mt-1 text-[20px] font-semibold tracking-tight tnum">{{ item.value }}</dd>
        </div>
      </dl>
      <p v-if="detail.totals.revenue === null" class="text-[13px] text-muted-foreground">{{ t('gads.noRevenue') }}</p>
      <p v-if="detail.channel_type === 'PERFORMANCE_MAX'" class="rounded-md border px-3 py-2 text-[13px] text-muted-foreground">{{ t('gads.pmaxNote') }}</p>
      <section class="grid gap-3">
        <h2 class="text-[20px] font-semibold tracking-tight">{{ t('gads.byDay') }}</h2>
        <DataTable :min="760">
          <thead>
            <tr>
              <th :class="th">{{ t('gads.col.day') }}</th>
              <th v-for="key in ROW_KEYS" :key="key" :class="[th, 'text-right']">{{ t(key) }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="detail.daily.length === 0"><td :class="[td, 'py-8 text-center text-muted-foreground']" :colspan="7">{{ t('gads.noNumbers') }}</td></tr>
            <tr v-for="point in detail.daily" :key="point.day" class="hover:bg-muted">
              <td :class="[td, 'tnum']">{{ point.day }}</td>
              <td v-for="(value, index) in row(point.totals)" :key="index" :class="[td, 'text-right tnum']">{{ value }}</td>
            </tr>
          </tbody>
        </DataTable>
      </section>
      <section v-if="child && children?.length" class="grid gap-3">
        <h2 class="text-[20px] font-semibold tracking-tight">{{ t(`gads.levelPlural.${child}` as Key) }}</h2>
        <DataTable :min="860">
          <thead>
            <tr>
              <th :class="th">{{ t(`gads.level.${child}` as Key) }}</th>
              <th :class="th">{{ t('gads.col.state') }}</th>
              <th v-for="key in ROW_KEYS" :key="key" :class="[th, 'text-right']">{{ t(key) }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in children" :key="item.id" class="hover:bg-muted">
              <td :class="td"><RouterLink :to="{ path: objectPath(internal, item), query: { dias: days } }" class="font-medium hover:underline">{{ item.name }}</RouterLink></td>
              <td :class="td"><Status :tone="objectState(item).tone">{{ t(objectState(item).key) }}</Status></td>
              <td v-for="(value, index) in row(item.totals)" :key="index" :class="[td, 'text-right tnum']">{{ value }}</td>
            </tr>
          </tbody>
        </DataTable>
      </section>
      <section v-if="level === 'ad_group'" class="grid gap-3">
        <div>
          <h2 class="text-[20px] font-semibold tracking-tight">{{ t('gads.keywords.title') }}</h2>
          <p class="mt-1 max-w-[80ch] text-[14px] text-muted-foreground">{{ t('gads.keywords.desc') }}</p>
        </div>
        <DataTable :min="960">
          <thead>
            <tr>
              <th :class="th">{{ t('gads.keywords.col.keyword') }}</th>
              <th :class="th">{{ t('gads.col.state') }}</th>
              <th :class="[th, 'text-right']">{{ t('gads.keywords.col.quality') }}</th>
              <th :class="[th, 'text-right']">{{ t('gads.metric.spend') }}</th>
              <th :class="[th, 'text-right']">{{ t('gads.metric.clicks') }}</th>
              <th :class="[th, 'text-right']">{{ t('gads.metric.cpc') }}</th>
              <th :class="[th, 'text-right']">{{ t('gads.metric.revenue') }}</th>
              <th :class="[th, 'text-right']">{{ t('gads.metric.roi') }}</th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="8" :loading="!keywords" :empty="keywords?.length === 0" :desc="t('gads.keywords.empty')" />
            <tr v-for="keyword in keywords ?? []" :key="keyword.id" class="hover:bg-muted">
              <td :class="td">
                <span class="block font-medium">{{ keyword.text }}</span>
                <span class="block text-[12px] text-muted-foreground">{{ t(matchKey(keyword.match_type)) }}</span>
              </td>
              <td :class="td"><Status :tone="keyword.active ? 'ok' : 'neutral'">{{ keyword.active ? t('gads.state.active') : t('gads.state.paused') }}</Status></td>
              <td :class="[td, 'text-right tnum']">{{ keyword.quality_score ?? '–' }}</td>
              <td :class="[td, 'text-right tnum']">{{ formatMoney(keyword.totals.spend, currency, locale) }}</td>
              <td :class="[td, 'text-right tnum']">{{ formatCount(keyword.totals.clicks, locale) }}</td>
              <td :class="[td, 'text-right tnum']">{{ formatMoney(keyword.totals.cpc, currency, locale) }}</td>
              <td :class="[td, 'text-right tnum']">{{ formatMoney(keyword.totals.revenue, currency, locale) }}</td>
              <td :class="[td, 'text-right tnum', roiTone(keyword.totals.roi)]">{{ formatRatio(keyword.totals.roi, locale) }}</td>
            </tr>
          </tbody>
        </DataTable>
      </section>
      <section v-if="showTerms" class="grid gap-3">
        <div class="flex flex-wrap items-center gap-3">
          <h2 class="mr-auto text-[20px] font-semibold tracking-tight">{{ termKind === 'terms' ? t('gads.terms.title') : t('gads.placements.title') }}</h2>
          <Segmented v-model="termKind" :label="t('gads.terms.switch')" :options="termOptions" />
        </div>
        <GoogleAdsTermsTable :rows="terms" :currency="currency" :kind="termKind === 'placements' ? 'placements' : 'terms'" />
      </section>
      <section class="grid gap-3">
        <h2 class="text-[20px] font-semibold tracking-tight">{{ t('gads.tab.history') }}</h2>
        <GoogleAdsHistoryPanel :internal="internal" company-id="" :key="externalId" :object-id="externalId" :account-name="() => detail?.account.name ?? '–'" :client-name="() => ''" />
      </section>
    </template>
  </PageBody>
</template>
