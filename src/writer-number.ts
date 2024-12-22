import { Decimals, Genders, Negatives } from "./enums/options.enum"
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
        const pluralize = (text: string, count: number) => count === 1 ? text : `${text}s`
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
}

export default WriterNumber