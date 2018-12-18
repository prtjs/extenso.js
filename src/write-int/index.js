import is from 'is'
import toFemale from './toFemale'
import lt1000 from '../lt1000'
import gt1000 from '../gt1000'

const writeInt = (int, opt = 'm') => {
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
  if (!is.undef(opt) && !/^(m|f)$/.test(opt)) {
    return new Error('Invalid opt')
  }

  let intNum = parseInt(int)

  if (is.lt(intNum, 1000)) {
    return lt1000(intNum)
  }
  if (is.equal(intNum, 1000)) {
    return 'mil'
  }

  return opt === 'f'
    ? toFemale(gt1000(int))
    : gt1000(int)
}

export default writeInt