<script setup lang="ts">
/** Cartão do tema (Claro, Escuro, Sistema) com uma prévia de cada opção, como no protótipo. */
import { toast } from 'vue-sonner'
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from 'reka-ui'
import Card from '@/components/ui/Card.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { theme, THEMES, type Theme } from '@/lib/theme'
import { cn } from '@/lib/utils'
import { useSession } from '@/stores/session'

const session = useSession()

/** Fundo da prévia de cada tema; o do sistema mostra metade clara e metade escura. */
function previewClass(option: Theme): string {
  if (option === 'dark') return 'bg-neutral-950'
  if (option === 'light') return 'bg-white'
  return 'bg-gradient-to-r from-white from-50% to-neutral-950 to-50%'
}

/** Aplica o tema na hora e guarda na conta, para valer em qualquer navegador. */
async function choose(value: unknown) {
  try {
    await session.setAppearance({ theme: value as Theme })
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}
</script>

<template>
  <Card :title="t('set.theme')" :desc="t('set.themeDesc')">
    <RadioGroupRoot :model-value="theme" class="grid gap-3 sm:grid-cols-3" :aria-label="t('set.theme')" @update:model-value="choose">
      <RadioGroupItem
        v-for="themeOption in THEMES"
        :key="themeOption"
        :value="themeOption"
        :class="
          cn(
            'grid cursor-pointer gap-3 rounded-lg border bg-background p-3 text-left hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            theme === themeOption && 'border-foreground',
          )
        "
      >
        <span :class="cn('block h-16 overflow-hidden rounded-md border', previewClass(themeOption))" aria-hidden="true">
          <span :class="cn('mx-2 mt-2 block h-2 w-10 rounded-full', themeOption === 'dark' ? 'bg-neutral-700' : 'bg-neutral-200')" />
          <span :class="cn('mx-2 mt-1.5 block h-2 w-16 rounded-full', themeOption === 'dark' ? 'bg-neutral-800' : 'bg-neutral-100')" />
        </span>
        <span class="flex items-center gap-2 text-[14px]">
          <span class="grid h-4 w-4 place-items-center rounded-full border border-foreground/40">
            <RadioGroupIndicator class="h-2 w-2 rounded-full bg-foreground" />
          </span>
          {{ t(`set.theme.${themeOption}`) }}
        </span>
      </RadioGroupItem>
    </RadioGroupRoot>
  </Card>
</template>
