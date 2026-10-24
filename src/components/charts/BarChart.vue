<script setup lang="ts">
/** Barras horizontais com o valor escrito ao lado: o ranking de sites, países ou dispositivos. */
import { computed } from 'vue'

export interface BarItem {
  key: string
  label: string
  value: number | null
}

const props = defineProps<{ items: BarItem[]; format: (value: number | null) => string; description: string }>()
const largest = computed(() => Math.max(0, ...props.items.map((item) => item.value ?? 0)) || 1)
/** Largura da barra em % do maior valor; valor positivo nunca some de vez. */
const share = (value: number | null) => (value && value > 0 ? Math.max((value / largest.value) * 100, 1) : 0)
</script>

<template>
  <ul class="grid gap-3" :aria-label="description">
    <li v-for="item in items" :key="item.key" class="grid grid-cols-[minmax(0,8rem)_minmax(0,1fr)_6.5rem] items-center gap-3 text-[13px] sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)_7rem]">
      <span class="truncate" :title="item.label">{{ item.label }}</span>
      <span class="h-2 rounded-full bg-secondary" aria-hidden="true">
        <span class="block h-2 rounded-full bg-foreground" :style="{ width: `${share(item.value)}%` }" />
      </span>
      <span class="tnum text-right">{{ format(item.value) }}</span>
    </li>
  </ul>
</template>
