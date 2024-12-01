import { isValidNumber, parseNumber } from './num-util'
import writeCurrency from './write-currency/index'
import writeDecimal from './write-decimal/index'
import writeInt from './write-int'

export const isValidOpt = (val: string | undefined, vals: string[]): boolean => {
  return vals.includes(val || '')
}

export const toNegative = (num: string, mode = 'formal'): string => {
  return mode === 'informal'
    ? `menos ${num}`
    : `${num} negativo`
}

export interface CurrencyOptions {
  type?: 'BRL' | 'EUR' | 'CVE'
}

export interface NumberOptions {
  gender?: 'm' | 'f'
  decimal?: 'formal' | 'informal'
  decimalSeparator?: 'comma' | 'dot'
}

export interface Options {
  mode?: 'number' | 'currency'
  locale?: 'pt' | 'br'
  negative?: 'formal' | 'informal'
  scale?: 'short' | 'long'
  currency?: CurrencyOptions
  number?: NumberOptions
}

export default (num: string | number | bigint, opts?: Options): string | undefined => {
  if (typeof num === 'bigint') {
    num = num.toString()
  }
  if (typeof num !== 'string' && typeof num !== 'number') {
    throw new TypeError('Must be a string, number or bigint')
  }

  opts = opts || {}
  opts.mode = opts.mode || 'number'
  opts.locale = opts.locale || 'br'
  opts.negative = opts.negative || 'formal'
  opts.scale = opts.scale || 'short'

  opts.currency = opts.currency || {}
  opts.currency.type = opts.currency.type || 'BRL'

  opts.number = opts.number || {}
  opts.number.gender = opts.number.gender || 'm'
  opts.number.decimal = opts.number.decimal || 'formal'
  opts.number.decimalSeparator = opts.number.decimalSeparator || 'comma'

  if (
    !isValidOpt(opts.mode, [ 'number', 'currency' ]) ||
    !isValidOpt(opts.locale, [ 'pt', 'br' ]) ||
    !isValidOpt(opts.negative, [ 'formal', 'informal' ]) ||
    !isValidOpt(opts.scale, [ 'short', 'long' ]) ||
    !isValidOpt(opts.currency.type, [ 'BRL', 'EUR', 'CVE' ]) ||
    !isValidOpt(opts.number.gender, [ 'm', 'f' ]) ||
    !isValidOpt(opts.number.decimal, [ 'formal', 'informal' ]) ||
    !isValidOpt(opts.number.decimalSeparator, [ 'comma', 'dot' ])
  ) {
    throw new Error('Invalid option')
  }

  const decimalSeparatorIsDot = opts.number.decimalSeparator === 'dot' || typeof num === 'number'

  if (!isValidNumber(num, decimalSeparatorIsDot)) {
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
