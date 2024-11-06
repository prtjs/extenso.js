import lt10 from './lt10'
import { listLt100 as getList } from './get-list'

/**
 * Obter um número inteiro menor que cem por extenso.
 *
 * @function lt100
 * @param {number} int Um número inteiro menor que cem.
 * @param {string} locale Código do país para escrever o número.
 * @returns {string} O número escrito por extenso.
 */
export default (int, locale) => {
  if (int < 10) return lt10(int, locale)
  if (int < 20) return getList(locale)[int - 10]

  const unit = lt10(int % 10, locale)
  const ten = getList(locale)[(int - int % 10) / 10 + 8]

  return unit !== 'zero'
    ? `${ten} e ${unit}`
    : ten
}
