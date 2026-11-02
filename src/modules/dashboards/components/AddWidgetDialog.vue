<script setup lang="ts">
/** Escolha do widget novo: relatório salvo, KPI de uma métrica, texto ou meta (só na Groone). */
import { computed, ref, watch } from 'vue'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { lang, t, type Key } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { goalWidget, kpiWidget, reportWidget, textWidget } from '@/modules/dashboards/rules'
import type { GoalScope, Widget, WidgetType } from '@/modules/dashboards/types'
import { pickSource } from '@/modules/reports/rules'
import { reportService } from '@/modules/reports/service'
import type { MetricCatalog, SavedReport } from '@/modules/reports/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ catalog: MetricCatalog; internal: boolean; widgets: Widget[] }>()
const emit = defineEmits<{ add: [widget: Widget] }>()
const TEXT_MAX = 2000
const MAX_REPORT_PAGES = 10

const kind = ref<WidgetType>('query')
const reports = ref<SavedReport[]>([])
const reportId = ref('')
const metric = ref('')
const text = ref('')
const scope = ref<GoalScope>('mine')

const kinds = computed(() =>
  (['query', 'report', 'text', 'goal'] as WidgetType[])
    .filter((item) => item !== 'goal' || props.internal)
    .map((item) => ({ value: item, label: t(`dash.add.${item}` as Key), hint: t(`dash.add.${item}Hint` as Key) })),
)
const metrics = computed(() => [
  ...props.catalog.metrics.map((item) => ({ value: item.key, label: item.label[lang.value] })),
  ...props.catalog.custom_metrics.map((item) => ({ value: item.query_key, label: item.name })),
])
const reportOptions = computed(() => reports.value.map((item) => ({ value: item.id, label: item.name })))
const scopes = computed(() => (['mine', 'team'] as GoalScope[]).map((value) => ({ value, label: t(`dash.widget.${value === 'mine' ? 'goalMine' : 'goalTeam'}` as Key) })))
const ready = computed(() => {
  if (kind.value === 'query') return !!metric.value
  if (kind.value === 'report') return !!reportId.value
  if (kind.value === 'text') return !!text.value.trim()
  return true
})

/** Os relatórios salvos que a pessoa vê, página a página. */
async function loadReports() {
  const found: SavedReport[] = []
  for (let page = 1; page <= MAX_REPORT_PAGES; page += 1) {
    const result = await reportService.list({ page })
    found.push(...result.items)
    if (page >= result.pages) break
  }
  const pinned = await reportService.pinned()
  reports.value = [...pinned.items, ...found]
  reportId.value = reports.value[0]?.id ?? ''
}

watch(open, (opened) => {
  if (!opened) return
  kind.value = 'query'
  metric.value = metrics.value[0]?.value ?? ''
  text.value = ''
  scope.value = 'mine'
  void loadReports().catch(() => (reports.value = []))
})

/** Monta o widget escolhido na primeira linha livre e fecha. */
function add() {
  if (!ready.value) return
  let widget: Widget
  if (kind.value === 'query') widget = kpiWidget(props.widgets, metric.value, pickSource([metric.value], [], [], props.catalog) ?? 'gam')
  else if (kind.value === 'report') widget = reportWidget(props.widgets, reportId.value)
  else if (kind.value === 'text') widget = textWidget(props.widgets, text.value.trim())
  else widget = goalWidget(props.widgets, scope.value)
  emit('add', widget)
  open.value = false
}
</script>

<template>
  <Dialog v-model:open="open" :title="t('dash.add.title')" :desc="t('dash.add.desc')" class="max-w-[520px]">
    <div class="grid gap-4">
      <div class="grid gap-2" role="radiogroup" :aria-label="t('dash.add.kind')">
        <button
          v-for="item in kinds"
          :key="item.value"
          type="button"
          role="radio"
          :aria-checked="kind === item.value"
          :class="cn('rounded-md border px-4 py-3 text-left hover:bg-accent', kind === item.value && 'border-foreground')"
          @click="kind = item.value"
        >
          <div class="text-[14px] font-medium">{{ item.label }}</div>
          <div class="text-[13px] text-muted-foreground">{{ item.hint }}</div>
        </button>
      </div>
      <Field v-if="kind === 'query'" id="widget-metric" :label="t('dash.add.metric')">
        <NativeSelect id="widget-metric" v-model="metric" :options="metrics" />
      </Field>
      <Field v-else-if="kind === 'report'" id="widget-report" :label="t('dash.add.reportPick')" :hint="reports.length ? undefined : t('dash.add.noReports')">
        <NativeSelect id="widget-report" v-model="reportId" :options="reportOptions" :disabled="!reports.length" />
      </Field>
      <Field v-else-if="kind === 'text'" id="widget-text" :label="t('dash.add.textLabel')">
        <textarea
          id="widget-text"
          v-model="text"
          rows="4"
          :maxlength="TEXT_MAX"
          class="w-full rounded-md border border-input bg-background px-3 py-2 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </Field>
      <Field v-else id="widget-goal" :label="t('dash.add.goalScope')">
        <NativeSelect id="widget-goal" v-model="scope" :options="scopes" />
      </Field>
    </div>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button :disabled="!ready" @click="add">{{ t('dash.add.confirm') }}</Button>
    </template>
  </Dialog>
</template>
