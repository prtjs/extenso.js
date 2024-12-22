import lt1000 from './lt1000'
import gt1000 from './gt1000'
import { Locales, Scales } from './enums/options.enum'

const ONE_THOUSAND = 'mil'

class Integer {
    public number: string
    public locale: Locales
    public scale: Scales

    constructor(number: string) {
        this.number = number.trim()
        this.locale = Locales.BR
        this.scale = Scales.SHORT
    }

    private isLessThan1000() {
        return Number(this.number) < 1000
    }

    private isGreaterThan1000() {
        return Number(this.number) > 1000
    }

    public setLocale(locale: Locales) {
        this.locale = locale
    }

    public setScale(scale: Scales) {
        this.scale = scale
    }

    public write() {
        if (this.number === '1000') {
            return ONE_THOUSAND
        }
        if (this.isLessThan1000()) {
            return lt1000(Number(this.number), this.locale)
        }
        if (this.isGreaterThan1000()) {
            return gt1000(this.number, this.locale, this.scale)
        }
    }
}

export default Integer