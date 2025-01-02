import Scales from '../../ts/scales.enum'
import split from '../../utils/split'
import listFrom1000, { ONE_THOUSAND } from '../../lists/list-from-1000'
import writeLowerThan1000 from './write-lower-than-1000'

const writeGreaterThan1000 = (input: string, scale: Scales = Scales.SHORT): string => {
    return split(input)
        .reverse()
        .map((part: number, index: number): string => {
            const text = writeLowerThan1000(part)
            let name = listFrom1000[scale][index]

            if (part === 0) {
                return ''
            }
            if (index === 0) {
                if (part < 100 || part % 100) {
                    return `e ${text}`
                }
                return text
            }
            if (part === 1) {
                if (name === ONE_THOUSAND) {
                    return ONE_THOUSAND
                }
            } else {
                name = name.replace('ão', 'ões')
            }
            if (index === 1) {
                return `${text} ${name}`
            }
            return `${text} ${name},`
        })
        .reverse()
        .filter((part: string): boolean => !!part)
        .join(' ')
}

export default writeGreaterThan1000