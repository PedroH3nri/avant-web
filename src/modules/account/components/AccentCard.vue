<script setup lang="ts">
/** Cartão da cor do sistema da pessoa: muda na hora e fica guardada na conta. */
import { computed } from 'vue'
import { toast } from 'vue-sonner'
import { Check } from 'lucide-vue-next'
import { RadioGroupItem, RadioGroupRoot } from 'reka-ui'
import Card from '@/components/ui/Card.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { ACCENTS, type AccentId } from '@/lib/theme'
import { cn } from '@/lib/utils'
import { useSession } from '@/stores/session'

const session = useSession()
const accent = computed(() => session.me?.accent ?? 'default')

/** Aplica a cor escolhida e guarda na conta; se a API recusar, a anterior volta. */
async function choose(value: unknown) {
  try {
    await session.setAppearance({ accent: value as AccentId })
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}
</script>

<template>
  <Card :title="t('set.accent')" :desc="t('set.accentDesc')">
    <RadioGroupRoot :model-value="accent" class="flex flex-wrap gap-2" :aria-label="t('set.accent')" @update:model-value="choose">
      <RadioGroupItem
        v-for="accentOption in ACCENTS"
        :key="accentOption.id"
        :value="accentOption.id"
        :class="
          cn(
            'flex h-10 items-center gap-2 rounded-md border bg-background px-3 text-[14px] hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            accent === accentOption.id && 'border-foreground',
          )
        "
      >
        <span class="h-4 w-4 rounded-full ring-1 ring-inset ring-foreground/10" :style="{ background: accentOption.id === 'default' ? 'hsl(var(--foreground))' : accentOption.hex }" />
        {{ t(`accent.${accentOption.id}`) }}
        <Check v-if="accent === accentOption.id" class="h-3.5 w-3.5" aria-hidden="true" />
      </RadioGroupItem>
    </RadioGroupRoot>
    <template #note>{{ t('set.accentNote') }}</template>
  </Card>
</template>
