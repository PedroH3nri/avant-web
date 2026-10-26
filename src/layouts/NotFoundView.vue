<script setup lang="ts">
/** Tela de página não encontrada. */
import AuthFrame from '@/layouts/AuthFrame.vue'
import { t } from '@/lib/i18n'
</script>

<template>
  <AuthFrame>
    <p class="font-mono text-[13px] text-muted-foreground tnum">404</p>
    <h1 class="mt-2 text-[28px] font-semibold tracking-[-0.03em]">{{ t('common.notFound') }}</h1>
    <p class="mt-2 text-[14px] text-muted-foreground">{{ t('common.notFoundSub') }}</p>
    <RouterLink to="/" class="mt-6 block text-[14px] text-link hover:underline">{{ t('common.goHome') }}</RouterLink>
  </AuthFrame>
</template>
