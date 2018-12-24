import formatNumber from 'format-number'

/**
 * Separar um inteiro em uma array com base na formatação de um número.
 *
 * @param {string} int Um número inteiro.
 * @returns {Array} Uma array com as partes do número.
 */
export const split = (int) => {
  const format = formatNumber()
  const formatted = format(int)
  const splitted = formatted.split(',')

  return splitted
}

/**
 * Obter a última parte de um número.
 *
 * @param {string} int Um número inteiro.
 * @returns {number} A última parte do número.
 */
export const getLastNumber = (int) => {
  const splitted = split(int)
  const last = splitted[splitted.length - 1]
  const integer = parseInt(last)

  return integer
}

