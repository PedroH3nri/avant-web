<script setup lang="ts">
/** Moldura das telas logadas: sidebar, menu no celular e conteúdo. */
import { ref } from 'vue'
import { DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTitle } from 'reka-ui'
import { Menu } from 'lucide-vue-next'
import CompanySwitcher from '@/components/CompanySwitcher.vue'
import LangSwitch from '@/components/LangSwitch.vue'
import SidebarNav from '@/components/SidebarNav.vue'
import Button from '@/components/ui/Button.vue'
import { t } from '@/lib/i18n'

const open = ref(false)
</script>

<template>
  <div class="flex min-h-full">
    <aside class="sticky top-0 hidden h-dvh w-[248px] shrink-0 self-start border-r lg:block">
      <SidebarNav />
    </aside>
    <DialogRoot v-model:open="open">
      <DialogPortal>
        <DialogOverlay class="fixed inset-0 z-40 bg-black/40 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogContent
          class="fixed inset-y-0 left-0 z-50 w-[272px] border-r bg-sidebar shadow-lg data-[state=open]:animate-in data-[state=open]:slide-in-from-left"
        >
          <DialogTitle class="sr-only">{{ t('nav.menu') }}</DialogTitle>
          <SidebarNav @navigate="open = false" />
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
    <div class="flex min-w-0 flex-1 flex-col">
      <header class="sticky top-0 z-20 flex h-14 items-center gap-2 border-b bg-background px-4 sm:px-6">
        <Button variant="ghost" size="icon" class="-ml-2 lg:hidden" :aria-label="t('nav.menu')" @click="open = true"><Menu /></Button>
        <CompanySwitcher />
        <LangSwitch class="ml-auto w-[132px]" />
      </header>
      <RouterView />
    </div>
  </div>
</template>
