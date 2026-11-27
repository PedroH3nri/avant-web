<script setup lang="ts">
/** Regras automáticas do Google Ads: orçamento e pausa na campanha, CPC e pausa das palavras-chave no grupo, pausa no anúncio;
 * a equipe Groone e quem não gerencia só leem. */
import { computed, onMounted, ref } from 'vue'
import { toast } from 'vue-sonner'
import { Lock } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import Button from '@/components/ui/Button.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import Switch from '@/components/ui/Switch.vue'
import { ApiError } from '@/lib/api'
import { errorText, t, type Key } from '@/lib/i18n'
import { googleAdsReader, googleAdsService } from '@/modules/google_ads/service'
import type { GoogleAdsObjectDetail, GoogleAdsRuleInput } from '@/modules/google_ads/types'

const props = defineProps<{ detail: GoogleAdsObjectDetail; internal: boolean; readOnly: boolean; manualBidding: boolean }>()
const emit = defineEmits<{ saved: [] }>()

type NumberField = 'up_roi' | 'up_by' | 'down_roi' | 'down_by' | 'min_roi' | 'days'

const saved = ref<GoogleAdsRuleInput | null>(null)
const draft = ref<GoogleAdsRuleInput | null>(null)
const loadError = ref<string | null>(null)
const saving = ref(false)
const dirty = computed(() => JSON.stringify(saved.value) !== JSON.stringify(draft.value))
const levelKey = computed(() => `gads.rules.this.${props.detail.level}` as Key)
const isCampaign = computed(() => props.detail.level === 'campaign')
const isAdGroup = computed(() => props.detail.level === 'ad_group')
const canScale = computed(() => (isCampaign.value ? props.detail.budget !== null : isAdGroup.value && props.manualBidding))
const scaleDesc = computed(() => {
  if (isCampaign.value) return props.detail.budget !== null ? t('gads.rules.scaleDesc') : t('gads.rules.sharedBudget')
  return props.manualBidding ? t('gads.rules.cpcDesc') : t('gads.rules.cpcAuto')
})

const SCALE_FIELDS = computed<{ field: NumberField; label: Key; hint: Key }[]>(() => [
  { field: 'up_roi', label: 'gads.rules.upRoi', hint: 'gads.rules.hint50' },
  { field: 'up_by', label: isCampaign.value ? 'gads.rules.upBy' : 'gads.rules.cpcUpBy', hint: 'gads.rules.hint10' },
  { field: 'down_roi', label: 'gads.rules.downRoi', hint: 'gads.rules.hint0' },
  { field: 'down_by', label: isCampaign.value ? 'gads.rules.downBy' : 'gads.rules.cpcDownBy', hint: 'gads.rules.hint10' },
])
const PAUSE_FIELDS: { field: NumberField; label: Key; hint: Key }[] = [
  { field: 'min_roi', label: 'gads.rules.minRoi', hint: 'gads.rules.hintMinus30' },
  { field: 'days', label: 'gads.rules.days', hint: 'gads.rules.hint3' },
]

/** Só os campos que a API recebe, para comparar e salvar. */
function inputOf(rule: GoogleAdsRuleInput): GoogleAdsRuleInput {
  const { scale, up_roi, up_by, down_roi, down_by, pause, min_roi, days, pause_keywords } = rule
  return { scale, up_roi, up_by, down_roi, down_by, pause, min_roi, days, pause_keywords }
}

