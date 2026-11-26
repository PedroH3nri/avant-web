<script setup lang="ts">
/** Onde a pessoa quer animação de hover e foco: campos e selects, botões e cards de relatório. Cada
 * chave salva na hora e vale em todas as Empresas e navegadores da pessoa. */
import { computed } from 'vue'
import { toast } from 'vue-sonner'
import Card from '@/components/ui/Card.vue'
import Switch from '@/components/ui/Switch.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { ANIMATION_AREAS } from '@/lib/theme'
import type { AnimationArea } from '@/lib/types'
import { useSession } from '@/stores/session'

const session = useSession()
const enabled = computed(() => session.me?.animations ?? ANIMATION_AREAS)

/** Liga ou desliga a animação de uma área e salva na conta. */
async function toggle(area: AnimationArea, on: boolean) {
  const chosen = ANIMATION_AREAS.filter((item) => (item === area ? on : enabled.value.includes(item)))
  try {
    await session.setAppearance({ animations: chosen })
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}
</script>

<template>
  <Card :title="t('motion.title')" :desc="t('motion.desc')">
    <ul class="grid divide-y rounded-lg border">
      <li v-for="area in ANIMATION_AREAS" :key="area" class="flex items-center justify-between gap-4 px-4 py-3">
        <div class="min-w-0">
          <p class="text-[14px] font-medium">{{ t(`motion.${area}`) }}</p>
          <p class="text-[13px] text-muted-foreground">{{ t(`motion.${area}Desc`) }}</p>
        </div>
        <Switch
          :id="`motion-${area}`"
          :label="t(`motion.${area}`)"
          :model-value="enabled.includes(area)"
          @update:model-value="toggle(area, $event)"
        />
      </li>
    </ul>
  </Card>
</template>
