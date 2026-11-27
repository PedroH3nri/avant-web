<script setup lang="ts">
/** Controle de custos: quanto cada integração e cada pessoa gasta em anúncios e quanto esse gasto traz de receita, na Empresa ativa ou, no painel interno, num cliente. */
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import LineChart from '@/components/charts/LineChart.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import StatTile from '@/components/StatTile.vue'
import Avatar from '@/components/ui/Avatar.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import DateRangePicker from '@/components/ui/DateRangePicker.vue'
import Select from '@/components/ui/Select.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { todayIso } from '@/lib/dates'
import { errorText, locale, t, type Key } from '@/lib/i18n'
import { colorVar, metricColor } from '@/lib/metric-colors'
import { periodFromQuery, periodPresets, periodQuery, type PeriodValue } from '@/lib/periods'
import { td, th } from '@/lib/table'
import { cn } from '@/lib/utils'
import { formatMoney, formatRatio, roiTone } from '@/modules/facebook/rules'
import { clientService } from '@/modules/internal/clients/service'
import { accountRoi, byIntegration, byPerson, COST_INTEGRATIONS, COST_MAX_DAYS, COST_PRESETS, costTotals, INTEGRATION_COLOR, INTERNAL_PERMISSION, limitUse, personKey, spendShare } from '@/modules/cost_control/rules'
import { costControlService } from '@/modules/cost_control/service'
import type { CostControl, CostControlAccount, CostIntegration } from '@/modules/cost_control/types'
import FiltersMenu from '@/modules/views/components/FiltersMenu.vue'
import { useLocalBarFilters } from '@/modules/views/barFilters'
import { useSession } from '@/stores/session'

const FILTERS = ['integration', 'person']
const PERSON_ID = /^[0-9a-f-]{36}$/
const FILTER_LABELS: Record<string, Key> = { integration: 'cc.integration', person: 'cc.person' }

const route = useRoute()
const router = useRouter()
const session = useSession()
const internal = route.meta.internal === true
const period = ref<PeriodValue>(periodFromQuery(route.query, COST_PRESETS, 'this_month', todayIso(), true))
const integration = ref<CostIntegration | ''>('')
const person = ref('')
const companyId = ref(typeof route.query.cliente === 'string' ? route.query.cliente : '')
const clients = ref<{ id: string; name: string }[]>([])
const control = ref<CostControl | null>(null)
const loading = ref(false)
const loadError = ref<string | null>(null)
const barFilters = useLocalBarFilters('cost-control', FILTERS, FILTERS, {
  integration: () => (integration.value = ''),
  person: () => (person.value = ''),
})
const peopleSeen = ref<{ value: string; label: string }[]>([])
let latestLoad = 0

