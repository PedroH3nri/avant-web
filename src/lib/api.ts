/**
 * Cliente da API do Avant. Mesma origem: o cookie de sessão vai sozinho e, nas escritas,
 * o valor do cookie avant_csrf volta no cabeçalho X-CSRF-Token (double submit).
 *
 * Todo erro da API tem o formato {"error": {"code", "message", "details"}}; a tela
 * traduz pelo code.
 */

export const API = '/api/v1'
const CSRF_COOKIE = 'avant_csrf'
const SAFE = new Set(['GET', 'HEAD', 'OPTIONS'])

export class ApiError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
    message: string,
    readonly details: Record<string, unknown> = {},
    readonly retryAfter: number | null = null,
  ) {
    super(message)
  }

  /** Campos que a validação recusou: {"body.email": "..."} */
  get fields(): Record<string, string> {
    const list = (this.details.fields ?? []) as { loc: (string | number)[]; msg: string }[]
    return Object.fromEntries(list.map((f) => [f.loc.slice(1).join('.'), f.msg]))
  }
}

export function readCookie(name: string, source = document.cookie): string | null {
  for (const part of source.split(';')) {
    const [k, ...v] = part.trim().split('=')
    if (k === name) return decodeURIComponent(v.join('='))
  }
  return null
}

type Query = Record<string, string | number | boolean | null | undefined>

export interface RequestOptions {
  query?: Query
  body?: unknown
  signal?: AbortSignal
}

function url(path: string, query?: Query): string {
  const params = new URLSearchParams()
  for (const [k, v] of Object.entries(query ?? {})) {
    if (v !== undefined && v !== null && v !== '') params.set(k, String(v))
  }
  const qs = params.toString()
  return `${API}${path}${qs ? `?${qs}` : ''}`
}

/** Quem quer saber quando a sessão caiu (o store da sessão manda para o login). */
let onUnauthorized: (() => void) | null = null
export function setUnauthorizedHandler(fn: () => void) {
  onUnauthorized = fn
}

export async function request<T>(method: string, path: string, opts: RequestOptions = {}): Promise<T> {
  const headers: Record<string, string> = { Accept: 'application/json' }
  if (opts.body !== undefined) headers['Content-Type'] = 'application/json'
  if (!SAFE.has(method)) {
    const csrf = readCookie(CSRF_COOKIE)
    if (csrf) headers['X-CSRF-Token'] = csrf
  }
  let res: Response
  try {
    res = await fetch(url(path, opts.query), {
      method,
      headers,
      credentials: 'same-origin',
      body: opts.body === undefined ? undefined : JSON.stringify(opts.body),
      signal: opts.signal,
    })
  } catch (e) {
    if (e instanceof DOMException && e.name === 'AbortError') throw e
    throw new ApiError(0, 'network_error', 'sem conexão com o servidor')
  }
  if (res.status === 204) return undefined as T
  const data = await res.json().catch(() => null)
  if (!res.ok) {
    const err = (data?.error ?? {}) as { code?: string; message?: string; details?: Record<string, unknown> }
    const retry = res.headers.get('Retry-After')
    const error = new ApiError(
      res.status,
      err.code ?? 'http_error',
      err.message ?? res.statusText,
      err.details ?? {},
      retry ? Number(retry) : null,
    )
    if (res.status === 401 && onUnauthorized && !path.startsWith('/auth/')) onUnauthorized()
    throw error
  }
  return data as T
}

export const api = {
  get: <T>(path: string, query?: Query, signal?: AbortSignal) => request<T>('GET', path, { query, signal }),
  post: <T>(path: string, body?: unknown) => request<T>('POST', path, { body: body ?? {} }),
  put: <T>(path: string, body: unknown) => request<T>('PUT', path, { body }),
  patch: <T>(path: string, body: unknown) => request<T>('PATCH', path, { body }),
  delete: <T = void>(path: string) => request<T>('DELETE', path),
}
