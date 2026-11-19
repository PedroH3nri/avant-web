<script setup lang="ts">
/** Configurar uma conta do Google Ads: o site da receita, a pessoa que usa (uma só) e os limites diário e mensal. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Segmented from '@/components/ui/Segmented.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { parseLimit } from '@/modules/google_ads/rules'
import { googleAdsService } from '@/modules/google_ads/service'
import type { GoogleAdsAccount, GoogleAdsOnLimit, GoogleAdsPerson } from '@/modules/google_ads/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ account: GoogleAdsAccount | null; people: GoogleAdsPerson[]; sites: { id: string; domain: string }[] }>()
const emit = defineEmits<{ saved: [account: GoogleAdsAccount] }>()

const siteId = ref('')
const userId = ref('')
const daily = ref('')
const monthly = ref('')
const onLimit = ref<GoogleAdsOnLimit>('warn')
const busy = ref(false)

watch(
  () => props.account,
  (account) => {
    siteId.value = account?.site_id ?? ''
    userId.value = account?.holder?.id ?? ''
    daily.value = account?.daily_limit ?? ''
    monthly.value = account?.monthly_limit ?? ''
    onLimit.value = account?.on_limit ?? 'warn'
  },
  { immediate: true },
)

const siteOptions = computed(() => [{ value: '', label: t('gads.account.noSite') }, ...props.sites.map((site) => ({ value: site.id, label: site.domain }))])
const personOptions = computed(() => [{ value: '', label: t('gads.account.ownerOnly') }, ...props.people.map((item) => ({ value: item.person.id, label: item.person.name }))])
const dailyValue = computed(() => parseLimit(daily.value))
const monthlyValue = computed(() => parseLimit(monthly.value))
const onLimitOptions = computed(() => [
  { value: 'warn', label: t('gads.account.onLimit.warn') },
  { value: 'pause', label: t('gads.account.onLimit.pause') },
])

/** Grava a conta e avisa a tela. */
async function save() {
  if (!props.account || dailyValue.value === undefined || monthlyValue.value === undefined) return
  busy.value = true
  try {
    const saved = await googleAdsService.updateAccount(props.account.id, {
      site_id: siteId.value || null,
      user_id: userId.value || null,
      daily_limit: dailyValue.value,
      monthly_limit: monthlyValue.value,
      on_limit: onLimit.value,
    })
    toast.success(t('gads.account.saved'))
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
  <Dialog v-model:open="open" :title="account?.name ?? ''" :desc="t('gads.account.desc')" class="max-w-[520px]">
    <div v-if="account" class="grid gap-4">
      <Field id="gads-site" :label="t('gads.account.site')" :hint="t('gads.account.siteHint')">
        <NativeSelect id="gads-site" v-model="siteId" :options="siteOptions" />
      </Field>
      <Field id="gads-holder" :label="t('gads.account.holder')" :hint="t('gads.account.holderHint')">
        <NativeSelect id="gads-holder" v-model="userId" :options="personOptions" />
      </Field>
      <div class="grid gap-4 sm:grid-cols-2">
        <Field id="gads-daily" :label="t('gads.account.daily', { currency: account.currency })" :error="dailyValue === undefined && t('gads.limitInvalid')">
          <Input id="gads-daily" v-model="daily" inputmode="decimal" :placeholder="t('gads.noLimit')" />
        </Field>
        <Field id="gads-monthly" :label="t('gads.account.monthly', { currency: account.currency })" :error="monthlyValue === undefined && t('gads.limitInvalid')">
          <Input id="gads-monthly" v-model="monthly" inputmode="decimal" :placeholder="t('gads.noLimit')" />
        </Field>
      </div>
      <div class="grid gap-2">
        <span class="text-[14px] font-medium">{{ t('gads.account.onLimit') }}</span>
        <Segmented v-model="onLimit" :label="t('gads.account.onLimit')" :options="onLimitOptions" />
        <p class="text-[13px] text-muted-foreground">{{ t('gads.account.onLimitHint') }}</p>
      </div>
    </div>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button :disabled="busy || dailyValue === undefined || monthlyValue === undefined" @click="save">{{ t('common.save') }}</Button>
    </template>
  </Dialog>
</template>
