/* Navbar: o card da cotação do dólar e a central de notificações, ao lado do seletor de idioma. */
import { useState } from 'react'
import { AlertTriangle, ArrowDownRight, ArrowUpRight, Bell, BellOff, CalendarDays, ChartLine, CheckCheck, CircleCheck, ClipboardList, DollarSign, Gift, Info, Megaphone, Send, Star, UserPlus, Users, Wrench, X, ShieldAlert } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

const RATES = [5.31, 5.29, 5.33, 5.36, 5.34, 5.38, 5.41, 5.39, 5.37, 5.35, 5.33, 5.36, 5.4, 5.44, 5.42, 5.39, 5.41, 5.45, 5.47, 5.44, 5.42, 5.46, 5.43, 5.41, 5.38, 5.4, 5.43, 5.41, 5.39, 5.42]
const brl = (value: number) => value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
const brl4 = (value: number) => value.toLocaleString('pt-BR', { minimumFractionDigits: 4, maximumFractionDigits: 4 })

/** A linha dos últimos 30 dias da cotação, num SVG que ocupa a largura do painel. */
function RateLine({ values, up }: { values: number[]; up: boolean }) {
  const width = 280
  const height = 72
  const low = Math.min(...values)
  const high = Math.max(...values)
  const points = values.map((value, index) => `${(index / (values.length - 1)) * width},${height - 4 - ((value - low) / (high - low || 1)) * (height - 8)}`)
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-[72px] w-full" role="img" aria-label="Cotação dos últimos 30 dias">
      <polyline points={`0,${height} ${points.join(' ')} ${width},${height}`} className={up ? 'fill-[hsl(var(--ok)/0.10)]' : 'fill-[hsl(var(--bad)/0.10)]'} stroke="none" />
      <polyline points={points.join(' ')} fill="none" strokeWidth="1.75" strokeLinejoin="round" className={up ? 'stroke-[hsl(var(--ok))]' : 'stroke-[hsl(var(--bad))]'} />
    </svg>
  )
}

/** Card do tamanho do seletor de idioma com o dólar de agora e a variação desde o fechamento de ontem. */
export function DollarRate({ className }: { className?: string }) {
  const now = RATES[RATES.length - 1]
  const yesterday = RATES[RATES.length - 2]
  const change = ((now - yesterday) / yesterday) * 100
  const up = change >= 0
  const Arrow = up ? ArrowUpRight : ArrowDownRight
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button aria-label={`Dólar: R$ ${brl4(now)}, ${up ? 'alta' : 'queda'} de ${brl(Math.abs(change))}% desde ontem`} className={cn('flex h-8 w-[132px] items-center justify-between gap-1 whitespace-nowrap rounded-md border bg-background px-2 text-[12px] transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-px hover:border-[hsl(var(--ring)/0.45)] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', className)}>
          <span className="whitespace-nowrap font-medium text-muted-foreground">USD</span>
          <span className="whitespace-nowrap tnum font-semibold">{brl(now)}</span>
          <span className={cn('flex items-center tnum font-medium', up ? 'text-ok' : 'text-bad')}><Arrow className="h-3 w-3" />{brl(Math.abs(change))}%</span>
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[312px] p-4">
        <div className="text-[13px] font-medium text-muted-foreground">Dólar comercial (USD → BRL)</div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="tnum text-[24px] font-semibold tracking-[-0.03em]">R$ {brl4(now)}</span>
          <span className={cn('flex items-center tnum text-[13px] font-medium', up ? 'text-ok' : 'text-bad')}><Arrow className="h-3.5 w-3.5" />{up ? '+' : '−'}{brl(Math.abs(change))}% desde ontem</span>
        </div>
        <div className="mt-3"><RateLine values={RATES} up={RATES[RATES.length - 1] >= RATES[0]} /></div>
        <div className="mt-1 flex justify-between text-[12px] text-muted-foreground tnum"><span>26/10</span><span>Últimos 30 dias</span><span>25/11</span></div>
        <dl className="mt-3 grid grid-cols-3 gap-2 border-t pt-3 text-[12px]">
          <div><dt className="text-muted-foreground">Mínima</dt><dd className="tnum font-medium">R$ {brl(Math.min(...RATES))}</dd></div>
          <div><dt className="text-muted-foreground">Máxima</dt><dd className="tnum font-medium">R$ {brl(Math.max(...RATES))}</dd></div>
          <div><dt className="text-muted-foreground">Ontem</dt><dd className="tnum font-medium">R$ {brl(yesterday)}</dd></div>
        </dl>
        <p className="mt-3 text-[12px] text-muted-foreground">Atualizada às 17:00 · Open Exchange Rates, de hora em hora. É a mesma cotação que o Avant usa para converter os valores.</p>
      </PopoverContent>
    </Popover>
  )
}

