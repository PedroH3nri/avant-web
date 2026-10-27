<script setup lang="ts">
/** Cartão da foto de perfil: prévia, enviar, trocar e remover. A foto aparece na equipe e no menu. */
import { computed, ref } from 'vue'
import { toast } from 'vue-sonner'
import Avatar from '@/components/ui/Avatar.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { ACCEPTED_IMAGES, imageProblem } from '@/lib/images'
import type { UserRef } from '@/lib/types'
import { accountService } from '@/modules/account/service'
import { useSession } from '@/stores/session'

const session = useSession()
const input = ref<HTMLInputElement | null>(null)
const problem = ref('')
const busy = ref(false)
const name = computed(() => session.me?.user.name ?? '')
const imageUrl = computed(() => session.me?.user.image_url ?? null)

/** Confere o arquivo escolhido e envia; o erro aparece no rodapé do cartão. */
async function pick(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  target.value = ''
  if (!file) return
  problem.value = imageProblem(file)
  if (problem.value) return
  await run(() => accountService.setImage(file), t('photo.changed'), t('photo.changedHint'))
}

/** Tira a foto; voltam as iniciais do nome. */
async function drop() {
  problem.value = ''
  await run(accountService.removeImage, t('photo.removed'), t('photo.removedHint'))
}

/** Roda a ação com o botão ocupado, atualiza a pessoa da sessão e avisa o resultado. */
async function run(action: () => Promise<UserRef>, title: string, description: string) {
  busy.value = true
  try {
    session.setUser(await action())
    toast.success(title, { description })
  } catch (error) {
    problem.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <Card :title="t('photo.title')" :desc="t('photo.desc')">
    <div class="flex items-center gap-4">
      <Avatar :name="name" :image-url="imageUrl" :size="64" />
      <div class="grid gap-2 text-[13px] text-muted-foreground">
        <span>{{ t('photo.preview') }}</span>
        <span class="flex items-center gap-2 text-[14px] font-medium text-foreground">
          <Avatar :name="name" :image-url="imageUrl" :size="24" />{{ name }}
        </span>
      </div>
    </div>
    <input ref="input" type="file" :accept="ACCEPTED_IMAGES.join(',')" class="sr-only" tabindex="-1" aria-hidden="true" @change="pick" />
    <template #note>
      <span v-if="problem" class="text-bad" role="alert">{{ problem }}</span>
      <template v-else>{{ t('image.note') }}</template>
    </template>
    <template #footer>
      <Button v-if="imageUrl" size="sm" variant="outline" :disabled="busy" @click="drop">{{ t('image.remove') }}</Button>
      <Button size="sm" :loading="busy" @click="input?.click()">{{ imageUrl ? t('photo.change') : t('photo.upload') }}</Button>
    </template>
  </Card>
</template>
