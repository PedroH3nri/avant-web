<script setup lang="ts">
/** Histórico de uma regra de preço: floor contra eCPM, PMR, receita e requisições por hora, as decisões do motor, os limites e o floor à mão. */
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import { AlertTriangle, ArrowLeft, ChevronDown, ChevronUp, MoreHorizontal, Pencil } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import LineChart from '@/components/charts/LineChart.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, lang, locale, t, type Key } from '@/lib/i18n'
import { PAGE_SIZE } from '@/lib/pagination'
import { td, th } from '@/lib/table'
import {
  ACTION_KEY,
  HOUR_PERIODS,
  hourLabel,
  hourPeriod,
  hourPoints,
  lastDayTotals,
  MAX_STEP_SIZE,
  moneyInput,
  moneyText,
  parseMoney,
  priceRulePermission,
  priceRulesPath,
  REASON_KEY,
  STATUS_TONE,
  type HourSeries,
} from '@/modules/price_rules/rules'
import { priceRuleService } from '@/modules/price_rules/service'
import type { PriceRuleConfigInput, PriceRuleDetails, PriceRuleHistoryEntry, PriceRuleHour, PriceRuleSite, PriceRuleStatus } from '@/modules/price_rules/types'
import { useSession } from '@/stores/session'

type LimitsForm = { automatic: boolean; pmrFloor: string; pmrEmergency: string; minRequests: string; floorMin: string; floorMax: string; step: string }

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
const floorOpen = ref(false)
const floorText = ref('')
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
const typedFloor = computed(() => parseMoney(floorText.value))
const limitsError = computed(() => (limits.value && !limits.value.automatic ? limitsInput(limits.value) === null : false))
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
        { key: 'floor', name: t('pr.series.floor'), values: points.value.map((point) => point.floor) },
        { key: 'ecpm', name: t('pr.series.ecpm'), values: points.value.map((point) => point.ecpm), tone: 'muted' as const, dashed: true },
      ],
      format: (value: number | null) => (value === null ? '—' : moneyText(value, currency.value, locale.value)),
    }
  if (series.value === 'pmr') return { labels, series: [{ key: 'pmr', name: t('pr.series.pmr'), values: points.value.map((point) => point.pmr) }], format: (value: number | null) => (value === null ? '—' : `${decimal.value.format(value)}%`) }
  if (series.value === 'revenue')
    return { labels, series: [{ key: 'revenue', name: t('pr.series.revenue'), values: points.value.map((point) => point.revenue) }], format: (value: number | null) => (value === null ? '—' : moneyText(value, currency.value, locale.value)) }
  return { labels, series: [{ key: 'requests', name: t('pr.series.requests'), values: points.value.map((point) => point.requests) }], format: (value: number | null) => (value === null ? '—' : integer.value.format(value)) }
})

/** Os limites do formulário no formato da API; null quando algum campo não vale. */
function limitsInput(form: LimitsForm): PriceRuleConfigInput | null {
  const pmrFloor = Number(form.pmrFloor.replace(',', '.'))
  const pmrEmergency = Number(form.pmrEmergency.replace(',', '.'))
  const minRequests = Number(form.minRequests)
  const step = Number(form.step)
  const floorMin = parseMoney(form.floorMin)
  const floorMax = parseMoney(form.floorMax)
  /** Diz se o número é uma porcentagem de 0 a 100. */
  const percent = (value: number) => Number.isFinite(value) && value >= 0 && value <= 100
  if (!percent(pmrFloor) || !percent(pmrEmergency) || !Number.isInteger(minRequests) || minRequests < 0) return null
  if (!Number.isInteger(step) || step < 1 || step > MAX_STEP_SIZE || floorMin === null || floorMax === null || floorMin > floorMax) return null
  return { automatic: form.automatic, pmr_floor: pmrFloor, pmr_emergency: pmrEmergency, min_eligible_requests: minRequests, floor_min_micros: floorMin, floor_max_micros: floorMax, step_size: step }
}

