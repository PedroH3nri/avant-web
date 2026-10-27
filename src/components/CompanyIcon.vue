<script setup lang="ts">
/** Ícone da Empresa: a imagem enviada ou, sem imagem, a inicial do nome sobre a cor da Empresa. */
import { computed, ref, watch } from 'vue'

const props = withDefaults(defineProps<{ name: string; imageUrl?: string | null; size?: number }>(), { imageUrl: null, size: 20 })
const failed = ref(false)
const initial = computed(() => props.name.trim().charAt(0).toUpperCase())
const box = computed(() => ({ width: `${props.size}px`, height: `${props.size}px` }))

watch(
  () => props.imageUrl,
  () => {
    failed.value = false
  },
)
</script>

<template>
  <img
    v-if="imageUrl && !failed"
    :src="imageUrl"
    alt=""
    class="shrink-0 rounded-[5px] object-cover ring-1 ring-inset ring-foreground/10"
    :style="box"
    @error="failed = true"
  />
  <span
    v-else
    class="inline-flex shrink-0 items-center justify-center rounded-[5px] bg-primary font-semibold text-primary-foreground"
    :style="{ ...box, fontSize: `${Math.max(10, size * 0.45)}px` }"
    aria-hidden="true"
    >{{ initial }}</span
  >
</template>
