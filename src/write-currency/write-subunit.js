import writeInt from '../write-int'

/**
 * Obter a sub-unidade escrita por extenso.
 *
 * @method writeSubunit
 * @param {string} val Valor a ser escrito.
 * @param {string} locale Código do país para escrever o número.
 * @param {object} opts Opções de escrita do valor.
 * @param {string} [scale='long'] Escala numérica a ser usada.
 * @returns {string} Valor escrito por extenso.
 */
export default (val, locale, opts, scale='long') => {
  const textNumber = writeInt(val, locale, undefined, scale)

  return parseInt(val) === 1
    ? `${textNumber} ${opts.subunit.singular}`
    : `${textNumber} ${opts.subunit.plural}`
}