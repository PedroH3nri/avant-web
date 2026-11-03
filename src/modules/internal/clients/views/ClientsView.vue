<script setup lang="ts">
/** Painel interno: clientes com visões salvas (colunas, filtros e ordem), cadastro de cliente novo
 * (sem e-mail) e convites de dono pendentes. */
import { computed, onMounted, ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { toast } from 'vue-sonner'
import { useRouter } from 'vue-router'
import { Building2, Search, UserSearch } from 'lucide-vue-next'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import ClientProfileForm from '@/modules/internal/clients/components/ClientProfileForm.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import CompanyIcon from '@/components/CompanyIcon.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import SeatBar from '@/components/ui/SeatBar.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import RevenueStatusBadge from '@/modules/revenue/components/RevenueStatusBadge.vue'
import { ApiError } from '@/lib/api'
import { latestCall } from '@/lib/latest'
import { emptyProfile, profileBody, profileOk, STATUS_TONE } from '@/modules/internal/clients/rules'
import { errorText, formatAgo, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import type { CompanyStatus } from '@/modules/company/types'
import type { Client, ClientOption, OwnerInvitation } from '@/modules/internal/clients/types'
import { useSession } from '@/stores/session'
import { clientService } from '@/modules/internal/clients/service'
import { staffService } from '@/modules/internal/staff/service'
import ColumnsMenu from '@/modules/views/components/ColumnsMenu.vue'
import SavedViewsBar from '@/modules/views/components/SavedViewsBar.vue'
import { cleanFilters, firstValue, parseSort, sortValue } from '@/modules/views/rules'
import type { ViewDefinition, ViewSort } from '@/modules/views/types'

type Tab = 'all' | CompanyStatus

const SEARCH_DELAY_MS = 300
const ALL = 'all'
const COLUMNS = ['client', 'contact', 'manager', 'employees', 'status', 'revenue']
const SORTS: ViewSort[] = [
  { key: 'created_at', direction: 'desc' },
  { key: 'created_at', direction: 'asc' },
  { key: 'name', direction: 'asc' },
  { key: 'name', direction: 'desc' },
]
const DEFAULT_VIEW: ViewDefinition = { columns: ['client', 'contact', 'employees', 'status', 'revenue'], filters: {}, sort: SORTS[0] ?? null }

const session = useSession()
const canManage = computed(() => session.can('internal.clients.manage'))
const canSearchPeople = computed(() => session.can('internal.users.manage'))
const router = useRouter()
const clients = ref<Client[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const options = ref<ClientOption[]>([])
const invites = ref<OwnerInvitation[]>([])
const invitePage = ref(1)
const inviteTotal = ref(0)
const invitePages = ref(0)
const loadError = ref<string | null>(null)
const searchText = ref('')
const tab = ref<Tab>('all')
const manager = ref(ALL)
const sort = ref(sortValue(SORTS[0] as ViewSort))
const columns = ref<string[]>([...DEFAULT_VIEW.columns])
const staff = ref<{ value: string; label: string }[]>([])
const staffNames = computed(() => new Map(staff.value.map((person) => [person.value, person.label])))
const current = computed<ViewDefinition>(() => ({
  columns: columns.value,
  filters: cleanFilters({
    query: searchText.value,
    status: tab.value === 'all' ? undefined : tab.value,
    account_manager_ids: manager.value === ALL ? [] : [manager.value],
  }),
  sort: parseSort(sort.value),
}))

const adding = ref(false)
const name = ref('')
const seats = ref('5')
const profile = ref(emptyProfile())
const creating = ref(false)
const seatsOk = computed(() => Number.isInteger(Number(seats.value)) && Number(seats.value) >= 1 && Number(seats.value) <= 10000)
const formOk = computed(() => name.value.trim().length >= 2 && seatsOk.value && profileOk(profile.value))
const referrers = computed(() => options.value.map((client) => ({ id: client.id, name: client.name })))
const clientNames = computed(() => new Map(options.value.map((client) => [client.id, client.name])))

const canceling = ref<OwnerInvitation | null>(null)
const cancelOpen = computed({
  get: () => canceling.value !== null,
  set: (value) => {
    if (!value) canceling.value = null
  },
})
const busy = ref(false)

/** Mostra o erro num aviso. */
const fail = (error: unknown) => toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))

const clientsCall = latestCall()
/** Carrega a página dos clientes com a aba e a busca. */
async function loadClients() {
  try {
    const found = await clientsCall(() => clientService.list({
      page: page.value,
      q: searchText.value.trim() || undefined,
      status: tab.value === 'all' ? undefined : tab.value,
      manager: manager.value === ALL ? undefined : [manager.value],
      sort: parseSort(sort.value)?.key,
      direction: parseSort(sort.value)?.direction,
    }))
    if (!found) return
    clients.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

const invitesCall = latestCall()
/** Carrega a página dos convites de dono; se ela ficou vazia, volta uma. */
async function loadInvites() {
  try {
    const found = await invitesCall(() => clientService.ownerInvitations({ page: invitePage.value }))
    if (!found) return
    if (found.items.length === 0 && invitePage.value > 1) {
      invitePage.value = Math.max(1, found.pages)
      return
    }
    invites.value = found.items
    inviteTotal.value = found.total
    invitePages.value = found.pages
  } catch (error) {
    fail(error)
  }
}

/** Carrega a equipe Groone para o filtro e a coluna de responsável; sem acesso, fica vazia. */
async function loadStaff() {
  try {
    staff.value = (await staffService.options()).items.map((person) => ({ value: person.user.id, label: person.user.name }))
  } catch {
    staff.value = []
  }
}

/** Carrega os clientes, a lista leve (abas e nomes) e os convites de dono. */
async function load() {
  loadError.value = null
  try {
    options.value = (await clientService.options()).items
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
    return
  }
  await Promise.all([loadClients(), loadInvites(), loadStaff()])
}
onMounted(load)

/** Volta para a página 1 com a aba ou a busca nova, ou recarrega se já estiver nela. */
function firstPage() {
  if (page.value === 1) void loadClients()
  else page.value = 1
}
const searchClients = useDebounceFn(firstPage, SEARCH_DELAY_MS)
watch(searchText, () => void searchClients())
watch([tab, manager, sort], firstPage)
watch(page, loadClients)
watch(invitePage, loadInvites)

const tabs: Tab[] = ['all', 'active', 'pending', 'inactive', 'banned']
const statusOptions = computed(() => tabs.map((option) => ({ value: option, label: `${option === 'all' ? t('int.allStatuses') : t(`int.tab.${option}`)} (${counts.value[option]})` })))
const managerOptions = computed(() => [{ value: ALL, label: t('int.allManagers') }, ...staff.value])
const sortOptions = SORTS.map((option) => ({ value: sortValue(option), label: t(`int.sort.${option.key}.${option.direction}` as Key) }))
/** Diz se a coluna aparece na tabela. */
const shown = (column: string) => columns.value.includes(column)
/** O nome da coluna no menu de colunas. */
const columnLabel = (column: string) => t(`int.column.${column}` as Key)

/** Põe na tabela as colunas, os filtros e a ordem da visão escolhida. */
function applyView(definition: ViewDefinition) {
  const known = definition.columns.filter((column) => COLUMNS.includes(column))
  columns.value = known.length ? known : [...DEFAULT_VIEW.columns]
  searchText.value = firstValue(definition.filters.query)
  const status = firstValue(definition.filters.status)
  tab.value = (tabs as string[]).includes(status) ? (status as Tab) : 'all'
  manager.value = firstValue(definition.filters.account_manager_ids) || ALL
  const chosen = definition.sort && SORTS.find((option) => sortValue(option) === sortValue(definition.sort as ViewSort))
  sort.value = sortValue(chosen || (SORTS[0] as ViewSort))
}
const counts = computed(() => {
  const list = options.value
  return Object.fromEntries(tabs.map((option) => [option, option === 'all' ? list.length : list.filter((client) => client.status === option).length])) as Record<Tab, number>
})
/** Fecha o formulário e volta aos valores iniciais. */
function closeForm() {
  adding.value = false
  name.value = ''
  seats.value = '5'
  profile.value = emptyProfile()
}

/** Cadastra o cliente pendente; o convite de dono sai depois, pela página do cliente. */
async function create() {
  if (!formOk.value) return
  creating.value = true
  try {
    const client = await clientService.create({ name: name.value.trim(), seat_limit: Number(seats.value), profile: profileBody(profile.value) })
    toast.success(t('int.clientCreated', { name: client.name }))
    closeForm()
    await router.push(`/interno/clientes/${client.id}`)
  } catch (error) {
    fail(error)
  } finally {
    creating.value = false
  }
}

/** Reenvia um convite de dono. */
async function resend(invitation: OwnerInvitation) {
  try {
    const fresh = await clientService.resendOwnerInvitation(invitation.id)
    invites.value = invites.value.map((invite) => (invite.id === invitation.id ? fresh : invite))
    toast.success(t('int.resent'))
  } catch (error) {
    fail(error)
  }
}

/** Cancela o convite de dono escolhido. */
async function cancelInvite() {
  const invitation = canceling.value
  if (!invitation) return
  busy.value = true
  try {
    await clientService.cancelOwnerInvitation(invitation.id)
    await loadInvites()
    canceling.value = null
    toast.success(t('int.canceled'))
  } catch (error) {
    fail(error)
  } finally {
    busy.value = false
  }
}

/** Limpa a busca e volta para todos os clientes. */
function clearFilters() {
  searchText.value = ''
  tab.value = 'all'
  manager.value = ALL
}

/** Diz se a data já passou. */
const expired = (iso: string) => new Date(iso).getTime() <= Date.now()
/** Nome de quem indicou o cliente, quando houver. */
const referrerName = (client: Client) => (client.profile?.referred_by_company_id ? clientNames.value.get(client.profile.referred_by_company_id) : undefined)
</script>

<template>
  <PageHeader :title="t('int.clients')" :sub="t('int.sub')">
    <template #actions>
      <Button v-if="canSearchPeople" variant="outline" @click="router.push('/interno/pessoas')"><UserSearch />{{ t('int.peopleSearchOpen') }}</Button>
      <Button v-if="canManage && !adding" @click="adding = true">{{ t('int.new') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <Card v-if="adding" :title="t('int.new')" :desc="t('int.newDesc')" :footer-note="t('int.newNote')">
      <form id="new-client" class="grid gap-6" @submit.prevent="create">
        <fieldset class="grid gap-4 md:grid-cols-[1fr_120px]">
          <legend class="mb-3 text-[13px] font-medium text-muted-foreground">{{ t('int.section.company') }}</legend>
          <Field id="nc-name" :label="t('int.clientName')">
            <Input id="nc-name" v-model="name" maxlength="120" autocomplete="off" placeholder="Portal da Cidade" />
          </Field>
          <Field id="nc-seats" :label="t('int.seats')">
            <Input id="nc-seats" v-model="seats" type="number" min="1" max="10000" class="tnum" :invalid="!seatsOk" />
          </Field>
        </fieldset>
        <ClientProfileForm v-model="profile" id-prefix="nc" :referrers="referrers" />
      </form>
      <template #footer>
        <Button variant="outline" @click="closeForm">{{ t('common.cancel') }}</Button>
        <Button type="submit" form="new-client" :loading="creating" :disabled="!formOk">{{ t('int.createClient') }}</Button>
      </template>
    </Card>

    <LoadError v-if="loadError" :message="loadError" @retry="load" />

    <Card v-if="invites.length" :title="t('int.pendingOwners')" :desc="t('int.pendingOwnersDesc')">
      <ul class="-my-3 divide-y">
        <li v-for="invite in invites" :key="invite.id" class="flex flex-wrap items-center gap-x-4 gap-y-2 py-3">
          <div class="min-w-0 flex-1">
            <div class="truncate text-[14px] font-medium">{{ invite.email }}</div>
            <div class="mt-0.5 text-[13px] text-muted-foreground">
              <template v-if="invite.company_id && clientNames.get(invite.company_id)">{{ clientNames.get(invite.company_id) }} · </template>
              <span :class="expired(invite.expires_at) && 'text-ochre'">{{
                expired(invite.expires_at) ? t('int.expired') : t('int.expires', { when: formatAgo(invite.expires_at) })
              }}</span>
            </div>
          </div>
          <div v-if="canManage" class="flex gap-2">
            <Button variant="outline" size="sm" @click="resend(invite)">{{ t('int.resend') }}</Button>
            <Button variant="destructive" size="sm" @click="canceling = invite">{{ t('int.cancelInvite') }}</Button>
          </div>
        </li>
      </ul>
      <Pagination v-if="invitePages > 1" v-model:page="invitePage" :total="inviteTotal" :pages="invitePages" class="mt-3" />
    </Card>

    <template v-if="clients">
      <SavedViewsBar screen="clients" :default-label="t('int.allClients')" :current="current" :defaults="DEFAULT_VIEW" @apply="applyView">
        <div class="relative w-full sm:w-64">
          <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input v-model="searchText" :aria-label="t('int.searchLabel')" class="h-9 bg-card pl-9" :placeholder="t('int.search')" />
        </div>
        <NativeSelect v-model="tab" :options="statusOptions" :aria-label="t('int.situation')" class="w-full sm:w-44 [&_select]:h-9" />
        <NativeSelect v-model="manager" :options="managerOptions" :aria-label="t('int.column.manager')" class="w-full sm:w-52 [&_select]:h-9" />
        <NativeSelect v-model="sort" :options="sortOptions" :aria-label="t('views.sort')" class="w-full sm:w-56 [&_select]:h-9" />
        <ColumnsMenu v-model:shown="columns" :columns="COLUMNS" :label="columnLabel" />
      </SavedViewsBar>

      <DataTable :min="760">
        <thead>
          <tr>
            <th v-if="shown('client')" :class="th">{{ t('int.client') }}</th>
            <th v-if="shown('contact')" :class="th">{{ t('int.contact') }}</th>
            <th v-if="shown('manager')" :class="th">{{ t('int.column.manager') }}</th>
            <th v-if="shown('employees')" :class="th">{{ t('int.employees') }}</th>
            <th v-if="shown('status')" :class="th">{{ t('int.situation') }}</th>
            <th v-if="shown('revenue')" :class="th">{{ t('int.column.revenue') }}</th>
            <th :class="[th, 'w-16']"><span class="sr-only">{{ t('int.open') }}</span></th>
          </tr>
        </thead>
        <tbody>
          <TableState
            :cols="columns.length + 1"
            :empty="!clients.length"
            :icon="Building2"
            :title="options.length ? t('int.none') : t('int.empty')"
            :desc="options.length ? t('int.noneSub') : t('int.emptySub')"
          >
            <Button v-if="options.length" variant="outline" size="sm" @click="clearFilters">{{ t('int.clear') }}</Button>
            <Button v-else-if="canManage && !adding" size="sm" @click="adding = true">{{ t('int.new') }}</Button>
          </TableState>
          <tr v-for="client in clients" :key="client.id" class="hover:bg-muted">
            <td v-if="shown('client')" :class="td">
              <div class="flex items-center gap-3">
                <CompanyIcon :name="client.name" :image-url="client.image_url" :size="28" />
                <div class="min-w-0">
                  <RouterLink :to="`/interno/clientes/${client.id}`" class="font-medium hover:underline">{{ client.name }}</RouterLink>
                  <div v-if="referrerName(client)" class="truncate text-[13px] text-muted-foreground">{{ t('int.referredByName', { name: referrerName(client) ?? '' }) }}</div>
                </div>
              </div>
            </td>
            <td v-if="shown('contact')" :class="td">
              <template v-if="client.profile">
                <div class="truncate">{{ client.profile.first_name }} {{ client.profile.last_name }}</div>
                <div class="truncate text-[13px] text-muted-foreground">{{ client.profile.email }}</div>
              </template>
              <span v-else class="text-[13px] text-muted-foreground">{{ client.owner?.email ?? t('int.none.dash') }}</span>
            </td>
            <td v-if="shown('manager')" :class="td">
              <span v-if="client.profile?.account_manager_id">{{ staffNames.get(client.profile.account_manager_id) ?? t('int.none.dash') }}</span>
              <span v-else class="text-[13px] text-muted-foreground">{{ t('int.none.dash') }}</span>
            </td>
            <td v-if="shown('employees')" :class="td">
              <div class="flex items-center gap-3">
                <SeatBar
                  class="w-28"
                  :used="client.seats_used"
                  :pending="0"
                  :limit="client.seat_limit"
                  :label="t('int.seatsLabel', { used: client.seats_used, limit: client.seat_limit })"
                />
                <span class="tnum text-[13px] text-muted-foreground">{{ client.seats_used }}/{{ client.seat_limit }}</span>
              </div>
            </td>
            <td v-if="shown('status')" :class="td">
              <Status :tone="STATUS_TONE[client.status]">{{ t(`int.status.${client.status}`) }}</Status>
            </td>
            <td v-if="shown('revenue')" :class="td"><RevenueStatusBadge :status="client.revenue_status" /></td>
            <td :class="td">
              <RouterLink
                :to="`/interno/clientes/${client.id}`"
                class="inline-flex h-8 items-center rounded-md px-3 text-[13px] font-medium hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                :aria-label="`${t('int.open')} ${client.name}`"
                >{{ t('int.open') }}</RouterLink
              >
            </td>
          </tr>
        </tbody>
      </DataTable>
      <Pagination v-model:page="page" :total="total" :pages="pages" />
    </template>
  </PageBody>
  <ConfirmDialog
    v-model:open="cancelOpen"
    :title="t('int.cancelInviteTitle', { email: canceling?.email ?? '' })"
    :desc="t('int.cancelInviteDesc')"
    :action="t('int.cancelInvite')"
    :busy="busy"
    @confirm="cancelInvite"
  />
</template>
