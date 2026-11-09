import { useEffect, useMemo, useRef, useState } from 'react'
import { Toaster, toast } from 'sonner'
import { Check, ChevronsUpDown, Copy, Loader2, Plus, RefreshCw, Search, X, AlertTriangle, ArrowLeft, MoreHorizontal, Lock, Mail, ExternalLink, Home, Users, Network, Settings, ShieldCheck, Menu, BarChart3, Wallet, Download, Trash2, Pin, PinOff, Pencil, LayoutGrid, List, Wrench, Gift, Monitor, Smartphone, Code2, MousePointerClick, ChevronUp, ChevronDown, History, PanelBottom, PanelTop, Maximize, TextQuote } from 'lucide-react'
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
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
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
  ['relatorios', 'Relatórios customizados'],
  ['relatorio', 'Relatórios customizados · Relatório salvo'],
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
  ['minhasinvoices', 'Painel interno · Minhas invoices'],
  ['invoice', 'Painel interno · Invoice'],
  ['invoices', 'Painel interno · Invoices da equipe'],
  ['servicosinvoice', 'Painel interno · Serviços de invoice'],
  ['modelosdash', 'Painel interno · Modelos de dashboard'],
  ['tarefas', 'Painel interno · Tarefas'],
  ['tarefa', 'Painel interno · Tarefa'],
  ['checklists', 'Painel interno · Checklists'],
  ['checklist', 'Painel interno · Checklist do site'],
  ['checklistitens', 'Painel interno · Itens do checklist'],
  ['ferramentasgam', 'Painel interno · Ferramentas do GAM'],
  ['execucaogam', 'Painel interno · Execução no GAM'],
  ['rewards', 'Rewards'],
  ['reward', 'Rewards · Editar reward'],
  ['rewardsinterno', 'Painel interno · Rewards'],
  ['rewardinterno', 'Painel interno · Editar reward'],
  ['rewardmetricas', 'Rewards · Métricas'],
  ['rewardmetricasinterno', 'Painel interno · Métricas do reward'],
  ['adtags', 'Ad tags'],
  ['adtag', 'Ad tags · Ad tag do site'],
  ['adtagmetricas', 'Ad tags · Métricas'],
  ['adtagsinterno', 'Painel interno · Ad tags'],
  ['adtaginterno', 'Painel interno · Ad tag do site'],
  ['adtagmetricasinterno', 'Painel interno · Métricas da ad tag'],
] as const
type Screen = (typeof SCREENS)[number][0]
const INTERNAL_SCREENS: Screen[] = ['interno', 'cliente', 'contratos', 'resultados', 'papelcomissao', 'minhacomissao', 'comissoes', 'minhasinvoices', 'invoice', 'invoices', 'servicosinvoice', 'modelosdash', 'tarefas', 'tarefa', 'checklists', 'checklist', 'checklistitens', 'ferramentasgam', 'execucaogam', 'rewardsinterno', 'rewardinterno', 'rewardmetricasinterno', 'adtagsinterno', 'adtaginterno', 'adtagmetricasinterno']
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
const NETWORKS: { name: string; code: string; via: string; status: NetStatus; sites: number | null; units: number | null; checked: string; revenue: RevenueStatusData | null }[] = [
  { name: 'Blog Exemplo Principal', code: '21987654321', via: 'Contrato MCM', status: 'ok', sites: 3, units: 22, checked: 'Hoje, 14:05', revenue: { trend: 'scaling', perDay: 1840, change: 34 } },
  { name: 'Blog Exemplo Receitas', code: '22334455667', via: 'Conta de serviço', status: 'testing', sites: null, units: null, checked: 'Agora', revenue: null },
  { name: 'Portal Antigo', code: '20111222333', via: 'Conta de serviço', status: 'error', sites: null, units: null, checked: 'Ontem, 09:12', revenue: { trend: 'stopped', perDay: 2, change: -99 } },
]
const SITES = [
  { domain: 'blogexemplo.com', network: 'Blog Exemplo Principal', approval: 'ok' as const, units: 12, revenue: { trend: 'scaling', perDay: 1210, change: 41 } as RevenueStatusData },
  { domain: 'receitas.blogexemplo.com', network: 'Blog Exemplo Principal', approval: 'ok' as const, units: 7, revenue: { trend: 'steady', perDay: 520, change: 6 } as RevenueStatusData },
  { domain: 'viagens.blogexemplo.com', network: 'Blog Exemplo Principal', approval: 'review' as const, units: 3, revenue: { trend: 'reducing', perDay: 110, change: -27 } as RevenueStatusData },
]

/* ---------- cor secundária do sistema (por Empresa), com um tom para cada tema ---------- */

const ACCENTS = [
  { id: 'padrao', label: 'Padrão', light: '0 0% 9%', fgLight: '0 0% 100%', dark: '0 0% 93%', fgDark: '0 0% 4%', groone: '215 78% 27%', fgGroone: '0 0% 100%' },
  { id: 'azul', label: 'Azul', light: '212 100% 45%', fgLight: '0 0% 100%', dark: '212 100% 62%', fgDark: '0 0% 4%', groone: '212 85% 40%', fgGroone: '0 0% 100%' },
  { id: 'marinho', label: 'Marinho', light: '213 72% 14%', fgLight: '0 0% 100%', dark: '213 55% 45%', fgDark: '0 0% 100%', groone: '213 62% 21%', fgGroone: '0 0% 100%', edgeGroone: '213 45% 60%' },
  { id: 'ciano', label: 'Ciano', light: '192 85% 32%', fgLight: '0 0% 100%', dark: '189 75% 52%', fgDark: '0 0% 4%', groone: '192 80% 28%', fgGroone: '0 0% 100%' },
  { id: 'verde', label: 'Verde', light: '152 76% 28%', fgLight: '0 0% 100%', dark: '150 60% 52%', fgDark: '0 0% 4%', groone: '152 70% 25%', fgGroone: '0 0% 100%' },
  { id: 'roxo', label: 'Roxo', light: '262 70% 52%', fgLight: '0 0% 100%', dark: '262 85% 74%', fgDark: '0 0% 4%', groone: '262 55% 38%', fgGroone: '0 0% 100%' },
  { id: 'rosa', label: 'Rosa', light: '330 72% 45%', fgLight: '0 0% 100%', dark: '330 85% 70%', fgDark: '0 0% 4%', groone: '330 65% 36%', fgGroone: '0 0% 100%' },
  { id: 'laranja', label: 'Laranja', light: '22 92% 44%', fgLight: '0 0% 100%', dark: '26 95% 60%', fgDark: '0 0% 4%', groone: '22 85% 36%', fgGroone: '0 0% 100%' },
  { id: 'dourado', label: 'Dourado', light: '44 88% 46%', fgLight: '0 0% 9%', dark: '45 95% 58%', fgDark: '0 0% 4%', groone: '43 80% 45%', fgGroone: '214 72% 9%' },
  { id: 'grafite', label: 'Grafite', light: '215 16% 32%', fgLight: '0 0% 100%', dark: '215 16% 70%', fgDark: '0 0% 4%', groone: '215 25% 30%', fgGroone: '0 0% 100%', edgeGroone: '215 25% 65%' },
]
function accentCss(a: (typeof ACCENTS)[number]) {
  const l = `--primary:${a.light};--primary-foreground:${a.fgLight};`
  const d = `--primary:${a.dark};--primary-foreground:${a.fgDark};`
  const edge = 'edgeGroone' in a ? `--primary-edge:${a.edgeGroone};` : ''
  const g = `--primary:${a.groone};--primary-foreground:${a.fgGroone};${edge}`
  return `:root{${l}} @media (prefers-color-scheme: dark){:root:not([data-theme="light"]):not([data-theme="groone"]){${d}}} :root[data-theme="dark"]{${d}} :root[data-theme="groone"]{${g}}`
}

