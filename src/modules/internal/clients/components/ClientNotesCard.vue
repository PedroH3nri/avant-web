<script setup lang="ts">
/** Painel interno: observações da equipe sobre o cliente, com quem escreveu, quem editou e quando; o cliente nunca vê. */
import { onMounted, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import { MoreHorizontal, Pencil, Plus, Trash2 } from 'lucide-vue-next'
import { DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Dialog from '@/components/ui/Dialog.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import Pagination from '@/components/ui/Pagination.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, t } from '@/lib/i18n'
import { NOTE_MAX, NOTE_MIN, personName } from '@/modules/internal/clients/rules'
import type { ClientNote } from '@/modules/internal/clients/types'
import { useSession } from '@/stores/session'
import { clientService } from '@/modules/internal/clients/service'

const TEXTAREA = 'w-full rounded-md border border-input bg-background px-3 py-2 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

const props = defineProps<{ companyId: string }>()
const emit = defineEmits<{ changed: [] }>()
const session = useSession()

const notes = ref<ClientNote[]>([])
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const draft = ref('')
const adding = ref(false)
const editing = ref<ClientNote | null>(null)
const editText = ref('')
const editOpen = ref(false)
const deleting = ref<ClientNote | null>(null)
const deleteOpen = ref(false)
const saving = ref(false)

/** Mostra o erro num aviso. */
const fail = (error: unknown) => toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))

/** Carrega a página atual das observações. */
async function load() {
  try {
    const found = await clientService.notes(props.companyId, { page: page.value })
    notes.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    fail(error)
  }
}
onMounted(load)
watch(page, load)

/** Recarrega a lista e avisa a página, que mostra a auditoria. */
async function refresh() {
  await load()
  emit('changed')
}

/** Escreve a observação nova e volta para a primeira página, onde ela aparece. */
async function add() {
  if (draft.value.trim().length < NOTE_MIN) return
  adding.value = true
  try {
    await clientService.addNote(props.companyId, draft.value.trim())
    draft.value = ''
    if (page.value === 1) await refresh()
    else page.value = 1
    toast.success(t('note.added'))
  } catch (error) {
    fail(error)
  } finally {
    adding.value = false
  }
}

/** Abre a janela de edição com o texto atual. */
function startEdit(note: ClientNote) {
  editing.value = note
  editText.value = note.message
  editOpen.value = true
}

/** Salva o texto editado. */
async function saveEdit() {
  if (!editing.value || editText.value.trim().length < NOTE_MIN) return
  saving.value = true
  try {
    await clientService.editNote(props.companyId, editing.value.id, editText.value.trim())
    editOpen.value = false
    await refresh()
    toast.success(t('common.saved'))
  } catch (error) {
    fail(error)
  } finally {
    saving.value = false
  }
}

/** Pede a confirmação antes de apagar. */
function startDelete(note: ClientNote) {
  deleting.value = note
  deleteOpen.value = true
}

/** Apaga a observação confirmada. */
async function remove() {
  if (!deleting.value) return
  saving.value = true
  try {
    await clientService.deleteNote(props.companyId, deleting.value.id)
    deleteOpen.value = false
    await refresh()
    toast.success(t('note.deleted'))
  } catch (error) {
    fail(error)
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <Card :title="t('note.title')" :desc="t('note.desc')">
    <div class="grid gap-3">
      <textarea v-model="draft" rows="3" :maxlength="NOTE_MAX" :aria-label="t('note.new')" :placeholder="t('note.placeholder')" :class="TEXTAREA" />
      <div class="flex justify-end">
        <Button size="sm" :loading="adding" :disabled="draft.trim().length < NOTE_MIN" @click="add"><Plus />{{ t('note.add') }}</Button>
      </div>
    </div>
    <p v-if="!notes.length" class="mt-5 border-t pt-4 text-[14px] text-muted-foreground">{{ t('note.empty') }}</p>
    <ul v-else class="mt-5 divide-y border-t">
      <li v-for="note in notes" :key="note.id" class="py-4 last:pb-0">
        <div class="flex items-start justify-between gap-3">
          <div class="text-[13px]">
            <span class="font-medium">{{ personName(note.author) }}</span>
            <span class="text-muted-foreground"> · <span class="tnum">{{ formatDate(note.created_at) }}</span></span>
          </div>
          <DropdownMenuRoot v-if="note.editable">
            <DropdownMenuTrigger as-child>
              <Button variant="ghost" size="icon" class="size-8" :aria-label="t('note.actions')"><MoreHorizontal /></Button>
            </DropdownMenuTrigger>
            <MenuContent align="end" class="w-40">
              <MenuItem @select="startEdit(note)"><Pencil />{{ t('common.edit') }}</MenuItem>
              <MenuItem danger @select="startDelete(note)"><Trash2 />{{ t('common.delete') }}</MenuItem>
            </MenuContent>
          </DropdownMenuRoot>
        </div>
        <p class="mt-1 whitespace-pre-line break-words text-[14px]">{{ note.message }}</p>
        <p v-if="note.edited_at" class="mt-2 text-[12px] text-muted-foreground">
          {{ t('note.editedBy', { name: personName(note.editor), date: formatDate(note.edited_at) }) }}
        </p>
      </li>
    </ul>
    <Pagination v-if="pages > 1" v-model:page="page" :total="total" :pages="pages" class="mt-3" />

    <Dialog
      v-model:open="editOpen"
      :title="t('note.editTitle')"
      :desc="editing && editing.author?.id !== session.me?.user.id ? t('note.editOther', { name: personName(editing.author) }) : t('note.editOwn')"
    >
      <textarea v-model="editText" rows="4" :maxlength="NOTE_MAX" :aria-label="t('note.title')" :class="TEXTAREA" />
      <template #footer>
        <Button variant="outline" @click="editOpen = false">{{ t('common.cancel') }}</Button>
        <Button :loading="saving" :disabled="editText.trim().length < NOTE_MIN" @click="saveEdit">{{ t('common.save') }}</Button>
      </template>
    </Dialog>
    <ConfirmDialog
      v-model:open="deleteOpen"
      :title="t('note.deleteTitle')"
      :desc="t('note.deleteDesc')"
      :action="t('common.delete')"
      :busy="saving"
      @confirm="remove"
    />
  </Card>
</template>
