// Os textos de um idioma, servidos pelo plugin vite/i18n-plugin.ts.
declare module 'virtual:i18n/*' {
  const messages: {
    dict: Record<string, string>
    errors: Record<string, string>
    audit: Record<string, string>
    fallback: string
  }
  export default messages
}
