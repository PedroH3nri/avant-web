<script setup lang="ts">
/** Histórico de uma regra da Cascata: números de 24 horas, o funil por tentativa, o gráfico por hora, os limites (com a descida por tentativa), as decisões do motor e o ponto de partida à mão. */
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
  CASCADE_REASON_KEY,
  CASCADE_SERIES,
  cascadeFunnel,
  cascadeLadder,
  cascadePoints,
  DEFAULT_DROP_TIERS,
  DROP_TIERS,
  dropPercent,
  HOUR_PERIODS,
  hourLabel,
  hourPeriod,
  moneyText,
  nearestTier,
  percentText,
  priceRulePermission,
  priceRulesPath,
  STATUS_TONE,
  tierOptions,
  type CascadeSeries,
} from '@/modules/price_rules/rules'
import { priceRuleService } from '@/modules/price_rules/service'
import type { CascadeHour, PriceRuleConfigInput, PriceRuleDetails, PriceRuleHistoryEntry, PriceRuleSite, PriceRuleStatus } from '@/modules/price_rules/types'
import { useSession } from '@/stores/session'

type LimitsForm = { automatic: string; fillHigh: string; minRequests: string; floorMin: string; floorMax: string; drop: string }

const OFFERED_ALPHA = 35

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
const hours = ref<CascadeHour[]>([])
const period = ref<string>('2')
const series = ref<CascadeSeries>('start')
const page = ref(1)
const limits = ref<LimitsForm | null>(null)
const savedLimits = ref<LimitsForm | null>(null)
const startOpen = ref(false)
const startTier = ref('')
const busy = ref(false)
const loadError = ref<string | null>(null)

