<script setup lang="ts">
/** O editor grande de um guia ou artigo: idioma em abas, título, categoria, resumo, o texto ou os passos com o print de cada um, a prévia e o publicar. */
import { computed, ref, toRaw, watch } from 'vue'
import { toast } from 'vue-sonner'
import { Check, ImagePlus, Plus, Trash2 } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import Segmented from '@/components/ui/Segmented.vue'
import Select from '@/components/ui/Select.vue'
import Switch from '@/components/ui/Switch.vue'
import Textarea from '@/components/ui/Textarea.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { imageProblem } from '@/lib/images'
import { CATEGORIES, CATEGORY_LABEL } from '@/modules/help/rules'
import type { HelpLanguage } from '@/modules/help/types'
import { LANGUAGES, bodyOf, type HelpDraft } from '@/modules/internal/help/rules'
import { helpEditorService } from '@/modules/internal/help/service'
import type { HelpItemRow } from '@/modules/internal/help/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ draft: HelpDraft | null }>()
const emit = defineEmits<{ saved: [row: HelpItemRow]; removed: [itemId: string] }>()
const form = ref<HelpDraft | null>(null)
const language = ref<HelpLanguage>('pt')
const mode = ref<'edit' | 'preview'>('edit')
const saving = ref(false)
const uploading = ref<number | null>(null)
const content = computed(() => form.value?.translations[language.value] ?? null)
const languageOptions = computed(() => LANGUAGES.map((code) => ({ value: code, label: code.toUpperCase(), note: translated(code) ? undefined : t('helped.noTranslation') })))
const modeOptions = computed(() => [
  { value: 'edit', label: t('helped.edit') },
  { value: 'preview', label: t('helped.preview') },
])
const categoryOptions = computed(() => CATEGORIES.map((value) => ({ value, label: t(CATEGORY_LABEL[value]) })))
const title = computed(() => {
  if (!form.value) return ''
  const name = form.value.translations.pt.title
  if (form.value.kind === 'guide') return name ? t('helped.editGuide', { name }) : t('helped.newGuide')
  return name ? t('helped.editArticle', { name }) : t('helped.newArticle')
})

watch(
  () => props.draft,
  (draft) => {
    form.value = draft ? structuredClone(toRaw(draft)) : null
    language.value = 'pt'
    mode.value = 'edit'
  },
  { immediate: true },
)

/** Diz se o idioma já tem título. */
function translated(code: HelpLanguage): boolean {
  return !!form.value?.translations[code].title.trim()
}

/** Acrescenta um passo em branco no idioma aberto. */
function addStep() {
  content.value?.steps.push({ title: '', text: '', image_id: null, image_url: null })
}

/** Tira o passo do idioma aberto. */
function removeStep(index: number) {
  content.value?.steps.splice(index, 1)
}

/** Sobe o print do passo e guarda o id no passo. */
async function upload(index: number, event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  target.value = ''
  if (!file || !content.value) return
  const problem = imageProblem(file)
  if (problem) {
    toast.error(problem)
    return
  }
  uploading.value = index
  try {
    const image = await helpEditorService.upload(file)
    const step = content.value.steps[index]
    if (step) Object.assign(step, { image_id: image.id, image_url: image.url })
    toast.success(t('helped.uploaded'), { description: t('helped.uploadedHint') })
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    uploading.value = null
  }
}

/** Salva o guia ou artigo e avisa se ficou publicado ou em rascunho. */
async function save() {
  if (!form.value) return
  saving.value = true
  try {
    const body = bodyOf(form.value)
    const row = form.value.id ? await helpEditorService.update(form.value.id, body) : await helpEditorService.create(body)
    toast.success(row.published ? t('helped.published') : t('helped.drafted'), { description: row.published ? t('helped.publishedHint') : t('helped.draftedHint') })
    emit('saved', row)
    open.value = false
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    saving.value = false
  }
}

