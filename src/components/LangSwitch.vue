<script setup lang="ts">
import { cn } from '@/lib/utils'
import { chooseLang, lang, t } from '@/lib/i18n'
import type { Lang } from '@/lib/types'

defineProps<{ class?: string }>()
const langs: Lang[] = ['pt', 'en', 'es']
</script>

<template>
  <div :class="cn('flex items-center rounded-md border bg-background p-0.5', $props.class)" role="group" :aria-label="t('top.lang')">
    <button
      v-for="l in langs"
      :key="l"
      type="button"
      :aria-pressed="lang === l"
      :class="
        cn(
          'h-7 flex-1 rounded-[4px] px-2 text-[12px] font-medium uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          lang === l ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground',
        )
      "
      @click="chooseLang(l)"
    >
      {{ l }}
    </button>
  </div>
</template>
