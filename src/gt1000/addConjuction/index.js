import getLastNum from '../getLastNum'

const addConjunction = (arr, int) => {
  let lastNum = getLastNum(int)

  if (lastNum < 100 && lastNum % 100 === 0) {
    return arr.map((val, i, self) => {
      return i === self.length - 2
        ? `${val} e`
        : val
    })
  }

  return arr
}

export default addConjunction