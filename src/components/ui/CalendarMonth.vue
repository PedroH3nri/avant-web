<script setup lang="ts">
/** Um mês do calendário: dias da semana, dias do mês e o período marcado, com setas do teclado entre os dias. */
import { computed, nextTick, ref, watch } from 'vue'
import { locale } from '@/lib/i18n'
import { monthWeeks, outOfBounds, shiftDay, weekdayNames } from '@/lib/dates'
import { cn } from '@/lib/utils'

const props = defineProps<{ month: string; start?: string | null; end?: string | null; min?: string; max?: string }>()
const emit = defineEmits<{ pick: [iso: string]; hover: [iso: string | null] }>()

const weeks = computed(() => monthWeeks(props.month))
const weekdays = computed(() => weekdayNames(locale.value))
const grid = ref<HTMLElement | null>(null)
const focusable = ref('')

watch(
  () => [props.month, props.start] as const,
  () => {
    const inside = props.start?.startsWith(props.month) ? props.start : `${props.month}-01`
    focusable.value = inside
  },
  { immediate: true },
)

/** Classes de um dia conforme o período marcado e os limites. */
function dayClass(iso: string, inside: boolean) {
  const edge = iso === props.start || iso === props.end
  const middle = !!props.start && !!props.end && iso > props.start && iso < props.end
  return cn(
    'flex h-9 w-full items-center justify-center rounded-md text-[14px] tnum transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-35',
    !inside && 'text-muted-foreground/60',
    middle && 'rounded-none bg-muted',
    edge && 'bg-primary text-primary-foreground hover:bg-primary',
  )
}

/** Move o foco do teclado pelos dias com as setas, Home e End. */
function onKey(event: KeyboardEvent) {
  const steps: Record<string, number> = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }
  const step = steps[event.key]
  if (step === undefined) return
  event.preventDefault()
  const target = shiftDay(focusable.value, step)
  if (!target.startsWith(props.month) || outOfBounds(target, props.min, props.max)) return
  focusable.value = target
  nextTick(() => grid.value?.querySelector<HTMLButtonElement>(`[data-day="${target}"]`)?.focus())
}
</script>

<template>
  <div ref="grid" role="grid" class="grid gap-1" @keydown="onKey" @mouseleave="emit('hover', null)">
    <div role="row" class="grid grid-cols-7 gap-0">
      <span v-for="name in weekdays" :key="name" role="columnheader" class="flex h-8 items-center justify-center text-[12px] text-muted-foreground">{{ name }}</span>
    </div>
    <div v-for="week in weeks" :key="week[0]?.iso" role="row" class="grid grid-cols-7 gap-0">
      <button
        v-for="day in week"
        :key="day.iso"
        type="button"
        role="gridcell"
        :data-day="day.iso"
        :tabindex="day.iso === focusable ? 0 : -1"
        :aria-selected="day.iso === start || day.iso === end || undefined"
        :disabled="outOfBounds(day.iso, min, max)"
        :class="dayClass(day.iso, day.inside)"
        @click="emit('pick', day.iso)"
        @mouseenter="emit('hover', day.iso)"
        @focus="focusable = day.iso"
      >
        {{ Number(day.iso.slice(8)) }}
      </button>
    </div>
  </div>
</template>
