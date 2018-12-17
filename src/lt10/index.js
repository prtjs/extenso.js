import is from 'is'
import list from './list'

const lt10 = int => {
  if (!is.integer(int)) {
    throw new TypeError('Must be an integer')
  }
  if (is.lt(0)) {
    throw new Error('Must be greater than -1')
  }
  if (is.gt(9)) {
    throw new Error('Must be less than 10')
  }

  return list[int]
}

export default lt10
