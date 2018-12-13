import is from 'is'

const singularize = parts => {
  if (!is.array(parts)) {
    throw new TypeError('Must be an array')
  }
  if (!parts.every(is.string)) {
    throw new TypeError('Must be an array of strings')
  }

  let regex = /^(1\s.*)ões/
  let replacer = str => str.replace(regex, '$1ão')

  return parts.map(replacer)
}

export default singularize
