<script setup lang="ts">
import { computed } from 'vue'
import { Toaster } from 'vue-sonner'
import 'vue-sonner/style.css'
import { theme } from '@/lib/theme'

const toasterTheme = computed(() => theme.value)
</script>

<template>
  <RouterView />
  <Toaster position="bottom-right" :theme="toasterTheme" :toast-options="{ class: 'font-sans' }" />
</template>
