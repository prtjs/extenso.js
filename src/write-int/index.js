import is from 'is'
import lt1000 from '../lt1000'
import gt1000 from '../gt1000'

const writeInt = int => {
  if (!is.string(int)) {
    throw new TypeError('Must be a string')
  }
  if (isNaN(int)) {
    throw new TypeError('Can not be NaN')
  }
  if (!is.integer(Number(int))) {
    throw new TypeError('Must be an integer')
  }
  if (is.lt(Number(int, 0))) {
    return new TypeError('Can not be less than 0')
  }

  let intNum = parseInt(int) // Inseguro.

  if (is.lt(intNum, 1000)) {
    return lt1000(intNum)
  }
  if (is.equal(intNum, 1000)) {
    return 'mil'
  }

  return gt1000(int)
}

export default writeInt