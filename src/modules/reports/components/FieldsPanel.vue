<script setup lang="ts">
/** Lista de campos do construtor: métricas, métricas da Empresa e dimensões, com busca. */
import { computed, ref } from 'vue'
import { DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import { Check, MoreHorizontal, Plus, Search } from 'lucide-vue-next'
import Input from '@/components/ui/Input.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import { lang, t } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { fieldAvailable, type ReportDraft } from '@/modules/reports/rules'
import type { MetricCatalog } from '@/modules/reports/types'

const props = defineProps<{ draft: ReportDraft; catalog: MetricCatalog; editable: boolean; canManageMetrics: boolean }>()
const emit = defineEmits<{ metric: [key: string]; dimension: [key: string]; newMetric: []; editMetric: [key: string]; deleteMetric: [key: string] }>()
const search = ref('')

/** Se o nome ou a chave batem com a busca. */
const matches = (name: string, key: string) => {
  const term = search.value.trim().toLowerCase()
  return !term || name.toLowerCase().includes(term) || key.toLowerCase().includes(term)
}
const metrics = computed(() =>
  props.catalog.metrics
    .filter((metric) => matches(metric.label[lang.value], metric.key))
    .map((metric) => ({ key: metric.key, name: metric.label[lang.value], picked: props.draft.metrics.includes(metric.key), available: fieldAvailable({ kind: 'metric', key: metric.key }, props.draft, props.catalog) })),
)
const customs = computed(() =>
  props.catalog.custom_metrics
    .filter((metric) => matches(metric.name, metric.query_key))
    .map((metric) => ({ key: metric.query_key, name: metric.name, picked: props.draft.metrics.includes(metric.query_key), available: fieldAvailable({ kind: 'metric', key: metric.query_key }, props.draft, props.catalog) })),
)
const dimensions = computed(() =>
  props.catalog.dimensions
    .filter((dimension) => matches(dimension.label[lang.value], dimension.key))
    .map((dimension) => ({ key: dimension.key, name: dimension.label[lang.value], picked: props.draft.dimensions.includes(dimension.key), available: fieldAvailable({ kind: 'dimension', key: dimension.key }, props.draft, props.catalog) })),
)
/** Classes do item: escolhido, livre ou apagado. */
const itemClass = (picked: boolean, enabled: boolean) =>
  cn(
    'flex w-full min-w-0 items-center gap-2 rounded-md px-2.5 py-1.5 text-left text-[13px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    picked ? 'bg-secondary font-medium' : 'hover:bg-accent',
    !enabled && 'cursor-not-allowed opacity-45 hover:bg-transparent',
  )
const title = 'px-4 pb-1.5 pt-4 text-[12px] font-medium uppercase tracking-wide text-muted-foreground'
</script>

<template>
  <div class="pb-4">
    <div class="p-3 pb-0">
      <div class="relative">
        <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input v-model="search" :placeholder="t('report.searchFields')" :aria-label="t('report.searchFields')" class="pl-9" />
      </div>
    </div>
    <h3 :class="title">{{ t('report.metrics') }}</h3>
    <div class="grid gap-0.5 px-2">
      <button
        v-for="field in metrics"
        :key="field.key"
        type="button"
        :class="itemClass(field.picked, editable && field.available)"
        :disabled="!editable || !field.available"
        :aria-pressed="field.picked"
        :title="field.available ? undefined : t('report.fieldUnavailable')"
        @click="emit('metric', field.key)"
      >
        <span :class="cn('flex size-4 shrink-0 items-center justify-center rounded-[4px] border', field.picked && 'border-primary bg-primary text-primary-foreground')"><Check v-if="field.picked" class="size-3" /></span>
        <span class="min-w-0 flex-1 truncate">{{ field.name }}</span>
      </button>
    </div>
    <div class="flex items-center justify-between pr-2">
      <h3 :class="title">{{ t('report.myMetrics') }}</h3>
      <button v-if="canManageMetrics" type="button" class="mt-3 flex h-7 items-center gap-1 rounded-md px-2 text-[13px] hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" @click="emit('newMetric')">
        <Plus class="size-3.5" />{{ t('report.newMetric') }}
      </button>
    </div>
    <div class="grid gap-0.5 px-2">
      <div v-for="field in customs" :key="field.key" class="group flex items-center">
        <button
          type="button"
          :class="itemClass(field.picked, editable && field.available)"
          :disabled="!editable || !field.available"
          :aria-pressed="field.picked"
          :title="field.available ? undefined : t('report.fieldUnavailable')"
          @click="emit('metric', field.key)"
        >
          <span :class="cn('flex size-4 shrink-0 items-center justify-center rounded-[4px] border', field.picked && 'border-primary bg-primary text-primary-foreground')"><Check v-if="field.picked" class="size-3" /></span>
          <span class="min-w-0 flex-1 truncate">{{ field.name }}</span>
          <span class="text-[11px] text-muted-foreground" aria-hidden="true">ƒ</span>
        </button>
        <DropdownMenuRoot v-if="canManageMetrics">
          <DropdownMenuTrigger class="ml-0.5 rounded-md p-1 text-muted-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" :aria-label="t('report.metricActions', { name: field.name })">
            <MoreHorizontal class="size-4" />
          </DropdownMenuTrigger>
          <MenuContent align="end">
            <MenuItem @select="emit('editMetric', field.key)">{{ t('report.editMetric') }}</MenuItem>
            <MenuItem danger @select="emit('deleteMetric', field.key)">{{ t('common.delete') }}</MenuItem>
          </MenuContent>
        </DropdownMenuRoot>
      </div>
      <p v-if="!catalog.custom_metrics.length" class="px-2.5 py-1.5 text-[13px] text-muted-foreground">{{ t('report.myMetricsEmpty') }}</p>
    </div>
    <h3 :class="title">{{ t('report.dimensions') }}</h3>
    <div class="grid gap-0.5 px-2">
      <button
        v-for="field in dimensions"
        :key="field.key"
        type="button"
        :class="itemClass(field.picked, editable && field.available)"
        :disabled="!editable || !field.available"
        :aria-pressed="field.picked"
        :title="field.available ? undefined : t('report.fieldUnavailable')"
        @click="emit('dimension', field.key)"
      >
        <span :class="cn('flex size-4 shrink-0 items-center justify-center rounded-[4px] border', field.picked && 'border-primary bg-primary text-primary-foreground')"><Check v-if="field.picked" class="size-3" /></span>
        <span class="min-w-0 flex-1 truncate">{{ field.name }}</span>
        <span v-if="!field.available" class="text-[11px] text-muted-foreground">{{ t('report.unavailableShort') }}</span>
      </button>
    </div>
  </div>
</template>
