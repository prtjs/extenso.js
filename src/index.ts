import Genders from './ts/genders.enum'
import Locales from './ts/locales.enum'
import Modes from './ts/modes.enum'
import Options from './ts/options.interface'
import normalize from './utils/normalize'
import parse from './utils/parse'
import writeCurrency from './modes/write-currency'
import writeDigit from './modes/write-digit'
import writeNumber from './modes/write-number'
import toPT from './locales/to-pt'
import toFemale from './post-processing/to-female'
import toNegative from './post-processing/to-negative'

const extenso = (input: number | string | bigint, options: Options = {}): string => {
    input = normalize(input)
    const { integer, decimal } = parse(input, options?.decimalSeparator)
    let text

    switch (options?.mode) {
    case Modes.CURRENCY:
        text = writeCurrency(integer, decimal, options?.currency?.code, options?.scale)
        break
    case Modes.DIGIT:
        text = writeDigit(integer)
        break
    case Modes.NUMBER:
    default:
        text = writeNumber(integer, decimal, options?.scale)

        switch (options?.number?.gender) {
        case Genders.FEMALE:
            text = toFemale(text)
            break
        case Genders.MALE:
        default:
            break
        }
        break
    }

    switch (options?.locale) {
    case Locales.PT:
        text = toPT(text)
        break
    case Locales.BR:
    default:
        break
    }

    if (input.startsWith('-')) {
        text = toNegative(text)
    }

    return text
}

export default extenso