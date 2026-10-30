<script setup lang="ts">
/** Modal do desconto lançado à mão na comissão do mês de uma pessoa. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import { ApiError } from '@/lib/api'
import { errorText, lang, t } from '@/lib/i18n'
import { adjustmentValid } from '@/modules/internal/commissions/rules'
import { commissionService } from '@/modules/internal/commissions/service'
import type { PersonMonth } from '@/modules/internal/commissions/types'
import { parseAmount } from '@/modules/internal/goals/rules'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ person: PersonMonth | null; month: string }>()
const emit = defineEmits<{ saved: [] }>()
const amount = ref('')
const reason = ref('')
const busy = ref(false)

watch(open, (opened) => {
  if (!opened) return
  amount.value = ''
  reason.value = ''
})

const amountError = computed(() => {
  const value = parseAmount(amount.value, lang.value)
  return amount.value !== '' && !(Number.isFinite(value) && value > 0)
})
const valid = computed(() => adjustmentValid(amount.value, reason.value, lang.value))

/** Lança o desconto na comissão do mês. */
async function save() {
  const person = props.person
  if (!person || !valid.value) return
  busy.value = true
  try {
    await commissionService.adjust(person.user.id, props.month, parseAmount(amount.value, lang.value).toFixed(2), reason.value.trim())
    toast.success(t('com.adjusted'))
    open.value = false
    emit('saved')
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <Dialog v-model:open="open" :title="t('com.adjust.title', { name: person?.user.name ?? '' })" :desc="t('com.adjust.desc')">
    <form id="commission-adjustment" class="grid gap-4" novalidate @submit.prevent="save">
      <Field id="adj-amount" :label="t('com.adjust.amount')" :error="amountError && t('com.adjust.amountErr')">
        <Input id="adj-amount" v-model="amount" inputmode="decimal" class="max-w-[200px] tnum" placeholder="40,00" :invalid="amountError" />
      </Field>
      <Field id="adj-reason" :label="t('com.adjust.reason')">
        <textarea
          id="adj-reason"
          v-model="reason"
          maxlength="500"
          rows="3"
          class="w-full rounded-md border border-input bg-background px-3 py-2 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </Field>
    </form>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button type="submit" form="commission-adjustment" :disabled="!valid" :loading="busy">{{ t('com.action.adjust') }}</Button>
    </template>
  </Dialog>
</template>
