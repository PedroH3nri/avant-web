<script setup lang="ts">
/** Google Ads: no painel do cliente, logins, contas (MCC, site, UTMs, quem usa), pessoas, avisos e histórico da Empresa;
 * no interno, as contas de todos os clientes, só leitura. */
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { AlertTriangle, Plus, Search, Trash2 } from 'lucide-vue-next'
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
import GoogleAdsAccountDialog from '@/modules/google_ads/components/GoogleAdsAccountDialog.vue'
import GoogleAdsAlertsPanel from '@/modules/google_ads/components/GoogleAdsAlertsPanel.vue'
import GoogleAdsHistoryPanel from '@/modules/google_ads/components/GoogleAdsHistoryPanel.vue'
import GoogleAdsPersonDialog from '@/modules/google_ads/components/GoogleAdsPersonDialog.vue'
import GoogleAdsTabs, { type GoogleAdsTab } from '@/modules/google_ads/components/GoogleAdsTabs.vue'
import { accountTone, byManager, campaignsPath, customerText, formatMoney, loginTone, overLimit, suffixTone } from '@/modules/google_ads/rules'
import { GOOGLE_ADS_CONNECT_URL, googleAdsReader, googleAdsService } from '@/modules/google_ads/service'
import type { GoogleAdsAccount, GoogleAdsLogin, GoogleAdsPerson } from '@/modules/google_ads/types'
import { siteService } from '@/modules/sites/service'
import { useSession } from '@/stores/session'

const route = useRoute()
const router = useRouter()
const session = useSession()
const internal = route.meta.internal === true
const reader = googleAdsReader(internal)

const tab = ref<GoogleAdsTab>('accounts')
const accounts = ref<GoogleAdsAccount[] | null>(null)
const logins = ref<GoogleAdsLogin[]>([])
const people = ref<GoogleAdsPerson[]>([])
const sites = ref<{ id: string; domain: string }[]>([])
const clients = ref<{ id: string; name: string }[]>([])
const companyId = ref('')
const filter = ref('all')
const query = ref('')
const loadError = ref<string | null>(null)
const unread = ref(0)
const editing = ref<GoogleAdsAccount | null>(null)
const editingOpen = ref(false)
const editingPerson = ref<GoogleAdsPerson | null>(null)
const editingPersonOpen = ref(false)
const leaving = ref<GoogleAdsLogin | null>(null)
const leavingOpen = ref(false)
const leavingBusy = ref(false)
const applying = ref('')

const canConnect = computed(() => !internal && session.can('google_ads.connect'))
const canManage = computed(() => !internal && session.can('google_ads.accounts.manage'))
const revoked = computed(() => logins.value.filter((login) => login.status === 'revoked'))
const withoutSite = computed(() => (accounts.value ?? []).filter((account) => !account.site_id && account.status === 'enabled'))
const withoutSuffix = computed(() => (accounts.value ?? []).filter((account) => account.suffix_state !== 'ok' && account.status === 'enabled'))
const shown = computed(() => {
  const source = filter.value === 'nosite' ? withoutSite.value : filter.value === 'nosuffix' ? withoutSuffix.value : (accounts.value ?? [])
  const wanted = query.value.trim().toLowerCase()
  return source.filter((account) => `${account.name} ${account.customer_id} ${account.manager_name ?? ''} ${clientName(account.company_id)}`.toLowerCase().includes(wanted))
})
const groups = computed(() => byManager(shown.value))
const filterOptions = computed(() => [
  { value: 'all', label: t('gads.accounts.all'), note: String(accounts.value?.length ?? 0) },
  { value: 'nosite', label: t('gads.accounts.noSite'), note: String(withoutSite.value.length) },
  { value: 'nosuffix', label: t('gads.accounts.noSuffix'), note: String(withoutSuffix.value.length) },
])
const clientOptions = computed(() => [{ value: '', label: t('gads.allClients') }, ...clients.value.map((client) => ({ value: client.id, label: client.name }))])
const siteNames = computed(() => new Map(sites.value.map((site) => [site.id, site.domain])))

/** O nome do cliente pelo id da Empresa (só no painel interno). */
function clientName(id: string): string {
  return clients.value.find((client) => client.id === id)?.name ?? ''
}

/** O nome da conta pelo id, para o histórico e as pessoas. */
function accountName(id: string): string {
  return accounts.value?.find((account) => account.id === id)?.name ?? '–'
}