const canManage = computed(() => session.can(priceRulePermission(internal, 'manage')))
const currency = computed(() => rule.value?.currency ?? null)
const integer = computed(() => new Intl.NumberFormat(locale.value))
const tiers = computed(() => rule.value?.tiers_micros ?? [])
const savedDrop = computed(() => rule.value?.config?.drop_tiers ?? DEFAULT_DROP_TIERS)
const funnel = computed(() => cascadeFunnel(hours.value))
const points = computed(() => cascadePoints(hours.value))
const ladder = computed(() => (rule.value ? cascadeLadder(tiers.value, rule.value.floor_micros, savedDrop.value) : []))
const firstFillByHour = computed(() => new Map(points.value.map((point) => [`${point.date} ${point.hour}`, point.firstFill])))
const decisions = computed(() => history.value.slice((page.value - 1) * PAGE_SIZE, page.value * PAGE_SIZE))
const decisionPages = computed(() => Math.ceil(history.value.length / PAGE_SIZE))
const startOptions = computed(() => tierOptions(tiers.value, currency.value, locale.value))
const minOptions = computed(() => tierOptions(tiers.value, currency.value, locale.value, 0, Number(limits.value?.floorMax ?? Number.POSITIVE_INFINITY)))
const maxOptions = computed(() => tierOptions(tiers.value, currency.value, locale.value, Number(limits.value?.floorMin ?? 0)))
const manual = computed(() => limits.value?.automatic === 'false')
const limitsDirty = computed(() => JSON.stringify(limits.value) !== JSON.stringify(savedLimits.value))
const limitsError = computed(() => (limits.value && manual.value ? limitsInput(limits.value) === null : false))
const modeOptions = computed(() => [
  { value: 'true', label: t('pr.automaticLabel') },
  { value: 'false', label: t('pr.manualLabel') },
])
const dropOptions = DROP_TIERS.map((drop) => ({ value: drop, label: drop }))
const offeredColor = computed(() => `color-mix(in srgb, ${colorVar(metricColor('requests'))} ${OFFERED_ALPHA}%, transparent)`)
const boughtColor = computed(() => colorVar(metricColor('impressions')))
const maxOffered = computed(() => Math.max(1, ...funnel.value.tries.map((step) => step.requests)))
const formDrop = computed(() => Number(limits.value?.drop ?? savedDrop.value))
const tiles = computed(() => {
  const current = rule.value
  if (!current) return []
  const day = funnel.value
  return [
    { label: t('pr.kpi.start'), value: moneyText(current.floor_micros, currency.value, locale.value), hint: t('pr.kpi.startHint') },
    { label: t('pr.kpi.firstFill'), value: percentText(day.firstFill, locale.value), hint: t('pr.kpi.lastDay') },
    { label: t('pr.kpi.ladderFill'), value: percentText(day.ladderFill, locale.value), hint: t('pr.kpi.ladderFillHint') },
    { label: t('pr.kpi.revenue'), value: day.offered ? moneyText(day.revenue, currency.value, locale.value) : '—', hint: t('pr.kpi.offered', { count: integer.value.format(day.offered) }) },
  ]
})
const limitList = computed(() => {
  const config = rule.value?.config
  if (!config) return []
  return [
    { label: t('pr.cascadeLimit.floorMin'), value: moneyText(config.floor_min_micros, currency.value, locale.value), hint: t('pr.cascadeLimit.floorMinShort') },
    { label: t('pr.cascadeLimit.floorMax'), value: moneyText(config.floor_max_micros, currency.value, locale.value), hint: t('pr.limit.floorMaxShort') },
    { label: t('pr.cascadeLimit.drop'), value: dropText(formDrop.value), hint: t('pr.cascadeLimit.dropShort', { percent: dropPercentText(formDrop.value) }), drop: true },
    { label: t('pr.cascadeLimit.fillHigh'), value: percentText(config.pmr_floor, locale.value), hint: t('pr.cascadeLimit.fillHighShort') },
    { label: t('pr.cascadeLimit.minRequests'), value: t('pr.limit.minRequestsShort', { count: integer.value.format(config.min_eligible_requests) }), hint: t('pr.cascadeLimit.minRequestsShort') },
  ]
})
const chart = computed(() => {
  const labels = points.value.map((point) => hourLabel(point.date, point.hour, locale.value))
  /** Um valor em dinheiro, ou um traço. */
  const money = (value: number | null) => (value === null ? '—' : moneyText(value, currency.value, locale.value))
  if (series.value === 'start')
    return {
      labels,
      series: [
        { key: 'start', name: t('pr.series.start'), values: points.value.map((point) => point.start), color: colorVar(metricColor('floor')) },
        { key: 'ecpm', name: t('pr.series.ecpm'), values: points.value.map((point) => point.ecpm), color: colorVar(metricColor('ecpm')) },
      ],
      format: money,
    }
  if (series.value === 'fill')
    return {
      labels,
      series: [
        { key: 'fill', name: t('pr.col.ladderFill'), values: points.value.map((point) => point.ladderFill), color: colorVar(metricColor('fill')) },
        { key: 'fill_first', name: t('pr.col.firstFill'), values: points.value.map((point) => point.firstFill), color: colorVar(metricColor('fill_first')) },
      ],
      format: (value: number | null) => percentText(value, locale.value),
    }
  if (series.value === 'revenue') return { labels, series: [{ key: 'revenue', name: t('pr.series.revenue'), values: points.value.map((point) => point.revenue), color: colorVar(metricColor('revenue')) }], format: money }
  return { labels, series: [{ key: 'requests', name: t('pr.series.offered'), values: points.value.map((point) => point.requests), color: colorVar(metricColor('requests')) }], format: (value: number | null) => (value === null ? '—' : integer.value.format(value)) }
})

/** A descida por tentativa em texto, como "2 degraus". */
function dropText(drop: number): string {
  return t(`pr.cascadeLimit.dropValue.${drop}` as Key)
}

/** A queda aproximada de cada lance, com uma casa no formato do idioma. */
function dropPercentText(drop: number): string {
  return new Intl.NumberFormat(locale.value, { maximumFractionDigits: 1 }).format(dropPercent(tiers.value, drop))
}

