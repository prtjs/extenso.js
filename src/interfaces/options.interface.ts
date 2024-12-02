import {
  Modes,
  Locales,
  Negatives,
  Scales,
  Currencies,
  Genders,
  Decimals,
  DecimalSeparators,
} from '../enums/options.enum'

export interface Options {
  mode?: Modes
  locale?: Locales
  negative?: Negatives
  scale?: Scales
  currency?: {
    type?: Currencies
  }
  number?: {
    gender?: Genders
    decimal?: Decimals
    decimalSeparator?: DecimalSeparators
  }
}
