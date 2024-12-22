import { Currencies } from "./enums/options.enum"
import currencies, { Currency } from './write-currency/currencies'
import Writer from "./writer"

class WriterCurrency extends Writer {
    private currency: Currency = currencies[Currencies.BRL]

    private validateCode(code: Currencies) {
        const validCodes = Object.keys(currencies)
        return validCodes.includes(code)
    }

    public setCode(code: Currencies) {
        if (!this.validateCode(code)) {
            throw new Error('Invalid currency code')
        }
        this.currency = currencies[code]
    }

    private writeUnit() {
        if (Number(this.integer) === 1) {
            return `${this.writeInteger()} ${this.currency.singular}`
        }
        if (Number(this.integer) >= 1e+6 && Number(this.integer.slice(-6)) === 0) {
            return `${this.writeInteger()} de ${this.currency.plural}`
        }
        return `${this.writeInteger()} ${this.currency.plural}`
    }

    private writeSubunit() {
        this.decimal = this.decimal.slice(0, 2).padEnd(2, '0')

        if (Number(this.decimal ) === 1) {
            return `${this.writeDecimal()} ${this.currency.subunit.singular}`
        }
        return `${this.writeDecimal()} ${this.currency.subunit.plural}`
    }

    public write() {
        if (!this.hasInteger() && !this.hasDecimal()) {
            return `zero ${this.currency.plural}`
        }
        if (!this.hasInteger()) {
            return this.writeSubunit()
        }
        if (!this.hasDecimal()) {
            return this.writeUnit()
        }
        return `${this.writeUnit()} e ${this.writeSubunit()}`
    }
}

export default WriterCurrency