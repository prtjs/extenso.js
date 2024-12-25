import lowerThan100 from "./lower-than-100"
import list from "../knowledge-base/greater-than-1000"

const lowerThan1000 = (input: number): string => {
    if (input < 100) {
        return lowerThan100(input)
    }
    if (input === 100) {
        return 'cem'
    }

    // 123 -> 1
    const hundred = input - input % 100 / 100
    const hundredInWords = list[hundred - 1]

    // 123 -> 23
    const rest = input % 100
    const restInWords = lowerThan100(rest)

    if (rest === 0) {
        return hundredInWords
    }
    return `${hundredInWords} e ${restInWords}`
}

export default lowerThan1000