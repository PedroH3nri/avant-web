<script setup lang="ts">
/** Criar ou editar um tema personalizado: nome, as cinco cores (seletor e código) e a prévia ao vivo. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import { TriangleAlert } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import { ApiError } from '@/lib/api'
import { COLOR_KEYS, contrast, isHexColor, STARTER_COLORS, type ThemeColors } from '@/lib/customTheme'
import { errorText, t } from '@/lib/i18n'
import ThemePreview from '@/modules/account/components/ThemePreview.vue'
import { accountService } from '@/modules/account/service'
import type { CustomTheme } from '@/modules/account/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ editing: CustomTheme | null }>()
const emit = defineEmits<{ saved: [theme: CustomTheme, created: boolean] }>()

const MINIMUM_CONTRAST = 4.5
const name = ref('')
const colors = ref<ThemeColors>({ ...STARTER_COLORS })
const busy = ref(false)

watch(open, (value) => {
  if (!value) return
  name.value = props.editing?.name ?? ''
  colors.value = { ...(props.editing?.colors ?? STARTER_COLORS) }
})

const validColors = computed(() => COLOR_KEYS.every((key) => isHexColor(colors.value[key])))
const ready = computed(() => name.value.trim().length > 0 && validColors.value && !busy.value)
/** O fundo e os cartões com pouco contraste para o texto: avisa, mas deixa salvar. */
const lowContrast = computed(
  () =>
    validColors.value &&
    (contrast(colors.value.text, colors.value.background) < MINIMUM_CONTRAST || contrast(colors.value.text, colors.value.card) < MINIMUM_CONTRAST),
)
const previewColors = computed(() => (validColors.value ? colors.value : (props.editing?.colors ?? STARTER_COLORS)))

/** Troca uma cor pelo seletor ou pelo código digitado. */
function setColor(key: keyof ThemeColors, value: string) {
  colors.value = { ...colors.value, [key]: value.trim().toLowerCase() }
}

/** Cria ou salva o tema e devolve para o cartão. */
async function save() {
  if (!ready.value) return
  busy.value = true
  const body = { name: name.value.trim(), colors: colors.value }
  try {
    const saved = props.editing ? await accountService.updateTheme(props.editing.id, body) : await accountService.createTheme(body)
    emit('saved', saved, !props.editing)
    open.value = false
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <Dialog v-model:open="open" :title="editing ? t('theme.editTitle') : t('theme.newTitle')" :desc="t('theme.dialogDesc')" class="max-w-[720px]">
    <form id="custom-theme-form" class="grid gap-6 md:grid-cols-[1fr_280px]" @submit.prevent="save">
      <div class="grid content-start gap-4">
        <Field id="theme-name" :label="t('theme.name')">
          <Input id="theme-name" v-model="name" maxlength="40" autocomplete="off" :placeholder="t('theme.namePlaceholder')" />
        </Field>
        <div v-for="key in COLOR_KEYS" :key="key" class="grid gap-2">
          <label :for="`theme-${key}`" class="text-[13px] font-medium text-muted-foreground">{{ t(`theme.color.${key}`) }}</label>
          <div class="flex items-center gap-2">
            <input
              type="color"
              class="size-10 shrink-0 cursor-pointer rounded-md border border-input bg-background p-1"
              :value="isHexColor(colors[key]) ? colors[key] : '#000000'"
              :aria-label="t(`theme.color.${key}`)"
              @input="setColor(key, ($event.target as HTMLInputElement).value)"
            />
            <Input
              :id="`theme-${key}`"
              :model-value="colors[key]"
              class="font-mono"
              maxlength="7"
              spellcheck="false"
              :invalid="!isHexColor(colors[key])"
              @update:model-value="setColor(key, $event)"
            />
          </div>
        </div>
      </div>
      <div class="grid content-start gap-3">
        <p class="text-[13px] font-medium text-muted-foreground">{{ t('theme.preview') }}</p>
        <ThemePreview :colors="previewColors" large />
        <p v-if="!validColors" class="text-[13px] text-bad">{{ t('theme.invalidColor') }}</p>
        <p v-else-if="lowContrast" class="flex gap-2 text-[13px] text-warn">
          <TriangleAlert class="mt-0.5 size-4 shrink-0" aria-hidden="true" />{{ t('theme.lowContrast') }}
        </p>
        <p class="text-[13px] text-muted-foreground">{{ t('theme.derivedNote') }}</p>
      </div>
    </form>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button type="submit" form="custom-theme-form" :loading="busy" :disabled="!ready">{{ editing ? t('common.save') : t('theme.create') }}</Button>
    </template>
  </Dialog>
</template>
