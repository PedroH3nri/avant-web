import { useState } from 'react'
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react'
import type { DateRange } from 'react-day-picker'
import { ptBR } from 'react-day-picker/locale'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

export const TODAY = new Date(2026, 10, 25)

/** Soma dias a uma data sem mexer na original. */
function addDays(date: Date, days: number): Date {
  const copy = new Date(date)
  copy.setDate(copy.getDate() + days)
  return copy
}

/** Os atalhos de período, na ordem do seletor. */
export const PRESETS: { key: string; label: string; range: () => DateRange }[] = [
  { key: 'today', label: 'Hoje', range: () => ({ from: TODAY, to: TODAY }) },
  { key: 'yesterday', label: 'Ontem', range: () => ({ from: addDays(TODAY, -1), to: addDays(TODAY, -1) }) },
  { key: 'last_7', label: 'Últimos 7 dias', range: () => ({ from: addDays(TODAY, -6), to: TODAY }) },
  { key: 'last_30', label: 'Últimos 30 dias', range: () => ({ from: addDays(TODAY, -29), to: TODAY }) },
  { key: 'this_month', label: 'Este mês', range: () => ({ from: new Date(2026, 10, 1), to: TODAY }) },
  { key: 'last_month', label: 'Mês passado', range: () => ({ from: new Date(2026, 9, 1), to: new Date(2026, 9, 31) }) },
  { key: 'this_year', label: 'Este ano', range: () => ({ from: new Date(2026, 0, 1), to: TODAY }) },
]

/** Data curta em português, como "19 de nov.". */
function short(date: Date, withYear = false): string {
  return date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', ...(withYear ? { year: 'numeric' } : {}) })
}

/** O período em texto, como "19 – 25 de nov. de 2026". */
export function rangeText(range: DateRange | undefined): string {
  if (!range?.from) return 'Escolha o período'
  if (!range.to || range.to.getTime() === range.from.getTime()) return short(range.from, true)
  if (range.from.getMonth() === range.to.getMonth() && range.from.getFullYear() === range.to.getFullYear()) return `${range.from.getDate()} – ${short(range.to, true)}`
  return `${short(range.from, range.from.getFullYear() !== range.to.getFullYear())} – ${short(range.to, true)}`
}

/** Quantos dias o período tem, contando os dois lados. */
function dayCount(range: DateRange | undefined): number {
  if (!range?.from) return 0
  const end = range.to ?? range.from
  return Math.round((end.getTime() - range.from.getTime()) / 86_400_000) + 1
}

