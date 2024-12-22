import { Currencies, Locales } from '../enums/options.enum'
import currencies from './currencies'
import write from './write'
import writeSubunit from './write-subunit'

export const validateCurrencyISO = (code: Currencies) => {
  const listOfCurrencyISOs = Object.keys(currencies)
  return listOfCurrencyISOs.includes(code)
}

export const isZero = (input: string) => {
  return /^0+$/.test(input)
}

export default (code: Currencies, locale: Locales, unit = '0', subunit = '0', scale?: string) => {
  subunit = subunit.padEnd(2, '0')

  if (!validateCurrencyISO(code)) {
    throw new Error('Invalid ISO code')
  }

  const currency = currencies[code]

  if (isZero(unit) && isZero(subunit)) return `zero ${currency.plural}`

  const subunitText = writeSubunit(subunit, locale, currency)
  const unitText = write(unit, locale, currency, scale)

  if (isZero(unit)) return subunitText
  if (isZero(subunit)) return unitText

  return `${unitText} e ${subunitText}`
}
