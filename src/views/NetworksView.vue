<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { DropdownMenuRoot, DropdownMenuSeparator, DropdownMenuTrigger } from 'reka-ui'
import { AlertTriangle, MoreHorizontal, Network as NetworkIcon } from 'lucide-vue-next'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Dialog from '@/components/ui/Dialog.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { api, ApiError } from '@/lib/api'
import { onEvent } from '@/lib/events'
import { errorText, formatAgo, formatDate, t } from '@/lib/i18n'
import { networkName, statusTone } from '@/lib/networks'
import { td, th } from '@/lib/table'
import type { Items, Network, SyncRun } from '@/lib/types'
import { useSession } from '@/stores/session'

const session = useSession()
const router = useRouter()
const networks = ref<Network[] | null>(null)
const loadError = ref<string | null>(null)
const canConnect = computed(() => session.can('network.connect'))
const canSync = computed(() => session.can('network.sync'))
const canDisconnect = computed(() => session.can('network.disconnect'))
const lost = computed(() => (networks.value ?? []).filter((n) => n.status === 'error'))

async function load() {
  loadError.value = null
  try {
    networks.value = (await api.get<Items<Network>>('/networks')).items
  } catch (e) {
    loadError.value = errorText(e instanceof ApiError ? e.code : 'unknown')
  }
}
onMounted(load)

// O worker avisa quando termina um teste ou importação.
onEvent('network.updated', async ({ network_id }) => {
  try {
    const n = await api.get<Network>(`/networks/${network_id}`)
    const list = networks.value ?? []
    networks.value = list.some((x) => x.id === n.id) ? list.map((x) => (x.id === n.id ? n : x)) : [...list, n]
  } catch {
    // a próxima carga da tela traz o estado certo
  }
})

const errorToast = (e: unknown) =>
  toast.error(errorText(e instanceof ApiError ? e.code : 'unknown', { s: e instanceof ApiError ? (e.retryAfter ?? 600) : 600 }))
const replace = (n: Network) => (networks.value = (networks.value ?? []).map((x) => (x.id === n.id ? n : x)))

async function sync(n: Network) {
  try {
    replace(await api.post<Network>(`/networks/${n.id}/sync`))
    toast(t('net.reimportQueued'))
  } catch (e) {
    errorToast(e)
  }
}

// Histórico
const history = ref<{ network: Network; runs: SyncRun[] | null } | null>(null)
const historyOpen = computed({ get: () => history.value !== null, set: (v) => !v && (history.value = null) })
async function openHistory(n: Network) {
  history.value = { network: n, runs: null }
  try {
    const runs = (await api.get<Items<SyncRun>>(`/networks/${n.id}/sync-runs`, { limit: 30 })).items
    if (history.value?.network.id === n.id) history.value = { network: n, runs }
  } catch (e) {
    errorToast(e)
    history.value = null
  }
}
const runTone = (r: SyncRun) => (r.status === 'ok' ? 'ok' : r.status === 'failed' ? 'bad' : 'warn')
function runDetail(r: SyncRun): string {
  if (r.status === 'failed') return r.error_code ? errorText(r.error_code) : (r.error_message ?? '')
  if (r.kind === 'test' || r.status !== 'ok') return ''
  return t('net.run.counts', { created: r.counts.created ?? 0, updated: r.counts.updated ?? 0, archived: r.counts.archived ?? 0 })
}