/** Apaga o guia ou artigo aberto. */
async function remove() {
  if (!form.value?.id || !window.confirm(t('helped.confirmRemove'))) return
  try {
    await helpEditorService.remove(form.value.id)
    toast.success(t('helped.removed'))
    emit('removed', form.value.id)
    open.value = false
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}
</script>

<template>
  <Dialog v-model:open="open" :title="title" :desc="t('helped.editorDesc')" class="max-w-[1120px]">
    <div v-if="form && content" class="grid gap-6">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <Segmented v-model="language" :options="languageOptions" :label="t('helped.language')" />
        <Segmented v-model="mode" :options="modeOptions" :label="t('helped.mode')" />
      </div>
      <p v-if="!translated(language) && language !== 'pt'" class="rounded-md border border-dashed p-3 text-[13px] text-muted-foreground">{{ t('helped.translateHint', { language: language.toUpperCase() }) }}</p>

      <div v-if="mode === 'preview'" class="mx-auto grid w-full max-w-[760px] gap-6">
        <div>
          <div class="text-[13px] text-muted-foreground">{{ t(CATEGORY_LABEL[form.category]) }}</div>
          <h2 class="text-[28px] font-semibold tracking-[-0.03em]">{{ content.title || t('helped.untitled') }}</h2>
          <p class="mt-1 text-[15px] text-muted-foreground">{{ content.summary }}</p>
        </div>
        <p v-if="form.kind === 'article'" class="whitespace-pre-line text-[15px] leading-relaxed">{{ content.body }}</p>
        <div v-for="(step, index) in content.steps" :key="index" class="grid gap-3">
          <div class="flex items-start gap-3">
            <span class="grid size-7 shrink-0 place-items-center rounded-full bg-foreground text-[13px] font-medium text-background tnum">{{ index + 1 }}</span>
            <div>
              <div class="text-[16px] font-medium">{{ step.title || t('helped.untitledStep') }}</div>
              <p class="whitespace-pre-line text-[14px] text-muted-foreground">{{ step.text }}</p>
            </div>
          </div>
          <img v-if="step.image_url" :src="step.image_url" :alt="step.title" class="w-full rounded-md border" />
          <div v-else class="grid h-40 place-items-center rounded-md border border-dashed text-[13px] text-muted-foreground">{{ t('helped.noShot') }}</div>
        </div>
      </div>

      <div v-else class="grid gap-6">
        <div class="grid gap-4 md:grid-cols-2">
          <Field id="help-title" :label="t('helped.fieldTitle')">
            <Input id="help-title" v-model="content.title" :maxlength="120" :placeholder="form.kind === 'guide' ? t('helped.guideTitleHint') : t('helped.articleTitleHint')" />
          </Field>
          <Field id="help-category" :label="t('helped.fieldCategory')">
            <Select id="help-category" v-model="form.category" :options="categoryOptions" />
          </Field>
        </div>
        <Field id="help-summary" :label="t('helped.fieldSummary')">
          <Textarea id="help-summary" v-model="content.summary" :rows="2" :maxlength="300" :placeholder="t('helped.summaryHint')" />
        </Field>
        <Field v-if="form.kind === 'article'" id="help-body" :label="t('helped.fieldBody')" :hint="t('helped.bodyHint')">
          <Textarea id="help-body" v-model="content.body" :rows="12" :maxlength="20000" />
        </Field>
        <div v-else class="grid gap-3">
          <div class="flex items-center justify-between">
            <h3 class="text-[16px] font-semibold tracking-tight">{{ t('helped.steps') }}</h3>
            <span class="text-[13px] text-muted-foreground tnum">{{ t('help.stepsCount', { n: content.steps.length }) }}</span>
          </div>
          <div v-for="(step, index) in content.steps" :key="index" class="grid gap-4 rounded-lg border bg-card p-4 md:grid-cols-[1fr_300px]">
            <div class="grid content-start gap-3">
              <div class="flex items-center gap-2">
                <span class="grid size-7 shrink-0 place-items-center rounded-full bg-foreground text-[13px] font-medium text-background tnum">{{ index + 1 }}</span>
                <Input v-model="step.title" :maxlength="120" :placeholder="t('helped.stepTitle')" :aria-label="t('helped.stepTitleOf', { n: index + 1 })" />
                <Button size="icon" variant="ghost" class="shrink-0" :aria-label="t('helped.removeStep', { n: index + 1 })" @click="removeStep(index)"><Trash2 /></Button>
              </div>
              <Textarea v-model="step.text" :rows="3" :maxlength="2000" :placeholder="t('helped.stepText')" :aria-label="t('helped.stepTextOf', { n: index + 1 })" />
            </div>
            <label class="group relative grid min-h-[180px] cursor-pointer place-items-center overflow-hidden rounded-md border border-dashed text-center text-[13px] text-muted-foreground transition-colors hover:border-foreground/40 hover:bg-muted/50">
              <input type="file" accept="image/png,image/jpeg,image/webp" class="sr-only" :disabled="uploading !== null" @change="upload(index, $event)" />
              <img v-if="step.image_url" :src="step.image_url" :alt="step.title" class="h-full w-full object-cover" />
              <span v-else class="grid justify-items-center gap-1"><ImagePlus class="size-5" aria-hidden="true" />{{ uploading === index ? t('helped.uploading') : t('helped.uploadShot') }}<span class="text-[12px]">{{ t('helped.shotRules') }}</span></span>
              <span v-if="step.image_url" class="absolute bottom-2 right-2 rounded-md border bg-card px-2 py-1 text-[12px] font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100">{{ t('helped.changeShot') }}</span>
            </label>
          </div>
          <Button variant="outline" class="w-fit" :disabled="content.steps.length >= 20" @click="addStep"><Plus />{{ t('helped.addStep') }}</Button>
        </div>
      </div>
    </div>
    <template #footer>
      <label class="mr-auto flex items-center gap-2 self-center text-[14px]">
        <Switch v-if="form" v-model="form.published" :label="t('helped.publishLabel')" />{{ form?.published ? t('helped.isPublished') : t('helped.isDraft') }}
      </label>
      <Button v-if="form?.id" variant="ghost" class="text-bad" @click="remove"><Trash2 />{{ t('helped.remove') }}</Button>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button :loading="saving" :disabled="!form?.translations.pt.title.trim()" @click="save"><Check />{{ t('helped.save') }}</Button>
    </template>
  </Dialog>
</template>
