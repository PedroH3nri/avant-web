/** O menu do painel: os grupos e itens, o item ativo e a navegação, usados pelo trilho e pela gaveta. */

import { computed, type Component } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { BellRing, Building, Building2, ChartLine, CircleDollarSign, Code2, Coins, Eye, FileChartColumn, FileSignature, FileText, Gift, Globe, IdCard, LayoutDashboard, LayoutTemplate, ListChecks, ListTodo, LoaderCircle, MailCheck, Megaphone, Network, Plug, Receipt, ReceiptText, Scale, ShieldCheck, Target, Users, UsersRound, Wallet, Wrench } from 'lucide-vue-next'
import type { Key } from '@/lib/i18n'
import { useSession } from '@/stores/session'

export type NavItem = { to: string; key: Key; icon: Component; internal?: boolean; clientOnly?: boolean; separated?: boolean }
export type NavGroup = { id: string; key: Key | null; label: Key; icon: Component; items: NavItem[] }

// O menu tem os mesmos itens em todas as rotas, sem filtrar por permissão (o guarda do router e a
// API decidem o acesso), mas segue a Empresa ativa: com a Company Groone ativa mostra o painel
// interno (itens com ``internal``, só da equipe Groone); com uma Empresa cliente ativa, os itens
// dela (itens com ``clientOnly`` e os comuns), também para a equipe Groone que trocou de Empresa
// na barra de cima. Itens com ``separated`` ganham uma linha acima.
export const NAV_GROUPS: NavGroup[] = [
  { id: 'home', key: null, label: 'nav.home', icon: LayoutDashboard, items: [{ to: '/', key: 'nav.home', icon: LayoutDashboard }] },
  { id: 'tasks', key: null, label: 'nav.tasks', icon: ListTodo, items: [{ to: '/interno/tarefas', key: 'nav.tasks', icon: ListTodo, internal: true }] },
  {
    id: 'clients',
    key: 'nav.groupInventory',
    label: 'nav.groupInventory',
    icon: Building2,
    items: [
      { to: '/interno', key: 'int.clients', icon: Building2, internal: true },
      { to: '/equipe', key: 'nav.team', icon: Users, clientOnly: true },
      { to: '/interno/empresas', key: 'int.companies', icon: Building, internal: true },
      { to: '/networks', key: 'nav.networks', icon: Network, clientOnly: true },
      { to: '/interno/networks', key: 'nav.networks', icon: Network, internal: true },
      { to: '/interno/contratos', key: 'int.contracts', icon: FileSignature, internal: true },
      { to: '/sites', key: 'nav.sites', icon: Globe, clientOnly: true },
      { to: '/interno/sites', key: 'nav.sites', icon: Globe, internal: true },
      { to: '/rewards', key: 'nav.rewards', icon: Gift, clientOnly: true, separated: true },
      { to: '/interno/rewards', key: 'nav.rewards', icon: Gift, internal: true, separated: true },
      { to: '/ad-tags', key: 'nav.adTags', icon: Code2, clientOnly: true },
      { to: '/interno/ad-tags', key: 'nav.adTags', icon: Code2, internal: true },
      { to: '/loaders', key: 'nav.loaders', icon: LoaderCircle, clientOnly: true },
      { to: '/interno/loaders', key: 'nav.loaders', icon: LoaderCircle, internal: true },
      { to: '/regras-de-preco', key: 'nav.priceRules', icon: CircleDollarSign, clientOnly: true },
      { to: '/interno/regras-de-preco', key: 'nav.priceRules', icon: CircleDollarSign, internal: true },
      { to: '/interno/checklists', key: 'nav.checklists', icon: ListChecks, internal: true },
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
      { to: '/resultado', key: 'nav.results', icon: Scale },
      { to: '/interno/resultados', key: 'int.results', icon: Scale, internal: true },
      { to: '/interno/metas', key: 'goals.title', icon: Target, internal: true },
      { to: '/campanhas-facebook', key: 'nav.facebookCampaigns', icon: Megaphone, clientOnly: true, separated: true },
      { to: '/interno/campanhas-facebook', key: 'nav.facebookCampaigns', icon: Megaphone, internal: true, separated: true },
      { to: '/campanhas-google-ads', key: 'nav.googleAdsCampaigns', icon: Megaphone, clientOnly: true },
      { to: '/interno/campanhas-google-ads', key: 'nav.googleAdsCampaigns', icon: Megaphone, internal: true },
      { to: '/relatorios', key: 'nav.customReports', icon: FileChartColumn, separated: true },
    ],
  },
  {
    id: 'integrations',
    key: 'nav.groupIntegrations',
    label: 'nav.groupIntegrations',
    icon: Plug,
    items: [
      { to: '/facebook', key: 'nav.facebook', icon: Megaphone, clientOnly: true },
      { to: '/interno/facebook', key: 'nav.facebook', icon: Megaphone, internal: true },
      { to: '/google-ads', key: 'nav.googleAds', icon: Megaphone, clientOnly: true },
      { to: '/interno/google-ads', key: 'nav.googleAds', icon: Megaphone, internal: true },
    ],
  },
  {
    id: 'tools',
    key: 'nav.groupTools',
    label: 'nav.groupTools',
    icon: Wrench,
    items: [
      { to: '/interno/ferramentas-gam', key: 'nav.gamTools', icon: Wrench, internal: true },
      { to: '/interno/alertas', key: 'nav.alerts', icon: BellRing, internal: true },
      { to: '/interno/envios', key: 'nav.schedules', icon: MailCheck, internal: true },
      { to: '/interno/modelos-de-dashboard', key: 'nav.dashboardTemplates', icon: LayoutTemplate, internal: true },
    ],
  },
  {
    id: 'commissions',
    key: 'nav.groupCommissions',
    label: 'nav.groupCommissions',
    icon: Wallet,
    items: [
      { to: '/interno/minha-comissao', key: 'com.nav.mine', icon: Wallet, internal: true },
      { to: '/interno/minhas-invoices', key: 'inv.mine.title', icon: FileText, internal: true },
      { to: '/interno/comissoes', key: 'com.nav.team', icon: Coins, internal: true },
      { to: '/interno/invoices', key: 'inv.team.title', icon: ReceiptText, internal: true },
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
  '/interno/invoices': ['/interno/servicos-de-invoice'],
}

/** Os grupos do menu: com a Company Groone ativa, os do painel interno; com uma Empresa cliente, os dela. */
export function visibleGroups(onGroone: boolean): NavGroup[] {
  return NAV_GROUPS.map((section) => ({ ...section, items: section.items.filter((link) => (onGroone ? !link.clientOnly : !link.internal)) })).filter(
    (section) => section.items.length > 0,
  )
}

/** Diz se o link está ativo no caminho, respeitando o lado (cliente ou interno) dele. */
export function linkActive(link: NavItem, path: string, onInternal: boolean): boolean {
  if (!!link.internal !== onInternal) return false
  if (link.to === '/') return path === '/' || path.startsWith('/dashboards/')
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
  const groups = computed(() => visibleGroups(!!session.company?.is_internal))
  const onInternal = computed(() => route.meta.internal === true)
  /** Diz se o link está ativo na rota atual. */
  const active = (link: NavItem) => linkActive(link, route.path, onInternal.value)
  /** Diz se o grupo tem o item ativo. */
  const groupActive = (section: NavGroup) => section.items.some(active)

  /** Abre o link na Empresa ativa; o item interno troca para a Company Groone pelo guarda do router. */
  async function openLink(event: Event | null, to: string) {
    onNavigate()
    if (!event) await router.push(to)
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
