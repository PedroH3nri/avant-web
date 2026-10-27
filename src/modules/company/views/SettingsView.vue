<script setup lang="ts">
/** Configurações da Empresa: nome, imagem, dados fiscais e idioma. Tema e cor são de cada pessoa, em Minha conta. */
import { computed, onMounted, ref } from 'vue'
import { toast } from 'vue-sonner'
import { ArrowLeft } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import CompanyImageCard from '@/components/CompanyImageCard.vue'
import FiscalDataCard from '@/modules/company/components/FiscalDataCard.vue'
import Input from '@/components/ui/Input.vue'
import LangSwitch from '@/components/LangSwitch.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import type { CompanyDetail } from '@/modules/company/types'
import { useSession } from '@/stores/session'
import { companyService } from '@/modules/company/service'

const session = useSession()
const company = ref<CompanyDetail | null>(null)
const loadError = ref<string | null>(null)
const name = ref('')
const savingName = ref(false)
const canEdit = computed(() => session.can('company.edit'))
const isGroone = computed(() => session.company?.is_internal === true)
const nameInvalid = computed(() => name.value.trim().length < 2)

/** Carrega a Empresa. */
async function load() {
  loadError.value = null
  if (!session.company) return
  try {
    company.value = await companyService.show()
    name.value = company.value.name
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
    // O seletor de Empresas vem do /auth/me.
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
</script>

<template>
  <PageHeader :title="isGroone ? t('int.grooneSettings') : t('set.title')" :sub="isGroone ? t('int.grooneSettingsDesc') : t('set.sub')">
    <template v-if="isGroone" #back>
      <RouterLink to="/interno/equipe" class="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground">
        <ArrowLeft class="size-4" />{{ t('int.staff') }}
      </RouterLink>
    </template>
  </PageHeader>
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

    <h2 class="text-[13px] font-medium text-muted-foreground">{{ t('set.language') }}</h2>
    <Card :title="t('set.language')" :desc="t('set.langDesc')">
      <LangSwitch class="max-w-[360px]" />
    </Card>
  </PageBody>
</template>
