<script setup lang="ts">
/** Card de número (rótulo, valor e dica) com a animação dos cards de métrica; use em toda faixa de totais. */
import { cn } from '@/lib/utils'

defineProps<{ label?: string; value?: string | number; hint?: string; tone?: string; framed?: boolean; class?: string }>()
</script>

<template>
  <div :class="cn('kpi-motion relative min-w-0 bg-card p-4 transition-colors hover:bg-muted', framed && 'overflow-hidden rounded-lg border', $props.class)">
    <div class="flex flex-wrap items-center gap-2 text-[13px] font-medium text-muted-foreground">
      <slot name="label">{{ label }}</slot>
    </div>
    <div :class="cn('mt-1 truncate text-[20px] font-semibold tracking-[-0.03em] tnum sm:text-[24px]', tone)">
      <slot name="value">{{ value }}</slot>
    </div>
    <div v-if="hint" class="mt-1 text-[12px] leading-snug text-muted-foreground">{{ hint }}</div>
    <slot />
  </div>
</template>
