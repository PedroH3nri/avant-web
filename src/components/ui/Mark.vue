<script setup lang="ts">
/** Marca do Avant (Ápice): A sem travessa com o ponto no lugar dela, sempre em preto e branco. */
withDefaults(defineProps<{ size?: number; bare?: boolean }>(), { size: 28, bare: false })
</script>

<template>
  <svg viewBox="0 0 32 32" :width="size" :height="size" aria-hidden="true" class="shrink-0">
    <template v-if="bare">
      <path d="M7 25L16 7.5L25 25" fill="none" stroke="currentColor" stroke-width="3.4" stroke-miterlimit="10" />
      <circle cx="16" cy="19.4" r="2.5" fill="currentColor" />
    </template>
    <template v-else>
      <rect width="32" height="32" rx="7.2" fill="hsl(var(--foreground))" />
      <g transform="translate(3.52 3.52) scale(0.78)">
        <path d="M7 25L16 7.5L25 25" fill="none" stroke="hsl(var(--background))" stroke-width="3.4" stroke-miterlimit="10" />
        <circle cx="16" cy="19.4" r="2.5" fill="hsl(var(--background))" />
      </g>
    </template>
  </svg>
</template>
