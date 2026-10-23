/**
 * Avisos em tempo real da Empresa ativa (GET /api/v1/events, Server-Sent Events).
 * Uma conexão só para o painel inteiro, aberta enquanto alguma tela escuta. Ao trocar
 * de Empresa, ``reconnectEvents()`` fecha e abre de novo (o servidor filtra pela sessão).
 */

import { getCurrentScope, onScopeDispose } from 'vue'
import { API } from './api'

export interface NetworkUpdated {
  network_id: string
}

interface EventMap {
  'network.updated': NetworkUpdated
}
type Type = keyof EventMap
type Handler<T extends Type> = (data: EventMap[T]) => void

const handlers = new Map<Type, Set<Handler<Type>>>()
let source: EventSource | null = null

function open() {
  if (source || typeof EventSource === 'undefined') return
  source = new EventSource(`${API}/events`, { withCredentials: true })
  for (const type of handlers.keys()) listen(type)
}

function listen(type: Type) {
  source?.addEventListener(type, (e) => {
    let data: unknown
    try {
      data = JSON.parse((e as MessageEvent<string>).data)
    } catch {
      return
    }
    for (const fn of handlers.get(type) ?? []) fn(data as EventMap[typeof type])
  })
}

function close() {
  source?.close()
  source = null
}

export function onEvent<T extends Type>(type: T, fn: Handler<T>): () => void {
  let set = handlers.get(type)
  if (!set) {
    set = new Set()
    handlers.set(type, set)
    listen(type)
  }
  set.add(fn as Handler<Type>)
  open()
  const off = () => {
    set.delete(fn as Handler<Type>)
    if (set.size === 0) handlers.delete(type)
    if (handlers.size === 0) close()
  }
  if (getCurrentScope()) onScopeDispose(off)
  return off
}

export function reconnectEvents() {
  if (!source) return
  close()
  open()
}
