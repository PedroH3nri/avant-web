<script setup lang="ts">
/** A barra de uma tabela: no painel interno com as visões salvas da tela, no do cliente só os filtros. */
import SavedViewsBar from '@/modules/views/components/SavedViewsBar.vue'
import type { ViewDefinition, ViewScreen } from '@/modules/views/types'

defineProps<{ screen: ViewScreen | null; defaultLabel: string; current: ViewDefinition; defaults: ViewDefinition }>()
const emit = defineEmits<{ apply: [definition: ViewDefinition] }>()
</script>

<template>
  <SavedViewsBar v-if="screen" :screen="screen" :default-label="defaultLabel" :current="current" :defaults="defaults" @apply="emit('apply', $event)">
    <slot />
  </SavedViewsBar>
  <div v-else class="flex flex-wrap items-center gap-2"><slot /></div>
</template>
