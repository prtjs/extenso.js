import { lt100 as list } from '../list'
import lt10 from '../lt10'

const lt100 = val => {
  if (val < 10) {
    return lt10(val)
  } else if (val < 20) {
    return list[val - 10]
  } else {
    const unit = lt10(val % 10)
    const ten = list[(val - val % 10) / 10 + 8]

    if (unit === 'zero') {
      return ten
    } else {
      return `${ten} e ${unit}`
    }
  }
}

export default lt100
