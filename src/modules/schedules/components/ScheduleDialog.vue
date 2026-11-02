<script setup lang="ts">
/** Formulário do envio agendado (novo ou editado): o que manda, quando, em que fuso e para quem. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { HOURS, MONTH_DAYS, SCHEDULE_FREQUENCIES, WEEKDAYS, hourText, scheduleForm, scheduleInput, timezoneOptions, type ScheduleForm } from '@/modules/schedules/rules'
import { scheduleService } from '@/modules/schedules/service'
import type { Schedule, ScheduleTarget } from '@/modules/schedules/types'

type Option = { value: string; label: string }

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{
  schedule: Schedule | null
  reports: Option[]
  dashboards: Option[]
  people: Option[]
  userId: string
}>()
const emit = defineEmits<{ saved: [] }>()

const form = ref<ScheduleForm>(scheduleForm(null, props.userId))
const busy = ref(false)

watch(open, (value) => {
  if (!value) return
  const next = scheduleForm(props.schedule, props.userId)
  if (!props.schedule) next.targetId = props.dashboards[0]?.value ?? ''
  form.value = next
})

const body = computed(() => scheduleInput(form.value))
const targetOptions = computed(() => (['dashboard', 'report'] as ScheduleTarget[]).map((target) => ({ value: target, label: t(`schedules.target.${target}`) })))
const itemOptions = computed(() => {
  const listed = form.value.target === 'report' ? props.reports : props.dashboards
  const saved = props.schedule
  const keep = saved && saved.target === form.value.target && !listed.some((item) => item.value === saved.target_id)
  const extra = keep ? [{ value: saved.target_id, label: saved.target_name ?? t('schedules.targetGone') }] : []
  return [{ value: '', label: t('schedules.field.choose') }, ...extra, ...listed]
})
const frequencyOptions = computed(() => SCHEDULE_FREQUENCIES.map((frequency) => ({ value: frequency, label: t(`schedules.frequency.${frequency}`) })))
const weekdayOptions = computed(() => WEEKDAYS.map((weekday) => ({ value: String(weekday), label: t(`schedules.weekday.${weekday}`) })))
const monthDayOptions = computed(() => MONTH_DAYS.map((day) => ({ value: String(day), label: String(day) })))
const hourOptions = computed(() => HOURS.map((hour) => ({ value: String(hour), label: hourText(hour) })))
const zoneOptions = computed(() => timezoneOptions(form.value.timezone).map((zone) => ({ value: zone, label: zone })))

/** Troca entre relatório e dashboard e limpa a escolha anterior. */
function setTarget(value: string) {
  form.value.target = value as ScheduleTarget
  form.value.targetId = ''
}

/** Liga ou desliga uma pessoa na lista de quem recebe. */
function toggle(userId: string, on: boolean) {
  const others = form.value.recipients.filter((item) => item !== userId)
  form.value.recipients = on ? [...others, userId] : others
}

/** Grava o envio novo ou a edição. */
async function save() {
  if (!body.value) return
  busy.value = true
  try {
    if (props.schedule) await scheduleService.update(props.schedule.id, body.value)
    else await scheduleService.create(body.value)
    toast.success(props.schedule ? t('schedules.saved') : t('schedules.created'))
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
  <Dialog v-model:open="open" :title="schedule ? t('schedules.edit') : t('schedules.new')" :desc="t('schedules.formDesc')" class="max-w-[600px]">
    <form id="schedule-form" class="grid gap-4" @submit.prevent="save">
      <Field id="schedule-name" :label="t('schedules.field.name')">
        <Input id="schedule-name" v-model="form.name" maxlength="120" :placeholder="t('schedules.field.namePlaceholder')" />
      </Field>
      <div class="grid gap-4 sm:grid-cols-[0.8fr_1.2fr]">
        <Field id="schedule-target" :label="t('schedules.field.target')">
          <NativeSelect id="schedule-target" :model-value="form.target" :options="targetOptions" @update:model-value="setTarget" />
        </Field>
        <Field id="schedule-item" :label="t('schedules.field.item')">
          <NativeSelect id="schedule-item" v-model="form.targetId" :options="itemOptions" />
        </Field>
      </div>
      <div class="grid gap-4 sm:grid-cols-3">
        <Field id="schedule-frequency" :label="t('schedules.field.frequency')">
          <NativeSelect id="schedule-frequency" v-model="form.frequency" :options="frequencyOptions" />
        </Field>
        <Field v-if="form.frequency === 'weekly'" id="schedule-weekday" :label="t('schedules.field.weekday')">
          <NativeSelect id="schedule-weekday" v-model="form.weekday" :options="weekdayOptions" />
        </Field>
        <Field v-if="form.frequency === 'monthly'" id="schedule-month-day" :label="t('schedules.field.monthDay')">
          <NativeSelect id="schedule-month-day" v-model="form.monthDay" :options="monthDayOptions" />
        </Field>
        <Field id="schedule-hour" :label="t('schedules.field.hour')">
          <NativeSelect id="schedule-hour" v-model="form.hour" :options="hourOptions" />
        </Field>
      </div>
      <Field id="schedule-timezone" :label="t('schedules.field.timezone')">
        <NativeSelect id="schedule-timezone" v-model="form.timezone" :options="zoneOptions" />
      </Field>
      <fieldset class="grid gap-2">
        <legend class="mb-2 text-[13px] font-medium text-muted-foreground">{{ t('schedules.field.recipients') }}</legend>
        <div class="grid max-h-40 gap-2 overflow-y-auto rounded-md border px-3 py-2.5 sm:grid-cols-2">
          <Checkbox
            v-for="person in people"
            :id="`schedule-to-${person.value}`"
            :key="person.value"
            :label="person.label"
            :model-value="form.recipients.includes(person.value)"
            @update:model-value="(on: boolean) => toggle(person.value, on)"
          />
        </div>
        <p class="text-[13px] text-muted-foreground">{{ t('schedules.field.recipientsHint') }}</p>
      </fieldset>
    </form>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button form="schedule-form" type="submit" :loading="busy" :disabled="!body">{{ schedule ? t('schedules.save') : t('schedules.create') }}</Button>
    </template>
  </Dialog>
</template>
