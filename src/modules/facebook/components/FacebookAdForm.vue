<script setup lang="ts">
/** Um anúncio do rascunho: Página, Instagram, formato e mídia, até 5 textos e 5 títulos, caminho no site e botão; os UTMs entram sozinhos. */
import { computed, ref, watch } from 'vue'
import { Plus, Trash2 } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Segmented from '@/components/ui/Segmented.vue'
import { t, type Key } from '@/lib/i18n'
import FacebookMediaField from '@/modules/facebook/components/FacebookMediaField.vue'
import { CALLS_TO_ACTION, FORMATS, MAX_CARDS, MAX_TEXTS, MIN_CARDS, UTM_TAGS } from '@/modules/facebook/draft-rules'
import { facebookService } from '@/modules/facebook/service'
import type { FacebookAdFormat, FacebookAdInput, FacebookCardInput, FacebookOption } from '@/modules/facebook/types'

const ad = defineModel<FacebookAdInput>({ required: true })
const props = defineProps<{ accountId: string }>()

const pages = ref<FacebookOption[]>([])
const instagram = ref<FacebookOption[]>([])

const pageOptions = computed(() => [{ value: '', label: t('fb.create.pickPage') }, ...pages.value.map((page) => ({ value: page.id, label: page.name }))])
const instagramOptions = computed(() => [{ value: '', label: t('fb.create.usePage') }, ...instagram.value.map((profile) => ({ value: profile.id, label: profile.name }))])
const buttonOptions = computed(() => CALLS_TO_ACTION.map((action) => ({ value: action, label: t(`fb.cta.${action}` as Key) })))
const formatOptions = computed(() => FORMATS.map((format) => ({ value: format, label: t(`fb.format.${format}` as Key) })))
const format = computed({ get: () => ad.value.format, set: (value: string) => pickFormat(value as FacebookAdFormat) })

/** Muda campos do anúncio. */
function patch(changes: Partial<FacebookAdInput>) {
  ad.value = { ...ad.value, ...changes }
}

/** Troca o formato; o carrossel começa com os 2 cartões mínimos. */
function pickFormat(value: FacebookAdFormat) {
  const cards = value === 'carousel' && ad.value.cards.length < MIN_CARDS ? Array.from({ length: MIN_CARDS }, () => blankCard()) : ad.value.cards
  patch({ format: value, cards })
}

/** Um cartão vazio do carrossel. */
function blankCard(): FacebookCardInput {
  return { title: '', path: '/', image_hash: '' }
}

/** Muda um texto ou título pela posição. */
function setLine(field: 'texts' | 'titles', index: number, value: string) {
  patch({ [field]: ad.value[field].map((line, position) => (position === index ? value : line)) })
}

/** Tira um texto ou título (sempre fica um). */
function removeLine(field: 'texts' | 'titles', index: number) {
  if (ad.value[field].length > 1) patch({ [field]: ad.value[field].filter((_line, position) => position !== index) })
}

/** Muda um cartão do carrossel pela posição. */
function setCard(index: number, changes: Partial<FacebookCardInput>) {
  patch({ cards: ad.value.cards.map((card, position) => (position === index ? { ...card, ...changes } : card)) })
}

/** Busca as Páginas e as contas do Instagram da conta de anúncio. */
async function loadIdentity() {
  if (!props.accountId) return
  const [foundPages, foundInstagram] = await Promise.all([facebookService.options('pages', props.accountId).catch(() => []), facebookService.options('instagram', props.accountId).catch(() => [])])
  pages.value = foundPages
  instagram.value = foundInstagram
}

watch(() => props.accountId, loadIdentity, { immediate: true })
</script>

