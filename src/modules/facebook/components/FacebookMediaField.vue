<script setup lang="ts">
/** Escolher a imagem ou o vídeo do anúncio: o arquivo vai direto para a conta no Facebook e o campo guarda só o hash ou o id. */
import { ref } from 'vue'
import { ImageUp } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { facebookService } from '@/modules/facebook/service'

const model = defineModel<string | null>({ required: true })
const props = defineProps<{ id: string; label: string; accountId: string; video?: boolean; disabled?: boolean }>()

const IMAGE_TYPES = 'image/jpeg,image/png'
const VIDEO_TYPES = 'video/mp4,video/quicktime'
const input = ref<HTMLInputElement | null>(null)
const fileName = ref('')
const sending = ref(false)
const failure = ref<string | null>(null)

/** Manda o arquivo escolhido para a conta e guarda a referência que o Facebook devolveu. */
async function send(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file || !props.accountId) return
  sending.value = true
  failure.value = null
  try {
    const media = await facebookService.uploadMedia(props.accountId, file)
    model.value = media.ref
    fileName.value = file.name
  } catch (error) {
    failure.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  } finally {
    sending.value = false
    if (input.value) input.value.value = ''
  }
}
</script>

<template>
  <div class="grid gap-2">
    <span class="text-[13px] font-medium text-muted-foreground">{{ label }}</span>
    <input :id="id" ref="input" type="file" class="sr-only" :accept="video ? VIDEO_TYPES : IMAGE_TYPES" :disabled="disabled || sending || !accountId" @change="send" />
    <div v-if="model" class="flex items-center justify-between gap-3 rounded-md border px-3 py-2 text-[13px]">
      <span class="min-w-0 truncate">{{ fileName || t('fb.create.mediaSent') }}</span>
      <Button size="sm" variant="ghost" :loading="sending" :disabled="disabled" @click="input?.click()">{{ t('fb.create.mediaChange') }}</Button>
    </div>
    <button
      v-else
      type="button"
      :disabled="disabled || sending || !accountId"
      class="flex h-24 w-full flex-col items-center justify-center gap-1 rounded-md border border-dashed text-[13px] text-muted-foreground hover:bg-muted disabled:opacity-50"
      @click="input?.click()"
    >
      <ImageUp class="size-4" aria-hidden="true" />
      {{ sending ? t('fb.create.mediaSending') : t('fb.create.mediaPick') }}
      <span class="text-[12px]">{{ video ? t('fb.create.mediaVideoHint') : t('fb.create.mediaImageHint') }}</span>
    </button>
    <p v-if="failure" class="text-[13px] text-bad">{{ failure }}</p>
  </div>
</template>
