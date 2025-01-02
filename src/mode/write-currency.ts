import Currency from '../ts/currency.interface'
import Currencies from '../ts/currencies.enum'
import listCurrencies from '../lists/list-currencies'
import Scales from '../ts/scales.enum'
import writeInteger from '../core/write-integer'

const ONE_MILION = 1000000

export const writeUnit = (unit: string, currency: Currency, scale: Scales = Scales.SHORT) => {
    const text = writeInteger(unit, scale)

    if (Number(unit) === 1) {
        return `${text} ${currency.singular}`
    }
    if (Number(unit) >= ONE_MILION && Number(unit.slice(-6)) === 0) {
        return `${text} de ${currency.plural}`
    }
    return `${text} ${currency.plural}`
}

export const writeSubunit = (subunit: string, currency: Currency) => {
    const text = writeInteger(subunit.slice(0, 2))

    if (Number(subunit) === 1) {
        return `${text} ${currency.subunit.singular}`
    }
    return `${text} ${currency.subunit.plural}`
}

const writeCurrency = (
    unit: string,
    subunit = '0',
    code: Currencies = Currencies.BRL,
    scale: Scales = Scales.SHORT,
): string => {
    subunit = subunit.padEnd(2, '0')

    if (!Object.keys(listCurrencies).includes(code)) {
        throw new Error('Invalid currency')
    }

    const currency = listCurrencies[code]
    const hasUnit = Number(unit) > 0
    const hasSubunit = Number(subunit) > 0

    if (!hasUnit && !hasSubunit) {
        return `zero ${currency.plural}`
    }
    if (!hasUnit) {
        return writeSubunit(subunit, currency)
    }
    if (!hasSubunit) {
        return writeUnit(unit, currency, scale)
    }
    return `${writeUnit(unit, currency, scale)} e ${writeSubunit(subunit, currency)}`
}

export default writeCurrency