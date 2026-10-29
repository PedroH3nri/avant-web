<script setup lang="ts">
/** Lista de networks com sincronização, histórico e desconexão. */
import { computed, onMounted, ref, watch } from 'vue'
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
import Pagination from '@/components/ui/Pagination.vue'
import Dialog from '@/components/ui/Dialog.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { latestCall } from '@/lib/latest'
import { onEvent } from '@/lib/events'
import { errorText, formatAgo, formatDate, t } from '@/lib/i18n'
import { networkName, statusTone } from '@/modules/networks/rules'
import { td, th } from '@/lib/table'
import type { Network, SyncRun } from '@/modules/networks/types'
import { useSession } from '@/stores/session'
import { networkService } from '@/modules/networks/service'

const session = useSession()
const router = useRouter()
const networks = ref<Network[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)
const canConnect = computed(() => session.can('network.connect'))
const canSync = computed(() => session.can('network.sync'))
const canDisconnect = computed(() => session.can('network.disconnect'))
const lost = computed(() => (networks.value ?? []).filter((network) => network.status === 'error'))

/** Carrega as networks. */
async function load() {
  loadError.value = null
  try {
    const found = await networkService.list({ page: page.value })
    networks.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)
watch(page, load)

// O worker avisa quando termina um teste ou importação.
onEvent('network.updated', async ({ network_id }) => {
  try {
    const list = networks.value ?? []
    if (!list.some((existing) => existing.id === network_id)) {
      if (page.value === 1) await load()
      return
    }
    const network = await networkService.show(network_id)
    networks.value = list.map((existing) => (existing.id === network.id ? network : existing))
  } catch {
    // a próxima carga da tela traz o estado certo
  }
})

/** Mostra o erro num aviso, com o tempo de espera quando houver. */
const errorToast = (error: unknown) =>
  toast.error(errorText(error instanceof ApiError ? error.code : 'unknown', { s: error instanceof ApiError ? (error.retryAfter ?? 600) : 600 }))
/** Troca a network na lista pela versão nova. */
const replace = (network: Network) => (networks.value = (networks.value ?? []).map((existing) => (existing.id === network.id ? network : existing)))

/** Pede uma nova sincronização da network. */
async function sync(network: Network) {
  try {
    replace(await networkService.sync(network.id))
    toast(t('net.reimportQueued'))
  } catch (error) {
    errorToast(error)
  }
}

// Histórico
const history = ref<{ network: Network; runs: SyncRun[] | null } | null>(null)
const historyPage = ref(1)
const historyTotal = ref(0)
const historyPages = ref(0)
const historyOpen = computed({ get: () => history.value !== null, set: (value) => !value && (history.value = null) })
const historyCall = latestCall()
/** Carrega uma página do histórico de sincronizações da network. */
async function loadHistory(network: Network) {
  try {
    const found = await historyCall(() => networkService.syncRuns(network.id, { page: historyPage.value }))
    if (!found) return
    if (history.value?.network.id !== network.id) return
    history.value = { network: network, runs: found.items }
    historyTotal.value = found.total
    historyPages.value = found.pages
  } catch (error) {
    errorToast(error)
    history.value = null
  }
}
/** Abre o histórico de sincronizações da network na primeira página. */
async function openHistory(network: Network) {
  history.value = { network: network, runs: null }
  // Fora da página 1, a troca de página já busca (pelo watch); assim sai uma busca só.
  if (historyPage.value !== 1) historyPage.value = 1
  else await loadHistory(network)
}
watch(historyPage, () => history.value && loadHistory(history.value.network))
/** Tom do selo de uma sincronização. */
const runTone = (syncRun: SyncRun) => (syncRun.status === 'ok' ? 'ok' : syncRun.status === 'failed' ? 'bad' : 'warn')
/** Resumo de uma sincronização: o erro ou o que mudou. */
function runDetail(syncRun: SyncRun): string {
  if (syncRun.status === 'failed') return syncRun.error_code ? errorText(syncRun.error_code) : (syncRun.error_message ?? '')
  if (syncRun.kind === 'test' || syncRun.status !== 'ok') return ''
  return t('net.run.counts', { created: syncRun.counts.created ?? 0, updated: syncRun.counts.updated ?? 0, archived: syncRun.counts.archived ?? 0 })
}

// Desconectar
const disconnecting = ref<Network | null>(null)
const busy = ref(false)
const disconnectOpen = computed({ get: () => disconnecting.value !== null, set: (value) => !value && (disconnecting.value = null) })
/** Desconecta a network escolhida. */
async function disconnect() {
  const current = disconnecting.value
  if (!current) return
  busy.value = true
  try {
    replace(await networkService.disconnect(current.id))
    toast(t('net.disconnected', { name: networkName(current) }))
    disconnecting.value = null
  } catch (error) {
    errorToast(error)
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
      <div v-for="network in lost" :key="network.id" class="flex flex-wrap items-start gap-3 rounded-lg border border-bad/25 bg-card p-4" role="alert">
        <AlertTriangle class="mt-0.5 size-4 shrink-0 text-bad" aria-hidden="true" />
        <p class="min-w-0 flex-1 text-[14px]">
          <span class="font-medium">{{ t('home.lost', { name: networkName(network) }) }}</span>
          {{ ' ' }}<span class="text-muted-foreground">{{ network.last_error ? errorText(network.last_error) : t('net.lostRetest') }}</span>
        </p>
        <Button v-if="canSync" size="sm" variant="outline" @click="sync(network)">{{ t('net.retest') }}</Button>
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
          <tr v-for="network in networks ?? []" :key="network.id">
            <td :class="[td, 'font-medium']">{{ networkName(network) }}</td>
            <td :class="[td, 'font-mono text-[13px] tnum']">{{ network.network_code }}</td>
            <td :class="[td, 'text-muted-foreground']">{{ t(`net.type.${network.connection_type}`) }}</td>
            <td :class="td">
              <Status :tone="network.sync_requested_at && network.status === 'connected' ? 'warn' : statusTone[network.status]">
                {{ network.sync_requested_at && network.status === 'connected' ? t('net.run.running') : t(`net.status.${network.status}`) }}
              </Status>
            </td>
            <td :class="[td, 'text-right tnum']">{{ network.sites }}</td>
            <td :class="[td, 'text-muted-foreground']" :title="formatDate(network.last_checked_at)">{{ formatAgo(network.last_checked_at) }}</td>
            <td :class="td">
              <DropdownMenuRoot>
                <DropdownMenuTrigger as-child>
                  <Button variant="ghost" size="icon" class="size-8" :aria-label="t('team.actionsFor', { name: networkName(network) })"><MoreHorizontal /></Button>
                </DropdownMenuTrigger>
                <MenuContent align="end" class="w-56">
                  <MenuItem v-if="canSync && network.status !== 'disconnected'" @select="sync(network)">{{ network.status === 'error' ? t('net.retest') : t('net.reimport') }}</MenuItem>
                  <MenuItem @select="openHistory(network)">{{ t('net.history') }}</MenuItem>
                  <template v-if="canDisconnect && network.status !== 'disconnected'">
                    <DropdownMenuSeparator class="-mx-1 my-1 h-px bg-border" />
                    <MenuItem danger @select="disconnecting = network">{{ t('net.disconnect') }}</MenuItem>
                  </template>
                </MenuContent>
              </DropdownMenuRoot>
            </td>
          </tr>
        </tbody>
      </DataTable>
      <Pagination v-model:page="page" :total="total" :pages="pages" />
    </template>

    <Dialog v-model:open="historyOpen" :title="t('net.history')" :desc="history ? networkName(history.network) : ''" class="max-w-[640px]">
      <p v-if="!history?.runs" class="text-[14px] text-muted-foreground">{{ t('common.loading') }}</p>
      <p v-else-if="history.runs.length === 0" class="text-[14px] text-muted-foreground">{{ t('net.historyEmpty') }}</p>
      <ul v-else class="grid gap-3">
        <li v-for="run in history.runs" :key="run.id" class="grid gap-0.5 border-b pb-3 text-[14px] last:border-b-0 last:pb-0">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="font-medium">{{ t(`net.run.${run.kind}`) }}</span>
            <Status :tone="runTone(run)">{{ t(`net.run.${run.status}`) }}</Status>
          </div>
          <span class="text-[13px] text-muted-foreground tnum">{{ formatDate(run.started_at) }}</span>
          <span v-if="runDetail(run)" :class="['text-[13px]', run.status === 'failed' ? 'text-bad' : 'text-muted-foreground']">{{ runDetail(run) }}</span>
        </li>
      </ul>
      <Pagination v-if="history?.runs?.length" v-model:page="historyPage" :total="historyTotal" :pages="historyPages" class="mt-3" />
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
