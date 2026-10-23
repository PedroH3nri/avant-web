<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })
const model = defineModel<string>({ default: '' })
defineProps<{ options: { value: string; label: string }[]; class?: string }>()
</script>

<template>
  <div :class="cn('relative', $props.class)">
    <select
      v-model="model"
      v-bind="$attrs"
      class="h-10 w-full appearance-none rounded-md border border-input bg-background pl-3 pr-9 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
    >
      <option v-for="o in options" :key="o.value" :value="o.value">{{ o.label }}</option>
    </select>
    <ChevronDown class="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
  </div>
</template>
