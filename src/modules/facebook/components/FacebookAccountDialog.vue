<script setup lang="ts">
/** Configurar uma conta de anúncio: o site da receita, a pessoa que usa (uma só) e os limites diário e mensal. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'
import Segmented from '@/components/ui/Segmented.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { parseLimit } from '@/modules/facebook/rules'
import { facebookService } from '@/modules/facebook/service'
import type { FacebookAccount, FacebookOnLimit, FacebookPerson } from '@/modules/facebook/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ account: FacebookAccount | null; people: FacebookPerson[]; sites: { id: string; domain: string }[] }>()
const emit = defineEmits<{ saved: [account: FacebookAccount] }>()

const siteId = ref('')
const userId = ref('')
const daily = ref('')
const monthly = ref('')
const onLimit = ref<FacebookOnLimit>('warn')
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

const siteOptions = computed(() => [{ value: '', label: t('fb.account.noSite') }, ...props.sites.map((site) => ({ value: site.id, label: site.domain }))])
const personOptions = computed(() => [{ value: '', label: t('fb.account.ownerOnly') }, ...props.people.map((item) => ({ value: item.person.id, label: item.person.name }))])
const dailyValue = computed(() => parseLimit(daily.value))
const monthlyValue = computed(() => parseLimit(monthly.value))
const onLimitOptions = computed(() => [
  { value: 'warn', label: t('fb.account.onLimit.warn') },
  { value: 'pause', label: t('fb.account.onLimit.pause') },
])

/** Grava a conta e avisa a tela. */
async function save() {
  if (!props.account || dailyValue.value === undefined || monthlyValue.value === undefined) return
  busy.value = true
  try {
    const saved = await facebookService.updateAccount(props.account.id, {
      site_id: siteId.value || null,
      user_id: userId.value || null,
      daily_limit: dailyValue.value,
      monthly_limit: monthlyValue.value,
      on_limit: onLimit.value,
    })
    toast.success(t('fb.account.saved'))
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
  <Dialog v-model:open="open" :title="account?.name ?? ''" :desc="t('fb.account.desc')" class="max-w-[520px]">
    <div v-if="account" class="grid gap-4">
      <Field id="fb-site" :label="t('fb.account.site')" :hint="t('fb.account.siteHint')">
        <Select id="fb-site" v-model="siteId" :options="siteOptions" />
      </Field>
      <Field id="fb-holder" :label="t('fb.account.holder')" :hint="t('fb.account.holderHint')">
        <Select id="fb-holder" v-model="userId" :options="personOptions" />
      </Field>
      <div class="grid gap-4 sm:grid-cols-2">
        <Field id="fb-daily" :label="t('fb.account.daily', { currency: account.currency })" :error="dailyValue === undefined && t('fb.limitInvalid')">
          <Input id="fb-daily" v-model="daily" inputmode="decimal" :placeholder="t('fb.noLimit')" />
        </Field>
        <Field id="fb-monthly" :label="t('fb.account.monthly', { currency: account.currency })" :error="monthlyValue === undefined && t('fb.limitInvalid')">
          <Input id="fb-monthly" v-model="monthly" inputmode="decimal" :placeholder="t('fb.noLimit')" />
        </Field>
      </div>
      <div class="grid gap-2">
        <span class="text-[14px] font-medium">{{ t('fb.account.onLimit') }}</span>
        <Segmented v-model="onLimit" :label="t('fb.account.onLimit')" :options="onLimitOptions" />
        <p class="text-[13px] text-muted-foreground">{{ t('fb.account.onLimitHint') }}</p>
      </div>
    </div>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button :disabled="busy || dailyValue === undefined || monthlyValue === undefined" @click="save">{{ t('common.save') }}</Button>
    </template>
  </Dialog>
</template>
