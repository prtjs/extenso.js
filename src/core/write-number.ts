import { Scales } from "../enums/options.enum"
import pluralize from "../utils/pluralize"
import writeAll from "./write-all"
import writeDecimal from "./write-decimal"

const writeNumber = (integer: string, decimal: string, scale: Scales = Scales.SHORT): string => {
    if (decimal === '0') {
        return writeAll(integer)
    }
    return `${writeAll(integer)} ${pluralize('inteiro', Number(integer))} e ${writeDecimal(decimal)}`
}

export default writeNumber