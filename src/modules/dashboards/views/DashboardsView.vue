<script setup lang="ts">
/**
 * Dashboards: os widgets numa grade de 12 colunas, com filtros que valem para todos. Sem id, abre o
 * escolhido pela pessoa ou o padrão da Empresa. Quem pode editar arruma a grade e salva os filtros.
 */
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { DropdownMenuRoot, DropdownMenuSeparator, DropdownMenuTrigger } from 'reka-ui'
import { LayoutGrid, MoreHorizontal, Pencil, Plus } from 'lucide-vue-next'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Input from '@/components/ui/Input.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import AddWidgetDialog from '@/modules/dashboards/components/AddWidgetDialog.vue'
import DashboardFiltersBar from '@/modules/dashboards/components/DashboardFiltersBar.vue'
import DashboardWidget from '@/modules/dashboards/components/DashboardWidget.vue'
import NewDashboardDialog from '@/modules/dashboards/components/NewDashboardDialog.vue'
import { emptyDefinition, filtersChanged, gridArea, moveWidget, readingOrder, removeWidget, resizeWidget, withLayout } from '@/modules/dashboards/rules'
import { dashboardService } from '@/modules/dashboards/service'
import type { Dashboard, DashboardFilters, FilterDimension, Widget } from '@/modules/dashboards/types'
import { clientService } from '@/modules/internal/clients/service'
import { staffService } from '@/modules/internal/staff/service'
import { networkName } from '@/modules/networks/rules'
import { networkService } from '@/modules/networks/service'
import type { FilterOption } from '@/modules/reports/components/ConfigPanel.vue'
import { reportService } from '@/modules/reports/service'
import type { MetricCatalog, Visibility } from '@/modules/reports/types'
import { siteService } from '@/modules/sites/service'
import { useSession } from '@/stores/session'

const NAME_MAX = 120
const session = useSession()
const route = useRoute()
const router = useRouter()
const dashboard = ref<Dashboard | null>(null)
const dashboards = ref<Dashboard[]>([])
const chosenId = ref<string | null>(null)
const catalog = ref<MetricCatalog | null>(null)
const options = ref<Partial<Record<FilterDimension, FilterOption[]>>>({})
const filters = ref<DashboardFilters>({})
const loadError = ref<string | null>(null)
const empty = ref(false)
const editing = ref(false)
const draftWidgets = ref<Widget[]>([])
const draftName = ref('')
const draftVisibility = ref<Visibility>('private')
const saving = ref(false)
const adding = ref(false)
const creating = ref(false)
const creatingBusy = ref(false)
const removing = ref(false)
const removingBusy = ref(false)

const internal = computed(() => session.company?.is_internal === true)
const canManage = computed(() => session.can('dashboards.manage'))
const widgets = computed(() => readingOrder(editing.value ? draftWidgets.value : (dashboard.value?.definition.widgets ?? [])))
const storedIds = computed(() => new Set((dashboard.value?.definition.widgets ?? []).map((widget) => widget.id)))
const shownFilters = computed<DashboardFilters | null>(() => (dashboard.value && filtersChanged(filters.value, dashboard.value.definition.filters) ? filters.value : null))
const switchOptions = computed(() => dashboards.value.map((item) => ({ value: item.id, label: item.name })))
const visibilities = computed(() => (['private', 'company'] as const).map((value) => ({ value, label: t(`dash.visibility.${value}`) })))
const subtitle = computed(() => {
  const found = dashboard.value
  if (!found) return undefined
  if (found.description) return found.description
  return found.is_default ? t('dash.defaultSub') : internal.value ? t('dash.grooneSub') : undefined
})

/** O motivo do erro da API, com o texto dela quando já explica. */
const apiMessage = (error: unknown) =>
  error instanceof ApiError ? (error.code === 'invalid_input' && error.message ? error.message : errorText(error.code)) : errorText('unknown')

