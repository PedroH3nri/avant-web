<script setup lang="ts">
/** Limite de funcionários: um segmento por vaga (pessoas, convites pendentes, livres). */
import { computed } from 'vue'

const props = defineProps<{ used: number; pending: number; limit: number; label: string }>()
const seats = computed(() =>
  Array.from({ length: Math.max(props.limit, 0) }, (_, i) =>
    i < props.used ? 'bg-primary' : i < props.used + props.pending ? 'bg-ochre' : 'bg-muted-foreground/15',
  ),
)
</script>

<template>
  <div
    class="flex h-2 w-full gap-[3px]"
    role="meter"
    :aria-valuemin="0"
    :aria-valuemax="limit"
    :aria-valuenow="used + pending"
    :aria-label="label"
  >
    <span v-for="(c, i) in seats" :key="i" :class="['h-full flex-1 rounded-[2px] transition-colors duration-200', c]" />
  </div>
</template>