/** O tema que vale agora (o do sistema vira claro ou escuro), para as amostras de cor. */
function swatchTheme(theme: string): 'light' | 'dark' | 'groone' {
  if (theme === 'groone' || theme === 'dark' || theme === 'light') return theme
  return typeof matchMedia !== 'undefined' && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
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

/* ---------- Status de faturamento ---------- */

type RevenueTrend = 'scaling' | 'steady' | 'reducing' | 'stopped'
type RevenueStatusData = { trend: RevenueTrend; perDay: number; change: number | null }
const REVENUE_TREND: Record<RevenueTrend, { label: string; className: string }> = {
  scaling: { label: 'Escalando', className: 'bg-ok-soft text-ok' },
  steady: { label: 'Mantendo', className: 'bg-secondary text-secondary-foreground' },
  reducing: { label: 'Reduzindo', className: 'bg-ochre-soft text-ochre' },
  stopped: { label: 'Parado', className: 'bg-bad-soft text-bad' },
}
const usdPerDay = (value: number) => `US$ ${value.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}`

function RevenueBadge({ label, className }: { label: string; className: string }) {
  return (
    <span className={cn('inline-flex h-6 items-center whitespace-nowrap rounded-full px-2.5 text-[12px] font-medium', className)}>
      {label}
    </span>
  )
}

function RevenueStatus({ data }: { data: RevenueStatusData | null }) {
  if (!data) return <RevenueBadge label="Sem receita" className="border border-dashed text-muted-foreground" />
  const trend = REVENUE_TREND[data.trend]
  const change = data.change === null ? '' : ` · ${data.change > 0 ? '+' : ''}${data.change}%`
  return (
    <div title="Média diária dos últimos 30 dias contra os 30 anteriores. Parado: menos de US$ 100 somados nos últimos 30 dias.">
      <RevenueBadge {...trend} />
      <div className="mt-1 pl-1 text-[12px] text-muted-foreground tnum">{usdPerDay(data.perDay)}/dia{change}</div>
    </div>
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

type RailGroup = { key: string; label: string; icon: typeof Home; items: { id: Screen; label: string; also?: Screen[]; separated?: boolean }[] }
const CLIENT_RAIL: RailGroup[] = [
  { key: 'inicio', label: 'Início', icon: Home, items: [{ id: 'inicio', label: 'Dashboard' }] },
  { key: 'relatorios', label: 'Relatórios', icon: BarChart3, items: [{ id: 'desempenho', label: 'Ad Manager' }, { id: 'visitas', label: 'Page Views' }, { id: 'relatorios', label: 'Relatórios customizados', also: ['construtor', 'relatorio'], separated: true }] },
  { key: 'financeiro', label: 'Financeiro', icon: Wallet, items: [{ id: 'resultado', label: 'Resultado' }, { id: 'custos', label: 'Custos' }] },
  { key: 'inventario', label: 'Inventário', icon: Network, items: [{ id: 'networks', label: 'Networks do GAM', also: ['conectar'] }, { id: 'rewards', label: 'Rewards', also: ['reward', 'rewardmetricas'] }, { id: 'adtags', label: 'Ad tags', also: ['adtag', 'adtagmetricas'] }] },
  { key: 'equipe', label: 'Equipe', icon: Users, items: [{ id: 'equipe', label: 'Membros', also: ['membro'] }, { id: 'grupos', label: 'Grupos', also: ['grupo', 'grupoinativo'] }] },
  { key: 'empresa', label: 'Empresa', icon: Settings, items: [{ id: 'configuracoes', label: 'Configurações' }, { id: 'fiscais', label: 'Dados fiscais' }] },
]
const INTERNAL_RAIL: RailGroup[] = [
  { key: 'clientes', label: 'Inventário', icon: Users, items: [{ id: 'interno', label: 'Clientes', also: ['cliente'] }, { id: 'contratos', label: 'Contratos' }, { id: 'resultados', label: 'Resultado dos clientes' }, { id: 'checklists', label: 'Checklists', also: ['checklist', 'checklistitens'] }, { id: 'rewardsinterno', label: 'Rewards', also: ['rewardinterno', 'rewardmetricasinterno'] }, { id: 'adtagsinterno', label: 'Ad tags', also: ['adtaginterno', 'adtagmetricasinterno'] }] },
  { key: 'comissoes', label: 'Comissões', icon: Wallet, items: [{ id: 'minhacomissao', label: 'Minha comissão' }, { id: 'minhasinvoices', label: 'Minhas invoices' }, { id: 'comissoes', label: 'Comissões da equipe' }, { id: 'invoices', label: 'Invoices', also: ['servicosinvoice', 'invoice'] }] },
  { key: 'ferramentas', label: 'Ferramentas', icon: Wrench, items: [{ id: 'tarefas', label: 'Tarefas', also: ['tarefa'] }, { id: 'modelosdash', label: 'Modelos de dashboard' }, { id: 'ferramentasgam', label: 'Ferramentas do GAM', also: ['execucaogam'] }] },
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
            return <div key={entry.id} className="contents">{entry.separated && <hr className="my-2 border-border" />}<button tabIndex={open ? 0 : -1} onClick={() => go(entry.id)} aria-current={active ? 'page' : undefined} className={cn('flex h-9 w-full items-center rounded-md px-2.5 text-left text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', active ? 'bg-secondary font-medium text-foreground' : 'text-muted-foreground hover:bg-accent hover:text-foreground')}>{entry.label}</button></div>
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
              <SelectTrigger className="h-9 w-[210px]" aria-label="Período"><SelectValue /></SelectTrigger>
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
              <SelectTrigger className="h-9 w-[210px]" aria-label="Período"><SelectValue /></SelectTrigger>
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
        <Table min={900}>
          <thead><tr><th className={th}>Network</th><th className={th}>Network code</th><th className={th}>Conexão</th><th className={th}>Status</th><th className={th}>Faturamento</th><th className={cn(th, 'text-right')}>Sites</th><th className={cn(th, 'text-right')}>Ad units</th><th className={th}>Última checagem</th></tr></thead>
          <tbody>
            {NETWORKS.map((n) => (
              <tr key={n.code} className="hover:bg-muted">
                <td className={cn(td, 'font-medium')}>{n.name}</td>
                <td className={td}><Code>{n.code}</Code></td>
                <td className={cn(td, 'text-muted-foreground')}>{n.via}</td>
                <td className={td}>{netStatus(n.status)}</td>
                <td className={td}><RevenueStatus data={n.revenue} /></td>
                <td className={cn(td, 'text-right tnum')}>{n.sites ?? '–'}</td>
                <td className={cn(td, 'text-right tnum')}>{n.units ?? '–'}</td>
                <td className={cn(td, 'text-muted-foreground')}>{n.checked}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <h2 className="mt-4 text-[20px] font-semibold tracking-tight">{t('net.sites')}</h2>
        <Table>
          <thead><tr><th className={th}>Site</th><th className={th}>Network</th><th className={th}>Aprovação no Ad Manager</th><th className={th}>Faturamento</th><th className={cn(th, 'text-right')}>Ad units</th></tr></thead>
          <tbody>
            {SITES.map((s) => (
              <tr key={s.domain} className="hover:bg-muted">
                <td className={td}><span className="inline-flex items-center gap-1.5 font-medium">{s.domain}<ExternalLink className="h-3.5 w-3.5 text-muted-foreground" /></span></td>
                <td className={cn(td, 'text-muted-foreground')}>{s.network}</td>
                <td className={td}>{s.approval === 'ok' ? <Status tone="ok">Aprovado</Status> : <Status tone="warn">Em análise pelo Google</Status>}</td>
                <td className={td}><RevenueStatus data={s.revenue} /></td>
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
  const valid = /^\d{6,12}$/.test(code)
  const running = checks?.some((c) => c.state === 'run') ?? false
  const failed = checks?.some((c) => c.state === 'fail') ?? false
  const done = !!checks && !running && !failed && !!checks[1]?.detail


  const test = () => {
    setChecks([
      { label: `Network ${code} cadastrada na sua Empresa`, state: 'run' },
      { label: 'Equipe Groone confirma que a network é sua', state: 'wait' },
      { label: 'Convite do MCM aceito e acesso testado', state: 'wait' },
    ])
    setTimeout(() => {
      setChecks((prev) => {
        if (!prev) return prev
        return [
          { ...prev[0], state: 'ok' },
          { ...prev[1], state: 'wait', detail: 'Você não precisa fazer nada. Quando a equipe confirmar, testamos a conexão e a network aparece como conectada.' },
          prev[2],
        ]
      })
    }, 900)
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
            <Step n={1} title="Aceite o convite do MCM da Groone">
              <p className="text-[14px] text-muted-foreground">No Ad Manager, abra <span className="text-foreground">Administrador › Multiple Customer Management</span> e aceite o convite da Groone. Se ainda não recebeu, fale com o seu responsável na Groone.</p>
            </Step>
            <Step n={2} title="Informe o network code">
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
            <p className="mt-2 text-[14px] text-muted-foreground">Informe o network code e clique em {t('wiz.test')}. Depois que a equipe Groone confirmar, sites e ad units chegam sozinhos.</p>
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
          <div id="cfg-aparencia" className="scroll-mt-8"><Card title="Cor secundária do sistema" desc="Usada nos botões principais, na seleção e nas vagas da equipe, num tom próprio para cada tema. Vale para todos da Empresa." footerNote="As amostras mostram a cor no seu tema de agora.">
            <RadioGroup value={accent} onValueChange={setAccent} className="flex flex-wrap gap-2" aria-label="Cor secundária do sistema">
              {ACCENTS.map((a) => (
                <Label key={a.id} htmlFor={`accent-${a.id}`} className={cn('flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-[14px] font-normal hover:bg-accent has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring', accent === a.id && 'border-foreground')}>
                  <RadioGroupItem id={`accent-${a.id}`} value={a.id} className="sr-only" />
                  <span className="h-4 w-4 rounded-full ring-1 ring-inset ring-foreground/10" style={{ background: `hsl(${a[swatchTheme(theme)]})` }} />{a.label}
                  {accent === a.id && <Check className="h-3.5 w-3.5" />}
                </Label>
              ))}
            </RadioGroup>
          </Card></div>
          <Card title="Tema" desc="Só para você, neste navegador.">
            <RadioGroup value={theme} onValueChange={setTheme} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Tema">
              {[['light', 'Claro'], ['dark', 'Escuro'], ['groone', 'GroOne'], ['system', 'Sistema']].map(([v, l]) => (
                <Label key={v} htmlFor={`theme-${v}`} className={cn('grid cursor-pointer gap-3 rounded-lg border p-3 font-normal hover:bg-accent has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring', theme === v && 'border-foreground')}>
                  <span className={cn('h-16 overflow-hidden rounded-md border', v === 'dark' ? 'bg-neutral-950' : v === 'groone' ? 'bg-[#030b17]' : v === 'light' ? 'bg-white' : 'bg-gradient-to-r from-white from-50% to-neutral-950 to-50%')} aria-hidden="true">
                    <span className={cn('mx-2 mt-2 block h-2 w-10 rounded-full', v === 'dark' ? 'bg-neutral-700' : v === 'groone' ? 'bg-[#1170D2]' : 'bg-neutral-200')} />
                    <span className={cn('mx-2 mt-1.5 block h-2 w-16 rounded-full', v === 'dark' ? 'bg-neutral-800' : v === 'groone' ? 'bg-[#0A213D]' : 'bg-neutral-100')} />
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
type ProtoClient = { name: string; contact: string; email: string; situation: ClientSituation; used: number; limit: number; referredBy: string | null; revenue: RevenueStatusData | null }
const PROTO_CLIENTS: ProtoClient[] = [
  { name: 'Blog Exemplo', contact: 'Pedro Henrique', email: 'pedro@blogexemplo.com', situation: 'active', used: 5, limit: 10, referredBy: null, revenue: { trend: 'scaling', perDay: 2350, change: 28 } },
  { name: 'Receitas da Vó', contact: 'Ana Ribeiro', email: 'ana@receitasdavo.com.br', situation: 'active', used: 2, limit: 5, referredBy: 'Blog Exemplo', revenue: { trend: 'steady', perDay: 640, change: -4 } },
  { name: 'Tech Notícias', contact: 'Caio Prado', email: 'contato@technoticias.com', situation: 'pending', used: 0, limit: 3, referredBy: null, revenue: null },
  { name: 'Guia do Pet', contact: 'Marina Luz', email: 'marina@guiadopet.com.br', situation: 'inactive', used: 6, limit: 6, referredBy: null, revenue: { trend: 'reducing', perDay: 380, change: -31 } },
  { name: 'Apostas Já', contact: 'Leo Melo', email: 'leo@apostasja.com', situation: 'banned', used: 1, limit: 3, referredBy: null, revenue: { trend: 'stopped', perDay: 0, change: -100 } },
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
      <form id="new-client" className="grid gap-6" onSubmit={(e) => { e.preventDefault(); if (ok) onDone({ name: form.name.trim(), contact: `${form.first} ${form.last}`, email: form.email.trim().toLowerCase(), situation: 'pending', used: 0, limit: Number(form.limit), revenue: null, referredBy: form.referrer === 'none' ? null : form.referrer }) }}>
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
          <thead><tr><th className={th}>Cliente</th><th className={th}>Contato</th><th className={th}>Funcionários</th><th className={th}>Situação</th><th className={th}>Faturamento</th><th className={cn(th, 'w-16')}><span className="sr-only">Abrir</span></th></tr></thead>
          <tbody>
            {list.map((c) => (
              <tr key={c.name} className="hover:bg-muted">
                <td className={td}><div className="flex items-center gap-3"><CompanyIcon name={c.name} image={c.name === 'Receitas da Vó' ? SAMPLE_LOGO : null} size={28} /><div className="min-w-0"><button className="font-medium hover:underline" onClick={() => go('cliente')}>{c.name}</button>{c.referredBy && <div className="text-[13px] text-muted-foreground">Indicado por {c.referredBy}</div>}</div></div></td>
                <td className={td}><div>{c.contact}</div><div className="text-[13px] text-muted-foreground">{c.email}</div></td>
                <td className={td}><span className="tnum text-[13px] text-muted-foreground">{c.used}/{c.limit}</span></td>
                <td className={td}><Status tone={SITUATION[c.situation][1]}>{SITUATION[c.situation][0]}</Status></td>
                <td className={td}><RevenueStatus data={c.revenue} /></td>
                <td className={td}><Button variant="ghost" size="sm" onClick={() => go('cliente')}>Abrir</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Body>
    </>
  )
}

/* ---------- Documentos e observações do cliente (core#188) ---------- */

type DocumentKind = 'identity' | 'address'
type DocumentState = 'missing' | 'pending' | 'approved' | 'rejected'
type ProtoDocument = { kind: DocumentKind; state: DocumentState; file: string | null; sentAt: string | null; reason: string | null; reviewer: string | null }

const DOCUMENT_LABEL: Record<DocumentKind, string> = { identity: 'Documento de identidade', address: 'Comprovante de residência' }
const DOCUMENT_HINT: Record<DocumentKind, string> = { identity: 'RG, CNH ou passaporte, com foto e legível.', address: 'Conta de luz, água ou banco dos últimos 3 meses, no nome do titular.' }
const DOCUMENT_STATE: Record<DocumentState, [string, 'ok' | 'bad' | 'ochre' | 'neutral']> = { missing: ['Não enviado', 'neutral'], pending: ['Em análise', 'ochre'], approved: ['Aprovado', 'ok'], rejected: ['Recusado', 'bad'] }

const INITIAL_DOCUMENTS: ProtoDocument[] = [
  { kind: 'identity', state: 'pending', file: 'rg-frente-verso.pdf', sentAt: '02/11/2026 18:40', reason: null, reviewer: null },
  { kind: 'address', state: 'rejected', file: 'conta-luz.jpg', sentAt: '02/11/2026 18:42', reason: 'A conta está no nome de outra pessoa. Envie uma no nome do titular da Empresa.', reviewer: 'Ana Souza' },
]

function DocumentRow({ doc, actions }: { doc: ProtoDocument; actions: React.ReactNode }) {
  const [label, tone] = DOCUMENT_STATE[doc.state]
  return (
    <li className="flex flex-col gap-3 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-3"><span className="text-[14px] font-medium">{DOCUMENT_LABEL[doc.kind]}</span><Status tone={tone}>{label}</Status></div>
        <p className="mt-1 text-[13px] text-muted-foreground">{doc.file ? <><span className="font-mono">{doc.file}</span> · enviado em <span className="tnum">{doc.sentAt}</span></> : DOCUMENT_HINT[doc.kind]}</p>
        {doc.state === 'rejected' && doc.reason && <p className="mt-2 max-w-[60ch] rounded-md border border-bad/30 bg-bad/5 px-3 py-2 text-[13px]">{doc.reason}</p>}
      </div>
      <div className="flex shrink-0 gap-2">{actions}</div>
    </li>
  )
}

function ClientDocumentsCard() {
  const [docs, setDocs] = useState<ProtoDocument[]>(INITIAL_DOCUMENTS)
  const send = (kind: DocumentKind) => {
    setDocs(docs.map((doc) => doc.kind === kind ? { ...doc, state: 'pending', file: kind === 'identity' ? 'identidade.pdf' : 'comprovante.pdf', sentAt: '03/11/2026 14:10', reason: null } : doc))
    toast.success('Documento enviado', { description: 'A equipe Groone vai analisar e você recebe um e-mail com a resposta.' })
  }
  return (
    <Card title="Documentos" desc="Como a Groone repassa a você o pagamento das networks Manage Inventory, precisamos confirmar quem recebe. Só a equipe Groone que analisa pagamentos vê estes arquivos." footerNote="JPG, PNG ou PDF, até 5 MB cada.">
      <ul className="divide-y">
        {docs.map((doc) => (
          <DocumentRow key={doc.kind} doc={doc} actions={<>
            {doc.file && <Button size="sm" variant="outline"><Download className="h-4 w-4" />Baixar</Button>}
            {doc.state !== 'approved' && <Button size="sm" variant={doc.state === 'pending' ? 'outline' : 'default'} onClick={() => send(doc.kind)}>{doc.file ? 'Enviar outro' : 'Enviar'}</Button>}
          </>} />
        ))}
      </ul>
    </Card>
  )
}

function StaffDocumentsCard() {
  const [docs, setDocs] = useState<ProtoDocument[]>(INITIAL_DOCUMENTS)
  const [rejecting, setRejecting] = useState<DocumentKind | null>(null)
  const [reason, setReason] = useState('')
  const decide = (kind: DocumentKind, state: DocumentState, why: string | null) => {
    setDocs(docs.map((doc) => doc.kind === kind ? { ...doc, state, reason: why, reviewer: 'Você' } : doc))
    toast.success(state === 'approved' ? 'Documento aprovado' : 'Documento recusado', { description: 'O cliente recebe um e-mail.' })
  }
  return (
    <Card title="Documentos" desc="Pedidos porque o cliente tem network Manage Inventory e a Groone repassa o pagamento. Só o cliente envia; aqui a equipe baixa, aprova ou recusa. Cada download fica na auditoria." className="lg:col-span-2">
      <ul className="divide-y">
        {docs.map((doc) => (
          <DocumentRow key={doc.kind} doc={doc} actions={<>
            {doc.file && <Button size="sm" variant="outline"><Download className="h-4 w-4" />Baixar</Button>}
            {doc.state === 'pending' && <><Button size="sm" variant="outline" onClick={() => { setReason(''); setRejecting(doc.kind) }}>Recusar</Button><Button size="sm" onClick={() => decide(doc.kind, 'approved', null)}><Check className="h-4 w-4" />Aprovar</Button></>}
            {(doc.state === 'approved' || doc.state === 'rejected') && doc.reviewer && <span className="self-center text-[12px] text-muted-foreground">por {doc.reviewer}</span>}
          </>} />
        ))}
      </ul>
      <Dialog open={rejecting !== null} onOpenChange={(open) => !open && setRejecting(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Recusar {rejecting ? DOCUMENT_LABEL[rejecting].toLowerCase() : ''}?</DialogTitle>
            <DialogDescription>O cliente vê o motivo e pode enviar outro arquivo.</DialogDescription></DialogHeader>
          <Field id="doc-reason" label="Motivo"><Textarea id="doc-reason" rows={3} value={reason} onChange={(event) => setReason(event.target.value)} placeholder="O que está errado e o que enviar no lugar." /></Field>
          <DialogFooter><Button variant="outline" onClick={() => setRejecting(null)}>Cancelar</Button><Button variant="destructive" disabled={reason.trim().length < 5} onClick={() => { if (rejecting) decide(rejecting, 'rejected', reason.trim()); setRejecting(null) }}>Recusar</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

type ProtoNote = { id: number; author: string; createdAt: string; message: string; editedBy: string | null; editedAt: string | null }

const INITIAL_NOTES: ProtoNote[] = [
  { id: 2, author: 'Ana Souza', createdAt: '02/11/2026 16:20', message: 'Cliente pediu para receber o pagamento em conta nos EUA a partir de dezembro.\nAguardando os dados fiscais novos.', editedBy: 'Pedro Henrique', editedAt: '03/11/2026 09:05' },
  { id: 1, author: 'Você', createdAt: '28/10/2026 11:02', message: 'Ligação de boas-vindas feita. Vai migrar os outros dois sites para o MCM em novembro.', editedBy: null, editedAt: null },
]

function NotesCard() {
  const [notes, setNotes] = useState<ProtoNote[]>(INITIAL_NOTES)
  const [draft, setDraft] = useState('')
  const [editing, setEditing] = useState<ProtoNote | null>(null)
  const [deleting, setDeleting] = useState<ProtoNote | null>(null)
  const add = () => { setNotes([{ id: Date.now(), author: 'Você', createdAt: '03/11/2026 14:15', message: draft.trim(), editedBy: null, editedAt: null }, ...notes]); setDraft('') }
  return (
    <Card title="Observações" desc="Notas da equipe Groone sobre o cliente. O cliente nunca vê. Edita quem escreveu ou quem tem a permissão; apaga quem tem a permissão." className="lg:col-span-2">
      <div className="grid gap-3">
        <Textarea aria-label="Nova observação" rows={3} value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Escreva uma observação sobre o cliente..." />
        <div className="flex justify-end"><Button size="sm" disabled={draft.trim().length < 5} onClick={add}><Plus className="h-4 w-4" />Adicionar</Button></div>
      </div>
      <ul className="mt-5 divide-y border-t">
        {notes.map((note) => (
          <li key={note.id} className="py-4 last:pb-0">
            <div className="flex items-start justify-between gap-3">
              <div className="text-[13px]"><span className="font-medium">{note.author}</span><span className="text-muted-foreground"> · <span className="tnum">{note.createdAt}</span></span></div>
              <DropdownMenu><DropdownMenuTrigger asChild><Button size="icon" variant="ghost" className="h-8 w-8" aria-label="Ações da observação"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                <DropdownMenuContent align="end"><DropdownMenuItem onSelect={() => setEditing({ ...note })}><Pencil className="h-4 w-4" />Editar</DropdownMenuItem><DropdownMenuItem className="text-bad" onSelect={() => setDeleting(note)}><Trash2 className="h-4 w-4" />Apagar</DropdownMenuItem></DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p className="mt-1 whitespace-pre-line text-[14px]">{note.message}</p>
            {note.editedBy && <p className="mt-2 text-[12px] text-muted-foreground">Editada por {note.editedBy} em <span className="tnum">{note.editedAt}</span></p>}
          </li>
        ))}
      </ul>
      <Dialog open={editing !== null} onOpenChange={(open) => !open && setEditing(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Editar observação</DialogTitle><DialogDescription>{editing && editing.author !== 'Você' ? `Escrita por ${editing.author}. A observação vai mostrar que você editou.` : 'A observação mostra a data da última edição.'}</DialogDescription></DialogHeader>
          <Textarea aria-label="Observação" rows={4} value={editing?.message ?? ''} onChange={(event) => editing && setEditing({ ...editing, message: event.target.value })} />
          <DialogFooter><Button variant="outline" onClick={() => setEditing(null)}>Cancelar</Button><Button onClick={() => { if (editing) setNotes(notes.map((note) => note.id === editing.id ? { ...editing, editedBy: editing.author === 'Você' ? null : 'Você', editedAt: '03/11/2026 14:20' } : note)); setEditing(null) }}>Salvar</Button></DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={deleting !== null} onOpenChange={(open) => !open && setDeleting(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Apagar observação?</DialogTitle><DialogDescription>Ela some para toda a equipe. A auditoria guarda quem apagou.</DialogDescription></DialogHeader>
          <DialogFooter><Button variant="outline" onClick={() => setDeleting(null)}>Cancelar</Button><Button variant="destructive" onClick={() => { if (deleting) setNotes(notes.filter((note) => note.id !== deleting.id)); setDeleting(null) }}>Apagar</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

type ClientNetwork = { code: string; name: string | null; state: 'confirm' | 'pending' | 'ok'; by: string }

function ClientNetworksCard() {
  const [networks, setNetworks] = useState<ClientNetwork[]>([{ code: '22334455667', name: 'Tech Notícias', state: 'confirm', by: 'Cadastrada pelo cliente' }])
  const [adding, setAdding] = useState(false)
  const [code, setCode] = useState('')
  const valid = /^\d{1,20}$/.test(code)
  const state = (network: ClientNetwork) => network.state === 'confirm' ? <Status tone="ochre">Aguardando confirmação</Status> : network.state === 'pending' ? <Status tone="warn">Testando conexão</Status> : <Status tone="ok">Conectada</Status>
  const add = () => {
    if (!valid) return
    setNetworks((prev) => [{ code, name: null, state: 'pending', by: 'Cadastrada pela equipe' }, ...prev])
    setAdding(false); setCode('')
    toast.success('Network cadastrada', { description: 'Testamos a conexão agora. Sem o MCM aceito, ela fica pendente.' })
  }
  const confirm = (target: ClientNetwork) => {
    setNetworks((prev) => prev.map((network) => network.code === target.code ? { ...network, state: 'pending' } : network))
    toast.success('Network confirmada', { description: 'Testamos a conexão agora.' })
  }
  return (
    <Card title="Networks" desc="Ligadas ao cliente e ao dono dele. A cadastrada pelo cliente só conecta depois que a equipe confirma que é dele." className="lg:col-span-2"
      footer={<Button size="sm" variant="outline" onClick={() => setAdding(true)}><Plus className="h-4 w-4" />Adicionar network</Button>}>
      {networks.length === 0 ? <p className="text-[14px] text-muted-foreground">Nenhuma network ainda.</p> : (
        <Table>
          <thead><tr><th className={th}>Network</th><th className={th}>Network code</th><th className={th}>Status</th><th className={th}>Cadastro</th><th className={th} /></tr></thead>
          <tbody>
            {networks.map((network) => (
              <tr key={network.code} className="hover:bg-muted">
                <td className={cn(td, 'font-medium')}>{network.name ?? <span className="text-muted-foreground">Sem nome ainda</span>}</td>
                <td className={td}><Code>{network.code}</Code></td>
                <td className={td}>{state(network)}</td>
                <td className={cn(td, 'text-muted-foreground')}>{network.by}</td>
                <td className={cn(td, 'text-right')}>{network.state === 'confirm' && <Button size="sm" onClick={() => confirm(network)}>Confirmar</Button>}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <Dialog open={adding} onOpenChange={setAdding}>
        <DialogContent><DialogHeader><DialogTitle>Adicionar network</DialogTitle>
          <DialogDescription>A network fica ligada a Tech Notícias e ao dono dela. Testamos a conexão logo depois.</DialogDescription></DialogHeader>
          <form className="grid gap-2" onSubmit={(e) => { e.preventDefault(); add() }}>
            <Label htmlFor="client-net-code">Network code</Label>
            <Input id="client-net-code" inputMode="numeric" className="h-10 font-mono tnum" value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))} />
          </form>
          <DialogFooter><Button variant="outline" onClick={() => setAdding(false)}>Cancelar</Button><Button disabled={!valid} onClick={add}>Adicionar</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
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
        <ClientNetworksCard />
        <StaffDocumentsCard />
        <NotesCard />
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
        <ClientDocumentsCard />
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
            <Select defaultValue="6"><SelectTrigger className="h-9 w-[210px]" aria-label="Período"><SelectValue /></SelectTrigger>
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
  { ...blank(), id: 'r5', name: 'Page views por hora', metrics: ['page_views'], dims: ['hour'], period: 'yesterday', chart: 'area', visibility: 'company', owner: 'Carla Mendes', updated: '18/10/2026' },
  { ...blank(), id: 'r6', name: 'Receita por país', metrics: ['revenue'], dims: ['country'], chart: 'pie', visibility: 'company', updated: '15/10/2026' },
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

const REPORT_DESCRIPTIONS: Record<string, string> = {
  r1: 'Receita, impressões e eCPM de cada site. O eCPM fica verde acima de R$ 4,50.',
  r2: 'A métrica nossa de RPM por requisição contra o eCPM, dia a dia, comparando com o mês anterior.',
  r3: 'Os 5 ad units que mais renderam nos últimos 30 dias.',
  r4: 'Quanto a Empresa já faturou no mês, contra o mesmo ponto do mês passado.',
  r5: 'Os horários de mais visita, ontem, somando todos os sites.',
  r6: 'De onde vem a receita, nos últimos 30 dias.',
}
const PERIOD_LABEL = Object.fromEntries(PERIODS.map(([k, l]) => [k, l])) as Record<PeriodKey, string>

/** Miniatura do relatório no cartão da lista: a forma do gráfico salvo, sem eixo nem legenda. */
function ReportThumb({ report, customs }: { report: ReportDraft; customs: CustomDef[] }) {
  const first = report.metrics[0]
  if (!first) return null
  const def = metricDef(first, customs)
  const color = report.styles[first]?.color
  const rows = dimRows(report)
  const values = rows.map((r) => sampleValue(first, r, def.kind))
  const max = Math.max(...values) || 1
  if (report.chart === 'kpi') {
    const now = sampleValue(first, 'total', def.kind)
    return (
      <div className="flex h-full flex-col justify-center px-5">
        <span className="text-[12px] font-medium text-muted-foreground">{def.label}</span>
        <span className="text-[28px] font-semibold tracking-[-0.04em] tnum" style={{ color }}>{fmt(def.kind, now)}</span>
        {report.compare && <Delta now={now} before={sampleValue(first, 'prev', def.kind)} />}
      </div>
    )
  }
  if (report.chart === 'line' || report.chart === 'area') {
    const W = 300, H = 96
    const x = (i: number) => (rows.length === 1 ? W / 2 : (i * W) / (rows.length - 1))
    const y = (v: number) => 8 + (H - 16) * (1 - v / max)
    const path = values.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join('')
    return (
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="h-full w-full" aria-hidden="true">
        {report.chart === 'area' && <path d={`${path}L${W},${H}L0,${H}Z`} className="fill-foreground/[0.06]" />}
        <path d={path} fill="none" strokeWidth={2} vectorEffect="non-scaling-stroke" className="stroke-foreground" style={{ stroke: color }} />
      </svg>
    )
  }
  if (report.chart === 'bar' || report.chart === 'pie' || report.chart === 'funnel') {
    return (
      <div className="flex h-full flex-col justify-center gap-1.5 px-5">
        {rows.slice(0, 4).map((r, i) => (
          <div key={r} className="grid grid-cols-[96px_1fr] items-center gap-2 text-[11px] text-muted-foreground">
            <span className="truncate">{r}</span>
            <span className="block h-2 rounded-sm bg-foreground" style={{ width: `${(values[i] / max) * 100}%`, background: color, opacity: color ? 1 : 1 - i * 0.15 }} />
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="grid h-full content-center gap-1 px-5 text-[11px]">
      {rows.slice(0, 3).map((r) => (
        <div key={r} className="flex items-center justify-between gap-3 border-b border-border/60 pb-1 last:border-0">
          <span className="truncate text-muted-foreground">{r}</span>
          <span className="tnum">{fmt(def.kind, sampleValue(first, r, def.kind))}</span>
        </div>
      ))}
    </div>
  )
}

/** Menu de ações de um relatório salvo, igual no cartão, na linha da lista e na tela do relatório. */
function ReportMenu({ report, pinned, onOpen, onEdit, onDuplicate, onPin, onRemove }: { report: ReportDraft; pinned: boolean; onOpen?: () => void; onEdit: () => void; onDuplicate: () => void; onPin: () => void; onRemove: () => void }) {
  const editable = report.owner === ME
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="h-8 w-8" aria-label={`Ações de ${report.name}`}><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {onOpen && <DropdownMenuItem onSelect={onOpen}>Abrir</DropdownMenuItem>}
        {editable && <DropdownMenuItem onSelect={onEdit}>Editar</DropdownMenuItem>}
        <DropdownMenuItem onSelect={onDuplicate}>Duplicar</DropdownMenuItem>
        <DropdownMenuItem onSelect={onPin}>{pinned ? 'Desafixar' : 'Fixar no topo'}</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={() => toast('Exportando CSV…')}>Exportar CSV</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => toast('Exportando XLSX…')}>Exportar XLSX</DropdownMenuItem>
        {editable && (<><DropdownMenuSeparator /><DropdownMenuItem className="text-bad focus:text-bad" onSelect={onRemove}>Apagar</DropdownMenuItem></>)}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

/** Quem vê o relatório, com cadeado quando é só do dono. */
function WhoSees({ report }: { report: ReportDraft }) {
  return <span className="inline-flex items-center gap-1">{report.visibility === 'private' && <Lock className="h-3.5 w-3.5" aria-hidden="true" />}{report.visibility === 'roles' ? report.roles.join(', ') : VIS_LABEL[report.visibility]}</span>
}

type ReportActions = { view: (id: string) => void; edit: (id: string | null) => void; duplicate: (r: ReportDraft) => void; pin: (id: string) => void; remove: (r: ReportDraft) => void }

/** Cartão do relatório salvo: miniatura do gráfico, nome, descrição e de quem é. O cartão inteiro abre a leitura. */
function ReportCard({ report, customs, pinned, actions }: { report: ReportDraft; customs: CustomDef[]; pinned: boolean; actions: ReportActions }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border bg-card transition-colors hover:border-foreground/25">
      <div className="h-[112px] border-b bg-muted/60 py-2"><ReportThumb report={report} customs={customs} /></div>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <div className="flex items-start gap-2">
          <h3 className="min-w-0 flex-1 text-[15px] font-semibold leading-snug tracking-tight">
            <button onClick={() => actions.view(report.id!)} className="text-left after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:rounded-lg focus-visible:after:ring-2 focus-visible:after:ring-ring">{report.name}</button>
          </h3>
          {pinned && <Pin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-label="Fixado" />}
          <div className="relative z-10 -mr-1.5 -mt-1"><ReportMenu report={report} pinned={pinned} onEdit={() => actions.edit(report.id)} onDuplicate={() => actions.duplicate(report)} onPin={() => actions.pin(report.id!)} onRemove={() => actions.remove(report)} /></div>
        </div>
        <p className="line-clamp-2 flex-1 text-[13px] text-muted-foreground">{REPORT_DESCRIPTIONS[report.id!] ?? report.description ?? ''}</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-muted-foreground">
          <span className="flex items-center gap-1.5 text-foreground"><Avatar name={report.owner} size={18} />{report.owner === ME ? 'Você' : report.owner.split(' ')[0]}</span>
          <WhoSees report={report} />
          <span>{PERIOD_LABEL[report.period]}</span>
          <span className="ml-auto">{report.updated}</span>
        </div>
      </div>
    </article>
  )
}

/** Lista dos relatórios customizados: fixados no topo, cartões com miniatura ou lista compacta, abas, busca e modelos. */
function ReportsScreen({ reports, setReports, customs, pinned, setPinned, view, edit, openTemplate }: { reports: ReportDraft[]; setReports: (r: ReportDraft[]) => void; customs: CustomDef[]; pinned: string[]; setPinned: (p: string[]) => void; view: (id: string) => void; edit: (id: string | null) => void; openTemplate: (key: string) => void }) {
  const [tab, setTab] = useState<'all' | 'mine' | 'shared' | 'templates'>('all')
  const [layout, setLayout] = useState<'cards' | 'list'>('cards')
  const [query, setQuery] = useState('')
  const [removing, setRemoving] = useState<ReportDraft | null>(null)
  const visible = reports
    .filter((r) => tab === 'all' || (tab === 'mine' ? r.owner === ME : r.owner !== ME))
    .filter((r) => r.name.toLowerCase().includes(query.trim().toLowerCase()))
  const top = visible.filter((r) => pinned.includes(r.id!))
  const rest = visible.filter((r) => !pinned.includes(r.id!))
  const counts = { all: reports.length, mine: reports.filter((r) => r.owner === ME).length, shared: reports.filter((r) => r.owner !== ME).length, templates: TEMPLATES.length }
  const actions: ReportActions = {
    view, edit,
    duplicate: (r) => {
      const copy = { ...r, id: `r${Date.now()}`, name: `${r.name} (cópia)`, owner: ME, visibility: 'private' as Visibility, roles: [], updated: 'Agora' }
      setReports([copy, ...reports])
      toast.success('Cópia criada', { description: 'A cópia é sua e começa privada.' })
    },
    pin: (id) => setPinned(pinned.includes(id) ? pinned.filter((p) => p !== id) : [...pinned, id]),
    remove: setRemoving,
  }
  const tabs = [['all', 'Todos'], ['mine', 'Meus'], ['shared', 'Compartilhados comigo'], ['templates', 'Modelos da Groone']] as const
  /** Um bloco de relatórios no formato escolhido (cartões ou lista). */
  const block = (items: ReportDraft[]) => layout === 'cards' ? (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{items.map((r) => <ReportCard key={r.id} report={r} customs={customs} pinned={pinned.includes(r.id!)} actions={actions} />)}</div>
  ) : (
    <Table min={760}>
      <thead><tr><th className={th}>Nome</th><th className={th}>Visualização</th><th className={th}>Dono</th><th className={th}>Quem vê</th><th className={th}>Alterado</th><th className={cn(th, 'w-12')}><span className="sr-only">Ações</span></th></tr></thead>
      <tbody>
        {items.map((r) => (
          <tr key={r.id} className="hover:bg-muted">
            <td className={td}><button onClick={() => view(r.id!)} className="text-left font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{r.name}</button>{pinned.includes(r.id!) && <Pin className="ml-1.5 inline h-3.5 w-3.5 text-muted-foreground" aria-label="Fixado" />}</td>
            <td className={td}><Badge>{CHART_LABEL[r.chart]}</Badge></td>
            <td className={cn(td, 'whitespace-nowrap')}><span className="flex items-center gap-2"><Avatar name={r.owner} size={22} />{r.owner === ME ? 'Você' : r.owner}</span></td>
            <td className={cn(td, 'whitespace-nowrap text-muted-foreground')}><WhoSees report={r} /></td>
            <td className={cn(td, 'whitespace-nowrap text-muted-foreground')}>{r.updated}</td>
            <td className={td}><ReportMenu report={r} pinned={pinned.includes(r.id!)} onOpen={() => view(r.id!)} onEdit={() => edit(r.id)} onDuplicate={() => actions.duplicate(r)} onPin={() => actions.pin(r.id!)} onRemove={() => setRemoving(r)} /></td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
  return (
    <>
      <PageHeader title="Relatórios customizados" sub="Os relatórios que você e a equipe montaram com as métricas do GAM, das page views e as suas."
        actions={<Button onClick={() => edit(null)} className="h-9"><Plus className="h-4 w-4" />Criar relatório</Button>} />
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
            <div className="flex w-full items-center gap-2 sm:w-auto">
              <div className="relative flex-1 sm:w-[280px] sm:flex-none">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar pelo nome" aria-label="Buscar relatório" className="h-9 pl-9" />
              </div>
              <div className="flex rounded-md border bg-background p-0.5" role="group" aria-label="Mostrar como">
                {([['cards', LayoutGrid, 'Cartões'], ['list', List, 'Lista']] as const).map(([k, Icon, l]) => (
                  <button key={k} onClick={() => setLayout(k)} aria-pressed={layout === k} title={l} className={cn('flex h-8 w-8 items-center justify-center rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', layout === k ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground')}><Icon className="h-4 w-4" /><span className="sr-only">{l}</span></button>
                ))}
              </div>
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
          <>
            {top.length > 0 && <section className="grid gap-3"><h2 className="text-[12px] font-medium uppercase tracking-wide text-muted-foreground">Fixados</h2>{block(top)}</section>}
            {rest.length > 0 && <section className="grid gap-3">{top.length > 0 && <h2 className="text-[12px] font-medium uppercase tracking-wide text-muted-foreground">Outros relatórios</h2>}{block(rest)}</section>}
          </>
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

/** Leitura do relatório salvo: totais no topo, gráfico e tabela. Período e comparação mudam só a visita, não o relatório. */
function ReportViewScreen({ report, customs, pinned, onPin, onBack, onEdit, onDuplicate }: { report: ReportDraft; customs: CustomDef[]; pinned: boolean; onPin: () => void; onBack: () => void; onEdit: () => void; onDuplicate: () => void }) {
  const [period, setPeriod] = useState<PeriodKey>(report.period)
  const [compare, setCompare] = useState(report.compare)
  const editable = report.owner === ME
  const shown: ReportDraft = { ...report, period, compare }
  const changed = period !== report.period || compare !== report.compare
  const metrics = report.metrics.map((m) => ({ key: m, ...metricDef(m, customs) }))
  const chartCard = report.chart !== 'table' && report.chart !== 'kpi'
  return (
    <>
      <div className="border-b bg-background">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-end justify-between gap-x-6 gap-y-4 px-4 py-10 sm:px-6">
          <div className="min-w-0 max-w-[72ch]">
            <Button variant="ghost" size="sm" onClick={onBack} className="-ml-2.5 mb-3 text-muted-foreground"><ArrowLeft className="h-4 w-4" />Relatórios customizados</Button>
            <h1 className="text-[32px] font-semibold leading-tight tracking-[-0.04em]">{report.name}</h1>
            <p className="mt-2 text-[15px] text-muted-foreground">{REPORT_DESCRIPTIONS[report.id!] ?? report.description}</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted-foreground">
              <span className="flex items-center gap-1.5 text-foreground"><Avatar name={report.owner} size={20} />{report.owner === ME ? 'Seu relatório' : report.owner}</span>
              <WhoSees report={report} />
              <span>Alterado {/^(hoje|ontem)/i.test(report.updated) ? report.updated.toLowerCase() : `em ${report.updated}`}</span>
              <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden="true" />Dados até hoje, 14:00</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="icon" className="h-9 w-9" onClick={onPin} aria-pressed={pinned} title={pinned ? 'Desafixar' : 'Fixar no topo da lista'}>{pinned ? <PinOff className="h-4 w-4" /> : <Pin className="h-4 w-4" />}<span className="sr-only">{pinned ? 'Desafixar' : 'Fixar'}</span></Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild><Button variant="outline" className="h-9"><Download className="h-4 w-4" />Exportar</Button></DropdownMenuTrigger>
              <DropdownMenuContent align="end"><DropdownMenuItem onSelect={() => toast('Exportando CSV…')}>CSV</DropdownMenuItem><DropdownMenuItem onSelect={() => toast('Exportando XLSX…')}>XLSX (Excel)</DropdownMenuItem></DropdownMenuContent>
            </DropdownMenu>
            {editable ? <Button className="h-9" onClick={onEdit}><Pencil className="h-4 w-4" />Editar</Button> : <Button className="h-9" onClick={onDuplicate}><Copy className="h-4 w-4" />Duplicar para editar</Button>}
          </div>
        </div>
      </div>
      <Body>
        <div className="flex flex-wrap items-center gap-2">
          <Select value={period} onValueChange={(v) => setPeriod(v as PeriodKey)}>
            <SelectTrigger className="h-9 w-[210px]" aria-label="Período"><SelectValue /></SelectTrigger>
            <SelectContent>{PERIODS.map(([k, l]) => <SelectItem key={k} value={k}>{l}{k === report.period ? ' (salvo)' : ''}</SelectItem>)}</SelectContent>
          </Select>
          <button onClick={() => setCompare(!compare)} aria-pressed={compare} className={cn('flex h-9 items-center gap-2 rounded-md border bg-background px-3 text-[13px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', compare ? 'text-foreground' : 'text-muted-foreground hover:text-foreground')}>
            <span className={cn('flex h-4 w-4 items-center justify-center rounded-[4px] border', compare && 'border-primary bg-primary text-primary-foreground')}>{compare && <Check className="h-3 w-3" />}</span>Comparar com o período anterior
          </button>
          {report.dims.map((d) => <Badge key={d}>Por {R_DIMENSIONS.find((x) => x.key === d)?.label.toLowerCase()}</Badge>)}
          {report.filters.map((f) => <Badge key={f.field}>{R_DIMENSIONS.find((x) => x.key === f.field)?.label}: {f.values.join(', ')}</Badge>)}
          {changed && (
            <span className="ml-auto flex items-center gap-2 text-[13px] text-muted-foreground">
              Vendo diferente do salvo
              <Button variant="ghost" size="sm" className="h-8" onClick={() => { setPeriod(report.period); setCompare(report.compare) }}>Voltar ao salvo</Button>
              {editable && <Button variant="outline" size="sm" className="h-8" onClick={() => toast.success('Relatório atualizado', { description: `Agora abre em ${PERIOD_LABEL[period].toLowerCase()}.` })}>Salvar assim</Button>}
            </span>
          )}
        </div>

        <div className={cn('grid gap-px overflow-hidden rounded-lg border bg-border', metrics.length === 1 ? 'grid-cols-1' : metrics.length === 2 ? 'sm:grid-cols-2' : metrics.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4')}>
          {metrics.map((m) => {
            const now = sampleValue(m.key, `total-${period}`, m.kind)
            const scale = report.styles[m.key]?.scale
            return (
              <div key={m.key} className="bg-card p-5">
                <div className="flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground">{report.styles[m.key]?.color && <span className="h-2 w-2 rounded-full" style={{ background: report.styles[m.key]?.color }} aria-hidden="true" />}{m.label}{m.custom && <Badge>Sua</Badge>}</div>
                <div className={cn('mt-1 font-semibold tracking-[-0.04em] tnum', report.chart === 'kpi' ? 'text-[44px]' : 'text-[28px]')} style={scale ? { color: `hsl(${scaleHue(scale, now)} 75% 38%)` } : undefined}>{fmt(m.kind, now)}</div>
                <div className="mt-1 min-h-5">{compare ? <Delta now={now} before={sampleValue(m.key, `prev-${period}`, m.kind)} /> : <span className="text-[13px] text-muted-foreground">{PERIOD_LABEL[period]}</span>}</div>
              </div>
            )
          })}
        </div>

        {chartCard && <Card title={`${metrics[0]?.label}${report.dims[0] ? ` por ${R_DIMENSIONS.find((x) => x.key === axisSplit(report).axis)?.label.toLowerCase()}` : ''}`} className="min-w-0"><ReportChart draft={shown} customs={customs} /></Card>}

        {report.dims.length > 0 && (
          <section className="grid gap-3">
            <div className="flex items-end justify-between gap-3"><h2 className="text-[16px] font-semibold tracking-tight">Dados</h2><span className="text-[13px] text-muted-foreground">{comboRows(shown).length} linhas</span></div>
            <ReportTable draft={shown} customs={customs} />
          </section>
        )}
      </Body>
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
        <Button variant="ghost" size="sm" onClick={onBack} className="-ml-1"><ArrowLeft className="h-4 w-4" />Voltar</Button>
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
        <main className="order-3 min-w-0 bg-muted lg:order-2">
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
        <aside className="order-2 border-b lg:order-3 lg:border-b-0 lg:border-l" aria-label="Configuração">
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
              ['Setembro', money.format(591 - 23.4 - 40), 'Validada · crie a invoice'],
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
              ['Sem invoice', String(toIssue.length), 'Validadas, esperando a invoice'],
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
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {toIssue.length > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-card px-4 py-3 text-[14px]">
            <span className="text-muted-foreground">{toIssue.length} {toIssue.length === 1 ? 'pessoa tem' : 'pessoas têm'} setembro validado e ainda sem invoice. A comissão passa a emitida quando a pessoa cria a invoice ({money.format(toIssue.reduce((sum, item) => sum + monthTotal(item), 0))}).</span>
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

/* ---------- painel interno: invoices da equipe (avant-core#156) ---------- */

type InvoiceStatus = 'draft' | 'issued' | 'paid'
type InvoiceLine = { id: string; title: string; description: string; amount: number; locked: boolean }
type Payee = { docType: string; docNumber: string; legalName: string; phone: string; address: string; bank: string; swift: string; account: string; routing: string }
type ProtoInvoice = { id: number; number: string; owner: string; role: string; month: string; status: InvoiceStatus; lines: InvoiceLine[]; created: string; issued?: string; paid?: string; returned?: { by: string; at: string; reason: string }; payee?: Payee }
type InvoiceService = { id: string; title: string; description: string }

const INVOICE_STATUS: Record<InvoiceStatus, [string, 'ochre' | 'neutral' | 'ok']> = { draft: ['Rascunho', 'ochre'], issued: ['Emitida', 'neutral'], paid: ['Paga', 'ok'] }
const ME_STAFF = 'Lucas Prado'
/** Quem paga a invoice: os dados da GroOne, os mesmos do Genius. */
const GROONE_PAYER = { name: 'GROONE, LLC', ein: '30-1462306', address: '1191 E Newport Center Dr 103, Deerfield Beach, FL 33442' }
const PERSON_DOCUMENTS = ['Brasil · CPF', 'Argentina · CUIL/DNI', 'Chile · RUT', 'Colômbia · CC', 'México · CURP/RFC', 'Peru · DNI', 'Portugal · NIF', 'Espanha · NIF/DNI', 'Estados Unidos · SSN/ITIN', 'Reino Unido · NINO']
const INITIAL_PAYEE: Payee = { docType: 'Brasil · CPF', docNumber: '123.456.789-09', legalName: 'Lucas Prado de Almeida', phone: '+55 11 98888-0000', address: 'Rua Exemplo, 200, Campinas, SP', bank: 'Banco Exemplo', swift: 'EXMPBRSP', account: '98765-4', routing: '0001' }
const INITIAL_SERVICES: InvoiceService[] = [
  { id: 's1', title: 'Account Management', description: 'Monthly follow-up of the client portfolio.' },
  { id: 's2', title: 'Client Prospecting', description: 'Meetings and proposals with new publishers.' },
  { id: 's3', title: 'Technical Support', description: 'Ad unit and tag adjustments on client sites.' },
  { id: 's4', title: 'Training', description: 'Training sessions for clients or the team.' },
]
/** Linhas travadas da comissão de um mês, em inglês e com os textos do Genius; a dedução e os descontos só entram quando há valor. */
const commissionLines = (month: string, commission: number, deduction: number, adjustment: number): InvoiceLine[] => [
  { id: `c-${month}`, title: 'New Client Acquisition Commission', description: 'Percentage-based earnings from the company revenue share on clients acquired by the employee.', amount: commission, locked: true },
  ...(deduction ? [{ id: `d-${month}`, title: 'Commission Adjustment — Google Policy Deductions', description: 'Proportional deductions applied to commission earnings due to invalid traffic on acquired client networks.', amount: -deduction, locked: true }] : []),
  ...(adjustment ? [{ id: `a-${month}`, title: 'Commission Adjustment — Discounts', description: 'Discounts applied by Groone to commission earnings during the period.', amount: -adjustment, locked: true }] : []),
]
const INITIAL_INVOICES: ProtoInvoice[] = [
  { id: 1184, number: 'INV-001184-7c2e', owner: 'Marina Alves', role: 'Comercial externo', month: 'Setembro 2026', status: 'issued', created: '16/10/2026', issued: '16/10/2026', payee: { ...INITIAL_PAYEE, legalName: 'Marina Alves', docNumber: '987.654.321-00' },
    lines: [...commissionLines('Setembro', 812.2, 31.1, 0), { id: 'm1', title: 'Account Management', description: '12 clients in the portfolio.', amount: 300, locked: false }] },
  { id: 1185, number: 'INV-001185-a91f', owner: 'Pedro Henrique', role: 'Comercial interno', month: 'Setembro 2026', status: 'issued', created: '17/10/2026', issued: '17/10/2026', payee: { ...INITIAL_PAYEE, legalName: 'Pedro Henrique', docNumber: '111.222.333-44' },
    lines: [...commissionLines('Setembro', 402.1, 12.8, 0)] },
  { id: 1186, number: 'INV-001186-03bd', owner: 'Júlia Santos', role: 'Comercial interno', month: 'Setembro 2026', status: 'draft', created: '17/10/2026', returned: { by: 'Pedro Henrique', at: '20/10/2026', reason: 'O treinamento foi de 2 horas, não 20. Corrija o valor e emita de novo.' },
    lines: [...commissionLines('Setembro', 455.3, 14.0, 0), { id: 'j1', title: 'Training', description: 'Onboarding training for new clients, 20 hours.', amount: 2000, locked: false }] },
  { id: 1102, number: 'INV-001102-e45a', owner: ME_STAFF, role: 'Comercial externo', month: 'Agosto 2026', status: 'paid', created: '15/09/2026', issued: '15/09/2026', paid: '25/09/2026', payee: INITIAL_PAYEE,
    lines: [...commissionLines('Agosto', 520.5, 18.9, 0), { id: 'l1', title: 'Client Prospecting', description: '4 meetings with recipe publishers.', amount: 150, locked: false }] },
  { id: 1103, number: 'INV-001103-5d10', owner: 'Marina Alves', role: 'Comercial externo', month: 'Agosto 2026', status: 'paid', created: '15/09/2026', issued: '16/09/2026', paid: '25/09/2026', payee: { ...INITIAL_PAYEE, legalName: 'Marina Alves', docNumber: '987.654.321-00' },
    lines: [...commissionLines('Agosto', 744.0, 28.3, 0)] },
  { id: 1021, number: 'INV-001021-b7e3', owner: ME_STAFF, role: 'Comercial externo', month: 'Julho 2026', status: 'paid', created: '15/08/2026', issued: '15/08/2026', paid: '26/08/2026', payee: INITIAL_PAYEE,
    lines: [...commissionLines('Julho', 488.2, 15.0, 0)] },
]
/** Total da invoice: a soma das linhas. */
const invoiceTotal = (invoice: ProtoInvoice) => invoice.lines.reduce((sum, line) => sum + line.amount, 0)
/** Converte o texto do valor, com vírgula ou ponto, em número. */
const parseMoney = (text: string) => Number(text.replace(/\./g, '').replace(',', '.'))

type InvoiceState = { invoices: ProtoInvoice[]; setInvoices: (invoices: ProtoInvoice[]) => void; services: InvoiceService[]; setServices: (services: InvoiceService[]) => void; payee: Payee; setPayee: (payee: Payee) => void; open: (id: number, from: 'mine' | 'all') => void; go: (s: Screen) => void }

/** Modal com os dados de quem recebe, os mesmos dos dados fiscais do cliente. */
function PayeeDialog({ open, onOpenChange, payee, onSave }: { open: boolean; onOpenChange: (open: boolean) => void; payee: Payee; onSave: (payee: Payee) => void }) {
  const [form, setForm] = useState(payee)
  const set = (key: keyof Payee) => (event: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [key]: event.target.value })
  const valid = Object.values(form).every((value) => value.trim().length > 0)
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[640px]">
        <DialogHeader><DialogTitle>Dados de recebimento</DialogTitle><DialogDescription>Os seus dados como pessoa física: quem recebe é sempre você, nunca uma empresa. Entram na invoice quando ela é emitida; mudar depois não altera invoices já emitidas.</DialogDescription></DialogHeader>
        <div className="grid gap-4 md:grid-cols-2">
          <Field id="py-type" label="Documento de pessoa física"><Select value={form.docType} onValueChange={(value) => setForm({ ...form, docType: value })}><SelectTrigger id="py-type" className="h-9"><SelectValue /></SelectTrigger><SelectContent>{PERSON_DOCUMENTS.map((document) => <SelectItem key={document} value={document}>{document}</SelectItem>)}</SelectContent></Select></Field>
          <Field id="py-doc" label="Número do documento"><Input id="py-doc" className="h-9 tnum" value={form.docNumber} onChange={set('docNumber')} /></Field>
          <Field id="py-name" label="Nome completo"><Input id="py-name" className="h-9" value={form.legalName} onChange={set('legalName')} /></Field>
          <Field id="py-phone" label="Telefone com DDI"><Input id="py-phone" className="h-9 tnum" value={form.phone} onChange={set('phone')} /></Field>
          <div className="md:col-span-2"><Field id="py-addr" label="Endereço"><Input id="py-addr" className="h-9" value={form.address} onChange={set('address')} /></Field></div>
          <Field id="py-bank" label="Banco"><Input id="py-bank" className="h-9" value={form.bank} onChange={set('bank')} /></Field>
          <Field id="py-swift" label="SWIFT"><Input id="py-swift" className="h-9 font-mono uppercase" value={form.swift} onChange={set('swift')} /></Field>
          <Field id="py-account" label="Conta"><Input id="py-account" className="h-9 tnum" value={form.account} onChange={set('account')} /></Field>
          <Field id="py-routing" label="Agência ou routing number"><Input id="py-routing" className="h-9 tnum" value={form.routing} onChange={set('routing')} /></Field>
        </div>
        <DialogFooter><Button variant="outline" onClick={() => onOpenChange(false)}>Cancelar</Button><Button disabled={!valid} onClick={() => { onSave(form); onOpenChange(false); toast.success('Dados de recebimento salvos') }}>Salvar</Button></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

/** Minhas invoices: a lista da pessoa, a criação do mês e os dados de recebimento. */
function MyInvoicesScreen({ state }: { state: InvoiceState }) {
  const { invoices, setInvoices, payee, setPayee, open } = state
  const mine = invoices.filter((invoice) => invoice.owner === ME_STAFF)
  const pending = mine.some((invoice) => invoice.month === 'Setembro 2026') ? [] : [{ month: 'Setembro 2026', lines: commissionLines('Setembro', 591, 23.4, 40) }]
  const [creating, setCreating] = useState(false)
  const [editingPayee, setEditingPayee] = useState(false)
  const create = () => {
    const id = Math.max(...invoices.map((invoice) => invoice.id)) + 1
    const invoice: ProtoInvoice = { id, number: `INV-${String(id).padStart(6, '0')}-4f8a`, owner: ME_STAFF, role: 'Comercial externo', month: pending[0].month, status: 'draft', created: '30/10/2026', lines: pending[0].lines }
    setInvoices([invoice, ...invoices])
    setCreating(false)
    toast.success('Invoice criada', { description: 'A comissão de setembro entrou na invoice e ficou como emitida.' })
    open(id, 'mine')
  }
  return (
    <>
      <PageHeader title="Minhas invoices" sub="Uma invoice por mês. Ao criar, a comissão validada do mês entra nela; você pode somar serviços antes de emitir."
        actions={<Button onClick={() => setCreating(true)} disabled={pending.length === 0}><Plus className="h-4 w-4" />Nova invoice</Button>} />
      <Body>
        {pending.length > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-card px-4 py-3 text-[14px]">
            <span>A comissão de setembro foi validada em 15/10: <span className="font-medium tnum">{money.format(pending[0].lines.reduce((sum, line) => sum + line.amount, 0))}</span>. Crie a invoice para receber.</span>
            <Button size="sm" onClick={() => setCreating(true)}>Criar invoice de setembro</Button>
          </div>
        )}
        <Table min={720}>
          <thead><tr><th className={th}>Número</th><th className={th}>Mês</th><th className={cn(th, 'text-right')}>Total</th><th className={th}>Situação</th><th className={th}>Criada</th><th className={th}>Paga</th></tr></thead>
          <tbody>
            {mine.map((invoice) => (
              <tr key={invoice.id} className="cursor-pointer hover:bg-muted" onClick={() => open(invoice.id, 'mine')}>
                <td className={td}><button className="font-mono text-[13px] font-medium hover:underline">{invoice.number}</button></td>
                <td className={cn(td, 'whitespace-nowrap')}>{invoice.month}</td>
                <td className={cn(td, 'text-right tnum font-medium')}>{money.format(invoiceTotal(invoice))}</td>
                <td className={td}><Status tone={INVOICE_STATUS[invoice.status][1]}>{INVOICE_STATUS[invoice.status][0]}</Status></td>
                <td className={cn(td, 'tnum text-muted-foreground')}>{invoice.created}</td>
                <td className={cn(td, 'tnum text-muted-foreground')}>{invoice.paid ?? '–'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Card title="Dados de recebimento" desc="Seus dados como pessoa física: quem recebe é sempre você. Copiados para a invoice quando você emite."
          footer={<Button size="sm" variant="outline" onClick={() => setEditingPayee(true)}>Editar</Button>} footerNote="Só você vê e muda estes dados.">
          <dl className="grid gap-x-6 gap-y-3 text-[14px] sm:grid-cols-2 lg:grid-cols-3">
            {[['Nome', payee.legalName], [payee.docType, payee.docNumber], ['Telefone', payee.phone], ['Endereço', payee.address], ['Banco', `${payee.bank} · SWIFT ${payee.swift}`], ['Conta', `${payee.account} · agência ${payee.routing}`]].map(([label, value]) => (
              <div key={label}><dt className="text-[13px] text-muted-foreground">{label}</dt><dd className="mt-0.5 font-medium">{value}</dd></div>
            ))}
          </dl>
        </Card>
      </Body>
      <Dialog open={creating} onOpenChange={setCreating}>
        <DialogContent>
          <DialogHeader><DialogTitle>Nova invoice</DialogTitle><DialogDescription>Só aparecem os meses com comissão validada e sem invoice.</DialogDescription></DialogHeader>
          <Field id="inv-month" label="Mês"><Select defaultValue="Setembro 2026"><SelectTrigger id="inv-month" className="h-9"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="Setembro 2026">Setembro 2026</SelectItem></SelectContent></Select></Field>
          {pending[0] && (
            <div className="grid divide-y rounded-md border text-[14px]">
              {pending[0].lines.map((line) => (
                <div key={line.id} className="p-3">
                  <div className="flex items-center justify-between gap-3"><span className="flex items-center gap-2 font-medium"><Lock className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />{line.title}</span><span className="tnum font-medium whitespace-nowrap">{money.format(line.amount)}</span></div>
                  <div className="mt-1 text-[13px] text-muted-foreground">{line.description}</div>
                </div>
              ))}
            </div>
          )}
          <p className="text-[13px] text-muted-foreground">Ao criar, a comissão de setembro passa a emitida e fica presa a esta invoice. Se você excluir o rascunho, ela volta a validada.</p>
          <DialogFooter><Button variant="outline" onClick={() => setCreating(false)}>Cancelar</Button><Button onClick={create}>Criar invoice</Button></DialogFooter>
        </DialogContent>
      </Dialog>
      <PayeeDialog key={String(editingPayee)} open={editingPayee} onOpenChange={setEditingPayee} payee={payee} onSave={setPayee} />
    </>
  )
}

/** Modal de uma linha de serviço: o serviço do catálogo, a descrição e o valor livre. */
function ServiceLineDialog({ open, onOpenChange, services, line, onSave }: { open: boolean; onOpenChange: (open: boolean) => void; services: InvoiceService[]; line: InvoiceLine | null; onSave: (line: InvoiceLine) => void }) {
  const [serviceId, setServiceId] = useState(services.find((service) => service.title === line?.title)?.id ?? services[0]?.id ?? '')
  const [description, setDescription] = useState(line?.description ?? '')
  const [amount, setAmount] = useState(line ? String(line.amount).replace('.', ',') : '')
  const value = parseMoney(amount)
  const amountErr = amount !== '' && (Number.isNaN(value) || value <= 0) ? 'Use um valor maior que zero.' : ''
  const service = services.find((item) => item.id === serviceId)
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader><DialogTitle>{line ? 'Editar serviço' : 'Adicionar serviço'}</DialogTitle><DialogDescription>O nome e o valor ficam copiados na invoice. Mudar ou excluir o serviço do catálogo depois não altera esta invoice.</DialogDescription></DialogHeader>
        <div className="grid gap-4">
          <Field id="sl-service" label="Serviço" hint={service?.description}>
            <Select value={serviceId} onValueChange={setServiceId}><SelectTrigger id="sl-service" className="h-9"><SelectValue /></SelectTrigger><SelectContent>{services.map((item) => <SelectItem key={item.id} value={item.id}>{item.title}</SelectItem>)}</SelectContent></Select>
          </Field>
          <Field id="sl-desc" label="Descrição em inglês (opcional)"><Textarea id="sl-desc" rows={2} value={description} onChange={(event) => setDescription(event.target.value)} placeholder="What was done this month." /></Field>
          <Field id="sl-amount" label="Valor (US$)" error={amountErr}><Input id="sl-amount" inputMode="decimal" className="h-9 max-w-[200px] tnum" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="300,00" aria-invalid={!!amountErr} /></Field>
        </div>
        <DialogFooter><Button variant="outline" onClick={() => onOpenChange(false)}>Cancelar</Button><Button disabled={!service || amount === '' || !!amountErr} onClick={() => service && onSave({ id: line?.id ?? `l${Date.now()}`, title: service.title, description: description.trim(), amount: value, locked: false })}>{line ? 'Salvar' : 'Adicionar'}</Button></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

/** Tela da invoice: o documento como sai no PDF e as ações de cada situação. */
function InvoiceScreen({ state, id, from }: { state: InvoiceState; id: number; from: 'mine' | 'all' }) {
  const { invoices, setInvoices, services, payee, go } = state
  const invoice = invoices.find((item) => item.id === id) ?? invoices[0]
  const [lineDialog, setLineDialog] = useState<{ line: InvoiceLine | null } | null>(null)
  const [confirm, setConfirm] = useState<'issue' | 'delete' | 'pay' | 'return' | null>(null)
  const [reason, setReason] = useState('')
  const owner = from === 'mine' && invoice.owner === ME_STAFF
  const editable = owner && invoice.status === 'draft'
  const shownPayee = invoice.payee ?? (invoice.owner === ME_STAFF ? payee : null)
  const update = (changes: Partial<ProtoInvoice>) => setInvoices(invoices.map((item) => (item.id === invoice.id ? { ...item, ...changes } : item)))
  const total = invoiceTotal(invoice)
  const first = invoice.owner.split(' ')[0]
  const act = () => {
    if (confirm === 'issue') { update({ status: 'issued', issued: '30/10/2026', payee, returned: undefined }); toast.success('Invoice emitida', { description: 'O financeiro foi avisado. Daqui em diante ela não muda mais.' }) }
    if (confirm === 'delete') { setInvoices(invoices.filter((item) => item.id !== invoice.id)); toast.success('Rascunho excluído', { description: 'A comissão de setembro voltou a validada.' }); go('minhasinvoices') }
    if (confirm === 'pay') { update({ status: 'paid', paid: '30/10/2026' }); toast.success('Pagamento confirmado', { description: `A comissão de ${invoice.month.split(' ')[0].toLowerCase()} de ${first} ficou como paga.` }) }
    if (confirm === 'return') { update({ status: 'draft', payee: undefined, issued: undefined, returned: { by: 'Pedro Henrique', at: '30/10/2026', reason: reason.trim() } }); toast.success('Invoice devolvida para rascunho', { description: `${first} recebeu um e-mail com o motivo.` }) }
    setConfirm(null)
    setReason('')
  }
  const confirmText = {
    issue: ['Emitir a invoice?', `Seus dados de recebimento e as linhas ficam copiados na invoice. Depois de emitida, ela não muda mais; só o financeiro pode devolver para rascunho.`, 'Emitir'],
    delete: ['Excluir o rascunho?', 'A comissão de setembro volta a validada e você pode criar a invoice de novo.', 'Excluir rascunho'],
    pay: ['Confirmar o pagamento?', `A invoice e a comissão de ${invoice.month.split(' ')[0].toLowerCase()} de ${first} ficam como pagas. Depois de paga, a invoice não muda e não volta para rascunho.`, 'Confirmar pagamento'],
    return: ['Devolver para rascunho', `${first} recebe um e-mail com o motivo e pode corrigir os serviços. A comissão continua presa a esta invoice.`, 'Devolver'],
  } as const
  const actions = (
    <>
      <Button variant="outline" onClick={() => toast.success('PDF baixado', { description: `${invoice.number}.pdf` })}><Download className="h-4 w-4" />Baixar PDF</Button>
      {editable && <Button variant="outline" onClick={() => setConfirm('delete')}><Trash2 className="h-4 w-4" />Excluir rascunho</Button>}
      {editable && <Button onClick={() => setConfirm('issue')}>Emitir invoice</Button>}
      {from === 'all' && invoice.status === 'issued' && <Button variant="outline" onClick={() => setConfirm('return')}>Devolver para rascunho</Button>}
      {from === 'all' && invoice.status === 'issued' && <Button onClick={() => setConfirm('pay')}>Confirmar pagamento</Button>}
    </>
  )
  return (
    <>
      <PageHeader title={invoice.number} sub={`${invoice.owner} · ${invoice.month}`} actions={actions}
        back={<button onClick={() => go(from === 'mine' ? 'minhasinvoices' : 'invoices')} className="mb-2 inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft className="h-3.5 w-3.5" />{from === 'mine' ? 'Minhas invoices' : 'Invoices'}</button>} />
      <Body className="lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
        <div className="grid gap-4">
          {invoice.status === 'draft' && invoice.returned && (
            <div className="flex gap-3 rounded-lg border border-ochre/40 bg-ochre/10 p-4 text-[14px]">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-ochre" />
              <div><div className="font-medium">Devolvida por {invoice.returned.by} em {invoice.returned.at}</div><div className="mt-1 text-muted-foreground">{invoice.returned.reason}</div></div>
            </div>
          )}
          <section className="overflow-hidden rounded-lg border bg-card">
            <div className="grid gap-8 p-6 sm:p-10">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="flex items-center gap-2.5"><Mark size={32} /><span className="text-[18px] font-semibold tracking-tight">Avant</span></div>
                <div className="text-right">
                  <div className="text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground">Invoice</div>
                  <div className="mt-1 font-mono text-[15px] font-medium">{invoice.number}</div>
                  <div className="mt-1"><Status tone={INVOICE_STATUS[invoice.status][1]}>{INVOICE_STATUS[invoice.status][0]}</Status></div>
                </div>
              </div>
              <div className="grid gap-6 text-[14px] sm:grid-cols-3">
                <div>
                  <div className="text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground">De</div>
                  <div className="mt-2 grid gap-0.5"><span className="font-medium">{GROONE_PAYER.name}</span><span className="text-muted-foreground">EIN {GROONE_PAYER.ein}</span><span className="text-muted-foreground">{GROONE_PAYER.address}</span></div>
                </div>
                <div>
                  <div className="text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground">Para · recebedor</div>
                  {shownPayee ? (
                    <div className="mt-2 grid gap-0.5"><span className="font-medium">{shownPayee.legalName}</span><span className="text-muted-foreground">{invoice.role}</span><span className="text-muted-foreground">Pessoa física · {shownPayee.docType} {shownPayee.docNumber}</span><span className="text-muted-foreground">{shownPayee.address}</span><span className="text-muted-foreground">{shownPayee.phone}</span></div>
                  ) : <div className="mt-2 grid gap-0.5"><span className="font-medium">{invoice.owner}</span><span className="text-muted-foreground">{invoice.role}</span><span className="text-muted-foreground">Os dados de recebimento entram quando a invoice for emitida.</span></div>}
                  {invoice.status === 'draft' && shownPayee && <div className="mt-2 text-[12px] text-muted-foreground">Dados atuais; ficam copiados na emissão.</div>}
                </div>
                <div className="grid content-start gap-2">
                  {[['Mês', invoice.month], ['Criada', invoice.created], ['Emitida', invoice.issued ?? '–'], ['Paga', invoice.paid ?? '–']].map(([label, value]) => (
                    <div key={label} className="flex justify-between gap-4"><span className="text-muted-foreground">{label}</span><span className="tnum">{value}</span></div>
                  ))}
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-[14px]">
                  <thead><tr><th className={cn(th, 'px-0')}>Descrição</th><th className={cn(th, 'px-0 text-right')}>Valor</th>{editable && <th className={cn(th, 'w-12 px-0')}><span className="sr-only">Ações</span></th>}</tr></thead>
                  <tbody>
                    {invoice.lines.map((line) => (
                      <tr key={line.id}>
                        <td className={cn(td, 'px-0')}>
                          <div className="flex items-center gap-2 font-medium">{line.locked && <Lock className="h-3.5 w-3.5 text-muted-foreground" aria-label="Linha travada" />}{line.title}</div>
                          {line.description && <div className="mt-0.5 text-[13px] text-muted-foreground">{line.description}</div>}
                        </td>
                        <td className={cn(td, 'px-0 text-right tnum whitespace-nowrap')}>{money.format(line.amount)}</td>
                        {editable && (
                          <td className={cn(td, 'px-0 text-right')}>
                            {line.locked ? <span className="sr-only">Travada</span> : (
                              <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon" aria-label={`Ações de ${line.title}`}><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem onSelect={() => setLineDialog({ line })}>Editar</DropdownMenuItem>
                                  <DropdownMenuItem className="text-bad" onSelect={() => update({ lines: invoice.lines.filter((item) => item.id !== line.id) })}>Remover</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            )}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                  <tfoot><tr><td className="px-0 pt-4 text-[14px] font-medium">Total</td><td className="px-0 pt-4 text-right text-[20px] font-semibold tracking-tight tnum">{money.format(total)}</td>{editable && <td />}</tr></tfoot>
                </table>
              </div>
              {editable && <div><Button size="sm" variant="outline" onClick={() => setLineDialog({ line: null })}><Plus className="h-4 w-4" />Adicionar serviço</Button></div>}
              {shownPayee && invoice.status !== 'draft' && (
                <div className="grid gap-1 rounded-md bg-muted p-4 text-[13px]">
                  <div className="font-medium">Pagamento</div>
                  <div className="text-muted-foreground">{shownPayee.bank} · SWIFT {shownPayee.swift} · conta {shownPayee.account} · agência {shownPayee.routing}</div>
                </div>
              )}
              <div className="flex items-center justify-center gap-2 border-t pt-6 text-[12px] text-muted-foreground"><Mark size={16} />Avant by GroOne</div>
            </div>
          </section>
        </div>
        <Card title="Como funciona" className="lg:sticky lg:top-20">
          <ol className="grid gap-3 text-[13px] text-muted-foreground">
            <li><span className="font-medium text-foreground">Rascunho.</span> A comissão do mês entra travada. Quem é dono soma serviços e edita.</li>
            <li><span className="font-medium text-foreground">Emitida.</span> Linhas e dados de recebimento ficam copiados e não mudam. O financeiro pode devolver para rascunho com um motivo, que vai por e-mail.</li>
            <li><span className="font-medium text-foreground">Paga.</span> O financeiro confirma; a comissão também fica paga. Não volta mais.</li>
          </ol>
        </Card>
      </Body>
      {lineDialog && (
        <ServiceLineDialog key={lineDialog.line?.id ?? 'new'} open onOpenChange={(open) => !open && setLineDialog(null)} services={services} line={lineDialog.line}
          onSave={(line) => { update({ lines: invoice.lines.some((item) => item.id === line.id) ? invoice.lines.map((item) => (item.id === line.id ? line : item)) : [...invoice.lines, line] }); setLineDialog(null) }} />
      )}
      <Dialog open={!!confirm} onOpenChange={(open) => { if (!open) { setConfirm(null); setReason('') } }}>
        <DialogContent>
          {confirm && (
            <>
              <DialogHeader><DialogTitle>{confirmText[confirm][0]}</DialogTitle><DialogDescription>{confirmText[confirm][1]}</DialogDescription></DialogHeader>
              {confirm === 'return' && <Field id="ret-reason" label="Motivo"><Textarea id="ret-reason" rows={3} value={reason} onChange={(event) => setReason(event.target.value)} placeholder="O valor do treinamento está errado." /></Field>}
              {confirm === 'issue' && <div className="flex justify-between rounded-md bg-muted p-3 text-[14px]"><span>Total</span><span className="font-semibold tnum">{money.format(total)}</span></div>}
              <DialogFooter><Button variant="outline" onClick={() => { setConfirm(null); setReason('') }}>Cancelar</Button><Button variant={confirm === 'delete' ? 'destructive' : 'default'} disabled={confirm === 'return' && !reason.trim()} onClick={act}>{confirmText[confirm][2]}</Button></DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

/** Invoices: todas as da equipe, para o financeiro devolver ou confirmar o pagamento. */
function InvoicesScreen({ state }: { state: InvoiceState }) {
  const { invoices, open, go } = state
  const [status, setStatus] = useState<'all' | InvoiceStatus>('all')
  const [month, setMonth] = useState('all')
  const months = [...new Set(invoices.map((invoice) => invoice.month))]
  const rows = invoices.filter((invoice) => (status === 'all' || invoice.status === status) && (month === 'all' || invoice.month === month))
  const issued = invoices.filter((invoice) => invoice.status === 'issued')
  return (
    <>
      <PageHeader title="Invoices" sub="Invoices da Equipe Groone. Emitida espera o pagamento; o financeiro devolve para rascunho quando algo está errado."
        actions={<Button variant="outline" onClick={() => go('servicosinvoice')}>Serviços</Button>} />
      <Body>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border lg:grid-cols-4">
          {[
            ['Para pagar', money.format(issued.reduce((sum, invoice) => sum + invoiceTotal(invoice), 0)), `${issued.length} emitidas`],
            ['Em rascunho', String(invoices.filter((invoice) => invoice.status === 'draft').length), 'Ainda com quem criou'],
            ['Pagas em setembro', money.format(invoices.filter((invoice) => invoice.paid?.endsWith('09/2026')).reduce((sum, invoice) => sum + invoiceTotal(invoice), 0)), 'Invoices de agosto'],
            ['Sem invoice', '2', 'Comissão de setembro validada'],
          ].map(([label, value, hint]) => (
            <div key={label} className="bg-card p-4"><div className="text-[13px] font-medium text-muted-foreground">{label}</div><div className="mt-1 text-[22px] font-semibold tracking-tight tnum">{value}</div><div className="mt-1 text-[12px] text-muted-foreground">{hint}</div></div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <Select value={status} onValueChange={(value) => setStatus(value as typeof status)}><SelectTrigger className="h-9 w-[180px]" aria-label="Situação"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="all">Todas as situações</SelectItem><SelectItem value="draft">Rascunho</SelectItem><SelectItem value="issued">Emitida</SelectItem><SelectItem value="paid">Paga</SelectItem></SelectContent></Select>
          <Select value={month} onValueChange={setMonth}><SelectTrigger className="h-9 w-[180px]" aria-label="Mês"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="all">Todos os meses</SelectItem>{months.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select>
        </div>
        <Table min={860}>
          <thead><tr><th className={th}>Número</th><th className={th}>Pessoa</th><th className={th}>Mês</th><th className={cn(th, 'text-right')}>Total</th><th className={th}>Situação</th><th className={th}>Emitida</th><th className={th}>Paga</th></tr></thead>
          <tbody>
            {rows.map((invoice) => (
              <tr key={invoice.id} className="cursor-pointer hover:bg-muted" onClick={() => open(invoice.id, 'all')}>
                <td className={td}><button className="font-mono text-[13px] font-medium hover:underline">{invoice.number}</button></td>
                <td className={td}><span className="flex items-center gap-2.5"><Avatar name={invoice.owner} size={24} /><span className="whitespace-nowrap">{invoice.owner}</span></span></td>
                <td className={cn(td, 'whitespace-nowrap')}>{invoice.month}</td>
                <td className={cn(td, 'text-right tnum font-medium')}>{money.format(invoiceTotal(invoice))}</td>
                <td className={td}><Status tone={INVOICE_STATUS[invoice.status][1]}>{INVOICE_STATUS[invoice.status][0]}</Status>{invoice.status === 'draft' && invoice.returned && <span className="ml-2"><Badge tone="ochre">Devolvida</Badge></span>}</td>
                <td className={cn(td, 'tnum text-muted-foreground')}>{invoice.issued ?? '–'}</td>
                <td className={cn(td, 'tnum text-muted-foreground')}>{invoice.paid ?? '–'}</td>
              </tr>
            ))}
            {rows.length === 0 && <tr><td colSpan={7} className="px-4 py-10 text-center text-[14px] text-muted-foreground">Nenhuma invoice com esses filtros.</td></tr>}
          </tbody>
        </Table>
      </Body>
    </>
  )
}

/** Catálogo de serviços que a equipe soma nas invoices; mudar aqui não altera invoices existentes. */
function InvoiceServicesScreen({ state }: { state: InvoiceState }) {
  const { services, setServices, invoices, go } = state
  const [editing, setEditing] = useState<InvoiceService | null | 'new'>(null)
  const [removing, setRemoving] = useState<InvoiceService | null>(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const uses = (service: InvoiceService) => invoices.filter((invoice) => invoice.lines.some((line) => line.title === service.title)).length
  const startEdit = (service: InvoiceService | 'new') => { setEditing(service); setTitle(service === 'new' ? '' : service.title); setDescription(service === 'new' ? '' : service.description) }
  const duplicate = services.some((service) => service.title.toLowerCase() === title.trim().toLowerCase() && (editing === 'new' || service.id !== editing?.id))
  const save = () => {
    if (editing === 'new') setServices([...services, { id: `s${Date.now()}`, title: title.trim(), description: description.trim() }])
    else if (editing) setServices(services.map((service) => (service.id === editing.id ? { ...service, title: title.trim(), description: description.trim() } : service)))
    toast.success(editing === 'new' ? 'Serviço criado' : 'Serviço salvo', { description: editing === 'new' ? undefined : 'As invoices que já usam o serviço continuam com o nome antigo.' })
    setEditing(null)
  }
  return (
    <>
      <PageHeader title="Serviços de invoice" sub="O que a equipe pode cobrar além da comissão. O valor é livre em cada invoice."
        back={<button onClick={() => go('invoices')} className="mb-2 inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft className="h-3.5 w-3.5" />Invoices</button>}
        actions={<Button onClick={() => startEdit('new')}><Plus className="h-4 w-4" />Novo serviço</Button>} />
      <Body>
        <Table min={640}>
          <thead><tr><th className={th}>Serviço</th><th className={th}>Descrição</th><th className={cn(th, 'text-right')}>Em invoices</th><th className={cn(th, 'w-12')}><span className="sr-only">Ações</span></th></tr></thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="hover:bg-muted">
                <td className={cn(td, 'font-medium whitespace-nowrap')}>{service.title}</td>
                <td className={cn(td, 'text-muted-foreground')}>{service.description || '–'}</td>
                <td className={cn(td, 'text-right tnum')}>{uses(service)}</td>
                <td className={td}>
                  <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon" aria-label={`Ações de ${service.title}`}><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                    <DropdownMenuContent align="end"><DropdownMenuItem onSelect={() => startEdit(service)}>Editar</DropdownMenuItem><DropdownMenuItem className="text-bad" onSelect={() => setRemoving(service)}>Excluir</DropdownMenuItem></DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <p className="text-[13px] text-muted-foreground">Só quem tem a permissão de serviços de invoice cria, edita e exclui. Nome e descrição em inglês, como toda a invoice. Cada invoice guarda a própria cópia do nome e do valor.</p>
      </Body>
      <Dialog open={editing !== null} onOpenChange={(open) => !open && setEditing(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>{editing === 'new' ? 'Novo serviço' : 'Editar serviço'}</DialogTitle><DialogDescription>{editing === 'new' ? 'Aparece para a equipe ao adicionar um serviço na invoice.' : 'Vale para as próximas invoices. As que já usam o serviço não mudam.'}</DialogDescription></DialogHeader>
          <div className="grid gap-4">
            <Field id="sv-title" label="Nome em inglês" error={duplicate && 'Já existe um serviço com esse nome.'}><Input id="sv-title" className="h-9" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Account Management" /></Field>
            <Field id="sv-desc" label="Descrição em inglês (opcional)"><Textarea id="sv-desc" rows={2} value={description} onChange={(event) => setDescription(event.target.value)} /></Field>
          </div>
          <DialogFooter><Button variant="outline" onClick={() => setEditing(null)}>Cancelar</Button><Button disabled={!title.trim() || duplicate} onClick={save}>Salvar</Button></DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={!!removing} onOpenChange={(open) => !open && setRemoving(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Excluir {removing?.title}?</DialogTitle><DialogDescription>Some do catálogo para as próximas invoices. {removing && uses(removing) > 0 ? `As ${uses(removing)} invoices que já usam o serviço continuam iguais.` : 'Nenhuma invoice usa este serviço.'}</DialogDescription></DialogHeader>
          <DialogFooter><Button variant="outline" onClick={() => setRemoving(null)}>Cancelar</Button><Button variant="destructive" onClick={() => { setServices(services.filter((service) => service.id !== removing?.id)); toast.success('Serviço excluído'); setRemoving(null) }}>Excluir</Button></DialogFooter>
        </DialogContent>
      </Dialog>
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

/* ---------- Modelos de dashboard (avant-core#180, avant-web#159) ---------- */

type TplAudience = 'groone' | 'clients'
type TplBlock = { id: string; title: string; x: number; y: number; w: number; h: number }
type ProtoTemplate = { id: string; name: string; audience: TplAudience; roles: string[]; home: boolean; updated: string; blocks: TplBlock[] }
const GROONE_TPL_ROLES = ['Comercial', 'Suporte', 'Financeiro Groone']
const CLIENT_TPL_ROLES = ['Dono', 'Administrador', 'Financeiro', 'Analista', 'Gestor de tráfego']
const INITIAL_TEMPLATES: ProtoTemplate[] = [
  { id: 't1', name: 'Visão geral da Groone', audience: 'groone', roles: [], home: true, updated: '02/11/2026', blocks: [{ id: 'a', title: 'Receita Groone', x: 0, y: 0, w: 3, h: 2 }, { id: 'b', title: 'Meta da equipe', x: 3, y: 0, w: 5, h: 2 }, { id: 'c', title: 'Receita por cliente', x: 0, y: 2, w: 8, h: 4 }] },
  { id: 't2', name: 'Por responsável', audience: 'groone', roles: ['Comercial'], home: false, updated: '02/11/2026', blocks: [] },
  { id: 't3', name: 'Visão geral', audience: 'clients', roles: [], home: true, updated: '02/11/2026', blocks: [] },
  { id: 't4', name: 'Financeiro do mês', audience: 'clients', roles: ['Financeiro', 'Dono'], home: false, updated: '03/11/2026', blocks: [] },
]
/** Modelos prontos de dashboard: a lista por público (Groone ou clientes) e o editor com arrastar pelo título e redimensionar pelo canto. */
/* ---------- Tarefas de suporte da equipe Groone (core#189) ---------- */

type TaskStatus = 'open' | 'working' | 'delivered' | 'closed'
type TaskPriority = 'high' | 'normal' | 'low'
type ProtoTaskEvent = { id: number; kind: 'comment' | 'change'; author: string; at: string; text: string }
type ProtoTask = { id: number; subject: string; description: string; priority: TaskPriority; status: TaskStatus; client: string | null; network: string | null; site: string | null; creator: string; assignee: string | null; createdAt: string; updatedAt: string; events: ProtoTaskEvent[] }

const TASK_STATUS: Record<TaskStatus, [string, 'ok' | 'bad' | 'ochre' | 'neutral' | 'warn']> = { open: ['Aberta', 'ochre'], working: ['Trabalhando', 'warn'], delivered: ['Entregue', 'ok'], closed: ['Fechada', 'neutral'] }
const TASK_PRIORITY: Record<TaskPriority, string> = { high: 'Alta', normal: 'Normal', low: 'Baixa' }
const TASK_STAFF = ['Ana Souza', 'Bruno Lima', 'Pedro Henrique', 'Você']

const INITIAL_TASKS: ProtoTask[] = [
  { id: 41, subject: 'Anúncio âncora sobrepondo o menu no mobile', description: 'O cliente mandou print: no iPhone o âncora cobre o botão do menu. Conferir o CSS do bloco Content1 e a altura do anchor.', priority: 'high', status: 'working', client: 'Tech Notícias', network: '21987654321', site: 'technoticias.com.br', creator: 'Ana Souza', assignee: 'Você', createdAt: '03/11/2026 09:12', updatedAt: 'há 20 min', events: [
    { id: 1, kind: 'change', author: 'Ana Souza', at: '03/11/2026 09:12', text: 'criou a tarefa e atribuiu a Você' },
    { id: 2, kind: 'comment', author: 'Ana Souza', at: '03/11/2026 09:14', text: 'Prints no drive do cliente, pasta "anúncios".' },
    { id: 3, kind: 'change', author: 'Você', at: '03/11/2026 10:02', text: 'mudou a situação de Aberta para Trabalhando' },
    { id: 4, kind: 'comment', author: 'Você', at: '03/11/2026 14:30', text: 'Era o z-index do tema. Mandei o ajuste para o cliente aplicar; volto amanhã para conferir.' },
  ] },
  { id: 40, subject: 'Cadastrar domínio novo no MCM', description: 'Cliente comprou receitasdavo.com e quer monetizar ainda este mês.', priority: 'normal', status: 'open', client: 'Receitas & Cia', network: '22011223344', site: null, creator: 'Você', assignee: 'Bruno Lima', createdAt: '02/11/2026 17:40', updatedAt: 'ontem', events: [{ id: 1, kind: 'change', author: 'Você', at: '02/11/2026 17:40', text: 'criou a tarefa e atribuiu a Bruno Lima' }] },
  { id: 38, subject: 'Revisar ads.txt depois da troca de hospedagem', description: 'A linha da Groone sumiu do ads.txt.', priority: 'high', status: 'delivered', client: 'Portal Esporte', network: '21555000111', site: 'portalesporte.com', creator: 'Pedro Henrique', assignee: 'Você', createdAt: '30/10/2026 11:05', updatedAt: '31/10/2026', events: [{ id: 1, kind: 'change', author: 'Pedro Henrique', at: '30/10/2026 11:05', text: 'criou a tarefa e atribuiu a Você' }, { id: 2, kind: 'change', author: 'Você', at: '31/10/2026 16:20', text: 'mudou a situação de Trabalhando para Entregue' }] },
  { id: 35, subject: 'Treinar a equipe nova do cliente no painel', description: 'Duas pessoas novas na equipe do cliente.', priority: 'low', status: 'closed', client: 'Blog do Viajante', network: null, site: null, creator: 'Você', assignee: 'Ana Souza', createdAt: '27/10/2026 08:30', updatedAt: '29/10/2026', events: [{ id: 1, kind: 'change', author: 'Você', at: '27/10/2026 08:30', text: 'criou a tarefa e atribuiu a Ana Souza' }] },
]

function TasksScreen({ tasks, setTasks, open }: { tasks: ProtoTask[]; setTasks: (tasks: ProtoTask[]) => void; open: (id: number) => void }) {
  const [scope, setScope] = useState<'mine' | 'all'>('mine')
  const [status, setStatus] = useState<'active' | TaskStatus | 'any'>('active')
  const [priority, setPriority] = useState<'any' | TaskPriority>('any')
  const [query, setQuery] = useState('')
  const [creating, setCreating] = useState(false)
  const [form, setForm] = useState({ subject: '', description: '', priority: 'normal' as TaskPriority, client: '', site: '', assignee: '' })
  const visible = tasks.filter((task) =>
    (scope === 'all' || task.creator === 'Você' || task.assignee === 'Você') &&
    (status === 'any' || (status === 'active' ? task.status === 'open' || task.status === 'working' : task.status === status)) &&
    (priority === 'any' || task.priority === priority) &&
    (query === '' || `${task.subject} ${task.client ?? ''} ${task.site ?? ''}`.toLowerCase().includes(query.toLowerCase())))
  const create = () => {
    const id = Math.max(...tasks.map((task) => task.id)) + 1
    const assignee = form.assignee || null
    setTasks([{ id, subject: form.subject.trim(), description: form.description.trim(), priority: form.priority, status: 'open', client: form.client || null, network: null, site: form.site.trim() || null, creator: 'Você', assignee, createdAt: '03/11/2026 15:10', updatedAt: 'agora', events: [{ id: 1, kind: 'change', author: 'Você', at: '03/11/2026 15:10', text: assignee ? `criou a tarefa e atribuiu a ${assignee}` : 'criou a tarefa' }] }, ...tasks])
    setCreating(false)
    setForm({ subject: '', description: '', priority: 'normal', client: '', site: '', assignee: '' })
    toast.success('Tarefa criada', { description: assignee && assignee !== 'Você' ? `${assignee} recebe um e-mail.` : undefined })
  }
  return (
    <>
      <PageHeader title="Tarefas" sub="Pedidos de suporte da equipe Groone para os clientes. Você vê as que criou e as que são suas; quem tem a permissão vê todas." actions={<Button onClick={() => setCreating(true)}><Plus className="h-4 w-4" />Nova tarefa</Button>} />
      <Body>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex rounded-md border bg-card p-0.5" role="tablist" aria-label="Quais tarefas">
            {([['mine', 'Minhas'], ['all', 'Todas']] as const).map(([key, label]) => (
              <button key={key} role="tab" aria-selected={scope === key} onClick={() => setScope(key)} className={cn('h-8 rounded-[4px] px-3 text-[13px] font-medium', scope === key ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground')}>{label}</button>
            ))}
          </div>
          <div className="relative w-full sm:w-[260px]"><Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input aria-label="Buscar tarefas" className="h-9 pl-9" placeholder="Assunto, cliente ou site" value={query} onChange={(event) => setQuery(event.target.value)} /></div>
          <Select value={status} onValueChange={(value) => setStatus(value as typeof status)}><SelectTrigger aria-label="Situação" className="h-9 w-[230px]"><SelectValue /></SelectTrigger>
            <SelectContent><SelectItem value="active">Abertas e em andamento</SelectItem>{(Object.keys(TASK_STATUS) as TaskStatus[]).map((key) => <SelectItem key={key} value={key}>{TASK_STATUS[key][0]}</SelectItem>)}<SelectItem value="any">Todas as situações</SelectItem></SelectContent>
          </Select>
          <Select value={priority} onValueChange={(value) => setPriority(value as typeof priority)}><SelectTrigger aria-label="Prioridade" className="h-9 w-[160px]"><SelectValue /></SelectTrigger>
            <SelectContent><SelectItem value="any">Toda prioridade</SelectItem>{(Object.keys(TASK_PRIORITY) as TaskPriority[]).map((key) => <SelectItem key={key} value={key}>{TASK_PRIORITY[key]}</SelectItem>)}</SelectContent>
          </Select>
        </div>
        <Table min={860}>
          <thead><tr><th className={th}>Tarefa</th><th className={th}>Cliente</th><th className={th}>Prioridade</th><th className={th}>Situação</th><th className={th}>Responsável</th><th className={th}>Atualizada</th></tr></thead>
          <tbody>
            {visible.map((task) => (
              <tr key={task.id} className="hover:bg-muted">
                <td className={td}><button className="text-left font-medium hover:underline" onClick={() => open(task.id)}><span className="tnum text-muted-foreground">#{task.id}</span> {task.subject}</button></td>
                <td className={cn(td, 'text-muted-foreground')}>{task.client ?? '—'}{task.site && <span className="block font-mono text-[12px]">{task.site}</span>}</td>
                <td className={td}>{task.priority === 'high' ? <span className="font-medium text-bad">Alta</span> : <span className="text-muted-foreground">{TASK_PRIORITY[task.priority]}</span>}</td>
                <td className={td}><Status tone={TASK_STATUS[task.status][1]}>{TASK_STATUS[task.status][0]}</Status></td>
                <td className={cn(td, 'text-muted-foreground')}>{task.assignee ?? 'Sem responsável'}</td>
                <td className={cn(td, 'whitespace-nowrap text-[13px] text-muted-foreground')}>{task.updatedAt}</td>
              </tr>
            ))}
            {!visible.length && <tr><td className={cn(td, 'py-10 text-center text-muted-foreground')} colSpan={6}>Nenhuma tarefa com esses filtros.</td></tr>}
          </tbody>
        </Table>
      </Body>
      <Dialog open={creating} onOpenChange={setCreating}>
        <DialogContent className="max-w-[560px]">
          <DialogHeader><DialogTitle>Nova tarefa</DialogTitle><DialogDescription>Cliente e site são opcionais: um domínio que ainda não existe fica como "a cadastrar".</DialogDescription></DialogHeader>
          <div className="grid gap-4">
            <Field id="task-subject" label="Assunto"><Input id="task-subject" className="h-10" value={form.subject} onChange={(event) => setForm({ ...form, subject: event.target.value })} /></Field>
            <Field id="task-description" label="Descrição"><Textarea id="task-description" rows={4} value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} /></Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="task-client" label="Cliente"><Select value={form.client || 'none'} onValueChange={(value) => setForm({ ...form, client: value === 'none' ? '' : value })}><SelectTrigger id="task-client" className="h-10"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="none">Nenhum</SelectItem>{['Tech Notícias', 'Receitas & Cia', 'Portal Esporte', 'Blog do Viajante'].map((name) => <SelectItem key={name} value={name}>{name}</SelectItem>)}</SelectContent></Select></Field>
              <Field id="task-site" label="Site ou domínio" hint="Um site do cliente ou um domínio a cadastrar."><Input id="task-site" className="h-10 font-mono" placeholder="exemplo.com" value={form.site} onChange={(event) => setForm({ ...form, site: event.target.value })} /></Field>
              <Field id="task-priority" label="Prioridade"><Select value={form.priority} onValueChange={(value) => setForm({ ...form, priority: value as TaskPriority })}><SelectTrigger id="task-priority" className="h-10"><SelectValue /></SelectTrigger><SelectContent>{(Object.keys(TASK_PRIORITY) as TaskPriority[]).map((key) => <SelectItem key={key} value={key}>{TASK_PRIORITY[key]}</SelectItem>)}</SelectContent></Select></Field>
              <Field id="task-assignee" label="Responsável" hint="Recebe um e-mail."><Select value={form.assignee || 'none'} onValueChange={(value) => setForm({ ...form, assignee: value === 'none' ? '' : value })}><SelectTrigger id="task-assignee" className="h-10"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="none">Sem responsável</SelectItem>{TASK_STAFF.map((name) => <SelectItem key={name} value={name}>{name}</SelectItem>)}</SelectContent></Select></Field>
            </div>
          </div>
          <DialogFooter><Button variant="outline" onClick={() => setCreating(false)}>Cancelar</Button><Button disabled={form.subject.trim().length < 3} onClick={create}>Criar tarefa</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

function TaskScreen({ task, update, back }: { task: ProtoTask; update: (task: ProtoTask) => void; back: () => void }) {
  const [comment, setComment] = useState('')
  const change = (patch: Partial<ProtoTask>, text: string, mail?: string) => {
    update({ ...task, ...patch, updatedAt: 'agora', events: [...task.events, { id: task.events.length + 1, kind: 'change', author: 'Você', at: '03/11/2026 15:20', text }] })
    toast.success('Tarefa atualizada', { description: mail })
  }
  const send = () => {
    update({ ...task, updatedAt: 'agora', events: [...task.events, { id: task.events.length + 1, kind: 'comment', author: 'Você', at: '03/11/2026 15:22', text: comment.trim() }] })
    setComment('')
    const notified = [task.creator, task.assignee].filter((name, index, list): name is string => !!name && name !== 'Você' && list.indexOf(name) === index)
    toast.success('Comentário enviado', { description: notified.length ? `${notified.join(' e ')} ${notified.length > 1 ? 'recebem' : 'recebe'} um e-mail.` : undefined })
  }
  const row = (label: string, value: React.ReactNode) => <div className="grid gap-1 py-2 text-[14px] sm:grid-cols-[120px_1fr]"><dt className="text-muted-foreground">{label}</dt><dd className="min-w-0">{value}</dd></div>
  return (
    <>
      <PageHeader title={task.subject} sub={`#${task.id} · criada por ${task.creator} em ${task.createdAt}`}
        back={<button onClick={back} className="inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft className="h-3.5 w-3.5" />Tarefas</button>} />
      <Body>
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="grid content-start gap-6">
            <Card title="Descrição"><p className="whitespace-pre-line text-[14px]">{task.description || '—'}</p></Card>
            <Card title="Comentários e histórico" desc="Cada comentário vai por e-mail para quem criou e para o responsável, menos para quem comentou.">
              <ol className="grid gap-4">
                {task.events.map((event) => event.kind === 'comment' ? (
                  <li key={event.id} className="rounded-md border p-3">
                    <div className="text-[13px]"><span className="font-medium">{event.author}</span><span className="text-muted-foreground"> · <span className="tnum">{event.at}</span></span></div>
                    <p className="mt-1 whitespace-pre-line text-[14px]">{event.text}</p>
                  </li>
                ) : (
                  <li key={event.id} className="flex gap-2 px-3 text-[13px] text-muted-foreground"><span className="font-medium text-foreground">{event.author}</span>{event.text}<span className="tnum">· {event.at}</span></li>
                ))}
              </ol>
              <div className="mt-5 grid gap-3 border-t pt-5">
                <Textarea aria-label="Novo comentário" rows={3} value={comment} onChange={(event) => setComment(event.target.value)} placeholder="Escreva um comentário..." />
                <div className="flex justify-end"><Button size="sm" disabled={comment.trim().length < 3} onClick={send}>Comentar</Button></div>
              </div>
            </Card>
          </div>
          <Card title="Detalhes" className="self-start">
            <dl className="-my-2 divide-y">
              {row('Situação', <Select value={task.status} onValueChange={(value) => change({ status: value as TaskStatus }, `mudou a situação de ${TASK_STATUS[task.status][0]} para ${TASK_STATUS[value as TaskStatus][0]}`)}><SelectTrigger aria-label="Situação" className="h-9"><SelectValue /></SelectTrigger><SelectContent>{(Object.keys(TASK_STATUS) as TaskStatus[]).map((key) => <SelectItem key={key} value={key}>{TASK_STATUS[key][0]}</SelectItem>)}</SelectContent></Select>)}
              {row('Prioridade', <Select value={task.priority} onValueChange={(value) => change({ priority: value as TaskPriority }, `mudou a prioridade para ${TASK_PRIORITY[value as TaskPriority]}`)}><SelectTrigger aria-label="Prioridade" className="h-9"><SelectValue /></SelectTrigger><SelectContent>{(Object.keys(TASK_PRIORITY) as TaskPriority[]).map((key) => <SelectItem key={key} value={key}>{TASK_PRIORITY[key]}</SelectItem>)}</SelectContent></Select>)}
              {row('Responsável', <Select value={task.assignee ?? 'none'} onValueChange={(value) => { const next = value === 'none' ? null : value; change({ assignee: next }, next ? `atribuiu a ${next}` : 'tirou o responsável', next && next !== 'Você' ? `${next} recebe um e-mail.` : undefined) }}><SelectTrigger aria-label="Responsável" className="h-9"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="none">Sem responsável</SelectItem>{TASK_STAFF.map((name) => <SelectItem key={name} value={name}>{name}</SelectItem>)}</SelectContent></Select>)}
              {row('Cliente', task.client ? <button className="text-link hover:underline">{task.client}</button> : '—')}
              {row('Network', task.network ? <span className="font-mono">{task.network}</span> : '—')}
              {row('Site', task.site ? <span className="break-all font-mono">{task.site}</span> : <span className="text-muted-foreground">A cadastrar</span>)}
            </dl>
          </Card>
        </div>
      </Body>
    </>
  )
}

/* ---------- Checklist de domínio automatizado (core#190) ---------- */

type CheckKind = 'link' | 'categories' | 'search' | 'home' | 'author' | 'date' | 'pagination' | 'ads_txt' | 'manual'
type AutoResult = 'ok' | 'failed' | 'unknown'
type ProtoCheckItem = { id: number; name: string; kind: CheckKind; words: string[]; active: boolean }
type ProtoCheckResult = { itemId: number; auto: AutoResult | null; evidence: string; mark: { by: string; at: string } | null }
type ProtoSiteChecklist = { id: number; domain: string; client: string; clientLang: string; revenue: number; checkedAt: string | null; results: ProtoCheckResult[]; notes: { author: string; at: string; text: string }[] }

const CHECK_KIND: Record<CheckKind, [string, string]> = {
  link: ['Link com palavras', 'Procura na página inicial um link cujo texto ou endereço tenha uma das palavras.'],
  categories: ['Categorias', 'Links de categoria ou tag (/category/, /categoria/) ou um menu com várias seções.'],
  search: ['Buscador', 'Formulário de busca (campo de busca, ?s= ou role=search).'],
  home: ['Início', 'Link para a página inicial no menu ou no logo.'],
  author: ['Autor (no artigo)', 'rel=author, meta author ou o autor no schema.org do artigo.'],
  date: ['Data (no artigo)', 'article:published_time, <time> ou a data no schema.org do artigo.'],
  pagination: ['Paginação', 'rel=next, /page/2 ou links numerados.'],
  ads_txt: ['ads.txt', 'O ads.txt do site tem a linha da Groone (e as do Google no Manage Inventory).'],
  manual: ['Manual', 'Ninguém confere sozinho: a pessoa marca.'],
}
const AUTO_STATUS: Record<AutoResult, [string, 'ok' | 'bad' | 'ochre']> = { ok: ['Ok', 'ok'], failed: ['Falhou', 'bad'], unknown: ['Não deu para conferir', 'ochre'] }
const CHECK_MONTHS = ['Novembro de 2026', 'Outubro de 2026', 'Setembro de 2026']

const INITIAL_CHECK_ITEMS: ProtoCheckItem[] = [
  { id: 1, name: 'Políticas de cookies', kind: 'link', words: ['cookies', 'cookie', 'galletas'], active: true },
  { id: 2, name: 'Políticas de privacidade', kind: 'link', words: ['privacidade', 'privacy', 'privacidad'], active: true },
  { id: 3, name: 'Aviso legal', kind: 'link', words: ['aviso legal', 'legal notice', 'disclaimer'], active: true },
  { id: 4, name: 'Contato', kind: 'link', words: ['contato', 'contact', 'contacto', 'fale conosco'], active: true },
  { id: 5, name: 'Sobre nós', kind: 'link', words: ['sobre', 'about', 'quiénes somos', 'quem somos'], active: true },
  { id: 6, name: 'Termos de uso', kind: 'link', words: ['termos', 'terms', 'términos'], active: true },
  { id: 7, name: 'Categorias', kind: 'categories', words: [], active: true },
  { id: 8, name: 'Buscador', kind: 'search', words: [], active: true },
  { id: 9, name: 'Início', kind: 'home', words: [], active: true },
  { id: 10, name: 'Autor', kind: 'author', words: [], active: true },
  { id: 11, name: 'Data', kind: 'date', words: [], active: true },
  { id: 12, name: 'Paginação', kind: 'pagination', words: [], active: true },
  { id: 13, name: 'ads.txt', kind: 'ads_txt', words: [], active: true },
]

/** Os resultados de um site: tudo ok menos os itens dados. */
function checkResults(failed: Record<number, [AutoResult, string]>, marks: Record<number, { by: string; at: string }> = {}): ProtoCheckResult[] {
  return INITIAL_CHECK_ITEMS.map((item) => {
    const [auto, evidence] = failed[item.id] ?? ['ok', item.kind === 'link' ? `Achou /${item.words[0].replace(' ', '-')}` : item.kind === 'ads_txt' ? 'Linha groone.com, pub-2100, DIRECT encontrada' : 'Encontrado na página']
    return { itemId: item.id, auto, evidence, mark: marks[item.id] ?? null }
  })
}

const INITIAL_SITE_CHECKLISTS: ProtoSiteChecklist[] = [
  { id: 1, domain: 'technoticias.com.br', client: 'Tech Notícias', clientLang: 'Português', revenue: 18420, checkedAt: '01/11/2026 03:12', results: checkResults({ 1: ['failed', 'Nenhum link com cookies, cookie ou galletas na página inicial'], 10: ['failed', 'O artigo /review-iphone-17 não diz o autor'] }), notes: [] },
  { id: 2, domain: 'portalesporte.com', client: 'Portal Esporte', clientLang: 'Português', revenue: 12890, checkedAt: '01/11/2026 03:14', results: checkResults({}), notes: [] },
  { id: 3, domain: 'receitasdavo.com', client: 'Receitas & Cia', clientLang: 'Español', revenue: 9310, checkedAt: '01/11/2026 03:15', results: checkResults({ 8: ['failed', 'Sem formulário de busca'], 13: ['failed', 'O ads.txt não tem a linha groone.com, pub-2100, DIRECT'] }, { 8: { by: 'Ana Souza', at: '02/11/2026 10:40' } }), notes: [{ author: 'Ana Souza', at: '02/11/2026 10:42', text: 'El buscador está en el menú lateral, solo en móvil.' }] },
  { id: 4, domain: 'blogdoviajante.com', client: 'Blog do Viajante', clientLang: 'Português', revenue: 4120, checkedAt: '01/11/2026 03:16', results: INITIAL_CHECK_ITEMS.map((item) => ({ itemId: item.id, auto: 'unknown' as const, evidence: 'O site respondeu 503 três vezes', mark: null })), notes: [] },
  { id: 5, domain: 'financasdodia.com', client: 'Tech Notícias', clientLang: 'Português', revenue: 2760, checkedAt: '01/11/2026 03:17', results: checkResults({ 12: ['failed', 'Nem rel=next nem /page/2 na página inicial'] }, { 12: { by: 'Você', at: '03/11/2026 09:05' } }), notes: [] },
]

/** O resultado que vale: o "ok" marcado por alguém vence o automático. */
const effective = (result: ProtoCheckResult): AutoResult | 'marked' => (result.mark ? 'marked' : result.auto ?? 'failed')
/** Quantos itens ativos estão ok, marcados ou automáticos. */
function checklistProgress(checklist: ProtoSiteChecklist, items: ProtoCheckItem[]) {
  const active = items.filter((item) => item.active)
  const results = active.map((item) => checklist.results.find((result) => result.itemId === item.id) ?? { itemId: item.id, auto: null, evidence: '', mark: null })
  const done = results.filter((result) => ['ok', 'marked'].includes(effective(result))).length
  return { done, total: active.length, review: results.length - done, complete: done === active.length }
}

function ChecklistsScreen({ checklists, items, open, openItems }: { checklists: ProtoSiteChecklist[]; items: ProtoCheckItem[]; open: (id: number) => void; openItems: () => void }) {
  const [month, setMonth] = useState(CHECK_MONTHS[0])
  const [state, setState] = useState<'all' | 'pending' | 'done'>('all')
  const [query, setQuery] = useState('')
  const money = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD' })
  const rows = checklists.map((checklist) => ({ checklist, progress: checklistProgress(checklist, items) }))
  const visible = rows.filter(({ checklist, progress }) => (state === 'all' || (state === 'done') === progress.complete) && `${checklist.domain} ${checklist.client}`.toLowerCase().includes(query.toLowerCase()))
  const doneCount = rows.filter((row) => row.progress.complete).length
  return (
    <>
      <PageHeader title="Checklists" sub="Um checklist por mês para cada site com faturamento no mês anterior, do maior para o menor. O Avant confere sozinho no dia 1; você revisa o que falhou." actions={<Button variant="outline" onClick={openItems}>Itens do checklist</Button>} />
      <Body>
        <div className="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-3">
          <div className="bg-card p-4"><div className="text-[13px] font-medium text-muted-foreground">Feitos</div><div className="mt-1 text-[24px] font-semibold tracking-tight tnum">{doneCount} de {rows.length}</div></div>
          <div className="bg-card p-4"><div className="text-[13px] font-medium text-muted-foreground">Para revisar</div><div className="mt-1 text-[24px] font-semibold tracking-tight tnum">{rows.length - doneCount}</div></div>
          <div className="bg-card p-4"><div className="text-[13px] font-medium text-muted-foreground">Conferência automática</div><div className="mt-1 text-[15px] font-medium">01/11/2026 às 03:12</div><div className="text-[13px] text-muted-foreground">Próxima em 01/12/2026</div></div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative w-full sm:w-[260px]"><Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input aria-label="Buscar sites" className="h-9 pl-9" placeholder="Site ou cliente" value={query} onChange={(event) => setQuery(event.target.value)} /></div>
          <Select value={month} onValueChange={setMonth}><SelectTrigger aria-label="Mês" className="h-9 w-[200px]"><SelectValue /></SelectTrigger><SelectContent>{CHECK_MONTHS.map((name) => <SelectItem key={name} value={name}>{name}</SelectItem>)}</SelectContent></Select>
          <Select value={state} onValueChange={(value) => setState(value as typeof state)}><SelectTrigger aria-label="Situação" className="h-9 w-[180px]"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="all">Todos</SelectItem><SelectItem value="pending">Para revisar</SelectItem><SelectItem value="done">Feitos</SelectItem></SelectContent></Select>
        </div>
        <Table min={820}>
          <thead><tr><th className={th}>Site</th><th className={cn(th, 'text-right')}>Faturamento em outubro</th><th className={th}>Itens ok</th><th className={th}>Situação</th><th className={th}>Conferido</th></tr></thead>
          <tbody>
            {visible.map(({ checklist, progress }) => (
              <tr key={checklist.id} className="hover:bg-muted">
                <td className={td}><button className="text-left hover:underline" onClick={() => open(checklist.id)}><span className="block break-all font-mono text-[13px] font-medium">{checklist.domain}</span><span className="text-[13px] text-muted-foreground">{checklist.client}</span></button></td>
                <td className={cn(td, 'text-right tnum')}>{money.format(checklist.revenue)}</td>
                <td className={td}>
                  <div className="flex items-center gap-3"><div className="h-1.5 w-24 overflow-hidden rounded-full bg-secondary"><div className={cn('h-full rounded-full', progress.complete ? 'bg-ok' : 'bg-foreground')} style={{ width: `${(progress.done / progress.total) * 100}%` }} /></div><span className="tnum text-[13px] text-muted-foreground">{progress.done}/{progress.total}</span></div>
                </td>
                <td className={td}>{progress.complete ? <Status tone="ok">Feito</Status> : <Status tone="ochre">{progress.review} para revisar</Status>}</td>
                <td className={cn(td, 'whitespace-nowrap tnum text-[13px] text-muted-foreground')}>{checklist.checkedAt ?? 'Ainda não'}</td>
              </tr>
            ))}
            {!visible.length && <tr><td className={cn(td, 'py-10 text-center text-muted-foreground')} colSpan={5}>Nenhum site com esses filtros.</td></tr>}
          </tbody>
        </Table>
      </Body>
    </>
  )
}

function ChecklistScreen({ checklist, items, update, back }: { checklist: ProtoSiteChecklist; items: ProtoCheckItem[]; update: (checklist: ProtoSiteChecklist) => void; back: () => void }) {
  const [note, setNote] = useState('')
  const [checking, setChecking] = useState(false)
  const progress = checklistProgress(checklist, items)
  const active = items.filter((item) => item.active)
  const rows = active.map((item) => ({ item, result: checklist.results.find((result) => result.itemId === item.id) ?? { itemId: item.id, auto: null, evidence: '', mark: null } }))
  const review = rows.filter(({ result }) => !['ok', 'marked'].includes(effective(result)))
  const fine = rows.filter(({ result }) => ['ok', 'marked'].includes(effective(result)))
  const setMark = (itemId: number, mark: ProtoCheckResult['mark']) => {
    update({ ...checklist, results: checklist.results.map((result) => (result.itemId === itemId ? { ...result, mark } : result)) })
    toast.success(mark ? 'Item marcado como ok' : 'Marcação tirada')
  }
  const checkNow = () => {
    setChecking(true)
    setTimeout(() => { setChecking(false); update({ ...checklist, checkedAt: '03/11/2026 15:40' }); toast.success('Conferência feita', { description: 'Os itens automáticos foram conferidos de novo.' }) }, 900)
  }
  const row = ({ item, result }: (typeof rows)[number]) => {
    const now = effective(result)
    return (
      <li key={item.id} className="grid gap-2 py-3 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-medium">{item.name}</span>
            {now === 'marked' ? <Status tone="ok">Marcado</Status> : now === 'ok' ? <Status tone="ok">Ok</Status> : result.auto ? <Status tone={AUTO_STATUS[result.auto][1]}>{AUTO_STATUS[result.auto][0]}</Status> : <Status tone="neutral">Para marcar</Status>}
            <span className="text-[12px] text-muted-foreground">{item.kind === 'manual' ? 'Manual' : 'Automático'}</span>
          </div>
          <p className="mt-0.5 break-words text-[13px] text-muted-foreground">
            {result.evidence || CHECK_KIND[item.kind][1]}
            {result.mark && <> · marcado por {result.mark.by} em <span className="tnum">{result.mark.at}</span></>}
          </p>
        </div>
        <div className="flex gap-2">
          {result.mark ? <Button size="sm" variant="ghost" onClick={() => setMark(item.id, null)}>Tirar marcação</Button> : now !== 'ok' && <Button size="sm" variant="outline" onClick={() => setMark(item.id, { by: 'Você', at: '03/11/2026 15:42' })}><Check className="h-4 w-4" />Marcar ok</Button>}
        </div>
      </li>
    )
  }
  return (
    <>
      <PageHeader title={checklist.domain} sub={`${checklist.client} · Novembro de 2026 · ${progress.done} de ${progress.total} itens ok`}
        back={<button onClick={back} className="inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft className="h-3.5 w-3.5" />Checklists</button>}
        actions={<><Button variant="outline" asChild><a href={`https://${checklist.domain}`} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" />Abrir o site</a></Button><Button onClick={checkNow} disabled={checking}>{checking ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}Conferir agora</Button></>} />
      <Body>
        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <div className="grid min-w-0 content-start gap-6">
            {progress.complete && <div className="flex items-center gap-2 rounded-md border bg-card px-4 py-3 text-[14px]"><Check className="h-4 w-4 text-ok" />Checklist do mês feito. Conferido em <span className="tnum">{checklist.checkedAt}</span>.</div>}
            {review.length > 0 && (
              <Card title="Para revisar" desc="O Avant não achou ou não conseguiu abrir o site. Confira e marque ok se estiver certo: fica registrado quem marcou.">
                <ul className="-my-3 divide-y">{review.map(row)}</ul>
              </Card>
            )}
            <Card title="Ok" desc={checklist.checkedAt ? `Conferência automática em ${checklist.checkedAt}, na página inicial e num artigo.` : 'Ainda não conferido.'}>
              {fine.length ? <ul className="-my-3 divide-y">{fine.map(row)}</ul> : <p className="text-[14px] text-muted-foreground">Nenhum item ok ainda.</p>}
            </Card>
          </div>
          <Card title="Observações do mês" desc={`Entram no relatório do cliente: escreva em ${checklist.clientLang}.`} className="self-start">
            <div className="grid gap-3">
              <Textarea aria-label="Nova observação" rows={3} value={note} onChange={(event) => setNote(event.target.value)} placeholder="O que o cliente precisa ajustar..." />
              <div className="flex justify-end"><Button size="sm" disabled={note.trim().length < 3} onClick={() => { update({ ...checklist, notes: [{ author: 'Você', at: '03/11/2026 15:45', text: note.trim() }, ...checklist.notes] }); setNote(''); toast.success('Observação adicionada') }}>Adicionar</Button></div>
            </div>
            {checklist.notes.length ? (
              <ul className="mt-5 divide-y border-t">{checklist.notes.map((item, index) => <li key={index} className="py-3 last:pb-0"><div className="text-[13px]"><span className="font-medium">{item.author}</span><span className="text-muted-foreground"> · <span className="tnum">{item.at}</span></span></div><p className="mt-1 whitespace-pre-line text-[14px]">{item.text}</p></li>)}</ul>
            ) : <p className="mt-5 border-t pt-4 text-[14px] text-muted-foreground">Nenhuma observação neste mês.</p>}
          </Card>
        </div>
      </Body>
    </>
  )
}

function ChecklistItemsScreen({ items, setItems, back }: { items: ProtoCheckItem[]; setItems: (items: ProtoCheckItem[]) => void; back: () => void }) {
  const [editing, setEditing] = useState<ProtoCheckItem | null>(null)
  const [words, setWords] = useState('')
  const start = (item: ProtoCheckItem) => { setEditing(item); setWords(item.words.join(', ')) }
  const save = () => {
    if (!editing) return
    const next = { ...editing, name: editing.name.trim(), words: editing.kind === 'link' ? words.split(',').map((word) => word.trim()).filter(Boolean) : [] }
    setItems(items.some((item) => item.id === next.id) ? items.map((item) => (item.id === next.id ? next : item)) : [...items, next])
    setEditing(null)
    toast.success('Item salvo', { description: 'Vale para o checklist deste mês e os próximos.' })
  }
  const move = (index: number, step: number) => { const next = [...items]; const [moved] = next.splice(index, 1); next.splice(index + step, 0, moved); setItems(next) }
  return (
    <>
      <PageHeader title="Itens do checklist" sub="Uma lista para todos os sites. Mudanças valem para o mês atual e os próximos; os meses passados guardam o que foi conferido."
        back={<button onClick={back} className="inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft className="h-3.5 w-3.5" />Checklists</button>}
        actions={<Button onClick={() => start({ id: Math.max(...items.map((item) => item.id)) + 1, name: '', kind: 'link', words: [], active: true })}><Plus className="h-4 w-4" />Novo item</Button>} />
      <Body>
        <Table min={760}>
          <thead><tr><th className={cn(th, 'w-[72px]')}>Ordem</th><th className={th}>Item</th><th className={th}>Como confere</th><th className={th}>Situação</th><th className={cn(th, 'w-[60px]')}><span className="sr-only">Ações</span></th></tr></thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id} className="hover:bg-muted">
                <td className={td}><div className="flex gap-1"><Button size="icon" variant="ghost" className="h-7 w-7" disabled={index === 0} aria-label="Subir" onClick={() => move(index, -1)}>↑</Button><Button size="icon" variant="ghost" className="h-7 w-7" disabled={index === items.length - 1} aria-label="Descer" onClick={() => move(index, 1)}>↓</Button></div></td>
                <td className={cn(td, 'font-medium')}>{item.name}</td>
                <td className={cn(td, 'text-muted-foreground')}>{CHECK_KIND[item.kind][0]}{item.kind === 'link' && <span className="block text-[12px]">{item.words.join(', ')}</span>}</td>
                <td className={td}>{item.active ? <Status tone="ok">Ativo</Status> : <Status tone="neutral">Desligado</Status>}</td>
                <td className={td}><Button size="icon" variant="ghost" className="h-8 w-8" aria-label={`Editar ${item.name}`} onClick={() => start(item)}><Pencil className="h-4 w-4" /></Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Body>
      <Dialog open={!!editing} onOpenChange={(opened) => !opened && setEditing(null)}>
        <DialogContent className="max-w-[520px]">
          <DialogHeader><DialogTitle>{editing && items.some((item) => item.id === editing.id) ? 'Editar item' : 'Novo item'}</DialogTitle><DialogDescription>{editing ? CHECK_KIND[editing.kind][1] : ''}</DialogDescription></DialogHeader>
          {editing && (
            <div className="grid gap-4">
              <Field id="item-name" label="Nome"><Input id="item-name" className="h-10" value={editing.name} onChange={(event) => setEditing({ ...editing, name: event.target.value })} /></Field>
              <Field id="item-kind" label="Como confere"><Select value={editing.kind} onValueChange={(value) => setEditing({ ...editing, kind: value as CheckKind })}><SelectTrigger id="item-kind" className="h-10"><SelectValue /></SelectTrigger><SelectContent>{(Object.keys(CHECK_KIND) as CheckKind[]).map((key) => <SelectItem key={key} value={key}>{CHECK_KIND[key][0]}</SelectItem>)}</SelectContent></Select></Field>
              {editing.kind === 'link' && <Field id="item-words" label="Palavras" hint="Separadas por vírgula, em português, inglês e espanhol."><Input id="item-words" className="h-10" value={words} onChange={(event) => setWords(event.target.value)} placeholder="cookies, cookie, galletas" /></Field>}
              <label className="flex items-center gap-2 text-[14px]"><input type="checkbox" checked={editing.active} onChange={(event) => setEditing({ ...editing, active: event.target.checked })} />Ativo</label>
            </div>
          )}
          <DialogFooter><Button variant="outline" onClick={() => setEditing(null)}>Cancelar</Button><Button disabled={!editing || editing.name.trim().length < 2 || (editing.kind === 'link' && !words.trim())} onClick={save}>Salvar item</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

function DashboardTemplatesScreen() {
  const [templates, setTemplates] = useState(INITIAL_TEMPLATES)
  const [tab, setTab] = useState<TplAudience>('groone')
  const [editing, setEditing] = useState<ProtoTemplate | null>(null)
  const list = templates.filter((tpl) => tpl.audience === tab)
  const markHome = (id: string) => { const target = templates.find((tpl) => tpl.id === id)!; setTemplates(templates.map((tpl) => (tpl.audience === target.audience ? { ...tpl, home: tpl.id === id } : tpl))); toast.success('Modelo de início trocado', { description: 'Abre para quem ainda não tem dashboard.' }) }
  if (editing) {
    const roles = editing.audience === 'groone' ? GROONE_TPL_ROLES : CLIENT_TPL_ROLES
    return (
      <>
        <PageHeader title="Editando o modelo" back={<button onClick={() => setEditing(null)} className="inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4" />Modelos de dashboard</button>} actions={<><Button variant="outline">Adicionar bloco</Button><Button variant="outline" onClick={() => setEditing(null)}>Cancelar</Button><Button onClick={() => { setTemplates(templates.map((tpl) => (tpl.id === editing.id ? { ...editing, updated: 'Agora' } : tpl))); setEditing(null); toast.success('Modelo salvo', { description: 'Os dashboards já copiados dele não mudam.' }) }}>Salvar modelo</Button></>} />
        <Body>
          <Card title="Modelo" desc="O nome em português é obrigatório; sem inglês ou espanhol, vale o português.">
            <div className="grid gap-4 md:grid-cols-3">
              <Field id="tpl-pt" label="Nome (PT)"><Input id="tpl-pt" className="h-10" value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} /></Field>
              <Field id="tpl-en" label="Nome (EN)"><Input id="tpl-en" className="h-10" placeholder={editing.name} /></Field>
              <Field id="tpl-es" label="Nome (ES)"><Input id="tpl-es" className="h-10" placeholder={editing.name} /></Field>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Field id="tpl-aud" label="Para quem" hint="Mudar o público tira a marca de modelo de início.">
                <Select value={editing.audience} onValueChange={(v) => setEditing({ ...editing, audience: v as TplAudience, roles: [], home: false })}><SelectTrigger id="tpl-aud" className="h-10"><SelectValue /></SelectTrigger>
                  <SelectContent><SelectItem value="groone">Equipe Groone</SelectItem><SelectItem value="clients">Clientes</SelectItem></SelectContent>
                </Select>
              </Field>
              <fieldset className="grid gap-2">
                <legend className="mb-2 text-[14px] font-medium">Papéis que veem</legend>
                <div className="flex flex-wrap gap-2">
                  {roles.map((role) => { const on = editing.roles.includes(role); return <button key={role} type="button" aria-pressed={on} onClick={() => setEditing({ ...editing, roles: on ? editing.roles.filter((r) => r !== role) : [...editing.roles, role] })} className={cn('h-8 rounded-md border px-3 text-[13px]', on ? 'border-foreground bg-secondary' : 'text-muted-foreground hover:text-foreground')}>{role}</button> })}
                </div>
                <p className="text-[13px] text-muted-foreground">{editing.roles.length ? 'Só esses papéis veem o modelo.' : 'Nenhum marcado: todos veem.'}</p>
              </fieldset>
            </div>
          </Card>
          <p className="flex items-center gap-2 rounded-lg border border-dashed border-foreground/40 bg-card px-4 py-3 text-[14px]"><LayoutGrid className="h-4 w-4" />Arraste o bloco pelo título e mude o tamanho pelo canto. Um bloco que cai em cima de outro empurra o de baixo; os blocos sobem para fechar os vãos.{editing.audience === 'clients' && ' Os números aparecem só no painel do cliente.'}</p>
          <div className="relative grid grid-cols-1 gap-4 md:auto-rows-[72px] md:grid-cols-12">
            {editing.blocks.map((block) => (
              <section key={block.id} className="relative flex flex-col rounded-lg border border-dashed border-foreground/40 bg-card md:[grid-column:var(--col)] md:[grid-row:var(--row)]" style={{ '--col': `${block.x + 1} / span ${block.w}`, '--row': `${block.y + 1} / span ${block.h}` } as React.CSSProperties}>
                <div className="flex cursor-grab items-center gap-2 px-5 pt-4"><h3 className="flex-1 truncate text-[14px] font-semibold">{block.title}</h3><Button variant="ghost" size="sm" aria-label={`Opções de ${block.title}`}><MoreHorizontal className="h-4 w-4" /></Button></div>
                <p className="px-5 pb-5 pt-3 text-[13px] text-muted-foreground">{editing.audience === 'clients' ? 'Prévia só no painel do cliente.' : '—'}</p>
                <span aria-hidden className="absolute bottom-1 right-1 hidden h-3 w-3 cursor-se-resize border-b-2 border-r-2 border-foreground/50 md:block" />
              </section>
            ))}
            <div className="hidden rounded-lg border-2 border-dashed border-foreground/30 bg-muted/60 md:block" style={{ gridColumn: '9 / span 4', gridRow: '1 / span 2' }} aria-hidden />
          </div>
        </Body>
      </>
    )
  }
  return (
    <>
      <PageHeader title="Modelos de dashboard" sub="Os dashboards prontos que a equipe Groone e os clientes podem copiar. Um modelo de cada público abre no início de quem ainda não tem dashboard." actions={<Button onClick={() => setEditing({ id: `t${Date.now()}`, name: 'Modelo novo', audience: tab, roles: [], home: false, updated: 'Agora', blocks: [] })}><Plus className="h-4 w-4" />Novo modelo</Button>} />
      <Body>
        <div className="flex flex-wrap rounded-md border bg-card p-0.5" role="tablist" aria-label="Público">
          {([['groone', 'Equipe Groone'], ['clients', 'Clientes']] as const).map(([key, label]) => (
            <button key={key} role="tab" aria-selected={tab === key} onClick={() => setTab(key)} className={cn('h-8 rounded-[4px] px-3 text-[13px] font-medium', tab === key ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground')}>{label}</button>
          ))}
        </div>
        <Table min={720}>
          <thead><tr><th className={th}>Nome</th><th className={th}>Quem vê</th><th className={th}>Blocos</th><th className={th}>Atualizado</th><th className={cn(th, 'w-12')}><span className="sr-only">Ações</span></th></tr></thead>
          <tbody>
            {list.map((tpl) => (
              <tr key={tpl.id} className="hover:bg-muted">
                <td className={td}><button className="font-medium hover:underline" onClick={() => setEditing(tpl)}>{tpl.name}</button>{tpl.home && <span className="ml-2"><Badge>Início</Badge></span>}</td>
                <td className={cn(td, 'text-muted-foreground')}>{tpl.roles.length ? tpl.roles.join(', ') : 'Todos'}</td>
                <td className={cn(td, 'tnum text-muted-foreground')}>{tpl.blocks.length}</td>
                <td className={cn(td, 'whitespace-nowrap text-[13px] text-muted-foreground')}>{tpl.updated}</td>
                <td className={td}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild><Button variant="ghost" size="sm" aria-label={`Ações de ${tpl.name}`}><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onSelect={() => setEditing(tpl)}>Editar</DropdownMenuItem>
                      {!tpl.home && <DropdownMenuItem onSelect={() => markHome(tpl.id)}>Usar no início</DropdownMenuItem>}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-bad" onSelect={() => setTemplates(templates.filter((item) => item.id !== tpl.id))}>Excluir</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Body>
    </>
  )
}

/* ---------- Ferramentas do GAM (core#191) ---------- */

type GamFormat = 'light' | 'gtag'
type GamToolKind = 'config' | 'setup' | 'keyvalues' | 'sync' | 'install' | 'adstxt'
type GamStepState = 'pending' | 'running' | 'done' | 'existed' | 'failed'
type GamStep = { key: string; label: string; state: GamStepState; detail: string }
type GamRun = { id: number; tool: GamToolKind; network: string; sites: string[]; format: GamFormat | null; by: string; at: string; state: 'running' | 'done' | 'failed'; steps: GamStep[] }
type ProtoGamSite = { domain: string; parent: boolean; blocks: number; format: GamFormat | null }
type ProtoGamNetwork = { code: string; name: string; client: string; currency: string; seller: string; keyValues: number; order: boolean; sites: ProtoGamSite[] }

const GAM_TOOLS: Record<GamToolKind, { name: string; desc: string; writes: boolean; icon: typeof Wrench }> = {
  config: { name: 'Configuração completa', desc: 'Key values, order AdExchange, blocos pai e filho, line items e criativo, associa tudo e aprova a order. Para network nova.', writes: true, icon: Wrench },
  setup: { name: 'Setup de anúncio', desc: 'Cria os blocos e liga aos line items dos sites escolhidos, no formato Tag Light ou GTag. Para site novo numa network pronta.', writes: true, icon: Plus },
  keyvalues: { name: 'Gerar key values', desc: 'Confere e cria as 8 keys (utm_*, land_uri, id_post_wp, content_hash) e os valores de id_post_wp.', writes: true, icon: List },
  sync: { name: 'Sincronizar agora', desc: 'Busca sites e blocos novos no GAM sem esperar a importação das 6 horas.', writes: false, icon: RefreshCw },
  install: { name: 'Arquivo de instalação', desc: 'O passo a passo do AdInserter de cada site, em português, inglês ou espanhol. Vários sites saem num .zip.', writes: false, icon: Download },
  adstxt: { name: 'Linhas do ads.txt', desc: 'As linhas que o cliente põe no ads.txt, com o seller ID da network filha.', writes: false, icon: Copy },
}
const GAM_FORMATS: Record<GamFormat, { name: string; desc: string; blocks: string[] }> = {
  light: { name: 'Tag Light', desc: '14 blocos por site (Offerwall, Fixed, Interstitial, Anchor, Rewards, Content 1 a 9) e um line item "Display" para a network toda.', blocks: ['Offerwall', 'Fixed', 'Interstitial', 'Anchor', 'Rewards', 'Content1', 'Content2', 'Content3', 'Content4', 'Content5', 'Content6', 'Content7', 'Content8', 'Content9'] },
  gtag: { name: 'GTag', desc: '27 blocos por site, separados em Desktop e Mobile, e um line item por tipo de bloco (27 na network).', blocks: ['Offerwall', ...['Fixed', 'Interstitial', 'Anchor', 'Rewards', 'Content1', 'Content2', 'Content3', 'Content4', 'Content5', 'Content6', 'Content7', 'Content8', 'Content9'].flatMap((name) => [`${name}_Desktop`, `${name}_Mobile`])] },
}
const GAM_STEP_STATE: Record<GamStepState, [string, 'ok' | 'bad' | 'neutral' | 'ochre']> = { pending: ['Pendente', 'neutral'], running: ['Executando', 'ochre'], done: ['Concluído', 'ok'], existed: ['Já existia', 'ok'], failed: ['Falhou', 'bad'] }

const GAM_NETWORKS: ProtoGamNetwork[] = [
  { code: '21987654321', name: 'Tech Notícias MCM', client: 'Tech Notícias', currency: 'BRL', seller: 'pub-4417829301', keyValues: 8, order: true, sites: [{ domain: 'technoticias.com.br', parent: true, blocks: 27, format: 'gtag' }, { domain: 'financasdodia.com', parent: true, blocks: 14, format: 'light' }, { domain: 'games.technoticias.com.br', parent: false, blocks: 0, format: null }] },
  { code: '22311009876', name: 'Receitas & Cia', client: 'Receitas & Cia', currency: 'USD', seller: 'pub-9031127745', keyValues: 0, order: false, sites: [{ domain: 'receitasdavo.com', parent: false, blocks: 0, format: null }] },
]

/** Os passos de uma ferramenta, na ordem do Genius, para os sites e o formato escolhidos. */
function gamSteps(tool: GamToolKind, network: ProtoGamNetwork, sites: string[], format: GamFormat | null): GamStep[] {
  const blocks = format ? GAM_FORMATS[format].blocks.length : 0
  const step = (key: string, label: string, detail = ''): GamStep => ({ key, label, state: 'pending', detail })
  const perSite = sites.flatMap((domain) => [step(`parent-${domain}`, `Bloco pai ${domain}`), step(`child-${domain}`, `${blocks} blocos filhos de ${domain}`)])
  const delivery = [step('order', 'Order AdExchange'), ...perSite, step('lineitems', format === 'light' ? 'Line item Display' : `${blocks} line items`), step('creative', 'Criativo "Display All requested sizes"'), step('association', 'Associar criativo aos line items'), step('approve', 'Aprovar a order')]
  if (tool === 'config') return [step('info', `Conectar na network ${network.code}`), step('keyvalues', 'Key values'), step('domains', 'Sites aprovados no GAM'), ...delivery]
  if (tool === 'setup') return [step('info', `Conectar na network ${network.code}`), ...delivery]
  if (tool === 'keyvalues') return [step('info', `Conectar na network ${network.code}`), step('keys', '8 keys'), step('values', 'Valores de id_post_wp (1 a 9999)')]
  return [step('info', `Conectar na network ${network.code}`), step('sites', 'Sites'), step('blocks', 'Blocos')]
}

/** O que cada passo encontra no exemplo: o que já existe no GAM é reaproveitado. */
function gamStepResult(step: GamStep, network: ProtoGamNetwork): Pick<GamStep, 'state' | 'detail'> {
  if (step.key === 'info') return { state: 'done', detail: `${network.name} · ${network.currency}` }
  if (step.key === 'order') return network.order ? { state: 'existed', detail: 'Order 3456789012, aprovada' } : { state: 'done', detail: 'Order 3456790001 criada' }
  if (step.key === 'keyvalues' || step.key === 'keys') return network.keyValues === 8 ? { state: 'existed', detail: 'As 8 keys já existiam' } : { state: 'done', detail: `${8 - network.keyValues} keys criadas` }
  if (step.key === 'values') return { state: 'done', detail: '9.999 valores, 0 repetidos' }
  if (step.key.startsWith('parent-')) { const site = network.sites.find((item) => `parent-${item.domain}` === step.key); return site?.parent ? { state: 'existed', detail: 'Bloco 22198765 já existia' } : { state: 'done', detail: 'Bloco 22198790 criado' } }
  if (step.key.startsWith('child-')) return { state: 'done', detail: 'Criados com a data de hoje no nome (_20261103)' }
  if (step.key === 'domains' || step.key === 'sites') return { state: 'done', detail: `${network.sites.length} sites, 1 novo` }
  if (step.key === 'blocks') return { state: 'done', detail: '41 blocos, 0 novos' }
  if (step.key === 'association') return { state: 'done', detail: 'Associações que faltavam criadas' }
  if (step.key === 'approve') return network.order ? { state: 'existed', detail: 'Já estava aprovada' } : { state: 'done', detail: 'Aprovada' }
  return { state: 'done', detail: '' }
}

const INITIAL_GAM_RUNS: GamRun[] = [
  { id: 12, tool: 'setup', network: '21987654321', sites: ['financasdodia.com'], format: 'light', by: 'Ana Souza', at: '28/10/2026 14:02', state: 'done', steps: [] },
  { id: 11, tool: 'keyvalues', network: '21987654321', sites: [], format: null, by: 'Você', at: '20/10/2026 09:31', state: 'done', steps: [] },
  { id: 10, tool: 'config', network: '21987654321', sites: ['technoticias.com.br'], format: 'gtag', by: 'Pedro Henrique', at: '02/10/2026 16:45', state: 'done', steps: [] },
]

/** Uma linha de site para escolher no setup, com o que ele já tem no GAM. */
function GamSitePick({ site, picked, toggle }: { site: ProtoGamSite; picked: boolean; toggle: () => void }) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-md border px-3 py-2.5 hover:bg-muted">
      <input type="checkbox" className="mt-1 h-4 w-4 accent-foreground" checked={picked} onChange={toggle} />
      <span className="min-w-0">
        <span className="block break-all font-mono text-[13px] font-medium">{site.domain}</span>
        <span className="text-[13px] text-muted-foreground">{site.blocks ? `${site.blocks} blocos · ${GAM_FORMATS[site.format!].name}` : site.parent ? 'Só o bloco pai' : 'Nada no GAM ainda'}</span>
      </span>
    </label>
  )
}

/** Tela das ferramentas do GAM: escolhe a network, roda uma ferramenta e vê as execuções. */
function GamToolsScreen({ runs, start, open }: { runs: GamRun[]; start: (run: GamRun) => void; open: (id: number) => void }) {
  const [code, setCode] = useState(GAM_NETWORKS[0].code)
  const [tool, setTool] = useState<GamToolKind | null>(null)
  const [sites, setSites] = useState<string[]>([])
  const [format, setFormat] = useState<GamFormat>('gtag')
  const [language, setLanguage] = useState('pt')
  const network = GAM_NETWORKS.find((item) => item.code === code)!
  const networkRuns = runs.filter((run) => run.network === code)
  const choose = (kind: GamToolKind) => {
    setTool(kind)
    setSites(network.sites.filter((site) => !site.blocks).map((site) => site.domain))
    if (kind === 'sync') { run(kind) }
  }
  const run = (kind: GamToolKind) => {
    const withSites = kind === 'config' || kind === 'setup'
    const picked = withSites ? sites : []
    const id = Math.max(0, ...runs.map((item) => item.id)) + 1
    start({ id, tool: kind, network: code, sites: picked, format: withSites ? format : null, by: 'Você', at: '03/11/2026 15:50', state: 'running', steps: gamSteps(kind, network, picked, withSites ? format : null) })
    setTool(null)
    open(id)
  }
  const adsLines = [`groone.com, ${network.seller}, DIRECT`, 'google.com, pub-8927435346654667, RESELLER, f08c47fec0942fa0', 'google.com, pub-8927435346654667, DIRECT, f08c47fec0942fa0']
  const picking = tool === 'config' || tool === 'setup'
  const blockCount = GAM_FORMATS[format].blocks.length
  return (
    <>
      <PageHeader title="Ferramentas do GAM" sub="Configura e confere as networks dos clientes no Ad Manager. O que escreve no GAM confere antes o que já existe e fica na auditoria." />
      <Body>
        <div className="grid gap-4 rounded-lg border bg-card p-4 sm:grid-cols-[minmax(0,320px)_1fr] sm:items-center">
          <Select value={code} onValueChange={setCode}><SelectTrigger aria-label="Network" className="h-9"><SelectValue /></SelectTrigger><SelectContent>{GAM_NETWORKS.map((item) => <SelectItem key={item.code} value={item.code}>{item.name} · {item.code}</SelectItem>)}</SelectContent></Select>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-[13px] text-muted-foreground">
            <span>Cliente <span className="text-foreground">{network.client}</span></span>
            <span>Moeda <span className="text-foreground">{network.currency}</span></span>
            <span>Sites <span className="tnum text-foreground">{network.sites.length}</span></span>
            <span>Key values <span className="tnum text-foreground">{network.keyValues}/8</span></span>
            <span>Order AdExchange {network.order ? <span className="text-foreground">aprovada</span> : <span className="text-foreground">não existe</span>}</span>
          </div>
        </div>
        <div className="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {(Object.keys(GAM_TOOLS) as GamToolKind[]).map((kind) => {
            const { name, desc, writes, icon: Icon } = GAM_TOOLS[kind]
            return (
              <button key={kind} onClick={() => choose(kind)} className="flex flex-col items-start gap-2 bg-card p-5 text-left hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <span className="flex w-full items-center gap-2"><Icon className="h-4 w-4" /><span className="font-medium">{name}</span>{writes && <span className="ml-auto rounded-full border px-2 py-0.5 text-[11px] font-medium text-muted-foreground">Escreve no GAM</span>}</span>
                <span className="text-[13px] text-muted-foreground">{desc}</span>
              </button>
            )
          })}
        </div>
        <section className="grid gap-3">
          <h2 className="text-[16px] font-semibold tracking-tight">Execuções nesta network</h2>
          <Table min={720}>
            <thead><tr><th className={th}>Ferramenta</th><th className={th}>Sites</th><th className={th}>Quem</th><th className={th}>Quando</th><th className={th}>Situação</th></tr></thead>
            <tbody>
              {networkRuns.map((item) => (
                <tr key={item.id} className="hover:bg-muted">
                  <td className={td}><button className="text-left font-medium hover:underline" onClick={() => open(item.id)}>{GAM_TOOLS[item.tool].name}</button>{item.format && <span className="block text-[13px] text-muted-foreground">{GAM_FORMATS[item.format].name}</span>}</td>
                  <td className={cn(td, 'font-mono text-[13px]')}>{item.sites.join(', ') || '—'}</td>
                  <td className={td}>{item.by}</td>
                  <td className={cn(td, 'whitespace-nowrap tnum text-[13px] text-muted-foreground')}>{item.at}</td>
                  <td className={td}>{item.state === 'running' ? <Status tone="ochre">Executando</Status> : item.state === 'done' ? <Status tone="ok">Concluída</Status> : <Status tone="bad">Falhou</Status>}</td>
                </tr>
              ))}
              {!networkRuns.length && <tr><td className={cn(td, 'py-10 text-center text-muted-foreground')} colSpan={5}>Nenhuma ferramenta rodou nesta network.</td></tr>}
            </tbody>
          </Table>
        </section>
      </Body>

      <Dialog open={picking} onOpenChange={(value) => !value && setTool(null)}>
        <DialogContent className="max-w-[560px]">
          <DialogHeader><DialogTitle>{tool && GAM_TOOLS[tool].name}</DialogTitle><DialogDescription>Na network {network.name} ({network.code}). O que já existe no GAM é reaproveitado; nada é apagado.</DialogDescription></DialogHeader>
          <div className="grid gap-5">
            <div className="grid gap-2">
              <Label>Formato</Label>
              <RadioGroup value={format} onValueChange={(value) => setFormat(value as GamFormat)} className="grid gap-2">
                {(Object.keys(GAM_FORMATS) as GamFormat[]).map((key) => (
                  <label key={key} className="flex cursor-pointer items-start gap-3 rounded-md border px-3 py-2.5 hover:bg-muted"><RadioGroupItem value={key} className="mt-0.5" /><span><span className="block text-[14px] font-medium">{GAM_FORMATS[key].name}</span><span className="text-[13px] text-muted-foreground">{GAM_FORMATS[key].desc}</span></span></label>
                ))}
              </RadioGroup>
            </div>
            <div className="grid gap-2">
              <Label>Sites</Label>
              <div className="grid max-h-[220px] gap-2 overflow-y-auto">{network.sites.map((site) => <GamSitePick key={site.domain} site={site} picked={sites.includes(site.domain)} toggle={() => setSites(sites.includes(site.domain) ? sites.filter((item) => item !== site.domain) : [...sites, site.domain])} />)}</div>
            </div>
            <div className="rounded-md border bg-muted px-4 py-3 text-[13px]">
              <div className="font-medium">Vai escrever no GAM</div>
              <ul className="mt-1 list-disc pl-5 text-muted-foreground">
                {tool === 'config' && <li>As key values que faltarem</li>}
                <li>{network.order ? 'Usa a order AdExchange que já existe' : 'A order AdExchange, com o anunciante google'}</li>
                <li><span className="tnum">{sites.length * blockCount}</span> blocos ({sites.length} {sites.length === 1 ? 'site' : 'sites'} × {blockCount})</li>
                <li>{format === 'light' ? 'O line item Display, mirando a network toda' : `Até ${blockCount} line items, um por tipo de bloco`}</li>
                <li>O criativo, as associações e a aprovação da order</li>
              </ul>
            </div>
          </div>
          <DialogFooter><Button variant="outline" onClick={() => setTool(null)}>Cancelar</Button><Button disabled={!sites.length} onClick={() => tool && run(tool)}>Rodar no GAM</Button></DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={tool === 'keyvalues'} onOpenChange={(value) => !value && setTool(null)}>
        <DialogContent className="max-w-[480px]">
          <DialogHeader><DialogTitle>Gerar key values</DialogTitle><DialogDescription>Na network {network.name}. Tem {network.keyValues} das 8 keys.</DialogDescription></DialogHeader>
          <p className="font-mono text-[13px] text-muted-foreground">utm_term, utm_source, utm_medium, utm_content, utm_campaign, land_uri, id_post_wp, content_hash</p>
          <DialogFooter><Button variant="outline" onClick={() => setTool(null)}>Cancelar</Button><Button onClick={() => run('keyvalues')}>Rodar no GAM</Button></DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={tool === 'install'} onOpenChange={(value) => !value && setTool(null)}>
        <DialogContent className="max-w-[520px]">
          <DialogHeader><DialogTitle>Arquivo de instalação</DialogTitle><DialogDescription>O passo a passo do AdInserter com os blocos que já estão no GAM.</DialogDescription></DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-2"><Label>Sites</Label><div className="grid max-h-[200px] gap-2 overflow-y-auto">{network.sites.filter((site) => site.blocks).map((site) => <GamSitePick key={site.domain} site={site} picked={sites.includes(site.domain)} toggle={() => setSites(sites.includes(site.domain) ? sites.filter((item) => item !== site.domain) : [...sites, site.domain])} />)}</div></div>
            <Field id="install-lang" label="Idioma"><Select value={language} onValueChange={setLanguage}><SelectTrigger id="install-lang" className="h-9"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="pt">Português</SelectItem><SelectItem value="en">English</SelectItem><SelectItem value="es">Español</SelectItem></SelectContent></Select></Field>
            {sites.some((domain) => network.sites.find((site) => site.domain === domain)?.format === 'gtag') && <div className="flex gap-2 rounded-md border px-3 py-2.5 text-[13px]"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-ochre" /><span>O arquivo da GTag ainda está para definir. Por enquanto só os sites em Tag Light saem no arquivo.</span></div>}
          </div>
          <DialogFooter><Button variant="outline" onClick={() => setTool(null)}>Cancelar</Button><Button disabled={!sites.length} onClick={() => { setTool(null); toast.success(sites.length > 1 ? 'blocos.zip baixado' : `${sites[0]}.txt baixado`) }}><Download className="h-4 w-4" />Baixar</Button></DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={tool === 'adstxt'} onOpenChange={(value) => !value && setTool(null)}>
        <DialogContent className="max-w-[600px]">
          <DialogHeader><DialogTitle>Linhas do ads.txt</DialogTitle><DialogDescription>Para todos os sites da network {network.name}. As duas linhas do Google só valem no Manage Inventory.</DialogDescription></DialogHeader>
          <pre className="overflow-x-auto rounded-md border bg-muted p-3 font-mono text-[13px] leading-6">{adsLines.join('\n')}</pre>
          <DialogFooter><Button variant="outline" onClick={() => setTool(null)}>Fechar</Button><Button onClick={() => { navigator.clipboard?.writeText(adsLines.join('\n')).catch(() => undefined); toast.success('Linhas copiadas') }}><Copy className="h-4 w-4" />Copiar</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

/** Tela de uma execução: os passos andam ao vivo, como o acompanhamento do Genius. */
function GamRunScreen({ run, update, back }: { run: GamRun; update: (run: GamRun) => void; back: () => void }) {
  const network = GAM_NETWORKS.find((item) => item.code === run.network)!
  const latest = useRef(run)
  latest.current = run
  useEffect(() => {
    if (run.state !== 'running') return
    const timer = setInterval(() => {
      const current = latest.current
      const index = current.steps.findIndex((step) => step.state === 'pending' || step.state === 'running')
      if (index < 0) { clearInterval(timer); update({ ...current, state: 'done' }); toast.success('Ferramenta concluída'); return }
      const steps = current.steps.map((step, position) => (position !== index ? step : step.state === 'pending' ? { ...step, state: 'running' as const } : { ...step, ...gamStepResult(step, network) }))
      update({ ...current, steps })
    }, 450)
    return () => clearInterval(timer)
  }, [run.id, run.state])
  const steps = run.steps.length ? run.steps : gamSteps(run.tool, network, run.sites, run.format).map((step) => ({ ...step, ...gamStepResult(step, network) }))
  const done = steps.filter((step) => step.state === 'done' || step.state === 'existed').length
  return (
    <>
      <PageHeader title={GAM_TOOLS[run.tool].name} sub={`${network.name} · ${run.format ? `${GAM_FORMATS[run.format].name} · ` : ''}${run.by} em ${run.at}`}
        back={<button onClick={back} className="inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft className="h-3.5 w-3.5" />Ferramentas do GAM</button>} />
      <Body>
        <div className="flex flex-wrap items-center gap-4 rounded-lg border bg-card px-4 py-3">
          {run.state === 'running' ? <Status tone="ochre">Executando</Status> : run.state === 'done' ? <Status tone="ok">Concluída</Status> : <Status tone="bad">Falhou</Status>}
          <div className="h-1.5 w-40 overflow-hidden rounded-full bg-secondary"><div className={cn('h-full rounded-full transition-all', run.state === 'done' ? 'bg-ok' : 'bg-foreground')} style={{ width: `${(done / steps.length) * 100}%` }} /></div>
          <span className="tnum text-[13px] text-muted-foreground">{done} de {steps.length} passos</span>
          {run.sites.length > 0 && <span className="ml-auto break-all font-mono text-[13px] text-muted-foreground">{run.sites.join(', ')}</span>}
        </div>
        <Card pad={false}>
          <ol className="divide-y">
            {steps.map((step, index) => (
              <li key={step.key} className="grid grid-cols-[28px_1fr] gap-3 px-5 py-3 sm:grid-cols-[28px_1fr_auto] sm:items-center">
                <span className="tnum pt-0.5 text-[13px] text-muted-foreground">{index + 1}</span>
                <div className="min-w-0"><div className="text-[14px] font-medium">{step.label}</div>{step.detail && <div className="break-words text-[13px] text-muted-foreground">{step.detail}</div>}</div>
                <div className="col-start-2 sm:col-start-auto">{step.state === 'running' ? <span className="inline-flex items-center gap-2 text-[13px]"><Loader2 className="h-3.5 w-3.5 animate-spin" />Executando</span> : <Status tone={GAM_STEP_STATE[step.state][1]}>{GAM_STEP_STATE[step.state][0]}</Status>}</div>
              </li>
            ))}
          </ol>
        </Card>
        {run.state === 'done' && GAM_TOOLS[run.tool].writes && <p className="text-[13px] text-muted-foreground">Registrado na auditoria. Os blocos novos entram no Avant na próxima importação (ou em Sincronizar agora).</p>}
      </Body>
    </>
  )
}

/* ---------- Rewards (item do Genius: janela no site que libera um conteúdo em troca de um anúncio premiado) ---------- */

type RewardLayout = 'simple' | 'highlight' | 'header'
type RewardStyle = { layout: RewardLayout; body: string; border: string; borderWidth: number; title: string; text: string; button: string; buttonText: string; radius: number; font: string; shadow: boolean }
type RewardIcon = { kind: 'emoji' | 'image' | 'none'; emoji: string; image: string | null }
type RewardQuestion = { title: string; description: string; answers: [string, string, string] }
type RewardLead = { kind: 'email' | 'phone'; position: 'start' | 'end'; title: string; description: string; button: string }
type RewardStep = { kind: 'question'; index: number } | { kind: 'lead' } | { kind: 'reward' }
type ProtoReward = { id: number; questions: RewardQuestion[]; lead: RewardLead | null; name: string; client: string; domain: string; page: string; active: boolean; icon: RewardIcon; title: string; description: string; button: string; style: RewardStyle; block: string; cooldown: number; scroll: number; clickElement: string | null; redirect: string | null; updated: string }
type RewardBlockGroup = { date: string; codes: string[] }
type ProtoRewardSite = { domain: string; client: string; blocks: RewardBlockGroup[] }

const REWARD_SITES: ProtoRewardSite[] = [
  { domain: 'acai.com.br', client: 'Açaí Mídia', blocks: [{ date: '2026-10-28', codes: ['acai.com.br_Desktop_Rewards', 'acai.com.br_Mobile_Rewards'] }, { date: '2026-08-14', codes: ['acai.com.br_Mobile_Rewards'] }, { date: '2026-03-02', codes: ['acai.com.br_Rewards'] }] },
  { domain: 'receitasdaacai.com.br', client: 'Açaí Mídia', blocks: [{ date: '2026-09-02', codes: ['receitasdaacai.com.br_Rewards'] }] },
  { domain: 'technoticias.com.br', client: 'Tech Notícias', blocks: [{ date: '2026-10-05', codes: ['technoticias.com.br_Desktop_Rewards', 'technoticias.com.br_Mobile_Rewards'] }, { date: '2026-06-20', codes: ['technoticias.com.br_Rewards'] }] },
  { domain: 'viagemfacil.com', client: 'Viagem Fácil', blocks: [{ date: '2026-07-11', codes: ['viagemfacil.com_Rewards'] }] },
]
const MY_CLIENT = 'Açaí Mídia'
const REWARD_FONTS = [
  { name: 'Geist', stack: "'Geist', system-ui, sans-serif" },
  { name: 'Inter', stack: "'Inter', system-ui, sans-serif" },
  { name: 'Roboto', stack: "'Roboto', system-ui, sans-serif" },
  { name: 'Montserrat', stack: "'Montserrat', system-ui, sans-serif" },
  { name: 'Poppins', stack: "'Poppins', system-ui, sans-serif" },
  { name: 'Lora', stack: "'Lora', Georgia, serif" },
  { name: 'Merriweather', stack: "'Merriweather', Georgia, serif" },
  { name: 'Playfair Display', stack: "'Playfair Display', Georgia, serif" },
] as const
const REWARD_PRESETS: { name: string; style: Omit<RewardStyle, 'layout' | 'radius' | 'font' | 'borderWidth' | 'shadow'> }[] = [
  { name: 'Claro', style: { body: '#ffffff', border: '#e5e5e5', title: '#0a0a0a', text: '#525252', button: '#0a0a0a', buttonText: '#ffffff' } },
  { name: 'Escuro', style: { body: '#0a213d', border: '#1e3a5f', title: '#ffffff', text: '#c7d2e0', button: '#1976d2', buttonText: '#ffffff' } },
  { name: 'Quente', style: { body: '#fff7ed', border: '#fdba74', title: '#7c2d12', text: '#9a3412', button: '#ea580c', buttonText: '#ffffff' } },
  { name: 'Natureza', style: { body: '#f0fdf4', border: '#86efac', title: '#14532d', text: '#166534', button: '#16a34a', buttonText: '#ffffff' } },
]
const DEFAULT_REWARD_STYLE: RewardStyle = { ...REWARD_PRESETS[1].style, layout: 'simple', borderWidth: 1, radius: 24, font: 'Geist', shadow: true }
const REWARD_LAYOUTS: { id: RewardLayout; name: string; desc: string }[] = [
  { id: 'simple', name: 'Simples', desc: 'Ícone solto, tudo no corpo' },
  { id: 'highlight', name: 'Destaque', desc: 'Ícone num círculo colorido' },
  { id: 'header', name: 'Cabeçalho', desc: 'Faixa colorida no topo' },
]
type VisitorLang = 'pt' | 'en' | 'es'
const REWARD_FOOTER: Record<VisitorLang, string> = { pt: 'Oferta patrocinada', en: 'Sponsored offer', es: 'Oferta patrocinada' }
const VISITOR_LANGS: [VisitorLang, string][] = [['pt', 'Português'], ['en', 'English'], ['es', 'Español']]
const REWARD_CONSENT: Record<VisitorLang, (domain: string) => string> = {
  pt: (domain) => `Ao continuar, você aceita receber contato de ${domain}.`,
  en: (domain) => `By continuing, you agree to be contacted by ${domain}.`,
  es: (domain) => `Al continuar, aceptas recibir contacto de ${domain}.`,
}
const REWARD_PROGRESS: Record<VisitorLang, (current: number, total: number) => string> = {
  pt: (current, total) => `Pergunta ${current} de ${total}`,
  en: (current, total) => `Question ${current} of ${total}`,
  es: (current, total) => `Pregunta ${current} de ${total}`,
}
const REWARD_NAME_PLACEHOLDER: Record<VisitorLang, string> = { pt: 'Seu nome', en: 'Your name', es: 'Tu nombre' }
const MAX_REWARD_QUESTIONS = 5
const REWARD_EMOJIS = ['🎁', '🏆', '🎉', '🚀', '🥳', '🎊', '🔓', '⭐']
const INITIAL_REWARDS: ProtoReward[] = [
  { id: 7, name: 'Receita completa do bolo de açaí', client: 'Açaí Mídia', domain: 'acai.com.br', page: 'receitas/bolo-de-acai', active: true, icon: { kind: 'emoji', emoji: '🎁', image: null }, title: 'Receita completa liberada', description: 'Assista a um anúncio curto e veja o passo a passo com as medidas.', button: 'Ver a receita', style: DEFAULT_REWARD_STYLE, block: 'latest', cooldown: 30, scroll: 40, clickElement: null, redirect: null, questions: [], lead: null, updated: '08/11/2026 16:20' },
  { id: 6, name: 'Ebook de sobremesas', client: 'Açaí Mídia', domain: 'receitasdaacai.com.br', page: 'ebook-sobremesas', active: false, icon: { kind: 'emoji', emoji: '📘', image: null }, title: 'Baixe o ebook grátis', description: '40 sobremesas com açaí, prontas em 15 minutos.', button: 'Baixar agora', style: { ...REWARD_PRESETS[2].style, layout: 'highlight', borderWidth: 2, radius: 16, font: 'Poppins', shadow: true }, block: '2026-09-02', questions: [{ title: 'Qual sobremesa você mais faz?', description: '', answers: ['Bolo', 'Mousse', 'Sorvete'] }, { title: 'Quanto tempo você tem para cozinhar?', description: 'Assim mostramos as receitas certas.', answers: ['15 minutos', '30 minutos', 'Mais de 1 hora'] }], lead: { kind: 'email', position: 'end', title: 'Para onde mandamos o ebook?', description: 'Também enviamos receitas novas uma vez por semana.', button: 'Continuar' }, cooldown: 60, scroll: 0, clickElement: '#baixar-ebook', redirect: 'ebook-sobremesas/download', updated: '02/11/2026 10:05' },
  { id: 5, name: 'Comparativo de celulares', client: 'Tech Notícias', domain: 'technoticias.com.br', page: 'reviews/melhores-celulares-2026', active: true, icon: { kind: 'emoji', emoji: '🏆', image: null }, title: 'Ranking completo', description: 'Desbloqueie a tabela com os 20 aparelhos testados.', button: 'Desbloquear', style: { ...REWARD_PRESETS[1].style, body: '#ffffff', title: '#0a0a0a', text: '#525252', border: '#e5e5e5', layout: 'header', borderWidth: 1, radius: 16, font: 'Poppins', shadow: true }, block: 'latest', cooldown: 15, scroll: 0, clickElement: null, redirect: null, questions: [], lead: null, updated: '30/10/2026 09:41' },
  { id: 4, name: 'Roteiro de 7 dias em Lisboa', client: 'Viagem Fácil', domain: 'viagemfacil.com', page: 'roteiros/lisboa-7-dias', active: true, icon: { kind: 'emoji', emoji: '🧳', image: null }, title: 'Roteiro em PDF', description: 'O roteiro dia a dia com mapa e dicas de restaurantes.', button: 'Quero o roteiro', style: { ...REWARD_PRESETS[3].style, layout: 'simple', borderWidth: 0, radius: 28, font: 'Lora', shadow: true }, block: '2026-07-11', cooldown: 120, scroll: 60, clickElement: null, redirect: null, questions: [], lead: null, updated: '21/10/2026 14:12' },
]

/** Fonte CSS do nome da fonte escolhida. */
function rewardFont(name: string) { return REWARD_FONTS.find((font) => font.name === name)?.stack ?? REWARD_FONTS[0].stack }
/** Luminância relativa de uma cor #rrggbb, para conferir o contraste. */
function luminance(hex: string) {
  const channels = [1, 3, 5].map((start) => parseInt(hex.slice(start, start + 2), 16) / 255).map((value) => (value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4))
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]
}
/** Contraste entre duas cores, de 1 a 21. */
function contrast(first: string, second: string) { const [light, dark] = [luminance(first), luminance(second)].sort((left, right) => right - left); return (light + 0.05) / (dark + 0.05) }
/** Clareia (positivo) ou escurece (negativo) uma cor #rrggbb pela fração dada. */
function shade(hex: string, amount: number) {
  const channels = [1, 3, 5].map((start) => parseInt(hex.slice(start, start + 2), 16))
  const mixed = channels.map((value) => Math.round(amount >= 0 ? value + (255 - value) * amount : value * (1 + amount)))
  return `#${mixed.map((value) => value.toString(16).padStart(2, '0')).join('')}`
}
/** Mistura duas cores #rrggbb, com `weight` da primeira (0 a 1). */
function mix(first: string, second: string, weight: number) {
  const channels = (hex: string) => [1, 3, 5].map((start) => parseInt(hex.slice(start, start + 2), 16))
  const [left, right] = [channels(first), channels(second)]
  return `#${left.map((value, index) => Math.round(value * weight + right[index] * (1 - weight)).toString(16).padStart(2, '0')).join('')}`
}
/** Degradê da cor de destaque, do tom escuro ao claro. */
function accentGradient(hex: string) { return `linear-gradient(135deg, ${shade(hex, -0.55)} 0%, ${hex} 100%)` }
/** As etapas que o visitante passa, na ordem: contato no começo, perguntas, contato no fim e o reward. */
function rewardSteps(reward: ProtoReward): RewardStep[] {
  const questions: RewardStep[] = reward.questions.map((_question, index) => ({ kind: 'question', index }))
  const lead: RewardStep[] = reward.lead ? [{ kind: 'lead' }] : []
  return [...(reward.lead?.position === 'start' ? lead : []), ...questions, ...(reward.lead?.position === 'end' ? lead : []), { kind: 'reward' }]
}
/** Nome curto de uma etapa, para os botões da pré-visualização. */
function stepLabel(step: RewardStep) { return step.kind === 'question' ? `Pergunta ${step.index + 1}` : step.kind === 'lead' ? 'Contato' : 'Reward' }
/** Data de criação dos ad units no formato dd/mm/aaaa. */
function formatBlockDate(date: string) { return date.split('-').reverse().join('/') }
/** Em que aparelhos os ad units de um grupo rodam, pelo nome; um bloco sem Desktop nem Mobile vale para os dois. */
function blockDevices(group: RewardBlockGroup) {
  const shared = group.codes.some((code) => !/_(desktop|mobile)_/i.test(code))
  return { desktop: shared || group.codes.some((code) => /_desktop_/i.test(code)), mobile: shared || group.codes.some((code) => /_mobile_/i.test(code)) }
}
/** Badges Desktop e Mobile de um grupo de ad units. */
function DeviceBadges({ group }: { group: RewardBlockGroup }) {
  const devices = blockDevices(group)
  return (
    <span className="ml-1 inline-flex gap-1">
      {devices.desktop && <span className="inline-flex items-center gap-1 rounded border bg-muted px-1.5 text-[11px] font-medium text-muted-foreground"><Monitor className="h-3 w-3" />Desktop</span>}
      {devices.mobile && <span className="inline-flex items-center gap-1 rounded border bg-muted px-1.5 text-[11px] font-medium text-muted-foreground"><Smartphone className="h-3 w-3" />Mobile</span>}
    </span>
  )
}
/** Ad units do grupo por aparelho, para o texto de ajuda do campo. */
function blockCodesByDevice(group: RewardBlockGroup) {
  const desktop = group.codes.filter((code) => !/_mobile_/i.test(code))
  const mobile = group.codes.filter((code) => !/_desktop_/i.test(code))
  return [desktop.length ? `Desktop: ${desktop.join(', ')}` : 'Desktop: nenhum', mobile.length ? `Mobile: ${mobile.join(', ')}` : 'Mobile: nenhum'].join(' · ')
}
/** O grupo de ad units que o reward usa: o mais recente ou o da data fixada. */
function rewardBlockGroup(site: ProtoRewardSite, block: string) { return site.blocks.find((group) => group.date === block) ?? site.blocks[0] }
/** Reward novo, no primeiro site disponível. */
function blankReward(site: ProtoRewardSite): ProtoReward {
  return { id: 0, name: '', client: site.client, domain: site.domain, page: '', active: true, icon: { kind: 'emoji', emoji: '🎁', image: null }, title: 'Oferta especial', description: 'Desbloqueie sua recompensa agora mesmo!', button: 'Desbloquear', style: DEFAULT_REWARD_STYLE, block: 'latest', cooldown: 30, scroll: 0, clickElement: null, redirect: null, questions: [], lead: null, updated: 'Agora' }
}

/** O ícone do reward (emoji, imagem ou nada) no tamanho pedido. */
function RewardIconView({ reward, size }: { reward: ProtoReward; size: number }) {
  if (reward.icon.kind === 'emoji') return <div className="leading-none" style={{ fontSize: size }} aria-hidden="true">{reward.icon.emoji || '🎁'}</div>
  if (reward.icon.kind === 'image') return reward.icon.image ? <img src={reward.icon.image} alt="" className="mx-auto object-contain" style={{ maxHeight: size * 2.2, maxWidth: size * 2.6 }} /> : <div className="mx-auto flex items-center justify-center rounded-xl border border-dashed text-[12px] opacity-70" style={{ width: size * 1.4, height: size * 1.4 }}>Imagem</div>
  return null
}

/** O corpo do reward, como o visitante vê no site, em um dos três layouts; `onUnlock` deixa o botão clicável. */
function RewardBody({ reward, lang = 'pt', step = { kind: 'reward' }, onNext, onUnlock, onClose }: { reward: ProtoReward; lang?: VisitorLang; step?: RewardStep; onNext?: () => void; onUnlock?: () => void; onClose?: () => void }) {
  const style = reward.style
  const question = step.kind === 'question' ? reward.questions[step.index] : null
  const buttonRadius = Math.min(style.radius, 14)
  const dark = luminance(style.body) < 0.4
  const tint = dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.03)'
  const line = dark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.09)'
  const framed = style.layout !== 'simple'
  const hasIcon = reward.icon.kind !== 'none'
  const closeClass = style.layout === 'highlight' ? 'right-4 top-4 p-2' : style.layout === 'header' ? 'right-3 top-3 border p-1.5 text-white' : 'right-3 top-3 p-1.5 opacity-70 hover:opacity-100'
  const closeStyle: React.CSSProperties = style.layout === 'highlight' ? { background: tint === 'rgba(0,0,0,0.03)' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.1)', color: style.title } : style.layout === 'header' ? { background: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.35)' } : { color: style.text }
  return (
    <div role="dialog" aria-label={reward.title} className={cn('relative w-full max-w-[400px] overflow-hidden text-center', !framed && 'px-7 pb-5 pt-9')}
      style={{ background: style.body, border: `${style.borderWidth}px solid ${style.border}`, borderRadius: style.radius, fontFamily: rewardFont(style.font), boxShadow: style.shadow ? '0 24px 64px -16px rgba(0,0,0,0.45)' : 'none', color: style.text }}>
      <button type="button" onClick={onClose} aria-label="Fechar" className={cn('absolute z-10 rounded-full', closeClass)} style={closeStyle}><X className="h-4 w-4" /></button>
      {style.layout === 'header' && (
        <div className="relative flex h-[120px] items-center justify-center" style={{ background: accentGradient(style.button) }}>
          {hasIcon && <RewardIconView reward={reward} size={48} />}
        </div>
      )}
      <div className={cn(framed && 'px-7 pb-6', style.layout === 'highlight' && 'pt-10', style.layout === 'header' && 'pt-6')}>
        {style.layout === 'simple' && hasIcon && <div className="mb-4"><RewardIconView reward={reward} size={52} /></div>}
        {style.layout === 'highlight' && hasIcon && (
          <div className="relative mx-auto mb-5 h-[112px] w-[112px]">
            <style>{'@keyframes reward-pulse { 0% { transform: scale(1); opacity: 0.8 } 100% { transform: scale(1.4); opacity: 0 } } @media (prefers-reduced-motion: reduce) { .reward-pulse { animation: none !important } }'}</style>
            <span className="reward-pulse absolute inset-0 rounded-full" style={{ background: mix(style.button, style.body, 0.35), animation: 'reward-pulse 3s ease-out infinite' }} aria-hidden="true" />
            <span className="reward-pulse absolute inset-0 rounded-full" style={{ background: mix(style.button, style.body, 0.35), animation: 'reward-pulse 3s ease-out 1.5s infinite' }} aria-hidden="true" />
            <div className="relative flex h-full w-full items-center justify-center rounded-full p-2" style={{ background: mix(style.button, style.body, 0.22) }}>
              <div className="flex h-full w-full items-center justify-center rounded-full" style={{ background: accentGradient(style.button) }}><RewardIconView reward={reward} size={46} /></div>
            </div>
          </div>
        )}
        {question && <p className="mb-2 text-[12px] font-semibold uppercase tracking-wide opacity-70">{REWARD_PROGRESS[lang](reward.questions.indexOf(question) + 1, reward.questions.length)}</p>}
        <h2 className="break-words text-[22px] font-bold leading-tight" style={{ color: style.title }}>{question ? question.title || 'Pergunta' : step.kind === 'lead' ? reward.lead?.title || 'Título do contato' : reward.title || 'Título do reward'}</h2>
        {(question ? question.description : step.kind === 'lead' ? reward.lead?.description : reward.description || 'Descrição do reward') && <p className="mt-2 break-words text-[15px] leading-relaxed">{question ? question.description : step.kind === 'lead' ? reward.lead?.description : reward.description || 'Descrição do reward'}</p>}
        {question && (
          <div className="mt-6 grid gap-2">
            {question.answers.map((answer, index) => (
              <button key={index} type="button" onClick={onNext} className="h-11 w-full px-4 text-[15px] font-medium transition-colors hover:opacity-90" style={{ border: `1.5px solid ${style.button}`, color: style.title, background: mix(style.button, style.body, 0.06), borderRadius: buttonRadius }}>{answer || `Resposta ${index + 1}`}</button>
            ))}
          </div>
        )}
        {step.kind === 'lead' && reward.lead && (
          <form className="mt-6 grid gap-3" onSubmit={(event) => { event.preventDefault(); onNext?.() }}>
            <input type="text" aria-label="Nome" placeholder={REWARD_NAME_PLACEHOLDER[lang]} className="h-11 w-full px-4 text-[15px] outline-none" style={{ border: `1px solid ${mix(style.text, style.body, 0.35)}`, background: 'transparent', color: style.title, borderRadius: buttonRadius }} />
            <input type={reward.lead.kind === 'email' ? 'email' : 'tel'} aria-label={reward.lead.kind === 'email' ? 'E-mail' : 'Telefone'} placeholder={reward.lead.kind === 'email' ? 'voce@email.com' : '(11) 91234-5678'} className="h-11 w-full px-4 text-[15px] outline-none" style={{ border: `1px solid ${mix(style.text, style.body, 0.35)}`, background: 'transparent', color: style.title, borderRadius: buttonRadius }} />
            <button type="submit" className="inline-flex h-11 w-full items-center justify-center px-5 text-[15px] font-semibold hover:opacity-90" style={{ background: style.layout === 'header' ? accentGradient(style.button) : style.button, color: style.buttonText, borderRadius: buttonRadius }}>{reward.lead.button || 'Continuar'}</button>
            <p className="text-[12px] leading-snug opacity-70" lang={lang}>{REWARD_CONSENT[lang](reward.domain)}</p>
          </form>
        )}
        {step.kind === 'reward' && (
          <button type="button" onClick={onUnlock} className={cn('mt-6 inline-flex h-11 w-full items-center justify-center px-5 text-[15px] font-semibold transition-opacity hover:opacity-90', style.layout === 'highlight' && 'h-12')}
            style={{ background: style.layout === 'header' ? accentGradient(style.button) : style.button, color: style.buttonText, borderRadius: Math.min(style.radius, 14), boxShadow: style.layout === 'highlight' ? `0 10px 28px -8px ${mix(style.button, style.body, 0.55)}` : style.layout === 'header' ? `0 8px 20px -8px ${style.button}` : 'none' }}>{reward.button || 'Desbloquear'}</button>
        )}
        {!framed && <p className="mt-4 text-[12px] opacity-70" lang={lang}>{REWARD_FOOTER[lang]}</p>}
      </div>
      {framed && <p className="border-t py-3 text-[12px] opacity-80" style={{ background: tint, borderColor: line }} lang={lang}>{REWARD_FOOTER[lang]}</p>}
    </div>
  )
}

/** Uma página de exemplo do site, com o reward aberto por cima, no tamanho do computador ou do celular. */
function RewardStage({ reward, device, lang = 'pt', compact = false, step, onNext, children }: { reward: ProtoReward; device: 'desktop' | 'mobile'; lang?: VisitorLang; compact?: boolean; step?: RewardStep; onNext?: () => void; children?: React.ReactNode }) {
  return (
    <div className={cn('mx-auto overflow-hidden rounded-xl border bg-card shadow-sm', device === 'mobile' ? 'w-[360px] max-w-full' : 'w-full')}>
      <div className="flex items-center gap-2 border-b bg-muted px-3 py-2">
        {device === 'desktop' && <div className="flex gap-1.5" aria-hidden="true"><span className="h-2.5 w-2.5 rounded-full bg-border" /><span className="h-2.5 w-2.5 rounded-full bg-border" /><span className="h-2.5 w-2.5 rounded-full bg-border" /></div>}
        <div className="min-w-0 flex-1 truncate rounded-md bg-background px-3 py-1 font-mono text-[12px] text-muted-foreground">https://{reward.domain}/{reward.page}</div>
      </div>
      <div className={cn('relative bg-white', device === 'mobile' ? 'h-[640px]' : compact ? 'h-[600px]' : 'h-[600px]')}>
        <div className="grid gap-3 p-6" aria-hidden="true">
          <div className="h-4 w-24 rounded bg-neutral-200" />
          <div className="h-7 w-4/5 rounded bg-neutral-200" />
          <div className="h-40 rounded-lg bg-neutral-100" />
          {[90, 96, 84, 92, 70, 88].map((width, index) => <div key={index} className="h-3 rounded bg-neutral-100" style={{ width: `${width}%` }} />)}
        </div>
        <div className="absolute inset-0 flex overflow-y-auto bg-black/45 p-4"><div className="m-auto flex w-full justify-center">{children ?? <RewardBody reward={reward} lang={lang} step={step} onNext={onNext} />}</div></div>
      </div>
    </div>
  )
}

/** Idioma do navegador de quem visita o site: muda só o rodapé fixo do reward. */
function VisitorLangPicker({ value, onChange }: { value: VisitorLang; onChange: (lang: VisitorLang) => void }) {
  return (
    <Select value={value} onValueChange={(lang) => onChange(lang as VisitorLang)}>
      <SelectTrigger aria-label="Idioma do navegador do visitante" className="h-9 w-[150px]"><SelectValue /></SelectTrigger>
      <SelectContent>{VISITOR_LANGS.map(([lang, label]) => <SelectItem key={lang} value={lang}>{label}</SelectItem>)}</SelectContent>
    </Select>
  )
}

/** Escolha de cor: amostra que abre o seletor e o código em hexadecimal. */
function ColorField({ id, label, value, onChange }: { id: string; label: string; value: string; onChange: (value: string) => void }) {
  const [text, setText] = useState(value.slice(1).toUpperCase())
  useEffect(() => { setText(value.slice(1).toUpperCase()) }, [value])
  return (
    <Field id={id} label={label}>
      <div className="flex items-center gap-2">
        <label className="relative h-9 w-9 shrink-0 cursor-pointer overflow-hidden rounded-md border" style={{ background: value }}>
          <span className="sr-only">Escolher {label.toLowerCase()}</span>
          <input type="color" value={value} onChange={(event) => onChange(event.target.value)} className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
        </label>
        <div className="relative min-w-0 flex-1">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 font-mono text-[13px] text-muted-foreground">#</span>
          <Input id={id} value={text} maxLength={6} className="h-9 pl-6 font-mono text-[13px] uppercase"
            onChange={(event) => { const next = event.target.value.replace(/[^0-9a-f]/gi, ''); setText(next); if (next.length === 6) onChange(`#${next.toLowerCase()}`) }} />
        </div>
      </div>
    </Field>
  )
}

/** Lista dos rewards: no painel do cliente, os sites da Empresa; no painel interno, os de todos os clientes. */
function RewardsScreen({ rewards, staff, open, metrics }: { rewards: ProtoReward[]; staff: boolean; open: (id: number | null) => void; metrics: (id: number) => void }) {
  const [query, setQuery] = useState('')
  const [site, setSite] = useState('all')
  const sites = REWARD_SITES.filter((item) => staff || item.client === MY_CLIENT)
  const visible = rewards.filter((reward) => (staff || reward.client === MY_CLIENT) && (site === 'all' || reward.domain === site) && `${reward.name} ${reward.domain} ${reward.page} ${reward.client}`.toLowerCase().includes(query.toLowerCase()))
  return (
    <>
      <PageHeader title="Rewards" sub={staff ? 'Os rewards dos sites de todos os clientes. A equipe Groone e o cliente veem e editam os mesmos rewards.' : 'Uma janela numa página do seu site que libera um conteúdo depois de um anúncio premiado. Cada reward fica numa página.'}
        actions={<Button onClick={() => open(null)}><Plus className="h-4 w-4" />Novo reward</Button>} />
      <Body>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative w-full sm:w-[280px]"><Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input aria-label="Buscar rewards" className="h-9 pl-9" placeholder={staff ? 'Nome, página ou cliente' : 'Nome ou página'} value={query} onChange={(event) => setQuery(event.target.value)} /></div>
          <Select value={site} onValueChange={setSite}><SelectTrigger aria-label="Site" className="h-9 w-[240px]"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="all">Todos os sites</SelectItem>{sites.map((item) => <SelectItem key={item.domain} value={item.domain}>{item.domain}</SelectItem>)}</SelectContent></Select>
        </div>
        <Table min={staff ? 900 : 760}>
          <thead><tr><th className={th}>Reward</th>{staff && <th className={th}>Cliente</th>}<th className={th}>Site</th><th className={th}>Situação</th><th className={cn(th, 'text-right')}>Intervalo</th><th className={th}>Atualizado</th><th className={th}><span className="sr-only">Métricas</span></th></tr></thead>
          <tbody>
            {visible.map((reward) => (
              <tr key={reward.id} className="hover:bg-muted">
                <td className={td}>
                  <button className="flex items-center gap-3 text-left" onClick={() => open(reward.id)}>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center text-[18px]" style={{ background: reward.style.body, border: `1px solid ${reward.style.border}`, borderRadius: Math.min(reward.style.radius, 10) }} aria-hidden="true">{reward.icon.kind === 'emoji' ? reward.icon.emoji : <Gift className="h-4 w-4" style={{ color: reward.style.title }} />}</span>
                    <span className="min-w-0"><span className="flex items-center gap-2 font-medium"><span className="hover:underline">{reward.name}</span>{reward.questions.length > 0 && <span className="rounded border px-1.5 text-[11px] font-medium text-muted-foreground">{reward.questions.length} {reward.questions.length === 1 ? 'pergunta' : 'perguntas'}</span>}</span><span className="block break-all font-mono text-[12px] text-muted-foreground">/{reward.page}</span></span>
                  </button>
                </td>
                {staff && <td className={td}>{reward.client}</td>}
                <td className={cn(td, 'font-mono text-[13px]')}>{reward.domain}</td>
                <td className={td}>{reward.active ? <Status tone="ok">Ativo</Status> : <Status tone="neutral">Pausado</Status>}</td>
                <td className={cn(td, 'text-right tnum')}>{reward.cooldown} min</td>
                <td className={cn(td, 'whitespace-nowrap tnum text-[13px] text-muted-foreground')}>{reward.updated}</td>
                <td className={cn(td, 'text-right')}><Button size="sm" variant="outline" onClick={() => metrics(reward.id)}><BarChart3 className="h-4 w-4" />Métricas</Button></td>
              </tr>
            ))}
            {!visible.length && <tr><td className={cn(td, 'py-12 text-center')} colSpan={staff ? 7 : 6}><Gift className="mx-auto h-5 w-5 text-muted-foreground" /><p className="mt-2 font-medium">Nenhum reward {query || site !== 'all' ? 'com esses filtros' : 'ainda'}</p><p className="text-[14px] text-muted-foreground">Crie um reward numa página do site e acompanhe aqui.</p></td></tr>}
          </tbody>
        </Table>
      </Body>
    </>
  )
}

/** Criar ou editar um reward: formulário à esquerda e a pré-visualização ao vivo à direita. */
type RewardTrigger = 'load' | 'scroll' | 'click'
/** Em que momento a janela abre, a partir da rolagem e do elemento de clique. */
function rewardTrigger(reward: ProtoReward): RewardTrigger { return reward.clickElement !== null ? 'click' : reward.scroll > 0 ? 'scroll' : 'load' }
/** Frase curta que explica quando a janela abre, para a pré-visualização. */
function triggerSummary(reward: ProtoReward) {
  const trigger = rewardTrigger(reward)
  if (trigger === 'click') return reward.clickElement?.trim() ? `Abre quando a pessoa clica em ${reward.clickElement.trim()}.` : 'Abre quando a pessoa clica no elemento escolhido.'
  if (trigger === 'scroll') return `Abre quando a pessoa rola ${reward.scroll}% da página.`
  return 'Abre assim que a página carrega.'
}

/** Campo do caminho de uma página do site, com o domínio fixo na frente; um link colado perde o domínio. */
function SitePathInput({ id, domain, value, onChange, placeholder }: { id: string; domain: string; value: string; onChange: (path: string) => void; placeholder: string }) {
  return (
    <div className="flex min-w-0 items-center rounded-md border bg-background focus-within:ring-2 focus-within:ring-ring">
      <span className="shrink-0 border-r bg-muted px-3 py-2 font-mono text-[13px] text-muted-foreground">https://{domain}/</span>
      <input id={id} value={value} onChange={(event) => onChange(event.target.value.replace(/^https?:\/\/[^/]+\/?/, ''))} placeholder={placeholder} className="h-9 min-w-0 flex-1 bg-transparent px-3 font-mono text-[13px] outline-none" />
    </div>
  )
}

/** Miniatura de um layout do reward, para escolher no formulário. */
function LayoutThumb({ layout }: { layout: RewardLayout }) {
  return (
    <div className="flex h-[64px] items-center justify-center rounded-md bg-muted" aria-hidden="true">
      <div className="flex w-[52px] flex-col items-center overflow-hidden rounded-md border bg-background pb-1">
        {layout === 'header' ? <div className="h-3.5 w-full bg-neutral-700" /> : <div className={cn('mt-1.5 rounded-full', layout === 'highlight' ? 'h-4 w-4 bg-neutral-700 ring-2 ring-neutral-200' : 'h-2.5 w-2.5 bg-neutral-400')} />}
        <div className="mt-1 h-1 w-7 rounded bg-neutral-700" />
        <div className="mt-0.5 h-0.5 w-9 rounded bg-neutral-300" />
        <div className="mt-1 h-1.5 w-9 rounded-sm bg-neutral-800" />
        {layout !== 'simple' && <div className="mt-1 h-px w-full bg-neutral-200" />}
      </div>
    </div>
  )
}

function RewardEditScreen({ initial, rewards, staff, back, save, remove, metrics }: { initial: ProtoReward; rewards: ProtoReward[]; staff: boolean; back: () => void; save: (reward: ProtoReward) => void; remove: (id: number) => void; metrics: () => void }) {
  const [reward, setReward] = useState(initial)
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop')
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [visitorLang, setVisitorLang] = useState<VisitorLang>('pt')
  const [previewIndex, setPreviewIndex] = useState(0)
  const sites = REWARD_SITES.filter((item) => staff || item.client === MY_CLIENT)
  const site = REWARD_SITES.find((item) => item.domain === reward.domain) ?? sites[0]
  const style = reward.style
  /** Muda um campo do reward. */
  const change = (patch: Partial<ProtoReward>) => setReward((current) => ({ ...current, ...patch }))
  /** Muda um campo do corpo do reward. */
  const restyle = (patch: Partial<RewardStyle>) => setReward((current) => ({ ...current, style: { ...current.style, ...patch } }))
  const pageTaken = rewards.some((other) => other.id !== reward.id && other.domain === reward.domain && other.page.replace(/^\/+|\/+$/g, '') === reward.page.replace(/^\/+|\/+$/g, '') && reward.page.trim() !== '')
  const redirectSamePage = reward.redirect !== null && reward.redirect.trim() !== '' && reward.redirect.trim().replace(/\/$/, '') === reward.page.trim().replace(/\/$/, '')
  const steps = rewardSteps(reward)
  const shownStep = steps[Math.min(previewIndex, steps.length - 1)]
  /** Troca uma pergunta pelo índice. */
  const changeQuestion = (index: number, patch: Partial<RewardQuestion>) => change({ questions: reward.questions.map((item, position) => (position === index ? { ...item, ...patch } : item)) })
  /** Muda um campo do pedido de contato. */
  const changeLead = (patch: Partial<RewardLead>) => reward.lead && change({ lead: { ...reward.lead, ...patch } })
  const questionsIncomplete = reward.questions.some((item) => item.title.trim() === '' || item.answers.some((answer) => answer.trim() === ''))
  const leadIncomplete = reward.lead !== null && (reward.lead.title.trim() === '' || reward.lead.button.trim() === '')
  const cooldownBad = reward.cooldown < 5 || reward.cooldown > 1440
  const clickMissing = reward.clickElement !== null && reward.clickElement.trim() === ''
  const lowButton = contrast(style.button, style.buttonText) < 4.5
  const lowText = contrast(style.body, style.title) < 3 || contrast(style.body, style.text) < 4.5
  const ready = reward.name.trim().length >= 3 && reward.page.trim() !== '' && !pageTaken && reward.title.trim() !== '' && reward.button.trim() !== '' && !cooldownBad && !clickMissing && !questionsIncomplete && !leadIncomplete && !redirectSamePage && !(reward.redirect !== null && reward.redirect.trim() === '')
  /** Grava o reward e volta para a lista. */
  const submit = () => { save({ ...reward, page: reward.page.replace(/^\/+/, ''), updated: 'Agora' }); toast.success(initial.id ? 'Reward salvo' : 'Reward criado', { description: reward.active ? `Já aparece em ${reward.domain}/${reward.page.replace(/^\/+/, '')}.` : 'Fica pausado até você ativar.' }); back() }
  return (
    <>
      <PageHeader title={initial.id ? initial.name : 'Novo reward'} sub={`${staff ? `${site.client} · ` : ''}${reward.domain}`}
        back={<button onClick={back} className="inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft className="h-3.5 w-3.5" />Rewards</button>}
        actions={<>{initial.id > 0 && <Button variant="outline" onClick={metrics}><BarChart3 className="h-4 w-4" />Métricas</Button>}<Button disabled={!ready} onClick={submit}>{initial.id ? 'Salvar' : 'Criar reward'}</Button>{initial.id > 0 && <>
          <DropdownMenu><DropdownMenuTrigger asChild><Button variant="outline" size="icon" aria-label="Mais ações"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
            <DropdownMenuContent align="end"><DropdownMenuItem onSelect={() => change({ active: !reward.active })}>{reward.active ? 'Pausar' : 'Ativar'}</DropdownMenuItem><DropdownMenuSeparator /><DropdownMenuItem className="text-bad focus:text-bad" onSelect={() => setConfirmDelete(true)}><Trash2 className="h-4 w-4" />Apagar reward</DropdownMenuItem></DropdownMenuContent>
          </DropdownMenu></>}</>} />
      <Body>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)]">
          <div className="grid min-w-0 content-start gap-6">
            <Card title="Sobre" desc="O nome fica só no painel. O reward aparece na página escolhida do site.">
              <div className="grid gap-4">
                <Field id="rw-name" label="Nome" error={reward.name.length > 0 && reward.name.trim().length < 3 && 'Use pelo menos 3 letras.'}><Input id="rw-name" value={reward.name} onChange={(event) => change({ name: event.target.value })} placeholder="Ex.: Receita completa do bolo" /></Field>
                <div className="grid items-start gap-4 sm:grid-cols-2">
                  <Field id="rw-site" label="Site">
                    <Select value={reward.domain} onValueChange={(domain) => { const next = REWARD_SITES.find((item) => item.domain === domain)!; change({ domain, client: next.client, block: 'latest', redirect: reward.redirect === null ? null : '' }) }} disabled={!!initial.id}>
                      <SelectTrigger id="rw-site"><SelectValue /></SelectTrigger>
                      <SelectContent>{sites.map((item) => <SelectItem key={item.domain} value={item.domain}>{staff ? `${item.domain} · ${item.client}` : item.domain}</SelectItem>)}</SelectContent>
                    </Select>
                  </Field>
                  <Field id="rw-active" label="Situação">
                    <label className="flex h-9 items-center gap-3 text-[14px]"><Switch id="rw-active" checked={reward.active} onCheckedChange={(active) => change({ active })} />{reward.active ? 'Ativo no site' : 'Pausado'}</label>
                  </Field>
                </div>
                <Field id="rw-page" label="Página do site" hint={initial.id ? 'O site não muda depois de criado.' : 'Uma página só pode ter um reward.'} error={pageTaken && 'Essa página já tem um reward.'}>
                  <SitePathInput id="rw-page" domain={reward.domain} value={reward.page} onChange={(page) => change({ page })} placeholder="receitas/bolo-de-acai" />
                </Field>
              </div>
            </Card>

            <Card title="Conteúdo" desc="O que o visitante lê na janela.">
              <div className="grid gap-4">
                <Field id="rw-icon" label="Ícone">
                  <div className="grid gap-3">
                    <div className="inline-flex w-fit rounded-md border bg-muted p-0.5" role="radiogroup" aria-label="Tipo de ícone">
                      {([['emoji', 'Emoji'], ['image', 'Imagem'], ['none', 'Sem ícone']] as const).map(([kind, label]) => <button key={kind} role="radio" aria-checked={reward.icon.kind === kind} onClick={() => change({ icon: { ...reward.icon, kind } })} className={cn('h-8 rounded px-3 text-[13px] font-medium', reward.icon.kind === kind ? 'bg-background shadow-sm' : 'text-muted-foreground hover:text-foreground')}>{label}</button>)}
                    </div>
                    {reward.icon.kind === 'emoji' && (
                      <div className="flex flex-wrap items-center gap-1.5">
                        {REWARD_EMOJIS.map((emoji) => <button key={emoji} onClick={() => change({ icon: { ...reward.icon, emoji } })} aria-label={`Usar ${emoji}`} className={cn('flex h-9 w-9 items-center justify-center rounded-md border text-[18px]', reward.icon.emoji === emoji ? 'border-foreground bg-secondary' : 'bg-background hover:bg-accent')}>{emoji}</button>)}
                        <Input id="rw-icon" aria-label="Outro emoji" value={reward.icon.emoji} maxLength={8} onChange={(event) => change({ icon: { ...reward.icon, emoji: event.target.value } })} className="h-9 w-20 text-center text-[18px]" />
                      </div>
                    )}
                    {reward.icon.kind === 'image' && (
                      <div className="flex flex-wrap items-center gap-3">
                        <label className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-md border bg-background px-3 text-[14px] font-medium hover:bg-accent"><Plus className="h-4 w-4" />{reward.icon.image ? 'Trocar imagem' : 'Escolher imagem'}<input type="file" accept="image/png,image/jpeg,image/webp,image/gif,image/avif" className="sr-only" onChange={(event) => { const file = event.target.files?.[0]; if (file) change({ icon: { ...reward.icon, image: URL.createObjectURL(file) } }) }} /></label>
                        <span className="text-[13px] text-muted-foreground">PNG, JPG, WEBP, GIF ou AVIF, até 2 MB.</span>
                      </div>
                    )}
                  </div>
                </Field>
                <Field id="rw-title" label="Título"><Input id="rw-title" value={reward.title} maxLength={80} onChange={(event) => change({ title: event.target.value })} /></Field>
                <Field id="rw-desc" label="Descrição" hint={`${reward.description.length} de 500`}><Textarea id="rw-desc" rows={3} maxLength={500} value={reward.description} onChange={(event) => change({ description: event.target.value })} /></Field>
                <Field id="rw-button" label="Texto do botão"><Input id="rw-button" value={reward.button} maxLength={40} onChange={(event) => change({ button: event.target.value })} /></Field>
                <p className="rounded-md border bg-muted px-3 py-2 text-[13px] text-muted-foreground">O rodapé "Oferta patrocinada" é fixo e aparece no idioma do navegador de quem visita (português, inglês ou espanhol).</p>
              </div>
            </Card>

            <Card title="Antes do anúncio" desc="Perguntas e pedido de contato que o visitante responde antes de ver o anúncio. Sem nada aqui, a janela vai direto para o reward.">
              <div className="grid gap-5">
                {reward.questions.map((question, index) => (
                  <div key={index} className="grid gap-3 rounded-lg border p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[13px] font-semibold">Pergunta {index + 1}</span>
                      <button type="button" onClick={() => { change({ questions: reward.questions.filter((_item, position) => position !== index) }); setPreviewIndex(0) }} aria-label={`Remover pergunta ${index + 1}`} className="rounded p-1 text-muted-foreground hover:bg-accent hover:text-foreground"><Trash2 className="h-4 w-4" /></button>
                    </div>
                    <Input aria-label={`Pergunta ${index + 1}`} value={question.title} maxLength={120} onChange={(event) => changeQuestion(index, { title: event.target.value })} placeholder="Ex.: Qual sobremesa você mais faz?" />
                    <Input aria-label={`Explicação da pergunta ${index + 1}`} value={question.description} maxLength={200} onChange={(event) => changeQuestion(index, { description: event.target.value })} placeholder="Explicação (opcional)" />
                    <div className="grid gap-2 sm:grid-cols-3">
                      {question.answers.map((answer, answerIndex) => (
                        <Input key={answerIndex} aria-label={`Resposta ${answerIndex + 1} da pergunta ${index + 1}`} value={answer} maxLength={40} onChange={(event) => changeQuestion(index, { answers: question.answers.map((item, position) => (position === answerIndex ? event.target.value : item)) as [string, string, string] })} placeholder={`Resposta ${answerIndex + 1}`} />
                      ))}
                    </div>
                  </div>
                ))}
                {questionsIncomplete && <p className="text-[13px] text-bad">Preencha a pergunta e as três respostas.</p>}
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="outline" disabled={reward.questions.length >= MAX_REWARD_QUESTIONS} onClick={() => { change({ questions: [...reward.questions, { title: '', description: '', answers: ['', '', ''] }] }); setPreviewIndex(rewardSteps(reward).length - 1) }}><Plus className="h-4 w-4" />Adicionar pergunta</Button>
                  <span className="text-[13px] text-muted-foreground">{reward.questions.length} de {MAX_REWARD_QUESTIONS} perguntas · as respostas não mudam o reward.</span>
                </div>
                <div className="grid gap-3 border-t pt-5">
                  <label className="flex items-center gap-3 text-[14px] font-medium"><Switch checked={reward.lead !== null} onCheckedChange={(on) => { change({ lead: on ? { kind: 'email', position: 'end', title: 'Para onde mandamos?', description: '', button: 'Continuar' } : null }); setPreviewIndex(0) }} />Pedir contato do visitante</label>
                  {reward.lead && (
                    <div className="grid gap-4">
                      <div className="grid items-start gap-4 sm:grid-cols-2">
                        <Field id="rw-lead-kind" label="O que pedir">
                          <Select value={reward.lead.kind} onValueChange={(kind) => changeLead({ kind: kind as RewardLead['kind'] })}>
                            <SelectTrigger id="rw-lead-kind"><SelectValue /></SelectTrigger>
                            <SelectContent><SelectItem value="email">E-mail</SelectItem><SelectItem value="phone">Telefone</SelectItem></SelectContent>
                          </Select>
                        </Field>
                        <Field id="rw-lead-position" label="Quando pedir">
                          <Select value={reward.lead.position} onValueChange={(position) => changeLead({ position: position as RewardLead['position'] })} disabled={reward.questions.length === 0}>
                            <SelectTrigger id="rw-lead-position"><SelectValue /></SelectTrigger>
                            <SelectContent><SelectItem value="start">Antes das perguntas</SelectItem><SelectItem value="end">Depois das perguntas</SelectItem></SelectContent>
                          </Select>
                        </Field>
                      </div>
                      <Field id="rw-lead-title" label="Título" error={reward.lead.title.trim() === '' && 'Escreva um título.'}><Input id="rw-lead-title" value={reward.lead.title} maxLength={80} onChange={(event) => changeLead({ title: event.target.value })} /></Field>
                      <Field id="rw-lead-desc" label="Descrição (opcional)"><Input id="rw-lead-desc" value={reward.lead.description} maxLength={200} onChange={(event) => changeLead({ description: event.target.value })} /></Field>
                      <Field id="rw-lead-button" label="Texto do botão"><Input id="rw-lead-button" value={reward.lead.button} maxLength={30} onChange={(event) => changeLead({ button: event.target.value })} /></Field>
                      <p className="rounded-md border bg-muted px-3 py-2 text-[13px] text-muted-foreground">Abaixo do campo aparece um aviso fixo de que, ao continuar, a pessoa aceita receber contato de {reward.domain}, no idioma do navegador dela.</p>
                    </div>
                  )}
                </div>
              </div>
            </Card>

            <Card title="Corpo" desc="Layout, cores, borda, cantos e fonte da janela. Comece por um modelo e ajuste o que quiser.">
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <span className="text-[13px] font-medium">Layout</span>
                  <div role="radiogroup" aria-label="Layout" className="grid grid-cols-3 gap-2">
                    {REWARD_LAYOUTS.map((layout) => (
                      <button key={layout.id} type="button" role="radio" aria-checked={style.layout === layout.id} onClick={() => restyle({ layout: layout.id })}
                        className={cn('rounded-lg border p-2 text-left transition-colors hover:bg-accent', style.layout === layout.id && 'border-foreground ring-1 ring-foreground')}>
                        <LayoutThumb layout={layout.id} />
                        <span className="mt-2 block text-[13px] font-medium">{layout.name}</span>
                        <span className="block text-[12px] leading-snug text-muted-foreground">{layout.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2" aria-label="Modelos">
                  {REWARD_PRESETS.map((preset) => (
                    <button key={preset.name} onClick={() => restyle(preset.style)} className="inline-flex h-9 items-center gap-2 rounded-md border bg-background px-3 text-[13px] font-medium hover:bg-accent">
                      <span className="flex h-4 w-4 overflow-hidden rounded-full border" aria-hidden="true"><span className="h-full w-1/2" style={{ background: preset.style.body }} /><span className="h-full w-1/2" style={{ background: preset.style.button }} /></span>{preset.name}
                    </button>
                  ))}
                </div>
                <div className="grid items-start gap-4 sm:grid-cols-2">
                  <ColorField id="rw-body" label="Cor do corpo" value={style.body} onChange={(body) => restyle({ body })} />
                  <ColorField id="rw-title-color" label="Cor do título" value={style.title} onChange={(title) => restyle({ title })} />
                  <ColorField id="rw-text" label="Cor do texto" value={style.text} onChange={(text) => restyle({ text })} />
                  <ColorField id="rw-border" label="Cor da borda" value={style.border} onChange={(border) => restyle({ border })} />
                  <ColorField id="rw-btn" label={style.layout === 'simple' ? 'Cor do botão' : style.layout === 'header' ? 'Cor do botão e do cabeçalho' : 'Cor do botão e do círculo'} value={style.button} onChange={(button) => restyle({ button })} />
                  <ColorField id="rw-btn-text" label="Texto do botão" value={style.buttonText} onChange={(buttonText) => restyle({ buttonText })} />
                </div>
                {(lowButton || lowText) && <div className="flex items-start gap-2 rounded-md border border-ochre/40 bg-ochre-soft px-3 py-2 text-[13px] text-ochre"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />{lowButton ? 'O texto do botão está com pouco contraste: pode ficar difícil de ler.' : 'O texto está com pouco contraste com o corpo: pode ficar difícil de ler.'}</div>}
                <div className="grid items-start gap-5 sm:grid-cols-2">
                  <Field id="rw-radius" label={`Cantos arredondados · ${style.radius}px`}>
                    <Slider id="rw-radius" min={0} max={32} step={1} value={[style.radius]} onValueChange={([radius]) => restyle({ radius })} className="py-2" />
                  </Field>
                  <Field id="rw-border-width" label={`Espessura da borda · ${style.borderWidth ? `${style.borderWidth}px` : 'sem borda'}`}>
                    <Slider id="rw-border-width" min={0} max={6} step={1} value={[style.borderWidth]} onValueChange={([borderWidth]) => restyle({ borderWidth })} className="py-2" />
                  </Field>
                </div>
                <div className="grid items-start gap-4 sm:grid-cols-2">
                  <Field id="rw-font" label="Fonte">
                    <Select value={style.font} onValueChange={(font) => restyle({ font })}>
                      <SelectTrigger id="rw-font"><SelectValue /></SelectTrigger>
                      <SelectContent>{REWARD_FONTS.map((font) => <SelectItem key={font.name} value={font.name}><span style={{ fontFamily: font.stack }}>{font.name}</span></SelectItem>)}</SelectContent>
                    </Select>
                  </Field>
                  <Field id="rw-shadow" label="Sombra">
                    <label className="flex h-9 items-center gap-3 text-[14px]"><Switch id="rw-shadow" checked={style.shadow} onCheckedChange={(shadow) => restyle({ shadow })} />{style.shadow ? 'Com sombra' : 'Sem sombra'}</label>
                  </Field>
                </div>
              </div>
            </Card>

            <Card title="Exibição" desc="Quando a janela abre, qual anúncio premiado roda e o que acontece depois.">
              <div className="grid gap-5">
                <Field id="rw-trigger" label="Quando a janela abre">
                  <div className="grid gap-3">
                    <div role="radiogroup" aria-label="Quando a janela abre" className="inline-flex w-fit flex-wrap rounded-md border bg-muted p-0.5">
                      {([['load', 'Ao carregar a página'], ['scroll', 'Ao rolar a página'], ['click', 'Ao clicar num elemento']] as const).map(([value, label]) => (
                        <button key={value} type="button" role="radio" aria-checked={rewardTrigger(reward) === value}
                          onClick={() => change(value === 'load' ? { scroll: 0, clickElement: null } : value === 'scroll' ? { scroll: reward.scroll || 50, clickElement: null } : { scroll: 0, clickElement: reward.clickElement ?? '' })}
                          className={cn('h-8 rounded px-3 text-[13px] font-medium', rewardTrigger(reward) === value ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground')}>{label}</button>
                      ))}
                    </div>
                    {rewardTrigger(reward) === 'scroll' && (
                      <Field id="rw-scroll" label={`Rolagem da página · ${reward.scroll}%`} hint="A janela abre quando a pessoa passa desse ponto da página.">
                        <Slider id="rw-scroll" min={5} max={100} step={5} value={[reward.scroll]} onValueChange={([scroll]) => change({ scroll })} className="py-2" />
                      </Field>
                    )}
                    {rewardTrigger(reward) === 'click' && (
                      <Field id="rw-click" label="Elemento da página" hint="Seletor CSS do botão ou link do site. A janela abre quando a pessoa clica nele." error={clickMissing && 'Informe o seletor do elemento.'}>
                        <Input id="rw-click" value={reward.clickElement ?? ''} onChange={(event) => change({ clickElement: event.target.value })} placeholder="#ver-receita ou .botao-download" className="font-mono text-[13px]" />
                      </Field>
                    )}
                  </div>
                </Field>
                <Field id="rw-block" label="Ad units do reward" hint={`${reward.block === 'latest' ? 'Troca sozinho quando sair um bloco mais novo. Hoje usa ' : 'Ad units com "Reward" no nome criados nessa data. '}${blockCodesByDevice(rewardBlockGroup(site, reward.block))}.`}>
                  <Select value={reward.block} onValueChange={(block) => change({ block })}>
                    <SelectTrigger id="rw-block" className="sm:w-[420px]"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="latest">Mais recentes · {formatBlockDate(site.blocks[0].date)} <DeviceBadges group={site.blocks[0]} /></SelectItem>
                      {site.blocks.map((group) => <SelectItem key={group.date} value={group.date}>Fixar {formatBlockDate(group.date)} <DeviceBadges group={group} /></SelectItem>)}
                    </SelectContent>
                  </Select>
                </Field>
                <div className="grid items-start gap-4 sm:grid-cols-2">
                  <Field id="rw-cooldown" label="Tempo para mostrar de novo (minutos)" hint="Depois que a pessoa vê a janela, ela só volta a aparecer passado esse tempo." error={cooldownBad && 'De 5 a 1.440 minutos (24 horas).'}>
                    <Input id="rw-cooldown" type="number" min={5} max={1440} value={reward.cooldown} onChange={(event) => change({ cooldown: Number(event.target.value) })} className="tnum" />
                  </Field>
                </div>
                <Field id="rw-redirect" label="Ao terminar o anúncio">
                  <div className="grid gap-3">
                    <label className="flex items-center gap-3 text-[14px]"><Switch id="rw-redirect" checked={reward.redirect !== null} onCheckedChange={(on) => change({ redirect: on ? '' : null })} />{reward.redirect !== null ? 'Levar a outra página do site' : 'Fechar a janela e liberar a página'}</label>
                    {reward.redirect !== null && (
                      <Field id="rw-redirect-page" label="Página de destino" hint={`Só páginas de ${reward.domain}, o mesmo site do reward.`} error={redirectSamePage && 'Escolha outra página: essa é a página do próprio reward.'}>
                        <SitePathInput id="rw-redirect-page" domain={reward.domain} value={reward.redirect} onChange={(redirect) => change({ redirect })} placeholder="receitas/bolo-de-acai/completa" />
                      </Field>
                    )}
                  </div>
                </Field>
              </div>
            </Card>

          </div>

          <div className="order-first min-w-0 lg:sticky lg:top-[124px] lg:order-none lg:self-start">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div><div className="text-[14px] font-semibold">Pré-visualização</div><div className="text-[13px] text-muted-foreground">Muda enquanto você edita.</div></div>
              <div className="flex items-center gap-2">
                <VisitorLangPicker value={visitorLang} onChange={setVisitorLang} />
                <div className="inline-flex rounded-md border bg-card p-0.5" role="radiogroup" aria-label="Tamanho da tela">
                  {([['desktop', Monitor, 'Computador'], ['mobile', Smartphone, 'Celular']] as const).map(([value, Icon, label]) => <button key={value} role="radio" aria-checked={device === value} aria-label={label} title={label} onClick={() => setDevice(value)} className={cn('flex h-8 w-9 items-center justify-center rounded', device === value ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground')}><Icon className="h-4 w-4" /></button>)}
                </div>
              </div>
            </div>
            {steps.length > 1 && (
              <div role="tablist" aria-label="Etapa da pré-visualização" className="mb-3 flex flex-wrap gap-1.5">
                {steps.map((step, index) => <button key={index} role="tab" aria-selected={shownStep === step} onClick={() => setPreviewIndex(index)} className={cn('h-7 rounded-full border px-3 text-[12px] font-medium', shownStep === step ? 'border-foreground bg-foreground text-background' : 'bg-card text-muted-foreground hover:text-foreground')}>{stepLabel(step)}</button>)}
              </div>
            )}
            <RewardStage reward={reward} device={device} lang={visitorLang} compact step={shownStep} onNext={() => setPreviewIndex(Math.min(steps.indexOf(shownStep) + 1, steps.length - 1))} />
            <p className="mt-2 text-[13px] text-muted-foreground">{triggerSummary(reward)}</p>
          </div>
        </div>
      </Body>
      <Dialog open={confirmDelete} onOpenChange={setConfirmDelete}>
        <DialogContent>
          <DialogHeader><DialogTitle>Apagar "{initial.name}"?</DialogTitle><DialogDescription>A janela sai de {initial.domain}/{initial.page} na hora.</DialogDescription></DialogHeader>
          <DialogFooter><Button variant="outline" onClick={() => setConfirmDelete(false)}>Cancelar</Button><Button variant="destructive" onClick={() => { remove(initial.id); toast.success('Reward apagado'); back() }}>Apagar</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}


type RewardDay = { day: string; opens: number; clicks: number; completed: number }
type RewardLeadRow = { name: string; contact: string; lang: string; answers: string[]; date: string }
const REWARD_PERIODS = [['7', 'Últimos 7 dias'], ['30', 'Últimos 30 dias']] as const
const LEAD_NAMES = ['Ana Souza', 'Bruno Lima', 'Carla Mendes', 'Diego Rocha', 'Elisa Prado', 'Felipe Nunes', 'Gabriela Reis', 'Hugo Martins', 'Isabela Costa', 'João Pires', 'Karen Alves', 'Lucas Freitas', 'Marina Duarte', 'Nicolas Ramos', 'Olívia Teles', 'Paulo Viana']

/** Número pseudoaleatório estável a partir de uma semente, para os dados de exemplo. */
function seeded(seed: number) { const value = Math.sin(seed * 9301 + 49297) * 233280; return value - Math.floor(value) }

/** Dados diários de exemplo de um reward: janelas abertas, cliques no botão e anúncios concluídos. */
function rewardDays(reward: ProtoReward): RewardDay[] {
  return Array.from({ length: 30 }, (_item, index) => {
    const opens = Math.round(900 + seeded(reward.id * 100 + index) * 700 + index * 12)
    const clicks = Math.round(opens * (0.42 + seeded(reward.id * 200 + index) * 0.12) * (reward.questions.length ? 0.78 : 1))
    const completed = Math.round(clicks * (0.8 + seeded(reward.id * 300 + index) * 0.1))
    return { day: `${String(((index + 10) % 30) + 1).padStart(2, '0')}/${index < 20 ? '10' : '11'}`, opens, clicks, completed }
  })
}

/** Gráfico de linhas simples das métricas diárias, com a série escolhida em destaque. */
function RewardDailyChart({ days, series }: { days: RewardDay[]; series: keyof Omit<RewardDay, 'day'> }) {
  const [hover, setHover] = useState<number | null>(null)
  const width = 960, height = 220, left = 56, right = 12, top = 12, bottom = 26
  const values = days.map((day) => day[series])
  const max = Math.max(...values) * 1.15 || 1
  const xAt = (index: number) => left + (days.length === 1 ? 0 : (index * (width - left - right)) / (days.length - 1))
  const yAt = (value: number) => top + (height - top - bottom) * (1 - value / max)
  const line = values.map((value, index) => `${index ? 'L' : 'M'}${xAt(index).toFixed(1)},${yAt(value).toFixed(1)}`).join('')
  const every = Math.max(1, Math.ceil(days.length / 8))
  return (
    <div className="relative">
      <svg viewBox={`0 0 ${width} ${height}`} className="h-[220px] w-full" role="img" aria-label="Métrica por dia" onMouseLeave={() => setHover(null)}
        onMouseMove={(event) => { const box = event.currentTarget.getBoundingClientRect(); const position = ((event.clientX - box.left) / box.width) * width; setHover(Math.min(days.length - 1, Math.max(0, Math.round(((position - left) / (width - left - right)) * (days.length - 1))))) }}>
        {[0, 0.5, 1].map((fraction) => <g key={fraction}><line x1={left} x2={width - right} y1={yAt(max * fraction)} y2={yAt(max * fraction)} className="stroke-border" /><text x={left - 8} y={yAt(max * fraction) + 4} textAnchor="end" className="fill-muted-foreground text-[11px] tnum">{int.format(Math.round(max * fraction))}</text></g>)}
        {days.map((day, index) => index % every === 0 && <text key={day.day} x={xAt(index)} y={height - 6} textAnchor="middle" className="fill-muted-foreground text-[11px] tnum">{day.day}</text>)}
        <path d={`${line}L${xAt(values.length - 1)},${yAt(0)}L${xAt(0)},${yAt(0)}Z`} className="fill-foreground/[0.04]" />
        <path d={line} fill="none" className="stroke-foreground" strokeWidth={2} strokeLinejoin="round" />
        {hover !== null && <><line x1={xAt(hover)} x2={xAt(hover)} y1={top} y2={height - bottom} className="stroke-muted-foreground/50" /><circle cx={xAt(hover)} cy={yAt(values[hover])} r={4} className="fill-foreground stroke-card" strokeWidth={2} /></>}
      </svg>
      {hover !== null && <div className="pointer-events-none absolute top-1 rounded-md border bg-popover px-3 py-2 text-[13px] shadow-md" style={{ left: `clamp(0px, calc(${(xAt(hover) / width) * 100}% - 70px), calc(100% - 140px))`, width: 140 }}><div className="font-medium">{days[hover].day}</div><div className="tnum">{int.format(values[hover])}</div></div>}
    </div>
  )
}

/** Métricas de um reward: aberturas, cliques, anúncios concluídos, funil das etapas, respostas e contatos. */
function RewardMetricsScreen({ reward, staff, back, edit }: { reward: ProtoReward; staff: boolean; back: () => void; edit: () => void }) {
  const [period, setPeriod] = useState<string>('30')
  const [series, setSeries] = useState<keyof Omit<RewardDay, 'day'>>('opens')
  const [leadQuery, setLeadQuery] = useState('')
  const [answerFilter, setAnswerFilter] = useState('all')
  const days = rewardDays(reward).slice(-Number(period))
  const opens = days.reduce((total, day) => total + day.opens, 0)
  const clicks = days.reduce((total, day) => total + day.clicks, 0)
  const completed = days.reduce((total, day) => total + day.completed, 0)
  const rate = (part: number, whole: number) => `${pct.format(whole ? (part / whole) * 100 : 0)}%`
  const funnel: [string, number][] = [['Janela aberta', opens]]
  let reached = opens
  rewardSteps(reward).forEach((step, index) => {
    if (step.kind === 'reward') return
    reached = Math.round(reached * (0.86 + seeded(reward.id * 7 + index) * 0.08))
    funnel.push([step.kind === 'question' ? `Respondeu a pergunta ${step.index + 1}` : 'Deixou o contato', reached])
  })
  funnel.push([`Clicou em "${reward.button || 'Desbloquear'}"`, clicks], ['Assistiu o anúncio até o fim', completed])
  const leadsTotal = reward.lead ? funnel.find(([label]) => label === 'Deixou o contato')?.[1] ?? 0 : 0
  const answered = (index: number) => funnel.find(([label]) => label === `Respondeu a pergunta ${index + 1}`)?.[1] ?? 0
  const answerCounts = reward.questions.map((question, index) => {
    const weights = question.answers.map((_answer, answerIndex) => 0.4 + seeded(reward.id * 50 + index * 5 + answerIndex))
    const sum = weights.reduce((total, weight) => total + weight, 0)
    return question.answers.map((answer, answerIndex) => [answer || `Resposta ${answerIndex + 1}`, Math.round((answered(index) * weights[answerIndex]) / sum)] as const)
  })
  const leads: RewardLeadRow[] = reward.lead ? LEAD_NAMES.map((name, index) => ({
    name,
    contact: reward.lead!.kind === 'email' ? `${name.split(' ')[0].toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')}@email.com` : `(11) 9${String(8000 + index * 137).padStart(4, '0')}-${String(1000 + index * 211).slice(0, 4)}`,
    lang: ['Português', 'Português', 'Espanhol', 'Português', 'Inglês'][index % 5],
    answers: reward.questions.map((question, questionIndex) => question.answers[Math.floor(seeded(index * 13 + questionIndex) * 3)] || '—'),
    date: `${String(9 - Math.floor(index / 3)).padStart(2, '0')}/11/2026 ${String(8 + (index % 12)).padStart(2, '0')}:${String((index * 17) % 60).padStart(2, '0')}`,
  })) : []
  const visibleLeads = leads.filter((lead) => `${lead.name} ${lead.contact}`.toLowerCase().includes(leadQuery.toLowerCase()) && (answerFilter === 'all' || lead.answers[Number(answerFilter.split(':')[0])] === answerFilter.split(':').slice(1).join(':')))
  const tiles: [string, string, string][] = [
    ['Janelas abertas', int.format(opens), 'Vezes que a janela apareceu para alguém.'],
    ['Cliques no botão', int.format(clicks), `${rate(clicks, opens)} das janelas abertas (CTR).`],
    ['Anúncios concluídos', int.format(completed), `${rate(completed, clicks)} de quem clicou viu até o fim.`],
    ['Desistências', int.format(opens - completed), `${rate(opens - completed, opens)} fecharam antes de liberar.`],
  ]
  const quizCompleted = funnel[funnel.length - 3]?.[1] ?? 0
  const quizTiles: [string, string, string][] = [
    ['Sessões', int.format(opens), `${int.format(quizCompleted)} concluídos · ${int.format(opens - quizCompleted)} desistências`],
    ['Taxa de conclusão', rate(quizCompleted, opens), `${int.format(quizCompleted)} de ${int.format(opens)} sessões responderam tudo.`],
    ['Taxa de desistência', rate(opens - quizCompleted, opens), `${int.format(opens - quizCompleted)} saíram antes de terminar.`],
    ['CTR do reward', rate(clicks, quizCompleted), `${int.format(clicks)} cliques no botão do reward depois do quiz.`],
  ]
  if (reward.lead) tiles.push(['Contatos', int.format(leadsTotal), `${rate(leadsTotal, opens)} das janelas abertas.`])
  return (
    <>
      <PageHeader title={reward.name} sub={`${staff ? `${reward.client} · ` : ''}${reward.domain}/${reward.page}`}
        back={<button onClick={back} className="inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft className="h-3.5 w-3.5" />Rewards</button>}
        actions={<><Select value={period} onValueChange={setPeriod}><SelectTrigger aria-label="Período" className="h-9 w-[180px]"><SelectValue /></SelectTrigger><SelectContent>{REWARD_PERIODS.map(([value, label]) => <SelectItem key={value} value={value}>{label}</SelectItem>)}</SelectContent></Select><Button variant="outline" onClick={edit}><Pencil className="h-4 w-4" />Editar</Button></>} />
      <Body>
        {!reward.active && <div className="flex items-start gap-2 rounded-md border border-ochre/40 bg-ochre-soft px-3 py-2 text-[13px] text-ochre"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />Este reward está pausado: os números são de quando ele estava ativo.</div>}
        <div className={cn('grid gap-3 sm:grid-cols-2', tiles.length === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4')}>
          {tiles.map(([label, value, note]) => (
            <div key={label} className="rounded-lg border bg-card p-4">
              <div className="text-[13px] text-muted-foreground">{label}</div>
              <div className="mt-1 text-[26px] font-semibold tracking-[-0.03em] tnum">{value}</div>
              <div className="mt-1 text-[12px] leading-snug text-muted-foreground">{note}</div>
            </div>
          ))}
        </div>
        {reward.questions.length > 0 && (
          <div className="grid gap-3">
            <h2 className="text-[13px] font-medium uppercase tracking-wide text-muted-foreground">Quiz</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {quizTiles.map(([label, value, note]) => (
                <div key={label} className="rounded-lg border bg-card p-4">
                  <div className="text-[13px] text-muted-foreground">{label}</div>
                  <div className="mt-1 text-[26px] font-semibold tracking-[-0.03em] tnum">{value}</div>
                  <div className="mt-1 text-[12px] leading-snug text-muted-foreground">{note}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        <Card title="Por dia">
          <div className="mb-4 inline-flex flex-wrap rounded-md border bg-muted p-0.5" role="radiogroup" aria-label="Métrica do gráfico">
            {([['opens', 'Janelas abertas'], ['clicks', 'Cliques no botão'], ['completed', 'Anúncios concluídos']] as const).map(([value, label]) => <button key={value} role="radio" aria-checked={series === value} onClick={() => setSeries(value)} className={cn('h-8 rounded px-3 text-[13px] font-medium', series === value ? 'bg-background shadow-sm' : 'text-muted-foreground hover:text-foreground')}>{label}</button>)}
          </div>
          <RewardDailyChart days={days} series={series} />
        </Card>
        <Card title="Etapas" desc="Quantas pessoas chegaram a cada etapa, do momento em que a janela abre até o fim do anúncio.">
          <ul className="grid gap-3">
            {funnel.map(([label, value], index) => (
              <li key={label} className="grid gap-1.5">
                <div className="flex items-baseline justify-between gap-3 text-[14px]"><span className="min-w-0 truncate">{label}</span><span className="shrink-0 tnum"><span className="font-medium">{int.format(value)}</span><span className="ml-2 text-[13px] text-muted-foreground">{rate(value, opens)}{index > 0 && ` · perdeu ${int.format(funnel[index - 1][1] - value)}`}</span></span></div>
                <span className="h-2 rounded-full bg-muted"><span className="block h-2 rounded-full bg-foreground" style={{ width: `${(value / (opens || 1)) * 100}%` }} /></span>
              </li>
            ))}
          </ul>
        </Card>
        {reward.questions.length > 0 && (
          <Card title="Respostas" desc="O que as pessoas escolheram em cada pergunta.">
            <div className="grid gap-6 md:grid-cols-2">
              {reward.questions.map((question, index) => (
                <div key={index} className="grid gap-3">
                  <div><div className="text-[13px] text-muted-foreground">Pergunta {index + 1} · {int.format(answered(index))} respostas</div><div className="font-medium">{question.title || 'Pergunta sem título'}</div></div>
                  <table className="w-full text-[13px]">
                    <thead><tr className="text-left text-[12px] text-muted-foreground"><th className="pb-2 font-medium">Resposta</th><th className="pb-2 text-right font-medium">Cliques</th><th className="w-[45%] pb-2 pl-4 font-medium">CTR</th></tr></thead>
                    <tbody>
                      {answerCounts[index].map(([answer, count]) => (
                        <tr key={answer} className="border-t">
                          <td className="py-2 pr-3">{answer}</td>
                          <td className="py-2 text-right tnum">{int.format(count)}</td>
                          <td className="py-2 pl-4"><div className="flex items-center gap-2"><span className="h-2 flex-1 rounded-full bg-muted"><span className="block h-2 rounded-full bg-foreground" style={{ width: `${(count / (answered(index) || 1)) * 100}%` }} /></span><span className="w-[52px] text-right tnum">{rate(count, answered(index))}</span></div></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </Card>
        )}
        {reward.lead && (
          <Card pad={false}>
            <div className="px-6 pt-6"><h2 className="text-[20px] font-semibold tracking-tight">Contatos</h2><p className="mt-2 text-[14px] text-muted-foreground">Quem deixou {reward.lead.kind === 'email' ? 'o e-mail' : 'o telefone'} na janela, com as respostas.</p></div>
            <div className="flex flex-wrap items-center gap-3 border-b px-6 py-4">
              <div className="relative w-full sm:w-[260px]"><Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input aria-label="Buscar contatos" className="h-9 pl-9" placeholder="Nome ou contato" value={leadQuery} onChange={(event) => setLeadQuery(event.target.value)} /></div>
              {reward.questions.length > 0 && (
                <Select value={answerFilter} onValueChange={setAnswerFilter}>
                  <SelectTrigger aria-label="Filtrar por resposta" className="h-9 w-[240px]"><SelectValue /></SelectTrigger>
                  <SelectContent><SelectItem value="all">Todas as respostas</SelectItem>{reward.questions.flatMap((question, index) => question.answers.map((answer) => <SelectItem key={`${index}:${answer}`} value={`${index}:${answer}`}>P{index + 1}: {answer}</SelectItem>))}</SelectContent>
                </Select>
              )}
              <Button variant="outline" className="sm:ml-auto" onClick={() => toast.success('Exportação iniciada', { description: `${visibleLeads.length} contatos em CSV.` })}><Download className="h-4 w-4" />Exportar CSV</Button>
            </div>
            <Table min={760}>
              <thead><tr>{['Nome', 'Contato', 'Idioma', ...reward.questions.map((_question, index) => `Pergunta ${index + 1}`), 'Data'].map((label) => <th key={label} className="border-b bg-muted px-4 py-2.5 text-left text-[12px] font-medium text-muted-foreground">{label}</th>)}</tr></thead>
              <tbody>
                {visibleLeads.slice(0, 10).map((lead) => (
                  <tr key={lead.contact} className="hover:bg-muted">
                    <td className="border-b px-4 py-3 text-[14px] font-medium">{lead.name}</td>
                    <td className="border-b px-4 py-3 font-mono text-[13px]">{lead.contact}</td>
                    <td className="border-b px-4 py-3 text-[14px]">{lead.lang}</td>
                    {lead.answers.map((answer, index) => <td key={index} className="border-b px-4 py-3 text-[14px]">{answer}</td>)}
                    <td className="whitespace-nowrap border-b px-4 py-3 text-[13px] text-muted-foreground tnum">{lead.date}</td>
                  </tr>
                ))}
                {!visibleLeads.length && <tr><td colSpan={4 + reward.questions.length} className="px-4 py-10 text-center text-[14px] text-muted-foreground">Nenhum contato com esse filtro.</td></tr>}
              </tbody>
            </Table>
            <div className="px-6 py-3 text-[13px] text-muted-foreground tnum">{visibleLeads.length ? `1–${Math.min(10, visibleLeads.length)} de ${int.format(leadsTotal)} contatos` : '0 contatos'}</div>
          </Card>
        )}
      </Body>
    </>
  )
}

/* ---------- Ad tag (a tag de anúncios do site: blocos, integrações, saúde e versões) ---------- */

type TagBlockKind = 'anchor' | 'interstitial' | 'fixed' | 'content'
type TagRuleMode = 'all' | 'include' | 'exclude'
type TagBlock = { id: string; kind: TagBlockKind; number: number; desktop: boolean; mobile: boolean; edge: 'top' | 'bottom'; selector: string; side: 'before' | 'after'; refresh: number | null; mgidArticle: string; ruleMode: TagRuleMode; paths: string[] }
type TagSettings = { lazyLoad: boolean; loader: boolean; adUnitDay: string; analyticsId: string; mgidTagId: string; mgidSmartWidget: string; mgidBackButton: string; mgidSidebar: string }
type TagVersion = { number: number; by: string; at: string; note: string; blocks: TagBlock[]; settings: TagSettings }
type TagHealthRow = { block: string; served: number; filled: number; viewable: number }
type ProtoAdTag = { domain: string; client: string; paused: boolean; draft: { blocks: TagBlock[]; settings: TagSettings } | null; versions: TagVersion[]; lastSeen: string | null; seenVersion: number | null; pages24h: number; health: TagHealthRow[] }

const TAG_SCRIPT = '<script async src="https://avant.groone.com/tag.js"></script>'
const TAG_KIND_LABEL: Record<TagBlockKind, string> = { anchor: 'Âncora', interstitial: 'Intersticial', fixed: 'Fixo', content: 'Conteúdo' }
const TAG_KIND_HINT: Record<TagBlockKind, string> = {
  anchor: 'Faixa presa no topo ou no rodapé da tela, que o visitante pode fechar.',
  interstitial: 'Anúncio de tela cheia que o Google mostra na troca de página.',
  fixed: 'Bloco fixo no topo ou no rodapé, do lado oposto da âncora.',
  content: 'Bloco dentro do texto, antes ou depois de um elemento da página.',
}
const TAG_SITES: { domain: string; client: string; days: string[] }[] = [
  { domain: 'acai.com.br', client: 'Açaí Mídia', days: ['2026-10-28', '2026-08-14'] },
  { domain: 'receitasdaacai.com.br', client: 'Açaí Mídia', days: ['2026-09-02'] },
  { domain: 'technoticias.com.br', client: 'Tech Notícias', days: ['2026-10-05', '2026-06-20'] },
  { domain: 'viagemfacil.com', client: 'Viagem Fácil', days: ['2026-07-11'] },
]
const DEFAULT_TAG_SETTINGS: TagSettings = { lazyLoad: true, loader: false, adUnitDay: 'latest', analyticsId: '', mgidTagId: '', mgidSmartWidget: '', mgidBackButton: '', mgidSidebar: '' }
/** Um bloco novo do tipo pedido, com os valores mais comuns. */
function newTagBlock(kind: TagBlockKind, number = 0): TagBlock {
  return { id: `${kind}-${number}-${Math.random().toString(36).slice(2, 7)}`, kind, number, desktop: true, mobile: true, edge: kind === 'fixed' ? 'top' : 'bottom', selector: '', side: 'after', refresh: null, mgidArticle: '', ruleMode: 'all', paths: [] }
}
const ACAI_BLOCKS: TagBlock[] = [
  { ...newTagBlock('content', 1), id: 'c1', selector: 'article h1', side: 'after', refresh: 45 },
  { ...newTagBlock('anchor'), id: 'an', edge: 'bottom' },
  { ...newTagBlock('interstitial'), id: 'in', ruleMode: 'exclude', paths: ['/contato', '/politica-de-privacidade'] },
  { ...newTagBlock('content', 2), id: 'c2', selector: 'article p:nth-of-type(2)', side: 'after', mgidArticle: '1488230' },
  { ...newTagBlock('content', 3), id: 'c3', selector: 'article h2', side: 'before', desktop: false },
  { ...newTagBlock('fixed'), id: 'fx', edge: 'top', mobile: false },
]
const INITIAL_AD_TAGS: ProtoAdTag[] = [
  {
    domain: 'acai.com.br', client: 'Açaí Mídia', paused: false, lastSeen: 'há 2 min', seenVersion: 7, pages24h: 48210,
    draft: { blocks: ACAI_BLOCKS.map((block) => (block.id === 'c1' ? { ...block, refresh: 60 } : block)), settings: { ...DEFAULT_TAG_SETTINGS, analyticsId: 'G-8KQ2LM1Z0P', mgidTagId: '972311' } },
    versions: [
      { number: 7, by: 'Marina Costa', at: '07/11/2026 15:42', note: 'Conteúdo 3 só no celular', blocks: ACAI_BLOCKS, settings: { ...DEFAULT_TAG_SETTINGS, analyticsId: 'G-8KQ2LM1Z0P', mgidTagId: '972311' } },
      { number: 6, by: 'Rafael Lima (Groone)', at: '01/11/2026 10:08', note: 'Intersticial fora da página de contato', blocks: ACAI_BLOCKS.map((block) => (block.id === 'c3' ? { ...block, desktop: true } : block)), settings: { ...DEFAULT_TAG_SETTINGS, analyticsId: 'G-8KQ2LM1Z0P', mgidTagId: '972311' } },
      { number: 5, by: 'Marina Costa', at: '24/10/2026 18:30', note: 'Artigo MGID no Conteúdo 2', blocks: ACAI_BLOCKS.filter((block) => block.id !== 'fx'), settings: { ...DEFAULT_TAG_SETTINGS, analyticsId: 'G-8KQ2LM1Z0P', mgidTagId: '972311' } },
    ],
    health: [
      { block: 'Conteúdo 1', served: 48210, filled: 93, viewable: 71 },
      { block: 'Âncora', served: 47980, filled: 97, viewable: 88 },
      { block: 'Intersticial', served: 21440, filled: 64, viewable: 92 },
      { block: 'Conteúdo 2', served: 39120, filled: 81, viewable: 54 },
      { block: 'Conteúdo 3', served: 30660, filled: 38, viewable: 47 },
      { block: 'Fixo', served: 17550, filled: 90, viewable: 95 },
    ],
  },
  {
    domain: 'technoticias.com.br', client: 'Tech Notícias', paused: true, lastSeen: 'há 3 dias', seenVersion: 2, pages24h: 0, draft: null, health: [],
    versions: [{ number: 2, by: 'Rafael Lima (Groone)', at: '20/10/2026 09:12', note: 'Primeira configuração', blocks: [{ ...newTagBlock('content', 1), id: 't1', selector: '.entry-content p:nth-of-type(1)' }, { ...newTagBlock('anchor'), id: 't2' }], settings: DEFAULT_TAG_SETTINGS }, { number: 1, by: 'Rafael Lima (Groone)', at: '19/10/2026 17:40', note: 'Rascunho inicial', blocks: [{ ...newTagBlock('anchor'), id: 't2' }], settings: DEFAULT_TAG_SETTINGS }],
  },
  { domain: 'receitasdaacai.com.br', client: 'Açaí Mídia', paused: false, lastSeen: null, seenVersion: null, pages24h: 0, draft: { blocks: [{ ...newTagBlock('content', 1), id: 'r1', selector: 'article h1' }, { ...newTagBlock('anchor'), id: 'r2' }], settings: DEFAULT_TAG_SETTINGS }, versions: [], health: [] },
]

/** Nome do bloco como aparece no painel e no GAM: Conteúdo 1, Âncora... */
function tagBlockName(block: TagBlock) { return block.kind === 'content' ? `Conteúdo ${block.number}` : TAG_KIND_LABEL[block.kind] }
/** Nome do ad unit no GAM que o bloco usa no aparelho, pela data dos blocos. */
function tagAdUnit(domain: string, block: TagBlock, device: 'Desktop' | 'Mobile', day: string) {
  const alias = domain.split('.')[0].replace(/^./, (letter) => letter.toUpperCase())
  const type = block.kind === 'content' ? `Content${block.number}` : { anchor: 'Anchor', interstitial: 'Interstitial', fixed: 'Fixed' }[block.kind]
  return `${alias}_${type}_${device}_${day.replaceAll('-', '')}`
}
/** As frases que dizem o que mudou entre a versão no ar e o rascunho. */
function tagChanges(before: TagVersion | undefined, blocks: TagBlock[], settings: TagSettings): string[] {
  if (!before) return blocks.length ? [`${blocks.length} blocos na primeira versão`] : []
  const changes: string[] = []
  const old = new Map(before.blocks.map((block) => [block.id, block]))
  blocks.forEach((block, index) => {
    const previous = old.get(block.id)
    if (!previous) { changes.push(`${tagBlockName(block)} adicionado`); return }
    if (before.blocks.indexOf(previous) !== index) changes.push(`${tagBlockName(block)} mudou de ordem`)
    if (previous.selector !== block.selector || previous.side !== block.side) changes.push(`${tagBlockName(block)} mudou de lugar`)
    if (previous.refresh !== block.refresh) changes.push(`${tagBlockName(block)}: atualização ${previous.refresh ? `${previous.refresh} s` : 'desligada'} → ${block.refresh ? `${block.refresh} s` : 'desligada'}`)
    if (previous.desktop !== block.desktop || previous.mobile !== block.mobile) changes.push(`${tagBlockName(block)}: aparelhos mudaram`)
    if (previous.edge !== block.edge) changes.push(`${tagBlockName(block)} foi para ${block.edge === 'top' ? 'o topo' : 'o rodapé'}`)
    if (previous.ruleMode !== block.ruleMode || previous.paths.join() !== block.paths.join()) changes.push(`${tagBlockName(block)}: páginas mudaram`)
    if (previous.mgidArticle !== block.mgidArticle) changes.push(`${tagBlockName(block)}: artigo MGID mudou`)
  })
  before.blocks.filter((block) => !blocks.some((item) => item.id === block.id)).forEach((block) => changes.push(`${tagBlockName(block)} removido`))
  const labels: Record<keyof TagSettings, string> = { lazyLoad: 'Carregamento lento', loader: 'Tela de carregamento', adUnitDay: 'Data dos blocos', analyticsId: 'Google Analytics', mgidTagId: 'Tag MGID', mgidSmartWidget: 'MGID smart widget', mgidBackButton: 'MGID back button', mgidSidebar: 'MGID sidebar' }
  ;(Object.keys(labels) as (keyof TagSettings)[]).forEach((key) => { if (before.settings[key] !== settings[key]) changes.push(`${labels[key]} mudou`) })
  return changes
}
/** A situação da tag, para a lista e o cabeçalho. */
function tagStatus(tag: ProtoAdTag | undefined): { tone: 'ok' | 'warn' | 'bad' | 'neutral' | 'ochre'; label: string } {
  if (!tag) return { tone: 'neutral', label: 'Sem tag' }
  if (tag.paused) return { tone: 'neutral', label: 'Pausada' }
  if (!tag.versions.length) return { tone: 'ochre', label: 'Nunca publicada' }
  if (tag.lastSeen === null) return { tone: 'warn', label: 'Publicada, não instalada' }
  return { tone: 'ok', label: `No ar · versão ${tag.versions[0].number}` }
}

/** Lista das ad tags: uma por site; no interno, de todos os clientes. */
function AdTagsScreen({ tags, staff, open, metrics }: { tags: ProtoAdTag[]; staff: boolean; open: (domain: string) => void; metrics: (domain: string) => void }) {
  const [query, setQuery] = useState('')
  const [installOpen, setInstallOpen] = useState(false)
  const sites = TAG_SITES.filter((site) => (staff || site.client === MY_CLIENT) && `${site.domain} ${site.client}`.toLowerCase().includes(query.toLowerCase()))
  return (
    <>
      <PageHeader title="Ad tags" sub={staff ? 'A tag de anúncios de cada site de todos os clientes. A equipe Groone e quem tem acesso ao site editam a mesma tag.' : 'A tag de anúncios de cada site: onde entram os blocos, integrações e se a tag está rodando. Um script só para todos os sites.'}
        actions={<Button variant="outline" onClick={() => setInstallOpen(true)}><Code2 className="h-4 w-4" />Como instalar</Button>} />
      <Body>
        <div className="relative w-full sm:w-[280px]"><Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input aria-label="Buscar sites" className="h-9 pl-9" placeholder={staff ? 'Site ou cliente' : 'Site'} value={query} onChange={(event) => setQuery(event.target.value)} /></div>
        <Table min={staff ? 920 : 780}>
          <thead><tr><th className={th}>Site</th>{staff && <th className={th}>Cliente</th>}<th className={th}>Situação</th><th className={cn(th, 'text-right')}>Blocos</th><th className={th}>Visto por último</th><th className={th}>Rascunho</th><th className={th}><span className="sr-only">Ação</span></th></tr></thead>
          <tbody>
            {sites.map((site) => {
              const tag = tags.find((item) => item.domain === site.domain)
              const status = tagStatus(tag)
              const live = tag?.versions[0]
              const pending = tag?.draft ? tagChanges(live, tag.draft.blocks, tag.draft.settings).length : 0
              return (
                <tr key={site.domain} className="hover:bg-muted">
                  <td className={cn(td, 'font-mono text-[13px]')}>{tag ? <button className="hover:underline" onClick={() => open(site.domain)}>{site.domain}</button> : site.domain}</td>
                  {staff && <td className={td}>{site.client}</td>}
                  <td className={td}><Status tone={status.tone}>{status.label}</Status></td>
                  <td className={cn(td, 'text-right tnum')}>{live ? live.blocks.length : '—'}</td>
                  <td className={cn(td, 'whitespace-nowrap text-[13px] text-muted-foreground')}>{tag?.lastSeen ?? 'Nunca'}</td>
                  <td className={td}>{pending > 0 ? <Badge tone="ochre">{pending} {pending === 1 ? 'alteração' : 'alterações'}</Badge> : <span className="text-[13px] text-muted-foreground">—</span>}</td>
                  <td className={cn(td, 'text-right')}><div className="flex justify-end gap-2">{tag && tag.versions.length > 0 && <Button size="sm" variant="outline" onClick={() => metrics(site.domain)}><BarChart3 className="h-4 w-4" />Métricas</Button>}<Button size="sm" variant={tag ? 'outline' : 'default'} onClick={() => open(site.domain)}>{tag ? 'Abrir' : <><Plus className="h-4 w-4" />Configurar</>}</Button></div></td>
                </tr>
              )
            })}
            {!sites.length && <tr><td className={cn(td, 'py-12 text-center')} colSpan={staff ? 7 : 6}><Code2 className="mx-auto h-5 w-5 text-muted-foreground" /><p className="mt-2 font-medium">Nenhum site com esse nome</p></td></tr>}
          </tbody>
        </Table>
        <InstallDialog open={installOpen} onOpenChange={setInstallOpen} />
      </Body>
    </>
  )
}

/** Como instalar: a mesma linha em todos os sites, sem chave. */
function InstallDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[560px]">
        <DialogHeader><DialogTitle>Instalar a ad tag</DialogTitle><DialogDescription>Cole esta linha no &lt;head&gt; do site. É igual para todos os sites: a tag acha a configuração pelo domínio da página.</DialogDescription></DialogHeader>
        <div className="flex items-start gap-2 rounded-md border bg-muted p-3"><code className="min-w-0 flex-1 break-all font-mono text-[13px]">{TAG_SCRIPT}</code><Button size="sm" variant="outline" onClick={() => { void navigator.clipboard?.writeText(TAG_SCRIPT); toast.success('Linha copiada') }}><Copy className="h-4 w-4" />Copiar</Button></div>
        <ul className="grid gap-2 text-[14px] text-muted-foreground">
          <li>• O reward já vem dentro da tag. Se o site usa só o reward, a linha é a do <span className="font-mono text-[13px]">reward.js</span>; com a tag, tire a do reward.</li>
          <li>• Tire a tag antiga do Genius (<span className="font-mono text-[13px]">g-tag.min.js</span>) para os anúncios não aparecerem duas vezes.</li>
          <li>• Depois de instalar, a aba Saúde mostra a tag rodando em poucos minutos.</li>
        </ul>
        <DialogFooter><Button onClick={() => onOpenChange(false)}>Fechar</Button></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

/** Uma página de exemplo do site, com os blocos onde a tag põe e o seletor de elementos. */
const PREVIEW_ELEMENTS: { selector: string; kind: 'title' | 'image' | 'text' | 'subtitle' | 'meta' }[] = [
  { selector: 'article .meta', kind: 'meta' },
  { selector: 'article h1', kind: 'title' },
  { selector: 'article figure', kind: 'image' },
  { selector: 'article p:nth-of-type(1)', kind: 'text' },
  { selector: 'article p:nth-of-type(2)', kind: 'text' },
  { selector: 'article h2', kind: 'subtitle' },
  { selector: 'article p:nth-of-type(3)', kind: 'text' },
  { selector: 'article p:nth-of-type(4)', kind: 'text' },
]
/** O site do cliente com os blocos no lugar; em modo de escolha, clicar num elemento devolve o seletor. */
function TagSitePreview({ domain, blocks, device, picking, onPick, path, compact = false }: { domain: string; blocks: TagBlock[]; device: 'desktop' | 'mobile'; picking: string | null; onPick: (selector: string) => void; path: string; compact?: boolean }) {
  const [hover, setHover] = useState<string | null>(null)
  const visible = blocks.filter((block) => (device === 'desktop' ? block.desktop : block.mobile) && (block.ruleMode === 'all' || (block.ruleMode === 'include' ? block.paths.some((item) => path.startsWith(item.replace(/\*$/, ''))) : !block.paths.some((item) => path.startsWith(item.replace(/\*$/, ''))))))
  const anchor = visible.find((block) => block.kind === 'anchor')
  const fixed = visible.find((block) => block.kind === 'fixed')
  const interstitial = visible.find((block) => block.kind === 'interstitial')
  /** Os blocos de conteúdo antes ou depois do elemento. */
  const slotsAt = (selector: string, side: 'before' | 'after') => visible.filter((block) => block.kind === 'content' && block.selector === selector && block.side === side)
  /** A caixa tracejada de um bloco de conteúdo. */
  const AdSlot = ({ block }: { block: TagBlock }) => (
    <div className="my-3 grid place-items-center rounded-md border-2 border-dashed border-sky-400 bg-sky-50 py-5 text-center text-[12px] font-medium text-sky-800">
      {tagBlockName(block)}<span className="font-normal opacity-80">{device === 'desktop' ? '728 × 90 · 336 × 280' : '336 × 280 · 300 × 250'}{block.refresh ? ` · atualiza a cada ${block.refresh} s` : ''}</span>
    </div>
  )
  return (
    <div className={cn('mx-auto overflow-hidden rounded-xl border bg-card shadow-sm', device === 'mobile' ? 'w-[360px] max-w-full' : 'w-full')}>
      <div className="flex items-center gap-2 border-b bg-muted px-3 py-2">
        {device === 'desktop' && <div className="flex gap-1.5" aria-hidden="true"><span className="h-2.5 w-2.5 rounded-full bg-border" /><span className="h-2.5 w-2.5 rounded-full bg-border" /><span className="h-2.5 w-2.5 rounded-full bg-border" /></div>}
        <div className="min-w-0 flex-1 truncate rounded-md bg-background px-3 py-1 font-mono text-[12px] text-muted-foreground">https://{domain}{path}</div>
      </div>
      <div className={cn('relative overflow-y-auto bg-white text-neutral-800', compact ? 'h-[420px] lg:h-[calc(100dvh-300px)] lg:min-h-[420px]' : 'h-[640px]')}>
        {fixed && fixed.edge === 'top' && <div className="sticky top-0 z-10 grid h-12 place-items-center border-b-2 border-dashed border-sky-400 bg-sky-50 text-[12px] font-medium text-sky-800">Fixo · {device === 'desktop' ? '728 × 90' : '320 × 50'}</div>}
        <div className="flex items-center justify-between border-b px-5 py-3" aria-hidden="true"><span className="font-serif text-[18px] font-bold">{domain.split('.')[0]}</span><span className="flex gap-3 text-[12px] text-neutral-500"><span>Receitas</span><span>Doces</span><span>Contato</span></span></div>
        <div className={cn('grid gap-6 p-5', device === 'desktop' && 'grid-cols-[minmax(0,1fr)_180px]')}>
          <article className="min-w-0">
            {PREVIEW_ELEMENTS.map((element) => (
              <div key={element.selector}>
                {slotsAt(element.selector, 'before').map((block) => <AdSlot key={block.id} block={block} />)}
                <div
                  onMouseEnter={() => picking && setHover(element.selector)} onMouseLeave={() => setHover(null)}
                  onClick={() => picking && onPick(element.selector)}
                  className={cn('relative rounded-sm', picking && 'cursor-crosshair', picking && hover === element.selector && 'outline outline-2 outline-offset-2 outline-sky-500')}>
                  {picking && hover === element.selector && <span className="absolute -top-6 left-0 z-10 rounded bg-sky-600 px-1.5 py-0.5 font-mono text-[11px] text-white">{element.selector}</span>}
                  {element.kind === 'meta' && <p className="text-[12px] text-neutral-500">Por Ana Souza · 6 de novembro</p>}
                  {element.kind === 'title' && <h3 className="mt-1 font-serif text-[24px] font-bold leading-tight">Bolo de açaí cremoso em 30 minutos</h3>}
                  {element.kind === 'image' && <div className="mt-3 h-36 rounded-md bg-gradient-to-br from-purple-200 to-purple-400" />}
                  {element.kind === 'subtitle' && <h4 className="mt-4 font-serif text-[18px] font-semibold">Modo de preparo</h4>}
                  {element.kind === 'text' && <p className="mt-3 text-[14px] leading-relaxed text-neutral-600">Misture a polpa de açaí com o leite condensado até ficar homogêneo. Acrescente os ovos um a um, batendo sempre, e por último a farinha peneirada com o fermento.</p>}
                </div>
                {slotsAt(element.selector, 'after').map((block) => <AdSlot key={block.id} block={block} />)}
              </div>
            ))}
            {visible.filter((block) => block.kind === 'content' && !PREVIEW_ELEMENTS.some((element) => element.selector === block.selector)).map((block) => (
              <p key={block.id} className="mt-3 rounded-md border border-dashed border-amber-400 bg-amber-50 px-3 py-2 text-[12px] text-amber-900">{tagBlockName(block)}: o elemento <span className="font-mono">{block.selector || '(vazio)'}</span> não existe nesta página, o bloco não entra.</p>
            ))}
          </article>
          {device === 'desktop' && <aside className="grid content-start gap-3" aria-hidden="true"><div className="h-4 w-20 rounded bg-neutral-200" />{[1, 2, 3].map((item) => <div key={item} className="h-16 rounded bg-neutral-100" />)}</aside>}
        </div>
        {interstitial && <div className="pointer-events-none absolute right-3 top-14 rounded-full bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-white">Intersticial na troca de página</div>}
        {anchor && <div className={cn('sticky z-10 grid h-14 place-items-center border-dashed border-sky-400 bg-sky-50 text-[12px] font-medium text-sky-800', anchor.edge === 'bottom' ? 'bottom-0 border-t-2' : 'top-0 border-b-2')}>Âncora · 320 × 50</div>}
        {fixed && fixed.edge === 'bottom' && <div className="sticky bottom-0 z-10 grid h-12 place-items-center border-t-2 border-dashed border-sky-400 bg-sky-50 text-[12px] font-medium text-sky-800">Fixo</div>}
      </div>
    </div>
  )
}

/** Campo de páginas: todas, só estas ou todas menos estas, com caminho e curinga. */
function TagPathsField({ block, change }: { block: TagBlock; change: (patch: Partial<TagBlock>) => void }) {
  const [text, setText] = useState('')
  /** Junta o caminho digitado à lista, sempre começando com barra. */
  const add = () => { const path = `/${text.trim().replace(/^https?:\/\/[^/]+/, '').replace(/^\/+/, '')}`; if (path !== '/' && !block.paths.includes(path)) change({ paths: [...block.paths, path] }); setText('') }
  return (
    <div className="grid gap-2">
      <TagSegmented label="Em que páginas" value={block.ruleMode} onChange={(ruleMode) => change({ ruleMode })} options={[['all', 'Todas'], ['include', 'Só estas'], ['exclude', 'Menos estas']]} />
      {block.ruleMode !== 'all' && <>
        <div className="flex gap-2"><Input aria-label="Caminho" className="h-9 font-mono text-[13px]" placeholder="/receitas/*" value={text} onChange={(event) => setText(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') { event.preventDefault(); add() } }} /><Button variant="outline" onClick={add} disabled={!text.trim()}>Adicionar</Button></div>
        <div className="flex flex-wrap gap-1.5">{block.paths.map((path) => <span key={path} className="inline-flex items-center gap-1 rounded border bg-muted px-2 py-0.5 font-mono text-[12px]">{path}<button aria-label={`Tirar ${path}`} onClick={() => change({ paths: block.paths.filter((item) => item !== path) })}><X className="h-3 w-3" /></button></span>)}</div>
        <p className="text-[12px] text-muted-foreground">Use * no fim para valer para tudo abaixo do caminho. Vale com ou sem www e com parâmetros na URL.</p>
      </>}
    </div>
  )
}

const TAG_KIND_ICON: Record<TagBlockKind, typeof Monitor> = { anchor: PanelBottom, interstitial: Maximize, fixed: PanelTop, content: TextQuote }
const TAG_REFRESH_OPTIONS: [number | null, string][] = [[null, 'Não'], [30, '30 s'], [45, '45 s'], [60, '60 s'], [90, '90 s'], [120, '120 s']]

/** Botões lado a lado para escolher uma opção, no lugar de rádios soltos. */
function TagSegmented<Value extends string | number | null>({ label, value, options, onChange }: { label: string; value: Value; options: [Value, string, (typeof Monitor)?][]; onChange: (value: Value) => void }) {
  return (
    <div role="radiogroup" aria-label={label} className="inline-flex w-fit max-w-full flex-wrap rounded-md border bg-muted p-0.5">
      {options.map(([option, text, Icon]) => (
        <button key={String(option)} role="radio" aria-checked={value === option} onClick={() => onChange(option)} className={cn('inline-flex h-8 items-center gap-1.5 rounded px-3 text-[13px] font-medium', value === option ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground')}>
          {Icon && <Icon className="h-3.5 w-3.5" />}{text}
        </button>
      ))}
    </div>
  )
}

/** Uma parte do cartão do bloco, com título curto e o controle embaixo. */
function TagBlockSection({ title, aside, children }: { title: string; aside?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="grid gap-2">
      <div className="flex items-baseline justify-between gap-2"><h4 className="text-[13px] font-medium">{title}</h4>{aside && <span className="text-[12px] text-muted-foreground">{aside}</span>}</div>
      {children}
    </section>
  )
}

/** O cartão de um bloco: fechado mostra o resumo; aberto, onde entra, aparelhos, páginas e anúncio. */
function TagBlockCard({ block, index, total, open, toggle, change, move, remove, picking, startPick, anchorEdge }: { block: TagBlock; index: number; total: number; open: boolean; toggle: () => void; change: (patch: Partial<TagBlock>) => void; move: (offset: number) => void; remove: () => void; picking: boolean; startPick: () => void; anchorEdge: 'top' | 'bottom' | null }) {
  const KindIcon = TAG_KIND_ICON[block.kind]
  const where = block.kind === 'content' ? (block.selector ? `${block.side === 'before' ? 'Antes de' : 'Depois de'} ${block.selector}` : 'Falta escolher onde entra') : block.kind === 'interstitial' ? 'Na troca de página' : block.edge === 'top' ? 'No topo da tela' : 'No rodapé da tela'
  const pages = block.ruleMode === 'all' ? 'Em todas' : `${block.ruleMode === 'include' ? 'Só em' : 'Fora de'} ${block.paths.length} ${block.paths.length === 1 ? 'caminho' : 'caminhos'}`
  const fixedClash = block.kind === 'fixed' && anchorEdge === block.edge
  const noDevice = !block.desktop && !block.mobile
  const problem = noDevice ? 'Ligue pelo menos um aparelho' : block.kind === 'content' && !block.selector ? 'Falta escolher onde entra' : fixedClash ? 'Do mesmo lado da âncora' : null
  return (
    <div className={cn('rounded-lg border bg-card transition-shadow', open && 'shadow-sm', picking && 'ring-2 ring-sky-500', problem && !open && 'border-warn/50')}>
      <div className="flex items-center gap-2 py-2.5 pl-3 pr-2">
        <button className="flex min-w-0 flex-1 items-center gap-3 text-left" onClick={toggle} aria-expanded={open}>
          <span className={cn('grid h-9 w-9 shrink-0 place-items-center rounded-md border', open ? 'bg-foreground text-background' : 'bg-muted text-muted-foreground')}><KindIcon className="h-4 w-4" /></span>
          <span className="min-w-0 flex-1">
            <span className="flex items-center gap-2"><span className="font-medium">{tagBlockName(block)}</span>{block.refresh && <span className="inline-flex items-center gap-0.5 text-[12px] text-muted-foreground"><RefreshCw className="h-3 w-3" />{block.refresh} s</span>}</span>
            <span className={cn('flex items-center gap-1 truncate text-[12px]', problem ? 'text-warn' : 'text-muted-foreground')}>{problem && <AlertTriangle className="h-3 w-3 shrink-0" />}<span className="truncate">{problem ?? where}</span></span>
          </span>
          <span className="flex shrink-0 items-center gap-1 text-muted-foreground" aria-label={[block.desktop && 'Computador', block.mobile && 'Celular'].filter(Boolean).join(' e ') || 'Nenhum aparelho'}>
            <Monitor className={cn('h-3.5 w-3.5', !block.desktop && 'opacity-25')} /><Smartphone className={cn('h-3.5 w-3.5', !block.mobile && 'opacity-25')} />
          </span>
        </button>
        <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" aria-label={`Ações do ${tagBlockName(block)}`}><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="text-[12px] font-normal text-muted-foreground">{index + 1}º a carregar</DropdownMenuLabel>
            <DropdownMenuItem disabled={index === 0} onSelect={() => move(-1)}><ChevronUp className="h-4 w-4" />Carregar antes</DropdownMenuItem>
            <DropdownMenuItem disabled={index === total - 1} onSelect={() => move(1)}><ChevronDown className="h-4 w-4" />Carregar depois</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-bad focus:text-bad" onSelect={remove}><Trash2 className="h-4 w-4" />Tirar bloco</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {open && (
        <div className="grid gap-5 border-t px-4 pb-4 pt-3">
          <p className="text-[12px] leading-snug text-muted-foreground">{TAG_KIND_HINT[block.kind]}</p>
          {block.kind !== 'interstitial' && <TagBlockSection title="Onde entra">
            {block.kind === 'content' && <>
              <TagSegmented label="Lado do elemento" value={block.side} onChange={(side) => change({ side })} options={[['before', 'Antes de'], ['after', 'Depois de']]} />
              <div className={cn('flex items-center rounded-md border bg-background focus-within:ring-2 focus-within:ring-ring', !block.selector && 'border-warn/60')}>
                <Input id={`${block.id}-selector`} aria-label="Elemento da página" className="h-9 flex-1 border-0 font-mono text-[13px] shadow-none focus-visible:ring-0" value={block.selector} onChange={(event) => change({ selector: event.target.value })} placeholder="article p:nth-of-type(2)" />
                <button onClick={startPick} className={cn('mr-1 inline-flex h-7 shrink-0 items-center gap-1.5 rounded px-2 text-[12px] font-medium', picking ? 'bg-sky-600 text-white' : 'text-muted-foreground hover:bg-muted hover:text-foreground')}><MousePointerClick className="h-3.5 w-3.5" />{picking ? 'Cancelar' : 'Escolher no site'}</button>
              </div>
              {picking ? <p className="flex items-center gap-2 rounded-md bg-sky-50 px-2.5 py-2 text-[12px] text-sky-800"><MousePointerClick className="h-3.5 w-3.5 shrink-0" />Clique no elemento da prévia ao lado. O bloco entra {block.side === 'before' ? 'antes' : 'depois'} dele.</p>
                : <p className="text-[12px] text-muted-foreground">{block.selector ? 'Seletor CSS do elemento. Dá para editar à mão.' : 'Escolha no site ou escreva o seletor CSS.'}</p>}
            </>}
            {(block.kind === 'anchor' || block.kind === 'fixed') && <>
              <TagSegmented label="Posição" value={block.edge} onChange={(edge) => change({ edge })} options={[['top', 'Topo', PanelTop], ['bottom', 'Rodapé', PanelBottom]]} />
              {fixedClash && <p className="flex items-center gap-1.5 text-[12px] text-warn"><AlertTriangle className="h-3.5 w-3.5" />A âncora já está {block.edge === 'top' ? 'no topo' : 'no rodapé'}. Troque o lado do fixo.</p>}
            </>}
          </TagBlockSection>}
          <TagBlockSection title="Aparelhos">
            <div className="grid grid-cols-2 gap-2">
              {([['desktop', 'Computador', Monitor], ['mobile', 'Celular e tablet', Smartphone]] as const).map(([key, text, Icon]) => (
                <button key={key} aria-pressed={block[key]} onClick={() => change({ [key]: !block[key] })} className={cn('flex h-10 min-w-0 items-center gap-2 rounded-md border px-3 text-[13px] font-medium', block[key] ? 'border-foreground' : 'text-muted-foreground hover:text-foreground')}>
                  <Icon className="h-4 w-4 shrink-0" /><span className="flex-1 truncate text-left">{text}</span>
                  <span className={cn('grid h-4 w-4 shrink-0 place-items-center rounded-sm border', block[key] ? 'border-foreground bg-foreground text-background' : 'bg-background')}>{block[key] && <Check className="h-3 w-3" />}</span>
                </button>
              ))}
            </div>
            {noDevice && <p className="flex items-center gap-1.5 text-[12px] text-warn"><AlertTriangle className="h-3.5 w-3.5" />Sem aparelho o bloco não aparece em lugar nenhum.</p>}
          </TagBlockSection>
          <TagBlockSection title="Páginas" aside={pages}><TagPathsField block={block} change={change} /></TagBlockSection>
          {block.kind === 'content' && (
            <TagBlockSection title="Atualizar o anúncio" aside={block.refresh ? 'Até 5 vezes por página' : undefined}>
              <TagSegmented label="Atualizar o anúncio" value={block.refresh} onChange={(refresh) => change({ refresh })} options={TAG_REFRESH_OPTIONS} />
              <p className="text-[12px] text-muted-foreground">{block.refresh ? `Troca o anúncio a cada ${block.refresh} s com o bloco à vista.` : 'O anúncio fica o mesmo até a pessoa sair da página.'}</p>
            </TagBlockSection>
          )}
          {block.kind === 'content' && (
            <details className="group rounded-md border px-3 py-2.5" open={!!block.mgidArticle}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-[13px] font-medium"><span>Quando ficar sem anúncio {block.mgidArticle && <span className="font-normal text-muted-foreground">· artigo MGID</span>}</span><ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" /></summary>
              <div className="grid gap-1.5 pt-3">
                <Label htmlFor={`${block.id}-mgid`} className="text-[12px] font-normal text-muted-foreground">Mostrar um artigo MGID no lugar (ID do widget)</Label>
                <Input id={`${block.id}-mgid`} className="h-9 font-mono text-[13px]" value={block.mgidArticle} onChange={(event) => change({ mgidArticle: event.target.value.replace(/\D/g, '') })} placeholder="Opcional" />
                <p className="text-[12px] text-muted-foreground">Precisa da tag MGID ligada em Integrações.</p>
              </div>
            </details>
          )}
        </div>
      )}
    </div>
  )
}

/** A ad tag de um site: blocos com o site ao lado, integrações, saúde e versões. */
function AdTagEditScreen({ initial, staff, back, save, metrics }: { initial: ProtoAdTag; staff: boolean; back: () => void; save: (tag: ProtoAdTag) => void; metrics: () => void }) {
  const live = initial.versions[0]
  const [tag, setTag] = useState(initial)
  const [blocks, setBlocks] = useState<TagBlock[]>(initial.draft?.blocks ?? live?.blocks ?? [])
  const [settings, setSettings] = useState<TagSettings>(initial.draft?.settings ?? live?.settings ?? DEFAULT_TAG_SETTINGS)
  const [tab, setTab] = useState<'blocks' | 'integrations' | 'versions'>('blocks')
  const [openId, setOpenId] = useState<string | null>(blocks.find((block) => block.kind === 'content')?.id ?? null)
  const [pickingId, setPickingId] = useState<string | null>(null)
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop')
  const [path, setPath] = useState('/receitas/bolo-de-acai')
  const [publishOpen, setPublishOpen] = useState(false)
  const [installOpen, setInstallOpen] = useState(false)
  const [note, setNote] = useState('')
  const site = TAG_SITES.find((item) => item.domain === tag.domain)!
  const changes = tagChanges(tag.versions[0], blocks, settings)
  const anchorEdge = blocks.find((block) => block.kind === 'anchor')?.edge ?? null
  const problems = blocks.filter((block) => (!block.desktop && !block.mobile) || (block.kind === 'content' && !block.selector) || (block.kind === 'fixed' && block.edge === anchorEdge)).length
  const usedContent = blocks.filter((block) => block.kind === 'content').map((block) => block.number)
  const freeContent = Array.from({ length: 9 }, (_item, index) => index + 1).filter((number) => !usedContent.includes(number))
  const day = settings.adUnitDay === 'latest' ? site.days[0] : settings.adUnitDay
  const status = tagStatus(tag)
  /** Muda um bloco pelo id. */
  const changeBlock = (id: string, patch: Partial<TagBlock>) => setBlocks((current) => current.map((block) => (block.id === id ? { ...block, ...patch } : block)))
  /** Troca o bloco de lugar na ordem de carregamento. */
  const moveBlock = (index: number, offset: number) => setBlocks((current) => { const next = [...current]; const [block] = next.splice(index, 1); next.splice(index + offset, 0, block); return next })
  /** Põe um bloco novo no fim da lista e abre para editar. */
  const addBlock = (kind: TagBlockKind) => { const block = newTagBlock(kind, kind === 'content' ? freeContent[0] : 0); if (kind === 'fixed' && anchorEdge === 'top') block.edge = 'bottom'; setBlocks((current) => [...current, block]); setOpenId(block.id) }
  /** Publica o rascunho como versão nova: vai para o site em até um minuto. */
  const publish = () => {
    const version: TagVersion = { number: (tag.versions[0]?.number ?? 0) + 1, by: staff ? 'Rafael Lima (Groone)' : 'Marina Costa', at: 'Agora', note: note.trim() || changes[0] || 'Sem descrição', blocks, settings }
    const next = { ...tag, versions: [version, ...tag.versions], draft: null }
    setTag(next); save(next); setPublishOpen(false); setNote('')
    toast.success(`Versão ${version.number} publicada`, { description: `Os visitantes de ${tag.domain} recebem a versão nova em até um minuto.` })
  }
  /** Leva uma versão antiga para o rascunho; só vai ao ar ao publicar. */
  const restore = (version: TagVersion) => { setBlocks(version.blocks); setSettings(version.settings); setTab('blocks'); toast.success(`Versão ${version.number} no rascunho`, { description: 'Confira e publique para voltar o site para ela.' }) }
  /** Muda uma configuração geral. */
  const changeSettings = (patch: Partial<TagSettings>) => setSettings((current) => ({ ...current, ...patch }))
  return (
    <>
      <PageHeader title={tag.domain} sub={staff ? `${tag.client} · Ad tag` : 'Ad tag do site'}
        back={<button onClick={() => { save({ ...tag, draft: changes.length ? { blocks, settings } : null }); back() }} className="inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft className="h-3.5 w-3.5" />Ad tags</button>}
        actions={<>
          {tag.versions.length > 0 && <Button variant="outline" onClick={() => { save({ ...tag, draft: changes.length ? { blocks, settings } : null }); metrics() }}><BarChart3 className="h-4 w-4" />Métricas</Button>}
          <Button variant="outline" onClick={() => setInstallOpen(true)}><Code2 className="h-4 w-4" />Instalar</Button>
          <Button disabled={!changes.length || problems > 0} onClick={() => setPublishOpen(true)}>{changes.length ? `Publicar ${changes.length} ${changes.length === 1 ? 'alteração' : 'alterações'}` : 'Nada para publicar'}</Button>
          <DropdownMenu><DropdownMenuTrigger asChild><Button variant="outline" size="icon" aria-label="Mais ações"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem disabled={!tag.versions.length} onSelect={() => { const next = { ...tag, paused: !tag.paused }; setTag(next); save(next); toast.success(next.paused ? 'Tag pausada' : 'Tag ativa de novo', { description: next.paused ? 'O site para de mostrar os anúncios da tag em até um minuto.' : 'Os anúncios voltam em até um minuto.' }) }}>{tag.paused ? 'Ativar a tag' : 'Pausar a tag'}</DropdownMenuItem>
              <DropdownMenuItem disabled={!changes.length} onSelect={() => { setBlocks(live?.blocks ?? []); setSettings(live?.settings ?? DEFAULT_TAG_SETTINGS) }}>Descartar o rascunho</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>} />
      <div className="border-b bg-background">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-6 gap-y-2 px-4 sm:px-6">
          <nav className="-mb-px flex max-w-full gap-1 overflow-x-auto" aria-label="Partes da ad tag">
            {([['blocks', 'Blocos'], ['integrations', 'Integrações'], ['versions', 'Versões']] as const).map(([id, label]) => (
              <button key={id} onClick={() => setTab(id)} className={cn('border-b-2 px-3 py-3 text-[14px]', tab === id ? 'border-foreground font-medium text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground')} aria-current={tab === id ? 'page' : undefined}>{label}</button>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3 py-2 text-[13px]"><Status tone={status.tone}>{status.label}</Status>{changes.length > 0 && <Badge tone="ochre">Rascunho com {changes.length} {changes.length === 1 ? 'alteração' : 'alterações'}</Badge>}</div>
        </div>
      </div>
      <Body>
        {tab === 'blocks' && (
          <div className="grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)]">
            <div className="grid grid-cols-[minmax(0,1fr)] content-start gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2"><h2 className="text-[15px] font-semibold">Blocos <span className="font-normal text-muted-foreground">na ordem de carregamento</span></h2>
                <DropdownMenu><DropdownMenuTrigger asChild><Button size="sm" variant="outline"><Plus className="h-4 w-4" />Bloco</Button></DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem disabled={!freeContent.length} onSelect={() => addBlock('content')}>Conteúdo {freeContent[0] ?? ''}</DropdownMenuItem>
                    {(['anchor', 'interstitial', 'fixed'] as const).map((kind) => <DropdownMenuItem key={kind} disabled={blocks.some((block) => block.kind === kind)} onSelect={() => addBlock(kind)}>{TAG_KIND_LABEL[kind]}</DropdownMenuItem>)}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              {blocks.map((block, index) => (
                <TagBlockCard key={block.id} block={block} index={index} total={blocks.length} open={openId === block.id} toggle={() => setOpenId(openId === block.id ? null : block.id)} change={(patch) => changeBlock(block.id, patch)} move={(offset) => moveBlock(index, offset)}
                  remove={() => setBlocks((current) => current.filter((item) => item.id !== block.id))} picking={pickingId === block.id} startPick={() => setPickingId(pickingId === block.id ? null : block.id)} anchorEdge={block.kind === 'fixed' ? anchorEdge : null} />
              ))}
              {!blocks.length && <div className="rounded-lg border border-dashed bg-card p-8 text-center text-[14px] text-muted-foreground">Nenhum bloco ainda. Comece pelo Conteúdo 1 e pela âncora.</div>}
              <p className="text-[12px] text-muted-foreground">Os primeiros da lista carregam antes. Ad units do dia {formatBlockDate(day)}{settings.adUnitDay === 'latest' ? ' (os mais recentes)' : ''}, por exemplo <span className="font-mono">{blocks[0] ? tagAdUnit(tag.domain, blocks[0], device === 'desktop' ? 'Desktop' : 'Mobile', day) : '—'}</span>.</p>
            </div>
            <div className="order-first grid min-w-0 grid-cols-[minmax(0,1fr)] content-start gap-3 lg:sticky lg:top-[124px] lg:order-none lg:self-start">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex rounded-md border bg-background p-0.5">
                  {(['desktop', 'mobile'] as const).map((item) => <button key={item} onClick={() => setDevice(item)} className={cn('inline-flex h-8 items-center gap-1.5 rounded px-3 text-[13px]', device === item ? 'bg-foreground text-background' : 'text-muted-foreground')}>{item === 'desktop' ? <Monitor className="h-4 w-4" /> : <Smartphone className="h-4 w-4" />}{item === 'desktop' ? 'Computador' : 'Celular'}</button>)}
                </div>
                <div className="flex min-w-[220px] flex-1 items-center rounded-md border bg-background focus-within:ring-2 focus-within:ring-ring"><span className="shrink-0 border-r bg-muted px-3 py-1.5 font-mono text-[12px] text-muted-foreground">{tag.domain}</span><input aria-label="Página para ver" value={path} onChange={(event) => setPath(event.target.value.startsWith('/') ? event.target.value : `/${event.target.value}`)} className="h-8 min-w-0 flex-1 bg-transparent px-3 font-mono text-[12px] outline-none" /></div>
              </div>
              {pickingId && <div className="flex items-center gap-2 rounded-md border border-sky-300 bg-sky-50 px-3 py-2 text-[13px] text-sky-900"><MousePointerClick className="h-4 w-4" />Clique no elemento onde entra o {tagBlockName(blocks.find((block) => block.id === pickingId)!)}.<button className="ml-auto underline" onClick={() => setPickingId(null)}>Cancelar</button></div>}
              <TagSitePreview compact domain={tag.domain} blocks={blocks} device={device} path={path} picking={pickingId} onPick={(selector) => { changeBlock(pickingId!, { selector }); setPickingId(null); toast.success('Elemento escolhido', { description: selector }) }} />
              <p className="text-[12px] text-muted-foreground">A página vem do site (sem os scripts dele) e os blocos são desenhados pelo mesmo código da tag: o que você vê aqui é o que vai ao ar.</p>
            </div>
          </div>
        )}
        {tab === 'integrations' && (
          <div className="grid gap-6 lg:grid-cols-2">
            <Card title="Geral" desc="Valem para todos os blocos da tag.">
              <div className="grid gap-5">
                <label className="flex items-start gap-3 text-[14px]"><Switch checked={settings.lazyLoad} onCheckedChange={(lazyLoad) => changeSettings({ lazyLoad })} /><span><span className="block font-medium">Carregamento lento</span><span className="text-muted-foreground">Os blocos de conteúdo só carregam perto de aparecer na tela.</span></span></label>
                <label className="flex items-start gap-3 text-[14px]"><Switch checked={settings.loader} onCheckedChange={(loader) => changeSettings({ loader })} /><span><span className="block font-medium">Tela de carregamento e adblock</span><span className="text-muted-foreground">Mostra o logo enquanto os anúncios carregam e pede para desligar o bloqueador de anúncios.</span></span></label>
                <Field id="tag-day" label="Ad units" hint="Com “Os mais recentes”, blocos novos criados no GAM entram sozinhos, sem publicar de novo.">
                  <Select value={settings.adUnitDay} onValueChange={(adUnitDay) => changeSettings({ adUnitDay })}>
                    <SelectTrigger id="tag-day"><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="latest">Os mais recentes ({formatBlockDate(site.days[0])})</SelectItem>{site.days.map((item) => <SelectItem key={item} value={item}>Fixar em {formatBlockDate(item)}</SelectItem>)}</SelectContent>
                  </Select>
                </Field>
              </div>
            </Card>
            <Card title="Google Analytics" desc="A tag carrega o Analytics se o site ainda não tiver.">
              <Field id="tag-ga" label="ID da métrica" error={settings.analyticsId !== '' && !/^G-[A-Z0-9]{6,12}$/.test(settings.analyticsId) && 'O ID começa com G- seguido de letras e números.'}>
                <Input id="tag-ga" className="h-9 font-mono text-[13px]" value={settings.analyticsId} onChange={(event) => changeSettings({ analyticsId: event.target.value.toUpperCase().trim() })} placeholder="G-XXXXXXXXXX" />
              </Field>
            </Card>
            <Card title="MGID" desc="Widgets da MGID no site. Deixe vazio o que não usa.">
              <div className="grid gap-4 sm:grid-cols-2">
                {([['mgidTagId', 'Tag do site'], ['mgidSmartWidget', 'Smart widget'], ['mgidBackButton', 'Back button'], ['mgidSidebar', 'Sidebar']] as const).map(([key, label]) => (
                  <Field key={key} id={`tag-${key}`} label={label}><Input id={`tag-${key}`} className="h-9 font-mono text-[13px]" disabled={key !== 'mgidTagId' && !settings.mgidTagId} value={settings[key]} onChange={(event) => changeSettings({ [key]: event.target.value.replace(/\D/g, '') })} placeholder="ID" /></Field>
                ))}
              </div>
            </Card>
            <Card title="Reward e regras de preço">
              <div className="grid gap-3 text-[14px]">
                <p className="flex items-start gap-2"><Gift className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" /><span>Os rewards de {tag.domain} entram pela tag, sem outro script. Se o Google mostrar o offerwall, o reward espera.</span></p>
                <p className="flex items-start gap-2 text-muted-foreground"><Lock className="mt-0.5 h-4 w-4 shrink-0" /><span>Regras de preço (floor por bloco): chegam depois da ad tag.</span></p>
              </div>
            </Card>
          </div>
        )}
        {tab === 'versions' && (
          <Table min={720}>
            <thead><tr><th className={th}>Versão</th><th className={th}>O que mudou</th><th className={th}>Publicada por</th><th className={th}>Quando</th><th className={th}><span className="sr-only">Ação</span></th></tr></thead>
            <tbody>
              {tag.versions.map((version, index) => (
                <tr key={version.number}>
                  <td className={td}><span className="font-medium tnum">{version.number}</span>{index === 0 && <span className="ml-2"><Badge>No ar</Badge></span>}</td>
                  <td className={td}>{version.note}<span className="block text-[12px] text-muted-foreground">{version.blocks.length} blocos</span></td>
                  <td className={td}>{version.by}</td>
                  <td className={cn(td, 'whitespace-nowrap tnum text-[13px] text-muted-foreground')}>{version.at}</td>
                  <td className={cn(td, 'text-right')}>{index > 0 && <Button size="sm" variant="outline" onClick={() => restore(version)}><History className="h-4 w-4" />Voltar para esta</Button>}</td>
                </tr>
              ))}
              {!tag.versions.length && <tr><td className={cn(td, 'py-12 text-center text-muted-foreground')} colSpan={5}>Nenhuma versão publicada. O que você monta fica no rascunho até publicar.</td></tr>}
            </tbody>
          </Table>
        )}
        <InstallDialog open={installOpen} onOpenChange={setInstallOpen} />
        <Dialog open={publishOpen} onOpenChange={setPublishOpen}>
          <DialogContent className="max-w-[520px]">
            <DialogHeader><DialogTitle>Publicar a versão {(tag.versions[0]?.number ?? 0) + 1}</DialogTitle><DialogDescription>Vai para {tag.domain} em até um minuto. Dá para voltar a qualquer versão depois.</DialogDescription></DialogHeader>
            <ul className="grid max-h-[220px] gap-1.5 overflow-y-auto rounded-md border bg-muted p-3 text-[14px]">{changes.map((change) => <li key={change}>• {change}</li>)}</ul>
            <Field id="tag-note" label="Descrição da versão" hint="Opcional. Aparece na lista de versões."><Input id="tag-note" value={note} onChange={(event) => setNote(event.target.value)} placeholder={changes[0]} /></Field>
            <DialogFooter><Button variant="outline" onClick={() => setPublishOpen(false)}>Cancelar</Button><Button onClick={publish}>Publicar</Button></DialogFooter>
          </DialogContent>
        </Dialog>
      </Body>
    </>
  )
}

/** Métricas da ad tag de um site, numa página própria como as do reward. */
function AdTagMetricsScreen({ tag, staff, back, edit }: { tag: ProtoAdTag; staff: boolean; back: () => void; edit: () => void }) {
  const [period, setPeriod] = useState<string>('30')
  const [series, setSeries] = useState<keyof Omit<RewardDay, 'day'>>('opens')
  const seed = tag.domain.length
  const days: RewardDay[] = Array.from({ length: 30 }, (_item, index) => {
    const opens = tag.lastSeen === null ? 0 : Math.round(tag.pages24h * (0.82 + seeded(seed * 100 + index) * 0.3))
    const clicks = Math.round(opens * (0.84 + seeded(seed * 200 + index) * 0.08))
    const completed = Math.round(clicks * (0.66 + seeded(seed * 300 + index) * 0.1))
    return { day: `${String(((index + 10) % 30) + 1).padStart(2, '0')}/${index < 20 ? '10' : '11'}`, opens, clicks, completed }
  }).slice(-Number(period))
  const views = days.reduce((total, day) => total + day.opens, 0)
  const filled = tag.health.length ? Math.round(tag.health.reduce((total, row) => total + row.filled, 0) / tag.health.length) : 0
  const viewable = tag.health.length ? Math.round(tag.health.reduce((total, row) => total + row.viewable, 0) / tag.health.length) : 0
  const tiles: [string, string, string][] = [
    ['Visto por último', tag.lastSeen ?? 'Nunca', tag.paused ? 'Pausada: os anúncios não carregam.' : 'A tag avisa a cada página vista.'],
    ['Versão no site', tag.seenVersion ? `Versão ${tag.seenVersion}` : '—', tag.seenVersion === tag.versions[0]?.number ? 'É a versão publicada.' : `A publicada é a ${tag.versions[0]?.number ?? '—'}.`],
    ['Páginas vistas', int.format(views), 'Contadas pela própria tag no período.'],
    ['Blocos com anúncio', `${filled}%`, `Média dos blocos · ${viewable}% visíveis.`],
  ]
  return (
    <>
      <PageHeader title={tag.domain} sub={staff ? `${tag.client} · Métricas da ad tag` : 'Métricas da ad tag'}
        back={<button onClick={back} className="inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft className="h-3.5 w-3.5" />Ad tags</button>}
        actions={<><Select value={period} onValueChange={setPeriod}><SelectTrigger aria-label="Período" className="h-9 w-[180px]"><SelectValue /></SelectTrigger><SelectContent>{REWARD_PERIODS.map(([value, label]) => <SelectItem key={value} value={value}>{label}</SelectItem>)}</SelectContent></Select><Button variant="outline" onClick={edit}><Pencil className="h-4 w-4" />Editar</Button></>} />
      <Body>
        {tag.paused && <div className="flex items-start gap-2 rounded-md border border-ochre/40 bg-ochre-soft px-3 py-2 text-[13px] text-ochre"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />Esta tag está pausada: os números são de quando ela estava ativa.</div>}
        {tag.lastSeen === null ? (
          <Card title="A tag ainda não rodou no site" desc="Assim que a primeira visita carregar a tag, os números aparecem aqui. Confira se a linha da tag está no <head> do site." />
        ) : <>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {tiles.map(([label, value, note]) => (
              <div key={label} className="rounded-lg border bg-card p-4">
                <div className="text-[13px] text-muted-foreground">{label}</div>
                <div className="mt-1 text-[26px] font-semibold tracking-[-0.03em] tnum">{value}</div>
                <div className="mt-1 text-[12px] leading-snug text-muted-foreground">{note}</div>
              </div>
            ))}
          </div>
          <Card title="Por dia">
            <div className="mb-4 inline-flex flex-wrap rounded-md border bg-muted p-0.5" role="radiogroup" aria-label="Métrica do gráfico">
              {([['opens', 'Páginas vistas'], ['clicks', 'Blocos com anúncio'], ['completed', 'Blocos visíveis']] as const).map(([value, label]) => <button key={value} role="radio" aria-checked={series === value} onClick={() => setSeries(value)} className={cn('h-8 rounded px-3 text-[13px] font-medium', series === value ? 'bg-background shadow-sm' : 'text-muted-foreground hover:text-foreground')}>{label}</button>)}
            </div>
            <RewardDailyChart days={days} series={series} />
          </Card>
          <Table min={640}>
            <thead><tr><th className={th}>Bloco</th><th className={cn(th, 'text-right')}>Páginas com o bloco</th><th className={cn(th, 'text-right')}>Com anúncio</th><th className={cn(th, 'text-right')}>Visíveis</th></tr></thead>
            <tbody>{tag.health.map((row) => (
              <tr key={row.block}><td className={td}>{row.block}</td><td className={cn(td, 'text-right tnum')}>{int.format(Math.round((row.served * views) / Math.max(tag.pages24h, 1) / 30))}</td><td className={cn(td, 'text-right tnum', row.filled < 50 && 'text-bad')}>{row.filled}%</td><td className={cn(td, 'text-right tnum')}>{row.viewable}%</td></tr>
            ))}</tbody>
          </Table>
          {tag.health.some((row) => row.filled < 50) && <p className="flex items-center gap-2 text-[13px] text-muted-foreground"><AlertTriangle className="h-4 w-4 text-warn" />Bloco com menos da metade das páginas preenchidas: confira o lugar na página ou tire o bloco.</p>}
        </>}
      </Body>
    </>
  )
}

export default function App() {
  const initial = typeof location !== 'undefined' && isScreen(location.hash.slice(1)) ? (location.hash.slice(1) as Screen) : 'equipe'
  const [screen, setScreen] = useState<Screen>(initial)
  const [lang, setLang] = useState<Lang>('pt')
  const [members, setMembers] = useState(INITIAL_MEMBERS)
  const [tasks, setTasks] = useState<ProtoTask[]>(INITIAL_TASKS)
  const [taskId, setTaskId] = useState(41)
  const [checklists, setChecklists] = useState<ProtoSiteChecklist[]>(INITIAL_SITE_CHECKLISTS)
  const [checklistId, setChecklistId] = useState(1)
  const [checkItems, setCheckItems] = useState<ProtoCheckItem[]>(INITIAL_CHECK_ITEMS)
  const [gamRuns, setGamRuns] = useState<GamRun[]>(INITIAL_GAM_RUNS)
  const [gamRunId, setGamRunId] = useState(12)
  const [rewards, setRewards] = useState<ProtoReward[]>(INITIAL_REWARDS)
  const [rewardDraft, setRewardDraft] = useState<ProtoReward>(INITIAL_REWARDS[0])
  const [accent, setAccent] = useState('padrao')
  const [theme, setTheme] = useState(() => (typeof location !== 'undefined' && new URLSearchParams(location.search).get('tema')) || 'system')
  const [groups, setGroups] = useState(INITIAL_GROUPS)
  const [groupId, setGroupId] = useState('trafego')
  const [image, setImage] = useState<string | null>(null)
  const [reports, setReports] = useState(INITIAL_REPORTS)
  const [customs, setCustoms] = useState(INITIAL_CUSTOMS)
  const [pinned, setPinned] = useState<string[]>(['r2'])
  const [viewId, setViewId] = useState('r1')
  const [draft, setDraft] = useState<ReportDraft>(() => ({ ...INITIAL_REPORTS[1] }))
  const [invoices, setInvoices] = useState(INITIAL_INVOICES)
  const [services, setServices] = useState(INITIAL_SERVICES)
  const [payee, setPayee] = useState(INITIAL_PAYEE)
  const [invoiceView, setInvoiceView] = useState<{ id: number; from: 'mine' | 'all' }>({ id: 1186, from: 'all' })
  const viewReport = (id: string) => { setViewId(id); go('relatorio') }
  const openReport = (id: string | null) => { setDraft(id ? { ...reports.find((r) => r.id === id)! } : blank()); go('construtor') }
  const openTemplate = (key: string) => { const { key: _key, desc: _desc, ...tpl } = TEMPLATES.find((x) => x.key === key)!; setDraft({ ...tpl, id: null, owner: ME, updated: 'Agora' }); go('construtor') }
  const saveReport = (saved: ReportDraft) => {
    const report = saved.id ? saved : { ...saved, id: `r${Date.now()}`, updated: 'Agora' }
    setReports(reports.some((r) => r.id === report.id) ? reports.map((r) => (r.id === report.id ? report : r)) : [report, ...reports])
  }
  const openGroup = (id: string) => { setGroupId(id); go(id === 'parcerias' ? 'grupoinativo' : 'grupo') }
  const t: T = (k) => translate(lang, k)
  /** Abre o reward (ou um novo) na edição do painel do cliente ou do interno. */
  /** Abre as métricas de um reward no painel do cliente ou do interno. */
  const openRewardMetrics = (id: number, staff: boolean) => { setRewardDraft(rewards.find((item) => item.id === id)!); go(staff ? 'rewardmetricasinterno' : 'rewardmetricas') }
  const openReward = (id: number | null, staff: boolean) => { setRewardDraft(id ? rewards.find((item) => item.id === id)! : blankReward(REWARD_SITES.find((site) => staff || site.client === MY_CLIENT)!)); go(staff ? 'rewardinterno' : 'reward') }
  const [adTags, setAdTags] = useState(INITIAL_AD_TAGS)
  const [adTagDomain, setAdTagDomain] = useState('acai.com.br')
  /** Abre a ad tag do site (ou começa uma) no painel do cliente ou no interno. */
  const openAdTagMetrics = (domain: string, staff: boolean) => { setAdTagDomain(domain); go(staff ? 'adtagmetricasinterno' : 'adtagmetricas') }
  const openAdTag = (domain: string, staff: boolean) => { if (!adTags.some((item) => item.domain === domain)) { const site = TAG_SITES.find((item) => item.domain === domain)!; setAdTags((current) => [...current, { domain, client: site.client, paused: false, draft: null, versions: [], lastSeen: null, seenVersion: null, pages24h: 0, health: [] }]) } setAdTagDomain(domain); go(staff ? 'adtaginterno' : 'adtag') }
  /** Grava o reward novo ou editado. */
  const saveReward = (saved: ProtoReward) => setRewards((current) => (saved.id ? current.map((item) => (item.id === saved.id ? saved : item)) : [{ ...saved, id: Math.max(...current.map((item) => item.id)) + 1 }, ...current]))

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
  const invoiceState: InvoiceState = { invoices, setInvoices, services, setServices, payee, setPayee, go, open: (id, from) => { setInvoiceView({ id, from }); go('invoice') } }
  const auth = screen === 'login' || screen === 'convite' || screen === 'construtor'
  const body = (() => {
    switch (screen) {
      case 'login': return <Login t={t} go={go} />
      case 'convite': return <Invite t={t} go={go} />
      case 'inicio': return <HomeScreen t={t} go={go} members={members} />
      case 'desempenho': return <PerformanceScreen />
      case 'visitas': return <PageViewsScreen />
      case 'relatorios': return <ReportsScreen reports={reports} setReports={setReports} customs={customs} pinned={pinned} setPinned={setPinned} view={viewReport} edit={openReport} openTemplate={openTemplate} />
      case 'relatorio': {
        const report = reports.find((r) => r.id === viewId) ?? reports[0]
        return <ReportViewScreen key={report.id} report={report} customs={customs} pinned={pinned.includes(report.id!)} onPin={() => setPinned(pinned.includes(report.id!) ? pinned.filter((p) => p !== report.id) : [...pinned, report.id!])} onBack={() => go('relatorios')} onEdit={() => openReport(report.id)} onDuplicate={() => { const copy = { ...report, id: `r${Date.now()}`, name: `${report.name} (cópia)`, owner: ME, visibility: 'private' as Visibility, roles: [], updated: 'Agora' }; setReports([copy, ...reports]); setDraft(copy); go('construtor') }} />
      }
      case 'construtor': return <ReportBuilderScreen key={`${draft.id}-${draft.name}`} initial={draft} customs={customs} setCustoms={setCustoms} onBack={() => (draft.id ? viewReport(draft.id) : go('relatorios'))} onSave={saveReport} />
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
      case 'minhasinvoices': return <MyInvoicesScreen state={invoiceState} />
      case 'invoice': return <InvoiceScreen key={invoiceView.id} state={invoiceState} id={invoiceView.id} from={invoiceView.from} />
      case 'invoices': return <InvoicesScreen state={invoiceState} />
      case 'servicosinvoice': return <InvoiceServicesScreen state={invoiceState} />
      case 'modelosdash': return <DashboardTemplatesScreen />
      case 'tarefas': return <TasksScreen tasks={tasks} setTasks={setTasks} open={(taskId) => { setTaskId(taskId); go('tarefa') }} />
      case 'checklists': return <ChecklistsScreen checklists={checklists} items={checkItems} open={(checklistId) => { setChecklistId(checklistId); go('checklist') }} openItems={() => go('checklistitens')} />
      case 'checklist': { const checklist = checklists.find((item) => item.id === checklistId) ?? checklists[0]; return <ChecklistScreen key={checklist.id} checklist={checklist} items={checkItems} update={(next) => setChecklists(checklists.map((item) => (item.id === next.id ? next : item)))} back={() => go('checklists')} /> }
      case 'checklistitens': return <ChecklistItemsScreen items={checkItems} setItems={setCheckItems} back={() => go('checklists')} />
      case 'ferramentasgam': return <GamToolsScreen runs={gamRuns} start={(run) => setGamRuns((current) => [run, ...current])} open={(runId) => { setGamRunId(runId); go('execucaogam') }} />
      case 'execucaogam': { const run = gamRuns.find((item) => item.id === gamRunId) ?? gamRuns[0]; return <GamRunScreen key={run.id} run={run} update={(next) => setGamRuns((current) => current.map((item) => (item.id === next.id ? next : item)))} back={() => go('ferramentasgam')} /> }
      case 'rewards': return <RewardsScreen rewards={rewards} staff={false} open={(id) => openReward(id, false)} metrics={(id) => openRewardMetrics(id, false)} />
      case 'rewardsinterno': return <RewardsScreen rewards={rewards} staff open={(id) => openReward(id, true)} metrics={(id) => openRewardMetrics(id, true)} />
      case 'reward': case 'rewardinterno': { const staff = screen === 'rewardinterno'; return <RewardEditScreen key={`${rewardDraft.id}-${screen}`} initial={rewardDraft} rewards={rewards} staff={staff} back={() => go(staff ? 'rewardsinterno' : 'rewards')} save={saveReward} remove={(id) => setRewards((current) => current.filter((item) => item.id !== id))} metrics={() => openRewardMetrics(rewardDraft.id, staff)} /> }
      case 'rewardmetricas': case 'rewardmetricasinterno': { const staff = screen === 'rewardmetricasinterno'; return <RewardMetricsScreen key={rewardDraft.id} reward={rewardDraft} staff={staff} back={() => go(staff ? 'rewardsinterno' : 'rewards')} edit={() => openReward(rewardDraft.id, staff)} /> }
      case 'adtags': return <AdTagsScreen tags={adTags} staff={false} open={(domain) => openAdTag(domain, false)} metrics={(domain) => openAdTagMetrics(domain, false)} />
      case 'adtagsinterno': return <AdTagsScreen tags={adTags} staff open={(domain) => openAdTag(domain, true)} metrics={(domain) => openAdTagMetrics(domain, true)} />
      case 'adtag': case 'adtaginterno': { const staff = screen === 'adtaginterno'; const tag = adTags.find((item) => item.domain === adTagDomain) ?? adTags[0]; return <AdTagEditScreen key={`${tag.domain}-${screen}`} initial={tag} staff={staff} back={() => go(staff ? 'adtagsinterno' : 'adtags')} save={(next) => setAdTags((current) => current.map((item) => (item.domain === next.domain ? next : item)))} metrics={() => openAdTagMetrics(tag.domain, staff)} /> }
      case 'adtagmetricas': case 'adtagmetricasinterno': { const staff = screen === 'adtagmetricasinterno'; const tag = adTags.find((item) => item.domain === adTagDomain) ?? adTags[0]; return <AdTagMetricsScreen key={tag.domain} tag={tag} staff={staff} back={() => go(staff ? 'adtagsinterno' : 'adtags')} edit={() => openAdTag(tag.domain, staff)} /> }
      case 'tarefa': { const task = tasks.find((item) => item.id === taskId) ?? tasks[0]; return <TaskScreen key={task.id} task={task} update={(next) => setTasks(tasks.map((item) => (item.id === next.id ? next : item)))} back={() => go('tarefas')} /> }
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
      <Toaster position="bottom-right" theme={theme === 'system' ? 'system' : theme === 'groone' ? 'dark' : (theme as 'light' | 'dark')} toastOptions={{ className: 'font-sans' }} />
    </div>
  )
}
