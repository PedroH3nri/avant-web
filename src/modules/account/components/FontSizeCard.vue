<script setup lang="ts">
/** Tamanho do texto do painel: padrão, grande ou maior. Salva na hora e vale em todas as
 * Empresas e navegadores da pessoa; ajuda em telas grandes, como ultrawide. */
import { computed } from 'vue'
import { toast } from 'vue-sonner'
import Card from '@/components/ui/Card.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { FONT_SIZES } from '@/lib/theme'
import type { FontSize } from '@/lib/types'
import { cn } from '@/lib/utils'
import { useSession } from '@/stores/session'

const session = useSession()
const chosen = computed<FontSize>(() => session.me?.font_size ?? 'default')
/** O tamanho do "Aa" de cada opção, para mostrar a diferença. */
const SAMPLE_CLASS: Record<FontSize, string> = { default: 'text-[16px]', large: 'text-[19px]', larger: 'text-[22px]' }

/** Troca o tamanho do texto e salva na conta; se a API recusar, volta o anterior. */
async function choose(size: FontSize) {
  if (size === chosen.value) return
  try {
    await session.setAppearance({ font_size: size })
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}
</script>

<template>
  <Card :title="t('fontSize.title')" :desc="t('fontSize.desc')">
    <div role="radiogroup" :aria-label="t('fontSize.title')" class="grid gap-2 sm:grid-cols-3">
      <button
        v-for="size in FONT_SIZES"
        :key="size"
        type="button"
        role="radio"
        :aria-checked="chosen === size"
        :class="cn('btn-motion flex items-center gap-3 rounded-lg border bg-[hsl(var(--field))] px-4 py-3 text-left transition-colors hover:bg-accent', chosen === size && 'border-foreground ring-1 ring-foreground')"
        @click="choose(size)"
      >
        <span :class="cn('w-8 shrink-0 font-semibold leading-none', SAMPLE_CLASS[size])" aria-hidden="true">Aa</span>
        <span class="text-[14px] font-medium">{{ t(`fontSize.${size}`) }}</span>
      </button>
    </div>
  </Card>
</template>