type NoticeKind = 'alert' | 'task' | 'gam' | 'install' | 'invite' | 'manual' | 'cloaker'
type Notice = { id: number; kind: NoticeKind; title: string; text: string; at: string; read: boolean }

const NOTICE_ICONS: Record<NoticeKind, { icon: typeof Bell; tone: string }> = {
  alert: { icon: AlertTriangle, tone: 'text-bad' },
  task: { icon: ClipboardList, tone: 'text-foreground' },
  gam: { icon: Wrench, tone: 'text-foreground' },
  install: { icon: AlertTriangle, tone: 'text-ochre' },
  invite: { icon: UserPlus, tone: 'text-ok' },
  manual: { icon: Megaphone, tone: 'text-foreground' },
  cloaker: { icon: ShieldAlert, tone: 'text-bad' },
}

const NOTICES: Notice[] = [
  { id: 9, kind: 'cloaker', title: 'Suspeita de cloaker em blogexemplo.com', text: 'A ad tag viu conteúdo diferente na mesma URL para quem vem com utm_source=facebook (214 visitas). Veja a Segurança do site.', at: 'agora', read: false },
  { id: 7, kind: 'manual', title: 'Nova tela de resultados', text: 'O relatório de resultados agora mostra a comparação com o mês anterior. · Pedro Henrique', at: 'há 2 min', read: false },
  { id: 1, kind: 'alert', title: 'Alerta: RPM caiu 32%', text: 'technoticias.com.br · hoje até 16h contra a média dos últimos 7 dias', at: 'há 5 min', read: false },
  { id: 2, kind: 'task', title: 'Ana Souza comentou na tarefa', text: '"Conferir ads.txt do Receitas da Vó": já atualizei a linha da Groone.', at: 'há 22 min', read: false },
  { id: 3, kind: 'gam', title: 'Setup de anúncio concluído', text: 'Tech Notícias MCM · financasdodia.com · 27 blocos criados', at: 'há 1 h', read: false },
  { id: 4, kind: 'install', title: 'Tag não encontrada', text: 'receitasdavo.com · a verificação de hoje não achou o tag.js na página inicial', at: 'há 3 h', read: true },
  { id: 5, kind: 'invite', title: 'Convite aceito', text: 'Caio Prado entrou na Empresa Tech Notícias como Financeiro', at: 'ontem', read: true },
  { id: 6, kind: 'task', title: 'Nova tarefa para você', text: '"Revisar contrato da network 22311009876", de Pedro Henrique', at: 'ontem', read: true },
]

