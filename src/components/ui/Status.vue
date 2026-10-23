<script setup lang="ts">
/** Estado é um ponto mais uma palavra; nunca só a cor. */
defineProps<{ tone: 'ok' | 'warn' | 'bad' | 'ochre' | 'neutral' }>()
const dot = { ok: 'bg-ok', warn: 'bg-warn', bad: 'bg-bad', ochre: 'bg-ochre', neutral: 'bg-muted-foreground/60' }
</script>

<template>
  <span class="inline-flex items-center gap-2 whitespace-nowrap text-[13px]">
    <span :class="['h-2 w-2 rounded-full', dot[tone]]" aria-hidden="true" />
    <slot />
  </span>
</template>
