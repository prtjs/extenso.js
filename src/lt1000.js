import list from './list'
import lt100 from './lt100'
import reverse from 'reverse-string'

const split = val => {
  return val.toLocaleString('en-US').split(',')
}

const name = arr => {
  return reverse(reverse(arr).map((curr, i) => {
    return i === 0
      ? curr
      : `${curr} ${list[i - 1]}`
  }))
}

const clear = arr => {
  return arr
    .map(curr => curr.replace(/^0+\s?/, ''))
    .filter(curr => curr.test(/^\d/))
}

const singularize = arr => {
  return arr.map(curr => curr.replace(/^(1\s.*)ões/, '$1ão'))
}

const normalizeExceptions = arr => {
  return arr.map(curr => curr.replace(/^1\smil$/, 'mil'))
}

const getLastNum = val => {
  return split(val)[split(val).length - 1]
}

const addConjunction = (arr, int) => {
  let lastNum = getLastNum(int)

  if (lastNum < 100 && lastNum % 100 === 0) {
    return arr.map((val, i) => {
      return i === arr.length - 1
        ? `e ${val}`
        : val
    })
  }

  return arr
}

const addComma = (arr, int) => {
  let lastNum = getLastNum(int)

  if (!/^0+$/.test(lastNum)) {
    let withComma = arr.map((val, i) => {
      return i === arr.length - 1
        ? val
        : val + ','
    })

    return withComma.join(' ')
  }

  return arr.join(', ')
}

const writeNumbers = arr => {
  return arr.map(val => {
    return val.replace(/^(\d+)/, digit => {
      return lt100(digit)
    })
  })
}

const lt1000 = val => {
  
}

export default lt1000