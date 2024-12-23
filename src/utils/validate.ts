import { DecimalSeparators } from "../enums/options.enum"

const validate = (input: string, decimalSeparator: DecimalSeparators): boolean => {
  const REGEX_NOT_FORMATTED = /^-?\d+$/

  const REGEX_NOT_FORMATTED_DOT_WITH_DECIMAL = /^-?\d+,\d+$/
  const REGEX_FORMATTED_DOT = /^-?\d{1,3}\d?((\.\d{3})+)?$/
  const REGEX_FORMATTED_DOT_WITH_DECIMAL = /^-?\d{1,3}\d?((\.\d{3})+)?,\d+$/

  const REGEX_FORMATTED_COMMA = /^-?\d{1,3}\d?((,\d{3})+)?$/
  const REGEX_FORMATTED_COMMA_WITH_DECIMAL = /^-?\d{1,3}\d?((,\d{3})+)?\.\d+$/
  const REGEX_NOT_FORMATTED_COMMA_WITH_DECIMAL = /^-?\d+\.\d+$/

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

export default validate