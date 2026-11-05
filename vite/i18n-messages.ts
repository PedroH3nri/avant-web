/** Separa os textos do painel por idioma: cada módulo leva só a coluna de um idioma. */

type Texts = readonly [string, string, string]

export type Lang = 'pt' | 'en' | 'es'

export interface Source {
  dict: Record<string, Texts>
  errors: Record<string, Texts>
  auditActions: Record<string, Texts>
  fallbackError: Texts
}

export interface LanguageMessages {
  dict: Record<string, string>
  errors: Record<string, string>
  audit: Record<string, string>
  fallback: string
}

const COLUMN: Record<Lang, 0 | 1 | 2> = { pt: 0, en: 1, es: 2 }

/** Só a coluna do idioma de cada grupo de textos. */
function column(texts: Record<string, Texts>, lang: Lang): Record<string, string> {
  return Object.fromEntries(Object.entries(texts).map(([key, value]) => [key, value[COLUMN[lang]]]))
}

/** Os textos de um idioma, prontos para virar o módulo ``virtual:i18n/<idioma>``. */
export function languageMessages(source: Source, lang: Lang): LanguageMessages {
  return {
    dict: column(source.dict, lang),
    errors: column(source.errors, lang),
    audit: column(source.auditActions, lang),
    fallback: source.fallbackError[COLUMN[lang]],
  }
}
