import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { setUnauthorizedHandler } from '@/lib/api'
import { useSession } from '@/stores/session'

// Os caminhos de /entrar, /entrar/2fa, /convite/{token}, /redefinir-senha/{token} e
// /configuracoes/conta são usados pela API nos e-mails e redirecionamentos: não mudar.
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
      { path: 'equipe', component: () => import('@/views/TeamView.vue'), meta: { permission: 'team.view' } },
      { path: 'configuracoes', component: () => import('@/views/SettingsView.vue') },
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
