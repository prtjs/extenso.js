import { lt100 as list } from './list'
import lt10 from './lt10'

const lt100 = val => {
  let d = list[val / 10 + 8]
  let un = lt10(val % 10)

  if (val < 20) return list[val - 10]
  if (un === 'zero') return d

  return `${d} e ${un}`
}

export default lt100