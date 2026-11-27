<script setup lang="ts">
/** Barras da receita bruta diária do mês: cheias até ontem e contornadas na previsão, na cor da receita. */
import { computed } from 'vue'
import { t } from '@/lib/i18n'
import { colorVar, metricColor } from '@/lib/metric-colors'
import { money, shortDate } from '@/modules/internal/forecast/rules'
import type { ForecastDay } from '@/modules/internal/forecast/types'

const props = defineProps<{ days: ForecastDay[]; factor: number }>()
const WIDTH = 720
const HEIGHT = 140
const color = colorVar(metricColor('revenue'))
const values = computed(() => props.days.map((day) => (day.actual != null ? Number(day.actual) : Number(day.forecast ?? 0) * props.factor)))
const peak = computed(() => Math.max(1, ...values.value) * 1.1)
const slot = computed(() => WIDTH / Math.max(1, props.days.length))
const todayIndex = computed(() => props.days.findIndex((day) => day.actual == null))

/** A altura da barra do dia. */
const barHeight = (index: number) => ((values.value[index] ?? 0) / peak.value) * HEIGHT

/** O texto ao passar o mouse: o dia, o valor e se é previsão. */
const tip = (index: number) => {
  const day = props.days[index]
  if (!day) return ''
  return `${shortDate(day.day)}: ${money(values.value[index])}${day.actual == null ? ` (${t('fc.forecasted')})` : ''}`
}
</script>

<template>
  <svg :viewBox="`0 0 ${WIDTH} ${HEIGHT + 20}`" class="h-[170px] w-full" role="img" :aria-label="t('fc.chartLabel')">
    <rect
      v-for="(day, index) in days"
      :key="day.day"
      :x="index * slot + 2"
      :y="HEIGHT - barHeight(index)"
      :width="Math.max(1, slot - 4)"
      :height="barHeight(index)"
      rx="2"
      :fill="day.actual != null ? color : 'transparent'"
      :stroke="day.actual != null ? 'none' : color"
      :stroke-dasharray="day.actual != null ? undefined : '3 3'"
    ><title>{{ tip(index) }}</title></rect>
    <text v-if="days.length" x="0" :y="HEIGHT + 16" class="fill-muted-foreground text-[11px]">{{ shortDate(days[0]!.day) }}</text>
    <text v-if="todayIndex > 0" :x="todayIndex * slot" :y="HEIGHT + 16" text-anchor="middle" class="fill-muted-foreground text-[11px]">{{ t('fc.today') }}</text>
    <text v-if="days.length" :x="WIDTH" :y="HEIGHT + 16" text-anchor="end" class="fill-muted-foreground text-[11px]">{{ shortDate(days[days.length - 1]!.day) }}</text>
  </svg>
</template>
