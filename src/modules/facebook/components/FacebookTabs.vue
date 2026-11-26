<script setup lang="ts">
/** Abas da tela do Facebook: Contas e perfis, Pessoas e limites (só quem gerencia), Avisos e Histórico. */
import { t, type Key } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export type FacebookTab = 'accounts' | 'people' | 'alerts' | 'history'

const model = defineModel<FacebookTab>({ required: true })
const props = defineProps<{ people: boolean; unread: number }>()

const TABS: { id: FacebookTab; key: Key }[] = [
  { id: 'accounts', key: 'fb.tab.accounts' },
  { id: 'people', key: 'fb.tab.people' },
  { id: 'alerts', key: 'fb.tab.alerts' },
  { id: 'history', key: 'fb.tab.history' },
]

/** As abas que a pessoa vê. */
const shown = () => TABS.filter((tab) => tab.id !== 'people' || props.people)
</script>

<template>
  <div class="flex w-fit max-w-full overflow-x-auto rounded-md border bg-card p-0.5" role="tablist" :aria-label="t('fb.tabs')">
    <button
      v-for="tab in shown()"
      :key="tab.id"
      type="button"
      role="tab"
      :aria-selected="model === tab.id"
      :class="
        cn(
          'inline-flex h-8 items-center gap-1.5 whitespace-nowrap rounded-[4px] px-3 text-[13px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          model === tab.id ? 'bg-secondary text-[hsl(var(--highlight))] transition-colors duration-200' : 'text-muted-foreground transition-colors duration-200 hover:bg-accent hover:text-[hsl(var(--highlight))]',
        )
      "
      @click="model = tab.id"
    >
      {{ t(tab.key) }}
      <span v-if="tab.id === 'alerts' && unread > 0" class="rounded-full bg-foreground px-1.5 text-[11px] text-background tnum">{{ unread }}</span>
    </button>
  </div>
</template>
