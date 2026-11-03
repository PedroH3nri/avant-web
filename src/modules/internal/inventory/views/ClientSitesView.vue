<script setup lang="ts">
/** Painel interno: os sites de todos os clientes, com o cliente, a network e o status de faturamento. */
import { computed, onMounted, ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { Globe, Search } from 'lucide-vue-next'
import CompanyIcon from '@/components/CompanyIcon.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { latestCall } from '@/lib/latest'
import { td, th } from '@/lib/table'
import { clientInventoryService } from '@/modules/internal/inventory/service'
import type { ClientSite } from '@/modules/internal/inventory/types'
import RevenueStatusBadge from '@/modules/revenue/components/RevenueStatusBadge.vue'
import { approval } from '@/modules/sites/rules'
import { useSession } from '@/stores/session'

const SEARCH_DELAY_MS = 300
const session = useSession()
const canSeeChecklists = computed(() => session.can('internal.checklists.view'))
const sites = ref<ClientSite[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)
const searchText = ref('')

const sitesCall = latestCall()
/** Busca a página atual dos sites com a busca digitada. */
async function load() {
  loadError.value = null
  try {
    const found = await sitesCall(() => clientInventoryService.sites({ page: page.value, q: searchText.value.trim() || undefined }))
    if (!found) return
    sites.value = found.items
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
const searchSites = useDebounceFn(firstPage, SEARCH_DELAY_MS)
watch(searchText, () => void searchSites())
watch(page, load)
</script>

<template>
  <PageHeader :title="t('nav.sites')" :sub="t('inv.sitesSub')" />
  <PageBody>
    <div class="relative w-full sm:w-80">
      <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
      <Input v-model="searchText" type="search" :aria-label="t('inv.sitesSearch')" class="h-10 bg-card pl-9" :placeholder="t('inv.sitesSearch')" />
    </div>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="900">
      <thead>
        <tr>
          <th :class="th">{{ t('sites.col.site') }}</th>
          <th :class="th">{{ t('int.column.client') }}</th>
          <th :class="th">{{ t('sites.col.approval') }}</th>
          <th :class="th">{{ t('int.column.revenue') }}</th>
          <th :class="[th, 'text-right']">{{ t('sites.col.units') }}</th>
          <th v-if="canSeeChecklists" :class="th">{{ t('check.col.checklist') }}</th>
        </tr>
      </thead>
      <tbody>
        <TableState :cols="canSeeChecklists ? 6 : 5" :loading="!sites" :empty="sites?.length === 0" :icon="Globe" :title="t('inv.sitesNone')" />
        <tr v-for="site in sites ?? []" :key="site.id" class="hover:bg-muted">
          <td :class="td">
            <div class="font-medium">{{ site.domain }}</div>
            <div class="truncate text-[13px] text-muted-foreground">{{ site.network_name ?? t('inv.awaitingGam') }}</div>
          </td>
          <td :class="td">
            <div class="flex items-center gap-2">
              <CompanyIcon :name="site.client.name" :image-url="site.client.image_url" :size="20" />
              <RouterLink :to="`/interno/clientes/${site.client.id}`" class="truncate hover:underline">{{ site.client.name }}</RouterLink>
            </div>
          </td>
          <td :class="td">
            <Status :tone="approval(site).tone">{{ approval(site).label }}</Status>
          </td>
          <td :class="td"><RevenueStatusBadge :status="site.revenue_status" /></td>
          <td :class="[td, 'tnum text-right']">{{ site.ad_units }}</td>
          <td v-if="canSeeChecklists" :class="td">
            <RouterLink v-if="site.checklist" :to="`/interno/checklists/${site.checklist.id}`" class="hover:underline">
              <Status v-if="site.checklist.complete" tone="ok">{{ t('check.done') }}</Status>
              <Status v-else tone="ochre">{{ t('check.okCount', { done: site.checklist.done, total: site.checklist.total }) }}</Status>
            </RouterLink>
            <span v-else class="text-[13px] text-muted-foreground">–</span>
          </td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
  </PageBody>
</template>
