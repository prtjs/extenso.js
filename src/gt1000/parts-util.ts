import { getLastNumber } from './int-util'
import { listGt1000 as getList } from '../get-list'
import lt1000 from '../lt1000'

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

export const clear = (parts: string[]): string[] => {
  // Etapas para a remoção:
  // - Etapa 1: Remove zeros à esquerda.
  // - Etapa 2: Remove partes que não são lidas.
  // - Etapa 3: Remove o "1" das partes com "1 mil".
  return parts
    .map(part => part.replace(/^0+\s?/, ''))
    .filter(part => /^\d/.test(part))
    .map(part => part.replace(/^1\s(mil)$/, '$1'))
}

// TODO: Adiciona ao testes
export function reverse(arr: any[]): any[] {
  arr.reverse()
  return arr
}

export const name = (parts: string[], locale: 'br' | 'pt', scale?: string): string[] => {
  return reverse(reverse(parts).map((part: string, i: number) => {
    const numberName = getList(locale, scale)[i - 1]

    return numberName
      ? `${part} ${numberName}`
      : part
  }))
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

      return lt1000(int, locale)
    })
  })
}
