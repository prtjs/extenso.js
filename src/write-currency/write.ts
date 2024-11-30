import writeInt from '../write-int.ts'

/**
 * Obter o valor escrito por extenso.
 *
 * @method write
 * @param {string} val O valor a ser escrito.
 * @param {string} locale Código do país para escrever o número.
 * @param {object} opts As opções de escrita do valor.
 * @returns {string} O valor escrito por extenso.
 */
export default (val, locale, opts, scale) => {
  const number = parseInt(val)
  const text = writeInt(val, locale, 'm', scale)

  if (number === 1) return `${text} ${opts.singular}`
  if (number >= 1e+6) {
    const numStr = number.toString()
    const hundreds = parseInt(numStr.substr(-6, 3))
    const dozens = parseInt(numStr.substr(-3, 3))

    if (hundreds === 0 && dozens === 0) {
      return `${text} de ${opts.plural}`
    }
  }

  return `${text} ${opts.plural}`
}
