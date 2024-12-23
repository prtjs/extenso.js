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
        const words = this.toText(this.decimal)
        const length = this.decimal.length
        const decimalBase = pluralize(length % 3 === 1 ? 'décimo' : 'centéssimo', Number(this.decimal))
        const decimalBig = getList()[Math.floor(length / 3 - 1)]

        if (length < 3) {
            return `${words} ${decimalBase}`
        }
        if (length % 3 === 0) {
            return `${words} ${pluralize(decimalBig, Number(this.decimal))}`
        }
        return `${words} ${decimalBase} de ${decimalBig}`
    }

    public unformalizeDecimal() {
        const words = this.toText(this.decimal)
        return `vírgula ${words}`
    }

    public write() {
        const words = this.toText(this.integer)

        if (!this.hasInteger() && !this.hasDecimal()) {
            return words
        }
        if (this.hasInteger() && !this.hasDecimal()) {
            return words
        }
        if (this.decimalMode === Decimals.UNFORMAL) {
            return `${words} ${this.unformalizeDecimal()}`
        }
        if (!this.hasInteger() && this.hasDecimal()) {
            return this.formalizeDecimal()
        }
        return `${words} ${pluralize('inteiro', Number(this.integer))} e ${this.formalizeDecimal()}`
    }
}

export default WriterNumber