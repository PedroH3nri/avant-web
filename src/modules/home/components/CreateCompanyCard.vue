<script setup lang="ts">
/** A conta do cliente (papel Publisher) sem Empresa cria a dela, uma só, e a sessão já entra nela. */
import { computed, ref } from 'vue'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { useSession } from '@/stores/session'

const MIN_NAME = 2
const session = useSession()
const name = ref('')
const busy = ref(false)
const failure = ref<string | null>(null)
const valid = computed(() => name.value.trim().length >= MIN_NAME)

/** Cria a Empresa com o nome digitado. */
async function create() {
  if (!valid.value || busy.value) return
  busy.value = true
  failure.value = null
  try {
    await session.createCompany(name.value.trim())
    toast.success(t('home.created'))
  } catch (error) {
    failure.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <Card class="max-w-[560px]" :title="t('home.createTitle')" :desc="t('home.createDesc')">
    <form id="create-company" novalidate @submit.prevent="create">
      <Field id="create-company-name" :label="t('home.createName')" :hint="t('home.createHint')" :error="failure ?? undefined">
        <Input id="create-company-name" v-model="name" maxlength="120" autocomplete="organization" :invalid="!!failure" />
      </Field>
    </form>
    <template #note>{{ t('home.createNote') }}</template>
    <template #footer>
      <Button type="submit" form="create-company" :loading="busy" :disabled="!valid">{{ t('home.createSubmit') }}</Button>
    </template>
  </Card>
</template>
