import {
  Modes,
  Locales,
  Scales,
  Currencies,
  Genders,
  DecimalSeparators,
} from '../enums/options.enum'

export interface Options {
  mode?: Modes
  locale?: Locales
  scale?: Scales
  decimalSeparator?: DecimalSeparators
  currency?: {
    code?: Currencies
  }
  number?: {
    gender?: Genders
  }
}
