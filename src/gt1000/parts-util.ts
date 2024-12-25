import { getLastNumber } from './int-util'
import { listGt1000 as getList } from '../get-list'
// import lt1000 from '../lt1000'

export const addComma = (parts: string[]): string[] => {
  return parts.map((part: string, i: number, array: string[]) => {
    // REGRA: Não adiciona entre a penúltima e a última parte.
    return i < array.length - 2
      ? `${part},`
      : part
  })
}

export const addConjunction = (parts: string[], int: string): string[] => {
  const lastNum = getLastNumber(int)
  // A parte é valida apenas se:
  // - Caso 1: A parte é um inteiro menor que cem.
  // - Caso 2: A parte é um inteiro divisível por cem.
  if (lastNum < 100 || lastNum % 100 === 0) {
    return parts.map((part: string, i: number, array: string[]) => {
      return i === array.length - 2
        ? `${part} e`
        : part
    })
  }

  return parts
}

export const singularize = (parts: string[]) => {
  const regex = /^(1\s.*)ões/
  const replacer = (str: string) => str.replace(regex, '$1ão')

  return parts.map(replacer)
}

export const write = (parts: string[], locale: 'br' | 'pt'): string[] => {
  return parts.map(part => {
    return part.replace(/^(\d+)/, digit => {
      const int = parseInt(digit)

      // return lt1000(int, locale)
      return ''
    })
  })
}
