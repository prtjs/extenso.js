import { split } from './int-util.ts'
import { name, clear, singularize, addConjunction, addComma, write } from './parts-util.ts'

/**
 * Escrever números maiores que mil.
 *
 * @function gt1000
 * @param {string} int Número inteiro maior que mil.
 * @param {string} locale Código do país para escrever o número.
 * @returns {number} Valor escrito por extenso.
 */
export default (int, locale, scale) => {
  const number = write(addComma(addConjunction(singularize(clear(name(split(int), locale, scale))), int)), locale)

  return number.join(' ')
}
