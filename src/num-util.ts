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

interface Parser {
  isNegative: boolean
  integerPart: string
  decimalPart: string
}

export const parser = (input: string | number, decimalSeparator: DecimalSeparators): Parser => {
  if (typeof input === 'number') {
    input = input.toString()
    // Força ser DOT caso o tipo seja number
    decimalSeparator = DecimalSeparators.DOT
  }

  input = input.trim()

  const separatorFor = {
    decimal: decimalSeparator === DecimalSeparators.DOT ? '.' : ',',
    thousands: decimalSeparator === DecimalSeparators.DOT ? ',' : '.',
  }
  const isNegative = /^-/.test(input)
  const pureNumber = input.replace(RegExp(`(-|\\${separatorFor.thousands})`, 'g'), '')

  // Caso seja um número inteiro
  if (!pureNumber.includes(separatorFor.decimal)) {
    return {
      isNegative,
      integerPart: pureNumber,
      decimalPart: '0',
    }
  }

  const [integerPart, decimalPart] = pureNumber
    .split(separatorFor.decimal)
    .map((number) => number.replace(/^0+$/, '0'))

  return {
    isNegative,
    integerPart,
    decimalPart,
  }
}
