import { lt10 as list } from './list'

/**
 * Obter um número inteiro menor que dez por extenso.
 *
 * @param {number} int Um número inteiro menor que dez.
 * @returns {string} O número por extenso.
 */
export default (int) => {
  return list[int]
}