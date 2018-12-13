import is from 'is'
import reverse from '@arr/reverse'
import { gt1000 as list } from '../../list'

const name = parts => {
  return reverse(reverse(parts).map((part, i) => {
    let name = list[i - 1]

    return is.gt(i, 0)
      ? `${part} ${name}`
      : part
  }))
}

export default name
