import writeGreaterThan1000 from "./write-greater-than-1000"
import writeLowerThan1000 from "./write-lower-than-1000"

const writeAll = (input: string): string => {
    if (Number(input) < 1000) {
        return writeLowerThan1000(Number(input))
    }
    return writeGreaterThan1000(input)
}

export default writeAll