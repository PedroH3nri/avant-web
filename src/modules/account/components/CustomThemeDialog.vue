<script setup lang="ts">
/** Criar ou editar um tema personalizado: nome, as cinco cores (seletor, código em rgba e
 * opacidade) e a prévia ao vivo. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import { TriangleAlert } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import { ApiError } from '@/lib/api'
import { alphaOf, COLOR_KEYS, contrast, flattenColors, opaque, parseColor, STARTER_COLORS, toRgba, withAlpha, type ThemeColors } from '@/lib/customTheme'
import { errorText, t } from '@/lib/i18n'
import ThemePreview from '@/modules/account/components/ThemePreview.vue'
import { accountService } from '@/modules/account/service'
import type { CustomTheme } from '@/modules/account/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ editing: CustomTheme | null }>()
const emit = defineEmits<{ saved: [theme: CustomTheme, created: boolean] }>()

const MINIMUM_CONTRAST = 4.5
const name = ref('')
const PERCENT = 100
const colors = ref<ThemeColors>({ ...STARTER_COLORS })
const drafts = ref<Record<keyof ThemeColors, string>>(draftsOf(STARTER_COLORS))
const busy = ref(false)

watch(open, (value) => {
  if (!value) return
  name.value = props.editing?.name ?? ''
  colors.value = { ...(props.editing?.colors ?? STARTER_COLORS) }
  drafts.value = draftsOf(colors.value)
})

/** O texto de cada campo de cor, em ``rgba()``. */
function draftsOf(source: ThemeColors): Record<keyof ThemeColors, string> {
  return Object.fromEntries(COLOR_KEYS.map((key) => [key, toRgba(source[key])])) as Record<keyof ThemeColors, string>
}

const validColors = computed(() => COLOR_KEYS.every((key) => parseColor(drafts.value[key]) !== null))
const ready = computed(() => name.value.trim().length > 0 && validColors.value && !busy.value)
/** O fundo e os cartões com pouco contraste para o texto (já com a opacidade): avisa, mas deixa salvar. */
const lowContrast = computed(() => {
  if (!validColors.value) return false
  const shown = flattenColors(colors.value)
  return contrast(shown.text, shown.background) < MINIMUM_CONTRAST || contrast(shown.text, shown.card) < MINIMUM_CONTRAST
})
const previewColors = computed(() => (validColors.value ? colors.value : (props.editing?.colors ?? STARTER_COLORS)))

/** Troca uma cor e reescreve o campo dela em ``rgba()``. */
function setColor(key: keyof ThemeColors, value: string) {
  colors.value = { ...colors.value, [key]: value }
  drafts.value = { ...drafts.value, [key]: toRgba(value) }
}

/** O seletor do navegador troca a cor e mantém a opacidade. */
function pickColor(key: keyof ThemeColors, picked: string) {
  setColor(key, withAlpha(picked, alphaOf(colors.value[key])))
}

/** O código digitado (hex, rgb ou rgba) vale assim que for uma cor. */
function typeColor(key: keyof ThemeColors, typed: string) {
  drafts.value = { ...drafts.value, [key]: typed }
  const parsed = parseColor(typed)
  if (parsed) colors.value = { ...colors.value, [key]: parsed }
}

/** A opacidade em porcentagem, de 0 a 100. */
function opacityOf(key: keyof ThemeColors): string {
  return String(Math.round(alphaOf(colors.value[key]) * PERCENT))
}

/** Troca a opacidade da cor pela porcentagem digitada (o campo numérico entrega número). */
function setOpacity(key: keyof ThemeColors, typed: string | number) {
  const text = String(typed).trim()
  const percent = Number(text)
  if (text === '' || Number.isNaN(percent)) return
  setColor(key, withAlpha(colors.value[key], percent / PERCENT))
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
  <Dialog v-model:open="open" :title="editing ? t('theme.editTitle') : t('theme.newTitle')" :desc="t('theme.dialogDesc')" class="max-w-[780px]">
    <form id="custom-theme-form" class="grid gap-6 md:grid-cols-[1fr_260px]" @submit.prevent="save">
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
              :value="opaque(colors[key])"
              :aria-label="t(`theme.color.${key}`)"
              @input="pickColor(key, ($event.target as HTMLInputElement).value)"
            />
            <Input
              :id="`theme-${key}`"
              :model-value="drafts[key]"
              class="font-mono text-[13px]"
              spellcheck="false"
              :invalid="parseColor(drafts[key]) === null"
              @update:model-value="typeColor(key, $event)"
            />
            <div class="relative w-[84px] shrink-0">
              <Input
                :model-value="opacityOf(key)"
                type="number"
                min="0"
                max="100"
                class="pr-7 tabular-nums"
                :aria-label="t('theme.opacityOf', { color: t(`theme.color.${key}`) })"
                @update:model-value="setOpacity(key, $event)"
              />
              <span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[13px] text-muted-foreground" aria-hidden="true">%</span>
            </div>
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
