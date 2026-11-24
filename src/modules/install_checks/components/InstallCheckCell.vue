<script setup lang="ts">
/** A verificação de instalação de um item: o resumo abre o resultado e o botão verifica agora, com 1 minuto de espera. */
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { Loader2, RefreshCw } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Status from '@/components/ui/Status.vue'
import { ApiError } from '@/lib/api'
import { onEvent } from '@/lib/events'
import { errorText, t } from '@/lib/i18n'
import InstallResultDialog from '@/modules/install_checks/components/InstallResultDialog.vue'
import { installSummary, POLL_MS, POLL_TRIES, secondsLeft } from '@/modules/install_checks/rules'
import { installCheckService } from '@/modules/install_checks/service'
import type { InstallCheck, InstallSummary, InstallTarget } from '@/modules/install_checks/types'

const props = defineProps<{ target: InstallTarget; id: string; name: string; internal: boolean; summary?: InstallSummary | null; large?: boolean }>()
const emit = defineEmits<{ updated: [summary: InstallSummary | null] }>()

const service = installCheckService(props.internal)
const current = ref<InstallSummary | null>(props.summary ?? null)
const check = ref<InstallCheck | null>(null)
const open = ref(false)
const wait = ref(0)
const asked = ref(false)
const problem = ref<string | null>(null)
let timer: ReturnType<typeof setInterval> | null = null
let poll: ReturnType<typeof setTimeout> | null = null
let tries = 0

watch(
  () => props.summary,
  (summary) => {
    current.value = summary ?? null
  },
)

const running = computed(() => asked.value || current.value?.state === 'pending')
const display = computed(() => installSummary(current.value))
const label = computed(() => {
  if (running.value) return t('ic.pending')
  return wait.value > 0 ? t('ic.checkIn', { n: wait.value }) : t('ic.check')
})

/** Conta a espera do botão até zero, um segundo por vez. */
function countdown(availableAt: string | null) {
  wait.value = secondsLeft(availableAt)
  if (timer) clearInterval(timer)
  timer = setInterval(() => {
    wait.value = Math.max(0, wait.value - 1)
    if (wait.value === 0 && timer) clearInterval(timer)
  }, 1000)
}

/** Busca a última verificação; quando termina, para de esperar e abre o resultado de quem pediu. */
async function refresh() {
  const found = await service.show(props.target, props.id)
  check.value = found
  current.value = found.summary
  emit('updated', found.summary)
  if (found.summary?.state === 'done' && asked.value) {
    asked.value = false
    open.value = true
  }
  return found
}

/** Pergunta de novo a cada poucos segundos enquanto o worker não acaba (o evento costuma chegar antes). */
function waitForWorker() {
  if (poll) clearTimeout(poll)
  if (!asked.value || tries >= POLL_TRIES) {
    asked.value = false
    return
  }
  tries += 1
  poll = setTimeout(async () => {
    try {
      await refresh()
    } finally {
      waitForWorker()
    }
  }, POLL_MS)
}

/** Pede a verificação; na espera de 1 minuto, mostra a contagem que a API devolveu. */
async function run() {
  if (running.value || wait.value > 0) return
  problem.value = null
  try {
    const found = await service.request(props.target, props.id)
    check.value = found
    current.value = found.summary
    countdown(found.available_at)
    asked.value = true
    tries = 0
    waitForWorker()
  } catch (error) {
    if (error instanceof ApiError && error.code === 'install_check_cooldown') {
      wait.value = 0
      countdown(new Date(Date.now() + (error.retryAfter ?? 60) * 1000).toISOString())
      return
    }
    problem.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Abre a janela com o resultado, buscando os achados na primeira vez. */
async function show() {
  open.value = true
  if (!check.value) {
    try {
      const found = await refresh()
      countdown(found.available_at)
    } catch (error) {
      problem.value = errorText(error instanceof ApiError ? error.code : 'unknown')
    }
  }
}

onEvent('install_check.updated', (data) => {
  if (data.target === props.target && data.target_id === props.id) void refresh()
})

onMounted(async () => {
  if (props.summary !== undefined) return
  try {
    const found = await refresh()
    countdown(found.available_at)
  } catch {
    current.value = null
  }
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
  if (poll) clearTimeout(poll)
})
</script>

<template>
  <div class="flex items-center gap-2">
    <button type="button" class="text-left hover:underline" :aria-label="t('ic.openResult')" @click="show">
      <Status :tone="display.tone">{{ display.label }}</Status>
    </button>
    <Button
      :size="large ? 'default' : 'sm'"
      :variant="large ? 'outline' : 'ghost'"
      :class="large ? 'tnum' : 'h-7 px-2 text-[12px] tnum'"
      :disabled="running || wait > 0"
      :title="t('ic.checkHint')"
      @click="run"
    >
      <Loader2 v-if="running" class="animate-spin" /><RefreshCw v-else />{{ label }}
    </Button>
    <span v-if="problem" class="text-[12px] text-bad">{{ problem }}</span>
  </div>
  <InstallResultDialog v-model:open="open" :target="target" :name="name" :check="check" :running="running" :wait="wait" @run="run" />
</template>
