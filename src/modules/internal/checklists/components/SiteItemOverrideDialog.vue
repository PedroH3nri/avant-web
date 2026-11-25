<script setup lang="ts">
/** Janela para conferir um item de outro jeito só num site: padrão, palavras próprias, endereço, manual ou não se aplica. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import { ApiError } from '@/lib/api'
import { errorText, t, type Key } from '@/lib/i18n'
import { kindDesc, overrideModes, parseWords } from '@/modules/internal/checklists/rules'
import { checklistOverrideService } from '@/modules/internal/checklists/service'
import type { CheckOverride, ChecklistRow } from '@/modules/internal/checklists/types'

type Choice = CheckOverride | 'default'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ row: ChecklistRow | null; siteId: string; domain: string }>()
const emit = defineEmits<{ saved: [] }>()

const choice = ref<Choice>('default')
const words = ref('')
const path = ref('')
const saving = ref(false)

const choices = computed<Choice[]>(() => (props.row ? ['default', ...overrideModes(props.row.item.kind)] : []))
const valid = computed(() => {
  if (choice.value === 'words') return parseWords(words.value).length > 0
  if (choice.value === 'url') return path.value.trim().length > 0
  return true
})

watch(open, (opened) => {
  const override = props.row?.override
  if (!opened || !props.row) return
  choice.value = override?.mode ?? 'default'
  words.value = (override?.mode === 'words' ? override.words : props.row.item.words).join(', ')
  path.value = override?.path ?? ''
})

/** O título da opção. */
const choiceLabel = (value: Choice) => t(`check.override.${value}` as Key)

/** A frase da opção; o padrão diz como todos os sites são conferidos. */
function choiceDesc(value: Choice): string {
  if (value !== 'default' || !props.row) return t(`check.override.${value}Desc` as Key)
  const words = props.row.item.kind === 'link' ? props.row.item.words.join(', ') : ''
  const how = words || kindDesc(props.row.item.kind)
  return t('check.override.defaultDesc', { how })
}

/** Grava a escolha ou volta ao padrão e avisa o card. */
async function save() {
  const row = props.row
  if (!row || !valid.value) return
  saving.value = true
  try {
    if (choice.value === 'default') {
      if (row.override) await checklistOverrideService.remove(props.siteId, row.item.id)
      toast.success(t('check.override.removed'))
    } else {
      const body = {
        mode: choice.value,
        words: choice.value === 'words' ? parseWords(words.value) : [],
        path: choice.value === 'url' ? path.value.trim() : null,
      }
      await checklistOverrideService.set(props.siteId, row.item.id, body)
      toast.success(t('check.override.saved'), { description: t('check.override.savedDesc') })
    }
    open.value = false
    emit('saved')
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <Dialog v-model:open="open" :title="row ? t('check.override.title', { name: row.item.name, domain }) : ''" :desc="t('check.override.desc')" class="max-w-[520px]">
    <div class="grid gap-4">
      <div class="grid gap-2" role="radiogroup" :aria-label="row?.item.name">
        <label
          v-for="value in choices"
          :key="value"
          :class="['flex cursor-pointer gap-3 rounded-md border p-3 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring', choice === value ? 'border-foreground' : 'hover:bg-muted']"
        >
          <input v-model="choice" type="radio" name="item-override" :value="value" class="mt-1 size-4 accent-foreground" />
          <span class="grid gap-0.5">
            <span class="text-[14px] font-medium">{{ choiceLabel(value) }}</span>
            <span class="text-[13px] text-muted-foreground">{{ choiceDesc(value) }}</span>
          </span>
        </label>
      </div>
      <Field v-if="choice === 'words'" id="override-words" :label="t('check.override.wordsLabel')" :hint="t('check.itemWordsHint')">
        <Input id="override-words" v-model="words" class="h-10" />
      </Field>
      <Field v-if="choice === 'url'" id="override-path" :label="t('check.override.pathLabel')" :hint="t('check.override.pathHint')">
        <Input id="override-path" v-model="path" class="h-10 font-mono" maxlength="500" placeholder="/fale-conosco" />
      </Field>
    </div>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button :loading="saving" :disabled="!valid" @click="save">{{ t('common.save') }}</Button>
    </template>
  </Dialog>
</template>
