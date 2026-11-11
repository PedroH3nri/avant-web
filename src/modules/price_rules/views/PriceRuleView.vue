<script setup lang="ts">
/** Histórico de uma regra de preço: números de 24 horas, gráfico por hora, os limites (do motor ou à mão, com floors nos degraus da moeda), as decisões do motor e o floor à mão. */
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import { AlertTriangle, ArrowLeft, ChevronDown, ChevronUp, MoreHorizontal, Pencil } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import { colorVar, metricColor } from '@/lib/metric-colors'
import LineChart from '@/components/charts/LineChart.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Segmented from '@/components/ui/Segmented.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, locale, t, type Key } from '@/lib/i18n'
import { PAGE_SIZE } from '@/lib/pagination'
import { td, th } from '@/lib/table'
import {
  ACTION_KEY,
  HOUR_PERIODS,
  hourLabel,
  hourPeriod,
  hourPoints,
  lastDayTotals,
  moneyText,
  nearestTier,
  priceRulePermission,
  priceRulesPath,
  REASON_KEY,
  STATUS_TONE,
  STEP_SIZES,
  tierOptions,
  type HourSeries,
} from '@/modules/price_rules/rules'
import { priceRuleService } from '@/modules/price_rules/service'
import type { PriceRuleConfigInput, PriceRuleDetails, PriceRuleHistoryEntry, PriceRuleHour, PriceRuleSite, PriceRuleStatus } from '@/modules/price_rules/types'
import { useSession } from '@/stores/session'

type LimitsForm = { automatic: string; pmrFloor: string; pmrEmergency: string; minRequests: string; floorMin: string; floorMax: string; step: string }

const route = useRoute()
const session = useSession()
const internal = route.meta.internal === true
const service = priceRuleService(internal)
const base = priceRulesPath(internal)
const siteId = String(route.params.siteId)
const ruleId = String(route.params.ruleId)
const site = ref<PriceRuleSite | null>(null)
const rule = ref<PriceRuleDetails | null>(null)
const history = ref<PriceRuleHistoryEntry[]>([])
const hours = ref<PriceRuleHour[]>([])
const period = ref<string>('2')
const series = ref<HourSeries>('floor')
const page = ref(1)
const limits = ref<LimitsForm | null>(null)
const savedLimits = ref<LimitsForm | null>(null)
const floorOpen = ref(false)
const floorTier = ref('')
const busy = ref(false)
const loadError = ref<string | null>(null)