/** Carrega a lista, o catálogo e os valores dos filtros; depois abre o dashboard pedido ou o da pessoa. */
async function load() {
  loadError.value = null
  try {
    const [page, fields] = await Promise.all([dashboardService.list(), catalog.value ? Promise.resolve(catalog.value) : reportService.catalog()])
    dashboards.value = page.items
    chosenId.value = page.chosen_id
    catalog.value = fields
    await open()
  } catch (error) {
    loadError.value = apiMessage(error)
  }
  void loadOptions()
}

/** Abre o dashboard da rota; sem id, o escolhido pela pessoa ou o padrão (e troca a rota para ele). */
async function open() {
  editing.value = false
  const id = route.params.id as string | undefined
  if (id) {
    dashboard.value = await dashboardService.get(id)
  } else {
    const home = (await dashboardService.home()).dashboard ?? dashboards.value[0] ?? null
    if (home) {
      await router.replace(`/dashboards/${home.id}`)
      return
    }
    dashboard.value = null
  }
  empty.value = dashboard.value === null
  filters.value = { ...(dashboard.value?.definition.filters ?? {}) }
}

/** Os valores dos filtros que a pessoa pode ver: na Groone, também clientes e responsáveis. */
async function loadOptions() {
  /** A lista que a pessoa não pode ver fica fora dos filtros. */
  const denied = () => Promise.reject(new Error('sem permissão'))
  const [clients, staff, networks, sites] = await Promise.allSettled([
    internal.value && session.can('internal.clients.view') ? clientService.options() : denied(),
    internal.value ? staffService.options() : denied(),
    !internal.value && session.can('network.view') ? networkService.options() : denied(),
    !internal.value && session.can('sites.view') ? siteService.options() : denied(),
  ])
  options.value = {
    client: clients.status === 'fulfilled' ? clients.value.items.map((item) => ({ value: item.id, label: item.name })) : [],
    account_manager: staff.status === 'fulfilled' ? staff.value.items.map((member) => ({ value: member.user.id, label: member.user.name || member.user.email })) : [],
    network: networks.status === 'fulfilled' ? networks.value.items.map((network) => ({ value: network.id, label: networkName(network) })) : [],
    site: sites.status === 'fulfilled' ? sites.value.items.map((site) => ({ value: site.id, label: site.domain })) : [],
  }
}

onMounted(load)
watch(
  () => route.params.id,
  () => void open().catch((error) => (loadError.value = apiMessage(error))),
)

/** Troca de dashboard pelo seletor do topo. */
const switchTo = (id: string) => router.push(`/dashboards/${id}`)

/** Entra no modo de edição com uma cópia da grade, do nome e da visibilidade. */
function startEditing() {
  const found = dashboard.value
  if (!found) return
  draftWidgets.value = found.definition.widgets.map((widget) => ({ ...widget }))
  draftName.value = found.name
  draftVisibility.value = found.visibility
  editing.value = true
}

/** Sai do modo de edição sem salvar e volta aos filtros gravados. */
function cancelEditing() {
  editing.value = false
  filters.value = { ...(dashboard.value?.definition.filters ?? {}) }
}

/** Salva a grade, os filtros da tela como padrão, o nome e a visibilidade. */
async function save() {
  const found = dashboard.value
  if (!found || !draftName.value.trim()) return
  saving.value = true
  try {
    const visibility = found.visibility === 'roles' && draftVisibility.value === 'roles' ? 'roles' : draftVisibility.value
    const updated = await dashboardService.update(found.id, {
      name: draftName.value.trim(),
      description: found.description,
      definition: withLayout(found.definition, draftWidgets.value, filters.value),
      visibility,
      role_ids: visibility === 'roles' ? found.role_ids : [],
    })
    dashboard.value = updated
    dashboards.value = dashboards.value.map((item) => (item.id === updated.id ? updated : item))
    filters.value = { ...updated.definition.filters }
    editing.value = false
    toast.success(t('dash.saved'))
  } catch (error) {
    toast.error(apiMessage(error))
  } finally {
    saving.value = false
  }
}

