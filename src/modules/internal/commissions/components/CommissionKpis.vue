<script setup lang="ts">
/** Quatro números do mês em grade, cada um com o rótulo e uma dica embaixo. */
import StatTile from '@/components/StatTile.vue'

defineProps<{ items: { label: string; value: string; hint: string }[] }>()
</script>

<template>
  <div class="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border lg:grid-cols-4">
    <StatTile v-for="item in items" :key="item.label" :label="item.label" :value="item.value" :hint="item.hint" />
  </div>
</template>