/** A compra na 1ª da hora do GAM que a decisão usou; sem essa hora no período, um traço. */
function decisionFirstFill(entry: PriceRuleHistoryEntry): string {
  if (entry.data_date === null || entry.data_hour === null) return percentText(null, locale.value)
  return percentText(firstFillByHour.value.get(`${entry.data_date} ${entry.data_hour}`) ?? null, locale.value)
}

/** A escada em texto, do 1º floor ao "sem floor". */
function ladderText(steps: (number | null)[]): string {
  return steps.map((floor) => (floor === null ? t('pr.noFloor') : moneyText(floor, currency.value, locale.value))).join(' → ')
}

/** Os limites do formulário no formato da API, com os campos que a Cascata não usa iguais aos gravados; null quando algum campo não vale. */
function limitsInput(form: LimitsForm): PriceRuleConfigInput | null {
  const config = rule.value?.config
  if (!config) return null
  const fillHigh = Number(form.fillHigh.replace(',', '.'))
  const minRequests = Number(form.minRequests)
  const floorMin = Number(form.floorMin)
  const floorMax = Number(form.floorMax)
  const drop = Number(form.drop)
  if (!Number.isFinite(fillHigh) || fillHigh < 0 || fillHigh > 100) return null
  if (!Number.isInteger(minRequests) || minRequests < 0 || floorMin > floorMax) return null
  if (!DROP_TIERS.some((size) => Number(size) === drop)) return null
  return {
    automatic: false,
    pmr_floor: fillHigh,
    pmr_emergency: config.pmr_emergency,
    min_eligible_requests: minRequests,
    floor_min_micros: floorMin,
    floor_max_micros: floorMax,
    step_size: config.step_size,
    drop_tiers: drop,
  }
}

/** Copia os limites da regra para o formulário. */
function fillLimits(details: PriceRuleDetails) {
  const config = details.config
  const form = config
    ? {
        automatic: String(config.automatic),
        fillHigh: String(config.pmr_floor),
        minRequests: String(config.min_eligible_requests),
        floorMin: String(nearestTier(details.tiers_micros, config.floor_min_micros)),
        floorMax: String(nearestTier(details.tiers_micros, config.floor_max_micros)),
        drop: String(Math.min(Math.max(config.drop_tiers, 1), DROP_TIERS.length)),
      }
    : null
  limits.value = form
  savedLimits.value = form ? { ...form } : null
}

/** Volta os limites para os gravados. */
function discardLimits() {
  limits.value = savedLimits.value ? { ...savedLimits.value } : null
}

