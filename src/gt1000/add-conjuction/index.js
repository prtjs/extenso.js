import is from 'is'
import getLastNum from '../get-last-num'

const addConjunction = (parts, int) => {
  if (!is.array(parts)) {
    throw new TypeError('Must be an array')
  }
  if (!parts.every(is.string)) {
    throw new TypeError('Must be an array of strings')
  }

  let lastNum = getLastNum(int)

  if (is.lt(lastNum, 100) || is.divisibleBy(lastNum, 100)) {
    return parts.map((part, i, arr) => {
      return is.equal(i, arr.length - 2)
        ? `${part} e`
        : part
    })
  }

  return parts
}

export default addConjunction
