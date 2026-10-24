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
    return Object.fromEntries(list.map((fieldError) => [fieldError.loc.slice(1).join('.'), fieldError.msg]))
  }
}

/** Lê um cookie pelo nome. */
export function readCookie(name: string, source = document.cookie): string | null {
  for (const part of source.split(';')) {
    const [key, ...valueParts] = part.trim().split('=')
    if (key === name) return decodeURIComponent(valueParts.join('='))
  }
  return null
}

type Query = Record<string, string | number | boolean | null | undefined>

export interface RequestOptions {
  query?: Query
  body?: unknown
  signal?: AbortSignal
}

/** Monta a URL da API com a query string, sem os valores vazios. */
function url(path: string, query?: Query): string {
  const params = new URLSearchParams()
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value !== undefined && value !== null && value !== '') params.set(key, String(value))
  }
  const queryString = params.toString()
  return `${API}${path}${queryString ? `?${queryString}` : ''}`
}

/** Quem quer saber quando a sessão caiu (o store da sessão manda para o login). */
let onUnauthorized: (() => void) | null = null
/** Define o que fazer quando a API responde 401. */
export function setUnauthorizedHandler(handler: () => void) {
  onUnauthorized = handler
}

/** Chama a API com cookie e CSRF e converte erros em ApiError. */
export async function request<T>(method: string, path: string, options: RequestOptions = {}): Promise<T> {
  const headers: Record<string, string> = { Accept: 'application/json' }
  if (options.body !== undefined) headers['Content-Type'] = 'application/json'
  if (!SAFE.has(method)) {
    const csrf = readCookie(CSRF_COOKIE)
    if (csrf) headers['X-CSRF-Token'] = csrf
  }
  let response: Response
  try {
    response = await fetch(url(path, options.query), {
      method,
      headers,
      credentials: 'same-origin',
      body: options.body === undefined ? undefined : JSON.stringify(options.body),
      signal: options.signal,
    })
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') throw error
    throw new ApiError(0, 'network_error', 'sem conexão com o servidor')
  }
  if (response.status === 204) return undefined as T
  const data = await response.json().catch(() => null)
  if (!response.ok) {
    const apiError = (data?.error ?? {}) as { code?: string; message?: string; details?: Record<string, unknown> }
    const retry = response.headers.get('Retry-After')
    const error = new ApiError(
      response.status,
      apiError.code ?? 'http_error',
      apiError.message ?? response.statusText,
      apiError.details ?? {},
      retry ? Number(retry) : null,
    )
    if (response.status === 401 && onUnauthorized && !path.startsWith('/auth/')) onUnauthorized()
    throw error
  }
  return data as T
}

export const api = {
  get: <T>(path: string, query?: Query, signal?: AbortSignal) => request<T>('GET', path, { query, signal }),
  post: <T>(path: string, body?: unknown) => request<T>('POST', path, { body: body ?? {} }),
  put: <T>(path: string, body: unknown) => request<T>('PUT', path, { body }),
  patch: <T>(path: string, body: unknown) => request<T>('PATCH', path, { body }),
  // Desligar o 2FA manda o código no corpo do DELETE.
  delete: <T = void>(path: string, body?: unknown) => request<T>('DELETE', path, { body }),
}
