<script setup lang="ts">
/** Confirmação de algo que não volta atrás (remover, apagar). */
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import { t } from '@/lib/i18n'

const open = defineModel<boolean>('open', { default: false })
defineProps<{ title: string; desc: string; action: string; busy?: boolean }>()
defineEmits<{ confirm: [] }>()
</script>

<template>
  <Dialog v-model:open="open" :title="title" :desc="desc">
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button variant="danger" :loading="busy" @click="$emit('confirm')">{{ action }}</Button>
    </template>
  </Dialog>
</template>
