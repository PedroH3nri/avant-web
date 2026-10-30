<script setup lang="ts">
/** Quatro números do mês em grade, cada um com o rótulo e uma dica embaixo. */
defineProps<{ items: { label: string; value: string; hint: string }[] }>()
</script>

<template>
  <div class="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border lg:grid-cols-4">
    <div v-for="item in items" :key="item.label" class="bg-card p-4">
      <div class="text-[13px] font-medium text-muted-foreground">{{ item.label }}</div>
      <div class="mt-1 text-[22px] font-semibold tracking-tight tnum">{{ item.value }}</div>
      <div class="mt-1 text-[12px] text-muted-foreground">{{ item.hint }}</div>
    </div>
  </div>
</template>
