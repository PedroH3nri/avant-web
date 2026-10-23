<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { ArrowLeft, Check, Copy, Loader2, X } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Input from '@/components/ui/Input.vue'
import { api, ApiError } from '@/lib/api'
import { onEvent } from '@/lib/events'
import { errorText, t } from '@/lib/i18n'
import { validCode } from '@/lib/networks'
import type { Network, SyncRun } from '@/lib/types'
import { cn } from '@/lib/utils'

type State = 'wait' | 'run' | 'ok' | 'fail'
interface Check {
  label: string
  state: State
  detail?: string
}

const email = ref<string | null>(null)
const code = ref('')
const network = ref<Network | null>(null)
const busy = ref(false)
const submitError = ref<string | null>(null)
const copied = ref(false)
const slow = ref(false)
let poll: ReturnType<typeof setInterval> | null = null
let slowTimer: ReturnType<typeof setTimeout> | null = null

onMounted(async () => {
  try {
    email.value = (await api.get<{ email: string }>('/networks/service-account')).email
  } catch {
    email.value = ''
  }
})

const valid = computed(() => validCode(code.value))
const test = computed(() => network.value?.last_runs.test)

// O teste e as importações rodam no worker; a tela acompanha pelos eventos e, de reserva, a cada 5 s.
const checks = computed<Check[] | null>(() => {
  const n = network.value
  if (!n) return null
  const run: SyncRun | undefined = test.value
  const c1: Check = { label: t('wiz.c1', { code: n.network_code }), state: 'run' }
  const c2: Check = { label: t('wiz.c2'), state: 'wait' }
  const c3: Check = { label: t('wiz.c3'), state: 'wait' }
  if (run?.status === 'failed') {
    const notFound = run.error_code === 'gam_network_not_found' || run.error_code === 'gam_test_network'
    const detail = run.error_code ? errorText(run.error_code) : (run.error_message ?? undefined)
    if (notFound) Object.assign(c1, { state: 'fail', detail })
    else {
      c1.state = 'ok'
      Object.assign(c2, { state: 'fail', detail })
    }
  } else if (run?.status === 'ok' || n.status === 'connected') {
    c1.state = 'ok'
    c2.state = 'ok'
    const sites = n.last_runs.sites
    const units = n.last_runs.ad_units
    if (sites?.status === 'failed' || units?.status === 'failed') {
      const failed = sites?.status === 'failed' ? sites : units
      Object.assign(c3, { state: 'fail', detail: failed?.error_code ? errorText(failed.error_code) : undefined })
    } else if (sites?.status === 'ok' && units?.status === 'ok') {
      const count = (r: SyncRun) => (r.counts.created ?? 0) + (r.counts.updated ?? 0)
      Object.assign(c3, { state: 'ok', detail: t('wiz.c3Done', { sites: n.sites, units: count(units) }) })
    } else c3.state = 'run'
  }
  return [c1, c2, c3]
})
const failed = computed(() => checks.value?.some((c) => c.state === 'fail') ?? false)
const done = computed(() => checks.value?.every((c) => c.state === 'ok') ?? false)
const running = computed(() => busy.value || (!!checks.value && !failed.value && !done.value))

function stopWatching() {
  if (poll) clearInterval(poll)
  if (slowTimer) clearTimeout(slowTimer)
  poll = slowTimer = null
}
onBeforeUnmount(stopWatching)

async function refresh() {
  if (!network.value) return
  try {
    network.value = await api.get<Network>(`/networks/${network.value.id}`)
  } catch {
    // tenta de novo no próximo aviso
  }
  if (failed.value || done.value) stopWatching()
}
onEvent('network.updated', ({ network_id }) => {
  if (network_id === network.value?.id) void refresh()
})

function watchProgress() {
  stopWatching()
  slow.value = false
  poll = setInterval(refresh, 5000)
  slowTimer = setTimeout(() => (slow.value = true), 120_000)
}

