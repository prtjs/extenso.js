import Genders from '../ts/genders.enum'
import Scales from '../ts/scales.enum'
import pluralize from '../utils/pluralize'
import writeInteger from '../core/write-integer'
import writeDecimal from '../core/write-decimal'

const writeNumber = (
    integer: string,
    decimal: string = '0',
    scale: Scales = Scales.SHORT,
    gender: Genders = Genders.MALE,
): string => {
    if (integer === '0' && decimal === '0') {
        return 'zero'
    }
    if (integer === '0') {
        return writeDecimal(decimal)
    }

    let text
    if (decimal === '0') {
        text = writeInteger(integer, scale)
    } else {
        text = `${writeInteger(integer, scale)} ${pluralize('inteiro', Number(integer))} e ${writeDecimal(decimal)}`
    }

    switch (gender) {
    case Genders.FEMALE:
        text = text
            .replace(/\bum\b/g, 'uma')
            .replace(/\bduas\b/g, 'duas')
        break
    case Genders.MALE:
    default:
        break
    }

    return text
}

export default writeNumber