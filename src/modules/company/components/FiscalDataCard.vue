<script setup lang="ts">
/** Dados fiscais de pagamento da Empresa cliente: só o próprio cliente preenche, todos juntos. */
import { computed, onMounted, ref } from 'vue'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { ApiError } from '@/lib/api'
import { TAX_TYPES, taxTypeOptions } from '@/modules/company/fiscal'
import { errorText, t } from '@/lib/i18n'
import type { FiscalData } from '@/modules/company/types'
import { companyService } from '@/modules/company/service'

const SWIFT = /^[A-Za-z0-9]{8,11}$/

const loaded = ref(false)
const busy = ref(false)
const form = ref<FiscalData>({
  tax_type: 'BR_PJ',
  tax_id: '',
  legal_name: '',
  billing_phone_ddi: '+55',
  billing_phone: '',
  billing_address: '',
  bank_name: '',
  swift_code: '',
  account_number: '',
  routing_number: '',
})
const options = computed(() => taxTypeOptions())
const documentLabel = computed(() => TAX_TYPES[form.value.tax_type] ?? t('fiscal.taxId'))
const swiftBad = computed(() => form.value.swift_code.trim() !== '' && !SWIFT.test(form.value.swift_code.replace(/\s/g, '')))
const complete = computed(() => Object.values(form.value).every((value) => value.trim() !== '') && !swiftBad.value)

/** Carrega os dados fiscais já salvos, se houver. */
async function load() {
  try {
    const data = await companyService.fiscal()
    if (data.fiscal) form.value = { ...data.fiscal }
    loaded.value = true
  } catch (error) {
    if (!(error instanceof ApiError && error.code === 'not_found')) toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}
onMounted(load)

/** Salva todos os dados fiscais de uma vez. */
async function save() {
  if (!complete.value) return
  busy.value = true
  try {
    const body = Object.fromEntries(Object.entries(form.value).map(([key, value]) => [key, value.trim()]))
    const data = await companyService.updateFiscal(body)
    if (data.fiscal) form.value = { ...data.fiscal }
    toast.success(t('fiscal.saved'))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <Card v-if="loaded" :title="t('fiscal.title')" :desc="t('fiscal.desc')" :footer-note="t('fiscal.note')">
    <form id="fiscal-form" class="grid gap-4 md:grid-cols-2" @submit.prevent="save">
      <Field id="fi-type" :label="t('fiscal.taxType')">
        <NativeSelect id="fi-type" v-model="form.tax_type" :options="options" />
      </Field>
      <Field id="fi-id" :label="documentLabel">
        <Input id="fi-id" v-model="form.tax_id" class="tnum" maxlength="30" autocomplete="off" />
      </Field>
      <Field id="fi-legal" :label="t('fiscal.legalName')">
        <Input id="fi-legal" v-model="form.legal_name" maxlength="300" autocomplete="organization" />
      </Field>
      <div class="grid grid-cols-[96px_1fr] gap-3">
        <Field id="fi-ddi" :label="t('int.ddi')">
          <Input id="fi-ddi" v-model="form.billing_phone_ddi" class="tnum" maxlength="5" />
        </Field>
        <Field id="fi-phone" :label="t('fiscal.billingPhone')">
          <Input id="fi-phone" v-model="form.billing_phone" class="tnum" inputmode="tel" maxlength="30" />
        </Field>
      </div>
      <div class="md:col-span-2">
        <Field id="fi-address" :label="t('fiscal.billingAddress')">
          <Input id="fi-address" v-model="form.billing_address" maxlength="300" autocomplete="street-address" />
        </Field>
      </div>
      <Field id="fi-bank" :label="t('fiscal.bank')">
        <Input id="fi-bank" v-model="form.bank_name" maxlength="300" />
      </Field>
      <Field id="fi-swift" :label="t('fiscal.swift')" :hint="t('fiscal.swiftHint')" :error="swiftBad && t('fiscal.swiftHint')">
        <Input id="fi-swift" v-model="form.swift_code" class="font-mono uppercase" maxlength="14" :invalid="swiftBad" />
      </Field>
      <Field id="fi-account" :label="t('fiscal.account')">
        <Input id="fi-account" v-model="form.account_number" class="tnum" maxlength="300" />
      </Field>
      <Field id="fi-routing" :label="t('fiscal.routing')">
        <Input id="fi-routing" v-model="form.routing_number" class="tnum" maxlength="300" />
      </Field>
    </form>
    <template #footer>
      <Button type="submit" form="fiscal-form" :loading="busy" :disabled="!complete">{{ t('common.save') }}</Button>
    </template>
  </Card>
</template>
