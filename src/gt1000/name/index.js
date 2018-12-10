import reverse from '@arr/reverse'
import { gt1000 as list } from '../../list'

const name = arr => {
  return reverse(reverse(arr).map((curr, i) => {
    return Boolean(i)
      ? `${curr} ${list[i - 1]}`
      : curr
  }))
}

export default name