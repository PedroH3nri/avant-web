<script setup lang="ts">
/** Botões para trocar o idioma do painel (PT, EN, ES). Com sessão, o idioma fica guardado na conta. */
import { toast } from 'vue-sonner'
import { ApiError } from '@/lib/api'
import { cn } from '@/lib/utils'
import { chooseLang, errorText, lang, t } from '@/lib/i18n'
import type { Lang } from '@/lib/types'
import { useSession } from '@/stores/session'

defineProps<{ class?: string }>()
const session = useSession()
const langs: Lang[] = ['pt', 'en', 'es']

/** Troca o idioma na hora; com sessão, guarda na conta (e-mails também seguem esse idioma). */
async function choose(option: Lang) {
  if (!session.me) {
    chooseLang(option)
    return
  }
  try {
    await session.setAppearance({ locale: option })
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}
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
      @click="choose(option)"
    >
      {{ option }}
    </button>
  </div>
</template>