const canManage = computed(() => session.can(priceRulePermission(internal, 'manage')))
const currency = computed(() => rule.value?.currency ?? null)
const integer = computed(() => new Intl.NumberFormat(locale.value))
const decimal = computed(() => new Intl.NumberFormat(locale.value, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))
const points = computed(() => hourPoints(hours.value, history.value))
const totals = computed(() => lastDayTotals(hours.value))
const decisions = computed(() => history.value.slice((page.value - 1) * PAGE_SIZE, page.value * PAGE_SIZE))
const decisionPages = computed(() => Math.ceil(history.value.length / PAGE_SIZE))
const tiers = computed(() => rule.value?.tiers_micros ?? [])
const floorOptions = computed(() => tierOptions(tiers.value, currency.value, locale.value))
const minOptions = computed(() => tierOptions(tiers.value, currency.value, locale.value, 0, Number(limits.value?.floorMax ?? Number.POSITIVE_INFINITY)))
const maxOptions = computed(() => tierOptions(tiers.value, currency.value, locale.value, Number(limits.value?.floorMin ?? 0)))
const manual = computed(() => limits.value?.automatic === 'false')
const limitsDirty = computed(() => JSON.stringify(limits.value) !== JSON.stringify(savedLimits.value))
const limitsError = computed(() => (limits.value && manual.value ? limitsInput(limits.value) === null : false))
const modeOptions = computed(() => [
  { value: 'true', label: t('pr.automaticLabel') },
  { value: 'false', label: t('pr.manualLabel') },
])
const stepOptions = STEP_SIZES.map((step) => ({ value: step, label: step }))
const floorHint = computed(() => {
  const first = tiers.value[0]
  const last = tiers.value[tiers.value.length - 1]
  if (first === undefined || last === undefined) return undefined
  return t('pr.floorHint', { count: tiers.value.length, currency: currency.value ?? '', min: moneyText(first, currency.value, locale.value), max: moneyText(last, currency.value, locale.value) })
})
const limitList = computed(() => {
  const config = rule.value?.config
  if (!config) return []
  return [
    { label: t('pr.limit.pmrFloor'), value: `${decimal.value.format(config.pmr_floor)}%`, hint: t('pr.limit.pmrFloorHint') },
    { label: t('pr.limit.pmrEmergency'), value: `${decimal.value.format(config.pmr_emergency)}%`, hint: t('pr.limit.pmrEmergencyHint') },
    { label: t('pr.limit.minRequests'), value: t('pr.limit.minRequestsShort', { count: integer.value.format(config.min_eligible_requests) }), hint: t('pr.limit.minRequestsHint') },
    { label: t('pr.limit.floorMin', { currency: currency.value ?? '' }), value: moneyText(config.floor_min_micros, currency.value, locale.value), hint: t('pr.limit.floorMinShort') },
    { label: t('pr.limit.floorMax', { currency: currency.value ?? '' }), value: moneyText(config.floor_max_micros, currency.value, locale.value), hint: t('pr.limit.floorMaxShort') },
    { label: t('pr.limit.step'), value: String(config.step_size), hint: t('pr.limit.stepShort') },
  ]
})
const tiles = computed(() => {
  const current = rule.value
  if (!current) return []
  const day = totals.value
  return [
    { label: t('pr.kpi.floor'), value: moneyText(current.floor_micros, currency.value, locale.value) },
    { label: t('pr.kpi.ecpm'), value: day ? moneyText(day.ecpm, currency.value, locale.value) : '—' },
    { label: t('pr.kpi.pmr'), value: day ? `${decimal.value.format(day.pmr)}%` : '—' },
    { label: t('pr.kpi.revenue'), value: day ? moneyText(day.revenue, currency.value, locale.value) : '—' },
  ]
})
const chart = computed(() => {
  const labels = points.value.map((point) => hourLabel(point.date, point.hour, locale.value))
  if (series.value === 'floor')
    return {
      labels,
      series: [
        { key: 'floor', name: t('pr.series.floor'), values: points.value.map((point) => point.floor), color: colorVar(metricColor('floor')) },
        { key: 'ecpm', name: t('pr.series.ecpm'), values: points.value.map((point) => point.ecpm), color: colorVar(metricColor('ecpm')) },
      ],
      format: (value: number | null) => (value === null ? '—' : moneyText(value, currency.value, locale.value)),
    }
  if (series.value === 'pmr') return { labels, series: [{ key: 'pmr', name: t('pr.series.pmr'), values: points.value.map((point) => point.pmr), color: colorVar(metricColor('pmr')) }], format: (value: number | null) => (value === null ? '—' : `${decimal.value.format(value)}%`) }
  if (series.value === 'revenue')
    return { labels, series: [{ key: 'revenue', name: t('pr.series.revenue'), values: points.value.map((point) => point.revenue), color: colorVar(metricColor('revenue')) }], format: (value: number | null) => (value === null ? '—' : moneyText(value, currency.value, locale.value)) }
  return { labels, series: [{ key: 'requests', name: t('pr.series.requests'), values: points.value.map((point) => point.requests), color: colorVar(metricColor('requests')) }], format: (value: number | null) => (value === null ? '—' : integer.value.format(value)) }
})

/** Os limites do formulário no formato da API; null quando algum campo não vale. */
function limitsInput(form: LimitsForm): PriceRuleConfigInput | null {
  const pmrFloor = Number(form.pmrFloor.replace(',', '.'))
  const pmrEmergency = Number(form.pmrEmergency.replace(',', '.'))
  const minRequests = Number(form.minRequests)
  const step = Number(form.step)
  const floorMin = Number(form.floorMin)
  const floorMax = Number(form.floorMax)
  /** Diz se o número é uma porcentagem de 0 a 100. */
  const percent = (value: number) => Number.isFinite(value) && value >= 0 && value <= 100
  if (!percent(pmrFloor) || !percent(pmrEmergency) || !Number.isInteger(minRequests) || minRequests < 0) return null
  if (!STEP_SIZES.some((size) => Number(size) === step) || floorMin > floorMax) return null
  return { automatic: false, pmr_floor: pmrFloor, pmr_emergency: pmrEmergency, min_eligible_requests: minRequests, floor_min_micros: floorMin, floor_max_micros: floorMax, step_size: step }
}

/** Copia os limites da regra para o formulário. */
function fillLimits(details: PriceRuleDetails) {
  const config = details.config
  const form = config
    ? {
        automatic: String(config.automatic),
        pmrFloor: String(config.pmr_floor),
        pmrEmergency: String(config.pmr_emergency),
        minRequests: String(config.min_eligible_requests),
        floorMin: String(nearestTier(details.tiers_micros, config.floor_min_micros)),
        floorMax: String(nearestTier(details.tiers_micros, config.floor_max_micros)),
        step: String(Math.min(config.step_size, STEP_SIZES.length)),
      }
    : null
  limits.value = form
  savedLimits.value = form ? { ...form } : null
}

