<script setup lang="ts">
/** Card da meta da Groone inteira: escolhe o ano e preenche um valor por mês, em dólar. */
import { computed, onMounted, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { ApiError } from '@/lib/api'
import { errorText, lang, locale, t } from '@/lib/i18n'
import { formatMetric } from '@/lib/metrics'
import { companyGoalOf, companyGoalYears, formatAmount, parseAmount, templateValid } from '@/modules/internal/goals/rules'
import { goalService } from '@/modules/internal/goals/service'
import type { GoalTemplate } from '@/modules/internal/goals/types'
import { useSession } from '@/stores/session'

const MONTHS_IN_YEAR = 12
const session = useSession()
const today = new Date().toISOString().slice(0, 10)
const years = companyGoalYears(today)
const year = ref(String(years[1]))
const templates = ref<GoalTemplate[] | null>(null)
const months = ref<string[]>([])
const busy = ref(false)
const canManage = computed(() => session.can('internal.commissions.manage'))
const yearOptions = years.map((value) => ({ value: String(value), label: String(value) }))
const current = computed(() => companyGoalOf(templates.value ?? [], Number(year.value)))
const saved = computed(() => (current.value ? current.value.months.map((value) => formatAmount(value, lang.value)) : Array.from({ length: MONTHS_IN_YEAR }, () => '')))
const changed = computed(() => months.value.some((value, index) => value.trim() !== saved.value[index]))
const valid = computed(() => templateValid(months.value, lang.value))
const yearTotal = computed(() => formatMetric(months.value.reduce((sum, value) => sum + (parseAmount(value, lang.value) || 0), 0), 'currency', locale.value))
const monthNames = computed(() =>
  Array.from({ length: MONTHS_IN_YEAR }, (_, index) => new Intl.DateTimeFormat(locale.value, { month: 'short', timeZone: 'UTC' }).format(new Date(Date.UTC(2026, index, 1)))),
)

/** Carrega os modelos de meta, onde está a meta da Groone de cada ano. */
async function load() {
  try {
    templates.value = (await goalService.templates()).items
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}
onMounted(load)
watch(saved, (values) => (months.value = [...values]), { immediate: true })

/** Grava a meta da Groone do ano, criando o modelo se ainda não existir. */
async function save() {
  if (!valid.value) return
  busy.value = true
  const input = {
    name: current.value?.name ?? t('goals.companyName', { year: year.value }),
    year: Number(year.value),
    months: months.value.map((value) => parseAmount(value, lang.value).toFixed(2)),
    is_company_goal: true,
  }
  try {
    if (current.value) await goalService.updateTemplate(current.value.id, input)
    else await goalService.createTemplate(input)
    toast.success(t('goals.companySaved', { year: year.value }))
    await load()
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <Card :title="t('goals.company')" :desc="t('goals.companyCardDesc')" :footer-note="canManage ? t('goals.companyTotal', { total: yearTotal }) : t('goals.companyReadonly')">
    <div class="grid gap-4">
      <Field id="company-goal-year" :label="t('goals.templateYear')" class="w-[140px]">
        <NativeSelect id="company-goal-year" v-model="year" :options="yearOptions" />
      </Field>
      <p v-if="templates && !current && !canManage" class="text-[14px] text-muted-foreground">{{ t('goals.companyNone') }}</p>
      <fieldset v-else class="grid gap-2" :disabled="!canManage || busy || !templates">
        <legend class="mb-2 text-[13px] font-medium text-muted-foreground">{{ t('goals.templateMonths') }}</legend>
        <div class="grid grid-cols-3 gap-2 sm:grid-cols-6">
          <label v-for="(label, index) in monthNames" :key="label" class="grid gap-1 text-[12px] text-muted-foreground">
            {{ label }}
            <Input v-model="months[index]" inputmode="decimal" class="h-9 px-2 text-right tnum" :invalid="!!months[index] && !Number.isFinite(parseAmount(months[index] ?? '', lang))" />
          </label>
        </div>
      </fieldset>
    </div>
    <template v-if="canManage" #footer>
      <Button size="sm" variant="outline" class="bg-card" :disabled="!changed || busy" @click="months = [...saved]">{{ t('common.cancel') }}</Button>
      <Button size="sm" :loading="busy" :disabled="!changed || !valid" @click="save">{{ t('common.save') }}</Button>
    </template>
  </Card>
</template>
