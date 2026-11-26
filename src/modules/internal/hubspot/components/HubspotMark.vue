<script setup lang="ts">
/** O selo laranja do HubSpot, para dizer de onde vem cada dado. */
import HubspotIcon from '@/components/HubspotIcon.vue'

withDefaults(defineProps<{ size?: number }>(), { size: 16 })
</script>

<template>
  <span class="inline-grid shrink-0 place-items-center rounded-[4px] bg-[#ff7a59] text-white" :style="{ width: `${size}px`, height: `${size}px` }" aria-hidden="true">
    <HubspotIcon :style="{ width: `${size * 0.7}px`, height: `${size * 0.7}px` }" />
  </span>
</template>
