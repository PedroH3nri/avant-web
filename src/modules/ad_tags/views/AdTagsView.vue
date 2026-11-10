<script setup lang="ts">
/** Lista das ad tags agrupadas por site: no painel do cliente as da Empresa, no interno as de todos os clientes. */
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDebounceFn } from '@vueuse/core'
import { BarChart3, Code2, Plus, Search } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Badge from '@/components/ui/Badge.vue'
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
import { errorText, formatDate, t, tn } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { adTagPermission, adTagsPath, LIMITS, tagStatus } from '@/modules/ad_tags/rules'
import { adTagService } from '@/modules/ad_tags/service'
import type { AdTag, AdTagSiteOption } from '@/modules/ad_tags/types'
import { useSession } from '@/stores/session'

const route = useRoute()
const router = useRouter()
const session = useSession()
const internal = route.meta.internal === true
const service = adTagService(internal)
const base = adTagsPath(internal)
const tags = ref<AdTag[] | null>(null)
const lastSeen = ref<Record<string, string | null>>({})
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const query = ref('')
const loadError = ref<string | null>(null)
const newOpen = ref(false)
const newSite = ref('')
const newName = ref('')
const siteQuery = ref('')
const sites = ref<AdTagSiteOption[]>([])
const busy = ref(false)
const nameTaken = ref(false)

const canManage = computed(() => session.can(adTagPermission(internal, 'manage')))
const columns = computed(() => (internal ? 6 : 5))
const groups = computed(() => {
  const bySite = new Map<string, { siteId: string; domain: string; client: string | null; tags: AdTag[] }>()
  for (const tag of tags.value ?? []) {
    const group = bySite.get(tag.site_id) ?? { siteId: tag.site_id, domain: tag.domain, client: tag.client?.name ?? null, tags: [] }
    group.tags.push(tag)
    bySite.set(tag.site_id, group)
  }
  return [...bySite.values()].sort((first, second) => first.domain.localeCompare(second.domain))
})
const siteOptions = computed(() => [
  { value: '', label: t('at.chooseSite') },
  ...sites.value.map((site) => ({ value: site.id, label: site.client ? `${site.domain} · ${site.client}` : site.domain })),
])

