<script setup lang="ts">
/** Uma campanha, grupo ou anúncio do Google Ads: números do período e por dia, o nível de baixo, as palavras-chave,
 * os termos de pesquisa, os posicionamentos e o histórico dele. */
import StatTile from '@/components/StatTile.vue'
import DateRangePicker from '@/components/ui/DateRangePicker.vue'
import { todayIso } from '@/lib/dates'
import { periodFromQuery, periodPresets, periodQuery, type PeriodValue } from '@/lib/periods'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { toast } from 'vue-sonner'
import { ArrowLeft } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import Switch from '@/components/ui/Switch.vue'
import Segmented from '@/components/ui/Segmented.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, locale, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import GoogleAdsBudgetCard from '@/modules/google_ads/components/GoogleAdsBudgetCard.vue'
import GoogleAdsDecisionsPanel from '@/modules/google_ads/components/GoogleAdsDecisionsPanel.vue'
import GoogleAdsHistoryPanel from '@/modules/google_ads/components/GoogleAdsHistoryPanel.vue'
import GoogleAdsRulesCard from '@/modules/google_ads/components/GoogleAdsRulesCard.vue'
import GoogleAdsTermsTable from '@/modules/google_ads/components/GoogleAdsTermsTable.vue'
import { ADS_MAX_DAYS, ADS_PRESETS, MANUAL_BIDDING, campaignsPath, channelKey, childLevel, controlErrorText, formatCount, formatMoney, formatRatio, isLevel, matchKey, objectPath, objectState, parseAmount, roiTone } from '@/modules/google_ads/rules'
import { googleAdsReader, googleAdsService } from '@/modules/google_ads/service'
import type { GoogleAdsControlResult, GoogleAdsKeyword, GoogleAdsLevel, GoogleAdsObject, GoogleAdsObjectDetail, GoogleAdsTerm, GoogleAdsTotals } from '@/modules/google_ads/types'
import { useSession } from '@/stores/session'

const route = useRoute()
const internal = route.meta.internal === true
const session = useSession()
const canManage = computed(() => !internal && session.can('google_ads.manage'))
const reader = googleAdsReader(internal)
const base = campaignsPath(internal)
const level = computed<GoogleAdsLevel>(() => (isLevel(route.params.level) ? route.params.level : 'campaign'))
const externalId = computed(() => String(route.params.id))
const child = computed(() => childLevel(level.value))

const period = ref<PeriodValue>(periodFromQuery(route.query, ADS_PRESETS, 'last_7_days', todayIso(), true))
const detail = ref<GoogleAdsObjectDetail | null>(null)
const children = ref<GoogleAdsObject[] | null>(null)
const keywords = ref<GoogleAdsKeyword[] | null>(null)
const terms = ref<GoogleAdsTerm[] | null>(null)
const termKind = ref('terms')
const loadError = ref<string | null>(null)
const presets = computed(() => periodPresets(ADS_PRESETS, todayIso(), true))
const currency = computed(() => detail.value?.account.currency ?? 'USD')
const showTerms = computed(() => !internal && level.value !== 'ad')
const switching = ref(false)
const editingKeyword = ref<GoogleAdsKeyword | null>(null)
const cpcText = ref('')
const cpcError = ref<string | null>(null)
const savingCpc = ref(false)
const decisionsPanel = ref<InstanceType<typeof GoogleAdsDecisionsPanel> | null>(null)
const campaignId = computed(() => (detail.value?.level === 'campaign' ? detail.value.external_id : detail.value?.campaign_external_id))
const manualBidding = computed(() => {
  const bidding = detail.value?.level === 'campaign' ? detail.value.bidding_strategy : detail.value?.campaign?.bidding_strategy
  return !!bidding && MANUAL_BIDDING.includes(bidding)
})
const keywordColumns = computed(() => (canManage.value ? 10 : 9))
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
const range = () => ({ from: period.value.start, to: period.value.end })

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

