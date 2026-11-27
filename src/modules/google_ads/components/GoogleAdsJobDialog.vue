<script setup lang="ts">
/** Acompanha um job de criar ou editar no Google Ads: o fim chega pelo aviso em tempo real e a janela mostra o resultado ou o erro do Google. */
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import { onEvent } from '@/lib/events'
import { errorText, t, type Key } from '@/lib/i18n'
import { createdCampaign, jobFinished } from '@/modules/google_ads/draft-rules'
import { campaignsPath } from '@/modules/google_ads/rules'
import { googleAdsService } from '@/modules/google_ads/service'
import type { GoogleAdsJob } from '@/modules/google_ads/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ job: GoogleAdsJob | null }>()
const emit = defineEmits<{ finished: [job: GoogleAdsJob] }>()

const POLL_MS = 10_000
const router = useRouter()
const current = ref<GoogleAdsJob | null>(props.job)
let timer: ReturnType<typeof setInterval> | null = null

const finished = computed(() => (current.value ? jobFinished(current.value) : false))
const campaign = computed(() => (current.value ? createdCampaign(current.value) : null))
const title = computed(() => t(`gads.job.title.${current.value?.kind ?? 'create'}` as Key))

/** Busca o job de novo; quando termina, para de olhar e avisa a tela. */
async function refresh() {
  if (!current.value) return
  current.value = await googleAdsService.job(current.value.id).catch(() => current.value)
  if (current.value && jobFinished(current.value)) {
    stopPolling()
    emit('finished', current.value)
  }
}

/** Olha o job de tempos em tempos, caso o aviso em tempo real não chegue. */
function startPolling() {
  stopPolling()
  timer = setInterval(refresh, POLL_MS)
}

/** Para de olhar o job. */
function stopPolling() {
  if (timer) clearInterval(timer)
  timer = null
}

/** Abre a campanha criada e fecha a janela. */
function openCampaign() {
  if (!campaign.value) return
  open.value = false
  router.push(`${campaignsPath(false)}/campaign/${campaign.value}`)
}

onEvent('google_ads.job.updated', ({ job_id }) => {
  if (job_id === current.value?.id) refresh()
})
watch(
  () => props.job,
  (job) => {
    current.value = job
    if (job && !jobFinished(job)) startPolling()
  },
  { immediate: true },
)
watch(open, (isOpen) => {
  if (!isOpen) stopPolling()
})
</script>

<template>
  <Dialog v-model:open="open" :title="title" :desc="finished ? undefined : t('gads.job.wait')">
    <div v-if="current" class="grid gap-4 text-[14px]">
      <p v-if="current.state === 'queued' || current.state === 'running'" class="text-muted-foreground">{{ t('gads.job.running') }}</p>
      <div v-else-if="current.state === 'failed'" class="rounded-md border border-bad/25 p-3" role="alert">
        <p class="font-medium">{{ errorText(current.error_code ?? 'google_ads_error') }}</p>
        <p v-if="current.error_message" class="mt-1 text-muted-foreground">{{ current.error_message }}</p>
        <p v-if="current.kind === 'create' && current.error_code !== 'unknown_outcome'" class="mt-2 text-[13px] text-muted-foreground">{{ t('gads.job.nothingCreated') }}</p>
      </div>
      <p v-else class="font-medium">{{ t(`gads.job.done.${current.kind}` as Key) }}</p>
    </div>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t(finished ? 'gads.job.close' : 'gads.job.background') }}</Button>
      <Button v-if="finished && campaign" @click="openCampaign">{{ t('gads.job.openCampaign') }}</Button>
    </template>
  </Dialog>
</template>
