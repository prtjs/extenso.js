import assignDeep from 'assign-deep'
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
 * @param {string|number} num Número para ser escrito por extenso.
 * @param {object} opts Opções para configurar modo de escrita.
 * @returns {string} Número escrito por extenso.
 */
export default (num, opts) => {
  if (typeof num !== 'string' && typeof num !== 'number') {
    throw new TypeError('Must be a string or a number')
  }

  const numString = num.toString()

  if (!isValidNumber(numString)) {
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

  // Usando o pacote 'assign-deep' no lugar de Object.assign(),
  // pois esse último substitui completamente todas as propriedades
  // de um objeto que está dentro de outro objeto.
  opts = assignDeep(defaultOpts, opts)

  if (
       !isValidOpt(opts.mode, [ 'number', 'currency' ])
    || !isValidOpt(opts.locale, [ 'pt', 'br' ])
    || !isValidOpt(opts.negative, [ 'formal', 'informal' ])
    || !isValidOpt(opts.currency.type, [ 'BRL', 'EUR' ])
    || !isValidOpt(opts.number.gender, [ 'm', 'f' ])
    || !isValidOpt(opts.number.decimal, [ 'formal', 'informal' ])
  ) {
    throw new Error('Invalid option')
  }

  const { isNegative, integer, decimal } = parseNumber(numString)

  if (opts.mode === 'currency') {
    const iso = opts.currency.type
    const locale = opts.locale
    const numText = writeCurrency(iso, locale, integer, decimal)

    return isNegative
      ? toNegative(numText, opts.negative)
      : numText
  }

  if (opts.mode === 'number') {
    const intNameSingular = opts.number.gender === 'f' ? 'inteira' : 'inteiro'
    const intName = parseInt(integer) === 1 ? intNameSingular : `${intNameSingular}s`
    const intText = writeInt(integer, opts.locale, opts.number.gender)
    const decText = writeDecimal(decimal, opts.locale, opts.number.decimal)

    // Se tem a parte inteira e não tem a parte decimal
    if (integer !== '0' && decimal === '0') {
      return isNegative
        ? toNegative(intText, opts.negative)
        : intText
    }

    // Se não tem a parte inteira e tem a parte decimal
    if (integer === '0' && decimal !== '0') {
      let number = opts.number.decimal === 'informal'
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
