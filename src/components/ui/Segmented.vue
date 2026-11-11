<script setup lang="ts">
/** Escolha entre poucas opções lado a lado (grupo de rádio), como "Automática | Cascata | Sem regra" ou os degraus 1, 2 e 3; `note` marca uma opção com um texto curto. */
import { cn } from '@/lib/utils'

const model = defineModel<string>({ required: true })
defineProps<{ options: { value: string; label: string; note?: string }[]; label: string; disabled?: boolean; class?: string }>()
</script>

<template>
  <div :class="cn('inline-flex w-fit shrink-0 self-start justify-self-start rounded-md border bg-card p-0.5', $props.class)" role="radiogroup" :aria-label="label">
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      role="radio"
      :aria-checked="model === option.value"
      :disabled="disabled"
      :class="[
        'h-7 min-w-10 rounded-[4px] px-3 text-[13px] font-medium tnum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
        model === option.value ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground',
      ]"
      @click="model = option.value"
    >
      {{ option.label }}
      <span v-if="option.note" class="ml-1 text-[11px] font-normal text-muted-foreground">{{ option.note }}</span>
    </button>
  </div>
</template>
