<script setup lang="ts">
/** Facebook: no painel do cliente, perfis, contas, pessoas, avisos e histórico da Empresa; no interno, as contas de todos os clientes, só leitura. */
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { AlertTriangle, Megaphone, Plus, Search, Trash2 } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'
import Segmented from '@/components/ui/Segmented.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatAgo, formatDate, locale, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { clientService } from '@/modules/internal/clients/service'
import FacebookAccountDialog from '@/modules/facebook/components/FacebookAccountDialog.vue'
import FacebookAlertsPanel from '@/modules/facebook/components/FacebookAlertsPanel.vue'
import FacebookHistoryPanel from '@/modules/facebook/components/FacebookHistoryPanel.vue'
import FacebookPersonDialog from '@/modules/facebook/components/FacebookPersonDialog.vue'
import FacebookTabs, { type FacebookTab } from '@/modules/facebook/components/FacebookTabs.vue'
import { accountTone, campaignsPath, formatMoney, overLimit, profileTone } from '@/modules/facebook/rules'
import { FACEBOOK_CONNECT_URL, facebookReader, facebookService } from '@/modules/facebook/service'
import type { FacebookAccount, FacebookPerson, FacebookProfile } from '@/modules/facebook/types'
import { siteService } from '@/modules/sites/service'
import { useSession } from '@/stores/session'

const route = useRoute()
const router = useRouter()
const session = useSession()
const internal = route.meta.internal === true
const reader = facebookReader(internal)

const tab = ref<FacebookTab>('accounts')
const accounts = ref<FacebookAccount[] | null>(null)
const profiles = ref<FacebookProfile[]>([])
const people = ref<FacebookPerson[]>([])
const sites = ref<{ id: string; domain: string }[]>([])
const clients = ref<{ id: string; name: string }[]>([])
const companyId = ref('')
const filter = ref('all')
const query = ref('')
const loadError = ref<string | null>(null)
const unread = ref(0)
const editing = ref<FacebookAccount | null>(null)
const editingOpen = ref(false)
const editingPerson = ref<FacebookPerson | null>(null)
const editingPersonOpen = ref(false)
const leaving = ref<FacebookProfile | null>(null)
const leavingOpen = ref(false)
const leavingBusy = ref(false)

const canConnect = computed(() => !internal && session.can('facebook.connect'))
const canManage = computed(() => !internal && session.can('facebook.accounts.manage'))
const expired = computed(() => profiles.value.filter((profile) => profile.status === 'expired' || profile.status === 'checkpoint'))
const withoutSite = computed(() => (accounts.value ?? []).filter((account) => !account.site_id && account.state !== 'disabled'))
const problems = computed(() => (accounts.value ?? []).filter((account) => account.state !== 'active'))
const shown = computed(() => {
  const source = filter.value === 'nosite' ? withoutSite.value : filter.value === 'problem' ? problems.value : (accounts.value ?? [])
  const wanted = query.value.trim().toLowerCase()
  return source.filter((account) => `${account.name} ${account.external_id} ${clientName(account.company_id)}`.toLowerCase().includes(wanted))
})
const filterOptions = computed(() => [
  { value: 'all', label: t('fb.accounts.all'), note: String(accounts.value?.length ?? 0) },
  { value: 'nosite', label: t('fb.accounts.noSite'), note: String(withoutSite.value.length) },
  { value: 'problem', label: t('fb.accounts.problem'), note: String(problems.value.length) },
])
const clientOptions = computed(() => [{ value: '', label: t('fb.allClients') }, ...clients.value.map((client) => ({ value: client.id, label: client.name }))])
const siteNames = computed(() => new Map(sites.value.map((site) => [site.id, site.domain])))

/** O nome do cliente pelo id da Empresa (só no painel interno). */
function clientName(id: string): string {
  return clients.value.find((client) => client.id === id)?.name ?? ''
}

/** O nome da conta pelo id, para o histórico. */
function accountName(id: string): string {
  return accounts.value?.find((account) => account.id === id)?.name ?? '–'
}

