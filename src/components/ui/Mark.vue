<script setup lang="ts">
/** Monograma provisório até existir o logo. */
withDefaults(defineProps<{ size?: number }>(), { size: 28 })
</script>

<template>
  <svg viewBox="0 0 32 32" :width="size" :height="size" aria-hidden="true" class="shrink-0">
    <rect width="32" height="32" rx="7" fill="hsl(var(--primary))" />
    <path
      d="M9.5 23L16 8.5L22.5 23M12 17.5H20"
      fill="none"
      stroke="hsl(var(--primary-foreground))"
      stroke-width="2.6"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
