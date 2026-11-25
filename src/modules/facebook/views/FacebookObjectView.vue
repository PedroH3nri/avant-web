<script setup lang="ts">
/** Uma campanha, conjunto ou anúncio do Facebook: números do período, por dia e por país, ligar ou pausar, orçamento,
 * regras automáticas com as decisões e o histórico dele. */
import StatTile from '@/components/StatTile.vue'
import DateRangePicker from '@/components/ui/DateRangePicker.vue'
import { todayIso } from '@/lib/dates'
import { periodFromQuery, periodPresets, type PeriodValue } from '@/lib/periods'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { ArrowLeft, Copy, ExternalLink, Pencil } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Status from '@/components/ui/Status.vue'
import { ApiError } from '@/lib/api'
import { errorText, locale, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import FacebookBudgetCard from '@/modules/facebook/components/FacebookBudgetCard.vue'
import FacebookDecisionsPanel from '@/modules/facebook/components/FacebookDecisionsPanel.vue'
import FacebookHistoryPanel from '@/modules/facebook/components/FacebookHistoryPanel.vue'
import FacebookJobDialog from '@/modules/facebook/components/FacebookJobDialog.vue'
import FacebookRulesCard from '@/modules/facebook/components/FacebookRulesCard.vue'
import { ACCOUNT_QUALITY_URL, ADS_MAX_DAYS, ADS_PRESETS, campaignsPath, controlErrorText, formatCount, formatMoney, formatRatio, objectState } from '@/modules/facebook/rules'
import { facebookReader, facebookService } from '@/modules/facebook/service'
import { useSession } from '@/stores/session'
import type { FacebookJob, FacebookObjectDetail, FacebookTotals } from '@/modules/facebook/types'

const route = useRoute()
const router = useRouter()
const internal = route.meta.internal === true
const reader = facebookReader(internal)
const base = campaignsPath(internal)
const externalId = String(route.params.id)
const session = useSession()
const canManage = computed(() => !internal && session.can('facebook.manage'))
const switching = ref(false)
const duplicating = ref(false)
const job = ref<FacebookJob | null>(null)
const following = ref(false)

const period = ref<PeriodValue>(periodFromQuery(route.query, ADS_PRESETS, 'last_7_days', todayIso(), true))
const detail = ref<FacebookObjectDetail | null>(null)
const loadError = ref<string | null>(null)
const presets = computed(() => periodPresets(ADS_PRESETS, todayIso(), true))
const currency = computed(() => detail.value?.account.currency ?? 'USD')

/** Os números que a tela mostra em cartões e nas tabelas. */
const summary = computed(() => {
  const totals = detail.value?.totals
  if (!totals) return []
  return [
    { key: 'fb.metric.spend' as Key, value: formatMoney(totals.spend, currency.value, locale.value) },
    { key: 'fb.metric.revenue' as Key, value: formatMoney(totals.revenue, currency.value, locale.value) },
    { key: 'fb.metric.profit' as Key, value: formatMoney(totals.profit, currency.value, locale.value) },
    { key: 'fb.metric.roi' as Key, value: formatRatio(totals.roi, locale.value) },
    { key: 'fb.metric.linkClicks' as Key, value: formatCount(totals.link_clicks, locale.value) },
    { key: 'fb.metric.cpc' as Key, value: formatMoney(totals.cpc, currency.value, locale.value) },
    { key: 'fb.metric.ctr' as Key, value: formatRatio(totals.ctr, locale.value) },
    { key: 'fb.metric.visits' as Key, value: formatCount(totals.visits, locale.value) },
  ]
})

/** Carrega o objeto com os números do período. */
async function load() {
  loadError.value = null
  try {
    detail.value = await reader.object(externalId, { from: period.value.start, to: period.value.end })
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** As colunas de uma linha por dia ou por país. */
const row = (totals: FacebookTotals) => [
  formatMoney(totals.spend, currency.value, locale.value),
  formatCount(totals.impressions, locale.value),
  formatCount(totals.link_clicks, locale.value),
  formatMoney(totals.revenue, currency.value, locale.value),
  formatMoney(totals.profit, currency.value, locale.value),
  formatRatio(totals.roi, locale.value),
]
const ROW_KEYS: Key[] = ['fb.metric.spend', 'fb.metric.impressions', 'fb.metric.linkClicks', 'fb.metric.revenue', 'fb.metric.profit', 'fb.metric.roi']

/** Liga ou pausa o objeto no Facebook; o erro de limite diz quanto ainda cabe. */
async function toggle() {
  if (!detail.value) return
  switching.value = true
  try {
    const result = await facebookService.setStatus([externalId], !detail.value.active)
    const failed = result.failed[externalId]
    if (failed) toast.error(errorText(failed))
    else toast.success(detail.value.active ? t('fb.control.paused', { n: 1 }) : t('fb.control.activated', { n: 1 }))
    await load()
  } catch (error) {
    const api = error instanceof ApiError ? error : null
    const limit = api ? controlErrorText(api.code, api.details, locale.value) : null
    toast.error(limit ? t(limit.key, limit.params) : errorText(api?.code ?? 'unknown'))
  } finally {
    switching.value = false
  }
}

/** Duplica o objeto no Facebook, com tudo dentro e pausado; a janela acompanha o job. */
async function duplicate() {
  duplicating.value = true
  try {
    job.value = await facebookService.duplicate(externalId)
    following.value = true
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    duplicating.value = false
  }
}

onMounted(load)
watch(period, load)
</script>

<template>
  <PageHeader :title="detail?.name ?? t('fb.loading')" :sub="detail ? `${t(`fb.level.${detail.level}` as Key)} · ${detail.account.name}` : undefined">
    <template #back>
      <RouterLink :to="base" class="mb-3 inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft class="size-4" aria-hidden="true" />{{ t('fb.campaignsTitle') }}</RouterLink>
    </template>
    <template #meta>
      <p v-if="detail" class="mt-3 flex flex-wrap items-center gap-3 text-[13px] text-muted-foreground">
        <Status :tone="objectState(detail).tone">{{ t(objectState(detail).key) }}</Status>
        <span v-if="detail.campaign">{{ t('fb.level.campaign') }}: {{ detail.campaign.name }}</span>
        <span v-if="detail.adset">{{ t('fb.level.adset') }}: {{ detail.adset.name }}</span>
        <span v-if="detail.daily_budget">{{ t('fb.dailyBudget') }}: {{ formatMoney(detail.daily_budget, currency, locale) }}</span>
      </p>
    </template>
    <template #actions>
      <Button v-if="canManage && detail" variant="outline" @click="router.push(`${base}/${externalId}/editar`)"><Pencil aria-hidden="true" />{{ t('fb.edit.action') }}</Button>
      <Button v-if="canManage && detail" variant="outline" :loading="duplicating" @click="duplicate"><Copy aria-hidden="true" />{{ t('fb.duplicate.action') }}</Button>
      <Button v-if="canManage && detail" variant="outline" :loading="switching" @click="toggle">{{ detail.active ? t('fb.control.pause') : t('fb.control.activate') }}</Button>
      <DateRangePicker v-model="period" :presets="presets" :max-days="ADS_MAX_DAYS" :aria-label="t('fb.period')" class="w-auto" />
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else-if="detail">
      <div v-if="detail.review === 'rejected' && detail.review_reasons.length" class="rounded-lg border border-bad/25 bg-card p-4 text-[14px]" role="alert">
        <p class="font-medium">{{ t('fb.rejectedTitle') }}</p>
        <ul class="mt-1 list-disc pl-5 text-muted-foreground">
          <li v-for="reason in detail.review_reasons" :key="reason">{{ reason }}</li>
        </ul>
        <a v-if="!internal" :href="ACCOUNT_QUALITY_URL" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-1 text-[13px] text-link hover:underline">{{ t('fb.appeal') }}<ExternalLink class="size-3.5" aria-hidden="true" /></a>
      </div>
      <div class="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-4">
        <StatTile v-for="item in summary" :key="item.key" :label="t(item.key)" :value="item.value" />
      </div>
      <p v-if="detail.totals.revenue === null" class="text-[13px] text-muted-foreground">{{ t('fb.noRevenue') }}</p>
      <section class="grid gap-3">
        <h2 class="text-[20px] font-semibold tracking-tight">{{ t('fb.byDay') }}</h2>
        <DataTable :min="760">
          <thead>
            <tr>
              <th :class="th">{{ t('fb.col.day') }}</th>
              <th v-for="key in ROW_KEYS" :key="key" :class="[th, 'text-right']">{{ t(key) }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="detail.daily.length === 0"><td :class="[td, 'py-8 text-center text-muted-foreground']" :colspan="7">{{ t('fb.noNumbers') }}</td></tr>
            <tr v-for="point in detail.daily" :key="point.day" class="hover:bg-muted">
              <td :class="[td, 'tnum']">{{ point.day }}</td>
              <td v-for="(value, index) in row(point.totals)" :key="index" :class="[td, 'text-right tnum']">{{ value }}</td>
            </tr>
          </tbody>
        </DataTable>
      </section>
      <section v-if="detail.countries.length" class="grid gap-3">
        <h2 class="text-[20px] font-semibold tracking-tight">{{ t('fb.byCountry') }}</h2>
        <DataTable :min="760">
          <thead>
            <tr>
              <th :class="th">{{ t('fb.col.country') }}</th>
              <th v-for="key in ROW_KEYS" :key="key" :class="[th, 'text-right']">{{ t(key) }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="country in detail.countries" :key="country.country" class="hover:bg-muted">
              <td :class="td">{{ country.country }}</td>
              <td v-for="(value, index) in row(country.totals)" :key="index" :class="[td, 'text-right tnum']">{{ value }}</td>
            </tr>
          </tbody>
        </DataTable>
      </section>
      <div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <FacebookBudgetCard :key="`${detail.daily_budget}-${detail.lifetime_budget}`" :detail="detail" :internal="internal" :read-only="!canManage" @saved="load" />
        <FacebookRulesCard :detail="detail" :internal="internal" :read-only="!canManage" />
      </div>
      <FacebookDecisionsPanel :external-id="externalId" :internal="internal" :currency="currency" />
      <section class="grid gap-3">
        <h2 class="text-[20px] font-semibold tracking-tight">{{ t('fb.tab.history') }}</h2>
        <FacebookHistoryPanel :internal="internal" company-id="" :object-id="externalId" :account-name="() => detail?.account.name ?? '–'" :client-name="() => ''" />
      </section>
    </template>
  </PageBody>
  <FacebookJobDialog v-model:open="following" :job="job" />
</template>
