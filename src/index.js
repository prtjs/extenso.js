import { isValidNumber, parseNumber } from './num-util'
import writeCurrency from './write-currency'
import writeDecimal from './write-decimal'
import writeInt from './write-int'

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
 * @param {string} [opt='formal'] Opção sobre o modo a ser escrito.
 * @returns {string} Valor como negativo.
 */
export const toNegative = (num = 'formal') => {
  return num && num === 'formal'
    ? `${num} negativo`
    : `menos ${num}`
}

/**
 * Escrever números por extenso.
 *
 * @param {string|number} num 
 * @param {object} opts
 * @returns {string} 
 */
export default (num, opts) => {
  if (typeof num !== 'string' && typeof num !== 'number') {
    throw new TypeError('Must be a string or a number')
  }
  if (!isValidNum(num)) {
    throw new Error('Invalid number')
  }

  let defaultOpts = {
    mode: 'number',
    locale: 'br',
    negative: 'formal',
    currency: {
      type: 'BRL'
    },
    number: {
      gender: 'm',
      decimal: 'formal'
    }
  }

  opts = Object.assign(defaultOpts, opts)

  if (
       isValidOpt(opts.mode, [ 'number', 'currency' ])
    || isValidOpt(opts.locale, [ 'pt', 'br' ])
    || isValidOpt(opts.negative, [ 'formal', 'informal' ])
    || isValidOpt(opts.currency.type, [ 'BRL', 'EUR' ])
    || isValidOpt(opts.number.gender, [ 'm', 'f' ])
    || isValidOpt(opts.number.decimal, [ 'formal', 'informal' ])
  ) {
    throw new Error('Invalid option')
  }

  const numString = num.toString()
  const { isNegative, integer, decimal } = parseNumber(numString)

  if (opts.mode === 'currency') {
    const numText = writeCurrency(opts.currency.type, integer, decimal)

    return isNegative
      ? toNegative(numText, opts.negative)
      : numText
  }

  if (opts.mode === 'number') {
    const intName = opts.number.gender === 'f' ? 'inteira' : 'inteiro'
    const intNamePlural = parseInt(integer) === 1 ? intName : `${intName}s`
    const intText = writeInt(integer)
    const decText = writeDecimal(decimal, opts.number.decimal)

    // Se tem a parte inteira e não tem a parte decimal
    if (integer !== '0' && decimal === '0') {
      return intText
    }

    // Se não tem a parte inteira e tem a parte decimal
    if (integer === '0' && decimal !== '0') {
      return decText
    }

    // Se tem a parte inteira e a parte decimal
    if (integer !== '0' && decimal !== '0') {
      const numText = `${intText} ${intName} ${decText}`

      return isNegative
        ? toNegative(numText)
        : decText
    }
  }
}
