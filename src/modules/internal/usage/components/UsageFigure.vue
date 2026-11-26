<script setup lang="ts">
/** Um número dos cards de uso, com o rótulo e, quando houver, o total possível ("de 30"). */
defineProps<{ label: string; value: string; of?: string }>()
</script>

<template>
  <div class="rounded-md border p-4">
    <div class="text-[12px] font-medium text-muted-foreground">{{ label }}</div>
    <div class="mt-1 text-[22px] font-semibold tracking-[-0.02em] tnum">
      {{ value }}<span v-if="of" class="text-[14px] font-normal text-muted-foreground"> {{ of }}</span>
    </div>
  </div>
</template>
