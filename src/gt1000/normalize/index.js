import is from 'is'

const normalize = parts => {
  if (!is.array(parts)) {
    throw new TypeError('Must be an array')
  }
  if (!parts.every(is.string)) {
    throw new TypeError('Must be an array of strings')
  }

  let regex = /^1\s(mil)$/
  let replacer = str => str.replace(regex, '$1')

  return parts.map(replacer)
}

export default normalize
