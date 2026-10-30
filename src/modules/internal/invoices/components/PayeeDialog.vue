<script setup lang="ts">
/** Modal dos dados de recebimento: os mesmos campos fiscais do cliente, só com documento de pessoa física. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { ApiError } from '@/lib/api'
import { errorText, locale, t } from '@/lib/i18n'
import { TAX_TYPES } from '@/modules/company/fiscal'
import type { FiscalData } from '@/modules/company/types'
import { personTaxTypeOptions } from '@/modules/internal/invoices/rules'
import { invoiceService } from '@/modules/internal/invoices/service'
import type { PayeeDetails } from '@/modules/internal/invoices/types'

const SWIFT = /^[A-Za-z0-9]{8,11}$/

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ details: PayeeDetails | null }>()
const emit = defineEmits<{ saved: [details: PayeeDetails] }>()
const busy = ref(false)
const form = ref<FiscalData>(emptyForm())

/** Formulário vazio, já com um documento de pessoa física do Brasil. */
function emptyForm(): FiscalData {
  return { tax_type: 'BR_PF', tax_id: '', legal_name: '', billing_phone_ddi: '+55', billing_phone: '', billing_address: '', bank_name: '', swift_code: '', account_number: '', routing_number: '' }
}

watch(open, (opened) => {
  if (!opened) return
  const details = props.details
  form.value = details
    ? { tax_type: details.tax_type, tax_id: details.tax_id, legal_name: details.legal_name, billing_phone_ddi: details.billing_phone_ddi, billing_phone: details.billing_phone, billing_address: details.billing_address, bank_name: details.bank_name, swift_code: details.swift_code, account_number: details.account_number, routing_number: details.routing_number }
    : emptyForm()
})

const options = computed(() => personTaxTypeOptions(locale.value))
const documentLabel = computed(() => TAX_TYPES[form.value.tax_type] ?? t('fiscal.taxId'))
const swiftBad = computed(() => form.value.swift_code.trim() !== '' && !SWIFT.test(form.value.swift_code.replace(/\s/g, '')))
const complete = computed(() => Object.values(form.value).every((value) => value.trim() !== '') && !swiftBad.value)

/** Salva todos os dados de recebimento de uma vez. */
async function save() {
  if (!complete.value) return
  busy.value = true
  try {
    const body = Object.fromEntries(Object.entries(form.value).map(([key, value]) => [key, value.trim()])) as unknown as FiscalData
    const saved = await invoiceService.savePayeeDetails(body)
    toast.success(t('inv.payee.saved'))
    emit('saved', saved)
    open.value = false
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <Dialog v-model:open="open" class="max-w-[640px]" :title="t('inv.payee.title')" :desc="t('inv.payee.dialogDesc')">
    <form id="payee-form" class="grid gap-4 md:grid-cols-2" novalidate @submit.prevent="save">
      <Field id="py-type" :label="t('inv.payee.document')">
        <NativeSelect id="py-type" v-model="form.tax_type" :options="options" />
      </Field>
      <Field id="py-id" :label="documentLabel">
        <Input id="py-id" v-model="form.tax_id" class="tnum" maxlength="30" autocomplete="off" />
      </Field>
      <Field id="py-name" :label="t('inv.payee.fullName')">
        <Input id="py-name" v-model="form.legal_name" maxlength="300" autocomplete="name" />
      </Field>
      <div class="grid grid-cols-[96px_1fr] gap-3">
        <Field id="py-ddi" :label="t('int.ddi')">
          <Input id="py-ddi" v-model="form.billing_phone_ddi" class="tnum" maxlength="5" />
        </Field>
        <Field id="py-phone" :label="t('fiscal.billingPhone')">
          <Input id="py-phone" v-model="form.billing_phone" class="tnum" inputmode="tel" maxlength="30" />
        </Field>
      </div>
      <div class="md:col-span-2">
        <Field id="py-address" :label="t('fiscal.billingAddress')">
          <Input id="py-address" v-model="form.billing_address" maxlength="300" autocomplete="street-address" />
        </Field>
      </div>
      <Field id="py-bank" :label="t('fiscal.bank')">
        <Input id="py-bank" v-model="form.bank_name" maxlength="300" />
      </Field>
      <Field id="py-swift" :label="t('fiscal.swift')" :hint="t('fiscal.swiftHint')" :error="swiftBad && t('fiscal.swiftHint')">
        <Input id="py-swift" v-model="form.swift_code" class="font-mono uppercase" maxlength="14" :invalid="swiftBad" />
      </Field>
      <Field id="py-account" :label="t('fiscal.account')">
        <Input id="py-account" v-model="form.account_number" class="tnum" maxlength="300" />
      </Field>
      <Field id="py-routing" :label="t('fiscal.routing')">
        <Input id="py-routing" v-model="form.routing_number" class="tnum" maxlength="300" />
      </Field>
    </form>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button type="submit" form="payee-form" :loading="busy" :disabled="!complete">{{ t('common.save') }}</Button>
    </template>
  </Dialog>
</template>
