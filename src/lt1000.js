import { lt1000 as list } from './list'
import lt100 from './lt100'

/**
 * Obter um número inteiro menor que mil por extenso.
 *
 * @function lt1000
 * @param {number} int Um número inteiro menor que mil.
 * @returns {string} Número escrito por extenso.
 */
export default (int) => {
  if (int < 100) return lt100(int)
  if (int === 1000) return 'cem'

  const hundredInt = int - int % 100
  const restInt = int % 100
  const hundred = list[hundredInt / 100 - 1]
  const rest = lt100(restInt)

  return restInt
    ? `${hundred} e ${rest}`
    : hundred
}
