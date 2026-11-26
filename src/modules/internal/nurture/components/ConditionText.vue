<script setup lang="ts">
/** A condição da régua em uma frase, como aparece na lista e no editor. */
import { computed } from 'vue'
import { t } from '@/lib/i18n'
import { COMPARISON_LABEL, MEASURE_LABEL, MEASURE_UNIT, STEP_LABEL } from '@/modules/internal/nurture/rules'
import type { NurtureCondition } from '@/modules/internal/nurture/types'

const props = defineProps<{ rule: Pick<NurtureCondition, 'measure' | 'comparison' | 'value' | 'step'> }>()
const text = computed(() => {
  const rule = props.rule
  if (rule.measure === 'onboarding_step') return t('nurture.stepCondition', { step: t(STEP_LABEL[rule.step ?? 'ad_tag']), n: rule.value })
  return `${t(MEASURE_LABEL[rule.measure])} ${t(COMPARISON_LABEL[rule.comparison])} ${rule.value} ${t(MEASURE_UNIT[rule.measure])}`
})
</script>

<template>
  <span>{{ text }}</span>
</template>
