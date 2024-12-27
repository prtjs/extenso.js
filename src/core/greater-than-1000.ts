import split from '../utils/split'
import lowerThan1000 from './lower-than-1000'
import list from '../knowledge-base/greater-than-1000'

const greaterThan1000 = (input: string): string => {
    let parse = split(input)

    parse = parse
        .reverse()
        .map((part: string, index: number): string => {
            if (part === '000') {
                return part
            }
            if (index === 0) {
                if (Number(part) < 100 || Number(part) % 100 === 0) {
                    return `e ${part}`
                }
                return part
            }
            let name = list[index - 1]
            if (part === '1') {
                if (name === 'mil') {
                    return 'mil'
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
        .filter((part: string): boolean => part !== '000')
        .map((part: string) => {
            return part.replace(/^(\d+)/, (integer: string): string => {
                return lowerThan1000(Number(integer))
            })
        })
    
    return parse.join(' ')
}

export default greaterThan1000