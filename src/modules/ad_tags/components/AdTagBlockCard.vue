<script setup lang="ts">
/** O cartão de um bloco da ad tag: fechado mostra o resumo; aberto, onde entra, aparelhos, páginas, atualização e o artigo MGID. */
import { computed, ref } from 'vue'
import { DropdownMenuLabel, DropdownMenuRoot, DropdownMenuSeparator, DropdownMenuTrigger } from 'reka-ui'
import {
  AlertTriangle,
  Check,
  ChevronDown,
  ChevronUp,
  GripVertical,
  Maximize,
  Monitor,
  MoreHorizontal,
  MousePointerClick,
  PanelBottom,
  PanelTop,
  RefreshCw,
  Smartphone,
  TextQuote,
  Trash2,
  X,
} from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import { t, type Key } from '@/lib/i18n'
import { blockName, cleanPath, KIND_HINT, LIMITS, REFRESH_OPTIONS, unitCode } from '@/modules/ad_tags/rules'
import type { AdTagBlock, AdTagBlockKind } from '@/modules/ad_tags/types'

const props = defineProps<{ block: AdTagBlock; index: number; total: number; open: boolean; problem: Key | null; picking: boolean; readonly: boolean; day: string | null }>()
const emit = defineEmits<{ toggle: []; change: [patch: Partial<AdTagBlock>]; move: [offset: number]; remove: []; pick: []; arm: [armed: boolean] }>()
const pathText = ref('')

const ICONS: Record<AdTagBlockKind, typeof Monitor> = { anchor: PanelBottom, interstitial: Maximize, fixed: PanelTop, content: TextQuote }
const icon = computed(() => ICONS[props.block.kind])
const name = computed(() => blockName(props.block))
const where = computed(() => {
  const block = props.block
  if (block.kind === 'content') return block.selector ? t(block.side === 'before' ? 'at.where.before' : 'at.where.after', { selector: block.selector }) : t('at.problem.noSelector')
  if (block.kind === 'interstitial') return t('at.where.interstitial')
  return block.edge === 'top' ? t('at.where.top') : t('at.where.bottom')
})
const pages = computed(() => {
  const block = props.block
  if (block.rule_mode === 'all') return t('at.pages.all')
  return t(block.rule_mode === 'include' ? 'at.pages.onlyCount' : 'at.pages.exceptCount', { n: block.paths.length })
})
const problemText = computed(() => (props.problem ? t(props.problem, { code: unitCode(props.block), day: props.day ?? '' }) : null))

/** Junta o caminho digitado à regra, sem repetir. */
function addPath() {
  const path = cleanPath(pathText.value)
  if (path && !props.block.paths.includes(path) && props.block.paths.length < LIMITS.paths) emit('change', { paths: [...props.block.paths, path] })
  pathText.value = ''
}

/** O texto da opção de atualização: desligada ou os segundos. */
function refreshLabel(seconds: number | null): string {
  return seconds === null ? t('at.refresh.off') : t('at.refresh.seconds', { n: seconds })
}
</script>

