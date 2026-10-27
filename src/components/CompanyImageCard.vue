<script setup lang="ts">
/** Cartão da imagem da Empresa: prévia, enviar, trocar e remover, como no protótipo. */
import { ref } from 'vue'
import { toast } from 'vue-sonner'
import CompanyIcon from '@/components/CompanyIcon.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { ACCEPTED_IMAGES, imageProblem } from '@/lib/images'

const props = withDefaults(
  defineProps<{
    name: string
    imageUrl: string | null
    /** A equipe Groone trocando a imagem de um cliente. */
    staff?: boolean
    readonly?: boolean
    save: (file: File) => Promise<void>
    remove: () => Promise<void>
  }>(),
  { staff: false, readonly: false },
)

const input = ref<HTMLInputElement | null>(null)
const problem = ref('')
const busy = ref(false)

/** Confere o arquivo escolhido e envia; o erro aparece no rodapé do cartão. */
async function pick(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  target.value = ''
  if (!file) return
  problem.value = imageProblem(file)
  if (problem.value) return
  await run(() => props.save(file), props.staff ? t('image.changedByGroone') : t('image.changedHint'), t('image.changed'))
}

/** Tira a imagem; volta a inicial do nome. */
async function drop() {
  problem.value = ''
  await run(props.remove, t('image.removedHint'), t('image.removed'))
}

/** Roda a ação com o botão ocupado e avisa o resultado. */
async function run(action: () => Promise<void>, description: string, title: string) {
  busy.value = true
  try {
    await action()
    toast.success(title, { description })
  } catch (error) {
    problem.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <Card :title="t('image.title')" :desc="staff ? t('image.descStaff', { name }) : t('image.desc')">
    <div class="flex items-center gap-4">
      <CompanyIcon :name="name" :image-url="imageUrl" :size="64" />
      <div class="grid gap-2 text-[13px] text-muted-foreground">
        <span>{{ t('image.preview') }}</span>
        <span class="flex items-center gap-2 text-[14px] font-medium text-foreground">
          <CompanyIcon :name="name" :image-url="imageUrl" :size="20" />{{ name }}
        </span>
      </div>
    </div>
    <input ref="input" type="file" :accept="ACCEPTED_IMAGES.join(',')" class="sr-only" tabindex="-1" aria-hidden="true" @change="pick" />
    <template #note>
      <span v-if="problem" class="text-bad" role="alert">{{ problem }}</span>
      <template v-else>{{ readonly ? t('image.readonly') : t('image.note') }}</template>
    </template>
    <template v-if="!readonly" #footer>
      <Button v-if="imageUrl" size="sm" variant="outline" :disabled="busy" @click="drop">{{ t('image.remove') }}</Button>
      <Button size="sm" :loading="busy" @click="input?.click()">{{ imageUrl ? t('image.change') : t('image.upload') }}</Button>
    </template>
  </Card>
</template>
