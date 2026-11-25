<script setup lang="ts">
/** Orçamento da campanha ou do conjunto: muda no Facebook na hora, conferido contra o limite diário; a equipe Groone só lê. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import { ApiError } from '@/lib/api'
import { errorText, locale, t } from '@/lib/i18n'
import { controlErrorText, formatMoney, parseAmount } from '@/modules/facebook/rules'
import { facebookService } from '@/modules/facebook/service'
import type { FacebookObjectDetail } from '@/modules/facebook/types'

const props = defineProps<{ detail: FacebookObjectDetail; internal: boolean; readOnly: boolean }>()
const emit = defineEmits<{ saved: [] }>()

const kind = computed(() => (props.detail.daily_budget !== null ? 'daily' : props.detail.lifetime_budget !== null ? 'lifetime' : null))
const current = computed(() => (kind.value === 'daily' ? props.detail.daily_budget : props.detail.lifetime_budget))
const value = ref(current.value ?? '')
const saving = ref(false)
const error = ref<string | null>(null)
const parsed = computed(() => parseAmount(value.value))
const dirty = computed(() => parsed.value !== undefined && Number(parsed.value) !== Number(current.value))

/** Onde o orçamento mora quando não é neste nível. */
const elsewhere = computed(() => {
  if (props.detail.level === 'ad') return t('fb.budget.atAdset')
  return props.detail.level === 'campaign' ? t('fb.budget.atAdsets') : t('fb.budget.atCampaign')
})

watch(current, (next) => (value.value = next ?? ''))

/** Manda o orçamento novo ao Facebook; o erro de limite diz quanto ainda cabe. */
async function save() {
  if (!kind.value || parsed.value === undefined) return
  saving.value = true
  error.value = null
  try {
    await facebookService.setBudget(props.detail.external_id, kind.value === 'daily' ? { daily_budget: parsed.value } : { lifetime_budget: parsed.value })
    toast.success(t('fb.budget.saved'))
    emit('saved')
  } catch (failure) {
    const api = failure instanceof ApiError ? failure : null
    const limit = api ? controlErrorText(api.code, api.details, locale.value) : null
    error.value = limit ? t(limit.key, limit.params) : errorText(api?.code ?? 'unknown')
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <Card v-if="!kind" :title="t('fb.dailyBudget')" :desc="elsewhere" />
  <Card v-else :title="kind === 'daily' ? t('fb.dailyBudget') : t('fb.lifetimeBudget')" :desc="readOnly ? (internal ? t('fb.readOnlyStaff') : t('fb.rules.readOnly')) : t('fb.budget.desc')">
    <Field id="fb-budget" :label="kind === 'daily' ? t('fb.budget.perDay') : t('fb.budget.total')" :error="error ?? (value !== '' && parsed === undefined ? t('fb.budget.invalid') : null)">
      <Input id="fb-budget" v-model="value" inputmode="decimal" class="h-10 max-w-[240px] tnum" :disabled="readOnly" />
    </Field>
    <template v-if="!readOnly" #note>{{ dirty ? t('fb.budget.change', { before: formatMoney(current, detail.account.currency, locale), after: formatMoney(parsed ?? null, detail.account.currency, locale) }) : '' }}</template>
    <template v-if="!readOnly" #footer>
      <Button :disabled="!dirty || saving" :loading="saving" @click="save">{{ t('common.save') }}</Button>
    </template>
  </Card>
</template>
