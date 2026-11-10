import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { toast } from 'vue-sonner'
import { setCompanyChangedHandler, setTabCompany, setUnauthorizedHandler } from '@/lib/api'
import { errorText } from '@/lib/i18n'
import { onCompanyAnnounced } from '@/lib/tabs'
import { useSession } from '@/stores/session'

// Os caminhos de /entrar, /entrar/2fa, /convite/{token}, /redefinir-senha/{token} e
// /configuracoes/conta são usados pela API nos e-mails e redirecionamentos: não mudar.
const ACCOUNT = '/configuracoes/conta'

const routes: RouteRecordRaw[] = [
  { path: '/entrar', component: () => import('@/modules/auth/views/LoginView.vue'), meta: { public: true, guestOnly: true } },
  { path: '/entrar/2fa', component: () => import('@/modules/auth/views/MfaView.vue'), meta: { public: true } },
  { path: '/esqueci-a-senha', component: () => import('@/modules/auth/views/ForgotView.vue'), meta: { public: true } },
  { path: '/redefinir-senha/:token', component: () => import('@/modules/auth/views/ResetView.vue'), meta: { public: true } },
  { path: '/convite/:token', component: () => import('@/modules/auth/views/InviteView.vue'), meta: { public: true } },
  {
    path: '/',
    component: () => import('@/layouts/AppShell.vue'),
    children: [
      { path: '', component: () => import('@/modules/home/views/HomeView.vue') },
      { path: 'desempenho', component: () => import('@/modules/reports/views/PerformanceView.vue'), meta: { permission: 'reports.view' } },
      { path: 'visitas', component: () => import('@/modules/reports/views/PageViewsView.vue'), meta: { permission: 'reports.view' } },
      { path: 'dashboards', redirect: '/' },
      { path: 'dashboards/:id', component: () => import('@/modules/dashboards/views/DashboardsView.vue'), meta: { permission: 'reports.view' } },
      { path: 'relatorios', component: () => import('@/modules/reports/views/ReportsView.vue'), meta: { permission: 'reports.view' } },
      { path: 'relatorios/novo', component: () => import('@/modules/reports/views/ReportBuilderView.vue'), meta: { permission: 'reports.view' } },
      { path: 'relatorios/modelo/:key', component: () => import('@/modules/reports/views/ReportBuilderView.vue'), meta: { permission: 'reports.view' } },
      { path: 'relatorios/:id', component: () => import('@/modules/reports/views/ReportView.vue'), meta: { permission: 'reports.view' } },
      { path: 'relatorios/:id/editar', component: () => import('@/modules/reports/views/ReportBuilderView.vue'), meta: { permission: 'reports.view' } },
      { path: 'resultado', component: () => import('@/modules/results/views/ResultsView.vue'), meta: { permission: 'results.view' } },
      { path: 'custos', component: () => import('@/modules/costs/views/CostsView.vue'), meta: { permission: 'costs.view' } },
      { path: 'equipe', component: () => import('@/modules/team/views/TeamView.vue'), meta: { permission: 'team.view' } },
      { path: 'equipe/grupos', component: () => import('@/modules/groups/views/GroupsView.vue'), meta: { permission: 'groups.view' } },
      { path: 'equipe/grupos/:id', component: () => import('@/modules/groups/views/GroupView.vue'), meta: { permission: 'groups.view' } },
      { path: 'equipe/:id', component: () => import('@/modules/team/views/MemberView.vue'), meta: { permission: 'team.view' } },
      { path: 'papeis', component: () => import('@/modules/team/views/RolesView.vue'), meta: { permission: 'roles.view' } },
      { path: 'networks', component: () => import('@/modules/networks/views/NetworksView.vue'), meta: { permission: 'network.view' } },
      { path: 'networks/conectar', component: () => import('@/modules/networks/views/ConnectView.vue'), meta: { permission: 'network.connect' } },
      { path: 'sites', component: () => import('@/modules/sites/views/SitesView.vue'), meta: { permission: 'sites.view' } },
      { path: 'sites/:id', component: () => import('@/modules/sites/views/SiteDetailView.vue'), meta: { permission: 'sites.view' } },
      { path: 'rewards', component: () => import('@/modules/rewards/views/RewardsView.vue'), meta: { permission: 'rewards.view' } },
      { path: 'rewards/novo', component: () => import('@/modules/rewards/views/RewardEditView.vue'), meta: { permission: 'rewards.manage' } },
      { path: 'rewards/:id', component: () => import('@/modules/rewards/views/RewardEditView.vue'), meta: { permission: 'rewards.view' } },
      { path: 'rewards/:id/metricas', component: () => import('@/modules/rewards/views/RewardMetricsView.vue'), meta: { permission: 'rewards.view' } },
      { path: 'loaders', component: () => import('@/modules/loaders/views/LoadersView.vue'), meta: { permission: 'ad_tags.view' } },
      { path: 'loaders/novo', component: () => import('@/modules/loaders/views/LoaderEditView.vue'), meta: { permission: 'ad_tags.manage' } },
      { path: 'loaders/:id', component: () => import('@/modules/loaders/views/LoaderEditView.vue'), meta: { permission: 'ad_tags.view' } },
      { path: 'configuracoes', component: () => import('@/modules/company/views/SettingsView.vue') },
      { path: 'configuracoes/conta', component: () => import('@/modules/account/views/AccountView.vue') },
      // Painel interno: só a equipe Groone, com a Company Groone ativa (o guarda troca).
      { path: 'interno', component: () => import('@/modules/internal/clients/views/ClientsView.vue'), meta: { internal: true, permission: 'internal.clients.view' } },
      {
        path: 'interno/clientes/:id',
        component: () => import('@/modules/internal/clients/views/ClientView.vue'),
        meta: { internal: true, permission: 'internal.clients.view' },
      },
      { path: 'interno/pessoas', component: () => import('@/modules/internal/people/views/PeopleView.vue'), meta: { internal: true, permission: 'internal.users.manage' } },
      { path: 'interno/tarefas', component: () => import('@/modules/internal/tasks/views/TasksView.vue'), meta: { internal: true, permission: 'internal.tasks.view' } },
      { path: 'interno/tarefas/:id', component: () => import('@/modules/internal/tasks/views/TaskView.vue'), meta: { internal: true, permission: 'internal.tasks.view' } },
      { path: 'interno/ferramentas-gam', component: () => import('@/modules/internal/gam_tools/views/GamToolsView.vue'), meta: { internal: true, permission: 'internal.gam_tools.view' } },
      { path: 'interno/ferramentas-gam/execucoes/:id', component: () => import('@/modules/internal/gam_tools/views/GamRunView.vue'), meta: { internal: true, permission: 'internal.gam_tools.view' } },
      { path: 'interno/checklists', component: () => import('@/modules/internal/checklists/views/ChecklistsView.vue'), meta: { internal: true, permission: 'internal.checklists.view' } },
      { path: 'interno/checklists/itens', component: () => import('@/modules/internal/checklists/views/ChecklistItemsView.vue'), meta: { internal: true, permission: 'internal.checklists.view' } },
      { path: 'interno/checklists/:id', component: () => import('@/modules/internal/checklists/views/ChecklistView.vue'), meta: { internal: true, permission: 'internal.checklists.view' } },
      { path: 'interno/alertas', component: () => import('@/modules/alerts/views/AlertsView.vue'), meta: { internal: true, permission: 'reports.view' } },
      { path: 'alertas', redirect: '/interno/alertas' },
      {
        path: 'interno/modelos-de-dashboard',
        component: () => import('@/modules/dashboards/views/TemplatesView.vue'),
        meta: { internal: true, permission: 'internal.dashboard_templates.manage' },
      },
      {
        path: 'interno/modelos-de-dashboard/novo',
        component: () => import('@/modules/dashboards/views/TemplateEditorView.vue'),
        meta: { internal: true, permission: 'internal.dashboard_templates.manage' },
      },
      {
        path: 'interno/modelos-de-dashboard/:id',
        component: () => import('@/modules/dashboards/views/TemplateEditorView.vue'),
        meta: { internal: true, permission: 'internal.dashboard_templates.manage' },
      },
      { path: 'interno/envios', component: () => import('@/modules/schedules/views/SchedulesView.vue'), meta: { internal: true, permission: 'reports.view' } },
      { path: 'interno/metas', component: () => import('@/modules/internal/goals/views/GoalsView.vue'), meta: { internal: true } },
      { path: 'interno/resultados', component: () => import('@/modules/internal/results/views/ClientsResultsView.vue'), meta: { internal: true, permission: 'internal.results.view' } },
      { path: 'interno/networks', component: () => import('@/modules/internal/inventory/views/ClientNetworksView.vue'), meta: { internal: true, permission: 'internal.clients.view' } },
      { path: 'interno/sites', component: () => import('@/modules/internal/inventory/views/ClientSitesView.vue'), meta: { internal: true, permission: 'internal.clients.view' } },
      { path: 'interno/rewards', component: () => import('@/modules/rewards/views/RewardsView.vue'), meta: { internal: true, permission: 'internal.rewards.view' } },
      { path: 'interno/rewards/novo', component: () => import('@/modules/rewards/views/RewardEditView.vue'), meta: { internal: true, permission: 'internal.rewards.manage' } },
      { path: 'interno/rewards/:id', component: () => import('@/modules/rewards/views/RewardEditView.vue'), meta: { internal: true, permission: 'internal.rewards.view' } },
      { path: 'interno/rewards/:id/metricas', component: () => import('@/modules/rewards/views/RewardMetricsView.vue'), meta: { internal: true, permission: 'internal.rewards.view' } },
      { path: 'interno/loaders', component: () => import('@/modules/loaders/views/LoadersView.vue'), meta: { internal: true, permission: 'internal.ad_tags.view' } },
      { path: 'interno/loaders/novo', component: () => import('@/modules/loaders/views/LoaderEditView.vue'), meta: { internal: true, permission: 'internal.ad_tags.manage' } },
      { path: 'interno/loaders/:id', component: () => import('@/modules/loaders/views/LoaderEditView.vue'), meta: { internal: true, permission: 'internal.ad_tags.view' } },
      { path: 'interno/equipes', component: () => import('@/modules/internal/clients/views/ClientTeamsView.vue'), meta: { internal: true, permission: 'internal.clients.view' } },
      { path: 'interno/equipe', component: () => import('@/modules/internal/staff/views/StaffView.vue'), meta: { internal: true, permission: 'internal.staff.manage' } },
      { path: 'interno/papeis', component: () => import('@/modules/internal/commissions/views/StaffRolesView.vue'), meta: { internal: true, permission: 'internal.commissions.view' } },
      { path: 'interno/minha-comissao', component: () => import('@/modules/internal/commissions/views/MyCommissionView.vue'), meta: { internal: true } },
      { path: 'interno/comissoes', component: () => import('@/modules/internal/commissions/views/TeamCommissionsView.vue'), meta: { internal: true, permission: 'internal.commissions.view' } },
      { path: 'interno/minhas-invoices', component: () => import('@/modules/internal/invoices/views/MyInvoicesView.vue'), meta: { internal: true } },
      { path: 'interno/invoices', component: () => import('@/modules/internal/invoices/views/InvoicesView.vue'), meta: { internal: true, permission: 'internal.invoices.view' } },
      { path: 'interno/invoices/:id', component: () => import('@/modules/internal/invoices/views/InvoiceView.vue'), meta: { internal: true } },
      { path: 'interno/servicos-de-invoice', component: () => import('@/modules/internal/invoices/views/InvoiceServicesView.vue'), meta: { internal: true } },
      {
        path: 'interno/contratos',
        component: () => import('@/modules/internal/contracts/views/ContractsView.vue'),
        meta: { internal: true, permission: 'internal.contracts.view' },
      },
    ],
  },
  { path: '/:rest(.*)*', component: () => import('@/layouts/NotFoundView.vue'), meta: { public: true } },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, _from, saved) => saved ?? (to.hash ? { el: to.hash } : { top: 0 }),
})

