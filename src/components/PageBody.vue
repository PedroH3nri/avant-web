<script setup lang="ts">
/** Área de conteúdo das telas, com a largura e o espaçamento padrão. */
import { PAGE_WIDTH } from '@/lib/layout'
import { cn } from '@/lib/utils'

defineProps<{ class?: string }>()
</script>

<template>
  <div class="flex-1 bg-muted">
    <div :class="cn('mx-auto grid content-start gap-6 px-4 py-8 sm:px-6 [&>*]:min-w-0', PAGE_WIDTH, $props.class)">
      <slot />
    </div>
  </div>
</template>
