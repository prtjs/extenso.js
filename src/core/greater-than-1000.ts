import split from '../utils/split'
import list from '../knowledge-base/greater-than-1000'

/*

x = clear(x)

    limpa partes não lidas.

x = singularize(x)

    singular quando necessário. e.g. 1 milhões -> 1 milhão

x = addConjunction(x, number)

    adiciona 'e' quando necessário.

x = addComma(x)

    adiciona ',' quando necessário.

*/

const greaterThan1000 = (input: string): string => {
    let parse = split(input)

    parse = parse.reverse().map((part: string, index: number): string => {
        const name = list[index - 1]
        if (name) {
            if (Number(part) === 0 || Number(part) === 1 && name === 'mil') {
                return name
            }
            return `${part} ${name}`
        }
        return part
    }).reverse()

    return parse.join(' ')
}

export default greaterThan1000