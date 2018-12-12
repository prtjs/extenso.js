import lt1000 from '../../lt1000'

const writeNumbers = arr => {
  return arr.map(val => {
    return val.replace(/^(\d+)/, digit => {
      return lt1000(digit)
    })
  })
}

export default writeNumbers
