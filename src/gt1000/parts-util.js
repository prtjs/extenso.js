import reverse from '@arr/reverse'
import { getLastNumber } from './int-util'
import { gt1000 as list } from '../list'
import lt1000 from '../lt1000'

/**
 * Adicionar vírgula entre algumas partes.
 * 
 * REGRA: Não adiciona entre a penúltima e a última parte.
 *
 * @param {Array} parts Uma array com as partes.
 * @returns {Array} Partes com a vírgula caso tenho sido necessário.
 */
export const addComma = (parts) => {
  return parts.map((part, index, array) => {
    return index < array.length - 2
      ? `${part},`
      : part
  })
}

/**
 * Adicionar conjunção "e" em determinadas partes.
 *
 * CASOS QUE TORNAM A PARTE VÁLIDA:
 *
 * - CASO 1: A parte é um inteiro menor que cem.
 * - CASO 2: A parte é um inteiro divisível por cem.
 *
 * @param {Array} parts As partes do número que está sendo processado.
 * @param {string} int O número inteiro que está sendo processado.
 * @returns {Array} Partes com a conjução "e" caso tenha sido necessário.
 */
export const addConjunction = (parts, int) => {
  let lastNum = getLastNumber(int)

  if (lastNum < 100 || lastNum % 100 === 0) {
    return parts.map((part, index, array) => {
      return index === array.length - 2
        ? `${part} e`
        : part
    })
  }

  return parts
}

/**
 * Limpar partes que não são lidas no número.
 *
 * ETAPAS PARA A REMOÇÃO:
 *
 * - ETAPAS 1. Remove zeros à esquerda.
 * - ETAPAS 2. Remove partes que não são lidas.
 * - ETAPAS 3. Remove o "1" das partes com "1 mil".
 *
 * @param {Array} parts Partes do número que está sendo processado.
 * @returns {Array} Partes com algumas partes removidas.
 */
export const clear = (parts) => {
  return parts
    .map(part => part.replace(/^0+\s?/, ''))
    .filter(part => /^\d/.test(part))
    .map(part => part.replace(/^1\s(mil)$/, '$1'))
}

/**
 * Escrever por extenso os números inteiros dentro das partes.
 *
 * @param {Array} parts Partes do número que está sendo processado.
 * @returns {Array} Retorna as partes com os inteiros escritos por extenso.
 */
export const name = (parts) => {
  return reverse(reverse(parts).map((part, i) => {
    let numberName = list[i - 1]

    return numberName
      ? `${part} ${numberName}`
      : part
  }))
}

/**
 * Singularizar partes do número que são maiores que um.
 *
 * @param {Array} parts Partes do número que está sendo processado.
 * @returns {string} Número com as partes singularizadas.
 */
export const singularize = (parts) => {
  let regex = /^(1\s.*)ões/
  let replacer = (str) => str.replace(regex, '$1ão')

  return parts.map(replacer)
}

/**
 * Deve escrever os inteiros restantes em uma array com as partes.
 *
 * @param {Array} parts Partes do número que está sendo processado.
 * @returns {string} Número como todas as partes escritas por extenso.
 */
export const write = (parts) => {
  return parts.map(part => {
    return part.replace(/^(\d+)/, digit => {
      let int = parseInt(digit)

      return lt1000(int)
    })
  })
}