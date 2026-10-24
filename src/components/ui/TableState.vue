<script setup lang="ts">
/**
 * Linhas de carregando e de vazio dentro do ``<tbody>`` de uma ``DataTable``: a tabela fica
 * sempre na tela, com o cabeçalho, mesmo sem dados. Com ``loading`` ou ``empty`` falsos,
 * não desenha nada e as linhas de verdade aparecem.
 */
import type { Component } from 'vue'
import { t } from '@/lib/i18n'

withDefaults(
  defineProps<{ cols: number; loading?: boolean; empty?: boolean; icon?: Component; title?: string; desc?: string; rows?: number }>(),
  { loading: false, empty: false, rows: 3 },
)
</script>

<template>
  <template v-if="loading">
    <tr v-for="r in rows" :key="r" aria-hidden="true">
      <td v-for="c in cols" :key="c" class="border-b px-4 py-3">
        <span class="block h-4 animate-pulse rounded bg-muted" :style="{ width: `${c === 1 ? 60 : 40}%` }" />
      </td>
    </tr>
    <tr class="sr-only">
      <td :colspan="cols" role="status">{{ t('common.loading') }}</td>
    </tr>
  </template>
  <tr v-else-if="empty">
    <td :colspan="cols" class="px-4 py-12">
      <div class="mx-auto flex max-w-[52ch] flex-col items-center gap-3 text-center">
        <span v-if="icon" class="flex size-10 items-center justify-center rounded-full border text-muted-foreground">
          <component :is="icon" class="size-4" />
        </span>
        <div>
          <div v-if="title" class="font-medium">{{ title }}</div>
          <p v-if="desc" class="mt-1 text-[14px] text-muted-foreground">{{ desc }}</p>
        </div>
        <div v-if="$slots.default" class="mt-1 flex flex-wrap justify-center gap-2"><slot /></div>
      </div>
    </td>
  </tr>
</template>
