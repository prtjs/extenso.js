import is from 'is'
import { lt1000 as list } from '../list'
import lt100 from '../lt100'

const lt1000 = int => {
  if (!is.integer(int)) {
    throw new TypeError('Must be an integer')
  }
  if (is.lt(0)) {
    throw new Error('Must be greater than -1')
  }
  if (is.gt(999)) {
    throw new Error('Must be less than 1000')
  }

  if (is.lt(int, 100)) {
    return lt100(int)
  } else if (is.equal(int, 100)) {
    return 'cem'
  } else {
    let hundredInt = int - int % 100
    let restInt = int % 100
    let hundred = list[hundredInt / 100 - 1]
    let rest = lt100(restInt)

    return restInt
      ? `${hundred} e ${rest}`
      : hundred
  }
}

export default lt1000
