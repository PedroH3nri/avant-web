<script setup lang="ts">
/** Marca d'água do rodapé: o Ápice e "Avant by GroOne", discretos. */
import Mark from '@/components/ui/Mark.vue'
import { t } from '@/lib/i18n'
</script>

<template>
  <span class="inline-flex items-center gap-1.5 text-[12px] font-medium text-muted-foreground">
    <Mark :size="14" bare />{{ t('brand.signature') }}
  </span>
</template>
