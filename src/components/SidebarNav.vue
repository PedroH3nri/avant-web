<script setup lang="ts">
/** Menu completo, em lista: Dashboard, grupos Clientes, Relatórios e Empresa, e a conta no rodapé. Fica na gaveta do celular. */
import { DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import { ChevronsUpDown, LogOut, UserRound } from 'lucide-vue-next'
import Avatar from '@/components/ui/Avatar.vue'
import Mark from '@/components/ui/Mark.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import { t } from '@/lib/i18n'
import { useNavigation } from '@/lib/navigation'
import { cn } from '@/lib/utils'

const emit = defineEmits<{ navigate: [] }>()
const { session, ready, groups, active, openLink, account, logout } = useNavigation(() => emit('navigate'))

const group = 'px-2.5 pb-1 pt-5 text-[12px] font-medium text-muted-foreground first:pt-0'
/** Classes do link da sidebar, ativo ou não. */
const item = (on: boolean) =>
  cn(
    'flex h-9 w-full items-center gap-2.5 rounded-md px-2.5 text-left text-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&_svg]:size-4',
    on ? 'bg-secondary font-medium text-foreground' : 'text-muted-foreground hover:bg-accent hover:text-foreground',
  )
</script>

<template>
  <div class="flex h-full flex-col bg-sidebar">
    <div class="flex h-14 items-center gap-2 border-b px-3">
      <RouterLink to="/" class="shrink-0 rounded-md p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" @click="emit('navigate')">
        <Mark :size="24" /><span class="sr-only">Avant</span>
      </RouterLink>
      <span class="leading-tight">
        <span class="block text-[14px] font-semibold tracking-tight">Avant</span>
        <span class="block text-[12px] text-muted-foreground">{{ t('brand.by') }}</span>
      </span>
    </div>
    <nav v-if="ready" class="grid gap-0.5 overflow-y-auto p-3" :aria-label="t('nav.main')">
      <template v-for="section in groups" :key="section.id">
        <div v-if="section.key" :class="group">{{ t(section.key) }}</div>
        <RouterLink
          v-for="link in section.items"
          :key="link.to"
          :to="link.to"
          :aria-current="active(link) ? 'page' : undefined"
          :class="item(active(link))"
          @click="openLink($event, link.to)"
        >
          <component :is="link.icon" />{{ t(link.key) }}
        </RouterLink>
      </template>
    </nav>
    <div class="mt-auto grid gap-1 border-t p-3">
      <DropdownMenuRoot>
        <DropdownMenuTrigger
          class="flex items-center gap-2.5 rounded-md p-1.5 text-left hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Avatar :name="session.me?.user.name ?? ''" :image-url="session.me?.user.image_url" :size="28" />
          <span class="min-w-0 flex-1">
            <span class="block truncate text-[13px] font-medium">{{ session.me?.user.name }}</span>
            <span class="block truncate text-[12px] text-muted-foreground">{{ session.me?.user.email }}</span>
          </span>
          <ChevronsUpDown class="size-4 shrink-0 text-muted-foreground" />
        </DropdownMenuTrigger>
        <MenuContent side="top" class="w-56">
          <MenuItem @select="account">{{ t('nav.account') }}<UserRound class="ml-auto" /></MenuItem>
          <MenuItem @select="logout">{{ t('top.logout') }}<LogOut class="ml-auto" /></MenuItem>
        </MenuContent>
      </DropdownMenuRoot>
    </div>
  </div>
</template>
