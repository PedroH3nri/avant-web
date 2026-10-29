<script setup lang="ts">
/** Andamento de uma meta: porcentagem, barra com a marca do ritmo de hoje, situação e projeção. */
import { computed } from 'vue'
import Status from '@/components/ui/Status.vue'
import { locale, t } from '@/lib/i18n'
import { formatMetric, toNumber } from '@/lib/metrics'
import { goalTone, paceMark } from '@/modules/internal/goals/rules'
import type { GoalProgress } from '@/modules/internal/goals/types'

const props = defineProps<{ progress: GoalProgress; month: string; today: string; label: string }>()
/** Valor em dólar no idioma da pessoa. */
const money = (value: string | null) => formatMetric(toNumber(value), 'currency', locale.value)
const share = computed(() => toNumber(props.progress.share) ?? 0)
const tone = computed(() => goalTone(props.progress))
const mark = computed(() => paceMark(props.month, props.today))
const percent = computed(() => new Intl.NumberFormat(locale.value, { style: 'percent', maximumFractionDigits: 1 }).format(share.value))
</script>

<template>
  <div v-if="progress.goal === null" class="grid gap-1">
    <span class="text-[28px] font-semibold tracking-tight tnum">{{ money(progress.done) }}</span>
    <span class="text-[13px] text-muted-foreground">{{ t('goals.noGoal') }}</span>
  </div>
  <div v-else>
    <div class="flex items-baseline justify-between gap-3">
      <span class="text-[28px] font-semibold tracking-tight tnum">{{ percent }}</span>
      <span class="text-[13px] text-muted-foreground tnum">{{ t('goals.doneOf', { done: money(progress.done), goal: money(progress.goal) }) }}</span>
    </div>
    <div class="relative mt-3 h-2.5 rounded-full bg-secondary" role="img" :aria-label="t('goals.barLabel', { label, percent })">
      <div class="h-2.5 rounded-full" :class="tone === 'ochre' ? 'bg-ochre' : 'bg-ok'" :style="{ width: `${Math.min(share, 1) * 100}%` }" />
      <div v-if="mark > 0 && mark < 1" class="absolute -top-1 h-[18px] w-0.5 rounded bg-foreground/60" :style="{ left: `${mark * 100}%` }" :title="t('goals.paceMark')" />
    </div>
    <div class="mt-2 flex flex-wrap justify-between gap-2 text-[13px]">
      <Status v-if="tone !== 'neutral'" :tone="tone">{{ tone === 'ok' ? t('goals.onPace') : t('goals.behind') }}</Status>
      <span v-else />
      <span v-if="progress.projected !== null" class="text-muted-foreground">{{ t('goals.projected') }} <span class="tnum text-foreground">{{ money(progress.projected) }}</span></span>
    </div>
  </div>
</template>
