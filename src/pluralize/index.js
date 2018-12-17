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
  if (is.lt(count, 0)) {
    throw new TypeError('Must be a positive number')
  }

  return is.gt(count, 1)
    ? `${string}s`
    : string
}

export default pluralize