<script setup lang="ts">
/** A prévia da ad tag: uma página de exemplo do site com os blocos no lugar, o seletor de elementos e o loader do tag.js por cima. */
import { computed, onBeforeUnmount, ref, useTemplateRef, watch } from 'vue'
import { renderLoader } from 'avant-tag/loader'
import { t } from '@/lib/i18n'
import { blockName, blockOnPage } from '@/modules/ad_tags/rules'
import type { AdTagBlock, AdTagSide } from '@/modules/ad_tags/types'
import type { PreviewLoader } from '@/modules/loaders/rules'

type ElementKind = 'meta' | 'title' | 'image' | 'text' | 'subtitle'

const props = defineProps<{
  domain: string
  blocks: AdTagBlock[]
  device: 'desktop' | 'mobile'
  path: string
  picking: number | null
  loader: PreviewLoader | null
  playing: boolean
  exiting: boolean
  language: string
}>()
const emit = defineEmits<{ pick: [selector: string, side: AdTagSide]; close: [] }>()
const host = useTemplateRef<HTMLDivElement>('host')
const hover = ref<{ selector: string; side: AdTagSide } | null>(null)

const ELEMENTS: { selector: string; kind: ElementKind }[] = [
  { selector: 'article .meta', kind: 'meta' },
  { selector: 'article h1', kind: 'title' },
  { selector: 'article figure', kind: 'image' },
  { selector: 'article p:nth-of-type(1)', kind: 'text' },
  { selector: 'article p:nth-of-type(2)', kind: 'text' },
  { selector: 'article h2', kind: 'subtitle' },
  { selector: 'article p:nth-of-type(3)', kind: 'text' },
  { selector: 'article p:nth-of-type(4)', kind: 'text' },
]

const pickingBlock = computed(() => (props.picking === null ? null : (props.blocks[props.picking] ?? null)))
const visible = computed(() => props.blocks.filter((block) => block[props.device] && blockOnPage(block, props.path)))
const anchor = computed(() => visible.value.find((block) => block.kind === 'anchor') ?? null)
const fixed = computed(() => visible.value.find((block) => block.kind === 'fixed') ?? null)
const interstitial = computed(() => visible.value.some((block) => block.kind === 'interstitial'))
const missing = computed(() => visible.value.filter((block) => block.kind === 'content' && !ELEMENTS.some((element) => element.selector === (block.selector ?? '').trim())))
const sizes = computed(() => (props.device === 'desktop' ? '728 × 90 · 336 × 280' : '336 × 280 · 300 × 250'))

/** Os blocos de conteúdo antes ou depois do elemento, sem o que está sendo escolhido. */
function slotsAt(selector: string, side: AdTagSide): AdTagBlock[] {
  return visible.value.filter((block) => block.kind === 'content' && (block.selector ?? '').trim() === selector && block.side === side && !(pickingBlock.value === block && hover.value))
}

/** Marca o lado do elemento em que o mouse está: metade de cima entra antes, a de baixo depois. */
function track(event: MouseEvent, selector: string) {
  if (!pickingBlock.value) return
  const element = (event.currentTarget as HTMLElement).querySelector('[data-preview-element]')
  const rect = element?.getBoundingClientRect()
  const side: AdTagSide = rect && event.clientY < rect.top + rect.height / 2 ? 'before' : 'after'
  if (hover.value?.selector !== selector || hover.value.side !== side) hover.value = { selector, side }
}

/** Fixa o lugar marcado para o bloco que está sendo escolhido. */
function choose() {
  if (!pickingBlock.value || !hover.value) return
  emit('pick', hover.value.selector, hover.value.side)
  hover.value = null
}

/** Desenha o loader do tag.js por cima da página enquanto ele toca. */
function drawLoader() {
  const target = host.value
  if (!target) return
  target.replaceChildren()
  if (!props.loader || !props.playing) return
  const layer = renderLoader(target, props.loader, {
    mode: 'loading',
    language: props.language,
    domain: props.domain,
    iconUrl: null,
    inline: true,
    onContinue: () => emit('close'),
    onSkip: () => emit('close'),
  })
  if (props.exiting) layer.classList.add('avl-out')
}

watch(() => [props.loader, props.playing, props.exiting, props.language, props.domain, host.value], drawLoader, { deep: true })
watch(() => props.picking, () => (hover.value = null))
onBeforeUnmount(() => host.value?.replaceChildren())
</script>

