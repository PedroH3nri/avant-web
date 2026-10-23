<script setup lang="ts">
/** Caixa de seleção com rótulo ao lado; o clique no texto também marca. */
const model = defineModel<boolean>({ default: false })
defineProps<{ id: string; label: string; hint?: string; disabled?: boolean }>()
</script>

<template>
  <label :for="id" class="flex items-start gap-2.5 text-[14px]" :class="disabled ? 'opacity-50' : 'cursor-pointer'">
    <input
      :id="id"
      v-model="model"
      type="checkbox"
      :disabled="disabled"
      class="mt-0.5 size-4 shrink-0 rounded-[4px] border-input accent-[hsl(var(--foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    />
    <span class="min-w-0">
      <span class="block">{{ label }}</span>
      <span v-if="hint" class="block text-[13px] text-muted-foreground">{{ hint }}</span>
    </span>
  </label>
</template>
