<script setup lang="ts">
/**
 * Construtor de relatórios, como o do HubSpot: campos à esquerda, prévia ao vivo no centro e a
 * configuração à direita. Serve para relatório novo, salvo (``/relatorios/:id``) ou modelo.
 */
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { useDebounceFn } from '@vueuse/core'
import { DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import { ArrowLeft, ChevronDown, Copy, X } from 'lucide-vue-next'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadError from '@/components/LoadError.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import { ApiError } from '@/lib/api'
import { errorText, lang, pick, t } from '@/lib/i18n'
import { networkName } from '@/modules/networks/rules'
import { networkService } from '@/modules/networks/service'
import ConfigPanel, { type FilterOption } from '@/modules/reports/components/ConfigPanel.vue'
import FieldsPanel from '@/modules/reports/components/FieldsPanel.vue'
import MetricStylePopover from '@/modules/reports/components/MetricStylePopover.vue'
import ReportChart from '@/modules/reports/components/ReportChart.vue'
import ReportTable from '@/modules/reports/components/ReportTable.vue'
import SaveReportDialog, { type SaveForm } from '@/modules/reports/components/SaveReportDialog.vue'
import {
  builderState,
  canExport,
  emptyDraft,
  fromReport,
  fromTemplate,
  metricInfo,
  toInput,
  toQuery,
  withDimensions,
  withMetrics,
  type ReportDraft,
} from '@/modules/reports/rules'
import { exportUrl, reportService } from '@/modules/reports/service'
import type { MetricCatalog, MetricStyle, ReportResult, SavedReport, SavedReportInput } from '@/modules/reports/types'
import { siteService } from '@/modules/sites/service'
import { teamService } from '@/modules/team/service'
import { useSession } from '@/stores/session'

const PREVIEW_DELAY_MS = 600
const COPY_SUFFIX = ' (cópia)'
const NAME_MAX = 120
/** Erros da API cuja mensagem já diz o que está errado (em português) e vale mostrar como veio. */
const SPECIFIC = new Set(['invalid_input', 'invalid_formula'])

const session = useSession()
const route = useRoute()
const router = useRouter()
const catalog = ref<MetricCatalog | null>(null)
const draft = ref<ReportDraft>(emptyDraft())
const saved = ref<SavedReportInput | null>(null)
const result = ref<ReportResult | null>(null)
const previewError = ref<string | null>(null)
const previewing = ref(false)
const loadError = ref<string | null>(null)
const roles = ref<{ id: string; name: string }[] | null>(null)
const options = ref<Record<string, FilterOption[]>>({})
const saving = ref(false)
const busy = ref(false)
const saveError = ref<string | null>(null)
const touched = ref(false)
const leaving = ref<string | null>(null)
let allowLeave = false
let latest = 0
let retryTimer: ReturnType<typeof setTimeout> | null = null

const canManage = computed(() => session.can('reports.manage'))
const editable = computed(() => draft.value.editable && (draft.value.id !== null || canManage.value))
const state = computed(() => (catalog.value ? builderState(draft.value, saved.value, catalog.value) : 'new'))
const stateText = computed(() =>
  state.value === 'new' ? t('report.stateNew') : state.value === 'dirty' ? t('report.stateDirty') : t('report.stateSaved', { visibility: t(`report.visibility.${draft.value.visibility}`) }),
)

/** Mensagem de erro da API: a própria, quando ela já explica; senão, a tradução do código. */
const apiMessage = (error: unknown) =>
  error instanceof ApiError ? (SPECIFIC.has(error.code) && error.message ? error.message : errorText(error.code)) : errorText('unknown')

/** Carrega catálogo, papéis, opções de filtro e o rascunho da rota (novo, salvo ou modelo). */
async function load() {
  loadError.value = null
  touched.value = false
  try {
    catalog.value = await reportService.catalog()
    const id = route.params.id as string | undefined
    const key = route.params.key as string | undefined
    if (id) {
      useReport(await reportService.get(id))
    } else if (key) {
      const templates = await reportService.templates()
      const template = templates.items.find((item) => item.key === key)
      if (!template) throw new ApiError(404, 'not_found', 'modelo')
      draft.value = fromTemplate(template, lang.value)
      saved.value = null
    } else {
      draft.value = emptyDraft(t('report.untitled'))
      saved.value = null
    }
  } catch (error) {
    loadError.value = apiMessage(error)
    return
  }
  void loadExtras()
  runPreview()
}

/** Papéis (para "Papéis escolhidos") e os sites e networks dos filtros, se a pessoa pode ver. */
async function loadExtras() {
  const [roleList, siteList, networkList] = await Promise.allSettled([
    session.can('roles.view') ? teamService.roles() : Promise.reject(new Error('sem permissão')),
    session.can('sites.view') ? siteService.list() : Promise.reject(new Error('sem permissão')),
    session.can('network.view') ? networkService.list() : Promise.reject(new Error('sem permissão')),
  ])
  roles.value = roleList.status === 'fulfilled' ? roleList.value.items.map((role) => ({ id: role.id, name: pick(role.name) })) : null
  options.value = {
    site: siteList.status === 'fulfilled' ? siteList.value.items.map((site) => ({ value: site.id, label: site.domain })) : [],
    network: networkList.status === 'fulfilled' ? networkList.value.items.map((network) => ({ value: network.id, label: networkName(network) })) : [],
  }
}

/** Usa o relatório salvo como rascunho e como referência do que está gravado. */
function useReport(report: SavedReport) {
  draft.value = fromReport(report)
  saved.value = catalog.value ? toInput(draft.value, catalog.value) : null
}

/** Roda a prévia; só a resposta do último pedido vale, e o limite de taxa agenda nova tentativa. */
async function preview() {
  if (!catalog.value) return
  if (retryTimer) clearTimeout(retryTimer)
  if (!draft.value.metrics.length) {
    result.value = null
    previewError.value = t('report.pickMetric')
    return
  }
  const request = ++latest
  previewing.value = true
  try {
    const response = await reportService.query(toQuery(draft.value, session.displayCurrency, catalog.value))
    if (request !== latest) return
    result.value = response
    previewError.value = null
  } catch (error) {
    if (request !== latest) return
    previewError.value = apiMessage(error)
    if (error instanceof ApiError && error.code === 'rate_limited') retryTimer = setTimeout(preview, Math.max(error.retryAfter ?? 2, 1) * 1000)
  } finally {
    if (request === latest) previewing.value = false
  }
}
const runPreview = useDebounceFn(preview, PREVIEW_DELAY_MS)

/** Aplica uma mudança no rascunho e pede nova prévia. */
function change(next: ReportDraft) {
  draft.value = next
  touched.value = true
  void runPreview()
}
/** Liga ou desliga uma métrica (tira o que deixa de combinar). */
function toggleMetric(key: string) {
  if (!catalog.value) return
  const metrics = draft.value.metrics.includes(key) ? draft.value.metrics.filter((kept) => kept !== key) : [...draft.value.metrics, key]
  change(withMetrics(draft.value, metrics, catalog.value))
}
/** Liga ou desliga uma dimensão (o gráfico volta à tabela se não servir mais). */
function toggleDimension(key: string) {
  if (!catalog.value) return
  const dimensions = draft.value.dimensions.includes(key) ? draft.value.dimensions.filter((kept) => kept !== key) : [...draft.value.dimensions, key]
  change(withDimensions(draft.value, dimensions, catalog.value))
}
/** Troca a cor e a aparência de uma métrica. */
function setStyle(key: string, style: MetricStyle) {
  change({ ...draft.value, styles: { ...draft.value.styles, [key]: style } })
}

/** Grava (cria ou troca) com o que veio da modal de salvar. */
async function save(form: SaveForm) {
  if (!catalog.value) return
  busy.value = true
  saveError.value = null
  const next = { ...draft.value, name: form.name, description: form.description, visibility: form.visibility, roleIds: form.roleIds }
  try {
    const input = toInput(next, catalog.value)
    const report = next.id ? await reportService.update(next.id, input) : await reportService.create(input)
    const created = !next.id
    useReport(report)
    touched.value = false
    saving.value = false
    toast.success(t('report.saved'))
    if (created) {
      allowLeave = true
      await router.replace(`/relatorios/${report.id}`)
      allowLeave = false
    }
  } catch (error) {
    saveError.value = apiMessage(error)
  } finally {
    busy.value = false
  }
}

/** Salva uma cópia privada da pessoa e abre a cópia. */
async function saveCopy() {
  if (!catalog.value) return
  try {
    const copy =
      draft.value.id && state.value === 'saved'
        ? await reportService.duplicate(draft.value.id)
        : await reportService.create({
            ...toInput(draft.value, catalog.value),
            name: (draft.value.name.trim() || t('report.untitled')).slice(0, NAME_MAX - COPY_SUFFIX.length) + COPY_SUFFIX,
            visibility: 'private',
            role_ids: [],
          })
    toast.success(t('report.duplicated'))
    allowLeave = true
    await router.push(`/relatorios/${copy.id}`)
    allowLeave = false
  } catch (error) {
    toast.error(apiMessage(error))
  }
}

/** Baixa o relatório salvo no formato escolhido. */
function download(format: 'csv' | 'xlsx') {
  if (draft.value.id) window.location.assign(exportUrl(draft.value.id, format, lang.value))
}

/** Sai mesmo assim, perdendo as alterações. */
async function leave() {
  const target = leaving.value
  leaving.value = null
  if (!target) return
  allowLeave = true
  await router.push(target)
  allowLeave = false
}

onBeforeRouteLeave((to) => {
  if (allowLeave || !touched.value || state.value === 'saved') return true
  leaving.value = to.fullPath
  return false
})
watch(
  () => route.fullPath,
  (path, previous) => {
    if (path !== previous && !(draft.value.id && route.params.id === draft.value.id)) void load()
  },
  { immediate: true },
)
onBeforeUnmount(() => {
  if (retryTimer) clearTimeout(retryTimer)
})
</script>

<template>
  <div class="flex min-h-[calc(100dvh-3.5rem)] flex-col bg-background">
    <header class="sticky top-14 z-10 flex flex-wrap items-center gap-3 border-b bg-background px-4 py-3">
      <Button variant="ghost" size="sm" class="-ml-1" @click="router.push('/relatorios')"><ArrowLeft />{{ t('nav.reports') }}</Button>
      <span class="h-5 w-px bg-border" aria-hidden="true" />
      <input
        v-model="draft.name"
        :aria-label="t('report.name')"
        :disabled="!editable"
        :maxlength="NAME_MAX"
        class="min-w-0 flex-1 rounded-md bg-transparent px-2 py-1 text-[18px] font-semibold tracking-tight hover:bg-accent focus-visible:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:hover:bg-transparent"
        @input="touched = true"
      />
      <span class="hidden text-[13px] text-muted-foreground sm:inline">{{ stateText }}</span>
      <div class="ml-auto flex flex-wrap gap-2">
        <DropdownMenuRoot>
          <DropdownMenuTrigger as-child>
            <Button variant="outline">{{ t('report.export') }}<ChevronDown /></Button>
          </DropdownMenuTrigger>
          <MenuContent align="end">
            <template v-if="canExport(state)">
              <MenuItem @select="download('csv')">CSV</MenuItem>
              <MenuItem @select="download('xlsx')">XLSX (Excel)</MenuItem>
            </template>
            <p v-else class="max-w-[14rem] px-2 py-1.5 text-[13px] text-muted-foreground">{{ t('report.saveToExport') }}</p>
          </MenuContent>
        </DropdownMenuRoot>
        <Button v-if="canManage && draft.id" variant="outline" @click="saveCopy"><Copy />{{ t('report.saveCopy') }}</Button>
        <Button v-if="editable" :disabled="!draft.metrics.length || !catalog" @click="saving = true">{{ t('report.save') }}</Button>
      </div>
    </header>
    <div v-if="draft.id && !draft.editable" class="border-b bg-muted px-4 py-2 text-[13px] text-muted-foreground">{{ t('report.readOnly') }}</div>
    <LoadError v-if="loadError" class="m-6" :message="loadError" @retry="load" />
    <div v-else-if="catalog" class="grid flex-1 lg:grid-cols-[264px_minmax(0,1fr)_300px]">
      <aside class="border-b lg:border-b-0 lg:border-r" :aria-label="t('report.fields')">
        <FieldsPanel :draft="draft" :catalog="catalog" :editable="editable" :can-manage-metrics="false" @metric="toggleMetric" @dimension="toggleDimension" />
      </aside>
      <main class="min-w-0 bg-muted">
        <div class="grid gap-4 p-4 sm:p-6">
          <div class="flex flex-wrap items-center gap-1.5">
            <span v-for="key in draft.metrics" :key="key" class="inline-flex h-7 items-center gap-1 rounded-full border bg-card pl-1 pr-1 text-[13px]">
              <MetricStylePopover :label="metricInfo(key, catalog, lang).label" :style="draft.styles[key] ?? {}" :disabled="!editable" @change="(style) => setStyle(key, style)" />
              <button v-if="editable" type="button" class="rounded-full p-1 hover:bg-accent" :aria-label="t('report.removeField', { name: metricInfo(key, catalog, lang).label })" @click="toggleMetric(key)"><X class="size-3" /></button>
            </span>
            <span v-if="draft.dimensions.length" class="px-1 text-[13px] text-muted-foreground">{{ t('report.by') }}</span>
            <span v-for="key in draft.dimensions" :key="key" class="inline-flex h-7 items-center gap-1 rounded-full border border-dashed bg-card pl-3 pr-1 text-[13px]">
              {{ catalog.dimensions.find((dimension) => dimension.key === key)?.label[lang] ?? key }}
              <button v-if="editable" type="button" class="rounded-full p-1 hover:bg-accent" :aria-label="t('report.removeField', { name: key })" @click="toggleDimension(key)"><X class="size-3" /></button>
            </span>
            <span v-if="editable && draft.metrics.length" class="px-1 text-[12px] text-muted-foreground">{{ t('report.styleHint') }}</span>
          </div>
          <p v-if="previewError" class="rounded-md border border-bad/40 bg-card px-4 py-3 text-[14px] text-bad" role="alert">{{ previewError }}</p>
          <Card v-if="result && draft.chart !== 'table'" :footer-note="t('report.previewNote')" :class="previewing ? 'opacity-60 transition-opacity' : undefined">
            <ReportChart :draft="draft" :result="result" :catalog="catalog" />
          </Card>
          <p v-if="result && draft.chart === 'table'" class="text-[13px] text-muted-foreground">{{ t('report.previewNote') }}</p>
          <h2 v-if="result && draft.chart !== 'table' && draft.chart !== 'kpi'" class="text-[14px] font-semibold">{{ t('report.data') }}</h2>
          <div v-if="result && draft.chart !== 'kpi'" :class="previewing ? 'opacity-60 transition-opacity' : undefined">
            <ReportTable :draft="draft" :result="result" :catalog="catalog" />
          </div>
        </div>
      </main>
      <aside class="border-t lg:border-l lg:border-t-0" :aria-label="t('report.settings')">
        <ConfigPanel :draft="draft" :catalog="catalog" :editable="editable" :options="options" @update="(patch) => change({ ...draft, ...patch })" />
      </aside>
    </div>
  </div>
  <SaveReportDialog
    v-model:open="saving"
    :initial="{ name: draft.name, description: draft.description, visibility: draft.visibility, roleIds: draft.roleIds }"
    :roles="roles"
    :busy="busy"
    :error="saveError"
    @save="save"
  />
  <ConfirmDialog
    :open="leaving !== null"
    :title="t('report.leaveTitle')"
    :desc="t('report.leaveDesc')"
    :action="t('report.leave')"
    @update:open="(open) => !open && (leaving = null)"
    @confirm="leave"
  />
</template>
