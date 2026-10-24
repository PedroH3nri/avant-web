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

export interface MetricsUpdated {
  network_id: string
}

interface EventMap {
  'network.updated': NetworkUpdated
  'metrics.updated': MetricsUpdated
}
type Type = keyof EventMap
type Handler<T extends Type> = (data: EventMap[T]) => void

const handlers = new Map<Type, Set<Handler<Type>>>()
let source: EventSource | null = null

/** Abre a conexão SSE e escuta os tipos que têm interessados. */
function open() {
  if (source || typeof EventSource === 'undefined') return
  source = new EventSource(`${API}/events`, { withCredentials: true })
  for (const type of handlers.keys()) listen(type)
}

/** Repassa os eventos de um tipo para quem se inscreveu. */
function listen(type: Type) {
  source?.addEventListener(type, (event) => {
    let data: unknown
    try {
      data = JSON.parse((event as MessageEvent<string>).data)
    } catch {
      return
    }
    for (const handler of handlers.get(type) ?? []) handler(data as EventMap[typeof type])
  })
}

/** Fecha a conexão SSE. */
function close() {
  source?.close()
  source = null
}

/** Inscreve uma função num tipo de evento; devolve a função que cancela. */
export function onEvent<T extends Type>(type: T, handler: Handler<T>): () => void {
  let set = handlers.get(type)
  if (!set) {
    set = new Set()
    handlers.set(type, set)
    listen(type)
  }
  set.add(handler as Handler<Type>)
  open()
  /** Cancela a inscrição e fecha a conexão quando ninguém mais escuta. */
  const off = () => {
    set.delete(handler as Handler<Type>)
    if (set.size === 0) handlers.delete(type)
    if (handlers.size === 0) close()
  }
  if (getCurrentScope()) onScopeDispose(off)
  return off
}

/** Reabre a conexão SSE, por exemplo depois de trocar de Empresa. */
export function reconnectEvents() {
  if (!source) return
  close()
  open()
}
