<script setup lang="ts">
/** Rosca com a fatia de cada item e a legenda com a porcentagem; tabela para leitor de tela. */
import { computed } from 'vue'
import type { BarItem } from '@/components/charts/BarChart.vue'

const props = defineProps<{ items: BarItem[]; format: (value: number | null) => string; description: string; color?: string }>()
const RADIUS = 90
const HOLE = 52
const total = computed(() => props.items.reduce((sum, item) => sum + Math.max(item.value ?? 0, 0), 0) || 1)
/** Opacidade da fatia: a maior cheia, as outras mais claras. */
const opacity = (index: number) => 1 - index * (0.7 / Math.max(props.items.length, 1))
/** Ponto na borda do círculo pelo ângulo. */
const point = (angle: number, radius: number) => `${(100 + radius * Math.cos(angle)).toFixed(2)},${(100 + radius * Math.sin(angle)).toFixed(2)}`
const slices = computed(() => {
  let angle = -Math.PI / 2
  return props.items.map((item, index) => {
    const share = Math.max(item.value ?? 0, 0) / total.value
    const start = angle
    angle += share * Math.PI * 2
    const end = share >= 1 ? angle - 0.0001 : angle
    const large = end - start > Math.PI ? 1 : 0
    const path = `M${point(start, RADIUS)}A${RADIUS},${RADIUS} 0 ${large} 1 ${point(end, RADIUS)}L${point(end, HOLE)}A${HOLE},${HOLE} 0 ${large} 0 ${point(start, HOLE)}Z`
    return { key: item.key, label: item.label, path, share, opacity: opacity(index), value: item.value }
  })
})
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-8 py-2">
    <svg viewBox="0 0 200 200" class="h-[200px] w-[200px]" role="img" :aria-label="description">
      <path v-for="slice in slices" :key="slice.key" :d="slice.path" class="fill-foreground stroke-card" stroke-width="2" :style="{ opacity: slice.opacity, fill: color }" />
    </svg>
    <ul class="grid min-w-[12rem] gap-1.5 text-[13px]">
      <li v-for="slice in slices" :key="slice.key" class="flex items-center gap-2">
        <span class="h-2.5 w-2.5 shrink-0 rounded-sm bg-foreground" :style="{ opacity: slice.opacity, background: color }" aria-hidden="true" />
        <span class="min-w-0 flex-1 truncate" :title="slice.label">{{ slice.label }}</span>
        <span class="tnum text-muted-foreground">{{ (slice.share * 100).toFixed(1) }}%</span>
      </li>
    </ul>
    <table class="sr-only">
      <caption>{{ description }}</caption>
      <tbody>
        <tr v-for="slice in slices" :key="slice.key"><th scope="row">{{ slice.label }}</th><td>{{ format(slice.value) }}</td></tr>
      </tbody>
    </table>
  </div>
</template>
