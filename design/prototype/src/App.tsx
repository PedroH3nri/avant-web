import { useEffect, useMemo, useState } from 'react'
import { Toaster, toast } from 'sonner'
import { Check, ChevronsUpDown, Copy, Loader2, LogOut, Plus, RefreshCw, Search, X, AlertTriangle, ArrowLeft, MoreHorizontal, Lock, Mail, ExternalLink, Home, Users, Network, Settings, ShieldCheck, Menu, BarChart3, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { translate, type Key, type Lang } from './i18n'
import { Mark, SeatBar, SeatDot, SeatStrip, type SeatState } from './tiles'

/* ---------- prototype routing ---------- */

const SCREENS = [
  ['login', 'Login'],
  ['convite', 'Aceite de convite'],
  ['inicio', 'Início'],
  ['desempenho', 'Desempenho'],
  ['visitas', 'Page Views'],
  ['resultado', 'Resultado'],
  ['custos', 'Custos'],
  ['equipe', 'Equipe'],
  ['networks', 'Networks do GAM'],
  ['conectar', 'Conectar network'],
  ['configuracoes', 'Configurações'],
  ['interno', 'Painel interno · Clientes'],
  ['cliente', 'Painel interno · Página do cliente'],
  ['fiscais', 'Configurações · Dados fiscais'],
  ['contratos', 'Painel interno · Contratos'],
  ['resultados', 'Painel interno · Resultado dos clientes'],
  ['permissoes', 'Modal de permissões'],
] as const
type Screen = (typeof SCREENS)[number][0]
const isScreen = (s: string): s is Screen => SCREENS.some(([k]) => k === s)
type T = (k: Key) => string

/* ---------- sample data (synthetic) ---------- */

type Member = { name: string; email: string; role: string; since: string; state: 'owner' | 'member' | 'pending'; expires?: string }
const INITIAL_MEMBERS: Member[] = [
  { name: 'Pedro Henrique', email: 'pedro@blogexemplo.com', role: 'Dono', since: '02/09/2026', state: 'owner' },
  { name: 'Ana Souza', email: 'ana@blogexemplo.com', role: 'Gestor de tráfego', since: '12/09/2026', state: 'member' },
  { name: 'João Lima', email: 'joao@blogexemplo.com', role: 'Financeiro', since: '03/10/2026', state: 'member' },
  { name: 'Carla Mendes', email: 'carla@blogexemplo.com', role: 'Marketing', since: '15/10/2026', state: 'member' },
  { name: 'Rafael Dias', email: 'rafael@agenciadias.com', role: 'Gestor de tráfego', since: '22/10/2026', state: 'pending', expires: 'Expira em 18 h' },
]
const ROLES = [
  { name: 'Gestor de tráfego', kind: 'Predefinido', desc: 'Networks, sites e ad units. Não vê dados financeiros.' },
  { name: 'Financeiro', kind: 'Predefinido', desc: 'Receita, pagamentos e relatórios.' },
  { name: 'Marketing', kind: 'Predefinido', desc: 'Sites e relatórios de audiência.' },
  { name: 'Revisor de conteúdo', kind: 'Personalizado', desc: 'Só leitura de sites e ad units.' },
]
const LIMIT = 10

type NetStatus = 'ok' | 'testing' | 'error'
const NETWORKS: { name: string; code: string; via: string; status: NetStatus; sites: number | null; units: number | null; checked: string }[] = [
  { name: 'Blog Exemplo Principal', code: '21987654321', via: 'Contrato MCM', status: 'ok', sites: 3, units: 22, checked: 'Hoje, 14:05' },
  { name: 'Blog Exemplo Receitas', code: '22334455667', via: 'Conta de serviço', status: 'testing', sites: null, units: null, checked: 'Agora' },
  { name: 'Portal Antigo', code: '20111222333', via: 'Conta de serviço', status: 'error', sites: null, units: null, checked: 'Ontem, 09:12' },
]
const SITES = [
  { domain: 'blogexemplo.com', network: 'Blog Exemplo Principal', approval: 'ok' as const, units: 12 },
  { domain: 'receitas.blogexemplo.com', network: 'Blog Exemplo Principal', approval: 'ok' as const, units: 7 },
  { domain: 'viagens.blogexemplo.com', network: 'Blog Exemplo Principal', approval: 'review' as const, units: 3 },
]
const SERVICE_ACCOUNT = 'avant-gam@groone-avant.iam.gserviceaccount.com'

/* ---------- system colour (per Empresa) ---------- */

const ACCENTS = [
  { id: 'padrao', label: 'Padrão', light: '0 0% 9%', dark: '0 0% 93%', fgLight: '0 0% 100%', fgDark: '0 0% 4%' },
  { id: 'azul', label: 'Azul', light: '212 100% 45%', dark: '212 100% 62%', fgLight: '0 0% 100%', fgDark: '0 0% 4%' },
  { id: 'verde', label: 'Verde', light: '152 76% 28%', dark: '150 60% 52%', fgLight: '0 0% 100%', fgDark: '0 0% 4%' },
  { id: 'roxo', label: 'Roxo', light: '262 70% 52%', dark: '262 85% 74%', fgLight: '0 0% 100%', fgDark: '0 0% 4%' },
  { id: 'laranja', label: 'Laranja', light: '22 92% 44%', dark: '26 95% 60%', fgLight: '0 0% 100%', fgDark: '0 0% 4%' },
]
function accentCss(a: (typeof ACCENTS)[number]) {
  const l = `--primary:${a.light};--primary-foreground:${a.fgLight};`
  const d = `--primary:${a.dark};--primary-foreground:${a.fgDark};`
  return `:root{${l}} @media (prefers-color-scheme: dark){:root:not([data-theme="light"]){${d}}} :root[data-theme="dark"]{${d}}`
}

/* ---------- building blocks ---------- */

function Status({ tone, children }: { tone: 'ok' | 'warn' | 'bad' | 'neutral' | 'ochre'; children: React.ReactNode }) {
  const dot = { ok: 'bg-ok', warn: 'bg-warn', bad: 'bg-bad', ochre: 'bg-ochre', neutral: 'bg-muted-foreground/60' }[tone]
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap text-[13px]">
      <span className={cn('h-2 w-2 rounded-full', dot)} aria-hidden="true" />
      {children}
    </span>
  )
}

function Badge({ children, tone = 'neutral' }: { children: React.ReactNode; tone?: 'neutral' | 'ochre' | 'bad' }) {
  return (
    <span className={cn('inline-flex h-5 items-center whitespace-nowrap rounded-full px-2 text-[12px] font-medium',
      tone === 'neutral' && 'bg-secondary text-secondary-foreground',
      tone === 'ochre' && 'bg-ochre-soft text-ochre',
      tone === 'bad' && 'bg-bad-soft text-bad')}>{children}</span>
  )
}

function Code({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-[13px] tnum">{children}</span>
}

function Field({ id, label, hint, error, children }: { id: string; label: string; hint?: string; error?: string | false; children: React.ReactNode }) {
  return (
    <div className="grid min-w-0 gap-2">
      <Label htmlFor={id} className="text-[13px] font-medium text-muted-foreground">{label}</Label>
      {children}
      {error ? <p className="text-[13px] text-bad">{error}</p> : hint ? <p className="text-[13px] text-muted-foreground">{hint}</p> : null}
    </div>
  )
}

function Avatar({ name, size = 32 }: { name: string; size?: number }) {
  const initials = name.split(' ').filter((p) => /^[A-ZÀ-Ý]/.test(p)).map((p) => p[0]).slice(0, 2).join('')
  const hue = [...name].reduce((h, c) => h + c.charCodeAt(0), 0) % 360
  return (
    <span className="inline-flex shrink-0 items-center justify-center rounded-full text-[12px] font-semibold text-white"
      style={{ width: size, height: size, background: `linear-gradient(135deg, hsl(${hue} 70% 55%), hsl(${(hue + 40) % 360} 75% 45%))` }}>
      {initials}
    </span>
  )
}

/** Vercel-style card: body plus an optional muted footer with a note and the action. */
function Card({ title, desc, footerNote, footer, className, children, pad = true }: { title?: string; desc?: React.ReactNode; footerNote?: React.ReactNode; footer?: React.ReactNode; className?: string; children?: React.ReactNode; pad?: boolean }) {
  return (
    <section className={cn('overflow-hidden rounded-lg border bg-card', className)}>
      {(title || desc || children) && (
        <div className={cn(pad && 'p-6')}>
          {title && <h2 className="text-[20px] font-semibold tracking-tight">{title}</h2>}
          {desc && <div className="mt-2 max-w-[70ch] text-[14px] text-muted-foreground">{desc}</div>}
          {children && <div className={cn((title || desc) && 'mt-5')}>{children}</div>}
        </div>
      )}
      {(footer || footerNote) && (
        <div className="flex flex-wrap items-center justify-between gap-3 border-t bg-muted px-6 py-3">
          <div className="text-[13px] text-muted-foreground">{footerNote}</div>
          <div className="flex gap-2">{footer}</div>
        </div>
      )}
    </section>
  )
}

const th = 'h-10 px-4 text-[12px] font-medium text-muted-foreground border-b whitespace-nowrap'
const td = 'px-4 py-3 border-b align-middle'
function Table({ children, min = 640 }: { children: React.ReactNode; min?: number }) {
  return (
    <div className="overflow-x-auto rounded-lg border bg-card">
      <table className="w-full text-left text-[14px] [&_tbody_tr:last-child_td]:border-b-0" style={{ minWidth: min }}>{children}</table>
    </div>
  )
}

/* ---------- auth ---------- */

function AuthFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col">
      <header className="flex h-16 items-center px-6"><div className="flex items-center gap-2"><Mark size={24} /><span className="text-[15px] font-semibold tracking-tight">Avant</span></div></header>
      <main className="flex flex-1 items-start justify-center px-4 pb-16 pt-10 sm:pt-20">
        <div className="w-full max-w-[360px]">{children}</div>
      </main>
      <footer className="border-t px-6 py-4 text-[13px] text-muted-foreground">Avant by Groone · avant.groone.com</footer>
    </div>
  )
}

function GoogleG() {
  return (
    <svg viewBox="0 0 18 18" width="16" height="16" aria-hidden="true">
      <path fill="#4285F4" d="M17.6 9.2c0-.6-.1-1.2-.2-1.8H9v3.4h4.8a4.1 4.1 0 0 1-1.8 2.7v2.2h2.9c1.7-1.6 2.7-3.9 2.7-6.5z" />
      <path fill="#34A853" d="M9 18c2.4 0 4.5-.8 6-2.2l-2.9-2.2c-.8.5-1.8.9-3.1.9-2.4 0-4.4-1.6-5.1-3.8H.9v2.3A9 9 0 0 0 9 18z" />
      <path fill="#FBBC05" d="M3.9 10.7a5.4 5.4 0 0 1 0-3.4V5H.9a9 9 0 0 0 0 8l3-2.3z" />
      <path fill="#EA4335" d="M9 3.6c1.3 0 2.5.5 3.5 1.4l2.6-2.6A9 9 0 0 0 .9 5l3 2.3C4.6 5.2 6.6 3.6 9 3.6z" />
    </svg>
  )
}

function Login({ t, go }: { t: T; go: (s: Screen) => void }) {
  const [busy, setBusy] = useState(false)
  return (
    <AuthFrame>
      <h1 className="text-center text-[32px] font-semibold tracking-[-0.03em]">{t('login.title')}</h1>
      <div className="mt-8 grid gap-3">
        <Button variant="outline" className="h-12 text-[15px]" onClick={() => go('inicio')}><GoogleG />{t('login.google')}</Button>
      </div>
      <div className="my-6 flex items-center gap-3 text-[13px] text-muted-foreground"><span className="h-px flex-1 bg-border" />{t('login.or')}<span className="h-px flex-1 bg-border" /></div>
      <form className="grid gap-3" onSubmit={(e) => { e.preventDefault(); setBusy(true); setTimeout(() => go('inicio'), 700) }}>
        <Input id="login-email" aria-label={t('login.email')} className="h-12 text-[15px]" type="email" defaultValue="pedro@blogexemplo.com" autoComplete="email" />
        <Input id="login-pw" aria-label={t('login.password')} className="h-12 text-[15px]" type="password" defaultValue="segredo-de-exemplo" autoComplete="current-password" />
        <Button type="submit" disabled={busy} className="h-12 text-[15px]">{busy && <Loader2 className="animate-spin" />}{t('login.submit')}</Button>
      </form>
      <div className="mt-6 grid gap-2 text-center text-[14px]">
        <button type="button" className="text-link hover:underline focus-visible:underline focus-visible:outline-none">{t('login.forgot')}</button>
        <p className="text-muted-foreground">{t('login.noaccount')}</p>
      </div>
    </AuthFrame>
  )
}

