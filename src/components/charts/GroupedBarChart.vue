<script setup lang="ts">
/** Colunas agrupadas: um grupo por valor do eixo e uma coluna por série, com legenda. */
import { computed, ref, useTemplateRef } from 'vue'
import { useElementSize } from '@vueuse/core'
import { niceTicks } from '@/lib/metrics'

export interface BarSeries {
  key: string
  name: string
  values: (number | null)[]
  color?: string
}

const props = withDefaults(
  defineProps<{ labels: string[]; series: BarSeries[]; format: (value: number | null, compact?: boolean) => string; description: string; height?: number }>(),
  { height: 260 },
)
const box = useTemplateRef<HTMLDivElement>('box')
const { width } = useElementSize(box)
const hovered = ref<number | null>(null)
const padding = { top: 12, right: 12, bottom: 28, left: 64 }
const chartWidth = computed(() => Math.max(width.value, 240))
const plotWidth = computed(() => chartWidth.value - padding.left - padding.right)
const plotHeight = computed(() => props.height - padding.top - padding.bottom)
const ticks = computed(() => niceTicks(Math.max(0, ...props.series.flatMap((line) => line.values).filter((value): value is number => value !== null))))
const top = computed(() => ticks.value[ticks.value.length - 1] || 1)
const group = computed(() => plotWidth.value / Math.max(props.labels.length, 1))
const barWidth = computed(() => Math.max(2, (group.value * 0.8) / Math.max(props.series.length, 1)))
const labelStep = computed(() => Math.max(1, Math.ceil(props.labels.length / Math.max(2, Math.floor(plotWidth.value / 72)))))
/** Posição vertical pelo valor. */
const yOf = (value: number) => padding.top + plotHeight.value * (1 - value / top.value)
/** Posição horizontal da coluna da série dentro do grupo. */
const xOf = (index: number, seriesIndex: number) => padding.left + index * group.value + group.value * 0.1 + seriesIndex * barWidth.value
</script>

<template>
  <div ref="box" class="relative w-full">
    <div class="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-muted-foreground">
      <span v-for="line in series" :key="line.key" class="flex items-center gap-1.5">
        <span class="h-2.5 w-2.5 rounded-sm bg-foreground" :style="{ background: line.color }" aria-hidden="true" />{{ line.name }}
      </span>
    </div>
    <svg :width="chartWidth" :height="height" class="block" role="img" :aria-label="description" @pointerleave="hovered = null">
      <g v-for="tick in ticks" :key="tick">
        <line :x1="padding.left" :x2="chartWidth - padding.right" :y1="yOf(tick)" :y2="yOf(tick)" class="stroke-border" stroke-width="1" />
        <text :x="padding.left - 8" :y="yOf(tick) + 4" text-anchor="end" class="fill-muted-foreground text-[11px] tnum">{{ format(tick, true) }}</text>
      </g>
      <g v-for="(label, index) in labels" :key="label" @pointerenter="hovered = index">
        <rect :x="padding.left + index * group" :y="padding.top" :width="group" :height="plotHeight" fill="transparent" />
        <template v-for="(line, seriesIndex) in series" :key="line.key">
          <rect
            v-if="line.values[index] !== null && line.values[index] !== undefined"
            :x="xOf(index, seriesIndex)"
            :y="yOf(line.values[index] ?? 0)"
            :width="Math.max(barWidth - 1, 1)"
            :height="Math.max(yOf(0) - yOf(line.values[index] ?? 0), 0)"
            rx="1.5"
            class="fill-foreground"
            :style="{ fill: line.color }"
          />
        </template>
        <text v-if="index % labelStep === 0" :x="padding.left + index * group + group / 2" :y="height - 8" text-anchor="middle" class="fill-muted-foreground text-[11px] tnum">{{ label }}</text>
      </g>
    </svg>
    <div
      v-if="hovered !== null"
      class="pointer-events-none absolute top-8 z-10 w-56 rounded-md border bg-popover px-3 py-2 text-[13px] text-popover-foreground shadow-md"
      :style="{ left: `${Math.min(Math.max(padding.left + hovered * group - 112 + group / 2, 0), chartWidth - 224)}px` }"
      aria-hidden="true"
    >
      <div class="font-medium">{{ labels[hovered] }}</div>
      <div v-for="line in series" :key="line.key" class="mt-1 flex items-center justify-between gap-3">
        <span class="truncate text-muted-foreground">{{ line.name }}</span>
        <span class="tnum">{{ format(line.values[hovered] ?? null) }}</span>
      </div>
    </div>
    <table class="sr-only">
      <caption>{{ description }}</caption>
      <tbody>
        <tr v-for="(label, index) in labels" :key="label">
          <th scope="row">{{ label }}</th>
          <td v-for="line in series" :key="line.key">{{ line.name }}: {{ format(line.values[index] ?? null) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
