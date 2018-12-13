import is from 'is'
import split from '../split'

const getLastNum = int => {
  if (!is.string(int)) {
    throw new TypeError('Must be a string')
  }
  if (isNaN(int)) {
    throw new TypeError('Can not be NaN')
  }
  if (!is.integer(Number(int))) {
    throw new TypeError('Must be an integer')
  }

  let splitted = split(int)
  let last = splitted[splitted.length - 1]
  let integer = parseInt(last)

  return integer
}

export default getLastNum
