<script setup lang="ts">
/** Painel interno: as networks do GAM de todos os clientes, com o cliente e o status de faturamento. */
import { onMounted, ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { Network as NetworkIcon, Search } from 'lucide-vue-next'
import CompanyIcon from '@/components/CompanyIcon.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Input from '@/components/ui/Input.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { latestCall } from '@/lib/latest'
import { td, th } from '@/lib/table'
import { clientInventoryService } from '@/modules/internal/inventory/service'
import type { ClientNetwork } from '@/modules/internal/inventory/types'
import NetworkReviewActions from '@/modules/internal/inventory/components/NetworkReviewActions.vue'
import { networkName, networkTone, statusKey } from '@/modules/networks/rules'
import { useSession } from '@/stores/session'
import RevenueStatusBadge from '@/modules/revenue/components/RevenueStatusBadge.vue'

const SEARCH_DELAY_MS = 300
const networks = ref<ClientNetwork[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)
const searchText = ref('')
const awaitingOnly = ref(false)
const canAssign = useSession().can('internal.networks.assign')

const networksCall = latestCall()
/** Busca a página atual das networks com a busca digitada. */
async function load() {
  loadError.value = null
  try {
    const found = await networksCall(() => clientInventoryService.networks({ page: page.value, q: searchText.value.trim() || undefined, awaiting_confirmation: awaitingOnly.value || undefined }))
    if (!found) return
    networks.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)

/** Volta para a página 1 com a busca nova, ou recarrega se já estiver nela. */
function firstPage() {
  if (page.value === 1) void load()
  else page.value = 1
}
const searchNetworks = useDebounceFn(firstPage, SEARCH_DELAY_MS)
watch(searchText, () => void searchNetworks())
watch(awaitingOnly, firstPage)
watch(page, load)
</script>

<template>
  <PageHeader :title="t('nav.networks')" :sub="t('inv.networksSub')" />
  <PageBody>
    <div class="flex flex-wrap items-center gap-4">
      <div class="relative w-full sm:w-80">
        <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input v-model="searchText" type="search" :aria-label="t('inv.networksSearch')" class="h-10 bg-card pl-9" :placeholder="t('inv.networksSearch')" />
      </div>
      <Checkbox id="networks-awaiting" v-model="awaitingOnly" :label="t('inv.awaitingOnly')" />
    </div>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="900">
      <thead>
        <tr>
          <th :class="th">{{ t('net.col.network') }}</th>
          <th :class="th">{{ t('int.column.client') }}</th>
          <th :class="th">{{ t('net.col.status') }}</th>
          <th :class="th">{{ t('int.column.revenue') }}</th>
          <th :class="[th, 'text-right']">{{ t('net.col.sites') }}</th>
          <th :class="th"><span class="sr-only">{{ t('team.actions') }}</span></th>
        </tr>
      </thead>
      <tbody>
        <TableState :cols="6" :loading="!networks" :empty="networks?.length === 0" :icon="NetworkIcon" :title="t('inv.networksNone')" />
        <tr v-for="network in networks ?? []" :key="network.id" class="hover:bg-muted">
          <td :class="td">
            <div class="font-medium">{{ networkName(network) }}</div>
            <div class="tnum font-mono text-[13px] text-muted-foreground">{{ network.network_code }}</div>
          </td>
          <td :class="td">
            <div class="flex items-center gap-2">
              <CompanyIcon :name="network.client.name" :image-url="network.client.image_url" :size="20" />
              <RouterLink :to="`/interno/clientes/${network.client.id}`" class="truncate hover:underline">{{ network.client.name }}</RouterLink>
            </div>
          </td>
          <td :class="td">
            <Status :tone="networkTone(network)">{{ t(statusKey(network)) }}</Status>
            <div v-if="network.mcm_email" class="mt-1 text-[13px] text-muted-foreground">{{ t('inv.mcmEmail', { email: network.mcm_email }) }}</div>
          </td>
          <td :class="td"><RevenueStatusBadge :status="network.revenue_status" /></td>
          <td :class="[td, 'tnum text-right']">{{ network.sites }}</td>
          <td :class="td">
            <NetworkReviewActions
              v-if="canAssign && network.awaiting_confirmation"
              :network-id="network.id"
              :network-code="network.network_code"
              :client-name="network.client.name"
              @changed="load"
            />
          </td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
  </PageBody>
</template>
