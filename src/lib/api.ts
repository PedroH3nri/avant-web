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

export type Query = Record<string, string | number | boolean | string[] | null | undefined>

export interface RequestOptions {
  query?: Query
  body?: unknown
  /** Arquivo enviado cru no corpo, como a imagem da Empresa. */
  file?: Blob
  signal?: AbortSignal
}

/** Monta a URL da API com a query string, sem os valores vazios; uma lista repete a chave. */
function url(path: string, query?: Query): string {
  const params = new URLSearchParams()
  for (const [key, value] of Object.entries(query ?? {})) {
    if (Array.isArray(value)) value.forEach((item) => params.append(key, item))
    else if (value !== undefined && value !== null && value !== '') params.set(key, String(value))
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
  if (options.file) headers['Content-Type'] = options.file.type || 'application/octet-stream'
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
      body: options.file ?? (options.body === undefined ? undefined : JSON.stringify(options.body)),
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

/** Baixa um arquivo da API: o conteúdo e o nome do Content-Disposition; erro vira ApiError. */
export async function download(path: string, query?: Query): Promise<{ blob: Blob; name: string }> {
  let response: Response
  try {
    response = await fetch(url(path, query), { credentials: 'same-origin' })
  } catch {
    throw new ApiError(0, 'network_error', 'sem conexão com o servidor')
  }
  if (!response.ok) {
    const data = await response.json().catch(() => null)
    const apiError = (data?.error ?? {}) as { code?: string; message?: string }
    if (response.status === 401 && onUnauthorized) onUnauthorized()
    throw new ApiError(response.status, apiError.code ?? 'http_error', apiError.message ?? response.statusText)
  }
  const disposition = response.headers.get('Content-Disposition') ?? ''
  const name = /filename="([^"]+)"/.exec(disposition)?.[1] ?? 'arquivo'
  return { blob: await response.blob(), name }
}

export const api = {
  get: <T>(path: string, query?: Query, signal?: AbortSignal) => request<T>('GET', path, { query, signal }),
  post: <T>(path: string, body?: unknown) => request<T>('POST', path, { body: body ?? {} }),
  put: <T>(path: string, body: unknown) => request<T>('PUT', path, { body }),
  patch: <T>(path: string, body: unknown) => request<T>('PATCH', path, { body }),
  putFile: <T>(path: string, file: Blob, query?: Query) => request<T>('PUT', path, { file, query }),
  // Desligar o 2FA manda o código no corpo do DELETE.
  delete: <T = void>(path: string, body?: unknown) => request<T>('DELETE', path, { body }),
}
