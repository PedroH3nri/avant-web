<script setup lang="ts">
/** Cartão do tema: os prontos (Claro, Escuro, GroOne, Sistema) e até três personalizados da pessoa,
 * cada um com prévia; os personalizados se criam, editam e apagam aqui. */
import { computed, onMounted, ref } from 'vue'
import { toast } from 'vue-sonner'
import { Pencil, Plus, Trash2 } from 'lucide-vue-next'
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from 'reka-ui'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { theme, THEMES, type Theme } from '@/lib/theme'
import { cn } from '@/lib/utils'
import CustomThemeDialog from '@/modules/account/components/CustomThemeDialog.vue'
import ThemePreview from '@/modules/account/components/ThemePreview.vue'
import { accountService } from '@/modules/account/service'
import type { CustomTheme } from '@/modules/account/types'
import { useSession } from '@/stores/session'

const CUSTOM_PREFIX = 'custom:'
const DEFAULT_LIMIT = 3

const session = useSession()
const limit = ref(DEFAULT_LIMIT)
const editorOpen = ref(false)
const editing = ref<CustomTheme | null>(null)
const removing = ref<CustomTheme | null>(null)
const removeOpen = ref(false)
const removeBusy = ref(false)

const customs = computed(() => session.customThemes ?? [])
const atLimit = computed(() => customs.value.length >= limit.value)
const selected = computed(() => (theme.value === 'custom' ? `${CUSTOM_PREFIX}${session.me?.custom_theme_id ?? ''}` : theme.value))

