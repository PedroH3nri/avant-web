<script setup lang="ts">
/** Interruptor de ligar e desligar, com o nome lido pelo leitor de tela. */
const model = defineModel<boolean>({ default: false })
defineProps<{ id?: string; label: string; disabled?: boolean }>()
</script>

<template>
  <button
    :id="id"
    type="button"
    role="switch"
    :aria-checked="model"
    :aria-label="label"
    :disabled="disabled"
    :class="[
      'inline-flex h-6 w-11 shrink-0 items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
      model ? 'bg-primary' : 'bg-input',
    ]"
    @click="model = !model"
  >
    <span :class="['block size-5 rounded-full bg-background shadow-sm transition-transform', model ? 'translate-x-5' : 'translate-x-0']" />
  </button>
</template>
