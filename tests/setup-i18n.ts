import { loadLang } from '@/lib/i18n'

await Promise.all([loadLang('pt'), loadLang('en'), loadLang('es')])
