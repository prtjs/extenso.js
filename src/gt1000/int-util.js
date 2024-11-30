/**
 * Separar um inteiro em uma array com base na formatação de um número.
 *
 * @method split
 * @param {string} int Número inteiro.
 * @returns {Array} Array com as partes do número.
 */
export const split = (int) => {
  return int.match(/\d{1,3}(?=(\d{3})*$)/g)
}

/**
 * Obter a última parte de um número.
 *
 * @method getLastNumber
 * @param {string} int Número inteiro.
 * @returns {number} Última parte do número.
 */
export const getLastNumber = (int) => {
  const splitted = split(int)
  const last = splitted[splitted.length - 1]
  const integer = parseInt(last)

  return integer
}
