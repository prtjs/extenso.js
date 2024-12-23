import { Currencies } from "./enums/options.enum"
import currencies, { Currency } from './currencies'
import Writer from "./writer"

class WriterCurrency extends Writer {
    private currency: Currency = currencies[Currencies.BRL]

    private validateCode(code: Currencies) {
        const validCodes = Object.keys(currencies)
        return validCodes.includes(code)
    }

    private writeUnit() {
        const words = this.toText(this.integerNumber)

        if (Number(this.integerNumber) === 1) {
            return `${words} ${this.currency.singular}`
        }
        if (Number(this.integerNumber) >= 1e+6 && Number(this.integerNumber.slice(-6)) === 0) {
            return `${words} de ${this.currency.plural}`
        }
        return `${words} ${this.currency.plural}`
    }

    private writeSubunit() {
        const words = this.toText(this.decimalNumber.slice(0, 2).padEnd(2, '0'))

        if (Number(this.decimalNumber) === 1) {
            return `${words} ${this.currency.subunit.singular}`
        }
        return `${words} ${this.currency.subunit.plural}`
    }

    public setCode(code: Currencies) {
        if (!this.validateCode(code)) {
            throw new Error('Invalid currency code')
        }
        this.currency = currencies[code]
    }

    private preWrite() {
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

    public write() {
        return this.postWrite(this.preWrite())
    }
}

export default WriterCurrency