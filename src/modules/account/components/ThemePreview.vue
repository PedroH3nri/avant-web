<script setup lang="ts">
/** Miniatura de um tema personalizado: menu lateral, fundo e um cartão com texto, campo e rodapé com o
 * botão principal, já com as cores compostas (a opacidade aparece como no painel). */
import { computed } from 'vue'
import { themeVariables, type ThemeColors } from '@/lib/customTheme'
import { cn } from '@/lib/utils'

const props = defineProps<{ colors: ThemeColors; large?: boolean; class?: string }>()
const variables = computed(() => themeVariables(props.colors))
</script>

<template>
  <span
    :class="cn('flex overflow-hidden rounded-md border', large ? 'h-40' : 'h-16', props.class)"
    :style="{ background: variables.background, borderColor: variables.border }"
    aria-hidden="true"
  >
    <span :class="cn('grid shrink-0 content-start', large ? 'w-16 gap-2 p-3' : 'w-6 gap-1 p-1.5')" :style="{ background: variables.sidebar }">
      <span class="block h-1.5 rounded-full" :style="{ background: variables['sidebar-foreground'] }" />
      <span class="block h-1.5 rounded-full opacity-60" :style="{ background: variables['sidebar-muted'] }" />
      <span v-if="large" class="block h-1.5 rounded-full opacity-60" :style="{ background: variables['sidebar-muted'] }" />
    </span>
    <span :class="cn('grid min-w-0 flex-1 content-start', large ? 'gap-3 p-4' : 'gap-1.5 p-2')">
      <span :class="cn('block rounded-full', large ? 'h-2.5 w-24' : 'h-2 w-10')" :style="{ background: variables.foreground }" />
      <span class="grid overflow-hidden rounded-md border" :style="{ background: variables.card, borderColor: variables.border }">
        <span :class="cn('grid content-start', large ? 'gap-2 p-3' : 'gap-1 p-1.5')">
          <span :class="cn('block rounded-full', large ? 'h-2 w-32' : 'h-1.5 w-12')" :style="{ background: variables['muted-foreground'] }" />
          <span
            v-if="large"
            class="block h-5 rounded border"
            :style="{ background: variables.field, borderColor: variables.input }"
          />
        </span>
        <span
          :class="cn('flex justify-end border-t', large ? 'px-3 py-2' : 'px-1.5 py-1')"
          :style="{ background: variables['card-footer'], borderColor: variables.border }"
        >
          <span
            :class="cn('block rounded', large ? 'h-5 w-16' : 'h-2 w-8')"
            :style="{ background: variables.primary, boxShadow: `inset 0 0 0 1px ${variables['primary-foreground']}22` }"
          />
        </span>
      </span>
    </span>
  </span>
</template>
