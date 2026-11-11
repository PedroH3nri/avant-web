<script setup lang="ts">
/**
 * Um widget do dashboard: mostra o gráfico ou a tabela com o resultado que a grade rodou para todos
 * os widgets de uma vez; o de texto mostra a nota, o de meta o andamento da meta e o de conta a
 * situação da Empresa. Na prévia (``preview``, um modelo dos clientes aberto pela Groone) não mostra
 * números. Editando, ganha o menu de
 * mover, mudar o tamanho e tirar e, da tela média para cima, arrasta pelo título e cresce pelo canto.
 */
import { computed, ref, watch } from 'vue'
import { DropdownMenuRoot, DropdownMenuSeparator, DropdownMenuTrigger } from 'reka-ui'
import { MoreHorizontal } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import { ApiError } from '@/lib/api'
import { errorText, lang, t } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import type { DragMode } from '@/modules/dashboards/drag'
import type { DashboardFilters, Widget } from '@/modules/dashboards/types'
import GoalBar from '@/modules/internal/goals/components/GoalBar.vue'
import { goalService } from '@/modules/internal/goals/service'
import type { GoalProgress } from '@/modules/internal/goals/types'
import AccountStatus from '@/modules/home/components/AccountStatus.vue'
import ReportChart from '@/modules/reports/components/ReportChart.vue'
import ReportTable from '@/modules/reports/components/ReportTable.vue'
import { draftOf, fromReport, metricInfo, type ReportDraft } from '@/modules/reports/rules'
import { reportService } from '@/modules/reports/service'
import type { MetricCatalog, ReportResult } from '@/modules/reports/types'

const props = defineProps<{
  /** Só o desenho do widget, sem rodar: os números aparecem no painel de quem vê o modelo. */
  preview?: boolean
  /** O widget está sendo arrastado ou redimensionado. */
  dragging?: boolean
  widget: Widget
  filters: DashboardFilters | null
  catalog: MetricCatalog
  editing: boolean
  /** O widget já está gravado no dashboard (os novos só rodam depois de salvar). */
  stored: boolean
  /** O resultado da consulta do widget, rodado pela grade. */
  result: ReportResult | null
  /** Por que a consulta do widget não rodou. */
  failure: string | null
  /** A grade está rodando as consultas. */
  loading: boolean
}>()
const emit = defineEmits<{ move: [columns: number, rows: number]; resize: [columns: number, rows: number]; remove: []; grab: [event: PointerEvent, mode: DragMode] }>()

const today = new Date().toISOString().slice(0, 10)
const month = today.slice(0, 7)
const draft = ref<ReportDraft | null>(null)
const reportName = ref<string | null>(null)
const goal = ref<GoalProgress | null>(null)
const goalFailure = ref<string | null>(null)
const goalLoading = ref(false)
const failure = computed(() => (props.widget.type === 'goal' ? goalFailure.value : props.failure))
const loading = computed(() => (props.widget.type === 'goal' ? goalLoading.value : props.loading))
let latest = 0

const title = computed(() => {
  const widget = props.widget
  if (widget.title) return widget.title
  if (widget.type === 'report') return reportName.value ?? t('dash.widget.report')
  if (widget.type === 'goal') return widget.goal_scope === 'team' ? t('dash.widget.goalTeam') : t('dash.widget.goalMine')
  if (widget.type === 'text') return t('dash.widget.text')
  if (widget.type === 'account') return t('dash.widget.account')
  const metric = widget.query?.metrics[0]
  return metric ? metricInfo(metric, props.catalog, lang.value).label : t('dash.widget.query')
})

/** Monta o rascunho do gráfico: o do relatório salvo ou o da consulta própria. */
async function loadDraft() {
  const widget = props.widget
  if (widget.type === 'query' && widget.query && widget.chart_type) {
    draft.value = draftOf(widget.query, widget.chart_type, widget.chart_options ?? {})
    return
  }
  if (widget.type === 'report' && widget.report_id) {
    const report = await reportService.get(widget.report_id)
    reportName.value = report.name
    draft.value = fromReport(report)
  }
}

/** Busca o andamento da meta do widget de meta; só a última resposta vale. */
async function loadGoal() {
  if (!props.stored || props.preview || props.widget.type !== 'goal') return
  const ticket = ++latest
  goalFailure.value = null
  goalLoading.value = true
  try {
    const found = props.widget.goal_scope === 'team' ? (await goalService.team(month)).company : (await goalService.mine(month)).progress
    if (ticket === latest) goal.value = found
  } catch (error) {
    if (ticket === latest) goalFailure.value = error instanceof ApiError ? errorText(error.code, { s: Math.max(error.retryAfter ?? 2, 1) }) : errorText('unknown')
  } finally {
    if (ticket === latest) goalLoading.value = false
  }
}

