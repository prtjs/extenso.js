import lowerThan10 from './lower-than-10'
import list from '../knowledge-base/lower-than-100'

const lowerThan100 = (input: number): string => {
    if (input < 10) {
        return lowerThan10(input)
    }
    if (input < 20) {
        return list[input - 10]
    }

    // 42 -> 2
    const unit = input % 10
    const unitInWords = lowerThan10(unit)

    // 42 -> 4
    const ten = (input - input % 10) / 10
    const tenInWords = list[ten + 8]

    if (unit === 0) {
        return tenInWords
    }
    return `${tenInWords} e ${unitInWords}`
}

export default lowerThan100