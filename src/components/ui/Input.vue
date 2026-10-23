<script setup lang="ts">
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })
const model = defineModel<string>({ default: '' })
defineProps<{ class?: string; invalid?: boolean }>()
</script>

<template>
  <input
    v-model="model"
    v-bind="$attrs"
    :aria-invalid="invalid || undefined"
    :class="
      cn(
        'flex h-10 w-full min-w-0 rounded-md border border-input bg-background px-3 text-[14px] placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 aria-[invalid=true]:border-bad',
        $props.class,
      )
    "
  />
</template>
