import is from 'is'
import reverse from '@arr/reverse'
import list from '../list'

const name = parts => {
  if (is.gt(parts.length, 14)) {
    throw new Error('Unsupported number')
  }

  return reverse(reverse(parts).map((part, i) => {
    let name = list[i - 1]

    return name
      ? `${part} ${name}`
      : part
  }))
}

export default name
