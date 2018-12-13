import is from 'is'

const clear = parts => {
  if (!is.array(parts)) {
    throw new TypeError('Must be an array')
  }
  if (!parts.every(is.string)) {
    throw new TypeError('Must be an array of strings')
  }

  return parts

    // Remove zeros à esquerda
    .map(part => part.replace(/^0+\s?/, ''))

    // Remove partes que não são lidas
    .filter(part => /^\d/.test(part))
}

export default clear