/** Cria o dashboard (em branco ou de um modelo) e abre ele já em edição se estiver vazio. */
async function create(kind: 'blank' | 'template', value: string) {
  creatingBusy.value = true
  try {
    const created =
      kind === 'template'
        ? await dashboardService.fromTemplate(value)
        : await dashboardService.create({ name: value, description: null, definition: emptyDefinition(), visibility: 'private', role_ids: [] })
    dashboards.value = [created, ...dashboards.value]
    creating.value = false
    await router.push(`/dashboards/${created.id}`)
    if (kind === 'blank') startEditing()
  } catch (error) {
    toast.error(apiMessage(error))
  } finally {
    creatingBusy.value = false
  }
}

/** Faz uma cópia privada e abre ela. */
async function duplicate() {
  if (!dashboard.value) return
  try {
    const copy = await dashboardService.duplicate(dashboard.value.id)
    dashboards.value = [copy, ...dashboards.value]
    toast.success(t('dash.duplicated'))
    await router.push(`/dashboards/${copy.id}`)
  } catch (error) {
    toast.error(apiMessage(error))
  }
}

/** Marca este dashboard como o padrão da Empresa. */
async function makeDefault() {
  if (!dashboard.value) return
  try {
    await dashboardService.setDefault(dashboard.value.id)
    const id = dashboard.value.id
    dashboards.value = dashboards.value.map((item) => ({ ...item, is_default: item.id === id }))
    dashboard.value = { ...dashboard.value, is_default: true }
    toast.success(t('dash.defaultSet'))
  } catch (error) {
    toast.error(apiMessage(error))
  }
}

/** Faz este dashboard abrir para a pessoa ao entrar (ou volta para o padrão). */
async function chooseMine() {
  if (!dashboard.value) return
  const id = chosenId.value === dashboard.value.id ? null : dashboard.value.id
  try {
    await dashboardService.choose(id)
    chosenId.value = id
    toast.success(id ? t('dash.chosen') : t('dash.unchosen'))
  } catch (error) {
    toast.error(apiMessage(error))
  }
}

/** Apaga o dashboard e volta para o da pessoa. */
async function remove() {
  if (!dashboard.value) return
  removingBusy.value = true
  try {
    const id = dashboard.value.id
    await dashboardService.remove(id)
    dashboards.value = dashboards.value.filter((item) => item.id !== id)
    removing.value = false
    toast.success(t('dash.removed'))
    await router.push('/dashboards')
  } catch (error) {
    toast.error(apiMessage(error))
  } finally {
    removingBusy.value = false
  }
}
</script>

