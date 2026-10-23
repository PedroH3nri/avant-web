<script setup lang="ts">
import { cn } from '@/lib/utils'

defineProps<{ tone?: 'neutral' | 'ochre' | 'bad' }>()
</script>

<template>
  <span
    :class="
      cn(
        'inline-flex h-5 items-center whitespace-nowrap rounded-full px-2 text-[12px] font-medium',
        (!tone || tone === 'neutral') && 'bg-secondary text-secondary-foreground',
        tone === 'ochre' && 'bg-ochre-soft text-ochre',
        tone === 'bad' && 'bg-bad-soft text-bad',
      )
    "
    ><slot
  /></span>
</template>
