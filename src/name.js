import reverse from 'reverse-string'
import { gt1000 as list } from './list'

const name = arr => {
  return reverse(reverse(arr).map((curr, i) => {
    return i === 0
      ? curr
      : `${curr} ${list[i - 1]}`
  }))
}

export default name