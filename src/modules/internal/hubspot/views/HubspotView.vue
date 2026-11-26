<script setup lang="ts">
/** Integrações > HubSpot: a sincronia por tipo (com os objetos personalizados) e os registros com erro, a saúde e o onboarding no contato e os avisos que viram tarefa do gerente. */
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { ChevronRight, CircleCheck, RefreshCw, Search } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import Segmented from '@/components/ui/Segmented.vue'
import Select from '@/components/ui/Select.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import HubspotHealthTab from '@/modules/internal/hubspot/components/HubspotHealthTab.vue'
import HubspotMark from '@/modules/internal/hubspot/components/HubspotMark.vue'
import HubspotTasksTab from '@/modules/internal/hubspot/components/HubspotTasksTab.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatAgo, formatDate, locale, t, tn, type Key } from '@/lib/i18n'
import { nextPollDelay } from '@/lib/poll'
import { td, th } from '@/lib/table'
import FiltersMenu from '@/modules/views/components/FiltersMenu.vue'
import { useLocalBarFilters } from '@/modules/views/barFilters'
import { CUSTOM_KINDS, KINDS, KIND_LABEL, KIND_SOURCE, filterFailures, isRunning, runSummary, settingsBody } from '@/modules/internal/hubspot/rules'
import { hubspotService } from '@/modules/internal/hubspot/service'
import type { HubspotKind, HubspotSettings, HubspotStatus, HubspotTask, HubspotTaskRuleSetting } from '@/modules/internal/hubspot/types'
import { useSession } from '@/stores/session'

const FILTERS = ['kind']
const DEFAULT_FILTERS = ['kind']
const FILTER_LABELS: Record<string, Key> = { kind: 'hs.col.kind' }

type Tab = 'sync' | 'health' | 'tasks'
const TABS: Tab[] = ['sync', 'health', 'tasks']
const TAB_LABEL: Record<Tab, Key> = { sync: 'hs.tab.sync', health: 'hs.tab.health', tasks: 'hs.tab.tasks' }

const session = useSession()
const route = useRoute()
const router = useRouter()
const tab = ref<Tab>(TABS.includes(route.query.aba as Tab) ? (route.query.aba as Tab) : 'sync')
const tabOptions = TABS.map((value) => ({ value, label: t(TAB_LABEL[value]) }))
const settings = ref<HubspotSettings | null>(null)
const enabled = ref<Record<string, boolean>>({})
const rules = ref<HubspotTaskRuleSetting[]>([])
const tasks = ref<HubspotTask[] | null>(null)
const saving = ref(false)
const dirty = computed(() => {
  if (!settings.value) return false
  const saved = settingsBody(Object.fromEntries(settings.value.properties.map((item) => [item.name, item.enabled])), settings.value.rules)
  return JSON.stringify(saved) !== JSON.stringify(settingsBody(enabled.value, rules.value))
})
const canRun = computed(() => session.can('internal.hubspot.run'))
const status = ref<HubspotStatus | null>(null)
const loadError = ref<string | null>(null)
const requesting = ref(false)
const kind = ref<HubspotKind | 'all'>('all')
const query = ref('')
const barFilters = useLocalBarFilters('hubspot-failures', FILTERS, DEFAULT_FILTERS, { kind: () => (kind.value = 'all') })
let pollTimer: ReturnType<typeof setTimeout> | undefined
let pollDelay = 0
let pollStarted = 0

const running = computed(() => isRunning(status.value?.last_run))
const kindOptions = computed(() => [{ value: 'all', label: t('hs.allKinds') }, ...KINDS.map((value) => ({ value, label: t(KIND_LABEL[value]) }))])
const failures = computed(() => filterFailures(status.value?.failures ?? [], kind.value, query.value))
const tiles = computed(() => KINDS.map((value) => status.value?.kinds.find((item) => item.kind === value) ?? { kind: value, synced: 0, failed: 0, last_synced_at: null }))

