import is from 'is'
import lt1000 from '../../lt1000'

const write = parts => {
  if (!is.array(parts)) {
    throw new TypeError('Must be an array')
  }
  if (!parts.every(is.string)) {
    throw new TypeError('Must be an array of strings')
  }

  return parts.map(part => {
    return part.replace(/^(\d+)/, digit => {
      let int = parseInt(digit)

      return lt1000(int)
    })
  })
}

export default write
