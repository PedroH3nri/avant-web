<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import { ChevronsUpDown, Globe, Home, Lock, LogOut, Network, Settings, Users } from 'lucide-vue-next'
import Avatar from '@/components/ui/Avatar.vue'
import Mark from '@/components/ui/Mark.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import { t, type Key } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { useSession } from '@/stores/session'

const emit = defineEmits<{ navigate: [] }>()
const session = useSession()
const route = useRoute()
const router = useRouter()

const items = computed(() =>
  (
    [
      { to: '/', key: 'nav.home', icon: Home, show: true },
      { to: '/equipe', key: 'nav.team', icon: Users, show: session.can('team.view') },
      { to: '/networks', key: 'nav.networks', icon: Network, show: session.can('network.view') },
      { to: '/sites', key: 'nav.sites', icon: Globe, show: session.can('sites.view') },
      { to: '/configuracoes', key: 'nav.settings', icon: Settings, show: true },
    ] as const
  ).filter((i) => i.show && session.company),
)
// Entram na próxima fase do Avant.
const soon: Key[] = ['nav.metrics', 'nav.dashboards']

function active(to: string) {
  return to === '/' ? route.path === '/' : route.path.startsWith(to)
}
const item = (on: boolean) =>
  cn(
    'flex h-9 w-full items-center gap-2.5 rounded-md px-2.5 text-left text-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&_svg]:size-4',
    on ? 'bg-secondary font-medium text-foreground' : 'text-muted-foreground hover:bg-accent hover:text-foreground',
  )

async function logout() {
  await session.logout()
  await router.push('/entrar')
}
</script>

<template>
  <div class="flex h-full flex-col bg-sidebar">
    <div class="flex h-14 items-center gap-2 border-b px-3">
      <RouterLink to="/" class="shrink-0 rounded-md p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" @click="emit('navigate')">
        <Mark :size="24" /><span class="sr-only">Avant</span>
      </RouterLink>
      <span class="leading-tight">
        <span class="block text-[14px] font-semibold tracking-tight">Avant</span>
        <span class="block text-[12px] text-muted-foreground">by Groone</span>
      </span>
    </div>
    <nav class="grid gap-0.5 p-3" :aria-label="t('nav.home')">
      <RouterLink
        v-for="i in items"
        :key="i.to"
        :to="i.to"
        :aria-current="active(i.to) ? 'page' : undefined"
        :class="item(active(i.to))"
        @click="emit('navigate')"
      >
        <component :is="i.icon" />{{ t(i.key) }}
      </RouterLink>
      <div class="px-2.5 pb-1 pt-5 text-[12px] font-medium text-muted-foreground">{{ t('nav.soon') }}</div>
      <span v-for="k in soon" :key="k" class="flex h-9 items-center gap-2.5 px-2.5 text-[14px] text-muted-foreground/70"><Lock class="size-4" />{{ t(k) }}</span>
    </nav>
    <div class="mt-auto grid gap-3 border-t p-3">
      <DropdownMenuRoot>
        <DropdownMenuTrigger
          class="flex items-center gap-2.5 rounded-md p-1.5 text-left hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Avatar :name="session.me?.user.name ?? ''" :size="28" />
          <span class="min-w-0 flex-1">
            <span class="block truncate text-[13px] font-medium">{{ session.me?.user.name }}</span>
            <span class="block truncate text-[12px] text-muted-foreground">{{ session.me?.user.email }}</span>
          </span>
          <ChevronsUpDown class="size-4 shrink-0 text-muted-foreground" />
        </DropdownMenuTrigger>
        <MenuContent side="top" class="w-56">
          <MenuItem @select="logout">{{ t('top.logout') }}<LogOut class="ml-auto" /></MenuItem>
        </MenuContent>
      </DropdownMenuRoot>
    </div>
  </div>
</template>
