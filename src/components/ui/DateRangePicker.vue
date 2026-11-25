<script setup lang="ts">
/** Seletor de período: atalhos à esquerda, dois meses (um no celular) e Aplicar; a tela só muda ao aplicar. */
import { computed, ref } from 'vue'
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import CalendarMonth from '@/components/ui/CalendarMonth.vue'
import { locale, t, tn } from '@/lib/i18n'
import { dayCount, monthTitle, ordered, rangeText, shiftMonth, todayIso, type DayRange } from '@/lib/dates'
import type { PeriodPreset, PeriodValue } from '@/lib/periods'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })
const model = defineModel<PeriodValue>({ required: true })
const props = defineProps<{ presets: PeriodPreset[]; min?: string; max?: string; maxDays?: number; class?: string; ariaLabel?: string; custom?: boolean }>()

const open = ref(false)
const draft = ref<PeriodValue>(model.value)
const anchor = ref<string | null>(null)
const hovered = ref<string | null>(null)
const firstMonth = ref('')
const narrow = ref(false)

const presetLabel = computed(() => props.presets.find((preset) => preset.value === model.value.preset)?.label ?? null)
const months = computed(() => (narrow.value ? [firstMonth.value] : [firstMonth.value, shiftMonth(firstMonth.value, 1)]))
const shown = computed<DayRange>(() => (anchor.value ? ordered(anchor.value, hovered.value ?? anchor.value) : draft.value))
const tooLong = computed(() => !!props.maxDays && dayCount(shown.value) > props.maxDays)
const latest = computed(() => props.max ?? todayIso())

/** Abre com o período aplicado e os meses dele à vista; fecha sem mudar nada. */
function toggle(next: boolean) {
  if (next) {
    narrow.value = typeof window !== 'undefined' && window.innerWidth < 640
    draft.value = { ...model.value }
    anchor.value = null
    hovered.value = null
    const endMonth = model.value.end.slice(0, 7)
    firstMonth.value = narrow.value ? endMonth : shiftMonth(endMonth, -1)
  }
  open.value = next
}

/** Escolhe um atalho e mostra os meses dele. */
function choosePreset(preset: PeriodPreset) {
  draft.value = { preset: preset.value, ...preset.range }
  anchor.value = null
  const endMonth = preset.range.end.slice(0, 7)
  firstMonth.value = narrow.value ? endMonth : shiftMonth(endMonth, -1)
}

/** Primeiro clique marca o começo; o segundo fecha o período (em qualquer ordem). */
function pick(iso: string) {
  if (!anchor.value) {
    anchor.value = iso
    draft.value = { preset: null, start: iso, end: iso }
    return
  }
  draft.value = { preset: null, ...ordered(anchor.value, iso) }
  anchor.value = null
}

/** Passa o período escolhido para a tela e fecha. */
function apply() {
  const range = anchor.value ? { start: anchor.value, end: anchor.value } : draft.value
  model.value = { preset: draft.value.preset, start: range.start, end: range.end }
  open.value = false
}

/** O texto do botão: o atalho e as datas, ou só as datas num período escolhido à mão. */
const triggerDates = computed(() => rangeText(model.value, locale.value))
const summary = computed(() => `${rangeText(shown.value, locale.value)} · ${tn('dates.days', dayCount(shown.value))}`)
</script>

<template>
  <PopoverRoot :open="open" @update:open="toggle">
    <PopoverTrigger as-child>
      <button
        type="button"
        :aria-label="ariaLabel ? `${ariaLabel}: ${presetLabel ?? triggerDates}` : undefined"
        :class="cn('border-input inline-flex h-10 min-w-0 items-center gap-2 rounded-md border bg-[hsl(var(--field))] px-3 text-left text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', props.class)"
      >
        <CalendarDays class="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
        <span v-if="presetLabel" class="shrink-0">{{ presetLabel }}</span>
        <span :class="cn('truncate tnum', presetLabel && 'text-muted-foreground')">{{ presetLabel ? `· ${triggerDates}` : triggerDates }}</span>
      </button>
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        align="start"
        :side-offset="4"
        :collision-padding="8"
        class="z-50 max-w-[calc(100vw-16px)] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        @open-auto-focus.prevent
      >
        <div class="flex flex-col sm:flex-row">
          <div class="flex gap-1 overflow-x-auto border-b p-2 sm:w-[168px] sm:flex-col sm:border-b-0 sm:border-r" role="listbox" :aria-label="t('dates.shortcuts')">
            <button
              v-for="preset in presets"
              :key="preset.value"
              type="button"
              role="option"
              :aria-selected="draft.preset === preset.value"
              :class="cn('shrink-0 rounded-md px-3 py-1.5 text-left text-[14px] transition-colors hover:bg-muted', draft.preset === preset.value && 'bg-muted font-medium')"
              @click="choosePreset(preset)"
            >
              {{ preset.label }}
            </button>
            <button
              v-if="custom !== false"
              type="button"
              role="option"
              :aria-selected="draft.preset === null"
              :class="cn('shrink-0 rounded-md px-3 py-1.5 text-left text-[14px] transition-colors hover:bg-muted', draft.preset === null && 'bg-muted font-medium')"
              @click="draft = { ...draft, preset: null }"
            >
              {{ t('dates.custom') }}
            </button>
          </div>
          <div class="min-w-0">
            <div class="flex gap-6 p-3">
              <div v-for="(month, position) in months" :key="month" class="w-[252px] max-w-full">
                <div class="mb-1 flex h-8 items-center justify-between">
                  <Button v-if="position === 0" variant="ghost" size="icon" class="size-8" :aria-label="t('dates.previousMonth')" @click="firstMonth = shiftMonth(firstMonth, -1)">
                    <ChevronLeft class="size-4" aria-hidden="true" />
                  </Button>
                  <span v-else class="size-8" />
                  <span class="text-[14px] font-medium first-letter:uppercase">{{ monthTitle(month, locale) }}</span>
                  <Button
                    v-if="position === months.length - 1"
                    variant="ghost"
                    size="icon"
                    class="size-8"
                    :aria-label="t('dates.nextMonth')"
                    :disabled="month >= latest.slice(0, 7)"
                    @click="firstMonth = shiftMonth(firstMonth, 1)"
                  >
                    <ChevronRight class="size-4" aria-hidden="true" />
                  </Button>
                  <span v-else class="size-8" />
                </div>
                <CalendarMonth :month="month" :start="shown.start" :end="shown.end" :min="min" :max="latest" @pick="pick" @hover="(iso) => (hovered = iso)" />
              </div>
            </div>
            <div class="flex flex-wrap items-center justify-between gap-3 border-t px-3 py-2.5">
              <span :class="cn('text-[13px] tnum', tooLong ? 'text-bad' : 'text-muted-foreground')" aria-live="polite">
                {{ tooLong ? t('dates.tooLong', { n: maxDays ?? 0 }) : summary }}
              </span>
              <div class="flex gap-2">
                <Button variant="ghost" size="sm" @click="open = false">{{ t('dates.cancel') }}</Button>
                <Button size="sm" :disabled="tooLong" @click="apply">{{ t('dates.apply') }}</Button>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