/** Carrega as contas (e os perfis, no painel do cliente). */
async function load() {
  loadError.value = null
  try {
    const [found, foundProfiles] = await Promise.all([
      reader.accounts({ company_id: internal ? companyId.value || undefined : undefined }),
      internal ? Promise.resolve([]) : facebookService.profiles(),
    ])
    accounts.value = found
    profiles.value = foundProfiles
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Carrega as pessoas (para quem gerencia as contas). */
async function loadPeople() {
  if (canManage.value) people.value = await facebookService.people().catch(() => [])
}

/** Conta os avisos não lidos da primeira página, para o número na aba. */
async function countUnread() {
  const found = await reader.alerts({ company_id: internal ? companyId.value || undefined : undefined }).catch(() => null)
  unread.value = found?.items.filter((alert) => !alert.read).length ?? 0
}

/** Abre o login do Facebook (uma navegação do navegador, que volta para esta tela). */
function connect() {
  window.location.assign(FACEBOOK_CONNECT_URL)
}

/** Abre a configuração da conta. */
function configure(account: FacebookAccount) {
  editing.value = account
  editingOpen.value = true
}

/** Abre a configuração da pessoa. */
function configurePerson(person: FacebookPerson) {
  editingPerson.value = person
  editingPersonOpen.value = true
}

/** Pede a confirmação para desconectar o perfil. */
function askDisconnect(profile: FacebookProfile) {
  leaving.value = profile
  leavingOpen.value = true
}

/** Desconecta o perfil e recarrega a tela. */
async function disconnect() {
  if (!leaving.value) return
  leavingBusy.value = true
  try {
    await facebookService.disconnect(leaving.value.id)
    toast.success(t('fb.profiles.disconnected'))
    leavingOpen.value = false
    await load()
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    leavingBusy.value = false
  }
}

/** Depois de salvar a conta ou a pessoa, recarrega contas e pessoas. */
async function refresh() {
  await Promise.all([load(), loadPeople()])
}

/** Abre as campanhas da conta. */
function openCampaigns(account: FacebookAccount) {
  void router.push({ path: campaignsPath(internal), query: { conta: account.id } })
}

/** Troca o cliente do painel interno e recarrega. */
function pickClient(id: string) {
  companyId.value = id
  void load()
  void countUnread()
}

/** O nome da pessoa que conectou o perfil, ou um traço. */
const connectorName = (profile: FacebookProfile) => profile.connected_by?.name ?? '–'

// Volta do login do Facebook: avisa e limpa o endereço.
onMounted(() => {
  const { facebook, erro } = route.query
  if (facebook === 'conectado') toast.success(t('fb.connected'))
  else if (typeof erro === 'string' && erro) toast.error(errorText(erro))
  if (facebook || erro) void router.replace({ query: {} })
  void load()
  void loadPeople()
  void countUnread()
  if (internal) void clientService.options().then((found) => (clients.value = found.items)).catch(() => undefined)
  else void siteService.options().then((found) => (sites.value = found.items)).catch(() => undefined)
})
</script>

<template>
  <PageHeader :title="t('fb.title')" :sub="internal ? t('fb.subInternal') : t('fb.sub')">
    <template v-if="canConnect" #actions>
      <Button @click="connect"><Plus />{{ t('fb.connect') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <div v-for="profile in expired" :key="profile.id" class="flex flex-wrap items-start gap-3 rounded-lg border border-bad/25 bg-card p-4" role="alert">
      <AlertTriangle class="mt-0.5 size-4 shrink-0 text-bad" aria-hidden="true" />
      <p class="min-w-0 flex-1 text-[14px]">
        <span class="font-medium">{{ t('fb.expired.title', { name: profile.name }) }}</span>&#32;<span class="text-muted-foreground">{{ t('fb.expired.body', { name: connectorName(profile) }) }}</span>
      </p>
      <Button v-if="canConnect && profile.connected_by?.id === session.me?.user.id" size="sm" variant="outline" @click="connect">{{ t('fb.reconnect') }}</Button>
    </div>
    <div class="flex flex-wrap items-center gap-3">
      <FacebookTabs v-model="tab" :people="canManage" :unread="unread" />
      <Select v-if="internal" :model-value="companyId" :aria-label="t('fb.col.client')" class="w-full sm:w-[240px]" :options="clientOptions" @update:model-value="pickClient" />
    </div>
    <FacebookAlertsPanel v-if="tab === 'alerts'" :internal="internal" :company-id="companyId" :manage="canManage" :client-name="clientName" @read="countUnread" />
    <FacebookHistoryPanel v-else-if="tab === 'history'" :internal="internal" :company-id="companyId" :account-name="accountName" :client-name="clientName" />
    <section v-else-if="tab === 'people'" class="grid gap-3">
      <div>
        <h2 class="text-[20px] font-semibold tracking-tight">{{ t('fb.people.title') }}</h2>
        <p class="mt-1 max-w-[80ch] text-[14px] text-muted-foreground">{{ t('fb.people.desc') }}</p>
      </div>
      <DataTable :min="820">
        <thead>
          <tr>
            <th :class="th">{{ t('fb.people.col.person') }}</th>
            <th :class="th">{{ t('fb.people.col.accounts') }}</th>
            <th :class="[th, 'text-right']">{{ t('fb.people.col.daily') }}</th>
            <th :class="[th, 'text-right']">{{ t('fb.people.col.monthly') }}</th>
            <th :class="th"><span class="sr-only">{{ t('fb.configure') }}</span></th>
          </tr>
        </thead>
        <tbody>
          <TableState :cols="5" :empty="people.length === 0" :desc="t('fb.people.empty')" />
          <tr v-for="person in people" :key="person.person.id" class="hover:bg-muted">
            <td :class="td">
              <span class="block font-medium">{{ person.person.name }}</span>
              <span class="block text-[13px] text-muted-foreground">{{ person.person.email }}</span>
            </td>
            <td :class="[td, 'text-[13px]']">
              <ul v-if="person.account_ids.length" class="grid gap-0.5">
                <li v-for="accountId in person.account_ids" :key="accountId">{{ accountName(accountId) }}</li>
              </ul>
              <span v-else class="text-muted-foreground">{{ t('fb.people.none') }}</span>
            </td>
            <td :class="[td, 'text-right tnum']">{{ person.daily_limit ?? t('fb.noLimit') }}</td>
            <td :class="[td, 'text-right tnum']">{{ person.monthly_limit ?? t('fb.noLimit') }}</td>
            <td :class="[td, 'text-right']"><Button size="sm" variant="outline" @click="configurePerson(person)">{{ t('fb.configure') }}</Button></td>
          </tr>
        </tbody>
      </DataTable>
      <p class="text-[13px] text-muted-foreground">{{ t('fb.people.foot') }}</p>
    </section>
    <template v-else>
      <LoadError v-if="loadError" :message="loadError" @retry="load" />
      <template v-else>
        <section v-if="!internal" class="grid gap-3">
          <h2 class="text-[20px] font-semibold tracking-tight">{{ t('fb.profiles.title') }}</h2>
          <DataTable :min="720">
            <thead>
              <tr>
                <th :class="th">{{ t('fb.profiles.col.profile') }}</th>
                <th :class="th">{{ t('fb.profiles.col.access') }}</th>
                <th :class="[th, 'text-right']">{{ t('fb.profiles.col.accounts') }}</th>
                <th :class="th">{{ t('fb.profiles.col.synced') }}</th>
                <th :class="th"><span class="sr-only">{{ t('fb.profiles.disconnect') }}</span></th>
              </tr>
            </thead>
            <tbody>
              <TableState :cols="5" :loading="!accounts" :empty="profiles.length === 0" :icon="Megaphone" :desc="canConnect ? t('fb.profiles.emptyConnect') : t('fb.profiles.empty')" />
              <tr v-for="profile in profiles" :key="profile.id" class="hover:bg-muted">
                <td :class="td">
                  <span class="block font-medium">{{ profile.name }}</span>
                  <span class="block text-[13px] text-muted-foreground">{{ t('fb.profiles.connectedBy', { name: connectorName(profile), date: formatDate(profile.connected_at, false) }) }}</span>
                </td>
                <td :class="td"><Status :tone="profileTone(profile.status)">{{ t(`fb.profileStatus.${profile.status}` as Key) }}</Status></td>
                <td :class="[td, 'text-right tnum']">{{ profile.account_count }}</td>
                <td :class="[td, 'text-[13px] text-muted-foreground']">{{ profile.last_synced_at ? formatAgo(profile.last_synced_at) : t('fb.profiles.notSynced') }}</td>
                <td :class="[td, 'text-right']">
                  <Button v-if="profile.status !== 'disconnected' && (canManage || profile.connected_by?.id === session.me?.user.id)" size="icon" variant="ghost" :aria-label="t('fb.profiles.disconnectName', { name: profile.name })" @click="askDisconnect(profile)">
                    <Trash2 />
                  </Button>
                </td>
              </tr>
            </tbody>
          </DataTable>
        </section>
        <section class="grid gap-3">
          <div class="flex flex-wrap items-center gap-3">
            <h2 class="mr-auto text-[20px] font-semibold tracking-tight">{{ t('fb.accounts.title') }}</h2>
            <Segmented v-model="filter" :label="t('fb.accounts.filter')" :options="filterOptions" />
            <div class="relative w-full sm:w-60">
              <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
              <Input v-model="query" :aria-label="t('fb.accounts.search')" class="h-9 bg-card pl-9" :placeholder="t('fb.accounts.searchPlaceholder')" />
            </div>
          </div>
          <DataTable :min="1000">
            <thead>
              <tr>
                <th :class="th">{{ t('fb.accounts.col.account') }}</th>
                <th :class="th">{{ internal ? t('fb.col.client') : t('fb.accounts.col.holder') }}</th>
                <th :class="th">{{ t('fb.accounts.col.state') }}</th>
                <th :class="[th, 'text-right']">{{ t('fb.accounts.col.spend') }}</th>
                <th :class="th">{{ t('fb.accounts.col.site') }}</th>
                <th :class="th"><span class="sr-only">{{ t('fb.campaigns') }}</span></th>
              </tr>
            </thead>
            <tbody>
              <TableState :cols="6" :loading="!accounts" :empty="shown.length === 0" :icon="Megaphone" :desc="accounts?.length ? t('fb.accounts.emptyFilter') : t('fb.accounts.empty')" />
              <tr v-for="account in shown" :key="account.id" class="hover:bg-muted">
                <td :class="td">
                  <span class="block font-medium">{{ account.name }}</span>
                  <span class="block text-[13px] text-muted-foreground"><span class="font-mono">{{ account.external_id }}</span> · {{ account.currency }}<template v-if="account.business_name"> · {{ account.business_name }}</template></span>
                </td>
                <td :class="td">
                  <template v-if="internal">{{ clientName(account.company_id) }}</template>
                  <template v-else-if="account.holder">{{ account.holder.name }}</template>
                  <span v-else class="text-[13px] text-muted-foreground">{{ t('fb.account.ownerOnly') }}</span>
                </td>
                <td :class="td"><Status :tone="accountTone(account.state)">{{ t(`fb.accountState.${account.state}` as Key) }}</Status></td>
                <td :class="[td, 'text-right tnum']">
                  <span :class="overLimit(account) ? 'text-bad' : overLimit(account, true) ? 'text-ochre' : ''">{{ formatMoney(account.month_spend, account.currency, locale) }}</span>
                  <span v-if="account.monthly_limit" class="block text-[12px] text-muted-foreground">{{ t('fb.accounts.of', { limit: formatMoney(account.monthly_limit, account.currency, locale) }) }}</span>
                </td>
                <td :class="td">
                  <span v-if="account.site_id" class="font-mono text-[13px]">{{ siteNames.get(account.site_id) ?? t('fb.accounts.linked') }}</span>
                  <span v-else class="text-[13px] text-muted-foreground">{{ t('fb.account.noSite') }}</span>
                </td>
                <td :class="[td, 'text-right']">
                  <div class="flex justify-end gap-2">
                    <Button v-if="canManage" size="sm" variant="ghost" :disabled="account.state === 'disabled'" @click="configure(account)">{{ t('fb.configure') }}</Button>
                    <Button size="sm" variant="outline" @click="openCampaigns(account)">{{ t('fb.campaigns') }}</Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </DataTable>
          <p class="text-[13px] text-muted-foreground">{{ internal ? t('fb.accounts.footInternal') : t('fb.accounts.foot') }}</p>
        </section>
      </template>
    </template>
  </PageBody>
  <FacebookAccountDialog v-model:open="editingOpen" :account="editing" :people="people" :sites="sites" @saved="refresh" />
  <FacebookPersonDialog v-model:open="editingPersonOpen" :person="editingPerson" :accounts="accounts ?? []" @saved="refresh" />
  <ConfirmDialog
    v-model:open="leavingOpen"
    :title="t('fb.profiles.disconnectTitle', { name: leaving?.name ?? '' })"
    :desc="t('fb.profiles.disconnectDesc')"
    :action="t('fb.profiles.disconnect')"
    :busy="leavingBusy"
    @confirm="disconnect"
  />
</template>
