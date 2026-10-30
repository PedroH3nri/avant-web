import { useEffect, useMemo, useRef, useState } from 'react'
import { Toaster, toast } from 'sonner'
import { Check, ChevronsUpDown, Copy, Loader2, Plus, RefreshCw, Search, X, AlertTriangle, ArrowLeft, MoreHorizontal, Lock, Mail, ExternalLink, Home, Users, Network, Settings, ShieldCheck, Menu, BarChart3, Wallet } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
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
  ['relatorios', 'Relatórios'],
  ['construtor', 'Relatórios · Construtor'],
  ['resultado', 'Resultado'],
  ['custos', 'Custos'],
  ['equipe', 'Equipe'],
  ['grupos', 'Equipe · Grupos'],
  ['grupo', 'Equipe · Página do grupo'],
  ['grupoinativo', 'Equipe · Grupo inativo'],
  ['membro', 'Equipe · Página da pessoa'],
  ['networks', 'Networks do GAM'],
  ['conectar', 'Conectar network'],
  ['configuracoes', 'Configurações'],
  ['interno', 'Painel interno · Clientes'],
  ['cliente', 'Painel interno · Página do cliente'],
  ['fiscais', 'Configurações · Dados fiscais'],
  ['contratos', 'Painel interno · Contratos'],
  ['resultados', 'Painel interno · Resultado dos clientes'],
  ['permissoes', 'Modal de permissões'],
  ['papelcomissao', 'Painel interno · Papel com comissão e meta'],
  ['minhacomissao', 'Painel interno · Minha comissão'],
  ['comissoes', 'Painel interno · Comissões da equipe'],
] as const
type Screen = (typeof SCREENS)[number][0]
const INTERNAL_SCREENS: Screen[] = ['interno', 'cliente', 'contratos', 'resultados', 'papelcomissao', 'minhacomissao', 'comissoes']
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
    <div className="relative overflow-x-auto rounded-lg border bg-card">
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


