<script setup lang="ts">
/** Regras automáticas do objeto (escalar, pausar e duplicar pelo ROI de ontem); a equipe Groone e quem não gerencia só leem. */
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
import { facebookReader, facebookService } from '@/modules/facebook/service'
import type { FacebookObjectDetail, FacebookRuleInput } from '@/modules/facebook/types'

const props = defineProps<{ detail: FacebookObjectDetail; internal: boolean; readOnly: boolean }>()
const emit = defineEmits<{ saved: [] }>()

type NumberField = 'up_roi' | 'up_by' | 'down_roi' | 'down_by' | 'min_roi' | 'days' | 'duplicate_roi'

const saved = ref<FacebookRuleInput | null>(null)
const draft = ref<FacebookRuleInput | null>(null)
const loadError = ref<string | null>(null)
const saving = ref(false)
const budgetHere = computed(() => props.detail.daily_budget !== null)
const dirty = computed(() => JSON.stringify(saved.value) !== JSON.stringify(draft.value))
const levelKey = computed(() => `fb.rules.this.${props.detail.level}` as Key)

const SCALE_FIELDS: { field: NumberField; label: Key; hint: Key }[] = [
  { field: 'up_roi', label: 'fb.rules.upRoi', hint: 'fb.rules.hint50' },
  { field: 'up_by', label: 'fb.rules.upBy', hint: 'fb.rules.hint10' },
  { field: 'down_roi', label: 'fb.rules.downRoi', hint: 'fb.rules.hint0' },
  { field: 'down_by', label: 'fb.rules.downBy', hint: 'fb.rules.hintMin' },
]
const PAUSE_FIELDS: { field: NumberField; label: Key; hint: Key }[] = [
  { field: 'min_roi', label: 'fb.rules.minRoi', hint: 'fb.rules.hintMinus30' },
  { field: 'days', label: 'fb.rules.days', hint: 'fb.rules.hint3' },
]

/** Só os campos que a API recebe, para comparar e salvar. */
function inputOf(rule: FacebookRuleInput): FacebookRuleInput {
  const { scale, up_roi, up_by, down_roi, down_by, pause, min_roi, days, duplicate, duplicate_roi } = rule
  return { scale, up_roi, up_by, down_roi, down_by, pause, min_roi, days, duplicate, duplicate_roi }
}

/** Carrega as regras gravadas, ou as sugeridas desligadas. */
async function load() {
  loadError.value = null
  try {
    const found = inputOf(await facebookReader(props.internal).rule(props.detail.external_id))
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

/** Grava as regras; valem a partir da próxima rodada, às 06:00. */
async function save() {
  if (!draft.value) return
  saving.value = true
  try {
    const found = inputOf(await facebookService.setRule(props.detail.external_id, draft.value))
    saved.value = found
    draft.value = { ...found }
    toast.success(t('fb.rules.saved'))
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
      <h2 class="text-[20px] font-semibold tracking-tight">{{ t('fb.rules.title') }}</h2>
      <p class="mt-2 max-w-[70ch] text-[14px] text-muted-foreground">{{ t('fb.rules.desc') }}</p>
      <p v-if="readOnly" class="mt-3 flex items-center gap-2 text-[13px] text-muted-foreground"><Lock class="size-4" aria-hidden="true" />{{ internal ? t('fb.readOnlyStaff') : t('fb.rules.readOnly') }}</p>
    </div>
    <div v-if="loadError" class="border-t p-6"><LoadError :message="loadError" @retry="load" /></div>
    <template v-else-if="draft">
      <div v-if="detail.level !== 'ad'" class="border-t p-6">
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="text-[14px] font-medium">{{ t('fb.rules.scale') }}</div>
            <p class="mt-1 max-w-[60ch] text-[13px] text-muted-foreground">{{ budgetHere ? t('fb.rules.scaleDesc') : detail.level === 'campaign' ? t('fb.rules.scaleAtAdsets') : t('fb.rules.scaleAtCampaign') }}</p>
          </div>
          <Switch v-model="draft.scale" :label="t('fb.rules.scale')" :disabled="readOnly || !budgetHere" />
        </div>
        <div v-if="draft.scale && budgetHere" class="mt-4 grid items-start gap-4 sm:grid-cols-2">
          <Field v-for="item in SCALE_FIELDS" :id="`fb-rule-${item.field}`" :key="item.field" :label="t(item.label)" :hint="t(item.hint)">
            <Input :id="`fb-rule-${item.field}`" :model-value="String(draft[item.field])" inputmode="numeric" class="h-10 tnum" :disabled="readOnly" @update:model-value="(text) => setNumber(item.field, String(text))" />
          </Field>
        </div>
      </div>
      <div class="border-t p-6">
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="text-[14px] font-medium">{{ t('fb.rules.pause') }}</div>
            <p class="mt-1 max-w-[60ch] text-[13px] text-muted-foreground">{{ t('fb.rules.pauseDesc', { what: t(levelKey) }) }}</p>
          </div>
          <Switch v-model="draft.pause" :label="t('fb.rules.pause')" :disabled="readOnly" />
        </div>
        <div v-if="draft.pause" class="mt-4 grid items-start gap-4 sm:grid-cols-2">
          <Field v-for="item in PAUSE_FIELDS" :id="`fb-rule-${item.field}`" :key="item.field" :label="t(item.label)" :hint="t(item.hint)">
            <Input :id="`fb-rule-${item.field}`" :model-value="String(draft[item.field])" inputmode="numeric" class="h-10 tnum" :disabled="readOnly" @update:model-value="(text) => setNumber(item.field, String(text))" />
          </Field>
        </div>
      </div>
      <div v-if="detail.level !== 'campaign'" class="border-t p-6">
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="text-[14px] font-medium">{{ t('fb.rules.duplicate') }}</div>
            <p class="mt-1 max-w-[60ch] text-[13px] text-muted-foreground">{{ t('fb.rules.duplicateDesc', { what: t(levelKey) }) }}</p>
          </div>
          <Switch v-model="draft.duplicate" :label="t('fb.rules.duplicate')" :disabled="readOnly" />
        </div>
        <div v-if="draft.duplicate" class="mt-4 grid items-start gap-4 sm:grid-cols-2">
          <Field id="fb-rule-duplicate_roi" :label="t('fb.rules.duplicateRoi')" :hint="t('fb.rules.hintWeek')">
            <Input id="fb-rule-duplicate_roi" :model-value="String(draft.duplicate_roi)" inputmode="numeric" class="h-10 tnum" :disabled="readOnly" @update:model-value="(text) => setNumber('duplicate_roi', String(text))" />
          </Field>
        </div>
      </div>
      <div v-if="dirty && !readOnly" class="flex flex-wrap items-center justify-between gap-3 border-t bg-[hsl(var(--card-footer))] px-6 py-3">
        <div class="text-[13px] text-muted-foreground">{{ t('fb.rules.unsaved') }}</div>
        <div class="flex gap-2">
          <Button variant="outline" @click="draft = saved ? { ...saved } : draft">{{ t('fb.rules.discard') }}</Button>
          <Button :loading="saving" @click="save">{{ t('common.save') }}</Button>
        </div>
      </div>
    </template>
  </section>
</template>
