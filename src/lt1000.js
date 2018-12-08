import { lt100 as list } from './list'

const lt1000 = val => {
  if (val < 1000) {
    return lt100(val)
  } else if (val === 100) {
    return 'cem'
  } else {
    const hundredInt = val - val % 100
    const restInt = val % 100
    const hundred = list[hundredInt - 10]
    const rest = lt100(restInt)

    return lt100(rest) === 'zero'
      ? hundred
      : `${hundred} e ${rest}`
  }
}

export default lt1000