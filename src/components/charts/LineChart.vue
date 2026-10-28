<script setup lang="ts">
/** Gráfico de linha (ou área) em SVG, com grade, dica que segue o mouse e tabela para leitor de tela. */
import { computed, ref, useTemplateRef } from 'vue'
import { useElementSize } from '@vueuse/core'
import { niceTicks } from '@/lib/metrics'

export interface LineSeries {
  key: string
  name: string
  values: (number | null)[]
  tone?: 'primary' | 'muted'
  dashed?: boolean
  /** Cor viva escolhida pela pessoa (variável CSS); sem ela, o preto do painel. */
  color?: string
}

const props = withDefaults(
  defineProps<{
    labels: string[]
    series: LineSeries[]
    format: (value: number | null, compact?: boolean) => string
    description: string
    area?: boolean
    height?: number
  }>(),
  { area: false, height: 260 },
)

const box = useTemplateRef<HTMLDivElement>('box')
const { width } = useElementSize(box)
const hovered = ref<number | null>(null)
const padding = { top: 12, right: 12, bottom: 28, left: 64 }

const chartWidth = computed(() => Math.max(width.value, 240))
const plotWidth = computed(() => chartWidth.value - padding.left - padding.right)
const plotHeight = computed(() => props.height - padding.top - padding.bottom)
const ticks = computed(() => {
  const values = props.series.flatMap((line) => line.values).filter((value): value is number => value !== null)
  return niceTicks(Math.max(0, ...values))
})
const top = computed(() => ticks.value[ticks.value.length - 1] || 1)
const pointCount = computed(() => props.labels.length)

/** Posição horizontal do ponto pelo índice. */
const xOf = (index: number) =>
  padding.left + (pointCount.value <= 1 ? plotWidth.value / 2 : (index * plotWidth.value) / (pointCount.value - 1))
/** Posição vertical pelo valor. */
const yOf = (value: number) => padding.top + plotHeight.value * (1 - value / top.value)

/** Caminho SVG da linha; um valor vazio interrompe a linha. */
function linePath(values: (number | null)[]): string {
  let path = ''
  let drawing = false
  values.forEach((value, index) => {
    if (value === null) {
      drawing = false
      return
    }
    path += `${drawing ? 'L' : 'M'}${xOf(index).toFixed(1)},${yOf(value).toFixed(1)}`
    drawing = true
  })
  return path
}

/** Área de cada série com cor (ou da primeira, sem cor) até a linha de base, quando não há vazios. */
const areaPaths = computed(() => {
  if (!props.area || pointCount.value < 2) return []
  const baseline = yOf(0).toFixed(1)
  return props.series
    .filter((line, index) => (index === 0 || line.color) && line.values.every((value) => value !== null))
    .map((line) => ({ key: line.key, color: line.color, d: `${linePath(line.values)}L${xOf(pointCount.value - 1).toFixed(1)},${baseline}L${xOf(0).toFixed(1)},${baseline}Z` }))
})
const labelStep = computed(() => Math.max(1, Math.ceil(pointCount.value / Math.max(2, Math.floor(plotWidth.value / 72)))))
/** Primeira e última data encostam na borda do gráfico, as outras ficam centradas. */
const anchor = (index: number) => (pointCount.value > 1 && index === 0 ? 'start' : pointCount.value > 1 && index === pointCount.value - 1 ? 'end' : 'middle')
/** Cor do traço da série. */
const stroke = (line: LineSeries) => (line.tone === 'muted' ? 'stroke-muted-foreground/70' : 'stroke-foreground')
/** Cor do ponto da série. */
const dot = (line: LineSeries) => (line.tone === 'muted' ? 'fill-muted-foreground' : 'fill-foreground')
/** A cor viva no traço, quando a série tem uma. */
const strokeStyle = (line: LineSeries) => (line.color ? { stroke: line.color } : undefined)
/** A cor viva no ponto, quando a série tem uma. */
const dotStyle = (line: LineSeries) => (line.color ? { fill: line.color } : undefined)

/** Índice do ponto mais perto do mouse. */
function track(event: PointerEvent) {
  const bounds = (event.currentTarget as SVGElement).getBoundingClientRect()
  const position = event.clientX - bounds.left - padding.left
  const index = pointCount.value <= 1 ? 0 : Math.round((position / plotWidth.value) * (pointCount.value - 1))
  hovered.value = Math.min(pointCount.value - 1, Math.max(0, index))
}

