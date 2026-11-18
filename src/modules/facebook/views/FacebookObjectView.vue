<script setup lang="ts">
/** Uma campanha, conjunto ou anúncio do Facebook: números do período, por dia, por país e o histórico dele. */
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import DataTable from '@/components/ui/DataTable.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Status from '@/components/ui/Status.vue'
import { ApiError } from '@/lib/api'
import { errorText, locale, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import FacebookHistoryPanel from '@/modules/facebook/components/FacebookHistoryPanel.vue'
import { PERIODS, campaignsPath, formatCount, formatMoney, formatRatio, objectState, periodRange } from '@/modules/facebook/rules'
import { facebookReader } from '@/modules/facebook/service'
import type { FacebookObjectDetail, FacebookTotals } from '@/modules/facebook/types'

const route = useRoute()
const internal = route.meta.internal === true
const reader = facebookReader(internal)
const base = campaignsPath(internal)
const externalId = String(route.params.id)

const days = ref(typeof route.query.dias === 'string' && PERIODS.map(String).includes(route.query.dias) ? route.query.dias : '7')
const detail = ref<FacebookObjectDetail | null>(null)
const loadError = ref<string | null>(null)
const periodOptions = computed(() => PERIODS.map((count) => ({ value: String(count), label: t('fb.period.days', { n: count }) })))
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
    detail.value = await reader.object(externalId, periodRange(Number(days.value), new Date()))
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

onMounted(load)
watch(days, load)
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
      <NativeSelect v-model="days" :aria-label="t('fb.period')" class="w-[160px]" :options="periodOptions" />
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
      </div>
      <dl class="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-4">
        <div v-for="item in summary" :key="item.key" class="bg-card p-4">
          <dt class="text-[13px] text-muted-foreground">{{ t(item.key) }}</dt>
          <dd class="mt-1 text-[20px] font-semibold tracking-tight tnum">{{ item.value }}</dd>
        </div>
      </dl>
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
      <section class="grid gap-3">
        <h2 class="text-[20px] font-semibold tracking-tight">{{ t('fb.tab.history') }}</h2>
        <FacebookHistoryPanel :internal="internal" company-id="" :object-id="externalId" :account-name="() => detail?.account.name ?? '–'" :client-name="() => ''" />
      </section>
    </template>
  </PageBody>
</template>
