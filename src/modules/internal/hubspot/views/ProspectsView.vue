<script setup lang="ts">
/** Inventário > Prospecção: os contatos do HubSpot que ainda não são clientes do Avant, em funil por fase do ciclo de vida ou em lista, com "Cadastrar cliente" já preenchido para quem virou cliente. */
import { computed, onMounted, ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { ExternalLink, Search, UserPlus, UserSearch } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import StatTile from '@/components/StatTile.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import Segmented from '@/components/ui/Segmented.vue'
import Select from '@/components/ui/Select.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import HubspotMark from '@/modules/internal/hubspot/components/HubspotMark.vue'
import { PROSPECT_STAGES, lifecycleLabel, prospectName, prospectOwners, prospectsByStage, registerLink } from '@/modules/internal/hubspot/rules'
import { hubspotService } from '@/modules/internal/hubspot/service'
import type { HubspotProspect, HubspotProspectPage } from '@/modules/internal/hubspot/types'
import FiltersMenu from '@/modules/views/components/FiltersMenu.vue'
import { useLocalBarFilters } from '@/modules/views/barFilters'
import { useSession } from '@/stores/session'

const SEARCH_DELAY_MS = 300
const FILTERS = ['stage', 'owner']
const DEFAULT_FILTERS = ['owner']
const FILTER_LABELS: Record<string, Key> = { stage: 'hsp.col.stage', owner: 'hsp.col.owner' }

const router = useRouter()
const session = useSession()
const canRegister = computed(() => session.can('internal.clients.manage'))
const page = ref<HubspotProspectPage | null>(null)
const items = ref<HubspotProspect[]>([])
const loadError = ref<string | null>(null)
const loadingMore = ref(false)
const view = ref<'board' | 'list'>('board')
const stage = ref('all')
const owner = ref('all')
const query = ref('')
const barFilters = useLocalBarFilters('hubspot-prospects', FILTERS, DEFAULT_FILTERS, {
  stage: () => (stage.value = 'all'),
  owner: () => (owner.value = 'all'),
})
const viewOptions = computed(() => [
  { value: 'board', label: t('hsp.board') },
  { value: 'list', label: t('hsp.list') },
])
const stageOptions = computed(() => [{ value: 'all', label: t('hsp.allStages') }, ...PROSPECT_STAGES.map((value) => ({ value, label: lifecycleLabel(value) ?? value }))])
const ownerOptions = computed(() => [{ value: 'all', label: t('hsp.allOwners') }, ...prospectOwners(items.value).map((name) => ({ value: name, label: name }))])
const byStage = computed(() => prospectsByStage(items.value, owner.value))
const shownStages = computed(() => (stage.value === 'all' ? PROSPECT_STAGES : [stage.value]))
const rows = computed(() => shownStages.value.flatMap((value) => byStage.value[value] ?? []))
const prospecting = computed(() => items.value.filter((item) => item.stage !== 'customer').length)
const toRegister = computed(() => items.value.filter((item) => item.stage === 'customer').length)

/** O nome do filtro no menu de filtros. */
const filterLabel = (filter: string) => t(FILTER_LABELS[filter] as Key)

/** Carrega a primeira página com a fase e a busca escolhidas. */
async function load() {
  loadError.value = null
  try {
    page.value = await hubspotService.prospects(stage.value === 'all' ? [] : [stage.value], query.value.trim(), null)
    items.value = page.value.items
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Junta a próxima página do HubSpot à lista. */
async function loadMore() {
  if (!page.value?.next_after) return
  loadingMore.value = true
  try {
    page.value = await hubspotService.prospects(stage.value === 'all' ? [] : [stage.value], query.value.trim(), page.value.next_after)
    items.value = [...items.value, ...page.value.items]
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  } finally {
    loadingMore.value = false
  }
}

/** Abre o cadastro de cliente preenchido com o contato. */
function register(prospect: HubspotProspect) {
  void router.push(registerLink(prospect))
}

const searchLater = useDebounceFn(load, SEARCH_DELAY_MS)
watch(query, () => void searchLater())
watch(stage, load)
onMounted(load)
</script>

<template>
  <PageHeader :title="t('hsp.title')" :sub="t('hsp.sub')">
    <template #actions>
      <Segmented v-model="view" :options="viewOptions" :label="t('hsp.view')" />
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <p v-else-if="page && !page.configured" class="rounded-lg border border-dashed bg-card p-4 text-[14px] text-muted-foreground">{{ t('hs.notConfiguredHelp') }}</p>
    <template v-else>
      <div class="grid gap-4 sm:grid-cols-3">
        <StatTile framed :label="t('hsp.prospecting')" :value="page ? prospecting : '–'" />
        <StatTile framed :label="t('hsp.toRegister')" :value="page ? toRegister : '–'" :tone="toRegister ? 'text-ok' : undefined" :hint="t('hsp.toRegisterHint')" />
        <StatTile framed :label="t('hsp.total')" :value="page ? page.total : '–'" :hint="t('hsp.totalHint')" />
      </div>
      <section class="overflow-hidden rounded-lg border bg-card">
        <div class="flex flex-wrap items-center gap-3 p-4">
          <div class="relative w-full sm:w-[260px]">
            <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input v-model="query" type="search" maxlength="100" :aria-label="t('hsp.search')" class="h-9 pl-9" :placeholder="t('hsp.search')" />
          </div>
          <Select v-if="barFilters.isShown('stage')" v-model="stage" :options="stageOptions" :aria-label="t('hsp.col.stage')" class="h-9 w-full sm:w-[200px]" />
          <Select v-if="barFilters.isShown('owner')" v-model="owner" :options="ownerOptions" :aria-label="t('hsp.col.owner')" class="h-9 w-full sm:w-[200px]" />
          <FiltersMenu v-model:shown="barFilters.shown.value" :filters="FILTERS" :label="filterLabel" />
        </div>
        <div v-if="view === 'board'" :class="['grid gap-3 border-t p-4 sm:grid-cols-2', shownStages.length > 1 ? 'lg:grid-cols-5' : 'lg:grid-cols-3']">
          <div v-for="column in shownStages" :key="column" class="min-w-0 rounded-md bg-muted p-2">
            <div class="flex items-center justify-between px-1 pb-2 text-[13px] font-medium">
              <span class="flex items-center gap-1.5"><HubspotMark :size="12" />{{ lifecycleLabel(column) }}</span>
              <span class="tnum text-muted-foreground">{{ byStage[column]?.length ?? 0 }}</span>
            </div>
            <div class="grid gap-2">
              <article v-for="prospect in byStage[column]" :key="prospect.hubspot_id" class="rounded-md border bg-card p-3">
                <a :href="prospect.url" target="_blank" rel="noreferrer" class="text-[14px] font-medium hover:underline">{{ prospect.company || prospectName(prospect) }}</a>
                <div class="text-[13px] text-muted-foreground">{{ prospectName(prospect) }}</div>
                <div v-if="prospect.email" class="truncate text-[13px] text-muted-foreground" :title="prospect.email">{{ prospect.email }}</div>
                <div class="mt-2 flex items-center justify-between gap-2 text-[12px] text-muted-foreground">
                  <span>{{ prospect.owner || t('hs.card.noOwner') }}</span>
                  <span v-if="prospect.created_at">{{ formatDate(prospect.created_at, false) }}</span>
                </div>
                <div v-if="column === 'customer' && canRegister" class="mt-2 border-t pt-2">
                  <Button size="sm" @click="register(prospect)"><UserPlus aria-hidden="true" />{{ t('hsp.register') }}</Button>
                </div>
              </article>
              <p v-if="page && !byStage[column]?.length" class="px-1 py-6 text-center text-[13px] text-muted-foreground">{{ t('hsp.emptyStage') }}</p>
            </div>
          </div>
        </div>
        <DataTable v-else :min="820">
          <thead>
            <tr>
              <th :class="th">{{ t('hsp.col.contact') }}</th>
              <th :class="th">{{ t('hsp.col.company') }}</th>
              <th :class="th">{{ t('hsp.col.stage') }}</th>
              <th :class="th">{{ t('hsp.col.owner') }}</th>
              <th :class="th">{{ t('hsp.col.created') }}</th>
              <th :class="th"><span class="sr-only">{{ t('hsp.col.actions') }}</span></th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="6" :loading="page === null" :empty="rows.length === 0" :icon="UserSearch" :title="t('hsp.none')" />
            <tr v-for="prospect in rows" :key="prospect.hubspot_id" class="hover:bg-muted">
              <td :class="[td, 'font-medium']">
                {{ prospectName(prospect) }}
                <div class="text-[13px] font-normal text-muted-foreground">{{ prospect.email }}</div>
              </td>
              <td :class="td">{{ prospect.company || '—' }}</td>
              <td :class="td"><Status :tone="prospect.stage === 'customer' ? 'ok' : prospect.stage === 'opportunity' ? 'ochre' : 'neutral'">{{ lifecycleLabel(prospect.stage) }}</Status></td>
              <td :class="td">{{ prospect.owner || t('hs.card.noOwner') }}</td>
              <td :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground']">{{ formatDate(prospect.created_at, false) }}</td>
              <td :class="[td, 'whitespace-nowrap text-right']">
                <Button v-if="prospect.stage === 'customer' && canRegister" size="sm" @click="register(prospect)"><UserPlus aria-hidden="true" />{{ t('hsp.register') }}</Button>
                <a :href="prospect.url" target="_blank" rel="noreferrer" class="ml-2 inline-flex items-center gap-1 text-[13px] text-link hover:underline">{{ t('hs.card.open') }}<ExternalLink class="size-3.5" aria-hidden="true" /></a>
              </td>
            </tr>
          </tbody>
        </DataTable>
        <div class="flex flex-wrap items-center justify-between gap-3 border-t bg-[hsl(var(--card-footer))] px-6 py-3 text-[13px] text-muted-foreground">
          <span>{{ t('hsp.footer', { shown: items.length, total: page?.total ?? 0 }) }}</span>
          <Button v-if="page?.next_after" variant="outline" size="sm" :loading="loadingMore" @click="loadMore">{{ t('hsp.more') }}</Button>
        </div>
      </section>
    </template>
  </PageBody>
</template>
