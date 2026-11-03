<script setup lang="ts">
/** Status de faturamento numa linha de lista: a badge da tendência e, embaixo, a média por dia e a variação. */
import { computed } from 'vue'
import { locale, t } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { changeText, perDayText, TREND_CLASS } from '@/modules/revenue/rules'
import type { RevenueStatus } from '@/modules/revenue/types'

const props = defineProps<{ status: RevenueStatus | null | undefined }>()

const detail = computed(() => {
  if (!props.status) return ''
  const change = changeText(props.status)
  const perDay = t('revenue.perDay', { value: perDayText(props.status, locale.value) })
  return change ? `${perDay} · ${change}` : perDay
})
</script>

<template>
  <div v-if="status" :title="t('revenue.hint')">
    <span :class="cn('inline-flex h-6 items-center whitespace-nowrap rounded-full px-2.5 text-[12px] font-medium', TREND_CLASS[status.trend])">{{
      t(`revenue.trend.${status.trend}`)
    }}</span>
    <div class="tnum mt-1 pl-1 text-[12px] text-muted-foreground">{{ detail }}</div>
  </div>
  <span
    v-else
    :title="t('revenue.hint')"
    class="inline-flex h-6 items-center whitespace-nowrap rounded-full border border-dashed px-2.5 text-[12px] font-medium text-muted-foreground"
    >{{ t('revenue.none') }}</span
  >
</template>
