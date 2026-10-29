<script setup lang="ts">
/** Sidebar fixa: Dashboard, grupos Clientes, Relatórios e Empresa, e a conta no rodapé. */
import { computed, type Component } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import { Building2, ChartLine, ChevronsUpDown, Eye, FileChartColumn, Receipt, Target, Scale, FileSignature, Globe, LayoutDashboard, LogOut, Network, ShieldCheck, UserRound, Users, UsersRound } from 'lucide-vue-next'
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

type Item = { to: string; key: Key; icon: Component; internal?: boolean; clientOnly?: boolean }
type Group = { key: Key | null; items: Item[] }

// O menu é imutável: os mesmos itens em todas as rotas e Empresas, sem filtrar por permissão
// (o guarda do router e a API decidem o acesso). Itens com ``internal`` abrem o painel interno
// (o guarda troca para a Company Groone) e só a equipe Groone os vê; os outros abrem a Empresa
// cliente. Itens com ``clientOnly`` somem para a equipe Groone, que tem a versão interna deles
// (Equipes: a Groone vê as equipes de todos os clientes, nunca a própria).
const GROUPS: Group[] = [
  { key: null, items: [{ to: '/', key: 'nav.home', icon: LayoutDashboard }] },
  {
    key: 'nav.groupClients',
    items: [
      { to: '/interno', key: 'int.clients', icon: Building2, internal: true },
      { to: '/equipe', key: 'nav.team', icon: Users, clientOnly: true },
      { to: '/interno/equipes', key: 'nav.team', icon: Users, internal: true },
      { to: '/networks', key: 'nav.networks', icon: Network },
      { to: '/interno/contratos', key: 'int.contracts', icon: FileSignature, internal: true },
      { to: '/sites', key: 'nav.sites', icon: Globe },
    ],
  },
  {
    key: 'nav.groupReports',
    items: [
      { to: '/desempenho', key: 'nav.adManager', icon: ChartLine },
      { to: '/visitas', key: 'nav.pageViews', icon: Eye },
      { to: '/relatorios', key: 'nav.reports', icon: FileChartColumn },
      { to: '/resultado', key: 'nav.results', icon: Scale },
      { to: '/interno/resultados', key: 'int.results', icon: Scale, internal: true },
      { to: '/interno/metas', key: 'goals.title', icon: Target, internal: true },
    ],
  },
  {
    key: 'nav.groupCompany',
    items: [
      { to: '/interno/equipe', key: 'int.staff', icon: UsersRound, internal: true },
      { to: '/papeis', key: 'nav.roles', icon: ShieldCheck },
      { to: '/custos', key: 'nav.costs', icon: Receipt },
    ],
  },
]
// Telas sem item próprio que acendem o item da lista de onde se chega a elas.
const SIBLINGS: Record<string, string[]> = {
  '/interno': ['/interno/clientes/', '/interno/pessoas'],
}

const ready = computed(() => !!session.me && !session.me.mfa_setup_required)
/** A Empresa cliente do grupo Clientes: a ativa ou a última por onde a pessoa passou. */
const clientId = computed(() => {
  if (session.company && !session.company.is_internal) return session.company.id
  const last = session.clientCompanies.find((clientCompany) => clientCompany.id === session.lastClientId)
  return (last ?? session.clientCompanies[0])?.id ?? null
})
const staff = computed(() => !!session.internalCompany)
const onInternal = computed(() => route.meta.internal === true)
/** Os grupos que a pessoa vê: a equipe Groone troca os itens só de cliente pelos internos. */
const groups = computed(() =>
  GROUPS.map((section) => ({
    ...section,
    items: section.items.filter((link) => (staff.value ? !link.clientOnly : !link.internal)),
  })).filter(
    (section) => section.items.length > 0,
  ),
)

/** Diz se o link está ativo na rota atual, respeitando o lado (cliente ou interno) dele. */
function active(link: Item) {
  if (!!link.internal !== onInternal.value) return false
  if (link.to === '/') return route.path === '/'
  // A lista de clientes é /interno; as outras telas internas têm o próprio item.
  if (route.path === link.to || (link.to !== '/interno' && route.path.startsWith(`${link.to}/`))) return true
  // Irmã terminada em barra vale para as telas embaixo dela; as outras, só o caminho exato.
  return (SIBLINGS[link.to] ?? []).some((path) => (path.endsWith('/') ? route.path.startsWith(path) : route.path === path))
}
const group = 'px-2.5 pb-1 pt-5 text-[12px] font-medium text-muted-foreground first:pt-0'
/** Classes do link da sidebar, ativo ou não. */
const item = (on: boolean) =>
  cn(
    'flex h-9 w-full items-center gap-2.5 rounded-md px-2.5 text-left text-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&_svg]:size-4',
    on ? 'bg-secondary font-medium text-foreground' : 'text-muted-foreground hover:bg-accent hover:text-foreground',
  )

/**
 * Item da Empresa cliente com a Company Groone ativa: troca para a Empresa cliente antes de
 * abrir. Item interno segue direto (o guarda troca); sem Empresa cliente, abre na Company Groone.
 */
async function openLink(event: MouseEvent, to: string) {
  emit('navigate')
  if (to.startsWith('/interno')) return
  const id = clientId.value
  if (!session.company?.is_internal || !id) return
  event.preventDefault()
  try {
    await session.switchCompany(id)
    await router.push(to)
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}

/** Abre a página da conta. */
function account() {
  emit('navigate')
  void router.push('/configuracoes/conta')
}

/** Sai da sessão e volta para o login. */
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
        <span class="block text-[12px] text-muted-foreground">{{ t('brand.by') }}</span>
      </span>
    </div>
    <nav v-if="ready" class="grid gap-0.5 overflow-y-auto p-3" :aria-label="t('nav.main')">
      <template v-for="section in groups" :key="section.key ?? 'top'">
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
