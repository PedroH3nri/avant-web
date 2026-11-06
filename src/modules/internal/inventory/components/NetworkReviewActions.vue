<script setup lang="ts">
/** Confirmar ou recusar a network do MCM que o cliente cadastrou, para a equipe Groone. */
import { ref } from 'vue'
import { toast } from 'vue-sonner'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import Button from '@/components/ui/Button.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { clientInventoryService } from '@/modules/internal/inventory/service'

const props = defineProps<{ networkId: string; networkCode: string; clientName: string }>()
const emit = defineEmits<{ changed: [] }>()
const busy = ref(false)
const rejectOpen = ref(false)

/** Mostra o erro da API num aviso. */
function showError(error: unknown) {
  toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
}

/** Confirma que a network é do cliente; a API agenda o teste. */
async function confirm() {
  busy.value = true
  try {
    await clientInventoryService.confirm(props.networkId)
    toast.success(t('inv.confirmed'))
    emit('changed')
  } catch (error) {
    showError(error)
  } finally {
    busy.value = false
  }
}

/** Recusa a network e libera o código. */
async function reject() {
  busy.value = true
  try {
    await clientInventoryService.reject(props.networkId)
    rejectOpen.value = false
    toast.success(t('inv.rejected'))
    emit('changed')
  } catch (error) {
    showError(error)
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <div class="flex justify-end gap-2">
    <Button size="sm" variant="outline" :disabled="busy" @click="rejectOpen = true">{{ t('inv.reject') }}</Button>
    <Button size="sm" :loading="busy && !rejectOpen" :disabled="busy" @click="confirm">{{ t('inv.confirm') }}</Button>
  </div>
  <ConfirmDialog
    v-model:open="rejectOpen"
    :title="t('inv.rejectTitle', { code: networkCode })"
    :desc="t('inv.rejectDesc', { client: clientName })"
    :action="t('inv.reject')"
    :busy="busy"
    @confirm="reject"
  />
</template>
