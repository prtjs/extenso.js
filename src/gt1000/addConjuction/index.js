import getLastNum from '../getLastNum'

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

export default addConjunction