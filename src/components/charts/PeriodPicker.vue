<script setup lang="ts">
/** Período relativo e a comparação com o período anterior, usados pelas telas de métricas. */
import { computed } from 'vue'
import { Check } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { t, type Key } from '@/lib/i18n'
import { PERIOD_PRESETS } from '@/lib/metrics'
import type { RelativePeriod } from '@/lib/types'

const period = defineModel<RelativePeriod>('period', { required: true })
const compare = defineModel<boolean>('compare', { default: true })
const options = computed(() => PERIOD_PRESETS.map((preset) => ({ value: preset, label: t(`period.${preset}` as Key) })))
const selected = computed({
  get: () => period.value as string,
  set: (value: string) => {
    period.value = value as RelativePeriod
  },
})
</script>

<template>
  <NativeSelect v-model="selected" :options="options" class="w-[190px]" :aria-label="t('perf.period')" />
  <Button variant="outline" class="h-10" :aria-pressed="compare" @click="compare = !compare">
    <Check v-if="compare" class="size-4" aria-hidden="true" />{{ t('perf.compare') }}
  </Button>
</template>
