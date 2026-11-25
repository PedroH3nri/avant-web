<script setup lang="ts">
/** Card da navbar com o dólar em reais e a variação desde o dia anterior; abre a linha dos últimos 30 dias. */
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
import { ArrowDownRight, ArrowUpRight } from 'lucide-vue-next'
import { formatDate, locale, t } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { linePoints, quoteChange } from '@/modules/currencies/rules'
import { currencyService } from '@/modules/currencies/service'
import type { DollarQuote } from '@/modules/currencies/types'

defineProps<{ class?: string }>()
const REFRESH_MS = 15 * 60_000
const WIDTH = 280
const HEIGHT = 72
const quote = ref<DollarQuote | null>(null)
let timer: ReturnType<typeof setInterval> | undefined

/** Busca a cotação; se falhar, o card some até a próxima tentativa dar certo. */
async function load() {
  try {
    quote.value = await currencyService.usdQuote()
  } catch {
    quote.value = null
  }
}

onMounted(() => {
  void load()
  timer = setInterval(load, REFRESH_MS)
})
onBeforeUnmount(() => clearInterval(timer))

const change = computed(() => (quote.value ? quoteChange(quote.value) : null))
const up = computed(() => (change.value ?? 0) >= 0)
const values = computed(() => quote.value?.history.map((point) => Number(point.rate)) ?? [])
const trendUp = computed(() => values.value.length < 2 || (values.value.at(-1) ?? 0) >= (values.value[0] ?? 0))
const firstDay = computed(() => quote.value?.history[0]?.day ?? '')
const lastDay = computed(() => quote.value?.history.at(-1)?.day ?? '')
const points = computed(() => linePoints(values.value, WIDTH, HEIGHT))

/** O valor em reais com as casas pedidas, no formato do idioma. */
function money(value: string | number, digits: number): string {
  return Number(value).toLocaleString(locale.value, { minimumFractionDigits: digits, maximumFractionDigits: digits })
}

/** A data de um dia da série, curta (dia e mês). */
function shortDay(iso: string): string {
  return new Intl.DateTimeFormat(locale.value, { day: '2-digit', month: '2-digit', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`))
}

const label = computed(() => {
  if (!quote.value) return ''
  const rate = money(quote.value.rate, 4)
  if (change.value === null) return t('usd.aria', { rate })
  return t(up.value ? 'usd.ariaUp' : 'usd.ariaDown', { rate, change: money(Math.abs(change.value), 2) })
})
</script>

<template>
  <PopoverRoot v-if="quote">
    <PopoverTrigger
      :aria-label="label"
      :class="cn('flex h-8 w-[132px] items-center justify-between gap-1 whitespace-nowrap rounded-md border bg-background px-2 text-[12px] transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-px hover:border-[hsl(var(--ring)/0.45)] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:hover:translate-y-0', $props.class)"
    >
      <span class="font-medium text-muted-foreground">USD</span>
      <span class="font-semibold tabular-nums">{{ money(quote.rate, 2) }}</span>
      <span v-if="change !== null" :class="cn('flex items-center font-medium tabular-nums', up ? 'text-ok' : 'text-bad')">
        <component :is="up ? ArrowUpRight : ArrowDownRight" class="size-3" aria-hidden="true" />{{ money(Math.abs(change), 2) }}%
      </span>
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        align="end"
        :side-offset="6"
        :collision-padding="8"
        class="z-50 w-[312px] rounded-md border bg-popover p-4 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
      >
        <div class="text-[13px] font-medium text-muted-foreground">{{ t('usd.title') }}</div>
        <div class="mt-1 flex flex-wrap items-baseline gap-x-2">
          <span class="text-[24px] font-semibold tabular-nums tracking-[-0.03em]">R$ {{ money(quote.rate, 4) }}</span>
          <span v-if="change !== null" :class="cn('flex items-center text-[13px] font-medium tabular-nums', up ? 'text-ok' : 'text-bad')">
            <component :is="up ? ArrowUpRight : ArrowDownRight" class="size-3.5" aria-hidden="true" />{{ t('usd.change', { change: `${up ? '+' : '−'}${money(Math.abs(change), 2)}` }) }}
          </span>
        </div>
        <template v-if="values.length > 1">
          <svg :viewBox="`0 0 ${WIDTH} ${HEIGHT}`" class="mt-3 h-[72px] w-full" role="img" :aria-label="t('usd.days')">
            <polyline :points="`0,${HEIGHT} ${points} ${WIDTH},${HEIGHT}`" :class="trendUp ? 'fill-[hsl(var(--ok)/0.10)]' : 'fill-[hsl(var(--bad)/0.10)]'" stroke="none" />
            <polyline :points="points" fill="none" stroke-width="1.75" stroke-linejoin="round" :class="trendUp ? 'stroke-[hsl(var(--ok))]' : 'stroke-[hsl(var(--bad))]'" />
          </svg>
          <div class="mt-1 flex justify-between text-[12px] tabular-nums text-muted-foreground">
            <span>{{ shortDay(firstDay) }}</span><span>{{ t('usd.days') }}</span><span>{{ shortDay(lastDay) }}</span>
          </div>
          <dl class="mt-3 grid grid-cols-3 gap-2 border-t pt-3 text-[12px]">
            <div>
              <dt class="text-muted-foreground">{{ t('usd.low') }}</dt>
              <dd class="font-medium tabular-nums">R$ {{ money(Math.min(...values), 2) }}</dd>
            </div>
            <div>
              <dt class="text-muted-foreground">{{ t('usd.high') }}</dt>
              <dd class="font-medium tabular-nums">R$ {{ money(Math.max(...values), 2) }}</dd>
            </div>
            <div v-if="quote.previous">
              <dt class="text-muted-foreground">{{ t('usd.previous') }}</dt>
              <dd class="font-medium tabular-nums">R$ {{ money(quote.previous, 2) }}</dd>
            </div>
          </dl>
        </template>
        <p class="mt-3 text-[12px] text-muted-foreground">{{ t('usd.note', { time: formatDate(quote.synced_at) }) }}</p>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