/** Carrega as regras gravadas, ou as sugeridas desligadas. */
async function load() {
  loadError.value = null
  try {
    const found = inputOf(await googleAdsReader(props.internal).rule(props.detail.level, props.detail.external_id))
    saved.value = found
    draft.value = { ...found }
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Troca um número digitado; vazio ou inválido fica zero até a pessoa corrigir. */
function setNumber(field: NumberField, text: string) {
  if (!draft.value) return
  const number = Number.parseInt(text, 10)
  draft.value = { ...draft.value, [field]: Number.isFinite(number) ? number : 0 }
}

/** Grava as regras; valem a partir da próxima rodada, às 06:05. */
async function save() {
  if (!draft.value) return
  saving.value = true
  try {
    const found = inputOf(await googleAdsService.setRule(props.detail.level, props.detail.external_id, draft.value))
    saved.value = found
    draft.value = { ...found }
    toast.success(t('gads.rules.saved'))
    emit('saved')
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    saving.value = false
  }
}

onMounted(load)
</script>

<template>
  <section class="overflow-hidden rounded-lg border bg-card">
    <div class="p-6">
      <h2 class="text-[20px] font-semibold tracking-tight">{{ t('gads.rules.title') }}</h2>
      <p class="mt-2 max-w-[70ch] text-[14px] text-muted-foreground">{{ t('gads.rules.desc') }}</p>
      <p v-if="readOnly" class="mt-3 flex items-center gap-2 text-[13px] text-muted-foreground"><Lock class="size-4" aria-hidden="true" />{{ internal ? t('gads.readOnlyStaff') : t('gads.rules.readOnly') }}</p>
    </div>
    <div v-if="loadError" class="border-t p-6"><LoadError :message="loadError" @retry="load" /></div>
    <template v-else-if="draft">
      <div v-if="detail.level !== 'ad'" class="border-t p-6">
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="text-[14px] font-medium">{{ isCampaign ? t('gads.rules.scale') : t('gads.rules.cpc') }}</div>
            <p class="mt-1 max-w-[60ch] text-[13px] text-muted-foreground">{{ scaleDesc }}</p>
          </div>
          <Switch v-model="draft.scale" :label="isCampaign ? t('gads.rules.scale') : t('gads.rules.cpc')" :disabled="readOnly || !canScale" />
        </div>
        <div v-if="draft.scale && canScale" class="mt-4 grid items-start gap-4 sm:grid-cols-2">
          <Field v-for="item in SCALE_FIELDS" :id="`gads-rule-${item.field}`" :key="item.field" :label="t(item.label)" :hint="t(item.hint)">
            <Input :id="`gads-rule-${item.field}`" :model-value="String(draft[item.field])" inputmode="numeric" class="h-10 tnum" :disabled="readOnly" @update:model-value="(text) => setNumber(item.field, String(text))" />
          </Field>
        </div>
      </div>
      <div class="border-t p-6">
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="text-[14px] font-medium">{{ t('gads.rules.pause', { what: t(levelKey) }) }}</div>
            <p class="mt-1 max-w-[60ch] text-[13px] text-muted-foreground">{{ t('gads.rules.pauseDesc', { what: t(levelKey) }) }}</p>
          </div>
          <Switch v-model="draft.pause" :label="t('gads.rules.pause', { what: t(levelKey) })" :disabled="readOnly" />
        </div>
        <div v-if="draft.pause || draft.pause_keywords" class="mt-4 grid items-start gap-4 sm:grid-cols-2">
          <Field v-for="item in PAUSE_FIELDS" :id="`gads-rule-${item.field}`" :key="item.field" :label="t(item.label)" :hint="t(item.hint)">
            <Input :id="`gads-rule-${item.field}`" :model-value="String(draft[item.field])" inputmode="numeric" class="h-10 tnum" :disabled="readOnly" @update:model-value="(text) => setNumber(item.field, String(text))" />
          </Field>
        </div>
      </div>
      <div v-if="isAdGroup" class="border-t p-6">
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="text-[14px] font-medium">{{ t('gads.rules.pauseKeywords') }}</div>
            <p class="mt-1 max-w-[60ch] text-[13px] text-muted-foreground">{{ t('gads.rules.pauseKeywordsDesc') }}</p>
          </div>
          <Switch v-model="draft.pause_keywords" :label="t('gads.rules.pauseKeywords')" :disabled="readOnly" />
        </div>
      </div>
      <div v-if="dirty && !readOnly" class="flex flex-wrap items-center justify-between gap-3 border-t bg-[hsl(var(--card-footer))] px-6 py-3">
        <div class="text-[13px] text-muted-foreground">{{ t('gads.rules.unsaved') }}</div>
        <div class="flex gap-2">
          <Button variant="outline" @click="draft = saved ? { ...saved } : draft">{{ t('gads.rules.discard') }}</Button>
          <Button :loading="saving" @click="save">{{ t('common.save') }}</Button>
        </div>
      </div>
    </template>
  </section>
</template>
