import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { setUnauthorizedHandler } from '@/lib/api'
import { useSession } from '@/stores/session'

// Os caminhos de /entrar, /entrar/2fa, /convite/{token}, /redefinir-senha/{token} e
// /configuracoes/conta são usados pela API nos e-mails e redirecionamentos: não mudar.
const ACCOUNT = '/configuracoes/conta'

const routes: RouteRecordRaw[] = [
  { path: '/entrar', component: () => import('@/views/LoginView.vue'), meta: { public: true, guestOnly: true } },
  { path: '/entrar/2fa', component: () => import('@/views/MfaView.vue'), meta: { public: true } },
  { path: '/esqueci-a-senha', component: () => import('@/views/ForgotView.vue'), meta: { public: true } },
  { path: '/redefinir-senha/:token', component: () => import('@/views/ResetView.vue'), meta: { public: true } },
  { path: '/convite/:token', component: () => import('@/views/InviteView.vue'), meta: { public: true } },
  {
    path: '/',
    component: () => import('@/layouts/AppShell.vue'),
    children: [
      { path: '', component: () => import('@/views/HomeView.vue') },
      { path: 'desempenho', component: () => import('@/views/PerformanceView.vue'), meta: { permission: 'reports.view' } },
      { path: 'visitas', component: () => import('@/views/PageViewsView.vue'), meta: { permission: 'reports.view' } },
      { path: 'equipe', component: () => import('@/views/TeamView.vue'), meta: { permission: 'team.view' } },
      { path: 'equipe/:id', component: () => import('@/views/MemberView.vue'), meta: { permission: 'team.view' } },
      { path: 'papeis', component: () => import('@/views/RolesView.vue'), meta: { permission: 'roles.view' } },
      { path: 'networks', component: () => import('@/views/NetworksView.vue'), meta: { permission: 'network.view' } },
      { path: 'networks/conectar', component: () => import('@/views/ConnectView.vue'), meta: { permission: 'network.connect' } },
      { path: 'sites', component: () => import('@/views/SitesView.vue'), meta: { permission: 'sites.view' } },
      { path: 'sites/:id', component: () => import('@/views/SiteDetailView.vue'), meta: { permission: 'sites.view' } },
      { path: 'configuracoes', component: () => import('@/views/SettingsView.vue') },
      { path: 'configuracoes/conta', component: () => import('@/views/AccountView.vue') },
      // Painel interno: só a equipe Groone, com a Company Groone ativa (o guarda troca).
      { path: 'interno', component: () => import('@/views/internal/ClientsView.vue'), meta: { internal: true, permission: 'internal.clients.view' } },
      {
        path: 'interno/clientes/:id',
        component: () => import('@/views/internal/ClientView.vue'),
        meta: { internal: true, permission: 'internal.clients.view' },
      },
      { path: 'interno/pessoas', component: () => import('@/views/internal/PeopleView.vue'), meta: { internal: true, permission: 'internal.users.manage' } },
      { path: 'interno/equipe', component: () => import('@/views/internal/StaffView.vue'), meta: { internal: true, permission: 'internal.staff.manage' } },
      {
        path: 'interno/contratos',
        component: () => import('@/views/internal/ContractsView.vue'),
        meta: { internal: true, permission: 'internal.contracts.view' },
      },
    ],
  },
  { path: '/:rest(.*)*', component: () => import('@/views/NotFoundView.vue'), meta: { public: true } },
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
