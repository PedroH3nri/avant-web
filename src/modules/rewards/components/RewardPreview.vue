<script setup lang="ts">
/** A prévia do reward: uma página de mentira num navegador ou celular, com a janela desenhada pelo mesmo render do reward.js. */
import { onBeforeUnmount, onMounted, useTemplateRef, watch } from 'vue'
import { fontStylesheet } from '@/embed/reward/fonts'
import { renderReward } from '@/embed/reward/render'
import type { PublicReward, RewardStep, VisitorLanguage } from '@/embed/reward/types'

const props = defineProps<{ reward: PublicReward; step: RewardStep; language: VisitorLanguage; device: 'desktop' | 'mobile'; domain: string; path: string }>()
const emit = defineEmits<{ next: [] }>()
const host = useTemplateRef<HTMLDivElement>('host')
const LINES = [90, 96, 84, 92, 70, 88]
let root: ShadowRoot | null = null
let font: HTMLLinkElement | null = null

/** Desenha a janela na etapa escolhida; responder ou continuar passa para a próxima etapa. */
function draw() {
  if (!host.value) return
  root = root ?? host.value.attachShadow({ mode: 'open' })
  const href = fontStylesheet(props.reward.style.font)
  if (font?.href !== href) {
    font?.remove()
    font = document.createElement('link')
    font.rel = 'stylesheet'
    font.href = href
    document.head.append(font)
  }
  root.replaceChildren(
    renderReward(props.reward, {
      language: props.language,
      step: props.step,
      domain: props.domain,
      onAnswer: () => emit('next'),
      onLead: () => emit('next'),
    }),
  )
}

onMounted(draw)
watch(() => [props.reward, props.step, props.language], draw, { deep: true })
onBeforeUnmount(() => font?.remove())
</script>

<template>
  <div :class="['mx-auto overflow-hidden rounded-xl border bg-card shadow-sm', device === 'mobile' ? 'w-[360px] max-w-full' : 'w-full']">
    <div class="flex items-center gap-2 border-b bg-muted px-3 py-2">
      <div v-if="device === 'desktop'" class="flex gap-1.5" aria-hidden="true">
        <span v-for="dot in 3" :key="dot" class="size-2.5 rounded-full bg-border" />
      </div>
      <div class="min-w-0 flex-1 truncate rounded-md bg-background px-3 py-1 font-mono text-[12px] text-muted-foreground">https://{{ domain }}/{{ path }}</div>
    </div>
    <div :class="['relative bg-white', device === 'mobile' ? 'h-[640px]' : 'h-[600px]']">
      <div class="grid gap-3 p-6" aria-hidden="true">
        <div class="h-4 w-24 rounded bg-neutral-200" />
        <div class="h-7 w-4/5 rounded bg-neutral-200" />
        <div class="h-40 rounded-lg bg-neutral-100" />
        <div v-for="(width, index) in LINES" :key="index" class="h-3 rounded bg-neutral-100" :style="{ width: `${width}%` }" />
      </div>
      <div class="absolute inset-0 flex overflow-y-auto bg-black/45 p-4">
        <div ref="host" class="m-auto flex w-full justify-center" />
      </div>
    </div>
  </div>
</template>