<template>
  <PageHeader :title="editing ? t('dash.editing') : (dashboard?.name ?? t('nav.dashboards'))" :sub="editing ? undefined : subtitle">
    <template #meta>
      <div v-if="dashboard && !editing && (dashboard.is_default || chosenId === dashboard.id)" class="mt-3 flex flex-wrap gap-2">
        <Badge v-if="dashboard.is_default">{{ t('dash.badge.default') }}</Badge>
        <Badge v-if="chosenId === dashboard.id">{{ t('dash.badge.mine') }}</Badge>
      </div>
    </template>
    <template #actions>
      <template v-if="editing">
        <Button variant="outline" @click="adding = true"><Plus />{{ t('dash.addWidget') }}</Button>
        <Button variant="outline" @click="cancelEditing">{{ t('common.cancel') }}</Button>
        <Button :loading="saving" :disabled="!draftName.trim()" @click="save">{{ t('dash.save') }}</Button>
      </template>
      <template v-else>
        <NativeSelect
          v-if="dashboard && dashboards.length > 1"
          :model-value="dashboard.id"
          :options="switchOptions"
          class="w-[240px]"
          :aria-label="t('dash.switch')"
          @update:model-value="switchTo"
        />
        <Button v-if="dashboard?.editable" variant="outline" @click="startEditing"><Pencil />{{ t('common.edit') }}</Button>
        <DropdownMenuRoot v-if="dashboard">
          <DropdownMenuTrigger as-child>
            <Button variant="outline" size="icon" :aria-label="t('dash.more')"><MoreHorizontal /></Button>
          </DropdownMenuTrigger>
          <MenuContent align="end">
            <MenuItem @select="chooseMine">{{ chosenId === dashboard.id ? t('dash.unchoose') : t('dash.choose') }}</MenuItem>
            <MenuItem v-if="canManage && dashboard.visibility === 'company' && !dashboard.is_default" @select="makeDefault">{{ t('dash.makeDefault') }}</MenuItem>
            <MenuItem v-if="canManage" @select="duplicate">{{ t('dash.duplicate') }}</MenuItem>
            <template v-if="dashboard.editable">
              <DropdownMenuSeparator class="-mx-1 my-1 h-px bg-border" />
              <MenuItem danger @select="removing = true">{{ t('common.delete') }}</MenuItem>
            </template>
          </MenuContent>
        </DropdownMenuRoot>
        <Button v-if="canManage" @click="creating = true"><Plus />{{ t('dash.new.title') }}</Button>
      </template>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" />
    <Card v-else-if="empty" :title="t('dash.empty.title')" :desc="canManage ? t('dash.empty.manage') : t('dash.empty.view')">
      <Button v-if="canManage" @click="creating = true"><Plus />{{ t('dash.new.title') }}</Button>
    </Card>
    <template v-else-if="dashboard && catalog">
      <div v-if="editing" class="grid gap-3 rounded-lg border border-dashed border-foreground/40 bg-card px-4 py-3">
        <p class="flex items-center gap-2 text-[14px]"><LayoutGrid class="size-4" aria-hidden="true" />{{ t('dash.editHint') }}</p>
        <div class="flex flex-wrap gap-2">
          <Input v-model="draftName" :maxlength="NAME_MAX" class="max-w-[320px]" :aria-label="t('dash.new.name')" />
          <NativeSelect v-if="dashboard.visibility !== 'roles'" v-model="draftVisibility" :options="visibilities" class="w-[220px]" :aria-label="t('dash.visibility.label')" />
        </div>
      </div>
      <DashboardFiltersBar v-model="filters" :options="options" :internal="internal" />
      <p v-if="!widgets.length" class="rounded-lg border bg-card px-5 py-10 text-center text-[14px] text-muted-foreground">
        {{ editing ? t('dash.noWidgetsEditing') : t('dash.noWidgets') }}
      </p>
      <div v-else class="grid grid-cols-1 gap-4 md:auto-rows-[72px] md:grid-cols-12">
        <DashboardWidget
          v-for="widget in widgets"
          :key="widget.id"
          :dashboard-id="dashboard.id"
          :widget="widget"
          :filters="shownFilters"
          :catalog="catalog"
          :editing="editing"
          :stored="storedIds.has(widget.id)"
          class="min-h-[160px] md:min-h-0 md:[grid-column:var(--col)] md:[grid-row:var(--row)]"
          :style="{ '--col': gridArea(widget).gridColumn, '--row': gridArea(widget).gridRow }"
          @move="(columns, rows) => (draftWidgets = moveWidget(draftWidgets, widget.id, columns, rows))"
          @resize="(columns, rows) => (draftWidgets = resizeWidget(draftWidgets, widget.id, columns, rows))"
          @remove="draftWidgets = removeWidget(draftWidgets, widget.id)"
        />
      </div>
    </template>
  </PageBody>
  <AddWidgetDialog v-if="catalog" v-model:open="adding" :catalog="catalog" :internal="internal" :widgets="draftWidgets" @add="(widget) => (draftWidgets = [...draftWidgets, widget])" />
  <NewDashboardDialog v-model:open="creating" :busy="creatingBusy" @blank="(name) => create('blank', name)" @template="(key) => create('template', key)" />
  <ConfirmDialog
    v-model:open="removing"
    :title="t('dash.removeTitle')"
    :desc="t('dash.removeDesc', { name: dashboard?.name ?? '' })"
    :action="t('common.delete')"
    :busy="removingBusy"
    @confirm="remove"
  />
</template>
