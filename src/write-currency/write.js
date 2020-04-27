import writeInt from '../write-int'

/**
 * Obter o valor escrito por extenso.
 *
 * @method write
 * @param {string} val O valor a ser escrito.
 * @param {string} locale Código do país para escrever o número.
 * @param {object} opts As opções de escrita do valor.
 * @returns {string} O valor escrito por extenso.
 */
export default (val, locale, scale, opts) => {
  const number = parseInt(val)
  const text = writeInt(val, locale, 'm', scale)

  if (number === 1) return `${text} ${opts.singular}`
  if (number >= 1e+6) return `${text} de ${opts.plural}`

  return `${text} ${opts.plural}`
}
