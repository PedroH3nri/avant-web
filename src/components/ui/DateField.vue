<script setup lang="ts">
/** Campo de data única: parece um campo de texto e abre um mês com Limpar e Hoje; o valor é ISO (``2026-11-25``). */
import { ref } from 'vue'
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import CalendarMonth from '@/components/ui/CalendarMonth.vue'
import { locale, t } from '@/lib/i18n'
import { monthTitle, numericDate, outOfBounds, shiftMonth, todayIso } from '@/lib/dates'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })
const model = defineModel<string>({ default: '' })
const props = defineProps<{ min?: string; max?: string; class?: string; invalid?: boolean; disabled?: boolean; id?: string; ariaLabel?: string; clearable?: boolean }>()

const open = ref(false)
const month = ref('')

/** Abre no mês da data escolhida (ou no de hoje). */
function toggle(next: boolean) {
  if (next) month.value = (model.value || todayIso()).slice(0, 7)
  open.value = next
}

/** Guarda o dia e fecha. */
function choose(iso: string) {
  model.value = iso
  open.value = false
}
</script>

<template>
  <PopoverRoot :open="open" @update:open="toggle">
    <PopoverTrigger as-child>
      <button
        :id="id"
        type="button"
        :disabled="disabled"
        :aria-label="ariaLabel ? `${ariaLabel}: ${model ? numericDate(model, locale) : t('dates.pickDay')}` : undefined"
        :aria-invalid="invalid || undefined"
        :class="
          cn(
            'border-input flex h-10 w-full min-w-0 items-center justify-between gap-2 rounded-md border bg-[hsl(var(--field))] px-3 text-left text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 aria-[invalid=true]:border-bad',
            props.class,
          )
        "
      >
        <span :class="cn('truncate tnum', !model && 'text-muted-foreground')">{{ model ? numericDate(model, locale) : t('dates.pickDay') }}</span>
        <CalendarDays class="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
      </button>
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        align="start"
        :side-offset="4"
        :collision-padding="8"
        class="z-50 w-[276px] rounded-md border bg-popover p-3 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        @open-auto-focus.prevent
      >
        <div class="mb-1 flex h-8 items-center justify-between">
          <Button variant="ghost" size="icon" class="size-8" :aria-label="t('dates.previousMonth')" @click="month = shiftMonth(month, -1)"><ChevronLeft class="size-4" aria-hidden="true" /></Button>
          <span class="text-[14px] font-medium first-letter:uppercase">{{ monthTitle(month, locale) }}</span>
          <Button variant="ghost" size="icon" class="size-8" :aria-label="t('dates.nextMonth')" @click="month = shiftMonth(month, 1)"><ChevronRight class="size-4" aria-hidden="true" /></Button>
        </div>
        <CalendarMonth :month="month" :start="model || null" :end="model || null" :min="min" :max="max" @pick="choose" />
        <div class="mt-2 flex justify-between border-t pt-2">
          <Button v-if="clearable" variant="ghost" size="sm" @click="choose('')">{{ t('dates.clear') }}</Button>
          <span v-else />
          <Button variant="outline" size="sm" :disabled="outOfBounds(todayIso(), min, max)" @click="choose(todayIso())">{{ t('dates.today') }}</Button>
        </div>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