// Desconectar
const disconnecting = ref<Network | null>(null)
const busy = ref(false)
const disconnectOpen = computed({ get: () => disconnecting.value !== null, set: (v) => !v && (disconnecting.value = null) })
async function disconnect() {
  const n = disconnecting.value
  if (!n) return
  busy.value = true
  try {
    replace(await api.post<Network>(`/networks/${n.id}/disconnect`))
    toast(t('net.disconnected', { name: networkName(n) }))
    disconnecting.value = null
  } catch (e) {
    errorToast(e)
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <PageHeader :title="t('net.title')" :sub="t('net.sub')">
    <template v-if="canConnect" #actions>
      <RouterLink
        to="/networks/conectar"
        class="inline-flex h-9 items-center rounded-md bg-primary px-4 text-[14px] font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >{{ t('net.connect') }}</RouterLink
      >
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else>
      <div v-for="n in lost" :key="n.id" class="flex flex-wrap items-start gap-3 rounded-lg border border-bad/25 bg-card p-4" role="alert">
        <AlertTriangle class="mt-0.5 size-4 shrink-0 text-bad" aria-hidden="true" />
        <p class="min-w-0 flex-1 text-[14px]">
          <span class="font-medium">{{ t('home.lost', { name: networkName(n) }) }}</span>
          {{ ' ' }}<span class="text-muted-foreground">{{ n.last_error ? errorText(n.last_error) : t('net.lostRetest') }}</span>
        </p>
        <Button v-if="canSync" size="sm" variant="outline" @click="sync(n)">{{ t('net.retest') }}</Button>
      </div>

      <DataTable :min="820">
        <thead>
          <tr>
            <th :class="th">{{ t('net.col.network') }}</th>
            <th :class="th">{{ t('net.col.code') }}</th>
            <th :class="th">{{ t('net.col.type') }}</th>
            <th :class="th">{{ t('net.col.status') }}</th>
            <th :class="[th, 'text-right']">{{ t('net.col.sites') }}</th>
            <th :class="th">{{ t('net.col.checked') }}</th>
            <th :class="[th, 'w-12']"><span class="sr-only">{{ t('team.actions') }}</span></th>
          </tr>
        </thead>
        <tbody>
          <TableState :cols="7" :loading="!networks" :empty="networks?.length === 0" :icon="NetworkIcon" :title="t('net.empty')" :desc="t('net.emptySub')">
            <Button v-if="canConnect" size="sm" @click="router.push('/networks/conectar')">{{ t('net.connect') }}</Button>
          </TableState>
          <tr v-for="n in networks ?? []" :key="n.id">
            <td :class="[td, 'font-medium']">{{ networkName(n) }}</td>
            <td :class="[td, 'font-mono text-[13px] tnum']">{{ n.network_code }}</td>
            <td :class="[td, 'text-muted-foreground']">{{ t(`net.type.${n.connection_type}`) }}</td>
            <td :class="td">
              <Status :tone="n.sync_requested_at && n.status === 'connected' ? 'warn' : statusTone[n.status]">
                {{ n.sync_requested_at && n.status === 'connected' ? t('net.run.running') : t(`net.status.${n.status}`) }}
              </Status>
            </td>
            <td :class="[td, 'text-right tnum']">{{ n.sites }}</td>
            <td :class="[td, 'text-muted-foreground']" :title="formatDate(n.last_checked_at)">{{ formatAgo(n.last_checked_at) }}</td>
            <td :class="td">
              <DropdownMenuRoot>
                <DropdownMenuTrigger as-child>
                  <Button variant="ghost" size="icon" class="size-8" :aria-label="t('team.actionsFor', { name: networkName(n) })"><MoreHorizontal /></Button>
                </DropdownMenuTrigger>
                <MenuContent align="end" class="w-56">
                  <MenuItem v-if="canSync && n.status !== 'disconnected'" @select="sync(n)">{{ n.status === 'error' ? t('net.retest') : t('net.reimport') }}</MenuItem>
                  <MenuItem @select="openHistory(n)">{{ t('net.history') }}</MenuItem>
                  <template v-if="canDisconnect && n.status !== 'disconnected'">
                    <DropdownMenuSeparator class="-mx-1 my-1 h-px bg-border" />
                    <MenuItem danger @select="disconnecting = n">{{ t('net.disconnect') }}</MenuItem>
                  </template>
                </MenuContent>
              </DropdownMenuRoot>
            </td>
          </tr>
        </tbody>
      </DataTable>
    </template>

    <Dialog v-model:open="historyOpen" :title="t('net.history')" :desc="history ? networkName(history.network) : ''" class="max-w-[640px]">
      <p v-if="!history?.runs" class="text-[14px] text-muted-foreground">{{ t('common.loading') }}</p>
      <p v-else-if="history.runs.length === 0" class="text-[14px] text-muted-foreground">{{ t('net.historyEmpty') }}</p>
      <ul v-else class="grid gap-3">
        <li v-for="r in history.runs" :key="r.id" class="grid gap-0.5 border-b pb-3 text-[14px] last:border-b-0 last:pb-0">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="font-medium">{{ t(`net.run.${r.kind}`) }}</span>
            <Status :tone="runTone(r)">{{ t(`net.run.${r.status}`) }}</Status>
          </div>
          <span class="text-[13px] text-muted-foreground tnum">{{ formatDate(r.started_at) }}</span>
          <span v-if="runDetail(r)" :class="['text-[13px]', r.status === 'failed' ? 'text-bad' : 'text-muted-foreground']">{{ runDetail(r) }}</span>
        </li>
      </ul>
    </Dialog>

    <ConfirmDialog
      v-model:open="disconnectOpen"
      :title="t('net.disconnectTitle', { name: disconnecting ? networkName(disconnecting) : '' })"
      :desc="t('net.disconnectDesc')"
      :action="t('net.disconnect')"
      :busy="busy"
      @confirm="disconnect"
    />
  </PageBody>
</template>
