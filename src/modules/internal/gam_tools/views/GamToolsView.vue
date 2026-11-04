<script setup lang="ts">
/** Ferramentas do GAM: as ações e as execuções sempre na tela; as ações ativam quando a network
 * do cliente é escolhida, e a tabela mostra as execuções de todas até a escolha. */
import { computed, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useDebounceFn } from '@vueuse/core'
import { toast } from 'vue-sonner'
import { AlertTriangle, Copy, Download, List, Plus, RefreshCw, Search, Wrench } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { onEvent } from '@/lib/events'
import { errorText, formatDate, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import GamSitePicker from '@/modules/internal/gam_tools/components/GamSitePicker.vue'
import {
  BLOCK_COUNT,
  FORMATS,
  KEY_NAMES,
  RUN_TONE,
  TOOL_CARDS,
  defaultSites,
  delegationLabel,
  formatDesc,
  formatName,
  installable,
  languageLabel,
  runStateLabel,
  saveFile,
  toolDesc,
  toolName,
  writes,
  type ToolCard,
} from '@/modules/internal/gam_tools/rules'
import { gamToolService } from '@/modules/internal/gam_tools/service'
import type { GamFormat, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun, Language } from '@/modules/internal/gam_tools/types'
import { useSession } from '@/stores/session'

const SEARCH_DELAY_MS = 300
const ICONS = { config: Wrench, setup: Plus, key_values: List, sync: RefreshCw, install: Download, ads_txt: Copy }

const route = useRoute()
const router = useRouter()
const session = useSession()
const query = ref('')
const options = ref<GamToolNetwork[]>([])
const networkId = ref(typeof route.query.network === 'string' ? route.query.network : '')
const network = ref<GamToolNetworkDetail | null>(null)
const runs = ref<GamToolRun[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)
const tool = ref<ToolCard | null>(null)
const chosen = ref<string[]>([])
const format = ref<GamFormat>('gtag')
const language = ref<Language>('pt')
const label = ref<Language>('pt')
const adsLines = ref<string[]>([])
const busy = ref(false)

const cards = computed(() => TOOL_CARDS.filter((card) => !writes(card) || session.can('internal.gam_tools.run')))
const networkOptions = computed(() => {
  const list = [...options.value]
  if (network.value && !list.some((item) => item.id === network.value?.id)) list.unshift(network.value)
  return [
    { value: '', label: t('gamt.pickNetwork') },
    ...list.map((item) => ({ value: item.id, label: `${item.client.name} · ${item.display_name ?? item.network_code} (${item.network_code})` })),
  ]
})
const picking = computed({ get: () => tool.value === 'config' || tool.value === 'setup', set: (open: boolean) => !open && close() })
const keyValuesOpen = computed({ get: () => tool.value === 'key_values', set: (open: boolean) => !open && close() })
const installOpen = computed({ get: () => tool.value === 'install', set: (open: boolean) => !open && close() })
const adsOpen = computed({ get: () => tool.value === 'ads_txt', set: (open: boolean) => !open && close() })
const installSites = computed(() => installable(network.value?.sites ?? []))
const hasGtag = computed(() => (network.value?.sites ?? []).some((site) => site.format === 'gtag'))
const inventory = computed(() => network.value?.delegation === 'manage_inventory')
const languages = computed(() => (['pt', 'en', 'es'] as Language[]).map((value) => ({ value, label: languageLabel(value) })))

/** Mostra o erro num aviso. */
const fail = (error: unknown) => toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))