/** Mostra o que mudou num lote: quantos mudaram e o motivo do primeiro que o Google recusou. */
function reportControl(result: GoogleAdsControlResult, active: boolean) {
  if (result.done.length) toast.success(active ? t('gads.control.activated', { n: result.done.length }) : t('gads.control.paused', { n: result.done.length }))
  const failures = Object.values(result.failed)
  if (failures.length) toast.error(t('gads.control.failed', { n: failures.length, reason: errorText(failures[0] ?? 'unknown') }))
}

/** O texto do erro de um pedido de controle; o de limite diz quanto ainda cabe. */
function controlError(error: unknown): string {
  const api = error instanceof ApiError ? error : null
  const limit = api ? controlErrorText(api.code, api.details, locale.value) : null
  return limit ? t(limit.key, limit.params) : errorText(api?.code ?? 'unknown')
}

/** Liga ou pausa o objeto da tela no Google Ads. */
async function toggle() {
  if (!detail.value) return
  switching.value = true
  try {
    reportControl(await googleAdsService.setStatus(detail.value.level, [detail.value.external_id], !detail.value.active), !detail.value.active)
    await load()
  } catch (error) {
    toast.error(controlError(error))
  } finally {
    switching.value = false
  }
}

/** Liga ou pausa uma palavra-chave do grupo. */
async function toggleKeyword(keyword: GoogleAdsKeyword, active: boolean) {
  switching.value = true
  try {
    reportControl(await googleAdsService.setKeywordStatus(externalId.value, [keyword.criterion_id], active), active)
    keywords.value = await reader.keywords(externalId.value, range())
  } catch (error) {
    toast.error(controlError(error))
  } finally {
    switching.value = false
  }
}

/** Abre a janela do CPC máximo da palavra-chave. */
function editCpc(keyword: GoogleAdsKeyword) {
  editingKeyword.value = keyword
  cpcText.value = keyword.cpc_bid ?? detail.value?.cpc_bid ?? ''
  cpcError.value = null
}

/** Grava o CPC máximo novo da palavra-chave no Google Ads. */
async function saveCpc() {
  const keyword = editingKeyword.value
  const cpc = parseAmount(cpcText.value)
  if (!keyword || cpc === undefined) return
  savingCpc.value = true
  try {
    await googleAdsService.setKeywordCpc(externalId.value, keyword.criterion_id, cpc)
    toast.success(t('gads.keywords.cpcSaved'))
    editingKeyword.value = null
    keywords.value = await reader.keywords(externalId.value, range())
  } catch (error) {
    cpcError.value = controlError(error)
  } finally {
    savingCpc.value = false
  }
}

