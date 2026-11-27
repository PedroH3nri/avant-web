<script setup lang="ts">
/** As imagens de um anúncio responsivo: cada arquivo vai direto para a conta no Google Ads e o campo guarda só o recurso que voltou. */
import { ref } from 'vue'
import { ImageUp, X } from 'lucide-vue-next'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { googleAdsService } from '@/modules/google_ads/service'

const model = defineModel<string[]>({ required: true })
const props = defineProps<{ id: string; label: string; hint: string; accountId: string; max: number; disabled?: boolean }>()

const IMAGE_TYPES = 'image/jpeg,image/png,image/gif'
const input = ref<HTMLInputElement | null>(null)
const names = ref<Record<string, string>>({})
const sending = ref(false)
const failure = ref<string | null>(null)

/** Manda os arquivos escolhidos para a conta, um por vez, e guarda os recursos que o Google devolveu. */
async function send(event: Event) {
  const files = Array.from((event.target as HTMLInputElement).files ?? []).slice(0, props.max - model.value.length)
  if (!files.length || !props.accountId) return
  sending.value = true
  failure.value = null
  try {
    for (const file of files) {
      const media = await googleAdsService.uploadImage(props.accountId, file)
      names.value = { ...names.value, [media.asset]: file.name }
      model.value = [...model.value, media.asset]
    }
  } catch (error) {
    failure.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  } finally {
    sending.value = false
    if (input.value) input.value.value = ''
  }
}

/** Tira a imagem do anúncio (ela continua na biblioteca da conta). */
function remove(asset: string) {
  model.value = model.value.filter((item) => item !== asset)
}
</script>

<template>
  <div class="grid gap-2">
    <span class="text-[13px] font-medium text-muted-foreground">{{ label }}</span>
    <input :id="id" ref="input" type="file" multiple class="sr-only" :accept="IMAGE_TYPES" :disabled="disabled || sending || !accountId" @change="send" />
    <ul v-if="model.length" class="grid gap-1.5">
      <li v-for="(asset, position) in model" :key="asset" class="flex items-center justify-between gap-3 rounded-md border px-3 py-1.5 text-[13px]">
        <span class="min-w-0 truncate">{{ names[asset] ?? t('gads.create.imageN', { n: position + 1 }) }}</span>
        <button type="button" :aria-label="t('gads.create.remove', { name: names[asset] ?? asset })" :disabled="disabled" class="rounded p-1 text-muted-foreground hover:text-foreground" @click="remove(asset)"><X class="size-3.5" aria-hidden="true" /></button>
      </li>
    </ul>
    <button
      v-if="model.length < max"
      type="button"
      :disabled="disabled || sending || !accountId"
      class="flex h-20 w-full flex-col items-center justify-center gap-1 rounded-md border border-dashed text-[13px] text-muted-foreground hover:bg-muted disabled:opacity-50"
      @click="input?.click()"
    >
      <ImageUp class="size-4" aria-hidden="true" />
      {{ sending ? t('gads.create.imageSending') : t('gads.create.imagePick') }}
      <span class="text-[12px]">{{ hint }}</span>
    </button>
    <p v-if="failure" class="text-[13px] text-bad">{{ failure }}</p>
  </div>
</template>
