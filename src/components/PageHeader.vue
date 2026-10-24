<script setup lang="ts">
/** Cabeçalho das telas: título e subtítulo opcional. */
defineProps<{ title: string; sub?: string }>()
</script>

<template>
  <div class="border-b bg-background">
    <div class="mx-auto flex max-w-[1200px] flex-wrap items-end justify-between gap-x-6 gap-y-4 px-4 py-10 sm:px-6">
      <div class="min-w-0 max-w-[64ch]">
        <slot name="back" />
        <h1 class="text-[32px] font-semibold leading-tight tracking-[-0.04em]">{{ title }}</h1>
        <p v-if="sub" class="mt-2 text-[15px] text-muted-foreground">{{ sub }}</p>
      </div>
      <div v-if="$slots.actions" class="flex flex-wrap gap-2"><slot name="actions" /></div>
    </div>
  </div>
</template>
