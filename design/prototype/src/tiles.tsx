import { cn } from '@/lib/utils'

export type SeatState = 'owner' | 'member' | 'pending' | 'free'

/** Brand mark: a provisional monogram until the new identity exists. */
export function Mark({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true" className="shrink-0">
      <rect width="32" height="32" rx="7" fill="hsl(var(--primary))" />
      <path d="M9.5 23L16 8.5L22.5 23M12 17.5H20" fill="none" stroke="hsl(var(--primary-foreground))" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const seatClass: Record<SeatState, string> = {
  owner: 'bg-primary',
  member: 'bg-primary',
  pending: 'bg-ochre',
  free: 'bg-muted-foreground/15',
}

/** Legend swatch for a seat state. */
export function SeatDot({ state, className }: { state: SeatState; className?: string }) {
  return <span aria-hidden="true" className={cn('inline-block h-2.5 w-2.5 shrink-0 rounded-[3px]', seatClass[state], className)} />
}

/** Staff limit as a segmented usage bar, one segment per seat. */
export function SeatBar({ seats }: { seats: SeatState[] }) {
  const used = seats.filter((s) => s !== 'free').length
  return (
    <div className="flex h-2 w-full gap-[3px]" role="meter" aria-valuemin={0} aria-valuemax={seats.length} aria-valuenow={used} aria-label="Vagas de funcionários usadas">
      {seats.map((s, i) => <span key={i} className={cn('h-full flex-1 rounded-[2px] transition-colors duration-200', seatClass[s])} />)}
    </div>
  )
}

/** Compact seat strip for tables. */
export function SeatStrip({ used, pending = 0, limit }: { used: number; pending?: number; limit: number }) {
  return (
    <span className="inline-flex h-1.5 w-20 gap-[2px]" aria-hidden="true">
      {Array.from({ length: limit }).map((_, i) => (
        <span key={i} className={cn('h-full flex-1 rounded-[1px]', i < used ? 'bg-primary' : i < used + pending ? 'bg-ochre' : 'bg-muted-foreground/15')} />
      ))}
    </span>
  )
}
