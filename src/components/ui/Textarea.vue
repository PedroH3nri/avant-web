<script setup lang="ts">
/** Caixa de texto de várias linhas, no mesmo estilo dos campos. */
import { cn } from '@/lib/utils'

const model = defineModel<string>({ default: '' })
defineProps<{ class?: string; rows?: number; maxlength?: number; placeholder?: string; id?: string; ariaLabel?: string }>()
</script>

<template>
  <textarea
    :id="id"
    v-model="model"
    :rows="rows ?? 3"
    :maxlength="maxlength"
    :placeholder="placeholder"
    :aria-label="ariaLabel"
    :class="cn('min-h-20 w-full rounded-md border border-input bg-[hsl(var(--field))] px-3 py-2 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', $props.class)"
  />
</template>
