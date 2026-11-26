<script setup lang="ts">
/** A página pública do link de descadastro: tira da lista ao abrir e deixa voltar a receber. */
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { toast } from 'vue-sonner'
import { MailX } from 'lucide-vue-next'
import BrandSignature from '@/components/BrandSignature.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Mark from '@/components/ui/Mark.vue'
import { ApiError } from '@/lib/api'
import { chooseLang, errorText, langChosen, t } from '@/lib/i18n'
import { unsubscribeService } from '@/modules/nurture/service'
import type { NurtureSubscription } from '@/modules/nurture/types'

const route = useRoute()
const token = String(route.params.token)
const found = ref<NurtureSubscription | null>(null)
const failure = ref<string | null>(null)
const busy = ref(false)

/** Mostra a página no idioma do cliente, se a pessoa não escolheu outro neste navegador. */
async function useClientLang(subscription: NurtureSubscription) {
  if (!langChosen()) await chooseLang(subscription.locale)
}

/** Tira da lista ao abrir o link. */
async function start() {
  try {
    found.value = await unsubscribeService.unsubscribe(token)
    await useClientLang(found.value)
  } catch (error) {
    failure.value = error instanceof ApiError && error.code === 'not_found' ? t('unsub.notFound') : errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Volta a receber, ou sai de novo. */
async function toggle() {
  if (!found.value) return
  busy.value = true
  try {
    const wasSubscribed = found.value.subscribed
    found.value = wasSubscribed ? await unsubscribeService.unsubscribe(token) : await unsubscribeService.resubscribe(token)
    toast.success(t(wasSubscribed ? 'unsub.leftAgain' : 'unsub.back'))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

onMounted(start)
</script>

<template>
  <div class="flex min-h-full flex-col">
    <header class="flex h-16 items-center px-6">
      <div class="flex items-center gap-2"><Mark :size="24" /><span class="text-[15px] font-semibold tracking-tight">Avant</span></div>
    </header>
    <main class="flex flex-1 items-start justify-center px-4 pb-16 pt-10 sm:pt-20">
      <div class="w-full max-w-[400px] text-center">
        <span class="mx-auto grid size-12 place-items-center rounded-full border"><MailX class="size-5" aria-hidden="true" /></span>
        <template v-if="failure">
          <h1 class="mt-6 text-[28px] font-semibold leading-tight tracking-[-0.03em]">{{ t('unsub.failTitle') }}</h1>
          <p class="mt-3 text-[14px] text-muted-foreground">{{ failure }}</p>
        </template>
        <template v-else-if="found">
          <h1 class="mt-6 text-[28px] font-semibold leading-tight tracking-[-0.03em]">{{ found.subscribed ? t('unsub.backTitle') : t('unsub.title') }}</h1>
          <p class="mt-3 text-[14px] text-muted-foreground">{{ found.subscribed ? t('unsub.backText', { email: found.masked_email }) : t('unsub.text', { email: found.masked_email }) }}</p>
          <Button variant="outline" class="mt-8 h-10" :disabled="busy" @click="toggle">{{ found.subscribed ? t('unsub.leave') : t('unsub.resubscribe') }}</Button>
          <p class="mt-6 text-[12px] text-muted-foreground">{{ t('unsub.onlyThis') }} <Badge>LGPD</Badge></p>
        </template>
        <p v-else class="mt-6 text-[14px] text-muted-foreground">{{ t('unsub.loading') }}</p>
      </div>
    </main>
    <footer class="flex items-center gap-2 border-t px-6 py-4 text-[12px] text-muted-foreground"><BrandSignature /><span aria-hidden="true">·</span><span>avant.groone.com</span></footer>
  </div>
</template>
