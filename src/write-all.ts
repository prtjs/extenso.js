import { isValidNumber, parseNumber } from './num-util.ts'
import writeCurrency from './write-currency/index.ts'
import writeDecimal from './write-decimal/index.ts'
import writeInt from './write-int.ts'

/**
 * Verificar se uma opção é válida.
 *
 * @method isValidOpt
 * @param {string} val Valor da opção.
 * @param {Array} vals Valores para checagem.
 * @returns {boolean} Informação da validade da opção.
 */
export const isValidOpt = (val, vals) => {
  return vals.includes(val)
}

/**
 * Passar um número escrito por extenso para o modo negativo.
 *
 * @method toNegative
 * @param {string} num Valor escrito por extenso.
 * @param {string} [mode='formal'] Opção sobre o modo a ser escrito.
 * @returns {string} Valor como negativo.
 */
export const toNegative = (num, mode = 'formal') => {
  return mode === 'informal'
    ? `menos ${num}`
    : `${num} negativo`
}

/**
 * Escrever números por extenso.
 *
 * @param {string|number|bigint} num Número para ser escrito por extenso.
 * @param {object} opts Opções para configurar modo de escrita.
 * @returns {string} Número escrito por extenso.
 */
export default (num, opts) => {
  if (typeof num === 'bigint') {
    num = num.toString()
  }
  if (typeof num !== 'string' && typeof num !== 'number') {
    throw new TypeError('Must be a string, number or bigint')
  }

  const defaultOpts = {
    mode: 'number',
    locale: 'br',
    negative: 'formal',
    scale: 'short',
  }
  const defaultOptsCurrency = {
    type: 'BRL',
  }
  const defaultOptsNumber = {
    gender: 'm',
    decimal: 'formal',
    decimalSeparator: 'comma',
  }

  opts = Object.assign(defaultOpts, opts)
  opts.currency = Object.assign(defaultOptsCurrency, opts.currency)
  opts.number = Object.assign(defaultOptsNumber, opts.number)

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
    const numText = writeCurrency(iso, locale, integer, decimalCents, opts.scale)

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
