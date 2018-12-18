import is from 'is'
import writeInt from '../../write-int'

const informal = int => {
  if (!is.string(int)) {
    throw new TypeError('Must be a string')
  }
  if (isNaN(int)) {
    throw new TypeError('Can not be NaN')
  }
  if (!is.integer(Number(int))) {
    throw new TypeError('Must be an integer')
  }

  return `vírgula ${writeInt(int)}`
}

export default informal