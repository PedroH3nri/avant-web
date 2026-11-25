import * as React from "react"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command"

const SEARCH_FROM_OPTIONS = 8

type SearchSelectProps = {
  id?: string
  value: string
  options: { value: string; label: string }[]
  onValueChange: (value: string) => void
  className?: string
  "aria-label"?: string
}

/** Select do painel (estilo Select2): botão com a escolha, lista própria e busca a partir de 8 opções. */
export function SearchSelect({ id, value, options, onValueChange, className, ...rest }: SearchSelectProps) {
  const [open, setOpen] = React.useState(false)
  const selected = options.find((option) => option.value === value)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          id={id}
          type="button"
          role="combobox"
          aria-expanded={open}
          aria-label={rest["aria-label"]}
          className={cn("flex h-10 w-full items-center justify-between gap-2 rounded-md border border-input bg-background px-3 text-left text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 data-[state=open]:border-foreground/40", className)}
        >
          <span className={cn("truncate", !selected && "text-muted-foreground")}>{selected?.label ?? "Selecione…"}</span>
          <ChevronDown className={cn("size-4 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")} />
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[var(--radix-popover-trigger-width)] min-w-[12rem] p-0">
        <Command>
          {options.length >= SEARCH_FROM_OPTIONS && <CommandInput placeholder="Buscar…" />}
          <CommandList className="max-h-[280px] p-1">
            <CommandEmpty className="py-6 text-center text-[13px] text-muted-foreground">Nada encontrado</CommandEmpty>
            {options.map((option) => (
              <CommandItem key={option.value} value={option.label} onSelect={() => { onValueChange(option.value); setOpen(false) }} className="py-2 text-[14px]">
                <span className="flex-1 truncate">{option.label}</span>
                {option.value === value && <Check className="size-4" />}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
