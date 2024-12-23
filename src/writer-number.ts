import { Decimals, Genders, Negatives } from "./enums/options.enum"
import pluralize from "./utils/pluralize"
import Writer from "./writer"
import { listDecimals as getList } from './get-list'

class WriterNumber extends Writer {
    public gender: Genders = Genders.MASCULINE
    public decimalMode: Decimals = Decimals.FORMAL
    public negativeMode: Negatives = Negatives.FORMAL

    public setGender(gender: Genders) {
        this.gender = gender
    }

    public setDecimalMode(decimalMode: Decimals) {
        this.decimalMode = decimalMode
    }

    public setNegativeMode(negativeMode: Negatives) {
        this.negativeMode = negativeMode
    }

    public formalizeDecimal() {
        this.decimal = this.decimal.replace(/^0+/, '')
        const length = this.decimal.length
        const decimalBase = pluralize(length % 3 === 1 ? 'décimo' : 'centéssimo', Number(this.decimal))
        const decimalBig = getList()[Math.floor(length / 3 - 1)]

        if (length < 3) {
            return `${this.writeDecimal()} ${decimalBase}`
        }
        if (length % 3 === 0) {
            return `${this.writeDecimal()} ${pluralize(decimalBig, Number(this.decimal))}`
        }
        return `${this.writeDecimal()} ${decimalBase} de ${decimalBig}`
    }

    public unformalizeDecimal() {
        return `vírgula ${this.writeDecimal()}`
    }

    public write() {
        if (!this.hasInteger() && !this.hasDecimal()) {
            return this.writeInteger()
        }
        if (this.hasInteger() && !this.hasDecimal()) {
            return this.writeInteger()
        }
        if (this.decimalMode === Decimals.UNFORMAL) {
            return `${this.writeInteger()} ${this.formalizeDecimal()}`
        }
        if (!this.hasInteger() && this.hasDecimal()) {
            return this.writeDecimal()
        }
        return `${this.writeInteger()} ${pluralize('inteiro', Number(this.integer))} e ${this.formalizeDecimal()}`
    }
}

export default WriterNumber