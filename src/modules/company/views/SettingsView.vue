<script setup lang="ts">
/** Configurações da Empresa: nome, imagem, dados fiscais, cor do sistema, tema e idioma. */
import { computed, onMounted, ref } from 'vue'
import { toast } from 'vue-sonner'
import { Check } from 'lucide-vue-next'
import { RadioGroupItem, RadioGroupRoot } from 'reka-ui'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import CompanyImageCard from '@/components/CompanyImageCard.vue'
import FiscalDataCard from '@/modules/company/components/FiscalDataCard.vue'
import ThemeCard from '@/modules/company/components/ThemeCard.vue'
import Input from '@/components/ui/Input.vue'
import LangSwitch from '@/components/LangSwitch.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { accentFor, ACCENTS, applyAccent } from '@/lib/theme'
import type { CompanyDetail } from '@/modules/company/types'
import { cn } from '@/lib/utils'
import { useSession } from '@/stores/session'
import { companyService } from '@/modules/company/service'

const session = useSession()
const company = ref<CompanyDetail | null>(null)
const loadError = ref<string | null>(null)
const name = ref('')
const accent = ref<string>(ACCENTS[0]!.id)
const savingName = ref(false)
const savingAccent = ref(false)
const canEdit = computed(() => session.can('company.edit'))
const nameInvalid = computed(() => name.value.trim().length < 2)

/** Carrega a Empresa. */
async function load() {
  loadError.value = null
  if (!session.company) return
  try {
    company.value = await companyService.show()
    name.value = company.value.name
    accent.value = accentFor(company.value.accent_color).id
  } catch (error) {
    loadError.value = error instanceof ApiError ? errorText(error.code) : errorText('unknown')
  }
}
onMounted(load)

/** Salva uma mudança da Empresa, marcando o botão como ocupado. */
async function save(body: Record<string, unknown>, busy: typeof savingName) {
  busy.value = true
  try {
    company.value = await companyService.update(body)
    // O seletor de Empresas e a cor vêm do /auth/me.
    await session.load()
    toast.success(t('common.saved'))
  } catch (error) {
    toast.error(error instanceof ApiError ? errorText(error.code) : errorText('unknown'))
  } finally {
    busy.value = false
  }
}

/** Envia a imagem nova; o seletor de Empresas pega a URL nova do /auth/me. */
async function saveImage(file: File) {
  company.value = await companyService.setImage(file)
  await session.load()
}

/** Tira a imagem da Empresa. */
async function removeImage() {
  company.value = await companyService.removeImage()
  await session.load()
}

/** Salva o nome da Empresa. */
const saveName = () => save({ name: name.value.trim() }, savingName)
/** Salva a cor de destaque da Empresa. */
const saveAccent = () => save({ accent_color: ACCENTS.find((option) => option.id === accent.value)!.hex }, savingAccent)
// Prévia na hora; se não salvar, a cor da Empresa volta ao recarregar.
const preview = (id: string) => applyAccent(ACCENTS.find((option) => option.id === id)!.hex)
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
      <CompanyImageCard :name="company.name" :image-url="company.image_url" :readonly="!canEdit" :save="saveImage" :remove="removeImage" />
      <FiscalDataCard v-if="canEdit && !session.company?.is_internal" />
    </template>

    <h2 class="text-[13px] font-medium text-muted-foreground">{{ t('set.appearance') }}</h2>
    <Card v-if="company" :title="t('set.accent')" :desc="t('set.accentDesc')">
      <RadioGroupRoot
        v-model="accent"
        :disabled="!canEdit"
        class="flex flex-wrap gap-2"
        :aria-label="t('set.accent')"
        @update:model-value="(value) => preview(String(value))"
      >
        <RadioGroupItem
          v-for="accentOption in ACCENTS"
          :key="accentOption.id"
          :value="accentOption.id"
          :class="
            cn(
              'flex h-10 items-center gap-2 rounded-md border bg-background px-3 text-[14px] hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:hover:bg-background',
              accent === accentOption.id && 'border-foreground',
            )
          "
        >
          <span class="h-4 w-4 rounded-full ring-1 ring-inset ring-foreground/10" :style="{ background: accentOption.id === 'default' ? 'hsl(var(--foreground))' : accentOption.hex }" />
          {{ t(`accent.${accentOption.id}`) }}
          <Check v-if="accent === accentOption.id" class="h-3.5 w-3.5" aria-hidden="true" />
        </RadioGroupItem>
      </RadioGroupRoot>
      <template #note>{{ canEdit ? t('set.accentNote') : t('set.accentReadonly') }}</template>
      <template v-if="canEdit" #footer>
        <Button :loading="savingAccent" :disabled="accent === accentFor(company.accent_color).id" @click="saveAccent">{{ t('common.save') }}</Button>
      </template>
    </Card>

    <ThemeCard />

    <h2 class="text-[13px] font-medium text-muted-foreground">{{ t('set.language') }}</h2>
    <Card :title="t('set.language')" :desc="t('set.langDesc')">
      <LangSwitch class="max-w-[360px]" />
    </Card>
  </PageBody>
</template>
