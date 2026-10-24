<script setup lang="ts">
import { computed, type Component } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import { Building2, ChevronsUpDown, Globe, Home, Lock, LogOut, Network, Settings, UserRound, Users, UserSearch } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import Avatar from '@/components/ui/Avatar.vue'
import Mark from '@/components/ui/Mark.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import { ApiError } from '@/lib/api'
import { errorText, t, type Key } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { useSession } from '@/stores/session'

const emit = defineEmits<{ navigate: [] }>()
const session = useSession()
const route = useRoute()
const router = useRouter()

type Item = { to: string; key: Key; icon: Component }

// O menu é imutável: os mesmos itens em todas as rotas e Empresas, sem filtrar por permissão
// (o guarda do router e a API decidem o acesso). O grupo Clientes abre a Empresa cliente; o
// grupo Empresa interna, que só a equipe Groone vê, abre o painel interno (o guarda troca
// para a Company Groone).
const CLIENT: Item[] = [
  { to: '/', key: 'nav.home', icon: Home },
  { to: '/equipe', key: 'nav.team', icon: Users },
  { to: '/networks', key: 'nav.networks', icon: Network },
  { to: '/sites', key: 'nav.sites', icon: Globe },
  { to: '/configuracoes', key: 'nav.settings', icon: Settings },
]
const INTERNAL: Item[] = [
  { to: '/interno', key: 'int.clients', icon: Building2 },
  { to: '/interno/pessoas', key: 'int.people', icon: UserSearch },
  { to: '/interno/equipe', key: 'int.staff', icon: Users },
  { to: '/interno/networks', key: 'int.mcm', icon: Network },
]

const ready = computed(() => !!session.me && !session.me.mfa_setup_required)
/** A Empresa cliente do grupo Clientes: a ativa ou a última por onde a pessoa passou. */
const clientId = computed(() => {
  if (session.company && !session.company.is_internal) return session.company.id
  const last = session.clientCompanies.find((c) => c.id === session.lastClientId)
  return (last ?? session.clientCompanies[0])?.id ?? null
})
const staff = computed(() => !!session.internalCompany)
const onInternal = computed(() => route.meta.internal === true)
// Entram na próxima fase do Avant.
const soon: Key[] = ['nav.metrics', 'nav.dashboards']

function active(to: string, internalItem: boolean) {
  if (internalItem !== onInternal.value) return false
  if (to === '/') return route.path === '/'
  // A lista de clientes é /interno; as outras telas internas têm o próprio item.
  if (to === '/interno') return route.path === '/interno' || route.path.startsWith('/interno/clientes/')
  // Minha conta fica embaixo de /configuracoes, mas não é a tela de Configurações.
  if (route.path.startsWith('/configuracoes/conta')) return false
  return route.path === to || route.path.startsWith(`${to}/`)
}
const group = 'px-2.5 pb-1 pt-5 text-[12px] font-medium text-muted-foreground first:pt-0'
const idle = 'flex h-9 items-center gap-2.5 px-2.5 text-[14px] text-muted-foreground/70 [&_svg]:size-4'
const item = (on: boolean) =>
  cn(
    'flex h-9 w-full items-center gap-2.5 rounded-md px-2.5 text-left text-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&_svg]:size-4',
    on ? 'bg-secondary font-medium text-foreground' : 'text-muted-foreground hover:bg-accent hover:text-foreground',
  )

/** Item da Empresa com a Company Groone ativa: troca para a Empresa cliente antes de abrir. */
async function goClient(event: MouseEvent, to: string) {
  emit('navigate')
  const id = clientId.value
  if (!session.company?.is_internal || !id) return
  event.preventDefault()
  try {
    await session.switchCompany(id)
    await router.push(to)
  } catch (e) {
    toast.error(errorText(e instanceof ApiError ? e.code : 'unknown'))
  }
}

function account() {
  emit('navigate')
  void router.push('/configuracoes/conta')
}

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
    <nav v-if="ready" class="grid gap-0.5 overflow-y-auto p-3" :aria-label="t('nav.main')">
      <div :class="group">{{ t('nav.groupClients') }}</div>
      <template v-if="clientId">
        <RouterLink
          v-for="i in CLIENT"
          :key="i.to"
          :to="i.to"
          :aria-current="active(i.to, false) ? 'page' : undefined"
          :class="item(active(i.to, false))"
          @click="goClient($event, i.to)"
        >
          <component :is="i.icon" />{{ t(i.key) }}
        </RouterLink>
      </template>
      <!-- Equipe Groone que ainda não está em nenhuma Empresa cliente: os itens ficam, inativos. -->
      <span v-for="i in clientId ? [] : CLIENT" :key="i.to" :class="idle" :title="t('nav.noClient')"><component :is="i.icon" />{{ t(i.key) }}</span>
      <span v-for="k in soon" :key="k" :class="idle"><Lock />{{ t(k) }}<span class="ml-auto text-[12px]">{{ t('nav.soon') }}</span></span>
      <template v-if="staff">
        <div :class="group">{{ t('nav.groupInternal') }}</div>
        <RouterLink
          v-for="i in INTERNAL"
          :key="i.to"
          :to="i.to"
          :aria-current="active(i.to, true) ? 'page' : undefined"
          :class="item(active(i.to, true))"
          @click="emit('navigate')"
        >
          <component :is="i.icon" />{{ t(i.key) }}
        </RouterLink>
      </template>
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
          <MenuItem @select="account">{{ t('nav.account') }}<UserRound class="ml-auto" /></MenuItem>
          <MenuItem @select="logout">{{ t('top.logout') }}<LogOut class="ml-auto" /></MenuItem>
        </MenuContent>
      </DropdownMenuRoot>
    </div>
  </div>
</template>
