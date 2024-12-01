import allCurrencies from './currencies'
import write from './write'
import writeSubunit from './write-subunit'

export const getIsos = (currencies: object) => {
  return Object.keys(currencies)
}

export const isValidIso = (iso: string, currencies: object) => {
  return getIsos(currencies).includes(iso)
}

export const isZero = (val: string) => {
  return /^0+$/.test(val)
}

export default (iso: string, locale: 'br' | 'pt', unit: string = '0', subunit: string = '0', scale?: string) => {
  if (!isValidIso(iso, allCurrencies)) {
    throw new Error('Invalid ISO code')
  }

  if (subunit.length === 1) {
    subunit = subunit + '0'
  }

  const opts = allCurrencies[iso as keyof typeof allCurrencies]
  const unitText = write(unit, locale, opts, scale)
  const subunitText = writeSubunit(subunit, locale, opts)

  if (isZero(unit) && isZero(subunit)) return `zero ${opts.plural}`
  if (isZero(unit)) return subunitText
  if (isZero(subunit)) return unitText

  return `${unitText} e ${subunitText}`
}
