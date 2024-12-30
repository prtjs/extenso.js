import { Currencies } from "./enums/options.enum"
import currencies, { Currency } from './core/lists/list-currencies'
import Writer from "./writer"

const ONE_MILION = 1000000

class WriterCurrency extends Writer {
    private currency: Currency = currencies[Currencies.BRL]

    private validate(code: Currencies) {
        const codes = Object.keys(currencies)
        return codes.includes(code)
    }

    private writeUnit() {
        const words = this.toText(this.integerNumber)

        if (Number(this.integerNumber) === 1) {
            return `${words} ${this.currency.singular}`
        }
        if (Number(this.integerNumber) >= ONE_MILION && Number(this.integerNumber.slice(-6)) === 0) {
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
        if (!this.validate(code)) {
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