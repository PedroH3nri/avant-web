<script setup lang="ts">
/** Categoria e responsável de um site ou de vários: no lote, o que ficar em "manter" não muda. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { KEEP, NONE, SITE_CATEGORIES, categoryLabel, sitePatch } from '@/modules/sites/rules'
import { siteService } from '@/modules/sites/service'
import type { Site } from '@/modules/sites/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{
  /** Os sites escolhidos; com um só, os seletores começam no valor dele. */
  sites: Site[]
  /** Quem pode ser responsável: os membros ativos da Empresa. */
  people: { value: string; label: string }[]
}>()
const emit = defineEmits<{ saved: [sites: Site[]] }>()

const category = ref(KEEP)
const responsible = ref(KEEP)
const saving = ref(false)
const single = computed(() => (props.sites.length === 1 ? props.sites[0] : null))
const title = computed(() => (single.value ? t('sites.classify.titleOne', { domain: single.value.domain }) : t('sites.classify.title', { n: props.sites.length })))
const keep = computed(() => (single.value ? [] : [{ value: KEEP, label: t('sites.classify.keep') }]))
const categoryOptions = computed(() => [
  ...keep.value,
  { value: NONE, label: categoryLabel(null) },
  ...SITE_CATEGORIES.map((value) => ({ value, label: categoryLabel(value) })),
])
const responsibleOptions = computed(() => [...keep.value, { value: NONE, label: t('sites.responsible.none') }, ...props.people])
const changed = computed(() => Object.keys(sitePatch(category.value, responsible.value)).length > 0)

watch(open, (opened) => {
  if (!opened) return
  const site = single.value
  category.value = site ? (site.category ?? NONE) : KEEP
  responsible.value = site ? (site.responsible_user_id ?? NONE) : KEEP
})

/** Grava a categoria e o responsável nos sites escolhidos. */
async function save() {
  const patch = sitePatch(category.value, responsible.value)
  if (!Object.keys(patch).length) return
  saving.value = true
  try {
    const site = single.value
    const saved = site ? [await siteService.classify(site.id, patch)] : (await siteService.classifyMany(props.sites.map((item) => item.id), patch)).items
    toast.success(t('sites.classify.saved', { n: saved.length }))
    open.value = false
    emit('saved', saved)
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <Dialog v-model:open="open" :title="title" :desc="t('sites.classify.desc')" class="max-w-[440px]">
    <div class="grid gap-4">
      <Field id="classify-category" :label="t('sites.col.category')">
        <NativeSelect id="classify-category" v-model="category" :options="categoryOptions" />
      </Field>
      <Field id="classify-responsible" :label="t('sites.col.responsible')">
        <NativeSelect id="classify-responsible" v-model="responsible" :options="responsibleOptions" />
      </Field>
    </div>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button :loading="saving" :disabled="!changed" @click="save">{{ t('common.save') }}</Button>
    </template>
  </Dialog>
</template>
