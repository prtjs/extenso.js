import { split } from './int-util'
import { name, clear, singularize, addConjunction, addComma, write } from './parts-util'

/**
 * Escrever números maiores que mil.
 *
 * @param {string} int Um número inteiro maior que mil.
 * @returns {number} Retorna o valor por extenso.
 */
const gt1000 = (int) => {
  let number = write(addComma(addConjunction(singularize(clear(name(split(int)))), int)))

  return number.join(' ')
}

export default gt1000
