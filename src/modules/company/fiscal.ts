/** Tipos de documento fiscal, os mesmos do Genius e do avant-core (company/profile.py). */
import { locale } from '@/lib/i18n'

/** País (ISO 3166) e pessoa jurídica (PJ) ou física (PF), com o nome do documento. */
export const TAX_TYPES: Record<string, string> = {
  BR_PJ: 'CNPJ',
  AR_PJ: 'CUIT',
  BO_PJ: 'NIT',
  CL_PJ: 'RUT',
  CO_PJ: 'NIT',
  EC_PJ: 'RUC',
  PY_PJ: 'RUC',
  PE_PJ: 'RUC',
  UY_PJ: 'RUT',
  VE_PJ: 'RIF',
  GT_PJ: 'NIT',
  BZ_PJ: 'TIN',
  SV_PJ: 'NIT',
  HN_PJ: 'RTN',
  NI_PJ: 'RUC',
  CR_PJ: 'Cédula Jurídica',
  PA_PJ: 'RUC',
  US_PJ: 'EIN',
  CA_PJ: 'Business Number',
  DO_PJ: 'RNC',
  MX_PJ: 'RFC',
  GL_PJ: 'CVR',
  PT_PJ: 'NIPC',
  ES_PJ: 'CIF',
  FR_PJ: 'SIREN',
  DE_PJ: 'USt-IdNr',
  IT_PJ: 'Partita IVA',
  GB_PJ: 'Company Number',
  NL_PJ: 'KVK',
  BE_PJ: 'BCE/KBO',
  CH_PJ: 'UID',
  AT_PJ: 'Firmenbuchnummer',
  IE_PJ: 'CRO Number',
  GR_PJ: 'ΑΦΜ',
  DK_PJ: 'CVR',
  SE_PJ: 'Org.nummer',
  NO_PJ: 'Org.nummer',
  FI_PJ: 'Y-tunnus',
  PL_PJ: 'NIP',
  CZ_PJ: 'IČO',
  HU_PJ: 'Adószám',
  RO_PJ: 'CUI',
  BR_PF: 'CPF',
  AR_PF: 'CUIL/DNI',
  BO_PF: 'CI',
  CL_PF: 'RUT',
  CO_PF: 'CC',
  EC_PF: 'CI',
  PY_PF: 'RUC',
  PE_PF: 'DNI',
  UY_PF: 'CI',
  VE_PF: 'Cédula',
  GT_PF: 'DPI',
  BZ_PF: 'TIN',
  SV_PF: 'DUI',
  HN_PF: 'RTN',
  NI_PF: 'Cédula',
  CR_PF: 'Cédula de Identidad',
  PA_PF: 'Cédula',
  US_PF: 'SSN/ITIN',
  CA_PF: 'SIN',
  DO_PF: 'Cédula',
  MX_PF: 'CURP/RFC',
  GL_PF: 'CPR',
  PT_PF: 'NIF',
  ES_PF: 'NIF/DNI',
  FR_PF: 'Numéro Fiscal',
  DE_PF: 'Steuer-ID',
  IT_PF: 'Codice Fiscale',
  GB_PF: 'NINO',
  NL_PF: 'BSN',
  BE_PF: 'Numéro National',
  CH_PF: 'AVS/AHV',
  AT_PF: 'Sozialversicherungsnummer',
  IE_PF: 'PPS Number',
  GR_PF: 'ΑΦΜ',
  DK_PF: 'CPR',
  SE_PF: 'Personnummer',
  NO_PF: 'Fødselsnummer',
  FI_PF: 'Henkilötunnus',
  PL_PF: 'PESEL',
  CZ_PF: 'Rodné číslo',
  HU_PF: 'Adóazonosító jel',
  RO_PF: 'CNP',
}

/** Nome do país do tipo de documento no idioma do painel, como "Brasil". */
export function countryName(taxType: string): string {
  const country = taxType.slice(0, 2)
  try {
    return new Intl.DisplayNames([locale.value], { type: 'region' }).of(country) ?? country
  } catch {
    return country
  }
}

/** Rótulo do tipo de documento, como "Brasil · CNPJ". */
export function taxTypeLabel(taxType: string): string {
  return `${countryName(taxType)} · ${TAX_TYPES[taxType] ?? taxType}`
}

/** Opções para o seletor, em ordem alfabética do rótulo. */
export function taxTypeOptions(): { value: string; label: string }[] {
  return Object.keys(TAX_TYPES)
    .map((code) => ({ value: code, label: taxTypeLabel(code) }))
    .sort((first, second) => first.label.localeCompare(second.label, locale.value))
}