/** Busca as networks pelo texto digitado. */
async function searchNetworks() {
  try {
    const found = await gamToolService.networks(query.value.trim())
    options.value = found.items
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
const debouncedSearch = useDebounceFn(searchNetworks, SEARCH_DELAY_MS)

/** Carrega a network escolhida e as execuções dela, ou as execuções de todas sem network. */
async function load() {
  loadError.value = null
  const chosenId = networkId.value || undefined
  try {
    const [detail, found] = await Promise.all([chosenId ? gamToolService.network(chosenId) : Promise.resolve(null), gamToolService.runs(chosenId, page.value)])
    if ((networkId.value || undefined) !== chosenId) return
    network.value = detail
    runs.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

onMounted(searchNetworks)
watch(query, () => void debouncedSearch())
watch(networkId, (value) => {
  const { network: _previous, ...rest } = route.query
  void router.replace({ query: value ? { ...rest, network: value } : rest })
  network.value = null
  runs.value = null
  if (page.value === 1) void load()
  else page.value = 1
}, { immediate: true })
watch(page, load)
onEvent('gam_tool_run.updated', (data) => {
  if (!networkId.value || data.network_id === networkId.value) void load()
})

/** Fecha o diálogo da ferramenta. */
function close() {
  tool.value = null
}

/** Abre a ferramenta: as que escrevem pedem confirmação; "Sincronizar agora" roda direto. */
async function choose(card: ToolCard) {
  if (!network.value) return
  chosen.value = card === 'install' ? installSites.value.filter((site) => site.blocks > 0).map((site) => site.domain) : defaultSites(network.value.sites)
  if (card === 'sync') return run('sync')
  if (card === 'ads_txt') {
    try {
      adsLines.value = (await gamToolService.adsTxt(network.value.id)).lines
    } catch (error) {
      return fail(error)
    }
  }
  tool.value = card
}

/** Abre a execução no worker e vai para a tela dela. */
async function run(kind: GamToolKind) {
  if (!network.value) return
  busy.value = true
  const withSites = kind === 'config' || kind === 'setup'
  try {
    const started = await gamToolService.start({
      network_id: network.value.id,
      kind,
      domains: withSites ? chosen.value : [],
      format: withSites ? format.value : null,
    })
    close()
    await router.push(`/interno/ferramentas-gam/execucoes/${started.id}`)
  } catch (error) {
    fail(error)
  } finally {
    busy.value = false
  }
}

/** Baixa o arquivo de instalação dos sites escolhidos. */
async function downloadInstall() {
  if (!network.value) return
  busy.value = true
  try {
    const file = await gamToolService.install(network.value.id, chosen.value, language.value, label.value)
    saveFile(file.blob, file.name)
    toast.success(t('gamt.install.done', { name: file.name }))
    close()
  } catch (error) {
    fail(error)
  } finally {
    busy.value = false
  }
}

/** Copia as linhas do ads.txt. */
async function copyAds() {
  try {
    await navigator.clipboard.writeText(adsLines.value.join('\n'))
    toast.success(t('gamt.ads.copied'))
  } catch {
    toast.error(t('gamt.ads.copyFailed'))
  }
}
</script>

<template>
  <PageHeader :title="t('nav.gamTools')" :sub="t('gamt.sub')" />
  <PageBody>
    <div class="grid gap-4 rounded-lg border bg-card p-4">
      <div class="grid gap-2 sm:grid-cols-[220px_minmax(0,1fr)] lg:max-w-[760px]">
        <div class="relative">
          <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input v-model="query" type="search" :aria-label="t('gamt.searchNetwork')" class="h-9 pl-9" :placeholder="t('gamt.searchPlaceholder')" />
        </div>
        <NativeSelect v-model="networkId" :options="networkOptions" :aria-label="t('gamt.network')" class="min-w-0 [&_select]:h-9" />
      </div>
      <dl v-if="network" class="flex flex-wrap gap-x-6 gap-y-1 text-[13px] text-muted-foreground">
        <div class="flex gap-1"><dt>{{ t('gamt.client') }}</dt><dd class="text-foreground">{{ network.client.name }}</dd></div>
        <div class="flex gap-1"><dt>{{ t('gamt.delegation') }}</dt><dd class="text-foreground">{{ delegationLabel(network.delegation) }}</dd></div>
        <div class="flex gap-1"><dt>{{ t('gamt.seller') }}</dt><dd :class="network.seller_id ? 'font-mono text-foreground' : 'text-foreground'">{{ network.seller_id ?? t('gamt.sellerUnknown') }}</dd></div>
        <div class="flex gap-1"><dt>{{ t('gamt.sites') }}</dt><dd class="tnum text-foreground">{{ network.sites.length }}</dd></div>
      </dl>
    </div>
    <p v-if="!networkId && options.length === 0 && query && !loadError" class="text-[14px] text-muted-foreground">{{ t('gamt.noNetworks') }}</p>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else>
      <p v-if="inventory" class="rounded-md border bg-card px-4 py-3 text-[13px] text-muted-foreground">{{ t('gamt.inventoryNote') }}</p>
      <p v-if="!networkId" class="text-[13px] text-muted-foreground">{{ t('gamt.pickToRun') }}</p>
      <div class="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-3">
        <button
          v-for="card in cards"
          :key="card"
          type="button"
          :disabled="busy || !network"
          class="flex flex-col items-start gap-2 bg-card p-5 text-left enabled:hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-60"
          @click="choose(card)"
        >
          <span class="flex w-full items-center gap-2">
            <component :is="ICONS[card]" class="size-4" aria-hidden="true" />
            <span class="font-medium">{{ toolName(card) }}</span>
            <span v-if="writes(card)" class="ml-auto rounded-full border px-2 py-0.5 text-[11px] font-medium text-muted-foreground">{{ t('gamt.writes') }}</span>
          </span>
          <span class="text-[13px] text-muted-foreground">{{ toolDesc(card) }}</span>
        </button>
      </div>
      <section class="grid gap-3">
        <h2 class="text-[16px] font-semibold tracking-tight">{{ networkId ? t('gamt.runs') : t('gamt.runsAll') }}</h2>
        <DataTable :min="720">
          <thead>
            <tr>
              <th :class="th">{{ t('gamt.col.tool') }}</th>
              <th v-if="!networkId" :class="th">{{ t('gamt.col.network') }}</th>
              <th :class="th">{{ t('gamt.sites') }}</th>
              <th :class="th">{{ t('gamt.col.who') }}</th>
              <th :class="th">{{ t('gamt.col.when') }}</th>
              <th :class="th">{{ t('gamt.col.state') }}</th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="networkId ? 5 : 6" :loading="!runs" :empty="runs?.length === 0" :icon="Wrench" :title="networkId ? t('gamt.runsEmpty') : t('gamt.runsEmptyAll')" />
            <tr v-for="item in runs ?? []" :key="item.id" class="hover:bg-muted">
              <td :class="td">
                <RouterLink :to="`/interno/ferramentas-gam/execucoes/${item.id}`" class="font-medium hover:underline focus-visible:underline focus-visible:outline-none">{{ toolName(item.kind) }}</RouterLink>
                <span v-if="item.format" class="block text-[13px] text-muted-foreground">{{ formatName(item.format) }}</span>
              </td>
              <td v-if="!networkId" :class="td">
                <span class="block">{{ item.network?.client_name ?? '–' }}</span>
                <span v-if="item.network" class="block text-[13px] text-muted-foreground">{{ item.network.display_name ?? item.network.network_code }} ({{ item.network.network_code }})</span>
              </td>
              <td :class="[td, 'break-all font-mono text-[13px]']">{{ item.domains.join(', ') || '–' }}</td>
              <td :class="td">{{ item.requested_by?.name ?? '–' }}</td>
              <td :class="[td, 'whitespace-nowrap tnum text-[13px] text-muted-foreground']">{{ formatDate(item.created_at) }}</td>
              <td :class="td"><Status :tone="RUN_TONE[item.state]">{{ runStateLabel(item.state) }}</Status></td>
            </tr>
          </tbody>
        </DataTable>
        <Pagination v-model:page="page" :total="total" :pages="pages" />
      </section>
    </template>
  </PageBody>

  <Dialog v-if="network" v-model:open="picking" :title="tool ? toolName(tool) : ''" :desc="t('gamt.dialog.desc', { name: network.display_name ?? network.network_code, code: network.network_code })" class="max-w-[560px]">
    <div class="grid gap-5">
      <fieldset class="grid gap-2">
        <legend class="mb-2 text-[13px] font-medium text-muted-foreground">{{ t('gamt.format') }}</legend>
        <label v-for="item in FORMATS" :key="item" class="flex cursor-pointer items-start gap-3 rounded-md border px-3 py-2.5 hover:bg-muted">
          <input v-model="format" type="radio" name="gam-format" :value="item" class="mt-1 size-4 accent-[hsl(var(--foreground))]" />
          <span>
            <span class="block text-[14px] font-medium">{{ formatName(item) }}</span>
            <span class="text-[13px] text-muted-foreground">{{ formatDesc(item) }}</span>
          </span>
        </label>
      </fieldset>
      <GamSitePicker v-model="chosen" :sites="network.sites" :label="t('gamt.sites')" />
      <div class="rounded-md border bg-muted px-4 py-3 text-[13px]">
        <div class="font-medium">{{ t('gamt.willWrite') }}</div>
        <ul class="mt-1 list-disc pl-5 text-muted-foreground">
          <li v-if="tool === 'config'">{{ t('gamt.willWrite.keys') }}</li>
          <li>{{ t('gamt.willWrite.order') }}</li>
          <li>{{ t('gamt.willWrite.blocks', { count: chosen.length * BLOCK_COUNT[format], sites: chosen.length, each: BLOCK_COUNT[format] }) }}</li>
          <li>{{ format === 'light' ? t('gamt.willWrite.display') : t('gamt.willWrite.lineItems', { count: BLOCK_COUNT[format] }) }}</li>
          <li>{{ t('gamt.willWrite.rest') }}</li>
        </ul>
      </div>
    </div>
    <template #footer>
      <Button variant="outline" @click="close">{{ t('common.cancel') }}</Button>
      <Button :disabled="!chosen.length" :loading="busy" @click="tool && tool !== 'install' && tool !== 'ads_txt' && run(tool)">{{ t('gamt.runInGam') }}</Button>
    </template>
  </Dialog>

  <Dialog v-if="network" v-model:open="keyValuesOpen" :title="t('gamt.tool.key_values')" :desc="t('gamt.keys.desc', { name: network.display_name ?? network.network_code })">
    <p class="break-words font-mono text-[13px] text-muted-foreground">{{ KEY_NAMES.join(', ') }}</p>
    <template #footer>
      <Button variant="outline" @click="close">{{ t('common.cancel') }}</Button>
      <Button :loading="busy" @click="run('key_values')">{{ t('gamt.runInGam') }}</Button>
    </template>
  </Dialog>

  <Dialog v-if="network" v-model:open="installOpen" :title="t('gamt.tool.install')" :desc="t('gamt.install.desc')" class="max-w-[520px]">
    <div class="grid gap-4">
      <GamSitePicker v-model="chosen" :sites="installSites" :label="t('gamt.sites')" />
      <div class="grid gap-4 sm:grid-cols-2">
        <Field id="install-lang" :label="t('gamt.install.language')"><NativeSelect id="install-lang" v-model="language" :options="languages" class="[&_select]:h-9" /></Field>
        <Field id="install-label" :label="t('gamt.install.label')"><NativeSelect id="install-label" v-model="label" :options="languages" class="[&_select]:h-9" /></Field>
      </div>
      <div v-if="hasGtag" class="flex gap-2 rounded-md border px-3 py-2.5 text-[13px]">
        <AlertTriangle class="mt-0.5 size-4 shrink-0 text-ochre" aria-hidden="true" /><span>{{ t('gamt.install.gtag') }}</span>
      </div>
    </div>
    <template #footer>
      <Button variant="outline" @click="close">{{ t('common.cancel') }}</Button>
      <Button :disabled="!chosen.length" :loading="busy" @click="downloadInstall"><Download />{{ t('gamt.install.download') }}</Button>
    </template>
  </Dialog>

  <Dialog v-if="network" v-model:open="adsOpen" :title="t('gamt.tool.ads_txt')" :desc="t(inventory ? 'gamt.ads.descInventory' : 'gamt.ads.desc', { name: network.display_name ?? network.network_code })" class="max-w-[600px]">
    <pre class="overflow-x-auto rounded-md border bg-muted p-3 font-mono text-[13px] leading-6">{{ adsLines.join('\n') }}</pre>
    <template #footer>
      <Button variant="outline" @click="close">{{ t('common.close') }}</Button>
      <Button @click="copyAds"><Copy />{{ t('gamt.ads.copy') }}</Button>
    </template>
  </Dialog>
</template>
