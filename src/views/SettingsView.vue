<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { toast } from 'vue-sonner'
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from 'reka-ui'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Input from '@/components/ui/Input.vue'
import LangSwitch from '@/components/LangSwitch.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import { api, ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { accentFor, ACCENTS, applyAccent, theme, type Theme } from '@/lib/theme'
import type { CompanyDetail } from '@/lib/types'
import { cn } from '@/lib/utils'
import { useSession } from '@/stores/session'

const session = useSession()
const company = ref<CompanyDetail | null>(null)
const loadError = ref<string | null>(null)
const name = ref('')
const accent = ref<string>(ACCENTS[0]!.id)
const savingName = ref(false)
const savingAccent = ref(false)
const canEdit = computed(() => session.can('company.edit'))
const nameInvalid = computed(() => name.value.trim().length < 2)
const themes: Theme[] = ['light', 'dark', 'system']

async function load() {
  loadError.value = null
  if (!session.company) return
  try {
    company.value = await api.get<CompanyDetail>('/company')
    name.value = company.value.name
    accent.value = accentFor(company.value.accent_color).id
  } catch (e) {
    loadError.value = e instanceof ApiError ? errorText(e.code) : errorText('unknown')
  }
}
onMounted(load)

async function save(body: Record<string, unknown>, busy: typeof savingName) {
  busy.value = true
  try {
    company.value = await api.patch<CompanyDetail>('/company', body)
    // O seletor de Empresas e a cor vêm do /auth/me.
    await session.load()
    toast.success(t('common.saved'))
  } catch (e) {
    toast.error(e instanceof ApiError ? errorText(e.code) : errorText('unknown'))
  } finally {
    busy.value = false
  }
}

const saveName = () => save({ name: name.value.trim() }, savingName)
const saveAccent = () => save({ accent_color: ACCENTS.find((a) => a.id === accent.value)!.hex }, savingAccent)
// Prévia na hora; se não salvar, a cor da Empresa volta ao recarregar.
const preview = (id: string) => applyAccent(ACCENTS.find((a) => a.id === id)!.hex)
</script>

<template>
  <PageHeader :title="t('set.title')" :sub="t('set.sub')" />
  <PageBody class="[&>*]:max-w-[880px]">
    <LoadError v-if="loadError" :message="loadError" @retry="load" />

    <template v-if="company">
      <h2 class="text-[13px] font-medium text-muted-foreground">{{ t('set.general') }}</h2>
      <Card :title="t('set.nameTitle')" :desc="t('company.nameHint')">
        <Input v-model="name" class="max-w-[360px]" maxlength="120" :aria-label="t('set.nameTitle')" :disabled="!canEdit" :invalid="nameInvalid" />
        <p v-if="nameInvalid" class="mt-2 text-[13px] text-bad">{{ t('set.nameEmpty') }}</p>
        <template #note>{{ canEdit ? t('set.nameNote') : t('set.accentReadonly') }}</template>
        <template v-if="canEdit" #footer>
          <Button :loading="savingName" :disabled="nameInvalid || name.trim() === company.name" @click="saveName">{{ t('common.save') }}</Button>
        </template>
      </Card>
    </template>

    <h2 class="text-[13px] font-medium text-muted-foreground">{{ t('set.appearance') }}</h2>
    <Card v-if="company" :title="t('set.accent')" :desc="t('set.accentDesc')">
      <RadioGroupRoot
        v-model="accent"
        :disabled="!canEdit"
        class="flex flex-wrap gap-2"
        :aria-label="t('set.accent')"
        @update:model-value="(v) => preview(String(v))"
      >
        <RadioGroupItem
          v-for="a in ACCENTS"
          :key="a.id"
          :value="a.id"
          :class="
            cn(
              'flex h-10 items-center gap-2 rounded-md border bg-background px-3 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 data-[state=checked]:border-foreground',
            )
          "
        >
          <span class="relative grid h-4 w-4 place-items-center rounded-full" :style="{ background: a.id === 'default' ? 'hsl(var(--foreground))' : a.hex }">
            <RadioGroupIndicator class="h-1.5 w-1.5 rounded-full bg-background" />
          </span>
          {{ t(`accent.${a.id}`) }}
        </RadioGroupItem>
      </RadioGroupRoot>
      <template #note>{{ canEdit ? t('set.accentNote') : t('set.accentReadonly') }}</template>
      <template v-if="canEdit" #footer>
        <Button :loading="savingAccent" :disabled="accent === accentFor(company.accent_color).id" @click="saveAccent">{{ t('common.save') }}</Button>
      </template>
    </Card>

    <Card :title="t('set.theme')" :desc="t('set.themeDesc')">
      <div class="flex max-w-[360px] rounded-md border bg-background p-0.5" role="group" :aria-label="t('set.theme')">
        <button
          v-for="m in themes"
          :key="m"
          type="button"
          :aria-pressed="theme === m"
          :class="
            cn(
              'h-8 flex-1 rounded-[4px] text-[13px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              theme === m ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground',
            )
          "
          @click="theme = m"
        >
          {{ t(`set.theme.${m}`) }}
        </button>
      </div>
    </Card>

    <h2 class="text-[13px] font-medium text-muted-foreground">{{ t('set.language') }}</h2>
    <Card :title="t('set.language')" :desc="t('set.langDesc')">
      <LangSwitch class="max-w-[360px]" />
    </Card>
  </PageBody>
</template>
