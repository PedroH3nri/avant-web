<script setup lang="ts">
/** Escolhe com que período comparar: nenhum, o anterior, o do ano passado ou datas escolhidas. */
import { computed } from 'vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { t, type Key } from '@/lib/i18n'
import { COMPARE_MODES, comparisonReady, type Comparison } from '@/modules/reports/rules'
import type { CompareMode } from '@/modules/reports/types'

const props = defineProps<{ modelValue: Comparison; disabled?: boolean; selectClass?: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: Comparison] }>()

const options = computed(() => COMPARE_MODES.map((mode) => ({ value: mode, label: t(`compare.${mode}` as Key) })))
const missingDates = computed(() => !comparisonReady(props.modelValue))

/** Troca o modo, mantendo as datas já escolhidas para quando voltar ao período escolhido. */
function setMode(value: string) {
  emit('update:modelValue', { ...props.modelValue, mode: value as CompareMode })
}

/** Troca o início ou o fim do período escolhido. */
function setDate(edge: 'start' | 'end', value: string) {
  emit('update:modelValue', { ...props.modelValue, [edge]: value || null })
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <NativeSelect
      :model-value="modelValue.mode"
      :options="options"
      :disabled="disabled"
      :aria-label="t('compare.label')"
      :class="selectClass ?? 'w-full sm:w-[240px]'"
      @update:model-value="setMode"
    />
    <template v-if="modelValue.mode === 'custom'">
      <Input
        type="date"
        :model-value="modelValue.start ?? ''"
        :disabled="disabled"
        :aria-label="t('compare.start')"
        :invalid="missingDates"
        class="w-[160px]"
        @update:model-value="(value) => setDate('start', String(value))"
      />
      <Input
        type="date"
        :model-value="modelValue.end ?? ''"
        :min="modelValue.start ?? undefined"
        :disabled="disabled"
        :aria-label="t('compare.end')"
        :invalid="missingDates"
        class="w-[160px]"
        @update:model-value="(value) => setDate('end', String(value))"
      />
      <p v-if="missingDates" class="basis-full text-[13px] text-muted-foreground">{{ t('compare.pickDates') }}</p>
    </template>
  </div>
</template>
