import lt1000 from './lt1000'
import gt1000 from './gt1000'
import parser from './utils/parse'
import { DecimalSeparators, Locales, Scales, Negatives } from './enums/options.enum'
import pluralize from './utils/pluralize'
import validate from './utils/validate'

class Writer {
    public integerNumber: string
    public decimalNumber: string
    public isNegative: boolean
    private locale: Locales = Locales.BR
    private scale: Scales = Scales.SHORT
    private negative: Negatives = Negatives.FORMAL

    constructor(input: string, decimalSeparator: DecimalSeparators = DecimalSeparators.COMMA) {
        const { integer, decimal } = parser(input, decimalSeparator)
        if (!validate(input, decimalSeparator)) {
            throw new Error('Invalid number')
        }
        this.integerNumber = integer
        this.decimalNumber = decimal
        this.isNegative = input.startsWith('-')
    }

    public toText(input: string) {
        if (Number(input) < 1000) {
            return lt1000(Number(input), this.locale)
        }
        if (Number(input) > 1000) {
            return gt1000(input, this.locale, this.scale)
        }
        return 'mil'
    }

    public setLocale(locale: Locales) {
        if (!Object.keys(Locales).includes(locale)) {
            throw new Error('Invalid locale option')
        }
        this.locale = locale
    }

    public setScale(scale: Scales) {
        if (!Object.keys(Scales).includes(scale)) {
            throw new Error('Invalid scale option')
        }
        this.scale = scale
    }
    
    public setNegative(negative: Negatives) {
        if (!Object.keys(Negatives).includes(negative)) {
            throw new Error('Invalid negative option')
        }
        this.negative = negative
    }

    public hasInteger() {
        return Number(this.integerNumber) > 0
    }

    public hasDecimal() {
        return Number(this.decimalNumber) > 0
    }

    public postWrite(text: string) {
        if (this.isNegative) {
            if (this.negative === Negatives.FORMAL) {
                text = `menos ${text}`
            }
            text = `${text} ${pluralize('negativo', Number(this.integerNumber))}`
        }
        return text
    }
}

export default Writer