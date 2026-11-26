<script setup lang="ts">
/** A pesquisa de NPS no canto do painel do cliente: aparece uma vez por trimestre, pede a nota de 0 a 10 e um comentário. */
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { CheckCircle2, X } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Textarea from '@/components/ui/Textarea.vue'
import { t } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { npsGroup } from '@/modules/help/rules'
import { npsService } from '@/modules/help/service'

const SHOW_DELAY = 1400
const DONE_DELAY = 4000
const COMMENT_MAX = 1000
const stage = ref<'hidden' | 'ask' | 'comment' | 'done'>('hidden')
const score = ref<number | null>(null)
const comment = ref('')
const sending = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined
const question = computed(() => (score.value !== null && npsGroup(score.value) === 'promoter' ? t('nps.whatHelps') : t('nps.whatImprove')))

/** Pergunta à API se a pesquisa aparece e mostra depois de um instante. */
async function check() {
  try {
    const state = await npsService.prompt()
    if (state.ask) timer = setTimeout(() => (stage.value = 'ask'), SHOW_DELAY)
  } catch {
    stage.value = 'hidden'
  }
}

/** Guarda a nota escolhida e pede o comentário. */
function choose(value: number) {
  score.value = value
  stage.value = 'comment'
}

/** Envia a nota e o comentário e agradece. */
async function send() {
  if (score.value === null) return
  sending.value = true
  try {
    await npsService.answer(score.value, comment.value)
    stage.value = 'done'
    timer = setTimeout(() => (stage.value = 'hidden'), DONE_DELAY)
  } catch {
    stage.value = 'hidden'
  } finally {
    sending.value = false
  }
}

/** Fecha: sem nota, não pergunta mais neste trimestre; com nota, guarda sem comentário. */
async function close() {
  const chosen = score.value
  const wasDone = stage.value === 'done'
  stage.value = 'hidden'
  if (wasDone) return
  try {
    if (chosen === null) await npsService.dismiss()
    else await npsService.answer(chosen, '')
  } catch {
    stage.value = 'hidden'
  }
}

onMounted(check)
onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <div
    v-if="stage !== 'hidden'"
    class="fixed bottom-4 right-4 z-40 w-[calc(100vw-32px)] max-w-[380px] rounded-lg border bg-card p-4 shadow-lg animate-in fade-in slide-in-from-bottom-4"
    role="dialog"
    :aria-label="t('nps.label')"
  >
    <button type="button" :aria-label="t('common.close')" class="absolute right-2 top-2 rounded p-1 text-muted-foreground hover:bg-muted" @click="close"><X class="size-4" /></button>
    <template v-if="stage === 'ask'">
      <p class="pr-6 text-[14px] font-medium">{{ t('nps.question') }}</p>
      <div class="mt-3 grid grid-cols-11 gap-1">
        <button
          v-for="value in 11"
          :key="value"
          type="button"
          :class="
            cn(
              'h-8 rounded border text-[13px] tnum transition-[transform,background-color] hover:-translate-y-px',
              npsGroup(value - 1) === 'detractor' ? 'hover:bg-bad-soft' : npsGroup(value - 1) === 'passive' ? 'hover:bg-ochre-soft' : 'hover:bg-[hsl(var(--ok)/0.12)]',
            )
          "
          @click="choose(value - 1)"
        >
          {{ value - 1 }}
        </button>
      </div>
      <div class="mt-1 flex justify-between text-[11px] text-muted-foreground">
        <span>{{ t('nps.unlikely') }}</span><span>{{ t('nps.likely') }}</span>
      </div>
    </template>
    <div v-else-if="stage === 'comment'">
      <p class="pr-6 text-[14px] font-medium">{{ t('nps.scoreIs', { score: score ?? 0 }) }} {{ question }}</p>
      <Textarea v-model="comment" class="mt-3" :rows="3" :maxlength="COMMENT_MAX" :aria-label="question" />
      <div class="mt-2 flex justify-end"><Button size="sm" :loading="sending" @click="send">{{ t('nps.send') }}</Button></div>
    </div>
    <p v-else class="flex items-center gap-2 pr-6 text-[14px]"><CheckCircle2 class="size-5 text-ok" aria-hidden="true" />{{ t('nps.thanks') }}</p>
  </div>
</template>
