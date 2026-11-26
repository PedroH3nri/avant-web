<script setup lang="ts">
/** Ferramentas > Central de ajuda: a equipe Groone escreve os guias e artigos em PT, EN e ES, sobe os prints e publica para os clientes. */
import { computed, onMounted, ref } from 'vue'
import { BookOpen, Plus, Search } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import StatTile from '@/components/StatTile.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, locale, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { cn } from '@/lib/utils'
import { CATEGORIES, CATEGORY_LABEL } from '@/modules/help/rules'
import type { HelpCategory, HelpKind } from '@/modules/help/types'
import HelpItemEditor from '@/modules/internal/help/components/HelpItemEditor.vue'
import { LANGUAGES, draftOf, filterHelpItems, missingLanguages, newDraft, type HelpDraft, type HelpFilters } from '@/modules/internal/help/rules'
import { helpEditorService } from '@/modules/internal/help/service'
import type { HelpItemRow } from '@/modules/internal/help/types'
import FiltersMenu from '@/modules/views/components/FiltersMenu.vue'
import { useLocalBarFilters } from '@/modules/views/barFilters'

const FILTERS = ['kind', 'state', 'category']
const DEFAULT_FILTERS = ['kind', 'state']
const FILTER_LABELS: Record<string, Key> = { kind: 'helped.col.kind', state: 'helped.col.state', category: 'helped.fieldCategory' }
const KIND_LABEL: Record<HelpKind, Key> = { guide: 'helped.guide', article: 'helped.article' }

const rows = ref<HelpItemRow[] | null>(null)
const loadError = ref<string | null>(null)
const filters = ref<HelpFilters>({ kind: 'all', state: 'all', category: 'all', query: '' })
const draft = ref<HelpDraft | null>(null)
const editorOpen = ref(false)
const barFilters = useLocalBarFilters('help-items', FILTERS, DEFAULT_FILTERS, {
  kind: () => (filters.value.kind = 'all'),
  state: () => (filters.value.state = 'all'),
  category: () => (filters.value.category = 'all'),
})
const shown = computed(() => filterHelpItems(rows.value ?? [], filters.value))
const totals = computed(() => {
  const all = rows.value ?? []
  return {
    published: all.filter((row) => row.published).length,
    drafts: all.filter((row) => !row.published).length,
    missing: all.filter((row) => missingLanguages(row).length > 0).length,
    reads: all.reduce((total, row) => total + row.reads, 0),
  }
})
const kindOptions = computed(() => [{ value: 'all', label: t('helped.allKinds') }, ...(['guide', 'article'] as HelpKind[]).map((value) => ({ value, label: t(KIND_LABEL[value]) }))])
const stateOptions = computed(() => [
  { value: 'all', label: t('helped.allStates') },
  { value: 'published', label: t('helped.statePublished') },
  { value: 'draft', label: t('helped.stateDraft') },
])
const categoryOptions = computed(() => [{ value: 'all', label: t('helped.allCategories') }, ...CATEGORIES.map((value: HelpCategory) => ({ value, label: t(CATEGORY_LABEL[value]) }))])

/** O nome do filtro no menu de filtros. */
const filterLabel = (filter: string) => t(FILTER_LABELS[filter] as Key)

