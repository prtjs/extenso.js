import { Decimals, Genders, Negatives } from "./enums/options.enum"
import pluralize from "./utils/pluralize"
import Writer from "./writer"
import decimalsList from './knowledge-base/decimals'

class WriterNumber extends Writer {
    public gender: Genders = Genders.MASCULINE
    public decimal: Decimals = Decimals.FORMAL

    public setGender(gender: Genders) {
        this.gender = gender
    }

    public setDecimal(decimal: Decimals) {
        this.decimal = decimal
    }

    public formalizeDecimal() {
        this.decimalNumber = this.decimalNumber.replace(/^0+/, '')
        const words = this.toText(this.decimalNumber)
        const length = this.decimalNumber.length
        const decimalBase = pluralize(length % 3 === 1 ? 'décimo' : 'centéssimo', Number(this.decimalNumber))
        const decimalBig = decimalsList[Math.floor(length / 3 - 1)]

        if (length < 3) {
            return `${words} ${decimalBase}`
        }
        if (length % 3 === 0) {
            return `${words} ${pluralize(decimalBig, Number(this.decimalNumber))}`
        }
        return `${words} ${decimalBase} de ${decimalBig}`
    }

    public unformalizeDecimal() {
        const words = this.toText(this.decimalNumber)
        return `vírgula ${words}`
    }

    private preWrite() {
        const words = this.toText(this.integerNumber)

        if (!this.hasDecimal()) {
            return words
        }
        if (this.decimal === Decimals.UNFORMAL) {
            return `${words} ${this.unformalizeDecimal()}`
        }
        if (!this.hasInteger() && this.hasDecimal()) {
            return this.formalizeDecimal()
        }
        return `${words} ${pluralize('inteiro', Number(this.integerNumber))} e ${this.formalizeDecimal()}`
    }

    public write() {
        let words = this.postWrite(this.preWrite())

        if (this.gender === Genders.FEMININE) {
            return words
                .replace(/\bum\b/, 'uma')
                .replace(/\bdois\b/, 'duas')
        }
        return words
    }
}

export default WriterNumber