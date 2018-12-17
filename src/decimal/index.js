import is from 'is'
import formal from './formal'
import informal from './informal'

const decimal = (int, mode) => {
  if (!is.string(int)) {
    throw new TypeError('Must be a string')
  }
  if (isNaN(int)) {
    throw new TypeError('Can not be NaN')
  }
  if (!is.undef(mode) && !is.string(mode)) {
    throw new TypeError('Must be a string')
  }
  if (!is.undef(mode) && !/^(in)?formal$/.test(mode)) {
    throw new Error('Invalid option')
  }

  return mode && is.equal(mode, 'informal')
    ? informal(int)
    : formal(int)
}

export default decimal