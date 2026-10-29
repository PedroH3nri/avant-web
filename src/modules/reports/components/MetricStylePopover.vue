<script setup lang="ts">
/** Menu de uma métrica escolhida: a cor viva e a aparência pelo valor (verde → vermelho ou o contrário). */
import { computed, ref, watch } from 'vue'
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
import Input from '@/components/ui/Input.vue'
import { t } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { scaleError, seriesColor, SERIES_COLORS, syncText } from '@/modules/reports/rules'
import type { MetricStyle, ScaleMode, SeriesColor } from '@/modules/reports/types'

const props = defineProps<{ label: string; metricStyle: MetricStyle; disabled: boolean }>()
const emit = defineEmits<{ change: [style: MetricStyle] }>()
const MODES: ScaleMode[] = ['green_red', 'red_green']
const mode = ref<ScaleMode | null>(props.metricStyle.scale?.mode ?? null)
const from = ref(String(props.metricStyle.scale?.from ?? 0))
const to = ref(String(props.metricStyle.scale?.to ?? 100))
watch(
  () => props.metricStyle.scale,
  (scale) => {
    if (!scale) return
    if (mode.value !== scale.mode) mode.value = scale.mode
    from.value = syncText(from.value, scale.from)
    to.value = syncText(to.value, scale.to)
  },
)
/** Texto digitado como número (aceita vírgula). */
const number = (text: string) => (text.trim() === '' ? Number.NaN : Number(text.replace(',', '.')))
const error = computed(() => (mode.value ? scaleError({ mode: mode.value, from: number(from.value), to: number(to.value) }) : null))
/** Gradiente do modo, do verde ao vermelho ou ao contrário. */
const gradient = (scaleMode: ScaleMode) => `linear-gradient(90deg, hsl(${scaleMode === 'green_red' ? 135 : 0} 75% 45%), hsl(${scaleMode === 'green_red' ? 0 : 135} 75% 45%))`
const swatch = computed(() => (props.metricStyle.scale ? gradient(props.metricStyle.scale.mode) : (seriesColor(props.metricStyle.color) ?? 'hsl(var(--foreground))')))

/** Troca a cor e mantém a aparência. */
function pickColor(color: SeriesColor | undefined) {
  emit('change', { ...props.metricStyle, color })
}

/** Aplica a aparência só quando os números estão certos; sem modo, tira a aparência. */
function applyScale() {
  if (!mode.value) {
    emit('change', { color: props.metricStyle.color })
    return
  }
  if (error.value) return
  emit('change', { ...props.metricStyle, scale: { mode: mode.value, from: number(from.value), to: number(to.value) } })
}
watch([mode, from, to], applyScale)
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger
      :disabled="disabled"
      class="inline-flex h-6 items-center gap-1.5 rounded-full px-2 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:hover:bg-transparent"
    >
      <span class="size-3 rounded-full border" :style="{ background: swatch }" aria-hidden="true" />{{ label }}
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent align="start" :side-offset="6" class="z-50 w-[300px] rounded-md border bg-popover p-4 text-popover-foreground shadow-md">
        <h3 class="text-[14px] font-semibold">{{ label }}</h3>
        <div class="mt-3 text-[12px] font-medium text-muted-foreground">{{ t('report.color') }}</div>
        <div class="mt-2 flex flex-wrap gap-2" role="radiogroup" :aria-label="t('report.color')">
          <button
            type="button"
            role="radio"
            :aria-checked="!metricStyle.color"
            :aria-label="t('report.colorDefault')"
            :title="t('report.colorDefault')"
            :class="cn('size-7 rounded-full bg-foreground', !metricStyle.color && 'ring-2 ring-ring ring-offset-2 ring-offset-background')"
            @click="pickColor(undefined)"
          />
          <button
            v-for="color in SERIES_COLORS"
            :key="color"
            type="button"
            role="radio"
            :aria-checked="metricStyle.color === color"
            :aria-label="t(`report.colors.${color}`)"
            :title="t(`report.colors.${color}`)"
            :class="cn('size-7 rounded-full', metricStyle.color === color && 'ring-2 ring-ring ring-offset-2 ring-offset-background')"
            :style="{ background: seriesColor(color) }"
            @click="pickColor(color)"
          />
        </div>
        <div class="mt-4 text-[12px] font-medium text-muted-foreground">{{ t('report.scale') }}</div>
        <div class="mt-2 grid gap-1.5 text-[13px]">
          <label class="flex items-center gap-2"><input v-model="mode" type="radio" :value="null" class="accent-[hsl(var(--primary))]" />{{ t('report.scaleNone') }}</label>
          <label v-for="scaleMode in MODES" :key="scaleMode" class="flex items-start gap-2">
            <input v-model="mode" type="radio" :value="scaleMode" class="mt-0.5 accent-[hsl(var(--primary))]" />
            <span>
              <span class="flex items-center gap-2">{{ t(`report.scales.${scaleMode}`) }}<span class="h-2 w-10 rounded-full" :style="{ background: gradient(scaleMode) }" aria-hidden="true" /></span>
              <span class="block text-[12px] text-muted-foreground">{{ t(`report.scales.${scaleMode}Hint`) }}</span>
            </span>
          </label>
        </div>
        <div v-if="mode" class="mt-3 grid grid-cols-2 gap-3">
          <label class="grid gap-1 text-[12px] text-muted-foreground">
            {{ mode === 'green_red' ? t('report.scaleGreenUntil') : t('report.scaleRedUntil') }}
            <Input v-model="from" inputmode="decimal" class="h-8 tnum" :invalid="!!error" />
          </label>
          <label class="grid gap-1 text-[12px] text-muted-foreground">
            {{ mode === 'green_red' ? t('report.scaleRedFrom') : t('report.scaleGreenFrom') }}
            <Input v-model="to" inputmode="decimal" class="h-8 tnum" :invalid="!!error" />
          </label>
          <p class="col-span-2 text-[12px]" :class="error ? 'text-bad' : 'text-muted-foreground'">{{ error ? t(error) : t('report.scaleHint') }}</p>
        </div>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
