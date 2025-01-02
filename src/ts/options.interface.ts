import Currencies from './currencies.enum'
import DecimalSeparators from './decimal-separators.enum'
import Genders from './genders.enum'
import Locales from './locales.enum'
import Modes from './modes.enum'
import Scales from './scales.enum'

interface Options {
    mode?: Modes
    locale?: Locales
    scale?: Scales
    decimalSeparator?: DecimalSeparators
    currency?: {
        code?: Currencies
    }
    number?: {
        gender?: Genders
    }
}

export default Options