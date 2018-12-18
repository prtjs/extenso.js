import is from 'is'

const toNegative = (str, mode) => {
  if (!is.string(str)) {
    throw new TypeError('Must be a string')
  }
  if (!is.undef(mode) && !is.string(mode)) {
    throw new TypeError('Must be a string')
  }
  if (!is.undef(mode) && !/^(in)?formal$/.test(mode)) {
    throw new Error('Must be "formal" or "informal"')
  }
  
  return mode && is.equal(mode, 'informal')
    ? `menos ${str}`
    : `${str} negativo`
}

export default toNegative