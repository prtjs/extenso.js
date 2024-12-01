import { listLt1000 as getList } from './get-list'
import lt100 from './lt100'

/**
 * Obter um número inteiro menor que mil por extenso.
 *
 * @function lt1000
 * @param {number} int Um número inteiro menor que mil.
 * @param {string} locale Código do país para escrever o número.
 * @returns {string} Número escrito por extenso.
 */
export default (int: number, locale: 'br' | 'pt') => {
  if (int < 100) return lt100(int, locale)
  if (int === 100) return 'cem'

  const hundredInt = int - int % 100
  const restInt = int % 100
  const hundred = getList()[hundredInt / 100 - 1]
  const rest = lt100(restInt, locale)

  return restInt
    ? `${hundred} e ${rest}`
    : hundred
}
