<script setup lang="ts">
/**
 * Modal de métrica personalizada (nova ou edição): o formulário à esquerda, com autocompletar e
 * conferência da fórmula ao digitar, e a prévia à direita, calculada pela API com valores de exemplo.
 */
import { computed, ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { Check } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { ApiError } from '@/lib/api'
import { errorText, lang, locale, t } from '@/lib/i18n'
import { formatMetric, toNumber } from '@/lib/metrics'
import { completeAt, customKey, sampleFor, wordAt } from '@/modules/reports/rules'
import { customMetricService } from '@/modules/reports/service'
import type { CustomMetric, CustomMetricCheck, MetricCatalog, MetricFormat } from '@/modules/reports/types'
import { useSession } from '@/stores/session'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ metric: CustomMetric | null; catalog: MetricCatalog }>()
const emit = defineEmits<{ saved: [metric: CustomMetric, created: boolean] }>()
const CHECK_DELAY_MS = 400
const MAX_OPTIONS = 6
const NAME_MAX = 80
const FORMULA_MAX = 300
const session = useSession()
const name = ref('')
const formula = ref('')
const format = ref<MetricFormat>('currency')
const decimals = ref('2')
const cursor = ref(0)
const sample = ref<Record<string, string>>({})
const check = ref<CustomMetricCheck | null>(null)
const busy = ref(false)
const saveError = ref<string | null>(null)
let latest = 0

watch(open, (opened) => {
  if (!opened) return
  name.value = props.metric?.name ?? ''
  formula.value = props.metric?.formula ?? ''
  format.value = props.metric?.format ?? 'currency'
  decimals.value = String(props.metric?.decimals ?? 2)
  sample.value = {}
  check.value = null
  saveError.value = null
  void runCheck()
})

const formats = computed(() => (['currency', 'number', 'percent'] as MetricFormat[]).map((value) => ({ value, label: t(`report.format.${value}`) })))
const key = computed(() => (props.metric ? props.metric.key : customKey(name.value)))
const word = computed(() => wordAt(formula.value, cursor.value).word)
/** As métricas que completam a palavra do cursor (do catálogo e as outras da Empresa). */
const options = computed(() => {
  const term = word.value.toLowerCase()
  if (!term) return []
  const all = [
    ...props.catalog.metrics.map((metric) => ({ key: metric.key, label: metric.label[lang.value] })),
    ...props.catalog.custom_metrics.filter((metric) => metric.query_key !== props.metric?.query_key).map((metric) => ({ key: metric.query_key, label: metric.name })),
  ]
  return all.filter((option) => option.key.includes(term) || option.label.toLowerCase().includes(term)).slice(0, MAX_OPTIONS)
})
/** Nome da variável no idioma. */
const variableName = (variable: string) =>
  props.catalog.metrics.find((metric) => metric.key === variable)?.label[lang.value] ?? props.catalog.custom_metrics.find((metric) => metric.query_key === variable)?.name ?? variable
const sampleKeys = computed(() => (check.value?.valid ? check.value.variables.filter((variable) => !variable.startsWith('custom.')) : []))
const nested = computed(() => (check.value?.valid ? check.value.variables.filter((variable) => variable.startsWith('custom.')) : []))
const preview = computed(() => formatMetric(toNumber(check.value?.value), format.value, locale.value, false, session.displayCurrency))
const canSave = computed(() => !!name.value.trim() && !!check.value?.valid && !busy.value)

/** O formulário como a API recebe. */
const input = () => ({
  name: name.value.trim(),
  formula: formula.value.trim(),
  format: format.value,
  decimals: Math.min(6, Math.max(0, Number(decimals.value) || 0)),
  description: props.metric?.description ?? null,
})

/** Confere a fórmula na API e, com valores de exemplo, calcula a prévia; só a última resposta vale. */
async function runCheckNow() {
  if (!formula.value.trim()) {
    check.value = null
    return
  }
  const request = ++latest
  const numbers = Object.fromEntries(Object.entries(sample.value).filter(([, value]) => value.trim() !== '' && Number.isFinite(Number(value.replace(',', '.')))).map(([variable, value]) => [variable, value.replace(',', '.')]))
  try {
    const response = await customMetricService.check({ ...input(), name: input().name || key.value || 'x', metric_id: props.metric?.id ?? null, sample: numbers })
    if (request !== latest) return
    check.value = response
    const next = sampleFor(response.variables.filter((variable) => !variable.startsWith('custom.')), sample.value)
    if (JSON.stringify(Object.keys(next)) !== JSON.stringify(Object.keys(sample.value))) sample.value = next
  } catch (error) {
    if (request !== latest) return
    check.value = { valid: false, code: error instanceof ApiError ? error.code : 'unknown', error: errorText(error instanceof ApiError ? error.code : 'unknown'), variables: [], value: null }
  }
}
const runCheck = useDebounceFn(runCheckNow, CHECK_DELAY_MS)
watch([formula, format, decimals, sample], () => void runCheck(), { deep: true })

