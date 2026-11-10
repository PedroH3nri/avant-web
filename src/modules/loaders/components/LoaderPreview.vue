<script setup lang="ts">
/** A prévia do loader: uma página de mentira num navegador ou celular, com o loader desenhado pelo mesmo render do tag.js. */
import { onBeforeUnmount, onMounted, useTemplateRef, watch } from 'vue'
import { renderLoader } from 'avant-tag/loader'
import { t } from '@/lib/i18n'
import type { PreviewLoader } from '@/modules/loaders/rules'

const props = defineProps<{ loader: PreviewLoader; mode: 'loading' | 'adblock'; language: string; device: 'desktop' | 'mobile'; domain: string; playing: boolean; exiting: boolean }>()
const emit = defineEmits<{ close: [] }>()
const host = useTemplateRef<HTMLDivElement>('host')
const LINES = [90, 96, 84, 92, 70, 88]

/** Desenha o loader (ou o aviso) dentro da página de exemplo; fechar o aviso avisa a tela. */
function draw() {
  const target = host.value
  if (!target) return
  target.replaceChildren()
  if (props.mode === 'loading' && !props.playing) return
  const layer = renderLoader(target, props.loader, {
    mode: props.mode,
    language: props.language,
    domain: props.domain,
    iconUrl: null,
    inline: true,
    onContinue: () => emit('close'),
    onSkip: () => emit('close'),
  })
  if (props.exiting) layer.classList.add('avl-out')
}

onMounted(draw)
watch(() => [props.loader, props.mode, props.language, props.domain, props.playing, props.exiting], draw, { deep: true })
onBeforeUnmount(() => host.value?.replaceChildren())
</script>

<template>
  <div :class="['mx-auto overflow-hidden rounded-xl border bg-card shadow-sm', device === 'mobile' ? 'w-[360px] max-w-full' : 'w-full']">
    <div class="flex items-center gap-2 border-b bg-muted px-3 py-2">
      <div v-if="device === 'desktop'" class="flex gap-1.5" aria-hidden="true">
        <span v-for="dot in 3" :key="dot" class="size-2.5 rounded-full bg-border" />
      </div>
      <div class="min-w-0 flex-1 truncate rounded-md bg-background px-3 py-1 font-mono text-[12px] text-muted-foreground">https://{{ domain }}/</div>
    </div>
    <div :class="['relative overflow-hidden bg-white', device === 'mobile' ? 'h-[600px]' : 'h-[520px]']">
      <div class="grid gap-3 p-6" aria-hidden="true">
        <div class="h-4 w-24 rounded bg-neutral-200" />
        <div class="h-7 w-4/5 rounded bg-neutral-200" />
        <div class="h-40 rounded-lg bg-gradient-to-br from-violet-200 to-sky-200" />
        <div v-for="(width, index) in LINES" :key="index" class="h-3 rounded bg-neutral-100" :style="{ width: `${width}%` }" />
      </div>
      <div ref="host" class="absolute inset-0" />
      <p v-if="mode === 'loading' && !playing" class="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-neutral-900 px-3 py-1 text-[12px] text-white">{{ t('ld.finishedNote') }}</p>
    </div>
  </div>
</template>
