<script setup lang="ts">
/** Modelos de meta: a lista, o formulário com um valor por mês e a marca de meta da Groone. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import { ApiError } from '@/lib/api'
import { errorText, locale, t } from '@/lib/i18n'
import { formatMetric, toNumber } from '@/lib/metrics'
import { parseAmount, templateValid } from '@/modules/internal/goals/rules'
import { goalService } from '@/modules/internal/goals/service'
import type { GoalTemplate } from '@/modules/internal/goals/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ templates: GoalTemplate[]; year: number }>()
const emit = defineEmits<{ changed: [] }>()
const MONTHS_IN_YEAR = 12
const editing = ref<GoalTemplate | null>(null)
const creating = ref(false)
const name = ref('')
const year = ref('')
const months = ref<string[]>([])
const companyGoal = ref(false)
const busy = ref(false)
const removing = ref<string | null>(null)

const monthNames = computed(() =>
  Array.from({ length: MONTHS_IN_YEAR }, (_, index) => new Intl.DateTimeFormat(locale.value, { month: 'short', timeZone: 'UTC' }).format(new Date(Date.UTC(2026, index, 1)))),
)
const formOpen = computed(() => creating.value || editing.value !== null)
const valid = computed(() => !!name.value.trim() && Number(year.value) >= 2020 && Number(year.value) <= 2100 && templateValid(months.value))
watch(open, (opened) => {
  if (!opened) close()
})

/** Abre o formulário vazio ou com o modelo. */
function start(template: GoalTemplate | null) {
  editing.value = template
  creating.value = template === null
  name.value = template?.name ?? ''
  year.value = String(template?.year ?? props.year)
  months.value = template ? template.months.map((value) => value.replace('.', ',')) : Array.from({ length: MONTHS_IN_YEAR }, () => '')
  companyGoal.value = template?.is_company_goal ?? false
  removing.value = null
}

/** Fecha o formulário. */
function close() {
  editing.value = null
  creating.value = false
}

/** Grava o modelo. */
async function save() {
  if (!valid.value) return
  busy.value = true
  const input = { name: name.value.trim(), year: Number(year.value), months: months.value.map((value) => String(parseAmount(value))), is_company_goal: companyGoal.value }
  try {
    if (editing.value) await goalService.updateTemplate(editing.value.id, input)
    else await goalService.createTemplate(input)
    toast.success(t('goals.templateSaved'))
    close()
    emit('changed')
  } catch (error) {
    toast.error(error instanceof ApiError && error.code === 'company_goal_taken' ? errorText('company_goal_taken') : errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

/** Apaga o modelo depois do segundo clique. */
async function remove(template: GoalTemplate) {
  if (removing.value !== template.id) {
    removing.value = template.id
    return
  }
  try {
    await goalService.deleteTemplate(template.id)
    removing.value = null
    toast.success(t('goals.templateDeleted'))
    emit('changed')
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}

/** Total do ano do modelo, em dólar. */
const yearTotal = (template: GoalTemplate) => formatMetric(template.months.reduce((sum, value) => sum + (toNumber(value) ?? 0), 0), 'currency', locale.value)
</script>

<template>
  <Dialog v-model:open="open" class="max-w-[680px]" :title="t('goals.templatesTitle')" :desc="t('goals.templatesDesc')">
    <form v-if="formOpen" id="goal-template" class="grid gap-4" @submit.prevent="save">
      <div class="grid gap-4 sm:grid-cols-[minmax(0,1fr)_120px]">
        <Field id="goal-name" :label="t('goals.templateName')"><Input id="goal-name" v-model="name" maxlength="80" /></Field>
        <Field id="goal-year" :label="t('goals.templateYear')"><Input id="goal-year" v-model="year" inputmode="numeric" maxlength="4" /></Field>
      </div>
      <fieldset class="grid gap-2">
        <legend class="mb-2 text-[13px] font-medium text-muted-foreground">{{ t('goals.templateMonths') }}</legend>
        <div class="grid grid-cols-3 gap-2 sm:grid-cols-6">
          <label v-for="(label, index) in monthNames" :key="label" class="grid gap-1 text-[12px] text-muted-foreground">
            {{ label }}
            <Input v-model="months[index]" inputmode="decimal" class="h-9 px-2 text-right tnum" :invalid="!!months[index] && !Number.isFinite(parseAmount(months[index] ?? ''))" />
          </label>
        </div>
      </fieldset>
      <Checkbox id="goal-company" v-model="companyGoal" :label="t('goals.companyGoal')" :hint="t('goals.companyGoalHint')" />
    </form>
    <ul v-else class="grid gap-2">
      <li v-if="!templates.length" class="text-[14px] text-muted-foreground">{{ t('goals.noTemplates') }}</li>
      <li v-for="template in templates" :key="template.id" class="flex flex-wrap items-center gap-3 rounded-md border p-3">
        <span class="min-w-0 flex-1">
          <span class="flex items-center gap-2 text-[14px] font-medium">{{ template.name }}<Badge v-if="template.is_company_goal">{{ t('goals.companyBadge') }}</Badge></span>
          <span class="block text-[13px] text-muted-foreground tnum">{{ template.year }} · {{ t('goals.yearTotal', { total: yearTotal(template) }) }}</span>
        </span>
        <Button variant="outline" size="sm" @click="start(template)">{{ t('goals.edit') }}</Button>
        <Button variant="ghost" size="sm" class="text-bad" @click="remove(template)">{{ removing === template.id ? t('goals.confirmDelete') : t('common.delete') }}</Button>
      </li>
    </ul>
    <template #footer>
      <template v-if="formOpen">
        <Button variant="outline" @click="close">{{ t('common.cancel') }}</Button>
        <Button type="submit" form="goal-template" :disabled="!valid" :loading="busy">{{ t('goals.saveTemplate') }}</Button>
      </template>
      <Button v-else @click="start(null)">{{ t('goals.newTemplate') }}</Button>
    </template>
  </Dialog>
</template>
