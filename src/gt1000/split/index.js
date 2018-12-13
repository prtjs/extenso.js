import is from 'is'
import formatNumberFn from 'format-number'

const formatNumber = formatNumberFn()

const split = int => {
  if (!is.string(int)) {
    throw new TypeError('Must be a string')
  }
  if (isNaN(int)) {
    throw new TypeError('Can not be NaN')
  }
  if (!is.integer(Number(int))) {
    throw new TypeError('Must be an integer')
  }

  let formatted = formatNumber(int)
  let splitted = formatted.split(',')

  return splitted
}

export default split
