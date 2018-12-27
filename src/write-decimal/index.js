import writeInt from '../write-int'
import { listDecimals as list } from '../list'
import { getType } from './util'

/**
 * Adicionar 's' nos finais de determinadas palavras - pluralizar.
 *
 * @method pluralize
 * @param {string} val Um substantivo.
 * @param {number} count A quantidade de objeto.
 * @returns {string} Palavra pluralizada.
 */
export const pluralize = (val, count) => {
  return count > 1
    ? `${val}s`
    : val
}

/**
 * Escrever formalmente a parte decimal de um número.
 *
 * @method writeDecimalFormal
 * @param {string} int Um número inteiro referente ao decimal.
 * @returns {string} A parte decimal escrita por extenso.
 */
export const writeDecimalFormal = (int) => {
  // Veja <https://bit.ly/2SrsXVO> (no <archive.org>) para entender tudo.

  const len = int.length
  const intNum = parseInt(int)
  const intNormalized = int.replace(/^0+/, '')
  const intText = writeInt(intNormalized)
  const intType = pluralize(getType(len), intNum)
  const intTypeOf = list[Math.floor(len / 3 - 1)]

  if (len < 3) return `${intText} ${intType}`
  if (len % 3 === 0) return `${intText} ${pluralize(intTypeOf, intNum)}`

  return `${intText} ${intType} de ${intTypeOf}`
}

/**
 * Escrever informalmente a parte decimal de um número.
 *
 * @method writeDecimalInformal
 * @param {string} int Um número inteiro referente ao decimal.
 * @returns {string} A parte decimal escrita por extenso.
 */
export const writeDecimalInformal = (int) => {
  return `vírgula ${writeInt(int)}`
}

/**
 * Escrever a parte decimal de um número por extenso.
 *
 * @method writeDecimal
 * @param {string} int Um número inteiro referente ao decimal.
 * @param {string} opt Opção informando se é 'formal' ou 'informal'.
 * @returns {string} A parte decimal escrita por extenso.
 */
export default (int, opt) => {
  return opt && opt === 'informal'
    ? writeDecimalInformal(int)
    : writeDecimalFormal(int)
}