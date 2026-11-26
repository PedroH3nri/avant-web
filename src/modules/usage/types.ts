/** Formatos da contagem de uso do painel (``modules/usage/dto.py`` do avant-api). */

export type UsageSignal = 'screen' | 'minute'

/** As áreas do menu em que uma tela conta, iguais às do avant-core. */
export type UsageArea = 'dashboard' | 'tasks' | 'inventory' | 'reports' | 'integrations' | 'tools' | 'commissions' | 'company' | 'settings' | 'help' | 'other'
