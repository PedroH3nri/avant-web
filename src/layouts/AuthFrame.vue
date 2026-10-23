<script setup lang="ts">
import Mark from '@/components/ui/Mark.vue'
import LangSwitch from '@/components/LangSwitch.vue'
</script>

<template>
  <div class="flex min-h-full flex-col">
    <header class="flex h-16 items-center justify-between px-6">
      <RouterLink to="/" class="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <Mark :size="24" /><span class="text-[15px] font-semibold tracking-tight">Avant</span>
      </RouterLink>
      <LangSwitch class="w-[132px]" />
    </header>
    <main class="flex flex-1 items-start justify-center px-4 pb-16 pt-10 sm:pt-20">
      <div class="w-full max-w-[360px]"><slot /></div>
    </main>
    <footer class="border-t px-6 py-4 text-[13px] text-muted-foreground">Avant by Groone · avant.groone.com</footer>
  </div>
</template>
