<script setup lang="ts">
/** Configuração do construtor: visualização, período, comparação, filtros e limite de linhas. */
import { computed, ref } from 'vue'
import { Plus, X } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { lang, t, type Key } from '@/lib/i18n'
import { PERIOD_PRESETS } from '@/lib/metrics'
import { cn } from '@/lib/utils'
import { chartAllowed, pickSource, type DraftFilter, type ReportDraft } from '@/modules/reports/rules'
import type { ChartType, MetricCatalog, RelativePeriod } from '@/modules/reports/types'

export interface FilterOption {
  value: string
  label: string
}

const props = defineProps<{ draft: ReportDraft; catalog: MetricCatalog; editable: boolean; options: Record<string, FilterOption[]> }>()
const emit = defineEmits<{ update: [patch: Partial<ReportDraft>] }>()
const CHARTS: ChartType[] = ['table', 'line', 'bar', 'area', 'pie', 'kpi', 'funnel']
const LIMITS = [5, 10, 25, 100, 1000]
const typed = ref<Record<string, string>>({})
const newField = ref('')

const periods = computed(() => PERIOD_PRESETS.map((preset) => ({ value: preset, label: t(`period.${preset}` as Key) })))
const limits = computed(() => LIMITS.map((limit) => ({ value: String(limit), label: limit === 1000 ? t('report.limitAll') : t('report.limitTop', { n: limit }) })))
/** Dimensões que podem virar filtro agora (filtráveis, ainda sem filtro e com fonte). */
const filterable = computed(() =>
  props.catalog.dimensions
    .filter((dimension) => dimension.filterable && !props.draft.filters.some((item) => item.field === dimension.key))
    .filter((dimension) => pickSource(props.draft.metrics, props.draft.dimensions, [...props.draft.filters.map((item) => item.field), dimension.key], props.catalog) !== null)
    .map((dimension) => ({ value: dimension.key, label: dimension.label[lang.value] })),
)
/** Nome da dimensão no idioma. */
const dimensionName = (key: string) => props.catalog.dimensions.find((dimension) => dimension.key === key)?.label[lang.value] ?? key
/** O nome de um valor do filtro (site e network pelo nome). */
const valueName = (field: string, value: string) => props.options[field]?.find((option) => option.value === value)?.label ?? value

/** Troca os filtros. */
const setFilters = (filters: DraftFilter[]) => emit('update', { filters })
/** Liga ou desliga um valor do filtro. */
function toggleValue(field: string, value: string) {
  setFilters(props.draft.filters.map((item) => (item.field === field ? { ...item, values: item.values.includes(value) ? item.values.filter((kept) => kept !== value) : [...item.values, value] } : item)))
}
/** Acrescenta o valor digitado ao filtro de texto. */
function addTyped(field: string) {
  const value = (typed.value[field] ?? '').trim()
  if (!value) return
  const current = props.draft.filters.find((item) => item.field === field)
  if (current && !current.values.includes(value)) toggleValue(field, value)
  typed.value = { ...typed.value, [field]: '' }
}
/** Abre um filtro novo, vazio, na dimensão escolhida. */
function addFilter() {
  const field = newField.value || filterable.value[0]?.value
  if (!field) return
  setFilters([...props.draft.filters, { field, values: [] }])
  newField.value = ''
}
const title = 'px-4 pb-1.5 pt-4 text-[12px] font-medium uppercase tracking-wide text-muted-foreground'
</script>

