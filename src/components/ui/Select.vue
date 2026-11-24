<script setup lang="ts">
/**
 * Select do painel no estilo do Select2: botão com a opção escolhida e lista própria num popover,
 * com busca quando há muitas opções e teclado (setas, Home/End, Enter, Esc e primeira letra).
 */
import { computed, nextTick, ref, useId, watch } from 'vue'
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
import { Check, ChevronDown, Search } from 'lucide-vue-next'
import { t } from '@/lib/i18n'
import { cn } from '@/lib/utils'

type SelectOption = { value: string; label: string }

defineOptions({ inheritAttrs: false })
const model = defineModel<string>({ default: '' })
const props = defineProps<{ options: SelectOption[]; class?: string; placeholder?: string }>()

const SEARCH_FROM_OPTIONS = 8
const open = ref(false)
const query = ref('')
const highlighted = ref(0)
const searchInput = ref<HTMLInputElement | null>(null)
const listbox = ref<HTMLElement | null>(null)
const listboxId = useId()

const showSearch = computed(() => props.options.length >= SEARCH_FROM_OPTIONS)
const selected = computed(() => props.options.find((option) => option.value === model.value))
const visibleOptions = computed(() => {
  const needle = normalize(query.value.trim())
  if (!needle) return props.options
  return props.options.filter((option) => normalize(option.label).includes(needle))
})
const activeOptionId = computed(() => (visibleOptions.value[highlighted.value] ? optionId(highlighted.value) : undefined))

/** Texto sem acento e em minúsculas, para a busca achar "Sao" em "São". */
function normalize(text: string) {
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
}

/** Id do elemento da opção na lista aberta. */
function optionId(position: number) {
  return `${listboxId}-option-${position}`
}

/** Leva o destaque para a opção da posição e rola a lista até ela. */
function highlight(position: number) {
  const lastPosition = visibleOptions.value.length - 1
  highlighted.value = Math.max(0, Math.min(position, lastPosition))
  nextTick(() => document.getElementById(optionId(highlighted.value))?.scrollIntoView?.({ block: 'nearest' }))
}

/** Escolhe a opção, avisa a tela só se mudou e fecha a lista. */
function choose(option: SelectOption | undefined) {
  if (!option) return
  if (option.value !== model.value) model.value = option.value
  open.value = false
}

/** Pula para a próxima opção que começa com a letra digitada (lista sem busca). */
function jumpToLetter(letter: string) {
  const options = visibleOptions.value
  const needle = normalize(letter)
  for (let step = 1; step <= options.length; step += 1) {
    const position = (highlighted.value + step) % options.length
    if (normalize(options[position]?.label ?? '').startsWith(needle)) return highlight(position)
  }
}

/** Teclado da lista aberta: setas, Home/End, Enter escolhe e letra pula (Esc fica com o popover). */
function onListKeydown(event: KeyboardEvent) {
  const moves: Record<string, () => number> = {
    ArrowDown: () => highlighted.value + 1,
    ArrowUp: () => highlighted.value - 1,
    Home: () => 0,
    End: () => visibleOptions.value.length - 1,
    PageDown: () => highlighted.value + 10,
    PageUp: () => highlighted.value - 10,
  }
  const move = moves[event.key]
  if (move) {
    event.preventDefault()
    return highlight(move())
  }
  if (event.key === 'Enter') {
    event.preventDefault()
    return choose(visibleOptions.value[highlighted.value])
  }
  if (event.key === 'Tab') open.value = false
  if (!showSearch.value && event.key.length === 1 && !event.ctrlKey && !event.metaKey) jumpToLetter(event.key)
}

/** Abre a lista pelas setas, como no select do navegador. */
function onTriggerKeydown(event: KeyboardEvent) {
  if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return
  event.preventDefault()
  open.value = true
}

/** Ao abrir, limpa a busca, destaca a opção escolhida e põe o foco na busca ou na lista. */
function onOpenFocus(event: Event) {
  event.preventDefault()
  ;(showSearch.value ? searchInput.value : listbox.value)?.focus()
}

watch(open, (isOpen) => {
  if (!isOpen) return
  query.value = ''
  highlight(Math.max(0, props.options.findIndex((option) => option.value === model.value)))
})
watch(query, () => highlight(0))
</script>

<template>
  <PopoverRoot v-model:open="open">
    <PopoverTrigger as-child>
      <button
        v-bind="$attrs"
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        :aria-expanded="open"
        :aria-controls="open ? listboxId : undefined"
        :data-state="open ? 'open' : 'closed'"
        :class="
          cn(
            'flex h-10 w-full min-w-0 items-center justify-between gap-2 rounded-md border border-input bg-field px-3 text-left text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=open]:border-foreground/40',
            props.class,
          )
        "
        @keydown="onTriggerKeydown"
      >
        <span :class="cn('min-w-0 truncate', !selected && 'text-muted-foreground')">{{ selected?.label ?? placeholder ?? t('common.select.placeholder') }}</span>
        <ChevronDown :class="cn('size-4 shrink-0 text-muted-foreground transition-transform', open && 'rotate-180')" aria-hidden="true" />
      </button>
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        align="start"
        :side-offset="4"
        :collision-padding="8"
        class="z-50 w-[var(--reka-popover-trigger-width)] min-w-[12rem] max-w-[calc(100vw-16px)] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        @open-auto-focus="onOpenFocus"
        @keydown="onListKeydown"
      >
        <div v-if="showSearch" class="flex items-center gap-2 border-b px-3">
          <Search class="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          <input
            ref="searchInput"
            v-model="query"
            type="text"
            role="searchbox"
            autocomplete="off"
            spellcheck="false"
            :aria-label="t('common.select.search')"
            :aria-controls="listboxId"
            :aria-activedescendant="activeOptionId"
            :placeholder="t('common.select.search')"
            class="h-10 w-full min-w-0 bg-transparent text-[14px] placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
        <ul
          :id="listboxId"
          ref="listbox"
          role="listbox"
          tabindex="-1"
          :aria-activedescendant="showSearch ? undefined : activeOptionId"
          class="max-h-[min(280px,var(--reka-popover-content-available-height))] overflow-y-auto p-1 focus:outline-none"
        >
          <li
            v-for="(option, position) in visibleOptions"
            :id="optionId(position)"
            :key="option.value"
            role="option"
            :data-value="option.value"
            :aria-selected="option.value === model"
            :data-highlighted="position === highlighted || undefined"
            class="flex cursor-default select-none items-center gap-2 rounded-sm py-2 pl-2 pr-2 text-[14px] data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground"
            @pointermove="highlighted = position"
            @click="choose(option)"
          >
            <span class="min-w-0 flex-1 truncate">{{ option.label }}</span>
            <Check v-if="option.value === model" class="size-4 shrink-0" aria-hidden="true" />
          </li>
          <li v-if="!visibleOptions.length" role="presentation" class="px-2 py-6 text-center text-[13px] text-muted-foreground">{{ t('common.select.empty') }}</li>
        </ul>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
