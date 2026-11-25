<script setup lang="ts">
/** Status de faturamento dentro de um card: a média por dia em destaque e, embaixo, a badge da
 * tendência com a variação (verde subindo, azul mantendo, amarelo caindo, vermelho parado). */
import { computed } from 'vue'
import { locale, t } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { changeText, perDayText, TREND_CLASS } from '@/modules/revenue/rules'
import type { RevenueStatus } from '@/modules/revenue/types'

const props = defineProps<{ status: RevenueStatus | null | undefined }>()
const change = computed(() => (props.status ? changeText(props.status) : ''))
</script>

<template>
  <div v-if="status" :title="t('revenue.hint')">
    <div class="flex items-baseline gap-1.5">
      <span class="text-[28px] font-semibold tracking-[-0.03em] tnum">{{ perDayText(status, locale) }}</span>
      <span class="text-[14px] text-muted-foreground">{{ t('revenue.perDayUnit') }}</span>
    </div>
    <span :class="cn('mt-2 inline-flex h-7 items-center gap-1.5 whitespace-nowrap rounded-full px-3 text-[13px] font-medium', TREND_CLASS[status.trend])">
      {{ t(`revenue.trend.${status.trend}`) }}
      <span v-if="change" class="tnum opacity-80">{{ change }}</span>
    </span>
  </div>
  <p v-else :title="t('revenue.hint')" class="text-[14px] text-muted-foreground">{{ t('revenue.none') }}</p>
</template>
