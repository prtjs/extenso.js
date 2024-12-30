import currencies, { Currency } from "./lists/currencies";
import { Currencies } from "../enums/options.enum"
import writeAll from "./write-all"

const ONE_MILION = 1000000

const writeUnit = (unit: string, currency: Currency) => {
    const text = writeAll(unit)

    if (Number(unit) === 1) {
        return `${text} ${currency.singular}`
    }
    if (Number(unit) >= ONE_MILION && Number(unit.slice(-6)) === 0) {
        return `${text} de ${currency.plural}`
    }
    return `${text} ${currency.plural}`
}

const writeSubunit = (subunit: string, currency: Currency) => {
    const text = writeAll(subunit.slice(0, 2).padEnd(2, '0'))

    if (Number(subunit) === 1) {
        return `${text} ${currency.subunit.singular}`
    }
    return `${text} ${currency.subunit.plural}`
}

const writeCurrency = (unit: string, subunit: string, currencyCode: Currencies): string => {
    if (!Object.keys(currencies).includes(currencyCode)) {
        throw new Error('Invalid currency')
    }

    const currency = currencies[currencyCode]
    const hasUnit = Number(unit) > 0
    const hasSubunit = Number(subunit) > 0

    if (!hasUnit && !hasSubunit) {
        return `zero ${currency.plural}`
    }
    if (!hasUnit) {
        return writeSubunit(subunit, currency)
    }
    if (!hasSubunit) {
        return writeUnit(unit, currency)
    }
    return `${writeUnit(unit, currency)} e ${writeSubunit(subunit, currency)}`
}

export default writeCurrency