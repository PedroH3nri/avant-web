<script setup lang="ts">
/** Modal de uma linha de serviço: o serviço do catálogo, a descrição em inglês e o valor livre. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { ApiError } from '@/lib/api'
import { errorText, lang, t } from '@/lib/i18n'
import { amountInput, amountValid, serviceItemBody } from '@/modules/internal/invoices/rules'
import { invoiceService } from '@/modules/internal/invoices/service'
import type { Invoice, InvoiceItem, InvoiceServiceOption } from '@/modules/internal/invoices/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ invoiceId: string; item: InvoiceItem | null; services: InvoiceServiceOption[] }>()
const emit = defineEmits<{ saved: [invoice: Invoice] }>()
const serviceId = ref('')
const description = ref('')
const amount = ref('')
const busy = ref(false)

watch(open, (opened) => {
  if (!opened) return
  serviceId.value = props.item?.service_id ?? props.services[0]?.id ?? ''
  description.value = props.item?.description ?? ''
  amount.value = props.item ? amountInput(props.item.amount, lang.value) : ''
})

const options = computed(() => props.services.map((service) => ({ value: service.id, label: service.title })))
const chosen = computed(() => props.services.find((service) => service.id === serviceId.value))
const amountError = computed(() => amount.value !== '' && !amountValid(amount.value, lang.value))
const valid = computed(() => !!chosen.value && amount.value !== '' && !amountError.value)

/** Grava a linha no rascunho e devolve a invoice atualizada. */
async function save() {
  if (!valid.value) return
  busy.value = true
  try {
    const body = serviceItemBody(serviceId.value, description.value, amount.value, lang.value)
    const saved = props.item ? await invoiceService.updateItem(props.invoiceId, props.item.id, body) : await invoiceService.addItem(props.invoiceId, body)
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
  <Dialog v-model:open="open" :title="item ? t('inv.line.edit') : t('inv.line.add')" :desc="t('inv.line.desc')">
    <p v-if="services.length === 0" class="text-[14px] text-muted-foreground">{{ t('inv.line.noServices') }}</p>
    <form v-else id="service-line" class="grid gap-4" novalidate @submit.prevent="save">
      <Field id="sl-service" :label="t('inv.line.service')" :hint="chosen?.description || undefined">
        <NativeSelect id="sl-service" v-model="serviceId" :options="options" />
      </Field>
      <Field id="sl-desc" :label="t('inv.line.description')">
        <textarea
          id="sl-desc"
          v-model="description"
          maxlength="500"
          rows="2"
          :placeholder="t('inv.line.descriptionPlaceholder')"
          class="w-full rounded-md border border-input bg-background px-3 py-2 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </Field>
      <Field id="sl-amount" :label="t('inv.line.amount')" :error="amountError && t('inv.line.amountErr')">
        <Input id="sl-amount" v-model="amount" inputmode="decimal" class="max-w-[200px] tnum" :placeholder="t('inv.line.amountPlaceholder')" :invalid="amountError" />
      </Field>
    </form>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button type="submit" form="service-line" :disabled="!valid" :loading="busy">{{ item ? t('common.save') : t('inv.line.addAction') }}</Button>
    </template>
  </Dialog>
</template>
