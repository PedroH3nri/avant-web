<script setup lang="ts">
/**
 * Leitura do relatório salvo: totais no topo, gráfico e tabela. Período e comparação mudam só esta
 * visita; quem pode editar salva o relatório assim, e quem não pode duplica para editar.
 */
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import { ArrowLeft, Check, Copy, Download, Lock, Pencil, Pin, PinOff } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Avatar from '@/components/ui/Avatar.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, lang, locale, t, type Key } from '@/lib/i18n'
import { change, formatMetric, PERIOD_PRESETS, toNumber } from '@/lib/metrics'
import { cn } from '@/lib/utils'
import ReportChart from '@/modules/reports/components/ReportChart.vue'
import ReportTable from '@/modules/reports/components/ReportTable.vue'
import {
  axisSplit,
  fromReport,
  metricInfo,
  savedPeriod,
  scaleHue,
  seriesColor,
  toInput,
  toQuery,
  viewChanged,
  viewDraft,
  type ViewPeriod,
} from '@/modules/reports/rules'
import { exportUrl, reportService } from '@/modules/reports/service'
import type { MetricCatalog, ReportResult, SavedReport } from '@/modules/reports/types'
import { teamService } from '@/modules/team/service'
import { useSession } from '@/stores/session'

const session = useSession()
const route = useRoute()
const router = useRouter()
const report = ref<SavedReport | null>(null)
const catalog = ref<MetricCatalog | null>(null)
const result = ref<ReportResult | null>(null)
const loadError = ref<string | null>(null)
const runError = ref<string | null>(null)
const running = ref(false)
const pinned = ref(false)
const ownerName = ref<string | null>(null)
const period = ref<ViewPeriod>('last_30_days')
const compare = ref(false)
const saving = ref(false)
let latest = 0
let disposed = false
let retryTimer: ReturnType<typeof setTimeout> | null = null

const canManage = computed(() => session.can('reports.manage'))
const saved = computed(() => (report.value ? fromReport(report.value) : null))
const shown = computed(() => (saved.value ? viewDraft(saved.value, period.value, compare.value) : null))
const changed = computed(() => !!saved.value && viewChanged(saved.value, period.value, compare.value))
const mine = computed(() => report.value?.owner_user_id === session.me?.user.id)
const periods = computed(() => {
  const draft = saved.value
  const options: { value: string; label: string }[] = PERIOD_PRESETS.map((preset) => ({ value: preset, label: t(`period.${preset}` as Key) }))
  if (draft?.fixedPeriod) options.unshift({ value: 'fixed', label: t('report.fixedPeriod', { start: draft.fixedPeriod.start, end: draft.fixedPeriod.end }) })
  const savedValue = draft ? savedPeriod(draft) : null
  return options.map((option) => (option.value === savedValue ? { ...option, label: t('report.savedOption', { label: option.label }) } : option))
})
const totals = computed(() => {
  const draft = shown.value
  const found = result.value
  if (!draft || !found || !catalog.value) return []
  return draft.metrics.map((key) => {
    const info = metricInfo(key, catalog.value as MetricCatalog, lang.value)
    const value = toNumber(found.totals[key])
    const scale = draft.styles[key]?.scale
    return {
      key,
      label: info.label,
      text: formatMetric(value, info.format, locale.value, false, found.currency),
      delta: draft.compare ? change(value, toNumber(found.previous_totals?.[key])) : null,
      dot: seriesColor(draft.styles[key]?.color),
      color: scale && value !== null ? `hsl(${scaleHue(scale, value)} 75% 38%)` : undefined,
    }
  })
})
const chartTitle = computed(() => {
  const draft = shown.value
  if (!draft || !catalog.value) return ''
  const metric = metricInfo(draft.metrics[0] ?? '', catalog.value, lang.value).label
  const axis = axisSplit(draft.dimensions).axis
  const dimension = catalog.value.dimensions.find((item) => item.key === axis)?.label[lang.value]
  return dimension ? t('report.chartOf', { metric, dimension: dimension.toLowerCase() }) : metric
})
const chips = computed(() => {
  const draft = shown.value
  if (!draft || !catalog.value) return []
  /** O nome da dimensão no idioma da pessoa. */
  const label = (key: string) => catalog.value?.dimensions.find((item) => item.key === key)?.label[lang.value] ?? key
  return [
    ...draft.dimensions.map((key) => ({ key: `by-${key}`, text: `${t('report.by')} ${label(key).toLowerCase()}` })),
    ...draft.filters.map((filter) => ({ key: `filter-${filter.field}`, text: `${label(filter.field)}: ${filter.values.join(', ')}` })),
  ]
})

/** Mensagem do erro da API (a dela quando já explica). */
const apiMessage = (error: unknown) =>
  error instanceof ApiError ? (error.code === 'invalid_input' && error.message ? error.message : errorText(error.code, { s: Math.max(error.retryAfter ?? 2, 1) })) : errorText('unknown')

