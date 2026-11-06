<script setup lang="ts">
/** As networks de um cliente na página dele, com o cadastro pela equipe e a confirmação das que o cliente cadastrou. */
import { computed, onMounted, ref, watch } from 'vue'
import { Plus } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import LoadError from '@/components/LoadError.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Status from '@/components/ui/Status.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { latestCall } from '@/lib/latest'
import { td, th } from '@/lib/table'
import NetworkReviewActions from '@/modules/internal/inventory/components/NetworkReviewActions.vue'
import { clientInventoryService } from '@/modules/internal/inventory/service'
import type { ClientNetwork } from '@/modules/internal/inventory/types'
import { networkName, networkTone, statusKey, validCode } from '@/modules/networks/rules'
import { useSession } from '@/stores/session'

const props = defineProps<{ clientId: string; clientName: string }>()
const session = useSession()
const canAssign = computed(() => session.can('internal.networks.assign'))
const networks = ref<ClientNetwork[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)
const addOpen = ref(false)
const code = ref('')
const addBusy = ref(false)
const addError = ref<string | null>(null)
const valid = computed(() => validCode(code.value))

const networksCall = latestCall()
/** Busca a página atual das networks do cliente. */
async function load() {
  loadError.value = null
  try {
    const found = await networksCall(() => clientInventoryService.networks({ page: page.value, client_id: props.clientId }))
    if (!found) return
    networks.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)
watch(page, load)

/** Abre o diálogo de cadastro limpo. */
function openAdd() {
  code.value = ''
  addError.value = null
  addOpen.value = true
}

/** Cadastra a network digitada no cliente; a API agenda o teste. */
async function add() {
  if (!valid.value || addBusy.value) return
  addBusy.value = true
  addError.value = null
  try {
    await clientInventoryService.register(props.clientId, code.value)
    addOpen.value = false
    toast.success(t('inv.addNetworkDone'))
    page.value = 1
    await load()
  } catch (error) {
    addError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  } finally {
    addBusy.value = false
  }
}
</script>

<template>
  <Card :title="t('inv.clientNetworks')" :desc="t('inv.clientNetworksDesc')" class="!max-w-none lg:col-span-2">
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <p v-else-if="networks?.length === 0" class="text-[14px] text-muted-foreground">{{ t('inv.clientNetworksNone') }}</p>
    <DataTable v-else :min="640">
      <thead>
        <tr>
          <th :class="th">{{ t('net.col.network') }}</th>
          <th :class="th">{{ t('net.col.status') }}</th>
          <th :class="[th, 'text-right']">{{ t('net.col.sites') }}</th>
          <th :class="th"><span class="sr-only">{{ t('team.actions') }}</span></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="network in networks ?? []" :key="network.id" class="hover:bg-muted">
          <td :class="td">
            <div class="font-medium">{{ networkName(network) }}</div>
            <div class="tnum font-mono text-[13px] text-muted-foreground">{{ network.network_code }}</div>
          </td>
          <td :class="td">
            <Status :tone="networkTone(network)">{{ t(statusKey(network)) }}</Status>
            <div v-if="network.mcm_email" class="mt-1 text-[13px] text-muted-foreground">{{ t('inv.mcmEmail', { email: network.mcm_email }) }}</div>
          </td>
          <td :class="[td, 'tnum text-right']">{{ network.sites }}</td>
          <td :class="td">
            <NetworkReviewActions
              v-if="canAssign && network.awaiting_confirmation"
              :network-id="network.id"
              :network-code="network.network_code"
              :client-name="clientName"
              @changed="load"
            />
          </td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError && pages > 1" v-model:page="page" :total="total" :pages="pages" class="mt-4" />
    <template v-if="canAssign" #footer>
      <Button size="sm" variant="outline" @click="openAdd"><Plus />{{ t('inv.addNetwork') }}</Button>
    </template>
  </Card>
  <Dialog v-model:open="addOpen" :title="t('inv.addNetwork')" :desc="t('inv.addNetworkDesc', { client: clientName })">
    <form id="client-network-form" novalidate @submit.prevent="add">
      <Field id="client-net-code" :label="t('net.col.code')" :error="code.length > 0 && !valid ? t('wiz.codeError') : (addError ?? undefined)">
        <Input
          id="client-net-code"
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
      <Button type="submit" form="client-network-form" :loading="addBusy" :disabled="!valid">{{ t('inv.addNetwork') }}</Button>
    </template>
  </Dialog>
</template>
