<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{ name: string; size?: number }>(), { size: 32 })
const initials = computed(() =>
  props.name
    .split(/\s+/)
    .filter(Boolean)
    .map((p) => p[0]!.toUpperCase())
    .slice(0, 2)
    .join(''),
)
const hue = computed(() => [...props.name].reduce((h, c) => h + c.charCodeAt(0), 0) % 360)
</script>

<template>
  <span
    class="inline-flex shrink-0 items-center justify-center rounded-full text-[12px] font-semibold text-white"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      background: `linear-gradient(135deg, hsl(${hue} 70% 55%), hsl(${(hue + 40) % 360} 75% 45%))`,
    }"
    aria-hidden="true"
    >{{ initials }}</span
  >
</template>
