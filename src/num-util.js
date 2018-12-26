/**
 * Verificar se um valor é um número, da língua portuguesa, valido.
 *
 * @method isValidNumber
 * @param {string} val Um valor para ser verificado.
 * @returns {boolean} Verificação do valor.
 */
export const isValidNumber = (val) => {

  // Verifica se é um número
  if (
       /^\d{1,3}\d?((\.\d{3})+)?$/.test(val) // ...formatado
    || /^\d{1,3}\d?((\.\d{3})+)?,\d+$/.test(val) // ...decimal formatado
    || /^\d+$/.test(val) // ...não formatado
    || /^\d+,\d+/.test(val) // ...decimal não formatado
  ) {
    return true
  }

  return false
}

/**
 * Analisar um número.
 *
 * @method parseNumber
 * @param {string} val Um número para ser analisado
 * @returns {object} Objeto com as informações do número
 */
export const parseNumber = (num) => {
  const isNegative = /^-/.test(num)
  const normalized = num.replace(/(-|\.)/g, '')

  if (normalized.includes(',')) {
    const [ integer, decimal ] = normalized.split(',').map((val) => val.replace(/^0+$/, '0'))

    return {
      isNegative,
      integer,
      decimal
    }
  }

  return {
    isNegative,
    integer: normalized,
    decimal: '0'
  }
}