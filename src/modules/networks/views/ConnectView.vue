<script setup lang="ts">
/** Assistente para conectar uma network do GAM, com o progresso ao vivo. */
import { computed, onBeforeUnmount, ref } from 'vue'
import { ArrowLeft, Check, Loader2, X } from 'lucide-vue-next'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Input from '@/components/ui/Input.vue'
import { ApiError } from '@/lib/api'
import { onEvent } from '@/lib/events'
import { errorText, t } from '@/lib/i18n'
import { validCode } from '@/modules/networks/rules'
import type { Network, SyncRun } from '@/modules/networks/types'
import { cn } from '@/lib/utils'
import { networkService } from '@/modules/networks/service'
import { nextPollDelay } from '@/lib/poll'

type State = 'wait' | 'run' | 'ok' | 'fail'
interface Check {
  label: string
  state: State
  detail?: string
}

const code = ref('')
const network = ref<Network | null>(null)
const busy = ref(false)
const submitError = ref<string | null>(null)
const slow = ref(false)
let poll: ReturnType<typeof setTimeout> | null = null
let pollDelay = 0
let watchedSince = 0
let slowTimer: ReturnType<typeof setTimeout> | null = null

const valid = computed(() => validCode(code.value))
const test = computed(() => network.value?.last_runs.test)

// O teste e as importações rodam no worker; a tela acompanha pelos eventos e, de reserva, com espera crescente.
const checks = computed<Check[] | null>(() => {
  const current = network.value
  if (!current) return null
  const run: SyncRun | undefined = test.value
  const registered: Check = { label: t('wiz.c1', { code: current.network_code }), state: 'ok' }
  const confirmed: Check = { label: t('wiz.c2'), state: 'ok' }
  const access: Check = { label: t('wiz.c3'), state: 'run' }
  const imported: Check = { label: t('wiz.c4'), state: 'wait' }
  if (current.awaiting_confirmation) {
    Object.assign(confirmed, { state: 'wait', detail: t('wiz.c2Wait') })
    access.state = 'wait'
  } else if (run?.status === 'failed') {
    const detail = run.error_code ? errorText(run.error_code) : (run.error_message ?? undefined)
    Object.assign(access, { state: 'fail', detail })
  } else if (run?.status === 'ok' || current.status === 'connected') {
    access.state = 'ok'
    const sites = current.last_runs.sites
    const units = current.last_runs.ad_units
    if (sites?.status === 'failed' || units?.status === 'failed') {
      const failedRun = sites?.status === 'failed' ? sites : units
      Object.assign(imported, { state: 'fail', detail: failedRun?.error_code ? errorText(failedRun.error_code) : undefined })
    } else if (sites?.status === 'ok' && units?.status === 'ok') {
      /** Soma o que a etapa criou e atualizou. */
      const count = (syncRun: SyncRun) => (syncRun.counts.created ?? 0) + (syncRun.counts.updated ?? 0)
      Object.assign(imported, { state: 'ok', detail: t('wiz.c4Done', { sites: current.sites, units: count(units) }) })
    } else imported.state = 'run'
  }
  return [registered, confirmed, access, imported]
})
const awaiting = computed(() => network.value?.awaiting_confirmation ?? false)
const failed = computed(() => checks.value?.some((check) => check.state === 'fail') ?? false)
const done = computed(() => checks.value?.every((check) => check.state === 'ok') ?? false)
const running = computed(() => busy.value || (!!checks.value && !failed.value && !done.value && !awaiting.value))

/** Para de acompanhar o progresso. */
function stopWatching() {
  if (poll) clearTimeout(poll)
  if (slowTimer) clearTimeout(slowTimer)
  poll = slowTimer = null
}
onBeforeUnmount(stopWatching)

/** Recarrega a network para atualizar o progresso. */
async function refresh() {
  if (!network.value) return
  try {
    network.value = await networkService.show(network.value.id)
  } catch {
    // tenta de novo no próximo aviso
  }
  if (failed.value || done.value || awaiting.value) stopWatching()
}
onEvent('network.updated', ({ network_id }) => {
  if (network_id === network.value?.id) void refresh()
})

/** Agenda a próxima consulta com espera crescente; depois do teto, só os avisos em tempo real. */
function scheduleRefresh() {
  const delay = nextPollDelay(pollDelay, Date.now() - watchedSince)
  if (delay === null) {
    poll = null
    return
  }
  pollDelay = delay
  poll = setTimeout(async () => {
    await refresh()
    if (poll) scheduleRefresh()
  }, delay)
}

/** Recarrega a network com espera crescente e marca como lenta depois de 2 minutos. */
function watchProgress() {
  stopWatching()
  slow.value = false
  pollDelay = 0
  watchedSince = Date.now()
  scheduleRefresh()
  slowTimer = setTimeout(() => (slow.value = true), 120_000)
}