watch(() => [props.filters, props.stored, props.preview], loadGoal, { immediate: true, deep: true })
void loadDraft().catch(() => undefined)
/** O que muda o rascunho do gráfico; mover ou redimensionar o widget não muda e não recarrega. */
const draftKey = computed(() => {
  const { type, report_id, query, chart_type, chart_options } = props.widget
  return JSON.stringify([type, report_id ?? null, query ?? null, chart_type ?? null, chart_options ?? null])
})
watch(draftKey, () => {
  draft.value = null
  void loadDraft().catch(() => undefined)
})
/** Começa a arrastar pelo título, menos quando o clique foi no botão do menu. */
function grabTitle(event: PointerEvent) {
  if (!props.editing || (event.target as Element).closest('button')) return
  emit('grab', event, 'move')
}

</script>

<template>
  <section
    :class="
      cn('relative flex min-w-0 flex-col rounded-lg border bg-card', editing && 'border-dashed border-foreground/40', dragging && 'z-10 border-solid border-foreground shadow-lg')
    "
  >
    <div :class="cn('flex items-center gap-2 px-5 pt-4', editing && 'md:cursor-grab md:touch-none md:select-none', dragging && 'md:cursor-grabbing')" @pointerdown="grabTitle">
      <h3 class="min-w-0 flex-1 truncate text-[14px] font-semibold tracking-tight">{{ title }}</h3>
      <DropdownMenuRoot v-if="editing">
        <DropdownMenuTrigger as-child>
          <Button variant="ghost" size="icon" class="size-7" :aria-label="t('dash.edit.options', { name: title })"><MoreHorizontal /></Button>
        </DropdownMenuTrigger>
        <MenuContent align="end">
          <MenuItem @select="emit('move', -1, 0)">{{ t('dash.edit.left') }}</MenuItem>
          <MenuItem @select="emit('move', 1, 0)">{{ t('dash.edit.right') }}</MenuItem>
          <MenuItem @select="emit('move', 0, -1)">{{ t('dash.edit.up') }}</MenuItem>
          <MenuItem @select="emit('move', 0, 1)">{{ t('dash.edit.down') }}</MenuItem>
          <DropdownMenuSeparator class="-mx-1 my-1 h-px bg-border" />
          <MenuItem @select="emit('resize', 1, 0)">{{ t('dash.edit.wider') }}</MenuItem>
          <MenuItem @select="emit('resize', -1, 0)">{{ t('dash.edit.narrower') }}</MenuItem>
          <MenuItem @select="emit('resize', 0, 1)">{{ t('dash.edit.taller') }}</MenuItem>
          <MenuItem @select="emit('resize', 0, -1)">{{ t('dash.edit.shorter') }}</MenuItem>
          <DropdownMenuSeparator class="-mx-1 my-1 h-px bg-border" />
          <MenuItem danger @select="emit('remove')">{{ t('dash.edit.remove') }}</MenuItem>
        </MenuContent>
      </DropdownMenuRoot>
    </div>
    <div class="min-w-0 flex-1 overflow-auto px-5 pb-5 pt-3">
      <p v-if="widget.type === 'text'" class="whitespace-pre-line text-[14px] text-muted-foreground">{{ widget.text }}</p>
      <p v-else-if="preview" class="text-[13px] text-muted-foreground">{{ t('dash.widget.preview') }}</p>
      <AccountStatus v-else-if="widget.type === 'account' && !editing" />
      <p v-else-if="widget.type === 'account'" class="text-[13px] text-muted-foreground">{{ t('dash.add.accountHint') }}</p>
      <p v-else-if="!stored" class="text-[13px] text-muted-foreground">{{ t('dash.widget.saveToSee') }}</p>
      <p v-else-if="failure" class="text-[13px] text-bad">{{ failure }}</p>
      <GoalBar v-else-if="widget.type === 'goal' && goal" :progress="goal" :month="month" :today="today" :label="title" />
      <p v-else-if="loading" class="text-[13px] text-muted-foreground">{{ t('dash.widget.loading') }}</p>
      <template v-else-if="draft && result">
        <ReportTable v-if="draft.chart === 'table'" :draft="draft" :result="result" :catalog="catalog" />
        <ReportChart v-else :draft="draft" :result="result" :catalog="catalog" compact />
      </template>
    </div>
    <span
      v-if="editing"
      aria-hidden="true"
      class="absolute bottom-1 right-1 hidden size-4 cursor-se-resize touch-none after:absolute after:bottom-0.5 after:right-0.5 after:size-2.5 after:border-b-2 after:border-r-2 after:border-foreground/50 md:block"
      @pointerdown.stop="emit('grab', $event, 'resize')"
    />
  </section>
</template>
