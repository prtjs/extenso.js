import { split } from './int-util'
import { name, clear, singularize, addConjunction, addComma, write } from './parts-util'

/**
 * Escrever números maiores que mil.
 *
 * @function gt1000
 * @param {string} int Número inteiro maior que mil.
 * @param {string} locale Código do país para escrever o número.
 * @returns {number} Valor escrito por extenso.
 */
export default (int, locale) => {
  const number = write(addComma(addConjunction(singularize(clear(name(split(int), locale))), int)), locale)

  return number.join(' ')
}
