<script setup lang="ts">
/** Orçamento diário da campanha: muda no Google Ads na hora, conferido contra o limite diário; grupo e anúncio usam o da campanha. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import { ApiError } from '@/lib/api'
import { errorText, locale, t } from '@/lib/i18n'
import { controlErrorText, formatMoney, parseAmount } from '@/modules/google_ads/rules'
import { googleAdsService } from '@/modules/google_ads/service'
import type { GoogleAdsObjectDetail } from '@/modules/google_ads/types'

const props = defineProps<{ detail: GoogleAdsObjectDetail; internal: boolean; readOnly: boolean }>()
const emit = defineEmits<{ saved: [] }>()

const value = ref(props.detail.budget ?? '')
const saving = ref(false)
const error = ref<string | null>(null)
const parsed = computed(() => parseAmount(value.value))
const dirty = computed(() => parsed.value !== undefined && Number(parsed.value) !== Number(props.detail.budget))
const currency = computed(() => props.detail.account.currency)

watch(
  () => props.detail.budget,
  (next) => (value.value = next ?? ''),
)

/** Manda o orçamento novo ao Google; o erro de limite diz quanto ainda cabe. */
async function save() {
  if (parsed.value === undefined) return
  saving.value = true
  error.value = null
  try {
    await googleAdsService.setBudget(props.detail.external_id, parsed.value)
    toast.success(t('gads.budget.saved'))
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
  <Card v-if="detail.level !== 'campaign'" :title="t('gads.dailyBudget')" :desc="t('gads.budget.atCampaign')" />
  <Card v-else-if="detail.budget === null" :title="t('gads.dailyBudget')" :desc="t('gads.budget.shared')" />
  <Card v-else :title="t('gads.dailyBudget')" :desc="readOnly ? (internal ? t('gads.readOnlyStaff') : t('gads.rules.readOnly')) : t('gads.budget.desc')">
    <Field id="gads-budget" :label="t('gads.budget.perDay')" :error="error ?? (value !== '' && parsed === undefined ? t('gads.budget.invalid') : null)">
      <Input id="gads-budget" v-model="value" inputmode="decimal" class="h-10 max-w-[240px] tnum" :disabled="readOnly" />
    </Field>
    <template v-if="!readOnly" #note>{{ dirty ? t('gads.budget.change', { before: formatMoney(detail.budget, currency, locale), after: formatMoney(parsed ?? null, currency, locale) }) : '' }}</template>
    <template v-if="!readOnly" #footer>
      <Button :disabled="!dirty || saving" :loading="saving" @click="save">{{ t('common.save') }}</Button>
    </template>
  </Card>
</template>
