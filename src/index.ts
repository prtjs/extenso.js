import Modes from './ts/enum/modes.enum'
import Options from './ts/interface/options.interface'
import normalize from './utils/normalize'
import parse from './utils/parse'
import translate from './utils/translate'
import writeCurrency from './mode/write-currency'
import writeDigit from './mode/write-digit'
import writeNumber from './mode/write-number'

const NEGATIVE_SIGN = '-'

const extenso = (input: number | string | bigint, options: Options = {}): string => {
    input = normalize(input)
    const { integer, decimal } = parse(input, options?.decimalSeparator)
    let text: string

    switch (options?.mode) {
    case Modes.CURRENCY:
        text = writeCurrency(integer, decimal, options?.currency?.code, options?.scale)
        break
    case Modes.DIGIT:
        text = writeDigit(integer)
        break
    case Modes.NUMBER:
    default:
        text = writeNumber(integer, decimal, options?.scale, options?.number?.gender)
        break
    }

    text = translate(text, options?.locale)

    if (input.startsWith(NEGATIVE_SIGN)) {
        text = `menos ${text}`
    }

    return text
}

export default extenso