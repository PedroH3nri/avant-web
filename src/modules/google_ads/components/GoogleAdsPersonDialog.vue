<script setup lang="ts">
/** Configurar uma pessoa: as contas que ela usa (passar uma conta tira de quem usava) e os limites dela. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { customerText, parseLimit } from '@/modules/google_ads/rules'
import { googleAdsService } from '@/modules/google_ads/service'
import type { GoogleAdsAccount, GoogleAdsPerson } from '@/modules/google_ads/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ person: GoogleAdsPerson | null; accounts: GoogleAdsAccount[] }>()
const emit = defineEmits<{ saved: [] }>()

const chosen = ref<Record<string, boolean>>({})
const daily = ref('')
const monthly = ref('')
const busy = ref(false)

watch(
  () => props.person,
  (person) => {
    chosen.value = Object.fromEntries((person?.account_ids ?? []).map((accountId) => [accountId, true]))
    daily.value = person?.daily_limit ?? ''
    monthly.value = person?.monthly_limit ?? ''
  },
  { immediate: true },
)

const dailyValue = computed(() => parseLimit(daily.value))
const monthlyValue = computed(() => parseLimit(monthly.value))

/** Quem usa a conta hoje, quando é outra pessoa (a conta sai dela ao salvar). */
function otherHolder(account: GoogleAdsAccount): string | null {
  if (!account.holder || account.holder.id === props.person?.person.id) return null
  return account.holder.name
}

/** Grava as contas e os limites da pessoa. */
async function save() {
  if (!props.person || dailyValue.value === undefined || monthlyValue.value === undefined) return
  busy.value = true
  try {
    await googleAdsService.setPerson(props.person.person.id, {
      account_ids: Object.entries(chosen.value)
        .filter(([, picked]) => picked)
        .map(([accountId]) => accountId),
      daily_limit: dailyValue.value,
      monthly_limit: monthlyValue.value,
    })
    toast.success(t('gads.person.saved'))
    emit('saved')
    open.value = false
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <Dialog v-model:open="open" :title="person?.person.name ?? ''" :desc="t('gads.person.desc')" class="max-w-[560px]">
    <div v-if="person" class="grid gap-5">
      <fieldset class="grid gap-2">
        <legend class="mb-2 text-[14px] font-medium">{{ t('gads.person.accounts') }}</legend>
        <p v-if="accounts.length === 0" class="text-[13px] text-muted-foreground">{{ t('gads.accounts.empty') }}</p>
        <div v-for="account in accounts" :key="account.id" class="grid gap-0.5">
          <Checkbox :id="`gads-person-${account.id}`" v-model="chosen[account.id]" :label="account.name" :disabled="account.status !== 'enabled'" />
          <p class="pl-6 text-[12px] text-muted-foreground">
            <span class="font-mono">{{ customerText(account.customer_id) }}</span> · {{ account.currency }}
            <template v-if="otherHolder(account)"> · {{ t(chosen[account.id] ? 'gads.person.leaves' : 'gads.person.today', { name: otherHolder(account)! }) }}</template>
          </p>
        </div>
      </fieldset>
      <div class="grid gap-4 sm:grid-cols-2">
        <Field id="gads-person-daily" :label="t('gads.person.daily')" :error="dailyValue === undefined && t('gads.limitInvalid')">
          <Input id="gads-person-daily" v-model="daily" inputmode="decimal" :placeholder="t('gads.noLimit')" />
        </Field>
        <Field id="gads-person-monthly" :label="t('gads.person.monthly')" :error="monthlyValue === undefined && t('gads.limitInvalid')">
          <Input id="gads-person-monthly" v-model="monthly" inputmode="decimal" :placeholder="t('gads.noLimit')" />
        </Field>
      </div>
      <p class="text-[13px] text-muted-foreground">{{ t('gads.person.limitHint') }}</p>
    </div>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button :disabled="busy || dailyValue === undefined || monthlyValue === undefined" @click="save">{{ t('common.save') }}</Button>
    </template>
  </Dialog>
</template>
