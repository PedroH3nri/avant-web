<script setup lang="ts">
/** Raiz do painel: as rotas e os avisos (toasts) no tema escolhido. */
import { computed } from 'vue'
import { Toaster } from 'vue-sonner'
import 'vue-sonner/style.css'
import { shownTheme, theme } from '@/lib/theme'

const toasterTheme = computed(() => (theme.value === 'groone' || theme.value === 'custom' ? (shownTheme(theme.value) === 'light' ? 'light' : 'dark') : theme.value))
</script>

<template>
  <RouterView />
  <Toaster position="bottom-right" :theme="toasterTheme" :toast-options="{ class: 'font-sans' }" />
</template>
