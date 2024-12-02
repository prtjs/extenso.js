import {
  Modes,
  Locales,
  Negatives,
  Scales,
  Currencies,
  Genders,
  Decimals,
  DecimalSeparators,
} from './enums/options.enum'
import { Options } from './interfaces/options.interface'

import { validateNumber, parseNumber } from './num-util'
import writeCurrency from './write-currency/index'
import writeDecimal from './write-decimal/index'
import writeInt from './write-int'

export const validateOption = (val: string, vals: string[]): boolean => {
  return vals.includes(val)
}

export const toNegative = (num: string, mode = 'formal'): string => {
  return mode === 'informal'
    ? `menos ${num}`
    : `${num} negativo`
}

export default (num: string | number | bigint, opts?: Options) => {

  // Força que bigints sejam uma string
  if (typeof num === 'bigint') {
    num = num.toString()
  }

  if (typeof num !== 'string' && typeof num !== 'number') {
    throw new TypeError('Must be a string, number or bigint')
  }

  opts = opts || {}
  opts.currency = opts.currency || {}
  opts.number = opts.number || {}

  opts.mode = opts.mode || Modes.NUMBER
  opts.locale = opts.locale || Locales.BR
  opts.negative = opts.negative || Negatives.FORMAL
  opts.scale = opts.scale || Scales.SHORT
  opts.currency.type = opts.currency.type || Currencies.BRL
  opts.number.gender = opts.number.gender || Genders.MASCULINE
  opts.number.decimal = opts.number.decimal || Decimals.FORMAL
  opts.number.decimalSeparator = opts.number.decimalSeparator || DecimalSeparators.COMMA

  if (
    !validateOption(opts.mode, Object.values(Modes)) ||
    !validateOption(opts.locale, Object.values(Locales)) ||
    !validateOption(opts.negative, Object.values(Negatives)) ||
    !validateOption(opts.scale, Object.values(Scales)) ||
    !validateOption(opts.currency.type, Object.values(Currencies)) ||
    !validateOption(opts.number.gender, Object.values(Genders)) ||
    !validateOption(opts.number.decimal, Object.values(Decimals)) ||
    !validateOption(opts.number.decimalSeparator, Object.values(DecimalSeparators))
  ) {
    throw new Error('Invalid option')
  }

  if (!validateNumber(num, opts.number.decimalSeparator)) {
    throw new Error('Invalid number')
  }

  const { isNegative, integer, decimal } = parseNumber(num, decimalSeparatorIsDot)

  if (opts.mode === 'currency') {
    const iso = opts.currency.type
    const locale = opts.locale
    const decimalCents = decimal.slice(0, 2)
    const numText = writeCurrency(iso || '', locale, integer, decimalCents, opts.scale)

    return isNegative
      ? toNegative(numText, opts.negative)
      : numText
  }

  if (opts.mode === 'number') {
    const intNameSingular = opts.number.gender === 'f' ? 'inteira' : 'inteiro'
    const intName = parseInt(integer) === 1 ? intNameSingular : `${intNameSingular}s`
    const intText = writeInt(integer, opts.locale, opts.number.gender, opts.scale)
    const decText = writeDecimal(decimal, opts.locale, opts.number.decimal)

    if (integer === '0' && decimal === '0') {
      return intText
    }

    // Se tem a parte inteira e não tem a parte decimal
    if (integer !== '0' && decimal === '0') {
      return isNegative
        ? toNegative(intText, opts.negative)
        : intText
    }

    // Se não tem a parte inteira e tem a parte decimal
    if (integer === '0' && decimal !== '0') {
      const number = opts.number.decimal === 'informal'
        ? `zero ${decText}`
        : decText

      return isNegative
        ? toNegative(number, opts.negative)
        : number
    }

    // Se tem a parte inteira e a parte decimal
    if (integer !== '0' && decimal !== '0') {
      if (opts.number.decimal === 'informal') {
        return `${intText} ${decText}`
      }

      const numText = `${intText} ${intName} e ${decText}`

      return isNegative
        ? toNegative(numText, opts.negative)
        : numText
    }
  }
}
