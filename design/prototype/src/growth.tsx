/* Crescimento da Groone (M18, avant-web#595): saúde da carteira, oportunidades de receita por site,
   qualidade do tráfego, funil de ativação, previsão do mês e o comparativo anônimo com a rede. */
import { useState } from 'react'
import { toast } from 'sonner'
import { ArrowDownRight, ArrowUpRight, ClipboardList, ExternalLink, Info, ShieldAlert, Sparkles, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { Avatar, Badge, Body, Card, Field, PageHeader, Status } from './App'
import { TableFilters, passes } from './hubspot'

type Go = (screen: string) => void
type Tone = 'ok' | 'warn' | 'bad' | 'neutral' | 'ochre'

const th = 'px-4 py-3 text-left text-[12px] font-medium uppercase tracking-[0.04em] text-muted-foreground whitespace-nowrap'
const td = 'px-4 py-3 align-middle whitespace-nowrap'

/** Formata um valor em dólar, no padrão do painel. */
function usd(value: number, digits = 0) {
  return `US$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: digits, maximumFractionDigits: digits })}`
}

/** Número grande com rótulo e nota, no topo das telas. */
function Kpi({ label, value, note, tone, report = false }: { label: string; value: string; note?: React.ReactNode; tone?: Tone; report?: boolean }) {
  return (
    <div className={cn('relative overflow-hidden rounded-lg border bg-card p-5', report && 'kpi-motion')}>
      <div className="text-[13px] font-medium text-muted-foreground">{label}</div>
      <div className={cn('mt-1 text-[28px] font-semibold tracking-[-0.03em] tnum', tone === 'bad' && 'text-bad', tone === 'ok' && 'text-ok', tone === 'warn' && 'text-warn')}>{value}</div>
      {note && <div className="mt-1 text-[12px] text-muted-foreground">{note}</div>}
    </div>
  )
}

/** Variação em porcentagem com seta, verde quando sobe e vermelha quando cai. */
function Change({ value }: { value: number }) {
  const Icon = value >= 0 ? ArrowUpRight : ArrowDownRight
  return <span className={cn('inline-flex items-center gap-0.5 text-[13px] tnum', value >= 0 ? 'text-ok' : 'text-bad')}><Icon className="h-3.5 w-3.5" />{value > 0 ? '+' : ''}{value.toLocaleString('pt-BR')}%</span>
}

/** Seção de tabela com borda, como as outras listas do painel. */
function TableCard({ children, filters }: { children: React.ReactNode; filters?: React.ReactNode }) {
  return <section className="overflow-hidden rounded-lg border bg-card">{filters}<div className="overflow-x-auto"><table className="w-full text-[14px]">{children}</table></div></section>
}

/** Abas de período usadas nas telas de crescimento. */
function PeriodTabs<Key extends string>({ options, value, setValue }: { options: readonly (readonly [Key, string])[]; value: Key; setValue: (next: Key) => void }) {
  return (
    <div className="flex rounded-md border bg-background p-0.5" role="tablist" aria-label="Período">
      {options.map(([key, label]) => <button key={key} role="tab" aria-selected={value === key} onClick={() => setValue(key)} className={cn('h-8 rounded px-3 text-[13px]', value === key ? 'bg-secondary font-medium' : 'text-muted-foreground hover:text-foreground')}>{label}</button>)}
    </div>
  )
}

/* ---------- 1. Saúde da carteira ---------- */

type Health = 'Saudável' | 'Atenção' | 'Em risco'
type Signal = { name: string; weight: number; score: number; detail: string }
type PortfolioRow = { client: string; score: number; reason: string; revenue: number; change: number; access: string; manager: string; signals: Signal[] }

const HEALTH_TONE: Record<Health, Tone> = { Saudável: 'ok', Atenção: 'warn', 'Em risco': 'bad' }

/** A situação do cliente pela nota: 70 ou mais é saudável, de 40 a 69 atenção, abaixo de 40 em risco. */
function healthOf(score: number): Health {
  if (score >= 70) return 'Saudável'
  return score >= 40 ? 'Atenção' : 'Em risco'
}

/** Os cinco sinais da nota, com o peso de cada um. */
function signals(revenue: number, usage: number, install: number, nps: number, onboarding: number, details: string[]): Signal[] {
  return [
    { name: 'Receita (30 dias contra os 30 anteriores)', weight: 35, score: revenue, detail: details[0] },
    { name: 'Uso do Avant pela Empresa', weight: 20, score: usage, detail: details[1] },
    { name: 'Verificação de instalação', weight: 20, score: install, detail: details[2] },
    { name: 'NPS', weight: 15, score: nps, detail: details[3] },
    { name: 'Onboarding', weight: 10, score: onboarding, detail: details[4] },
  ]
}

const PORTFOLIO: PortfolioRow[] = [
  { client: 'Apostas Já', score: 22, reason: 'Receita caiu 48% e ninguém entra há 71 dias', revenue: 1840, change: -48, access: '16/09', manager: 'Caio Prado', signals: signals(5, 0, 60, 30, 100, ['US$ 1.840 contra US$ 3.540', 'Nenhum acesso em 71 dias', 'Loader com erro em 1 de 3 sites', 'Nota 4 em 08/10 (detrator)', 'Todos os passos feitos']) },
  { client: 'Guia do Pet', score: 34, reason: 'Ad tag com erro em 2 sites desde 22/11', revenue: 2960, change: -19, access: '19/10', manager: 'Marina Souza', signals: signals(40, 15, 10, 70, 100, ['US$ 2.960 contra US$ 3.650', '3 dias ativos em 30', 'Ad tag com erro em 2 de 4 sites', 'Nota 7 em 02/11 (neutro)', 'Todos os passos feitos']) },
  { client: 'Tech Notícias', score: 51, reason: 'Nunca entrou no Avant', revenue: 5120, change: 4, access: 'Nunca entrou', manager: 'Marina Souza', signals: signals(80, 0, 90, 50, 50, ['US$ 5.120 contra US$ 4.920', 'Nunca entrou', 'Tudo certo, 1 aviso', 'Sem resposta', '3 de 6 passos']) },
  { client: 'Receitas da Vó', score: 64, reason: 'Uso caiu pela metade no mês', revenue: 3410, change: -6, access: '17/11', manager: 'João Pedro', signals: signals(65, 40, 100, 70, 100, ['US$ 3.410 contra US$ 3.630', '6 dias ativos em 30 (eram 13)', 'Tudo certo', 'Nota 8 em 05/11 (neutro)', 'Todos os passos feitos']) },
  { client: 'Blog Exemplo', score: 91, reason: 'Receita subindo e equipe ativa', revenue: 8740, change: 12, access: 'ontem', manager: 'Marina Souza', signals: signals(95, 90, 100, 90, 100, ['US$ 8.740 contra US$ 7.800', '24 dias ativos em 30', 'Tudo certo', 'Nota 9 em 02/11 (promotor)', 'Todos os passos feitos']) },
  { client: 'Viagem Barata', score: 78, reason: 'Estável', revenue: 4230, change: 1, access: 'hoje', manager: 'João Pedro', signals: signals(75, 80, 90, 70, 100, ['US$ 4.230 contra US$ 4.190', '19 dias ativos em 30', 'Tudo certo, 1 aviso', 'Nota 8 em 30/10 (neutro)', 'Todos os passos feitos']) },
]

/** Barra curta da nota, com o número ao lado. */
function ScoreBar({ score }: { score: number }) {
  const tone = HEALTH_TONE[healthOf(score)]
  return (
    <span className="inline-flex items-center gap-2">
      <span className="tnum w-7 text-right font-semibold">{score}</span>
      <span className="h-1.5 w-20 overflow-hidden rounded-full bg-muted-foreground/15" aria-hidden="true"><span className={cn('block h-full rounded-full', tone === 'ok' ? 'bg-ok' : tone === 'warn' ? 'bg-warn' : 'bg-bad')} style={{ width: `${score}%` }} /></span>
    </span>
  )
}

/** Tela Saúde da carteira: a nota de cada cliente, quem está em risco e por quê. */
export function PortfolioHealthScreen({ go }: { go: Go }) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState<PortfolioRow | null>(null)
  const [threshold, setThreshold] = useState('25')
  const [taskOn, setTaskOn] = useState(true)
  const rows = PORTFOLIO
    .map((row) => ({ ...row, health: healthOf(row.score) }))
    .filter((row) => passes({ client: row.client, health: row.health, manager: row.manager }, values, query, ['client']))
    .sort((first, second) => first.score - second.score)
  const atRisk = PORTFOLIO.filter((row) => healthOf(row.score) === 'Em risco')
  return (
    <>
      <PageHeader title="Saúde da carteira" sub="Uma nota de 0 a 100 por cliente, feita com o que o Avant já mede: receita, uso, instalação, NPS e onboarding. Os piores aparecem primeiro." />
      <Body>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Kpi label="Clientes acompanhados" value="48" note="Com Empresa e network ativa" />
          <Kpi label="Em risco" value={String(atRisk.length + 4)} tone="bad" note="Nota abaixo de 40" />
          <Kpi label="Atenção" value="11" tone="warn" note="Nota de 40 a 69" />
          <Kpi label="Receita em risco por mês" value={usd(9230)} note="Soma dos clientes em risco" />
        </div>
        <TableCard filters={<TableFilters defs={[{ key: 'health', label: 'Situação', options: ['Em risco', 'Atenção', 'Saudável'] }, { key: 'manager', label: 'Gerente', options: ['Marina Souza', 'João Pedro', 'Caio Prado'] }]} initial={['health', 'manager']} values={values} setValues={setValues} query={query} setQuery={setQuery} placeholder="Buscar cliente" />}>
          <thead className="border-b"><tr><th className={th}>Cliente</th><th className={th}>Nota</th><th className={th}>Situação</th><th className={th}>Principal motivo</th><th className={th}>Receita (30d)</th><th className={th}>Último acesso</th><th className={th}>Gerente</th><th className={th}><span className="sr-only">Abrir</span></th></tr></thead>
          <tbody className="divide-y">{rows.map((row) => (
            <tr key={row.client} className="transition-colors hover:bg-muted/50">
              <td className={cn(td, 'font-medium')}><button className="hover:underline" onClick={() => go('cliente')}>{row.client}</button></td>
              <td className={td}><ScoreBar score={row.score} /></td>
              <td className={td}><Status tone={HEALTH_TONE[row.health]}>{row.health}</Status></td>
              <td className={cn(td, 'max-w-[280px] truncate text-muted-foreground')} title={row.reason}>{row.reason}</td>
              <td className={td}><span className="tnum">{usd(row.revenue)}</span> <Change value={row.change} /></td>
              <td className={cn(td, 'tnum')}>{row.access}</td>
              <td className={td}><span className="flex items-center gap-2"><Avatar name={row.manager} size={24} />{row.manager}</span></td>
              <td className={cn(td, 'text-right')}><Button size="sm" variant="outline" className="h-8" onClick={() => setOpen(row)}>Ver sinais</Button></td>
            </tr>
          ))}</tbody>
        </TableCard>
        <Card title="Aviso de queda de receita" desc="Quando a receita de 7 dias de um cliente cai mais que o limite, comparada aos 7 dias anteriores, o gerente recebe o aviso no sino. Vale para todos os clientes."
          footerNote="Os avisos de instalação e de NPS continuam como estão." footer={<Button onClick={() => toast.success('Aviso salvo', { description: `Queda acima de ${threshold}% avisa o gerente.` })}>Salvar</Button>}>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="queda" label="Avisar quando cair mais de" hint="Em porcentagem, de 5 a 90."><div className="flex items-center gap-2"><Input id="queda" value={threshold} onChange={(event) => setThreshold(event.target.value.replace(/\D/g, ''))} className="w-24 tnum" inputMode="numeric" /><span className="text-[14px] text-muted-foreground">%</span></div></Field>
            <div className="flex items-start justify-between gap-4 rounded-md border p-4"><div><div className="text-[14px] font-medium">Criar também a tarefa no HubSpot</div><div className="text-[13px] text-muted-foreground">Uma tarefa para o gerente do contato, fechada sozinha quando a receita volta.</div></div><Switch checked={taskOn} onCheckedChange={setTaskOn} aria-label="Criar tarefa no HubSpot" /></div>
          </div>
        </Card>
      </Body>
      <Dialog open={!!open} onOpenChange={(next) => !next && setOpen(null)}>
        <DialogContent className="sm:max-w-[560px]">
          <DialogHeader><DialogTitle>{open?.client}: nota {open?.score}</DialogTitle><DialogDescription>Cada sinal vale de 0 a 100 e pesa na nota pela porcentagem ao lado.</DialogDescription></DialogHeader>
          <ul className="grid gap-3">{open?.signals.map((signal) => (
            <li key={signal.name} className="grid gap-1 rounded-md border p-3">
              <div className="flex items-center justify-between gap-3 text-[14px]"><span className="font-medium">{signal.name}</span><span className="text-[12px] text-muted-foreground tnum">peso {signal.weight}%</span></div>
              <div className="flex items-center justify-between gap-3"><span className="text-[13px] text-muted-foreground">{signal.detail}</span><ScoreBar score={signal.score} /></div>
            </li>
          ))}</ul>
          <DialogFooter><Button variant="outline" onClick={() => setOpen(null)}>Fechar</Button><Button onClick={() => go('cliente')}>Abrir o cliente</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

/* ---------- 2. Oportunidades de receita por site ---------- */

type Opportunity = { id: number; site: string; client: string; kind: string; why: string; gain: number; confidence: 'Alta' | 'Média' | 'Baixa'; manager: string; how: string }

const OPPORTUNITIES: Opportunity[] = [
  { id: 1, site: 'receitasdavo.com.br', client: 'Receitas da Vó', kind: 'Ativar reward', why: '62% das sessões leem mais de 3 páginas e o site não tem reward', gain: 820, confidence: 'Alta', manager: 'João Pedro', how: 'Média de US$ 6,10 de eCPM do reward em 14 sites de receita da rede, aplicada a 30% das sessões longas do site.' },
  { id: 2, site: 'blogexemplo.com', client: 'Blog Exemplo', kind: 'Trocar para Cascata', why: 'Âncora e intersticial ainda na Automática', gain: 540, confidence: 'Alta', manager: 'Marina Souza', how: 'Sites da rede que trocaram a âncora para a Cascata ganharam 11% de receita no bloco, em média, nos 30 dias seguintes.' },
  { id: 3, site: 'technoticias.net', client: 'Tech Notícias', kind: 'Corrigir ads.txt', why: 'Linha da Groone faltando desde 20/11; 9% das impressões sem lance', gain: 460, confidence: 'Alta', manager: 'Marina Souza', how: 'Receita perdida estimada pelas impressões sem lance de compradores que exigem ads.txt.' },
  { id: 4, site: 'guiadopet.com', client: 'Guia do Pet', kind: 'Adicionar bloco âncora', why: '78% do tráfego é celular e o site não tem âncora', gain: 390, confidence: 'Média', manager: 'Marina Souza', how: 'eCPM médio da âncora na rede, aplicado às visualizações de página em celular do site.' },
  { id: 5, site: 'viagembarata.com', client: 'Viagem Barata', kind: 'Regra de preço por país', why: 'Fill de 41% nos EUA com floor alto em Content1_Mobile', gain: 270, confidence: 'Média', manager: 'João Pedro', how: 'Simulação do floor 15% mais baixo nos EUA com o histórico de lances dos últimos 14 dias.' },
  { id: 6, site: 'apostasja.bet', client: 'Apostas Já', kind: 'Lazy load nos blocos', why: 'Viewability de 38%, abaixo da média de 61% da rede', gain: 180, confidence: 'Baixa', manager: 'Caio Prado', how: 'Diferença de eCPM entre blocos com mais e com menos de 50% de viewability no site.' },
]

/** Tela Oportunidades: o que fazer em cada site para ganhar mais, com o ganho estimado. */
export function OpportunitiesScreen({ go }: { go: Go }) {
  const [items, setItems] = useState(OPPORTUNITIES)
  const [values, setValues] = useState<Record<string, string>>({})
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState<Opportunity | null>(null)
  const rows = items.filter((item) => passes({ ...item, gain: String(item.gain) } as unknown as Record<string, string>, values, query, ['site', 'client']))
  const total = items.reduce((sum, item) => sum + item.gain, 0)
  /** Cria a tarefa de suporte para o gerente e tira a oportunidade da lista. */
  const createTask = (item: Opportunity) => {
    setItems((current) => current.filter((other) => other.id !== item.id))
    setOpen(null)
    toast.success('Tarefa criada', { description: `${item.kind} em ${item.site}, para ${item.manager}.` })
  }
  /** Dispensa a oportunidade; ela volta só se o motivo mudar. */
  const dismiss = (item: Opportunity) => {
    setItems((current) => current.filter((other) => other.id !== item.id))
    toast('Oportunidade dispensada', { description: 'Ela volta se os números do site mudarem.' })
  }
  return (
    <>
      <PageHeader title="Oportunidades de receita" sub="O Avant olha os blocos, o fill, a viewability, o ads.txt, o reward e as regras de preço de cada site e sugere o que mudar, com o ganho estimado no mês." />
      <Body>
        <div className="grid gap-4 sm:grid-cols-3">
          <Kpi label="Ganho estimado por mês" value={usd(total)} note={`${items.length} oportunidades abertas`} tone="ok" />
          <Kpi label="Feitas em novembro" value="9" note={<>{usd(1140)} a mais no mês, medido depois de 14 dias</>} />
          <Kpi label="Parte da Groone no ganho" value={usd(Math.round(total * 0.18))} note="Pelo revshare de cada contrato ativo" />
        </div>
        <TableCard filters={<TableFilters defs={[{ key: 'kind', label: 'Tipo', options: [...new Set(OPPORTUNITIES.map((item) => item.kind))] }, { key: 'confidence', label: 'Confiança', options: ['Alta', 'Média', 'Baixa'] }, { key: 'manager', label: 'Gerente', options: ['Marina Souza', 'João Pedro', 'Caio Prado'] }]} initial={['kind', 'confidence']} values={values} setValues={setValues} query={query} setQuery={setQuery} placeholder="Buscar site ou cliente" />}>
          <thead className="border-b"><tr><th className={th}>Site</th><th className={th}>Oportunidade</th><th className={th}>Por quê</th><th className={cn(th, 'text-right')}>Ganho por mês</th><th className={th}>Confiança</th><th className={th}><span className="sr-only">Ações</span></th></tr></thead>
          <tbody className="divide-y">{rows.map((item) => (
            <tr key={item.id} className="transition-colors hover:bg-muted/50">
              <td className={td}><button className="font-medium hover:underline" onClick={() => go('siteinterno')}>{item.site}</button><div className="text-[13px] text-muted-foreground">{item.client}</div></td>
              <td className={td}><span className="inline-flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-muted-foreground" />{item.kind}</span></td>
              <td className={cn(td, 'max-w-[340px] truncate text-muted-foreground')} title={item.why}>{item.why}</td>
              <td className={cn(td, 'text-right font-medium tnum')}>{usd(item.gain)}</td>
              <td className={td}><Status tone={item.confidence === 'Alta' ? 'ok' : item.confidence === 'Média' ? 'ochre' : 'neutral'}>{item.confidence}</Status></td>
              <td className={cn(td, 'text-right')}><div className="flex justify-end gap-1"><Button size="sm" variant="outline" className="h-8" onClick={() => setOpen(item)}>Detalhes</Button><Button size="sm" variant="ghost" className="h-8 w-8 p-0" aria-label="Dispensar" onClick={() => dismiss(item)}><X className="h-4 w-4" /></Button></div></td>
            </tr>
          ))}
          {!rows.length && <tr><td colSpan={6} className="px-4 py-10 text-center text-[14px] text-muted-foreground">Nenhuma oportunidade com esses filtros.</td></tr>}
          </tbody>
        </TableCard>
        <p className="flex items-start gap-2 text-[13px] text-muted-foreground"><Info className="mt-0.5 h-4 w-4 shrink-0" />O cliente vê as oportunidades dos sites dele no Desempenho, sem o valor da Groone. A equipe vê todas aqui.</p>
      </Body>
      <Dialog open={!!open} onOpenChange={(next) => !next && setOpen(null)}>
        <DialogContent className="sm:max-w-[520px]">
          <DialogHeader><DialogTitle>{open?.kind}</DialogTitle><DialogDescription>{open?.site} · {open?.client}</DialogDescription></DialogHeader>
          <dl className="grid gap-3 text-[14px]">
            <div className="grid gap-1"><dt className="text-[13px] text-muted-foreground">Por quê</dt><dd>{open?.why}</dd></div>
            <div className="grid gap-1"><dt className="text-[13px] text-muted-foreground">Como estimamos</dt><dd>{open?.how}</dd></div>
            <div className="grid grid-cols-2 gap-3"><div className="rounded-md border p-3"><dt className="text-[13px] text-muted-foreground">Ganho por mês</dt><dd className="text-[20px] font-semibold tnum">{open && usd(open.gain)}</dd></div><div className="rounded-md border p-3"><dt className="text-[13px] text-muted-foreground">Confiança</dt><dd className="mt-1">{open && <Status tone={open.confidence === 'Alta' ? 'ok' : 'ochre'}>{open.confidence}</Status>}</dd></div></div>
          </dl>
          <DialogFooter><Button variant="outline" onClick={() => setOpen(null)}>Fechar</Button><Button onClick={() => open && createTask(open)}><ClipboardList className="h-4 w-4" />Criar tarefa para {open?.manager.split(' ')[0]}</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

/* ---------- 3. Qualidade do tráfego e risco de IVT ---------- */

type Share = { label: string; now: number; normal: number }
type Breakdown = { title: string; rows: Share[] }
type AdFacts = { platform: 'Facebook' | 'Google Ads'; account: string; campaign: string; spend: string; adCtr: string; cpc: string; holder: string }
type TrafficAlert = { id: number; target: string; domain: string; client: string; source: string; signal: string; normal: string; since: string; risk: 'Alto' | 'Médio'; series: number[]; baseline: number; unit: string; breakdowns: Breakdown[]; ad?: AdFacts; notes: string[] }

const TRAFFIC: TrafficAlert[] = [
  {
    id: 1, target: 'apostasja.bet', domain: 'apostasja.bet', client: 'Apostas Já', source: 'Facebook · Campanha "Bônus BR 11"', signal: 'CTR de 4,8%', normal: '0,9% no site', since: '23/11', risk: 'Alto', series: [0.8, 0.9, 1, 0.9, 1.1, 0.9, 2.6, 3.9, 4.4, 4.8], baseline: 0.9, unit: '% de CTR',
    breakdowns: [
      { title: 'Origem (utm_source)', rows: [{ label: 'facebook', now: 81, normal: 34 }, { label: 'orgânico', now: 12, normal: 51 }, { label: 'direto', now: 7, normal: 15 }] },
      { title: 'Dispositivo', rows: [{ label: 'Android', now: 88, normal: 61 }, { label: 'iPhone', now: 9, normal: 27 }, { label: 'Desktop', now: 3, normal: 12 }] },
      { title: 'País', rows: [{ label: 'Brasil', now: 64, normal: 92 }, { label: 'Índia', now: 22, normal: 1 }, { label: 'Vietnã', now: 9, normal: 0 }] },
      { title: 'Bloco com mais cliques', rows: [{ label: 'Intersticial', now: 58, normal: 21 }, { label: 'Âncora', now: 30, normal: 34 }, { label: 'Content1_Mobile', now: 12, normal: 45 }] },
    ],
    ad: { platform: 'Facebook', account: 'Apostas Já - BR 02', campaign: 'Bônus BR 11', spend: 'US$ 412 em 5 dias', adCtr: '6,1% no anúncio', cpc: 'US$ 0,03', holder: 'Rafael Lima' },
    notes: ['31% do tráfego da campanha vem de fora do Brasil, mas ela é segmentada só para o Brasil.', 'O intersticial concentra os cliques, um padrão comum de clique acidental ou forçado.'],
  },
  {
    id: 2, target: 'guiadopet.com', domain: 'guiadopet.com', client: 'Guia do Pet', source: 'Google Ads · "Ração premium"', signal: '71% das sessões com 1 página e 2 cliques', normal: '18% no site', since: '25/11', risk: 'Alto', series: [17, 19, 18, 16, 20, 18, 19, 44, 63, 71], baseline: 18, unit: '% das sessões',
    breakdowns: [
      { title: 'Origem (utm_source)', rows: [{ label: 'google', now: 74, normal: 22 }, { label: 'orgânico', now: 20, normal: 63 }, { label: 'direto', now: 6, normal: 15 }] },
      { title: 'Rede do Google Ads', rows: [{ label: 'Display (apps)', now: 69, normal: 8 }, { label: 'Pesquisa', now: 24, normal: 80 }, { label: 'YouTube', now: 7, normal: 12 }] },
      { title: 'Horário', rows: [{ label: '0h às 6h', now: 41, normal: 9 }, { label: '6h às 18h', now: 37, normal: 66 }, { label: '18h às 24h', now: 22, normal: 25 }] },
      { title: 'Tempo na página', rows: [{ label: 'menos de 5 s', now: 63, normal: 14 }, { label: '5 a 30 s', now: 28, normal: 41 }, { label: 'mais de 30 s', now: 9, normal: 45 }] },
    ],
    ad: { platform: 'Google Ads', account: 'Guia do Pet', campaign: 'Ração premium', spend: 'US$ 268 em 3 dias', adCtr: '3,9% no anúncio', cpc: 'US$ 0,05', holder: 'Bruna Alves' },
    notes: ['69% dos cliques vêm de posicionamentos em apps da Rede de Display, que a campanha não excluiu.', 'Sugestão: excluir apps móveis pelo Avant (Google Ads > Posicionamentos).'],
  },
  {
    id: 3, target: 'technoticias.net', domain: 'technoticias.net', client: 'Tech Notícias', source: 'Origem desconhecida (referrer t.co)', signal: 'Pico de 6x nas visualizações de página', normal: 'Média de 41 mil por dia', since: '26/11', risk: 'Médio', series: [40, 42, 39, 41, 43, 40, 42, 41, 120, 246], baseline: 41, unit: 'mil visualizações',
    breakdowns: [
      { title: 'Referrer', rows: [{ label: 't.co (X)', now: 72, normal: 2 }, { label: 'google.com', now: 18, normal: 61 }, { label: 'direto', now: 10, normal: 37 }] },
      { title: 'Páginas mais vistas', rows: [{ label: '/iphone-gratis-sorteio', now: 66, normal: 0 }, { label: '/', now: 9, normal: 18 }, { label: 'outras', now: 25, normal: 82 }] },
      { title: 'País', rows: [{ label: 'Brasil', now: 54, normal: 88 }, { label: 'Estados Unidos', now: 31, normal: 6 }, { label: 'outros', now: 15, normal: 6 }] },
    ],
    notes: ['Sem campanha conectada no Avant: o tráfego vem de posts no X que linkam uma página de sorteio.', 'Página com promessa de prêmio é risco de política do Google (conteúdo enganoso).'],
  },
  {
    id: 4, target: 'Network 22180457', domain: 'viagembarata.com', client: 'Viagem Barata', source: 'Dedução do GAM em outubro', signal: 'Dedução de 14,2%', normal: '3,1% na rede', since: '15/11', risk: 'Médio', series: [2.8, 3.4, 2.9, 3.2, 14.2], baseline: 3.1, unit: '% de dedução',
    breakdowns: [
      { title: 'Dedução por site', rows: [{ label: 'viagembarata.com', now: 18, normal: 3 }, { label: 'passagensjá.com', now: 4, normal: 3 }] },
      { title: 'Origem em outubro (viagembarata.com)', rows: [{ label: 'facebook', now: 58, normal: 20 }, { label: 'orgânico', now: 35, normal: 70 }, { label: 'outros', now: 7, normal: 10 }] },
    ],
    notes: ['A dedução se concentra no site que mais recebeu tráfego do Facebook em outubro.'],
  },
]

/** Os links prontos para investigar o domínio fora do Avant, nas bibliotecas públicas de anúncios e na busca. */
function investigateLinks(domain: string) {
  const term = encodeURIComponent(domain)
  return [
    { group: 'Anúncios', label: 'Biblioteca de Anúncios da Meta', hint: 'Facebook e Instagram, ativos e inativos', href: `https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=ALL&q=${term}&search_type=keyword_unordered&media_type=all` },
    { group: 'Anúncios', label: 'Central de Transparência do Google Ads', hint: 'Pesquisa, Display e YouTube pelo domínio', href: `https://adstransparency.google.com/?region=anywhere&domain=${term}` },
    { group: 'Anúncios', label: 'Biblioteca de Anúncios do TikTok', hint: 'Só anúncios veiculados na Europa', href: `https://library.tiktok.com/ads?region=all&query=${term}` },
    { group: 'Anúncios', label: 'Repositório de anúncios do X', hint: 'Só anúncios veiculados na Europa', href: 'https://ads.x.com/ads-repository' },
    { group: 'Divulgação', label: 'Posts no X com link para o site', hint: 'Busca recente por url:', href: `https://x.com/search?q=${encodeURIComponent(`url:${domain}`)}&f=live` },
    { group: 'Divulgação', label: 'Menções no Google', hint: 'Páginas que citam o domínio, fora dele', href: `https://www.google.com/search?q=${encodeURIComponent(`"${domain}" -site:${domain}`)}` },
    { group: 'Divulgação', label: 'Posts no Facebook', hint: 'Busca pública pelo domínio', href: `https://www.facebook.com/search/posts/?q=${term}` },
    { group: 'Segurança', label: 'Google Safe Browsing', hint: 'Malware e phishing', href: `https://transparencyreport.google.com/safe-browsing/search?url=${term}` },
    { group: 'Segurança', label: 'Histórico no Wayback Machine', hint: 'Como o site era antes', href: `https://web.archive.org/web/*/${term}` },
  ]
}

/** Linha simples da série com a faixa normal tracejada. */
function SeriesLine({ series, baseline, label }: { series: number[]; baseline: number; label: string }) {
  const width = 480
  const height = 120
  const peak = Math.max(...series, baseline) * 1.1
  const step = width / (series.length - 1)
  const points = series.map((value, index) => `${index * step},${height - (value / peak) * height}`).join(' ')
  const baseY = height - (baseline / peak) * height
  return (
    <svg viewBox={`0 0 ${width} ${height + 4}`} className="h-[140px] w-full" role="img" aria-label={label}>
      <line x1={0} x2={width} y1={baseY} y2={baseY} className="stroke-muted-foreground/50" strokeDasharray="4 4" />
      <polyline points={points} fill="none" className="stroke-bad" strokeWidth={2} strokeLinejoin="round" />
      {series.map((value, index) => <circle key={index} cx={index * step} cy={height - (value / peak) * height} r={2.5} className="fill-bad"><title>{value.toLocaleString('pt-BR')}</title></circle>)}
    </svg>
  )
}

/** Um recorte do tráfego: a parte de cada item agora e no normal do site. */
function BreakdownList({ breakdown }: { breakdown: Breakdown }) {
  return (
    <div className="rounded-md border p-4">
      <div className="mb-3 text-[13px] font-medium">{breakdown.title}</div>
      <ul className="grid gap-2.5">{breakdown.rows.map((row) => (
        <li key={row.label} className="grid gap-1">
          <div className="flex items-center justify-between gap-3 text-[13px]"><span className="truncate">{row.label}</span><span className="tnum"><span className={cn('font-medium', row.now - row.normal >= 15 && 'text-bad')}>{row.now}%</span><span className="text-muted-foreground"> · normal {row.normal}%</span></span></div>
          <div className="relative h-1.5 rounded-full bg-muted-foreground/15" aria-hidden="true"><span className="absolute inset-y-0 left-0 rounded-full bg-foreground" style={{ width: `${row.now}%` }} /><span className="absolute top-[-3px] h-3 w-px bg-muted-foreground" style={{ left: `${row.normal}%` }} /></div>
        </li>
      ))}</ul>
    </div>
  )
}

/** Tela Qualidade do tráfego: sinais de tráfego inválido antes que o GAM corte ou deduza, com o detalhe e os links para investigar. */
export function TrafficQualityScreen({ go }: { go: Go }) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState<TrafficAlert | null>(null)
  const rows = TRAFFIC.filter((item) => passes({ target: item.target, client: item.client, risk: item.risk }, values, query, ['target', 'client']))
  return (
    <>
      <PageHeader title="Qualidade do tráfego" sub="Sinais de tráfego inválido (IVT) por site, campanha e network, para agir antes de o GAM deduzir a receita ou limitar a conta da Groone." />
      <Body>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Kpi label="Alertas abertos" value={String(TRAFFIC.length)} tone="bad" note="2 de risco alto" />
          <Kpi label="Dedução do GAM em outubro" value="4,6%" note="Na rede toda; setembro 3,9%" />
          <Kpi label="Receita sob alerta (7 dias)" value={usd(3870)} note="Dos sites e campanhas abaixo" />
          <Kpi label="Campanhas pausadas por alerta" value="3" note="Em novembro, pelo dono da conta" />
        </div>
        <TableCard filters={<TableFilters defs={[{ key: 'risk', label: 'Risco', options: ['Alto', 'Médio'] }]} initial={['risk']} values={values} setValues={setValues} query={query} setQuery={setQuery} placeholder="Buscar site, network ou cliente" />}>
          <thead className="border-b"><tr><th className={th}>Onde</th><th className={th}>Sinal</th><th className={th}>Desde</th><th className={th}>Risco</th><th className={th}><span className="sr-only">Ações</span></th></tr></thead>
          <tbody className="divide-y">{rows.map((item) => (
            <tr key={item.id} className="transition-colors hover:bg-muted/50">
              <td className={td}><div className="font-medium">{item.target}</div><div className="text-[13px] text-muted-foreground">{item.source}</div></td>
              <td className={td}><div>{item.signal}</div><div className="text-[13px] text-muted-foreground">Normal: {item.normal}</div></td>
              <td className={cn(td, 'tnum')}>{item.since}</td>
              <td className={td}><Status tone={item.risk === 'Alto' ? 'bad' : 'warn'}>{item.risk}</Status></td>
              <td className={cn(td, 'text-right')}><Button size="sm" variant="outline" className="h-8" onClick={() => setOpen(item)}>Ver detalhes</Button></td>
            </tr>
          ))}</tbody>
        </TableCard>
      </Body>
      <Dialog open={!!open} onOpenChange={(next) => !next && setOpen(null)}>
        {open && (
          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[1040px]">
            <DialogHeader><DialogTitle>{open.target}</DialogTitle><DialogDescription>{open.client} · {open.source} · desde {open.since}</DialogDescription></DialogHeader>
          <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
            <div className="grid content-start gap-2">
              <div className="flex items-center justify-between gap-3"><span className="text-[13px] font-medium">{open.signal}</span><Status tone={open.risk === 'Alto' ? 'bad' : 'warn'}>Risco {open.risk.toLowerCase()}</Status></div>
              <div className="text-[13px] text-muted-foreground">Últimos {open.series.length} {open.id === 4 ? 'meses' : 'dias'}, em {open.unit}; o tracejado é o normal ({open.normal})</div>
              <SeriesLine series={open.series} baseline={open.baseline} label={`Série do sinal em ${open.target}`} />
            </div>
            <div className="grid content-start gap-3">
              {open.ad ? (
                <dl className="grid gap-2 rounded-md border p-4 text-[13px]">
                  <div className="mb-1 text-[13px] font-medium">Campanha no Avant ({open.ad.platform})</div>
                  {([['Conta', open.ad.account], ['Campanha', open.ad.campaign], ['Responsável', open.ad.holder], ['Gasto', open.ad.spend], ['CTR do anúncio', open.ad.adCtr], ['CPC', open.ad.cpc]] as const).map(([label, value]) => <div key={label} className="flex justify-between gap-3"><dt className="text-muted-foreground">{label}</dt><dd className="text-right tnum">{value}</dd></div>)}
                  <Button size="sm" variant="outline" className="mt-2 h-8" onClick={() => go(open.ad?.platform === 'Facebook' ? 'fbcampanhainterno' : 'gadscampanhainterno')}>Abrir a campanha</Button>
                </dl>
              ) : <div className="rounded-md border p-4 text-[13px] text-muted-foreground">Nenhuma campanha conectada no Avant explica esse tráfego. Use os links abaixo para achar quem está divulgando o site.</div>}
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{open.breakdowns.map((breakdown) => <BreakdownList key={breakdown.title} breakdown={breakdown} />)}</div>
          <ul className="mt-5 grid gap-2 text-[13px]">{open.notes.map((note) => <li key={note} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />{note}</li>)}</ul>
          <div className="mt-6 border-t pt-5">
            <div className="text-[14px] font-medium">Investigar fora do Avant</div>
            <p className="mt-1 text-[13px] text-muted-foreground">Cada link abre, numa aba nova, a busca pronta por <span className="font-mono">{open.domain}</span>. O Avant não consulta esses sites: quem analisa olha e anota na tarefa.</p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">{['Anúncios', 'Divulgação', 'Segurança'].map((group) => (
              <div key={group}><div className="mb-2 text-[12px] font-medium uppercase tracking-[0.04em] text-muted-foreground">{group}</div>
                <ul className="grid gap-1">{investigateLinks(open.domain).filter((link) => link.group === group).map((link) => (
                  <li key={link.label}><a href={link.href} target="_blank" rel="noreferrer" className="group flex items-start justify-between gap-3 rounded-md px-2 py-1.5 -mx-2 hover:bg-muted"><span><span className="text-[14px] text-link group-hover:underline">{link.label}</span><span className="block text-[12px] text-muted-foreground">{link.hint}</span></span><ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0 text-muted-foreground" /></a></li>
                ))}</ul>
              </div>
            ))}</div>
          </div>
            <DialogFooter className="items-center gap-2 border-t pt-4 sm:justify-between">
              <span className="text-[13px] text-muted-foreground">A tarefa leva o print da série, os recortes e os links de investigação.</span>
              <div className="flex gap-2"><Button variant="outline" onClick={() => { toast('Alerta dispensado por 7 dias'); setOpen(null) }}>Dispensar</Button><Button onClick={() => { toast.success('Tarefa criada para o gerente', { description: `${open.target}: ${open.signal}.` }); setOpen(null) }}><ShieldAlert className="h-4 w-4" />Criar tarefa</Button></div>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}

/* ---------- 4. Funil de ativação ---------- */

type Stage = { name: string; count: number; days: number }
type Stalled = { client: string; stage: string; days: number; manager: string }

const FUNNELS: Record<'90' | '180', Stage[]> = {
  '90': [
    { name: 'Lead no HubSpot', count: 120, days: 0 },
    { name: 'Convite do MCM enviado', count: 64, days: 9 },
    { name: 'MCM aceito', count: 41, days: 6 },
    { name: 'Ad tag instalada', count: 33, days: 12 },
    { name: 'Primeira receita', count: 29, days: 3 },
  ],
  '180': [
    { name: 'Lead no HubSpot', count: 214, days: 0 },
    { name: 'Convite do MCM enviado', count: 118, days: 10 },
    { name: 'MCM aceito', count: 77, days: 7 },
    { name: 'Ad tag instalada', count: 58, days: 14 },
    { name: 'Primeira receita', count: 52, days: 3 },
  ],
}

const STALLED: Stalled[] = [
  { client: 'Mundo Fitness', stage: 'MCM aceito, falta a ad tag', days: 23, manager: 'João Pedro' },
  { client: 'Casa & Decoração', stage: 'Convite do MCM enviado', days: 17, manager: 'Marina Souza' },
  { client: 'Futebol Hoje', stage: 'MCM aceito, falta a ad tag', days: 15, manager: 'Caio Prado' },
  { client: 'Dicas de Beleza', stage: 'Ad tag instalada, sem receita', days: 6, manager: 'Marina Souza' },
]

/** Tela Funil de ativação: do lead à primeira receita, quanto passa em cada etapa e onde trava. */
export function ActivationFunnelScreen({ go }: { go: Go }) {
  const [period, setPeriod] = useState<'90' | '180'>('90')
  const stages = FUNNELS[period]
  const top = stages[0].count
  const worst = stages.slice(1).reduce((slowest, stage) => (stage.days > slowest.days ? stage : slowest), stages[1])
  return (
    <>
      <PageHeader title="Funil de ativação" sub="Quantos leads viram cliente com receita, quanto tempo leva cada etapa e quem está parado agora. Lead vem do HubSpot; o resto, do Avant." actions={<PeriodTabs options={[['90', 'Últimos 90 dias'], ['180', 'Últimos 180 dias']] as const} value={period} setValue={setPeriod} />} />
      <Body>
        <div className="grid gap-4 sm:grid-cols-3">
          <Kpi report label="Do lead à primeira receita" value={`${Math.round((stages[4].count / top) * 100)}%`} note={`${stages[4].count} de ${top} leads`} />
          <Kpi report label="Dias até a primeira receita" value={String(stages.reduce((sum, stage) => sum + stage.days, 0))} note="Mediana, somando as etapas" />
          <Kpi report label="Etapa mais lenta" value={`${worst.days} dias`} note={worst.name} tone="warn" />
        </div>
        <Card title="Etapas">
          <ol className="grid gap-4">{stages.map((stage, index) => {
            const previous = index ? stages[index - 1].count : stage.count
            return (
              <li key={stage.name} className="grid gap-1.5 sm:grid-cols-[220px_1fr_150px] sm:items-center sm:gap-4">
                <div className="text-[14px] font-medium">{stage.name}</div>
                <div className="h-7 rounded bg-muted"><div className={cn('flex h-full items-center rounded px-2 text-[12px] font-medium text-primary-foreground', stage === worst ? 'bg-warn' : 'bg-foreground')} style={{ width: `${Math.max(8, (stage.count / top) * 100)}%` }}><span className="tnum">{stage.count}</span></div></div>
                <div className="text-[13px] text-muted-foreground tnum">{index ? <>{Math.round((stage.count / previous) * 100)}% passam · {stage.days} d</> : 'Início'}</div>
              </li>
            )
          })}</ol>
        </Card>
        <TableCard>
          <thead className="border-b"><tr><th className={th}>Parado agora</th><th className={th}>Etapa</th><th className={cn(th, 'text-right')}>Dias parado</th><th className={th}>Gerente</th><th className={th}><span className="sr-only">Ação</span></th></tr></thead>
          <tbody className="divide-y">{STALLED.map((row) => (
            <tr key={row.client} className="transition-colors hover:bg-muted/50">
              <td className={cn(td, 'font-medium')}><button className="hover:underline" onClick={() => go('cliente')}>{row.client}</button></td>
              <td className={td}>{row.stage}</td>
              <td className={cn(td, 'text-right tnum', row.days > 14 && 'font-medium text-bad')}>{row.days}</td>
              <td className={td}><span className="flex items-center gap-2"><Avatar name={row.manager} size={24} />{row.manager}</span></td>
              <td className={cn(td, 'text-right')}><Button size="sm" variant="outline" className="h-8" onClick={() => toast.success('Tarefa criada', { description: `${row.client}: ${row.stage}, para ${row.manager}.` })}>Criar tarefa</Button></td>
            </tr>
          ))}</tbody>
        </TableCard>
      </Body>
    </>
  )
}

/* ---------- 5. Previsão do mês e caixa ---------- */

const DAILY_ACTUAL = [5.1, 5.3, 4.9, 5.6, 5.8, 6.1, 5.4, 5.2, 5.5, 5.9, 6.2, 6.4, 5.7, 5.6, 6, 6.3, 6.5, 6.7, 6.1, 5.9, 6.4, 6.8, 7, 7.2, 6.6, 6.9]
const DAILY_FORECAST = [7.1, 7.3, 7, 7.4]

/** Barras da receita bruta diária do mês: cheias até ontem, contornadas na previsão. */
function MonthBars() {
  const all = [...DAILY_ACTUAL, ...DAILY_FORECAST]
  const width = 720
  const height = 140
  const peak = Math.max(...all) * 1.1
  const slot = width / all.length
  return (
    <svg viewBox={`0 0 ${width} ${height + 20}`} className="h-[170px] w-full" role="img" aria-label="Receita bruta por dia em novembro, realizada e prevista">
      {all.map((value, index) => {
        const barHeight = (value / peak) * height
        const forecast = index >= DAILY_ACTUAL.length
        return <rect key={index} x={index * slot + 2} y={height - barHeight} width={slot - 4} height={barHeight} rx={2} className={forecast ? 'fill-transparent stroke-foreground/60' : 'fill-foreground'} strokeDasharray={forecast ? '3 3' : undefined}><title>{`${index + 1}/11: US$ ${value.toLocaleString('pt-BR')} mil${forecast ? ' (previsto)' : ''}`}</title></rect>
      })}
      <text x={0} y={height + 16} className="fill-muted-foreground text-[11px]">01/11</text>
      <text x={DAILY_ACTUAL.length * slot} y={height + 16} textAnchor="middle" className="fill-muted-foreground text-[11px]">hoje</text>
      <text x={width} y={height + 16} textAnchor="end" className="fill-muted-foreground text-[11px]">30/11</text>
    </svg>
  )
}

const CASH = [
  { date: '15/12', what: 'GAM fecha o Mcm_Earnings de novembro', kind: 'Entrada', value: 'US$ 41.900 (parte da Groone, previsto)' },
  { date: '15/12 a 20/12', what: 'Fechamento da comissão da equipe', kind: 'Saída', value: 'US$ 6.320 (previsto)' },
  { date: '20/12', what: 'Invoices da equipe a pagar', kind: 'Saída', value: '7 invoices' },
  { date: '21/12', what: 'Pagamento do GAM aos clientes Manage Account', kind: 'Do GAM', value: 'Sem caixa da Groone' },
]

/** Tela Previsão do mês: onde o mês vai fechar e o que entra e sai do caixa da Groone. */
export function ForecastScreen() {
  const [scenario, setScenario] = useState('base')
  const factor = scenario === 'low' ? 0.94 : scenario === 'high' ? 1.05 : 1
  const gross = Math.round(186400 * factor)
  return (
    <>
      <PageHeader title="Previsão do mês" sub="Onde novembro deve fechar, pela receita realizada até ontem e pelo ritmo dos últimos 14 dias, com o que a Groone recebe e paga em seguida."
        actions={<Select value={scenario} onValueChange={setScenario}><SelectTrigger className="h-9 w-auto gap-2 text-[13px]"><span className="text-muted-foreground">Cenário:</span><SelectValue /></SelectTrigger><SelectContent><SelectItem value="low">Pessimista</SelectItem><SelectItem value="base">Provável</SelectItem><SelectItem value="high">Otimista</SelectItem></SelectContent></Select>} />
      <Body>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Kpi report label="Receita bruta prevista" value={usd(gross)} note={<>Realizado {usd(160300)} até ontem · <Change value={7} /> contra outubro</>} />
          <Kpi report label="Parte da Groone prevista" value={usd(Math.round(gross * 0.235))} note="Pelo revshare dos contratos ativos" tone="ok" />
          <Kpi report label="Dedução esperada" value={usd(Math.round(gross * 0.046))} note="4,6%, média dos últimos 3 meses" tone="bad" />
          <Kpi report label="Comissões a pagar" value={usd(6320)} note="Equipe Groone, fecha de 15/12 a 20/12" />
        </div>
        <Card title="Receita bruta por dia" desc="Barras cheias são o realizado; tracejadas, a previsão até o fim do mês.">
          <MonthBars />
        </Card>
        <TableCard>
          <thead className="border-b"><tr><th className={th}>Quando</th><th className={th}>O quê</th><th className={th}>Tipo</th><th className={th}>Valor</th></tr></thead>
          <tbody className="divide-y">{CASH.map((row) => (
            <tr key={row.what}><td className={cn(td, 'tnum')}>{row.date}</td><td className={td}>{row.what}</td><td className={td}><Badge tone={row.kind === 'Saída' ? 'bad' : row.kind === 'Entrada' ? 'neutral' : 'ochre'}>{row.kind}</Badge></td><td className={cn(td, 'tnum')}>{row.value}</td></tr>
          ))}</tbody>
        </TableCard>
        <p className="flex items-start gap-2 text-[13px] text-muted-foreground"><Info className="mt-0.5 h-4 w-4 shrink-0" />O repasse aos clientes Manage Inventory entra aqui quando as invoices de cliente existirem.</p>
      </Body>
    </>
  )
}

/* ---------- 6. Comparativo com a rede (painel do cliente) ---------- */

type Benchmark = { metric: string; mine: number; median: number; top: number; unit: 'usd' | 'pct'; percentile: number; tip: string }

const BENCHMARKS: Benchmark[] = [
  { metric: 'RPM de sessão', mine: 0.042, median: 0.036, top: 0.051, unit: 'usd', percentile: 64, tip: 'Acima da mediana. Para chegar aos 25% melhores, o reward costuma ser o próximo passo.' },
  { metric: 'eCPM', mine: 1.18, median: 1.31, top: 1.74, unit: 'usd', percentile: 38, tip: 'Abaixo da mediana. Sites com regras de preço por país ficam, em média, 12% acima.' },
  { metric: 'Fill rate', mine: 87, median: 82, top: 93, unit: 'pct', percentile: 61, tip: 'Bom. O fill sobe pouco depois de 90%.' },
  { metric: 'Viewability', mine: 52, median: 61, top: 72, unit: 'pct', percentile: 27, tip: 'Abaixo da mediana. Lazy load e menos blocos acima da dobra ajudam.' },
  { metric: 'Páginas por sessão', mine: 2.4, median: 1.9, top: 2.8, unit: 'pct', percentile: 70, tip: 'Acima da mediana.' },
]

/** Valor formatado conforme a unidade da métrica. */
function benchValue(item: Benchmark, value: number) {
  if (item.metric === 'Páginas por sessão') return value.toLocaleString('pt-BR')
  return item.unit === 'usd' ? `US$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })}` : `${value}%`
}

/** Régua de 0 a 100 com a posição do cliente e a mediana marcada. */
function PercentileRuler({ percentile }: { percentile: number }) {
  return (
    <div className="relative h-2 w-full rounded-full bg-muted-foreground/15" role="meter" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percentile} aria-label="Posição na rede">
      <span className="absolute left-1/2 top-[-3px] h-[14px] w-px bg-muted-foreground" aria-hidden="true" />
      <span className="absolute left-3/4 top-[-3px] h-[14px] w-px bg-muted-foreground/50" aria-hidden="true" />
      <span className={cn('absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background', percentile >= 50 ? 'bg-ok' : 'bg-warn')} style={{ left: `${percentile}%` }} />
    </div>
  )
}

/** Tela Comparativo com a rede: como o site do cliente está perto de sites parecidos, sem mostrar quem são. */
export function BenchmarkScreen() {
  const [site, setSite] = useState('receitasdavo.com.br')
  const [country, setCountry] = useState('BR')
  return (
    <>
      <PageHeader title="Comparativo com a rede" sub="Como o seu site está comparado a sites parecidos da rede Groone (mesmo país e categoria) nos últimos 30 dias. Ninguém aparece pelo nome." />
      <Body>
        <div className="flex flex-wrap gap-2">
          <Select value={site} onValueChange={setSite}><SelectTrigger className="h-9 w-auto gap-2 text-[13px]"><span className="text-muted-foreground">Site:</span><SelectValue /></SelectTrigger><SelectContent><SelectItem value="receitasdavo.com.br">receitasdavo.com.br</SelectItem><SelectItem value="docesdavo.com.br">docesdavo.com.br</SelectItem></SelectContent></Select>
          <Select value={country} onValueChange={setCountry}><SelectTrigger className="h-9 w-auto gap-2 text-[13px]"><span className="text-muted-foreground">País:</span><SelectValue /></SelectTrigger><SelectContent><SelectItem value="BR">Brasil</SelectItem><SelectItem value="US">Estados Unidos</SelectItem><SelectItem value="PT">Portugal</SelectItem></SelectContent></Select>
          <span className="inline-flex h-9 items-center rounded-md border bg-background px-3 text-[13px]"><span className="mr-1 text-muted-foreground">Categoria:</span>Receitas e culinária</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <Kpi report label="Sites no grupo" value="23" note="Mínimo de 5 para mostrar o comparativo" />
          <Kpi report label="Métricas acima da mediana" value="3 de 5" tone="ok" />
          <Kpi report label="Maior espaço para crescer" value="Viewability" note="27º percentil" tone="warn" />
        </div>
        <Card title="Suas métricas" desc={<>A bolinha é o seu site. O traço do meio é a mediana da rede e o traço claro, onde começam os 25% melhores.</>}>
          <ul className="divide-y">{BENCHMARKS.map((item) => (
            <li key={item.metric} className="grid gap-3 py-4 first:pt-0 last:pb-0 md:grid-cols-[180px_1fr_260px] md:items-center md:gap-6">
              <div><div className="text-[14px] font-medium">{item.metric}</div><div className="text-[20px] font-semibold tnum">{benchValue(item, item.mine)}</div></div>
              <div className="grid gap-1.5"><PercentileRuler percentile={item.percentile} /><div className="flex justify-between text-[12px] text-muted-foreground tnum"><span>Mediana {benchValue(item, item.median)}</span><span>25% melhores {benchValue(item, item.top)}</span></div></div>
              <p className="text-[13px] text-muted-foreground">{item.tip}</p>
            </li>
          ))}</ul>
        </Card>
        <p className="flex items-start gap-2 text-[13px] text-muted-foreground"><Info className="mt-0.5 h-4 w-4 shrink-0" />Só entram sites com 30 dias de dados. Nenhum valor de outro cliente sai daqui, só a mediana e o corte dos 25% melhores.</p>
      </Body>
    </>
  )
}
