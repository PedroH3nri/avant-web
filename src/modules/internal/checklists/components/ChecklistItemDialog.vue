<script setup lang="ts">
/** Janela de item novo ou de edição: nome, como confere, palavras do tipo link e se está ativo. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { ITEM_NAME_MIN, KINDS, kindDesc, kindLabel, parseWords } from '@/modules/internal/checklists/rules'
import { checklistItemService } from '@/modules/internal/checklists/service'
import type { CheckKind, ChecklistItem } from '@/modules/internal/checklists/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ item: ChecklistItem | null }>()
const emit = defineEmits<{ saved: [] }>()

const name = ref('')
const kind = ref<CheckKind>('link')
const words = ref('')
const active = ref(true)
const saving = ref(false)

const kindOptions = computed(() => KINDS.map((value) => ({ value, label: kindLabel(value) })))
const valid = computed(() => name.value.trim().length >= ITEM_NAME_MIN && (kind.value !== 'link' || parseWords(words.value).length > 0))

watch(open, (opened) => {
  if (!opened) return
  name.value = props.item?.name ?? ''
  kind.value = props.item?.kind ?? 'link'
  words.value = props.item?.words.join(', ') ?? ''
  active.value = props.item?.active ?? true
})

/** Cria ou edita o item e avisa a lista. */
async function save() {
  if (!valid.value) return
  saving.value = true
  const body = { name: name.value.trim(), kind: kind.value, words: kind.value === 'link' ? parseWords(words.value) : [], active: active.value }
  try {
    if (props.item) await checklistItemService.update(props.item.id, body)
    else await checklistItemService.create(body)
    open.value = false
    emit('saved')
    toast.success(t('check.itemSaved'), { description: t('check.itemSavedDesc') })
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <Dialog v-model:open="open" :title="item ? t('check.editItem') : t('check.newItem')" :desc="kindDesc(kind)" class="max-w-[520px]">
    <div class="grid gap-4">
      <Field id="item-name" :label="t('check.itemName')">
        <Input id="item-name" v-model="name" class="h-10" maxlength="120" />
      </Field>
      <Field id="item-kind" :label="t('check.itemKind')">
        <NativeSelect id="item-kind" v-model="kind" :options="kindOptions" />
      </Field>
      <Field v-if="kind === 'link'" id="item-words" :label="t('check.itemWords')" :hint="t('check.itemWordsHint')">
        <Input id="item-words" v-model="words" class="h-10" placeholder="cookies, cookie, galletas" />
      </Field>
      <Checkbox id="item-active" v-model="active" :label="t('check.itemActive')" :hint="t('check.itemActiveHint')" />
    </div>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button :loading="saving" :disabled="!valid" @click="save">{{ t('check.saveItem') }}</Button>
    </template>
  </Dialog>
</template>
