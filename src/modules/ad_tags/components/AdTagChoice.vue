<script setup lang="ts">
/** Opções em cartões com rádio, uma marcada: cada uma com título e uma linha do que acontece. */
const model = defineModel<string>({ required: true })
defineProps<{ label: string; options: { value: string; title: string; hint: string }[]; disabled?: boolean }>()
</script>

<template>
  <div role="radiogroup" :aria-label="label" class="grid gap-2 sm:grid-cols-2">
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      role="radio"
      :aria-checked="model === option.value"
      :disabled="disabled"
      :class="['flex items-start gap-3 rounded-lg border px-3 py-2.5 text-left transition-colors hover:bg-accent disabled:pointer-events-none disabled:opacity-60', model === option.value && 'border-foreground ring-1 ring-foreground']"
      @click="model = option.value"
    >
      <span :class="['mt-0.5 grid size-4 shrink-0 place-items-center rounded-full border', model === option.value ? 'border-foreground' : 'border-input']" aria-hidden="true">
        <span v-if="model === option.value" class="size-2 rounded-full bg-foreground" />
      </span>
      <span class="min-w-0">
        <span class="block text-[14px] font-medium">{{ option.title }}</span>
        <span class="block text-[12px] text-muted-foreground">{{ option.hint }}</span>
      </span>
    </button>
  </div>
</template>
