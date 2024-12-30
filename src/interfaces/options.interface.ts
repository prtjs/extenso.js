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
  currency?: {
    type?: Currencies
  }
  number?: {
    gender?: Genders
    decimalSeparator?: DecimalSeparators
  }
}