function Invite({ t, go }: { t: T; go: (s: Screen) => void }) {
  const [pw, setPw] = useState('')
  const [pw2, setPw2] = useState('')
  const mismatch = pw2.length > 0 && pw !== pw2
  const short = pw.length > 0 && pw.length < 10
  return (
    <AuthFrame>
      <div className="flex justify-center -space-x-2"><Avatar name="Pedro Henrique" size={44} /><span className="inline-flex rounded-[9px] ring-2 ring-background"><Mark size={44} /></span></div>
      <h1 className="mt-6 text-center text-[28px] font-semibold leading-tight tracking-[-0.03em]">Entrar na Blog Exemplo</h1>
      {/* No convite de dono a Empresa já existe: a Groone cadastrou antes. Não há tela de criar Empresa. */}
      <p className="mt-3 text-center text-[14px] text-muted-foreground">
        <span className="text-foreground">Pedro Henrique</span> convidou <span className="text-foreground">rafael@agenciadias.com</span> como <span className="text-foreground">Gestor de tráfego</span>. Convite válido até 23/10/2026, 14:05.
      </p>
      <form className="mt-8 grid gap-4" onSubmit={(e) => { e.preventDefault(); if (!mismatch && !short && pw) go('inicio') }}>
        <Field id="inv-name" label={t('invite.name')}><Input id="inv-name" className="h-10" defaultValue="Rafael Dias" autoComplete="name" /></Field>
        <Field id="inv-pw" label={t('login.password')} hint="Pelo menos 10 caracteres." error={short && `A senha tem ${pw.length} caracteres. Use pelo menos 10.`}>
          <Input id="inv-pw" className="h-10" type="password" value={pw} onChange={(e) => setPw(e.target.value)} aria-invalid={short} autoComplete="new-password" />
        </Field>
        <Field id="inv-pw2" label={t('invite.pw2')} error={mismatch && 'As senhas não são iguais.'}>
          <Input id="inv-pw2" className="h-10" type="password" value={pw2} onChange={(e) => setPw2(e.target.value)} aria-invalid={mismatch} autoComplete="new-password" />
        </Field>
        <Button type="submit" className="mt-2 h-10" disabled={!pw || mismatch || short}>{t('invite.submit')}</Button>
        <p className="text-center text-[13px] text-muted-foreground">{t('invite.google')}</p>
      </form>
    </AuthFrame>
  )
}

/* ---------- app shell: sidebar + main ---------- */

const NAV: { id: Screen; key: Key; icon: typeof Home }[] = [
  { id: 'inicio', key: 'nav.home', icon: Home },
  { id: 'desempenho', key: 'nav.performance', icon: BarChart3 },
  { id: 'visitas', key: 'nav.pageViews', icon: Eye },
  { id: 'equipe', key: 'nav.team', icon: Users },
  { id: 'networks', key: 'nav.networks', icon: Network },
  { id: 'configuracoes', key: 'nav.settings', icon: Settings },
]

