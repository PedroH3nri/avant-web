<script setup lang="ts">
/** Os filtros que valem para o dashboard inteiro: período e, por dimensão, um valor ou todos. */
import { computed } from 'vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { t, type Key } from '@/lib/i18n'
import { PERIOD_PRESETS } from '@/lib/metrics'
import { filterPeriod, withPeriod, withValue } from '@/modules/dashboards/rules'
import type { DashboardFilters, FilterDimension } from '@/modules/dashboards/types'
import type { FilterOption } from '@/modules/reports/components/ConfigPanel.vue'
import type { RelativePeriod } from '@/modules/reports/types'

const filters = defineModel<DashboardFilters>({ required: true })
const props = defineProps<{ options: Partial<Record<FilterDimension, FilterOption[]>>; internal: boolean }>()

const periods = computed(() => [{ value: '', label: t('dash.filter.widgetPeriod') }, ...PERIOD_PRESETS.map((preset) => ({ value: preset, label: t(`period.${preset}` as Key) }))])
const dimensions = computed(() =>
  (['client', 'account_manager', 'network', 'site'] as FilterDimension[])
    .filter((dimension) => props.internal || (dimension !== 'client' && dimension !== 'account_manager'))
    .filter((dimension) => (props.options[dimension]?.length ?? 0) > 0)
    .map((dimension) => ({
      dimension,
      label: t(`dash.filter.${dimension}` as Key),
      options: [{ value: '', label: t('dash.filter.all') }, ...(props.options[dimension] ?? [])],
    })),
)
/** O valor escolhido na dimensão, ou vazio para todos. */
const chosen = (dimension: FilterDimension) => filters.value[dimension]?.[0] ?? ''
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <NativeSelect
      :model-value="filterPeriod(filters)"
      :options="periods"
      class="w-auto min-w-[200px]"
      :aria-label="t('dash.filter.period')"
      @update:model-value="(value) => (filters = withPeriod(filters, value as RelativePeriod | ''))"
    />
    <NativeSelect
      v-for="item in dimensions"
      :key="item.dimension"
      :model-value="chosen(item.dimension)"
      :options="item.options"
      class="w-auto min-w-[180px]"
      :aria-label="item.label"
      @update:model-value="(value) => (filters = withValue(filters, item.dimension, value))"
    />
  </div>
</template>
