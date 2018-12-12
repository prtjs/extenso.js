import { lt1000 as list } from '../list'
import lt100 from '../lt100'

const lt1000 = val => {
  if (val < 100) {
    return lt100(val)
  } else if (val === 100) {
    return 'cem'
  } else {
    const hundredInt = val - val % 100
    const restInt = val % 100
    const hundred = list[hundredInt / 100 - 1]
    const rest = lt100(restInt)

    return restInt
      ? `${hundred} e ${rest}`
      : hundred
  }
}

export default lt1000
