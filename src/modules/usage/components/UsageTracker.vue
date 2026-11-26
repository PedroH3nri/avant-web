<script setup lang="ts">
/** Conta o uso do painel do cliente: cada tela aberta e uma batida por minuto com a aba visível. Não desenha nada. */
import { onBeforeUnmount, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { areaFor, HEARTBEAT_MS } from '@/modules/usage/rules'
import { usageService } from '@/modules/usage/service'
import type { UsageSignal } from '@/modules/usage/types'

const route = useRoute()
let timer: ReturnType<typeof setInterval> | null = null

/** Manda o sinal sem atrapalhar a tela: uma falha só perde a contagem. */
function send(signal: UsageSignal, path?: string) {
  usageService.ping(signal, path === undefined ? undefined : areaFor(path)).catch(() => undefined)
}

/** A batida do minuto, só com a aba visível. */
function beat() {
  if (document.visibilityState === 'visible') send('minute')
}

watch(
  () => route.path,
  (path) => send('screen', path),
  { immediate: true },
)
onMounted(() => {
  timer = setInterval(beat, HEARTBEAT_MS)
})
onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <span hidden />
</template>
