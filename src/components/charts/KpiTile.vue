<script setup lang="ts">
/** Card de KPI: nome, valor e a variação contra o período anterior (seta e palavra, nunca só cor). */
import { computed } from 'vue'
import { t } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const props = defineProps<{ label: string; value: string; delta: number | null; comparing: boolean; selected?: boolean; deltaText: string }>()
defineEmits<{ select: [] }>()
const up = computed(() => (props.delta ?? 0) >= 0)
</script>

<template>
  <button
    type="button"
    :aria-pressed="selected"
    :class="
      cn(
        'relative bg-card p-4 text-left transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring',
        selected && 'after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-primary',
      )
    "
    @click="$emit('select')"
  >
    <span class="block text-[13px] font-medium text-muted-foreground">{{ label }}</span>
    <span class="mt-1 block truncate text-[20px] sm:text-[24px] font-semibold tracking-[-0.03em] tnum">{{ value }}</span>
    <span v-if="comparing" class="mt-1 block text-[13px]">
      <span v-if="delta === null" class="text-muted-foreground">{{ t('perf.noPrevious') }}</span>
      <template v-else>
        <span :class="up ? 'text-ok' : 'text-bad'"><span aria-hidden="true">{{ up ? '↑' : '↓' }}</span> {{ deltaText }}</span>
        {{ ' ' }}<span class="text-muted-foreground">{{ up ? t('perf.above') : t('perf.below') }}</span>
      </template>
    </span>
  </button>
</template>
