<script setup lang="ts">
/** Painel interno: networks MCM sem dono, para ligar ao cliente certo. */
import { computed, onMounted, ref } from 'vue'
import { toast } from 'vue-sonner'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import TableState from '@/components/ui/TableState.vue'
import { api, ApiError } from '@/lib/api'
import { errorText, formatDate, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import type { Client, Items, McmCandidate } from '@/lib/types'
import { useSession } from '@/stores/session'

const session = useSession()
const candidates = ref<McmCandidate[] | null>(null)
const clients = ref<Client[]>([])
const loadError = ref<string | null>(null)
const target = ref<McmCandidate | null>(null)
const clientId = ref('')
const busy = ref(false)
const open = computed({
  get: () => target.value !== null,
  set: (value) => {
    if (!value) target.value = null
  },
})

/** Carrega as networks do MCM sem Empresa e os clientes ativos. */
async function load() {
  loadError.value = null
  try {
    const [candidatePage, clientPage] = await Promise.all([
      api.get<Items<McmCandidate>>('/internal/networks/unassigned'),
      session.can('internal.clients.view') ? api.get<Items<Client>>('/internal/clients') : Promise.resolve({ items: [] as Client[], next_cursor: null }),
    ])
    candidates.value = candidatePage.items
    clients.value = clientPage.items.filter((client) => client.status === 'active')
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)

const options = computed(() => clients.value.map((client) => ({ value: client.id, label: `${client.name} (${client.owner.email})` })))

/** Abre o diálogo de atribuição, sugerindo o cliente do mesmo domínio. */
function start(mcmCandidate: McmCandidate) {
  // Sugere o cliente cujo dono tem o mesmo domínio de e-mail.
  const domain = mcmCandidate.email.split('@')[1]
  clientId.value = clients.value.find((client) => client.owner.email.endsWith(`@${domain}`))?.id ?? clients.value[0]?.id ?? ''
  target.value = mcmCandidate
}

/** Liga a network ao cliente escolhido. */
async function assign() {
  const current = target.value
  if (!current || !clientId.value) return
  busy.value = true
  try {
    await api.post(`/internal/networks/${current.id}/assign`, { company_id: clientId.value })
    const name = clients.value.find((client) => client.id === clientId.value)?.name ?? ''
    candidates.value = candidates.value?.filter((candidate) => candidate.id !== current.id) ?? null
    target.value = null
    toast.success(t('int.assigned', { name }))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <PageHeader :title="t('int.mcm')" :sub="t('int.mcmSub')" />
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="760">
      <thead>
        <tr>
          <th :class="th">Network</th>
          <th :class="th">{{ t('int.mcmEmail') }}</th>
          <th :class="th">{{ t('int.delegation') }}</th>
          <th :class="th">{{ t('int.mcmSeen') }}</th>
          <th :class="th"><span class="sr-only">{{ t('int.assign') }}</span></th>
        </tr>
      </thead>
      <tbody>
        <TableState :cols="5" :loading="!candidates" :empty="candidates?.length === 0" :desc="t('int.mcmEmpty')" />
        <tr v-for="candidate in candidates ?? []" :key="candidate.id">
          <td :class="td">
            <div class="font-medium">{{ candidate.display_name ?? candidate.network_code }}</div>
            <code class="font-mono text-[13px] text-muted-foreground">{{ candidate.network_code }}</code>
          </td>
          <td :class="td">{{ candidate.email }}</td>
          <td :class="[td, 'text-[13px] text-muted-foreground']">{{ candidate.delegation ?? '–' }}</td>
          <td :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground']">{{ formatDate(candidate.first_seen_at, false) }}</td>
          <td :class="[td, 'text-right']">
            <Button variant="outline" size="sm" :disabled="!clients.length" @click="start(candidate)">{{ t('int.assign') }}</Button>
          </td>
        </tr>
      </tbody>
    </DataTable>
  </PageBody>
  <Dialog v-model:open="open" :title="t('int.assignTitle', { code: target?.network_code ?? '' })" :desc="t('int.assignDesc')">
    <Field id="mcm-client" :label="t('int.assignClient')">
      <NativeSelect id="mcm-client" v-model="clientId" :options="options" />
    </Field>
    <template #footer>
      <Button variant="outline" @click="target = null">{{ t('common.cancel') }}</Button>
      <Button :loading="busy" :disabled="!clientId" @click="assign">{{ t('int.assign') }}</Button>
    </template>
  </Dialog>
</template>
