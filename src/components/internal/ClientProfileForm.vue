<script setup lang="ts">
/** Campos de contato e indicação do cadastro de cliente, como no Genius. */
import { computed } from 'vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { percentageOk } from '@/lib/clients'
import { t } from '@/lib/i18n'
import type { ClientProfileInput } from '@/lib/types'

const profile = defineModel<ClientProfileInput>({ required: true })
const props = defineProps<{ idPrefix: string; referrers: { id: string; name: string }[] }>()

const referrerOptions = computed(() => [
  { value: '', label: t('int.nobody') },
  ...props.referrers.map((referrer) => ({ value: referrer.id, label: referrer.name })),
])
const localeOptions = [
  { value: 'pt', label: 'Português' },
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
]
const referrer = computed({
  get: () => profile.value.referred_by_company_id ?? '',
  set: (value: string) => (profile.value.referred_by_company_id = value || null),
})
const phone = computed({
  get: () => profile.value.phone ?? '',
  set: (value: string) => (profile.value.phone = value || null),
})
const ddi = computed({
  get: () => profile.value.phone_ddi ?? '',
  set: (value: string) => (profile.value.phone_ddi = value || null),
})
const percentage = computed({
  get: () => profile.value.referral_percentage ?? '',
  set: (value: string) => (profile.value.referral_percentage = value || null),
})
const notes = computed({
  get: () => profile.value.notes ?? '',
  set: (value: string) => (profile.value.notes = value || null),
})
const percentageBad = computed(() => !!profile.value.referred_by_company_id && !percentageOk(profile.value.referral_percentage))
/** Id do campo com o prefixo do formulário, para dois formulários na mesma tela. */
const field = (name: string) => `${props.idPrefix}-${name}`
</script>

<template>
  <div class="grid gap-6">
    <fieldset class="grid gap-4 md:grid-cols-2">
      <legend class="mb-3 text-[13px] font-medium text-muted-foreground">{{ t('int.section.contact') }}</legend>
      <Field :id="field('first')" :label="t('int.firstName')">
        <Input :id="field('first')" v-model="profile.first_name" maxlength="120" autocomplete="off" />
      </Field>
      <Field :id="field('last')" :label="t('int.lastName')">
        <Input :id="field('last')" v-model="profile.last_name" maxlength="120" autocomplete="off" />
      </Field>
      <Field :id="field('email')" :label="t('int.contactEmail')" :hint="t('int.contactEmailHint')">
        <Input :id="field('email')" v-model="profile.email" type="email" autocomplete="off" placeholder="dono@site.com" />
      </Field>
      <div class="grid grid-cols-[96px_1fr] gap-3">
        <Field :id="field('ddi')" :label="t('int.ddi')">
          <Input :id="field('ddi')" v-model="ddi" class="tnum" maxlength="5" />
        </Field>
        <Field :id="field('phone')" :label="t('int.phone')">
          <Input :id="field('phone')" v-model="phone" class="tnum" inputmode="tel" maxlength="30" />
        </Field>
      </div>
      <Field :id="field('locale')" :label="t('int.locale')">
        <NativeSelect :id="field('locale')" v-model="profile.locale" :options="localeOptions" />
      </Field>
    </fieldset>
    <fieldset class="grid gap-4 md:grid-cols-[1fr_160px]">
      <legend class="mb-3 text-[13px] font-medium text-muted-foreground">{{ t('int.section.referral') }}</legend>
      <Field :id="field('referrer')" :label="t('int.referredBy')">
        <NativeSelect :id="field('referrer')" v-model="referrer" :options="referrerOptions" />
      </Field>
      <Field :id="field('percentage')" :label="t('int.commission')" :hint="t('int.commissionHint')">
        <Input :id="field('percentage')" v-model="percentage" class="tnum" inputmode="decimal" :disabled="!profile.referred_by_company_id" :invalid="percentageBad" />
      </Field>
    </fieldset>
    <Field :id="field('notes')" :label="t('int.notes')">
      <textarea
        :id="field('notes')"
        v-model="notes"
        maxlength="300"
        rows="2"
        class="w-full rounded-md border border-input bg-background px-3 py-2 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
    </Field>
  </div>
</template>
