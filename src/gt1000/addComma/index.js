import getLastNum from '../getLastNum'

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

export default addComma