/** Carrega a página das tags e, em paralelo, a última vez que cada uma foi vista. */
async function load() {
  loadError.value = null
  try {
    const found = await service.list({ page: page.value, q: query.value.trim() })
    if (found.items.length === 0 && page.value > 1 && found.pages > 0) {
      page.value = found.pages
      return
    }
    tags.value = found.items
    total.value = found.total
    pages.value = found.pages
    void loadSeen(found.items)
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** A última vez vista de cada tag publicada; uma que falhar fica sem a informação. */
async function loadSeen(items: AdTag[]) {
  const pairs = await Promise.all(
    items.filter((tag) => tag.live).map(async (tag) => [tag.id, await service.health(tag.id, 1).then((health) => health.last_seen_at).catch(() => undefined)] as const),
  )
  const seen: Record<string, string | null> = {}
  pairs.forEach(([id, value]) => {
    if (value !== undefined) seen[id] = value
  })
  lastSeen.value = seen
}

/** Volta para a primeira página quando a busca muda. */
function refilter() {
  if (page.value === 1) void load()
  else page.value = 1
}

const searchLater = useDebounceFn(refilter, 300)
/** Busca os sites pelo domínio no painel interno. */
const searchSites = useDebounceFn(async () => {
  sites.value = await service.sites(siteQuery.value.trim()).catch(() => [])
}, 300)

onMounted(load)
watch(page, load)
watch(query, searchLater)
watch(siteQuery, searchSites)

/** Abre o modal da tag nova, já no site da linha; a primeira tag do site se chama Principal. */
async function startNew(siteId = '') {
  nameTaken.value = false
  newSite.value = siteId
  newName.value = siteId && groups.value.some((group) => group.siteId === siteId) ? '' : t('at.defaultName')
  newOpen.value = true
  if (!sites.value.length) sites.value = await service.sites('').catch(() => [])
  const known = groups.value.find((group) => group.siteId === siteId)
  if (known && !sites.value.some((site) => site.id === siteId)) sites.value = [{ id: known.siteId, domain: known.domain, client: known.client }, ...sites.value]
}

/** Cria a tag e abre o editor dela. */
async function create() {
  if (!newSite.value || !newName.value.trim()) return
  busy.value = true
  nameTaken.value = false
  try {
    const created = await service.create(newSite.value, newName.value.trim())
    newOpen.value = false
    toast.success(t('at.created'))
    await router.push(`${base}/${created.id}`)
  } catch (error) {
    const code = error instanceof ApiError ? error.code : 'unknown'
    nameTaken.value = code === 'ad_tag_name_taken'
    if (!nameTaken.value) toast.error(errorText(code))
  } finally {
    busy.value = false
  }
}

/** A última vez vista da tag para a coluna: a data, nunca ou um traço enquanto carrega. */
function seenText(tag: AdTag): string {
  if (!tag.live) return '—'
  if (!(tag.id in lastSeen.value)) return '…'
  const seen = lastSeen.value[tag.id]
  return seen ? formatDate(seen) : t('at.never')
}
</script>

<template>
  <PageHeader :title="t('nav.adTags')" :sub="internal ? t('at.subInternal') : t('at.sub')">
    <template v-if="canManage" #actions>
      <Button @click="startNew()"><Plus />{{ t('at.new') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <div class="relative w-full sm:w-[280px]">
      <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
      <Input v-model="query" :aria-label="t('at.search')" class="h-9 bg-card pl-9" :placeholder="internal ? t('at.searchPlaceholderInternal') : t('at.searchPlaceholder')" />
    </div>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="internal ? 900 : 780">
      <thead>
        <tr>
          <th :class="th">{{ t('at.col.tag') }}</th>
          <th v-if="internal" :class="th">{{ t('at.col.client') }}</th>
          <th :class="th">{{ t('at.col.status') }}</th>
          <th :class="th">{{ t('at.col.seen') }}</th>
          <th :class="th">{{ t('at.col.draft') }}</th>
          <th :class="th"><span class="sr-only">{{ t('at.col.actions') }}</span></th>
        </tr>
      </thead>
      <tbody v-if="!tags || tags.length === 0">
        <TableState :cols="columns" :loading="!tags" :empty="tags?.length === 0" :icon="Code2" :desc="query ? t('at.emptySearch') : t('at.empty')" />
      </tbody>
      <tbody v-for="group in groups" :key="group.siteId" class="border-t first:border-t-0">
        <tr class="bg-muted/60">
          <td :class="[td, 'py-2']" :colspan="internal ? 2 : 1">
            <span class="font-mono text-[13px] font-medium">{{ group.domain }}</span>
            <span v-if="internal && group.client" class="ml-2 text-[12px] text-muted-foreground">{{ group.client }}</span>
            <span class="ml-2 text-[12px] text-muted-foreground">· {{ tn('at.tagCount', group.tags.length) }}</span>
          </td>
          <td :class="[td, 'py-2 text-right']" :colspan="4">
            <Button v-if="canManage" size="sm" variant="ghost" @click="startNew(group.siteId)"><Plus />{{ t('at.newOnSite') }}</Button>
          </td>
        </tr>
        <tr v-for="tag in group.tags" :key="tag.id" class="hover:bg-muted">
          <td :class="[td, 'pl-8']" :colspan="internal ? 2 : 1">
            <RouterLink :to="`${base}/${tag.id}`" class="font-medium hover:underline">{{ tag.name }}</RouterLink>
            <span class="ml-2 font-mono text-[12px] text-muted-foreground">{{ tag.key }}</span>
          </td>
          <td :class="td">
            <Status :tone="tagStatus(tag, tag.live && tag.id in lastSeen ? lastSeen[tag.id] : undefined).tone">{{ tagStatus(tag, tag.live && tag.id in lastSeen ? lastSeen[tag.id] : undefined).label }}</Status>
          </td>
          <td :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground tnum']">{{ seenText(tag) }}</td>
          <td :class="td">
            <Badge v-if="tag.has_changes" tone="ochre">{{ t('at.draftPending') }}</Badge>
            <span v-else class="text-[13px] text-muted-foreground">—</span>
          </td>
          <td :class="[td, 'text-right']">
            <div class="flex justify-end gap-2">
              <Button v-if="tag.live" size="sm" variant="outline" @click="router.push(`${base}/${tag.id}/metricas`)"><BarChart3 />{{ t('at.metrics') }}</Button>
              <Button size="sm" variant="outline" @click="router.push(`${base}/${tag.id}`)">{{ t('at.open') }}</Button>
            </div>
          </td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
  </PageBody>
  <Dialog v-model:open="newOpen" :title="t('at.newTitle')" :desc="t('at.newDesc')">
    <form id="at-new" class="grid gap-4" @submit.prevent="create">
      <Input v-if="internal" v-model="siteQuery" :aria-label="t('at.searchSite')" class="h-9" :placeholder="t('at.searchSite')" />
      <Field id="at-new-site" :label="t('at.site')">
        <NativeSelect id="at-new-site" v-model="newSite" :options="siteOptions" />
      </Field>
      <Field id="at-new-name" :label="t('at.name')" :hint="t('at.nameHint')" :error="nameTaken && t('at.nameTaken')">
        <Input id="at-new-name" v-model="newName" :maxlength="LIMITS.name" :placeholder="t('at.defaultName')" />
      </Field>
    </form>
    <template #footer>
      <Button variant="outline" @click="newOpen = false">{{ t('common.cancel') }}</Button>
      <Button type="submit" form="at-new" :disabled="busy || !newSite || !newName.trim()">{{ t('at.create') }}</Button>
    </template>
  </Dialog>
</template>
