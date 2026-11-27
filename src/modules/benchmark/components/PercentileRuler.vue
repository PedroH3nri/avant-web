<script setup lang="ts">
/** Régua de 0 a 100 com a posição do site, o traço da mediana e o traço claro dos 25% melhores. */
import { cn } from '@/lib/utils'

defineProps<{ percentile: number | null; label: string }>()
</script>

<template>
  <div class="relative h-2 w-full rounded-full bg-muted-foreground/15" role="meter" aria-valuemin="0" aria-valuemax="100" :aria-valuenow="percentile ?? undefined" :aria-label="label">
    <span class="absolute left-1/2 top-[-3px] h-[14px] w-px bg-muted-foreground" aria-hidden="true" />
    <span class="absolute left-3/4 top-[-3px] h-[14px] w-px bg-muted-foreground/50" aria-hidden="true" />
    <span
      v-if="percentile != null"
      :class="cn('absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background', percentile >= 50 ? 'bg-ok' : 'bg-warn')"
      :style="{ left: `${percentile}%` }"
    />
  </div>
</template>