/** Copia os limites da regra para o formulário. */
function fillLimits(details: PriceRuleDetails) {
  const config = details.config
  limits.value = config
    ? {
        automatic: config.automatic,
        pmrFloor: String(config.pmr_floor),
        pmrEmergency: String(config.pmr_emergency),
        minRequests: String(config.min_eligible_requests),
        floorMin: moneyInput(config.floor_min_micros, lang.value),
        floorMax: moneyInput(config.floor_max_micros, lang.value),
        step: String(config.step_size),
      }
    : null
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

/** Abre o modal do floor à mão com o floor de agora. */
function openFloor() {
  floorText.value = rule.value ? moneyInput(rule.value.floor_micros, lang.value) : ''
  floorOpen.value = true
}

/** Grava o floor à mão; a API leva ao degrau mais perto. */
async function saveFloor() {
  if (!rule.value || typedFloor.value === null) return
  busy.value = true
  try {
    const updated = await service.setFloor(siteId, ruleId, typedFloor.value)
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
  const input = form.automatic
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
      <div class="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <section class="grid content-start gap-3">
          <h2 class="text-[20px] font-semibold tracking-[-0.025em]">{{ t('pr.decisions') }}</h2>
          <DataTable :min="620">
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
        <Card :title="t('pr.limits')" :desc="!limits ? t('pr.limitsPending') : limits.automatic ? t('pr.limitsAutomatic') : t('pr.limitsManual')">
          <div v-if="limits" class="grid gap-4">
            <Checkbox id="pr-automatic" v-model="limits.automatic" :label="t('pr.automaticLabel')" :disabled="!canManage" />
            <div class="grid gap-4 sm:grid-cols-2">
              <Field id="pr-pmr-floor" :label="t('pr.limit.pmrFloor')" :hint="t('pr.limit.pmrFloorHint')">
                <Input id="pr-pmr-floor" v-model="limits.pmrFloor" class="tnum" inputmode="decimal" :disabled="limits.automatic || !canManage" />
              </Field>
              <Field id="pr-pmr-emergency" :label="t('pr.limit.pmrEmergency')" :hint="t('pr.limit.pmrEmergencyHint')">
                <Input id="pr-pmr-emergency" v-model="limits.pmrEmergency" class="tnum" inputmode="decimal" :disabled="limits.automatic || !canManage" />
              </Field>
              <Field id="pr-floor-min" :label="t('pr.limit.floorMin', { currency: rule.currency })">
                <Input id="pr-floor-min" v-model="limits.floorMin" class="tnum" inputmode="decimal" :disabled="limits.automatic || !canManage" />
              </Field>
              <Field id="pr-floor-max" :label="t('pr.limit.floorMax', { currency: rule.currency })">
                <Input id="pr-floor-max" v-model="limits.floorMax" class="tnum" inputmode="decimal" :disabled="limits.automatic || !canManage" />
              </Field>
              <Field id="pr-min-requests" :label="t('pr.limit.minRequests')" :hint="t('pr.limit.minRequestsHint')">
                <Input id="pr-min-requests" v-model="limits.minRequests" class="tnum" inputmode="numeric" :disabled="limits.automatic || !canManage" />
              </Field>
              <Field id="pr-step" :label="t('pr.limit.step')" :hint="t('pr.limit.stepHint', { max: MAX_STEP_SIZE })">
                <Input id="pr-step" v-model="limits.step" class="tnum" inputmode="numeric" :disabled="limits.automatic || !canManage" />
              </Field>
            </div>
            <p v-if="limitsError" class="text-[13px] text-bad">{{ t('pr.limitsInvalid') }}</p>
          </div>
          <template v-if="limits && canManage" #footer>
            <Button :disabled="busy || limitsError" @click="saveLimits">{{ t('pr.saveLimits') }}</Button>
          </template>
        </Card>
      </div>
    </template>
  </PageBody>
  <Dialog v-model:open="floorOpen" :title="t('pr.manualFloor')" :desc="t('pr.manualFloorDesc')">
    <form id="pr-floor" class="grid gap-4" @submit.prevent="saveFloor">
      <Field id="pr-floor-value" :label="t('pr.floorLabel', { currency: rule?.currency ?? '' })" :hint="t('pr.floorHint')" :error="floorText.trim() !== '' && typedFloor === null && t('pr.floorInvalid')">
        <Input id="pr-floor-value" v-model="floorText" class="tnum" inputmode="decimal" />
      </Field>
    </form>
    <template #footer>
      <Button variant="outline" @click="floorOpen = false">{{ t('common.cancel') }}</Button>
      <Button type="submit" form="pr-floor" :disabled="busy || typedFloor === null">{{ t('pr.saveFloor') }}</Button>
    </template>
  </Dialog>
</template>
