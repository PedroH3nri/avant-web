<script setup lang="ts">
/** Funil: uma barra centrada por etapa e quanto passou da etapa anterior. */
import { computed } from 'vue'

export interface FunnelStep {
  key: string
  label: string
  value: number | null
  color?: string
}

const props = defineProps<{ steps: FunnelStep[]; format: (step: FunnelStep) => string; description: string }>()
const first = computed(() => Math.max(props.steps[0]?.value ?? 0, 0) || 1)
/** Largura da etapa em % da primeira. */
const width = (step: FunnelStep) => Math.min(100, Math.max(((step.value ?? 0) / first.value) * 100, 1))
/** Quanto passou da etapa anterior, em %; sem anterior, nada. */
function passed(index: number): string | null {
  const previous = props.steps[index - 1]?.value
  const current = props.steps[index]?.value
  if (index === 0 || !previous || current === null || current === undefined) return null
  return `${((current / previous) * 100).toFixed(1)}%`
}
</script>

<template>
  <ul class="grid gap-2 py-2" :aria-label="description">
    <li v-for="(step, index) in steps" :key="step.key" class="grid grid-cols-[minmax(0,9rem)_minmax(0,1fr)_7rem] items-center gap-3 text-[13px]">
      <span class="truncate" :title="step.label">{{ step.label }}</span>
      <span class="flex justify-center" aria-hidden="true">
        <span class="block h-8 rounded-sm bg-foreground" :style="{ width: `${width(step)}%`, background: step.color, opacity: step.color ? 1 : 1 - index * 0.15 }" />
      </span>
      <span class="text-right tnum">
        {{ format(step) }}
        <span v-if="passed(index)" class="block text-[12px] text-muted-foreground">{{ passed(index) }}</span>
      </span>
    </li>
  </ul>
</template>