/** Carrega o site e a regra uma vez e o histórico e os números por tentativa do período. */
async function load() {
  loadError.value = null
  try {
    if (!site.value) site.value = await service.settings(siteId)
    if (!rule.value) {
      rule.value = await service.rule(siteId, ruleId)
      fillLimits(rule.value)
    }
    const { start, end } = hourPeriod(Number(period.value))
    const [entries, rows] = await Promise.all([service.history(siteId, ruleId, start, end), service.cascadeHours(siteId, ruleId, start, end)])
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

/** Abre o diálogo do ponto de partida com o degrau de agora. */
function openStart() {
  startTier.value = rule.value ? String(nearestTier(rule.value.tiers_micros, rule.value.floor_micros)) : ''
  startOpen.value = true
}

/** Grava o ponto de partida à mão, sempre um dos degraus da moeda. */
async function saveStart() {
  if (!rule.value || !startTier.value) return
  busy.value = true
  try {
    const updated = await service.setFloor(siteId, ruleId, Number(startTier.value))
    rule.value = { ...rule.value, ...updated }
    startOpen.value = false
    toast.success(t('pr.startSaved'))
    void load()
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

/** Grava os limites, sempre com a descida (`drop_tiers`) do formulário; com "calculados pelo motor", o resto vale o que ele recalcula. */
async function saveLimits() {
  const form = limits.value
  const current = rule.value?.config
  if (!form || !current) return
  const input = !manual.value
    ? {
        automatic: true,
        pmr_floor: current.pmr_floor,
        pmr_emergency: current.pmr_emergency,
        min_eligible_requests: current.min_eligible_requests,
        floor_min_micros: current.floor_min_micros,
        floor_max_micros: current.floor_max_micros,
        step_size: current.step_size,
        drop_tiers: formDrop.value,
      }
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
  <PageHeader :title="rule ? `${rule.block} · ${rule.country_code}` : t('pr.history')" :sub="rule ? t('pr.cascadeSub', { domain: site?.domain ?? '', currency: rule.currency }) : undefined">
    <template #back>
      <RouterLink :to="`${base}/${siteId}`" class="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft class="size-4" />{{ site?.domain || t('nav.priceRules') }}</RouterLink>
    </template>
    <template v-if="rule" #actions>
      <NativeSelect v-model="period" :aria-label="t('pr.period')" class="w-[180px]" :options="HOUR_PERIODS.map((days) => ({ value: days, label: t(`pr.period.${days}` as Key) }))" />
      <template v-if="canManage">
        <Button variant="outline" @click="openStart"><Pencil />{{ t('pr.manualStart') }}</Button>
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
        <AlertTriangle class="mt-0.5 size-4 shrink-0" />{{ t(rule.status === 'paused' ? 'pr.cascadeInactive.paused' : 'pr.inactive.disabled') }}
      </div>
      <div class="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border lg:grid-cols-4">
        <div v-for="(tile, index) in tiles" :key="tile.label" class="bg-card p-4">
          <div class="flex flex-wrap items-center gap-2 text-[13px] text-muted-foreground">
            {{ tile.label }}<Status v-if="index === 0" :tone="STATUS_TONE[rule.status]">{{ t(`pr.ruleStatus.${rule.status}`) }}</Status>
          </div>
          <div class="mt-1 text-[24px] font-semibold tracking-[-0.03em] tnum max-sm:text-[20px]">{{ tile.value }}</div>
          <div class="mt-1 text-[12px] text-muted-foreground">{{ tile.hint }}</div>
        </div>
      </div>
      <Card :title="t('pr.funnel.title')" :desc="t('pr.funnel.desc')">
        <div class="grid gap-3 md:grid-cols-4">
          <div v-for="(step, index) in funnel.tries" :key="index" :data-try="index + 1" class="rounded-lg border p-4">
            <div class="flex items-baseline justify-between gap-2">
              <div class="text-[13px] text-muted-foreground">{{ t('pr.funnel.try', { try: index + 1 }) }}</div>
              <div class="font-mono text-[12px] text-muted-foreground">groone_try={{ index + 1 }}</div>
            </div>
            <div class="mt-1 text-[22px] font-semibold tracking-[-0.03em] tnum">{{ ladder[index] == null ? t('pr.noFloorTitle') : moneyText(ladder[index] ?? 0, currency, locale) }}</div>
            <div class="mt-3 h-2 overflow-hidden rounded-full bg-muted" aria-hidden="true">
              <div class="h-full rounded-full" :style="{ width: `${(step.requests / maxOffered) * 100}%`, background: offeredColor }">
                <div class="h-full rounded-full" :style="{ width: `${step.requests ? (step.filled / step.requests) * 100 : 0}%`, background: boughtColor }" />
              </div>
            </div>
            <dl class="mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-[13px]">
              <dt class="text-muted-foreground">{{ t('pr.funnel.offered') }}</dt>
              <dd class="text-right tnum">{{ integer.format(step.requests) }}</dd>
              <dt class="text-muted-foreground">{{ t('pr.funnel.bought') }}</dt>
              <dd class="text-right tnum">{{ integer.format(step.filled) }}</dd>
              <dt class="text-muted-foreground">{{ t('pr.funnel.fill') }}</dt>
              <dd class="text-right tnum">{{ percentText(step.requests ? (step.filled / step.requests) * 100 : null, locale) }}</dd>
              <dt class="text-muted-foreground">{{ t('pr.funnel.revenue') }}</dt>
              <dd class="text-right tnum">{{ moneyText(step.revenue, currency, locale) }}</dd>
            </dl>
            <p v-if="index === funnel.tries.length - 1" class="mt-3 text-[12px] text-muted-foreground">{{ t('pr.funnel.lastTry') }}</p>
          </div>
        </div>
        <div class="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-muted-foreground">
          <span class="inline-flex items-center gap-1.5"><span class="h-2 w-3 rounded-full" :style="{ background: offeredColor }" />{{ t('pr.funnel.offered') }}</span>
          <span class="inline-flex items-center gap-1.5"><span class="h-2 w-3 rounded-full" :style="{ background: boughtColor }" />{{ t('pr.funnel.bought') }}</span>
          <span>{{ t('pr.funnel.now', { ladder: ladderText(ladder) }) }}</span>
        </div>
      </Card>
      <Card :title="t('pr.hourly')">
        <div class="mb-4 inline-flex flex-wrap rounded-md border bg-muted p-0.5" role="radiogroup" :aria-label="t('pr.series')">
          <button
            v-for="option in CASCADE_SERIES"
            :key="option"
            type="button"
            role="radio"
            :aria-checked="series === option"
            :class="['h-8 rounded px-3 text-[13px] font-medium', series === option ? 'bg-background shadow-sm' : 'text-muted-foreground hover:text-foreground']"
            @click="series = option"
          >
            {{ t(`pr.cascadeSeriesTab.${option}`) }}
          </button>
        </div>
        <p v-if="!points.length" class="py-12 text-center text-[14px] text-muted-foreground">{{ t('pr.noHours') }}</p>
        <LineChart v-else :key="series" :labels="chart.labels" :series="chart.series" :format="chart.format" :description="t('pr.cascadeHourlyDesc')" :height="240" />
        <p class="mt-3 text-[13px] text-muted-foreground">{{ t('pr.cascadeHourlyNote') }}</p>
      </Card>
      <section class="overflow-hidden rounded-lg border bg-card">
        <div class="flex flex-wrap items-start justify-between gap-4 p-6">
          <div>
            <h2 class="text-[20px] font-semibold tracking-[-0.025em]">{{ t('pr.limits') }}</h2>
            <p class="mt-2 max-w-[70ch] text-[14px] text-muted-foreground">{{ !limits ? t('pr.limitsPending') : manual ? t('pr.limitsManual') : t('pr.cascadeLimitsAutomatic') }}</p>
          </div>
          <Segmented v-if="limits" v-model="limits.automatic" :options="modeOptions" :label="t('pr.limitsMode')" :disabled="!canManage" />
        </div>
        <dl v-if="limits && !manual" class="grid grid-cols-2 gap-px border-t bg-border sm:grid-cols-3 lg:grid-cols-5">
          <div v-for="item in limitList" :key="item.label" class="bg-card px-6 py-4">
            <dt class="text-[13px] text-muted-foreground">{{ item.label }}</dt>
            <dd v-if="item.drop && canManage" class="mt-1"><Segmented v-model="limits.drop" :options="dropOptions" :label="t('pr.cascadeLimit.drop')" /></dd>
            <dd v-else class="mt-1 text-[18px] font-semibold tracking-[-0.02em] tnum">{{ item.value }}</dd>
            <dd class="mt-0.5 text-[12px] text-muted-foreground">{{ item.hint }}</dd>
          </div>
        </dl>
        <div v-else-if="limits" class="grid gap-4 border-t p-6 sm:grid-cols-2 lg:grid-cols-3">
          <Field id="cas-floor-min" :label="t('pr.limit.floorMin', { currency: rule.currency })" :hint="t('pr.cascadeLimit.floorMinHint')">
            <NativeSelect id="cas-floor-min" v-model="limits.floorMin" class="tnum" :options="minOptions" :disabled="!canManage" />
          </Field>
          <Field id="cas-floor-max" :label="t('pr.limit.floorMax', { currency: rule.currency })" :hint="t('pr.cascadeLimit.floorMaxHint')">
            <NativeSelect id="cas-floor-max" v-model="limits.floorMax" class="tnum" :options="maxOptions" :disabled="!canManage" />
          </Field>
          <Field id="cas-drop" :label="t('pr.cascadeLimit.drop')" :hint="t('pr.cascadeLimit.dropHint', { percent: dropPercentText(formDrop) })">
            <Segmented v-model="limits.drop" :options="dropOptions" :label="t('pr.cascadeLimit.drop')" :disabled="!canManage" />
          </Field>
          <Field id="cas-fill-high" :label="t('pr.cascadeLimit.fillHighLabel')" :hint="t('pr.cascadeLimit.fillHighHint')">
            <Input id="cas-fill-high" v-model="limits.fillHigh" class="tnum" inputmode="decimal" :disabled="!canManage" />
          </Field>
          <Field id="cas-min-requests" :label="t('pr.limit.minRequests')" :hint="t('pr.cascadeLimit.minRequestsHint')">
            <Input id="cas-min-requests" v-model="limits.minRequests" class="tnum" inputmode="numeric" :disabled="!canManage" />
          </Field>
          <p v-if="limitsError" class="text-[13px] text-bad sm:col-span-2 lg:col-span-3">{{ t('pr.limitsInvalid') }}</p>
        </div>
        <div v-if="limits && limitsDirty && canManage" class="flex flex-wrap items-center justify-between gap-3 border-t bg-muted px-6 py-3">
          <div class="text-[13px] text-muted-foreground">{{ manual ? t('pr.cascadeLimitsNext.manual') : t('pr.limitsNext.automatic') }}</div>
          <div class="flex gap-2">
            <Button variant="outline" :disabled="busy" @click="discardLimits">{{ t('pr.discard') }}</Button>
            <Button :disabled="busy || limitsError" @click="saveLimits">{{ t('pr.saveLimits') }}</Button>
          </div>
        </div>
      </section>
      <section class="grid gap-3">
        <div>
          <h2 class="text-[20px] font-semibold tracking-[-0.025em]">{{ t('pr.decisions') }}</h2>
          <p class="mt-1 text-[14px] text-muted-foreground">{{ t('pr.cascadeDecisionsDesc') }}</p>
        </div>
        <DataTable :min="720">
          <thead>
            <tr>
              <th :class="th">{{ t('pr.col.hour') }}</th>
              <th :class="th">{{ t('pr.col.action') }}</th>
              <th :class="[th, 'text-right']">{{ t('pr.col.start') }}</th>
              <th :class="[th, 'text-right']">{{ t('pr.col.firstFill') }}</th>
              <th :class="th">{{ t('pr.col.reason') }}</th>
            </tr>
          </thead>
          <tbody>
            <TableState v-if="!history.length" :cols="5" empty :desc="t('pr.noDecisions')" />
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
              <td :class="[td, 'text-right tnum']">{{ decisionFirstFill(entry) }}</td>
              <td :class="[td, 'text-[13px] text-muted-foreground']">{{ t(CASCADE_REASON_KEY[entry.reason]) }}</td>
            </tr>
          </tbody>
        </DataTable>
        <Pagination v-model:page="page" :total="history.length" :pages="decisionPages" />
      </section>
    </template>
  </PageBody>
  <Dialog v-model:open="startOpen" :title="t('pr.manualStart')" :desc="t('pr.manualStartDesc', { drop: dropText(savedDrop) })">
    <form id="cas-start" class="grid gap-4" @submit.prevent="saveStart">
      <Field id="cas-start-value" :label="t('pr.startLabel', { currency: rule?.currency ?? '' })" :hint="t('pr.startHint', { count: tiers.length, currency: rule?.currency ?? '', ladder: ladderText(cascadeLadder(tiers, Number(startTier), savedDrop)) })">
        <NativeSelect id="cas-start-value" v-model="startTier" class="tnum" :options="startOptions" />
      </Field>
    </form>
    <template #footer>
      <Button variant="outline" @click="startOpen = false">{{ t('common.cancel') }}</Button>
      <Button type="submit" form="cas-start" :disabled="busy || !startTier || Number(startTier) === rule?.floor_micros">{{ t('pr.saveStart') }}</Button>
    </template>
  </Dialog>
</template>
