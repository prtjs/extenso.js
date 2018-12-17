import is from 'is'

const pluralize = (string, count) => {
  if (is.undef(string)) {
    return undefined
  }
  if (!is.string(string)) {
    throw new TypeError('Must be a string')
  }
  if (!is.number(count)) {
    throw new TypeError('Must be a number')
  }
  if (is.lt(count, 1)) {
    throw new TypeError('Can not be than 1')
  }

  return is.gt(count, 1)
    ? `${string}s`
    : string
}

export default pluralize