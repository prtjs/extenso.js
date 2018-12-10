import lt100 from './lt100'

const writeNumbers = arr => {
  return arr.map(val => {
    return val.replace(/^(\d+)/, digit => {
      return lt100(digit)
    })
  })
}

export default writeNumbers