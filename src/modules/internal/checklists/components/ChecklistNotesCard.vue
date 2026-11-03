<script setup lang="ts">
/** Observações do mês no checklist do site: entram no relatório do cliente, no idioma dele. */
import { computed, ref } from 'vue'
import { toast } from 'vue-sonner'
import { MoreHorizontal, Pencil, Plus, Trash2 } from 'lucide-vue-next'
import { DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Dialog from '@/components/ui/Dialog.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, t } from '@/lib/i18n'
import { NOTE_MAX, NOTE_MIN, languageName, personName } from '@/modules/internal/checklists/rules'
import { checklistService } from '@/modules/internal/checklists/service'
import type { ChecklistNote } from '@/modules/internal/checklists/types'

const TEXTAREA = 'w-full rounded-md border border-input bg-background px-3 py-2 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

const props = defineProps<{ checklistId: string; notes: ChecklistNote[]; clientLocale: string | null; writable: boolean }>()
const emit = defineEmits<{ changed: [] }>()

const draft = ref('')
const adding = ref(false)
const editing = ref<ChecklistNote | null>(null)
const editText = ref('')
const editOpen = ref(false)
const deleting = ref<ChecklistNote | null>(null)
const deleteOpen = ref(false)
const saving = ref(false)

const desc = computed(() => {
  const language = languageName(props.clientLocale)
  return language ? t('check.notesDescLang', { language }) : t('check.notesDesc')
})

/** Mostra o erro num aviso. */
const fail = (error: unknown) => toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))

/** Escreve a observação nova e pede para a página recarregar. */
async function add() {
  if (draft.value.trim().length < NOTE_MIN) return
  adding.value = true
  try {
    await checklistService.addNote(props.checklistId, draft.value.trim())
    draft.value = ''
    emit('changed')
    toast.success(t('note.added'))
  } catch (error) {
    fail(error)
  } finally {
    adding.value = false
  }
}

/** Abre a janela de edição com o texto atual. */
function startEdit(note: ChecklistNote) {
  editing.value = note
  editText.value = note.message
  editOpen.value = true
}

/** Salva o texto editado. */
async function saveEdit() {
  if (!editing.value || editText.value.trim().length < NOTE_MIN) return
  saving.value = true
  try {
    await checklistService.editNote(props.checklistId, editing.value.id, editText.value.trim())
    editOpen.value = false
    emit('changed')
    toast.success(t('common.saved'))
  } catch (error) {
    fail(error)
  } finally {
    saving.value = false
  }
}

/** Pede a confirmação antes de apagar. */
function startDelete(note: ChecklistNote) {
  deleting.value = note
  deleteOpen.value = true
}

/** Apaga a observação confirmada. */
async function remove() {
  if (!deleting.value) return
  saving.value = true
  try {
    await checklistService.deleteNote(props.checklistId, deleting.value.id)
    deleteOpen.value = false
    emit('changed')
    toast.success(t('note.deleted'))
  } catch (error) {
    fail(error)
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <Card :title="t('check.notes')" :desc="desc" class="self-start">
    <div v-if="writable" class="grid gap-3">
      <textarea v-model="draft" rows="3" :maxlength="NOTE_MAX" :aria-label="t('note.new')" :placeholder="t('check.notePlaceholder')" :class="TEXTAREA" />
      <div class="flex justify-end">
        <Button size="sm" :loading="adding" :disabled="draft.trim().length < NOTE_MIN" @click="add"><Plus />{{ t('note.add') }}</Button>
      </div>
    </div>
    <p v-if="!notes.length" :class="['text-[14px] text-muted-foreground', writable && 'mt-5 border-t pt-4']">{{ t('check.notesEmpty') }}</p>
    <ul v-else :class="['divide-y', writable && 'mt-5 border-t']">
      <li v-for="note in notes" :key="note.id" class="py-3 last:pb-0">
        <div class="flex items-start justify-between gap-3">
          <div class="text-[13px]">
            <span class="font-medium">{{ personName(note.author) }}</span>
            <span class="text-muted-foreground"> · <span class="tnum">{{ formatDate(note.created_at) }}</span></span>
          </div>
          <DropdownMenuRoot v-if="writable && note.editable">
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

    <Dialog v-model:open="editOpen" :title="t('note.editTitle')" :desc="t('note.editOwn')">
      <textarea v-model="editText" rows="4" :maxlength="NOTE_MAX" :aria-label="t('check.notes')" :class="TEXTAREA" />
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
