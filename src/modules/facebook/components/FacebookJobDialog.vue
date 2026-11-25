<script setup lang="ts">
/** Acompanha um job de criar, editar ou duplicar: os passos chegam pelo aviso em tempo real e, no fim, mostra o resultado ou o erro do Facebook. */
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Status from '@/components/ui/Status.vue'
import { onEvent } from '@/lib/events'
import { errorText, t, type Key } from '@/lib/i18n'
import { JOB_STEPS, createdCampaign, jobFinished, stepState } from '@/modules/facebook/draft-rules'
import { campaignsPath } from '@/modules/facebook/rules'
import { facebookService } from '@/modules/facebook/service'
import type { FacebookJob } from '@/modules/facebook/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ job: FacebookJob | null }>()
const emit = defineEmits<{ finished: [job: FacebookJob] }>()

const POLL_MS = 15_000
const router = useRouter()
const current = ref<FacebookJob | null>(props.job)
let timer: ReturnType<typeof setInterval> | null = null

const finished = computed(() => (current.value ? jobFinished(current.value) : false))
const steps = computed(() => (current.value?.kind === 'create' ? JOB_STEPS : []))
const campaign = computed(() => (current.value ? createdCampaign(current.value) : null))
const title = computed(() => t(`fb.job.title.${current.value?.kind ?? 'create'}` as Key))

/** Busca o job de novo; quando termina, para de olhar e avisa a tela. */
async function refresh() {
  if (!current.value) return
  current.value = await facebookService.job(current.value.id).catch(() => current.value)
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
  router.push(`${campaignsPath(false)}/${campaign.value}`)
}

onEvent('facebook.job.updated', ({ job_id }) => {
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
  <Dialog v-model:open="open" :title="title" :desc="finished ? undefined : t('fb.job.wait')">
    <div v-if="current" class="grid gap-4 text-[14px]">
      <ul v-if="steps.length" class="grid gap-1.5">
        <li v-for="step in steps" :key="step">
          <Status :tone="stepState(current, step) === 'done' ? 'ok' : stepState(current, step) === 'current' ? 'warn' : 'neutral'">{{ t(`fb.job.step.${step}` as Key) }}</Status>
        </li>
      </ul>
      <p v-if="current.state === 'queued' || current.state === 'running'" class="text-muted-foreground">{{ t('fb.job.running') }}</p>
      <div v-else-if="current.state === 'failed'" class="rounded-md border border-bad/25 p-3" role="alert">
        <p class="font-medium">{{ errorText(current.error_code ?? 'facebook_error') }}</p>
        <p v-if="current.error_message" class="mt-1 text-muted-foreground">{{ current.error_message }}</p>
        <p v-if="current.kind === 'create'" class="mt-2 text-[13px] text-muted-foreground">{{ t('fb.job.failedPaused') }}</p>
      </div>
      <div v-else class="grid gap-2">
        <p class="font-medium">{{ t(`fb.job.done.${current.kind}` as Key) }}</p>
        <p v-if="current.warning_code" class="text-[13px] text-ochre">{{ t('fb.job.limitWarning') }}</p>
      </div>
    </div>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t(finished ? 'fb.job.close' : 'fb.job.background') }}</Button>
      <Button v-if="finished && campaign" @click="openCampaign">{{ t('fb.job.openCampaign') }}</Button>
    </template>
  </Dialog>
</template>
