<script setup lang="ts">
/**
 * Painel interno: uma network de cliente com tudo o que é dela. Situação e erro, contrato ativo,
 * faturamento, últimas sincronizações, sites com ad units, contratos e o histórico de sincronizações.
 */
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft, Building2 } from 'lucide-vue-next'
import CompanyIcon from '@/components/CompanyIcon.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatAgo, formatDate, locale, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { formatRevshare } from '@/modules/internal/contracts/rules'
import { clientInventoryService } from '@/modules/internal/inventory/service'
import type { ClientNetworkDetail } from '@/modules/internal/inventory/types'
import { networkName, networkTone, statusKey } from '@/modules/networks/rules'
import type { SyncRun } from '@/modules/networks/types'
import NetworkAdsTxtCard from '@/modules/internal/inventory/components/NetworkAdsTxtCard.vue'
import RevenueStatusBadge from '@/modules/revenue/components/RevenueStatusBadge.vue'
import { approval } from '@/modules/sites/rules'
import { useSession } from '@/stores/session'

const KINDS: SyncRun['kind'][] = ['test', 'sites', 'ad_units']
const RUN_TONE: Record<SyncRun['status'], 'ok' | 'warn' | 'bad'> = { ok: 'ok', running: 'warn', failed: 'bad' }

const route = useRoute()
const session = useSession()
const router = useRouter()
const network = ref<ClientNetworkDetail | null>(null)
const loadError = ref<string | null>(null)
const runs = ref<SyncRun[] | null>(null)
const runsPage = ref(1)
const runsTotal = ref(0)
const runsPages = ref(0)

const networkId = computed(() => String(route.params.id))
const active = computed(() => network.value?.contracts.find((contract) => contract.status === 'active') ?? null)