/** Recarrega a tela e as decisões depois de mudar o orçamento ou as regras. */
function reloadAll() {
  void load()
  void decisionsPanel.value?.load()
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
watch(period, load)
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
      <Button v-if="canManage && detail && detail.status !== 'REMOVED'" variant="outline" :loading="switching" @click="toggle">{{ detail.active ? t('gads.control.pause') : t('gads.control.activate') }}</Button>
      <DateRangePicker v-model="period" :presets="presets" :max-days="ADS_MAX_DAYS" :aria-label="t('gads.period')" class="w-auto" />
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
      <div class="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-4">
        <StatTile report v-for="item in summary" :key="item.key" :label="t(item.key)" :value="item.value" />
      </div>
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
              <td :class="td"><RouterLink :to="{ path: objectPath(internal, item), query: periodQuery(period) }" class="font-medium hover:underline">{{ item.name }}</RouterLink></td>
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
              <th v-if="canManage" :class="[th, 'w-14']"><span class="sr-only">{{ t('gads.control.on') }}</span></th>
              <th :class="th">{{ t('gads.keywords.col.keyword') }}</th>
              <th :class="th">{{ t('gads.col.state') }}</th>
              <th :class="[th, 'text-right']">{{ t('gads.keywords.col.maxCpc') }}</th>
              <th :class="[th, 'text-right']">{{ t('gads.keywords.col.quality') }}</th>
              <th :class="[th, 'text-right']">{{ t('gads.metric.spend') }}</th>
              <th :class="[th, 'text-right']">{{ t('gads.metric.clicks') }}</th>
              <th :class="[th, 'text-right']">{{ t('gads.metric.cpc') }}</th>
              <th :class="[th, 'text-right']">{{ t('gads.metric.revenue') }}</th>
              <th :class="[th, 'text-right']">{{ t('gads.metric.roi') }}</th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="keywordColumns" :loading="!keywords" :empty="keywords?.length === 0" :desc="t('gads.keywords.empty')" />
            <tr v-for="keyword in keywords ?? []" :key="keyword.id" class="hover:bg-muted">
              <td v-if="canManage" :class="td">
                <Switch :model-value="keyword.active" :label="t('gads.control.toggle', { name: keyword.text })" :disabled="switching || keyword.status === 'REMOVED'" @update:model-value="(active) => toggleKeyword(keyword, active)" />
              </td>
              <td :class="td">
                <span class="block font-medium">{{ keyword.text }}</span>
                <span class="block text-[12px] text-muted-foreground">{{ t(matchKey(keyword.match_type)) }}</span>
              </td>
              <td :class="td"><Status :tone="keyword.active ? 'ok' : 'neutral'">{{ keyword.active ? t('gads.state.active') : t('gads.state.paused') }}</Status></td>
              <td :class="[td, 'text-right tnum']">
                <span v-if="!manualBidding" class="text-[12px] text-muted-foreground">{{ t('gads.keywords.autoBid') }}</span>
                <button v-else-if="canManage" type="button" class="tnum hover:underline" :aria-label="t('gads.keywords.editCpc', { name: keyword.text })" @click="editCpc(keyword)">{{ formatMoney(keyword.cpc_bid ?? detail.cpc_bid, currency, locale) }}</button>
                <template v-else>{{ formatMoney(keyword.cpc_bid ?? detail.cpc_bid, currency, locale) }}</template>
              </td>
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
        <GoogleAdsTermsTable :key="termKind" :rows="terms" :currency="currency" :kind="termKind === 'placements' ? 'placements' : 'terms'" :campaign-id="campaignId" :can-manage="canManage" />
      </section>
      <div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <GoogleAdsBudgetCard :key="`${detail.external_id}-${detail.budget}`" :detail="detail" :internal="internal" :read-only="!canManage" @saved="reloadAll" />
        <GoogleAdsRulesCard :key="detail.external_id" :detail="detail" :internal="internal" :read-only="!canManage" :manual-bidding="manualBidding" @saved="reloadAll" />
      </div>
      <GoogleAdsDecisionsPanel ref="decisionsPanel" :key="`decisions-${detail.external_id}`" :level="detail.level" :external-id="detail.external_id" :internal="internal" :currency="currency" />
      <section class="grid gap-3">
        <h2 class="text-[20px] font-semibold tracking-tight">{{ t('gads.tab.history') }}</h2>
        <GoogleAdsHistoryPanel :internal="internal" company-id="" :key="externalId" :object-id="externalId" :account-name="() => detail?.account.name ?? '–'" :client-name="() => ''" />
      </section>
    </template>
  </PageBody>
  <Dialog :open="editingKeyword !== null" :title="t('gads.keywords.cpcTitle')" :desc="editingKeyword ? t('gads.keywords.cpcDesc', { name: editingKeyword.text }) : ''" @update:open="(open) => !open && (editingKeyword = null)">
    <Field id="gads-keyword-cpc" :label="t('gads.keywords.col.maxCpc')" :error="cpcError ?? (cpcText !== '' && parseAmount(cpcText) === undefined ? t('gads.budget.invalid') : null)">
      <Input id="gads-keyword-cpc" v-model="cpcText" inputmode="decimal" class="h-10 max-w-[200px] tnum" />
    </Field>
    <template #footer>
      <Button variant="outline" @click="editingKeyword = null">{{ t('common.cancel') }}</Button>
      <Button :loading="savingCpc" :disabled="parseAmount(cpcText) === undefined" @click="saveCpc">{{ t('common.save') }}</Button>
    </template>
  </Dialog>
</template>
