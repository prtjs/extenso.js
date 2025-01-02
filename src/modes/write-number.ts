import Scales from '../ts/scales.enum'
import pluralize from "../utils/pluralize"
import writeInteger from "../core/write-integer"
import writeDecimal from "../core/write-decimal"

const writeNumber = (integer: string, decimal: string, scale: Scales = Scales.SHORT): string => {
    if (decimal === '0') {
        return writeInteger(integer)
    }
    return `${writeInteger(integer)} ${pluralize('inteiro', Number(integer))} e ${writeDecimal(decimal)}`
}

export default writeNumber