/** Carrega a network e a primeira página do histórico de sincronizações. */
async function load() {
  loadError.value = null
  try {
    network.value = await clientInventoryService.network(networkId.value)
    runsPage.value = 1
    await loadRuns()
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
watch(networkId, load, { immediate: true })

/** Carrega a página escolhida do histórico de sincronizações. */
async function loadRuns() {
  const found = await clientInventoryService.syncRuns(networkId.value, { page: runsPage.value })
  runs.value = found.items
  runsTotal.value = found.total
  runsPages.value = found.pages
}
watch(runsPage, () => loadRuns().catch((error) => (loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown'))))

/** O resumo do que a sincronização trouxe, ou o erro dela. */
function runSummary(syncRun: SyncRun) {
  if (syncRun.status === 'failed') return syncRun.error_message ?? syncRun.error_code ?? t('net.run.failed')
  if (syncRun.kind === 'test') return t(`net.run.${syncRun.status}`)
  return t('net.run.counts', { created: syncRun.counts.created ?? 0, updated: syncRun.counts.updated ?? 0, archived: syncRun.counts.archived ?? 0 })
}
</script>

<template>
  <PageHeader :title="network ? networkName(network) : t('nav.networks')" :sub="network ? network.network_code : undefined">
    <template #back>
      <RouterLink to="/interno/networks" class="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground">
        <ArrowLeft class="size-4" />{{ t('nav.networks') }}
      </RouterLink>
    </template>
    <template v-if="network" #actions>
      <Button variant="outline" @click="router.push(`/interno/clientes/${network.client.id}`)"><Building2 />{{ t('int.openClient') }}</Button>
    </template>
  </PageHeader>
  <PageBody class="lg:grid-cols-2">
    <LoadError v-if="loadError" class="lg:col-span-2" :message="loadError" @retry="load" />
    <template v-if="network">
      <Card :title="t('netd.situation')">
        <dl class="-my-2 grid divide-y text-[14px]">
          <div class="grid gap-1 py-2 sm:grid-cols-[160px_1fr]">
            <dt class="text-muted-foreground">{{ t('net.col.status') }}</dt>
            <dd><Status :tone="networkTone(network)">{{ t(statusKey(network)) }}</Status></dd>
          </div>
          <div class="grid gap-1 py-2 sm:grid-cols-[160px_1fr]">
            <dt class="text-muted-foreground">{{ t('int.column.client') }}</dt>
            <dd class="flex items-center gap-2">
              <CompanyIcon :name="network.client.name" :image-url="network.client.image_url" :size="20" />
              <RouterLink :to="`/interno/clientes/${network.client.id}`" class="hover:underline">{{ network.client.name }}</RouterLink>
            </dd>
          </div>
          <div class="grid gap-1 py-2 sm:grid-cols-[160px_1fr]">
            <dt class="text-muted-foreground">{{ t('netd.delegation') }}</dt>
            <dd>{{ network.delegation ? t(`netd.delegation.${network.delegation === 'manage_inventory' ? 'manage_inventory' : 'manage_account'}`) : t('int.none.dash') }}</dd>
          </div>
          <div class="grid gap-1 py-2 sm:grid-cols-[160px_1fr]">
            <dt class="text-muted-foreground">{{ t('net.col.checked') }}</dt>
            <dd class="tnum">{{ network.last_checked_at ? formatDate(network.last_checked_at) : t('int.none.dash') }}</dd>
          </div>
          <div class="grid gap-1 py-2 sm:grid-cols-[160px_1fr]">
            <dt class="text-muted-foreground">{{ t('netd.synced') }}</dt>
            <dd class="tnum">{{ network.last_synced_at ? formatDate(network.last_synced_at) : t('int.none.dash') }}</dd>
          </div>
          <div v-if="network.mcm_email" class="grid gap-1 py-2 sm:grid-cols-[160px_1fr]">
            <dt class="text-muted-foreground">{{ t('netd.mcmEmail') }}</dt>
            <dd>{{ network.mcm_email }}</dd>
          </div>
        </dl>
        <template v-if="network.last_error" #note><span class="text-bad">{{ network.last_error }}</span></template>
      </Card>

      <div class="grid gap-6">
        <Card :title="t('netd.contract')" :desc="t('netd.contractDesc')">
          <template v-if="active">
            <div class="text-[28px] font-semibold tracking-[-0.03em] tnum">{{ formatRevshare(active.revshare, locale) }}</div>
            <div class="mt-1 text-[13px] text-muted-foreground">{{ t('netd.contractSince', { source: t(`ct.source.${active.source}`), when: formatDate(active.started_at, false) }) }}</div>
          </template>
          <p v-else class="text-[14px] text-muted-foreground">{{ t('netd.noContract') }}</p>
        </Card>
        <Card :title="t('int.column.revenue')">
          <RevenueStatusBadge :status="network.revenue_status" />
        </Card>
      </div>

      <NetworkAdsTxtCard
        v-if="session.can('internal.gam_tools.view')"
        class="lg:col-span-2"
        :network-id="network.id"
        :inventory="network.delegation === 'manage_inventory'"
      />

      <Card class="lg:col-span-2" :title="t('netd.lastRuns')">
        <ul class="-my-2 grid divide-y text-[14px] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <li v-for="kind in KINDS" :key="kind" class="grid gap-1 py-2 sm:px-4 sm:first:pl-0">
            <span class="text-[13px] text-muted-foreground">{{ t(`net.run.${kind}`) }}</span>
            <template v-if="network.last_runs[kind]">
              <Status :tone="RUN_TONE[network.last_runs[kind]!.status]">{{ t(`net.run.${network.last_runs[kind]!.status}`) }}</Status>
              <span class="text-[13px] text-muted-foreground">{{ formatAgo(network.last_runs[kind]!.started_at) }}</span>
            </template>
            <span v-else class="text-muted-foreground">{{ t('int.none.dash') }}</span>
          </li>
        </ul>
      </Card>

      <section class="grid gap-3 lg:col-span-2">
        <h2 class="text-[13px] font-medium text-muted-foreground">{{ t('nav.sites') }}</h2>
        <DataTable :min="640">
          <thead>
            <tr>
              <th :class="th">{{ t('sites.col.site') }}</th>
              <th :class="th">{{ t('sites.col.approval') }}</th>
              <th :class="[th, 'text-right']">{{ t('sites.col.units') }}</th>
              <th :class="th">{{ t('sites.col.synced') }}</th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="4" :empty="network.sites.length === 0" :title="t('netd.noSites')" />
            <tr v-for="site in network.sites" :key="site.id" class="hover:bg-muted">
              <td :class="[td, 'font-medium']"><RouterLink :to="`/interno/sites/${site.id}`" class="hover:underline">{{ site.domain }}</RouterLink></td>
              <td :class="td"><Status :tone="approval(site).tone">{{ approval(site).label }}</Status></td>
              <td :class="[td, 'text-right tnum']">{{ site.ad_units }}</td>
              <td :class="[td, 'text-muted-foreground']">{{ site.synced_at ? formatAgo(site.synced_at) : t('int.none.dash') }}</td>
            </tr>
          </tbody>
        </DataTable>
      </section>

      <section class="grid gap-3 lg:col-span-2">
        <h2 class="text-[13px] font-medium text-muted-foreground">{{ t('int.contracts') }}</h2>
        <DataTable :min="640">
          <thead>
            <tr>
              <th :class="th">{{ t('ct.revshareCol') }}</th>
              <th :class="th">{{ t('ct.statusCol') }}</th>
              <th :class="th">{{ t('ct.sourceCol') }}</th>
              <th :class="th">{{ t('ct.start') }}</th>
              <th :class="th">{{ t('ct.end') }}</th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="5" :empty="network.contracts.length === 0" :title="t('netd.noContract')" />
            <tr v-for="contract in network.contracts" :key="contract.id" class="hover:bg-muted">
              <td :class="[td, 'tnum']">
                <div>{{ formatRevshare(contract.revshare, locale) }}</div>
                <div v-if="contract.notes" class="max-w-[40ch] truncate text-[13px] text-muted-foreground" :title="contract.notes">{{ contract.notes }}</div>
              </td>
              <td :class="td"><Status :tone="contract.status === 'active' ? 'ok' : 'neutral'">{{ t(`ct.status.${contract.status}`) }}</Status></td>
              <td :class="[td, 'text-muted-foreground']">{{ t(`ct.source.${contract.source}`) }}</td>
              <td :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground']">{{ formatDate(contract.started_at) }}</td>
              <td :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground']">{{ contract.ended_at ? formatDate(contract.ended_at) : '–' }}</td>
            </tr>
          </tbody>
        </DataTable>
      </section>

      <section class="grid gap-3 lg:col-span-2">
        <h2 class="text-[13px] font-medium text-muted-foreground">{{ t('net.history') }}</h2>
        <DataTable :min="640">
          <thead>
            <tr>
              <th :class="th">{{ t('netd.runKind') }}</th>
              <th :class="th">{{ t('net.col.status') }}</th>
              <th :class="th">{{ t('netd.runResult') }}</th>
              <th :class="th">{{ t('netd.runStarted') }}</th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="4" :loading="!runs" :empty="runs?.length === 0" :title="t('net.historyEmpty')" />
            <tr v-for="syncRun in runs ?? []" :key="syncRun.id">
              <td :class="td">{{ t(`net.run.${syncRun.kind}`) }}</td>
              <td :class="td"><Status :tone="RUN_TONE[syncRun.status]">{{ t(`net.run.${syncRun.status}`) }}</Status></td>
              <td :class="[td, 'text-[13px]', syncRun.status === 'failed' ? 'text-bad' : 'text-muted-foreground']">{{ runSummary(syncRun) }}</td>
              <td :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground']">{{ formatDate(syncRun.started_at) }}</td>
            </tr>
          </tbody>
        </DataTable>
        <Pagination v-if="runsPages > 1" v-model:page="runsPage" :total="runsTotal" :pages="runsPages" />
      </section>
    </template>
  </PageBody>
</template>