/** Carrega as contas (e os logins, no painel do cliente). */
async function load() {
  loadError.value = null
  try {
    const [found, foundLogins] = await Promise.all([
      reader.accounts({ company_id: internal ? companyId.value || undefined : undefined }),
      internal ? Promise.resolve([]) : googleAdsService.logins(),
    ])
    accounts.value = found
    logins.value = foundLogins
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Carrega as pessoas (para quem gerencia as contas). */
async function loadPeople() {
  if (canManage.value) people.value = await googleAdsService.people().catch(() => [])
}

/** Conta os avisos não lidos da primeira página, para o número na aba. */
async function countUnread() {
  const found = await reader.alerts({ company_id: internal ? companyId.value || undefined : undefined }).catch(() => null)
  unread.value = found?.items.filter((alert) => !alert.read).length ?? 0
}

/** Abre o login do Google (uma navegação do navegador, que volta para esta tela). */
function connect() {
  window.location.assign(GOOGLE_ADS_CONNECT_URL)
}

/** Abre a configuração da conta. */
function configure(account: GoogleAdsAccount) {
  editing.value = account
  editingOpen.value = true
}

/** Abre a configuração da pessoa. */
function configurePerson(person: GoogleAdsPerson) {
  editingPerson.value = person
  editingPersonOpen.value = true
}

/** Grava na conta o sufixo com os UTMs do Avant; outra ferramenta no sufixo volta com o erro explicado. */
async function applySuffix(account: GoogleAdsAccount) {
  applying.value = account.id
  try {
    const saved = await googleAdsService.applySuffix(account.id)
    accounts.value = (accounts.value ?? []).map((item) => (item.id === saved.id ? saved : item))
    toast.success(t('gads.suffix.applied'))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    applying.value = ''
  }
}

/** Pede a confirmação para desconectar o login. */
function askDisconnect(login: GoogleAdsLogin) {
  leaving.value = login
  leavingOpen.value = true
}

/** Desconecta o login e recarrega a tela. */
async function disconnect() {
  if (!leaving.value) return
  leavingBusy.value = true
  try {
    await googleAdsService.disconnect(leaving.value.id)
    toast.success(t('gads.logins.disconnected'))
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
function openCampaigns(account: GoogleAdsAccount) {
  void router.push({ path: campaignsPath(internal), query: { conta: account.id } })
}

/** Troca o cliente do painel interno e recarrega. */
function pickClient(id: string) {
  companyId.value = id
  void load()
  void countUnread()
}

/** O nome da pessoa que conectou o login, ou um traço. */
const connectorName = (login: GoogleAdsLogin) => login.connected_by?.name ?? '–'

// Volta do login do Google: avisa e limpa o endereço.
onMounted(() => {
  const { google_ads: googleAds, erro } = route.query
  if (googleAds === 'conectado') toast.success(t('gads.connected'))
  else if (typeof erro === 'string' && erro) toast.error(errorText(erro))
  if (googleAds || erro) void router.replace({ query: {} })
  void load()
  void loadPeople()
  void countUnread()
  if (internal) void clientService.options().then((found) => (clients.value = found.items)).catch(() => undefined)
  else void siteService.options().then((found) => (sites.value = found.items)).catch(() => undefined)
})
</script>

<template>
  <PageHeader :title="t('gads.title')" :sub="internal ? t('gads.subInternal') : t('gads.sub')">
    <template v-if="canConnect" #actions>
      <Button @click="connect"><Plus />{{ t('gads.connect') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <div v-for="login in revoked" :key="login.id" class="flex flex-wrap items-start gap-3 rounded-lg border border-bad/25 bg-card p-4" role="alert">
      <AlertTriangle class="mt-0.5 size-4 shrink-0 text-bad" aria-hidden="true" />
      <p class="min-w-0 flex-1 text-[14px]">
        <span class="font-medium">{{ t('gads.revoked.title', { email: login.email }) }}</span>&#32;<span class="text-muted-foreground">{{ t('gads.revoked.body', { name: connectorName(login) }) }}</span>
      </p>
      <Button v-if="canConnect && login.connected_by?.id === session.me?.user.id" size="sm" variant="outline" @click="connect">{{ t('gads.reconnect') }}</Button>
    </div>
    <div class="flex flex-wrap items-center gap-3">
      <GoogleAdsTabs v-model="tab" :people="canManage" :unread="unread" />
      <Select v-if="internal" :model-value="companyId" :aria-label="t('gads.col.client')" class="w-full sm:w-[240px]" :options="clientOptions" @update:model-value="pickClient" />
    </div>
    <GoogleAdsAlertsPanel v-if="tab === 'alerts'" :internal="internal" :company-id="companyId" :manage="canManage" :client-name="clientName" @read="countUnread" />
    <GoogleAdsHistoryPanel v-else-if="tab === 'history'" :internal="internal" :company-id="companyId" :account-name="accountName" :client-name="clientName" />
    <section v-else-if="tab === 'people'" class="grid gap-3">
      <div>
        <h2 class="text-[20px] font-semibold tracking-tight">{{ t('gads.people.title') }}</h2>
        <p class="mt-1 max-w-[80ch] text-[14px] text-muted-foreground">{{ t('gads.people.desc') }}</p>
      </div>
      <DataTable :min="820">
        <thead>
          <tr>
            <th :class="th">{{ t('gads.people.col.person') }}</th>
            <th :class="th">{{ t('gads.people.col.accounts') }}</th>
            <th :class="[th, 'text-right']">{{ t('gads.people.col.daily') }}</th>
            <th :class="[th, 'text-right']">{{ t('gads.people.col.monthly') }}</th>
            <th :class="th"><span class="sr-only">{{ t('gads.configure') }}</span></th>
          </tr>
        </thead>
        <tbody>
          <TableState :cols="5" :empty="people.length === 0" :desc="t('gads.people.empty')" />
          <tr v-for="person in people" :key="person.person.id" class="hover:bg-muted">
            <td :class="td">
              <span class="block font-medium">{{ person.person.name }}</span>
              <span class="block text-[13px] text-muted-foreground">{{ person.person.email }}</span>
            </td>
            <td :class="[td, 'text-[13px]']">
              <ul v-if="person.account_ids.length" class="grid gap-0.5">
                <li v-for="accountId in person.account_ids" :key="accountId">{{ accountName(accountId) }}</li>
              </ul>
              <span v-else class="text-muted-foreground">{{ t('gads.people.none') }}</span>
            </td>
            <td :class="[td, 'text-right tnum']">{{ person.daily_limit ?? t('gads.noLimit') }}</td>
            <td :class="[td, 'text-right tnum']">{{ person.monthly_limit ?? t('gads.noLimit') }}</td>
            <td :class="[td, 'text-right']"><Button size="sm" variant="outline" @click="configurePerson(person)">{{ t('gads.configure') }}</Button></td>
          </tr>
        </tbody>
      </DataTable>
      <p class="text-[13px] text-muted-foreground">{{ t('gads.people.foot') }}</p>
    </section>
    <template v-else>
      <LoadError v-if="loadError" :message="loadError" @retry="load" />
      <template v-else>
        <section v-if="!internal" class="grid gap-3">
          <h2 class="text-[20px] font-semibold tracking-tight">{{ t('gads.logins.title') }}</h2>
          <DataTable :min="720">
            <thead>
              <tr>
                <th :class="th">{{ t('gads.logins.col.login') }}</th>
                <th :class="th">{{ t('gads.logins.col.access') }}</th>
                <th :class="[th, 'text-right']">{{ t('gads.logins.col.accounts') }}</th>
                <th :class="th">{{ t('gads.logins.col.synced') }}</th>
                <th :class="th"><span class="sr-only">{{ t('gads.logins.disconnect') }}</span></th>
              </tr>
            </thead>
            <tbody>
              <TableState :cols="5" :loading="!accounts" :empty="logins.length === 0" :desc="canConnect ? t('gads.logins.emptyConnect') : t('gads.logins.empty')" />
              <tr v-for="login in logins" :key="login.id" class="hover:bg-muted">
                <td :class="td">
                  <span class="block font-medium">{{ login.email }}</span>
                  <span class="block text-[13px] text-muted-foreground">{{ t('gads.logins.connectedBy', { name: connectorName(login), date: formatDate(login.connected_at, false) }) }}</span>
                </td>
                <td :class="td"><Status :tone="loginTone(login.status)">{{ t(`gads.loginStatus.${login.status}` as Key) }}</Status></td>
                <td :class="[td, 'text-right tnum']">{{ login.account_count }}</td>
                <td :class="[td, 'text-[13px] text-muted-foreground']">{{ login.last_synced_at ? formatAgo(login.last_synced_at) : t('gads.logins.notSynced') }}</td>
                <td :class="[td, 'text-right']">
                  <Button v-if="login.status !== 'disconnected' && (canManage || login.connected_by?.id === session.me?.user.id)" size="icon" variant="ghost" :aria-label="t('gads.logins.disconnectName', { email: login.email })" @click="askDisconnect(login)">
                    <Trash2 />
                  </Button>
                </td>
              </tr>
            </tbody>
          </DataTable>
        </section>
        <section class="grid gap-3">
          <div class="flex flex-wrap items-center gap-3">
            <h2 class="mr-auto text-[20px] font-semibold tracking-tight">{{ t('gads.accounts.title') }}</h2>
            <Segmented v-model="filter" :label="t('gads.accounts.filter')" :options="filterOptions" />
            <div class="relative w-full sm:w-60">
              <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
              <Input v-model="query" :aria-label="t('gads.accounts.search')" class="h-9 bg-card pl-9" :placeholder="t('gads.accounts.searchPlaceholder')" />
            </div>
          </div>
          <DataTable :min="1100">
            <thead>
              <tr>
                <th :class="th">{{ t('gads.accounts.col.account') }}</th>
                <th :class="th">{{ internal ? t('gads.col.client') : t('gads.accounts.col.holder') }}</th>
                <th :class="th">{{ t('gads.accounts.col.status') }}</th>
                <th :class="th">{{ t('gads.accounts.col.utms') }}</th>
                <th :class="[th, 'text-right']">{{ t('gads.accounts.col.spend') }}</th>
                <th :class="th">{{ t('gads.accounts.col.site') }}</th>
                <th :class="th"><span class="sr-only">{{ t('gads.campaigns') }}</span></th>
              </tr>
            </thead>
            <tbody>
              <TableState :cols="7" :loading="!accounts" :empty="shown.length === 0" :desc="accounts?.length ? t('gads.accounts.emptyFilter') : t('gads.accounts.empty')" />
              <template v-for="group in groups" :key="group.manager ?? ''">
                <tr>
                  <td colspan="7" class="border-b bg-muted px-4 py-1.5 text-[12px] font-medium text-muted-foreground">{{ group.manager ?? t('gads.accounts.noManager') }}</td>
                </tr>
                <tr v-for="account in group.accounts" :key="account.id" class="hover:bg-muted">
                  <td :class="td">
                    <span class="block font-medium">{{ account.name }}</span>
                    <span class="block text-[13px] text-muted-foreground"><span class="font-mono">{{ customerText(account.customer_id) }}</span> · {{ account.currency }}</span>
                  </td>
                  <td :class="td">
                    <template v-if="internal">{{ clientName(account.company_id) }}</template>
                    <template v-else-if="account.holder">{{ account.holder.name }}</template>
                    <span v-else class="text-[13px] text-muted-foreground">{{ t('gads.account.ownerOnly') }}</span>
                  </td>
                  <td :class="td"><Status :tone="accountTone(account.status)">{{ t(`gads.accountStatus.${account.status}` as Key) }}</Status></td>
                  <td :class="td">
                    <div class="flex flex-col items-start gap-1">
                      <Status :tone="suffixTone(account.suffix_state)">{{ t(`gads.suffixState.${account.suffix_state}` as Key) }}</Status>
                      <button v-if="canManage && account.suffix_state === 'missing' && account.status === 'enabled'" type="button" class="text-[12px] text-link hover:underline disabled:opacity-50" :disabled="applying === account.id" @click="applySuffix(account)">{{ t('gads.suffix.apply') }}</button>
                      <span v-if="account.suffix_state === 'other'" class="max-w-[200px] text-[12px] text-muted-foreground">{{ t('gads.suffix.otherHint') }}</span>
                    </div>
                  </td>
                  <td :class="[td, 'text-right tnum']">
                    <span :class="overLimit(account) ? 'text-bad' : overLimit(account, true) ? 'text-ochre' : ''">{{ formatMoney(account.month_spend, account.currency, locale) }}</span>
                    <span v-if="account.monthly_limit" class="block text-[12px] text-muted-foreground">{{ t('gads.accounts.of', { limit: formatMoney(account.monthly_limit, account.currency, locale) }) }}</span>
                  </td>
                  <td :class="td">
                    <span v-if="account.site_id" class="font-mono text-[13px]">{{ siteNames.get(account.site_id) ?? t('gads.accounts.linked') }}</span>
                    <span v-else class="text-[13px] text-muted-foreground">{{ t('gads.account.noSite') }}</span>
                  </td>
                  <td :class="[td, 'text-right']">
                    <div class="flex justify-end gap-2">
                      <Button v-if="canManage" size="sm" variant="ghost" :disabled="account.status !== 'enabled'" @click="configure(account)">{{ t('gads.configure') }}</Button>
                      <Button size="sm" variant="outline" @click="openCampaigns(account)">{{ t('gads.campaigns') }}</Button>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </DataTable>
          <p class="text-[13px] text-muted-foreground">{{ internal ? t('gads.accounts.footInternal') : t('gads.accounts.foot') }}</p>
        </section>
      </template>
    </template>
  </PageBody>
  <GoogleAdsAccountDialog v-model:open="editingOpen" :account="editing" :people="people" :sites="sites" @saved="refresh" />
  <GoogleAdsPersonDialog v-model:open="editingPersonOpen" :person="editingPerson" :accounts="accounts ?? []" @saved="refresh" />
  <ConfirmDialog
    v-model:open="leavingOpen"
    :title="t('gads.logins.disconnectTitle', { email: leaving?.email ?? '' })"
    :desc="t('gads.logins.disconnectDesc')"
    :action="t('gads.logins.disconnect')"
    :busy="leavingBusy"
    @confirm="disconnect"
  />
</template>
