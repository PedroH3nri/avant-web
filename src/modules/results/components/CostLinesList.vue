<script setup lang="ts">
/** Os custos de um mês: os da aba Custos e o gasto de cada integração; a linha escondida mostra o aviso de permissão no lugar do valor. */
import { cn } from '@/lib/utils'
import { t, type Key } from '@/lib/i18n'
import { INTEGRATION_COLOR } from '@/modules/cost_control/rules'
import { negative } from '@/modules/results/rules'
import type { MonthResult } from '@/modules/results/types'

const props = defineProps<{ month: MonthResult; money: (value: number | string) => string }>()

/** Classe do valor de saída, em cinza quando negativo. */
const valueClass = (value: number) => cn('tnum whitespace-nowrap', value < 0 && 'text-muted-foreground')
</script>

<template>
  <p v-if="!props.month.cost_lines.length && !props.month.integration_lines.length" class="text-[14px] text-muted-foreground">{{ t('res.noCosts') }}</p>
  <ul v-else class="divide-y rounded-md border">
    <li v-for="line in props.month.cost_lines" :key="line.cost_id" class="flex items-center justify-between gap-4 px-4 py-3 text-[14px]">
      <span class="min-w-0 truncate">{{ line.name }}</span>
      <span :class="valueClass(negative(line.amount))">{{ props.money(negative(line.amount)) }}</span>
    </li>
    <li v-for="line in props.month.integration_lines" :key="line.integration" class="flex items-center justify-between gap-4 px-4 py-3 text-[14px]">
      <span class="flex min-w-0 items-center gap-2 truncate">
        <span class="size-2 shrink-0 rounded-full" :style="{ background: INTEGRATION_COLOR[line.integration] }" aria-hidden="true" />{{ t('res.integrationLine', { name: t(`cc.int.${line.integration}` as Key) }) }}
      </span>
      <span v-if="line.hidden || line.amount === null" class="text-right text-[13px] text-muted-foreground">{{ t('res.hiddenData') }}</span>
      <span v-else :class="valueClass(negative(line.amount))">{{ props.money(negative(line.amount)) }}</span>
    </li>
  </ul>
</template>
