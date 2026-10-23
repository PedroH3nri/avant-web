<script setup lang="ts">
import { DropdownMenuItem } from 'reka-ui'
import { cn } from '@/lib/utils'

defineProps<{ class?: string; danger?: boolean }>()
defineEmits<{ select: [event: Event] }>()
</script>

<template>
  <DropdownMenuItem
    :class="
      cn(
        'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-[14px] outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[disabled]:opacity-50 [&_svg]:size-4',
        danger && 'text-bad data-[highlighted]:text-bad',
        $props.class,
      )
    "
    @select="$emit('select', $event)"
  >
    <slot />
  </DropdownMenuItem>
</template>
