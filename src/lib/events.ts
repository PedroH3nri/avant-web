/**
 * Avisos em tempo real da Empresa ativa (GET /api/v1/events, Server-Sent Events).
 * Uma conexão só para o painel inteiro, aberta enquanto alguma tela escuta. Ao trocar
 * de Empresa, ``reconnectEvents()`` fecha e abre de novo (o servidor filtra pela sessão).
 * Se o servidor recusar a conexão (429 com abas demais, 401), o navegador desiste de vez:
 * aqui ela é reaberta com espera crescente, de 5 s a 1 minuto, enquanto alguém escuta.
 */

import { getCurrentScope, onScopeDispose } from 'vue'
import { API } from './api'

export interface NetworkUpdated {
  network_id: string
}

export interface MetricsUpdated {
  network_id: string
}

export interface GamToolRunUpdated {
  run_id: string
  network_id: string
}

interface EventMap {
  'network.updated': NetworkUpdated
  'metrics.updated': MetricsUpdated
  'gam_tool_run.updated': GamToolRunUpdated
}
type Type = keyof EventMap
type Handler<T extends Type> = (data: EventMap[T]) => void

const FIRST_RETRY_MS = 5_000
const LONGEST_RETRY_MS = 60_000

const handlers = new Map<Type, Set<Handler<Type>>>()
let source: EventSource | null = null
let retryMs = FIRST_RETRY_MS
let retryTimer: ReturnType<typeof setTimeout> | null = null

/** Abre a conexão SSE e escuta os tipos que têm interessados. */
function open() {
  if (source || typeof EventSource === 'undefined') return
  const opened = new EventSource(`${API}/events`, { withCredentials: true })
  source = opened
  opened.onopen = () => {
    retryMs = FIRST_RETRY_MS
  }
  opened.onerror = () => {
    if (opened.readyState === EventSource.CLOSED && source === opened) retryLater()
  }
  for (const type of handlers.keys()) listen(type)
}

/** O servidor fechou de vez: reabre depois de esperar, cada vez um pouco mais. */
function retryLater() {
  source = null
  if (retryTimer || handlers.size === 0) return
  retryTimer = setTimeout(() => {
    retryTimer = null
    if (handlers.size > 0) open()
  }, retryMs)
  retryMs = Math.min(retryMs * 2, LONGEST_RETRY_MS)
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

/** Fecha a conexão SSE e cancela a reabertura agendada. */
function close() {
  source?.close()
  source = null
  if (retryTimer) clearTimeout(retryTimer)
  retryTimer = null
  retryMs = FIRST_RETRY_MS
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
