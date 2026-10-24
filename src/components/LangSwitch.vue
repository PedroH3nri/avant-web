<script setup lang="ts">
/** Botões para trocar o idioma do painel (PT, EN, ES). */
import { cn } from '@/lib/utils'
import { chooseLang, lang, t } from '@/lib/i18n'
import type { Lang } from '@/lib/types'

defineProps<{ class?: string }>()
const langs: Lang[] = ['pt', 'en', 'es']
</script>

<template>
  <div :class="cn('flex items-center rounded-md border bg-background p-0.5', $props.class)" role="group" :aria-label="t('top.lang')">
    <button
      v-for="option in langs"
      :key="option"
      type="button"
      :aria-pressed="lang === option"
      :class="
        cn(
          'h-7 flex-1 rounded-[4px] px-2 text-[12px] font-medium uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          lang === option ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground',
        )
      "
      @click="chooseLang(option)"
    >
      {{ option }}
    </button>
  </div>
</template>
