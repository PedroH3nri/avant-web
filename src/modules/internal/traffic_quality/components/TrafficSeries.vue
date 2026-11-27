<script setup lang="ts">
/** A linha da série do sinal, com o normal tracejado. */
import { computed } from 'vue'
import { locale } from '@/lib/i18n'
import { seriesPoints } from '@/modules/internal/traffic_quality/rules'

const props = defineProps<{ series: number[]; normal: number; label: string }>()

const WIDTH = 480
const HEIGHT = 120
const shape = computed(() => seriesPoints(props.series, props.normal, WIDTH, HEIGHT))
const line = computed(() => shape.value.points.map((point) => `${point.x},${point.y}`).join(' '))
</script>

<template>
  <svg :viewBox="`-4 -4 ${WIDTH + 8} ${HEIGHT + 8}`" class="h-[140px] w-full" role="img" :aria-label="label">
    <line :x1="0" :x2="WIDTH" :y1="shape.normalY" :y2="shape.normalY" class="stroke-muted-foreground/50" stroke-dasharray="4 4" />
    <polyline :points="line" fill="none" class="stroke-bad" stroke-width="2" stroke-linejoin="round" />
    <circle v-for="(point, index) in shape.points" :key="index" :cx="point.x" :cy="point.y" r="2.5" class="fill-bad">
      <title>{{ point.value.toLocaleString(locale) }}</title>
    </circle>
  </svg>
</template>
