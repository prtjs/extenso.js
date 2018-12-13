import is from 'is'

const addComma = parts => {
  if (!is.array(parts)) {
    throw new TypeError('Must be an array')
  }
  if (!parts.every(is.string)) {
    throw new TypeError('Must be an array of strings')
  }

  return parts.map((part, i, arr) => {
    return is.lt(i, arr.length - 2)
      ? `${part},`
      : part
  })
}

export default addComma
