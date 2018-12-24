import { split } from './int-util'
import { name, clear, singularize, addConjunction, addComma, write } from './parts-util'

/**
 * Escrever números maiores que mil.
 *
 * @function gt1000
 * @param {string} int Um número inteiro maior que mil.
 * @returns {number} Retorna o valor por extenso.
 */
export default (int) => {
  const number = write(addComma(addConjunction(singularize(clear(name(split(int)))), int)))

  return number.join(' ')
}
