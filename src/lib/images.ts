/** Regras das imagens enviadas ao painel (da Empresa e foto de perfil), iguais às da API. */

import { t } from '@/lib/i18n'

export const ACCEPTED_IMAGES = ['image/png', 'image/jpeg', 'image/webp']
export const IMAGE_MAX_BYTES = 2 * 1024 * 1024

/** O problema do arquivo escolhido, ou vazio quando ele pode ser enviado. */
export function imageProblem(file: File): string {
  if (!ACCEPTED_IMAGES.includes(file.type)) return t('image.wrongType')
  if (file.size > IMAGE_MAX_BYTES) return t('image.tooLarge', { size: (file.size / 1024 / 1024).toFixed(1) })
  return ''
}