onMounted(async () => {
  try {
    const loaded = await accountService.themes()
    limit.value = loaded.limit
    session.setCustomThemes(loaded.items)
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
})

/** Fundo da prévia de cada tema pronto; o do sistema mostra metade clara e metade escura. */
function previewClass(option: Theme): string {
  if (option === 'dark') return 'bg-neutral-950'
  if (option === 'groone') return 'bg-[#030b17]'
  if (option === 'light') return 'bg-white'
  return 'bg-gradient-to-r from-white from-50% to-neutral-950 to-50%'
}

/** Aplica o tema na hora e guarda na conta, para valer em qualquer navegador. */
async function choose(value: unknown) {
  const picked = String(value)
  const change = picked.startsWith(CUSTOM_PREFIX)
    ? { theme: 'custom' as Theme, custom_theme_id: picked.slice(CUSTOM_PREFIX.length) }
    : { theme: picked as Theme }
  try {
    await session.setAppearance(change)
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}

/** Abre o editor para um tema novo ou para editar um existente. */
function openEditor(custom: CustomTheme | null) {
  editing.value = custom
  editorOpen.value = true
}

/** Põe o tema salvo na lista; o tema novo já passa a ser o tema em uso. */
async function saved(custom: CustomTheme, created: boolean) {
  const others = customs.value.filter((item) => item.id !== custom.id)
  session.setCustomThemes(created ? [...others, custom] : customs.value.map((item) => (item.id === custom.id ? custom : item)))
  if (created) await choose(`${CUSTOM_PREFIX}${custom.id}`)
  toast.success(created ? t('theme.created') : t('theme.saved'))
}

/** Pede confirmação para apagar um tema. */
function askRemove(custom: CustomTheme) {
  removing.value = custom
  removeOpen.value = true
}

/** Apaga o tema; se era o em uso, a conta volta para o do sistema. */
async function remove() {
  const target = removing.value
  if (!target) return
  removeBusy.value = true
  try {
    await accountService.deleteTheme(target.id)
    session.setCustomThemes(customs.value.filter((item) => item.id !== target.id))
    if (theme.value === 'custom' && session.me?.custom_theme_id === target.id) await session.load()
    removeOpen.value = false
    toast.success(t('theme.removed'))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    removeBusy.value = false
  }
}
</script>

<template>
  <Card :title="t('set.theme')" :desc="t('set.themeDesc')">
    <RadioGroupRoot :model-value="selected" class="grid gap-3" :aria-label="t('set.theme')" @update:model-value="choose">
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <RadioGroupItem
          v-for="themeOption in THEMES"
          :key="themeOption"
          :value="themeOption"
          :class="
            cn(
              'grid cursor-pointer gap-3 rounded-lg border bg-background p-3 text-left hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              selected === themeOption && 'border-foreground',
            )
          "
        >
          <span :class="cn('block h-16 overflow-hidden rounded-md border', previewClass(themeOption))" aria-hidden="true">
            <span :class="cn('mx-2 mt-2 block h-2 w-10 rounded-full', themeOption === 'dark' ? 'bg-neutral-700' : themeOption === 'groone' ? 'bg-[#1170D2]' : 'bg-neutral-200')" />
            <span :class="cn('mx-2 mt-1.5 block h-2 w-16 rounded-full', themeOption === 'dark' ? 'bg-neutral-800' : themeOption === 'groone' ? 'bg-[#0A213D]' : 'bg-neutral-100')" />
          </span>
          <span class="flex items-center gap-2 text-[14px]">
            <span class="grid h-4 w-4 place-items-center rounded-full border border-foreground/40">
              <RadioGroupIndicator class="h-2 w-2 rounded-full bg-foreground" />
            </span>
            {{ t(`set.theme.${themeOption}`) }}
          </span>
        </RadioGroupItem>
      </div>

      <div class="mt-3 flex items-baseline justify-between gap-3">
        <h3 class="text-[14px] font-semibold">{{ t('theme.customTitle') }}</h3>
        <span class="text-[13px] tabular-nums text-muted-foreground">{{ t('theme.count', { used: customs.length, limit }) }}</span>
      </div>
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="custom in customs"
          :key="custom.id"
          :class="cn('grid content-start gap-3 rounded-lg border bg-background p-3', selected === `${CUSTOM_PREFIX}${custom.id}` && 'border-foreground')"
        >
          <RadioGroupItem
            :value="`${CUSTOM_PREFIX}${custom.id}`"
            class="grid cursor-pointer gap-3 rounded-md text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ThemePreview :colors="custom.colors" />
            <span class="flex min-w-0 items-center gap-2 text-[14px]">
              <span class="grid h-4 w-4 shrink-0 place-items-center rounded-full border border-foreground/40">
                <RadioGroupIndicator class="h-2 w-2 rounded-full bg-foreground" />
              </span>
              <span class="truncate">{{ custom.name }}</span>
            </span>
          </RadioGroupItem>
          <div class="-mb-1 -ml-2 flex gap-1">
            <Button variant="ghost" size="sm" @click="openEditor(custom)"><Pencil aria-hidden="true" />{{ t('common.edit') }}</Button>
            <Button variant="destructive" size="sm" @click="askRemove(custom)"><Trash2 aria-hidden="true" />{{ t('common.delete') }}</Button>
          </div>
        </div>
        <button
          v-if="!atLimit"
          type="button"
          class="grid min-h-[132px] place-items-center rounded-lg border border-dashed bg-background p-3 text-[14px] text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          @click="openEditor(null)"
        >
          <span class="grid justify-items-center gap-2"><Plus class="size-5" aria-hidden="true" />{{ t('theme.new') }}</span>
        </button>
      </div>
    </RadioGroupRoot>
    <template #note>{{ atLimit ? t('theme.limitNote', { limit }) : t('theme.customNote') }}</template>
  </Card>
  <CustomThemeDialog v-model:open="editorOpen" :editing="editing" @saved="saved" />
  <ConfirmDialog
    v-model:open="removeOpen"
    :title="t('theme.removeTitle')"
    :desc="t('theme.removeDesc', { name: removing?.name ?? '' })"
    :action="t('common.delete')"
    :busy="removeBusy"
    @confirm="remove"
  />
</template>