const presets = computed(() => periodPresets(COST_PRESETS, todayIso(), true))
const currency = computed(() => control.value?.currency ?? session.displayCurrency)
const ownerName = computed(() => t('cc.owner'))
const allAccounts = computed(() => control.value?.accounts ?? [])
const accounts = computed(() => allAccounts.value.filter((account) => (!integration.value || account.integration === integration.value) && (!person.value || personKey(account) === person.value)))
const totals = computed(() => costTotals(accounts.value))
const integrations = computed(() => byIntegration(accounts.value))
const people = computed(() => byPerson(accounts.value, ownerName.value, t('cc.unknownPerson')))
const thisMonth = computed(() => period.value.preset === 'this_month')
const integrationOptions = computed(() => [
  { value: '', label: t('cc.allIntegrations') },
  ...COST_INTEGRATIONS.filter((key) => !internal || session.can(INTERNAL_PERMISSION[key])).map((key) => ({ value: key, label: t(`cc.int.${key}` as Key) })),
])
const personOptions = computed(() => [{ value: '', label: t('cc.allPeople') }, ...peopleSeen.value])
const clientOptions = computed(() => [{ value: '', label: t('cc.pickClient') }, ...clients.value.map((client) => ({ value: client.id, label: client.name }))])
const shortDay = computed(() => new Intl.DateTimeFormat(locale.value, { day: '2-digit', month: '2-digit', timeZone: 'UTC' }))
const chart = computed(() => {
  const days = control.value?.days ?? []
  return {
    labels: days.map((day) => shortDay.value.format(new Date(`${day.day}T00:00:00Z`))),
    series: [
      { key: 'revenue', name: t('cc.revenue'), values: days.map((day) => Number(day.revenue)), color: colorVar(metricColor('fb_revenue')) },
      { key: 'spend', name: t('cc.spend'), values: days.map((day) => Number(day.spend)), color: colorVar(metricColor('fb_spend')) },
    ],
  }
})
const tiles = computed(() => [
  { key: 'spend', label: t('cc.spendTile'), value: money(totals.value.spend), hint: t('cc.accountsCount', { n: totals.value.accounts }), tone: '' },
  { key: 'revenue', label: t('cc.revenue'), value: money(totals.value.revenue), hint: t('cc.revenueHint'), tone: '' },
  { key: 'profit', label: t('cc.profit'), value: money(totals.value.profit), hint: t('cc.profitHint'), tone: roiTone(totals.value.profit) },
  {
    key: 'roi',
    label: t('cc.roi'),
    value: formatRatio(totals.value.roi, locale.value),
    hint: totals.value.noSite ? t('cc.noSiteLeftOut', { n: totals.value.noSite }) : t('cc.allWithSite'),
    tone: roiTone(totals.value.roi),
  },
])

/** A largura da barra em porcentagem: uma parte acima de zero aparece com pelo menos 2%. */
function barWidth(share: number): number {
  return share > 0 ? Math.max(2, share * 100) : 0
}

/** Valor na moeda do Controle de custos. */
function money(value: number | string | null): string {
  return formatMoney(value === null ? null : String(value), currency.value, locale.value)
}

/** O nome da pessoa de uma conta, ou o dono quando a conta não tem ninguém cadastrado. */
function personName(account: CostControlAccount): string {
  return account.person?.name ?? (account.by_owner ? ownerName.value : t('cc.unknownPerson'))
}

/** O lucro de uma conta com site; sem site, vazio. */
function accountProfit(account: CostControlAccount): number | null {
  return account.revenue === null ? null : Number(account.revenue) - Number(account.spend)
}

/** Põe o filtro na barra, se ainda não estiver, para o filtro escolhido na tabela aparecer. */
function showFilter(key: string) {
  if (!barFilters.isShown(key)) barFilters.shown.value = [...barFilters.shown.value, key]
}

/** Liga ou desliga o filtro por integração ao clicar na linha dela. */
function toggleIntegration(key: CostIntegration) {
  showFilter('integration')
  integration.value = integration.value === key ? '' : key
}

/** Liga ou desliga o filtro por pessoa ao clicar na linha dela. */
function togglePerson(key: string) {
  showFilter('person')
  person.value = person.value === key ? '' : key
}

/** Carrega o período na moeda da pessoa; no painel interno, só com um cliente escolhido. */
async function load() {
  const current = ++latestLoad
  loadError.value = null
  if (internal && !companyId.value) {
    control.value = null
    return
  }
  loading.value = true
  try {
    const query = {
      from: period.value.start,
      to: period.value.end,
      currency: session.displayCurrency,
      integration: integration.value || undefined,
      user_id: PERSON_ID.test(person.value) ? person.value : undefined,
    }
    const found = internal ? await costControlService.client({ ...query, company_id: companyId.value }) : await costControlService.company(query)
    if (current !== latestLoad) return
    control.value = found
    if (!person.value) peopleSeen.value = byPerson(found.accounts, ownerName.value, t('cc.unknownPerson')).map((item) => ({ value: item.key, label: item.name }))
  } catch (error) {
    if (current === latestLoad) loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  } finally {
    if (current === latestLoad) loading.value = false
  }
}

