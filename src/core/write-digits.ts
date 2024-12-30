import { writeLowerThan10 } from "./write-lower-than-1000"

const writeDigits = (input: string): string => {
    return input
        .split('')
        .map((part: string) => writeLowerThan10(Number(part)))
        .join(' ')
}

export default writeDigits