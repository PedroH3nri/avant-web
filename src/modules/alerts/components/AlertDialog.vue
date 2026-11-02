<script setup lang="ts">
/** Formulário do alerta (novo ou editado), com a prévia "se valesse hoje" conferida na API. */
import { computed, ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, locale, pick, t } from '@/lib/i18n'
import { formatMetric, toNumber } from '@/lib/metrics'
import { ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition, alertForm, alertInput, compares, type AlertForm } from '@/modules/alerts/rules'
import { alertService } from '@/modules/alerts/service'
import type { Alert, AlertCheck } from '@/modules/alerts/types'
import type { MetricDef } from '@/modules/reports/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{
  alert: Alert | null
  metrics: MetricDef[]
  clients: { value: string; label: string }[]
  people: { value: string; label: string }[]
  userId: string
  currency: string
}>()
const emit = defineEmits<{ saved: [] }>()

const form = ref<AlertForm>(alertForm(null, '', props.userId))
const busy = ref(false)
const checks = ref<AlertCheck[] | null>(null)
const checking = ref(false)

watch(open, (value) => {
  if (!value) return
  form.value = alertForm(props.alert, props.metrics[0]?.key ?? '', props.userId)
  checks.value = null
  void runPreview()
})

const body = computed(() => alertInput(form.value))
const metric = computed(() => props.metrics.find((item) => item.key === form.value.metric) ?? null)
const metricOptions = computed(() => props.metrics.map((item) => ({ value: item.key, label: pick(item.label) })))
const groupOptions = computed(() => ALERT_GROUPS.map((group) => ({ value: group, label: t(group ? `alerts.group.${group}` : 'alerts.group.total') })))
const clientOptions = computed(() => [{ value: '', label: t('alerts.allClients') }, ...props.clients])
const conditionOptions = computed(() => ALERT_CONDITIONS.map((condition) => ({ value: condition, label: t(`alerts.condition.${condition}`) })))
const baselineOptions = computed(() => ALERT_BASELINES.map((baseline) => ({ value: baseline, label: t(`alerts.baselineOption.${baseline}`) })))
const firing = computed(() => (checks.value ?? []).filter((check) => check.firing))
const previewDay = computed(() => (checks.value?.[0] ? formatDate(`${checks.value[0].day}T12:00:00Z`, false) : ''))

/** Confere a regra na API com os números do último dia fechado; só a última resposta vale. */
const runPreview = useDebounceFn(async () => {
  const definition = alertDefinition(form.value)
  if (!definition) {
    checks.value = null
    return
  }
  checking.value = true
  try {
    const result = await alertService.preview(definition)
    if (JSON.stringify(alertDefinition(form.value)) === JSON.stringify(definition)) checks.value = result.checks
  } catch {
    checks.value = null
  } finally {
    checking.value = false
  }
}, 400)
watch(() => JSON.stringify(alertDefinition(form.value)), () => void runPreview())

/** Valor da métrica no formato dela, na moeda de quem olha. */
function metricText(value: string | null): string {
  return formatMetric(toNumber(value), metric.value?.format ?? 'number', locale.value, false, props.currency)
}

/** Liga ou desliga uma pessoa na lista de quem recebe. */
function toggle(userId: string, on: boolean) {
  const others = form.value.recipients.filter((item) => item !== userId)
  form.value.recipients = on ? [...others, userId] : others
}