onMounted(() => {
  void load()
  if (internal) void clientService.companyOptions().then((found) => (clients.value = found.items)).catch(() => undefined)
})
watch(companyId, () => {
  control.value = null
  peopleSeen.value = []
})
watch([integration, person], () => void load())
watch([period, companyId, () => session.displayCurrency], () => {
  void router.replace({ query: { ...periodQuery(period.value), ...(internal && companyId.value ? { cliente: companyId.value } : {}) } })
  person.value = ''
  void load()
})
</script>

<template>
  <PageHeader :title="t('cc.title')" :sub="internal ? t('cc.subInternal') : t('cc.sub')" />
  <PageBody>
    <div class="flex flex-wrap items-center gap-3">
      <Select v-if="internal" v-model="companyId" :aria-label="t('cc.client')" class="w-full sm:w-[240px]" :options="clientOptions" />
      <DateRangePicker v-model="period" :presets="presets" :max-days="COST_MAX_DAYS" :aria-label="t('cc.period')" class="w-full sm:w-auto" />
      <Select v-if="barFilters.isShown('integration')" v-model="integration" :aria-label="t('cc.integration')" class="w-full sm:w-[200px]" :options="integrationOptions" />
      <Select v-if="barFilters.isShown('person')" v-model="person" :aria-label="t('cc.person')" class="w-full sm:w-[220px]" :options="personOptions" />
      <FiltersMenu v-model:shown="barFilters.shown.value" :filters="FILTERS" :label="(filter) => t(FILTER_LABELS[filter] as Key)" />
    </div>

    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <p v-else-if="internal && !companyId" class="rounded-lg border bg-card p-6 text-[14px] text-muted-foreground">{{ t('cc.pickClientHint') }}</p>
    <template v-else>
      <div class="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-4">
        <StatTile v-for="tile in tiles" :key="tile.key" report :label="tile.label" :value="control ? tile.value : '–'" :hint="tile.hint" :tone="cn('tnum', tile.tone)" />
      </div>

      <Card :title="t('cc.chartTitle')" :desc="t('cc.chartDesc')">
        <LineChart :labels="chart.labels" :series="chart.series" :format="(value) => money(value ?? 0)" :description="t('cc.chartTitle')" :height="240" />
      </Card>

      <section class="grid gap-3">
        <div>
          <h2 class="text-[20px] font-semibold tracking-tight">{{ t('cc.byIntegration') }}</h2>
          <p class="mt-1 text-[14px] text-muted-foreground">{{ t('cc.byIntegrationDesc') }}</p>
        </div>
        <DataTable :min="860">
          <thead>
            <tr>
              <th :class="th">{{ t('cc.integration') }}</th>
              <th :class="[th, 'text-right']">{{ t('cc.accounts') }}</th>
              <th :class="th">{{ t('cc.share') }}</th>
              <th :class="[th, 'text-right']">{{ t('cc.spend') }}</th>
              <th :class="[th, 'text-right']">{{ t('cc.revenue') }}</th>
              <th :class="[th, 'text-right']">{{ t('cc.profit') }}</th>
              <th :class="[th, 'text-right']">{{ t('cc.roi') }}</th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="7" :loading="loading && !control" :empty="!integrations.length" :desc="t('cc.empty')" />
            <tr v-for="item in integrations" :key="item.integration" :class="cn('cursor-pointer hover:bg-muted', integration === item.integration && 'bg-muted')" @click="toggleIntegration(item.integration)">
              <td :class="td">
                <button type="button" :aria-pressed="integration === item.integration" class="flex items-center gap-2 rounded-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" @click.stop="toggleIntegration(item.integration)">
                  <span class="size-2.5 rounded-full" :style="{ background: INTEGRATION_COLOR[item.integration] }" aria-hidden="true" />{{ t(`cc.int.${item.integration}` as Key) }}
                </button>
              </td>
              <td :class="[td, 'text-right tnum']">{{ item.accounts }}</td>
              <td :class="td">
                <span class="flex items-center gap-3">
                  <span class="h-2 w-32 rounded-full bg-secondary"><span class="block h-2 rounded-full" :style="{ width: `${barWidth(spendShare(item.spend, totals.spend))}%`, background: INTEGRATION_COLOR[item.integration] }" /></span>
                  <span class="tnum text-[13px]">{{ formatRatio(spendShare(item.spend, totals.spend), locale) }}</span>
                </span>
              </td>
              <td :class="[td, 'text-right tnum']">{{ money(item.spend) }}</td>
              <td :class="[td, 'text-right tnum']">{{ money(item.revenue) }}</td>
              <td :class="[td, 'text-right tnum', roiTone(item.profit)]">{{ money(item.profit) }}</td>
              <td :class="[td, 'whitespace-nowrap text-right tnum', roiTone(item.roi)]">{{ formatRatio(item.roi, locale) }}</td>
            </tr>
          </tbody>
        </DataTable>
      </section>

      <section class="grid gap-3">
        <div>
          <h2 class="text-[20px] font-semibold tracking-tight">{{ t('cc.byPerson') }}</h2>
          <p class="mt-1 text-[14px] text-muted-foreground">{{ t('cc.byPersonDesc') }}</p>
        </div>
        <DataTable :min="980">
          <thead>
            <tr>
              <th :class="th">{{ t('cc.person') }}</th>
              <th :class="th">{{ t('cc.integrations') }}</th>
              <th :class="[th, 'text-right']">{{ t('cc.accounts') }}</th>
              <th :class="th">{{ t('cc.share') }}</th>
              <th :class="[th, 'text-right']">{{ t('cc.spend') }}</th>
              <th :class="[th, 'text-right']">{{ t('cc.revenue') }}</th>
              <th :class="[th, 'text-right']">{{ t('cc.profit') }}</th>
              <th :class="[th, 'text-right']">{{ t('cc.roi') }}</th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="8" :loading="loading && !control" :empty="!people.length" :desc="t('cc.empty')" />
            <tr v-for="item in people" :key="item.key" :class="cn('cursor-pointer hover:bg-muted', person === item.key && 'bg-muted')" @click="togglePerson(item.key)">
              <td :class="td">
                <button type="button" :aria-pressed="person === item.key" class="flex items-center gap-3 rounded-sm text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" @click.stop="togglePerson(item.key)">
                  <Avatar :name="item.name" :size="28" /><span class="font-medium">{{ item.name }}</span><Badge v-if="item.byOwner">{{ t('cc.ownerBadge') }}</Badge>
                </button>
              </td>
              <td :class="td">
                <span class="flex flex-wrap gap-1.5">
                  <span v-for="key in item.integrations" :key="key" class="inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[12px]">
                    <span class="size-2 rounded-full" :style="{ background: INTEGRATION_COLOR[key] }" aria-hidden="true" />{{ t(`cc.int.${key}` as Key) }}
                  </span>
                </span>
              </td>
              <td :class="[td, 'text-right tnum']">{{ item.accounts }}</td>
              <td :class="td">
                <span class="flex items-center gap-3">
                  <span class="h-2 w-32 rounded-full bg-secondary"><span class="block h-2 rounded-full bg-foreground" :style="{ width: `${barWidth(spendShare(item.spend, totals.spend))}%` }" /></span>
                  <span class="tnum text-[13px]">{{ formatRatio(spendShare(item.spend, totals.spend), locale) }}</span>
                </span>
              </td>
              <td :class="[td, 'text-right tnum']">{{ money(item.spend) }}</td>
              <td :class="[td, 'text-right tnum']">{{ money(item.revenue) }}</td>
              <td :class="[td, 'text-right tnum', roiTone(item.profit)]">{{ money(item.profit) }}</td>
              <td :class="[td, 'whitespace-nowrap text-right tnum', roiTone(item.roi)]">{{ formatRatio(item.roi, locale) }}</td>
            </tr>
          </tbody>
        </DataTable>
      </section>

      <section class="grid gap-3">
        <div class="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 class="text-[20px] font-semibold tracking-tight">{{ t('cc.byAccount') }}</h2>
            <p class="mt-1 text-[14px] text-muted-foreground">{{ t('cc.byAccountDesc') }}</p>
          </div>
          <div v-if="!internal" class="flex gap-2">
            <Button v-if="session.can('facebook.view')" size="sm" variant="outline" @click="router.push('/campanhas-facebook')">{{ t('cc.int.facebook') }}</Button>
            <Button v-if="session.can('google_ads.view')" size="sm" variant="outline" @click="router.push('/campanhas-google-ads')">{{ t('cc.int.google_ads') }}</Button>
          </div>
        </div>
        <DataTable :min="980">
          <thead>
            <tr>
              <th :class="th">{{ t('cc.account') }}</th>
              <th :class="th">{{ t('cc.person') }}</th>
              <th :class="th">{{ thisMonth ? t('cc.monthAndLimit') : t('cc.spend') }}</th>
              <th :class="[th, 'text-right']">{{ t('cc.revenue') }}</th>
              <th :class="[th, 'text-right']">{{ t('cc.profit') }}</th>
              <th :class="[th, 'text-right']">{{ t('cc.roi') }}</th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="6" :loading="loading && !control" :empty="!accounts.length" :desc="t('cc.empty')" />
            <tr v-for="account in accounts" :key="account.account_id" class="hover:bg-muted">
              <td :class="td">
                <div class="flex items-center gap-2 font-medium"><span class="size-2 shrink-0 rounded-full" :style="{ background: INTEGRATION_COLOR[account.integration] }" aria-hidden="true" />{{ account.name }}</div>
                <div class="text-[12px] text-muted-foreground">{{ t(`cc.int.${account.integration}` as Key) }} · {{ account.site_domain ?? t('cc.noSite') }}</div>
              </td>
              <td :class="[td, 'whitespace-nowrap']">{{ personName(account) }}</td>
              <td :class="td">
                <div v-if="thisMonth" class="grid gap-1">
                  <span class="tnum text-[13px]">{{ account.monthly_limit === null ? t('cc.noLimit', { spend: money(account.month_spend) }) : t('cc.ofLimit', { spend: money(account.month_spend), limit: money(account.monthly_limit) }) }}</span>
                  <span v-if="limitUse(account) !== null" class="h-1.5 w-32 rounded-full bg-secondary"><span :class="cn('block h-1.5 rounded-full', (limitUse(account) ?? 0) >= 1 ? 'bg-bad' : 'bg-foreground')" :style="{ width: `${barWidth(limitUse(account) ?? 0)}%` }" /></span>
                </div>
                <span v-else class="tnum">{{ money(account.spend) }}</span>
              </td>
              <td :class="[td, 'text-right tnum']"><span v-if="account.revenue === null" class="text-muted-foreground">–</span><template v-else>{{ money(account.revenue) }}</template></td>
              <td :class="[td, 'text-right tnum', roiTone(accountProfit(account))]"><span v-if="accountProfit(account) === null" class="text-muted-foreground">–</span><template v-else>{{ money(accountProfit(account)) }}</template></td>
              <td :class="[td, 'whitespace-nowrap text-right tnum', roiTone(accountRoi(account))]">{{ formatRatio(accountRoi(account), locale) }}</td>
            </tr>
          </tbody>
        </DataTable>
        <p class="text-[13px] text-muted-foreground">{{ t('cc.footer') }}</p>
      </section>
    </template>
  </PageBody>
</template>
