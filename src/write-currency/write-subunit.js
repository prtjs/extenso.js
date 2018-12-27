import writeInt from '../write-int'

/**
 * Obter a sub-unidade escrita por extenso.
 *
 * @method writeSubunit
 * @param {string} val Valor a ser escrito.
 * @param {object} opts Opções de escrita do valor.
 * @returns {string} Valor escrito por extenso.
 */
export default (val, opts) => {
  const textNumber = writeInt(val)

  return parseInt(val) === 1
    ? `${textNumber} ${opts.subunit.singular}`
    : `${textNumber} ${opts.subunit.plural}`
}