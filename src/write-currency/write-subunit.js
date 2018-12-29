import writeInt from '../write-int'

/**
 * Obter a sub-unidade escrita por extenso.
 *
 * @method writeSubunit
 * @param {string} val Valor a ser escrito.
 * @param {string} locale Código do país para escrever o número.
 * @param {object} opts Opções de escrita do valor.
 * @returns {string} Valor escrito por extenso.
 */
export default (val, locale, opts) => {
  const textNumber = writeInt(val, locale)

  return parseInt(val) === 1
    ? `${textNumber} ${opts.subunit.singular}`
    : `${textNumber} ${opts.subunit.plural}`
}