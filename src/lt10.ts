import { listLt10 as getList } from './get-list.ts'

/**
 * Obter um número inteiro menor que dez por extenso.
 *
 * @function lt10
 * @param {number} int Um número inteiro menor que dez.
 * @param {string} locale Código do país para escrever o número.
 * @returns {string} O número por extenso.
 */
export default (int, locale) => {
  return getList(locale)[int]
}
