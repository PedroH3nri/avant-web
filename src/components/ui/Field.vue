<script setup lang="ts">
/** Rótulo em cima, dica ou erro embaixo (DESIGN.md: o erro diz o que está errado e como resolver). */
defineProps<{ id: string; label: string; hint?: string; error?: string | false | null }>()
</script>

<template>
  <div class="grid min-w-0 content-start gap-2">
    <label :for="id" class="text-[13px] font-medium text-muted-foreground">{{ label }}</label>
    <slot />
    <p v-if="error" :id="`${id}-error`" class="text-[13px] text-bad">{{ error }}</p>
    <p v-else-if="hint" class="text-[13px] text-muted-foreground">{{ hint }}</p>
  </div>
</template>