/** Volta os limites para os gravados. */
function discardLimits() {
  limits.value = savedLimits.value ? { ...savedLimits.value } : null
}

/** Carrega o site e a regra uma vez e o histórico e os números do período. */
async function load() {
  loadError.value = null
  try {
    if (!site.value) site.value = await service.settings(siteId)
    if (!rule.value) {
      rule.value = await service.rule(siteId, ruleId)
      fillLimits(rule.value)
    }
    const { start, end } = hourPeriod(Number(period.value))
    const [entries, rows] = await Promise.all([service.history(siteId, ruleId, start, end), service.hours(siteId, ruleId, start, end)])
    history.value = entries
    hours.value = rows
    page.value = 1
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Ativa, pausa ou desliga a regra. */
async function changeStatus(status: PriceRuleStatus) {
  if (!rule.value) return
  try {
    const updated = await service.setStatus(siteId, ruleId, status)
    rule.value = { ...rule.value, ...updated }
    toast.success(t(`pr.statusChanged.${status}`))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}

/** Abre o modal do floor à mão com o degrau do floor de agora. */
function openFloor() {
  floorTier.value = rule.value ? String(nearestTier(rule.value.tiers_micros, rule.value.floor_micros)) : ''
  floorOpen.value = true
}

/** Grava o floor à mão, sempre um dos degraus da moeda. */
async function saveFloor() {
  if (!rule.value || !floorTier.value) return
  busy.value = true
  try {
    const updated = await service.setFloor(siteId, ruleId, Number(floorTier.value))
    rule.value = { ...rule.value, ...updated }
    floorOpen.value = false
    toast.success(t('pr.floorSaved', { floor: moneyText(updated.floor_micros, updated.currency, locale.value) }))
    void load()
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

/** Grava os limites: com "calculados pelo motor" vale o que ele recalcula a cada hora. */
async function saveLimits() {
  const form = limits.value
  const current = rule.value?.config
  if (!form || !current) return
  const input = !manual.value
    ? { automatic: true, pmr_floor: current.pmr_floor, pmr_emergency: current.pmr_emergency, min_eligible_requests: current.min_eligible_requests, floor_min_micros: current.floor_min_micros, floor_max_micros: current.floor_max_micros, step_size: current.step_size }
    : limitsInput(form)
  if (!input) return
  busy.value = true
  try {
    rule.value = await service.saveConfig(siteId, ruleId, input)
    fillLimits(rule.value)
    toast.success(t('pr.limitsSaved'))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

onMounted(load)
watch(period, load)
</script>

<template>
  <PageHeader :title="rule ? `${rule.block} · ${rule.country_code}` : t('pr.history')" :sub="rule ? t('pr.ruleSub', { domain: site?.domain ?? '', hash: rule.content_hash, currency: rule.currency }) : undefined">
    <template #back>
      <RouterLink :to="`${base}/${siteId}`" class="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft class="size-4" />{{ site?.domain || t('nav.priceRules') }}</RouterLink>
    </template>
    <template v-if="rule" #actions>
      <NativeSelect v-model="period" :aria-label="t('pr.period')" class="w-[180px]" :options="HOUR_PERIODS.map((days) => ({ value: days, label: t(`pr.period.${days}` as Key) }))" />
      <template v-if="canManage">
        <Button variant="outline" @click="openFloor"><Pencil />{{ t('pr.manualFloor') }}</Button>
        <DropdownMenuRoot>
          <DropdownMenuTrigger as-child>
            <Button variant="outline" size="icon" :aria-label="t('pr.more')"><MoreHorizontal /></Button>
          </DropdownMenuTrigger>
          <MenuContent align="end" class="w-48">
            <MenuItem v-if="rule.status !== 'active'" @select="changeStatus('active')">{{ t('pr.activate') }}</MenuItem>
            <MenuItem v-if="rule.status !== 'paused'" @select="changeStatus('paused')">{{ t('pr.pause') }}</MenuItem>
            <MenuItem v-if="rule.status !== 'disabled'" @select="changeStatus('disabled')">{{ t('pr.disable') }}</MenuItem>
          </MenuContent>
        </DropdownMenuRoot>
      </template>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else-if="rule">
      <div v-if="rule.status !== 'active'" class="flex items-start gap-2 rounded-md border border-ochre/40 bg-ochre-soft px-3 py-2 text-[13px] text-ochre">
        <AlertTriangle class="mt-0.5 size-4 shrink-0" />{{ t(rule.status === 'paused' ? 'pr.inactive.paused' : 'pr.inactive.disabled') }}
      </div>
      <div class="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border lg:grid-cols-4">
        <div v-for="(tile, index) in tiles" :key="tile.label" class="bg-card p-4">
          <div class="flex flex-wrap items-center gap-2 text-[13px] text-muted-foreground">
            {{ tile.label }}<Status v-if="index === 0" :tone="STATUS_TONE[rule.status]">{{ t(`pr.ruleStatus.${rule.status}`) }}</Status>
          </div>
          <div class="mt-1 text-[24px] font-semibold tracking-[-0.03em] tnum max-sm:text-[20px]">{{ tile.value }}</div>
        </div>
      </div>
      <Card :title="t('pr.hourly')">
        <div class="mb-4 inline-flex flex-wrap rounded-md border bg-muted p-0.5" role="radiogroup" :aria-label="t('pr.series')">
          <button
            v-for="option in ['floor', 'pmr', 'revenue', 'requests'] as const"
            :key="option"
            type="button"
            role="radio"
            :aria-checked="series === option"
            :class="['h-8 rounded px-3 text-[13px] font-medium', series === option ? 'bg-background shadow-sm' : 'text-muted-foreground hover:text-foreground']"
            @click="series = option"
          >
            {{ t(`pr.seriesTab.${option}`) }}
          </button>
        </div>
        <p v-if="!points.length" class="py-12 text-center text-[14px] text-muted-foreground">{{ t('pr.noHours') }}</p>
        <LineChart v-else :key="series" :labels="chart.labels" :series="chart.series" :format="chart.format" :description="t('pr.hourlyDesc')" :height="240" />
        <p class="mt-3 text-[13px] text-muted-foreground">{{ t('pr.hourlyNote') }}</p>
      </Card>
      <section class="overflow-hidden rounded-lg border bg-card">
        <div class="flex flex-wrap items-start justify-between gap-4 p-6">
          <div>
            <h2 class="text-[20px] font-semibold tracking-[-0.025em]">{{ t('pr.limits') }}</h2>
            <p class="mt-2 max-w-[70ch] text-[14px] text-muted-foreground">{{ !limits ? t('pr.limitsPending') : manual ? t('pr.limitsManual') : t('pr.limitsAutomatic') }}</p>
          </div>
          <Segmented v-if="limits" v-model="limits.automatic" :options="modeOptions" :label="t('pr.limitsMode')" :disabled="!canManage" />
        </div>
        <dl v-if="limits && !manual" class="grid grid-cols-2 gap-px border-t bg-border sm:grid-cols-3 lg:grid-cols-6">
          <div v-for="item in limitList" :key="item.label" class="bg-card px-6 py-4">
            <dt class="text-[13px] text-muted-foreground">{{ item.label }}</dt>
            <dd class="mt-1 text-[18px] font-semibold tracking-[-0.02em] tnum">{{ item.value }}</dd>
            <dd class="mt-0.5 text-[12px] text-muted-foreground">{{ item.hint }}</dd>
          </div>
        </dl>
        <div v-else-if="limits" class="grid gap-4 border-t p-6 sm:grid-cols-2 lg:grid-cols-3">
          <Field id="pr-pmr-floor" :label="t('pr.limit.pmrFloor')" :hint="t('pr.limit.pmrFloorHint')">
            <Input id="pr-pmr-floor" v-model="limits.pmrFloor" class="tnum" inputmode="decimal" :disabled="!canManage" />
          </Field>
          <Field id="pr-pmr-emergency" :label="t('pr.limit.pmrEmergency')" :hint="t('pr.limit.pmrEmergencyHint')">
            <Input id="pr-pmr-emergency" v-model="limits.pmrEmergency" class="tnum" inputmode="decimal" :disabled="!canManage" />
          </Field>
          <Field id="pr-min-requests" :label="t('pr.limit.minRequests')" :hint="t('pr.limit.minRequestsHint')">
            <Input id="pr-min-requests" v-model="limits.minRequests" class="tnum" inputmode="numeric" :disabled="!canManage" />
          </Field>
          <Field id="pr-floor-min" :label="t('pr.limit.floorMin', { currency: rule.currency })" :hint="t('pr.limit.floorMinHint')">
            <NativeSelect id="pr-floor-min" v-model="limits.floorMin" class="tnum" :options="minOptions" :disabled="!canManage" />
          </Field>
          <Field id="pr-floor-max" :label="t('pr.limit.floorMax', { currency: rule.currency })" :hint="t('pr.limit.floorMaxHint')">
            <NativeSelect id="pr-floor-max" v-model="limits.floorMax" class="tnum" :options="maxOptions" :disabled="!canManage" />
          </Field>
          <Field id="pr-step" :label="t('pr.limit.step')" :hint="t('pr.limit.stepHint')">
            <Segmented v-model="limits.step" :options="stepOptions" :label="t('pr.limit.step')" :disabled="!canManage" />
          </Field>
          <p v-if="limitsError" class="text-[13px] text-bad sm:col-span-2 lg:col-span-3">{{ t('pr.limitsInvalid') }}</p>
        </div>
        <div v-if="limits && limitsDirty && canManage" class="flex flex-wrap items-center justify-between gap-3 border-t bg-muted px-6 py-3">
          <div class="text-[13px] text-muted-foreground">{{ manual ? t('pr.limitsNext.manual') : t('pr.limitsNext.automatic') }}</div>
          <div class="flex gap-2">
            <Button variant="outline" :disabled="busy" @click="discardLimits">{{ t('pr.discard') }}</Button>
            <Button :disabled="busy || limitsError" @click="saveLimits">{{ t('pr.saveLimits') }}</Button>
          </div>
        </div>
      </section>
      <section class="grid gap-3">
        <div>
          <h2 class="text-[20px] font-semibold tracking-[-0.025em]">{{ t('pr.decisions') }}</h2>
          <p class="mt-1 text-[14px] text-muted-foreground">{{ t('pr.decisionsDesc') }}</p>
        </div>
        <DataTable :min="720">
          <thead>
            <tr>
              <th :class="th">{{ t('pr.col.hour') }}</th>
              <th :class="th">{{ t('pr.col.action') }}</th>
              <th :class="[th, 'text-right']">{{ t('pr.col.floor') }}</th>
              <th :class="th">{{ t('pr.col.reason') }}</th>
            </tr>
          </thead>
          <tbody>
            <TableState v-if="!history.length" :cols="4" empty :desc="t('pr.noDecisions')" />
            <tr v-for="entry in decisions" :key="`${entry.date}-${entry.hour}`">
              <td :class="[td, 'whitespace-nowrap tnum']">{{ hourLabel(entry.date, entry.hour, locale) }}</td>
              <td :class="td">
                <span class="inline-flex items-center gap-1.5 whitespace-nowrap text-[13px]">
                  <ChevronUp v-if="entry.action === 'up'" class="size-4 text-ok" aria-hidden="true" />
                  <ChevronDown v-else-if="entry.action === 'down'" class="size-4 text-bad" aria-hidden="true" />
                  <span v-else class="w-4 text-center text-muted-foreground" aria-hidden="true">·</span>
                  {{ t(ACTION_KEY[entry.action]) }}
                </span>
              </td>
              <td :class="[td, 'whitespace-nowrap text-right tnum']">
                <template v-if="entry.floor_before_micros !== entry.floor_applied_micros && entry.floor_before_micros > 0">
                  <span class="text-muted-foreground">{{ moneyText(entry.floor_before_micros, currency, locale) }} → </span>
                </template>
                {{ moneyText(entry.floor_applied_micros, currency, locale) }}
              </td>
              <td :class="[td, 'text-[13px] text-muted-foreground']">{{ t(REASON_KEY[entry.reason]) }}</td>
            </tr>
          </tbody>
        </DataTable>
        <Pagination v-model:page="page" :total="history.length" :pages="decisionPages" />
      </section>
    </template>
  </PageBody>
  <Dialog v-model:open="floorOpen" :title="t('pr.manualFloor')" :desc="t('pr.manualFloorDesc')">
    <form id="pr-floor" class="grid gap-4" @submit.prevent="saveFloor">
      <Field id="pr-floor-value" :label="t('pr.floorLabel', { currency: rule?.currency ?? '' })" :hint="floorHint">
        <NativeSelect id="pr-floor-value" v-model="floorTier" class="tnum" :options="floorOptions" />
      </Field>
    </form>
    <template #footer>
      <Button variant="outline" @click="floorOpen = false">{{ t('common.cancel') }}</Button>
      <Button type="submit" form="pr-floor" :disabled="busy || !floorTier || Number(floorTier) === rule?.floor_micros">{{ t('pr.saveFloor') }}</Button>
    </template>
  </Dialog>
</template>
