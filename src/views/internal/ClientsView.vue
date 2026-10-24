<script setup lang="ts">
/** Painel interno: clientes, novo cliente (convite de dono) e convites de dono pendentes. */
import { computed, onMounted, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import { Building2, Search } from 'lucide-vue-next'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Avatar from '@/components/ui/Avatar.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import SeatBar from '@/components/ui/SeatBar.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { api, ApiError } from '@/lib/api'
import { errorText, formatAgo, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import type { Client, CompanyPlan, Items, OwnerInvitation } from '@/lib/types'
import { cn } from '@/lib/utils'
import { useSession } from '@/stores/session'

type Tab = 'all' | CompanyPlan | 'suspended'

const session = useSession()
const canManage = computed(() => session.can('internal.clients.manage'))
const clients = ref<Client[] | null>(null)
const invites = ref<OwnerInvitation[]>([])
const loadError = ref<string | null>(null)
const searchText = ref('')
const tab = ref<Tab>('all')

const adding = ref(false)
const email = ref('')
const seats = ref('5')
const plan = ref<CompanyPlan>('groone_network')
const creating = ref(false)
const emailOk = computed(() => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim()))
const seatsOk = computed(() => Number.isInteger(Number(seats.value)) && Number(seats.value) >= 1 && Number(seats.value) <= 10000)

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

/** Carrega os clientes e os convites de dono. */
async function load() {
  loadError.value = null
  try {
    const [clientPage, invitationPage] = await Promise.all([
      api.get<Items<Client>>('/internal/clients', { q: searchText.value.trim() || undefined }),
      api.get<Items<OwnerInvitation>>('/internal/owner-invitations'),
    ])
    clients.value = clientPage.items
    invites.value = invitationPage.items.filter((invitation) => invitation.status === 'pending')
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)

// A busca é no servidor; espera a pessoa parar de digitar.
let timer: ReturnType<typeof setTimeout> | undefined
watch(searchText, () => {
  clearTimeout(timer)
  timer = setTimeout(load, 300)
})

const counts = computed(() => {
  const list = clients.value ?? []
  return {
    all: list.length,
    groone_network: list.filter((client) => client.plan === 'groone_network').length,
    external: list.filter((client) => client.plan === 'external').length,
    suspended: list.filter((client) => client.status === 'suspended').length,
  }
})
const shown = computed(() =>
  (clients.value ?? []).filter((client) => tab.value === 'all' || (tab.value === 'suspended' ? client.status === 'suspended' : client.plan === tab.value)),
)
const tabs: Tab[] = ['all', 'groone_network', 'external', 'suspended']
/** Nome da aba no idioma atual. */
const tabLabel = (tab: Tab) => (tab === 'all' ? t('int.tab.all') : tab === 'suspended' ? t('int.tab.suspended') : t(`int.plan.${tab}`))
/** Classes da aba, ativa ou não. */
const tabClass = (on: boolean) =>
  cn(
    'h-8 rounded-[4px] px-3 text-[13px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    on ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground',
  )
const planOptions = computed(() => (['groone_network', 'external'] as const).map((plan) => ({ value: plan, label: t(`int.plan.${plan}`) })))

/** Convida o dono de um cliente novo. */
async function create() {
  if (!emailOk.value || !seatsOk.value) return
  creating.value = true
  try {
    const invitation = await api.post<OwnerInvitation>('/internal/clients', { email: email.value.trim(), seat_limit: Number(seats.value), plan: plan.value })
    invites.value = [invitation, ...invites.value]
    toast.success(t('int.created', { email: invitation.email }))
    email.value = ''
    seats.value = '5'
    adding.value = false
  } catch (error) {
    fail(error)
  } finally {
    creating.value = false
  }
}

/** Reenvia um convite de dono. */
async function resend(invitation: OwnerInvitation) {
  try {
    const fresh = await api.post<OwnerInvitation>(`/internal/owner-invitations/${invitation.id}/resend`)
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
    await api.delete(`/internal/owner-invitations/${invitation.id}`)
    invites.value = invites.value.filter((invite) => invite.id !== invitation.id)
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
}

/** Diz se a data já passou. */
const expired = (iso: string) => new Date(iso).getTime() <= Date.now()
</script>

<template>
  <PageHeader :title="t('int.clients')" :sub="t('int.sub')">
    <template v-if="canManage" #actions>
      <Button :variant="adding ? 'outline' : 'default'" :aria-expanded="adding" @click="adding = !adding">
        {{ adding ? t('common.cancel') : t('int.new') }}
      </Button>
    </template>
  </PageHeader>
  <PageBody>
    <Card v-if="adding" :title="t('int.new')" :desc="t('int.newDesc')">
      <form id="new-client" class="grid gap-4 md:grid-cols-[1.4fr_110px_200px]" @submit.prevent="create">
        <Field id="nc-email" :label="t('int.ownerEmail')">
          <Input id="nc-email" v-model="email" type="email" autocomplete="off" placeholder="dono@site.com" />
        </Field>
        <Field id="nc-seats" :label="t('int.seats')">
          <Input id="nc-seats" v-model="seats" type="number" min="1" max="10000" class="tnum" :invalid="!seatsOk" />
        </Field>
        <Field id="nc-plan" :label="t('int.plan')">
          <NativeSelect id="nc-plan" v-model="plan" :options="planOptions" />
        </Field>
      </form>
      <template #footer>
        <Button type="submit" form="new-client" :loading="creating" :disabled="!emailOk || !seatsOk">{{ t('int.create') }}</Button>
      </template>
    </Card>

    <LoadError v-if="loadError" :message="loadError" @retry="load" />

    <Card v-if="invites.length" :title="t('int.pendingOwners')" :desc="t('int.pendingOwnersDesc')">
      <ul class="-my-3 divide-y">
        <li v-for="invite in invites" :key="invite.id" class="flex flex-wrap items-center gap-x-4 gap-y-2 py-3">
          <div class="min-w-0 flex-1">
            <div class="truncate text-[14px] font-medium">{{ invite.email }}</div>
            <div class="mt-0.5 text-[13px] text-muted-foreground">
              <template v-if="invite.plan">{{ t(`int.plan.${invite.plan}`) }} · </template>
              <template v-if="invite.seat_limit">{{ invite.seat_limit }} {{ t('int.seats').toLowerCase() }} · </template>
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
    </Card>

    <template v-if="clients">
      <div class="flex flex-wrap items-center gap-3">
        <div class="flex flex-wrap rounded-md border bg-card p-0.5" role="tablist" :aria-label="t('int.clients')">
          <button v-for="tabOption in tabs" :key="tabOption" type="button" role="tab" :aria-selected="tab === tabOption" :class="tabClass(tab === tabOption)" @click="tab = tabOption">
            {{ tabLabel(tabOption) }} <span class="tnum text-muted-foreground">{{ counts[tabOption] }}</span>
          </button>
        </div>
        <div class="relative ml-auto w-full sm:w-80">
          <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input v-model="searchText" :aria-label="t('int.searchLabel')" class="h-9 bg-card pl-9" :placeholder="t('int.search')" />
        </div>
      </div>

      <DataTable :min="760">
        <thead>
          <tr>
            <th :class="th">{{ t('int.client') }}</th>
            <th :class="th">{{ t('int.plan') }}</th>
            <th :class="th">{{ t('int.employees') }}</th>
            <th :class="th">{{ t('team.status') }}</th>
            <th :class="[th, 'w-16']"><span class="sr-only">{{ t('int.open') }}</span></th>
          </tr>
        </thead>
        <tbody>
          <TableState
            :cols="5"
            :empty="!shown.length"
            :icon="Building2"
            :title="clients.length ? t('int.none') : t('int.empty')"
            :desc="clients.length ? t('int.noneSub') : t('int.emptySub')"
          >
            <Button v-if="clients.length" variant="outline" size="sm" @click="clearFilters">{{ t('int.clear') }}</Button>
            <Button v-else-if="canManage && !adding" size="sm" @click="adding = true">{{ t('int.new') }}</Button>
          </TableState>
          <tr v-for="client in shown" :key="client.id" class="hover:bg-muted">
            <td :class="td">
              <div class="flex items-center gap-3">
                <Avatar :name="client.name" :size="28" />
                <div class="min-w-0">
                  <RouterLink :to="`/interno/clientes/${client.id}`" class="font-medium hover:underline">{{ client.name }}</RouterLink>
                  <div class="truncate text-[13px] text-muted-foreground">{{ client.owner.email }}</div>
                </div>
              </div>
            </td>
            <td :class="[td, 'text-muted-foreground']">{{ t(`int.plan.${client.plan}`) }}</td>
            <td :class="td">
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
            <td :class="td">
              <Status :tone="client.status === 'active' ? 'ok' : 'bad'">{{ t(`int.status.${client.status}`) }}</Status>
            </td>
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
