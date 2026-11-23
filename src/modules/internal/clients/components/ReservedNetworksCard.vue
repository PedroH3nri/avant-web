<script setup lang="ts">
/** Os network codes guardados num cliente que ainda não criou a Empresa, com guardar e tirar pela equipe. */
import { computed, ref } from 'vue'
import { Plus, Trash2 } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, t } from '@/lib/i18n'
import { validCode } from '@/modules/networks/rules'
import { clientService } from '@/modules/internal/clients/service'
import type { ReservedNetwork } from '@/modules/internal/clients/types'
import { useSession } from '@/stores/session'

const props = defineProps<{ clientId: string; clientName: string; networks: ReservedNetwork[] }>()
const emit = defineEmits<{ changed: [] }>()
const session = useSession()
const canAssign = computed(() => session.can('internal.networks.assign'))
const addOpen = ref(false)
const code = ref('')
const addBusy = ref(false)
const addError = ref<string | null>(null)
const valid = computed(() => validCode(code.value))
const removing = ref<ReservedNetwork | null>(null)
const removeBusy = ref(false)
const removeOpen = computed({ get: () => removing.value !== null, set: (value) => !value && (removing.value = null) })

/** Abre o diálogo de guardar limpo. */
function openAdd() {
  code.value = ''
  addError.value = null
  addOpen.value = true
}

/** Guarda o network code digitado no cliente. */
async function add() {
  if (!valid.value || addBusy.value) return
  addBusy.value = true
  addError.value = null
  try {
    await clientService.reserveNetwork(props.clientId, code.value)
    addOpen.value = false
    toast.success(t('int.reservedAdded'))
    emit('changed')
  } catch (error) {
    addError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  } finally {
    addBusy.value = false
  }
}

/** Tira do cliente a network escolhida no diálogo. */
async function remove() {
  const current = removing.value
  if (!current) return
  removeBusy.value = true
  try {
    await clientService.unreserveNetwork(current.id)
    removing.value = null
    toast.success(t('int.reservedRemoved'))
    emit('changed')
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    removeBusy.value = false
  }
}
</script>

<template>
  <Card :title="t('int.reservedTitle')" :desc="t('int.reservedDesc')">
    <p v-if="!networks.length" class="text-[14px] text-muted-foreground">{{ t('int.reservedNone') }}</p>
    <ul v-else class="-my-2 divide-y">
      <li v-for="network in networks" :key="network.id" class="flex items-center gap-3 py-2 text-[14px]">
        <span class="tnum flex-1 font-mono">{{ network.network_code }}</span>
        <time class="tnum text-[13px] text-muted-foreground" :datetime="network.created_at">{{ formatDate(network.created_at) }}</time>
        <Button v-if="canAssign" size="icon" variant="ghost" :aria-label="t('common.remove')" @click="removing = network"><Trash2 /></Button>
      </li>
    </ul>
    <template v-if="canAssign" #footer>
      <Button size="sm" variant="outline" @click="openAdd"><Plus />{{ t('int.reservedAdd') }}</Button>
    </template>
  </Card>
  <Dialog v-model:open="addOpen" :title="t('int.reservedAdd')" :desc="t('inv.addNetworkDesc', { client: clientName })">
    <form id="reserved-network-form" novalidate @submit.prevent="add">
      <Field id="reserved-net-code" :label="t('net.col.code')" :error="code.length > 0 && !valid ? t('wiz.codeError') : (addError ?? undefined)">
        <Input
          id="reserved-net-code"
          :model-value="code"
          inputmode="numeric"
          class="font-mono tnum"
          maxlength="20"
          :invalid="code.length > 0 && !valid"
          @update:model-value="(value: string) => (code = value.replace(/\D/g, ''))"
        />
      </Field>
    </form>
    <template #footer>
      <Button variant="outline" @click="addOpen = false">{{ t('common.cancel') }}</Button>
      <Button type="submit" form="reserved-network-form" :loading="addBusy" :disabled="!valid">{{ t('int.reservedAdd') }}</Button>
    </template>
  </Dialog>
  <ConfirmDialog
    v-model:open="removeOpen"
    :title="t('int.reservedRemoveTitle', { code: removing?.network_code ?? '' })"
    :desc="t('int.reservedRemoveDesc')"
    :action="t('common.remove')"
    :busy="removeBusy"
    @confirm="remove"
  />
</template>
