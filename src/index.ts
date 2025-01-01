import { Options } from './interfaces/options.interface'
import { Genders, Locales, Modes } from './enums/options.enum'
import parse from './utils/parse'
import normalize from './utils/normalize'
import writeCurrency from './core/write-currency'
import writeDigit from './core/write-digit'
import writeNumber from './core/write-number'
import translateToPT from './locale/translate-to-pt'
import toFemale from './post/to-female'
import toNegative from './post/to-negative'

const extenso = (input: number | string | bigint, options: Options = {}) => {
    input = normalize(input)
    const { integer, decimal } = parse(input, options?.decimalSeparator)
    let text

    switch (options?.mode) {
    case Modes.CURRENCY:
        text = writeCurrency(integer, decimal, options?.currency?.code, options?.scale)
    case Modes.DIGIT:
        text = writeDigit(input)
    case Modes.NUMBER:
    default:
        text = writeNumber(integer, decimal, options?.scale)
    }

    if (input.startsWith('-')) {
        text = toNegative(text)
    }
    if (options?.locale === Locales.PT) {
        text = translateToPT(text)
    }
    if (options?.number?.gender === Genders.FEMALE) {
        text = toFemale(text)
    }
    return text
}

export default extenso