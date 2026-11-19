<script setup lang="ts">
/** Campanhas, conjuntos e anúncios do Facebook com gasto, receita, lucro e ROI do período; no interno, de todos os clientes.
 * Quem gerencia campanhas liga ou pausa um por um ou vários de uma vez. */
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDebounceFn } from '@vueuse/core'
import { toast } from 'vue-sonner'
import { ChevronRight, Megaphone, Plus, Search } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Segmented from '@/components/ui/Segmented.vue'
import Status from '@/components/ui/Status.vue'
import Switch from '@/components/ui/Switch.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, locale, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { clientService } from '@/modules/internal/clients/service'
import { PERIODS, campaignsPath, childLevel, controlErrorText, formatCount, formatMoney, formatRatio, objectState, periodRange } from '@/modules/facebook/rules'
import { facebookReader, facebookService } from '@/modules/facebook/service'
import { useSession } from '@/stores/session'
import type { FacebookAccount, FacebookLevel, FacebookObject } from '@/modules/facebook/types'

const route = useRoute()
const router = useRouter()
const internal = route.meta.internal === true
const reader = facebookReader(internal)
const base = campaignsPath(internal)
const session = useSession()
const canManage = computed(() => !internal && session.can('facebook.manage'))
const selected = ref<string[]>([])
const switching = ref(false)

const level = ref<FacebookLevel>('campaign')
const parent = ref<{ id: string; name: string; level: FacebookLevel } | null>(null)
const accountId = ref(typeof route.query.conta === 'string' ? route.query.conta : '')
const companyId = ref('')
const days = ref('7')
const query = ref('')
const inReview = ref(false)
const items = ref<FacebookObject[] | null>(null)
const accounts = ref<FacebookAccount[]>([])
const clients = ref<{ id: string; name: string }[]>([])
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)

const levelOptions = computed(() => [
  { value: 'campaign', label: t('fb.level.campaign') },
  { value: 'adset', label: t('fb.level.adset') },
  { value: 'ad', label: t('fb.level.ad') },
])
const periodOptions = computed(() => PERIODS.map((count) => ({ value: String(count), label: t('fb.period.days', { n: count }) })))
const accountOptions = computed(() => [{ value: '', label: t('fb.allAccounts') }, ...accounts.value.map((account) => ({ value: account.id, label: account.name }))])
const clientOptions = computed(() => [{ value: '', label: t('fb.allClients') }, ...clients.value.map((client) => ({ value: client.id, label: client.name }))])
const columns = computed(() => (internal ? 10 : canManage.value ? 11 : 9))
const allSelected = computed(() => !!items.value?.length && items.value.every((item) => selected.value.includes(item.external_id)))

/** O nome do cliente pelo id da Empresa (só no painel interno). */
function clientName(id: string): string {
  return clients.value.find((client) => client.id === id)?.name ?? ''
}