/** Carrega os guias e artigos. */
async function load() {
  loadError.value = null
  try {
    rows.value = await helpEditorService.list()
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Abre o editor com um guia ou artigo novo. */
function create(kind: HelpKind) {
  draft.value = newDraft(kind)
  editorOpen.value = true
}

/** Abre o editor com o texto de todos os idiomas do guia ou artigo. */
async function edit(row: HelpItemRow) {
  try {
    draft.value = draftOf(await helpEditorService.get(row.id))
    editorOpen.value = true
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Troca ou acrescenta a linha salva, mantendo as leituras. */
function saved(row: HelpItemRow) {
  const current = rows.value ?? []
  const previous = current.find((item) => item.id === row.id)
  const next = { ...row, reads: previous?.reads ?? 0 }
  rows.value = previous ? current.map((item) => (item.id === row.id ? next : item)) : [next, ...current]
}

/** Tira a linha apagada. */
function removed(itemId: string) {
  rows.value = (rows.value ?? []).filter((item) => item.id !== itemId)
}

onMounted(load)
</script>

<template>
  <PageHeader :title="t('helped.title')" :sub="t('helped.sub')">
    <template #actions>
      <Button variant="outline" @click="create('article')"><Plus />{{ t('helped.newArticle') }}</Button>
      <Button @click="create('guide')"><Plus />{{ t('helped.newGuide') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatTile framed :label="t('helped.kpiPublished')" :value="rows ? totals.published : '–'" />
        <StatTile framed :label="t('helped.kpiDrafts')" :value="rows ? totals.drafts : '–'" />
        <StatTile framed :label="t('helped.kpiMissing')" :value="rows ? totals.missing : '–'" :tone="totals.missing ? 'text-ochre' : undefined" />
        <StatTile framed :label="t('helped.kpiReads')" :value="rows ? totals.reads.toLocaleString(locale) : '–'" />
      </div>
      <section class="overflow-hidden rounded-lg border bg-card">
        <div class="flex flex-wrap items-center gap-3 p-4">
          <div class="relative w-full sm:w-[260px]">
            <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input v-model="filters.query" type="search" :aria-label="t('helped.search')" class="h-9 pl-9" :placeholder="t('helped.search')" />
          </div>
          <Select v-if="barFilters.isShown('kind')" v-model="filters.kind" :options="kindOptions" :aria-label="t('helped.col.kind')" class="h-9 w-full sm:w-[160px]" />
          <Select v-if="barFilters.isShown('state')" v-model="filters.state" :options="stateOptions" :aria-label="t('helped.col.state')" class="h-9 w-full sm:w-[160px]" />
          <Select v-if="barFilters.isShown('category')" v-model="filters.category" :options="categoryOptions" :aria-label="t('helped.fieldCategory')" class="h-9 w-full sm:w-[180px]" />
          <FiltersMenu v-model:shown="barFilters.shown.value" :filters="FILTERS" :label="filterLabel" />
        </div>
        <DataTable :min="860">
          <thead>
            <tr>
              <th :class="th">{{ t('helped.col.title') }}</th>
              <th :class="th">{{ t('helped.col.kind') }}</th>
              <th :class="th">{{ t('helped.col.languages') }}</th>
              <th :class="th">{{ t('helped.col.state') }}</th>
              <th :class="[th, 'text-right']">{{ t('helped.col.reads') }}</th>
              <th :class="th">{{ t('helped.col.updated') }}</th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="6" :loading="rows === null" :empty="shown.length === 0" :icon="BookOpen" :title="rows?.length ? t('helped.noneFiltered') : t('helped.none')" />
            <tr v-for="row in shown" :key="row.id" class="cursor-pointer hover:bg-muted" tabindex="0" @click="edit(row)" @keydown.enter="edit(row)">
              <td :class="[td, 'font-medium']">
                {{ row.title }}
                <div class="text-[13px] font-normal text-muted-foreground">{{ t(CATEGORY_LABEL[row.category]) }}</div>
              </td>
              <td :class="td"><Badge>{{ t(KIND_LABEL[row.kind]) }}</Badge></td>
              <td :class="td">
                <span class="flex gap-1">
                  <span
                    v-for="code in LANGUAGES"
                    :key="code"
                    :class="cn('rounded border px-1.5 py-0.5 font-mono text-[11px] uppercase', row.languages.includes(code) ? 'bg-background' : 'border-dashed text-muted-foreground line-through')"
                    >{{ code }}</span
                  >
                </span>
              </td>
              <td :class="td">
                <Status :tone="row.published ? 'ok' : 'neutral'">{{ row.published ? t('helped.statePublished') : t('helped.stateDraft') }}</Status>
              </td>
              <td :class="[td, 'text-right tnum']">{{ row.reads.toLocaleString(locale) }}</td>
              <td :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground']">{{ formatDate(row.updated_at, false) }}</td>
            </tr>
          </tbody>
        </DataTable>
      </section>
    </template>
  </PageBody>
  <HelpItemEditor v-model:open="editorOpen" :draft="draft" @saved="saved" @removed="removed" />
</template>
