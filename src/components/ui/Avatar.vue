<script setup lang="ts">
/** Foto da pessoa; sem foto (ou se ela não carregar), as iniciais num degradê da cor do nome. */
import { computed, ref, watch } from 'vue'

const props = withDefaults(defineProps<{ name: string; size?: number; imageUrl?: string | null }>(), { size: 32, imageUrl: null })
const broken = ref(false)
watch(
  () => props.imageUrl,
  () => (broken.value = false),
)
const initials = computed(() =>
  props.name
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0]!.toUpperCase())
    .slice(0, 2)
    .join(''),
)
const hue = computed(() => [...props.name].reduce((total, letter) => total + letter.charCodeAt(0), 0) % 360)
</script>

<template>
  <img
    v-if="imageUrl && !broken"
    :src="imageUrl"
    alt=""
    class="inline-block shrink-0 rounded-full bg-muted object-cover"
    :style="{ width: `${size}px`, height: `${size}px` }"
    aria-hidden="true"
    @error="broken = true"
  />
  <span
    v-else
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