async function start() {
  if (!valid.value || running.value) return
  busy.value = true
  submitError.value = null
  try {
    // Depois de uma falha, a mesma network é testada de novo pelo sync.
    network.value =
      network.value && network.value.network_code === code.value
        ? await api.post<Network>(`/networks/${network.value.id}/sync`)
        : await api.post<Network>('/networks', { network_code: code.value })
    watchProgress()
  } catch (e) {
    submitError.value = errorText(e instanceof ApiError ? e.code : 'unknown', { s: e instanceof ApiError ? (e.retryAfter ?? 600) : 600 })
  } finally {
    busy.value = false
  }
}

async function copy() {
  if (!email.value) return
  try {
    await navigator.clipboard.writeText(email.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 1600)
  } catch {
    const el = document.getElementById('sa-email')
    if (el) {
      const range = document.createRange()
      range.selectNodeContents(el)
      const sel = window.getSelection()
      sel?.removeAllRanges()
      sel?.addRange(range)
    }
    toast(t('wiz.copyManual'))
  }
}

const dot = (s: State) =>
  cn(
    'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full',
    s === 'ok' && 'bg-ok text-white',
    s === 'fail' && 'bg-bad text-white',
    s === 'run' && 'text-muted-foreground',
    s === 'wait' && 'border text-muted-foreground',
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
            <div class="flex min-w-0 items-center gap-2 rounded-md border bg-muted py-1 pl-3 pr-1">
              <span id="sa-email" class="min-w-0 flex-1 truncate font-mono text-[13px]">{{ email ?? t('common.loading') }}</span>
              <Button size="sm" variant="ghost" :aria-label="t('wiz.copyLabel')" :disabled="!email" @click="copy">
                <Check v-if="copied" /><Copy v-else />{{ copied ? t('wiz.copied') : t('wiz.copy') }}
              </Button>
            </div>
          </div>
        </li>
        <li class="grid grid-cols-[28px_minmax(0,1fr)] gap-4">
          <span class="flex size-7 items-center justify-center rounded-full border bg-card text-[13px] font-medium tnum">2</span>
          <div class="grid min-w-0 gap-3 pt-0.5">
            <h3 class="text-[16px] font-semibold tracking-tight">{{ t('wiz.s2') }}</h3>
            <p class="text-[14px] text-muted-foreground">{{ t('wiz.s2Sub') }}</p>
          </div>
        </li>
        <li class="grid grid-cols-[28px_minmax(0,1fr)] gap-4">
          <span class="flex size-7 items-center justify-center rounded-full border bg-card text-[13px] font-medium tnum">3</span>
          <div class="grid min-w-0 gap-3 pt-0.5">
            <h3 class="text-[16px] font-semibold tracking-tight">{{ t('wiz.s3') }}</h3>
            <p class="text-[14px] text-muted-foreground">{{ t('wiz.s3Sub') }}</p>
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
                  @update:model-value="(v: string) => (code = v.replace(/\D/g, ''))"
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
        <li v-for="c in checks" :key="c.label" class="flex gap-3 text-[14px]">
          <span :class="dot(c.state)">
            <Check v-if="c.state === 'ok'" class="size-3" /><X v-else-if="c.state === 'fail'" class="size-3" /><Loader2
              v-else-if="c.state === 'run'"
              class="size-4 animate-spin"
            />
          </span>
          <div class="min-w-0">
            <div :class="c.state === 'wait' ? 'text-muted-foreground' : ''">{{ c.label }}</div>
            <p v-if="c.detail" :class="['mt-0.5 break-words text-[13px]', c.state === 'fail' ? 'text-bad' : 'text-muted-foreground']">{{ c.detail }}</p>
          </div>
        </li>
      </ul>
      <p v-if="slow && running" class="mt-4 text-[13px] text-muted-foreground">{{ t('wiz.slow') }}</p>
      <RouterLink
        v-if="done"
        to="/networks"
        class="mt-5 inline-flex h-10 w-full items-center justify-center rounded-md bg-primary text-[14px] font-medium text-primary-foreground hover:bg-primary/90"
        >{{ t('wiz.see') }}</RouterLink
      >
    </Card>
  </PageBody>
</template>
