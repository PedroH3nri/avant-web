<script setup lang="ts">
/** Moldura das telas logadas: trilho a partir do tablet, gaveta com o trilho e o painel no celular, e o conteúdo. */
import { ref } from 'vue'
import { DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTitle } from 'reka-ui'
import { Menu } from 'lucide-vue-next'
import CompanySwitcher from '@/components/CompanySwitcher.vue'
import LangSwitch from '@/components/LangSwitch.vue'
import DollarRate from '@/modules/currencies/components/DollarRate.vue'
import NotificationCenter from '@/modules/notifications/components/NotificationCenter.vue'
import NpsPrompt from '@/modules/help/components/NpsPrompt.vue'
import UsageTracker from '@/modules/usage/components/UsageTracker.vue'
import SidebarRail from '@/components/SidebarRail.vue'
import Button from '@/components/ui/Button.vue'
import { t } from '@/lib/i18n'
import { useSession } from '@/stores/session'

const open = ref(false)
const session = useSession()
</script>

<template>
  <div class="flex min-h-full">
    <aside class="sticky top-0 z-30 hidden h-dvh w-[5.5rem] shrink-0 self-start md:block">
      <SidebarRail />
    </aside>
    <DialogRoot v-model:open="open">
      <DialogPortal>
        <DialogOverlay class="fixed inset-0 z-40 bg-black/40 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogContent
          class="fixed inset-y-0 left-0 z-50 max-w-[92vw] border-r bg-sidebar shadow-lg data-[state=open]:animate-in data-[state=open]:slide-in-from-left"
        >
          <DialogTitle class="sr-only">{{ t('nav.menu') }}</DialogTitle>
          <SidebarRail drawer @navigate="open = false" />
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
    <div class="flex min-w-0 flex-1 flex-col">
      <header class="sticky top-0 z-20 flex h-14 items-center gap-2 border-b bg-background px-4 sm:px-6">
        <Button variant="ghost" size="icon" class="-ml-2 md:hidden" :aria-label="t('nav.menu')" @click="open = true"><Menu /></Button>
        <CompanySwitcher />
        <NotificationCenter class="ml-auto" />
        <DollarRate class="hidden sm:flex" />
        <LangSwitch class="w-[132px]" />
      </header>
      <RouterView :key="session.company?.id ?? 'none'" />
    </div>
    <UsageTracker v-if="session.company && !session.company.is_internal && !session.me?.mfa_setup_required" :key="`usage-${session.company.id}`" />
    <NpsPrompt v-if="session.company && !session.company.is_internal && !session.me?.mfa_setup_required" :key="session.company.id" />
  </div>
</template>
