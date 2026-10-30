/** O menu do painel: os grupos e itens, o item ativo e a navegação, usados pelo trilho e pela gaveta. */

import { computed, type Component } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { Building2, ChartLine, Coins, Eye, FileChartColumn, FileSignature, Globe, IdCard, LayoutDashboard, Network, Receipt, Scale, ShieldCheck, Target, Users, UsersRound, Wallet } from 'lucide-vue-next'
import { ApiError } from '@/lib/api'
import { errorText, type Key } from '@/lib/i18n'
import { useSession } from '@/stores/session'

export type NavItem = { to: string; key: Key; icon: Component; internal?: boolean; clientOnly?: boolean }
export type NavGroup = { id: string; key: Key | null; label: Key; icon: Component; items: NavItem[] }

// O menu é imutável: os mesmos itens em todas as rotas e Empresas, sem filtrar por permissão
// (o guarda do router e a API decidem o acesso). Itens com ``internal`` abrem o painel interno
// (o guarda troca para a Company Groone) e só a equipe Groone os vê; os outros abrem a Empresa
// cliente. Itens com ``clientOnly`` somem para a equipe Groone, que tem a versão interna deles
// (Equipes: a Groone vê as equipes de todos os clientes, nunca a própria; Papéis e permissões:
// a Groone cuida dos seus em Papéis da equipe).
export const NAV_GROUPS: NavGroup[] = [
  { id: 'home', key: null, label: 'nav.home', icon: LayoutDashboard, items: [{ to: '/', key: 'nav.home', icon: LayoutDashboard }] },
  {
    id: 'clients',
    key: 'nav.groupClients',
    label: 'nav.groupClients',
    icon: Building2,
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
    id: 'reports',
    key: 'nav.groupReports',
    label: 'nav.groupReports',
    icon: ChartLine,
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
    id: 'commissions',
    key: 'nav.groupCommissions',
    label: 'nav.groupCommissions',
    icon: Wallet,
    items: [
      { to: '/interno/minha-comissao', key: 'com.nav.mine', icon: Wallet, internal: true },
      { to: '/interno/comissoes', key: 'com.nav.team', icon: Coins, internal: true },
    ],
  },
  {
    id: 'company',
    key: 'nav.groupCompany',
    label: 'nav.groupCompany',
    icon: UsersRound,
    items: [
      { to: '/interno/equipe', key: 'int.staff', icon: UsersRound, internal: true },
      { to: '/interno/papeis', key: 'com.nav.roles', icon: IdCard, internal: true },
      { to: '/papeis', key: 'nav.roles', icon: ShieldCheck, clientOnly: true },
      { to: '/custos', key: 'nav.costs', icon: Receipt },
    ],
  },
]
// Telas sem item próprio que acendem o item da lista de onde se chega a elas.
const SIBLINGS: Record<string, string[]> = {
  '/interno': ['/interno/clientes/', '/interno/pessoas'],
}

/** Os grupos que a pessoa vê: a equipe Groone troca os itens só de cliente pelos internos. */
export function visibleGroups(staff: boolean): NavGroup[] {
  return NAV_GROUPS.map((section) => ({ ...section, items: section.items.filter((link) => (staff ? !link.clientOnly : !link.internal)) })).filter(
    (section) => section.items.length > 0,
  )
}

/** Diz se o link está ativo no caminho, respeitando o lado (cliente ou interno) dele. */
export function linkActive(link: NavItem, path: string, onInternal: boolean): boolean {
  if (!!link.internal !== onInternal) return false
  if (link.to === '/') return path === '/'
  // A lista de clientes é /interno; as outras telas internas têm o próprio item.
  if (path === link.to || (link.to !== '/interno' && path.startsWith(`${link.to}/`))) return true
  // Irmã terminada em barra vale para as telas embaixo dela; as outras, só o caminho exato.
  return (SIBLINGS[link.to] ?? []).some((sibling) => (sibling.endsWith('/') ? path.startsWith(sibling) : path === sibling))
}

/** O estado do menu para o componente: grupos, item ativo, abrir um link, a conta e a saída. */
export function useNavigation(onNavigate: () => void) {
  const session = useSession()
  const route = useRoute()
  const router = useRouter()
  const ready = computed(() => !!session.me && !session.me.mfa_setup_required)
  const groups = computed(() => visibleGroups(!!session.internalCompany))
  const onInternal = computed(() => route.meta.internal === true)
  /** A Empresa cliente do grupo Clientes: a ativa ou a última por onde a pessoa passou. */
  const clientId = computed(() => {
    if (session.company && !session.company.is_internal) return session.company.id
    const last = session.clientCompanies.find((clientCompany) => clientCompany.id === session.lastClientId)
    return (last ?? session.clientCompanies[0])?.id ?? null
  })

  /** Diz se o link está ativo na rota atual. */
  const active = (link: NavItem) => linkActive(link, route.path, onInternal.value)
  /** Diz se o grupo tem o item ativo. */
  const groupActive = (section: NavGroup) => section.items.some(active)

  /**
   * Item da Empresa cliente com a Company Groone ativa: troca para a Empresa cliente antes de
   * abrir. Item interno segue direto (o guarda troca); sem Empresa cliente, abre na Company Groone.
   */
  async function openLink(event: Event | null, to: string) {
    onNavigate()
    const id = clientId.value
    if (to.startsWith('/interno') || !session.company?.is_internal || !id) {
      if (!event) await router.push(to)
      return
    }
    event?.preventDefault()
    try {
      await session.switchCompany(id)
      await router.push(to)
    } catch (error) {
      toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
    }
  }

  /** Abre a página da conta. */
  function account() {
    onNavigate()
    void router.push('/configuracoes/conta')
  }

  /** Sai da sessão e volta para o login. */
  async function logout() {
    await session.logout()
    await router.push('/entrar')
  }

  return { session, route, ready, groups, active, groupActive, openLink, account, logout }
}
