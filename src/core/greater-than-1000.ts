import split from '../utils/split'
import lowerThan1000 from './lower-than-1000'
import list from '../knowledge-base/greater-than-1000'

const greaterThan1000 = (input: string): string => {
    return split(input)
        .reverse()
        .map((part: number, index: number): string => {
            const words = lowerThan1000(part)
            let name = list[index - 1]

            if (part === 0) {
                return ''
            }
            if (index === 0) {
                if (part < 100 || part % 100) {
                    return `e ${words}`
                }
                return words
            }

            if (part === 1) {
                if (name === 'mil') {
                    return name
                }
            } else {
                name = name.replace('ão', 'ões')
            }
            if (index === 1) {
                return `${part} ${name}`
            }
            return `${part} ${name},`
        })
        .reverse()
        .filter((part: string): boolean => !!part)
        .join(' ')
}

export default greaterThan1000