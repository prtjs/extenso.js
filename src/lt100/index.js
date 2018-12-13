import is from 'is'
import { lt100 as list } from '../list'
import lt10 from '../lt10'

const lt100 = int => {
  if (!is.integer(int)) {
    throw new TypeError('Must be an integer')
  }
  if (is.lt(0)) {
    throw new Error('Must be greater than -1')
  }
  if (is.gt(99)) {
    throw new Error('Must be less than 100')
  }

  if (is.lt(int, 10)) {
    return lt10(int)
  } else if (is.lt(int, 20)) {
    return list[int - 10]
  } else {
    const unit = lt10(int % 10)
    const ten = list[(int - int % 10) / 10 + 8]

    if (is.equal(unit, 'zero')) {
      return ten
    } else {
      return `${ten} e ${unit}`
    }
  }
}

export default lt100
