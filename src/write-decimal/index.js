import is from 'is'
import formal from './formal'
import informal from './informal'

const writeDecimal = (int, opt) => {
  if (!is.string(int)) {
    throw new TypeError('Must be a string')
  }
  if (isNaN(int)) {
    throw new TypeError('Can not be NaN')
  }
  if (!is.undef(opt) && !is.string(opt)) {
    throw new TypeError('Must be a string')
  }
  if (!is.undef(opt) && !/^(in)?formal$/.test(opt)) {
    throw new Error('Invalid option')
  }

  return opt && is.equal(opt, 'informal')
    ? informal(int)
    : formal(int)
}

export default writeDecimal