function LangSwitch({ lang, setLang, className }: { lang: Lang; setLang: (l: Lang) => void; className?: string }) {
  return (
    <div className={cn('flex items-center rounded-md border bg-background p-0.5', className)} role="group" aria-label="Idioma">
      {(['pt', 'en', 'es'] as Lang[]).map((l) => (
        <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l} className={cn('h-7 flex-1 rounded-[4px] px-2 text-[12px] font-medium uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', lang === l ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground')}>{l}</button>
      ))}
    </div>
  )
}

function SidebarContent({ t, screen, go }: { t: T; screen: Screen; go: (s: Screen) => void }) {
  const internal = screen === 'interno'
  const isActive = (id: Screen) => screen === id || (id === 'networks' && screen === 'conectar')
  const item = (active: boolean) => cn('flex h-9 w-full items-center gap-2.5 rounded-md px-2.5 text-left text-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    active ? 'bg-secondary font-medium text-foreground' : 'text-muted-foreground hover:bg-accent hover:text-foreground')
  return (
    <div className="flex h-full flex-col bg-sidebar">
      <div className="flex h-14 items-center gap-2 border-b px-3">
        <button onClick={() => go(internal ? 'interno' : 'inicio')} aria-label="Avant, início" className="shrink-0 rounded-md p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Mark size={24} /></button>
        <span className="leading-tight"><span className="block text-[14px] font-semibold tracking-tight">Avant</span><span className="block text-[12px] text-muted-foreground">by Groone</span></span>
      </div>
      <nav className="grid gap-0.5 p-3" aria-label="Principal">
        {internal ? (
          <button onClick={() => go('interno')} aria-current="page" className={item(true)}><Users className="h-4 w-4" />{t('int.title')}</button>
        ) : NAV.map(({ id, key, icon: Icon }) => (
          <button key={id} onClick={() => go(id)} aria-current={isActive(id) ? 'page' : undefined} className={item(isActive(id))}>
            <Icon className="h-4 w-4" />{t(key)}
            {id === 'networks' && <span className="ml-auto h-2 w-2 rounded-full bg-bad" aria-label="1 network sem acesso" />}
          </button>
        ))}
        {!internal && (
          <>
            <div className="px-2.5 pb-1 pt-5 text-[12px] font-medium text-muted-foreground">{t('nav.soon')}</div>
            {(['nav.dashboards'] as Key[]).map((k) => (
              <span key={k} className="flex h-9 items-center gap-2.5 px-2.5 text-[14px] text-muted-foreground/70"><Lock className="h-4 w-4" />{t(k)}</span>
            ))}
          </>
        )}
      </nav>
      <div className="mt-auto grid gap-3 border-t p-3">
        <button onClick={() => go(internal ? 'inicio' : 'interno')} className={item(false)}>
          {internal ? <ArrowLeft className="h-4 w-4" /> : <ShieldCheck className="h-4 w-4" />}{internal ? t('nav.back') : t('nav.internal')}
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2.5 rounded-md p-1.5 text-left hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Avatar name="Pedro Henrique" size={28} />
            <span className="min-w-0 flex-1"><span className="block truncate text-[13px] font-medium">Pedro Henrique</span><span className="block truncate text-[12px] text-muted-foreground">pedro@blogexemplo.com</span></span>
            <ChevronsUpDown className="h-4 w-4 shrink-0 text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" side="top" className="w-56">
            <DropdownMenuItem>{t('top.profile')}</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => go('login')}>{t('top.logout')}<LogOut className="ml-auto h-4 w-4" /></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

function CompanySwitcher({ t, internal }: { t: T; internal: boolean }) {
  return (
    <>
        {internal ? (
          <span className="flex min-w-0 items-center gap-2 text-[14px] font-medium">Groone<Badge>Painel interno</Badge></span>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger className="flex min-w-0 items-center gap-2 rounded-md px-1.5 py-1.5 text-left text-[14px] font-medium hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <Avatar name="Blog Exemplo" size={20} />
              <span className="min-w-0 truncate">Blog Exemplo</span>
              <span className="hidden sm:inline-flex"><Badge>Rede Groone</Badge></span>
              <ChevronsUpDown className="h-4 w-4 shrink-0 text-muted-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              <DropdownMenuLabel className="text-[12px] font-normal text-muted-foreground">{t('top.companies')}</DropdownMenuLabel>
              <DropdownMenuItem className="gap-2"><Avatar name="Blog Exemplo" size={20} />Blog Exemplo<Check className="ml-auto h-4 w-4" /></DropdownMenuItem>
              <DropdownMenuItem className="gap-2" onSelect={() => toast('Trocaria para a Empresa Receitas da Vó')}><Avatar name="Receitas da Vó" size={20} />Receitas da Vó<span className="ml-auto text-[12px] text-muted-foreground">Financeiro</span></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
    </>
  )
}

function Shell({ t, lang, setLang, screen, go, children }: { t: T; lang: Lang; setLang: (l: Lang) => void; screen: Screen; go: (s: Screen) => void; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const nav = (s: Screen) => { setOpen(false); go(s) }
  return (
    <div className="flex flex-1">
      <aside className="sticky top-11 hidden h-[calc(100dvh-2.75rem)] w-[248px] shrink-0 self-start border-r lg:block"><SidebarContent t={t} screen={screen} go={go} /></aside>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-[272px] p-0 [&>button:first-child]:hidden">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SidebarContent t={t} screen={screen} go={nav} />
        </SheetContent>
      </Sheet>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-14 items-center gap-2 border-b bg-background px-4 sm:px-6 lg:top-11">
          <Button variant="ghost" size="icon" className="-ml-2 lg:hidden" onClick={() => setOpen(true)} aria-label="Abrir menu"><Menu /></Button>
          <CompanySwitcher t={t} internal={screen === 'interno'} />
          <LangSwitch lang={lang} setLang={setLang} className="ml-auto w-[132px]" />
        </header>
        {children}
      </div>
    </div>
  )
}

function PageHeader({ title, sub, actions, back }: { title: string; sub?: string; actions?: React.ReactNode; back?: React.ReactNode }) {
  return (
    <div className="border-b bg-background">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-end justify-between gap-x-6 gap-y-4 px-4 py-10 sm:px-6">
        <div className="min-w-0 max-w-[64ch]">
          {back}
          <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.04em]">{title}</h1>
          {sub && <p className="mt-2 text-[15px] text-muted-foreground">{sub}</p>}
        </div>
        {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
      </div>
    </div>
  )
}
function Body({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className="flex-1 bg-muted"><div className={cn('mx-auto grid max-w-[1200px] content-start gap-6 px-4 py-8 sm:px-6 [&>*]:min-w-0', className)}>{children}</div></div>
}

/* ---------- Início ---------- */

function HomeScreen({ t, go, members }: { t: T; go: (s: Screen) => void; members: Member[] }) {
  const pending = members.filter((m) => m.state === 'pending').length
  const seats: SeatState[] = Array.from({ length: LIMIT }, (_, i) => (members[i] ? members[i].state : 'free'))
  return (
    <>
      <PageHeader title={t('home.title')} sub={t('home.sub')} />
      <Body className="lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="grid content-start gap-6">
          <div className="flex items-start gap-3 rounded-lg border border-bad/25 bg-card p-4">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-bad" />
            <div className="min-w-0 flex-1 text-[14px]"><span className="font-medium">Portal Antigo está sem acesso.</span> <span className="text-muted-foreground">A conta de serviço da Groone deixou de ser administradora dessa network.</span></div>
            <Button size="sm" variant="outline" onClick={() => go('conectar')}>Reconectar</Button>
          </div>
          <Table min={560}>
            <thead><tr><th className={th}>Network</th><th className={th}>Status</th><th className={cn(th, 'text-right')}>Sites</th><th className={th}>Última checagem</th></tr></thead>
            <tbody>
              {NETWORKS.map((n) => (
                <tr key={n.code} className="cursor-pointer hover:bg-muted" onClick={() => go('networks')}>
                  <td className={td}><div className="font-medium">{n.name}</div><div className="text-[13px] text-muted-foreground"><Code>{n.code}</Code></div></td>
                  <td className={td}>{netStatus(n.status)}</td>
                  <td className={cn(td, 'text-right tnum')}>{n.sites ?? '–'}</td>
                  <td className={cn(td, 'text-muted-foreground')}>{n.checked}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <p className="text-[13px] text-muted-foreground">Receita e métricas do Ad Manager chegam na próxima fase do Avant.</p>
        </div>
        <div className="grid content-start gap-6">
          <Card pad>
            <div className="flex items-baseline justify-between"><h2 className="text-[14px] font-medium">Equipe</h2><span className="tnum text-[13px] text-muted-foreground">{members.length} de {LIMIT} vagas</span></div>
            <div className="mt-3"><SeatBar seats={seats} /></div>
            <p className="mt-3 text-[13px] text-muted-foreground">{pending ? `${pending} convite ainda não foi aceito.` : 'Todos os convites foram aceitos.'}</p>
            <Button variant="outline" size="sm" className="mt-4" onClick={() => go('equipe')}>Ver equipe</Button>
          </Card>
          <Card pad>
            <h2 className="text-[14px] font-medium">Atividade recente</h2>
            <ol className="mt-4 grid gap-4 text-[13.5px]">
              {[
                ['Pedro Henrique', 'convidou rafael@agenciadias.com como Gestor de tráfego.', '3 h'],
                ['Avant', 'reimportou 3 sites e 22 ad units da network Blog Exemplo Principal.', '5 h'],
                ['Avant', 'perdeu o acesso à network Portal Antigo.', '1 d'],
                ['Carla Mendes', 'aceitou o convite e entrou como Marketing.', '7 d'],
              ].map(([who, what, when]) => (
                <li key={what} className="flex gap-3">
                  {who === 'Avant' ? <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center"><Mark size={18} /></span> : <span className="mt-0.5"><Avatar name={who} size={20} /></span>}
                  <p className="min-w-0 flex-1"><span className="font-medium">{who}</span> <span className="text-muted-foreground">{what}</span></p>
                  <span className="tnum text-muted-foreground">{when}</span>
                </li>
              ))}
            </ol>
          </Card>
        </div>
      </Body>
    </>
  )
}

/* ---------- Desempenho ---------- */

type PerfMetric = 'revenue' | 'impressions' | 'ecpm' | 'ctr' | 'active_view'
const PERF_METRICS: { key: PerfMetric; label: string; kind: 'money' | 'int' | 'pct' }[] = [
  { key: 'revenue', label: 'Receita', kind: 'money' },
  { key: 'impressions', label: 'Impressões', kind: 'int' },
  { key: 'ecpm', label: 'eCPM', kind: 'money' },
  { key: 'ctr', label: 'CTR', kind: 'pct' },
  { key: 'active_view', label: 'Visibilidade', kind: 'pct' },
]
const PERIODS = [['yesterday', 'Ontem', 1], ['last_7_days', 'Últimos 7 dias', 7], ['last_30_days', 'Últimos 30 dias', 30], ['this_month', 'Este mês', 24], ['last_month', 'Mês passado', 30]] as const
type PeriodKey = (typeof PERIODS)[number][0]
type DayPoint = { day: string; revenue: number; impressions: number; clicks: number; viewable: number; measurable: number }

function wave(seed: number, i: number) { return Math.sin(i * 0.9 + seed) * 0.08 + Math.sin(i * 0.31 + seed * 2) * 0.05 + (i % 7 === 5 || i % 7 === 6 ? -0.12 : 0) }
function series(days: number, seed: number, scale: number): DayPoint[] {
  return Array.from({ length: days }, (_, i) => {
    const f = 1 + wave(seed, i)
    const impressions = Math.round(182000 * scale * f)
    return { day: `${String(((i + 1) % 30) + 1).padStart(2, '0')}/10`, revenue: impressions / 1000 * 3.42 * (1 + wave(seed + 1, i) / 2), impressions, clicks: Math.round(impressions * 0.0061 * (1 + wave(seed + 3, i))), viewable: Math.round(impressions * 0.68), measurable: impressions }
  })
}
function totals(points: DayPoint[]) {
  const s = points.reduce((a, p) => ({ revenue: a.revenue + p.revenue, impressions: a.impressions + p.impressions, clicks: a.clicks + p.clicks, viewable: a.viewable + p.viewable, measurable: a.measurable + p.measurable }), { revenue: 0, impressions: 0, clicks: 0, viewable: 0, measurable: 0 })
  return { revenue: s.revenue, impressions: s.impressions, ecpm: s.impressions ? (s.revenue / s.impressions) * 1000 : 0, ctr: s.impressions ? (s.clicks / s.impressions) * 100 : 0, active_view: s.measurable ? (s.viewable / s.measurable) * 100 : 0 }
}
function pointValue(p: DayPoint, m: PerfMetric) { return totals([p])[m] }
const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
const int = new Intl.NumberFormat('pt-BR')
const pct = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
function fmt(kind: 'money' | 'int' | 'pct', v: number) { return kind === 'money' ? brl.format(v) : kind === 'int' ? int.format(Math.round(v)) : `${pct.format(v)}%` }
function compact(kind: 'money' | 'int' | 'pct', v: number) { return kind === 'pct' ? `${pct.format(v)}%` : new Intl.NumberFormat('pt-BR', { notation: 'compact', maximumFractionDigits: 1, ...(kind === 'money' ? { style: 'currency', currency: 'BRL' } : {}) }).format(v) }

function Delta({ now, before }: { now: number; before: number | null }) {
  if (before === null || before === 0) return <span className="text-[13px] text-muted-foreground">sem período anterior</span>
  const change = ((now - before) / before) * 100
  const up = change >= 0
  return (
    <span className={cn('inline-flex items-center gap-1 text-[13px] tnum', up ? 'text-ok' : 'text-bad')}>
      <span aria-hidden="true">{up ? '↑' : '↓'}</span>{pct.format(Math.abs(change))}%<span className="text-muted-foreground">{up ? 'acima' : 'abaixo'} do anterior</span>
    </span>
  )
}

function LineChart({ current, previous, metric }: { current: DayPoint[]; previous: DayPoint[] | null; metric: (typeof PERF_METRICS)[number] }) {
  const [hover, setHover] = useState<number | null>(null)
  const W = 960, H = 260, L = 64, R = 16, T = 16, B = 28
  const now = current.map((p) => pointValue(p, metric.key))
  const before = previous?.map((p) => pointValue(p, metric.key)) ?? []
  const max = Math.max(...now, ...before) * 1.1 || 1
  const x = (i: number) => L + (current.length === 1 ? (W - L - R) / 2 : (i * (W - L - R)) / (current.length - 1))
  const y = (v: number) => T + (H - T - B) * (1 - v / max)
  const path = (vals: number[]) => vals.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join('')
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((f) => max * f)
  const step = Math.max(1, Math.ceil(current.length / 8))
  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-[260px] w-full" role="img" aria-label={`${metric.label} por dia`}
        onMouseLeave={() => setHover(null)}
        onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); const px = ((e.clientX - r.left) / r.width) * W; const i = Math.round(((px - L) / (W - L - R)) * (current.length - 1)); setHover(Math.min(current.length - 1, Math.max(0, i))) }}>
        {ticks.map((v) => (
          <g key={v}>
            <line x1={L} x2={W - R} y1={y(v)} y2={y(v)} className="stroke-border" strokeWidth={1} />
            <text x={L - 8} y={y(v) + 4} textAnchor="end" className="fill-muted-foreground text-[11px] tnum">{compact(metric.kind, v)}</text>
          </g>
        ))}
        {current.map((p, i) => i % step === 0 && <text key={p.day} x={x(i)} y={H - 8} textAnchor="middle" className="fill-muted-foreground text-[11px] tnum">{p.day}</text>)}
        {previous && <path d={path(before)} fill="none" className="stroke-muted-foreground/60" strokeWidth={2} strokeDasharray="4 4" strokeLinejoin="round" />}
        <path d={`${path(now)}L${x(now.length - 1)},${y(0)}L${x(0)},${y(0)}Z`} className="fill-foreground/[0.04]" />
        <path d={path(now)} fill="none" className="stroke-foreground" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
        {hover !== null && (
          <g>
            <line x1={x(hover)} x2={x(hover)} y1={T} y2={H - B} className="stroke-muted-foreground/50" strokeWidth={1} />
            {previous && <circle cx={x(hover)} cy={y(before[hover])} r={4} className="fill-muted-foreground stroke-card" strokeWidth={2} />}
            <circle cx={x(hover)} cy={y(now[hover])} r={4} className="fill-foreground stroke-card" strokeWidth={2} />
          </g>
        )}
      </svg>
      {hover !== null && (
        <div className="pointer-events-none absolute top-2 rounded-md border bg-popover px-3 py-2 text-[13px] shadow-md" style={{ left: `clamp(0px, calc(${(x(hover) / W) * 100}% - 90px), calc(100% - 180px))`, width: 180 }}>
          <div className="font-medium">{current[hover].day}</div>
          <div className="mt-1 flex items-center justify-between gap-3"><span className="flex items-center gap-1.5 text-muted-foreground"><span className="h-0.5 w-3 bg-foreground" />Atual</span><span className="tnum">{fmt(metric.kind, now[hover])}</span></div>
          {previous && <div className="flex items-center justify-between gap-3"><span className="flex items-center gap-1.5 text-muted-foreground"><span className="h-0 w-3 border-t-2 border-dashed border-muted-foreground/60" />Anterior</span><span className="tnum">{fmt(metric.kind, before[hover])}</span></div>}
        </div>
      )}
    </div>
  )
}

const PERF_SITES = [
  { domain: 'blogexemplo.com', share: 0.58, seed: 1 },
  { domain: 'receitas.blogexemplo.com', share: 0.31, seed: 2 },
  { domain: 'viagens.blogexemplo.com', share: 0.11, seed: 3 },
]

function PerformanceScreen() {
  const [period, setPeriod] = useState<PeriodKey>('last_30_days')
  const [compare, setCompare] = useState(true)
  const [metricKey, setMetricKey] = useState<PerfMetric>('revenue')
  const days = PERIODS.find(([k]) => k === period)![2]
  const current = useMemo(() => series(days, 1, 1), [days])
  const previous = useMemo(() => series(days, 4, 0.92), [days])
  const now = totals(current)
  const before = compare ? totals(previous) : null
  const metric = PERF_METRICS.find((m) => m.key === metricKey)!
  return (
    <>
      <PageHeader title="Desempenho" sub="Receita e entrega do Google Ad Manager. A receita já vem sem a parte da Groone."
        actions={
          <>
            <Select value={period} onValueChange={(v) => setPeriod(v as PeriodKey)}>
              <SelectTrigger className="h-9 w-[180px]" aria-label="Período"><SelectValue /></SelectTrigger>
              <SelectContent>{PERIODS.map(([k, l]) => <SelectItem key={k} value={k}>{l}</SelectItem>)}</SelectContent>
            </Select>
            <Button variant="outline" aria-pressed={compare} onClick={() => setCompare(!compare)} className="h-9">
              {compare && <Check className="h-4 w-4" />}Comparar com o anterior
            </Button>
          </>
        } />
      <Body>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-3 lg:grid-cols-5">
          {PERF_METRICS.map((m) => (
            <button key={m.key} onClick={() => setMetricKey(m.key)} aria-pressed={m.key === metricKey}
              className={cn('relative bg-card p-4 text-left transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring', m.key === metricKey && 'after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-primary')}>
              <div className="text-[13px] font-medium text-muted-foreground">{m.label}</div>
              <div className="mt-1 text-[24px] font-semibold tracking-tight">{fmt(m.kind, now[m.key])}</div>
              <div className="mt-1"><Delta now={now[m.key]} before={before ? before[m.key] : null} /></div>
            </button>
          ))}
        </div>
        <Card pad footerNote="Atualizado hoje às 14:35. O dia de hoje é parcial e muda a cada hora.">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-[16px] font-semibold tracking-tight">{metric.label} por dia</h2>
            <div className="flex items-center gap-4 text-[13px] text-muted-foreground">
              <span className="flex items-center gap-1.5"><span className="h-0.5 w-4 bg-foreground" />Período atual</span>
              {compare && <span className="flex items-center gap-1.5"><span className="w-4 border-t-2 border-dashed border-muted-foreground/60" />Período anterior</span>}
            </div>
          </div>
          <div className="mt-4"><LineChart current={current} previous={compare ? previous : null} metric={metric} /></div>
        </Card>
        <Table min={760}>
          <thead><tr><th className={th}>Site</th>{PERF_METRICS.map((m) => <th key={m.key} className={cn(th, 'text-right')}>{m.label}</th>)}<th className={cn(th, 'text-right')}>Receita vs anterior</th></tr></thead>
          <tbody>
            {PERF_SITES.map((s) => {
              const st = totals(series(days, s.seed, s.share))
              const sb = totals(series(days, s.seed + 4, s.share * 0.92))
              return (
                <tr key={s.domain} className="hover:bg-muted">
                  <td className={cn(td, 'font-medium whitespace-nowrap')}>{s.domain}</td>
                  {PERF_METRICS.map((m) => <td key={m.key} className={cn(td, 'text-right tnum whitespace-nowrap')}>{fmt(m.kind, st[m.key])}</td>)}
                  <td className={cn(td, 'text-right whitespace-nowrap')}>{compare ? <Delta now={st.revenue} before={sb.revenue} /> : '–'}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Body>
    </>
  )
}

/* ---------- Page Views ---------- */

const PV_HOURS = Array.from({ length: 24 }, (_, h) => Math.round(120000 + 70000 * Math.cos(((h - 6) / 24) * 2 * Math.PI)))
const PV_COUNTRIES = [['Brasil', 2032211], ['Portugal', 365906], ['Estados Unidos', 244283], ['Angola', 101881], ['Sem país', 40730]] as const

function Bars({ items }: { items: readonly (readonly [string, number])[] }) {
  const max = Math.max(...items.map(([, v]) => v)) || 1
  return (
    <ul className="grid gap-2">
      {items.map(([label, v]) => (
        <li key={label} className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)_auto] items-center gap-3 text-[13px]">
          <span className="truncate">{label}</span>
          <span className="h-2 rounded-full bg-muted"><span className="block h-2 rounded-full bg-foreground" style={{ width: `${(v / max) * 100}%` }} /></span>
          <span className="tnum text-right">{int.format(v)}</span>
        </li>
      ))}
    </ul>
  )
}

function PageViewsScreen() {
  const [period, setPeriod] = useState<PeriodKey>('last_30_days')
  const [compare, setCompare] = useState(true)
  const days = PERIODS.find(([k]) => k === period)![2]
  const current = useMemo(() => series(days, 2, 0.52), [days])
  const previous = useMemo(() => series(days, 5, 0.5), [days])
  const metric = { key: 'impressions' as const, label: 'Page views', kind: 'int' as const }
  const now = totals(current).impressions
  const before = compare ? totals(previous).impressions : null
  const peak = PV_HOURS.indexOf(Math.max(...PV_HOURS))
  return (
    <>
      <PageHeader title="Page Views" sub="Visitas dos seus sites contadas pela tag da Groone, de hora em hora."
        actions={
          <>
            <Select value={period} onValueChange={(v) => setPeriod(v as PeriodKey)}>
              <SelectTrigger className="h-9 w-[180px]" aria-label="Período"><SelectValue /></SelectTrigger>
              <SelectContent>{PERIODS.map(([k, l]) => <SelectItem key={k} value={k}>{l}</SelectItem>)}</SelectContent>
            </Select>
            <Button variant="outline" aria-pressed={compare} onClick={() => setCompare(!compare)} className="h-9">
              {compare && <Check className="h-4 w-4" />}Comparar com o anterior
            </Button>
          </>
        } />
      <Body>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-3">
          <div className="bg-card p-4"><div className="text-[13px] font-medium text-muted-foreground">Page views</div><div className="mt-1 text-[24px] font-semibold tracking-tight">{int.format(now)}</div><div className="mt-1"><Delta now={now} before={before} /></div></div>
          <div className="bg-card p-4"><div className="text-[13px] font-medium text-muted-foreground">Sites com visitas</div><div className="mt-1 text-[24px] font-semibold tracking-tight">{PERF_SITES.length}</div></div>
          <div className="bg-card p-4"><div className="text-[13px] font-medium text-muted-foreground">Hora de pico</div><div className="mt-1 text-[24px] font-semibold tracking-tight">{String(peak).padStart(2, '0')}h</div></div>
        </div>
        <Card pad footerNote="Datas e horas no horário de Brasília. A hora atual é parcial e muda a cada sincronização.">
          <h2 className="text-[16px] font-semibold tracking-tight">Page views por dia</h2>
          <div className="mt-4"><LineChart current={current} previous={compare ? previous : null} metric={metric} /></div>
        </Card>
        <div className="grid gap-6 lg:grid-cols-2">
          <section className="grid content-start gap-3">
            <h2 className="text-[16px] font-semibold tracking-tight">Por hora do dia</h2>
            <Card pad><Bars items={PV_HOURS.map((v, h) => [`${String(h).padStart(2, '0')}h`, v] as const)} /></Card>
          </section>
          <section className="grid content-start gap-3">
            <h2 className="text-[16px] font-semibold tracking-tight">Por país</h2>
            <Card pad><Bars items={PV_COUNTRIES} /></Card>
          </section>
        </div>
        <Table min={520}>
          <thead><tr><th className={th}>Site</th><th className={cn(th, 'text-right')}>Page views</th>{compare && <th className={cn(th, 'text-right')}>Variação</th>}</tr></thead>
          <tbody>
            {PERF_SITES.map((s) => {
              const st = totals(series(days, s.seed, s.share * 0.52)).impressions
              const sb = totals(series(days, s.seed + 4, s.share * 0.5)).impressions
              return (
                <tr key={s.domain} className="hover:bg-muted">
                  <td className={cn(td, 'font-medium whitespace-nowrap')}>{s.domain}</td>
                  <td className={cn(td, 'text-right tnum whitespace-nowrap')}>{int.format(st)}</td>
                  {compare && <td className={cn(td, 'text-right whitespace-nowrap')}><Delta now={st} before={sb} /></td>}
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Body>
    </>
  )
}

/* ---------- Equipe ---------- */

function TeamScreen({ t, members, setMembers }: { t: T; members: Member[]; setMembers: (m: Member[]) => void }) {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('Gestor de tráfego')
  const [filter, setFilter] = useState('')
  const [view, setView] = useState<'members' | 'pending' | 'roles'>('members')
  const used = members.length
  const full = used >= LIMIT
  const seats: SeatState[] = Array.from({ length: LIMIT }, (_, i) => (members[i] ? members[i].state : 'free'))
  const emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())
  const dupe = members.some((m) => m.email === email.trim())
  const active = members.filter((m) => m.state !== 'pending')
  const pendingList = members.filter((m) => m.state === 'pending')
  const shown = active.filter((m) => `${m.name} ${m.email} ${m.role}`.toLowerCase().includes(filter.toLowerCase()))

  const send = () => {
    if (!emailOk || dupe || full) return
    setMembers([...members, { name: email.split('@')[0], email: email.trim(), role, since: '22/10/2026', state: 'pending', expires: 'Expira em 24 h' }])
    toast.success(`Convite enviado para ${email.trim()}`, { description: 'Vale por 1 dia.' })
    setEmail('')
  }

  return (
    <>
      <PageHeader title={t('team.title')} sub={t('team.sub')} />
      <Body>
        <Card
          title={t('team.invite')}
          desc="A pessoa recebe um e-mail com o link do convite. O convite vale por 1 dia e ocupa uma vaga até ser aceito ou cancelado."
          footerNote={full ? <span className="text-bad">Todas as vagas estão ocupadas. Cancele um convite ou peça mais vagas à Groone.</span> : <span className="tnum">Depois deste convite: {used + 1} de {LIMIT} vagas.</span>}
          footer={<Button form="invite-form" type="submit" disabled={!emailOk || dupe || full}>{t('team.send')}</Button>}
        >
          <form id="invite-form" className="grid gap-4 md:grid-cols-[minmax(0,1fr)_240px]" onSubmit={(e) => { e.preventDefault(); send() }}>
            <Field id="inv-email" label="E-mail" error={dupe && 'Essa pessoa já está na equipe ou tem um convite pendente.'}>
              <Input id="inv-email" className="h-10" type="email" placeholder="nome@empresa.com" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={dupe} />
            </Field>
            <Field id="inv-role" label={t('team.role')}>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger id="inv-role" className="h-10"><SelectValue /></SelectTrigger>
                <SelectContent>{ROLES.map((r) => <SelectItem key={r.name} value={r.name}>{r.name}</SelectItem>)}</SelectContent>
              </Select>
            </Field>
          </form>
        </Card>

        <Card pad>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-[14px] font-medium">Vagas de funcionários</h2>
            <span className="tnum text-[14px]"><span className="font-semibold">{used}</span> <span className="text-muted-foreground">/ {LIMIT}</span></span>
          </div>
          <div className="mt-3"><SeatBar seats={seats} /></div>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-muted-foreground">
            <li className="flex items-center gap-2"><SeatDot state="member" />{active.length} ativas, contando o dono</li>
            <li className="flex items-center gap-2"><SeatDot state="pending" />{pendingList.length} {pendingList.length === 1 ? 'convite pendente' : 'convites pendentes'}</li>
            <li className="flex items-center gap-2"><SeatDot state="free" />{LIMIT - used} livres</li>
            <li className="sm:ml-auto">{t('team.seatsNote')}</li>
          </ul>
        </Card>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex rounded-md border bg-card p-0.5" role="tablist" aria-label="Equipe">
            {([['members', t('team.members'), active.length], ['pending', t('team.pending'), pendingList.length], ['roles', t('team.roles'), ROLES.length]] as const).map(([k, l, n]) => (
              <button key={k} role="tab" aria-selected={view === k} onClick={() => setView(k)} className={cn('h-8 rounded-[4px] px-3 text-[13px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', view === k ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground')}>
                {l} <span className="tnum text-muted-foreground">{n}</span>
              </button>
            ))}
          </div>
          {view === 'members' && (
            <div className="relative ml-auto w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input aria-label="Filtrar membros" className="h-9 bg-card pl-9" placeholder="Filtrar…" value={filter} onChange={(e) => setFilter(e.target.value)} />
            </div>
          )}
        </div>

        {view === 'members' && (
          shown.length === 0 ? (
            <Card pad desc={<>Ninguém na equipe combina com “{filter}”. <button className="text-link hover:underline" onClick={() => setFilter('')}>Limpar filtro</button></>} />
          ) : (
            <Table>
              <thead><tr><th className={th}>{t('team.person')}</th><th className={th}>{t('team.role')}</th><th className={th}>{t('team.since')}</th><th className={cn(th, 'w-12')}><span className="sr-only">Ações</span></th></tr></thead>
              <tbody>
                {shown.map((m) => (
                  <tr key={m.email} className="hover:bg-muted">
                    <td className={td}><div className="flex items-center gap-3"><Avatar name={m.name} /><div className="min-w-0"><div className="font-medium">{m.name}</div><div className="truncate text-[13px] text-muted-foreground">{m.email}</div></div></div></td>
                    <td className={td}>{m.state === 'owner' ? <Badge>Dono</Badge> : m.role}</td>
                    <td className={cn(td, 'tnum text-muted-foreground')}>{m.since}</td>
                    <td className={td}>
                      {m.state === 'owner' ? (
                        <span className="flex h-8 w-8 items-center justify-center text-muted-foreground" title="O dono só muda pelo painel interno da Groone"><Lock className="h-4 w-4" /><span className="sr-only">O dono só muda pelo painel interno da Groone</span></span>
                      ) : (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="h-8 w-8" aria-label={`Ações para ${m.name}`}><MoreHorizontal /></Button></DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-52">
                            <DropdownMenuItem>Alterar papel</DropdownMenuItem>
                            <DropdownMenuItem>Dar permissão temporária</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-bad focus:text-bad" onSelect={() => { setMembers(members.filter((x) => x.email !== m.email)); toast(`${m.name} saiu da equipe`, { description: 'Uma vaga foi liberada.' }) }}>Remover da equipe</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )
        )}

        {view === 'pending' && (
          pendingList.length === 0 ? (
            <Card pad><div className="flex items-center gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-muted-foreground"><Mail className="h-4 w-4" /></span><div><div className="font-medium">Nenhum convite esperando resposta</div><p className="text-[14px] text-muted-foreground">Os convites que você enviar aparecem aqui até serem aceitos.</p></div></div></Card>
          ) : (
            <Table>
              <thead><tr><th className={th}>E-mail</th><th className={th}>{t('team.role')}</th><th className={th}>Validade</th><th className={cn(th, 'text-right')}><span className="sr-only">Ações</span></th></tr></thead>
              <tbody>
                {pendingList.map((m) => (
                  <tr key={m.email}>
                    <td className={td}><div className="flex items-center gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-dashed text-muted-foreground"><Mail className="h-3.5 w-3.5" /></span><span className="font-medium">{m.email}</span></div></td>
                    <td className={td}>{m.role}</td>
                    <td className={td}><Status tone="ochre">{m.expires}</Status></td>
                    <td className={cn(td, 'whitespace-nowrap text-right')}>
                      <Button variant="ghost" size="sm" onClick={() => toast.success(`Convite reenviado para ${m.email}`, { description: 'Vale por mais 1 dia.' })}><RefreshCw />Reenviar</Button>
                      <Button variant="ghost" size="sm" className="text-bad hover:text-bad" onClick={() => setMembers(members.filter((x) => x.email !== m.email))}>Cancelar</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )
        )}

        {view === 'roles' && (
          <>
            <Table>
              <thead><tr><th className={th}>{t('team.role')}</th><th className={th}>Tipo</th><th className={th}>O que pode fazer</th><th className={cn(th, 'text-right')}>Pessoas</th></tr></thead>
              <tbody>
                {ROLES.map((r) => (
                  <tr key={r.name}>
                    <td className={cn(td, 'font-medium')}>{r.name}</td>
                    <td className={td}>{r.kind === 'Predefinido' ? <Badge>Predefinido</Badge> : <Badge tone="ochre">Personalizado</Badge>}</td>
                    <td className={cn(td, 'text-muted-foreground')}>{r.desc}</td>
                    <td className={cn(td, 'text-right tnum')}>{members.filter((m) => m.role === r.name).length}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[13px] text-muted-foreground">A tabela de permissões de cada papel ainda vai ser definida.</p>
              <Button variant="outline" size="sm" className="bg-card"><Plus />Criar papel</Button>
            </div>
          </>
        )}
      </Body>
    </>
  )
}

/* ---------- Networks ---------- */

function netStatus(s: NetStatus) {
  return s === 'ok' ? <Status tone="ok">Conectada</Status> : s === 'testing' ? <Status tone="warn">Testando conexão</Status> : <Status tone="bad">Sem acesso</Status>
}

function NetworksScreen({ t, go }: { t: T; go: (s: Screen) => void }) {
  const [busy, setBusy] = useState(false)
  return (
    <>
      <PageHeader
        title={t('net.title')}
        sub={t('net.sub')}
        actions={<>
          <Button variant="outline" disabled={busy} onClick={() => { setBusy(true); setTimeout(() => { setBusy(false); toast.success('Sites reimportados', { description: '3 sites e 22 ad units, sem mudanças.' }) }, 1200) }}>{busy ? <Loader2 className="animate-spin" /> : <RefreshCw />}{t('net.reimport')}</Button>
          <Button onClick={() => go('conectar')}>{t('net.connect')}</Button>
        </>}
      />
      <Body>
        <div className="flex items-start gap-3 rounded-lg border border-bad/25 bg-card p-4">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-bad" />
          <div className="min-w-0 flex-1 text-[14px]"><span className="font-medium">Portal Antigo está sem acesso.</span> <span className="text-muted-foreground">A conta de serviço da Groone deixou de ser administradora dessa network no Ad Manager. Adicione-a de novo e teste a conexão.</span></div>
          <Button size="sm" variant="outline" onClick={() => go('conectar')}>Reconectar</Button>
        </div>
        <Table min={760}>
          <thead><tr><th className={th}>Network</th><th className={th}>Network code</th><th className={th}>Conexão</th><th className={th}>Status</th><th className={cn(th, 'text-right')}>Sites</th><th className={cn(th, 'text-right')}>Ad units</th><th className={th}>Última checagem</th></tr></thead>
          <tbody>
            {NETWORKS.map((n) => (
              <tr key={n.code} className="hover:bg-muted">
                <td className={cn(td, 'font-medium')}>{n.name}</td>
                <td className={td}><Code>{n.code}</Code></td>
                <td className={cn(td, 'text-muted-foreground')}>{n.via}</td>
                <td className={td}>{netStatus(n.status)}</td>
                <td className={cn(td, 'text-right tnum')}>{n.sites ?? '–'}</td>
                <td className={cn(td, 'text-right tnum')}>{n.units ?? '–'}</td>
                <td className={cn(td, 'text-muted-foreground')}>{n.checked}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <h2 className="mt-4 text-[20px] font-semibold tracking-tight">{t('net.sites')}</h2>
        <Table>
          <thead><tr><th className={th}>Site</th><th className={th}>Network</th><th className={th}>Aprovação no Ad Manager</th><th className={cn(th, 'text-right')}>Ad units</th></tr></thead>
          <tbody>
            {SITES.map((s) => (
              <tr key={s.domain} className="hover:bg-muted">
                <td className={td}><span className="inline-flex items-center gap-1.5 font-medium">{s.domain}<ExternalLink className="h-3.5 w-3.5 text-muted-foreground" /></span></td>
                <td className={cn(td, 'text-muted-foreground')}>{s.network}</td>
                <td className={td}>{s.approval === 'ok' ? <Status tone="ok">Aprovado</Status> : <Status tone="warn">Em análise pelo Google</Status>}</td>
                <td className={cn(td, 'text-right tnum')}>{s.units}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Body>
    </>
  )
}

/* ---------- Conectar network ---------- */

type Check = { label: string; state: 'wait' | 'run' | 'ok' | 'fail'; detail?: string }

function ConnectScreen({ t, go }: { t: T; go: (s: Screen) => void }) {
  const [code, setCode] = useState('22334455667')
  const [checks, setChecks] = useState<Check[] | null>(null)
  const [copied, setCopied] = useState(false)
  const valid = /^\d{6,12}$/.test(code)
  const running = checks?.some((c) => c.state === 'run' || c.state === 'wait') ?? false
  const failed = checks?.some((c) => c.state === 'fail') ?? false
  const done = !!checks && !running && !failed

  const copy = async () => {
    try { await navigator.clipboard.writeText(SERVICE_ACCOUNT); setCopied(true); setTimeout(() => setCopied(false), 1600) } catch {
      const el = document.getElementById('sa-email'); if (el) { const r = document.createRange(); r.selectNodeContents(el); const s = window.getSelection(); s?.removeAllRanges(); s?.addRange(r) }
      toast('E-mail selecionado. Copie com Ctrl+C.')
    }
  }

  const test = () => {
    const willFail = code === '20111222333'
    const base: Check[] = [
      { label: `Network ${code} encontrada no Ad Manager`, state: 'run' },
      { label: 'Conta de serviço da Groone é administradora', state: 'wait' },
      { label: 'Sites e ad units importados', state: 'wait' },
    ]
    setChecks(base)
    const step = (i: number) => {
      setTimeout(() => {
        setChecks((prev) => {
          if (!prev) return prev
          const next = [...prev]
          if (willFail && i === 1) {
            next[1] = { ...next[1], state: 'fail', detail: 'A conta de serviço não aparece como administradora. Confira o passo 2 e teste de novo.' }
            next[2] = { ...next[2], state: 'wait' }
            return next
          }
          next[i] = { ...next[i], state: 'ok', detail: i === 2 ? '2 sites e 14 ad units.' : undefined }
          if (next[i + 1]) next[i + 1] = { ...next[i + 1], state: 'run' }
          return next
        })
        if (!(willFail && i === 1) && i < 2) step(i + 1)
      }, 900)
    }
    step(0)
  }

  const Step = ({ n, title, children }: { n: number; title: string; children: React.ReactNode }) => (
    <li className="relative grid grid-cols-[28px_minmax(0,1fr)] gap-4 pb-10 last:pb-0">
      <span className="absolute bottom-0 left-[13.5px] top-8 w-px bg-border group-last:hidden" aria-hidden="true" />
      <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border bg-card text-[13px] font-medium tnum">{n}</span>
      <div className="grid min-w-0 gap-3 pt-0.5"><h3 className="text-[16px] font-semibold tracking-tight">{title}</h3>{children}</div>
    </li>
  )

  return (
    <>
      <PageHeader
        back={<button onClick={() => go('networks')} className="mb-3 flex items-center gap-1.5 text-[14px] text-muted-foreground hover:text-foreground focus-visible:underline focus-visible:outline-none"><ArrowLeft className="h-4 w-4" />{t('net.title')}</button>}
        title={t('wiz.title')}
        sub={t('wiz.sub')}
      />
      <Body className="lg:grid-cols-[minmax(0,1fr)_360px]">
        <Card pad>
          <ol className="[&>li:last-child>span:first-child]:hidden">
            <Step n={1} title="Copie o e-mail da conta de serviço da Groone">
              <p className="text-[14px] text-muted-foreground">Uma conta só da Groone, usada para ler a sua network. Ela não tem acesso à sua conta do Google.</p>
              <div className="flex min-w-0 items-center gap-2 rounded-md border bg-muted py-1 pl-3 pr-1">
                <span id="sa-email" className="min-w-0 flex-1 truncate font-mono text-[13px]">{SERVICE_ACCOUNT}</span>
                <Button size="sm" variant="ghost" className="h-8" onClick={copy} aria-label="Copiar e-mail da conta de serviço">{copied ? <Check /> : <Copy />}{copied ? 'Copiado' : 'Copiar'}</Button>
              </div>
            </Step>
            <Step n={2} title="Adicione como administrador no Google Ad Manager">
              <p className="text-[14px] text-muted-foreground">No Ad Manager, abra <span className="text-foreground">Administrador › Acesso e autorização › Usuários › Novo usuário</span>. Cole o e-mail e escolha o papel <span className="text-foreground">Administrador</span>.</p>
            </Step>
            <Step n={3} title="Informe o network code e teste">
              <p className="text-[14px] text-muted-foreground">O network code fica no topo do Ad Manager, ao lado do nome da network.</p>
              <form className="flex flex-wrap items-start gap-3" onSubmit={(e) => { e.preventDefault(); if (valid && !running) test() }}>
                <div className="grid min-w-[200px] flex-1 gap-2">
                  <Input id="net-code" aria-label="Network code" inputMode="numeric" className="h-10 font-mono tnum" value={code} onChange={(e) => { setCode(e.target.value.replace(/\D/g, '')); setChecks(null) }} aria-invalid={code.length > 0 && !valid} />
                  {code.length > 0 && !valid && <p className="text-[13px] text-bad">O network code tem só números, de 6 a 12 dígitos.</p>}
                </div>
                <Button type="submit" className="h-10" disabled={!valid || running}>{running && <Loader2 className="animate-spin" />}{t('wiz.test')}</Button>
              </form>
              <p className="text-[13px] text-muted-foreground">Para ver o erro no protótipo, teste com <button type="button" className="font-mono text-link hover:underline" onClick={() => { setCode('20111222333'); setChecks(null) }}>20111222333</button>.</p>
            </Step>
          </ol>
        </Card>
        <Card pad className="h-fit">
          <h2 className="text-[14px] font-medium">Resultado do teste</h2>
          {!checks ? (
            <p className="mt-2 text-[14px] text-muted-foreground">Depois de adicionar a conta de serviço, clique em {t('wiz.test')}. Sites e ad units chegam sozinhos quando tudo der certo.</p>
          ) : (
            <ul className="mt-4 grid gap-3">
              {checks.map((c) => (
                <li key={c.label} className="flex gap-3 text-[14px]">
                  <span className={cn('mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full', c.state === 'ok' && 'bg-ok text-white', c.state === 'fail' && 'bg-bad text-white', c.state === 'run' && 'text-muted-foreground', c.state === 'wait' && 'border text-muted-foreground')}>
                    {c.state === 'ok' ? <Check className="h-3 w-3" /> : c.state === 'fail' ? <X className="h-3 w-3" /> : c.state === 'run' ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  </span>
                  <div className="min-w-0"><div className={cn(c.state === 'wait' && 'text-muted-foreground')}>{c.label}</div>{c.detail && <p className={cn('mt-0.5 break-words text-[13px]', c.state === 'fail' ? 'text-bad' : 'text-muted-foreground')}>{c.detail}</p>}</div>
                </li>
              ))}
            </ul>
          )}
          {done && <Button className="mt-5 w-full" onClick={() => go('networks')}>Ver networks</Button>}
        </Card>
      </Body>
    </>
  )
}

/* ---------- Configurações ---------- */

function SettingsScreen({ t, accent, setAccent, theme, setTheme }: { t: T; accent: string; setAccent: (g: string) => void; theme: string; setTheme: (t: string) => void }) {
  const [section, setSection] = useState('geral')
  const [name, setName] = useState('Blog Exemplo')
  const nameErr = name.trim().length === 0 ? 'Informe o nome da Empresa.' : name.length > 48 ? `Use até 48 caracteres (agora são ${name.length}).` : ''
  const saved = (what: string) => toast.success(`${what} salvo`)
  return (
    <>
      <PageHeader title={t('set.title')} sub={t('set.sub')} />
      <Body className="md:grid-cols-[200px_minmax(0,1fr)]">
        <nav className="flex gap-1 overflow-x-auto md:sticky md:top-8 md:h-fit md:flex-col" aria-label="Seções">
          {[['geral', 'Geral'], ['aparencia', 'Aparência'], ['idioma', 'Idioma']].map(([k, l]) => (
            <a key={k} href={`#cfg-${k}`} onClick={(e) => { e.preventDefault(); setSection(k); document.getElementById(`cfg-${k}`)?.scrollIntoView({ block: 'start' }) }}
              className={cn('whitespace-nowrap rounded-md px-3 py-2 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', section === k ? 'bg-card font-medium text-foreground' : 'text-muted-foreground hover:text-foreground')}>{l}</a>
          ))}
        </nav>
        <div className="grid content-start gap-6">
          <div id="cfg-geral" className="scroll-mt-8"><Card title="Nome da Empresa" desc="Aparece no seletor de Empresas, nos convites e nos e-mails." footerNote="Use até 48 caracteres." footer={<Button size="sm" disabled={!!nameErr} onClick={() => saved('Nome')}>Salvar</Button>}>
            <div className="max-w-md"><Field id="set-name" label="Nome" error={nameErr}><Input id="set-name" className="h-10" value={name} onChange={(e) => setName(e.target.value)} aria-invalid={!!nameErr} /></Field></div>
          </Card></div>
          <Card title="E-mail de contato" desc="Para onde a Groone manda avisos da conta e da network." footerNote="Só a Groone usa esse e-mail." footer={<Button size="sm" onClick={() => saved('E-mail')}>Salvar</Button>}>
            <div className="max-w-md"><Input id="set-mail" aria-label="E-mail de contato" className="h-10" defaultValue="financeiro@blogexemplo.com" /></div>
          </Card>
          <div id="cfg-aparencia" className="scroll-mt-8"><Card title="Cor do sistema" desc="Usada nos botões principais e nas vagas da equipe. Vale para todos da Empresa." footerNote="A mudança aparece na hora para quem estiver no painel.">
            <RadioGroup value={accent} onValueChange={setAccent} className="flex flex-wrap gap-2" aria-label="Cor do sistema">
              {ACCENTS.map((a) => (
                <Label key={a.id} htmlFor={`accent-${a.id}`} className={cn('flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-[14px] font-normal hover:bg-accent has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring', accent === a.id && 'border-foreground')}>
                  <RadioGroupItem id={`accent-${a.id}`} value={a.id} className="sr-only" />
                  <span className="h-4 w-4 rounded-full ring-1 ring-inset ring-foreground/10" style={{ background: `hsl(${a.light})` }} />{a.label}
                  {accent === a.id && <Check className="h-3.5 w-3.5" />}
                </Label>
              ))}
            </RadioGroup>
          </Card></div>
          <Card title="Tema" desc="Só para você, neste navegador.">
            <RadioGroup value={theme} onValueChange={setTheme} className="grid gap-3 sm:grid-cols-3" aria-label="Tema">
              {[['light', 'Claro'], ['dark', 'Escuro'], ['system', 'Sistema']].map(([v, l]) => (
                <Label key={v} htmlFor={`theme-${v}`} className={cn('grid cursor-pointer gap-3 rounded-lg border p-3 font-normal hover:bg-accent has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring', theme === v && 'border-foreground')}>
                  <span className={cn('h-16 overflow-hidden rounded-md border', v === 'dark' ? 'bg-neutral-950' : v === 'light' ? 'bg-white' : 'bg-gradient-to-r from-white from-50% to-neutral-950 to-50%')} aria-hidden="true">
                    <span className={cn('mx-2 mt-2 block h-2 w-10 rounded-full', v === 'dark' ? 'bg-neutral-700' : 'bg-neutral-200')} />
                    <span className={cn('mx-2 mt-1.5 block h-2 w-16 rounded-full', v === 'dark' ? 'bg-neutral-800' : 'bg-neutral-100')} />
                  </span>
                  <span className="flex items-center gap-2 text-[14px]"><RadioGroupItem id={`theme-${v}`} value={v} />{l}</span>
                </Label>
              ))}
            </RadioGroup>
          </Card>
          <div id="cfg-idioma" className="scroll-mt-8"><Card title={t('company.lang')} desc="Idioma dos convites e de quem ainda não escolheu o seu. Cada pessoa pode trocar no menu da conta." footer={<Button size="sm" onClick={() => saved('Idioma')}>Salvar</Button>}>
            <div className="max-w-xs">
              <Select defaultValue="pt"><SelectTrigger id="set-lang" aria-label={t('company.lang')} className="h-10"><SelectValue /></SelectTrigger>
                <SelectContent><SelectItem value="pt">Português</SelectItem><SelectItem value="en">English</SelectItem><SelectItem value="es">Español</SelectItem></SelectContent>
              </Select>
            </div>
          </Card></div>
        </div>
      </Body>
    </>
  )
}

/* ---------- Painel interno ---------- */

type ClientSituation = 'active' | 'pending' | 'inactive' | 'banned'
type ProtoClient = { name: string; contact: string; email: string; situation: ClientSituation; used: number; limit: number; referredBy: string | null }
const PROTO_CLIENTS: ProtoClient[] = [
  { name: 'Blog Exemplo', contact: 'Pedro Henrique', email: 'pedro@blogexemplo.com', situation: 'active', used: 5, limit: 10, referredBy: null },
  { name: 'Receitas da Vó', contact: 'Ana Ribeiro', email: 'ana@receitasdavo.com.br', situation: 'active', used: 2, limit: 5, referredBy: 'Blog Exemplo' },
  { name: 'Tech Notícias', contact: 'Caio Prado', email: 'contato@technoticias.com', situation: 'pending', used: 0, limit: 3, referredBy: null },
  { name: 'Guia do Pet', contact: 'Marina Luz', email: 'marina@guiadopet.com.br', situation: 'inactive', used: 6, limit: 6, referredBy: null },
  { name: 'Apostas Já', contact: 'Leo Melo', email: 'leo@apostasja.com', situation: 'banned', used: 1, limit: 3, referredBy: null },
]
const SITUATION: Record<ClientSituation, [string, 'ok' | 'ochre' | 'neutral' | 'bad']> = {
  active: ['Ativo', 'ok'],
  pending: ['Pendente', 'ochre'],
  inactive: ['Inativo', 'neutral'],
  banned: ['Banido', 'bad'],
}

function NewClientForm({ clients, onDone }: { clients: ProtoClient[]; onDone: (c: ProtoClient | null) => void }) {
  const [form, setForm] = useState({ name: '', limit: '5', first: '', last: '', email: '', ddi: '+55', phone: '', lang: 'pt', referrer: 'none', pct: '2', notes: '' })
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value })
  const emailTaken = clients.some((c) => c.email === form.email.trim().toLowerCase())
  const ok = form.name.trim() && form.first.trim() && form.last.trim() && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim()) && !emailTaken && Number(form.limit) >= 1
  return (
    <Card title="Novo cliente" desc="O cliente fica pendente. Nenhum e-mail sai agora: envie o convite de dono pela página do cliente quando quiser."
      footerNote="Os dados fiscais o próprio cliente preenche, em Configurações."
      footer={<><Button variant="outline" onClick={() => onDone(null)}>Cancelar</Button><Button form="new-client" type="submit" disabled={!ok}>Cadastrar cliente</Button></>}>
      <form id="new-client" className="grid gap-6" onSubmit={(e) => { e.preventDefault(); if (ok) onDone({ name: form.name.trim(), contact: `${form.first} ${form.last}`, email: form.email.trim().toLowerCase(), situation: 'pending', used: 0, limit: Number(form.limit), referredBy: form.referrer === 'none' ? null : form.referrer }) }}>
        <fieldset className="grid gap-4 md:grid-cols-[1fr_110px]">
          <legend className="mb-3 text-[13px] font-medium text-muted-foreground">Empresa</legend>
          <Field id="nc-name" label="Nome do cliente"><Input id="nc-name" className="h-10" autoFocus value={form.name} onChange={set('name')} placeholder="Portal da Cidade" /></Field>
          <Field id="nc-limit" label="Vagas"><Input id="nc-limit" className="h-10 tnum" type="number" min={1} value={form.limit} onChange={set('limit')} /></Field>
        </fieldset>
        <fieldset className="grid gap-4 md:grid-cols-2">
          <legend className="mb-3 text-[13px] font-medium text-muted-foreground">Contato</legend>
          <Field id="nc-first" label="Nome"><Input id="nc-first" className="h-10" value={form.first} onChange={set('first')} autoComplete="off" /></Field>
          <Field id="nc-last" label="Sobrenome"><Input id="nc-last" className="h-10" value={form.last} onChange={set('last')} autoComplete="off" /></Field>
          <Field id="nc-email" label="E-mail" hint="Recebe o convite de dono." error={emailTaken && 'Outro cliente já usa este e-mail.'}><Input id="nc-email" className="h-10" type="email" value={form.email} onChange={set('email')} aria-invalid={emailTaken} placeholder="dono@site.com" /></Field>
          <div className="grid grid-cols-[90px_1fr] gap-3">
            <Field id="nc-ddi" label="DDI"><Input id="nc-ddi" className="h-10 tnum" value={form.ddi} onChange={set('ddi')} /></Field>
            <Field id="nc-phone" label="Telefone (opcional)"><Input id="nc-phone" className="h-10 tnum" value={form.phone} onChange={set('phone')} inputMode="tel" /></Field>
          </div>
          <Field id="nc-lang" label="Idioma do convite">
            <Select value={form.lang} onValueChange={(v) => setForm({ ...form, lang: v })}><SelectTrigger id="nc-lang" className="h-10"><SelectValue /></SelectTrigger>
              <SelectContent><SelectItem value="pt">Português</SelectItem><SelectItem value="en">English</SelectItem><SelectItem value="es">Español</SelectItem></SelectContent>
            </Select>
          </Field>
        </fieldset>
        <fieldset className="grid gap-4 md:grid-cols-[1fr_160px]">
          <legend className="mb-3 text-[13px] font-medium text-muted-foreground">Indicação</legend>
          <Field id="nc-ref" label="Indicado por">
            <Select value={form.referrer} onValueChange={(v) => setForm({ ...form, referrer: v })}><SelectTrigger id="nc-ref" className="h-10"><SelectValue /></SelectTrigger>
              <SelectContent><SelectItem value="none">Ninguém</SelectItem>{clients.map((c) => <SelectItem key={c.name} value={c.name}>{c.name}</SelectItem>)}</SelectContent>
            </Select>
          </Field>
          <Field id="nc-pct" label="Comissão (%)" hint="2% se ninguém mudar."><Input id="nc-pct" className="h-10 tnum" disabled={form.referrer === 'none'} value={form.pct} onChange={set('pct')} inputMode="decimal" /></Field>
        </fieldset>
        <Field id="nc-notes" label="Observações (opcional)"><Textarea id="nc-notes" value={form.notes} onChange={set('notes')} rows={2} /></Field>
      </form>
    </Card>
  )
}

function InternalScreen({ t, go }: { t: T; go: (s: Screen) => void }) {
  const [clients, setClients] = useState(PROTO_CLIENTS)
  const [q, setQ] = useState('')
  const [tab, setTab] = useState<'all' | ClientSituation>('all')
  const [adding, setAdding] = useState(false)
  const count = (k: 'all' | ClientSituation) => (k === 'all' ? clients.length : clients.filter((c) => c.situation === k).length)
  const list = useMemo(() => clients.filter((c) => (tab === 'all' || c.situation === tab) && (q === '' || `${c.name} ${c.contact} ${c.email}`.toLowerCase().includes(q.toLowerCase()))), [clients, q, tab])
  return (
    <>
      <PageHeader title={t('int.title')} sub={t('int.sub')} actions={!adding && <Button onClick={() => setAdding(true)}>{t('int.new')}</Button>} />
      <Body>
        {adding && <NewClientForm clients={clients} onDone={(c) => { if (c) { setClients([c, ...clients]); toast.success(`${c.name} cadastrado`, { description: 'Envie o convite de dono pela página do cliente.' }) } setAdding(false) }} />}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap rounded-md border bg-card p-0.5" role="tablist" aria-label="Filtrar clientes">
            {([['all', 'Todos'], ['active', 'Ativos'], ['pending', 'Pendentes'], ['inactive', 'Inativos'], ['banned', 'Banidos']] as const).map(([k, l]) => (
              <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)} className={cn('h-8 rounded-[4px] px-3 text-[13px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', tab === k ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground')}>
                {l} <span className="tnum text-muted-foreground">{count(k)}</span>
              </button>
            ))}
          </div>
          <div className="relative ml-auto w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input aria-label="Buscar clientes" className="h-9 bg-card pl-9" placeholder="Nome do cliente" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
        </div>
        <Table min={760}>
          <thead><tr><th className={th}>Cliente</th><th className={th}>Contato</th><th className={th}>Funcionários</th><th className={th}>Situação</th><th className={cn(th, 'w-16')}><span className="sr-only">Abrir</span></th></tr></thead>
          <tbody>
            {list.map((c) => (
              <tr key={c.name} className="hover:bg-muted">
                <td className={td}><div className="flex items-center gap-3"><Avatar name={c.name} size={28} /><div className="min-w-0"><button className="font-medium hover:underline" onClick={() => go('cliente')}>{c.name}</button>{c.referredBy && <div className="text-[13px] text-muted-foreground">Indicado por {c.referredBy}</div>}</div></div></td>
                <td className={td}><div>{c.contact}</div><div className="text-[13px] text-muted-foreground">{c.email}</div></td>
                <td className={td}><span className="tnum text-[13px] text-muted-foreground">{c.used}/{c.limit}</span></td>
                <td className={td}><Status tone={SITUATION[c.situation][1]}>{SITUATION[c.situation][0]}</Status></td>
                <td className={td}><Button variant="ghost" size="sm" onClick={() => go('cliente')}>Abrir</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Body>
    </>
  )
}

function ClientScreen({ go }: { go: (s: Screen) => void }) {
  const [situation, setSituation] = useState<ClientSituation>('pending')
  const [sent, setSent] = useState<string | null>(null)
  const [confirm, setConfirm] = useState<ClientSituation | null>(null)
  const row = (label: string, value: React.ReactNode) => <div className="grid grid-cols-[160px_1fr] gap-3 py-2 text-[14px]"><dt className="text-muted-foreground">{label}</dt><dd className="min-w-0">{value}</dd></div>
  return (
    <>
      <PageHeader title="Tech Notícias" sub="Cliente pendente: o dono ainda não aceitou o convite."
        back={<button onClick={() => go('interno')} className="inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft className="h-3.5 w-3.5" />Clientes</button>}
        actions={<>
          {situation === 'pending' && <Button onClick={() => { setSent('agora'); toast.success('Convite enviado', { description: 'contato@technoticias.com · vale por 1 dia.' }) }}><Mail className="h-4 w-4" />{sent ? 'Reenviar convite' : 'Enviar convite'}</Button>}
          <DropdownMenu><DropdownMenuTrigger asChild><Button variant="outline">Situação: {SITUATION[situation][0]}</Button></DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56"><DropdownMenuLabel>Mudar situação</DropdownMenuLabel>
              {(['active', 'inactive', 'banned'] as const).map((k) => <DropdownMenuItem key={k} disabled={k === 'active' && situation === 'pending'} onSelect={() => setConfirm(k)}>{SITUATION[k][0]}{k === 'active' && situation === 'pending' && <span className="ml-auto text-[12px] text-muted-foreground">sem dono</span>}</DropdownMenuItem>)}
            </DropdownMenuContent>
          </DropdownMenu>
        </>} />
      <Body className="lg:grid-cols-2">
        <Card title="Contato" footer={<Button size="sm" variant="outline">Editar</Button>}>
          <dl className="-my-2 divide-y">{row('Nome', 'Caio Prado')}{row('E-mail', 'contato@technoticias.com')}{row('Telefone', <span className="tnum">+55 11 98888-7777</span>)}{row('Idioma', 'Português')}{row('Convite', sent ? <Status tone="ochre">Enviado {sent}</Status> : <span className="text-muted-foreground">Ainda não enviado</span>)}</dl>
        </Card>
        <Card title="Indicação" footer={<Button size="sm" variant="outline">Editar</Button>}>
          <dl className="-my-2 divide-y">{row('Indicado por', 'Blog Exemplo')}{row('Comissão', <span className="tnum">2%</span>)}{row('Observações', <span className="text-muted-foreground">Veio do evento de setembro.</span>)}</dl>
        </Card>
        <Card title="Dados fiscais" desc="Só o cliente preenche e muda, em Configurações. A equipe Groone só lê." className="lg:col-span-2">
          <div className="flex items-center gap-3 text-[14px] text-muted-foreground"><Lock className="h-4 w-4" />O cliente ainda não preencheu os dados fiscais.</div>
        </Card>
        <Card title="Networks" desc="Ligadas pelo MCM com o e-mail do contato. Mudar a situação do cliente liga ou desliga as networks." className="lg:col-span-2">
          <p className="text-[14px] text-muted-foreground">Nenhuma network ainda. Quando o cliente aceitar o MCM da Groone, ela aparece aqui sozinha.</p>
        </Card>
      </Body>
      <Dialog open={confirm !== null} onOpenChange={(o) => !o && setConfirm(null)}>
        <DialogContent><DialogHeader><DialogTitle>Deixar Tech Notícias {confirm ? SITUATION[confirm][0].toLowerCase() : ''}?</DialogTitle>
          <DialogDescription>{confirm === 'active' ? 'As networks desligadas junto com o cliente voltam a sincronizar.' : 'Os membros perdem o acesso e as networks do cliente param de sincronizar.'}</DialogDescription></DialogHeader>
          <DialogFooter><Button variant="outline" onClick={() => setConfirm(null)}>Cancelar</Button><Button variant={confirm === 'active' ? 'default' : 'destructive'} onClick={() => { if (confirm) setSituation(confirm); setConfirm(null) }}>Confirmar</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

function FiscalScreen() {
  const [type, setType] = useState('BR_PJ')
  return (
    <>
      <PageHeader title="Dados fiscais" sub="Para a Groone pagar a sua parte da receita. Só quem pode editar a Empresa vê e muda estes dados." />
      <Body>
        <Card title="Documento" footerNote="Todos os campos são obrigatórios." footer={<Button onClick={() => toast.success('Dados fiscais salvos')}>Salvar</Button>}>
          <form className="grid gap-4 md:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
            <Field id="fi-type" label="Tipo de documento">
              <Select value={type} onValueChange={setType}><SelectTrigger id="fi-type" className="h-10"><SelectValue /></SelectTrigger>
                <SelectContent><SelectItem value="BR_PJ">Brasil · CNPJ</SelectItem><SelectItem value="BR_PF">Brasil · CPF</SelectItem><SelectItem value="US_PJ">Estados Unidos · EIN</SelectItem><SelectItem value="PT_PJ">Portugal · NIPC</SelectItem></SelectContent>
              </Select>
            </Field>
            <Field id="fi-id" label={type === 'BR_PF' ? 'CPF' : 'CNPJ'}><Input id="fi-id" className="h-10 tnum" defaultValue="11.222.333/0001-81" /></Field>
            <Field id="fi-legal" label="Razão social ou nome completo"><Input id="fi-legal" className="h-10" defaultValue="Blog Exemplo Ltda." /></Field>
            <div className="grid grid-cols-[90px_1fr] gap-3"><Field id="fi-ddi" label="DDI"><Input id="fi-ddi" className="h-10 tnum" defaultValue="+55" /></Field><Field id="fi-phone" label="Telefone de cobrança"><Input id="fi-phone" className="h-10 tnum" defaultValue="11 3333-0000" /></Field></div>
            <div className="md:col-span-2"><Field id="fi-addr" label="Endereço de cobrança"><Input id="fi-addr" className="h-10" defaultValue="Rua das Flores, 100, São Paulo, SP" /></Field></div>
            <Field id="fi-bank" label="Banco"><Input id="fi-bank" className="h-10" defaultValue="Banco Exemplo" /></Field>
            <Field id="fi-swift" label="SWIFT" hint="8 a 11 letras ou números."><Input id="fi-swift" className="h-10 font-mono uppercase" defaultValue="EXMPBRSP" /></Field>
            <Field id="fi-account" label="Conta"><Input id="fi-account" className="h-10 tnum" defaultValue="12345-6" /></Field>
            <Field id="fi-routing" label="Agência ou routing number"><Input id="fi-routing" className="h-10 tnum" defaultValue="0001" /></Field>
          </form>
        </Card>
      </Body>
    </>
  )
}

/* ---------- painel interno: contratos ---------- */

type ProtoContract = { id: number; client: string; code: string; name: string; delegation: 'MA' | 'MI'; revshare: string; source: 'gam' | 'manual'; status: 'active' | 'ended'; start: string; end: string | null; notes: string }

const INITIAL_CONTRACTS: ProtoContract[] = [
  { id: 1, client: 'Portal da Cidade', code: '22101234', name: 'Portal Cidade', delegation: 'MA', revshare: '15,000', source: 'gam', status: 'active', start: '24/10/2026 14:05', end: null, notes: '' },
  { id: 2, client: 'Portal da Cidade', code: '22101234', name: 'Portal Cidade', delegation: 'MA', revshare: '20,000', source: 'gam', status: 'ended', start: '02/03/2026 10:05', end: '24/10/2026 14:05', notes: '' },
  { id: 3, client: 'Açaí Notícias', code: '21876543', name: 'Açaí', delegation: 'MI', revshare: '30,000', source: 'manual', status: 'active', start: '10/09/2026 09:12', end: null, notes: 'Contrato assinado em 09/2026' },
]

function ContractsScreen() {
  const [contracts, setContracts] = useState(INITIAL_CONTRACTS)
  const [tab, setTab] = useState<'active' | 'ended' | 'all'>('active')
  const [creating, setCreating] = useState(false)
  const [form, setForm] = useState({ network: '21876543', revshare: '', notes: '' })
  const networks = [
    { client: 'Portal da Cidade', code: '22101234', name: 'Portal Cidade', delegation: 'MA' as const },
    { client: 'Açaí Notícias', code: '21876543', name: 'Açaí', delegation: 'MI' as const },
    { client: 'Blog do Zé', code: '23009876', name: 'Blog do Zé', delegation: 'MI' as const },
  ]
  const active = (code: string) => contracts.find((c) => c.code === code && c.status === 'active')
  const list = contracts.filter((c) => tab === 'all' || c.status === tab)
  const revOk = /^\d{1,3}([,.]\d{1,3})?$/.test(form.revshare) && Number(form.revshare.replace(',', '.')) <= 100

  const create = () => {
    const net = networks.find((n) => n.code === form.network)!
    const now = '24/10/2026 18:30'
    setContracts([{ id: Date.now(), client: net.client, code: net.code, name: net.name, delegation: 'MI', revshare: Number(form.revshare.replace(',', '.')).toFixed(3).replace('.', ','), source: 'manual', status: 'active', start: now, end: null, notes: form.notes }, ...contracts.map((c) => (c.code === net.code && c.status === 'active' ? { ...c, status: 'ended' as const, end: now } : c))])
    toast.success('Contrato criado', { description: active(net.code) ? 'O contrato anterior foi encerrado.' : undefined })
    setCreating(false)
  }

  return (
    <>
      <PageHeader title="Contratos" sub="O revshare da Groone em cada network MCM. No Manage Account ele vem do GAM de hora em hora; no Manage Inventory, a equipe cadastra." actions={<Button onClick={() => setCreating(true)}>Novo contrato</Button>} />
      <Body>
        <Card title="Networks MCM" desc="O contrato em vigor de cada network. A receita do cliente sempre usa este revshare, inclusive para dias antigos." pad={false}>
          <Table min={760}>
            <thead><tr><th className={th}>Cliente</th><th className={th}>Network</th><th className={th}>MCM</th><th className={th}>Revshare atual</th><th className={th}>Origem</th><th className={cn(th, 'w-40')}><span className="sr-only">Ações</span></th></tr></thead>
            <tbody>
              {networks.map((n) => {
                const c = active(n.code)
                return (
                  <tr key={n.code} className="hover:bg-muted">
                    <td className={td}><div className="font-medium">{n.client}</div></td>
                    <td className={td}><div>{n.name}</div><Code>{n.code}</Code></td>
                    <td className={cn(td, 'text-muted-foreground')}>{n.delegation === 'MA' ? 'Manage Account' : 'Manage Inventory'}</td>
                    <td className={cn(td, 'tnum')}>{c ? `${c.revshare}%` : <Status tone="ochre">Sem contrato</Status>}</td>
                    <td className={cn(td, 'text-muted-foreground')}>{c ? (c.source === 'gam' ? 'GAM' : 'Manual') : '–'}</td>
                    <td className={cn(td, 'text-right')}>{n.delegation === 'MI' ? <Button variant="outline" size="sm" onClick={() => { setForm({ network: n.code, revshare: '', notes: '' }); setCreating(true) }}>Novo contrato</Button> : <span className="text-[13px] text-muted-foreground">Vem do GAM</span>}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Card>
        <div className="flex flex-wrap rounded-md border bg-card p-0.5 " role="tablist" aria-label="Filtrar contratos">
          {([['active', 'Ativos'], ['ended', 'Encerrados'], ['all', 'Todos']] as const).map(([k, l]) => (
            <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)} className={cn('h-8 rounded-[4px] px-3 text-[13px] font-medium', tab === k ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground')}>{l}</button>
          ))}
        </div>
        <Table min={860}>
          <thead><tr><th className={th}>Cliente</th><th className={th}>Network</th><th className={th}>Revshare</th><th className={th}>Status</th><th className={th}>Origem</th><th className={th}>Início</th><th className={th}>Fim</th><th className={cn(th, 'w-12')}><span className="sr-only">Ações</span></th></tr></thead>
          <tbody>
            {list.map((c) => (
              <tr key={c.id} className="hover:bg-muted">
                <td className={td}><div className="font-medium">{c.client}</div>{c.notes && <div className="text-[13px] text-muted-foreground">{c.notes}</div>}</td>
                <td className={td}><Code>{c.code}</Code></td>
                <td className={cn(td, 'tnum')}>{c.revshare}%</td>
                <td className={td}>{c.status === 'active' ? <Status tone="ok">Ativo</Status> : <Status tone="neutral">Encerrado</Status>}</td>
                <td className={cn(td, 'text-muted-foreground')}>{c.source === 'gam' ? 'GAM' : 'Manual'}</td>
                <td className={cn(td, 'whitespace-nowrap text-[13px] text-muted-foreground')}>{c.start}</td>
                <td className={cn(td, 'whitespace-nowrap text-[13px] text-muted-foreground')}>{c.end ?? '–'}</td>
                <td className={td}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild><Button variant="ghost" size="sm" aria-label="Ações do contrato"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Editar observação</DropdownMenuItem>
                      {c.source === 'manual' && c.status === 'active' && <DropdownMenuItem>Encerrar</DropdownMenuItem>}
                      {c.source === 'manual' && <DropdownMenuItem className="text-bad">Excluir</DropdownMenuItem>}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Body>
      <Dialog open={creating} onOpenChange={setCreating}>
        <DialogContent className="max-w-[480px]">
          <DialogHeader><DialogTitle>Novo contrato</DialogTitle><DialogDescription>Só networks MCM Manage Inventory. O revshare não muda depois de criado: para mudar, crie outro contrato e o atual é encerrado.</DialogDescription></DialogHeader>
          <div className="grid gap-4">
            <Field id="ct-network" label="Network">
              <Select value={form.network} onValueChange={(v) => setForm({ ...form, network: v })}><SelectTrigger id="ct-network" className="h-10"><SelectValue /></SelectTrigger>
                <SelectContent>{networks.filter((n) => n.delegation === 'MI').map((n) => <SelectItem key={n.code} value={n.code}>{n.client} · {n.code}</SelectItem>)}</SelectContent>
              </Select>
            </Field>
            <Field id="ct-rev" label="Revshare da Groone (%)" hint={active(form.network) ? `Contrato atual: ${active(form.network)!.revshare}%` : 'Sem contrato ativo'}><Input id="ct-rev" className="h-10 tnum" inputMode="decimal" value={form.revshare} onChange={(e) => setForm({ ...form, revshare: e.target.value })} placeholder="30" /></Field>
            <Field id="ct-notes" label="Observação (opcional)"><Textarea id="ct-notes" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} /></Field>
          </div>
          <DialogFooter><Button variant="outline" onClick={() => setCreating(false)}>Cancelar</Button><Button disabled={!revOk} onClick={create}>Criar contrato</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

/* ---------- Resultado e Custos ---------- */

const usd = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD' })
const RESULT_MONTHS = [
  { month: 'mai. 2026', billing: 8120, deductions: 96, costs: 1890 },
  { month: 'jun. 2026', billing: 8790, deductions: 141, costs: 1930 },
  { month: 'jul. 2026', billing: 9420, deductions: 88, costs: 1960 },
  { month: 'ago. 2026', billing: 10310, deductions: 212, costs: 2050 },
  { month: 'set. 2026', billing: 11040, deductions: 133, costs: 2110 },
  { month: 'out. 2026', billing: 7215, deductions: null, costs: 1820 },
] as const
const COST_LINES = [['Imposto (6% do faturamento)', 662.4], ['Equipe de conteúdo', 1200], ['Servidor e CDN', 180], ['Ferramentas', 67.6]] as const

function Money({ value, strong }: { value: number; strong?: boolean }) {
  return <span className={cn('tnum whitespace-nowrap', strong && 'font-semibold', value < 0 && (strong ? 'text-bad' : 'text-muted-foreground'))}>{usd.format(value)}</span>
}

function ResultScreen({ go }: { go: (s: Screen) => void }) {
  const [selected, setSelected] = useState(4)
  const rows = RESULT_MONTHS.map((m) => {
    const revenue = m.billing - (m.deductions ?? 0)
    return { ...m, revenue, result: revenue - m.costs }
  })
  const pick = rows[selected]
  const total = rows.reduce((sum, row) => sum + row.result, 0)
  return (
    <>
      <PageHeader title="Resultado" sub="O que sobra de cada mês: faturamento, menos as deduções do Ad Manager, menos os custos da Empresa."
        actions={
          <>
            <Select defaultValue="6"><SelectTrigger className="h-9 w-[180px]" aria-label="Período"><SelectValue /></SelectTrigger>
              <SelectContent><SelectItem value="6">Últimos 6 meses</SelectItem><SelectItem value="12">Últimos 12 meses</SelectItem><SelectItem value="year">Este ano</SelectItem></SelectContent>
            </Select>
            <Button variant="outline" className="h-9" onClick={() => go('custos')}>Custos</Button>
          </>
        } />
      <Body>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-5">
          {([['Faturamento', pick.billing], ['Deduções', -(pick.deductions ?? 0)], ['Receita', pick.revenue], ['Custos', -pick.costs], ['Resultado', pick.result]] as const).map(([label, value]) => (
            <div key={label} className="bg-card p-4">
              <div className="text-[13px] font-medium text-muted-foreground">{label} · {pick.month}</div>
              <div className="mt-1 text-[24px] font-semibold tracking-tight"><Money value={value} strong={label === 'Resultado'} /></div>
              {label === 'Deduções' && pick.deductions === null && <div className="mt-1"><Status tone="ochre">Aguardando o Ad Manager</Status></div>}
              {label === 'Resultado' && <div className="mt-1 text-[13px] text-muted-foreground tnum">Margem {((pick.result / pick.billing) * 100).toFixed(1).replace('.', ',')}%</div>}
            </div>
          ))}
        </div>
        <Table min={820}>
          <thead><tr>{['Mês', 'Faturamento', 'Deduções', 'Receita', 'Custos', 'Resultado'].map((h, i) => <th key={h} className={cn(th, i > 0 && 'text-right')}>{h}</th>)}</tr></thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.month} onClick={() => setSelected(index)} aria-selected={index === selected} className={cn('cursor-pointer hover:bg-muted', index === selected && 'bg-muted')}>
                <td className={cn(td, 'font-medium whitespace-nowrap')}>{row.month}</td>
                <td className={cn(td, 'text-right')}><Money value={row.billing} /></td>
                <td className={cn(td, 'text-right')}>{row.deductions === null ? <Status tone="ochre">Aguardando</Status> : <Money value={-row.deductions} />}</td>
                <td className={cn(td, 'text-right')}><Money value={row.revenue} /></td>
                <td className={cn(td, 'text-right')}><Money value={-row.costs} /></td>
                <td className={cn(td, 'text-right')}><Money value={row.result} strong /></td>
              </tr>
            ))}
            <tr className="bg-muted/60"><td className={cn(td, 'font-medium')}>Total</td><td className={td} colSpan={4} /><td className={cn(td, 'text-right')}><Money value={total} strong /></td></tr>
          </tbody>
        </Table>
        <Card title={`Custos de ${pick.month}`} desc="Cada custo da aba Custos que vale neste mês, já na moeda do painel." footerNote="As deduções chegam do Ad Manager por volta do dia 15 do mês seguinte." footer={<Button variant="outline" size="sm" onClick={() => go('custos')}>Editar custos</Button>}>
          <ul className="divide-y rounded-md border">{COST_LINES.map(([name, value]) => <li key={name} className="flex items-center justify-between gap-4 px-4 py-3 text-[14px]"><span>{name}</span><Money value={-value} /></li>)}</ul>
        </Card>
      </Body>
    </>
  )
}

type ProtoCost = { id: number; name: string; kind: 'one_time' | 'recurring' | 'formula'; currency: string; start: string; end: string; amount: string; formula: string }
const INITIAL_COSTS: ProtoCost[] = [
  { id: 1, name: 'Imposto Simples', kind: 'formula', currency: 'BRL', start: '2026-01', end: '', amount: '', formula: 'faturamento * 6%' },
  { id: 2, name: 'Equipe de conteúdo', kind: 'recurring', currency: 'USD', start: '2026-03', end: '', amount: '1200', formula: '' },
  { id: 3, name: 'Servidor e CDN', kind: 'recurring', currency: 'USD', start: '2026-01', end: '2026-12', amount: '180', formula: '' },
  { id: 4, name: 'Evento de lançamento', kind: 'one_time', currency: 'BRL', start: '2026-09', end: '', amount: '4500', formula: '' },
]
const KIND_LABEL = { one_time: 'Um mês', recurring: 'Recorrente', formula: 'Fórmula' } as const

function CostsScreen() {
  const [costs, setCosts] = useState(INITIAL_COSTS)
  const [editing, setEditing] = useState<ProtoCost | null>(null)
  const blank: ProtoCost = { id: 0, name: '', kind: 'recurring', currency: 'USD', start: '2026-10', end: '', amount: '', formula: '' }
  const preview = (() => {
    if (!editing || editing.kind !== 'formula') return null
    if (!/^[\sa-z0-9.,%*+\-/()×÷;]+$/i.test(editing.formula) || !editing.formula.trim()) return { error: 'Use números, + − × ÷, parênteses, %, min, max e as variáveis faturamento e receita.' }
    return { value: editing.formula.includes('6%') ? 600 : 1000 }
  })()
  const save = () => {
    if (!editing) return
    setCosts(editing.id ? costs.map((cost) => (cost.id === editing.id ? editing : cost)) : [{ ...editing, id: Date.now() }, ...costs])
    toast.success(editing.id ? 'Custo salvo' : 'Custo criado')
    setEditing(null)
  }
  const value = (cost: ProtoCost) => (cost.kind === 'formula' ? <Code>{cost.formula}</Code> : <span className="tnum">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: cost.currency }).format(Number(cost.amount))}</span>)
  const period = (cost: ProtoCost) => (cost.kind === 'one_time' ? cost.start : `${cost.start} → ${cost.end || 'sem fim'}`)
  return (
    <>
      <PageHeader title="Custos" sub="Tudo o que sai do faturamento: custos fixos, de um mês só e impostos por fórmula. Entram no Resultado de cada mês." actions={<Button onClick={() => setEditing(blank)}><Plus className="h-4 w-4" />Novo custo</Button>} />
      <Body>
        <Table min={760}>
          <thead><tr><th className={th}>Nome</th><th className={th}>Tipo</th><th className={th}>Valor ou fórmula</th><th className={th}>Período</th><th className={cn(th, 'w-12')}><span className="sr-only">Ações</span></th></tr></thead>
          <tbody>
            {costs.map((cost) => (
              <tr key={cost.id} className="hover:bg-muted">
                <td className={cn(td, 'font-medium')}>{cost.name}</td>
                <td className={td}><Badge>{KIND_LABEL[cost.kind]}</Badge></td>
                <td className={td}>{value(cost)}</td>
                <td className={cn(td, 'whitespace-nowrap text-[13px] text-muted-foreground tnum')}>{period(cost)}</td>
                <td className={td}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild><Button variant="ghost" size="sm" aria-label="Ações do custo"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                    <DropdownMenuContent align="end"><DropdownMenuItem onSelect={() => setEditing(cost)}>Editar</DropdownMenuItem><DropdownMenuItem className="text-bad" onSelect={() => setCosts(costs.filter((item) => item.id !== cost.id))}>Excluir</DropdownMenuItem></DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Body>
      <Dialog open={!!editing} onOpenChange={(open) => !open && setEditing(null)}>
        <DialogContent className="max-w-[520px]">
          <DialogHeader><DialogTitle>{editing?.id ? 'Editar custo' : 'Novo custo'}</DialogTitle><DialogDescription>Valores na moeda do custo; o Resultado converte pela cotação do mês.</DialogDescription></DialogHeader>
          {editing && (
            <div className="grid gap-4">
              <Field id="cost-name" label="Nome"><Input id="cost-name" className="h-10" value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} placeholder="Imposto Simples" /></Field>
              <RadioGroup value={editing.kind} onValueChange={(kind) => setEditing({ ...editing, kind: kind as ProtoCost['kind'] })} className="grid grid-cols-3 gap-2" aria-label="Tipo">
                {(Object.keys(KIND_LABEL) as ProtoCost['kind'][]).map((kind) => (
                  <Label key={kind} className={cn('flex h-10 cursor-pointer items-center gap-2 rounded-md border px-3 text-[14px]', editing.kind === kind && 'border-foreground')}><RadioGroupItem value={kind} />{KIND_LABEL[kind]}</Label>
                ))}
              </RadioGroup>
              <div className="grid grid-cols-2 gap-4">
                <Field id="cost-start" label={editing.kind === 'one_time' ? 'Mês' : 'Começa em'}><Input id="cost-start" type="month" className="h-10" value={editing.start} onChange={(e) => setEditing({ ...editing, start: e.target.value })} /></Field>
                {editing.kind !== 'one_time' && <Field id="cost-end" label="Termina em (opcional)"><Input id="cost-end" type="month" className="h-10" value={editing.end} onChange={(e) => setEditing({ ...editing, end: e.target.value })} /></Field>}
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <Field id="cost-currency" label="Moeda">
                  <Select value={editing.currency} onValueChange={(currency) => setEditing({ ...editing, currency })}><SelectTrigger id="cost-currency" className="h-10"><SelectValue /></SelectTrigger><SelectContent>{['USD', 'BRL', 'EUR'].map((code) => <SelectItem key={code} value={code}>{code}</SelectItem>)}</SelectContent></Select>
                </Field>
                {editing.kind === 'formula' ? (
                  <Field id="cost-formula" label="Fórmula" error={preview && 'error' in preview ? preview.error : false} hint={preview && 'value' in preview ? `Com faturamento de 10.000 e receita de 9.000, daria ${preview.value}` : undefined}>
                    <Input id="cost-formula" className="h-10 font-mono" value={editing.formula} onChange={(e) => setEditing({ ...editing, formula: e.target.value })} placeholder="faturamento * 6%" />
                  </Field>
                ) : (
                  <Field id="cost-amount" label="Valor por mês"><Input id="cost-amount" inputMode="decimal" className="h-10 tnum" value={editing.amount} onChange={(e) => setEditing({ ...editing, amount: e.target.value })} placeholder="1200" /></Field>
                )}
              </div>
              {editing.kind === 'formula' && (
                <div className="flex flex-wrap gap-2">{['faturamento', 'receita', 'min(', 'max('].map((chip) => <Button key={chip} variant="outline" size="sm" className="font-mono" onClick={() => setEditing({ ...editing, formula: `${editing.formula}${chip}` })}>{chip}</Button>)}</div>
              )}
            </div>
          )}
          <DialogFooter><Button variant="outline" onClick={() => setEditing(null)}>Cancelar</Button><Button disabled={!editing?.name} onClick={save}>Salvar custo</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

const CLIENT_RESULTS = [
  { name: 'Açaí Notícias', billing: 11040, deductions: 133, costs: 2110 },
  { name: 'Blog do Zé', billing: 2310, deductions: 41, costs: 2600 },
  { name: 'Portal da Cidade', billing: 30880, deductions: 512, costs: 7400 },
]

function ClientsResultScreen() {
  const rows = CLIENT_RESULTS.map((row) => ({ ...row, revenue: row.billing - row.deductions })).map((row) => ({ ...row, result: row.revenue - row.costs }))
  return (
    <>
      <PageHeader title="Resultado dos clientes" sub="O resultado de cada Empresa cliente no mês, com os custos que o cliente cadastrou." actions={<Select defaultValue="2026-09"><SelectTrigger className="h-9 w-[160px]" aria-label="Mês"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="2026-09">set. 2026</SelectItem><SelectItem value="2026-08">ago. 2026</SelectItem></SelectContent></Select>} />
      <Body>
        <Table min={820}>
          <thead><tr>{['Cliente', 'Faturamento', 'Deduções', 'Receita', 'Custos', 'Resultado'].map((h, i) => <th key={h} className={cn(th, i > 0 && 'text-right')}>{h}</th>)}</tr></thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name} className="hover:bg-muted">
                <td className={cn(td, 'font-medium')}>{row.name}</td>
                <td className={cn(td, 'text-right')}><Money value={row.billing} /></td>
                <td className={cn(td, 'text-right')}><Money value={-row.deductions} /></td>
                <td className={cn(td, 'text-right')}><Money value={row.revenue} /></td>
                <td className={cn(td, 'text-right')}><Money value={-row.costs} /></td>
                <td className={cn(td, 'text-right')}><Money value={row.result} strong /></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Body>
    </>
  )
}

/* ---------- modal de permissões com filtro por categoria ---------- */

const PROTO_PERMS: [string, string[]][] = [
  ['Empresa', ['Editar a Empresa']],
  ['Equipe', ['Ver a equipe', 'Convidar pessoas', 'Gerenciar membros']],
  ['Papéis e permissões', ['Ver papéis', 'Gerenciar papéis', 'Dar permissões diretas']],
  ['Networks do GAM', ['Ver networks', 'Conectar networks', 'Sincronizar networks', 'Desconectar networks']],
  ['Sites', ['Ver sites e ad units', 'Atribuir sites', 'Cadastrar sites']],
  ['Relatórios', ['Ver relatórios']],
  ['Histórico', ['Ver o histórico']],
  ['API', ['Gerenciar chaves de API']],
]

function PermissionsScreen() {
  const [group, setGroup] = useState<string | null>(null)
  const shown = PROTO_PERMS.filter(([g]) => group === null || g === group)
  return (
    <Dialog open onOpenChange={() => undefined}>
      <DialogContent className="max-w-[600px]">
        <DialogHeader><DialogTitle>Editar papel</DialogTitle></DialogHeader>
        <div className="grid gap-3">
          <div className="text-[13px] font-medium text-muted-foreground">Permissões</div>
          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filtrar por categoria">
            {[null, ...PROTO_PERMS.map(([g]) => g)].map((g) => (
              <button key={g ?? 'all'} aria-pressed={group === g} onClick={() => setGroup(g)} className={cn('h-7 rounded-full border px-3 text-[12px] font-medium', group === g ? 'border-foreground bg-foreground text-background' : 'text-muted-foreground hover:text-foreground')}>{g ?? 'Todas'}</button>
            ))}
          </div>
          <div className="scroll-thin grid max-h-[min(44dvh,380px)] gap-4 overflow-y-auto rounded-md border p-4">
            {shown.map(([g, perms]) => (
              <div key={g} className="grid gap-2"><h3 className="text-[13px] font-medium">{g}</h3>{perms.map((p) => <label key={p} className="flex items-center gap-2.5 text-[14px]"><input type="checkbox" className="size-4 accent-[hsl(var(--foreground))]" />{p}</label>)}</div>
            ))}
          </div>
        </div>
        <DialogFooter><Button variant="outline">Cancelar</Button><Button>Salvar</Button></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

/* ---------- app ---------- */

export default function App() {
  const initial = typeof location !== 'undefined' && isScreen(location.hash.slice(1)) ? (location.hash.slice(1) as Screen) : 'equipe'
  const [screen, setScreen] = useState<Screen>(initial)
  const [lang, setLang] = useState<Lang>('pt')
  const [members, setMembers] = useState(INITIAL_MEMBERS)
  const [accent, setAccent] = useState('padrao')
  const [theme, setTheme] = useState('system')
  const t: T = (k) => translate(lang, k)

  const go = (s: Screen) => {
    setScreen(s)
    try { history.replaceState(null, '', `#${s}`) } catch { /* sandboxed viewer */ }
    window.scrollTo({ top: 0 })
  }

  useEffect(() => {
    const onHash = () => { const h = location.hash.slice(1); if (isScreen(h)) setScreen(h) }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'system') root.removeAttribute('data-theme')
    else root.setAttribute('data-theme', theme)
  }, [theme])
  useEffect(() => { document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang }, [lang])

  const a = ACCENTS.find((x) => x.id === accent)!
  const auth = screen === 'login' || screen === 'convite'
  const body = (() => {
    switch (screen) {
      case 'login': return <Login t={t} go={go} />
      case 'convite': return <Invite t={t} go={go} />
      case 'inicio': return <HomeScreen t={t} go={go} members={members} />
      case 'desempenho': return <PerformanceScreen />
      case 'visitas': return <PageViewsScreen />
      case 'resultado': return <ResultScreen go={go} />
      case 'custos': return <CostsScreen />
      case 'equipe': return <TeamScreen t={t} members={members} setMembers={setMembers} />
      case 'networks': return <NetworksScreen t={t} go={go} />
      case 'conectar': return <ConnectScreen t={t} go={go} />
      case 'configuracoes': return <SettingsScreen t={t} accent={accent} setAccent={setAccent} theme={theme} setTheme={setTheme} />
      case 'interno': return <InternalScreen t={t} go={go} />
      case 'cliente': return <ClientScreen go={go} />
      case 'fiscais': return <FiscalScreen />
      case 'contratos': return <ContractsScreen />
      case 'resultados': return <ClientsResultScreen />
      case 'permissoes': return <PermissionsScreen />
    }
  })()

  return (
    <div className="flex min-h-full flex-col">
      {accent !== 'padrao' && <style>{accentCss(a)}</style>}
      <div className="z-30 flex flex-wrap items-center gap-x-3 gap-y-2 bg-foreground px-4 py-2 text-[13px] text-background sm:px-6 lg:sticky lg:top-0 lg:h-11 lg:flex-nowrap">
        <span className="font-medium">Protótipo do Avant</span>
        <span className="opacity-70">Dados de exemplo. Nada aqui é real.</span>
        <label htmlFor="proto-screen" className="ml-auto opacity-70">Tela</label>
        <select id="proto-screen" value={screen} onChange={(e) => go(e.target.value as Screen)} className="h-7 rounded-md border border-background/20 bg-foreground px-2 text-[13px] text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/60">
          {SCREENS.map(([k, l]) => <option key={k} value={k}>{l}</option>)}
        </select>
      </div>
      <div className="flex flex-1 flex-col">{auth ? body : <Shell t={t} lang={lang} setLang={setLang} screen={screen} go={go}>{body}</Shell>}</div>
      <Toaster position="bottom-right" theme={theme === 'system' ? 'system' : (theme as 'light' | 'dark')} toastOptions={{ className: 'font-sans' }} />
    </div>
  )
}
