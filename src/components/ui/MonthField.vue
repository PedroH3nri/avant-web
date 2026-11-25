<script setup lang="ts">
/** Seletor de mês: o ano em cima e os doze meses numa grade; o valor é ``YYYY-MM``. */
import { computed, ref } from 'vue'
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import { locale, t } from '@/lib/i18n'
import { monthShort, monthTitle } from '@/lib/dates'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })
const model = defineModel<string>({ default: '' })
const props = defineProps<{ min?: string; max?: string; class?: string; id?: string; ariaLabel?: string; invalid?: boolean; disabled?: boolean }>()

const open = ref(false)
const year = ref(new Date().getFullYear())
const months = computed(() => Array.from({ length: 12 }, (_, index) => `${year.value}-${String(index + 1).padStart(2, '0')}`))

/** Abre no ano do mês escolhido. */
function toggle(next: boolean) {
  if (next) year.value = model.value ? Number(model.value.slice(0, 4)) : new Date().getFullYear()
  open.value = next
}

/** O mês fica fora de ``min`` e ``max``. */
function blocked(month: string) {
  return (!!props.min && month < props.min) || (!!props.max && month > props.max)
}

/** Guarda o mês e fecha. */
function choose(month: string) {
  model.value = month
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
        :aria-label="ariaLabel ? `${ariaLabel}: ${model ? monthTitle(model, locale) : t('dates.pickMonth')}` : undefined"
        :aria-invalid="invalid || undefined"
        :class="
          cn(
            'border-input flex h-10 w-full min-w-0 items-center justify-between gap-2 rounded-md border bg-[hsl(var(--field))] px-3 text-left text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 aria-[invalid=true]:border-bad',
            props.class,
          )
        "
      >
        <span :class="cn('truncate first-letter:uppercase', !model && 'text-muted-foreground')">{{ model ? monthTitle(model, locale) : t('dates.pickMonth') }}</span>
        <CalendarDays class="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
      </button>
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        align="start"
        :side-offset="4"
        :collision-padding="8"
        class="z-50 w-[264px] rounded-md border bg-popover p-3 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        @open-auto-focus.prevent
      >
        <div class="mb-3 flex items-center justify-between">
          <Button variant="ghost" size="icon" class="size-8" :aria-label="t('dates.previousYear')" :disabled="!!min && `${year - 1}-12` < min" @click="year -= 1"><ChevronLeft class="size-4" aria-hidden="true" /></Button>
          <span class="text-[14px] font-medium tnum">{{ year }}</span>
          <Button variant="ghost" size="icon" class="size-8" :aria-label="t('dates.nextYear')" :disabled="!!max && `${year + 1}-01` > max" @click="year += 1"><ChevronRight class="size-4" aria-hidden="true" /></Button>
        </div>
        <div class="grid grid-cols-3 gap-1">
          <button
            v-for="month in months"
            :key="month"
            type="button"
            :aria-pressed="month === model"
            :disabled="blocked(month)"
            :class="
              cn(
                'h-9 rounded-md text-[14px] transition-colors first-letter:uppercase hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-35',
                month === model && 'bg-primary text-primary-foreground hover:bg-primary',
              )
            "
            @click="choose(month)"
          >
            {{ monthShort(month, locale) }}
          </button>
        </div>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
