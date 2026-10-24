<script setup lang="ts">
/** Tabela com rolagem própria no celular. Use as classes de ``@/lib/table`` em th e td. */
withDefaults(defineProps<{ min?: number }>(), { min: 640 })
</script>

<template>
  <div class="relative overflow-x-auto rounded-lg border bg-card">
    <table class="w-full text-left text-[14px] [&_tbody_tr:last-child_td]:border-b-0" :style="{ minWidth: `${min}px` }">
      <slot />
    </table>
  </div>
</template>
