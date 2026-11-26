/* Integração com o HubSpot (decisão 22): o escopo aprovado (sem invoices e sem lista de chamados: o atendimento é pelo WhatsApp).
   Do HubSpot para o Avant só vem o que o Avant não tem; clientes, networks, contratos e métricas só vão. */
import { useEffect, useMemo, useState } from 'react'
import { toast } from 'sonner'
import { AlertTriangle, ArrowRight, Code2, Gift, BookOpen, CalendarClock, CalendarDays, Check, CheckCircle2, ChevronRight, CircleDollarSign, ClipboardCheck, ExternalLink, Filter, LayoutGrid, List, ListChecks, Loader2, Mail, NotebookPen, Eye, ImagePlus, Phone, Plus, RefreshCw, Search, Send, Trash2, SmilePlus, ThumbsDown, ThumbsUp, TrendingDown, UserPlus, Video, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { Avatar, Badge, Body, Card, Field, PageHeader, Status } from './App'

type Go = (screen: string) => void
type Tone = 'ok' | 'warn' | 'bad' | 'neutral' | 'ochre'

const th = 'px-4 py-3 text-left text-[12px] font-medium uppercase tracking-[0.04em] text-muted-foreground'
const td = 'px-4 py-3 align-middle'

/** Entrada com atraso em cascata: cada card sobe e aparece um pouco depois do anterior. */
function rise(index: number, extra?: string) {
  return { className: cn('animate-in fade-in slide-in-from-bottom-2 fill-mode-both duration-500', extra), style: { animationDelay: `${index * 60}ms` } }
}

/** Card que entra com a animação em cascata e sobe de leve no hover. */
function RiseCard({ index, className, ...props }: React.ComponentProps<typeof Card> & { index: number }) {
  const motion = rise(index)
  return <div className={cn(motion.className, className)} style={motion.style}><Card {...props} className="h-full transition-[box-shadow,transform] duration-200 hover:-translate-y-px hover:shadow-sm" /></div>
}

/** O selo laranja do HubSpot, para dizer de onde vem cada dado. */
function HubspotMark({ size = 16 }: { size?: number }) {
  return (
    <span className="inline-grid shrink-0 place-items-center rounded-[4px] bg-[#ff7a59] text-white" style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 24 24" width={size * 0.7} height={size * 0.7} fill="currentColor"><circle cx="15" cy="15" r="4.2" /><circle cx="6" cy="6" r="2.4" /><path d="M7.4 7.4 12 12" stroke="currentColor" strokeWidth="2" /><path d="M15 4v6" stroke="currentColor" strokeWidth="2" /></svg>
    </span>
  )
}

/** Indicador de quantos números de uma lista, com o número que sobe de 0 até o valor. */
function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [shown, setShown] = useState(0)
  useEffect(() => {
    let frame = 0
    const start = performance.now()
    /** Avança o número até o valor em 600 ms. */
    const step = (now: number) => { const progress = Math.min(1, (now - start) / 600); setShown(Math.round(value * (1 - (1 - progress) ** 3))); if (progress < 1) frame = requestAnimationFrame(step) }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [value])
  return <span className="tnum">{shown.toLocaleString('pt-BR')}{suffix}</span>
}

/** Um número grande com o rótulo e uma nota, no topo das telas. */
function Kpi({ index, label, value, suffix, note, tone }: { index: number; label: string; value: number; suffix?: string; note?: string; tone?: Tone }) {
  const motion = rise(index)
  return (
    <div className={cn('rounded-lg border bg-card p-5 transition-[box-shadow,transform] duration-200 hover:-translate-y-px hover:shadow-sm', motion.className)} style={motion.style}>
      <div className="text-[13px] font-medium text-muted-foreground">{label}</div>
      <div className={cn('mt-1 text-[28px] font-semibold tracking-[-0.03em]', tone === 'bad' && 'text-bad', tone === 'ok' && 'text-ok')}><CountUp value={value} suffix={suffix} /></div>
      {note && <div className="mt-1 text-[12px] text-muted-foreground">{note}</div>}
    </div>
  )
}

type FilterDef = { key: string; label: string; options: string[] }

/** Filtros da tabela no padrão do Avant: a vista enxuta mostra poucos, e "Mais filtros" adiciona e tira os outros. */
function TableFilters({ defs, initial, values, setValues, query, setQuery, placeholder }: { defs: FilterDef[]; initial: string[]; values: Record<string, string>; setValues: (next: Record<string, string>) => void; query: string; setQuery: (next: string) => void; placeholder: string }) {
  const [shown, setShown] = useState<string[]>(initial)
  /** Liga ou desliga um filtro na barra; tirar um filtro limpa o valor dele. */
  const toggle = (key: string) => {
    if (shown.includes(key)) { setShown(shown.filter((item) => item !== key)); const next = { ...values }; delete next[key]; setValues(next) } else setShown([...shown, key])
  }
  return (
    <div className="flex flex-wrap items-center gap-2 border-b px-4 py-3">
      <div className="relative w-full sm:w-64"><Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={placeholder} className="h-9 pl-9" /></div>
      {defs.filter((def) => shown.includes(def.key)).map((def) => (
        <div key={def.key} className="animate-in fade-in zoom-in-95 duration-200">
          <Select value={values[def.key] ?? 'all'} onValueChange={(value) => setValues({ ...values, [def.key]: value })}>
            <SelectTrigger className={cn('h-9 w-auto gap-2 text-[13px]', values[def.key] && values[def.key] !== 'all' && 'border-foreground/40')}><span className="text-muted-foreground">{def.label}:</span><SelectValue /></SelectTrigger>
            <SelectContent><SelectItem value="all">Todos</SelectItem>{def.options.map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent>
          </Select>
        </div>
      ))}
      <DropdownMenu>
        <DropdownMenuTrigger asChild><Button variant="outline" size="sm" className="h-9"><Filter className="h-4 w-4" />Mais filtros</Button></DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56"><DropdownMenuLabel>Filtros na barra</DropdownMenuLabel><DropdownMenuSeparator />
          {defs.map((def) => <DropdownMenuCheckboxItem key={def.key} checked={shown.includes(def.key)} onCheckedChange={() => toggle(def.key)} onSelect={(event) => event.preventDefault()}>{def.label}</DropdownMenuCheckboxItem>)}
        </DropdownMenuContent>
      </DropdownMenu>
      {Object.values(values).some((value) => value && value !== 'all') && <Button variant="ghost" size="sm" className="h-9 text-muted-foreground" onClick={() => setValues({})}><X className="h-4 w-4" />Limpar</Button>}
    </div>
  )
}

/** Diz se a linha passa pelos filtros escolhidos e pela busca. */
function passes(row: Record<string, string>, values: Record<string, string>, query: string, searchIn: string[]) {
  const text = query.trim().toLowerCase()
  if (text && !searchIn.some((key) => row[key]?.toLowerCase().includes(text))) return false
  return Object.entries(values).every(([key, value]) => !value || value === 'all' || row[key] === value)
}

/* ---------- 1. Card do HubSpot no cliente, na network e no site (painel interno) ---------- */

type Activity = { id: number; kind: 'E-mail' | 'Ligação' | 'Reunião' | 'Nota'; title: string; text: string; who: string; when: string }
type RecordKind = 'client' | 'network' | 'site'
type RecordInfo = { object: string; desc: string; facts: [string, React.ReactNode][]; activities: Activity[] }
const ACTIVITY_ICON = { 'E-mail': Mail, Ligação: Phone, Reunião: Video, Nota: NotebookPen }

const RECORDS: Record<RecordKind, RecordInfo> = {
  client: {
    object: 'Contato',
    desc: 'O contato do publisher no HubSpot: a pessoa, o relacionamento e o atendimento.',
    facts: [
      ['Dono do contato', <span className="flex items-center gap-2"><Avatar name="Marina Souza" size={26} />Marina Souza</span>],
      ['Ciclo de vida', <Status tone="ok">Cliente</Status>],
      ['NPS', <span className="flex items-center gap-2"><span className="tnum text-[18px] font-semibold text-ok">9</span><span className="text-[13px] text-muted-foreground">Promotor · 02/11</span></span>],
      ['Onboarding', <span className="grid"><span>Ad tag instalada</span><span className="text-[13px] text-muted-foreground">4 de 6 passos</span></span>],
    ],
    activities: [
      { id: 1, kind: 'Reunião', title: 'Revisão do trimestre', text: 'Combinamos testar a Cascata na âncora e falar de um segundo site em janeiro.', who: 'Marina Souza', when: 'hoje, 10:30' },
      { id: 2, kind: 'Ligação', title: 'Ligação de 12 min', text: 'Dúvida sobre o pagamento de outubro. Expliquei a dedução do GAM.', who: 'Marina Souza', when: '21/11, 15:10' },
      { id: 3, kind: 'Nota', title: 'Prefere WhatsApp', text: 'Responde mais rápido no WhatsApp do que por e-mail.', who: 'Marina Souza', when: '18/11, 09:02' },
    ],
  },
  network: {
    object: 'Empresa e negócio',
    desc: 'A empresa da network no HubSpot e o negócio do contrato ativo.',
    facts: [
      ['Dono da empresa', <span className="flex items-center gap-2"><Avatar name="Marina Souza" size={26} />Marina Souza</span>],
      ['Negócio', <span className="grid"><span>Tech Notícias - 24/10/2026</span><span className="text-[13px] text-muted-foreground">Pipeline padrão</span></span>],
      ['Estágio', <Status tone="ok">Ativo</Status>],
      ['Revshare no negócio', <span className="tnum text-[18px] font-semibold">15%</span>],
    ],
    activities: [
      { id: 1, kind: 'E-mail', title: 'Re: proposta de revshare 15%', text: 'O cliente aceitou 15% a partir de dezembro. O contrato novo nasce quando o GAM mudar.', who: 'Caio Prado', when: 'ontem, 17:42' },
      { id: 2, kind: 'Nota', title: 'MCM aceito', text: 'Convite do MCM aceito em 24/10. Manage Account.', who: 'João Pedro', when: '24/10, 14:10' },
    ],
  },
  site: {
    object: 'Site',
    desc: 'O registro do site no HubSpot, com as métricas do mês que o Avant mandou.',
    facts: [
      ['Situação no HubSpot', <Status tone="ok">Ativo</Status>],
      ['Receita de novembro', <span className="tnum text-[18px] font-semibold">US$ 1.240,18</span>],
      ['Impressões de novembro', <span className="tnum text-[18px] font-semibold">2,41 mi</span>],
      ['Enviado em', <span className="tnum">hoje, 05:00</span>],
    ],
    activities: [
      { id: 1, kind: 'Nota', title: 'Âncora cobrindo o menu no iPhone', text: 'Pedimos para o cliente subir o menu fixo em 60 px. Combinado pelo WhatsApp.', who: 'Marina Souza', when: '24/11, 18:20' },
    ],
  },
}

/** O card do HubSpot de um publisher, uma network ou um site: só os dados daquele registro, lidos na hora e sem guardar. */
export function HubspotRecordCard({ kind, className }: { kind: RecordKind; className?: string }) {
  const record = RECORDS[kind]
  const [type, setType] = useState<'all' | Activity['kind']>('all')
  const [loading, setLoading] = useState(true)
  useEffect(() => { const timer = setTimeout(() => setLoading(false), 700); return () => clearTimeout(timer) }, [])
  const kinds = [...new Set(record.activities.map((activity) => activity.kind))]
  const list = record.activities.filter((activity) => type === 'all' || activity.kind === type)
  return (
    <section className={cn('overflow-hidden rounded-lg border bg-card animate-in fade-in slide-in-from-bottom-2 duration-500', className)}>
      <div className="flex flex-wrap items-start justify-between gap-3 p-6 pb-0">
        <div>
          <h2 className="flex items-center gap-2 text-[20px] font-semibold tracking-tight"><HubspotMark size={18} />HubSpot · {record.object}</h2>
          <p className="mt-2 text-[14px] text-muted-foreground">{record.desc} Lido agora; o Avant não guarda.</p>
        </div>
        <Button variant="outline" size="sm" asChild><a href="https://app.hubspot.com" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" />Abrir no HubSpot</a></Button>
      </div>
      <dl className="grid gap-4 p-6 sm:grid-cols-2 xl:grid-cols-4">
        {record.facts.map(([label, value], index) => <div key={label} {...rise(index)}><dt className="text-[13px] text-muted-foreground">{label}</dt><dd className="mt-1 text-[14px]">{value}</dd></div>)}
      </dl>
      <div className="border-t">
        {kinds.length > 1 && <div className="flex flex-wrap items-center gap-1 px-6 pt-4" role="tablist" aria-label="Tipo de atividade">
          {(['all', ...kinds] as const).map((option) => <button key={option} role="tab" aria-selected={type === option} onClick={() => setType(option)} className={cn('h-8 rounded-md px-3 text-[13px] transition-colors', type === option ? 'bg-secondary font-medium text-foreground' : 'text-muted-foreground hover:text-foreground')}>{option === 'all' ? 'Tudo' : option}</button>)}
        </div>}
        <ol className="grid px-6 py-4">
          {loading ? [0, 1].map((index) => <li key={index} className="flex gap-3 py-3"><span className="h-8 w-8 animate-pulse rounded-full bg-muted" /><span className="grid flex-1 gap-2"><span className="h-3 w-1/3 animate-pulse rounded bg-muted" /><span className="h-3 w-2/3 animate-pulse rounded bg-muted" /></span></li>) : list.map((activity, index) => {
            const Icon = ACTIVITY_ICON[activity.kind]
            return (
              <li key={activity.id} {...rise(index, 'flex gap-3 py-3')}>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border bg-background"><Icon className="h-4 w-4 text-muted-foreground" /></span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3"><span className="text-[14px] font-medium">{activity.title}</span><span className="text-[12px] text-muted-foreground tnum">{activity.when}</span></div>
                  <p className="text-[14px] text-muted-foreground">{activity.text}</p>
                  <p className="mt-0.5 text-[12px] text-muted-foreground">{activity.kind} · {activity.who}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t bg-muted px-6 py-3 text-[13px] text-muted-foreground"><span>As últimas atividades deste registro. As antigas ficam no HubSpot.</span><Button size="sm" variant="outline" onClick={() => toast.success('Nota criada no HubSpot', { description: `Aparece na linha do tempo do registro (${record.object.toLowerCase()}).` })}><NotebookPen className="h-4 w-4" />Nova nota</Button></div>
    </section>
  )
}

/** Página da network no painel interno (só o necessário para mostrar o card do HubSpot da network). */
export function NetworkDetailScreen({ go }: { go: Go }) {
  const row = (label: string, value: React.ReactNode) => <div className="grid grid-cols-[160px_1fr] gap-3 py-2 text-[14px]"><dt className="text-muted-foreground">{label}</dt><dd className="min-w-0">{value}</dd></div>
  return (
    <>
      <PageHeader title="Tech Notícias" sub="Network 22334455667 · cliente Tech Notícias"
        back={<button onClick={() => go('cliente')} className="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground"><ChevronRight className="h-4 w-4 rotate-180" />Cliente</button>} />
      <Body className="lg:grid-cols-2">
        <RiseCard index={0} title="Network"><dl className="-my-2 divide-y">{row('Network code', <span className="tnum">22334455667</span>)}{row('Tipo', 'MCM · Manage Account')}{row('Situação', <Status tone="ok">Conectada</Status>)}{row('Sites', <span className="tnum">3</span>)}</dl></RiseCard>
        <RiseCard index={1} title="Contrato ativo"><dl className="-my-2 divide-y">{row('Revshare', <span className="tnum">15,000%</span>)}{row('Origem', 'GAM')}{row('Desde', <span className="tnum">24/10/2026 14:05</span>)}</dl></RiseCard>
        <HubspotRecordCard kind="network" className="lg:col-span-2" />
      </Body>
    </>
  )
}

/* ---------- 2. Funil de prospecção (painel interno) ---------- */

type Stage = 'Lead' | 'Lead qualificado' | 'Pronto para vendas' | 'Oportunidade' | 'Cliente'
type Deal = { id: number; name: string; contact: string; email: string; phone: string; owner: string; stage: Stage; source: string; traffic: string; days: number; registered: boolean }
const STAGES: Stage[] = ['Lead', 'Lead qualificado', 'Pronto para vendas', 'Oportunidade', 'Cliente']
const DEALS: Deal[] = [
  { id: 1, name: 'Guia do Pet', contact: 'Ana Ribeiro', email: 'ana@guiadopet.com.br', phone: '+55 21 99999-1212', owner: 'Marina Souza', stage: 'Lead', source: 'Indicação', traffic: '1,2 mi visitas/mês', days: 2, registered: false },
  { id: 2, name: 'Futebol Agora', contact: 'Rafael Lima', email: 'rafael@futebolagora.com', phone: '+55 11 97777-3434', owner: 'João Pedro', stage: 'Lead qualificado', source: 'Site da Groone', traffic: '4,8 mi visitas/mês', days: 5, registered: false },
  { id: 3, name: 'Receitas Fáceis', contact: 'Luísa Mota', email: 'luisa@receitasfaceis.com', phone: '+55 31 98888-5656', owner: 'Marina Souza', stage: 'Pronto para vendas', source: 'Evento', traffic: '900 mil visitas/mês', days: 9, registered: false },
  { id: 4, name: 'Tecnologia Hoje', contact: 'Bruno Alves', email: 'bruno@tecnologiahoje.com', phone: '+55 41 96666-7878', owner: 'João Pedro', stage: 'Oportunidade', source: 'Outbound', traffic: '2,1 mi visitas/mês', days: 14, registered: false },
  { id: 5, name: 'Viaje Mais', contact: 'Paula Nunes', email: 'paula@viajemais.com.br', phone: '+55 48 95555-9090', owner: 'Marina Souza', stage: 'Cliente', source: 'Indicação', traffic: '3,3 mi visitas/mês', days: 1, registered: false },
  { id: 6, name: 'Notícias do Vale', contact: 'Igor Reis', email: 'igor@noticiasdovale.com', phone: '+55 12 94444-1111', owner: 'João Pedro', stage: 'Cliente', source: 'Site da Groone', traffic: '700 mil visitas/mês', days: 6, registered: true },
  { id: 7, name: 'Moda em Dia', contact: 'Carla Dias', email: 'carla@modaemdia.com', phone: '+55 11 93333-2222', owner: 'Marina Souza', stage: 'Lead', source: 'Outbound', traffic: '350 mil visitas/mês', days: 1, registered: false },
]

/** Funil de quem ainda não é cliente, pela fase do ciclo de vida do contato no HubSpot (CRM grátis, sem pipeline novo); quem vira Cliente é cadastrado com um clique. */
export function ProspectsScreen({ go }: { go: Go }) {
  const [deals, setDeals] = useState(DEALS)
  const [view, setView] = useState<'board' | 'list'>('board')
  const [values, setValues] = useState<Record<string, string>>({})
  const [query, setQuery] = useState('')
  const [registering, setRegistering] = useState<Deal | null>(null)
  const [busy, setBusy] = useState(false)
  const rows = deals.filter((deal) => passes({ ...deal, days: String(deal.days) } as unknown as Record<string, string>, values, query, ['name', 'contact', 'email']))
  const defs: FilterDef[] = [
    { key: 'owner', label: 'Dono', options: ['Marina Souza', 'João Pedro'] },
    { key: 'stage', label: 'Fase', options: STAGES },
    { key: 'source', label: 'Origem', options: ['Indicação', 'Site da Groone', 'Evento', 'Outbound'] },
  ]
  /** Cadastra o Cliente com os dados do negócio e manda o convite. */
  const register = () => {
    if (!registering) return
    setBusy(true)
    setTimeout(() => { setDeals((current) => current.map((deal) => (deal.id === registering.id ? { ...deal, registered: true } : deal))); setBusy(false); setRegistering(null); toast.success('Cliente cadastrado e convite enviado', { description: `${registering.email} · o contato no HubSpot ganhou o link do Avant.` }) }, 800)
  }
  /** Botão do contato na fase Cliente: cadastrar, ou abrir o cliente já cadastrado. */
  const action = (deal: Deal) => deal.stage !== 'Cliente' ? null : deal.registered
    ? <Button size="sm" variant="ghost" className="h-7 px-2 text-[12px]" onClick={() => go('cliente')}><Check className="h-3.5 w-3.5 text-ok" />Cliente no Avant</Button>
    : <Button size="sm" className="h-7 px-2 text-[12px]" onClick={() => setRegistering(deal)}><UserPlus className="h-3.5 w-3.5" />Cadastrar cliente</Button>
  return (
    <>
      <PageHeader title="Prospecção" sub="Os contatos do HubSpot que ainda não são clientes da Groone. Cada coluna é uma fase do ciclo de vida do contato (Lead, Lead qualificado, Pronto para vendas, Oportunidade e Cliente), recurso do CRM grátis. Mudar a fase continua sendo no HubSpot."
        actions={<>
          <div className="flex rounded-md border bg-background p-0.5" role="tablist" aria-label="Vista">
            <button role="tab" aria-selected={view === 'board'} onClick={() => setView('board')} className={cn('flex h-8 items-center gap-1.5 rounded px-2.5 text-[13px]', view === 'board' ? 'bg-secondary font-medium' : 'text-muted-foreground')}><LayoutGrid className="h-4 w-4" />Funil</button>
            <button role="tab" aria-selected={view === 'list'} onClick={() => setView('list')} className={cn('flex h-8 items-center gap-1.5 rounded px-2.5 text-[13px]', view === 'list' ? 'bg-secondary font-medium' : 'text-muted-foreground')}><List className="h-4 w-4" />Lista</button>
          </div>
          <Button variant="outline" asChild><a href="https://app.hubspot.com" target="_blank" rel="noreferrer"><HubspotMark />Abrir os contatos</a></Button>
        </>} />
      <Body>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Kpi index={0} label="Contatos em prospecção" value={deals.filter((deal) => deal.stage !== 'Cliente').length} />
          <Kpi index={1} label="Viraram cliente, falta cadastrar" value={deals.filter((deal) => deal.stage === 'Cliente' && !deal.registered).length} tone="ok" />
          <Kpi index={2} label="Viram cliente (90 dias)" value={23} suffix="%" />
          <Kpi index={3} label="Dias até virar cliente (média)" value={34} />
        </div>
        <section className="overflow-hidden rounded-lg border bg-card animate-in fade-in duration-500">
          <TableFilters defs={defs} initial={['owner']} values={values} setValues={setValues} query={query} setQuery={setQuery} placeholder="Buscar site, contato ou e-mail" />
          {view === 'board' ? (
            <div className="grid gap-3 overflow-x-auto p-4 md:grid-cols-5">
              {STAGES.map((stage, column) => {
                const inStage = rows.filter((deal) => deal.stage === stage)
                return (
                  <div key={stage} {...rise(column, 'min-w-[220px] rounded-md bg-muted p-2')}>
                    <div className="flex items-center justify-between px-1 pb-2 text-[13px] font-medium"><span className="flex items-center gap-1.5" title={`Fase “${stage}” do ciclo de vida no HubSpot`}><HubspotMark size={12} />{stage}</span><span className="tnum text-muted-foreground">{inStage.length}</span></div>
                    <div className="grid gap-2">
                      {inStage.map((deal) => (
                        <article key={deal.id} className="rounded-md border bg-card p-3 transition-[box-shadow,transform] duration-200 hover:-translate-y-px hover:shadow-sm">
                          <div className="text-[14px] font-medium">{deal.name}</div>
                          <div className="text-[13px] text-muted-foreground">{deal.contact} · {deal.traffic}</div>
                          <div className="mt-2 flex items-center justify-between gap-2"><span className="flex items-center gap-1.5 text-[12px] text-muted-foreground"><Avatar name={deal.owner} size={24} />{deal.owner.split(' ')[0]}</span><span className="text-[12px] text-muted-foreground tnum">{deal.days} d na fase</span></div>
                          {deal.stage === 'Cliente' && <div className="mt-2 border-t pt-2">{action(deal)}</div>}
                        </article>
                      ))}
                      {!inStage.length && <p className="px-1 py-6 text-center text-[13px] text-muted-foreground">Nada aqui.</p>}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="overflow-x-auto"><table className="w-full text-[14px]">
              <thead className="border-b"><tr><th className={th}>Site</th><th className={th}>Contato</th><th className={th}>Estágio</th><th className={th}>Dono</th><th className={th}>Origem</th><th className={th}>Tráfego</th><th className={th}></th></tr></thead>
              <tbody className="divide-y">{rows.map((deal, index) => (
                <tr key={deal.id} {...rise(index, 'transition-colors hover:bg-muted/50')}>
                  <td className={cn(td, 'font-medium')}>{deal.name}</td><td className={td}><div>{deal.contact}</div><div className="text-[13px] text-muted-foreground">{deal.email}</div></td>
                  <td className={td}><Status tone={deal.stage === 'Cliente' ? 'ok' : deal.stage === 'Oportunidade' ? 'ochre' : 'neutral'}>{deal.stage}</Status></td>
                  <td className={td}>{deal.owner}</td><td className={td}>{deal.source}</td><td className={cn(td, 'tnum')}>{deal.traffic}</td><td className={cn(td, 'text-right')}>{action(deal)}</td>
                </tr>
              ))}</tbody>
            </table></div>
          )}
        </section>
      </Body>
      <Dialog open={registering !== null} onOpenChange={(open) => !open && setRegistering(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Cadastrar {registering?.name} no Avant?</DialogTitle><DialogDescription>Os dados vêm do contato do negócio no HubSpot. Confira antes: o convite sai para este e-mail e vale por 1 dia.</DialogDescription></DialogHeader>
          {registering && <div className="grid gap-4 sm:grid-cols-2">
            <Field id="pr-name" label="Nome do cliente"><Input id="pr-name" className="h-10" defaultValue={registering.name} /></Field>
            <Field id="pr-contact" label="Contato"><Input id="pr-contact" className="h-10" defaultValue={registering.contact} /></Field>
            <Field id="pr-email" label="E-mail"><Input id="pr-email" className="h-10" defaultValue={registering.email} /></Field>
            <Field id="pr-phone" label="Telefone"><Input id="pr-phone" className="h-10 tnum" defaultValue={registering.phone} /></Field>
            <div className="sm:col-span-2"><Field id="pr-manager" label="Gerente de conta" hint="O dono do negócio no HubSpot, que também é da equipe Groone."><Input id="pr-manager" className="h-10" defaultValue={registering.owner} /></Field></div>
          </div>}
          <DialogFooter><Button variant="outline" onClick={() => setRegistering(null)}>Cancelar</Button><Button onClick={register} disabled={busy}>{busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}Cadastrar e enviar convite</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

/* ---------- 3. Atendimento pelo WhatsApp da Groone (painel do cliente) ---------- */

const GROONE_WHATSAPP = '5511900000000'

/** O link do WhatsApp de atendimento da Groone (caixa do HubSpot), com a mensagem já escrita. */
function whatsappLink(text: string) {
  return `https://wa.me/${GROONE_WHATSAPP}?text=${encodeURIComponent(text)}`
}

/** O ícone do WhatsApp, no tamanho dos ícones dos botões. */
function WhatsappIcon() {
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z" /></svg>
}

/* ---------- 4. Fale com seu gerente (painel do cliente) ---------- */

const SLOTS: Record<string, string[]> = { 'qui, 26/11': ['10:00', '10:30', '14:00', '16:30'], 'sex, 27/11': ['09:00', '11:00', '15:00'], 'seg, 30/11': ['10:00', '13:30', '14:00', '17:00'] }

/** O card de atendimento: o WhatsApp da Groone (caixa do HubSpot) e o link de agendamento do gerente de conta, guardado no Avant. */
export function ManagerCard() {
  const [open, setOpen] = useState(false)
  const [day, setDay] = useState(Object.keys(SLOTS)[0])
  const [slot, setSlot] = useState<string | null>(null)
  const [booked, setBooked] = useState<string | null>(null)
  return (
    <>
      <section className="flex flex-wrap items-center gap-4 overflow-hidden rounded-lg border bg-card p-6 animate-in fade-in slide-in-from-bottom-2 duration-500 [animation-delay:120ms] fill-mode-both">
        <Avatar name="Marina Souza" size={48} />
        <div className="min-w-0 flex-1"><div className="text-[13px] text-muted-foreground">Precisa de ajuda? Sua gerente de conta é</div><div className="text-[18px] font-semibold tracking-tight">Marina Souza</div><div className="text-[13px] text-muted-foreground">O atendimento da Groone é pelo WhatsApp, de segunda a sexta, das 9h às 18h.</div></div>
        {booked ? <Status tone="ok">Reunião marcada: {booked}</Status> : null}
        <div className="flex flex-wrap gap-2"><Button variant="outline" onClick={() => setOpen(true)}><CalendarClock className="h-4 w-4" />Marcar uma conversa</Button><Button asChild><a href={whatsappLink('Olá! Sou Caio Prado, do Blog Exemplo (blogexemplo.com.br).')} target="_blank" rel="noreferrer"><WhatsappIcon />Falar no WhatsApp</a></Button></div>
      </section>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[520px]">
          <DialogHeader><DialogTitle>Marcar uma conversa com a Marina</DialogTitle><DialogDescription>30 minutos por vídeo. Horários de Brasília, pelo link de agendamento dela.</DialogDescription></DialogHeader>
          <div className="grid gap-4">
            <div className="flex flex-wrap gap-2">{Object.keys(SLOTS).map((option) => <button key={option} onClick={() => { setDay(option); setSlot(null) }} className={cn('flex h-9 items-center gap-1.5 rounded-md border px-3 text-[13px] transition-colors', day === option ? 'border-foreground bg-foreground text-background' : 'hover:bg-muted')}><CalendarDays className="h-4 w-4" />{option}</button>)}</div>
            <div key={day} className="grid grid-cols-3 gap-2 sm:grid-cols-4">{SLOTS[day].map((time, index) => <button key={time} {...rise(index)} onClick={() => setSlot(time)} className={cn('h-10 rounded-md border text-[14px] tnum transition-colors', rise(index).className, slot === time ? 'border-foreground bg-secondary font-medium' : 'hover:bg-muted')}>{time}</button>)}</div>
            <Field id="mt-topic" label="Sobre o que quer falar (opcional)"><Input id="mt-topic" className="h-10" placeholder="Ex.: aumentar o RPM no celular" /></Field>
          </div>
          <DialogFooter><Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button><Button disabled={!slot} onClick={() => { setBooked(`${day} às ${slot}`); setOpen(false); toast.success('Conversa marcada', { description: `${day} às ${slot}. O convite com o link chega no seu e-mail.` }) }}>Confirmar</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

/* ---------- 5. Central de ajuda (painel do cliente) + 6. NPS no painel ---------- */

type GuideStep = { title: string; text: string; shot: 'list' | 'editor' | 'code' | 'check' | 'chart' | 'form' }
type Guide = { id: string; name: string; icon: typeof BookOpen; summary: string; steps: GuideStep[] }
const GUIDES: Guide[] = [
  { id: 'adtag', name: 'Ad tag', icon: Code2, summary: 'Os anúncios do seu site: blocos, formatos e instalação.', steps: [
    { title: 'Abra Inventário > Ad tags', text: 'Cada site tem as suas ad tags. Clique em “Nova ad tag” e escolha o site.', shot: 'list' },
    { title: 'Escolha os blocos', text: 'Conteúdo 1 a 9, âncora, intersticial e fixo. Na prévia, clique onde cada bloco aparece.', shot: 'editor' },
    { title: 'Publique e copie o script', text: 'Publicar cria a versão 1. Copie o script e cole no <head> de todas as páginas.', shot: 'code' },
    { title: 'Confira a instalação', text: 'Clique em “Verificar de novo”. Em um minuto o site aparece como instalado.', shot: 'check' },
  ] },
  { id: 'reward', name: 'Reward', icon: Gift, summary: 'Libere o conteúdo depois de um anúncio premiado.', steps: [
    { title: 'Abra Inventário > Rewards', text: 'Clique em “Novo reward” e escolha a página do site.', shot: 'list' },
    { title: 'Monte as perguntas', text: 'Até 5 perguntas e o pedido de contato antes do anúncio.', shot: 'form' },
    { title: 'Instale o reward.js', text: 'Se o site já tem a ad tag, nada a fazer. Senão, cole o script do reward.', shot: 'code' },
    { title: 'Acompanhe', text: 'Visitas, anúncios vistos e contatos por dia nas métricas do reward.', shot: 'chart' },
  ] },
  { id: 'loader', name: 'Loader', icon: Loader2, summary: 'A tela de carregamento e o aviso de adblock.', steps: [
    { title: 'Abra Inventário > Loaders', text: 'Escolha o modelo GroOne ou Tela cheia.', shot: 'list' },
    { title: 'Personalize', text: 'Cores, logo e o que fazer com adblock: avisar ou bloquear.', shot: 'editor' },
    { title: 'Ligue na ad tag', text: 'Na ad tag do site, escolha o loader e publique.', shot: 'form' },
  ] },
  { id: 'precos', name: 'Regras de preço', icon: CircleDollarSign, summary: 'Floor automático por bloco e país, com grupo de controle.', steps: [
    { title: 'Abra Inventário > Regras de preço', text: 'Ligue a regra no site e escolha os blocos.', shot: 'list' },
    { title: 'Escolha o modelo', text: 'Automática no conteúdo; Cascata na âncora, no intersticial e no fixo.', shot: 'form' },
    { title: 'Veja o ganho', text: 'Compare a receita da regra contra o grupo de controle.', shot: 'chart' },
  ] },
  { id: 'pageviews', name: 'Page Views', icon: LayoutGrid, summary: 'As visitas do site por página, país e UTM.', steps: [
    { title: 'Instale a ad tag', text: 'As visitas vêm junto com a ad tag; não há script separado.', shot: 'code' },
    { title: 'Abra Relatórios > Page Views', text: 'Filtre por site, período, país e UTM.', shot: 'chart' },
  ] },
  { id: 'gam', name: 'Networks do GAM', icon: ListChecks, summary: 'Ligar a sua network do Ad Manager à Groone pelo MCM.', steps: [
    { title: 'Aceite o convite do MCM', text: 'No Ad Manager, em Admin > Multiple Customer Management, aceite o convite da Groone.', shot: 'form' },
    { title: 'Confira no Avant', text: 'Em Inventário > Networks do GAM, a network aparece como conectada em até 1 hora.', shot: 'list' },
    { title: 'Sites importados', text: 'Os sites e blocos chegam sozinhos a cada 6 horas.', shot: 'check' },
  ] },
]

/** Um print desenhado da tela do Avant para o passo do guia (no painel de verdade, o print que a equipe sobe no editor de guias). */
function GuideShot({ kind }: { kind: GuideStep['shot'] }) {
  return (
    <div className="overflow-hidden rounded-md border bg-background shadow-sm" aria-hidden="true">
      <div className="flex items-center gap-1.5 border-b bg-muted px-3 py-2"><span className="h-2 w-2 rounded-full bg-bad/60" /><span className="h-2 w-2 rounded-full bg-ochre/60" /><span className="h-2 w-2 rounded-full bg-ok/60" /><span className="ml-3 h-3 w-40 rounded bg-background" /></div>
      <div className="grid min-h-[260px] grid-cols-[48px_1fr] gap-3 p-4">
        <div className="grid content-start gap-2">{[0, 1, 2, 3].map((index) => <span key={index} className={cn('h-6 rounded', index === 1 ? 'bg-foreground/80' : 'bg-muted')} />)}</div>
        <div className="grid content-start gap-2">
          <span className="h-4 w-1/3 rounded bg-foreground/80" />
          {kind === 'list' && [0, 1, 2].map((index) => <span key={index} className={cn('h-7 rounded border', index === 0 && 'ring-2 ring-[hsl(var(--link))] ring-offset-1')} />)}
          {kind === 'editor' && <div className="grid grid-cols-[1fr_80px] gap-2"><span className="h-24 rounded border bg-muted" /><span className="grid gap-1.5">{[0, 1, 2].map((index) => <span key={index} className={cn('h-5 rounded border', index === 2 && 'ring-2 ring-[hsl(var(--link))]')} />)}</span></div>}
          {kind === 'code' && <div className="rounded bg-foreground/90 p-2 font-mono text-[10px] text-background">&lt;script async src="…/tag.js" data-tag="tg_…"&gt;&lt;/script&gt;</div>}
          {kind === 'check' && <span className="flex items-center gap-2 rounded border p-2 text-[11px]"><CheckCircle2 className="h-4 w-4 text-ok" />Instalado · verificado agora</span>}
          {kind === 'chart' && <div className="flex h-20 items-end gap-1 rounded border p-2">{[30, 45, 38, 60, 52, 70, 64, 80].map((height, index) => <span key={index} className="flex-1 rounded-t bg-foreground/70" style={{ height: `${height}%` }} />)}</div>}
          {kind === 'form' && [0, 1, 2].map((index) => <span key={index} className={cn('h-6 rounded border', index === 2 && 'w-24 bg-foreground/80')} />)}
        </div>
      </div>
    </div>
  )
}

type Article = { id: number; category: string; title: string; summary: string; minutes: number }
const ARTICLES: Article[] = [
  { id: 1, category: 'Primeiros passos', title: 'Como instalar a ad tag no seu site', summary: 'Copie o script, cole no <head> e confira a instalação no Avant.', minutes: 3 },
  { id: 2, category: 'Primeiros passos', title: 'Aceitar o convite do MCM no Ad Manager', summary: 'O passo a passo para ligar a sua network à Groone.', minutes: 4 },
  { id: 3, category: 'Pagamentos', title: 'Quando e como a Groone paga', summary: 'Fechamento do mês, deduções do Google e prazo da invoice.', minutes: 5 },
  { id: 4, category: 'Pagamentos', title: 'O que é a dedução de tráfego inválido', summary: 'Por que o pagamento pode ser menor que o relatório.', minutes: 3 },
  { id: 5, category: 'Anúncios', title: 'Âncora, intersticial e fixo: quando usar cada um', summary: 'Os formatos da ad tag e o impacto no RPM.', minutes: 6 },
  { id: 6, category: 'Relatórios', title: 'Montar um relatório customizado', summary: 'Métricas, dimensões, filtros e envios agendados.', minutes: 4 },
]

/** Central de ajuda com os guias por tecnologia e os artigos que a equipe Groone escreve no Avant (sem a base de conhecimento paga do HubSpot). */
export function HelpCenterScreen() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Todas')
  const [reading, setReading] = useState<Article | null>(null)
  const [helpful, setHelpful] = useState<boolean | null>(null)
  const [guide, setGuide] = useState<Guide | null>(null)
  const [step, setStep] = useState(0)
  const list = ARTICLES.filter((article) => (category === 'Todas' || article.category === category) && (article.title + article.summary).toLowerCase().includes(query.trim().toLowerCase()))
  return (
    <>
      <PageHeader title="Central de ajuda" sub="Os artigos da Groone sobre o Avant, a ad tag, o GAM e os pagamentos." actions={<Button variant="outline" asChild><a href={whatsappLink('Olá! Preciso de ajuda com o Avant.')} target="_blank" rel="noreferrer"><WhatsappIcon />Falar no WhatsApp</a></Button>} />
      <Body>
        <div className="relative animate-in fade-in slide-in-from-bottom-2 duration-500"><Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Como podemos ajudar?" className="h-12 bg-card pl-12 text-[16px]" /></div>
        <section className="grid gap-3">
          <h2 className="text-[18px] font-semibold tracking-tight">Guias por tecnologia</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{GUIDES.map((guide, index) => {
            const Icon = guide.icon
            return (
              <button key={guide.id} onClick={() => setGuide(guide)} {...rise(index, 'group flex items-start gap-4 rounded-lg border bg-card p-5 text-left transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-sm')}>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border bg-background transition-colors group-hover:bg-foreground group-hover:text-background"><Icon className="h-5 w-5" /></span>
                <span className="min-w-0"><span className="block text-[16px] font-semibold tracking-tight">{guide.name}</span><span className="block text-[14px] text-muted-foreground">{guide.summary}</span><span className="mt-2 inline-flex items-center gap-1 text-[13px] font-medium text-link">Passo a passo · {guide.steps.length} passos<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" /></span></span>
              </button>
            )
          })}</div>
        </section>
        <h2 className="text-[18px] font-semibold tracking-tight">Artigos</h2>
        <div className="flex flex-wrap gap-2">{['Todas', 'Primeiros passos', 'Pagamentos', 'Anúncios', 'Relatórios'].map((option) => <button key={option} onClick={() => setCategory(option)} className={cn('h-8 rounded-full border px-3 text-[13px] transition-colors', category === option ? 'border-foreground bg-foreground text-background' : 'bg-card hover:bg-muted')}>{option}</button>)}</div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {list.map((article, index) => (
            <button key={article.id} onClick={() => { setReading(article); setHelpful(null) }} className={cn('group flex h-full flex-col items-start rounded-lg border bg-card p-5 text-left transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-sm', rise(index).className)} style={rise(index).style}>
              <div className="flex items-center gap-2 text-[12px] font-medium text-muted-foreground"><BookOpen className="h-3.5 w-3.5" />{article.category} · {article.minutes} min</div>
              <div className="mt-2 text-[16px] font-semibold tracking-tight">{article.title}</div>
              <p className="mt-1 text-[14px] text-muted-foreground">{article.summary}</p>
              <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[13px] font-medium text-link">Ler<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" /></span>
            </button>
          ))}
          {!list.length && <div className="rounded-lg border bg-card p-8 text-center md:col-span-2 lg:col-span-3"><p className="font-medium">Nenhum artigo com “{query}”</p><p className="mt-1 text-[14px] text-muted-foreground">Chame a Groone no WhatsApp que a equipe responde.</p><Button className="mt-4" asChild><a href={whatsappLink(`Não achei na central de ajuda: ${query}`)} target="_blank" rel="noreferrer"><WhatsappIcon />Falar no WhatsApp</a></Button></div>}
        </div>
        <ManagerCard />
      </Body>
      <Dialog open={reading !== null} onOpenChange={(value) => !value && setReading(null)}>
        <DialogContent className="max-h-[88vh] overflow-y-auto sm:max-w-[820px] sm:p-10">
          {reading && <article className="grid gap-4">
            <div className="text-[12px] font-medium text-muted-foreground">{reading.category} · {reading.minutes} min de leitura</div>
            <DialogTitle className="text-[28px] tracking-[-0.03em]">{reading.title}</DialogTitle>
            <p className="text-[15px] leading-relaxed text-muted-foreground">{reading.summary}</p>
            <div className="grid gap-3 text-[15px] leading-relaxed"><p>1. Em Inventário &gt; Ad tags, abra a tag do site e clique em <b>Copiar o script</b>.</p><p>2. Cole o script dentro do <code className="rounded bg-muted px-1">&lt;head&gt;</code> de todas as páginas.</p><p>3. Volte ao Avant e clique em <b>Verificar de novo</b>. Em um minuto o site aparece como instalado.</p></div>
            <div className="mt-4 rounded-lg border p-4">{helpful === null ? <div className="flex flex-wrap items-center justify-between gap-3 text-[14px]"><span>Este artigo ajudou?</span><div className="flex gap-2"><Button size="sm" variant="outline" onClick={() => setHelpful(true)}><ThumbsUp className="h-4 w-4" />Sim</Button><Button size="sm" variant="outline" onClick={() => setHelpful(false)}><ThumbsDown className="h-4 w-4" />Não</Button></div></div>
              : <p className="animate-in fade-in text-[14px] text-muted-foreground">{helpful ? 'Obrigado!' : 'Poxa. Chame a Groone no WhatsApp que a equipe ajuda.'}</p>}</div>
            <p className="text-[12px] text-muted-foreground">Escrito pela equipe Groone. Atualizado em 20/11.</p>
          </article>}
        </DialogContent>
      </Dialog>
      <Dialog open={guide !== null} onOpenChange={(value) => { if (!value) setGuide(null); setStep(0) }}>
        <DialogContent className="flex h-[88vh] max-h-[880px] w-[calc(100vw-32px)] max-w-[1120px] flex-col gap-0 overflow-hidden p-0 sm:max-w-[1120px]">
          {guide && <>
            <DialogHeader className="border-b px-6 py-5 text-left"><DialogDescription className="text-[12px] font-medium">Passo a passo · {guide.steps.length} passos</DialogDescription><DialogTitle className="text-[24px] tracking-[-0.03em]">{guide.name}</DialogTitle></DialogHeader>
            <div className="grid min-h-0 flex-1 md:grid-cols-[280px_1fr]">
              <ol className="hidden overflow-y-auto border-r bg-muted p-3 md:block">{guide.steps.map((item, index) => (
                <li key={item.title}><button onClick={() => setStep(index)} className={cn('flex w-full items-start gap-3 rounded-md p-3 text-left text-[14px] transition-colors', step === index ? 'bg-card shadow-sm' : 'hover:bg-card/60')}>
                  <span className={cn('grid h-6 w-6 shrink-0 place-items-center rounded-full text-[12px] font-semibold tnum transition-colors', index < step ? 'bg-ok text-white' : step === index ? 'bg-foreground text-background' : 'border bg-background')}>{index < step ? <Check className="h-3.5 w-3.5" /> : index + 1}</span>
                  <span className={cn(step === index ? 'font-medium' : 'text-muted-foreground')}>{item.title}</span>
                </button></li>
              ))}</ol>
              <div key={step} className="grid content-start gap-5 overflow-y-auto p-6 animate-in fade-in slide-in-from-right-2 duration-300 md:p-8">
                <div className="h-1 overflow-hidden rounded-full bg-muted"><span className="block h-full rounded-full bg-foreground transition-[width] duration-500" style={{ width: `${((step + 1) / guide.steps.length) * 100}%` }} /></div>
                <div><div className="text-[13px] text-muted-foreground tnum">Passo {step + 1} de {guide.steps.length}</div><h3 className="mt-1 text-[22px] font-semibold tracking-tight">{guide.steps[step].title}</h3><p className="mt-1 max-w-[70ch] text-[15px] text-muted-foreground">{guide.steps[step].text}</p></div>
                <GuideShot kind={guide.steps[step].shot} />
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t bg-muted px-6 py-3">
              <span className="text-[13px] text-muted-foreground">Travou? <a className="text-link hover:underline" href={whatsappLink(`Preciso de ajuda no guia ${guide.name}, passo ${step + 1}.`)} target="_blank" rel="noreferrer">Fale com a Groone no WhatsApp</a></span>
              <div className="flex gap-2"><Button variant="outline" disabled={step === 0} onClick={() => setStep(step - 1)}>Voltar</Button>{step < guide.steps.length - 1 ? <Button onClick={() => setStep(step + 1)}>Próximo<ArrowRight className="h-4 w-4" /></Button> : <Button onClick={() => { setGuide(null); setStep(0); toast.success(`Guia ${guide.name} concluído`) }}><Check className="h-4 w-4" />Concluir</Button>}</div>
            </div>
          </>}
        </DialogContent>
      </Dialog>
      <NpsPrompt />
    </>
  )
}

/** A pesquisa de NPS do Avant no painel do cliente: aparece uma vez por trimestre, no canto; a nota vai para o contato no HubSpot. */
export function NpsPrompt() {
  const [stage, setStage] = useState<'hidden' | 'ask' | 'comment' | 'done'>('hidden')
  const [score, setScore] = useState<number | null>(null)
  useEffect(() => { const timer = setTimeout(() => setStage('ask'), 1400); return () => clearTimeout(timer) }, [])
  if (stage === 'hidden') return null
  return (
    <div className="fixed bottom-4 right-4 z-40 w-[calc(100vw-32px)] max-w-[380px] rounded-lg border bg-card p-4 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500" role="dialog" aria-label="Pesquisa de satisfação">
      <button aria-label="Fechar" onClick={() => setStage('hidden')} className="absolute right-2 top-2 rounded p-1 text-muted-foreground hover:bg-muted"><X className="h-4 w-4" /></button>
      {stage === 'ask' && <><p className="pr-6 text-[14px] font-medium">De 0 a 10, quanto você indicaria a Groone para outro dono de site?</p>
        <div className="mt-3 grid grid-cols-11 gap-1">{Array.from({ length: 11 }, (_, value) => <button key={value} onClick={() => { setScore(value); setStage('comment') }} className={cn('h-8 rounded border text-[13px] tnum transition-[transform,background-color] hover:-translate-y-px', value <= 6 ? 'hover:bg-bad-soft' : value <= 8 ? 'hover:bg-ochre-soft' : 'hover:bg-[hsl(var(--ok)/0.12)]')}>{value}</button>)}</div>
        <div className="mt-1 flex justify-between text-[11px] text-muted-foreground"><span>Nada provável</span><span>Muito provável</span></div></>}
      {stage === 'comment' && <div className="animate-in fade-in"><p className="pr-6 text-[14px] font-medium">Nota {score}. {score !== null && score >= 9 ? 'Que bom! O que mais ajuda?' : 'O que a gente pode melhorar?'}</p><Textarea className="mt-3" rows={3} /><div className="mt-2 flex justify-end"><Button size="sm" onClick={() => setStage('done')}>Enviar</Button></div></div>}
      {stage === 'done' && <p className="flex items-center gap-2 pr-6 text-[14px] animate-in fade-in zoom-in-95"><CheckCircle2 className="h-5 w-5 text-ok" />Obrigado! A sua gerente de conta lê cada resposta.</p>}
    </div>
  )
}

/* ---------- 6. NPS dos clientes (painel interno) ---------- */

type NpsAnswer = { client: string; score: number; comment: string; when: string; manager: string }
const NPS: NpsAnswer[] = [
  { client: 'Tech Notícias', score: 9, comment: 'Suporte rápido e o RPM subiu.', when: '02/11', manager: 'Marina Souza' },
  { client: 'Blog do Zé', score: 6, comment: 'O pagamento demorou em outubro.', when: '05/11', manager: 'João Pedro' },
  { client: 'Portal da Cidade', score: 10, comment: 'O Avant é bem melhor que o painel antigo.', when: '08/11', manager: 'Marina Souza' },
  { client: 'Açaí Notícias', score: 8, comment: '', when: '10/11', manager: 'João Pedro' },
  { client: 'Receitas da Vó', score: 3, comment: 'Anúncio âncora atrapalhando a leitura.', when: '14/11', manager: 'Marina Souza' },
  { client: 'Viaje Mais', score: 10, comment: 'Ótimo atendimento da Marina.', when: '19/11', manager: 'Marina Souza' },
]

/** Classifica a nota do NPS: promotor, neutro ou detrator. */
function npsGroup(score: number): [string, Tone] {
  return score >= 9 ? ['Promotor', 'ok'] : score >= 7 ? ['Neutro', 'ochre'] : ['Detrator', 'bad']
}

/** O NPS de todos os clientes, das pesquisas do HubSpot: nota geral, distribuição e cada resposta. */
export function NpsScreen({ go }: { go: Go }) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [query, setQuery] = useState('')
  const promoters = NPS.filter((answer) => answer.score >= 9).length
  const detractors = NPS.filter((answer) => answer.score <= 6).length
  const score = Math.round(((promoters - detractors) / NPS.length) * 100)
  const rows = NPS.filter((answer) => passes({ ...answer, group: npsGroup(answer.score)[0] } as unknown as Record<string, string>, values, query, ['client', 'comment']))
  const parts: [string, number, string][] = [['Promotores', promoters, 'bg-ok'], ['Neutros', NPS.length - promoters - detractors, 'bg-ochre'], ['Detratores', detractors, 'bg-bad']]
  return (
    <>
      <PageHeader title="NPS dos clientes" sub="As respostas da pesquisa de satisfação do HubSpot, por cliente. A pesquisa aparece no painel do cliente uma vez por trimestre." />
      <Body>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Kpi index={0} label="NPS (90 dias)" value={score} note="De −100 a 100" tone={score >= 50 ? 'ok' : undefined} />
          <Kpi index={1} label="Respostas" value={NPS.length} note="28% dos clientes ativos" />
          <Kpi index={2} label="Detratores sem contato" value={1} note="Ninguém falou com eles depois da nota" tone="bad" />
          <div className={cn('rounded-lg border bg-card p-5', rise(3).className)} style={rise(3).style}>
            <div className="text-[13px] font-medium text-muted-foreground">Distribuição</div>
            <div className="mt-3 flex h-2.5 overflow-hidden rounded-full bg-muted">{parts.map(([label, count, color]) => <span key={label} className={cn(color, 'animate-in slide-in-from-left-4 fade-in duration-700')} style={{ width: `${(count / NPS.length) * 100}%` }} />)}</div>
            <div className="mt-3 grid gap-1 text-[12px]">{parts.map(([label, count, color]) => <span key={label} className="flex items-center gap-2"><span className={cn('h-2 w-2 rounded-full', color)} />{label}<span className="ml-auto tnum text-muted-foreground">{count}</span></span>)}</div>
          </div>
        </div>
        <section className="overflow-hidden rounded-lg border bg-card animate-in fade-in duration-500">
          <TableFilters defs={[{ key: 'group', label: 'Grupo', options: ['Promotor', 'Neutro', 'Detrator'] }, { key: 'manager', label: 'Gerente', options: ['Marina Souza', 'João Pedro'] }]} initial={['group']} values={values} setValues={setValues} query={query} setQuery={setQuery} placeholder="Buscar cliente ou comentário" />
          <div className="overflow-x-auto"><table className="w-full text-[14px]">
            <thead className="border-b"><tr><th className={th}>Cliente</th><th className={th}>Nota</th><th className={th}>Comentário</th><th className={th}>Gerente</th><th className={th}>Quando</th></tr></thead>
            <tbody className="divide-y">{rows.map((answer, index) => {
              const [group, tone] = npsGroup(answer.score)
              return (
                <tr key={answer.client} onClick={() => go('cliente')} {...rise(index, 'cursor-pointer transition-colors hover:bg-muted/50')}>
                  <td className={cn(td, 'font-medium')}>{answer.client}</td><td className={td}><span className="flex items-center gap-2"><span className="w-6 tnum text-[16px] font-semibold">{answer.score}</span><Status tone={tone}>{group}</Status></span></td>
                  <td className={cn(td, 'max-w-[40ch] text-muted-foreground')}>{answer.comment || '—'}</td><td className={td}>{answer.manager}</td><td className={cn(td, 'tnum text-muted-foreground')}>{answer.when}</td>
                </tr>
              )
            })}</tbody>
          </table></div>
        </section>
      </Body>
    </>
  )
}

/* ---------- Integrações > HubSpot (painel interno): sincronia, saúde e tarefas ---------- */

type SyncRow = { object: string; avant: string; count: number; failed: number; last: string; custom?: boolean }
const SYNC: SyncRow[] = [
  { object: 'Contatos', avant: 'Clientes', count: 412, failed: 2, last: 'há 3 min' },
  { object: 'Empresas', avant: 'Networks', count: 389, failed: 0, last: 'há 3 min' },
  { object: 'Sites', avant: 'Sites', count: 1204, failed: 0, last: 'há 3 min', custom: true },
  { object: 'Negócios', avant: 'Contratos', count: 377, failed: 0, last: 'há 3 min' },
  { object: 'Métricas', avant: 'Receita do site por mês', count: 3610, failed: 0, last: 'hoje, 05:00', custom: true },
  { object: 'Comissões', avant: 'Comissão da equipe', count: 288, failed: 0, last: 'hoje, 05:00', custom: true },
]
const SYNC_ERRORS = [
  { object: 'Contatos', label: 'contato@technoticias', error: 'O e-mail já é de outro contato no HubSpot.', when: 'há 3 min' },
  { object: 'Contatos', label: 'ana@guiadopet.com.br', error: 'Telefone em formato inválido.', when: 'há 3 min' },
  { object: 'Negócios', label: 'Contrato 0412 · Tech Notícias', error: 'A fase “Ativo” não existe no pipeline do HubSpot.', when: 'há 1 h' },
]
const HEALTH = [
  { key: 'onboarding_step', label: 'Etapa do onboarding', example: 'Ad tag instalada (4 de 6)', group: 'Onboarding' },
  { key: 'checklist_progress', label: 'Checklist do site', example: '83%', group: 'Onboarding' },
  { key: 'install_ok', label: 'Instalação ok', example: 'Não: loader sem resposta', group: 'Onboarding' },
  { key: 'ad_tag_published', label: 'Ad tag publicada', example: 'Sim, 12/11', group: 'Onboarding' },
  { key: 'last_login', label: 'Último login no Avant', example: '24/11/2026', group: 'Uso' },
  { key: 'revenue_30d', label: 'Receita dos últimos 30 dias (US$)', example: '1.240,18', group: 'Saúde' },
  { key: 'revenue_change', label: 'Variação contra os 30 dias anteriores', example: '−18%', group: 'Saúde' },
  { key: 'last_revenue_day', label: 'Último dia com receita', example: '24/11/2026', group: 'Saúde' },
]
type TaskRule = { id: string; icon: typeof AlertTriangle; title: string; text: string; on: boolean; due: string; isNew?: boolean }
const TASK_RULES: TaskRule[] = [
  { id: 'network_error', icon: AlertTriangle, title: 'Network com erro', text: 'O aviso que o Avant manda quando a leitura do GAM falha.', on: true, due: 'hoje' },
  { id: 'network_disconnected', icon: AlertTriangle, title: 'Network desconectada', text: 'O aviso de quando a network perde o acesso da Groone no GAM.', on: true, due: 'hoje' },
  { id: 'install', icon: ClipboardCheck, title: 'Instalação quebrada', text: 'O aviso da verificação diária: erro na ad tag, no loader ou no reward.', on: true, due: '1 dia útil' },
  { id: 'alert', icon: TrendingDown, title: 'Alerta de métrica disparado', text: 'Os alertas que o cliente ou a equipe já criaram, como queda de receita.', on: false, due: '1 dia útil' },
  { id: 'detractor', icon: SmilePlus, title: 'Detrator no NPS', text: 'Aviso novo: o cliente deu nota de 0 a 6 na pesquisa.', on: true, due: '2 dias úteis', isNew: true },
]
const RECENT_TASKS = [
  { title: 'Network desconectada: Blog do Zé', owner: 'João Pedro', when: 'hoje, 07:00', state: 'Aberta' },
  { title: 'Instalação quebrada: receitasdavo.com.br', owner: 'Marina Souza', when: 'hoje, 06:10', state: 'Aberta' },
  { title: 'Detrator no NPS: Receitas da Vó (3)', owner: 'Marina Souza', when: '14/11', state: 'Concluída' },
]

/** A integração com o HubSpot no painel interno: sincronia do que vai para lá, propriedades de saúde e tarefas a partir dos avisos. */
export function HubspotScreen() {
  const [tab, setTab] = useState<'sync' | 'health' | 'tasks'>('sync')
  const [running, setRunning] = useState(false)
  const [rules, setRules] = useState(TASK_RULES)
  const [enabled, setEnabled] = useState<Record<string, boolean>>(Object.fromEntries(HEALTH.map((item) => [item.key, true])))
  const [values, setValues] = useState<Record<string, string>>({})
  const [query, setQuery] = useState('')
  const errors = useMemo(() => SYNC_ERRORS.filter((row) => passes(row, values, query, ['label', 'error'])), [values, query])
  /** Pede a sincronia de tudo agora (o worker pega no próximo minuto). */
  const syncNow = () => { setRunning(true); setTimeout(() => { setRunning(false); toast.success('Sincronia terminada', { description: '14 registros mudaram e foram para o HubSpot.' }) }, 1600) }
  const tabs = [['sync', 'Sincronia'], ['health', 'Saúde e onboarding'], ['tasks', 'Tarefas para o gerente']] as const
  return (
    <>
      <PageHeader title="HubSpot" sub="O que o Avant manda para o HubSpot da Groone. Clientes, networks, contratos e métricas só vão: nada disso volta do HubSpot."
        actions={<><Status tone="ok">Conectado · portal 4821337</Status><Button onClick={syncNow} disabled={running}>{running ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}{running ? 'Sincronizando…' : 'Sincronizar agora'}</Button></>} />
      <Body>
        <div className="flex flex-wrap gap-1 rounded-md border bg-background p-0.5 sm:w-fit" role="tablist" aria-label="Seções">
          {tabs.map(([key, label]) => <button key={key} role="tab" aria-selected={tab === key} onClick={() => setTab(key)} className={cn('h-8 rounded px-3 text-[13px] transition-colors', tab === key ? 'bg-secondary font-medium' : 'text-muted-foreground hover:text-foreground')}>{label}</button>)}
        </div>
        {tab === 'sync' && <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{SYNC.map((row, index) => (
            <div key={row.object} className={cn('rounded-lg border bg-card p-5 transition-[box-shadow,transform] duration-200 hover:-translate-y-px hover:shadow-sm', row.custom && 'border-dashed', rise(index).className)} style={rise(index).style}>
              <div className="flex items-center justify-between"><span className="flex items-center gap-2 text-[14px] font-medium"><HubspotMark />{row.object}</span>{row.custom ? <Status tone="neutral">Precisa da licença</Status> : row.failed ? <Status tone="bad">{row.failed} com erro</Status> : <Status tone="ok">Em dia</Status>}</div>
              <div className="mt-3 text-[28px] font-semibold tracking-[-0.03em]"><CountUp value={row.count} /></div>
              <div className="flex items-center gap-1 text-[13px] text-muted-foreground">{row.avant}<ChevronRight className="h-3.5 w-3.5" />{row.object.toLowerCase()} · {row.last}</div>
              {row.custom && <p className="mt-3 border-t pt-3 text-[12px] text-muted-foreground">Objeto personalizado do HubSpot: só liga com a licença Enterprise. Até lá, isso fica só no Avant.</p>}
              {running && !row.custom && <div className="mt-3 h-1 overflow-hidden rounded-full bg-muted"><span className="block h-full w-1/3 animate-[loaderbar_1.1s_ease-in-out_infinite] rounded-full bg-foreground" /></div>}
            </div>
          ))}</div>
          <section className="overflow-hidden rounded-lg border bg-card animate-in fade-in duration-500">
            <div className="p-6 pb-4"><h2 className="text-[20px] font-semibold tracking-tight">Registros com erro</h2><p className="mt-2 text-[14px] text-muted-foreground">O Avant tenta de novo a cada sincronia. Corrija o dado no Avant ou crie a propriedade que falta no HubSpot.</p></div>
            <TableFilters defs={[{ key: 'object', label: 'Objeto', options: SYNC.map((row) => row.object) }]} initial={['object']} values={values} setValues={setValues} query={query} setQuery={setQuery} placeholder="Buscar registro ou erro" />
            <div className="overflow-x-auto"><table className="w-full text-[14px]"><thead className="border-b"><tr><th className={th}>Objeto</th><th className={th}>Registro</th><th className={th}>Erro</th><th className={th}>Quando</th></tr></thead>
              <tbody className="divide-y">{errors.map((row, index) => <tr key={row.label} {...rise(index, 'transition-colors hover:bg-muted/50')}><td className={td}>{row.object}</td><td className={cn(td, 'font-medium')}>{row.label}</td><td className={cn(td, 'text-bad')}>{row.error}</td><td className={cn(td, 'text-muted-foreground')}>{row.when}</td></tr>)}
              {!errors.length && <tr><td colSpan={4} className="py-10 text-center text-[14px] text-muted-foreground">Nenhum erro com esses filtros.</td></tr>}</tbody></table></div>
          </section>
        </>}
        {tab === 'health' && <RiseCard index={0} title="Saúde e onboarding do cliente" desc="Propriedades novas no contato do HubSpot, para listas, workflows e sequências de onboarding. Atualizadas a cada 10 minutos."
          footerNote="As propriedades desligadas param de ser atualizadas, mas o valor antigo fica no HubSpot.">
          <PropertyTable rows={HEALTH} enabled={enabled} setEnabled={setEnabled} grouped />
        </RiseCard>}
        {tab === 'tasks' && <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <RiseCard index={0} title="Avisos que também viram tarefa no HubSpot" desc="São os avisos que o Avant já manda por e-mail e no sino, com as mesmas regras. Ligue a chave para também criar uma tarefa para o gerente de conta do cliente (o dono do contato no HubSpot), com o link da tela certa. Uma por problema: enquanto ela estiver aberta, o Avant não cria outra. Tarefa é do CRM grátis.">
            <ul className="-my-3 divide-y">{rules.map((rule, index) => {
              const Icon = rule.icon
              return (
                <li key={rule.id} {...rise(index, 'flex flex-wrap items-start gap-3 py-4')}>
                  <span className={cn('grid h-9 w-9 shrink-0 place-items-center rounded-md border transition-colors', rule.on ? 'bg-background' : 'bg-muted text-muted-foreground')}><Icon className="h-4 w-4" /></span>
                  <div className="min-w-0 flex-1"><div className="flex items-center gap-2 text-[14px] font-medium">{rule.title}{rule.isNew && <Badge>Novo</Badge>}</div><p className="text-[13px] text-muted-foreground">{rule.text}</p>
                    {rule.on && <div className="mt-2 flex flex-wrap items-center gap-2 text-[13px] animate-in fade-in slide-in-from-top-1">
                      <span className="text-muted-foreground">criar tarefa, com prazo de</span><Select defaultValue={rule.due}><SelectTrigger className="h-8 w-[140px] text-[13px]"><SelectValue /></SelectTrigger><SelectContent>{['hoje', '1 dia útil', '2 dias úteis', '1 semana'].map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent></Select>
                    </div>}
                  </div>
                  <Switch checked={rule.on} onCheckedChange={(on) => setRules(rules.map((item) => (item.id === rule.id ? { ...item, on } : item)))} aria-label={rule.title} />
                </li>
              )
            })}</ul>
          </RiseCard>
          <RiseCard index={1} title="Últimas tarefas criadas">
            <ul className="-my-2 divide-y">{RECENT_TASKS.map((task, index) => <li key={task.title} {...rise(index + 2, 'py-3')}><div className="text-[14px] font-medium">{task.title}</div><div className="mt-0.5 flex items-center justify-between text-[12px] text-muted-foreground"><span>{task.owner} · {task.when}</span><Status tone={task.state === 'Aberta' ? 'ochre' : 'ok'}>{task.state}</Status></div></li>)}</ul>
          </RiseCard>
        </div>}
      </Body>
    </>
  )
}

/** Tabela das propriedades que o Avant grava no HubSpot, com um exemplo e a chave para ligar ou desligar. */
function PropertyTable({ rows, enabled, setEnabled, grouped = false }: { rows: { key: string; label: string; example: string; group?: string }[]; enabled: Record<string, boolean>; setEnabled: (next: Record<string, boolean>) => void; grouped?: boolean }) {
  return (
    <div className="-mx-6 overflow-x-auto"><table className="w-full text-[14px]">
      <thead className="border-y"><tr>{grouped && <th className={th}>Grupo</th>}<th className={th}>Propriedade</th><th className={th}>Nome no HubSpot</th><th className={th}>Exemplo (Tech Notícias)</th><th className={cn(th, 'text-right')}>Enviar</th></tr></thead>
      <tbody className="divide-y">{rows.map((row, index) => (
        <tr key={row.key} {...rise(index, cn('transition-colors hover:bg-muted/50', !enabled[row.key] && 'text-muted-foreground'))}>
          {grouped && <td className={td}><Badge>{row.group}</Badge></td>}<td className={cn(td, 'font-medium')}>{row.label}</td><td className={td}><code className="font-mono text-[13px]">avant_{row.key}</code></td><td className={cn(td, 'tnum')}>{row.example}</td>
          <td className={cn(td, 'text-right')}><Switch checked={enabled[row.key]} onCheckedChange={(on) => setEnabled({ ...enabled, [row.key]: on })} aria-label={row.label} /></td>
        </tr>
      ))}</tbody>
    </table></div>
  )
}


/* ---------- Ferramentas > Central de ajuda (painel interno): a equipe escreve os guias e artigos ---------- */

type Language = 'PT' | 'EN' | 'ES'
type HelpItem = { id: string; kind: 'Guia' | 'Artigo'; title: string; category: string; languages: Language[]; steps: number; published: boolean; updated: string; reads: number }
const LANGUAGES: Language[] = ['PT', 'EN', 'ES']
const HELP_ITEMS: HelpItem[] = [
  ...GUIDES.map((guide, index) => ({ id: guide.id, kind: 'Guia' as const, title: guide.name, category: 'Tecnologias', languages: (index < 3 ? LANGUAGES : ['PT', 'EN']) as Language[], steps: guide.steps.length, published: index !== 5, updated: `${20 - index}/11`, reads: [412, 233, 198, 87, 64, 0][index] })),
  ...ARTICLES.map((article, index) => ({ id: `artigo-${article.id}`, kind: 'Artigo' as const, title: article.title, category: article.category, languages: (index % 2 ? ['PT'] : LANGUAGES) as Language[], steps: 0, published: true, updated: `${18 - index}/11`, reads: [301, 188, 540, 122, 96, 41][index] })),
]

/** Editor da central de ajuda: a equipe Groone escreve guias e artigos em PT, EN e ES, sobe os prints e publica. */
export function HelpEditorScreen() {
  const [items, setItems] = useState(HELP_ITEMS)
  const [values, setValues] = useState<Record<string, string>>({})
  const [query, setQuery] = useState('')
  const [editing, setEditing] = useState<HelpItem | null>(null)
  const rows = items.filter((item) => passes({ ...item, state: item.published ? 'Publicado' : 'Rascunho', missing: LANGUAGES.filter((language) => !item.languages.includes(language)).join(' ') || 'Nenhum' } as unknown as Record<string, string>, values, query, ['title', 'category']))
  const defs: FilterDef[] = [
    { key: 'kind', label: 'Tipo', options: ['Guia', 'Artigo'] },
    { key: 'state', label: 'Situação', options: ['Publicado', 'Rascunho'] },
    { key: 'category', label: 'Categoria', options: ['Tecnologias', 'Primeiros passos', 'Pagamentos', 'Anúncios', 'Relatórios'] },
  ]
  /** Abre o editor com um guia novo, ainda sem passos. */
  const create = (kind: HelpItem['kind']) => setEditing({ id: `novo-${Date.now()}`, kind, title: '', category: kind === 'Guia' ? 'Tecnologias' : 'Primeiros passos', languages: [], steps: kind === 'Guia' ? 1 : 0, published: false, updated: 'agora', reads: 0 })
  /** Guarda o que o editor mudou e fecha. */
  const save = (next: HelpItem) => {
    setItems((current) => (current.some((item) => item.id === next.id) ? current.map((item) => (item.id === next.id ? next : item)) : [next, ...current]))
    setEditing(null)
    toast.success(next.published ? 'Publicado na central de ajuda' : 'Rascunho salvo', { description: next.published ? 'Os clientes já veem em Ajuda, no idioma de cada um.' : 'Só a equipe vê até publicar.' })
  }
  return (
    <>
      <PageHeader title="Central de ajuda" sub="Os guias de cada tecnologia e os artigos que os clientes veem em Ajuda. Ficam no Avant, sem licença do HubSpot. Quem não acha a resposta cai no WhatsApp da Groone."
        actions={<><Button variant="outline" onClick={() => create('Artigo')}><Plus className="h-4 w-4" />Novo artigo</Button><Button onClick={() => create('Guia')}><Plus className="h-4 w-4" />Novo guia</Button></>} />
      <Body>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Kpi index={0} label="Publicados" value={items.filter((item) => item.published).length} />
          <Kpi index={1} label="Rascunhos" value={items.filter((item) => !item.published).length} />
          <Kpi index={2} label="Faltando tradução" value={items.filter((item) => item.languages.length < 3).length} tone="ochre" />
          <Kpi index={3} label="Leituras (30 dias)" value={items.reduce((total, item) => total + item.reads, 0)} />
        </div>
        <section className="overflow-hidden rounded-lg border bg-card animate-in fade-in duration-500">
          <TableFilters defs={defs} initial={['kind', 'state']} values={values} setValues={setValues} query={query} setQuery={setQuery} placeholder="Buscar título ou categoria" />
          <div className="overflow-x-auto"><table className="w-full text-[14px]">
            <thead className="border-b"><tr><th className={th}>Título</th><th className={th}>Tipo</th><th className={th}>Idiomas</th><th className={cn(th, 'text-right')}>Passos</th><th className={th}>Situação</th><th className={cn(th, 'text-right')}>Leituras</th><th className={th}>Atualizado</th></tr></thead>
            <tbody className="divide-y">{rows.map((item, index) => (
              <tr key={item.id} {...rise(index, 'cursor-pointer transition-colors hover:bg-muted/50')} onClick={() => setEditing(item)}>
                <td className={cn(td, 'font-medium')}>{item.title}<div className="text-[13px] font-normal text-muted-foreground">{item.category}</div></td>
                <td className={td}><Badge>{item.kind}</Badge></td>
                <td className={td}><span className="flex gap-1">{LANGUAGES.map((language) => <span key={language} className={cn('rounded border px-1.5 py-0.5 font-mono text-[11px]', item.languages.includes(language) ? 'bg-background' : 'border-dashed text-muted-foreground line-through')}>{language}</span>)}</span></td>
                <td className={cn(td, 'text-right tnum')}>{item.kind === 'Guia' ? item.steps : '—'}</td>
                <td className={td}>{item.published ? <Status tone="ok">Publicado</Status> : <Status tone="neutral">Rascunho</Status>}</td>
                <td className={cn(td, 'text-right tnum')}>{item.reads.toLocaleString('pt-BR')}</td>
                <td className={cn(td, 'text-muted-foreground')}>{item.updated}</td>
              </tr>
            ))}
            {!rows.length && <tr><td colSpan={7} className="py-10 text-center text-[14px] text-muted-foreground">Nada com esses filtros.</td></tr>}</tbody>
          </table></div>
        </section>
      </Body>
      {editing && <HelpItemEditor key={editing.id} item={editing} close={() => setEditing(null)} save={save} />}
    </>
  )
}

type DraftStep = { title: string; text: string; shot: GuideStep['shot'] | null }

/** Modal grande do editor: idioma em abas, título, resumo, os passos com o print de cada um e a prévia como o cliente vê. */
function HelpItemEditor({ item, close, save }: { item: HelpItem; close: () => void; save: (next: HelpItem) => void }) {
  const guide = GUIDES.find((entry) => entry.id === item.id)
  const article = ARTICLES.find((entry) => `artigo-${entry.id}` === item.id)
  const [language, setLanguage] = useState<Language>('PT')
  const [title, setTitle] = useState(item.title)
  const [summary, setSummary] = useState(guide?.summary ?? article?.summary ?? '')
  const [steps, setSteps] = useState<DraftStep[]>(guide ? guide.steps : item.kind === 'Guia' ? [{ title: '', text: '', shot: null }] : [])
  const [published, setPublished] = useState(item.published)
  const [preview, setPreview] = useState(false)
  const translated = (code: Language) => code === 'PT' || item.languages.includes(code)
  /** Troca um campo de um passo. */
  const patch = (index: number, next: Partial<DraftStep>) => setSteps(steps.map((step, position) => (position === index ? { ...step, ...next } : step)))
  /** Simula a subida do print do passo (no painel de verdade, PNG ou JPG até 2 MB). */
  const upload = (index: number) => { patch(index, { shot: (['list', 'editor', 'code', 'check', 'chart', 'form'] as const)[index % 6] }); toast.success('Print enviado', { description: 'PNG, 1440 × 900. Os dados do cliente no print ficam por conta de quem sobe: use a Empresa de demonstração.' }) }
  return (
    <Dialog open onOpenChange={(open) => { if (!open) close() }}>
      <DialogContent className="flex h-[88vh] max-h-[880px] w-[calc(100vw-32px)] max-w-[1120px] flex-col gap-0 overflow-hidden p-0 sm:max-w-[1120px]">
        <DialogHeader className="border-b p-6 pb-4 text-left">
          <DialogTitle className="text-[20px] tracking-tight">{item.title ? `Editar ${item.kind.toLowerCase()}: ${item.title}` : `Novo ${item.kind.toLowerCase()}`}</DialogTitle>
          <DialogDescription>Escreva em português e depois traduza. O cliente vê no idioma dele; sem tradução, vê em português.</DialogDescription>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex rounded-md border bg-background p-0.5" role="tablist" aria-label="Idioma">
              {LANGUAGES.map((code) => <button key={code} role="tab" aria-selected={language === code} onClick={() => setLanguage(code)} className={cn('flex h-8 items-center gap-1.5 rounded px-3 text-[13px] transition-colors', language === code ? 'bg-secondary font-medium' : 'text-muted-foreground')}>{code}{!translated(code) && <span className="h-1.5 w-1.5 rounded-full bg-ochre" aria-label="sem tradução" />}</button>)}
            </div>
            <div className="flex rounded-md border bg-background p-0.5" role="tablist" aria-label="Modo">
              <button role="tab" aria-selected={!preview} onClick={() => setPreview(false)} className={cn('flex h-8 items-center gap-1.5 rounded px-3 text-[13px]', !preview ? 'bg-secondary font-medium' : 'text-muted-foreground')}><NotebookPen className="h-4 w-4" />Editar</button>
              <button role="tab" aria-selected={preview} onClick={() => setPreview(true)} className={cn('flex h-8 items-center gap-1.5 rounded px-3 text-[13px]', preview ? 'bg-secondary font-medium' : 'text-muted-foreground')}><Eye className="h-4 w-4" />Como o cliente vê</button>
            </div>
          </div>
        </DialogHeader>
        <div className="min-h-0 flex-1 overflow-y-auto p-6">
          {!translated(language) && <p className="mb-4 rounded-md border border-dashed p-3 text-[13px] text-muted-foreground animate-in fade-in">Ainda sem tradução em {language}. Os campos começam com o texto em português para você traduzir.</p>}
          {preview ? (
            <div key={language} className="mx-auto grid max-w-[760px] gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div><div className="text-[13px] text-muted-foreground">{item.category}</div><h2 className="text-[28px] font-semibold tracking-[-0.03em]">{title || 'Sem título'}</h2><p className="mt-1 text-[15px] text-muted-foreground">{summary}</p></div>
              {steps.map((step, index) => (
                <div key={index} {...rise(index, 'grid gap-3')}>
                  <div className="flex items-start gap-3"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-foreground text-[13px] font-medium text-background tnum">{index + 1}</span><div><div className="text-[16px] font-medium">{step.title || 'Passo sem título'}</div><p className="text-[14px] text-muted-foreground">{step.text}</p></div></div>
                  {step.shot ? <GuideShot kind={step.shot} /> : <div className="grid h-40 place-items-center rounded-md border border-dashed text-[13px] text-muted-foreground">Sem print</div>}
                </div>
              ))}
            </div>
          ) : (
            <div key={language} className="grid gap-6 animate-in fade-in duration-300">
              <div className="grid gap-4 md:grid-cols-2">
                <Field id="help-title" label="Título"><Input id="help-title" value={title} onChange={(event) => setTitle(event.target.value)} placeholder={item.kind === 'Guia' ? 'Ex.: Ad tag' : 'Ex.: Como instalar a ad tag'} /></Field>
                <Field id="help-category" label="Categoria"><Select defaultValue={item.category}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>{['Tecnologias', 'Primeiros passos', 'Pagamentos', 'Anúncios', 'Relatórios'].map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent></Select></Field>
              </div>
              <Field id="help-summary" label="Resumo"><Textarea id="help-summary" rows={2} value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="Uma frase sobre o que o cliente aprende aqui." /></Field>
              {item.kind === 'Artigo' && <Field id="help-body" label="Texto do artigo"><Textarea id="help-body" rows={10} defaultValue={article ? `${article.summary}\n\n1. …\n2. …` : ''} placeholder="Escreva o artigo. Títulos com ##, listas com - e links normais." /></Field>}
              {item.kind === 'Guia' && <div className="grid gap-3">
                <div className="flex items-center justify-between"><h3 className="text-[16px] font-semibold tracking-tight">Passos</h3><span className="text-[13px] text-muted-foreground tnum">{steps.length} passo{steps.length === 1 ? '' : 's'}</span></div>
                {steps.map((step, index) => (
                  <div key={index} {...rise(index, 'grid gap-4 rounded-lg border bg-card p-4 md:grid-cols-[1fr_300px]')}>
                    <div className="grid content-start gap-3">
                      <div className="flex items-center gap-2"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-foreground text-[13px] font-medium text-background tnum">{index + 1}</span><Input value={step.title} onChange={(event) => patch(index, { title: event.target.value })} placeholder="Título do passo" aria-label={`Título do passo ${index + 1}`} />
                        <Button size="icon" variant="ghost" className="shrink-0" aria-label={`Tirar o passo ${index + 1}`} onClick={() => setSteps(steps.filter((_, position) => position !== index))}><Trash2 className="h-4 w-4" /></Button></div>
                      <Textarea rows={3} value={step.text} onChange={(event) => patch(index, { text: event.target.value })} placeholder="O que o cliente faz neste passo." aria-label={`Texto do passo ${index + 1}`} />
                    </div>
                    {step.shot ? (
                      <div className="group relative"><GuideShot kind={step.shot} /><Button size="sm" variant="outline" className="absolute bottom-2 right-2 opacity-0 transition-opacity group-hover:opacity-100" onClick={() => upload(index + 1)}><ImagePlus className="h-4 w-4" />Trocar print</Button></div>
                    ) : (
                      <button onClick={() => upload(index)} className="grid min-h-[180px] place-items-center rounded-md border border-dashed text-center text-[13px] text-muted-foreground transition-colors hover:border-foreground/40 hover:bg-muted/50">
                        <span className="grid justify-items-center gap-1"><ImagePlus className="h-5 w-5" />Subir o print do passo<span className="text-[12px]">PNG ou JPG, até 2 MB. Arraste ou clique.</span></span>
                      </button>
                    )}
                  </div>
                ))}
                <Button variant="outline" className="w-fit" onClick={() => setSteps([...steps, { title: '', text: '', shot: null }])}><Plus className="h-4 w-4" />Adicionar passo</Button>
              </div>}
            </div>
          )}
        </div>
        <DialogFooter className="flex-row items-center justify-between border-t p-4 sm:justify-between">
          <label className="flex items-center gap-2 text-[14px]"><Switch checked={published} onCheckedChange={setPublished} />{published ? 'Publicado: os clientes veem' : 'Rascunho: só a equipe vê'}</label>
          <div className="flex gap-2"><Button variant="outline" onClick={close}>Cancelar</Button><Button disabled={!title.trim()} onClick={() => save({ ...item, title, steps: steps.length, published, languages: Array.from(new Set([...item.languages, 'PT', language])) as Language[], updated: 'agora' })}><Check className="h-4 w-4" />Salvar</Button></div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
