import split from '../utils/split'
import list from './lists/list-from-1000'
import { ONE_THOUSAND } from './lists/list-from-1000'
import writeLowerThan1000 from './write-lower-than-1000'

const writeGreaterThan1000 = (input: string): string => {
    return split(input)
        .reverse()
        .map((part: number, index: number): string => {
            const words = writeLowerThan1000(part)
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
                if (name === ONE_THOUSAND) {
                    return ONE_THOUSAND
                }
            } else {
                name = name.replace('ão', 'ões')
            }
            if (index === 1) {
                return `${words} ${name}`
            }
            return `${words} ${name},`
        })
        .reverse()
        .filter((part: string): boolean => !!part)
        .join(' ')
}

export default writeGreaterThan1000