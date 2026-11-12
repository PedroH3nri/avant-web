<script setup lang="ts">
/**
 * Editor de um modelo pronto de dashboard (painel interno): nome nos três idiomas, para quem é (equipe
 * Groone ou clientes), os papéis que veem e a grade, com arrastar e redimensionar. Os números rodam só
 * nos modelos da Groone já gravados; os dos clientes mostram só o desenho de cada bloco.
 */
import { computed, onMounted, ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { ArrowLeft, LayoutGrid, Plus } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { ApiError } from '@/lib/api'
import { errorText, pick, t } from '@/lib/i18n'
import type { Localized } from '@/lib/types'
import AddWidgetDialog from '@/modules/dashboards/components/AddWidgetDialog.vue'
import DashboardGrid from '@/modules/dashboards/components/DashboardGrid.vue'
import { editableWidgets } from '@/modules/dashboards/rules'
import { templateService } from '@/modules/dashboards/service'
import { blankTemplate, canPreview, templateForm, templateInput, toggleRole, withAudience } from '@/modules/dashboards/template-rules'
import type { ManagedTemplate, TemplateAudience, TemplateInput, TemplateRoles, Widget } from '@/modules/dashboards/types'
import { reportService } from '@/modules/reports/service'
import type { MetricCatalog } from '@/modules/reports/types'

const NAME_MAX = 120
const LIST = '/interno/modelos-de-dashboard'
const route = useRoute()
const router = useRouter()
const saved = ref<ManagedTemplate | null>(null)
const form = ref<TemplateInput>(blankTemplate(route.query.publico === 'clients' ? 'clients' : 'groone'))
const widgets = ref<Widget[]>([])
const roles = ref<TemplateRoles>({ groone: [], clients: [] })
const catalog = ref<MetricCatalog | null>(null)
const loadError = ref<string | null>(null)
const adding = ref(false)
const saving = ref(false)

const audiences = computed(() => (['groone', 'clients'] as TemplateAudience[]).map((value) => ({ value, label: t(value === 'groone' ? 'tpl.groone' : 'tpl.clients') })))
const audienceRoles = computed(() => roles.value[form.value.audience])
const preview = computed(() => !canPreview(saved.value, form.value.audience))
const ready = computed(() => form.value.name.pt.trim().length > 0)

/** O motivo do erro da API, com o texto dela quando já explica. */
const apiMessage = (error: unknown) =>
  error instanceof ApiError ? (error.code === 'invalid_input' && error.message ? error.message : errorText(error.code)) : errorText('unknown')

/** Carrega o catálogo, os papéis e, editando, o modelo. */
async function load() {
  loadError.value = null
  try {
    const id = route.params.id as string | undefined
    const [fields, options, found] = await Promise.all([reportService.catalog(), templateService.roles(), id ? templateService.get(id) : Promise.resolve(null)])
    catalog.value = fields
    roles.value = options
    if (found) {
      saved.value = found
      form.value = templateForm(found)
      widgets.value = editableWidgets(found.definition.widgets)
    }
  } catch (error) {
    loadError.value = apiMessage(error)
  }
}

onMounted(load)

/** Troca o público; os papéis marcados eram do outro e saem. */
const setAudience = (value: string) => (form.value = withAudience(form.value, value as TemplateAudience))

/** Marca ou desmarca um papel. */
const flipRole = (roleId: string) => (form.value = toggleRole(form.value, roleId))

/** Salva o modelo (novo ou o mesmo) e fica no editor. */
async function save() {
  if (!ready.value) return
  saving.value = true
  try {
    const input = templateInput(form.value, { schema_version: 1, filters: form.value.definition.filters, widgets: widgets.value })
    const result = saved.value ? await templateService.update(saved.value.id, input) : await templateService.create(input)
    const created = !saved.value
    saved.value = result
    form.value = templateForm(result)
    widgets.value = editableWidgets(result.definition.widgets)
    toast.success(created ? t('tpl.created') : t('tpl.saved'))
    if (created) await router.replace(`${LIST}/${result.id}`)
  } catch (error) {
    toast.error(apiMessage(error))
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <PageHeader :title="saved ? pick(saved.name as Localized) : t('tpl.new')" :sub="t('tpl.editorSub')">
    <template #back>
      <RouterLink :to="LIST" class="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground">
        <ArrowLeft class="size-4" />{{ t('tpl.title') }}
      </RouterLink>
    </template>
    <template #actions>
      <Button variant="outline" :disabled="!catalog" @click="adding = true"><Plus />{{ t('dash.addWidget') }}</Button>
      <Button variant="outline" @click="router.push(LIST)">{{ t('common.cancel') }}</Button>
      <Button :loading="saving" :disabled="!ready" @click="save">{{ t('tpl.save') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" />
    <template v-else-if="catalog">
      <Card :title="t('tpl.formTitle')" :desc="t('tpl.formDesc')">
        <div class="grid gap-4 md:grid-cols-3">
          <Field id="tpl-name-pt" :label="t('tpl.namePt')">
            <Input id="tpl-name-pt" v-model="form.name.pt" :maxlength="NAME_MAX" />
          </Field>
          <Field id="tpl-name-en" :label="t('tpl.nameEn')">
            <Input id="tpl-name-en" v-model="form.name.en" :maxlength="NAME_MAX" :placeholder="form.name.pt" />
          </Field>
          <Field id="tpl-name-es" :label="t('tpl.nameEs')">
            <Input id="tpl-name-es" v-model="form.name.es" :maxlength="NAME_MAX" :placeholder="form.name.pt" />
          </Field>
        </div>
        <div class="mt-4 grid gap-4 md:grid-cols-2">
          <Field id="tpl-audience" :label="t('tpl.audience')" :hint="t('tpl.audienceHint')">
            <NativeSelect id="tpl-audience" :model-value="form.audience" :options="audiences" @update:model-value="setAudience" />
          </Field>
          <fieldset class="grid content-start gap-2">
            <legend class="mb-2 text-[14px] font-medium">{{ t('tpl.roles') }}</legend>
            <Checkbox
              v-for="role in audienceRoles"
              :id="`tpl-role-${role.id}`"
              :key="role.id"
              :model-value="form.role_ids.includes(role.id)"
              :label="pick(role.name as Localized)"
              @update:model-value="flipRole(role.id)"
            />
            <p class="text-[13px] text-muted-foreground">{{ form.role_ids.length ? t('tpl.rolesSome') : t('tpl.rolesAll') }}</p>
          </fieldset>
        </div>
      </Card>
      <p class="flex items-start gap-2 rounded-lg border border-dashed border-foreground/40 bg-card px-4 py-3 text-[14px]">
        <LayoutGrid class="mt-0.5 size-4 shrink-0" aria-hidden="true" />
        <span><span class="md:hidden">{{ t('dash.editHintMenu') }}</span><span class="hidden md:inline">{{ t('dash.editHint') }}</span> {{ preview ? t('tpl.previewHint') : '' }}</span>
      </p>
      <p v-if="!widgets.length" class="rounded-lg border bg-card px-5 py-10 text-center text-[14px] text-muted-foreground">{{ t('dash.noWidgetsEditing') }}</p>
      <DashboardGrid
        v-else
        v-model:widgets="widgets"
        editing
        :catalog="catalog"
        :filters="null"
        :saved="saved?.definition.widgets ?? []"
        :template-id="saved?.id"
        :preview="preview"
      />
    </template>
  </PageBody>
  <AddWidgetDialog
    v-if="catalog"
    v-model:open="adding"
    :catalog="catalog"
    :internal="form.audience === 'groone'"
    :widgets="widgets"
    for-template
    @add="(widget) => (widgets = [...widgets, widget])"
  />
</template>
