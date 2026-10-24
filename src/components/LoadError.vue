<script setup lang="ts">
/** Aviso de falha ao carregar, com botão para tentar de novo. */
import { AlertTriangle } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import { t } from '@/lib/i18n'

defineProps<{ message: string }>()
defineEmits<{ retry: [] }>()
</script>

<template>
  <div class="flex items-start gap-3 rounded-lg border border-bad/25 bg-card p-4" role="alert">
    <AlertTriangle class="mt-0.5 size-4 shrink-0 text-bad" aria-hidden="true" />
    <p class="min-w-0 flex-1 text-[14px]">
      <span class="font-medium">{{ t('common.loadFailed') }}</span> <span class="text-muted-foreground">{{ message }}</span>
    </p>
    <Button size="sm" variant="outline" @click="$emit('retry')">{{ t('common.retry') }}</Button>
  </div>
</template>
