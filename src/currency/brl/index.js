import is from 'is'
import writeCents from './write-cents'
import writeInt from '../write-int'

const brl = (val, cents) => {
  if (!is.string(val)) {
    throw new TypeError('Must be a string')
  }
  if (!is.number(cents)) {
    throw new TypeError('Must be a number')
  }

  let valNum = parseInt(val)
  let valText = writeInt(val)
  let valName = is.equal(valNum, 1) ? 'real' : 'reais'
  let centsText = writeCents(cents)

  if (is.equal(cents, 0)) {
    return `${valText} ${valName}`
  }
  if (is.equal(valNum, 0)) {
    return centsText
  }

  return `${valText} ${valName} e ${centsText}`
}

export default brl