/** O sino com o número de não lidas e o painel com a lista, os filtros e o "marcar todas como lidas". */
export function NotificationCenter({ className }: { className?: string }) {
  const [items, setItems] = useState(NOTICES)
  const [unreadOnly, setUnreadOnly] = useState(false)
  const [composing, setComposing] = useState(() => new URLSearchParams(location.search).get('aberto') === 'enviar')
  const unread = items.filter((item) => !item.read).length
  const shown = unreadOnly ? items.filter((item) => !item.read) : items
  const open = (id: number) => setItems(items.map((item) => (item.id === id ? { ...item, read: true } : item)))
  return (
    <>
    <SendNotificationDialog open={composing} onOpenChange={setComposing} />
    <Popover>
      <PopoverTrigger asChild>
        <button aria-label={unread ? `Notificações: ${unread} não lidas` : 'Notificações'} className={cn('relative flex h-8 w-8 shrink-0 items-center justify-center rounded-md border bg-background text-muted-foreground transition-[border-color,transform,box-shadow,color] duration-200 hover:-translate-y-px hover:border-[hsl(var(--ring)/0.45)] hover:text-foreground hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', className)}>
          <Bell className={cn('h-4 w-4', unread > 0 && 'origin-top animate-[bell_1s_ease-in-out_1]')} />
          {unread > 0 && <span className="absolute -right-1.5 -top-1.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-foreground px-1 text-[11px] font-semibold leading-none text-background tnum ring-2 ring-background">{unread > 9 ? '9+' : unread}</span>}
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" collisionPadding={8} className="w-[min(380px,calc(100vw-16px))] p-0">
        <div className="flex items-center justify-between gap-2 border-b px-4 py-3">
          <div className="text-[14px] font-semibold">Notificações</div>
          <button onClick={() => setComposing(true)} className="ml-auto inline-flex items-center gap-1 rounded px-1.5 py-1 text-[12px] font-medium text-muted-foreground hover:bg-muted hover:text-foreground"><Send className="h-3.5 w-3.5" />Enviar</button>
          <button disabled={!unread} onClick={() => setItems(items.map((item) => ({ ...item, read: true })))} className="inline-flex items-center gap-1 rounded px-1.5 py-1 text-[12px] font-medium text-muted-foreground hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-40"><CheckCheck className="h-3.5 w-3.5" />Marcar todas como lidas</button>
        </div>
        <div className="flex gap-1 border-b px-3 py-2 text-[13px]">
          {[[false, 'Todas'], [true, `Não lidas${unread ? ` (${unread})` : ''}`]].map(([value, label]) => (
            <button key={String(value)} aria-pressed={unreadOnly === value} onClick={() => setUnreadOnly(value as boolean)} className={cn('rounded-md px-2.5 py-1 font-medium', unreadOnly === value ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground')}>{label}</button>
          ))}
        </div>
        <ul className="max-h-[min(420px,60vh)] divide-y overflow-y-auto">
          {shown.map((item) => {
            const { icon: Icon, tone } = NOTICE_ICONS[item.kind]
            return (
              <li key={item.id}>
                <button onClick={() => open(item.id)} className={cn('grid w-full grid-cols-[28px_1fr_8px] gap-3 px-4 py-3 text-left transition-colors hover:bg-muted', !item.read && 'bg-[hsl(var(--muted)/0.5)]')}>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border bg-background"><Icon className={cn('h-3.5 w-3.5', tone)} /></span>
                  <span className="min-w-0">
                    <span className={cn('block text-[13px]', item.read ? 'font-medium' : 'font-semibold')}>{item.title}</span>
                    <span className="block text-[13px] leading-snug text-muted-foreground">{item.text}</span>
                    <span className="mt-1 block text-[12px] text-muted-foreground">{item.at}</span>
                  </span>
                  {!item.read ? <span className="mt-1.5 h-2 w-2 rounded-full bg-primary" aria-label="Não lida" /> : <span />}
                </button>
              </li>
            )
          })}
          {!shown.length && (
            <li className="flex flex-col items-center gap-2 px-4 py-10 text-center text-[13px] text-muted-foreground"><BellOff className="h-5 w-5" />Nenhuma notificação não lida.</li>
          )}
        </ul>
        <div className="border-t px-4 py-2.5 text-[12px] text-muted-foreground">Ficam 30 dias. Os e-mails de alerta e de tarefa continuam como hoje.</div>
      </PopoverContent>
    </Popover>
    </>
  )
}

const ICONS: { key: string; icon: typeof Bell; label: string }[] = [
  { key: 'megaphone', icon: Megaphone, label: 'Anúncio' },
  { key: 'bell', icon: Bell, label: 'Sino' },
  { key: 'info', icon: Info, label: 'Informação' },
  { key: 'alert', icon: AlertTriangle, label: 'Atenção' },
  { key: 'check', icon: CircleCheck, label: 'Concluído' },
  { key: 'star', icon: Star, label: 'Destaque' },
  { key: 'gift', icon: Gift, label: 'Presente' },
  { key: 'calendar', icon: CalendarDays, label: 'Data' },
  { key: 'wrench', icon: Wrench, label: 'Manutenção' },
  { key: 'chart', icon: ChartLine, label: 'Resultado' },
  { key: 'dollar', icon: DollarSign, label: 'Pagamento' },
  { key: 'users', icon: Users, label: 'Equipe' },
  { key: 'task', icon: ClipboardList, label: 'Tarefa' },
]

const AUDIENCES = [
  { key: 'groone', label: 'Equipe Groone', hint: 'Todas as pessoas ativas da Groone' },
  { key: 'all_clients', label: 'Todos os clientes', hint: 'Cada pessoa ativa de cada Empresa cliente ativa' },
  { key: 'clients', label: 'Empresas escolhidas', hint: 'Só as Empresas que você escolher' },
]

const COMPANIES = ['Tech Notícias', 'Receitas da Vó', 'Finanças do Dia', 'Blog do Esporte']

const SENT = [
  { id: 1, title: 'Nova tela de resultados', audience: 'Todos os clientes', by: 'Pedro Henrique', at: 'hoje, 17:23', recipients: 148, read: 37 },
  { id: 2, title: 'Manutenção do GAM sábado às 22h', audience: 'Equipe Groone', by: 'Ana Souza', at: '20/11, 10:05', recipients: 12, read: 12 },
]

/** Janela de envio: ícone, título, descrição, link e público, com a prévia de como chega no sino; aba com os enviados. */
function SendNotificationDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [tab, setTab] = useState<'new' | 'sent'>('new')
  const [icon, setIcon] = useState('megaphone')
  const [title, setTitle] = useState('Nova tela de resultados')
  const [text, setText] = useState('O relatório de resultados agora mostra a comparação com o mês anterior.')
  const [link, setLink] = useState('/relatorios/resultados')
  const [audience, setAudience] = useState('all_clients')
  const [chosen, setChosen] = useState<string[]>(['Tech Notícias'])
  const Icon = ICONS.find((item) => item.key === icon)?.icon ?? Bell
  const ready = title.trim() && text.trim() && (audience !== 'clients' || chosen.length)
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] max-w-[760px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Enviar notificação</DialogTitle>
          <DialogDescription>Chega no sino de cada pessoa na hora. Fica 30 dias.</DialogDescription>
        </DialogHeader>
        <div className="flex gap-1 border-b text-[13px]">
          {([['new', 'Nova'], ['sent', 'Enviadas']] as const).map(([value, label]) => (
            <button key={value} onClick={() => setTab(value)} className={cn('-mb-px border-b-2 px-3 py-2 font-medium transition-colors', tab === value ? 'border-foreground text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground')}>{label}</button>
          ))}
        </div>
        {tab === 'new' ? (
          <div className="grid gap-6 md:grid-cols-[1fr_260px]">
            <div className="space-y-4">
              <fieldset>
                <legend className="mb-2 text-[13px] font-medium">Ícone</legend>
                <div className="grid grid-cols-7 gap-1.5">
                  {ICONS.map((item) => (
                    <button key={item.key} type="button" title={item.label} aria-label={item.label} aria-pressed={icon === item.key} onClick={() => setIcon(item.key)} className={cn('flex h-9 items-center justify-center rounded-md border transition-[border-color,transform,background-color] duration-150 hover:-translate-y-px', icon === item.key ? 'border-foreground bg-secondary' : 'hover:border-[hsl(var(--ring)/0.45)]')}>
                      <item.icon className="h-4 w-4" />
                    </button>
                  ))}
                </div>
              </fieldset>
              <div className="space-y-1.5">
                <div className="flex justify-between"><Label htmlFor="n-title">Título</Label><span className="tnum text-[12px] text-muted-foreground">{title.length}/120</span></div>
                <Input id="n-title" maxLength={120} value={title} onChange={(event) => setTitle(event.target.value)} />
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between"><Label htmlFor="n-text">Descrição</Label><span className="tnum text-[12px] text-muted-foreground">{text.length}/1000</span></div>
                <Textarea id="n-text" rows={3} maxLength={1000} value={text} onChange={(event) => setText(event.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="n-link">Link <span className="font-normal text-muted-foreground">(opcional)</span></Label>
                <Input id="n-link" placeholder="/relatorios ou https://..." value={link} onChange={(event) => setLink(event.target.value)} />
                <p className="text-[12px] text-muted-foreground">Uma tela do Avant (começa com /) ou um endereço https://. Nos clientes, só telas do Avant.</p>
              </div>
              <fieldset className="space-y-2">
                <legend className="mb-2 text-[13px] font-medium">Para quem</legend>
                {AUDIENCES.map((item) => (
                  <label key={item.key} className={cn('flex cursor-pointer items-start gap-3 rounded-md border px-3 py-2.5 transition-colors', audience === item.key ? 'border-foreground bg-secondary/60' : 'hover:bg-muted')}>
                    <input type="radio" name="audience" className="mt-1" checked={audience === item.key} onChange={() => setAudience(item.key)} />
                    <span><span className="block text-[13px] font-medium">{item.label}</span><span className="block text-[12px] text-muted-foreground">{item.hint}</span></span>
                  </label>
                ))}
                {audience === 'clients' && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {COMPANIES.map((name) => {
                      const on = chosen.includes(name)
                      return <button key={name} type="button" aria-pressed={on} onClick={() => setChosen(on ? chosen.filter((item) => item !== name) : [...chosen, name])} className={cn('inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[12px] font-medium transition-colors', on ? 'border-foreground bg-foreground text-background' : 'text-muted-foreground hover:text-foreground')}>{name}{on && <X className="h-3 w-3" />}</button>
                    })}
                  </div>
                )}
                <p className="text-[12px] text-muted-foreground">Numa Empresa cliente, quem tem a permissão "Enviar notificações para a equipe" escolhe entre toda a Empresa e pessoas da Empresa.</p>
              </fieldset>
            </div>
            <div>
              <div className="mb-2 text-[13px] font-medium">Prévia no sino</div>
              <div className="animate-in fade-in-0 slide-in-from-bottom-1 rounded-lg border bg-background shadow-sm">
                <div className="grid grid-cols-[28px_1fr_8px] gap-3 bg-[hsl(var(--muted)/0.5)] px-4 py-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border bg-background"><Icon className="h-3.5 w-3.5" /></span>
                  <span className="min-w-0">
                    <span className="block break-words text-[13px] font-semibold">{title || 'Título'}</span>
                    <span className="block break-words text-[13px] leading-snug text-muted-foreground">{text || 'Descrição'}</span>
                    <span className="mt-1 block text-[12px] text-muted-foreground">agora · Pedro Henrique</span>
                  </span>
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary" />
                </div>
              </div>
              <p className="mt-3 text-[12px] text-muted-foreground">{audience === 'groone' ? 'Vai para 12 pessoas.' : audience === 'all_clients' ? 'Vai para 148 pessoas em 41 Empresas.' : `Vai para as pessoas de ${chosen.length} Empresa${chosen.length === 1 ? '' : 's'}.`}</p>
            </div>
          </div>
        ) : (
          <ul className="divide-y rounded-md border">
            {SENT.map((item) => (
              <li key={item.id} className="grid grid-cols-[1fr_auto] gap-3 px-4 py-3 text-[13px]">
                <span><span className="block font-medium">{item.title}</span><span className="block text-muted-foreground">{item.audience} · {item.by} · {item.at}</span></span>
                <span className="text-right tnum"><span className="block font-medium">{item.read} de {item.recipients}</span><span className="block text-[12px] text-muted-foreground">leram</span></span>
              </li>
            ))}
          </ul>
        )}
        {tab === 'new' && (
          <DialogFooter>
            <Button variant="outline" onClick={() => onOpenChange(false)}>Cancelar</Button>
            <Button disabled={!ready} onClick={() => onOpenChange(false)}><Send className="mr-1.5 h-4 w-4" />Enviar</Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}
