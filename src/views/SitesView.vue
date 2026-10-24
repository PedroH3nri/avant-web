<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { Globe, Search } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { api, ApiError } from '@/lib/api'
import { errorText, formatAgo, formatDate, t } from '@/lib/i18n'
import { networkName } from '@/lib/networks'
import { approval } from '@/lib/sites'
import { td, th } from '@/lib/table'
import type { AdUnit, Items, Network, SiteListItem } from '@/lib/types'
import { cn } from '@/lib/utils'
import { useSession } from '@/stores/session'

const session = useSession()
const router = useRouter()
const canConnect = computed(() => session.can('network.connect'))
const sites = ref<SiteListItem[] | null>(null)
const networks = ref<Network[]>([])
const unlinked = ref<AdUnit[] | null>(null)
const loadError = ref<string | null>(null)
const view = ref<'sites' | 'unlinked'>('sites')
const q = ref('')
const networkId = ref('')
const archived = ref(false)
const canAssign = computed(() => session.can('sites.assign'))
const assignedOnly = computed(() => session.me?.site_scope === 'assigned' && !session.can('sites.assign'))

async function loadSites() {
  loadError.value = null
  try {
    sites.value = (
      await api.get<Items<SiteListItem>>('/sites', {
        network_id: networkId.value || undefined,
        include_archived: archived.value || undefined,
      })
    ).items
  } catch (e) {
    loadError.value = errorText(e instanceof ApiError ? e.code : 'unknown')
  }
}

async function loadUnlinked() {
  try {
    unlinked.value = (await api.get<Items<AdUnit>>('/ad-units', { unlinked: true, status: 'active' })).items
  } catch (e) {
    toast.error(errorText(e instanceof ApiError ? e.code : 'unknown'))
  }
}

onMounted(async () => {
  if (session.can('network.view')) {
    networks.value = (await api.get<Items<Network>>('/networks').catch(() => ({ items: [] as Network[] }))).items
  }
  await loadSites()
  if (canAssign.value) await loadUnlinked()
})
watch([networkId, archived], loadSites)

const netName = (id: string) => {
  const n = networks.value.find((x) => x.id === id)
  return n ? networkName(n) : ''
}
const networkOptions = computed(() => [{ value: '', label: t('sites.allNetworks') }, ...networks.value.map((n) => ({ value: n.id, label: networkName(n) }))])
const shown = computed(() => {
  const term = q.value.trim().toLowerCase()
  return (sites.value ?? []).filter((s) => !term || s.domain.toLowerCase().includes(term))
})

// Ligar ad unit sem site
const choice = ref<Record<string, string>>({})
const siteOptionsFor = (u: AdUnit) => [
  { value: '', label: t('sites.choose') },
  ...(sites.value ?? []).filter((s) => s.network_id === u.network_id && s.status === 'active').map((s) => ({ value: s.id, label: s.domain })),
]
async function link(u: AdUnit) {
  const siteId = choice.value[u.id]
  if (!siteId) return
  try {
    await api.patch<AdUnit>(`/ad-units/${u.id}`, { site_id: siteId })
    toast.success(t('sites.linked', { unit: u.name, site: sites.value?.find((s) => s.id === siteId)?.domain ?? '' }))
    await Promise.all([loadUnlinked(), loadSites()])
  } catch (e) {
    toast.error(errorText(e instanceof ApiError ? e.code : 'unknown'))
  }
}

const tab = (on: boolean) =>
  cn(
    'h-8 rounded-[4px] px-3 text-[13px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    on ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground',
  )
</script>

