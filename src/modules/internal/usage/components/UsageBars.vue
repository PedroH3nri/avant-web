<script setup lang="ts">
/** Barras por dia do período, em SVG parado: um valor por dia, com o dia e o valor no título de cada barra. */
import { computed } from 'vue'
import { t } from '@/lib/i18n'
import { dayLabel } from '@/modules/internal/usage/rules'

const props = defineProps<{ points: { day: string; value: number }[]; label: string; unit: string }>()
const WIDTH = 600
const HEIGHT = 120
const GAP = 3
const MIN_BAR = 4
const EMPTY_BAR = 2
const slot = computed(() => WIDTH / Math.max(props.points.length, 1))
const peak = computed(() => Math.max(1, ...props.points.map((point) => point.value)))
/** A altura da barra do valor; o dia sem uso fica com um traço. */
const barHeight = (value: number) => (value ? Math.max(MIN_BAR, (value / peak.value) * HEIGHT) : EMPTY_BAR)
</script>

<template>
  <svg :viewBox="`0 0 ${WIDTH} ${HEIGHT + 18}`" class="h-[150px] w-full" role="img" :aria-label="label">
    <rect
      v-for="(point, index) in points"
      :key="point.day"
      :x="index * slot + GAP"
      :y="HEIGHT - barHeight(point.value)"
      :width="Math.max(slot - GAP * 2, 1)"
      :height="barHeight(point.value)"
      rx="2"
      :class="point.value ? 'fill-foreground' : 'fill-muted-foreground/30'"
    >
      <title>{{ `${dayLabel(point.day)}: ${point.value} ${unit}` }}</title>
    </rect>
    <text v-if="points.length" x="0" :y="HEIGHT + 15" class="fill-muted-foreground text-[11px]">{{ dayLabel(points[0]?.day ?? '') }}</text>
    <text :x="WIDTH" :y="HEIGHT + 15" text-anchor="end" class="fill-muted-foreground text-[11px]">{{ t('usage.today') }}</text>
  </svg>
</template>
