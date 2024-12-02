import { DecimalSeparators } from "./enums/options.enum"

export const validateNumber = (input: string | number, decimalSeparator: DecimalSeparators): boolean => {
  const REGEX_NOT_FORMATTED = /^-?\d+$/

  const REGEX_NOT_FORMATTED_DOT_WITH_DECIMAL = /^-?\d+,\d+$/
  const REGEX_FORMATTED_DOT = /^-?\d{1,3}\d?((\.\d{3})+)?$/
  const REGEX_FORMATTED_DOT_WITH_DECIMAL = /^-?\d{1,3}\d?((\.\d{3})+)?,\d+$/

  const REGEX_FORMATTED_COMMA = /^-?\d{1,3}\d?((,\d{3})+)?$/
  const REGEX_FORMATTED_COMMA_WITH_DECIMAL = /^-?\d{1,3}\d?((,\d{3})+)?\.\d+$/
  const REGEX_NOT_FORMATTED_COMMA_WITH_DECIMAL = /^-?\d+\.\d+$/

  if (typeof input === 'number') {
    return true
  }

  input = input.toString()

  switch (decimalSeparator) {
    case DecimalSeparators.COMMA:
      return (
        REGEX_NOT_FORMATTED.test(input) ||
        REGEX_FORMATTED_DOT.test(input) ||
        REGEX_FORMATTED_DOT_WITH_DECIMAL.test(input) ||
        REGEX_NOT_FORMATTED_DOT_WITH_DECIMAL.test(input)
      )
    case DecimalSeparators.DOT:
      return (
        REGEX_NOT_FORMATTED.test(input) ||
        REGEX_FORMATTED_COMMA.test(input) ||
        REGEX_FORMATTED_COMMA_WITH_DECIMAL.test(input) ||
        REGEX_NOT_FORMATTED_COMMA_WITH_DECIMAL.test(input)
      )
    default:
      return false
  }
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
