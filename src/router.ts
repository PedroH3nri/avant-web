import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { setUnauthorizedHandler } from '@/lib/api'
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
      { path: 'resultado', component: () => import('@/modules/results/views/ResultsView.vue'), meta: { permission: 'results.view' } },
      { path: 'custos', component: () => import('@/modules/costs/views/CostsView.vue'), meta: { permission: 'costs.view' } },
      { path: 'equipe', component: () => import('@/modules/team/views/TeamView.vue'), meta: { permission: 'team.view' } },
      { path: 'equipe/:id', component: () => import('@/modules/team/views/MemberView.vue'), meta: { permission: 'team.view' } },
      { path: 'papeis', component: () => import('@/modules/team/views/RolesView.vue'), meta: { permission: 'roles.view' } },
      { path: 'networks', component: () => import('@/modules/networks/views/NetworksView.vue'), meta: { permission: 'network.view' } },
      { path: 'networks/conectar', component: () => import('@/modules/networks/views/ConnectView.vue'), meta: { permission: 'network.connect' } },
      { path: 'sites', component: () => import('@/modules/sites/views/SitesView.vue'), meta: { permission: 'sites.view' } },
      { path: 'sites/:id', component: () => import('@/modules/sites/views/SiteDetailView.vue'), meta: { permission: 'sites.view' } },
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
      { path: 'interno/resultados', component: () => import('@/modules/internal/results/views/ClientsResultsView.vue'), meta: { internal: true, permission: 'internal.results.view' } },
      { path: 'interno/equipes', component: () => import('@/modules/internal/clients/views/ClientTeamsView.vue'), meta: { internal: true, permission: 'internal.clients.view' } },
      { path: 'interno/equipe', component: () => import('@/modules/internal/staff/views/StaffView.vue'), meta: { internal: true, permission: 'internal.staff.manage' } },
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