<template>
  <div class="contents">
    <div class="border-t p-6">
      <div class="text-[14px] font-medium">{{ t('fb.create.identity') }}</div>
      <p class="mt-1 text-[13px] text-muted-foreground">{{ t('fb.create.identityDesc') }}</p>
      <div class="mt-4 grid items-start gap-4 sm:grid-cols-2">
        <Field id="fb-ad-name" :label="t('fb.create.adName')">
          <Input id="fb-ad-name" :model-value="ad.name" maxlength="400" @update:model-value="patch({ name: $event })" />
        </Field>
        <Field id="fb-ad-page" :label="t('fb.create.page')" :error="!ad.page_id && t('fb.problem.ad_page_missing')">
          <NativeSelect id="fb-ad-page" :model-value="ad.page_id" :options="pageOptions" @update:model-value="patch({ page_id: $event })" />
        </Field>
        <Field id="fb-ad-ig" :label="t('fb.create.instagram')">
          <NativeSelect id="fb-ad-ig" :model-value="ad.instagram_id ?? ''" :options="instagramOptions" @update:model-value="patch({ instagram_id: $event || null })" />
        </Field>
      </div>
    </div>
    <div class="border-t p-6">
      <div class="text-[14px] font-medium">{{ t('fb.create.formatAndMedia') }}</div>
      <div class="mt-4 grid gap-4">
        <Segmented v-model="format" :label="t('fb.create.format')" :options="formatOptions" />
        <FacebookMediaField v-if="ad.format === 'image'" id="fb-ad-image" :model-value="ad.image_hash" :account-id="accountId" :label="t('fb.format.image')" @update:model-value="patch({ image_hash: $event })" />
        <FacebookMediaField v-else-if="ad.format === 'video'" id="fb-ad-video" video :model-value="ad.video_id" :account-id="accountId" :label="t('fb.format.video')" @update:model-value="patch({ video_id: $event })" />
        <div v-else class="grid gap-3">
          <div v-for="(card, index) in ad.cards" :key="index" class="grid gap-3 rounded-md border p-3">
            <div class="flex items-center justify-between text-[13px] font-medium">
              {{ t('fb.create.card', { n: index + 1 }) }}
              <Button v-if="ad.cards.length > MIN_CARDS" size="sm" variant="ghost" :aria-label="t('fb.create.removeCard', { n: index + 1 })" @click="patch({ cards: ad.cards.filter((_card, position) => position !== index) })"><Trash2 aria-hidden="true" /></Button>
            </div>
            <FacebookMediaField :id="`fb-card-${index}`" :model-value="card.image_hash || null" :account-id="accountId" :label="t('fb.format.image')" @update:model-value="setCard(index, { image_hash: $event ?? '' })" />
            <div class="grid items-start gap-3 sm:grid-cols-2">
              <Input :aria-label="t('fb.create.cardTitle', { n: index + 1 })" :placeholder="t('fb.create.cardTitlePlaceholder')" :model-value="card.title" @update:model-value="setCard(index, { title: $event })" />
              <Input :aria-label="t('fb.create.cardPath', { n: index + 1 })" class="font-mono text-[13px]" :model-value="card.path" @update:model-value="setCard(index, { path: $event })" />
            </div>
          </div>
          <Button v-if="ad.cards.length < MAX_CARDS" size="sm" variant="outline" class="w-fit" @click="patch({ cards: [...ad.cards, blankCard()] })"><Plus aria-hidden="true" />{{ t('fb.create.addCard') }}</Button>
          <p class="text-[13px] text-muted-foreground">{{ t('fb.create.cardsHint') }}</p>
        </div>
      </div>
    </div>
    <div class="border-t p-6">
      <div class="text-[14px] font-medium">{{ t('fb.create.texts') }}</div>
      <p class="mt-1 text-[13px] text-muted-foreground">{{ t('fb.create.textsDesc') }}</p>
      <div class="mt-4 grid gap-4">
        <Field v-for="(text, index) in ad.texts" :id="`fb-ad-text-${index}`" :key="`text-${index}`" :label="t('fb.create.text', { n: index + 1 })">
          <div class="flex gap-2">
            <textarea :id="`fb-ad-text-${index}`" rows="2" maxlength="2000" class="min-h-16 w-full rounded-md border border-input bg-background px-3 py-2 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" :value="text" @input="setLine('texts', index, ($event.target as HTMLTextAreaElement).value)" />
            <Button v-if="ad.texts.length > 1" size="icon" variant="ghost" :aria-label="t('fb.create.removeText', { n: index + 1 })" @click="removeLine('texts', index)"><Trash2 aria-hidden="true" /></Button>
          </div>
        </Field>
        <Button v-if="ad.texts.length < MAX_TEXTS" size="sm" variant="outline" class="w-fit" @click="patch({ texts: [...ad.texts, ''] })"><Plus aria-hidden="true" />{{ t('fb.create.addText') }}</Button>
        <div class="grid items-start gap-4 sm:grid-cols-2">
          <div class="grid gap-2">
            <Field v-for="(title, index) in ad.titles" :id="`fb-ad-title-${index}`" :key="`title-${index}`" :label="t('fb.create.headline', { n: index + 1 })">
              <div class="flex gap-2">
                <Input :id="`fb-ad-title-${index}`" :model-value="title" maxlength="400" @update:model-value="setLine('titles', index, $event)" />
                <Button v-if="ad.titles.length > 1" size="icon" variant="ghost" :aria-label="t('fb.create.removeTitle', { n: index + 1 })" @click="removeLine('titles', index)"><Trash2 aria-hidden="true" /></Button>
              </div>
            </Field>
            <Button v-if="ad.titles.length < MAX_TEXTS" size="sm" variant="outline" class="w-fit" @click="patch({ titles: [...ad.titles, ''] })"><Plus aria-hidden="true" />{{ t('fb.create.addTitle') }}</Button>
          </div>
          <Field id="fb-ad-desc" :label="t('fb.create.description')">
            <Input id="fb-ad-desc" :model-value="ad.description" @update:model-value="patch({ description: $event })" />
          </Field>
        </div>
      </div>
    </div>
    <div class="border-t p-6">
      <div class="text-[14px] font-medium">{{ t('fb.create.destination') }}</div>
      <div class="mt-4 grid gap-4">
        <Field id="fb-ad-path" :label="t('fb.create.path')" :hint="t('fb.create.pathHint')" :error="!ad.path.startsWith('/') && t('fb.problem.ad_path_invalid')">
          <Input id="fb-ad-path" class="font-mono text-[13px]" :model-value="ad.path" @update:model-value="patch({ path: $event })" />
        </Field>
        <div class="grid items-start gap-4 sm:grid-cols-2">
          <Field id="fb-ad-display" :label="t('fb.create.displayLink')">
            <Input id="fb-ad-display" :model-value="ad.display_link" @update:model-value="patch({ display_link: $event })" />
          </Field>
          <Field id="fb-ad-cta" :label="t('fb.create.button')">
            <NativeSelect id="fb-ad-cta" :model-value="ad.call_to_action" :options="buttonOptions" @update:model-value="patch({ call_to_action: $event })" />
          </Field>
        </div>
        <div class="rounded-md border bg-muted p-3 text-[13px]">
          <div class="text-muted-foreground">{{ t('fb.create.utms') }}</div>
          <code class="mt-1 block break-all font-mono">{{ UTM_TAGS }}</code>
        </div>
      </div>
    </div>
  </div>
</template>
