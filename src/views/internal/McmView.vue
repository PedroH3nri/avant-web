<script setup lang="ts">
/** Painel interno: networks MCM sem dono, para ligar ao cliente certo. */
import { computed, onMounted, ref } from 'vue'
import { toast } from 'vue-sonner'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
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
  set: (v) => {
    if (!v) target.value = null
  },
})

async function load() {
  loadError.value = null
  try {
    const [c, cl] = await Promise.all([
      api.get<Items<McmCandidate>>('/internal/networks/unassigned'),
      session.can('internal.clients.view') ? api.get<Items<Client>>('/internal/clients') : Promise.resolve({ items: [] as Client[], next_cursor: null }),
    ])
    candidates.value = c.items
    clients.value = cl.items.filter((x) => x.status === 'active')
  } catch (e) {
    loadError.value = errorText(e instanceof ApiError ? e.code : 'unknown')
  }
}
onMounted(load)

const options = computed(() => clients.value.map((c) => ({ value: c.id, label: `${c.name} (${c.owner.email})` })))

function start(c: McmCandidate) {
  // Sugere o cliente cujo dono tem o mesmo domínio de e-mail.
  const domain = c.email.split('@')[1]
  clientId.value = clients.value.find((x) => x.owner.email.endsWith(`@${domain}`))?.id ?? clients.value[0]?.id ?? ''
  target.value = c
}

async function assign() {
  const c = target.value
  if (!c || !clientId.value) return
  busy.value = true
  try {
    await api.post(`/internal/networks/${c.id}/assign`, { company_id: clientId.value })
    const name = clients.value.find((x) => x.id === clientId.value)?.name ?? ''
    candidates.value = candidates.value?.filter((x) => x.id !== c.id) ?? null
    target.value = null
    toast.success(t('int.assigned', { name }))
  } catch (e) {
    toast.error(errorText(e instanceof ApiError ? e.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <PageHeader :title="t('int.mcm')" :sub="t('int.mcmSub')" />
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <Card v-else-if="candidates && !candidates.length"><p class="text-[14px] text-muted-foreground">{{ t('int.mcmEmpty') }}</p></Card>
    <DataTable v-else-if="candidates" :min="760">
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
        <tr v-for="c in candidates" :key="c.id">
          <td :class="td">
            <div class="font-medium">{{ c.display_name ?? c.network_code }}</div>
            <code class="font-mono text-[13px] text-muted-foreground">{{ c.network_code }}</code>
          </td>
          <td :class="td">{{ c.email }}</td>
          <td :class="[td, 'text-[13px] text-muted-foreground']">{{ c.delegation ?? '–' }}</td>
          <td :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground']">{{ formatDate(c.first_seen_at, false) }}</td>
          <td :class="[td, 'text-right']">
            <Button variant="outline" size="sm" :disabled="!clients.length" @click="start(c)">{{ t('int.assign') }}</Button>
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
