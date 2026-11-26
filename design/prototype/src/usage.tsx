/* Uso do Avant e nutrição (M17): último acesso do cliente, uso diário contado pelo Avant e
   réguas de e-mail que disparam quando o cliente atinge um valor. Os e-mails saem pelo Resend. */
import { useMemo, useState } from 'react'
import { toast } from 'sonner'
import { ArrowDown, ArrowLeft, ArrowUp, ArrowUpDown, Columns3, Eye, MailX, Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { Badge, Body, Card, Field, PageHeader, Status } from './App'
import { TableFilters, passes } from './hubspot'
import { Mark } from './tiles'

type Go = (screen: string) => void
type Tone = 'ok' | 'warn' | 'bad' | 'neutral' | 'ochre'

const th = 'px-4 py-3 text-left text-[12px] font-medium uppercase tracking-[0.04em] text-muted-foreground'
const td = 'px-4 py-3 align-middle'
const COLD_DAYS = 14

/* ---------- 1. Último acesso na tabela de clientes ---------- */

export type ClientAccess = { label: string; daysAgo: number | null; clientDays: number; companyDays: number; companyPeople: number; seats: number }

export const CLIENT_ACCESS: Record<string, ClientAccess> = {
  'Blog Exemplo': { label: 'ontem, 19:05', daysAgo: 1, clientDays: 18, companyDays: 24, companyPeople: 4, seats: 5 },
  'Receitas da Vó': { label: '17/11, 09:10', daysAgo: 9, clientDays: 6, companyDays: 11, companyPeople: 2, seats: 2 },
  'Tech Notícias': { label: 'Nunca entrou', daysAgo: null, clientDays: 0, companyDays: 0, companyPeople: 0, seats: 0 },
  'Guia do Pet': { label: '19/10, 16:45', daysAgo: 38, clientDays: 0, companyDays: 3, companyPeople: 1, seats: 6 },
  'Apostas Já': { label: '16/09, 11:02', daysAgo: 71, clientDays: 0, companyDays: 0, companyPeople: 0, seats: 1 },
}

export const ACCESS_FILTERS = [['all', 'Todos'], ['7', '7 dias ou mais'], ['15', '15 dias ou mais'], ['30', '30 dias ou mais'], ['60', '60 dias ou mais'], ['never', 'Nunca entrou']] as const
export type AccessFilter = (typeof ACCESS_FILTERS)[number][0]
export type AccessSort = 'none' | 'recent' | 'oldest'
export type UsageColumn = 'clientDays' | 'companyDays' | 'companyPeople'

/** Diz se o cliente passa pelo filtro "Sem acesso há". */
export function matchesAccess(name: string, filter: AccessFilter) {
  const access = CLIENT_ACCESS[name]
  if (filter === 'all') return true
  if (filter === 'never') return !access || access.daysAgo === null
  return access?.daysAgo != null && access.daysAgo >= Number(filter)
}

/** Ordena os clientes pelo último acesso; quem nunca entrou fica sempre no fim. */
export function sortByAccess<Row extends { name: string }>(rows: Row[], sort: AccessSort) {
  if (sort === 'none') return rows
  const daysOf = (row: Row) => CLIENT_ACCESS[row.name]?.daysAgo ?? Number.POSITIVE_INFINITY
  return [...rows].sort((first, second) => {
    const firstDays = daysOf(first)
    const secondDays = daysOf(second)
    if (firstDays === Number.POSITIVE_INFINITY || secondDays === Number.POSITIVE_INFINITY) return firstDays - secondDays
    return sort === 'recent' ? firstDays - secondDays : secondDays - firstDays
  })
}

/** O seletor "Sem acesso há" da barra da tabela de clientes. */
export function AccessFilterSelect({ value, onChange }: { value: AccessFilter; onChange: (next: AccessFilter) => void }) {
  return (
    <Select value={value} onValueChange={(next) => onChange(next as AccessFilter)}>
      <SelectTrigger aria-label="Sem acesso há" className={cn('h-9 w-auto gap-2 bg-card text-[13px]', value !== 'all' && 'border-foreground/40')}><span className="text-muted-foreground">Sem acesso há:</span><SelectValue /></SelectTrigger>
      <SelectContent>{ACCESS_FILTERS.map(([key, label]) => <SelectItem key={key} value={key}>{label}</SelectItem>)}</SelectContent>
    </Select>
  )
}

/** O menu "Colunas" que mostra ou esconde as colunas de uso. */
export function UsageColumnsMenu({ shown, setShown }: { shown: UsageColumn[]; setShown: (next: UsageColumn[]) => void }) {
  const options: [UsageColumn, string][] = [['clientDays', 'Dias ativos do cliente (30d)'], ['companyDays', 'Dias ativos da Empresa (30d)'], ['companyPeople', 'Pessoas ativas na Empresa (30d)']]
  /** Liga ou desliga uma coluna. */
  const toggle = (column: UsageColumn) => setShown(shown.includes(column) ? shown.filter((item) => item !== column) : [...shown, column])
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild><Button variant="outline" size="sm" className="h-9 bg-card"><Columns3 className="h-4 w-4" />Colunas</Button></DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56"><DropdownMenuLabel>Colunas de uso</DropdownMenuLabel><DropdownMenuSeparator />
        {options.map(([column, label]) => <DropdownMenuCheckboxItem key={column} checked={shown.includes(column)} onCheckedChange={() => toggle(column)} onSelect={(event) => event.preventDefault()}>{label}</DropdownMenuCheckboxItem>)}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

/** O cabeçalho "Último acesso" que alterna a ordem: mais recente, mais antigo e sem ordem. */
export function AccessSortHeader({ sort, setSort, className }: { sort: AccessSort; setSort: (next: AccessSort) => void; className?: string }) {
  const next: Record<AccessSort, AccessSort> = { none: 'recent', recent: 'oldest', oldest: 'none' }
  const Icon = sort === 'recent' ? ArrowDown : sort === 'oldest' ? ArrowUp : ArrowUpDown
  const label = sort === 'recent' ? 'mais recente primeiro' : sort === 'oldest' ? 'mais antigo primeiro' : 'sem ordem'
  return (
    <th className={className} aria-sort={sort === 'none' ? 'none' : sort === 'recent' ? 'descending' : 'ascending'}>
      <button className="inline-flex items-center gap-1 hover:text-foreground" onClick={() => setSort(next[sort])} title={`Ordem: ${label}`}>Último acesso<Icon className="h-3.5 w-3.5" /></button>
    </th>
  )
}

/** A célula do último acesso do cliente (o login dele), em ocre depois de 14 dias sem entrar. */
export function LastAccessCell({ name }: { name: string }) {
  const access = CLIENT_ACCESS[name]
  if (!access || access.daysAgo === null) return <span className="inline-flex rounded-full border border-dashed px-2 py-0.5 text-[12px] text-muted-foreground">Nunca entrou</span>
  const cold = access.daysAgo >= COLD_DAYS
  return (
    <div title="O último login do cliente, com a conta dele. A equipe da Empresa aparece na página da Empresa.">
      <div className={cn('tnum text-[14px]', cold && 'text-ochre')}>{access.label}</div>
      {access.daysAgo > 1 && <div className="text-[12px] text-muted-foreground">há {access.daysAgo} dias</div>}
    </div>
  )
}

/** A célula de uma coluna de uso (do cliente ou da Empresa dele) nos últimos 30 dias. */
export function UsageCell({ name, column }: { name: string; column: UsageColumn }) {
  const access = CLIENT_ACCESS[name]
  if (!access || access.daysAgo === null) return <span className="text-muted-foreground">—</span>
  if (column === 'clientDays') return <span className="tnum">{access.clientDays}<span className="text-muted-foreground"> de 30</span></span>
  return column === 'companyDays'
    ? <span className="tnum">{access.companyDays}<span className="text-muted-foreground"> de 30</span></span>
    : <span className="tnum">{access.companyPeople}<span className="text-muted-foreground"> de {access.seats}</span></span>
}

/* ---------- 2. Página do cliente (o login dele) e página da Empresa (a equipe) ---------- */

type PersonAccess = { name: string; role: string; label: string; daysAgo: number | null; days: number; sessions: number; screens: number; minutes: string; area: string }
const PEOPLE: PersonAccess[] = [
  { name: 'Ana Souza', role: 'Gestor de tráfego', label: 'hoje, 14:32', daysAgo: 0, days: 22, sessions: 21, screens: 512, minutes: '6 h 02', area: 'Relatórios' },
  { name: 'Pedro Henrique', role: 'Dono (o cliente)', label: 'ontem, 19:05', daysAgo: 1, days: 18, sessions: 34, screens: 498, minutes: '6 h 10', area: 'Dashboard' },
  { name: 'João Lima', role: 'Financeiro', label: '20/11, 10:40', daysAgo: 6, days: 4, sessions: 5, screens: 244, minutes: '3 h 05', area: 'Comissões' },
  { name: 'Carla Mendes', role: 'Marketing', label: '05/11, 15:12', daysAgo: 21, days: 0, sessions: 1, screens: 30, minutes: '25 min', area: 'Inventário' },
  { name: 'Rafael Dias', role: 'Gestor de tráfego', label: 'Convite pendente', daysAgo: null, days: 0, sessions: 0, screens: 0, minutes: '—', area: '—' },
]
const CLIENT_DAYS = [1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0]
const CLIENT_AREAS = [['Dashboard', 41], ['Relatórios', 29], ['Comissões', 14], ['Inventário', 10], ['Empresa', 6]] as const
const DAILY_PEOPLE = [2, 3, 0, 0, 3, 4, 3, 2, 3, 1, 0, 2, 3, 4, 3, 3, 2, 0, 0, 3, 4, 2, 3, 3, 1, 0, 2, 3, 4, 3]
const AREAS = [['Relatórios', 38], ['Dashboard', 27], ['Inventário', 18], ['Rewards', 9], ['Comissões', 5], ['Empresa', 3]] as const

/** Um número do card de uso, com o rótulo e o total possível. */
function UsageFigure({ label, value, of, note }: { label: string; value: string; of?: string; note?: string }) {
  return (
    <div className="rounded-md border p-4">
      <div className="text-[12px] font-medium text-muted-foreground">{label}</div>
      <div className="mt-1 text-[22px] font-semibold tracking-[-0.02em] tnum">{value}{of && <span className="text-[14px] font-normal text-muted-foreground"> {of}</span>}</div>
      {note && <div className="mt-0.5 text-[12px] text-muted-foreground">{note}</div>}
    </div>
  )
}

/** A data (dd/mm) de tantos dias antes de hoje, 26/11/2026. */
function dayLabel(daysBefore: number) {
  const day = new Date(2026, 10, 26 - daysBefore)
  return `${String(day.getDate()).padStart(2, '0')}/${String(day.getMonth() + 1).padStart(2, '0')}`
}

/** Barras por dia nos últimos 30 dias, em SVG simples e parado. */
function DailyBars({ values, label, unit }: { values: number[]; label: string; unit: string }) {
  const width = 600
  const height = 120
  const peak = Math.max(...values, 1)
  const slot = width / values.length
  return (
    <svg viewBox={`0 0 ${width} ${height + 18}`} className="h-[150px] w-full" role="img" aria-label={label}>
      {values.map((value, index) => {
        const barHeight = value ? Math.max(4, (value / peak) * height) : 2
        return <rect key={index} x={index * slot + 3} y={height - barHeight} width={slot - 6} height={barHeight} rx={2} className={value ? 'fill-foreground' : 'fill-muted-foreground/30'}><title>{`${dayLabel(values.length - 1 - index)}: ${value} ${unit}`}</title></rect>
      })}
      <text x={0} y={height + 15} className="fill-muted-foreground text-[11px]">28/10</text>
      <text x={width} y={height + 15} textAnchor="end" className="fill-muted-foreground text-[11px]">hoje</text>
    </svg>
  )
}

/** As abas de período (7 ou 30 dias) dos cards de uso. */
function PeriodTabs({ period, setPeriod }: { period: '7' | '30'; setPeriod: (next: '7' | '30') => void }) {
  return (
    <div className="flex rounded-md border bg-background p-0.5 sm:w-fit" role="tablist" aria-label="Período">
      {([['7', 'Últimos 7 dias'], ['30', 'Últimos 30 dias']] as const).map(([key, label]) => <button key={key} role="tab" aria-selected={period === key} onClick={() => setPeriod(key)} className={cn('h-8 rounded px-3 text-[13px]', period === key ? 'bg-secondary font-medium' : 'text-muted-foreground hover:text-foreground')}>{label}</button>)}
    </div>
  )
}

/** As áreas mais usadas, com a parte de cada uma nas telas vistas. */
function AreaBars({ areas }: { areas: readonly (readonly [string, number])[] }) {
  return (
    <div><div className="mb-2 text-[13px] font-medium">Áreas mais usadas <span className="font-normal text-muted-foreground">(telas vistas)</span></div>
      <ul className="grid gap-2">{areas.map(([area, share]) => (
        <li key={area} className="grid grid-cols-[96px_1fr_40px] items-center gap-2 text-[13px]"><span>{area}</span><span className="h-2 overflow-hidden rounded-full bg-muted"><span className="block h-full rounded-full bg-foreground" style={{ width: `${share}%` }} /></span><span className="text-right tnum text-muted-foreground">{share}%</span></li>
      ))}</ul>
    </div>
  )
}

/** O card "Uso do cliente" da página do cliente: o uso do próprio login dele, sem a equipe. */
export function ClientAccessCard({ go, empty = false }: { go: Go; empty?: boolean }) {
  const [period, setPeriod] = useState<'7' | '30'>('30')
  const figures = period === '30'
    ? [['Último acesso', 'ontem, 19:05', ''], ['Dias ativos', '18', 'de 30'], ['Sessões', '34', ''], ['Telas vistas', '498', ''], ['Minutos ativos', '6 h 10', '']]
    : [['Último acesso', 'ontem, 19:05', ''], ['Dias ativos', '4', 'de 7'], ['Sessões', '9', ''], ['Telas vistas', '121', ''], ['Minutos ativos', '1 h 35', '']]
  return (
    <Card title="Uso do cliente" className="lg:col-span-2"
      desc="O uso do login do cliente (Pedro Henrique, pedro@blogexemplo.com). A equipe dele e o total da Empresa ficam na página da Empresa. Guardado por 13 meses."
      footer={empty ? undefined : <Button size="sm" variant="outline" onClick={() => go('empresauso')}>Ver uso da Empresa</Button>}
      footerNote={empty ? undefined : 'Vai para o HubSpot como avant_last_login e avant_active_days_30d.'}>
      {empty ? <p className="py-4 text-center text-[14px] text-muted-foreground">O cliente nunca entrou: ainda não aceitou o convite.</p> : <div className="grid gap-6">
        <PeriodTabs period={period} setPeriod={setPeriod} />
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">{figures.map(([label, value, of]) => <UsageFigure key={label} label={label} value={value} of={of || undefined} />)}</div>
        <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
          <div><div className="mb-2 text-[13px] font-medium">Dias em que o cliente entrou</div><DailyBars values={CLIENT_DAYS} label="Dias em que o cliente entrou nos últimos 30 dias" unit="(1 = entrou)" /></div>
          <AreaBars areas={CLIENT_AREAS} />
        </div>
      </div>}
    </Card>
  )
}

/** O card "Uso do Avant" da página da Empresa: dias e pessoas ativas da equipe, gráfico diário e áreas mais usadas. */
export function CompanyUsageCard() {
  const [period, setPeriod] = useState<'7' | '30'>('30')
  const figures = period === '30'
    ? [['Dias ativos', '24', 'de 30'], ['Pessoas ativas', '4', 'de 5'], ['Sessões', '61', ''], ['Telas vistas', '1.284', ''], ['Minutos ativos', '15 h 42', '']]
    : [['Dias ativos', '5', 'de 7'], ['Pessoas ativas', '3', 'de 5'], ['Sessões', '14', ''], ['Telas vistas', '297', ''], ['Minutos ativos', '3 h 50', '']]
  return (
    <Card title="Uso do Avant" className="lg:col-span-2"
      desc="A soma do uso de cada pessoa da equipe, o cliente incluído. O uso de cada um está na tabela abaixo. Um dia ativo é um dia em que alguém da equipe entrou. A equipe Groone entrando na Empresa não conta."
      footerNote="Vai para o HubSpot como avant_company_active_days_30d e avant_active_people_30d.">
      <div className="grid gap-6">
        <PeriodTabs period={period} setPeriod={setPeriod} />
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">{figures.map(([label, value, of]) => <UsageFigure key={label} label={label} value={value} of={of || undefined} />)}</div>
        <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
          <div><div className="mb-2 text-[13px] font-medium">Pessoas ativas por dia</div><DailyBars values={DAILY_PEOPLE} label="Pessoas ativas por dia nos últimos 30 dias" unit="pessoa(s)" /></div>
          <AreaBars areas={AREAS} />
        </div>
      </div>
    </Card>
  )
}

/** O card "Uso por pessoa" da página da Empresa: o login e o uso de cada pessoa da equipe. */
export function CompanyTeamAccessCard() {
  const [values, setValues] = useState<Record<string, string>>({})
  const [query, setQuery] = useState('')
  const rows = useMemo(() => PEOPLE.filter((person) => passes({ name: person.name, role: person.role }, values, query, ['name'])), [values, query])
  return (
    <section className="overflow-hidden rounded-lg border bg-card lg:col-span-2">
      <div className="p-6 pb-4"><h2 className="text-[20px] font-semibold tracking-tight">Uso por pessoa</h2><p className="mt-2 text-[14px] text-muted-foreground">O último login e o uso de cada pessoa nos últimos 30 dias. O card acima é a soma destas linhas.</p></div>
      <TableFilters defs={[{ key: 'role', label: 'Papel', options: [...new Set(PEOPLE.map((person) => person.role))] }]} initial={['role']} values={values} setValues={setValues} query={query} setQuery={setQuery} placeholder="Buscar pessoa" />
      <div className="overflow-x-auto"><table className="w-full min-w-[880px] text-[14px]"><thead className="border-b"><tr><th className={th}>Pessoa</th><th className={th}>Último acesso</th><th className={th}>Dias ativos</th><th className={th}>Sessões</th><th className={th}>Telas</th><th className={th}>Minutos</th><th className={th}>Área mais usada</th></tr></thead>
        <tbody className="divide-y">{rows.map((person) => (
          <tr key={person.name} className="hover:bg-muted/50">
            <td className={td}><div className="font-medium">{person.name}</div><div className="text-[12px] text-muted-foreground">{person.role}</div></td>
            <td className={td}>{person.daysAgo === null ? <span className="text-muted-foreground">{person.label}</span> : <span className={cn('tnum', person.daysAgo >= COLD_DAYS && 'text-ochre')}>{person.label}{person.daysAgo > 1 && <span className="text-[12px] text-muted-foreground"> · há {person.daysAgo} dias</span>}</span>}</td>
            <td className={td}><span className="tnum">{person.days}</span><span className="text-muted-foreground"> de 30</span></td>
            <td className={cn(td, 'tnum')}>{person.sessions}</td>
            <td className={cn(td, 'tnum')}>{person.screens.toLocaleString('pt-BR')}</td>
            <td className={cn(td, 'tnum')}>{person.minutes}</td>
            <td className={cn(td, 'text-muted-foreground')}>{person.area}</td>
          </tr>
        ))}
        {!rows.length && <tr><td colSpan={7} className="py-10 text-center text-muted-foreground">Ninguém com esses filtros.</td></tr>}</tbody></table></div>
    </section>
  )
}

/** O card "Nutrição" da página do cliente: em que régua ele está e os e-mails que recebeu. */
export function ClientNurtureCard({ go, empty = false }: { go: Go; empty?: boolean }) {
  const history = [
    { when: '19/11, 10:00', text: 'Engajado · e-mail 1 de 1 enviado para pedro@blogexemplo.com', state: 'Aberto', tone: 'ok' as Tone },
    { when: '02/10, 10:00', text: 'Onboarding parado · e-mail 2 de 3 enviado', state: 'Saiu: ad tag publicada', tone: 'neutral' as Tone },
    { when: '25/09, 10:00', text: 'Onboarding parado · e-mail 1 de 3 enviado', state: 'Aberto', tone: 'ok' as Tone },
  ]
  return (
    <Card title="Nutrição" className="lg:col-span-2" desc="As réguas de e-mail em que o cliente entrou. Os e-mails vão para o cliente; ele fica em uma régua por vez." footer={<Button size="sm" variant="outline" onClick={() => go('nutricaointerno')}>Ver réguas</Button>}>
      {empty ? <p className="text-[14px] text-muted-foreground">Fora das réguas: só clientes ativos entram.</p> : <>
        <div className="flex flex-wrap items-center gap-2 text-[14px]"><Status tone="ok">Na régua Engajado</Status><span className="text-muted-foreground">desde 19/11 · sem e-mails pendentes</span></div>
        <ul className="mt-4 divide-y border-t">{history.map((item) => <li key={item.when} className="flex flex-wrap items-start justify-between gap-2 py-3 text-[13px]"><div><div>{item.text}</div><div className="tnum text-muted-foreground">{item.when}</div></div><Status tone={item.tone}>{item.state}</Status></li>)}</ul>
      </>}
    </Card>
  )
}

/** A página do cliente ativo Blog Exemplo, só com os cards novos: acesso dele e nutrição. */
export function ClientUsageScreen({ go }: { go: Go }) {
  return (
    <>
      <PageHeader title="Blog Exemplo" sub="Cliente ativo · login de Pedro Henrique (pedro@blogexemplo.com) · Empresa: Blog Exemplo Mídia. Os outros cards da página do cliente ficam como estão."
        back={<button onClick={() => go('interno')} className="inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft className="h-3.5 w-3.5" />Clientes</button>} />
      <Body className="lg:grid-cols-2">
        <ClientAccessCard go={go} />
        <ClientNurtureCard go={go} />
      </Body>
    </>
  )
}

/** A página da Empresa Blog Exemplo Mídia, só com os cards novos: uso da equipe e último acesso de cada pessoa. */
export function CompanyUsageScreen({ go }: { go: Go }) {
  return (
    <>
      <PageHeader title="Blog Exemplo Mídia" sub="Empresa do cliente Blog Exemplo · 5 pessoas na equipe. Os outros cards da página da Empresa ficam como estão."
        back={<button onClick={() => go('clienteuso')} className="inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft className="h-3.5 w-3.5" />Cliente Blog Exemplo</button>} />
      <Body className="lg:grid-cols-2">
        <CompanyUsageCard />
        <CompanyTeamAccessCard />
      </Body>
    </>
  )
}

/* ---------- 3. Ferramentas > Nutrição ---------- */

type Measure = 'days_without_access' | 'active_days_30d' | 'client_sessions_30d' | 'company_active_days_30d' | 'active_people_30d' | 'screens_30d' | 'minutes_30d' | 'onboarding_step'
const MEASURES: Record<Measure, { label: string; unit: string }> = {
  days_without_access: { label: 'Dias sem o cliente entrar', unit: 'dias' },
  active_days_30d: { label: 'Dias ativos do cliente (30d)', unit: 'dias' },
  client_sessions_30d: { label: 'Sessões do cliente (30d)', unit: 'sessões' },
  company_active_days_30d: { label: 'Dias ativos da Empresa (30d)', unit: 'dias' },
  active_people_30d: { label: 'Pessoas ativas na Empresa (30d)', unit: 'pessoas' },
  screens_30d: { label: 'Telas vistas na Empresa (30d)', unit: 'telas' },
  minutes_30d: { label: 'Minutos ativos na Empresa (30d)', unit: 'minutos' },
  onboarding_step: { label: 'Etapa do onboarding parada há', unit: 'dias' },
}
const COMPARISONS = [['gte', 'maior ou igual a'], ['lte', 'menor ou igual a'], ['eq', 'igual a']] as const
type Comparison = (typeof COMPARISONS)[number][0]
const STEPS = ['Network', 'Sites', 'Ad tag', 'Instalação']
const LANGS = ['PT', 'EN', 'ES'] as const
type Lang = (typeof LANGS)[number]
type NurtureEmail = { id: number; delayDays: number; subject: Record<Lang, string>; body: Record<Lang, string> }
type Repeat = 'once' | '30' | '60' | '90'
type NurtureRule = {
  id: string; name: string; priority: number; on: boolean; measure: Measure; comparison: Comparison; value: number; step?: string
  manager: string; minAgeDays: number; emails: NurtureEmail[]; hubspotTask: boolean; taskDue: string; stage: string; repeat: Repeat
  inNow: number; sent30: number; openRate: number; returned: number | null
}

/** Um e-mail da régua com o mesmo texto nos três idiomas (o protótipo só traduz o assunto). */
function email(id: number, delayDays: number, subject: [string, string, string], body: string): NurtureEmail {
  return { id, delayDays, subject: { PT: subject[0], EN: subject[1], ES: subject[2] }, body: { PT: body, EN: body, ES: body } }
}

const INITIAL_RULES: NurtureRule[] = [
  {
    id: 'onboarding', name: 'Onboarding parado', priority: 1, on: true, measure: 'onboarding_step', comparison: 'gte', value: 7, step: 'Ad tag', manager: 'all', minAgeDays: 0,
    emails: [
      email(1, 0, ['Falta pouco para seus anúncios rodarem', 'You are close to running ads', 'Falta poco para tus anuncios'], 'Oi {nome},\n\nA {empresa} já tem os sites no Avant. Falta publicar a ad tag para os anúncios começarem a rodar. O guia leva uns 5 minutos:\n\n{link_guia_ad_tag}\n\nQualquer dúvida, fale com {gerente}.'),
      email(2, 4, ['Precisa de ajuda com a ad tag?', 'Need help with the ad tag?', '¿Necesitas ayuda con el ad tag?'], 'Oi {nome},\n\nVimos que a ad tag da {empresa} ainda não foi publicada. Quer que {gerente} faça junto com você? Responda este e-mail ou marque um horário:\n\n{link_agenda}'),
      email(3, 7, ['Último lembrete: ad tag da {empresa}', 'Last reminder: {empresa} ad tag', 'Último recordatorio: ad tag de {empresa}'], 'Oi {nome},\n\nSem a ad tag, a {empresa} não recebe receita do GAM. Publicar leva poucos minutos:\n\n{link_guia_ad_tag}'),
    ],
    hubspotTask: true, taskDue: '1 dia útil', stage: 'onboarding_parado', repeat: 'once', inNow: 3, sent30: 9, openRate: 67, returned: 44,
  },
  {
    id: 'cold', name: 'Esfriando', priority: 2, on: true, measure: 'days_without_access', comparison: 'gte', value: 14, manager: 'all', minAgeDays: 30,
    emails: [
      email(1, 0, ['Sua receita da semana está no Avant', 'Your weekly revenue is in Avant', 'Tus ingresos de la semana están en Avant'], 'Oi {nome},\n\nFaz {dias_sem_acesso} dias que você não entra no Avant. A receita dos últimos 7 dias e os sites que mais cresceram estão no painel:\n\n{link_avant}'),
      email(2, 5, ['{gerente} quer falar com você', '{gerente} would like to talk', '{gerente} quiere hablar contigo'], 'Oi {nome},\n\nSou {gerente}, da Groone. Quer revisar os resultados da {empresa} comigo? É só responder este e-mail.'),
    ],
    hubspotTask: true, taskDue: 'hoje', stage: 'esfriando', repeat: '60', inNow: 6, sent30: 31, openRate: 48, returned: 35,
  },
  {
    id: 'engaged', name: 'Engajado', priority: 3, on: true, measure: 'company_active_days_30d', comparison: 'gte', value: 15, manager: 'all', minAgeDays: 30,
    emails: [email(1, 0, ['Dicas para ir além no Avant', 'Tips to go further with Avant', 'Consejos para ir más allá en Avant'], 'Oi {nome},\n\nA equipe da {empresa} usa o Avant quase todo dia. Você já conhece os relatórios customizados e as regras de preço? {link_ajuda}')],
    hubspotTask: false, taskDue: '1 semana', stage: 'engajado', repeat: '90', inNow: 5, sent30: 12, openRate: 75, returned: null,
  },
  {
    id: 'solo', name: 'Só o dono usa', priority: 4, on: false, measure: 'active_people_30d', comparison: 'lte', value: 1, manager: 'all', minAgeDays: 60,
    emails: [email(1, 0, ['Convide sua equipe para o Avant', 'Invite your team to Avant', 'Invita a tu equipo a Avant'], 'Oi {nome},\n\nVocê pode dar acesso ao Avant para quem cuida do tráfego e do financeiro da {empresa}, cada um com o seu papel:\n\n{link_equipe}')],
    hubspotTask: false, taskDue: '1 semana', stage: 'so_dono', repeat: 'once', inNow: 0, sent30: 0, openRate: 0, returned: null,
  },
]
const MANAGERS = [['all', 'Qualquer gerente'], ['marina', 'Marina Souza'], ['joao', 'João Pedro'], ['none', 'Sem gerente']] as const
const REPEATS: [Repeat, string][] = [['once', 'Uma vez por cliente'], ['30', 'De novo depois de 30 dias fora da régua'], ['60', 'De novo depois de 60 dias fora da régua'], ['90', 'De novo depois de 90 dias fora da régua']]
const VARIABLES = ['{nome}', '{empresa}', '{gerente}', '{dias_sem_acesso}', '{link_avant}', '{link_guia_ad_tag}', '{link_equipe}', '{link_agenda}']

/** A condição da regra em uma frase, como aparece na lista e no editor. */
function conditionText(rule: Pick<NurtureRule, 'measure' | 'comparison' | 'value' | 'step'>) {
  const measure = MEASURES[rule.measure]
  const comparison = COMPARISONS.find(([key]) => key === rule.comparison)?.[1] ?? ''
  if (rule.measure === 'onboarding_step') return `Parado na etapa ${rule.step ?? 'Ad tag'} há ${rule.value} dias ou mais`
  return `${measure.label} ${comparison} ${rule.value} ${measure.unit}`
}

/** Um número grande do topo da tela de nutrição, parado (card de dados). */
function NurtureKpi({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-lg border bg-card p-5">
      <div className="text-[13px] font-medium text-muted-foreground">{label}</div>
      <div className="mt-1 text-[28px] font-semibold tracking-[-0.03em] tnum">{value}</div>
      <div className="mt-1 text-[12px] text-muted-foreground">{note}</div>
    </div>
  )
}

/** A lista das réguas de nutrição, com o desempenho de cada uma e a chave para ligar. */
export function NurtureScreen({ go, rules, setRules, open }: { go: Go; rules: NurtureRule[]; setRules: (next: NurtureRule[]) => void; open: (ruleId: string | null) => void }) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [query, setQuery] = useState('')
  const rows = useMemo(() => rules.filter((rule) => passes({ name: rule.name, state: rule.on ? 'Ligada' : 'Desligada', measure: MEASURES[rule.measure].label, task: rule.hubspotTask ? 'Com tarefa' : 'Sem tarefa' }, values, query, ['name'])), [rules, values, query])
  /** Liga ou desliga a régua; desligar para os e-mails que faltam. */
  const toggle = (rule: NurtureRule, on: boolean) => {
    setRules(rules.map((item) => (item.id === rule.id ? { ...item, on } : item)))
    toast.success(on ? `${rule.name} ligada` : `${rule.name} desligada`, { description: on ? 'Na próxima hora o Avant confere quem entra.' : 'Os e-mails que faltam não saem. Quem está na régua sai dela.' })
  }
  return (
    <>
      <PageHeader title="Nutrição" sub="E-mails automáticos para os clientes que atingem um valor de uso. O Avant confere as regras a cada hora e manda pelo Resend, com o remetente da Groone."
        actions={<Button onClick={() => { open(null); go('nutricaoregrainterno') }}><Plus className="h-4 w-4" />Nova régua</Button>} />
      <Body>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <NurtureKpi label="Clientes em régua agora" value="14" note="de 52 clientes ativos" />
          <NurtureKpi label="E-mails enviados" value="52" note="nos últimos 30 dias" />
          <NurtureKpi label="Abertura" value="58%" note="dos e-mails enviados em 30 dias" />
          <NurtureKpi label="Voltaram ao Avant" value="38%" note="entraram até 14 dias depois do e-mail" />
        </div>
        <section className="overflow-hidden rounded-lg border bg-card">
          <div className="p-6 pb-4"><h2 className="text-[20px] font-semibold tracking-tight">Réguas</h2><p className="mt-2 text-[14px] text-muted-foreground">Um cliente fica em uma régua por vez: se cair em mais de uma, vale a de menor prioridade. Sai da régua quando deixa a condição, e os e-mails que faltam não saem.</p></div>
          <TableFilters defs={[{ key: 'state', label: 'Situação', options: ['Ligada', 'Desligada'] }, { key: 'measure', label: 'Medida', options: Object.values(MEASURES).map((measure) => measure.label) }, { key: 'task', label: 'Tarefa no HubSpot', options: ['Com tarefa', 'Sem tarefa'] }]} initial={['state']} values={values} setValues={setValues} query={query} setQuery={setQuery} placeholder="Buscar régua" />
          <div className="overflow-x-auto"><table className="w-full min-w-[960px] text-[14px]">
            <thead className="border-b"><tr><th className={cn(th, 'w-12')}>#</th><th className={th}>Régua</th><th className={th}>E-mails</th><th className={th}>Na régua</th><th className={th}>Enviados (30d)</th><th className={th}>Abertura</th><th className={th}>Voltaram</th><th className={th}>Ligada</th><th className={cn(th, 'w-16')}><span className="sr-only">Abrir</span></th></tr></thead>
            <tbody className="divide-y">{rows.map((rule) => (
              <tr key={rule.id} className={cn('hover:bg-muted/50', !rule.on && 'text-muted-foreground')}>
                <td className={cn(td, 'tnum text-muted-foreground')}>{rule.priority}</td>
                <td className={td}><button className="font-medium text-foreground hover:underline" onClick={() => { open(rule.id); go('nutricaoregrainterno') }}>{rule.name}</button><div className="text-[13px] text-muted-foreground">{conditionText(rule)}{rule.hubspotTask && ' · tarefa no HubSpot'}</div></td>
                <td className={cn(td, 'tnum')}>{rule.emails.length}</td>
                <td className={cn(td, 'tnum')}>{rule.inNow}</td>
                <td className={cn(td, 'tnum')}>{rule.sent30}</td>
                <td className={cn(td, 'tnum')}>{rule.sent30 ? `${rule.openRate}%` : '—'}</td>
                <td className={cn(td, 'tnum')} title="Clientes que entraram no Avant até 14 dias depois de um e-mail da régua.">{rule.returned === null ? <span className="text-muted-foreground">não se aplica</span> : `${rule.returned}%`}</td>
                <td className={td}><Switch checked={rule.on} onCheckedChange={(on) => toggle(rule, on)} aria-label={`Ligar ${rule.name}`} /></td>
                <td className={td}><Button variant="ghost" size="sm" onClick={() => { open(rule.id); go('nutricaoregrainterno') }}>Abrir</Button></td>
              </tr>
            ))}
            {!rows.length && <tr><td colSpan={9} className="py-10 text-center text-muted-foreground">Nenhuma régua com esses filtros.</td></tr>}</tbody>
          </table></div>
        </section>
      </Body>
    </>
  )
}

const MEMBERS = [
  { client: 'Guia do Pet', manager: 'Marina Souza', since: '12/11', step: 'E-mail 2 de 2 enviado 17/11', opened: 'Abriu', state: 'Na régua' },
  { client: 'Portal da Cidade', manager: 'João Pedro', since: '20/11', step: 'E-mail 1 de 2 enviado 20/11', opened: 'Abriu', state: 'Na régua' },
  { client: 'Açaí Notícias', manager: 'Marina Souza', since: '22/11', step: 'E-mail 1 de 2 enviado 22/11', opened: 'Não abriu', state: 'Na régua' },
  { client: 'Receitas da Vó', manager: 'Marina Souza', since: '10/11', step: 'E-mail 1 de 2 enviado 10/11', opened: 'Abriu', state: 'Voltou' },
  { client: 'Blog do Zé', manager: 'João Pedro', since: '01/11', step: 'E-mail 2 de 2 enviado 06/11', opened: 'Não abriu', state: 'Concluiu' },
  { client: 'Moda Fácil', manager: 'Sem gerente', since: '28/10', step: 'E-mail 1 de 2 enviado 28/10', opened: 'Não abriu', state: 'Descadastrou' },
]
const SENDS = [
  { when: '22/11, 10:00', client: 'Açaí Notícias', to: 'contato@acainoticias.com', mail: 'E-mail 1 · PT', state: 'Entregue' },
  { when: '20/11, 10:00', client: 'Portal da Cidade', to: 'joana@portaldacidade.com', mail: 'E-mail 1 · PT', state: 'Clicou' },
  { when: '17/11, 10:00', client: 'Guia do Pet', to: 'marina@guiadopet.com.br', mail: 'E-mail 2 · PT', state: 'Aberto' },
  { when: '10/11, 10:00', client: 'Receitas da Vó', to: 'ana@receitasdavo.com.br', mail: 'E-mail 1 · PT', state: 'Clicou' },
  { when: '06/11, 10:00', client: 'Blog do Zé', to: 'ze@blogdoze.com', mail: 'E-mail 2 · ES', state: 'Devolvido' },
]
const MEMBER_TONE: Record<string, Tone> = { 'Na régua': 'ochre', Voltou: 'ok', Concluiu: 'neutral', Descadastrou: 'bad' }
const SEND_TONE: Record<string, Tone> = { Entregue: 'neutral', Aberto: 'ok', Clicou: 'ok', Devolvido: 'bad' }

/** O editor de um e-mail da régua: espera, assunto e corpo em cada idioma, com as variáveis. */
function EmailEditor({ mail, index, total, update, remove, preview }: { mail: NurtureEmail; index: number; total: number; update: (next: NurtureEmail) => void; remove: () => void; preview: (lang: Lang) => void }) {
  const [lang, setLang] = useState<Lang>('PT')
  return (
    <li className="rounded-md border p-4">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-[14px] font-medium">E-mail {index + 1}</span>
        {index === 0 ? <span className="text-[13px] text-muted-foreground">sai logo que o cliente entra na régua</span> : <span className="flex items-center gap-2 text-[13px] text-muted-foreground">sai<Input aria-label="Dias depois do anterior" type="number" min={1} max={30} className="h-8 w-16 tnum" value={mail.delayDays} onChange={(event) => update({ ...mail, delayDays: Number(event.target.value) })} />dias depois do anterior</span>}
        <div className="ml-auto flex items-center gap-2">
          <div className="flex rounded-md border bg-background p-0.5" role="tablist" aria-label="Idioma">{LANGS.map((option) => <button key={option} role="tab" aria-selected={lang === option} onClick={() => setLang(option)} className={cn('h-7 rounded px-2 text-[12px]', lang === option ? 'bg-secondary font-medium' : 'text-muted-foreground')}>{option}</button>)}</div>
          <Button size="sm" variant="outline" onClick={() => preview(lang)}><Eye className="h-4 w-4" />Ver</Button>
          {total > 1 && <Button size="icon" variant="ghost" className="h-8 w-8" aria-label={`Tirar o e-mail ${index + 1}`} onClick={remove}><Trash2 className="h-4 w-4" /></Button>}
        </div>
      </div>
      <div className="mt-4 grid gap-3">
        <Field id={`mail-${mail.id}-subject`} label={`Assunto (${lang})`}><Input id={`mail-${mail.id}-subject`} className="h-10" value={mail.subject[lang]} onChange={(event) => update({ ...mail, subject: { ...mail.subject, [lang]: event.target.value } })} /></Field>
        <Field id={`mail-${mail.id}-body`} label={`Texto (${lang})`} hint="O link de descadastro e o rodapé da Groone entram sozinhos no fim."><Textarea id={`mail-${mail.id}-body`} rows={6} value={mail.body[lang]} onChange={(event) => update({ ...mail, body: { ...mail.body, [lang]: event.target.value } })} /></Field>
      </div>
    </li>
  )
}

/** O e-mail como o cliente vê, com as variáveis trocadas pelos dados de um cliente de exemplo. */
function EmailPreview({ mail, lang, close }: { mail: NurtureEmail | null; lang: Lang; close: () => void }) {
  const sample: Record<string, string> = { '{nome}': 'Marina', '{empresa}': 'Guia do Pet', '{gerente}': 'Marina Souza', '{dias_sem_acesso}': '16', '{link_avant}': 'avant.groone.com', '{link_guia_ad_tag}': 'avant.groone.com/ajuda/ad-tag', '{link_equipe}': 'avant.groone.com/equipe', '{link_agenda}': 'avant.groone.com/agenda/marina', '{link_ajuda}': 'avant.groone.com/ajuda' }
  /** Troca as variáveis pelo exemplo. */
  const fill = (text: string) => Object.entries(sample).reduce((current, [key, value]) => current.split(key).join(value), text)
  return (
    <Dialog open={mail !== null} onOpenChange={(isOpen) => !isOpen && close()}>
      <DialogContent className="max-w-[560px]">
        <DialogHeader><DialogTitle>Como o cliente vê</DialogTitle><DialogDescription>Com os dados de Guia do Pet. De: Groone Avant &lt;avant@groone.com&gt;</DialogDescription></DialogHeader>
        {mail && <div className="rounded-md border bg-background">
          <div className="border-b px-5 py-3 text-[14px] font-medium">{fill(mail.subject[lang])}</div>
          <div className="px-5 py-4"><div className="mb-4 flex items-center gap-2"><Mark size={22} /><span className="text-[14px] font-semibold">Avant</span></div><p className="whitespace-pre-line text-[14px]">{fill(mail.body[lang])}</p></div>
          <div className="border-t px-5 py-3 text-[12px] text-muted-foreground">Você recebe este e-mail porque a Guia do Pet usa o Avant. <span className="text-link underline">Não quero mais receber estes e-mails</span>. Groone LLC.</div>
        </div>}
      </DialogContent>
    </Dialog>
  )
}

/** Uma régua vazia e desligada, para o botão "Nova régua". */
function newRule(): NurtureRule {
  return { id: `rule-${Date.now()}`, name: '', priority: 5, on: false, measure: 'days_without_access', comparison: 'gte', value: 7, manager: 'all', minAgeDays: 0, emails: [email(1, 0, ['', '', ''], '')], hubspotTask: false, taskDue: '1 dia útil', stage: '', repeat: 'once', inNow: 0, sent30: 0, openRate: 0, returned: null }
}

/** Uma régua de nutrição: condição, quem entra, e-mails, HubSpot e repetição, mais os clientes e os envios. */
export function NurtureRuleScreen({ go, rule, save }: { go: Go; rule: NurtureRule | null; save: (next: NurtureRule) => void }) {
  const [draft, setDraft] = useState<NurtureRule>(() => rule ?? newRule())
  const [tab, setTab] = useState<'rule' | 'members' | 'sends'>('rule')
  const [previewing, setPreviewing] = useState<{ mail: NurtureEmail; lang: Lang } | null>(null)
  const [memberValues, setMemberValues] = useState<Record<string, string>>({})
  const [memberQuery, setMemberQuery] = useState('')
  const [sendValues, setSendValues] = useState<Record<string, string>>({})
  const [sendQuery, setSendQuery] = useState('')
  const members = useMemo(() => MEMBERS.filter((row) => passes(row, memberValues, memberQuery, ['client'])), [memberValues, memberQuery])
  const sends = useMemo(() => SENDS.filter((row) => passes(row, sendValues, sendQuery, ['client', 'to'])), [sendValues, sendQuery])
  const matching = draft.measure === 'days_without_access' ? Math.max(0, 20 - draft.value) : draft.measure === 'company_active_days_30d' ? Math.max(0, 22 - draft.value) : 4
  const valid = draft.name.trim().length >= 3 && draft.emails.every((mail) => LANGS.every((lang) => mail.subject[lang].trim() && mail.body[lang].trim()))
  /** Troca um campo do rascunho. */
  const set = <Key extends keyof NurtureRule>(key: Key, value: NurtureRule[Key]) => setDraft({ ...draft, [key]: value })
  /** Grava a régua e volta para a lista. */
  const submit = () => { save(draft); toast.success(rule ? 'Régua salva' : 'Régua criada', { description: draft.on ? 'Na próxima hora o Avant confere quem entra.' : 'Ela fica desligada até você ligar.' }); go('nutricaointerno') }
  const tabs = rule ? ([['rule', 'Régua'], ['members', `Clientes (${MEMBERS.length})`], ['sends', 'Envios']] as const) : ([['rule', 'Régua']] as const)
  return (
    <>
      <PageHeader title={rule ? draft.name || 'Régua' : 'Nova régua'} sub={rule ? conditionText(draft) : 'Escolha a medida, o valor e os e-mails. A régua começa desligada.'}
        back={<button onClick={() => go('nutricaointerno')} className="inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft className="h-3.5 w-3.5" />Nutrição</button>}
        actions={<><label className="flex items-center gap-2 text-[14px]"><Switch checked={draft.on} onCheckedChange={(on) => set('on', on)} aria-label="Ligada" />{draft.on ? 'Ligada' : 'Desligada'}</label><Button disabled={!valid} onClick={submit}>Salvar</Button></>} />
      <Body>
        {tabs.length > 1 && <div className="flex flex-wrap gap-1 rounded-md border bg-background p-0.5 sm:w-fit" role="tablist" aria-label="Seções">
          {tabs.map(([key, label]) => <button key={key} role="tab" aria-selected={tab === key} onClick={() => setTab(key)} className={cn('h-8 rounded px-3 text-[13px]', tab === key ? 'bg-secondary font-medium' : 'text-muted-foreground hover:text-foreground')}>{label}</button>)}
        </div>}
        {tab === 'rule' && <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <div className="grid gap-6">
            <Card title="Condição" desc="O que o cliente precisa atingir para entrar. O Avant confere a cada hora com os números de uso do dia anterior.">
              <div className="grid gap-4">
                <Field id="rule-name" label="Nome da régua"><Input id="rule-name" className="h-10" value={draft.name} onChange={(event) => set('name', event.target.value)} placeholder="Ex.: Esfriando" /></Field>
                <div className="grid gap-3 sm:grid-cols-[1.4fr_1fr_120px]">
                  <Field id="rule-measure" label="Medida"><Select value={draft.measure} onValueChange={(next) => set('measure', next as Measure)}><SelectTrigger id="rule-measure" className="h-10"><SelectValue /></SelectTrigger><SelectContent>{Object.entries(MEASURES).map(([key, measure]) => <SelectItem key={key} value={key}>{measure.label}</SelectItem>)}</SelectContent></Select></Field>
                  {draft.measure === 'onboarding_step'
                    ? <Field id="rule-step" label="Etapa"><Select value={draft.step ?? 'Ad tag'} onValueChange={(next) => set('step', next)}><SelectTrigger id="rule-step" className="h-10"><SelectValue /></SelectTrigger><SelectContent>{STEPS.map((step) => <SelectItem key={step} value={step}>{step}</SelectItem>)}</SelectContent></Select></Field>
                    : <Field id="rule-comparison" label="Comparação"><Select value={draft.comparison} onValueChange={(next) => set('comparison', next as Comparison)}><SelectTrigger id="rule-comparison" className="h-10"><SelectValue /></SelectTrigger><SelectContent>{COMPARISONS.map(([key, label]) => <SelectItem key={key} value={key}>{label}</SelectItem>)}</SelectContent></Select></Field>}
                  <Field id="rule-value" label={MEASURES[draft.measure].unit === 'dias' ? 'Dias' : 'Valor'}><Input id="rule-value" type="number" min={0} className="h-10 tnum" value={draft.value} onChange={(event) => set('value', Number(event.target.value))} /></Field>
                </div>
                <p className="rounded-md border bg-muted/40 px-3 py-2 text-[13px]"><span className="font-medium">{conditionText(draft)}.</span> <span className="text-muted-foreground">Hoje {matching} clientes ativos atendem a condição.</span></p>
              </div>
            </Card>
            <Card title="Quem entra" desc="Só clientes ativos entram. Clientes pendentes, inativos e banidos ficam de fora, e quem se descadastrou nunca recebe.">
              <div className="grid gap-3 sm:grid-cols-2">
                <Field id="rule-manager" label="Gerente de conta"><Select value={draft.manager} onValueChange={(next) => set('manager', next)}><SelectTrigger id="rule-manager" className="h-10"><SelectValue /></SelectTrigger><SelectContent>{MANAGERS.map(([key, label]) => <SelectItem key={key} value={key}>{label}</SelectItem>)}</SelectContent></Select></Field>
                <Field id="rule-age" label="Cliente há pelo menos" hint="Em dias. 0 deixa qualquer cliente entrar."><Input id="rule-age" type="number" min={0} className="h-10 tnum" value={draft.minAgeDays} onChange={(event) => set('minAgeDays', Number(event.target.value))} /></Field>
              </div>
            </Card>
            <Card title="E-mails" desc="De 1 a 3 e-mails, em português, inglês e espanhol. Cada pessoa recebe no idioma dela. Vão para o dono do cliente; o gerente de conta fica em cópia oculta."
              footer={draft.emails.length < 3 ? <Button size="sm" variant="outline" onClick={() => set('emails', [...draft.emails, email(Date.now(), 3, ['', '', ''], '')])}><Plus className="h-4 w-4" />Adicionar e-mail</Button> : undefined}
              footerNote={draft.emails.length >= 3 ? 'No máximo 3 e-mails por régua.' : undefined}>
              <ol className="grid gap-3">{draft.emails.map((mail, index) => (
                <EmailEditor key={mail.id} mail={mail} index={index} total={draft.emails.length}
                  update={(next) => set('emails', draft.emails.map((item) => (item.id === next.id ? next : item)))}
                  remove={() => set('emails', draft.emails.filter((item) => item.id !== mail.id))}
                  preview={(lang) => setPreviewing({ mail, lang })} />
              ))}</ol>
              <div className="mt-4 flex flex-wrap items-center gap-1.5 text-[12px]"><span className="text-muted-foreground">Variáveis:</span>{VARIABLES.map((variable) => <code key={variable} className="rounded border bg-muted px-1.5 py-0.5 font-mono">{variable}</code>)}</div>
            </Card>
          </div>
          <div className="grid content-start gap-6">
            <Card title="HubSpot" desc="Opcional. Usa as tarefas do CRM grátis.">
              <div className="grid gap-4">
                <label className="flex items-start justify-between gap-3 text-[14px]"><span><span className="font-medium">Criar tarefa para o gerente</span><span className="block text-[13px] text-muted-foreground">Quando o cliente entra na régua.</span></span><Switch checked={draft.hubspotTask} onCheckedChange={(on) => set('hubspotTask', on)} aria-label="Criar tarefa para o gerente" /></label>
                {draft.hubspotTask && <Field id="rule-due" label="Prazo da tarefa"><Select value={draft.taskDue} onValueChange={(next) => set('taskDue', next)}><SelectTrigger id="rule-due" className="h-10"><SelectValue /></SelectTrigger><SelectContent>{['hoje', '1 dia útil', '2 dias úteis', '1 semana'].map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent></Select></Field>}
                <Field id="rule-stage" label="Valor em avant_nurture_stage" hint="Vai para o contato enquanto o cliente está na régua. Vazio não grava."><Input id="rule-stage" className="h-10 font-mono" value={draft.stage} onChange={(event) => set('stage', event.target.value)} placeholder="esfriando" /></Field>
              </div>
            </Card>
            <Card title="Repetição e prioridade">
              <div className="grid gap-4">
                <Field id="rule-repeat" label="Repetição"><Select value={draft.repeat} onValueChange={(next) => set('repeat', next as Repeat)}><SelectTrigger id="rule-repeat" className="h-10"><SelectValue /></SelectTrigger><SelectContent>{REPEATS.map(([key, label]) => <SelectItem key={key} value={key}>{label}</SelectItem>)}</SelectContent></Select></Field>
                <Field id="rule-priority" label="Prioridade" hint="Se o cliente cair em duas réguas, vale a de número menor."><Input id="rule-priority" type="number" min={1} className="h-10 w-24 tnum" value={draft.priority} onChange={(event) => set('priority', Number(event.target.value))} /></Field>
              </div>
            </Card>
            <Card title="Quando sai">
              <ul className="grid gap-2 text-[13px] text-muted-foreground">
                <li>Deixou a condição: sai na hora e os e-mails que faltam não saem.</li>
                <li>Recebeu todos os e-mails: conclui e só volta pela repetição.</li>
                <li>Clicou em descadastrar: não recebe mais nenhuma régua.</li>
              </ul>
            </Card>
          </div>
        </div>}
        {tab === 'members' && <section className="overflow-hidden rounded-lg border bg-card">
          <TableFilters defs={[{ key: 'state', label: 'Situação', options: ['Na régua', 'Voltou', 'Concluiu', 'Descadastrou'] }, { key: 'manager', label: 'Gerente', options: ['Marina Souza', 'João Pedro', 'Sem gerente'] }, { key: 'opened', label: 'Abertura', options: ['Abriu', 'Não abriu'] }]} initial={['state']} values={memberValues} setValues={setMemberValues} query={memberQuery} setQuery={setMemberQuery} placeholder="Buscar cliente" />
          <div className="overflow-x-auto"><table className="w-full min-w-[760px] text-[14px]"><thead className="border-b"><tr><th className={th}>Cliente</th><th className={th}>Gerente</th><th className={th}>Entrou</th><th className={th}>Onde está</th><th className={th}>Abertura</th><th className={th}>Situação</th></tr></thead>
            <tbody className="divide-y">{members.map((row) => <tr key={row.client} className="hover:bg-muted/50"><td className={cn(td, 'font-medium')}>{row.client}</td><td className={cn(td, 'text-muted-foreground')}>{row.manager}</td><td className={cn(td, 'tnum')}>{row.since}</td><td className={td}>{row.step}</td><td className={cn(td, 'text-muted-foreground')}>{row.opened}</td><td className={td}><Status tone={MEMBER_TONE[row.state]}>{row.state}</Status></td></tr>)}
            {!members.length && <tr><td colSpan={6} className="py-10 text-center text-muted-foreground">Nenhum cliente com esses filtros.</td></tr>}</tbody></table></div>
        </section>}
        {tab === 'sends' && <section className="overflow-hidden rounded-lg border bg-card">
          <TableFilters defs={[{ key: 'state', label: 'Situação', options: ['Entregue', 'Aberto', 'Clicou', 'Devolvido'] }, { key: 'mail', label: 'E-mail', options: [...new Set(SENDS.map((row) => row.mail))] }]} initial={['state']} values={sendValues} setValues={setSendValues} query={sendQuery} setQuery={setSendQuery} placeholder="Buscar cliente ou destinatário" />
          <div className="overflow-x-auto"><table className="w-full min-w-[760px] text-[14px]"><thead className="border-b"><tr><th className={th}>Quando</th><th className={th}>Cliente</th><th className={th}>Para</th><th className={th}>E-mail</th><th className={th}>Situação</th></tr></thead>
            <tbody className="divide-y">{sends.map((row) => <tr key={row.when + row.client} className="hover:bg-muted/50"><td className={cn(td, 'tnum')}>{row.when}</td><td className={cn(td, 'font-medium')}>{row.client}</td><td className={cn(td, 'text-muted-foreground')}>{row.to}</td><td className={td}>{row.mail}</td><td className={td}><Status tone={SEND_TONE[row.state]}>{row.state}</Status></td></tr>)}
            {!sends.length && <tr><td colSpan={5} className="py-10 text-center text-muted-foreground">Nenhum envio com esses filtros.</td></tr>}</tbody></table></div>
        </section>}
      </Body>
      <EmailPreview mail={previewing?.mail ?? null} lang={previewing?.lang ?? 'PT'} close={() => setPreviewing(null)} />
    </>
  )
}

/** Guarda as réguas e qual está aberta, para a lista e o editor dividirem o mesmo estado. */
export function useNurtureRules() {
  const [rules, setRules] = useState<NurtureRule[]>(INITIAL_RULES)
  const [openId, setOpenId] = useState<string | null>('cold')
  /** Grava uma régua nova ou mudada. */
  const save = (next: NurtureRule) => setRules(rules.some((rule) => rule.id === next.id) ? rules.map((rule) => (rule.id === next.id ? next : rule)) : [...rules, next])
  return { rules, setRules, openRule: rules.find((rule) => rule.id === openId) ?? null, openId, setOpenId, save }
}

/* ---------- 4. Página de descadastro (link do rodapé do e-mail) ---------- */

/** A página pública do link de descadastro: confirma e deixa voltar a receber. */
export function UnsubscribeScreen() {
  const [subscribed, setSubscribed] = useState(false)
  return (
    <div className="flex flex-1 flex-col">
      <header className="flex h-16 items-center px-6"><div className="flex items-center gap-2"><Mark size={24} /><span className="text-[15px] font-semibold tracking-tight">Avant</span></div></header>
      <main className="flex flex-1 items-start justify-center px-4 pb-16 pt-10 sm:pt-20">
        <div className="w-full max-w-[400px] text-center">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border"><MailX className="h-5 w-5" /></span>
          <h1 className="mt-6 text-[28px] font-semibold leading-tight tracking-[-0.03em]">{subscribed ? 'Você voltou a receber' : 'Pronto, você saiu da lista'}</h1>
          <p className="mt-3 text-[14px] text-muted-foreground">{subscribed ? 'marina@guiadopet.com.br volta a receber as dicas e lembretes do Avant.' : 'marina@guiadopet.com.br não recebe mais as dicas e lembretes do Avant. Os e-mails da conta, como convites, segurança e pagamentos, continuam chegando.'}</p>
          <Button variant="outline" className="mt-8 h-10" onClick={() => { setSubscribed(!subscribed); toast.success(subscribed ? 'Descadastrado de novo' : 'Inscrição de volta') }}>{subscribed ? 'Sair da lista de novo' : 'Voltar a receber'}</Button>
          <p className="mt-6 text-[12px] text-muted-foreground">O link vale só para este e-mail. <Badge>LGPD</Badge></p>
        </div>
      </main>
      <footer className="border-t px-6 py-4 text-[13px] text-muted-foreground">Avant by Groone · avant.groone.com</footer>
    </div>
  )
}
