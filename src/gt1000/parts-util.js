import { getLastNumber } from './int-util.js'
import { listGt1000 as getList } from '../get-list.js'
import lt1000 from '../lt1000.js'

/**
 * Adicionar vírgula entre algumas partes.
 *
 * @method addComma
 * @param {Array} parts Array com as partes.
 * @returns {Array} Partes com a vírgula caso tenho sido necessário.
 */
export const addComma = (parts) => {
  return parts.map((part, index, array) => {
    // REGRA: Não adiciona entre a penúltima e a última parte.
    return index < array.length - 2
      ? `${part},`
      : part
  })
}

/**
 * Adicionar conjunção "e" em determinadas partes.
 *
 * @method addConjunction
 * @param {Array} parts Partes do número que está sendo processado.
 * @param {string} int Número inteiro que está sendo processado.
 * @returns {Array} Partes com a conjução "e" caso tenha sido necessário.
 */
export const addConjunction = (parts, int) => {
  const lastNum = getLastNumber(int)

  // A parte é valida apenas se:
  // - Caso 1: A parte é um inteiro menor que cem.
  // - Caso 2: A parte é um inteiro divisível por cem.
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
 * @method clear
 * @param {Array} parts Partes do número que está sendo processado.
 * @returns {Array} Partes com algumas partes removidas.
 */
export const clear = (parts) => {
  // Etapas para a remoção:
  // - Etapa 1: Remove zeros à esquerda.
  // - Etapa 2: Remove partes que não são lidas.
  // - Etapa 3: Remove o "1" das partes com "1 mil".
  return parts
    .map(part => part.replace(/^0+\s?/, ''))
    .filter(part => /^\d/.test(part))
    .map(part => part.replace(/^1\s(mil)$/, '$1'))
}

/**
 * Inverter array.
 *
 * @param {Array} arr Array a ser invertida.
 * @returns {Array} Array invertida.
 */
function reverse(arr) {
  arr.reverse()
  return arr
}

/**
 * Escrever por extenso os números inteiros dentro das partes.
 *
 * @method name
 * @param {Array} parts Partes do número que está sendo processado.
 * @param {string} locale Código do país para escrever o número.
 * @returns {Array} Partes com os inteiros escritos por extenso.
 */
export const name = (parts, locale, scale) => {
  return reverse(reverse(parts).map((part, i) => {
    const numberName = getList(locale, scale)[i - 1]

    return numberName
      ? `${part} ${numberName}`
      : part
  }))
}

/**
 * Singularizar partes do número que são maiores que um.
 *
 * @method singularize
 * @param {Array} parts Partes do número que está sendo processado.
 * @returns {string} Número com as partes singularizadas.
 */
export const singularize = (parts) => {
  const regex = /^(1\s.*)ões/
  const replacer = (str) => str.replace(regex, '$1ão')

  return parts.map(replacer)
}

/**
 * Deve escrever os inteiros restantes em uma array com as partes.
 *
 * @method write
 * @param {Array} parts Partes do número que está sendo processado.
 * @param {string} locale Código do país para escrever o número.
 * @returns {string} Número como todas as partes escritas por extenso.
 */
export const write = (parts, locale) => {
  return parts.map(part => {
    return part.replace(/^(\d+)/, digit => {
      const int = parseInt(digit)

      return lt1000(int, locale)
    })
  })
}