/** Carrega a página com os filtros e o período. */
async function load() {
  loadError.value = null
  try {
    const found = await reader.objects({
      ...periodRange(Number(days.value), new Date()),
      level: level.value,
      parent: parent.value?.id,
      account_id: accountId.value || undefined,
      company_id: internal ? companyId.value || undefined : undefined,
      in_review: inReview.value || undefined,
      q: query.value.trim() || undefined,
      page: page.value,
    })
    items.value = found.items
    selected.value = []
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Volta para a primeira página quando um filtro muda. */
function refilter() {
  if (page.value === 1) void load()
  else page.value = 1
}

const searchLater = useDebounceFn(refilter, 300)

/** Abre o nível de baixo (campanha → conjuntos → anúncios) ou o detalhe do anúncio. */
function open(item: FacebookObject) {
  const next = childLevel(item.level)
  if (!next) {
    void router.push({ path: `${base}/${item.external_id}`, query: { dias: days.value } })
    return
  }
  parent.value = { id: item.external_id, name: item.name, level: item.level }
  level.value = next
}

/** Troca o nível pelo seletor: sai do filtro do objeto de cima. */
function pickLevel(value: string) {
  parent.value = null
  level.value = value as FacebookLevel
}

/** Abre o detalhe com os números por dia e por país. */
function details(item: FacebookObject) {
  void router.push({ path: `${base}/${item.external_id}`, query: { dias: days.value } })
}

/** Marca ou desmarca um item para a ação em lote. */
function pick(externalId: string, chosen: boolean) {
  selected.value = chosen ? [...selected.value, externalId] : selected.value.filter((id) => id !== externalId)
}

/** Marca ou desmarca todos os itens da página. */
function pickAll(chosen: boolean) {
  selected.value = chosen ? (items.value ?? []).map((item) => item.external_id) : []
}

/** Liga ou pausa no Facebook; o que ele recusar aparece num aviso, e o limite diz quanto ainda cabe. */
async function setStatus(externalIds: string[], active: boolean) {
  if (!externalIds.length) return
  switching.value = true
  try {
    const result = await facebookService.setStatus(externalIds, active)
    if (result.done.length) toast.success(active ? t('fb.control.activated', { n: result.done.length }) : t('fb.control.paused', { n: result.done.length }))
    const failures = Object.values(result.failed)
    if (failures.length) toast.error(t('fb.control.failed', { n: failures.length, reason: errorText(failures[0] ?? 'unknown') }))
    await load()
  } catch (error) {
    const api = error instanceof ApiError ? error : null
    const limit = api ? controlErrorText(api.code, api.details, locale.value) : null
    toast.error(limit ? t(limit.key, limit.params) : errorText(api?.code ?? 'unknown'))
  } finally {
    switching.value = false
  }
}

onMounted(() => {
  void load()
  void reader.accounts().then((found) => (accounts.value = found)).catch(() => undefined)
  if (internal) void clientService.options().then((found) => (clients.value = found.items)).catch(() => undefined)
})
watch(page, load)
watch(query, searchLater)
watch([level, parent, accountId, companyId, days, inReview], refilter)
</script>

<template>
  <PageHeader :title="t('fb.campaignsTitle')" :sub="internal ? t('fb.campaignsSubInternal') : t('fb.campaignsSub')">
    <template v-if="canManage" #actions>
      <Button @click="router.push(`${campaignsPath(false)}/nova`)"><Plus aria-hidden="true" />{{ t('fb.create.action') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <div class="flex flex-wrap items-center gap-3">
      <Segmented :model-value="level" :label="t('fb.level')" :options="levelOptions" @update:model-value="pickLevel" />
      <NativeSelect v-model="days" :aria-label="t('fb.period')" class="w-full sm:w-[160px]" :options="periodOptions" />
      <NativeSelect v-if="internal" v-model="companyId" :aria-label="t('fb.col.client')" class="w-full sm:w-[220px]" :options="clientOptions" />
      <NativeSelect v-model="accountId" :aria-label="t('fb.account')" class="w-full sm:w-[220px]" :options="accountOptions" />
      <div class="relative w-full sm:w-[240px]">
        <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input v-model="query" :aria-label="t('fb.search')" class="h-9 bg-card pl-9" :placeholder="t('fb.searchPlaceholder')" />
      </div>
      <Checkbox id="fb-in-review" v-model="inReview" :label="t('fb.inReview')" />
    </div>
    <p v-if="parent" class="flex flex-wrap items-center gap-1 text-[14px]">
      <button type="button" class="text-muted-foreground hover:text-foreground hover:underline" @click="pickLevel(parent.level)">{{ t(`fb.levelPlural.${parent.level}` as Key) }}</button>
      <ChevronRight class="size-4 text-muted-foreground" aria-hidden="true" />
      <span class="font-medium">{{ parent.name }}</span>
    </p>
    <div v-if="canManage && selected.length" class="flex flex-wrap items-center gap-3 rounded-lg border bg-card px-4 py-2.5" role="region" :aria-label="t('fb.control.bulk')">
      <span class="text-[14px]">{{ t('fb.control.selected', { n: selected.length }) }}</span>
      <Button size="sm" variant="outline" :disabled="switching" @click="setStatus(selected, true)">{{ t('fb.control.activate') }}</Button>
      <Button size="sm" variant="outline" :disabled="switching" @click="setStatus(selected, false)">{{ t('fb.control.pause') }}</Button>
      <Button size="sm" variant="ghost" @click="pickAll(false)">{{ t('fb.control.clear') }}</Button>
    </div>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="internal ? 1240 : canManage ? 1240 : 1120">
      <thead>
        <tr>
          <th v-if="canManage" :class="[th, 'w-10']">
            <input type="checkbox" class="size-4 accent-primary" :checked="allSelected" :aria-label="t('fb.control.selectAll')" @change="(event) => pickAll((event.target as HTMLInputElement).checked)" />
          </th>
          <th :class="th">{{ t(`fb.level.${level}` as Key) }}</th>
          <th v-if="internal" :class="th">{{ t('fb.col.client') }}</th>
          <th :class="th">{{ t('fb.col.state') }}</th>
          <th :class="[th, 'text-right']">{{ t('fb.metric.spend') }}</th>
          <th :class="[th, 'text-right']">{{ t('fb.metric.linkClicks') }}</th>
          <th :class="[th, 'text-right']">{{ t('fb.metric.cpc') }}</th>
          <th :class="[th, 'text-right']">{{ t('fb.metric.revenue') }}</th>
          <th :class="[th, 'text-right']">{{ t('fb.metric.profit') }}</th>
          <th :class="[th, 'text-right']">{{ t('fb.metric.roi') }}</th>
          <th v-if="canManage" :class="th">{{ t('fb.control.on') }}</th>
          <th :class="th"><span class="sr-only">{{ t('fb.details') }}</span></th>
        </tr>
      </thead>
      <tbody>
        <TableState :cols="columns" :loading="!items" :empty="items?.length === 0" :icon="Megaphone" :desc="t('fb.objects.empty')" />
        <tr v-for="item in items ?? []" :key="item.id" class="hover:bg-muted">
          <td v-if="canManage" :class="td">
            <input type="checkbox" class="size-4 accent-primary" :checked="selected.includes(item.external_id)" :aria-label="t('fb.control.select', { name: item.name })" @change="(event) => pick(item.external_id, (event.target as HTMLInputElement).checked)" />
          </td>
          <td :class="td">
            <button type="button" class="text-left font-medium hover:underline" @click="open(item)">{{ item.name }}</button>
            <span class="block text-[12px] text-muted-foreground">{{ item.account.name }} · <span class="font-mono">{{ item.external_id }}</span></span>
          </td>
          <td v-if="internal" :class="td">{{ clientName(item.company_id) }}</td>
          <td :class="td"><Status :tone="objectState(item).tone">{{ t(objectState(item).key) }}</Status></td>
          <td :class="[td, 'text-right tnum']">{{ formatMoney(item.totals.spend, item.account.currency, locale) }}</td>
          <td :class="[td, 'text-right tnum']">{{ formatCount(item.totals.link_clicks, locale) }}</td>
          <td :class="[td, 'text-right tnum']">{{ formatMoney(item.totals.cpc, item.account.currency, locale) }}</td>
          <td :class="[td, 'text-right tnum']">{{ formatMoney(item.totals.revenue, item.account.currency, locale) }}</td>
          <td :class="[td, 'text-right tnum', Number(item.totals.profit) < 0 ? 'text-bad' : '']">{{ formatMoney(item.totals.profit, item.account.currency, locale) }}</td>
          <td :class="[td, 'text-right tnum']">{{ formatRatio(item.totals.roi, locale) }}</td>
          <td v-if="canManage" :class="td">
            <Switch :model-value="item.active" :label="t('fb.control.toggle', { name: item.name })" :disabled="switching" @update:model-value="(active) => setStatus([item.external_id], active)" />
          </td>
          <td :class="[td, 'text-right']">
            <button type="button" class="text-[13px] text-link hover:underline" @click="details(item)">{{ t('fb.details') }}</button>
          </td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
    <p class="text-[13px] text-muted-foreground">{{ t('fb.objects.foot') }}</p>
  </PageBody>
</template>