/** O nome do filtro no menu de filtros. */
const filterLabel = (filter: string) => t(FILTER_LABELS[filter] as Key)

/** Carrega a situação da sincronia e volta a olhar enquanto ela roda. */
async function load() {
  loadError.value = null
  try {
    const previous = status.value?.last_run
    status.value = await hubspotService.status()
    if (previous && isRunning(previous) && !running.value) toast.success(runSummary(status.value.last_run))
    follow()
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Agenda a próxima leitura enquanto a sincronia está na fila ou rodando, com espera crescente. */
function follow() {
  clearTimeout(pollTimer)
  if (!running.value) {
    pollDelay = 0
    return
  }
  if (!pollDelay) pollStarted = Date.now()
  const delay = nextPollDelay(pollDelay, Date.now() - pollStarted)
  if (delay === null) return
  pollDelay = delay
  pollTimer = setTimeout(load, delay)
}

/** Pede a sincronia agora e passa a acompanhar até terminar. */
async function syncNow() {
  if (!status.value) return
  requesting.value = true
  try {
    status.value = { ...status.value, last_run: await hubspotService.sync() }
    toast.success(t('hs.syncQueued'))
    pollDelay = 0
    follow()
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    requesting.value = false
  }
}

/** Põe as escolhas salvas nos campos das abas. */
function fillSettings(found: HubspotSettings) {
  settings.value = found
  enabled.value = Object.fromEntries(found.properties.map((item) => [item.name, item.enabled]))
  rules.value = found.rules.map((rule) => ({ ...rule }))
}

/** Carrega as escolhas da saúde e das tarefas e as últimas tarefas, na primeira vez que uma das abas abre. */
async function loadSettings() {
  if (settings.value) return
  try {
    const [found, recent] = await Promise.all([hubspotService.settings(), hubspotService.tasks()])
    fillSettings(found)
    tasks.value = recent
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}

/** Salva as propriedades desligadas e as regras dos avisos. */
async function saveSettings() {
  saving.value = true
  try {
    fillSettings(await hubspotService.saveSettings(settingsBody(enabled.value, rules.value)))
    toast.success(t('hst.saved'))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    saving.value = false
  }
}

watch(tab, (value) => {
  void router.replace({ query: { ...route.query, aba: value === 'sync' ? undefined : value } })
  if (value !== 'sync') void loadSettings()
}, { immediate: true })
onMounted(load)
onBeforeUnmount(() => clearTimeout(pollTimer))
</script>

<template>
  <PageHeader :title="t('nav.hubspot')" :sub="t('hs.sub')">
    <template #actions>
      <Status v-if="status" :tone="status.configured ? 'ok' : 'neutral'">{{ status.configured ? t('hs.connected') : t('hs.notConfigured') }}</Status>
      <Button v-if="canRun" :disabled="!status?.configured || running" :loading="requesting" @click="syncNow">
        <RefreshCw v-if="!requesting" :class="running ? 'animate-spin' : ''" aria-hidden="true" />{{ running ? t('hs.syncing') : t('hs.syncNow') }}
      </Button>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else>
      <Segmented v-model="tab" :options="tabOptions" :label="t('hs.tabs')" />
      <HubspotHealthTab v-if="tab === 'health' && settings" v-model="enabled" :properties="settings.properties" :can-run="canRun" :dirty="dirty" :saving="saving" @save="saveSettings" />
      <HubspotTasksTab v-if="tab === 'tasks' && settings" v-model="rules" :tasks="tasks" :can-run="canRun" :dirty="dirty" :saving="saving" @save="saveSettings" />
      <p v-if="tab !== 'sync' && !settings" class="text-[14px] text-muted-foreground">{{ t('common.loading') }}</p>
    </template>
    <template v-if="!loadError && tab === 'sync'">
      <p v-if="status && !status.configured" class="rounded-lg border border-dashed bg-card p-4 text-[14px] text-muted-foreground">{{ t('hs.notConfiguredHelp') }}</p>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="tile in tiles"
          :key="tile.kind"
          class="rounded-lg border bg-card p-5"
        >
          <div class="flex items-center justify-between gap-2">
            <span class="flex items-center gap-2 text-[14px] font-medium"><HubspotMark />{{ t(KIND_LABEL[tile.kind]) }}</span>
            <Status v-if="tile.failed" tone="bad">{{ tn('hs.failedCount', tile.failed) }}</Status>
            <Status v-else-if="tile.synced" tone="ok">{{ t('hs.upToDate') }}</Status>
            <Status v-else tone="neutral">{{ t('hs.notYet') }}</Status>
          </div>
          <div class="mt-3 text-[28px] font-semibold tracking-[-0.03em] tnum">{{ status ? tile.synced.toLocaleString(locale) : '–' }}</div>
          <div class="flex flex-wrap items-center gap-1 text-[13px] text-muted-foreground">
            {{ t(KIND_SOURCE[tile.kind]) }}<ChevronRight class="size-3.5" aria-hidden="true" />{{ tile.last_synced_at ? formatAgo(tile.last_synced_at) : t('hs.notYet') }}
          </div>
          <p v-if="CUSTOM_KINDS.includes(tile.kind) && !tile.synced && !tile.failed" class="mt-3 border-t pt-3 text-[12px] text-muted-foreground">{{ t('hs.customHelp') }}</p>
          <div v-if="running" class="mt-3 h-1 overflow-hidden rounded-full bg-muted" aria-hidden="true">
            <span class="block h-full w-1/3 animate-pulse rounded-full bg-foreground" />
          </div>
        </div>
      </div>

      <section class="overflow-hidden rounded-lg border bg-card">
        <div class="p-6 pb-4">
          <h2 class="text-[20px] font-semibold tracking-[-0.025em]">{{ t('hs.failures') }}</h2>
          <p class="mt-2 max-w-[70ch] text-[14px] text-muted-foreground">{{ t('hs.failuresDesc') }}</p>
        </div>
        <div class="flex flex-wrap items-center gap-3 px-6 pb-4">
          <div class="relative w-full sm:w-[260px]">
            <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input v-model="query" type="search" :aria-label="t('hs.search')" class="h-9 pl-9" :placeholder="t('hs.search')" />
          </div>
          <Select v-if="barFilters.isShown('kind')" v-model="kind" :options="kindOptions" :aria-label="t('hs.col.kind')" class="h-9 w-full sm:w-[180px]" />
          <FiltersMenu v-model:shown="barFilters.shown.value" :filters="FILTERS" :label="filterLabel" />
        </div>
        <DataTable :min="720">
          <thead>
            <tr>
              <th :class="th">{{ t('hs.col.kind') }}</th>
              <th :class="th">{{ t('hs.col.record') }}</th>
              <th :class="th">{{ t('hs.col.error') }}</th>
              <th :class="th">{{ t('hs.col.when') }}</th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="4" :loading="!status" :empty="failures.length === 0" :icon="CircleCheck" :title="status?.failures.length ? t('hs.noFailuresFiltered') : t('hs.noFailures')" />
            <tr v-for="failure in failures" :key="`${failure.kind}-${failure.avant_id}`" class="hover:bg-muted">
              <td :class="[td, 'whitespace-nowrap']">{{ t(KIND_LABEL[failure.kind]) }}</td>
              <td :class="[td, 'font-medium']">{{ failure.label }}</td>
              <td :class="[td, 'text-[13px] text-bad']">{{ failure.error }}</td>
              <td :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground']">{{ formatDate(failure.failed_at) }}</td>
            </tr>
          </tbody>
        </DataTable>
        <div class="border-t bg-[hsl(var(--card-footer))] px-6 py-3 text-[13px] text-muted-foreground">{{ runSummary(status?.last_run) }}</div>
      </section>
    </template>
  </PageBody>
</template>
