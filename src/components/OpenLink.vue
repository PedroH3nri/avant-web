<script setup lang="ts">
/** Botão "Abrir" na última coluna de uma tabela: leva ao detalhe do registro da linha. */
import type { RouteLocationRaw } from 'vue-router'
import { ChevronRight } from 'lucide-vue-next'
import { t } from '@/lib/i18n'

defineProps<{ to: RouteLocationRaw; name?: string }>()
</script>

<template>
  <RouterLink
    :to="to"
    :aria-label="name ? t('common.openNamed', { name }) : undefined"
    class="inline-flex h-8 shrink-0 items-center gap-1 whitespace-nowrap rounded-md border bg-background pl-3 pr-2 text-[13px] font-medium transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&_svg]:size-4"
    @click.stop
  >
    {{ t('common.open') }}<ChevronRight aria-hidden="true" />
  </RouterLink>
</template>