<template>
  <div class="pb-6">
    <h3 :class="title">{{ t('report.chartType') }}</h3>
    <div class="grid grid-cols-2 gap-1.5 px-4">
      <button
        v-for="chart in CHARTS"
        :key="chart"
        type="button"
        :disabled="!editable || !chartAllowed(chart, draft.metrics.length, draft.dimensions.length)"
        :aria-pressed="draft.chart === chart"
        :class="
          cn(
            'rounded-md border px-2.5 py-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            draft.chart === chart ? 'border-primary bg-secondary' : 'hover:bg-accent',
            !chartAllowed(chart, draft.metrics.length, draft.dimensions.length) && 'cursor-not-allowed opacity-50 hover:bg-transparent',
          )
        "
        @click="emit('update', { chart })"
      >
        <span class="block text-[13px] font-medium">{{ t(`report.chart.${chart}` as Key) }}</span>
        <span v-if="!chartAllowed(chart, draft.metrics.length, draft.dimensions.length)" class="block text-[11px] leading-tight text-muted-foreground">{{ t(`report.chartRule.${chart}` as Key) }}</span>
      </button>
    </div>
    <p v-if="draft.dimensions.length === 2 && draft.metrics.length > 1" class="mx-4 mt-2 text-[12px] text-muted-foreground">{{ t('report.twoDimensionsHint') }}</p>
    <p v-if="draft.dimensions.length > 2" class="mx-4 mt-2 text-[12px] text-muted-foreground">{{ t('report.manyDimensionsHint') }}</p>
    <label v-if="draft.chart === 'bar' || draft.chart === 'area'" class="mx-4 mt-3 flex items-center gap-2 text-[13px]">
      <input type="checkbox" :checked="draft.stacked" :disabled="!editable" class="size-4 accent-[hsl(var(--primary))]" @change="emit('update', { stacked: ($event.target as HTMLInputElement).checked })" />{{ t('report.stacked') }}
    </label>

    <h3 :class="title">{{ t('perf.period') }}</h3>
    <div class="grid gap-2 px-4">
      <p v-if="draft.fixedPeriod" class="text-[13px]">{{ t('report.fixedPeriod', { start: draft.fixedPeriod.start, end: draft.fixedPeriod.end }) }}</p>
      <NativeSelect
        v-else
        :model-value="draft.period"
        :options="periods"
        :disabled="!editable"
        :aria-label="t('perf.period')"
        @update:model-value="(value) => emit('update', { period: value as RelativePeriod })"
      />
      <label class="flex items-center gap-2 text-[13px]">
        <input type="checkbox" :checked="draft.compare" :disabled="!editable" class="size-4 accent-[hsl(var(--primary))]" @change="emit('update', { compare: ($event.target as HTMLInputElement).checked })" />{{ t('perf.compare') }}
      </label>
    </div>

    <h3 :class="title">{{ t('report.filters') }}</h3>
    <div class="grid gap-2 px-4">
      <div v-for="item in draft.filters" :key="item.field" class="rounded-md border p-2.5 text-[13px]">
        <div class="flex items-center justify-between">
          <span class="font-medium">{{ t('report.filterIs', { field: dimensionName(item.field) }) }}</span>
          <button v-if="editable" type="button" class="rounded p-1 hover:bg-accent" :aria-label="t('report.removeFilter')" @click="setFilters(draft.filters.filter((kept) => kept.field !== item.field))"><X class="size-3" /></button>
        </div>
        <div v-if="options[item.field]?.length" class="mt-1.5 grid max-h-48 gap-1 overflow-y-auto">
          <label v-for="option in options[item.field]" :key="option.value" class="flex items-center gap-2">
            <input type="checkbox" class="size-3.5 accent-[hsl(var(--primary))]" :checked="item.values.includes(option.value)" :disabled="!editable" @change="toggleValue(item.field, option.value)" />
            <span class="truncate">{{ option.label }}</span>
          </label>
        </div>
        <template v-else>
          <div class="mt-1.5 flex flex-wrap gap-1">
            <span v-for="value in item.values" :key="value" class="inline-flex h-6 items-center gap-1 rounded-full border bg-card pl-2 pr-1 text-[12px]">
              {{ valueName(item.field, value) }}
              <button v-if="editable" type="button" class="rounded-full p-0.5 hover:bg-accent" :aria-label="t('report.removeValue', { value })" @click="toggleValue(item.field, value)"><X class="size-3" /></button>
            </span>
          </div>
          <form v-if="editable" class="mt-1.5 flex gap-1.5" @submit.prevent="addTyped(item.field)">
            <Input v-model="typed[item.field]" class="h-8" :placeholder="t('report.typeValue')" :aria-label="t('report.typeValue')" />
            <Button type="submit" variant="outline" size="sm">{{ t('report.addValue') }}</Button>
          </form>
        </template>
        <p v-if="!item.values.length" class="mt-1 text-[12px] text-muted-foreground">{{ t('report.filterEmpty') }}</p>
      </div>
      <div v-if="editable && filterable.length" class="flex gap-2">
        <NativeSelect :model-value="newField || filterable[0]?.value" :options="filterable" class="flex-1" :aria-label="t('report.filterField')" @update:model-value="(value) => (newField = value)" />
        <Button variant="outline" @click="addFilter"><Plus />{{ t('report.filter') }}</Button>
      </div>
    </div>

    <h3 :class="title">{{ t('report.rows') }}</h3>
    <div class="grid gap-2 px-4">
      <NativeSelect
        :model-value="String(draft.limit)"
        :options="limits"
        :disabled="!editable"
        :aria-label="t('report.rows')"
        @update:model-value="(value) => emit('update', { limit: Number(value) })"
      />
      <p class="text-[12px] text-muted-foreground">{{ t('report.orderHint') }}</p>
    </div>
  </div>
</template>