<template>
  <div :class="['mx-auto overflow-hidden rounded-xl border bg-card shadow-sm', device === 'mobile' ? 'w-[360px] max-w-full' : 'w-full']">
    <div class="flex items-center gap-2 border-b bg-muted px-3 py-2">
      <div v-if="device === 'desktop'" class="flex gap-1.5" aria-hidden="true">
        <span v-for="dot in 3" :key="dot" class="size-2.5 rounded-full bg-border" />
      </div>
      <div class="min-w-0 flex-1 truncate rounded-md bg-background px-3 py-1 font-mono text-[12px] text-muted-foreground">https://{{ domain }}{{ path }}</div>
    </div>
    <div class="relative">
      <div class="relative h-[420px] overflow-y-auto bg-white text-neutral-800 lg:h-[calc(100dvh-300px)] lg:min-h-[420px]">
        <div v-if="fixed && fixed.edge === 'top'" class="sticky top-0 z-10 grid h-12 place-items-center border-b-2 border-dashed border-sky-400 bg-sky-50 text-[12px] font-medium text-sky-800">
          {{ blockName(fixed) }} · {{ device === 'desktop' ? '728 × 90' : '320 × 50' }}
        </div>
        <div v-if="anchor && anchor.edge === 'top'" class="sticky top-0 z-10 grid h-14 place-items-center border-b-2 border-dashed border-sky-400 bg-sky-50 text-[12px] font-medium text-sky-800">
          {{ blockName(anchor) }} · 320 × 50
        </div>
        <div class="flex items-center justify-between border-b px-5 py-3" aria-hidden="true">
          <span class="font-serif text-[18px] font-bold">{{ domain.split('.')[0] }}</span>
          <span class="flex gap-3 text-[12px] text-neutral-500">
            <span>{{ t('at.preview.menu1') }}</span><span>{{ t('at.preview.menu2') }}</span><span>{{ t('at.preview.menu3') }}</span>
          </span>
        </div>
        <div :class="['grid gap-6 p-5', device === 'desktop' && 'grid-cols-[minmax(0,1fr)_180px]']">
          <article class="min-w-0">
            <div
              v-for="element in ELEMENTS"
              :key="element.selector"
              :class="pickingBlock && 'cursor-crosshair'"
              @mousemove="track($event, element.selector)"
              @mouseleave="hover = null"
              @click="choose"
            >
              <div v-for="block in slotsAt(element.selector, 'before')" :key="`before-${blockName(block)}`" class="my-3 grid place-items-center rounded-md border-2 border-dashed border-sky-400 bg-sky-50 py-5 text-center text-[12px] font-medium text-sky-800">
                {{ blockName(block) }}<span class="font-normal opacity-80">{{ sizes }}<template v-if="block.refresh_seconds"> · {{ t('at.preview.refresh', { n: block.refresh_seconds }) }}</template></span>
              </div>
              <div v-if="pickingBlock && hover?.selector === element.selector && hover.side === 'before'" class="my-3 grid place-items-center rounded-md border-2 border-dashed border-sky-600 bg-sky-100 py-5 text-center text-[12px] font-medium text-sky-900 shadow-[0_0_0_4px_rgba(14,165,233,0.15)]">
                <span class="mb-0.5 text-[11px] font-normal">{{ t('at.preview.clickBefore', { selector: element.selector }) }}</span>{{ blockName(pickingBlock) }}
              </div>
              <div data-preview-element :class="['relative rounded-sm', pickingBlock && hover?.selector === element.selector && 'outline outline-2 outline-offset-2 outline-sky-500']">
                <p v-if="element.kind === 'meta'" class="text-[12px] text-neutral-500">{{ t('at.preview.meta') }}</p>
                <h3 v-else-if="element.kind === 'title'" class="mt-1 font-serif text-[24px] font-bold leading-tight">{{ t('at.preview.title') }}</h3>
                <div v-else-if="element.kind === 'image'" class="mt-3 h-36 rounded-md bg-gradient-to-br from-purple-200 to-purple-400" />
                <h4 v-else-if="element.kind === 'subtitle'" class="mt-4 font-serif text-[18px] font-semibold">{{ t('at.preview.subtitle') }}</h4>
                <p v-else class="mt-3 text-[14px] leading-relaxed text-neutral-600">{{ t('at.preview.text') }}</p>
              </div>
              <div v-if="pickingBlock && hover?.selector === element.selector && hover.side === 'after'" class="my-3 grid place-items-center rounded-md border-2 border-dashed border-sky-600 bg-sky-100 py-5 text-center text-[12px] font-medium text-sky-900 shadow-[0_0_0_4px_rgba(14,165,233,0.15)]">
                <span class="mb-0.5 text-[11px] font-normal">{{ t('at.preview.clickAfter', { selector: element.selector }) }}</span>{{ blockName(pickingBlock) }}
              </div>
              <div v-for="block in slotsAt(element.selector, 'after')" :key="`after-${blockName(block)}`" class="my-3 grid place-items-center rounded-md border-2 border-dashed border-sky-400 bg-sky-50 py-5 text-center text-[12px] font-medium text-sky-800">
                {{ blockName(block) }}<span class="font-normal opacity-80">{{ sizes }}<template v-if="block.refresh_seconds"> · {{ t('at.preview.refresh', { n: block.refresh_seconds }) }}</template></span>
              </div>
            </div>
            <p v-for="block in missing" :key="`missing-${blockName(block)}`" class="mt-3 rounded-md border border-dashed border-amber-400 bg-amber-50 px-3 py-2 text-[12px] text-amber-900">
              {{ t('at.preview.missing', { name: blockName(block), selector: block.selector || t('at.preview.empty') }) }}
            </p>
          </article>
          <aside v-if="device === 'desktop'" class="grid content-start gap-3" aria-hidden="true">
            <div class="h-4 w-20 rounded bg-neutral-200" />
            <div v-for="item in 3" :key="item" class="h-16 rounded bg-neutral-100" />
          </aside>
        </div>
        <div v-if="interstitial" class="pointer-events-none absolute right-3 top-14 rounded-full bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-white">{{ t('at.preview.interstitial') }}</div>
        <div v-if="anchor && anchor.edge === 'bottom'" class="sticky bottom-0 z-10 grid h-14 place-items-center border-t-2 border-dashed border-sky-400 bg-sky-50 text-[12px] font-medium text-sky-800">
          {{ blockName(anchor) }} · 320 × 50
        </div>
        <div v-if="fixed && fixed.edge === 'bottom'" class="sticky bottom-0 z-10 grid h-12 place-items-center border-t-2 border-dashed border-sky-400 bg-sky-50 text-[12px] font-medium text-sky-800">
          {{ blockName(fixed) }}
        </div>
      </div>
      <div ref="host" :class="['absolute inset-0', !(loader && playing) && 'pointer-events-none']" />
    </div>
  </div>
</template>