function LangSwitch({ lang, setLang, className }: { lang: Lang; setLang: (l: Lang) => void; className?: string }) {
  return (
    <div className={cn('flex items-center rounded-md border bg-background p-0.5', className)} role="group" aria-label="Idioma">
      {(['pt', 'en', 'es'] as Lang[]).map((l) => (
        <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l} className={cn('h-7 flex-1 rounded-[4px] px-2 text-[12px] font-medium uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', lang === l ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground')}>{l}</button>
      ))}
    </div>
  )
}

function CompanySwitcher({ t, internal, image }: { t: T; internal: boolean; image: string | null }) {
  return (
    <>
        {internal ? (
          <span className="flex min-w-0 items-center gap-2 text-[14px] font-medium">Groone<Badge>Painel interno</Badge></span>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger className="flex min-w-0 items-center gap-2 rounded-md px-1.5 py-1.5 text-left text-[14px] font-medium hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <CompanyIcon name="Blog Exemplo" image={image} size={20} />
              <span className="min-w-0 truncate">Blog Exemplo</span>
              <span className="hidden sm:inline-flex"><Badge>Rede Groone</Badge></span>
              <ChevronsUpDown className="h-4 w-4 shrink-0 text-muted-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              <DropdownMenuLabel className="text-[12px] font-normal text-muted-foreground">{t('top.companies')}</DropdownMenuLabel>
              <DropdownMenuItem className="gap-2"><CompanyIcon name="Blog Exemplo" image={image} size={20} />Blog Exemplo<Check className="ml-auto h-4 w-4" /></DropdownMenuItem>
              <DropdownMenuItem className="gap-2" onSelect={() => toast('Trocaria para a Empresa Receitas da Vó')}><CompanyIcon name="Receitas da Vó" image={SAMPLE_LOGO} size={20} />Receitas da Vó<span className="ml-auto text-[12px] text-muted-foreground">Financeiro</span></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
    </>
  )
}


/* ---------- sidebar em trilho com painel (avant-web#91) ---------- */

type RailGroup = { key: string; label: string; icon: typeof Home; items: { id: Screen; label: string; also?: Screen[] }[] }
const CLIENT_RAIL: RailGroup[] = [
  { key: 'inicio', label: 'Início', icon: Home, items: [{ id: 'inicio', label: 'Dashboard' }] },
  { key: 'relatorios', label: 'Relatórios', icon: BarChart3, items: [{ id: 'desempenho', label: 'Ad Manager' }, { id: 'visitas', label: 'Page Views' }, { id: 'relatorios', label: 'Relatórios', also: ['construtor'] }] },
  { key: 'financeiro', label: 'Financeiro', icon: Wallet, items: [{ id: 'resultado', label: 'Resultado' }, { id: 'custos', label: 'Custos' }] },
  { key: 'inventario', label: 'Inventário', icon: Network, items: [{ id: 'networks', label: 'Networks do GAM', also: ['conectar'] }] },
  { key: 'equipe', label: 'Equipe', icon: Users, items: [{ id: 'equipe', label: 'Membros', also: ['membro'] }, { id: 'grupos', label: 'Grupos', also: ['grupo', 'grupoinativo'] }] },
  { key: 'empresa', label: 'Empresa', icon: Settings, items: [{ id: 'configuracoes', label: 'Configurações' }, { id: 'fiscais', label: 'Dados fiscais' }] },
]
const INTERNAL_RAIL: RailGroup[] = [
  { key: 'clientes', label: 'Clientes', icon: Users, items: [{ id: 'interno', label: 'Clientes', also: ['cliente'] }, { id: 'contratos', label: 'Contratos' }, { id: 'resultados', label: 'Resultado dos clientes' }] },
  { key: 'comissoes', label: 'Comissões', icon: Wallet, items: [{ id: 'comissoes', label: 'Comissões da equipe' }, { id: 'minhacomissao', label: 'Minha comissão' }] },
  { key: 'equipegroone', label: 'Equipe', icon: ShieldCheck, items: [{ id: 'papelcomissao', label: 'Papéis da Equipe Groone' }] },
]
const RAIL_WIDTH = 88
const OPEN_DELAY = 120
const SWITCH_DELAY = 250
const CLOSE_DELAY = 200
/** Sidebar em trilho: um ícone por grupo; passar o mouse (ou tocar) abre, por cima da página, o painel com os itens do grupo. Na gaveta do celular, o painel fica sempre ao lado do trilho. */
function RailSidebar({ screen, go, drawer = false }: { screen: Screen; go: (s: Screen) => void; drawer?: boolean }) {
  const internal = INTERNAL_SCREENS.includes(screen)
  const groups = internal ? INTERNAL_RAIL : CLIENT_RAIL
  const owner = groups.find((group) => group.items.some((entry) => entry.id === screen || entry.also?.includes(screen))) ?? groups[0]
  const [hovered, setHovered] = useState<string | null>(null)
  const [lastShown, setLastShown] = useState(owner.key)
  const closing = useRef<ReturnType<typeof setTimeout> | null>(null)
  const switching = useRef<ReturnType<typeof setTimeout> | null>(null)
  const touched = useRef(false)
  const touchMode = useRef(false)
  const container = useRef<HTMLDivElement | null>(null)
  const [drawerGroup, setDrawerGroup] = useState<string | null>(owner.items.length > 1 ? owner.key : null)
  useEffect(() => { setHovered(null) }, [screen])
  const open = drawer ? drawerGroup !== null : hovered !== null
  const shown = groups.find((group) => group.key === (drawer ? drawerGroup : hovered ?? lastShown)) ?? owner
  /** Cancela a troca e o fechamento que ainda estão esperando. */
  const cancel = () => { if (closing.current) clearTimeout(closing.current); if (switching.current) clearTimeout(switching.current) }
  /** Mostra o painel do grupo. */
  const show = (key: string) => { setHovered(key); setLastShown(key) }
  /** Abre o painel do grupo sob o mouse depois de uma pequena espera, para o mouse que só passa por cima não trocar os itens. */
  const hover = (key: string) => { cancel(); if (key === hovered) return; switching.current = setTimeout(() => show(key), open ? SWITCH_DELAY : OPEN_DELAY) }
  /** Fecha o painel com um pequeno atraso, para dar tempo de o mouse chegar nele. */
  const leave = () => { if (drawer || touchMode.current) return; if (switching.current) clearTimeout(switching.current); closing.current = setTimeout(() => setHovered(null), CLOSE_DELAY) }
  useEffect(() => {
    if (drawer || hovered === null) return
    /** No toque, fecha o painel quando a pessoa toca fora do menu. */
    const outside = (event: PointerEvent) => { if (!container.current?.contains(event.target as Node)) setHovered(null) }
    document.addEventListener('pointerdown', outside)
    return () => document.removeEventListener('pointerdown', outside)
  }, [drawer, hovered])
  /** Clique no grupo: no toque e na gaveta abre o painel do grupo; com o mouse vai para o primeiro item. */
  const pick = (group: RailGroup) => {
    const viaTouch = touched.current
    touched.current = false
    if (drawer && group.items.length > 1) { setDrawerGroup(drawerGroup === group.key ? null : group.key); return }
    if (group.items.length > 1 && viaTouch) { cancel(); if (!drawer && hovered === group.key) setHovered(null); else show(group.key); return }
    go(group.items[0].id)
  }
  return (
    <div ref={container} className="relative flex h-full" onMouseLeave={leave} onPointerDown={(event) => { touchMode.current = event.pointerType !== 'mouse' }}>
      <div className="relative z-10 flex shrink-0 flex-col items-center border-r bg-sidebar py-3" style={{ width: RAIL_WIDTH }}>
        <button onClick={() => go(internal ? 'interno' : 'inicio')} aria-label="Avant, início" className="rounded-md p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Mark size={28} /></button>
        <nav className="mt-4 grid w-full gap-1 px-1.5" aria-label="Grupos do menu">
          {groups.map((group) => {
            const Icon = group.icon
            const current = owner.key === group.key
            const showing = open && shown.key === group.key && group.items.length > 1
            return (
              <button key={group.key} onPointerDown={(event) => { touched.current = event.pointerType !== 'mouse' }} onClick={() => pick(group)} onMouseEnter={() => { if (!drawer && !touched.current) hover(group.key) }} onFocus={() => { if (drawer || touched.current) return; cancel(); show(group.key) }} aria-current={current ? 'page' : undefined} aria-expanded={group.items.length > 1 ? showing : undefined} title={group.label}
                className={cn('flex flex-col items-center gap-1.5 rounded-md py-2.5 text-[12px] font-medium leading-none transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  current ? 'bg-secondary text-foreground' : showing ? 'bg-accent text-foreground' : 'text-muted-foreground hover:bg-accent hover:text-foreground')}>
                <Icon className="h-[18px] w-[18px]" />{group.label}
              </button>
            )
          })}
        </nav>
        <div className="mt-auto grid w-full gap-1 px-1.5">
          <button onClick={() => go(internal ? 'inicio' : 'interno')} onMouseEnter={leave} title={internal ? 'Voltar ao painel do cliente' : 'Painel interno'} className="flex flex-col items-center gap-1.5 rounded-md py-2.5 text-[12px] font-medium leading-none text-muted-foreground hover:bg-accent hover:text-foreground">
            {internal ? <ArrowLeft className="h-[18px] w-[18px]" /> : <ShieldCheck className="h-[18px] w-[18px]" />}{internal ? 'Cliente' : 'Interno'}
          </button>
          <div className="mt-1 flex justify-center"><Avatar name="Pedro Henrique" size={30} /></div>
        </div>
      </div>
      <div
        onMouseEnter={() => { if (closing.current) clearTimeout(closing.current); if (switching.current) clearTimeout(switching.current) }}
        aria-hidden={!open}
        className={drawer ? cn('w-[248px] max-w-[calc(92vw-88px)] flex-col bg-sidebar', open ? 'flex' : 'hidden') : cn('absolute inset-y-0 left-[88px] flex w-[248px] flex-col border-r bg-sidebar shadow-[8px_0_24px_-12px_rgba(0,0,0,0.18)] transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
          open ? 'translate-x-0 opacity-100 duration-300' : 'pointer-events-none -translate-x-3 opacity-0 duration-200')}
      >
        <div className="flex h-14 items-center gap-2 border-b px-4"><span className="text-[14px] font-semibold tracking-tight">{shown.label}</span>{internal && <Badge>Interno</Badge>}</div>
        <nav className="grid gap-0.5 p-3" aria-label={shown.label}>
          {shown.items.map((entry) => {
            const active = entry.id === screen || !!entry.also?.includes(screen)
            return <button key={entry.id} tabIndex={open ? 0 : -1} onClick={() => go(entry.id)} aria-current={active ? 'page' : undefined} className={cn('flex h-9 w-full items-center rounded-md px-2.5 text-left text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', active ? 'bg-secondary font-medium text-foreground' : 'text-muted-foreground hover:bg-accent hover:text-foreground')}>{entry.label}</button>
          })}
        </nav>
      </div>
    </div>
  )
}

function Shell({ t, lang, setLang, screen, go, image, children }: { t: T; lang: Lang; setLang: (l: Lang) => void; screen: Screen; go: (s: Screen) => void; image: string | null; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const nav = (s: Screen) => { setOpen(false); go(s) }
  return (
    <div className="flex flex-1">
      <aside className="sticky top-11 z-40 hidden h-[calc(100dvh-2.75rem)] shrink-0 self-start md:block"><RailSidebar screen={screen} go={go} /></aside>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-auto max-w-[92vw] p-0 sm:max-w-[92vw] [&>button:first-child]:hidden">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <RailSidebar drawer screen={screen} go={nav} />
        </SheetContent>
      </Sheet>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-14 items-center gap-2 border-b bg-background px-4 sm:px-6 lg:top-11">
          <Button variant="ghost" size="icon" className="-ml-2 md:hidden" onClick={() => setOpen(true)} aria-label="Abrir menu"><Menu /></Button>
          <CompanySwitcher t={t} internal={INTERNAL_SCREENS.includes(screen)} image={image} />
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

function Bars({ items, color }: { items: readonly (readonly [string, number])[]; color?: string }) {
  const max = Math.max(...items.map(([, v]) => v)) || 1
  return (
    <ul className="grid gap-2">
      {items.map(([label, v]) => (
        <li key={label} className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)_auto] items-center gap-3 text-[13px]">
          <span className="truncate">{label}</span>
          <span className="h-2 rounded-full bg-muted"><span className="block h-2 rounded-full bg-foreground" style={{ width: `${(v / max) * 100}%`, background: color }} /></span>
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

function TeamScreen({ t, go, members, setMembers, groupCount }: { t: T; go: (s: Screen) => void; members: Member[]; setMembers: (m: Member[]) => void; groupCount: number }) {
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
          <div className="flex min-w-0 max-w-full overflow-x-auto rounded-md border bg-card p-0.5" role="tablist" aria-label="Equipe">
            {([['members', t('team.members'), active.length], ['pending', t('team.pending'), pendingList.length], ['groups', 'Grupos', groupCount], ['roles', t('team.roles'), ROLES.length]] as const).map(([k, l, n]) => (
              <button key={k} role="tab" aria-selected={view === k} onClick={() => (k === 'groups' ? go('grupos') : setView(k))} className={cn('h-8 rounded-[4px] px-3 text-[13px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', view === k ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground')}>
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
                    <td className={td}><div className="flex items-center gap-3"><Avatar name={m.name} /><div className="min-w-0"><button className="font-medium hover:underline" onClick={() => go('membro')}>{m.name}</button><div className="truncate text-[13px] text-muted-foreground">{m.email}</div></div></div></td>
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

function SettingsScreen({ t, accent, setAccent, theme, setTheme, image, setImage, groups }: { t: T; accent: string; setAccent: (g: string) => void; theme: string; setTheme: (t: string) => void; image: string | null; setImage: (v: string | null) => void; groups: ProtoGroup[] }) {
  const [section, setSection] = useState('geral')
  const [name, setName] = useState('Blog Exemplo')
  const nameErr = name.trim().length === 0 ? 'Informe o nome da Empresa.' : name.length > 48 ? `Use até 48 caracteres (agora são ${name.length}).` : ''
  const saved = (what: string) => toast.success(`${what} salvo`)
  return (
    <>
      <PageHeader title={t('set.title')} sub={t('set.sub')} />
      <Body className="md:grid-cols-[200px_minmax(0,1fr)]">
        <nav className="flex gap-1 overflow-x-auto md:sticky md:top-8 md:h-fit md:flex-col" aria-label="Seções">
          {[['geral', 'Geral'], ['aparencia', 'Aparência'], ['comissao', 'Comissão e metas'], ['idioma', 'Idioma']].map(([k, l]) => (
            <a key={k} href={`#cfg-${k}`} onClick={(e) => { e.preventDefault(); setSection(k); document.getElementById(`cfg-${k}`)?.scrollIntoView({ block: 'start' }) }}
              className={cn('whitespace-nowrap rounded-md px-3 py-2 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', section === k ? 'bg-card font-medium text-foreground' : 'text-muted-foreground hover:text-foreground')}>{l}</a>
          ))}
        </nav>
        <div className="grid content-start gap-6">
          <div id="cfg-geral" className="scroll-mt-8"><Card title="Nome da Empresa" desc="Aparece no seletor de Empresas, nos convites e nos e-mails." footerNote="Use até 48 caracteres." footer={<Button size="sm" disabled={!!nameErr} onClick={() => saved('Nome')}>Salvar</Button>}>
            <div className="max-w-md"><Field id="set-name" label="Nome" error={nameErr}><Input id="set-name" className="h-10" value={name} onChange={(e) => setName(e.target.value)} aria-invalid={!!nameErr} /></Field></div>
          </Card></div>
          <CompanyImageCard name={name || 'Blog Exemplo'} image={image} setImage={setImage} />
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
          <div id="cfg-comissao" className="grid scroll-mt-8 gap-6"><CompensationSettings groups={groups} /></div>
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
                <td className={td}><div className="flex items-center gap-3"><CompanyIcon name={c.name} image={c.name === 'Receitas da Vó' ? SAMPLE_LOGO : null} size={28} /><div className="min-w-0"><button className="font-medium hover:underline" onClick={() => go('cliente')}>{c.name}</button>{c.referredBy && <div className="text-[13px] text-muted-foreground">Indicado por {c.referredBy}</div>}</div></div></td>
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
  const [clientImage, setClientImage] = useState<string | null>(null)
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
        <AccountManagerCard />
        <Card title="Indicação" footer={<Button size="sm" variant="outline">Editar</Button>}>
          <dl className="-my-2 divide-y">{row('Indicado por', 'Blog Exemplo')}{row('Comissão', <span className="tnum">2%</span>)}{row('Observações', <span className="text-muted-foreground">Veio do evento de setembro.</span>)}</dl>
        </Card>
        <div className="lg:col-span-2"><CompanyImageCard name="Tech Notícias" image={clientImage} setImage={setClientImage} staff /></div>
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

/* ---------- Grupos, comissão e metas (avant-web#58) ---------- */

const usd0 = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
const pctShort = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 })
const MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
type GoalTemplate = { id: string; name: string; months: number[] }
const GOAL_TEMPLATES: GoalTemplate[] = [
  { id: 'padrao', name: 'Meta padrão', months: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3500, 4000] },
  { id: 'trafego', name: 'Meta tráfego 2026', months: [4000, 4000, 4200, 4200, 4500, 4500, 4800, 4800, 5000, 5000, 6000, 7000] },
]
const COMPANY_DEFAULTS = { commission: 2.5, goal: 'padrao' }
type GoalMode = 'per_member' | 'split'
type ProtoGroup = { id: string; name: string; desc: string; members: string[]; commission: number | null; goal: string | null; mode: GoalMode; status: 'active' | 'inactive'; lastLeft?: string }
const INITIAL_GROUPS: ProtoGroup[] = [
  { id: 'trafego', name: 'Tráfego pago', desc: 'Campanhas no Facebook Ads e no Google Ads.', members: ['ana@blogexemplo.com'], commission: 3, goal: 'trafego', mode: 'per_member', status: 'active' },
  { id: 'conteudo', name: 'Conteúdo', desc: 'Redação e SEO dos três sites.', members: ['carla@blogexemplo.com'], commission: null, goal: null, mode: 'split', status: 'active' },
  { id: 'parcerias', name: 'Parcerias', desc: 'Afiliados e publiposts.', members: [], commission: 4, goal: 'padrao', mode: 'per_member', status: 'inactive', lastLeft: 'Bruno Costa saiu da Empresa em 20/10/2026' },
]
const CURRENT_MONTH = 9

function goalName(id: string | null) { return GOAL_TEMPLATES.find((g) => g.id === (id ?? COMPANY_DEFAULTS.goal))?.name ?? '' }
function goalValue(id: string | null) { return GOAL_TEMPLATES.find((g) => g.id === (id ?? COMPANY_DEFAULTS.goal))?.months[CURRENT_MONTH] ?? 0 }
function pctText(v: number) { return `${pctShort.format(v)}%` }

/** Origem do valor: mostra se veio da pessoa, do grupo ou da Empresa. */
function Origin({ from }: { from: 'member' | 'group' | 'company' }) {
  const label = { member: 'definido para a pessoa', group: 'do grupo', company: 'padrão da Empresa' }[from]
  return <span className="text-[13px] text-muted-foreground">{label}</span>
}

/** Ícone da Empresa: a imagem enviada ou a inicial do nome sobre a cor da Empresa. */
function CompanyIcon({ name, image, size = 20 }: { name: string; image?: string | null; size?: number }) {
  if (image) return <img src={image} alt="" className="shrink-0 rounded-[5px] object-cover ring-1 ring-inset ring-foreground/10" style={{ width: size, height: size }} />
  return <span className="inline-flex shrink-0 items-center justify-center rounded-[5px] bg-primary font-semibold text-primary-foreground" style={{ width: size, height: size, fontSize: Math.max(10, size * 0.45) }}>{name.trim()[0]?.toUpperCase()}</span>
}

const SAMPLE_LOGO = `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#F4E9D8"/><circle cx="32" cy="36" r="16" fill="#C2410C"/><path d="M22 22c4-8 16-8 20 0" stroke="#166534" stroke-width="5" fill="none" stroke-linecap="round"/></svg>')}`

/** Abas da Equipe: Membros, Convites e Papéis ficam na tela da equipe; Grupos tem a sua. */
function TeamTabs({ current, go, counts }: { current: 'members' | 'pending' | 'roles' | 'groups'; go: (s: Screen) => void; counts: Record<string, number> }) {
  return (
    <div className="flex min-w-0 max-w-full overflow-x-auto rounded-md border bg-card p-0.5" role="tablist" aria-label="Equipe">
      {([['members', 'Membros'], ['pending', 'Convites pendentes'], ['groups', 'Grupos'], ['roles', 'Papéis']] as const).map(([k, l]) => (
        <button key={k} role="tab" aria-selected={current === k} onClick={() => go(k === 'groups' ? 'grupos' : 'equipe')} className={cn('h-8 whitespace-nowrap rounded-[4px] px-3 text-[13px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', current === k ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground')}>
          {l} <span className="tnum text-muted-foreground">{counts[k]}</span>
        </button>
      ))}
    </div>
  )
}

/** Escolha do modo da meta: por funcionário ou dividida pelo grupo. */
function GoalModeToggle({ value, onChange }: { value: GoalMode; onChange: (v: GoalMode) => void }) {
  return (
    <div className="flex flex-wrap rounded-md border bg-card p-0.5" role="radiogroup" aria-label="Como a meta vale">
      {([['per_member', 'Meta por funcionário'], ['split', 'Meta dividida pelos funcionários do grupo']] as const).map(([k, l]) => (
        <button key={k} type="button" role="radio" aria-checked={value === k} onClick={() => onChange(k)} className={cn('h-8 rounded-[4px] px-3 text-left text-[13px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', value === k ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground')}>{l}</button>
      ))}
    </div>
  )
}

/** Campos de comissão e meta do grupo, com "herdar da Empresa" quando vazio. */
function CompensationFields({ commission, setCommission, goal, setGoal, mode, setMode, people }: { commission: string; setCommission: (v: string) => void; goal: string; setGoal: (v: string) => void; mode: GoalMode; setMode: (v: GoalMode) => void; people: number }) {
  const value = goalValue(goal === 'inherit' ? null : goal)
  const share = mode === 'split' && people > 0 ? value / people : value
  const commissionNumber = Number(commission.replace(',', '.'))
  const commissionErr = commission !== '' && (Number.isNaN(commissionNumber) || commissionNumber <= 0 || commissionNumber > 100) ? 'Use um número entre 0 e 100.' : ''
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="grp-commission" label="Comissão" error={commissionErr} hint={commission === '' ? `Vazio: herda o padrão da Empresa (${pctText(COMPANY_DEFAULTS.commission)}).` : 'Sobre a receita menos o revshare da Groone e os custos, nos sites de cada pessoa.'}>
          <div className="relative max-w-[180px]"><Input id="grp-commission" inputMode="decimal" className="h-10 pr-8 tnum" placeholder={pctShort.format(COMPANY_DEFAULTS.commission)} value={commission} onChange={(e) => setCommission(e.target.value)} aria-invalid={!!commissionErr} /><span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[14px] text-muted-foreground">%</span></div>
        </Field>
        <Field id="grp-goal" label="Modelo de meta" hint={`${MONTHS[CURRENT_MONTH]}/2026: ${usd0.format(value)} para o grupo inteiro ou para cada pessoa, conforme a escolha abaixo.`}>
          <Select value={goal} onValueChange={setGoal}>
            <SelectTrigger id="grp-goal" className="h-10"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="inherit">Herdar da Empresa ({goalName(null)})</SelectItem>
              {GOAL_TEMPLATES.map((g) => <SelectItem key={g.id} value={g.id}>{g.name}</SelectItem>)}
            </SelectContent>
          </Select>
        </Field>
      </div>
      <div className="grid gap-2">
        <span className="text-[13px] font-medium text-muted-foreground">Como a meta vale</span>
        <GoalModeToggle value={mode} onChange={setMode} />
        <p className="text-[13px] text-muted-foreground tnum">
          {mode === 'per_member' ? `Cada pessoa do grupo tem ${usd0.format(value)} em ${MONTHS[CURRENT_MONTH].toLowerCase()}.` : `${usd0.format(value)} dividido por ${people} ${people === 1 ? 'pessoa' : 'pessoas'}: ${usd0.format(share)} para cada uma em ${MONTHS[CURRENT_MONTH].toLowerCase()}.`}
        </p>
      </div>
    </div>
  )
}

/** Diálogo Novo grupo: nome, pessoas (pelo menos uma) e, para quem pode, comissão e meta. */
function NewGroupDialog({ open, onOpenChange, members, groups, onCreate }: { open: boolean; onOpenChange: (o: boolean) => void; members: Member[]; groups: ProtoGroup[]; onCreate: (g: ProtoGroup) => void }) {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [picked, setPicked] = useState<string[]>([])
  const [q, setQ] = useState('')
  const [commission, setCommission] = useState('')
  const [goal, setGoal] = useState('inherit')
  const [mode, setMode] = useState<GoalMode>('per_member')
  const people = members.filter((m) => m.state !== 'pending' && `${m.name} ${m.email}`.toLowerCase().includes(q.toLowerCase()))
  const groupOf = (email: string) => groups.find((g) => g.members.includes(email))
  const dupe = groups.some((g) => g.name.toLowerCase() === name.trim().toLowerCase())
  const nameErr = dupe ? 'Já existe um grupo com esse nome.' : ''
  const ready = name.trim() !== '' && !dupe && picked.length > 0
  const reset = () => { setName(''); setDesc(''); setPicked([]); setQ(''); setCommission(''); setGoal('inherit'); setMode('per_member') }
  const create = () => {
    if (!ready) return
    onCreate({ id: name.trim().toLowerCase().replace(/\s+/g, '-'), name: name.trim(), desc: desc.trim(), members: picked, commission: commission === '' ? null : Number(commission.replace(',', '.')), goal: goal === 'inherit' ? null : goal, mode, status: 'active' })
    reset()
  }
  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) reset(); onOpenChange(o) }}>
      <DialogContent className="max-h-[92dvh] gap-5 overflow-y-auto sm:max-w-[640px]">
        <DialogHeader>
          <DialogTitle>Novo grupo</DialogTitle>
          <DialogDescription>Um grupo junta pessoas da equipe para dividir comissão e meta. Ele nasce com pelo menos uma pessoa e cada pessoa fica em um grupo só.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field id="grp-name" label="Nome" error={nameErr}><Input id="grp-name" className="h-10" placeholder="Tráfego pago" value={name} onChange={(e) => setName(e.target.value)} aria-invalid={!!nameErr} /></Field>
          <Field id="grp-desc" label="Descrição (opcional)"><Input id="grp-desc" className="h-10" placeholder="O que o grupo faz" value={desc} onChange={(e) => setDesc(e.target.value)} /></Field>
        </div>
        <div className="grid gap-2">
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-[13px] font-medium text-muted-foreground">Pessoas</span>
            <span className={cn('tnum text-[13px]', picked.length === 0 ? 'text-muted-foreground' : 'text-foreground')}>{picked.length} {picked.length === 1 ? 'escolhida' : 'escolhidas'}</span>
          </div>
          <div className="relative"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input aria-label="Buscar pessoas" className="h-9 pl-9" placeholder="Buscar pelo nome ou e-mail" value={q} onChange={(e) => setQ(e.target.value)} /></div>
          <ul className="scroll-thin max-h-[30dvh] divide-y overflow-y-auto rounded-md border">
            {people.map((m) => {
              const other = groupOf(m.email)
              const checked = picked.includes(m.email)
              return (
                <li key={m.email}>
                  <label className={cn('flex items-center gap-3 px-3 py-2.5 text-[14px]', other ? 'cursor-not-allowed opacity-60' : 'cursor-pointer hover:bg-muted')}>
                    <input type="checkbox" className="size-4 accent-[hsl(var(--foreground))]" disabled={!!other} checked={checked} onChange={() => setPicked(checked ? picked.filter((p) => p !== m.email) : [...picked, m.email])} />
                    <Avatar name={m.name} size={28} />
                    <span className="min-w-0 flex-1"><span className="block truncate font-medium">{m.name}</span><span className="block truncate text-[13px] text-muted-foreground">{m.state === 'owner' ? 'Dono' : m.role}</span></span>
                    {other && <span className="whitespace-nowrap text-[13px] text-muted-foreground">Em {other.name}</span>}
                  </label>
                </li>
              )
            })}
          </ul>
          <p className="text-[13px] text-muted-foreground">Convites pendentes não aparecem: a pessoa entra no grupo depois de aceitar.</p>
        </div>
        <div className="grid gap-3 border-t pt-5">
          <div><h3 className="text-[16px] font-semibold tracking-[-0.015em]">Comissão e meta</h3><p className="text-[13px] text-muted-foreground">Só quem tem a permissão de comissão e metas vê esta parte.</p></div>
          <CompensationFields commission={commission} setCommission={setCommission} goal={goal} setGoal={setGoal} mode={mode} setMode={setMode} people={Math.max(picked.length, 1)} />
        </div>
        <DialogFooter className="items-center gap-3 sm:justify-between">
          <p className="text-[13px] text-muted-foreground">{picked.length === 0 ? 'Escolha pelo menos uma pessoa para criar o grupo.' : 'Pronto para criar.'}</p>
          <div className="flex gap-2"><Button variant="outline" onClick={() => onOpenChange(false)}>Cancelar</Button><Button disabled={!ready} onClick={create}>Criar grupo</Button></div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

/** Equipe › Grupos: lista com pessoas, comissão, meta e situação. */
function GroupsScreen({ t, go, members, groups, setGroups, openGroup }: { t: T; go: (s: Screen) => void; members: Member[]; groups: ProtoGroup[]; setGroups: (g: ProtoGroup[]) => void; openGroup: (id: string) => void }) {
  const [creating, setCreating] = useState(false)
  const active = members.filter((m) => m.state !== 'pending')
  const counts = { members: active.length, pending: members.length - active.length, groups: groups.length, roles: ROLES.length }
  const nameOf = (email: string) => members.find((m) => m.email === email)?.name ?? email
  const loose = active.filter((m) => !groups.some((g) => g.members.includes(m.email)))
  return (
    <>
      <PageHeader title={t('team.title')} sub={t('team.sub')} actions={<Button onClick={() => setCreating(true)}><Plus />Novo grupo</Button>} />
      <Body>
        <div className="flex flex-wrap items-center gap-3"><TeamTabs current="groups" go={go} counts={counts} /></div>
        <Table min={820}>
          <thead><tr><th className={th}>Grupo</th><th className={th}>Pessoas</th><th className={th}>Comissão</th><th className={th}>Meta de {MONTHS[CURRENT_MONTH].toLowerCase()}</th><th className={th}>Situação</th><th className={cn(th, 'w-16')}><span className="sr-only">Abrir</span></th></tr></thead>
          <tbody>
            {groups.map((g) => (
              <tr key={g.id} className="hover:bg-muted">
                <td className={td}><button className="font-medium hover:underline" onClick={() => openGroup(g.id)}>{g.name}</button><div className="max-w-[32ch] truncate text-[13px] text-muted-foreground">{g.desc}</div></td>
                <td className={td}>{g.members.length === 0 ? <span className="text-[13px] text-muted-foreground">Ninguém</span> : (
                  <div className="flex items-center gap-2"><div className="flex -space-x-2">{g.members.slice(0, 3).map((e) => <span key={e} className="rounded-full ring-2 ring-card"><Avatar name={nameOf(e)} size={24} /></span>)}</div><span className="tnum text-[13px] text-muted-foreground">{g.members.length}</span></div>
                )}</td>
                <td className={td}><div className="tnum">{pctText(g.commission ?? COMPANY_DEFAULTS.commission)}</div><Origin from={g.commission === null ? 'company' : 'group'} /></td>
                <td className={td}><div className="tnum">{usd0.format(goalValue(g.goal))}<span className="text-muted-foreground">{g.mode === 'split' ? ' ÷ grupo' : ' por pessoa'}</span></div><div className="text-[13px] text-muted-foreground">{goalName(g.goal)}{g.goal === null && ' · padrão da Empresa'}</div></td>
                <td className={td}>{g.status === 'active' ? <Status tone="ok">Ativo</Status> : <Status tone="neutral">Inativo</Status>}</td>
                <td className={td}><Button variant="ghost" size="sm" onClick={() => openGroup(g.id)}>Abrir</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
        {loose.length > 0 && (
          <p className="text-[13px] text-muted-foreground">Sem grupo: {loose.map((m) => m.name).join(', ')}. Quem está sem grupo usa a comissão e a meta padrão da Empresa (<button className="text-link hover:underline" onClick={() => go('configuracoes')}>Configurações</button>).</p>
        )}
      </Body>
      <NewGroupDialog open={creating} onOpenChange={setCreating} members={members} groups={groups} onCreate={(g) => { setGroups([...groups, g]); setCreating(false); toast.success(`Grupo ${g.name} criado`, { description: `${g.members.length} ${g.members.length === 1 ? 'pessoa' : 'pessoas'}.` }) }} />
    </>
  )
}

/** Página do grupo: pessoas (o último não sai), comissão e meta, e o estado inativo. */
function GroupScreen({ t, go, members, groups, setGroups, groupId, openMember }: { t: T; go: (s: Screen) => void; members: Member[]; groups: ProtoGroup[]; setGroups: (g: ProtoGroup[]) => void; groupId: string; openMember: () => void }) {
  const group = groups.find((g) => g.id === groupId) ?? groups[0]
  const [adding, setAdding] = useState(false)
  const [pick, setPick] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [commission, setCommission] = useState(group.commission === null ? '' : pctShort.format(group.commission))
  const [goal, setGoal] = useState(group.goal ?? 'inherit')
  const [mode, setMode] = useState<GoalMode>(group.mode)
  const update = (patch: Partial<ProtoGroup>) => setGroups(groups.map((g) => (g.id === group.id ? { ...g, ...patch } : g)))
  const nameOf = (email: string) => members.find((m) => m.email === email)
  const free = members.filter((m) => m.state !== 'pending' && !groups.some((g) => g.members.includes(m.email)))
  const last = group.members.length === 1
  const add = () => {
    if (!pick) return
    update({ members: [...group.members, pick], status: 'active' })
    toast.success(`${nameOf(pick)?.name} entrou no grupo`, { description: group.status === 'inactive' ? 'O grupo voltou a ficar ativo.' : undefined })
    setPick(''); setAdding(false)
  }
  return (
    <>
      <PageHeader title={group.name} sub={group.desc}
        back={<button onClick={() => go('grupos')} className="inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft className="h-3.5 w-3.5" />{t('team.title')} · Grupos</button>}
        actions={<>
          {group.status === 'active' && <Button onClick={() => setAdding(true)} disabled={free.length === 0}><Plus />Adicionar pessoa</Button>}
          <DropdownMenu><DropdownMenuTrigger asChild><Button variant="outline" size="icon" aria-label="Mais ações"><MoreHorizontal /></Button></DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48"><DropdownMenuItem>Renomear</DropdownMenuItem><DropdownMenuSeparator /><DropdownMenuItem className="text-bad focus:text-bad" onSelect={() => setDeleting(true)}>Excluir grupo</DropdownMenuItem></DropdownMenuContent>
          </DropdownMenu>
        </>} />
      <Body>
        {group.status === 'inactive' && (
          <section className="flex flex-wrap items-center gap-4 rounded-lg border bg-card p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-muted-foreground"><Users className="h-4 w-4" /></span>
            <div className="min-w-0 flex-1"><div className="flex items-center gap-3"><span className="font-medium">Grupo inativo</span><Status tone="neutral">Sem pessoas</Status></div><p className="text-[14px] text-muted-foreground">{group.lastLeft}. Adicione alguém para reativar o grupo ou exclua-o. Comissão e meta ficam guardadas até lá.</p></div>
            <div className="flex gap-2"><Button size="sm" onClick={() => setAdding(true)} disabled={free.length === 0}>Adicionar pessoa</Button><Button size="sm" variant="outline" className="text-bad hover:text-bad" onClick={() => setDeleting(true)}>Excluir grupo</Button></div>
          </section>
        )}
        {group.members.length > 0 && (
          <Table min={600}>
            <thead><tr><th className={th}>Pessoa</th><th className={th}>{t('team.role')}</th><th className={th}>Comissão</th><th className={cn(th, 'w-12')}><span className="sr-only">Ações</span></th></tr></thead>
            <tbody>
              {group.members.map((email) => {
                const m = nameOf(email)!
                return (
                  <tr key={email} className="hover:bg-muted">
                    <td className={td}><div className="flex items-center gap-3"><Avatar name={m.name} /><div className="min-w-0"><button className="font-medium hover:underline" onClick={openMember}>{m.name}</button><div className="truncate text-[13px] text-muted-foreground">{m.email}</div></div></div></td>
                    <td className={td}>{m.state === 'owner' ? <Badge>Dono</Badge> : m.role}</td>
                    <td className={td}><span className="tnum">{pctText(group.commission ?? COMPANY_DEFAULTS.commission)}</span> <Origin from={group.commission === null ? 'company' : 'group'} /></td>
                    <td className={td}>
                      {last ? (
                        <span className="flex h-8 w-8 items-center justify-center text-muted-foreground" title="Um grupo precisa de pelo menos uma pessoa. Para tirar a última, exclua o grupo."><Lock className="h-4 w-4" /><span className="sr-only">Um grupo precisa de pelo menos uma pessoa. Para tirar a última, exclua o grupo.</span></span>
                      ) : (
                        <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="h-8 w-8" aria-label={`Ações para ${m.name}`}><MoreHorizontal /></Button></DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-52"><DropdownMenuItem onSelect={openMember}>Ver comissão e meta</DropdownMenuItem><DropdownMenuSeparator /><DropdownMenuItem className="text-bad focus:text-bad" onSelect={() => { update({ members: group.members.filter((x) => x !== email) }); toast(`${m.name} saiu do grupo`, { description: 'Agora usa a comissão e a meta padrão da Empresa.' }) }}>Tirar do grupo</DropdownMenuItem></DropdownMenuContent>
                        </DropdownMenu>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        )}
        {last && <p className="-mt-3 text-[13px] text-muted-foreground">Um grupo nunca fica vazio pela tela: para tirar a última pessoa, exclua o grupo.</p>}
        <Card title="Comissão e meta" desc="Quem está no grupo herda estes valores, menos quem tem um valor próprio na página da pessoa. Vazio herda o padrão da Empresa."
          footerNote="Só quem tem a permissão de comissão e metas vê e muda isto."
          footer={<Button size="sm" onClick={() => { update({ commission: commission === '' ? null : Number(commission.replace(',', '.')), goal: goal === 'inherit' ? null : goal, mode }); toast.success('Comissão e meta salvas', { description: 'Valem a partir de hoje; meses fechados não mudam.' }) }}>Salvar</Button>}>
          <CompensationFields commission={commission} setCommission={setCommission} goal={goal} setGoal={setGoal} mode={mode} setMode={setMode} people={Math.max(group.members.length, 1)} />
        </Card>
      </Body>
      <Dialog open={adding} onOpenChange={setAdding}>
        <DialogContent><DialogHeader><DialogTitle>Adicionar pessoa a {group.name}</DialogTitle><DialogDescription>Só aparece quem ainda não está em nenhum grupo: cada pessoa fica em um grupo só.</DialogDescription></DialogHeader>
          <Field id="grp-add" label="Pessoa"><Select value={pick} onValueChange={setPick}><SelectTrigger id="grp-add" className="h-10"><SelectValue placeholder="Escolha" /></SelectTrigger><SelectContent>{free.map((m) => <SelectItem key={m.email} value={m.email}>{m.name}</SelectItem>)}</SelectContent></Select></Field>
          <DialogFooter><Button variant="outline" onClick={() => setAdding(false)}>Cancelar</Button><Button disabled={!pick} onClick={add}>Adicionar</Button></DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={deleting} onOpenChange={setDeleting}>
        <DialogContent><DialogHeader><DialogTitle>Excluir {group.name}?</DialogTitle><DialogDescription>{group.members.length > 0 ? `${group.members.length} ${group.members.length === 1 ? 'pessoa volta' : 'pessoas voltam'} a usar a comissão e a meta padrão da Empresa.` : 'O grupo está sem pessoas.'} Comissões de meses já fechados não mudam.</DialogDescription></DialogHeader>
          <DialogFooter><Button variant="outline" onClick={() => setDeleting(false)}>Cancelar</Button><Button variant="destructive" onClick={() => { setGroups(groups.filter((g) => g.id !== group.id)); setDeleting(false); toast(`Grupo ${group.name} excluído`); go('grupos') }}>Excluir grupo</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

/** Página da pessoa: grupo, comissão e meta que valem e de onde vêm, com exceção opcional. */
function MemberScreen({ t, go, groups, openGroup }: { t: T; go: (s: Screen) => void; groups: ProtoGroup[]; openGroup: (id: string) => void }) {
  const person = INITIAL_MEMBERS[1]
  const group = groups.find((g) => g.members.includes(person.email))
  const [own, setOwn] = useState(false)
  const [ownCommission, setOwnCommission] = useState('')
  const [ownGoal, setOwnGoal] = useState('inherit')
  const groupCommission = group?.commission ?? COMPANY_DEFAULTS.commission
  const commissionFrom: 'member' | 'group' | 'company' = own && ownCommission !== '' ? 'member' : group?.commission != null ? 'group' : 'company'
  const commissionValue = commissionFrom === 'member' ? Number(ownCommission.replace(',', '.')) : groupCommission
  const goalId = own && ownGoal !== 'inherit' ? ownGoal : group?.goal ?? null
  const goalFrom: 'member' | 'group' | 'company' = own && ownGoal !== 'inherit' ? 'member' : group?.goal != null ? 'group' : 'company'
  const mode = goalFrom === 'member' ? 'per_member' : group?.mode ?? 'per_member'
  const goalAmount = mode === 'split' && group ? goalValue(goalId) / group.members.length : goalValue(goalId)
  const row = (label: string, value: React.ReactNode, from?: React.ReactNode) => <div className="grid grid-cols-[140px_1fr] gap-3 py-3 text-[14px] sm:grid-cols-[180px_1fr_auto]"><dt className="text-muted-foreground">{label}</dt><dd className="min-w-0 tnum">{value}</dd>{from && <dd className="col-start-2 sm:col-start-auto">{from}</dd>}</div>
  return (
    <>
      <PageHeader title={person.name} sub={`${person.role} · ${person.email}`}
        back={<button onClick={() => go('equipe')} className="inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft className="h-3.5 w-3.5" />{t('team.title')}</button>} />
      <Body className="lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <Card title="Grupo" desc="Cada pessoa fica em um grupo só. Trocar de grupo muda a comissão e a meta herdadas a partir de hoje."
          footer={<Button size="sm" variant="outline" onClick={() => group && openGroup(group.id)}>Abrir o grupo</Button>}>
          <div className="flex items-center gap-3">{group ? <><span className="font-medium">{group.name}</span><span className="text-[13px] text-muted-foreground">{group.members.length} {group.members.length === 1 ? 'pessoa' : 'pessoas'}</span></> : <span className="text-muted-foreground">Sem grupo</span>}</div>
        </Card>
        <Card title="O que vale para esta pessoa" desc={`Em ${MONTHS[CURRENT_MONTH].toLowerCase()}/2026, nos sites atribuídos a ${person.name.split(' ')[0]}.`}>
          <dl className="-my-3 divide-y">
            {row('Comissão', pctText(commissionValue), <Origin from={commissionFrom} />)}
            {row('Meta', <>{usd0.format(goalAmount)} <span className="text-muted-foreground">· {goalName(goalId)}{mode === 'split' && group ? ` ÷ ${group.members.length}` : ''}</span></>, <Origin from={goalFrom} />)}
          </dl>
        </Card>
        <Card className="lg:col-span-2" title="Valor próprio" desc="Use só quando esta pessoa foge da regra do grupo. O valor próprio vence o grupo e o padrão da Empresa."
          footerNote="Só quem tem a permissão de comissão e metas vê e muda isto."
          footer={own ? <><Button size="sm" variant="outline" onClick={() => { setOwn(false); setOwnCommission(''); setOwnGoal('inherit') }}>Voltar a herdar</Button><Button size="sm" onClick={() => toast.success('Valor próprio salvo')}>Salvar</Button></> : <Button size="sm" variant="outline" onClick={() => setOwn(true)}>Definir valor próprio</Button>}>
          {own ? (
            <div className="grid gap-4 md:grid-cols-2">
              <Field id="own-commission" label="Comissão" hint={`Vazio: herda ${pctText(groupCommission)} ${group?.commission != null ? 'do grupo' : 'da Empresa'}.`}>
                <div className="relative max-w-[180px]"><Input id="own-commission" inputMode="decimal" className="h-10 pr-8 tnum" placeholder={pctShort.format(groupCommission)} value={ownCommission} onChange={(e) => setOwnCommission(e.target.value)} /><span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[14px] text-muted-foreground">%</span></div>
              </Field>
              <Field id="own-goal" label="Modelo de meta" hint="Com valor próprio, a meta é sempre da pessoa, não dividida.">
                <Select value={ownGoal} onValueChange={setOwnGoal}><SelectTrigger id="own-goal" className="h-10"><SelectValue /></SelectTrigger>
                  <SelectContent><SelectItem value="inherit">Herdar do grupo</SelectItem>{GOAL_TEMPLATES.map((g) => <SelectItem key={g.id} value={g.id}>{g.name}</SelectItem>)}</SelectContent>
                </Select>
              </Field>
            </div>
          ) : <p className="text-[14px] text-muted-foreground">Nenhum: {person.name.split(' ')[0]} herda tudo do grupo.</p>}
        </Card>
      </Body>
    </>
  )
}

/** Configurações › Comissão e metas: padrão da Empresa e modelos de meta mensais. */
function CompensationSettings({ groups }: { groups: ProtoGroup[] }) {
  const [commission, setCommission] = useState(pctShort.format(COMPANY_DEFAULTS.commission))
  const [goal, setGoal] = useState(COMPANY_DEFAULTS.goal)
  const [editing, setEditing] = useState<GoalTemplate | null>(null)
  const using = (id: string) => groups.filter((g) => (g.goal ?? COMPANY_DEFAULTS.goal) === id).length
  return (
    <>
      <Card title="Padrão da Empresa" desc="Vale para quem está sem grupo e para os grupos que deixam comissão ou meta em branco."
        footerNote="Comissão sobre a receita menos o revshare da Groone e os custos, nos sites de cada pessoa." footer={<Button size="sm" onClick={() => toast.success('Padrão salvo')}>Salvar</Button>}>
        <div className="grid gap-4 md:grid-cols-2">
          <Field id="def-commission" label="Comissão"><div className="relative max-w-[180px]"><Input id="def-commission" inputMode="decimal" className="h-10 pr-8 tnum" value={commission} onChange={(e) => setCommission(e.target.value)} /><span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[14px] text-muted-foreground">%</span></div></Field>
          <Field id="def-goal" label="Modelo de meta"><Select value={goal} onValueChange={setGoal}><SelectTrigger id="def-goal" className="h-10"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="none">Sem meta</SelectItem>{GOAL_TEMPLATES.map((g) => <SelectItem key={g.id} value={g.id}>{g.name}</SelectItem>)}</SelectContent></Select></Field>
        </div>
      </Card>
      <section className="overflow-hidden rounded-lg border bg-card">
        <div className="p-6"><h2 className="text-[20px] font-semibold tracking-tight">Modelos de meta</h2><p className="mt-2 text-[14px] text-muted-foreground">Um valor por mês, em dólar. Grupos e pessoas escolhem um modelo.</p></div>
        <div className="relative overflow-x-auto border-t">
          <table className="w-full min-w-[560px] text-left text-[14px] [&_tbody_tr:last-child_td]:border-b-0">
            <thead><tr><th className={th}>Modelo</th><th className={cn(th, 'text-right')}>{MONTHS[CURRENT_MONTH]}/2026</th><th className={cn(th, 'text-right')}>Ano</th><th className={cn(th, 'text-right')}>Grupos</th><th className={cn(th, 'w-20')}><span className="sr-only">Editar</span></th></tr></thead>
            <tbody>{GOAL_TEMPLATES.map((g) => (
              <tr key={g.id}><td className={cn(td, 'font-medium')}>{g.name}{g.id === COMPANY_DEFAULTS.goal && <span className="ml-2"><Badge>Padrão</Badge></span>}</td><td className={cn(td, 'text-right tnum')}>{usd0.format(g.months[CURRENT_MONTH])}</td><td className={cn(td, 'text-right tnum text-muted-foreground')}>{usd0.format(g.months.reduce((s, v) => s + v, 0))}</td><td className={cn(td, 'text-right tnum')}>{using(g.id)}</td><td className={cn(td, 'text-right')}><Button variant="ghost" size="sm" onClick={() => setEditing(g)}>Editar</Button></td></tr>
            ))}</tbody>
          </table>
        </div>
        <div className="flex justify-end border-t bg-muted px-6 py-3"><Button size="sm" variant="outline" className="bg-card" onClick={() => setEditing({ id: 'novo', name: '', months: Array(12).fill(0) })}><Plus />Novo modelo</Button></div>
      </section>
      <Dialog open={editing !== null} onOpenChange={(o) => !o && setEditing(null)}>
        <DialogContent className="sm:max-w-[560px]"><DialogHeader><DialogTitle>{editing?.id === 'novo' ? 'Novo modelo de meta' : `Editar ${editing?.name}`}</DialogTitle><DialogDescription>Valor do mês em dólar. Mudar um mês já fechado não refaz a comissão dele.</DialogDescription></DialogHeader>
          <Field id="tpl-name" label="Nome"><Input id="tpl-name" className="h-10" defaultValue={editing?.name} placeholder="Meta 2027" /></Field>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">{MONTHS.map((m, i) => <Field key={m} id={`tpl-${i}`} label={m}><Input id={`tpl-${i}`} inputMode="numeric" className="h-10 tnum" defaultValue={editing?.months[i] || ''} placeholder="0" /></Field>)}</div>
          <DialogFooter><Button variant="outline" onClick={() => setEditing(null)}>Cancelar</Button><Button onClick={() => { setEditing(null); toast.success('Modelo salvo') }}>Salvar</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

/** Envio da imagem da Empresa: prévia, trocar e remover. Serve ao cliente e à equipe Groone. */
function CompanyImageCard({ name, image, setImage, staff }: { name: string; image: string | null; setImage: (v: string | null) => void; staff?: boolean }) {
  const [err, setErr] = useState('')
  const pick = (file: File | undefined) => {
    if (!file) return
    if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) { setErr('Use uma imagem PNG, JPEG ou WebP.'); return }
    if (file.size > 2 * 1024 * 1024) { setErr(`A imagem tem ${(file.size / 1024 / 1024).toFixed(1).replace('.', ',')} MB. Use uma de até 2 MB.`); return }
    setErr(''); setImage(URL.createObjectURL(file))
    toast.success('Imagem trocada', { description: staff ? `O cliente vê na auditoria que a Groone trocou.` : 'Aparece para todos da Empresa.' })
  }
  return (
    <Card title="Imagem da Empresa" desc={staff ? `Aparece para ${name} no seletor de Empresas e para a Groone na lista de clientes. Fica na auditoria do cliente como troca feita pela Groone.` : 'Aparece no seletor de Empresas, para todos da Empresa, e para a Groone na lista de clientes.'}
      footerNote={err ? <span className="text-bad">{err}</span> : 'PNG, JPEG ou WebP até 2 MB. Cortamos em quadrado de 256 × 256.'}
      footer={<>
        {image && <Button size="sm" variant="outline" onClick={() => { setImage(null); toast('Imagem removida', { description: 'Volta a inicial do nome.' }) }}>Remover</Button>}
        <Button size="sm" asChild><label className="cursor-pointer">{image ? 'Trocar imagem' : 'Enviar imagem'}<input type="file" accept="image/png,image/jpeg,image/webp" className="sr-only" onChange={(e) => pick(e.target.files?.[0])} /></label></Button>
      </>}>
      <div className="flex items-center gap-4">
        <CompanyIcon name={name} image={image} size={64} />
        <div className="grid gap-2 text-[13px] text-muted-foreground">
          <span>Como aparece no seletor:</span>
          <span className="flex items-center gap-2 text-[14px] font-medium text-foreground"><CompanyIcon name={name} image={image} size={20} />{name}</span>
        </div>
      </div>
    </Card>
  )
}

/* ---------- Relatórios (construtor como o do HubSpot) ---------- */

type Kind = 'money' | 'int' | 'pct'
type Source = 'gam' | 'visits'
type FieldDef = { key: string; label: string; kind: Kind; sources: Source[]; hint?: string }
const R_METRICS: FieldDef[] = [
  { key: 'revenue', label: 'Receita', kind: 'money', sources: ['gam'] },
  { key: 'impressions', label: 'Impressões', kind: 'int', sources: ['gam'] },
  { key: 'clicks', label: 'Cliques', kind: 'int', sources: ['gam'] },
  { key: 'ad_requests', label: 'Requisições', kind: 'int', sources: ['gam'] },
  { key: 'ecpm', label: 'eCPM', kind: 'money', sources: ['gam'] },
  { key: 'ctr', label: 'CTR', kind: 'pct', sources: ['gam'] },
  { key: 'active_view', label: 'Visibilidade', kind: 'pct', sources: ['gam'] },
  { key: 'fill_rate', label: 'Taxa de preenchimento', kind: 'pct', sources: ['gam'] },
  { key: 'page_views', label: 'Page views', kind: 'int', sources: ['visits'] },
  { key: 'page_rpm', label: 'RPM por página', kind: 'money', sources: ['gam', 'visits'], hint: 'Receita do GAM ÷ page views × 1.000' },
]
type DimDef = { key: string; label: string; only?: Source; hint?: string }
const R_DIMENSIONS: DimDef[] = [
  { key: 'date', label: 'Data' },
  { key: 'week', label: 'Semana' },
  { key: 'month', label: 'Mês' },
  { key: 'site', label: 'Site' },
  { key: 'network', label: 'Network' },
  { key: 'country', label: 'País' },
  { key: 'device', label: 'Dispositivo', only: 'gam', hint: 'Não existe nas page views' },
  { key: 'ad_unit', label: 'Ad unit', only: 'gam', hint: 'Não existe nas page views' },
  { key: 'hour', label: 'Hora', only: 'visits', hint: 'Só com page views' },
]
const DIM_VALUES: Record<string, string[]> = {
  site: ['blogexemplo.com', 'receitas.blogexemplo.com', 'viagens.blogexemplo.com'],
  network: ['Blog Exemplo Principal', 'Blog Exemplo Receitas'],
  country: ['Brasil', 'Portugal', 'Estados Unidos', 'Angola', 'Moçambique'],
  device: ['Celular', 'Computador', 'Tablet'],
  ad_unit: ['topo_728x90', 'lateral_300x250', 'meio_artigo', 'rodape_fixo', 'intersticial'],
  hour: Array.from({ length: 24 }, (_, h) => `${String(h).padStart(2, '0')}h`),
  week: ['29/09', '06/10', '13/10', '20/10'],
  month: ['Agosto', 'Setembro', 'Outubro'],
}

type CustomDef = { key: string; name: string; formula: string; kind: Kind; decimals: number; description?: string }
const INITIAL_CUSTOMS: CustomDef[] = [
  { key: 'rpm_por_requisicao', name: 'RPM por requisição', formula: 'revenue / ad_requests * 1000', kind: 'money', decimals: 2, description: 'Quanto cada mil requisições rendem.' },
]

type ChartKind = 'table' | 'line' | 'bar' | 'area' | 'pie' | 'kpi' | 'funnel'
const CHARTS: { key: ChartKind; label: string; rule: string }[] = [
  { key: 'table', label: 'Tabela', rule: 'Qualquer combinação' },
  { key: 'line', label: 'Linha', rule: '1 dimensão, ou 2 com uma métrica' },
  { key: 'bar', label: 'Barras', rule: '1 dimensão, ou 2 com uma métrica' },
  { key: 'area', label: 'Área', rule: '1 dimensão, ou 2 com uma métrica' },
  { key: 'pie', label: 'Pizza', rule: '1 métrica e 1 dimensão' },
  { key: 'kpi', label: 'KPI', rule: '1 métrica e nenhuma dimensão' },
  { key: 'funnel', label: 'Funil', rule: '2 ou mais métricas e nenhuma dimensão' },
]
function chartAllowed(chart: ChartKind, metrics: number, dims: number) {
  if (chart === 'line' || chart === 'bar' || chart === 'area') return dims === 1 || (dims === 2 && metrics === 1)
  if (chart === 'pie') return metrics === 1 && dims === 1
  if (chart === 'kpi') return metrics === 1 && dims === 0
  if (chart === 'funnel') return metrics >= 2 && dims === 0
  return true
}

type Visibility = 'private' | 'company' | 'roles'
type ScaleMode = 'green_red' | 'red_green'
type MetricStyle = { color?: string; scale?: { mode: ScaleMode; from: number; to: number } }
const NEON = [
  { key: 'lime', label: 'Verde neon', value: '#39FF14' },
  { key: 'cyan', label: 'Ciano', value: '#00E5FF' },
  { key: 'magenta', label: 'Magenta', value: '#FF2BD6' },
  { key: 'violet', label: 'Violeta', value: '#8B5CFF' },
  { key: 'orange', label: 'Laranja', value: '#FF7A00' },
  { key: 'yellow', label: 'Amarelo', value: '#FFE600' },
  { key: 'red', label: 'Vermelho', value: '#FF1744' },
]
const SCALES: { key: ScaleMode; label: string; desc: string }[] = [
  { key: 'green_red', label: 'Começa verde, fica vermelho', desc: 'Para o que é melhor baixo, como custo.' },
  { key: 'red_green', label: 'Começa vermelho, fica verde', desc: 'Para o que é melhor alto, como receita.' },
]
function scaleHue(scale: NonNullable<MetricStyle['scale']>, value: number) {
  const span = scale.to - scale.from
  const ratio = span === 0 ? (value >= scale.to ? 1 : 0) : Math.min(1, Math.max(0, (value - scale.from) / span))
  return scale.mode === 'green_red' ? 135 * (1 - ratio) : 135 * ratio
}
type RFilter = { field: string; values: string[] }
type ReportDraft = {
  id: string | null; name: string; description: string; metrics: string[]; dims: string[]; filters: RFilter[]
  period: PeriodKey; compare: boolean; chart: ChartKind; stacked: boolean; limit: number
  visibility: Visibility; roles: string[]; owner: string; updated: string
  styles: Record<string, MetricStyle>
}
const ME = 'Pedro Henrique'
const blank = (): ReportDraft => ({ id: null, name: 'Relatório sem nome', description: '', metrics: ['revenue'], dims: ['date'], filters: [], period: 'last_30_days', compare: false, chart: 'line', stacked: false, limit: 100, visibility: 'private', roles: [], owner: ME, updated: 'Agora', styles: {} })
const INITIAL_REPORTS: ReportDraft[] = [
  { ...blank(), id: 'r1', name: 'Receita por site', metrics: ['revenue', 'impressions', 'ecpm'], dims: ['site'], chart: 'table', visibility: 'company', updated: 'Hoje, 10:12', styles: { ecpm: { scale: { mode: 'red_green', from: 2, to: 4.5 } } } },
  { ...blank(), id: 'r2', name: 'RPM por requisição no mês', metrics: ['custom.rpm_por_requisicao', 'ecpm'], dims: ['date'], period: 'this_month', chart: 'line', compare: true, visibility: 'private', updated: 'Ontem, 18:40', styles: { 'custom.rpm_por_requisicao': { color: '#FF2BD6' }, ecpm: { color: '#00E5FF' } } },
  { ...blank(), id: 'r3', name: 'Top ad units', metrics: ['revenue'], dims: ['ad_unit'], chart: 'bar', limit: 5, visibility: 'roles', roles: ['Gestor de tráfego'], owner: 'Ana Souza', updated: '24/10/2026' },
  { ...blank(), id: 'r4', name: 'Receita do mês', metrics: ['revenue'], dims: [], period: 'this_month', chart: 'kpi', compare: true, visibility: 'company', owner: 'João Lima', updated: '20/10/2026', styles: { revenue: { scale: { mode: 'red_green', from: 2000, to: 5000 } } } },
]
const TEMPLATES: (Omit<ReportDraft, 'id' | 'owner' | 'updated'> & { key: string; desc: string })[] = [
  { ...blank(), key: 'revenue_by_site', name: 'Receita por site', desc: 'Receita, impressões e eCPM de cada site nos últimos 30 dias.', metrics: ['revenue', 'impressions', 'ecpm'], dims: ['site'], chart: 'table' },
  { ...blank(), key: 'ecpm_by_day', name: 'eCPM por dia', desc: 'Como o eCPM andou dia a dia.', metrics: ['ecpm'], dims: ['date'], chart: 'line' },
  { ...blank(), key: 'top_ad_units', name: 'Top ad units', desc: 'Os 10 ad units que mais renderam.', metrics: ['revenue', 'impressions'], dims: ['ad_unit'], chart: 'bar', limit: 10 },
  { ...blank(), key: 'revenue_by_country', name: 'Receita por país', desc: 'De onde vem a receita.', metrics: ['revenue'], dims: ['country'], chart: 'pie' },
  { ...blank(), key: 'page_rpm_by_site', name: 'RPM por página por site', desc: 'Quanto cada mil page views rendem em cada site.', metrics: ['page_rpm', 'page_views', 'revenue'], dims: ['site'], chart: 'table' },
  { ...blank(), key: 'page_views_by_hour', name: 'Page views por hora', desc: 'Os horários de mais visita, ontem.', metrics: ['page_views'], dims: ['hour'], period: 'yesterday', chart: 'line' },
]
const VIS_LABEL: Record<Visibility, string> = { private: 'Só eu', company: 'Empresa inteira', roles: 'Papéis escolhidos' }
const CHART_LABEL = Object.fromEntries(CHARTS.map((c) => [c.key, c.label])) as Record<ChartKind, string>

function metricDef(key: string, customs: CustomDef[]): { label: string; kind: Kind; custom: boolean } {
  if (key.startsWith('custom.')) {
    const c = customs.find((x) => `custom.${x.key}` === key)
    return { label: c?.name ?? key, kind: c?.kind ?? 'int', custom: true }
  }
  const m = R_METRICS.find((x) => x.key === key)!
  return { label: m.label, kind: m.kind, custom: false }
}
function metricSources(key: string, customs: CustomDef[]): Source[] {
  if (!key.startsWith('custom.')) return R_METRICS.find((m) => m.key === key)?.sources ?? ['gam']
  const c = customs.find((x) => `custom.${x.key}` === key)
  const vars = c ? formulaVars(c.formula) : []
  return vars.some((v) => v === 'page_views') ? ['gam', 'visits'] : ['gam']
}
function usesVisits(metrics: string[], customs: CustomDef[]) { return metrics.some((m) => metricSources(m, customs).includes('visits')) }
function onlyVisits(metrics: string[], customs: CustomDef[]) { return metrics.length > 0 && metrics.every((m) => metricSources(m, customs).every((s) => s === 'visits')) }

function hash(text: string) { let h = 7; for (const ch of text) h = (h * 31 + ch.charCodeAt(0)) % 100003; return h }
function sampleValue(metric: string, row: string, kind: Kind) {
  const f = 0.55 + (hash(metric + row) % 900) / 1000
  if (kind === 'pct') return 30 + f * 40
  if (kind === 'money') return metric.includes('rpm') || metric === 'ecpm' ? 2 + f * 3 : 4200 * f
  return Math.round(182000 * f)
}
const TIME_DIMS = ['date', 'week', 'month', 'hour']
const SPLIT_COLORS = ['#00E5FF', '#FF2BD6', '#39FF14', '#FF7A00', '#8B5CFF', '#FFE600', '#FF1744']
const MAX_SERIES = 10
function dimValues(draft: ReportDraft, dim: string) {
  const days = PERIODS.find(([k]) => k === draft.period)![2]
  const values = dim === 'date' ? series(days, 1, 1).map((p) => p.day) : DIM_VALUES[dim] ?? []
  const filter = draft.filters.find((f) => f.field === dim)
  return (filter ? values.filter((v) => filter.values.includes(v)) : values).slice(0, TIME_DIMS.includes(dim) ? undefined : draft.limit)
}
/** O eixo do gráfico (a dimensão de tempo, se houver) e a que divide em séries. */
function axisSplit(draft: ReportDraft): { axis: string | null; split: string | null } {
  if (draft.dims.length < 2) return { axis: draft.dims[0] ?? null, split: null }
  const time = draft.dims.find((d) => TIME_DIMS.includes(d))
  const axis = time ?? draft.dims[0]
  return { axis, split: draft.dims.find((d) => d !== axis) ?? null }
}
/** A chave de uma combinação, na ordem das dimensões escolhidas. */
function comboKey(draft: ReportDraft, values: Record<string, string>) { return draft.dims.map((d) => values[d]).join(' · ') }
function dimRows(draft: ReportDraft) {
  const { axis } = axisSplit(draft)
  return axis ? dimValues(draft, axis) : ['Total']
}
/** Todas as combinações das dimensões, como a API devolve (uma linha por combinação). */
function comboRows(draft: ReportDraft): Record<string, string>[] {
  return draft.dims.reduce<Record<string, string>[]>((rows, dim) => rows.flatMap((row) => dimValues(draft, dim).map((v) => ({ ...row, [dim]: v }))), [{}])
}

function formulaVars(formula: string) { return [...new Set(formula.match(/custom\.[a-z0-9_]+|[a-z_][a-z0-9_]*/g) ?? [])] }
function checkFormula(formula: string, customs: CustomDef[], self?: string): string | null {
  if (!formula.trim()) return 'Escreva uma fórmula.'
  const known = new Set([...R_METRICS.map((m) => m.key), ...customs.filter((c) => c.key !== self).map((c) => `custom.${c.key}`)])
  let depth = 0
  let expectOperand = true
  const re = /\s*(custom\.[a-z0-9_]+|[a-z_][a-z0-9_]*|\d+(?:[.,]\d+)?|[-+*/()]|\S)/gy
  let match: RegExpExecArray | null
  while ((match = re.exec(formula))) {
    const token = match[1]
    const at = match.index + match[0].length - token.length + 1
    if (/^[a-z_]|^custom\./.test(token)) {
      if (!known.has(token)) return `Métrica desconhecida "${token}" na posição ${at}.`
      if (!expectOperand) return `Falta um operador antes de "${token}" na posição ${at}.`
      expectOperand = false
    } else if (/^\d/.test(token)) {
      if (!expectOperand) return `Falta um operador antes de "${token}" na posição ${at}.`
      expectOperand = false
    } else if (token === '(') {
      if (!expectOperand) return `Falta um operador antes de "(" na posição ${at}.`
      depth++
    } else if (token === ')') {
      if (expectOperand || depth === 0) return `Parêntese ")" sobrando na posição ${at}.`
      depth--
    } else if ('+-*/'.includes(token)) {
      if (expectOperand && token !== '-') return `Falta uma métrica antes de "${token}" na posição ${at}.`
      expectOperand = true
    } else return `Caractere "${token}" não é aceito (posição ${at}).`
    if (re.lastIndex >= formula.length) break
  }
  if (depth > 0) return 'Falta fechar um parêntese.'
  if (expectOperand) return 'A fórmula termina num operador.'
  return null
}
function evaluate(formula: string, values: Record<string, string>): number | null {
  try {
    const expr = formula.replace(/custom\.[a-z0-9_]+|[a-z_][a-z0-9_]*/g, (v) => {
      const n = Number((values[v] ?? '').replace(',', '.'))
      return values[v] && Number.isFinite(n) ? `(${n})` : 'NaN'
    }).replace(/(\d),(\d)/g, '$1.$2')
    const result = Function(`"use strict";return (${expr})`)() as number
    return Number.isFinite(result) ? result : null
  } catch { return null }
}

function ReportsScreen({ reports, setReports, open, openTemplate }: { reports: ReportDraft[]; setReports: (r: ReportDraft[]) => void; open: (id: string | null) => void; openTemplate: (key: string) => void }) {
  const [tab, setTab] = useState<'all' | 'mine' | 'shared' | 'templates'>('all')
  const [query, setQuery] = useState('')
  const [removing, setRemoving] = useState<ReportDraft | null>(null)
  const visible = reports
    .filter((r) => tab === 'all' || (tab === 'mine' ? r.owner === ME : r.owner !== ME))
    .filter((r) => r.name.toLowerCase().includes(query.trim().toLowerCase()))
  const counts = { all: reports.length, mine: reports.filter((r) => r.owner === ME).length, shared: reports.filter((r) => r.owner !== ME).length, templates: TEMPLATES.length }
  const duplicate = (r: ReportDraft) => {
    const copy = { ...r, id: `r${Date.now()}`, name: `${r.name} (cópia)`, owner: ME, visibility: 'private' as Visibility, roles: [], updated: 'Agora' }
    setReports([copy, ...reports])
    toast.success('Cópia criada', { description: 'A cópia é sua e começa privada.' })
  }
  const tabs = [['all', 'Todos'], ['mine', 'Meus'], ['shared', 'Compartilhados comigo'], ['templates', 'Modelos da Groone']] as const
  return (
    <>
      <PageHeader title="Relatórios" sub="Monte relatórios com as métricas do GAM, das page views e as suas, salve e compartilhe com a equipe."
        actions={<Button onClick={() => open(null)} className="h-9"><Plus className="h-4 w-4" />Criar relatório</Button>} />
      <Body>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1 rounded-md border bg-background p-0.5" role="tablist" aria-label="Filtro">
            {tabs.map(([k, l]) => (
              <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)} className={cn('h-8 rounded-[4px] px-3 text-[13px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', tab === k ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground')}>
                {l}<span className="ml-1.5 tnum text-muted-foreground">{counts[k]}</span>
              </button>
            ))}
          </div>
          {tab !== 'templates' && (
            <div className="relative w-full sm:w-[280px]">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar pelo nome" aria-label="Buscar relatório" className="h-9 pl-9" />
            </div>
          )}
        </div>
        {tab === 'templates' ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TEMPLATES.map((tpl) => (
              <section key={tpl.key} className="flex flex-col rounded-lg border bg-card p-5">
                <div className="flex items-center gap-2"><Badge>{CHART_LABEL[tpl.chart]}</Badge></div>
                <h2 className="mt-3 text-[16px] font-semibold tracking-tight">{tpl.name}</h2>
                <p className="mt-1 flex-1 text-[14px] text-muted-foreground">{tpl.desc}</p>
                <Button variant="outline" className="mt-4 h-9 self-start" onClick={() => openTemplate(tpl.key)}>Usar modelo</Button>
              </section>
            ))}
          </div>
        ) : visible.length === 0 ? (
          <Card pad><p className="text-[14px] text-muted-foreground">{query ? `Nenhum relatório com "${query}".` : 'Nenhum relatório aqui ainda. Comece por um modelo da Groone.'}</p></Card>
        ) : (
          <Table min={760}>
            <thead><tr><th className={th}>Nome</th><th className={th}>Visualização</th><th className={th}>Dono</th><th className={th}>Quem vê</th><th className={th}>Alterado</th><th className={cn(th, 'w-12')}><span className="sr-only">Ações</span></th></tr></thead>
            <tbody>
              {visible.map((r) => {
                const editable = r.owner === ME
                return (
                  <tr key={r.id} className="hover:bg-muted">
                    <td className={td}><button onClick={() => open(r.id)} className="text-left font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{r.name}</button></td>
                    <td className={td}><Badge>{CHART_LABEL[r.chart]}</Badge></td>
                    <td className={cn(td, 'whitespace-nowrap')}><span className="flex items-center gap-2"><Avatar name={r.owner} size={22} />{r.owner === ME ? 'Você' : r.owner}</span></td>
                    <td className={cn(td, 'whitespace-nowrap text-muted-foreground')}>{r.visibility === 'private' && <Lock className="mr-1.5 inline h-3.5 w-3.5" />}{r.visibility === 'roles' ? r.roles.join(', ') : VIS_LABEL[r.visibility]}</td>
                    <td className={cn(td, 'whitespace-nowrap text-muted-foreground')}>{r.updated}</td>
                    <td className={td}>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild><Button variant="ghost" size="icon" aria-label={`Ações de ${r.name}`}><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuItem onSelect={() => open(r.id)}>Abrir</DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => duplicate(r)}>Duplicar</DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => toast('Exportando CSV…')}>Exportar CSV</DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => toast('Exportando XLSX…')}>Exportar XLSX</DropdownMenuItem>
                          {editable && (<><DropdownMenuSeparator /><DropdownMenuItem className="text-bad focus:text-bad" onSelect={() => setRemoving(r)}>Apagar</DropdownMenuItem></>)}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        )}
      </Body>
      <Dialog open={!!removing} onOpenChange={(o) => !o && setRemoving(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Apagar "{removing?.name}"?</DialogTitle><DialogDescription>Quem tem acesso deixa de ver o relatório. Não dá para desfazer.</DialogDescription></DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setRemoving(null)}>Cancelar</Button>
            <Button variant="destructive" onClick={() => { setReports(reports.filter((r) => r.id !== removing?.id)); setRemoving(null); toast.success('Relatório apagado') }}>Apagar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

function ReportChart({ draft, customs }: { draft: ReportDraft; customs: CustomDef[] }) {
  const rows = dimRows(draft)
  const metrics = draft.metrics.map((m) => ({ key: m, ...metricDef(m, customs) }))
  if (!metrics.length) return <p className="py-16 text-center text-[14px] text-muted-foreground">Escolha pelo menos uma métrica na lista da esquerda.</p>
  if (!chartAllowed(draft.chart, metrics.length, draft.dims.length)) return <p className="py-16 text-center text-[14px] text-muted-foreground">{CHART_LABEL[draft.chart]} pede: {CHARTS.find((c) => c.key === draft.chart)!.rule.toLowerCase()}.</p>
  const first = metrics[0]
  const value = (m: string, row: string, kind: Kind) => sampleValue(m, row, kind)
  const colorOf = (key: string) => draft.styles[key]?.color
  if (draft.chart === 'kpi') {
    const now = value(first.key, 'total', first.kind)
    const scale = draft.styles[first.key]?.scale
    const kpiColor = scale ? `hsl(${scaleHue(scale, now)} 75% 42%)` : colorOf(first.key)
    return (
      <div className="py-10 text-center">
        <div className="text-[13px] font-medium text-muted-foreground">{first.label}</div>
        <div className="mt-2 text-[44px] font-semibold tracking-[-0.04em] tnum" style={{ color: kpiColor }}>{fmt(first.kind, now)}</div>
        {draft.compare && <div className="mt-2"><Delta now={now} before={value(first.key, 'prev', first.kind)} /></div>}
      </div>
    )
  }
  if (draft.chart === 'funnel') {
    const values = metrics.map((m, i) => Math.round(value(m.key, 'total', 'int') / (i + 1) ** 1.6))
    return (
      <ul className="grid gap-2 py-4">
        {metrics.map((m, i) => (
          <li key={m.key} className="grid grid-cols-[140px_1fr_auto] items-center gap-3 text-[13px]">
            <span className="truncate">{m.label}</span>
            <span className="flex justify-center"><span className="block h-8 rounded-sm bg-foreground" style={{ width: `${(values[i] / values[0]) * 100}%`, opacity: colorOf(m.key) ? 1 : 1 - i * 0.15, background: colorOf(m.key) }} /></span>
            <span className="w-24 text-right tnum">{int.format(values[i])}{i > 0 && <span className="block text-[12px] text-muted-foreground">{pct.format((values[i] / values[i - 1]) * 100)}%</span>}</span>
          </li>
        ))}
      </ul>
    )
  }
  if (draft.chart === 'pie') {
    const values = rows.map((r) => value(first.key, r, first.kind))
    const total = values.reduce((a, b) => a + b, 0) || 1
    let angle = -Math.PI / 2
    const arcs = values.map((v, i) => {
      const start = angle
      angle += (v / total) * Math.PI * 2
      const large = angle - start > Math.PI ? 1 : 0
      const p = (a: number, r: number) => `${100 + r * Math.cos(a)},${100 + r * Math.sin(a)}`
      return <path key={rows[i]} d={`M${p(start, 90)}A90,90 0 ${large} 1 ${p(angle, 90)}L${p(angle, 52)}A52,52 0 ${large} 0 ${p(start, 52)}Z`} className="fill-foreground stroke-card" strokeWidth={2} style={{ opacity: 1 - i * (0.7 / rows.length), fill: colorOf(first.key) }} />
    })
    return (
      <div className="flex flex-wrap items-center justify-center gap-8 py-4">
        <svg viewBox="0 0 200 200" className="h-[200px] w-[200px]" role="img" aria-label={`${first.label} por ${draft.dims[0]}`}>{arcs}</svg>
        <ul className="grid gap-1.5 text-[13px]">
          {rows.map((r, i) => <li key={r} className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-foreground" style={{ opacity: 1 - i * (0.7 / rows.length), background: colorOf(first.key) }} /><span className="min-w-0 flex-1 truncate">{r}</span><span className="tnum text-muted-foreground">{pct.format((values[i] / total) * 100)}%</span></li>)}
        </ul>
      </div>
    )
  }
  const { axis, split } = axisSplit(draft)
  if (split && axis && (draft.chart === 'line' || draft.chart === 'area' || draft.chart === 'bar')) {
    const axisValues = dimValues(draft, axis)
    const splitValues = dimValues(draft, split).slice(0, MAX_SERIES)
    const valueAt = (a: string, b: string) => value(first.key, comboKey(draft, { [axis]: a, [split]: b }), first.kind)
    const lines = splitValues.map((b) => axisValues.map((a) => valueAt(a, b)))
    const W = 960, H = 260, L = 56, R = 12, T = 12, B = 26
    const top = Math.max(...lines.flat()) * 1.1 || 1
    const y = (v: number) => T + (H - T - B) * (1 - v / top)
    const step = Math.max(1, Math.ceil(axisValues.length / 8))
    const splitLabel = R_DIMENSIONS.find((d) => d.key === split)?.label
    const legend = (
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-[13px] text-muted-foreground">
        <span className="font-medium text-foreground">{first.label} por {splitLabel?.toLowerCase()}:</span>
        {splitValues.map((b, i) => <span key={b} className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm" style={{ background: SPLIT_COLORS[i % SPLIT_COLORS.length] }} />{b}</span>)}
      </div>
    )
    if (draft.chart === 'bar') {
      const group = (W - L - R) / axisValues.length
      const barWidth = Math.max(2, (group * 0.8) / splitValues.length)
      return (
        <div>
          <svg viewBox={`0 0 ${W} ${H}`} className="h-[260px] w-full" role="img" aria-label={`${first.label} por ${axis} e ${split}`}>
            {[0, 0.5, 1].map((f) => <g key={f}><line x1={L} x2={W - R} y1={y(top * f)} y2={y(top * f)} className="stroke-border" /><text x={L - 8} y={y(top * f) + 4} textAnchor="end" className="fill-muted-foreground text-[11px] tnum">{compact(first.kind, top * f)}</text></g>)}
            {axisValues.map((a, i) => (
              <g key={a}>
                {splitValues.map((b, s) => <rect key={b} x={L + i * group + group * 0.1 + s * barWidth} y={y(lines[s][i])} width={barWidth - 1} height={y(0) - y(lines[s][i])} rx={1.5} style={{ fill: SPLIT_COLORS[s % SPLIT_COLORS.length] }} />)}
                {i % step === 0 && <text x={L + i * group + group / 2} y={H - 8} textAnchor="middle" className="fill-muted-foreground text-[11px] tnum">{a}</text>}
              </g>
            ))}
          </svg>
          {legend}
        </div>
      )
    }
    const x = (i: number) => L + (axisValues.length === 1 ? (W - L - R) / 2 : (i * (W - L - R)) / (axisValues.length - 1))
    const path = (vals: number[]) => vals.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join('')
    return (
      <div>
        <svg viewBox={`0 0 ${W} ${H}`} className="h-[260px] w-full" role="img" aria-label={`${first.label} por ${axis} e ${split}`}>
          {[0, 0.5, 1].map((f) => <g key={f}><line x1={L} x2={W - R} y1={y(top * f)} y2={y(top * f)} className="stroke-border" /><text x={L - 8} y={y(top * f) + 4} textAnchor="end" className="fill-muted-foreground text-[11px] tnum">{compact(first.kind, top * f)}</text></g>)}
          {axisValues.map((a, i) => i % step === 0 && <text key={a} x={x(i)} y={H - 8} textAnchor="middle" className="fill-muted-foreground text-[11px] tnum">{a}</text>)}
          {lines.map((vals, s) => (
            <g key={splitValues[s]}>
              {draft.chart === 'area' && <path d={`${path(vals)}L${x(vals.length - 1)},${y(0)}L${x(0)},${y(0)}Z`} style={{ fill: SPLIT_COLORS[s % SPLIT_COLORS.length], fillOpacity: 0.1 }} />}
              <path d={path(vals)} fill="none" strokeWidth={2.25} strokeLinejoin="round" style={{ stroke: SPLIT_COLORS[s % SPLIT_COLORS.length] }} />
            </g>
          ))}
        </svg>
        {legend}
      </div>
    )
  }
  if (draft.chart === 'bar') {
    return <div className="py-2"><Bars color={colorOf(first.key)} items={rows.map((r) => [r, Math.round(value(first.key, r, first.kind))] as const)} /></div>
  }
  if (draft.chart === 'line' || draft.chart === 'area') {
    const W = 960, H = 240, L = 56, R = 12, T = 12, B = 26
    const all = metrics.map((m) => rows.map((r) => value(m.key, r, m.kind)))
    const max = Math.max(...all.flat()) * 1.1 || 1
    const x = (i: number) => L + (rows.length === 1 ? (W - L - R) / 2 : (i * (W - L - R)) / (rows.length - 1))
    const y = (v: number) => T + (H - T - B) * (1 - v / max)
    const path = (vals: number[]) => vals.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join('')
    const step = Math.max(1, Math.ceil(rows.length / 8))
    return (
      <div>
        <svg viewBox={`0 0 ${W} ${H}`} className="h-[240px] w-full" role="img" aria-label="Gráfico do relatório">
          {[0, 0.5, 1].map((f) => <g key={f}><line x1={L} x2={W - R} y1={y(max * f)} y2={y(max * f)} className="stroke-border" /><text x={L - 8} y={y(max * f) + 4} textAnchor="end" className="fill-muted-foreground text-[11px] tnum">{compact(first.kind, max * f)}</text></g>)}
          {rows.map((r, i) => i % step === 0 && <text key={r} x={x(i)} y={H - 8} textAnchor="middle" className="fill-muted-foreground text-[11px] tnum">{r}</text>)}
          {all.map((vals, s) => (
            <g key={metrics[s].key} style={{ opacity: colorOf(metrics[s].key) ? 1 : 1 - s * 0.3 }}>
              {draft.chart === 'area' && <path d={`${path(vals)}L${x(vals.length - 1)},${y(0)}L${x(0)},${y(0)}Z`} className="fill-foreground/[0.08]" style={colorOf(metrics[s].key) ? { fill: colorOf(metrics[s].key), fillOpacity: 0.14 } : undefined} />}
              <path d={path(vals)} fill="none" className="stroke-foreground" strokeWidth={colorOf(metrics[s].key) ? 2.5 : 2} strokeDasharray={s && !colorOf(metrics[s].key) ? '5 4' : undefined} strokeLinejoin="round" style={{ stroke: colorOf(metrics[s].key) }} />
            </g>
          ))}
        </svg>
        {metrics.length > 1 && <div className="mt-2 flex flex-wrap gap-4 text-[13px] text-muted-foreground">{metrics.map((m, s) => <span key={m.key} className="flex items-center gap-1.5"><span className={cn('w-4 border-t-2 border-foreground', s && !colorOf(m.key) && 'border-dashed')} style={{ opacity: colorOf(m.key) ? 1 : 1 - s * 0.3, borderColor: colorOf(m.key) }} />{m.label}</span>)}</div>}
      </div>
    )
  }
  return null
}

function ReportTable({ draft, customs }: { draft: ReportDraft; customs: CustomDef[] }) {
  const rows = comboRows(draft)
  const metrics = draft.metrics.map((m) => ({ key: m, ...metricDef(m, customs) }))
  if (!metrics.length) return null
  const shown = rows.slice(0, 30)
  return (
    <>
    <Table min={480}>
      <thead><tr>{draft.dims.map((d) => <th key={d} className={th}>{R_DIMENSIONS.find((x) => x.key === d)?.label}</th>)}{metrics.map((m) => <th key={m.key} className={cn(th, 'text-right')}>{m.label}</th>)}</tr></thead>
      <tbody>
        {shown.map((row) => (
          <tr key={comboKey(draft, row) || 'total'} className="hover:bg-muted">
            {draft.dims.map((d) => <td key={d} className={cn(td, 'whitespace-nowrap font-medium')}>{row[d]}</td>)}
            {metrics.map((m) => {
              const v = sampleValue(m.key, draft.dims.length ? comboKey(draft, row) : 'Total', m.kind)
              const scale = draft.styles[m.key]?.scale
              return <td key={m.key} className={cn(td, 'text-right tnum whitespace-nowrap')} style={scale ? { background: `hsl(${scaleHue(scale, v)} 80% 45% / 0.18)` } : undefined}>{fmt(m.kind, v)}</td>
            })}
          </tr>
        ))}
      </tbody>
    </Table>
    {rows.length > shown.length && <p className="text-[13px] text-muted-foreground">Mostrando {shown.length} de {rows.length} linhas. A exportação traz todas.</p>}
    </>
  )
}

function PanelTitle({ children, action }: { children: React.ReactNode; action?: React.ReactNode }) {
  return <div className="flex items-center justify-between px-4 pb-1.5 pt-4"><h3 className="text-[12px] font-medium uppercase tracking-wide text-muted-foreground">{children}</h3>{action}</div>
}

function FieldItem({ label, picked, disabled, hint, badge, onClick }: { label: string; picked: boolean; disabled?: boolean; hint?: string; badge?: string; onClick: () => void }) {
  return (
    <button onClick={onClick} disabled={disabled} title={disabled ? hint : undefined} aria-pressed={picked}
      className={cn('flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-left text-[13px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        picked ? 'bg-secondary font-medium' : 'hover:bg-accent', disabled && 'cursor-not-allowed opacity-45 hover:bg-transparent')}>
      <span className={cn('flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border', picked && 'border-primary bg-primary text-primary-foreground')}>{picked && <Check className="h-3 w-3" />}</span>
      <span className="min-w-0 flex-1 truncate">{label}</span>
      {badge && <span className="text-[11px] text-muted-foreground">{badge}</span>}
      {disabled && hint && <span className="sr-only">{hint}</span>}
    </button>
  )
}

function CustomMetricDialog({ open, onOpenChange, customs, onSave }: { open: boolean; onOpenChange: (o: boolean) => void; customs: CustomDef[]; onSave: (c: CustomDef) => void }) {
  const [name, setName] = useState('')
  const [formula, setFormula] = useState('')
  const [kind, setKind] = useState<Kind>('money')
  const [decimals, setDecimals] = useState('2')
  const [sample, setSample] = useState<Record<string, string>>({ revenue: '1250', ad_requests: '480000', page_views: '96000', impressions: '310000' })
  const [cursor, setCursor] = useState(0)
  useEffect(() => { if (open) { setName(''); setFormula(''); setKind('money'); setDecimals('2') } }, [open])
  const error = formula ? checkFormula(formula, customs) : null
  const vars = formula && !error ? formulaVars(formula).filter((v) => !v.startsWith('custom.')) : []
  const nested = formula && !error ? formulaVars(formula).filter((v) => v.startsWith('custom.')) : []
  const resolved = (text: string): string => text.replace(/custom\.[a-z0-9_]+/g, (key) => `(${resolved(customs.find((c) => `custom.${c.key}` === key)?.formula ?? 'NaN')})`)
  const preview = formula && !error ? evaluate(resolved(formula), sample) : null
  const word = /[a-z_.0-9]*$/.exec(formula.slice(0, cursor))?.[0] ?? ''
  const options = word.length >= 1
    ? [...R_METRICS.map((m) => ({ key: m.key, label: m.label })), ...customs.map((c) => ({ key: `custom.${c.key}`, label: c.name }))].filter((o) => o.key.includes(word) || o.label.toLowerCase().includes(word)).slice(0, 6)
    : []
  const complete = (key: string) => {
    const before = formula.slice(0, cursor - word.length)
    const next = `${before}${key} ${formula.slice(cursor)}`
    setFormula(next)
    setCursor(before.length + key.length + 1)
  }
  const key = name.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')
  const canSave = !!name.trim() && !!formula && !error
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92dvh] overflow-y-auto sm:max-w-[760px]">
        <DialogHeader>
          <DialogTitle>Nova métrica</DialogTitle>
          <DialogDescription>Uma conta sobre as métricas que já existem. Ela fica disponível para toda a Empresa.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_280px]">
        <div className="grid content-start gap-5">
          <Field id="cm-name" label="Nome" hint={key ? `Na fórmula de outras métricas: custom.${key}` : undefined}>
            <Input id="cm-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="RPM por requisição" maxLength={80} />
          </Field>
          <div className="grid gap-2">
            <Label htmlFor="cm-formula" className="text-[13px] font-medium text-muted-foreground">Fórmula</Label>
            <div className="relative">
              <Textarea id="cm-formula" value={formula} rows={3} spellCheck={false} placeholder="revenue / ad_requests * 1000"
                onChange={(e) => { setFormula(e.target.value); setCursor(e.target.selectionStart) }}
                onKeyUp={(e) => setCursor(e.currentTarget.selectionStart)} onClick={(e) => setCursor(e.currentTarget.selectionStart)}
                aria-invalid={!!error} aria-describedby="cm-formula-msg" className={cn('font-mono text-[13px]', error && 'border-bad focus-visible:ring-bad')} />
              {options.length > 0 && (
                <ul className="absolute inset-x-0 top-full z-10 mt-1 overflow-hidden rounded-md border bg-popover py-1 shadow-md" role="listbox" aria-label="Métricas">
                  {options.map((o) => (
                    <li key={o.key}><button type="button" onMouseDown={(e) => { e.preventDefault(); complete(o.key) }} className="flex w-full items-center justify-between gap-3 px-3 py-1.5 text-left text-[13px] hover:bg-accent"><span>{o.label}</span><Code>{o.key}</Code></button></li>
                  ))}
                </ul>
              )}
            </div>
            <p id="cm-formula-msg" className={cn('text-[13px]', error ? 'text-bad' : 'text-muted-foreground')}>
              {error ?? (formula ? <span className="inline-flex items-center gap-1.5 text-ok"><Check className="h-3.5 w-3.5" />Fórmula válida</span> : 'Use + − × ÷ e parênteses. Comece a digitar o nome de uma métrica.')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field id="cm-kind" label="Formato">
              <Select value={kind} onValueChange={(v) => setKind(v as Kind)}>
                <SelectTrigger id="cm-kind" className="h-9"><SelectValue /></SelectTrigger>
                <SelectContent><SelectItem value="money">Dinheiro</SelectItem><SelectItem value="int">Número</SelectItem><SelectItem value="pct">Porcentagem</SelectItem></SelectContent>
              </Select>
            </Field>
            <Field id="cm-dec" label="Casas decimais"><Input id="cm-dec" type="number" min={0} max={6} value={decimals} onChange={(e) => setDecimals(e.target.value)} className="h-9" /></Field>
          </div>
        </div>
          <section className="self-start rounded-lg border bg-muted p-4">
            <h3 className="text-[14px] font-semibold">Prévia</h3>
            <p className="mt-1 text-[13px] text-muted-foreground">Informe valores de exemplo para conferir a conta. O cálculo é feito pelo Avant, igual ao dos relatórios.</p>
            {vars.length ? (
              <div className="mt-3 grid gap-2">
                {vars.map((v) => (
                  <label key={v} className="grid grid-cols-[1fr_140px] items-center gap-3 text-[13px]">
                    <span>{R_METRICS.find((m) => m.key === v)?.label} <Code>{v}</Code></span>
                    <Input value={sample[v] ?? ''} inputMode="decimal" onChange={(e) => setSample({ ...sample, [v]: e.target.value })} className="h-8 text-right tnum" aria-label={`Valor de ${v}`} />
                  </label>
                ))}
                {nested.length > 0 && <p className="text-[12px] text-muted-foreground">{nested.join(', ')} é calculada a partir desses valores.</p>}
                <div className="mt-2 flex items-baseline justify-between border-t pt-3">
                  <span className="text-[13px] text-muted-foreground">Resultado</span>
                  <span className="text-[20px] font-semibold tnum">{preview === null ? '—' : kind === 'pct' ? `${pct.format(preview * 100)}%` : kind === 'money' ? brl.format(preview) : new Intl.NumberFormat('pt-BR', { maximumFractionDigits: Number(decimals) || 0 }).format(preview)}</span>
                </div>
                {preview === null && <p className="text-[12px] text-muted-foreground">Sem resultado: falta um valor ou a conta divide por zero.</p>}
              </div>
            ) : <p className="mt-3 text-[13px] text-muted-foreground">Os campos aparecem quando a fórmula estiver válida.</p>}
          </section>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancelar</Button>
          <Button disabled={!canSave} onClick={() => onSave({ key, name: name.trim(), formula: formula.trim(), kind, decimals: Number(decimals) || 0 })}>Criar métrica</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function SaveDialog({ open, onOpenChange, draft, onSave }: { open: boolean; onOpenChange: (o: boolean) => void; draft: ReportDraft; onSave: (d: Pick<ReportDraft, 'name' | 'description' | 'visibility' | 'roles'>) => void }) {
  const [name, setName] = useState(draft.name)
  const [description, setDescription] = useState(draft.description)
  const [visibility, setVisibility] = useState<Visibility>(draft.visibility)
  const [roles, setRoles] = useState<string[]>(draft.roles)
  useEffect(() => { if (open) { setName(draft.name); setDescription(draft.description); setVisibility(draft.visibility); setRoles(draft.roles) } }, [open, draft])
  const invalid = !name.trim() || (visibility === 'roles' && roles.length === 0)
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader><DialogTitle>Salvar relatório</DialogTitle><DialogDescription>Cada pessoa vê só os dados dos sites que pode ver, mesmo num relatório compartilhado.</DialogDescription></DialogHeader>
        <div className="grid gap-4">
          <Field id="rs-name" label="Nome"><Input id="rs-name" value={name} onChange={(e) => setName(e.target.value)} maxLength={120} /></Field>
          <Field id="rs-desc" label="Descrição (opcional)"><Textarea id="rs-desc" value={description} onChange={(e) => setDescription(e.target.value)} rows={2} maxLength={500} /></Field>
          <div className="grid gap-2">
            <span className="text-[13px] font-medium text-muted-foreground">Quem vê</span>
            <RadioGroup value={visibility} onValueChange={(v) => setVisibility(v as Visibility)} className="gap-2">
              {([['private', 'Só eu', 'Ninguém mais vê, nem o dono da Empresa.'], ['company', 'Empresa inteira', 'Todos que podem ver relatórios.'], ['roles', 'Papéis escolhidos', 'Só quem tem um dos papéis.']] as const).map(([v, l, d]) => (
                <label key={v} className={cn('flex cursor-pointer items-start gap-3 rounded-md border p-3', visibility === v && 'border-primary')}>
                  <RadioGroupItem value={v} className="mt-0.5" />
                  <span><span className="block text-[14px] font-medium">{l}</span><span className="block text-[13px] text-muted-foreground">{d}</span></span>
                </label>
              ))}
            </RadioGroup>
            {visibility === 'roles' && (
              <div className="grid gap-1.5 pl-1 pt-1">
                {ROLES.map((r) => (
                  <label key={r.name} className="flex items-center gap-2 text-[14px]">
                    <input type="checkbox" checked={roles.includes(r.name)} onChange={(e) => setRoles(e.target.checked ? [...roles, r.name] : roles.filter((x) => x !== r.name))} className="h-4 w-4 accent-[hsl(var(--primary))]" />
                    {r.name}
                  </label>
                ))}
                {roles.length === 0 && <p className="text-[13px] text-bad">Escolha pelo menos um papel.</p>}
              </div>
            )}
            <p className="text-[13px] text-muted-foreground">Você e quem pode criar relatórios conseguem editar.</p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancelar</Button>
          <Button disabled={invalid} onClick={() => onSave({ name: name.trim(), description, visibility, roles: visibility === 'roles' ? roles : [] })}>Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function MetricStylePopover({ label, kind, style, disabled, onChange }: { label: string; kind: Kind; style: MetricStyle; disabled: boolean; onChange: (s: MetricStyle) => void }) {
  const scale = style.scale
  const swatch = scale ? `linear-gradient(90deg, hsl(${scale.mode === 'green_red' ? 135 : 0} 75% 45%), hsl(${scale.mode === 'green_red' ? 0 : 135} 75% 45%))` : style.color
  const unit = kind === 'money' ? 'R$' : kind === 'pct' ? '%' : ''
  return (
    <Popover>
      <PopoverTrigger disabled={disabled} className="inline-flex h-6 items-center gap-1.5 rounded-full px-2 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:hover:bg-transparent">
        <span className="h-3 w-3 rounded-full border" style={{ background: swatch ?? 'hsl(var(--foreground))' }} aria-hidden="true" />{label}
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[300px]">
        <h3 className="text-[14px] font-semibold">{label}</h3>
        <div className="mt-3 text-[12px] font-medium text-muted-foreground">Cor</div>
        <div className="mt-2 flex flex-wrap gap-2" role="radiogroup" aria-label="Cor">
          <button role="radio" aria-checked={!style.color} aria-label="Padrão" title="Padrão" onClick={() => onChange({ ...style, color: undefined })} className={cn('h-7 w-7 rounded-full border-2 bg-foreground', !style.color ? 'ring-2 ring-ring ring-offset-2 ring-offset-background' : 'border-transparent')} />
          {NEON.map((c) => (
            <button key={c.key} role="radio" aria-checked={style.color === c.value} aria-label={c.label} title={c.label} onClick={() => onChange({ ...style, color: c.value })}
              className={cn('h-7 w-7 rounded-full', style.color === c.value && 'ring-2 ring-ring ring-offset-2 ring-offset-background')} style={{ background: c.value, boxShadow: `0 0 10px ${c.value}80` }} />
          ))}
        </div>
        <div className="mt-4 text-[12px] font-medium text-muted-foreground">Aparência pelo valor</div>
        <div className="mt-2 grid gap-1.5">
          <label className="flex items-center gap-2 text-[13px]"><input type="radio" name={`scale-${label}`} checked={!scale} onChange={() => onChange({ ...style, scale: undefined })} className="accent-[hsl(var(--primary))]" />Nenhuma</label>
          {SCALES.map((m) => (
            <label key={m.key} className="flex items-start gap-2 text-[13px]">
              <input type="radio" name={`scale-${label}`} checked={scale?.mode === m.key} onChange={() => onChange({ ...style, scale: { mode: m.key, from: scale?.from ?? 0, to: scale?.to ?? 100 } })} className="mt-0.5 accent-[hsl(var(--primary))]" />
              <span><span className="flex items-center gap-2">{m.label}<span className="h-2 w-10 rounded-full" style={{ background: `linear-gradient(90deg, hsl(${m.key === 'green_red' ? 135 : 0} 75% 45%), hsl(${m.key === 'green_red' ? 0 : 135} 75% 45%))` }} /></span><span className="block text-[12px] text-muted-foreground">{m.desc}</span></span>
            </label>
          ))}
        </div>
        {scale && (
          <div className="mt-3 grid grid-cols-2 gap-3">
            <Field id={`from-${label}`} label={`${scale.mode === 'green_red' ? 'Verde' : 'Vermelho'} até ${unit}`.trim()}>
              <Input id={`from-${label}`} inputMode="decimal" value={scale.from} onChange={(e) => onChange({ ...style, scale: { ...scale, from: Number(e.target.value.replace(',', '.')) || 0 } })} className="h-8 tnum" />
            </Field>
            <Field id={`to-${label}`} label={`${scale.mode === 'green_red' ? 'Vermelho' : 'Verde'} a partir de ${unit}`.trim()}>
              <Input id={`to-${label}`} inputMode="decimal" value={scale.to} onChange={(e) => onChange({ ...style, scale: { ...scale, to: Number(e.target.value.replace(',', '.')) || 0 } })} className="h-8 tnum" />
            </Field>
            <p className="col-span-2 text-[12px] text-muted-foreground">Entre os dois valores a cor passa aos poucos. Vale na tabela e no KPI.</p>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}

function ReportBuilderScreen({ initial, customs, setCustoms, onBack, onSave }: { initial: ReportDraft; customs: CustomDef[]; setCustoms: (c: CustomDef[]) => void; onBack: () => void; onSave: (d: ReportDraft) => void }) {
  const [draft, setDraft] = useState<ReportDraft>(initial)
  const [search, setSearch] = useState('')
  const [creating, setCreating] = useState(false)
  const [saving, setSaving] = useState(false)
  const [dirty, setDirty] = useState(initial.id === null)
  const editable = draft.owner === ME
  const update = (patch: Partial<ReportDraft>) => { setDraft((d) => ({ ...d, ...patch })); setDirty(true) }
  const toggle = (list: string[], key: string) => (list.includes(key) ? list.filter((x) => x !== key) : [...list, key])
  const matches = (label: string, key: string) => !search.trim() || label.toLowerCase().includes(search.toLowerCase()) || key.includes(search.toLowerCase())
  const visits = usesVisits(draft.metrics, customs)
  const visitsOnly = onlyVisits(draft.metrics, customs)
  const dimDisabled = (d: DimDef) => (d.only === 'gam' && visits) || (d.only === 'visits' && !visitsOnly)
  const setMetrics = (metrics: string[]) => {
    const nextVisits = usesVisits(metrics, customs)
    const nextOnly = onlyVisits(metrics, customs)
    const dims = draft.dims.filter((key) => { const d = R_DIMENSIONS.find((x) => x.key === key)!; return !((d.only === 'gam' && nextVisits) || (d.only === 'visits' && !nextOnly)) })
    update({ metrics, dims, chart: chartAllowed(draft.chart, metrics.length, dims.length) ? draft.chart : 'table' })
  }
  const setDims = (dims: string[]) => update({ dims, chart: chartAllowed(draft.chart, draft.metrics.length, dims.length) ? draft.chart : 'table' })
  const filterable = draft.dims.filter((d) => DIM_VALUES[d] && d !== 'hour')
  const [filterField, setFilterField] = useState('site')
  return (
    <div className="flex min-h-[calc(100dvh-2.75rem)] flex-col bg-background">
      <header className="sticky top-11 z-20 flex flex-wrap items-center gap-3 border-b bg-background px-4 py-3">
        <Button variant="ghost" size="sm" onClick={onBack} className="-ml-1"><ArrowLeft className="h-4 w-4" />Relatórios</Button>
        <span className="h-5 w-px bg-border" aria-hidden="true" />
        <input value={draft.name} onChange={(e) => update({ name: e.target.value })} aria-label="Nome do relatório" disabled={!editable} maxLength={120}
          className="min-w-0 flex-1 rounded-md bg-transparent px-2 py-1 text-[18px] font-semibold tracking-tight hover:bg-accent focus-visible:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:hover:bg-transparent" />
        <span className="hidden text-[13px] text-muted-foreground sm:inline">{draft.id === null ? 'Ainda não salvo' : dirty ? 'Alterações não salvas' : `Salvo · ${VIS_LABEL[draft.visibility]}`}</span>
        <div className="ml-auto flex flex-wrap gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="outline" className="h-9">Exportar<ChevronsUpDown className="h-4 w-4" /></Button></DropdownMenuTrigger>
            <DropdownMenuContent align="end"><DropdownMenuItem onSelect={() => toast('Exportando CSV…')}>CSV</DropdownMenuItem><DropdownMenuItem onSelect={() => toast('Exportando XLSX…')}>XLSX (Excel)</DropdownMenuItem></DropdownMenuContent>
          </DropdownMenu>
          {draft.id !== null && <Button variant="outline" className="h-9" onClick={() => { onSave({ ...draft, id: null, name: `${draft.name} (cópia)`, owner: ME, visibility: 'private', roles: [] }); toast.success('Cópia salva', { description: 'A cópia é sua e começa privada.' }) }}><Copy className="h-4 w-4" />Salvar como cópia</Button>}
          {editable && <Button className="h-9" disabled={!draft.metrics.length} onClick={() => setSaving(true)}>Salvar</Button>}
        </div>
      </header>
      {!editable && <div className="border-b bg-muted px-4 py-2 text-[13px] text-muted-foreground">Relatório de {draft.owner}. Você pode ver, exportar e salvar uma cópia sua.</div>}
      <div className="grid flex-1 lg:grid-cols-[264px_minmax(0,1fr)_300px]">
        <aside className="border-b lg:border-b-0 lg:border-r" aria-label="Campos">
          <div className="p-3 pb-0">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar campos" aria-label="Buscar campos" className="h-9 pl-9" />
            </div>
          </div>
          <PanelTitle>Métricas</PanelTitle>
          <div className="grid gap-0.5 px-2">
            {R_METRICS.filter((m) => matches(m.label, m.key)).map((m) => (
              <FieldItem key={m.key} label={m.label} picked={draft.metrics.includes(m.key)} disabled={!editable} badge={m.sources.includes('visits') ? 'visitas' : undefined} onClick={() => setMetrics(toggle(draft.metrics, m.key))} />
            ))}
          </div>
          <PanelTitle action={<Button variant="ghost" size="sm" className="h-7 px-2 text-[13px]" onClick={() => setCreating(true)}><Plus className="h-3.5 w-3.5" />Nova</Button>}>Minhas métricas</PanelTitle>
          <div className="grid gap-0.5 px-2">
            {customs.filter((c) => matches(c.name, c.key)).map((c) => (
              <FieldItem key={c.key} label={c.name} picked={draft.metrics.includes(`custom.${c.key}`)} disabled={!editable} badge="ƒ" onClick={() => setMetrics(toggle(draft.metrics, `custom.${c.key}`))} />
            ))}
            {customs.length === 0 && <p className="px-2.5 py-1.5 text-[13px] text-muted-foreground">Crie contas como receita ÷ requisições.</p>}
          </div>
          <PanelTitle>Dimensões</PanelTitle>
          <div className="grid gap-0.5 px-2 pb-4">
            {R_DIMENSIONS.filter((d) => matches(d.label, d.key)).map((d) => (
              <FieldItem key={d.key} label={d.label} picked={draft.dims.includes(d.key)} disabled={!editable || dimDisabled(d)} hint={d.hint} badge={dimDisabled(d) ? d.hint : undefined} onClick={() => setDims(toggle(draft.dims, d.key))} />
            ))}
          </div>
        </aside>
        <main className="min-w-0 bg-muted">
          <div className="grid gap-4 p-4 sm:p-6">
            <div className="flex flex-wrap items-center gap-1.5">
              {draft.metrics.map((m) => (
                <span key={m} className="inline-flex h-7 items-center gap-1 rounded-full border bg-card pl-1 pr-1 text-[13px]">
                  <MetricStylePopover label={metricDef(m, customs).label} kind={metricDef(m, customs).kind} style={draft.styles[m] ?? {}} disabled={!editable}
                    onChange={(style) => update({ styles: { ...draft.styles, [m]: style } })} />
                  {editable && <button onClick={() => setMetrics(draft.metrics.filter((x) => x !== m))} aria-label={`Tirar ${metricDef(m, customs).label}`} className="rounded-full p-1 hover:bg-accent"><X className="h-3 w-3" /></button>}
                </span>
              ))}
              {editable && draft.metrics.length > 0 && <span className="px-1 text-[12px] text-muted-foreground">Clique numa métrica para escolher a cor e a aparência.</span>}
              {draft.dims.length > 0 && <span className="px-1 text-[13px] text-muted-foreground">por</span>}
              {draft.dims.map((d) => <span key={d} className="inline-flex h-7 items-center gap-1 rounded-full border border-dashed bg-card pl-3 pr-1 text-[13px]">{R_DIMENSIONS.find((x) => x.key === d)?.label}{editable && <button onClick={() => setDims(draft.dims.filter((x) => x !== d))} aria-label="Tirar dimensão" className="rounded-full p-1 hover:bg-accent"><X className="h-3 w-3" /></button>}</span>)}
            </div>
            {draft.chart !== 'table' && (
              <Card pad footerNote={`${PERIODS.find(([k]) => k === draft.period)![1]}${draft.compare ? ', comparando com o período anterior' : ''} · em R$, a sua moeda · só os sites que você vê`}>
                <ReportChart draft={draft} customs={customs} />
              </Card>
            )}
            {draft.chart !== 'table' && draft.chart !== 'kpi' && <h2 className="text-[14px] font-semibold">Dados</h2>}
            {draft.chart === 'table' && <p className="text-[13px] text-muted-foreground">{PERIODS.find(([k]) => k === draft.period)![1]} · em R$, a sua moeda · só os sites que você vê</p>}
            {draft.chart !== 'kpi' && <ReportTable draft={draft} customs={customs} />}
          </div>
        </main>
        <aside className="border-t lg:border-l lg:border-t-0" aria-label="Configuração">
          <PanelTitle>Visualização</PanelTitle>
          <div className="grid grid-cols-2 gap-1.5 px-4">
            {CHARTS.map((c) => {
              const ok = chartAllowed(c.key, draft.metrics.length, draft.dims.length)
              return (
                <button key={c.key} disabled={!ok || !editable} onClick={() => update({ chart: c.key })} aria-pressed={draft.chart === c.key} title={ok ? undefined : c.rule}
                  className={cn('rounded-md border px-2.5 py-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', draft.chart === c.key ? 'border-primary bg-secondary' : 'hover:bg-accent', !ok && 'cursor-not-allowed opacity-50 hover:bg-transparent')}>
                  <span className="block text-[13px] font-medium">{c.label}</span>
                  {!ok && <span className="block text-[11px] leading-tight text-muted-foreground">{c.rule}</span>}
                </button>
              )
            })}
          </div>
          {draft.dims.length === 2 && draft.metrics.length > 1 && <p className="mx-4 mt-2 text-[12px] text-muted-foreground">Com duas dimensões, linha, barras e área usam uma métrica só. A tabela mostra todas.</p>}
          {draft.dims.length > 2 && <p className="mx-4 mt-2 text-[12px] text-muted-foreground">Com mais de duas dimensões, só a tabela.</p>}
          {(draft.chart === 'bar' || draft.chart === 'area') && (
            <label className="mx-4 mt-3 flex items-center gap-2 text-[13px]"><input type="checkbox" checked={draft.stacked} onChange={(e) => update({ stacked: e.target.checked })} className="h-4 w-4 accent-[hsl(var(--primary))]" disabled={!editable} />Empilhar as séries</label>
          )}
          <PanelTitle>Período</PanelTitle>
          <div className="grid gap-2 px-4">
            <Select value={draft.period} onValueChange={(v) => update({ period: v as PeriodKey })} disabled={!editable}>
              <SelectTrigger className="h-9" aria-label="Período"><SelectValue /></SelectTrigger>
              <SelectContent>{PERIODS.map(([k, l]) => <SelectItem key={k} value={k}>{l}</SelectItem>)}<SelectItem value="custom" disabled>Datas fixas…</SelectItem></SelectContent>
            </Select>
            <label className="flex items-center gap-2 text-[13px]"><input type="checkbox" checked={draft.compare} onChange={(e) => update({ compare: e.target.checked })} className="h-4 w-4 accent-[hsl(var(--primary))]" disabled={!editable} />Comparar com o período anterior</label>
          </div>
          <PanelTitle>Filtros</PanelTitle>
          <div className="grid gap-2 px-4">
            {draft.filters.map((f) => (
              <div key={f.field} className="rounded-md border p-2.5 text-[13px]">
                <div className="flex items-center justify-between"><span className="font-medium">{R_DIMENSIONS.find((d) => d.key === f.field)?.label} é</span>{editable && <button onClick={() => update({ filters: draft.filters.filter((x) => x.field !== f.field) })} aria-label="Tirar filtro" className="rounded p-1 hover:bg-accent"><X className="h-3 w-3" /></button>}</div>
                <div className="mt-1.5 grid gap-1">
                  {DIM_VALUES[f.field].map((v) => (
                    <label key={v} className="flex items-center gap-2"><input type="checkbox" className="h-3.5 w-3.5 accent-[hsl(var(--primary))]" checked={f.values.includes(v)} disabled={!editable}
                      onChange={(e) => update({ filters: draft.filters.map((x) => x.field === f.field ? { ...x, values: e.target.checked ? [...x.values, v] : x.values.filter((y) => y !== v) } : x) })} /><span className="truncate">{v}</span></label>
                  ))}
                </div>
              </div>
            ))}
            {editable && (
              <div className="flex gap-2">
                <Select value={filterField} onValueChange={setFilterField}>
                  <SelectTrigger className="h-9 flex-1" aria-label="Campo do filtro"><SelectValue /></SelectTrigger>
                  <SelectContent>{['site', 'network', 'country', 'device', 'ad_unit'].filter((k) => !draft.filters.some((f) => f.field === k) && !(visits && (k === 'device' || k === 'ad_unit'))).map((k) => <SelectItem key={k} value={k}>{R_DIMENSIONS.find((d) => d.key === k)?.label}</SelectItem>)}</SelectContent>
                </Select>
                <Button variant="outline" className="h-9" onClick={() => !draft.filters.some((f) => f.field === filterField) && update({ filters: [...draft.filters, { field: filterField, values: DIM_VALUES[filterField].slice(0, 1) }] })}><Plus className="h-4 w-4" />Filtro</Button>
              </div>
            )}
            {filterable.length === 0 && draft.filters.length === 0 && <p className="text-[12px] text-muted-foreground">Filtre por site, network, país, dispositivo ou ad unit.</p>}
          </div>
          <PanelTitle>Linhas</PanelTitle>
          <div className="grid gap-2 px-4 pb-6">
            <Select value={String(draft.limit)} onValueChange={(v) => update({ limit: Number(v) })} disabled={!editable}>
              <SelectTrigger className="h-9" aria-label="Limite de linhas"><SelectValue /></SelectTrigger>
              <SelectContent>{[5, 10, 25, 100, 1000].map((n) => <SelectItem key={n} value={String(n)}>{n === 1000 ? 'Até 1.000 linhas' : `Top ${n}`}</SelectItem>)}</SelectContent>
            </Select>
            <p className="text-[12px] text-muted-foreground">Ordenado pela primeira métrica, do maior para o menor.</p>
          </div>
        </aside>
      </div>
      <CustomMetricDialog open={creating} onOpenChange={setCreating} customs={customs}
        onSave={(c) => { setCustoms([...customs, c]); setMetrics([...draft.metrics, `custom.${c.key}`]); setCreating(false); toast.success('Métrica criada', { description: `${c.name} já está no relatório.` }) }} />
      <SaveDialog open={saving} onOpenChange={setSaving} draft={draft}
        onSave={(patch) => { const saved = { ...draft, ...patch, id: draft.id ?? `r${Date.now()}`, updated: 'Agora' }; setDraft(saved); setDirty(false); setSaving(false); onSave(saved); toast.success('Relatório salvo') }} />
    </div>
  )
}

/* ---------- Comissão e metas da equipe Groone (core#73, core#109) ---------- */

type CommissionKind = 'created' | 'reactivated'
type CommissionTarget = 'client' | 'network' | 'site'
type CommissionRule = { id: string; kind: CommissionKind; target: CommissionTarget; percent: number; offsetDays: number; durationDays: number | null; transferTo: string | null }
type StaffRole = { id: string; name: string; rules: CommissionRule[]; goal: string | null; goalMode: GoalMode; people: string[] }
const STAFF_GOALS: GoalTemplate[] = [
  { id: 'externo', name: 'Comercial externo 2026', months: [12000, 12000, 12500, 12500, 13000, 13000, 14000, 14000, 15000, 15000, 16000, 18000] },
  { id: 'interno', name: 'Comercial interno 2026', months: [12000, 12000, 12000, 13000, 13000, 13000, 14000, 14000, 14000, 15000, 16000, 18000] },
]
const COMPANY_GOAL: GoalTemplate = { id: 'groone', name: 'Faturamento Groone 2026', months: [380000, 380000, 400000, 400000, 420000, 420000, 440000, 440000, 460000, 480000, 520000, 560000] }
const STAFF_ROLES: StaffRole[] = [
  { id: 'externo', name: 'Comercial externo', goal: 'externo', goalMode: 'per_member', people: ['Lucas Prado', 'Marina Alves'],
    rules: [{ id: 'r1', kind: 'created', target: 'client', percent: 5, offsetDays: 7, durationDays: 30, transferTo: 'interno' }] },
  { id: 'interno', name: 'Comercial interno', goal: 'interno', goalMode: 'split', people: ['Pedro Henrique', 'Júlia Santos', 'Rafael Souza'],
    rules: [
      { id: 'r2', kind: 'reactivated', target: 'client', percent: 10, offsetDays: 0, durationDays: 90, transferTo: null },
      { id: 'r3', kind: 'reactivated', target: 'network', percent: 5, offsetDays: 0, durationDays: 30, transferTo: null },
      { id: 'r4', kind: 'created', target: 'site', percent: 3, offsetDays: 0, durationDays: 90, transferTo: null },
    ] },
  { id: 'financeiro', name: 'Financeiro', goal: null, goalMode: 'per_member', people: ['Beatriz Lima'], rules: [] },
]
const KINDS: Record<CommissionKind, { label: string; hint: string }> = {
  created: { label: 'Cadastro', hint: 'Conta a partir da data em que o item foi cadastrado.' },
  reactivated: { label: 'Reativação', hint: 'Conta quando o item volta depois de 30 dias ou mais inativo.' },
}
const TARGETS: Record<CommissionTarget, { label: string; created: string; reactivated: string }> = {
  client: { label: 'Cliente', created: 'Cadastro do cliente. Conta a receita de todas as networks dele.', reactivated: 'O cliente volta para a Groone com as networks dele.' },
  network: { label: 'Network', created: 'Uma network nova num cliente que já está na Groone.', reactivated: 'Uma network que tinha saído volta, com o cliente ainda na Groone.' },
  site: { label: 'Site', created: 'Cadastro do site, do GAM ou à mão.', reactivated: 'Um site inativo ou arquivado volta.' },
}
/** Nome da regra, como "Reativação de network". */
const ruleName = (rule: Pick<CommissionRule, 'kind' | 'target'>) => `${KINDS[rule.kind].label} ${rule.target === 'client' ? 'do cliente' : rule.target === 'network' ? 'de network' : 'de site'}`
type CommissionStatus = 'draft' | 'validated' | 'issued' | 'paid'
const COMMISSION_STATUS: Record<CommissionStatus, [string, 'neutral' | 'ochre' | 'ok']> = { draft: ['Em aberto', 'ochre'], validated: ['Validada', 'neutral'], issued: ['Emitida', 'ok'], paid: ['Paga', 'ok'] }
const MY_WINDOWS = [
  { what: 'Receitas da Vó', target: 'Cliente', rule: 'Cadastro do cliente', start: '08/10/2026', end: '06/11/2026', percent: 5, month: 412.35 },
  { what: 'Portal Tech News', target: 'Cliente', rule: 'Cadastro do cliente', start: '15/10/2026', end: '13/11/2026', percent: 5, month: 188.9 },
  { what: 'Viagem Fácil', target: 'Cliente', rule: 'Cadastro do cliente', start: '21/09/2026', end: '20/10/2026', percent: 5, month: 96.4 },
]
const MY_HISTORY: { month: string; base: number; commission: number; deduction: number; adjustment: number; status: CommissionStatus }[] = [
  { month: 'Outubro 2026', base: 13953, commission: 697.65, deduction: 0, adjustment: 0, status: 'draft' },
  { month: 'Setembro 2026', base: 11820, commission: 591.0, deduction: 23.4, adjustment: 40, status: 'validated' },
  { month: 'Agosto 2026', base: 10410, commission: 520.5, deduction: 18.9, adjustment: 0, status: 'issued' },
]
type TeamRow = { name: string; role: string; revshare: number; commission: number; deduction: number; adjustment: number; status: CommissionStatus }
const TEAM: TeamRow[] = [
  { name: 'Lucas Prado', role: 'Comercial externo', revshare: 14210, commission: 591.0, deduction: 23.4, adjustment: 0, status: 'validated' },
  { name: 'Marina Alves', role: 'Comercial externo', revshare: 16890, commission: 812.2, deduction: 31.1, adjustment: 0, status: 'validated' },
  { name: 'Pedro Henrique', role: 'Comercial interno', revshare: 4980, commission: 402.1, deduction: 12.8, adjustment: 0, status: 'issued' },
  { name: 'Júlia Santos', role: 'Comercial interno', revshare: 5640, commission: 455.3, deduction: 14.0, adjustment: 0, status: 'validated' },
  { name: 'Rafael Souza', role: 'Comercial interno', revshare: 3210, commission: 260.85, deduction: 9.5, adjustment: 0, status: 'validated' },
]
const PERSON_WINDOWS = [
  { what: 'Receitas da Vó', rule: 'Cadastro do cliente', days: '08/09 a 30/09', base: 6120, percent: 5, commission: 306, deduction: 12.4 },
  { what: 'Viagem Fácil', rule: 'Cadastro do cliente', days: '21/09 a 30/09', base: 5700, percent: 5, commission: 285, deduction: 11.0 },
]
const DAY_OF_MONTH = 28
const DAYS_IN_MONTH = 31
const money = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD' })

/** A meta do mês de uma pessoa pelo papel: o valor inteiro ou dividido entre quem tem o papel. */
function personGoal(role: StaffRole) {
  const template = STAFF_GOALS.find((goal) => goal.id === role.goal)
  if (!template) return null
  const value = template.months[CURRENT_MONTH]
  return role.goalMode === 'split' ? value / Math.max(role.people.length, 1) : value
}
/** Projeção até o fim do mês pelo ritmo dos dias que já passaram. */
const projection = (done: number) => (done / (DAY_OF_MONTH - 1)) * DAYS_IN_MONTH

/** Barra de andamento da meta, com a marca de onde o mês deveria estar hoje. */
function GoalBar({ done, goal, label }: { done: number; goal: number; label: string }) {
  const share = Math.min(done / goal, 1)
  const expected = (DAY_OF_MONTH - 1) / DAYS_IN_MONTH
  const projected = projection(done)
  const ahead = share >= expected
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-[28px] font-semibold tracking-tight tnum">{pctText(Math.round((done / goal) * 1000) / 10)}</span>
        <span className="text-[13px] text-muted-foreground tnum">{usd0.format(done)} de {usd0.format(goal)}</span>
      </div>
      <div className="relative mt-3 h-2.5 rounded-full bg-secondary" role="img" aria-label={`${label}: ${Math.round(share * 100)}% da meta`}>
        <div className={cn('h-2.5 rounded-full', ahead ? 'bg-ok' : 'bg-ochre')} style={{ width: `${share * 100}%` }} />
        <div className="absolute -top-1 h-[18px] w-0.5 rounded bg-foreground/60" style={{ left: `${expected * 100}%` }} title="Onde o mês deveria estar hoje" />
      </div>
      <div className="mt-2 flex flex-wrap justify-between gap-2 text-[13px]">
        <Status tone={ahead ? 'ok' : 'ochre'}>{ahead ? 'No ritmo da meta' : 'Abaixo do ritmo da meta'}</Status>
        <span className="text-muted-foreground">Projeção no fim do mês: <span className="tnum text-foreground">{usd0.format(projected)}</span> ({pctText(Math.round((projected / goal) * 1000) / 10)})</span>
      </div>
    </div>
  )
}

/** Escolha em cartões, com título e explicação. */
function ChoiceCards<V extends string>({ name, value, options, onChange }: { name: string; value: V; options: { value: V; title: string; hint: string; disabled?: string }[]; onChange: (value: V) => void }) {
  return (
    <div role="radiogroup" aria-label={name} className={cn('grid gap-2', options.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2')}>
      {options.map((option) => (
        <label key={option.value} className={cn('rounded-md border p-3', option.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer', value === option.value && 'border-foreground')}>
          <span className="flex items-center gap-2 text-[14px] font-medium"><input type="radio" name={name} checked={value === option.value} disabled={!!option.disabled} onChange={() => onChange(option.value)} className="accent-[hsl(var(--foreground))]" />{option.title}</span>
          <span className="mt-1 block text-[12px] text-muted-foreground">{option.disabled ?? option.hint}</span>
        </label>
      ))}
    </div>
  )
}

/** Modal de uma regra de comissão: tipo, o que conta, percentual, prazos e transferência. */
function RuleDialog({ open, onOpenChange, role, roles, rule, onSave }: { open: boolean; onOpenChange: (open: boolean) => void; role: StaffRole; roles: StaffRole[]; rule: CommissionRule | null; onSave: (rule: CommissionRule) => void }) {
  const [kind, setKind] = useState<CommissionKind>(rule?.kind ?? 'created')
  const [target, setTarget] = useState<CommissionTarget>(rule?.target ?? 'client')
  const [percent, setPercent] = useState(rule ? pctShort.format(rule.percent) : '')
  const [offset, setOffset] = useState(String(rule?.offsetDays ?? 0))
  const [noEnd, setNoEnd] = useState(rule ? rule.durationDays === null : false)
  const [duration, setDuration] = useState(rule?.durationDays ? String(rule.durationDays) : '30')
  const [transfer, setTransfer] = useState(rule?.transferTo ?? 'none')
  const taken = (k: CommissionKind, tg: CommissionTarget) => role.rules.some((item) => item.kind === k && item.target === tg && item.id !== rule?.id)
  const percentNumber = Number(percent.replace(',', '.'))
  const percentErr = percent !== '' && (Number.isNaN(percentNumber) || percentNumber < 0.01 || percentNumber > 100) ? 'Use um número entre 0,01 e 100.' : ''
  const durationNumber = Number(duration)
  const durationErr = !noEnd && (!Number.isInteger(durationNumber) || durationNumber < 1 || durationNumber > 3650) ? 'De 1 a 3.650 dias.' : ''
  const offsetNumber = Number(offset)
  const offsetErr = !Number.isInteger(offsetNumber) || offsetNumber < 0 || offsetNumber > 365 ? 'De 0 a 365 dias.' : ''
  const duplicate = taken(kind, target)
  const valid = percent !== '' && !percentErr && !durationErr && !offsetErr && !duplicate
  const canTransfer = target === 'client'
  const start = 1 + (offsetErr ? 0 : offsetNumber)
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[680px]">
        <DialogHeader><DialogTitle>{rule ? 'Editar regra de comissão' : 'Nova regra de comissão'}</DialogTitle><DialogDescription>{role.name} · a base é sempre o revshare da Groone. Cada evento tem uma regra só neste papel.</DialogDescription></DialogHeader>
        <div className="grid gap-5">
          <div className="grid gap-2">
            <span className="text-[13px] font-medium text-muted-foreground">Tipo de comissão</span>
            <ChoiceCards name="Tipo de comissão" value={kind} onChange={setKind} options={(Object.keys(KINDS) as CommissionKind[]).map((key) => ({ value: key, title: KINDS[key].label, hint: KINDS[key].hint }))} />
          </div>
          <div className="grid gap-2">
            <span className="text-[13px] font-medium text-muted-foreground">Contar por</span>
            <ChoiceCards name="Contar por" value={target} onChange={(value) => { setTarget(value); if (value !== 'client') setTransfer('none') }}
              options={(Object.keys(TARGETS) as CommissionTarget[]).map((key) => ({ value: key, title: TARGETS[key].label, hint: TARGETS[key][kind], disabled: taken(kind, key) ? `Este papel já tem ${ruleName({ kind, target: key }).toLowerCase()}.` : undefined }))} />
          </div>
          {kind === 'reactivated' && (
            <div className="flex gap-3 rounded-md border bg-muted p-3 text-[13px]"><RefreshCw className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" /><span>Só conta como reativação se o {TARGETS[target].label.toLowerCase()} ficou <span className="font-medium">30 dias ou mais inativo</span>. {target === 'network' ? 'A network que volta junto com o cliente conta pela regra de reativação do cliente.' : target === 'client' ? 'As networks que voltam com ele entram nesta mesma comissão.' : ''}</span></div>
          )}
          <div className="grid items-start gap-4 sm:grid-cols-3">
            <Field id="rule-percent" label="Percentual" error={percentErr}>
              <div className="relative"><Input id="rule-percent" inputMode="decimal" value={percent} onChange={(e) => setPercent(e.target.value)} className="h-9 pr-8 tnum" placeholder="5" aria-invalid={!!percentErr} /><span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[14px] text-muted-foreground">%</span></div>
            </Field>
            <Field id="rule-offset" label="Dias de espera" hint="Depois do evento, antes de contar." error={offsetErr}><Input id="rule-offset" inputMode="numeric" value={offset} onChange={(e) => setOffset(e.target.value)} className="h-9 tnum" /></Field>
            <Field id="rule-duration" label="Dias recebendo" error={durationErr}>
              <Input id="rule-duration" inputMode="numeric" value={noEnd ? '' : duration} disabled={noEnd} placeholder={noEnd ? 'Sem prazo' : ''} onChange={(e) => setDuration(e.target.value)} className="h-9 tnum" />
              <label className="flex items-center gap-2 text-[13px] text-muted-foreground"><input type="checkbox" checked={noEnd} onChange={(e) => setNoEnd(e.target.checked)} className="accent-[hsl(var(--foreground))]" />Sem prazo</label>
            </Field>
          </div>
          <Field id="rule-transfer" label="No fim do prazo, o cliente passa para" hint={canTransfer ? 'A pessoa desse papel com menos clientes. O que já foi gerado fica com quem gerou.' : 'Só quando conta por cliente.'}>
            <Select value={transfer} onValueChange={setTransfer} disabled={!canTransfer || noEnd}>
              <SelectTrigger id="rule-transfer" className="h-9 sm:w-[320px]"><SelectValue /></SelectTrigger>
              <SelectContent><SelectItem value="none">Continua com a mesma pessoa</SelectItem>{roles.filter((item) => item.id !== role.id).map((item) => <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>)}</SelectContent>
            </Select>
          </Field>
          <div className="rounded-md border p-3 text-[13px]">
            <span className="font-medium">Exemplo: </span>
            {kind === 'created' ? `${TARGETS[target].label.toLowerCase()} cadastrado em 01/11` : `${TARGETS[target].label.toLowerCase()} que volta em 01/11, depois de 45 dias inativo`} → {percent && !percentErr ? pctText(percentNumber) : '–'} sobre o revshare da Groone de {String(start).padStart(2, '0')}/11 {noEnd ? 'sem data para acabar' : `por ${durationErr ? '–' : durationNumber} dias`}{canTransfer && transfer !== 'none' && !noEnd ? `, e depois o cliente passa para ${roles.find((item) => item.id === transfer)?.name}` : ''}.
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancelar</Button>
          <Button disabled={!valid} onClick={() => onSave({ id: rule?.id ?? `r${Date.now()}`, kind, target, percent: percentNumber, offsetDays: offsetNumber, durationDays: noEnd ? null : durationNumber, transferTo: canTransfer && !noEnd && transfer !== 'none' ? transfer : null })}>Salvar regra</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const INTERNAL_PERMS: [string, [string, string][]][] = [
  ['Clientes', [['internal.clients.view', 'Ver os clientes'], ['internal.clients.manage', 'Cadastrar e editar clientes']]],
  ['Contratos', [['internal.contracts.view', 'Ver os contratos'], ['internal.contracts.create', 'Criar contrato à mão']]],
  ['Comissão e metas', [['internal.commissions.view', 'Ver a comissão e a meta de todos'], ['internal.commissions.manage', 'Editar regras, emitir, lançar desconto e trocar o responsável']]],
  ['Resultado', [['internal.results.view', 'Ver o resultado dos clientes']]],
]

/** Modal de papel novo da Equipe Groone: nome e permissões; a comissão vem depois, na lista de regras. */
function NewStaffRoleDialog({ open, onOpenChange, names, onCreate }: { open: boolean; onOpenChange: (open: boolean) => void; names: string[]; onCreate: (name: string) => void }) {
  const [name, setName] = useState('')
  const [picked, setPicked] = useState<string[]>(['internal.clients.view'])
  const taken = names.some((item) => item.toLowerCase() === name.trim().toLowerCase())
  const toggle = (key: string) => setPicked(picked.includes(key) ? picked.filter((item) => item !== key) : [...picked, key])
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader><DialogTitle>Novo papel da Equipe Groone</DialogTitle><DialogDescription>Depois de criar, adicione as regras de comissão e a meta do papel.</DialogDescription></DialogHeader>
        <div className="grid gap-4">
          <Field id="staff-role-name" label="Nome" error={taken && 'Já existe um papel com esse nome.'}><Input id="staff-role-name" className="h-9" value={name} onChange={(e) => setName(e.target.value)} placeholder="Comercial de parcerias" aria-invalid={taken} /></Field>
          <div className="grid gap-2">
            <span className="text-[13px] font-medium text-muted-foreground">Permissões</span>
            <div className="scroll-thin grid max-h-[min(40dvh,320px)] gap-4 overflow-y-auto rounded-md border p-4">
              {INTERNAL_PERMS.map(([group, perms]) => (
                <div key={group} className="grid gap-2"><h3 className="text-[13px] font-medium">{group}</h3>
                  {perms.map(([key, label]) => <label key={key} className="flex items-center gap-2.5 text-[14px]"><input type="checkbox" checked={picked.includes(key)} onChange={() => toggle(key)} className="size-4 accent-[hsl(var(--foreground))]" />{label}</label>)}
                </div>
              ))}
            </div>
          </div>
        </div>
        <DialogFooter><Button variant="outline" onClick={() => onOpenChange(false)}>Cancelar</Button><Button disabled={!name.trim() || taken} onClick={() => onCreate(name.trim())}>Criar papel</Button></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function RoleCommissionScreen() {
  const [roles, setRoles] = useState(STAFF_ROLES)
  const [roleId, setRoleId] = useState(STAFF_ROLES[1].id)
  const [goalsOpen, setGoalsOpen] = useState(false)
  const [dialog, setDialog] = useState<{ rule: CommissionRule | null } | null>(null)
  const [removing, setRemoving] = useState<CommissionRule | null>(null)
  const [creatingRole, setCreatingRole] = useState(false)
  const editing = roles.find((role) => role.id === roleId)!
  const createRole = (name: string) => {
    const role: StaffRole = { id: `papel-${Date.now()}`, name, rules: [], goal: null, goalMode: 'per_member', people: [] }
    setRoles([...roles, role]); setRoleId(role.id); setCreatingRole(false)
    toast.success('Papel criado', { description: 'Agora adicione as regras de comissão.' })
  }
  const update = (patch: Partial<StaffRole>) => setRoles(roles.map((role) => (role.id === roleId ? { ...role, ...patch } : role)))
  const goal = personGoal(editing)
  const template = STAFF_GOALS.find((item) => item.id === editing.goal)
  const saveRule = (rule: CommissionRule) => {
    const exists = editing.rules.some((item) => item.id === rule.id)
    update({ rules: exists ? editing.rules.map((item) => (item.id === rule.id ? rule : item)) : [...editing.rules, rule] })
    setDialog(null)
    toast.success(exists ? 'Regra salva' : 'Regra criada', { description: exists ? 'Vale para os prazos em andamento a partir de amanhã; dias já calculados não mudam.' : `${ruleName(rule)} · ${pctText(rule.percent)}` })
  }
  return (
    <>
      <PageHeader title="Papéis da Equipe Groone" sub="Cada papel diz o que a pessoa pode fazer e, para quem recebe comissão, como ela ganha e qual é a meta."
        actions={<Button onClick={() => setCreatingRole(true)}><Plus className="h-4 w-4" />Novo papel</Button>} />
      <Body className="lg:grid-cols-[280px_minmax(0,1fr)]">
        <nav className="grid content-start gap-1" aria-label="Papéis">
          {roles.map((role) => (
            <button key={role.id} onClick={() => setRoleId(role.id)} aria-current={roleId === role.id ? 'page' : undefined}
              className={cn('rounded-md border bg-card px-3 py-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', roleId === role.id ? 'border-foreground' : 'hover:bg-accent')}>
              <span className="block text-[14px] font-medium">{role.name}</span>
              <span className="block text-[13px] text-muted-foreground">{role.people.length} {role.people.length === 1 ? 'pessoa' : 'pessoas'} · {role.rules.length ? `${role.rules.length} ${role.rules.length === 1 ? 'regra' : 'regras'} de comissão` : 'sem comissão'}</span>
            </button>
          ))}
        </nav>
        <div className="grid content-start gap-6">
          <Card title={`Comissão · ${editing.name}`}
            desc="Uma regra por evento. A base é o revshare da Groone; as deduções do GAM recebem o mesmo percentual e saem no fechamento, dia 15."
            footerNote="Mudanças valem do dia seguinte em diante; dias já calculados e meses fechados não mudam."
            footer={<Button size="sm" onClick={() => setDialog({ rule: null })} disabled={editing.rules.length === 6}><Plus className="h-4 w-4" />Nova regra</Button>}>
            {editing.rules.length === 0 ? (
              <p className="text-[14px] text-muted-foreground">Este papel não recebe comissão. Crie uma regra para começar.</p>
            ) : (
              <Table min={720}>
                <thead><tr><th className={th}>Regra</th><th className={cn(th, 'text-right')}>Percentual</th><th className={cn(th, 'text-right')}>Espera</th><th className={cn(th, 'text-right')}>Recebendo</th><th className={th}>No fim</th><th className={cn(th, 'w-12')}><span className="sr-only">Ações</span></th></tr></thead>
                <tbody>
                  {editing.rules.map((rule) => (
                    <tr key={rule.id} className="hover:bg-muted">
                      <td className={td}><div className="font-medium">{ruleName(rule)}</div><div className="text-[12px] text-muted-foreground">{TARGETS[rule.target][rule.kind]}</div></td>
                      <td className={cn(td, 'text-right tnum')}>{pctText(rule.percent)}</td>
                      <td className={cn(td, 'text-right tnum whitespace-nowrap')}>{rule.offsetDays ? `${rule.offsetDays} dias` : '–'}</td>
                      <td className={cn(td, 'text-right tnum whitespace-nowrap')}>{rule.durationDays ? `${rule.durationDays} dias` : 'Sem prazo'}</td>
                      <td className={cn(td, 'whitespace-nowrap text-muted-foreground')}>{rule.transferTo ? `Passa para ${roles.find((role) => role.id === rule.transferTo)?.name}` : 'Fica com a pessoa'}</td>
                      <td className={td}>
                        <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon" aria-label={`Ações da regra ${ruleName(rule)}`}><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                          <DropdownMenuContent align="end"><DropdownMenuItem onSelect={() => setDialog({ rule })}>Editar</DropdownMenuItem><DropdownMenuItem className="text-bad" onSelect={() => setRemoving(rule)}>Apagar</DropdownMenuItem></DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Card>
          <Card title="Meta mensal" desc="Mostra o desempenho de cada pessoa no mês. Não muda a comissão: ela é paga mesmo sem bater a meta.">
            <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto]">
              <Field id="role-goal" label="Modelo de meta">
                <Select value={editing.goal ?? 'none'} onValueChange={(value) => update({ goal: value === 'none' ? null : value })}>
                  <SelectTrigger id="role-goal" className="h-9"><SelectValue /></SelectTrigger>
                  <SelectContent><SelectItem value="none">Sem meta</SelectItem>{STAFF_GOALS.map((item) => <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>)}</SelectContent>
                </Select>
              </Field>
              <Button variant="outline" className="h-9 self-end" onClick={() => setGoalsOpen(true)}>Modelos de meta</Button>
            </div>
            {editing.goal && (
              <div className="mt-4 grid gap-3">
                <RadioGroup value={editing.goalMode} onValueChange={(value) => update({ goalMode: value as GoalMode })} className="grid gap-2 sm:grid-cols-2">
                  {([['per_member', 'Por pessoa', 'Cada pessoa do papel tem o valor inteiro.'], ['split', 'Dividida', 'O valor é dividido entre quem tem o papel.']] as const).map(([value, title, hint]) => (
                    <label key={value} className={cn('flex cursor-pointer items-start gap-3 rounded-md border p-3', editing.goalMode === value && 'border-foreground')}>
                      <RadioGroupItem value={value} className="mt-0.5" /><span><span className="block text-[14px] font-medium">{title}</span><span className="block text-[13px] text-muted-foreground">{hint}</span></span>
                    </label>
                  ))}
                </RadioGroup>
                <p className="text-[14px]">Em outubro, cada pessoa deste papel tem meta de <span className="font-medium tnum">{usd0.format(goal ?? 0)}</span> de revshare da Groone{editing.goalMode === 'split' ? ` (${usd0.format(template?.months[CURRENT_MONTH] ?? 0)} ÷ ${editing.people.length} pessoas)` : ''}.</p>
              </div>
            )}
          </Card>
        </div>
      </Body>
      <NewStaffRoleDialog key={creatingRole ? 'open' : 'closed'} open={creatingRole} onOpenChange={setCreatingRole} names={roles.map((role) => role.name)} onCreate={createRole} />
      {dialog && <RuleDialog key={dialog.rule?.id ?? 'new'} open onOpenChange={(open) => !open && setDialog(null)} role={editing} roles={roles} rule={dialog.rule} onSave={saveRule} />}
      <Dialog open={!!removing} onOpenChange={(open) => !open && setRemoving(null)}>
        <DialogContent><DialogHeader><DialogTitle>Apagar {removing ? ruleName(removing).toLowerCase() : ''}?</DialogTitle><DialogDescription>Os prazos abertos por esta regra param de gerar comissão amanhã. O que já foi calculado fica.</DialogDescription></DialogHeader>
          <DialogFooter><Button variant="outline" onClick={() => setRemoving(null)}>Cancelar</Button><Button variant="destructive" onClick={() => { update({ rules: editing.rules.filter((item) => item.id !== removing?.id) }); setRemoving(null); toast('Regra apagada') }}>Apagar</Button></DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={goalsOpen} onOpenChange={setGoalsOpen}>
        <DialogContent className="sm:max-w-[640px]">
          <DialogHeader><DialogTitle>Modelos de meta</DialogTitle><DialogDescription>Um valor por mês, em dólar. O mesmo modelo pode ser usado por vários papéis.</DialogDescription></DialogHeader>
          <div className="grid gap-4">
            {[...STAFF_GOALS, COMPANY_GOAL].map((item) => (
              <div key={item.id} className="rounded-md border p-3">
                <div className="flex items-center justify-between"><span className="text-[14px] font-medium">{item.name}</span>{item.id === 'groone' && <Badge>Meta da Empresa</Badge>}</div>
                <div className="mt-2 grid grid-cols-4 gap-1.5 sm:grid-cols-6">
                  {item.months.map((value, index) => <label key={MONTHS[index]} className="grid gap-0.5 text-[11px] text-muted-foreground">{MONTHS[index]}<Input defaultValue={value} className="h-8 px-2 text-right text-[12px] tnum" /></label>)}
                </div>
              </div>
            ))}
          </div>
          <DialogFooter><Button variant="outline" onClick={() => setGoalsOpen(false)}>Fechar</Button><Button onClick={() => setGoalsOpen(false)}>Salvar</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

/** Total do mês: comissão menos a dedução do GAM e os descontos lançados. */
const monthTotal = (row: { commission: number; deduction: number; adjustment: number }) => row.commission - row.deduction - row.adjustment

function MyCommissionScreen() {
  const role = STAFF_ROLES[0]
  const goal = personGoal(role) ?? 0
  const done = 14210
  const month = MY_WINDOWS.reduce((sum, item) => sum + item.month, 0)
  return (
    <>
      <PageHeader title="Minha comissão" sub={`Lucas Prado · ${role.name} · ${role.rules.map((rule) => `${ruleName(rule).toLowerCase()} ${pctText(rule.percent)}`).join(', ')}`}
        actions={<Select defaultValue="10"><SelectTrigger className="h-9 w-[180px]" aria-label="Mês"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="10">Outubro 2026</SelectItem><SelectItem value="9">Setembro 2026</SelectItem><SelectItem value="8">Agosto 2026</SelectItem></SelectContent></Select>} />
      <Body>
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <Card title="Meta de outubro" desc="Revshare da Groone dos seus clientes, até ontem.">
            <GoalBar done={done} goal={goal} label="Meta de outubro" />
          </Card>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border">
            {[
              ['Comissão do mês', money.format(month), 'Em aberto até o fechamento'],
              ['Deduções do GAM', '—', 'Entram no fechamento, dia 15/11'],
              ['Prazos abertos', '2', 'Geram comissão hoje'],
              ['Setembro', money.format(591 - 23.4 - 40), 'Validada · falta emitir'],
            ].map(([label, value, hint]) => (
              <div key={label} className="bg-card p-4"><div className="text-[13px] font-medium text-muted-foreground">{label}</div><div className="mt-1 text-[22px] font-semibold tracking-tight tnum">{value}</div><div className="mt-1 text-[12px] text-muted-foreground">{hint}</div></div>
            ))}
          </div>
        </div>
        <section className="grid gap-3">
          <h2 className="text-[16px] font-semibold tracking-tight">Prazos</h2>
          <Table min={820}>
            <thead><tr><th className={th}>Alvo</th><th className={th}>Regra</th><th className={th}>Começou</th><th className={th}>Termina</th><th className={cn(th, 'text-right')}>Percentual</th><th className={cn(th, 'text-right')}>Comissão no mês</th></tr></thead>
            <tbody>
              {MY_WINDOWS.map((item) => {
                const ended = item.end === '20/10/2026'
                return (
                  <tr key={item.what} className="hover:bg-muted">
                    <td className={td}><span className="font-medium">{item.what}</span><span className="block text-[12px] text-muted-foreground">{item.target}</span></td>
                    <td className={cn(td, 'whitespace-nowrap')}>{item.rule}</td>
                    <td className={cn(td, 'tnum whitespace-nowrap')}>{item.start}</td>
                    <td className={cn(td, 'whitespace-nowrap')}>{ended ? <Status tone="neutral">Terminou em {item.end}</Status> : <span className="tnum">{item.end}</span>}</td>
                    <td className={cn(td, 'text-right tnum')}>{pctText(item.percent)}</td>
                    <td className={cn(td, 'text-right tnum whitespace-nowrap')}>{money.format(item.month)}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </section>
        <section className="grid gap-3">
          <h2 className="text-[16px] font-semibold tracking-tight">Histórico</h2>
          <Table min={820}>
            <thead><tr><th className={th}>Mês</th><th className={cn(th, 'text-right')}>Revshare da Groone</th><th className={cn(th, 'text-right')}>Comissão</th><th className={cn(th, 'text-right')}>Dedução do GAM</th><th className={cn(th, 'text-right')}>Descontos</th><th className={cn(th, 'text-right')}>Total</th><th className={th}>Situação</th></tr></thead>
            <tbody>
              {MY_HISTORY.map((item) => (
                <tr key={item.month} className="hover:bg-muted">
                  <td className={cn(td, 'font-medium whitespace-nowrap')}>{item.month}</td>
                  <td className={cn(td, 'text-right tnum')}>{money.format(item.base)}</td>
                  <td className={cn(td, 'text-right tnum')}>{money.format(item.commission)}</td>
                  <td className={cn(td, 'text-right tnum text-muted-foreground')}>{item.status === 'draft' ? 'dia 15/11' : `− ${money.format(item.deduction)}`}</td>
                  <td className={cn(td, 'text-right tnum text-muted-foreground')} title={item.adjustment ? 'Desconto retroativo de network banida' : undefined}>{item.adjustment ? `− ${money.format(item.adjustment)}` : '–'}</td>
                  <td className={cn(td, 'text-right tnum font-medium')}>{money.format(monthTotal(item))}</td>
                  <td className={td}><Status tone={COMMISSION_STATUS[item.status][1]}>{COMMISSION_STATUS[item.status][0]}</Status></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      </Body>
    </>
  )
}

/** Modal do desconto manual na comissão de uma pessoa. */
function AdjustmentDialog({ person, onClose, onSave }: { person: TeamRow | null; onClose: () => void; onSave: (amount: number) => void }) {
  const [amount, setAmount] = useState('')
  const [reason, setReason] = useState('')
  const value = Number(amount.replace('.', '').replace(',', '.'))
  const amountErr = amount !== '' && (Number.isNaN(value) || value <= 0) ? 'Use um valor maior que zero.' : ''
  const valid = amount !== '' && !amountErr && reason.trim().length > 0
  return (
    <Dialog open={!!person} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <DialogHeader><DialogTitle>Lançar desconto · {person?.name}</DialogTitle><DialogDescription>Sai da comissão de setembro, que ainda não foi emitida. Fica registrado com o motivo e quem lançou.</DialogDescription></DialogHeader>
        <div className="grid gap-4">
          <Field id="adj-amount" label="Valor do desconto (US$)" error={amountErr}><Input id="adj-amount" inputMode="decimal" className="h-9 max-w-[200px] tnum" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="40,00" aria-invalid={!!amountErr} /></Field>
          <Field id="adj-reason" label="Motivo"><Textarea id="adj-reason" rows={3} value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Desconto retroativo do GAM: network 22334455 banida por tráfego inválido." /></Field>
        </div>
        <DialogFooter><Button variant="outline" onClick={onClose}>Cancelar</Button><Button disabled={!valid} onClick={() => onSave(value)}>Lançar desconto</Button></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function TeamCommissionsScreen() {
  const [team, setTeam] = useState(TEAM)
  const [detail, setDetail] = useState<TeamRow | null>(null)
  const [adjusting, setAdjusting] = useState<TeamRow | null>(null)
  const companyDone = 412_800
  const companyGoal = COMPANY_GOAL.months[CURRENT_MONTH]
  const total = team.reduce((sum, item) => sum + monthTotal(item), 0)
  const toIssue = team.filter((item) => item.status === 'validated')
  const issue = (names: string[]) => { setTeam(team.map((item) => (names.includes(item.name) ? { ...item, status: 'issued' as const } : item))); toast.success(names.length === 1 ? `Setembro de ${names[0]} emitido` : `Setembro emitido para ${names.length} pessoas`, { description: 'Fica como paga quando a invoice for paga.' }) }
  return (
    <>
      <PageHeader title="Comissões da equipe" sub="Comissão e meta de cada pessoa da Equipe Groone, mês a mês. O mês fecha no dia 15 do mês seguinte, depois das deduções do GAM."
        actions={<Select defaultValue="9"><SelectTrigger className="h-9 w-[180px]" aria-label="Mês"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="10">Outubro 2026</SelectItem><SelectItem value="9">Setembro 2026</SelectItem></SelectContent></Select>} />
      <Body>
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <Card title="Meta da Groone em setembro" desc="Revshare da Groone somado de todos os clientes. Não passa para ninguém da equipe.">
            <GoalBar done={companyDone} goal={companyGoal} label="Meta da Groone" />
          </Card>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border">
            {[
              ['Comissões do mês', money.format(total), 'Fechado em 15/10, com as deduções'],
              ['Pessoas recebendo', String(team.length), 'Em papéis com comissão'],
              ['Para emitir', String(toIssue.length), 'Validadas, ainda não emitidas'],
              ['Descontos lançados', money.format(team.reduce((sum, item) => sum + item.adjustment, 0)), 'Lançados à mão no mês'],
            ].map(([label, value, hint]) => (
              <div key={label} className="bg-card p-4"><div className="text-[13px] font-medium text-muted-foreground">{label}</div><div className="mt-1 text-[22px] font-semibold tracking-tight tnum">{value}</div><div className="mt-1 text-[12px] text-muted-foreground">{hint}</div></div>
            ))}
          </div>
        </div>
        <Table min={960}>
          <thead><tr><th className={th}>Pessoa</th><th className={th}>Papel</th><th className={cn(th, 'text-right')}>Comissão</th><th className={cn(th, 'text-right')}>Dedução do GAM</th><th className={cn(th, 'text-right')}>Descontos</th><th className={cn(th, 'text-right')}>Total</th><th className={th}>Situação</th><th className={cn(th, 'w-12')}><span className="sr-only">Ações</span></th></tr></thead>
          <tbody>
            {team.map((item) => (
              <tr key={item.name} className="hover:bg-muted">
                <td className={td}><button onClick={() => setDetail(item)} className="flex items-center gap-2.5 font-medium hover:underline"><Avatar name={item.name} size={26} />{item.name}</button></td>
                <td className={cn(td, 'whitespace-nowrap text-muted-foreground')}>{item.role}</td>
                <td className={cn(td, 'text-right tnum')}>{money.format(item.commission)}</td>
                <td className={cn(td, 'text-right tnum text-muted-foreground')}>− {money.format(item.deduction)}</td>
                <td className={cn(td, 'text-right tnum text-muted-foreground')}>{item.adjustment ? `− ${money.format(item.adjustment)}` : '–'}</td>
                <td className={cn(td, 'text-right tnum font-medium')}>{money.format(monthTotal(item))}</td>
                <td className={td}><Status tone={COMMISSION_STATUS[item.status][1]}>{COMMISSION_STATUS[item.status][0]}</Status></td>
                <td className={td}>
                  <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon" aria-label={`Ações de ${item.name}`}><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onSelect={() => setDetail(item)}>Ver prazos</DropdownMenuItem>
                      <DropdownMenuItem disabled={item.status !== 'validated'} onSelect={() => setAdjusting(item)}>Lançar desconto</DropdownMenuItem>
                      <DropdownMenuItem disabled={item.status !== 'validated'} onSelect={() => issue([item.name])}>Marcar como emitida</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {toIssue.length > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-card px-4 py-3 text-[14px]">
            <span className="text-muted-foreground">{toIssue.length} {toIssue.length === 1 ? 'pessoa tem' : 'pessoas têm'} setembro validado e ainda não emitido ({money.format(toIssue.reduce((sum, item) => sum + monthTotal(item), 0))}).</span>
            <Button variant="outline" onClick={() => issue(toIssue.map((item) => item.name))}>Marcar todas como emitidas</Button>
          </div>
        )}
      </Body>
      <Sheet open={!!detail} onOpenChange={(open) => !open && setDetail(null)}>
        <SheetContent className="w-full overflow-y-auto sm:max-w-[640px]">
          <SheetTitle>{detail?.name} · setembro</SheetTitle>
          <p className="mt-1 text-[14px] text-muted-foreground">{detail?.role} · {detail ? COMMISSION_STATUS[detail.status][0].toLowerCase() : ''}</p>
          <div className="mt-5 grid gap-3">
            {PERSON_WINDOWS.map((item) => (
              <div key={item.what} className="rounded-md border p-3 text-[14px]">
                <div className="flex items-center justify-between gap-3"><span className="font-medium">{item.what}</span><span className="tnum font-medium">{money.format(item.commission - item.deduction)}</span></div>
                <div className="mt-1 text-[13px] text-muted-foreground">{item.rule} · {item.days} · {pctText(item.percent)}</div>
                <div className="mt-2 grid grid-cols-3 gap-2 text-[12px] text-muted-foreground tnum"><span>Base {money.format(item.base)}</span><span>Comissão {money.format(item.commission)}</span><span>Dedução − {money.format(item.deduction)}</span></div>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <AdjustmentDialog key={adjusting?.name ?? 'none'} person={adjusting} onClose={() => setAdjusting(null)}
        onSave={(amount) => { setTeam(team.map((item) => (item.name === adjusting?.name ? { ...item, adjustment: item.adjustment + amount } : item))); toast.success('Desconto lançado', { description: `${money.format(amount)} na comissão de setembro de ${adjusting?.name}.` }); setAdjusting(null) }} />
    </>
  )
}

/** Card do responsável Groone do cliente, com a troca e o aviso do que acontece com a comissão. */
function AccountManagerCard() {
  const people = [...STAFF_ROLES.flatMap((role) => role.people.map((name) => ({ name, role: role.name })))]
  const [current, setCurrent] = useState(people[0])
  const [open, setOpen] = useState(false)
  const [picked, setPicked] = useState(people[1].name)
  const next = people.find((person) => person.name === picked)!
  const sameRole = next.role === current.role
  return (
    <Card title="Responsável Groone" desc="Quem recebe a comissão deste cliente." footer={<Button size="sm" variant="outline" onClick={() => setOpen(true)}>Trocar responsável</Button>} footerNote="Só quem administra as comissões troca o responsável.">
      <div className="flex items-center gap-3"><Avatar name={current.name} /><div><div className="text-[14px] font-medium">{current.name}</div><div className="text-[13px] text-muted-foreground">{current.role} · 2 prazos abertos neste cliente</div></div></div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>Trocar o responsável</DialogTitle><DialogDescription>Tech Notícias · hoje com {current.name}.</DialogDescription></DialogHeader>
          <Field id="am-person" label="Novo responsável">
            <Select value={picked} onValueChange={setPicked}>
              <SelectTrigger id="am-person" className="h-9"><SelectValue /></SelectTrigger>
              <SelectContent>{people.filter((person) => person.name !== current.name).map((person) => <SelectItem key={person.name} value={person.name}>{person.name} · {person.role}</SelectItem>)}</SelectContent>
            </Select>
          </Field>
          <div className={cn('flex gap-3 rounded-md border p-3 text-[13px]', sameRole ? 'bg-muted' : 'border-ochre/40 bg-ochre/10')}>
            <AlertTriangle className={cn('mt-0.5 h-4 w-4 shrink-0', sameRole ? 'text-muted-foreground' : 'text-ochre')} />
            <span>{sameRole ? `${next.name} é do mesmo papel: os 2 prazos abertos continuam com ${next.name.split(' ')[0]}, até a mesma data de fim.` : `${next.name} é de outro papel (${next.role}): os 2 prazos abertos param hoje.`} O que {current.name.split(' ')[0]} já gerou fica com {current.name.split(' ')[0]}.</span>
          </div>
          <DialogFooter><Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button><Button onClick={() => { setCurrent(next); setOpen(false); toast.success('Responsável trocado', { description: sameRole ? 'Os prazos abertos seguem com a pessoa nova.' : 'Os prazos abertos pararam hoje.' }) }}>Trocar</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

export default function App() {
  const initial = typeof location !== 'undefined' && isScreen(location.hash.slice(1)) ? (location.hash.slice(1) as Screen) : 'equipe'
  const [screen, setScreen] = useState<Screen>(initial)
  const [lang, setLang] = useState<Lang>('pt')
  const [members, setMembers] = useState(INITIAL_MEMBERS)
  const [accent, setAccent] = useState('padrao')
  const [theme, setTheme] = useState('system')
  const [groups, setGroups] = useState(INITIAL_GROUPS)
  const [groupId, setGroupId] = useState('trafego')
  const [image, setImage] = useState<string | null>(null)
  const [reports, setReports] = useState(INITIAL_REPORTS)
  const [customs, setCustoms] = useState(INITIAL_CUSTOMS)
  const [draft, setDraft] = useState<ReportDraft>(() => ({ ...INITIAL_REPORTS[1] }))
  const openReport = (id: string | null) => { setDraft(id ? { ...reports.find((r) => r.id === id)! } : blank()); go('construtor') }
  const openTemplate = (key: string) => { const { key: _key, desc: _desc, ...tpl } = TEMPLATES.find((x) => x.key === key)!; setDraft({ ...tpl, id: null, owner: ME, updated: 'Agora' }); go('construtor') }
  const saveReport = (saved: ReportDraft) => {
    const report = saved.id ? saved : { ...saved, id: `r${Date.now()}`, updated: 'Agora' }
    setReports(reports.some((r) => r.id === report.id) ? reports.map((r) => (r.id === report.id ? report : r)) : [report, ...reports])
  }
  const openGroup = (id: string) => { setGroupId(id); go(id === 'parcerias' ? 'grupoinativo' : 'grupo') }
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
  const auth = screen === 'login' || screen === 'convite' || screen === 'construtor'
  const body = (() => {
    switch (screen) {
      case 'login': return <Login t={t} go={go} />
      case 'convite': return <Invite t={t} go={go} />
      case 'inicio': return <HomeScreen t={t} go={go} members={members} />
      case 'desempenho': return <PerformanceScreen />
      case 'visitas': return <PageViewsScreen />
      case 'relatorios': return <ReportsScreen reports={reports} setReports={setReports} open={openReport} openTemplate={openTemplate} />
      case 'construtor': return <ReportBuilderScreen key={`${draft.id}-${draft.name}`} initial={draft} customs={customs} setCustoms={setCustoms} onBack={() => go('relatorios')} onSave={saveReport} />
      case 'resultado': return <ResultScreen go={go} />
      case 'custos': return <CostsScreen />
      case 'equipe': return <TeamScreen t={t} go={go} members={members} setMembers={setMembers} groupCount={groups.length} />
      case 'grupos': return <GroupsScreen t={t} go={go} members={members} groups={groups} setGroups={setGroups} openGroup={openGroup} />
      case 'grupo': return <GroupScreen key={groupId} t={t} go={go} members={members} groups={groups} setGroups={setGroups} groupId={groupId === 'parcerias' ? 'trafego' : groupId} openMember={() => go('membro')} />
      case 'grupoinativo': return <GroupScreen key="parcerias" t={t} go={go} members={members} groups={groups} setGroups={setGroups} groupId="parcerias" openMember={() => go('membro')} />
      case 'membro': return <MemberScreen t={t} go={go} groups={groups} openGroup={openGroup} />
      case 'networks': return <NetworksScreen t={t} go={go} />
      case 'conectar': return <ConnectScreen t={t} go={go} />
      case 'configuracoes': return <SettingsScreen t={t} accent={accent} setAccent={setAccent} theme={theme} setTheme={setTheme} image={image} setImage={setImage} groups={groups} />
      case 'interno': return <InternalScreen t={t} go={go} />
      case 'cliente': return <ClientScreen go={go} />
      case 'fiscais': return <FiscalScreen />
      case 'contratos': return <ContractsScreen />
      case 'resultados': return <ClientsResultScreen />
      case 'permissoes': return <PermissionsScreen />
      case 'papelcomissao': return <RoleCommissionScreen />
      case 'minhacomissao': return <MyCommissionScreen />
      case 'comissoes': return <TeamCommissionsScreen />
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
      <div className="flex flex-1 flex-col">{auth ? body : <Shell t={t} lang={lang} setLang={setLang} screen={screen} go={go} image={image}>{body}</Shell>}</div>
      <Toaster position="bottom-right" theme={theme === 'system' ? 'system' : (theme as 'light' | 'dark')} toastOptions={{ className: 'font-sans' }} />
    </div>
  )
}
