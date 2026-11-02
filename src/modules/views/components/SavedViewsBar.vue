<script setup lang="ts">
/** Visões salvas de uma tabela interna: abas, salvar a visão atual, editar quem vê e apagar.
 * A tela dona da tabela guarda colunas, filtros e ordem e aplica a definição que chega. */
import { computed, onMounted, ref } from 'vue'
import { toast } from 'vue-sonner'
import { Save } from 'lucide-vue-next'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import Button from '@/components/ui/Button.vue'
import { ApiError } from '@/lib/api'
import { errorText, pick, t } from '@/lib/i18n'
import { teamService } from '@/modules/team/service'
import SaveViewDialog, { type ViewForm } from '@/modules/views/components/SaveViewDialog.vue'
import SavedViewTabs from '@/modules/views/components/SavedViewTabs.vue'
import { sameDefinition } from '@/modules/views/rules'
import { viewService } from '@/modules/views/service'
import type { SavedView, ViewDefinition, ViewScreen } from '@/modules/views/types'
import { useSession } from '@/stores/session'

const props = defineProps<{ screen: ViewScreen; defaultLabel: string; current: ViewDefinition; defaults: ViewDefinition }>()
const emit = defineEmits<{ apply: [definition: ViewDefinition] }>()
const session = useSession()
const views = ref<SavedView[]>([])
const active = ref<string | null>(null)
const roles = ref<{ id: string; name: string }[] | null>(null)
const dialogOpen = ref(false)
const editing = ref<SavedView | null>(null)
const removing = ref<SavedView | null>(null)
const busy = ref(false)

const activeView = computed(() => views.value.find((view) => view.id === active.value) ?? null)
const dirty = computed(() => !sameDefinition(props.current, activeView.value?.definition ?? props.defaults))
const canUpdate = computed(() => !!activeView.value?.editable)
const removeOpen = computed({
  get: () => removing.value !== null,
  set: (value) => {
    if (!value) removing.value = null
  },
})
const initial = computed<ViewForm>(() =>
  editing.value ? { name: editing.value.name, visibility: editing.value.visibility, roleIds: editing.value.role_ids } : { name: '', visibility: 'private', roleIds: [] },
)

/** Mostra o erro num aviso. */
const fail = (error: unknown) => toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))

/** Carrega as visões da tela e, se a pessoa vê papéis, os papéis para compartilhar. */
async function load() {
  const [found, roleList] = await Promise.allSettled([
    viewService.list(props.screen),
    session.can('roles.view') ? teamService.roleOptions() : Promise.reject(new Error('sem papéis')),
  ])
  if (found.status === 'fulfilled') views.value = found.value.items
  else fail(found.reason)
  roles.value = roleList.status === 'fulfilled' ? roleList.value.items.map((role) => ({ id: role.id, name: pick(role.name) })) : null
}
onMounted(load)

/** Troca de aba e aplica a definição dela (a padrão volta ao começo). */
function choose(id: string | null) {
  active.value = id
  emit('apply', views.value.find((view) => view.id === id)?.definition ?? props.defaults)
}

/** Abre o modal para salvar a tabela como está numa visão nova. */
function openCreate() {
  editing.value = null
  dialogOpen.value = true
}

/** Abre o modal para trocar o nome e quem vê a visão. */
function openEdit(view: SavedView) {
  editing.value = view
  dialogOpen.value = true
}

/** Grava a visão nova ou a editada, sempre com a tabela como está. */
async function save(form: ViewForm) {
  busy.value = true
  const input = { screen: props.screen, name: form.name, definition: props.current, visibility: form.visibility, role_ids: form.roleIds }
  try {
    const saved = editing.value ? await viewService.update(editing.value.id, input) : await viewService.create(input)
    views.value = editing.value ? views.value.map((view) => (view.id === saved.id ? saved : view)) : [...views.value, saved]
    active.value = saved.id
    dialogOpen.value = false
    toast.success(t('views.saved'))
  } catch (error) {
    fail(error)
  } finally {
    busy.value = false
  }
}

/** Grava as colunas, os filtros e a ordem atuais na visão aberta. */
async function saveChanges() {
  const view = activeView.value
  if (!view) return
  busy.value = true
  try {
    const saved = await viewService.update(view.id, { screen: props.screen, name: view.name, definition: props.current, visibility: view.visibility, role_ids: view.role_ids })
    views.value = views.value.map((item) => (item.id === saved.id ? saved : item))
    toast.success(t('views.saved'))
  } catch (error) {
    fail(error)
  } finally {
    busy.value = false
  }
}

/** Apaga a visão escolhida e volta para a padrão. */
async function remove() {
  const view = removing.value
  if (!view) return
  busy.value = true
  try {
    await viewService.remove(view.id)
    views.value = views.value.filter((item) => item.id !== view.id)
    removing.value = null
    choose(null)
    toast.success(t('views.removed'))
  } catch (error) {
    fail(error)
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <div class="grid gap-3">
    <SavedViewTabs :active="active" :views="views" :default-label="defaultLabel" @update:active="choose" @create="openCreate" @edit="openEdit" @remove="removing = $event" />
    <div class="flex flex-wrap items-center gap-2">
      <slot />
      <div v-if="dirty" class="ml-auto flex items-center gap-2">
        <Button v-if="canUpdate" size="sm" class="h-9" :loading="busy" @click="saveChanges"><Save />{{ t('views.saveChanges') }}</Button>
        <Button v-else size="sm" variant="outline" class="h-9" @click="openCreate"><Save />{{ t('views.saveAs') }}</Button>
      </div>
    </div>
  </div>
  <SaveViewDialog v-model:open="dialogOpen" :title="editing ? t('views.editTitle') : t('views.newTitle')" :initial="initial" :roles="roles" :busy="busy" @save="save" />
  <ConfirmDialog
    v-model:open="removeOpen"
    :title="t('views.removeTitle', { name: removing?.name ?? '' })"
    :desc="t('views.removeDesc')"
    :action="t('views.remove')"
    :busy="busy"
    @confirm="remove"
  />
</template>