router.beforeEach(async (to) => {
  const session = useSession()
  if (!session.loaded) await session.load().catch(() => null)
  if (to.meta.public) {
    if (to.meta.guestOnly && session.me) return '/'
    return true
  }
  if (!session.me) return { path: '/entrar', query: to.fullPath === '/' ? {} : { next: to.fullPath } }
  // Equipe Groone sem 2FA: a API só libera a configuração, então o painel também.
  if (session.me.mfa_setup_required && to.path !== ACCOUNT) return ACCOUNT
  const groone = session.internalCompany
  if (to.meta.internal) {
    if (!groone) return '/'
    // As permissões internas só valem com a Company Groone ativa.
    if (session.company?.id !== groone.id) {
      try {
        await session.switchCompany(groone.id)
      } catch {
        return '/'
      }
    }
  }
  // Sem a permissão da tela, volta ao início (a API recusaria tudo mesmo).
  if (to.meta.permission && !session.can(to.meta.permission)) return '/'
  return true
})

setUnauthorizedHandler(() => {
  const session = useSession()
  session.set(null)
  const here = router.currentRoute.value
  if (!here.meta.public) void router.push({ path: '/entrar', query: { next: here.fullPath } })
})

setTabCompany(() => useSession().me?.active_company_id ?? null)

/** Evita repetir o aviso quando várias requisições recebem company_changed juntas. */
let following: Promise<void> | null = null

/** Outra aba trocou a Empresa da sessão: esta aba acompanha, avisa e volta ao início. */
function followOtherTab(): Promise<void> {
  following ??= (async () => {
    const session = useSession()
    await session.followOtherTab().catch(() => null)
    toast.warning(errorText('company_changed'))
    if (session.me && router.currentRoute.value.path !== '/') await router.push('/')
  })().finally(() => {
    following = null
  })
  return following
}

setCompanyChangedHandler(() => void followOtherTab())

onCompanyAnnounced((companyId) => {
  const session = useSession()
  if (session.me && companyId !== session.me.active_company_id) void followOtherTab()
})