/** Carrega o relatório, o catálogo, se está fixado e o nome do dono; depois roda. */
async function load() {
  loadError.value = null
  result.value = null
  try {
    const id = route.params.id as string
    const [found, fields, pins] = await Promise.all([reportService.get(id), reportService.catalog(), reportService.pinned()])
    report.value = found
    catalog.value = fields
    pinned.value = pins.items.some((item) => item.id === found.id)
    resetView()
  } catch (error) {
    loadError.value = apiMessage(error)
    return
  }
  void loadOwner()
  void run()
}

/** O nome de quem é dono, pela equipe, se a pessoa pode ver a equipe. */
async function loadOwner() {
  if (!report.value || mine.value || !session.can('team.view')) return
  try {
    const members = await teamService.memberOptions()
    ownerName.value = members.items.find((member) => member.user.id === report.value?.owner_user_id)?.user.name ?? null
  } catch {
    ownerName.value = null
  }
}

/** Roda o relatório como está na tela; só a última resposta vale e o limite de taxa tenta de novo. */
async function run() {
  const draft = shown.value
  if (!draft || !catalog.value || disposed) return
  if (retryTimer) clearTimeout(retryTimer)
  const request = ++latest
  running.value = true
  try {
    const found = await reportService.query(toQuery(draft, session.displayCurrency, catalog.value))
    if (request !== latest || disposed) return
    result.value = found
    runError.value = null
  } catch (error) {
    if (request !== latest || disposed) return
    runError.value = apiMessage(error)
    if (error instanceof ApiError && error.code === 'rate_limited') retryTimer = setTimeout(run, Math.max(error.retryAfter ?? 2, 1) * 1000)
  } finally {
    if (request === latest) running.value = false
  }
}

/** Volta o período e a comparação ao que o relatório salvou. */
function resetView() {
  if (!saved.value) return
  period.value = savedPeriod(saved.value)
  compare.value = saved.value.compare
}

/** Grava o período e a comparação desta visita no relatório. */
async function saveView() {
  if (!report.value || !shown.value || !catalog.value) return
  saving.value = true
  try {
    report.value = await reportService.update(report.value.id, toInput(shown.value, catalog.value))
    resetView()
    toast.success(t('report.viewSaved'))
  } catch (error) {
    toast.error(apiMessage(error))
  } finally {
    saving.value = false
  }
}

/** Fixa no topo da lista ou solta. */
async function togglePin() {
  if (!report.value) return
  try {
    if (pinned.value) await reportService.unpin(report.value.id)
    else await reportService.pin(report.value.id)
    pinned.value = !pinned.value
  } catch (error) {
    toast.error(apiMessage(error))
  }
}

/** Faz uma cópia privada e abre a cópia no construtor. */
async function duplicate() {
  if (!report.value) return
  try {
    const copy = await reportService.duplicate(report.value.id)
    toast.success(t('report.duplicated'))
    await router.push(`/relatorios/${copy.id}/editar`)
  } catch (error) {
    toast.error(apiMessage(error))
  }
}

/** Baixa o relatório salvo no formato escolhido. */
function download(format: 'csv' | 'xlsx') {
  if (report.value) window.location.assign(exportUrl(report.value.id, format, lang.value))
}

watch([period, compare], () => {
  if (report.value) void run()
})
watch(() => route.params.id, () => void load(), { immediate: true })
onBeforeUnmount(() => {
  disposed = true
  latest++
  if (retryTimer) clearTimeout(retryTimer)
})
</script>

