import lt1000 from './lt1000'
import gt1000 from './gt1000'
import parser from './utils/parser'
import { DecimalSeparators, Locales, Scales } from './enums/options.enum'

class Writer {
    public integer: string
    public decimal: string
    private locale: Locales = Locales.BR
    private scale: Scales = Scales.SHORT

    constructor(number: string, decimalSeparator: DecimalSeparators = DecimalSeparators.COMMA) {
        number = number.trim()
        const { integer, decimal } = parser(number, decimalSeparator)
        this.integer = integer
        this.decimal = decimal
    }

    public toText(number: string) {
        if (Number(number) < 1000) {
            return lt1000(Number(number), this.locale)
        }
        if (Number(number) > 1000) {
            return gt1000(number, this.locale, this.scale)
        }
        return 'mil'
    }

    public setLocale(locale: Locales) {
        this.locale = locale
    }

    public setScale(scale: Scales) {
        this.scale = scale
    }

    public hasInteger() {
        return Number(this.integer) > 0
    }

    public hasDecimal() {
        return Number(this.decimal) > 0
    }
}

export default Writer