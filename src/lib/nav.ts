/** Só caminhos do próprio painel: ``next`` vem da URL e não pode mandar para outro site. */
export function safeNext(value: unknown): string {
  if (typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//') || value.startsWith('/\\')) return '/'
  return value
}
