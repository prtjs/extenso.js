import formatNumber from 'format-number'

/**
 * Separar um inteiro em uma array com base na formatação de um número.
 *
 * @method split
 * @param {string} int Número inteiro.
 * @param {string} [scale='short'] Escala numérica a ser usada.
 * @param {boolean} [space='false'] Adicionar espaco na separação de escala longa
 * @returns {Array} Array com as partes do número.
 */

export const split = (int, scale = 'short', space=false) => {
  const format = formatNumber()
  const formatted = format(int)
  const splitted = formatted.split(',')

  // > Para números naturais inferiores a 10^9, as escalas são idênticas.
  // > Para números iguais ou superiores a 10^9, as duas escalas divergem ao usar
  //   as mesmas palavras para diferentes valores (fonte: Wikipedia)

  if (scale === 'long') {
    return splitted
      .reverse() // [ '000', '000', '000', '1' ]

      .map((item, index, arr) => {
        if (index < 2 || (index == arr.length - 1 && index % 2 == 0)) {
          return item;
        } else if ((index - 1) % 2 == 0) {
          
          return space ? `${item} ${arr[index - 1]}` : `${item}${arr[index - 1]}`;
        }
      }) // [ '000', '000', undefined, '1 000' ]

      .filter(item => item) // [ '000', '000', '1 000' ]

      .reverse();
    // // [ '1 000', '000', '000' ]
  }

  return splitted
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
