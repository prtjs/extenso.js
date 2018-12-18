import is from 'is'
import writeInt from './write-int'
import writeDecimal from './write-decimal'
import toFemale from './to-female'
import toNegative from './to-negative'
import currency from './currency'
import pluralize from './pluralize'
import parseNum from './parse-num'
import isValidNum from './is-valid-num'

const extenso = (num, opts) => {
  if (!is.string(num) && !is.number(num)) {
    throw new TypeError('Must be a string or a number')
  }
  if (!isValidNum(num)) {
    throw new Error('Invalid number')
  }

  let defaultOpts = {
    mode: 'number',
    locale: 'br'
    negative: 'formal'
    currency: {
      type: 'BRL'
    }
    number: {
      gender: 'm'
      decimal: 'formal'
    }
  }

  opts = Object.assign(defaultOpts, opts)

  if (
       !/^(number|currency)$/.test(opts.mode)
    || !/^(pt|br)$/.test(opts.locale)
    || !/^(formal|informal)$/.test(opts.negative)
    || !/^(BRL)$/.test(opts.currency.type)
    || !/^(m|f)/.test(opts.number.gender)
    || !/^formal|informal)/.test(opts.number.decimal)
  ) {
    throw new Error('Invalid option')
  }

  let strNum = num.toString()
  let { isNegative, integer, decimal } = parsedNum(strNum)

  if (opts.mode === 'currency') {
    switch (opts.currency.type) {
      case 'BRL':
        return isNegative
          ? toNegative(currency.BRL(integer, decimal), opts.negative)
          : currency.BRL(integer, decimal)
        break
    }
  }
  if (opts.mode === 'number') {
    let textInteger = writeInt(integer, opts.number.gender)
    let textDecimal = writeDecimal(decimal, opts.number.decimal)
    let partial = opts.number.decimal === 'informal'
      ? `${pluralize(opts.number.gender === 'f' ? 'inteira' : 'inteiro', parseInt(integer))} e`
      : `vírgula`

    if (!is.equal(integer, '0') && is.equal(decimal, '0')) {
      return textInteger
    }
    if (!is.equal(decimal, '0') && is.equal(integer, '0')) {
      return textDecimal
    }

    return isNegative
      ? toNegative(`${textInteger} ${partial} ${textDecimal}`, opts.negative)
      : `${textInteger} ${partial} ${textDecimal}`
  }
}
