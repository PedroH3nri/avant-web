<script setup lang="ts">
/**
 * A grade de 12 colunas com os widgets do dashboard ou do modelo. Editando, da tela média para cima
 * arrasta pelo título e redimensiona pelo canto com a prévia na grade; no celular, os widgets ficam em
 * uma coluna e mudam só pelo menu de cada um. Os widgets com consulta rodam juntos, numa requisição.
 */
import { computed, ref } from 'vue'
import DashboardWidget from '@/modules/dashboards/components/DashboardWidget.vue'
import { useWidgetDrag } from '@/modules/dashboards/drag'
import { useDashboardRun, widgetErrorText } from '@/modules/dashboards/run'
import { gridArea, moveWidget, readingOrder, removeWidget, resizeWidget } from '@/modules/dashboards/rules'
import type { DashboardFilters, Widget } from '@/modules/dashboards/types'
import type { MetricCatalog } from '@/modules/reports/types'

const props = defineProps<{
  widgets: Widget[]
  editing: boolean
  catalog: MetricCatalog
  filters: DashboardFilters | null
  /** Os widgets já gravados (os novos só rodam depois de salvar). */
  stored: Set<string>
  dashboardId?: string
  templateId?: string
  /** Só o desenho dos widgets, sem rodar nada. */
  preview?: boolean
}>()
const emit = defineEmits<{ 'update:widgets': [widgets: Widget[]] }>()

const grid = ref<HTMLElement | null>(null)
const source = computed({
  get: () => props.widgets,
  set: (widgets: Widget[]) => emit('update:widgets', widgets),
})
const drag = useWidgetDrag(grid, source)
const ordered = computed(() => readingOrder(props.editing ? drag.shown.value : props.widgets))
const activeId = drag.activeId
const { run, failure, loading } = useDashboardRun(() => props)

/** O erro do widget: o da requisição inteira ou o dele. */
function widgetFailure(widget: Widget) {
  const own = run.value.errors[widget.id]
  return failure.value ?? (own ? widgetErrorText(own) : null)
}
</script>

<template>
  <div ref="grid" class="grid grid-cols-1 gap-4 md:auto-rows-[72px] md:grid-cols-12">
    <DashboardWidget
      v-for="widget in ordered"
      :key="widget.id"
      :widget="widget"
      :filters="filters"
      :catalog="catalog"
      :editing="editing"
      :stored="stored.has(widget.id)"
      :preview="preview"
      :dragging="activeId === widget.id"
      :result="run.results[widget.id] ?? null"
      :failure="widgetFailure(widget)"
      :loading="loading"
      class="min-h-[160px] md:min-h-0 md:[grid-column:var(--col)] md:[grid-row:var(--row)]"
      :style="{ '--col': gridArea(widget).gridColumn, '--row': gridArea(widget).gridRow }"
      @grab="(event, mode) => drag.begin(event, widget, mode)"
      @move="(columns, rows) => (source = moveWidget(widgets, widget.id, columns, rows))"
      @resize="(columns, rows) => (source = resizeWidget(widgets, widget.id, columns, rows))"
      @remove="source = removeWidget(widgets, widget.id)"
    />
  </div>
</template>