<template>
  <div :class="['rounded-lg border bg-card transition-shadow', open && 'shadow-sm', picking && 'ring-2 ring-sky-500', problem && !open && 'border-warn/50']">
    <div class="flex items-center gap-2 py-2.5 pl-1.5 pr-2">
      <span
        v-if="!readonly"
        class="cursor-grab rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground active:cursor-grabbing"
        :aria-label="t('at.drag')"
        :title="t('at.drag')"
        @pointerdown="emit('arm', true)"
        @pointerup="emit('arm', false)"
        ><GripVertical class="size-4"
      /></span>
      <button type="button" class="flex min-w-0 flex-1 items-center gap-3 text-left" :aria-expanded="open" @click="emit('toggle')">
        <span :class="['grid size-9 shrink-0 place-items-center rounded-md border', open ? 'bg-foreground text-background' : 'bg-muted text-muted-foreground']"><component :is="icon" class="size-4" /></span>
        <span class="min-w-0 flex-1">
          <span class="flex items-center gap-2">
            <span class="font-medium">{{ name }}</span>
            <span v-if="block.refresh_seconds" class="inline-flex items-center gap-0.5 text-[12px] text-muted-foreground"><RefreshCw class="size-3" />{{ block.refresh_seconds }} s</span>
          </span>
          <span :class="['flex items-center gap-1 truncate text-[12px]', problem ? 'text-warn' : 'text-muted-foreground']">
            <AlertTriangle v-if="problem" class="size-3 shrink-0" /><span class="truncate">{{ problemText ?? where }}</span>
          </span>
        </span>
        <span class="flex shrink-0 items-center gap-1 text-muted-foreground" :aria-label="[block.desktop && t('at.device.desktop'), block.mobile && t('at.device.mobile')].filter(Boolean).join(', ') || t('at.device.none')">
          <Monitor :class="['size-3.5', !block.desktop && 'opacity-25']" /><Smartphone :class="['size-3.5', !block.mobile && 'opacity-25']" />
        </span>
      </button>
      <DropdownMenuRoot v-if="!readonly">
        <DropdownMenuTrigger as-child>
          <Button variant="ghost" size="icon" class="size-8 shrink-0" :aria-label="t('at.blockActions', { name })"><MoreHorizontal class="size-4" /></Button>
        </DropdownMenuTrigger>
        <MenuContent align="end" class="w-52">
          <DropdownMenuLabel class="px-2 py-1.5 text-[12px] text-muted-foreground">{{ t('at.loadOrder', { n: index + 1 }) }}</DropdownMenuLabel>
          <MenuItem :disabled="index === 0" @select="emit('move', -1)"><ChevronUp class="size-4" />{{ t('at.loadBefore') }}</MenuItem>
          <MenuItem :disabled="index === total - 1" @select="emit('move', 1)"><ChevronDown class="size-4" />{{ t('at.loadAfter') }}</MenuItem>
          <DropdownMenuSeparator class="-mx-1 my-1 h-px bg-border" />
          <MenuItem danger @select="emit('remove')"><Trash2 class="size-4" />{{ t('at.removeBlock') }}</MenuItem>
        </MenuContent>
      </DropdownMenuRoot>
    </div>
    <fieldset v-if="open" :disabled="readonly" class="grid gap-5 border-t px-4 pb-4 pt-3">
      <p class="text-[12px] leading-snug text-muted-foreground">{{ t(KIND_HINT[block.kind]) }}</p>
      <p v-if="problem === 'at.problem.missingUnit'" class="flex items-start gap-2 rounded-md border border-warn/40 bg-warn/5 px-2.5 py-2 text-[12px] text-warn">
        <AlertTriangle class="mt-0.5 size-3.5 shrink-0" />{{ t('at.missingUnitHint', { code: unitCode(block), day: day ?? '' }) }}
      </p>
      <section v-if="block.kind !== 'interstitial'" class="grid gap-2">
        <h4 class="text-[13px] font-medium">{{ t('at.whereTitle') }}</h4>
        <template v-if="block.kind === 'content'">
          <div role="radiogroup" :aria-label="t('at.side')" class="inline-flex w-fit flex-wrap rounded-md border bg-muted p-0.5">
            <button
              v-for="side in ['before', 'after'] as const"
              :key="side"
              type="button"
              role="radio"
              :aria-checked="block.side === side"
              :class="['inline-flex h-8 items-center rounded px-3 text-[13px] font-medium', block.side === side ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground']"
              @click="emit('change', { side })"
            >
              {{ t(side === 'before' ? 'at.side.before' : 'at.side.after') }}
            </button>
          </div>
          <div :class="['flex items-center rounded-md border bg-background focus-within:ring-2 focus-within:ring-ring', !block.selector && 'border-warn/60']">
            <Input
              :model-value="block.selector ?? ''"
              :aria-label="t('at.selector')"
              :maxlength="LIMITS.selector"
              class="h-9 flex-1 border-0 font-mono text-[13px] shadow-none focus-visible:ring-0"
              placeholder="article p:nth-of-type(2)"
              @update:model-value="(value) => emit('change', { selector: String(value) })"
            />
            <button
              v-if="!readonly"
              type="button"
              :class="['mr-1 inline-flex h-7 shrink-0 items-center gap-1.5 rounded px-2 text-[12px] font-medium', picking ? 'bg-sky-600 text-white' : 'text-muted-foreground hover:bg-muted hover:text-foreground']"
              @click="emit('pick')"
            >
              <MousePointerClick class="size-3.5" />{{ picking ? t('common.cancel') : t('at.pickOnSite') }}
            </button>
          </div>
          <p v-if="picking" class="flex items-center gap-2 rounded-md bg-sky-50 px-2.5 py-2 text-[12px] text-sky-800"><MousePointerClick class="size-3.5 shrink-0" />{{ t('at.pickHint') }}</p>
          <p v-else class="text-[12px] text-muted-foreground">{{ block.selector ? t('at.selectorHint') : t('at.selectorEmptyHint') }}</p>
        </template>
        <template v-else>
          <div role="radiogroup" :aria-label="t('at.edge')" class="inline-flex w-fit flex-wrap rounded-md border bg-muted p-0.5">
            <button
              v-for="edge in ['top', 'bottom'] as const"
              :key="edge"
              type="button"
              role="radio"
              :aria-checked="block.edge === edge"
              :class="['inline-flex h-8 items-center gap-1.5 rounded px-3 text-[13px] font-medium', block.edge === edge ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground']"
              @click="emit('change', { edge })"
            >
              <component :is="edge === 'top' ? PanelTop : PanelBottom" class="size-3.5" />{{ t(edge === 'top' ? 'at.edge.top' : 'at.edge.bottom') }}
            </button>
          </div>
        </template>
      </section>
      <section class="grid gap-2">
        <h4 class="text-[13px] font-medium">{{ t('at.devices') }}</h4>
        <div class="grid grid-cols-2 gap-2">
          <button
            v-for="device in ['desktop', 'mobile'] as const"
            :key="device"
            type="button"
            :aria-pressed="block[device]"
            :class="['flex h-10 min-w-0 items-center gap-2 rounded-md border px-3 text-[13px] font-medium', block[device] ? 'border-foreground' : 'text-muted-foreground hover:text-foreground']"
            @click="emit('change', { [device]: !block[device] })"
          >
            <component :is="device === 'desktop' ? Monitor : Smartphone" class="size-4 shrink-0" />
            <span class="flex-1 truncate text-left">{{ t(device === 'desktop' ? 'at.device.desktop' : 'at.device.mobileTablet') }}</span>
            <span :class="['grid size-4 shrink-0 place-items-center rounded-sm border', block[device] ? 'border-foreground bg-foreground text-background' : 'bg-background']"><Check v-if="block[device]" class="size-3" /></span>
          </button>
        </div>
      </section>
      <section class="grid gap-2">
        <div class="flex items-baseline justify-between gap-2">
          <h4 class="text-[13px] font-medium">{{ t('at.pages') }}</h4>
          <span class="text-[12px] text-muted-foreground">{{ pages }}</span>
        </div>
        <div role="radiogroup" :aria-label="t('at.pages')" class="inline-flex w-fit flex-wrap rounded-md border bg-muted p-0.5">
          <button
            v-for="mode in ['all', 'include', 'exclude'] as const"
            :key="mode"
            type="button"
            role="radio"
            :aria-checked="block.rule_mode === mode"
            :class="['inline-flex h-8 items-center rounded px-3 text-[13px] font-medium', block.rule_mode === mode ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground']"
            @click="emit('change', { rule_mode: mode })"
          >
            {{ t(`at.pages.${mode}`) }}
          </button>
        </div>
        <template v-if="block.rule_mode !== 'all'">
          <div class="flex gap-2">
            <Input v-model="pathText" :aria-label="t('at.path')" class="h-9 font-mono text-[13px]" placeholder="/receitas/*" @keydown.enter.prevent="addPath" />
            <Button variant="outline" :disabled="!pathText.trim()" @click="addPath">{{ t('at.addPath') }}</Button>
          </div>
          <div class="flex flex-wrap gap-1.5">
            <span v-for="path in block.paths" :key="path" class="inline-flex items-center gap-1 rounded border bg-muted px-2 py-0.5 font-mono text-[12px]">
              /{{ path }}
              <button v-if="!readonly" type="button" :aria-label="t('at.removePath', { path: `/${path}` })" @click="emit('change', { paths: block.paths.filter((item) => item !== path) })"><X class="size-3" /></button>
            </span>
          </div>
          <p class="text-[12px] text-muted-foreground">{{ t('at.pathHint') }}</p>
        </template>
      </section>
      <section v-if="block.kind !== 'interstitial'" class="grid gap-2">
        <div class="flex items-baseline justify-between gap-2">
          <h4 class="text-[13px] font-medium">{{ t('at.refresh') }}</h4>
          <span v-if="block.refresh_seconds" class="text-[12px] text-muted-foreground">{{ t('at.refreshLimit') }}</span>
        </div>
        <div role="radiogroup" :aria-label="t('at.refresh')" class="inline-flex w-fit max-w-full flex-wrap rounded-md border bg-muted p-0.5">
          <button
            v-for="seconds in REFRESH_OPTIONS"
            :key="String(seconds)"
            type="button"
            role="radio"
            :aria-checked="block.refresh_seconds === seconds"
            :class="['inline-flex h-8 items-center rounded px-3 text-[13px] font-medium', block.refresh_seconds === seconds ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground']"
            @click="emit('change', { refresh_seconds: seconds })"
          >
            {{ refreshLabel(seconds) }}
          </button>
        </div>
        <p class="text-[12px] text-muted-foreground">{{ block.refresh_seconds ? t('at.refreshOnHint', { n: block.refresh_seconds }) : t('at.refreshOffHint') }}</p>
      </section>
      <details v-if="block.kind === 'content'" class="group rounded-md border px-3 py-2.5" :open="!!block.mgid_article">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-2 text-[13px] font-medium">
          <span>{{ t('at.mgidArticle') }}<span v-if="block.mgid_article" class="font-normal text-muted-foreground"> · {{ t('at.mgidArticleOn') }}</span></span>
          <ChevronDown class="size-4 text-muted-foreground transition-transform group-open:rotate-180" />
        </summary>
        <div class="grid gap-1.5 pt-3">
          <label :for="`at-mgid-${index}`" class="text-[12px] text-muted-foreground">{{ t('at.mgidArticleLabel') }}</label>
          <Input
            :id="`at-mgid-${index}`"
            :model-value="block.mgid_article ?? ''"
            :maxlength="LIMITS.text"
            class="h-9 font-mono text-[13px]"
            :placeholder="t('at.optional')"
            @update:model-value="(value) => emit('change', { mgid_article: String(value) })"
          />
          <p class="text-[12px] text-muted-foreground">{{ t('at.mgidArticleHint') }}</p>
        </div>
      </details>
    </fieldset>
  </div>
</template>