/** Guarda a posição do cursor para o autocompletar. */
function track(event: Event) {
  cursor.value = (event.target as HTMLTextAreaElement).selectionStart ?? formula.value.length
}
/** Troca a palavra do cursor pela métrica escolhida. */
function complete(option: string) {
  const next = completeAt(formula.value, cursor.value, option)
  formula.value = next.text
  cursor.value = next.cursor
}

/** Cria ou troca a métrica e avisa o construtor. */
async function save() {
  busy.value = true
  saveError.value = null
  try {
    const metric = props.metric ? await customMetricService.update(props.metric.id, input()) : await customMetricService.create(input())
    emit('saved', metric, !props.metric)
    open.value = false
  } catch (error) {
    saveError.value = error instanceof ApiError && error.message && error.code !== 'unknown' ? error.message : errorText('unknown')
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <Dialog v-model:open="open" class="max-w-[760px]" :title="metric ? t('report.metricEdit') : t('report.metricNew')" :desc="t('report.metricDesc')">
    <form id="custom-metric" class="grid gap-6 md:grid-cols-[minmax(0,1fr)_280px]" @submit.prevent="canSave && save()">
      <div class="grid content-start gap-5">
        <Field id="metric-name" :label="t('report.name')" :hint="key ? t('report.metricKey', { key: `custom.${key}` }) : undefined">
          <Input id="metric-name" v-model="name" :maxlength="NAME_MAX" :placeholder="t('report.metricNamePlaceholder')" />
        </Field>
        <div class="grid gap-2">
          <label for="metric-formula" class="text-[13px] font-medium text-muted-foreground">{{ t('report.formula') }}</label>
          <div class="relative">
            <textarea
              id="metric-formula"
              v-model="formula"
              rows="3"
              spellcheck="false"
              :maxlength="FORMULA_MAX"
              placeholder="revenue / ad_requests * 1000"
              :aria-invalid="check ? !check.valid : undefined"
              aria-describedby="metric-formula-message"
              class="w-full rounded-md border border-input bg-background px-3 py-2 font-mono text-[13px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring aria-[invalid=true]:border-bad"
              @input="track"
              @click="track"
              @keyup="track"
            />
            <ul v-if="options.length" class="absolute inset-x-0 top-full z-10 mt-1 overflow-hidden rounded-md border bg-popover py-1 shadow-md" role="listbox" :aria-label="t('report.metrics')">
              <li v-for="option in options" :key="option.key">
                <button type="button" class="flex w-full items-center justify-between gap-3 px-3 py-1.5 text-left text-[13px] hover:bg-accent" @mousedown.prevent="complete(option.key)">
                  <span class="truncate">{{ option.label }}</span><span class="font-mono text-[12px] text-muted-foreground">{{ option.key }}</span>
                </button>
              </li>
            </ul>
          </div>
          <p id="metric-formula-message" class="text-[13px]" :class="check && !check.valid ? 'text-bad' : 'text-muted-foreground'">
            <template v-if="check && !check.valid">{{ check.error }}</template>
            <span v-else-if="check?.valid" class="inline-flex items-center gap-1.5 text-ok"><Check class="size-3.5" />{{ t('report.formulaValid') }}</span>
            <template v-else>{{ t('report.formulaHint') }}</template>
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <Field id="metric-format" :label="t('report.metricFormat')"><NativeSelect id="metric-format" v-model="format" :options="formats" /></Field>
          <Field id="metric-decimals" :label="t('report.metricDecimals')"><Input id="metric-decimals" v-model="decimals" type="number" min="0" max="6" /></Field>
        </div>
        <p v-if="saveError" class="text-[13px] text-bad">{{ saveError }}</p>
      </div>
      <section class="self-start rounded-lg border bg-muted p-4">
        <h3 class="text-[14px] font-semibold">{{ t('report.preview') }}</h3>
        <p class="mt-1 text-[13px] text-muted-foreground">{{ t('report.previewDesc') }}</p>
        <div v-if="sampleKeys.length" class="mt-3 grid gap-2">
          <label v-for="variable in sampleKeys" :key="variable" class="grid grid-cols-[minmax(0,1fr)_120px] items-center gap-3 text-[13px]">
            <span class="min-w-0 truncate" :title="variable">{{ variableName(variable) }}</span>
            <Input v-model="sample[variable]" inputmode="decimal" class="h-8 text-right tnum" :aria-label="t('report.sampleOf', { name: variableName(variable) })" />
          </label>
          <p v-if="nested.length" class="text-[12px] text-muted-foreground">{{ t('report.nestedHint', { names: nested.map(variableName).join(', ') }) }}</p>
          <div class="mt-2 flex items-baseline justify-between border-t pt-3">
            <span class="text-[13px] text-muted-foreground">{{ t('report.result') }}</span>
            <span class="text-[20px] font-semibold tnum">{{ preview }}</span>
          </div>
          <p v-if="check?.value === null" class="text-[12px] text-muted-foreground">{{ t('report.previewEmpty') }}</p>
        </div>
        <p v-else class="mt-3 text-[13px] text-muted-foreground">{{ t('report.previewWaiting') }}</p>
      </section>
    </form>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button type="submit" form="custom-metric" :disabled="!canSave" :loading="busy">{{ metric ? t('report.save') : t('report.metricCreate') }}</Button>
    </template>
  </Dialog>
</template>
