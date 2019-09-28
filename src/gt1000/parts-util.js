import reverse from '@arr/reverse'
import { getLastNumber, split } from './int-util'
import { listGt1000 as getList } from '../get-list'
import lt1000 from '../lt1000'
import gt1000 from '.'

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
    .map(part => part.replace(/^0+\s?/, '-').trim())
    .filter(part => (part.split(' ').length > 1 || parseInt(part) == part || /^\d/.test(part)))
    .map(part => part.replace(/\-/g, ''))
    .map(part => part.replace(/^1\s(mil)$/, '$1'))
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
  return reverse(
    reverse(parts)
      .map(part => {
        if (split(part).length > 1) {
          return gt1000(part, locale, scale);
        }
        return part;
      })
      .map((part, i) => {
        const numberName = getList(locale)[i - 1];
        return numberName ? `${part} ${numberName}` : part;
      })
  )
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
export const write = (parts, locale, scale) => {
  return parts.map(part => {
    return part.replace(/^(\d+)/, digit => {
      const int = parseInt(digit)

      return int < 1000 ? lt1000(int, locale) : gt1000(int, locale, scale)
    })
  })
}
