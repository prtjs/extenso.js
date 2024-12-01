export const isValidNumber = (val: string | number, decimalSeparatorIsDot = false): boolean => {
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

  val = val.toString()

  /*
   * Geral
   */

  // "1000000", "-2000", etc.
  const isNotFormatted = /^-?\d+$/.test(val)

  /*
   * Decimal separado por ',' (vírgula)
   */

  // "1.000.000", "-2.000", etc.
  const isFormattedDot = /^-?\d{1,3}\d?((\.\d{3})+)?$/.test(val)
  // "1.000.000,42", "-2.000,00", etc.
  const isFormattedDecimalDot = /^-?\d{1,3}\d?((\.\d{3})+)?,\d+$/.test(val)
  // "1000000,42", "-2000,00", etc.
  const isNotFormattetDecimalDot = /^-?\d+,\d+$/.test(val)

  /*
   * Decimal separado por '.' (ponto)
   */

  // "1,000,000", "-2,000", etc.
  const isFormattedComma = /^-?\d{1,3}\d?((,\d{3})+)?$/.test(val)
  // "1,000,000.42", "-2,000.00", etc.
  const isFormattedDecimalComma = /^-?\d{1,3}\d?((,\d{3})+)?\.\d+$/.test(val)
  // "1000000.42", "-2000.00", etc.
  const isNotFormattetDecimalComma = /^-?\d+\.\d+$/.test(val)

  if (decimalSeparatorIsDot) {
    return isNotFormatted ||
        isFormattedComma ||
        isFormattedDecimalComma ||
        isNotFormattetDecimalComma
  }

  return isNotFormatted ||
      isFormattedDot ||
      isFormattedDecimalDot ||
      isNotFormattetDecimalDot
}

// TODO: Criar uma interface (TypeScript) para o retorno
export const parseNumber = (num: string | number, decimalSeparatorIsDot = false): { isNegative: boolean, integer: string, decimal: string } => {
  if (typeof num === 'number') {
    num = num.toString()
    decimalSeparatorIsDot = true
  }

  const separator = decimalSeparatorIsDot ? ',' : '.'
  const decimalSeparator = decimalSeparatorIsDot ? '.' : ','
  const isNegative = /^-/.test(num)
  const normalized = num.replace(RegExp(`(-|\\${separator})`, 'g'), '')

  if (normalized.includes(decimalSeparator)) {
    const [ integer, decimal ] = normalized
      .split(decimalSeparator)
      .map((val) => val.replace(/^0+$/, '0'))

    return {
      isNegative,
      integer,
      decimal,
    }
  }

  return {
    isNegative,
    integer: normalized,
    decimal: '0',
  }
}
