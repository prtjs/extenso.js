import lt10 from './lt10'
import { lt100 as list } from './list'

/**
 * Obter um número inteiro menor que cem por extenso.
 *
 * @function lt100
 * @param {number} int Um número inteiro menor que cem.
 * @returns {string} O número escrito por extenso.
 */
export default (int) => {
  if (int < 10) return lt10(int)
  if (int < 20) return list[int - 10]

  const unit = lt10(int % 10)
  const ten = list[(int - int % 10) / 10 + 8]

  return unit !== 'zero'
    ? `${ten} e ${unit}`
    : ten
}