/** Conecta a network digitada e começa a acompanhar. */
async function start() {
  if (!valid.value || running.value) return
  busy.value = true
  submitError.value = null
  try {
    // Depois de uma falha, a mesma network é testada de novo pelo sync.
    network.value =
      network.value && network.value.network_code === code.value
        ? await networkService.sync(network.value.id)
        : await networkService.connect(code.value)
    if (!awaiting.value) watchProgress()
  } catch (error) {
    submitError.value = errorText(error instanceof ApiError ? error.code : 'unknown', { s: error instanceof ApiError ? (error.retryAfter ?? 600) : 600 })
  } finally {
    busy.value = false
  }
}

/** Classes do indicador de cada etapa. */
const dot = (state: State) =>
  cn(
    'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full',
    state === 'ok' && 'bg-ok text-white',
    state === 'fail' && 'bg-bad text-white',
    state === 'run' && 'text-muted-foreground',
    state === 'wait' && 'border text-muted-foreground',
  )
</script>

<template>
  <PageHeader :title="t('wiz.title')" :sub="t('wiz.sub')">
    <template #back>
      <RouterLink to="/networks" class="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground">
        <ArrowLeft class="size-4" />{{ t('net.title') }}
      </RouterLink>
    </template>
  </PageHeader>
  <PageBody class="lg:grid-cols-[minmax(0,1fr)_360px]">
    <Card>
      <ol class="grid gap-10">
        <li class="grid grid-cols-[28px_minmax(0,1fr)] gap-4">
          <span class="flex size-7 items-center justify-center rounded-full border bg-card text-[13px] font-medium tnum">1</span>
          <div class="grid min-w-0 gap-3 pt-0.5">
            <h3 class="text-[16px] font-semibold tracking-tight">{{ t('wiz.s1') }}</h3>
            <p class="text-[14px] text-muted-foreground">{{ t('wiz.s1Sub') }}</p>
          </div>
        </li>
        <li class="grid grid-cols-[28px_minmax(0,1fr)] gap-4">
          <span class="flex size-7 items-center justify-center rounded-full border bg-card text-[13px] font-medium tnum">2</span>
          <div class="grid min-w-0 gap-3 pt-0.5">
            <h3 class="text-[16px] font-semibold tracking-tight">{{ t('wiz.s2') }}</h3>
            <p class="text-[14px] text-muted-foreground">{{ t('wiz.s2Sub') }}</p>
            <form class="flex flex-wrap items-start gap-3" novalidate @submit.prevent="start">
              <div class="grid min-w-[200px] flex-1 gap-2">
                <Input
                  id="net-code"
                  :model-value="code"
                  :aria-label="t('net.col.code')"
                  inputmode="numeric"
                  class="font-mono tnum"
                  maxlength="20"
                  :invalid="code.length > 0 && !valid"
                  :disabled="running"
                  @update:model-value="(value: string) => (code = value.replace(/\D/g, ''))"
                />
                <p v-if="code.length > 0 && !valid" class="text-[13px] text-bad">{{ t('wiz.codeError') }}</p>
                <p v-else-if="submitError" class="text-[13px] text-bad" role="alert">{{ submitError }}</p>
              </div>
              <Button type="submit" size="form" :loading="busy" :disabled="!valid || running">{{ failed ? t('wiz.retry') : t('wiz.test') }}</Button>
            </form>
          </div>
        </li>
      </ol>
    </Card>
    <Card class="h-fit">
      <h2 class="text-[14px] font-medium">{{ t('wiz.result') }}</h2>
      <p v-if="!checks" class="mt-2 text-[14px] text-muted-foreground">{{ t('wiz.resultEmpty') }}</p>
      <ul v-else class="mt-4 grid gap-3" aria-live="polite">
        <li v-for="check in checks" :key="check.label" class="flex gap-3 text-[14px]">
          <span :class="dot(check.state)">
            <Check v-if="check.state === 'ok'" class="size-3" /><X v-else-if="check.state === 'fail'" class="size-3" /><Loader2
              v-else-if="check.state === 'run'"
              class="size-4 animate-spin"
            />
          </span>
          <div class="min-w-0">
            <div :class="check.state === 'wait' ? 'text-muted-foreground' : ''">{{ check.label }}</div>
            <p v-if="check.detail" :class="['mt-0.5 break-words text-[13px]', check.state === 'fail' ? 'text-bad' : 'text-muted-foreground']">{{ check.detail }}</p>
          </div>
        </li>
      </ul>
      <p v-if="slow && running" class="mt-4 text-[13px] text-muted-foreground">{{ t('wiz.slow') }}</p>
      <RouterLink
        v-if="done || awaiting"
        to="/networks"
        class="mt-5 inline-flex h-10 w-full items-center justify-center rounded-md bg-primary text-[14px] font-medium text-primary-foreground hover:bg-primary/90"
        >{{ t('wiz.see') }}</RouterLink
      >
    </Card>
  </PageBody>
</template>