<template>
  <PageHeader :title="t('sites.title')" :sub="t('sites.sub')" />
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="loadSites" />

    <div class="flex flex-wrap items-center gap-3">
      <div v-if="canAssign" class="flex rounded-md border bg-card p-0.5" role="tablist" :aria-label="t('sites.title')">
        <button type="button" role="tab" :aria-selected="view === 'sites'" :class="tab(view === 'sites')" @click="view = 'sites'">
          {{ t('sites.tab.sites') }} <span class="text-muted-foreground tnum">{{ sites?.length ?? '' }}</span>
        </button>
        <button type="button" role="tab" :aria-selected="view === 'unlinked'" :class="tab(view === 'unlinked')" @click="view = 'unlinked'">
          {{ t('sites.tab.unlinked') }} <span class="text-muted-foreground tnum">{{ unlinked?.length ?? '' }}</span>
        </button>
      </div>
      <template v-if="view === 'sites'">
        <NativeSelect v-if="networks.length > 1" v-model="networkId" :options="networkOptions" class="w-full sm:w-56" :aria-label="t('sites.col.network')" />
        <Checkbox id="sites-archived" v-model="archived" :label="t('sites.archived')" />
        <div class="relative w-full sm:ml-auto sm:w-64">
          <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input v-model="q" :aria-label="t('sites.searchLabel')" class="h-9 bg-card pl-9" :placeholder="t('sites.search')" />
        </div>
      </template>
    </div>

    <template v-if="view === 'sites'">
      <DataTable v-if="!loadError" :min="760">
        <thead>
          <tr>
            <th :class="th">{{ t('sites.col.site') }}</th>
            <th v-if="networks.length" :class="th">{{ t('sites.col.network') }}</th>
            <th :class="th">{{ t('sites.col.approval') }}</th>
            <th :class="[th, 'text-right']">{{ t('sites.col.units') }}</th>
            <th :class="th">{{ t('sites.col.synced') }}</th>
          </tr>
        </thead>
        <tbody>
          <TableState
            :cols="networks.length ? 5 : 4"
            :loading="!sites"
            :empty="!!sites && shown.length === 0"
            :icon="Globe"
            :title="sites?.length ? undefined : t('sites.empty')"
            :desc="sites?.length ? t('sites.noMatch') : assignedOnly ? t('sites.emptyAssigned') : t('sites.emptySub')"
          >
            <Button v-if="!sites?.length && canConnect" size="sm" @click="router.push('/networks/conectar')">{{ t('net.connect') }}</Button>
          </TableState>
          <tr v-for="s in shown" :key="s.id" class="hover:bg-muted">
            <td :class="td">
              <RouterLink :to="`/sites/${s.id}`" class="font-medium hover:underline focus-visible:underline focus-visible:outline-none">{{ s.domain }}</RouterLink>
              <Badge v-if="s.status === 'archived'" class="ml-2">{{ t('sites.archivedBadge') }}</Badge>
            </td>
            <td v-if="networks.length" :class="[td, 'text-muted-foreground']">{{ netName(s.network_id) }}</td>
            <td :class="td">
              <Status :tone="approval(s.approval_status).tone">{{ approval(s.approval_status).label }}</Status>
            </td>
            <td :class="[td, 'text-right tnum']">{{ s.ad_units }}</td>
            <td :class="[td, 'text-muted-foreground']" :title="formatDate(s.synced_at)">{{ formatAgo(s.synced_at) }}</td>
          </tr>
        </tbody>
      </DataTable>
    </template>

    <template v-else>
      <p class="max-w-[70ch] text-[14px] text-muted-foreground">{{ t('sites.unlinkedSub') }}</p>
      <DataTable :min="720">
        <thead>
          <tr>
            <th :class="th">{{ t('site.units') }}</th>
            <th :class="th">{{ t('site.code') }}</th>
            <th v-if="networks.length" :class="th">{{ t('sites.col.network') }}</th>
            <th :class="th">{{ t('sites.linkTo') }}</th>
          </tr>
        </thead>
        <tbody>
          <TableState :cols="networks.length ? 4 : 3" :loading="!unlinked" :empty="unlinked?.length === 0" :desc="t('sites.unlinkedEmpty')" />
          <tr v-for="u in unlinked ?? []" :key="u.id">
            <td :class="[td, 'font-medium']">{{ u.name }}</td>
            <td :class="[td, 'font-mono text-[13px] text-muted-foreground']">{{ u.code ?? '' }}</td>
            <td v-if="networks.length" :class="[td, 'text-muted-foreground']">{{ netName(u.network_id) }}</td>
            <td :class="td">
              <NativeSelect
                :model-value="choice[u.id] ?? ''"
                :options="siteOptionsFor(u)"
                class="w-full max-w-[260px]"
                :aria-label="`${t('sites.linkTo')}: ${u.name}`"
                @update:model-value="(v: string) => ((choice[u.id] = v), link(u))"
              />
            </td>
          </tr>
        </tbody>
      </DataTable>
    </template>
  </PageBody>
</template>
