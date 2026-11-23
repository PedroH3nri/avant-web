<script setup lang="ts">
/** Painel interno: as Empresas cliente, com busca; cada uma abre o detalhe com a equipe e os grupos. */
import OpenLink from '@/components/OpenLink.vue'
import { onMounted, ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { Building, Search } from 'lucide-vue-next'
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
import { STATUS_TONE } from '@/modules/internal/clients/rules'
import { clientService } from '@/modules/internal/clients/service'
import type { Client } from '@/modules/internal/clients/types'

const SEARCH_DELAY_MS = 300
const companies = ref<Client[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)
const searchText = ref('')

const companiesCall = latestCall()
/** Busca a página atual das Empresas cliente com a busca digitada. */
async function load() {
  loadError.value = null
  try {
    const found = await companiesCall(() => clientService.list({ page: page.value, q: searchText.value.trim() || undefined }))
    if (!found) return
    companies.value = found.items
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
const searchCompanies = useDebounceFn(firstPage, SEARCH_DELAY_MS)
watch(searchText, () => void searchCompanies())
watch(page, load)

/** A página da Empresa, ou a do cliente enquanto ele não criou a Empresa. */
const rowLink = (row: Client) => (row.company ? `/interno/empresas/${row.company.id}` : `/interno/clientes/${row.id}`)
</script>

<template>
  <PageHeader :title="t('int.companies')" :sub="t('int.companiesSub')" />
  <PageBody>
    <div class="relative w-full sm:w-80">
      <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
      <Input v-model="searchText" type="search" :aria-label="t('int.companiesSearch')" class="h-10 bg-card pl-9" :placeholder="t('int.companiesSearch')" />
    </div>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="640">
      <thead>
        <tr>
          <th :class="th">{{ t('int.company') }}</th>
          <th :class="th">{{ t('int.owner') }}</th>
          <th :class="th">{{ t('int.seatsColumn') }}</th>
          <th :class="th">{{ t('team.status') }}</th>
          <th :class="[th, 'w-px']"><span class="sr-only">{{ t('common.open') }}</span></th>
        </tr>
      </thead>
      <tbody>
        <TableState :cols="5" :loading="!companies" :empty="companies?.length === 0" :icon="Building" :title="t('int.companiesNone')" />
        <tr v-for="company in companies ?? []" :key="company.id">
          <td :class="td">
            <RouterLink :to="rowLink(company)" class="flex items-center gap-3 font-medium hover:underline">
              <CompanyIcon :name="company.company?.name ?? company.name" :image-url="company.image_url" :size="28" />
              <span>
                {{ company.company?.name ?? company.name }}
                <span v-if="!company.company" class="block text-[13px] font-normal text-muted-foreground">{{ t('int.noCompany') }}</span>
              </span>
            </RouterLink>
          </td>
          <td :class="td">
            <template v-if="company.owner">
              <div>{{ company.owner.name }}</div>
              <div class="text-[13px] text-muted-foreground">{{ company.owner.email }}</div>
            </template>
            <span v-else class="text-muted-foreground">{{ t('int.none.dash') }}</span>
          </td>
          <td :class="[td, 'tnum']">{{ t('int.seatsLabel', { used: company.seats_used, limit: company.seat_limit }) }}</td>
          <td :class="td">
            <Status :tone="STATUS_TONE[company.status]">{{ t(`int.status.${company.status}`) }}</Status>
          </td>
          <td :class="[td, 'text-right']"><OpenLink :to="rowLink(company)" :name="company.company?.name ?? company.name" /></td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="pages > 1" v-model:page="page" :total="total" :pages="pages" />
  </PageBody>
</template>
