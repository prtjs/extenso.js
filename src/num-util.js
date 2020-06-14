/**
 * Verificar se um valor é um número, da língua portuguesa, valido.
 *
 * @method isValidNumber
 * @param {string|float} val Um valor para ser verificado.
 * @returns {boolean} Verificação do valor.
 */
export const isValidNumber = (val, isCommaSeparator=false) => {
  if (typeof val === 'number') {

    // Se for um inteiro e não for seguro
    if (Number.isInteger(val) && !Number.isSafeInteger(val)) {
      return false
    }

    // Se for um float
    if (!Number.isInteger(val)) {
      return true
    }
  }

  /*
   * Geral
   */

  // "1000000", "-2000", etc.
  const isNotFormatted = /^-?\d+$/.test(val)

  /*
   * Separados por "." (ponto)
   */

  // "1.000.000", "-2.000", etc.
  const isFormattedDot   = /^-?\d{1,3}\d?((\.\d{3})+)?$/.test(val)
  // "1.000.000,42", "-2.000,00", etc.
  const isFormattedDecimalDot = /^-?\d{1,3}\d?((\.\d{3})+)?,\d+$/.test(val)
  // "1000000,42", "-2000,00", etc.
  const isNotFormattetDecimalDot = /^-?\d+,\d+$/.test(val)

  /*
   * Separados por "," (vírgula)
   */

  // "1,000,000", "-2,000", etc.
  const isFormattedComma   = /^-?\d{1,3}\d?((,\d{3})+)?$/.test(val)
  // "1,000,000.42", "-2,000.00", etc.
  const isFormattedDecimalComma = /^-?\d{1,3}\d?((,\d{3})+)?\.\d+$/.test(val)
  // "1000000.42", "-2000.00", etc.
  const isNotFormattetDecimalComma = /^-?\d+\.\d+$/.test(val)

  if (isCommaSeparator) {
    return isNotFormatted
        || isFormattedComma
        || isFormattedDecimalComma
        || isNotFormattetDecimalComma
  }

  return isNotFormatted
      || isFormattedDot
      || isFormattedDecimalDot
      || isNotFormattetDecimalDot
}

/**
 * Analisar um número.
 *
 * @method parseNumber
 * @param {string} val Um número para ser analisado
 * @returns {object} Objeto com as informações do número
 */
export const parseNumber = (num, isCommaSeparator=false) => {
  if (typeof num === 'number') {
    num = num.toString()
    isCommaSeparator = true
  }

  const separator = isCommaSeparator ? ',' : '.'
  const decimalSeparator = isCommaSeparator ? '.' : ','
  const isNegative = /^-/.test(num)
  const normalized = num.replace(RegExp(`(-|\\${separator})`, 'g'), '')

  if (normalized.includes(decimalSeparator)) {
    const [ integer, decimal ] = normalized
      .split(decimalSeparator)
      .map((val) => val.replace(/^0+$/, '0'))

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