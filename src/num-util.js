/**
 * Verificar se um valor é um número, da língua portuguesa, valido.
 *
 * @method isValidNumber
 * @param {string} val Um valor para ser verificado.
 * @returns {boolean} Verificação do valor.
 */
export const isValidNumber = (val, isDotSeparator=false) => {
  if (typeof val === 'number' && !Number.isSafeInteger(val)) {
    return false
  }

  // "1.000.000", "-2.000", etc.
  const isFormatted   = /^-?\d{1,3}\d?((\.\d{3})+)?$/.test(val)

  // "1000000", "-2000", etc.
  const isNotFormatted = /^-?\d+$/.test(val)

  // "1.000.000,42", "-2.000,00", etc.
  const isFormattedDecimal = /^-?\d{1,3}\d?((\.\d{3})+)?,\d+$/.test(val)

  // "1000000,42", "-2000,00", etc.
  const isNotFormattetDecimal = /^-?\d+,\d+/.test(val)

  if (isFormatted || isNotFormatted) {
    return isFormattedDecimal || isNotFormattetDecimal
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