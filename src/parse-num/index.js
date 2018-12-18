import is from 'is'

const parseNum = val => {
  let isNegative = /^-/.test(val)
  let normalized = val.replace(/(-|\.)/g, '')
  let parts = normalized.split(',')

  if (is.equal(parts.length, 1)) {
    return {
      isNegative,
      integer: normalized,
      decimal: '0'
    }
  }

  return {
    isNegative,
    integer: parts[0].replace(/^0+$/, '0'),
    decimal: parts[1].replace(/^0+$/, '0')
  }
}

export default parseNum