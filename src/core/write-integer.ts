import { Scales } from "../enums/options.enum"
import writeGreaterThan1000 from "./integer/write-greater-than-1000"
import writeLowerThan1000 from "./integer/write-lower-than-1000"

const writeInteger = (input: string, scale: Scales = Scales.SHORT): string => {
    if (Number(input) < 1000) {
        return writeLowerThan1000(Number(input))
    }
    return writeGreaterThan1000(input, scale)
}

export default writeInteger
