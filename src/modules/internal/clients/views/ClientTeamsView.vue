<script setup lang="ts">
/** Painel interno: as pessoas das equipes das Empresas cliente, com busca e filtro por Empresa. */
import { computed, onMounted, ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { Search, Users } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Avatar from '@/components/ui/Avatar.vue'
import Badge from '@/components/ui/Badge.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, pick, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import type { ClientMember, ClientOption } from '@/modules/internal/clients/types'
import { clientService } from '@/modules/internal/clients/service'

const SEARCH_DELAY_MS = 300
const members = ref<ClientMember[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const clients = ref<ClientOption[]>([])
const loadError = ref<string | null>(null)
const searchText = ref('')
const clientId = ref('')

const clientOptions = computed(() => [
  { value: '', label: t('int.teamsAllClients') },
  ...clients.value.map((client) => ({ value: client.id, label: client.name })),
])

/** Busca as pessoas das equipes com o filtro e a busca atuais. */
async function load() {
  loadError.value = null
  try {
    const found = await clientService.teams({ page: page.value, q: searchText.value.trim() || undefined, company_id: clientId.value || undefined })
    members.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Carrega as Empresas cliente do filtro e a primeira página da lista. */
async function start() {
  try {
    clients.value = (await clientService.options()).items
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
    return
  }
  await load()
}
onMounted(start)

/** Volta para a página 1 com o filtro ou a busca nova, ou recarrega se já estiver nela. */
function firstPage() {
  if (page.value === 1) void load()
  else page.value = 1
}
const searchMembers = useDebounceFn(firstPage, SEARCH_DELAY_MS)
watch(searchText, () => void searchMembers())
watch(clientId, firstPage)
watch(page, load)

/** Texto da situação do membro. */
const statusText = (member: ClientMember) => (member.status === 'active' ? t('team.active') : t('team.suspended'))
</script>

<template>
  <PageHeader :title="t('nav.team')" :sub="t('int.teamsSub')" />
  <PageBody>
    <div class="flex flex-col gap-3 sm:flex-row">
      <div class="relative w-full sm:w-80">
        <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input v-model="searchText" type="search" :aria-label="t('int.teamsSearch')" class="h-10 bg-card pl-9" :placeholder="t('int.teamsSearch')" />
      </div>
      <NativeSelect v-model="clientId" :options="clientOptions" :aria-label="t('int.teamsClient')" class="w-full sm:w-64" />
    </div>
    <LoadError v-if="loadError" :message="loadError" @retry="start" />
    <DataTable v-else :min="760">
      <thead>
        <tr>
          <th :class="th">{{ t('int.person') }}</th>
          <th :class="th">{{ t('int.teamsClient') }}</th>
          <th :class="th">{{ t('team.role') }}</th>
          <th :class="th">{{ t('team.status') }}</th>
          <th :class="th">{{ t('team.since') }}</th>
        </tr>
      </thead>
      <tbody>
        <TableState :cols="5" :loading="!members" :empty="members?.length === 0" :icon="Users" :title="t('int.teamsNone')" />
        <tr v-for="member in members ?? []" :key="member.id">
          <td :class="td">
            <div class="flex items-center gap-3">
              <Avatar :name="member.user.name" :image-url="member.user.image_url" :size="28" />
              <div class="min-w-0">
                <div class="font-medium">{{ member.user.name }}</div>
                <div class="truncate text-[13px] text-muted-foreground">{{ member.user.email }}</div>
              </div>
            </div>
          </td>
          <td :class="td">
            <RouterLink :to="`/interno/clientes/${member.company.id}`" class="text-link hover:underline">{{ member.company.name }}</RouterLink>
          </td>
          <td :class="td">
            <Badge v-if="member.is_owner">{{ t('int.owner') }}</Badge>
            <template v-else>{{ pick(member.role?.name) }}</template>
          </td>
          <td :class="td">
            <Status :tone="member.status === 'active' ? 'ok' : 'neutral'">{{ statusText(member) }}</Status>
          </td>
          <td :class="[td, 'text-muted-foreground']">{{ formatDate(member.joined_at, false) }}</td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
  </PageBody>
</template>
