<script setup lang="ts">
/** O anúncio responsivo do tipo da campanha: o caminho no site da conta, os títulos e as descrições com contador e, fora da Pesquisa, o nome da empresa e as imagens. */
import { computed } from 'vue'
import { Plus } from 'lucide-vue-next'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import { t } from '@/lib/i18n'
import GoogleAdsImagesField from '@/modules/google_ads/components/GoogleAdsImagesField.vue'
import { MAX_BUSINESS_NAME, MAX_DESCRIPTION, MAX_DISPLAY_PATH, MAX_LONG_HEADLINE, descriptionLimits, filled, headlineLimits } from '@/modules/google_ads/draft-rules'
import type { GoogleAdsAdInput, GoogleAdsChannel } from '@/modules/google_ads/types'

const ad = defineModel<GoogleAdsAdInput>({ required: true })
const props = defineProps<{ channel: GoogleAdsChannel; accountId: string; siteUrl: string | null; idPrefix: string }>()

const MAX_IMAGES = 15
const MAX_LOGOS = 5
const heads = computed(() => headlineLimits(props.channel))
const descs = computed(() => descriptionLimits(props.channel))
const strong = computed(() => filled(ad.value.headlines).length >= 8)

/** Muda campos do anúncio. */
function patch(changes: Partial<GoogleAdsAdInput>) {
  ad.value = { ...ad.value, ...changes }
}

/** Troca um título ou uma descrição pela posição. */
function setText(field: 'headlines' | 'descriptions', index: number, value: string) {
  patch({ [field]: ad.value[field].map((item, position) => (position === index ? value : item)) })
}

/** O contador de caracteres de um texto, para a dica do campo. */
function counter(value: string, max: number): string {
  return t('gads.create.chars', { used: value.length, max })
}
</script>

<template>
  <div class="grid gap-4">
    <Field :id="`${idPrefix}-path`" :label="t('gads.create.finalUrl')" :hint="t('gads.create.finalUrlHint')">
      <div class="flex items-center gap-1 rounded-md border border-input bg-[hsl(var(--field))] pl-3 focus-within:ring-2 focus-within:ring-ring">
        <span class="shrink-0 font-mono text-[13px] text-muted-foreground">{{ siteUrl ?? t('gads.create.noSite') }}</span>
        <input :id="`${idPrefix}-path`" class="h-10 min-w-0 flex-1 bg-transparent pr-3 font-mono text-[13px] outline-none" :value="ad.link_path" maxlength="1024" autocomplete="off" @input="patch({ link_path: ($event.target as HTMLInputElement).value })" />
      </div>
    </Field>
    <div v-if="channel === 'SEARCH'" class="grid items-start gap-4 sm:grid-cols-2">
      <Field :id="`${idPrefix}-path1`" :label="t('gads.create.path1')" :hint="counter(ad.path1, MAX_DISPLAY_PATH)">
        <Input :id="`${idPrefix}-path1`" :model-value="ad.path1" :maxlength="MAX_DISPLAY_PATH" @update:model-value="patch({ path1: $event })" />
      </Field>
      <Field :id="`${idPrefix}-path2`" :label="t('gads.create.path2')" :hint="counter(ad.path2, MAX_DISPLAY_PATH)">
        <Input :id="`${idPrefix}-path2`" :model-value="ad.path2" :maxlength="MAX_DISPLAY_PATH" @update:model-value="patch({ path2: $event })" />
      </Field>
    </div>
    <template v-else>
      <Field :id="`${idPrefix}-business`" :label="t('gads.create.businessName')" :hint="counter(ad.business_name, MAX_BUSINESS_NAME)">
        <Input :id="`${idPrefix}-business`" :model-value="ad.business_name" :maxlength="MAX_BUSINESS_NAME" @update:model-value="patch({ business_name: $event })" />
      </Field>
      <div class="grid items-start gap-4 sm:grid-cols-3">
        <GoogleAdsImagesField :id="`${idPrefix}-landscape`" :model-value="ad.marketing_images" @update:model-value="patch({ marketing_images: $event })" :label="t('gads.create.landscape')" :hint="t('gads.create.landscapeHint')" :account-id="accountId" :max="MAX_IMAGES" />
        <GoogleAdsImagesField :id="`${idPrefix}-square`" :model-value="ad.square_images" @update:model-value="patch({ square_images: $event })" :label="t('gads.create.square')" :hint="t('gads.create.squareHint')" :account-id="accountId" :max="MAX_IMAGES" />
        <GoogleAdsImagesField :id="`${idPrefix}-logo`" :model-value="ad.logo_images" @update:model-value="patch({ logo_images: $event })" :label="channel === 'DEMAND_GEN' ? t('gads.create.logo') : t('gads.create.logoOptional')" :hint="t('gads.create.logoHint')" :account-id="accountId" :max="MAX_LOGOS" />
      </div>
    </template>
    <div class="grid gap-3 sm:grid-cols-2">
      <Field v-for="(text, index) in ad.headlines" :id="`${idPrefix}-h${index}`" :key="`h${index}`" :label="t('gads.create.headlineN', { n: index + 1 })" :hint="counter(text, heads.chars)" :error="text.length > heads.chars && t('gads.create.tooLong')">
        <Input :id="`${idPrefix}-h${index}`" :model-value="text" @update:model-value="setText('headlines', index, $event)" />
      </Field>
    </div>
    <button v-if="ad.headlines.length < heads.most" type="button" class="flex w-fit items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground" @click="patch({ headlines: [...ad.headlines, ''] })"><Plus class="size-3.5" aria-hidden="true" />{{ t('gads.create.addHeadline') }}</button>
    <Field v-if="channel === 'DISPLAY'" :id="`${idPrefix}-long`" :label="t('gads.create.longHeadline')" :hint="counter(ad.long_headline, MAX_LONG_HEADLINE)">
      <Input :id="`${idPrefix}-long`" :model-value="ad.long_headline" :maxlength="MAX_LONG_HEADLINE" @update:model-value="patch({ long_headline: $event })" />
    </Field>
    <div class="grid gap-3">
      <Field v-for="(text, index) in ad.descriptions" :id="`${idPrefix}-d${index}`" :key="`d${index}`" :label="t('gads.create.descriptionN', { n: index + 1 })" :hint="counter(text, MAX_DESCRIPTION)" :error="text.length > MAX_DESCRIPTION && t('gads.create.tooLong')">
        <Input :id="`${idPrefix}-d${index}`" :model-value="text" @update:model-value="setText('descriptions', index, $event)" />
      </Field>
    </div>
    <button v-if="ad.descriptions.length < descs.most" type="button" class="flex w-fit items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground" @click="patch({ descriptions: [...ad.descriptions, ''] })"><Plus class="size-3.5" aria-hidden="true" />{{ t('gads.create.addDescription') }}</button>
    <p v-if="channel === 'SEARCH'" class="text-[13px]" :class="strong ? 'text-muted-foreground' : 'text-ochre'">{{ strong ? t('gads.create.strengthGood') : t('gads.create.strengthWeak') }}</p>
  </div>
</template>