/** Grava o alerta novo ou a edição. */
async function save() {
  if (!body.value) return
  busy.value = true
  try {
    if (props.alert) await alertService.update(props.alert.id, body.value)
    else await alertService.create(body.value)
    toast.success(props.alert ? t('alerts.saved') : t('alerts.created'))
    open.value = false
    emit('saved')
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <Dialog v-model:open="open" :title="alert ? t('alerts.edit') : t('alerts.new')" :desc="t('alerts.formDesc')" class="max-w-[600px]">
    <form id="alert-form" class="grid gap-4" @submit.prevent="save">
      <Field id="alert-name" :label="t('alerts.field.name')">
        <Input id="alert-name" v-model="form.name" maxlength="120" :placeholder="t('alerts.field.namePlaceholder')" />
      </Field>
      <div class="grid gap-4 sm:grid-cols-2">
        <Field id="alert-metric" :label="t('alerts.field.metric')">
          <NativeSelect id="alert-metric" v-model="form.metric" :options="metricOptions" />
        </Field>
        <Field id="alert-group" :label="t('alerts.field.group')">
          <NativeSelect id="alert-group" v-model="form.groupBy" :options="groupOptions" />
        </Field>
      </div>
      <Field v-if="clients.length" id="alert-client" :label="t('alerts.field.client')">
        <NativeSelect id="alert-client" v-model="form.clientId" :options="clientOptions" />
      </Field>
      <div :class="['grid gap-4', compares(form.condition) ? 'sm:grid-cols-[1.2fr_0.7fr_1.4fr]' : 'sm:grid-cols-[1.2fr_1fr]']">
        <Field id="alert-condition" :label="t('alerts.field.condition')">
          <NativeSelect id="alert-condition" v-model="form.condition" :options="conditionOptions" />
        </Field>
        <Field id="alert-value" :label="t('alerts.field.value')">
          <Input id="alert-value" v-model="form.value" inputmode="decimal" class="tnum" :placeholder="compares(form.condition) ? '20%' : '100'" />
        </Field>
        <Field v-if="compares(form.condition)" id="alert-baseline" :label="t('alerts.field.baseline')">
          <NativeSelect id="alert-baseline" v-model="form.baseline" :options="baselineOptions" />
        </Field>
      </div>
      <fieldset class="grid gap-2">
        <legend class="mb-2 text-[13px] font-medium text-muted-foreground">{{ t('alerts.field.recipients') }}</legend>
        <div class="grid max-h-40 gap-2 overflow-y-auto rounded-md border px-3 py-2.5 sm:grid-cols-2">
          <Checkbox
            v-for="person in people"
            :id="`alert-to-${person.value}`"
            :key="person.value"
            :label="person.label"
            :model-value="form.recipients.includes(person.value)"
            @update:model-value="(on: boolean) => toggle(person.value, on)"
          />
        </div>
        <p class="text-[13px] text-muted-foreground">{{ t('alerts.field.recipientsHint') }}</p>
      </fieldset>
      <div class="rounded-md border bg-muted px-4 py-3 text-[13px]" aria-live="polite">
        <div class="font-medium">{{ t('alerts.preview.title') }}</div>
        <p v-if="!alertDefinition(form)" class="mt-1 text-muted-foreground">{{ t('alerts.preview.waiting') }}</p>
        <p v-else-if="checks === null" class="mt-1 text-muted-foreground">{{ t('alerts.preview.loading') }}</p>
        <p v-else-if="firing.length === 0" class="mt-1 text-muted-foreground">{{ t('alerts.preview.none', { day: previewDay }) }}</p>
        <template v-else>
          <p class="mt-1 text-muted-foreground">{{ t('alerts.preview.some', { count: firing.length, day: previewDay }) }}</p>
          <ul class="mt-2 grid gap-1">
            <li v-for="check in firing.slice(0, 8)" :key="check.subject" class="flex flex-wrap gap-x-2">
              <span class="font-medium">{{ check.subject_label || t('alerts.preview.total') }}</span>
              <span class="tnum">{{ metricText(check.value) }}</span>
              <span v-if="check.baseline !== null" class="tnum text-muted-foreground">({{ t('alerts.preview.against', { value: metricText(check.baseline) }) }})</span>
            </li>
          </ul>
        </template>
        <span v-if="checking" class="sr-only">{{ t('alerts.preview.loading') }}</span>
      </div>
    </form>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button form="alert-form" type="submit" :loading="busy" :disabled="!body">{{ alert ? t('alerts.save') : t('alerts.create') }}</Button>
    </template>
  </Dialog>
</template>