<template>
  <LoadError v-if="loadError" class="m-6" :message="loadError" @retry="load" />
  <template v-else-if="report && shown && catalog">
    <PageHeader :title="report.name" :sub="report.description ?? undefined">
      <template #back>
        <RouterLink to="/relatorios" class="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground">
          <ArrowLeft class="size-4" />{{ t('nav.customReports') }}
        </RouterLink>
      </template>
      <template #meta>
        <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted-foreground">
          <span class="flex items-center gap-1.5 text-foreground">
            <Avatar :name="mine ? (session.me?.user.name ?? '') : (ownerName ?? t('report.someoneElse'))" :size="20" />{{ mine ? t('report.yours') : (ownerName ?? t('report.someoneElse')) }}
          </span>
          <span class="inline-flex items-center gap-1"><Lock v-if="report.visibility === 'private'" class="size-3.5" aria-hidden="true" />{{ t(`report.visibility.${report.visibility}` as Key) }}</span>
          <span>{{ t('report.updatedOn', { date: formatDate(report.updated_at) }) }}</span>
        </div>
      </template>
      <template #actions>
        <Button variant="outline" size="icon" :aria-pressed="pinned" :title="pinned ? t('report.unpin') : t('report.pin')" @click="togglePin">
          <PinOff v-if="pinned" /><Pin v-else /><span class="sr-only">{{ pinned ? t('report.unpin') : t('report.pin') }}</span>
        </Button>
        <DropdownMenuRoot>
          <DropdownMenuTrigger as-child>
            <Button variant="outline"><Download />{{ t('report.export') }}</Button>
          </DropdownMenuTrigger>
          <MenuContent align="end">
            <MenuItem @select="download('csv')">CSV</MenuItem>
            <MenuItem @select="download('xlsx')">XLSX (Excel)</MenuItem>
          </MenuContent>
        </DropdownMenuRoot>
        <Button v-if="report.editable" @click="router.push(`/relatorios/${report.id}/editar`)"><Pencil />{{ t('common.edit') }}</Button>
        <Button v-else-if="canManage" @click="duplicate"><Copy />{{ t('report.duplicateToEdit') }}</Button>
      </template>
    </PageHeader>
    <PageBody>
      <div class="flex flex-wrap items-center gap-2">
        <NativeSelect :model-value="period" :options="periods" :aria-label="t('perf.period')" class="w-full sm:w-[240px]" @update:model-value="(value) => (period = value as ViewPeriod)" />
        <button
          type="button"
          :aria-pressed="compare"
          :class="cn('flex h-10 items-center gap-2 rounded-md border bg-background px-3 text-[13px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', compare ? 'text-foreground' : 'text-muted-foreground hover:text-foreground')"
          @click="compare = !compare"
        >
          <span :class="cn('flex size-4 items-center justify-center rounded-[4px] border', compare && 'border-primary bg-primary text-primary-foreground')"><Check v-if="compare" class="size-3" /></span>{{ t('perf.compare') }}
        </button>
        <Badge v-for="chip in chips" :key="chip.key">{{ chip.text }}</Badge>
        <span v-if="changed" class="flex flex-wrap items-center gap-2 text-[13px] text-muted-foreground sm:ml-auto">
          {{ t('report.seenDifferent') }}
          <Button variant="ghost" size="sm" @click="resetView">{{ t('report.backToSaved') }}</Button>
          <Button v-if="report.editable" variant="outline" size="sm" :disabled="saving" @click="saveView">{{ t('report.saveAsIs') }}</Button>
        </span>
      </div>

      <p v-if="runError" class="rounded-md border border-bad/40 bg-card px-4 py-3 text-[14px] text-bad" role="alert">{{ runError }}</p>

      <div v-if="!result && !runError" class="h-[120px] animate-pulse rounded-lg border bg-muted" aria-busy="true" />
      <template v-if="result">
        <div
          :class="cn(
            'grid gap-px overflow-hidden rounded-lg border bg-border transition-opacity',
            totals.length === 2 ? 'sm:grid-cols-2' : totals.length === 3 ? 'sm:grid-cols-3' : totals.length > 3 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1',
            running && 'opacity-60',
          )"
        >
          <div v-for="total in totals" :key="total.key" class="bg-card p-5">
            <div class="flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground">
              <span v-if="total.dot" class="size-2 rounded-full" :style="{ background: total.dot }" aria-hidden="true" />{{ total.label }}
            </div>
            <div class="mt-1 font-semibold tracking-[-0.04em] tnum" :class="shown.chart === 'kpi' ? 'text-[44px]' : 'text-[28px]'" :style="{ color: total.color }">{{ total.text }}</div>
            <div v-if="total.delta !== null" class="mt-1 text-[13px] tnum" :class="total.delta >= 0 ? 'text-ok' : 'text-bad'">
              <span aria-hidden="true">{{ total.delta >= 0 ? '↑' : '↓' }}</span> {{ t('report.vsPrevious', { value: `${Math.abs(total.delta).toFixed(1)}%` }) }}
            </div>
          </div>
        </div>

        <Card v-if="shown.chart !== 'table' && shown.chart !== 'kpi'" :title="chartTitle" :class="cn('min-w-0 transition-opacity', running && 'opacity-60')">
          <ReportChart :draft="shown" :result="result" :catalog="catalog" />
        </Card>

        <section v-if="shown.dimensions.length" :class="cn('grid gap-3 transition-opacity', running && 'opacity-60')">
          <div class="flex items-end justify-between gap-3">
            <h2 class="text-[16px] font-semibold tracking-tight">{{ t('report.data') }}</h2>
            <span class="text-[13px] text-muted-foreground">{{ t('report.rowsCount', { n: result.rows.length }) }}</span>
          </div>
          <ReportTable :draft="shown" :result="result" :catalog="catalog" />
        </section>
      </template>
    </PageBody>
  </template>
  <PageBody v-else>
    <div class="h-[240px] animate-pulse rounded-lg border bg-muted" aria-busy="true" />
  </PageBody>
</template>
