<script setup lang="ts">
/** Lista de sites e de ad units sem site, com cadastro manual. */
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { Globe, Search } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatAgo, formatDate, t } from '@/lib/i18n'
import { networkName } from '@/modules/networks/rules'
import { approval } from '@/modules/sites/rules'
import { td, th } from '@/lib/table'
import type { Network } from '@/modules/networks/types'
import type { AdUnit, SiteListItem } from '@/modules/sites/types'
import { cn } from '@/lib/utils'
import { useSession } from '@/stores/session'
import { networkService } from '@/modules/networks/service'
import { siteService } from '@/modules/sites/service'

const session = useSession()
const router = useRouter()
const canConnect = computed(() => session.can('network.connect'))
const canManage = computed(() => session.can('sites.manage'))
const sites = ref<SiteListItem[] | null>(null)
const networks = ref<Network[]>([])
const unlinked = ref<AdUnit[] | null>(null)
const loadError = ref<string | null>(null)
const view = ref<'sites' | 'unlinked'>('sites')
const searchText = ref('')
const networkId = ref('')
const archived = ref(false)
const canAssign = computed(() => session.can('sites.assign'))
const assignedOnly = computed(() => session.me?.site_scope === 'assigned' && !session.can('sites.assign'))

/** Carrega os sites. */
async function loadSites() {
  loadError.value = null
  try {
    sites.value = (
      await siteService.list({
        network_id: networkId.value || undefined,
        include_archived: archived.value || undefined,
      })
    ).items
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Carrega os ad units ativos sem site. */
async function loadUnlinked() {
  try {
    unlinked.value = (await siteService.adUnits({ unlinked: true, status: 'active' })).items
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}

onMounted(async () => {
  if (session.can('network.view')) {
    networks.value = (await networkService.list().catch(() => ({ items: [] as Network[] }))).items
  }
  await loadSites()
  if (canAssign.value) await loadUnlinked()
})
watch([networkId, archived], loadSites)

/** Nome da network pelo id. */
const netName = (id: string | null) => {
  const found = networks.value.find((network) => network.id === id)
  return found ? networkName(found) : ''
}

// Cadastro manual: o site fica aguardando o GAM
const adding = ref(false)
const domain = ref('')
const saving = ref(false)
const domainOk = computed(() => /^[^\s.]+(\.[^\s.]+)+$/.test(domain.value.trim().replace(/^[a-z]+:\/\//i, '').split('/')[0] ?? ''))
/** Cadastra um site pelo domínio. */
async function addSite() {
  if (!domainOk.value) return
  saving.value = true
  try {
    const site = await siteService.create(domain.value.trim())
    sites.value = [...(sites.value ?? []), site].sort((first, second) => first.domain.localeCompare(second.domain))
    toast.success(t('sites.added', { domain: site.domain }))
    domain.value = ''
    adding.value = false
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    saving.value = false
  }
}
const networkOptions = computed(() => [{ value: '', label: t('sites.allNetworks') }, ...networks.value.map((network) => ({ value: network.id, label: networkName(network) }))])
const shown = computed(() => {
  const term = searchText.value.trim().toLowerCase()
  return (sites.value ?? []).filter((site) => !term || site.domain.toLowerCase().includes(term))
})

// Ligar ad unit sem site
const choice = ref<Record<string, string>>({})
/** Sites da mesma network que podem receber o ad unit. */
const siteOptionsFor = (adUnit: AdUnit) => [
  { value: '', label: t('sites.choose') },
  ...(sites.value ?? []).filter((site) => site.network_id === adUnit.network_id && site.status === 'active').map((site) => ({ value: site.id, label: site.domain })),
]
/** Liga o ad unit ao site escolhido. */
async function link(adUnit: AdUnit) {
  const siteId = choice.value[adUnit.id]
  if (!siteId) return
  try {
    await siteService.linkAdUnit(adUnit.id, { site_id: siteId })
    toast.success(t('sites.linked', { unit: adUnit.name, site: sites.value?.find((site) => site.id === siteId)?.domain ?? '' }))
    await Promise.all([loadUnlinked(), loadSites()])
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}

/** Classes da aba, ativa ou não. */
const tab = (on: boolean) =>
  cn(
    'h-8 rounded-[4px] px-3 text-[13px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    on ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground',
  )
</script>

<template>
  <PageHeader :title="t('sites.title')" :sub="t('sites.sub')">
    <template v-if="canManage" #actions>
      <Button :variant="adding ? 'outline' : 'default'" :aria-expanded="adding" @click="adding = !adding">
        {{ adding ? t('common.cancel') : t('sites.add') }}
      </Button>
    </template>
  </PageHeader>
  <PageBody>
    <Card v-if="adding" :title="t('sites.add')" :desc="t('sites.addDesc')">
      <form id="new-site" class="max-w-md" @submit.prevent="addSite">
        <Field id="ns-domain" :label="t('sites.domain')">
          <Input id="ns-domain" v-model="domain" autocomplete="off" placeholder="meusite.com.br" />
        </Field>
      </form>
      <template #footer>
        <Button type="submit" form="new-site" :loading="saving" :disabled="!domainOk">{{ t('sites.add') }}</Button>
      </template>
    </Card>

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
          <Input v-model="searchText" :aria-label="t('sites.searchLabel')" class="h-9 bg-card pl-9" :placeholder="t('sites.search')" />
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
            <template v-if="!sites?.length">
              <Button v-if="canConnect" size="sm" @click="router.push('/networks/conectar')">{{ t('net.connect') }}</Button>
              <Button v-if="canManage && !adding" size="sm" variant="outline" @click="adding = true">{{ t('sites.add') }}</Button>
            </template>
          </TableState>
          <tr v-for="site in shown" :key="site.id" class="hover:bg-muted">
            <td :class="td">
              <RouterLink :to="`/sites/${site.id}`" class="font-medium hover:underline focus-visible:underline focus-visible:outline-none">{{ site.domain }}</RouterLink>
              <Badge v-if="site.status === 'archived'" class="ml-2">{{ t('sites.archivedBadge') }}</Badge>
            </td>
            <td v-if="networks.length" :class="[td, 'text-muted-foreground']">{{ netName(site.network_id) }}</td>
            <td :class="td">
              <Status :tone="approval(site).tone">{{ approval(site).label }}</Status>
            </td>
            <td :class="[td, 'text-right tnum']">{{ site.ad_units }}</td>
            <td :class="[td, 'text-muted-foreground']" :title="site.synced_at ? formatDate(site.synced_at) : undefined">
              {{ site.synced_at ? formatAgo(site.synced_at) : '' }}
            </td>
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
          <tr v-for="unit in unlinked ?? []" :key="unit.id">
            <td :class="[td, 'font-medium']">{{ unit.name }}</td>
            <td :class="[td, 'font-mono text-[13px] text-muted-foreground']">{{ unit.code ?? '' }}</td>
            <td v-if="networks.length" :class="[td, 'text-muted-foreground']">{{ netName(unit.network_id) }}</td>
            <td :class="td">
              <NativeSelect
                :model-value="choice[unit.id] ?? ''"
                :options="siteOptionsFor(unit)"
                class="w-full max-w-[260px]"
                :aria-label="`${t('sites.linkTo')}: ${unit.name}`"
                @update:model-value="(value: string) => ((choice[unit.id] = value), link(unit))"
              />
            </td>
          </tr>
        </tbody>
      </DataTable>
    </template>
  </PageBody>
</template>