/** Seletor de período: atalhos à esquerda, dois meses à direita e Aplicar no rodapé. */
export function PeriodPicker({ value, onChange, defaultOpen = false }: { value: { preset: string | null; range: DateRange }; onChange: (next: { preset: string | null; range: DateRange }) => void; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const [draft, setDraft] = useState(value)
  const narrow = typeof window !== 'undefined' && window.innerWidth < 640
  const label = value.preset ? PRESETS.find((preset) => preset.key === value.preset)?.label : null
  const toggle = (next: boolean) => {
    if (next) setDraft(value)
    setOpen(next)
  }
  return (
    <Popover open={open} onOpenChange={toggle}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="h-9 justify-start gap-2 font-normal">
          <CalendarDays className="h-4 w-4 text-muted-foreground" />
          {label && <span>{label}</span>}
          <span className={cn('tnum', label && 'text-muted-foreground')}>{label ? `· ${rangeText(value.range)}` : rangeText(value.range)}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" side="bottom" avoidCollisions={false} className="w-auto max-w-[calc(100vw-32px)] p-0" onOpenAutoFocus={(event) => event.preventDefault()}>
        <div className="flex flex-col sm:flex-row">
          <div className="flex gap-1 overflow-x-auto border-b p-2 sm:w-[168px] sm:flex-col sm:border-b-0 sm:border-r" role="listbox" aria-label="Atalhos">
            {PRESETS.map((preset) => (
              <button
                key={preset.key}
                type="button"
                role="option"
                aria-selected={draft.preset === preset.key}
                onClick={() => setDraft({ preset: preset.key, range: preset.range() })}
                className={cn('shrink-0 rounded-md px-3 py-1.5 text-left text-[14px] transition-colors hover:bg-muted', draft.preset === preset.key && 'bg-muted font-medium')}
              >
                {preset.label}
              </button>
            ))}
            <button
              type="button"
              role="option"
              aria-selected={draft.preset === null}
              onClick={() => setDraft({ ...draft, preset: null })}
              className={cn('shrink-0 rounded-md px-3 py-1.5 text-left text-[14px] transition-colors hover:bg-muted', draft.preset === null && 'bg-muted font-medium')}
            >
              Personalizado
            </button>
          </div>
          <div>
            <Calendar
              mode="range"
              locale={ptBR}
              numberOfMonths={narrow ? 1 : 2}
              defaultMonth={narrow ? (draft.range.to ?? TODAY) : addDays(draft.range.to ?? TODAY, -31)}
              selected={draft.range}
              onSelect={(range) => range && setDraft({ preset: null, range })}
              disabled={{ after: TODAY }}
              className="bg-transparent [--cell-size:2.25rem]"
            />
            <div className="flex flex-wrap items-center justify-between gap-3 border-t px-3 py-2.5">
              <span className="text-[13px] text-muted-foreground tnum">
                {rangeText(draft.range)} · {dayCount(draft.range)} {dayCount(draft.range) === 1 ? 'dia' : 'dias'}
              </span>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Cancelar</Button>
                <Button size="sm" disabled={!draft.range.from} onClick={() => { onChange({ ...draft, range: { from: draft.range.from, to: draft.range.to ?? draft.range.from } }); setOpen(false) }}>Aplicar</Button>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

/** Campo de data única: parece um campo de texto e abre um mês com Hoje e Limpar. */
export function DateField({ value, onChange, min, placeholder = 'dd/mm/aaaa', defaultOpen = false, id }: { value: Date | undefined; onChange: (next: Date | undefined) => void; min?: Date; placeholder?: string; defaultOpen?: boolean; id?: string }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button id={id} type="button" className="flex h-9 w-full max-w-[220px] items-center justify-between gap-2 rounded-md border border-input bg-background px-3 text-left text-[14px] shadow-xs transition-colors hover:border-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <span className={cn('tnum', !value && 'text-muted-foreground')}>{value ? value.toLocaleDateString('pt-BR') : placeholder}</span>
          <CalendarDays className="h-4 w-4 text-muted-foreground" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0" onOpenAutoFocus={(event) => event.preventDefault()}>
        <Calendar mode="single" locale={ptBR} selected={value} defaultMonth={value ?? TODAY} onSelect={(day) => { onChange(day); setOpen(false) }} disabled={min ? { before: min } : undefined} className="bg-transparent [--cell-size:2.25rem]" />
        <div className="flex justify-between border-t px-3 py-2">
          <Button variant="ghost" size="sm" onClick={() => { onChange(undefined); setOpen(false) }}>Limpar</Button>
          <Button variant="outline" size="sm" onClick={() => { onChange(TODAY); setOpen(false) }}>Hoje</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

const MONTHS = ['jan.', 'fev.', 'mar.', 'abr.', 'mai.', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.']

/** Seletor de mês: o ano em cima e os doze meses numa grade; meses futuros ficam apagados. */
export function MonthField({ value, onChange, defaultOpen = false }: { value: { year: number; month: number }; onChange: (next: { year: number; month: number }) => void; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const [year, setYear] = useState(value.year)
  return (
    <Popover open={open} onOpenChange={(next) => { if (next) setYear(value.year); setOpen(next) }}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="h-9 justify-start gap-2 font-normal">
          <CalendarDays className="h-4 w-4 text-muted-foreground" />
          <span className="capitalize">{new Date(value.year, value.month, 1).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[264px] p-3" onOpenAutoFocus={(event) => event.preventDefault()}>
        <div className="mb-3 flex items-center justify-between">
          <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Ano anterior" onClick={() => setYear(year - 1)}><ChevronLeft className="h-4 w-4" /></Button>
          <span className="text-[14px] font-medium tnum">{year}</span>
          <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Próximo ano" disabled={year >= TODAY.getFullYear()} onClick={() => setYear(year + 1)}><ChevronRight className="h-4 w-4" /></Button>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {MONTHS.map((name, month) => {
            const future = year > TODAY.getFullYear() || (year === TODAY.getFullYear() && month > TODAY.getMonth())
            const selected = year === value.year && month === value.month
            return (
              <button
                key={name}
                type="button"
                disabled={future}
                onClick={() => { onChange({ year, month }); setOpen(false) }}
                className={cn('h-9 rounded-md text-[14px] capitalize transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-40', selected && 'bg-primary text-primary-foreground hover:bg-primary', !selected && year === TODAY.getFullYear() && month === TODAY.getMonth() && 'bg-accent')}
              >
                {name}
              </button>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}