/** Setas do teclado andam pelos pontos. */
function step(event: KeyboardEvent) {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
  event.preventDefault()
  const current = hovered.value ?? (event.key === 'ArrowLeft' ? pointCount.value : -1)
  hovered.value = Math.min(pointCount.value - 1, Math.max(0, current + (event.key === 'ArrowRight' ? 1 : -1)))
}
const tooltipLeft = computed(() => {
  if (hovered.value === null) return 0
  return Math.min(Math.max(xOf(hovered.value) - 112, 0), chartWidth.value - 224)
})
</script>

<template>
  <div ref="box" class="relative w-full">
    <div v-if="series.length > 1" class="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-muted-foreground">
      <span v-for="line in series" :key="line.key" class="flex items-center gap-1.5">
        <svg width="16" height="4" aria-hidden="true"><line x1="0" x2="16" y1="2" y2="2" :class="stroke(line)" :style="strokeStyle(line)" stroke-width="2" :stroke-dasharray="line.dashed ? '4 3' : undefined" /></svg>
        {{ line.name }}
      </span>
    </div>
    <svg
      :width="chartWidth"
      :height="height"
      class="block touch-pan-y focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      role="img"
      tabindex="0"
      :aria-label="description"
      @pointermove="track"
      @pointerdown="track"
      @pointerleave="hovered = null"
      @keydown="step"
      @blur="hovered = null"
    >
      <g v-for="tick in ticks" :key="tick">
        <line :x1="padding.left" :x2="chartWidth - padding.right" :y1="yOf(tick)" :y2="yOf(tick)" class="stroke-border" stroke-width="1" />
        <text :x="padding.left - 8" :y="yOf(tick) + 4" text-anchor="end" class="fill-muted-foreground text-[11px] tnum">{{ format(tick, true) }}</text>
      </g>
      <template v-for="(label, index) in labels" :key="label">
        <text v-if="index % labelStep === 0" :x="xOf(index)" :y="height - 8" :text-anchor="anchor(index)" class="fill-muted-foreground text-[11px] tnum">{{ label }}</text>
      </template>
      <path v-for="shape in areaPaths" :key="`area-${shape.key}`" :d="shape.d" :class="shape.color ? undefined : 'fill-foreground/[0.05]'" :style="shape.color ? { fill: shape.color, fillOpacity: 0.12 } : undefined" />
      <path
        v-for="line in [...series].reverse()"
        :key="line.key"
        :d="linePath(line.values)"
        fill="none"
        :class="stroke(line)"
        :style="strokeStyle(line)"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
        :stroke-dasharray="line.dashed ? '4 4' : undefined"
      />
      <template v-if="pointCount === 1">
        <template v-for="line in series" :key="line.key">
          <circle v-if="line.values[0] !== null" :cx="xOf(0)" :cy="yOf(line.values[0] ?? 0)" r="4" :class="dot(line)" :style="dotStyle(line)" />
        </template>
      </template>
      <g v-if="hovered !== null">
        <line :x1="xOf(hovered)" :x2="xOf(hovered)" :y1="padding.top" :y2="padding.top + plotHeight" class="stroke-muted-foreground/40" stroke-width="1" />
        <template v-for="line in series" :key="line.key">
          <circle v-if="line.values[hovered] !== null" :cx="xOf(hovered)" :cy="yOf(line.values[hovered] ?? 0)" r="4" :class="dot(line)" :style="dotStyle(line)" class="stroke-card" stroke-width="2" />
        </template>
      </g>
    </svg>
    <div
      v-if="hovered !== null"
      class="pointer-events-none absolute z-10 w-56 whitespace-nowrap rounded-md border bg-popover px-3 py-2 text-[13px] text-popover-foreground shadow-md"
      :style="{ left: `${tooltipLeft}px`, top: series.length > 1 ? '28px' : '0px' }"
      aria-hidden="true"
    >
      <div class="font-medium">{{ labels[hovered] }}</div>
      <div v-for="line in series" :key="line.key" class="mt-1 flex items-center justify-between gap-3">
        <span class="text-muted-foreground">{{ line.name }}</span>
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
