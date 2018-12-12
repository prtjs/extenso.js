const addComma = (arr, ints) => {
  return arr.map((val, i, self) => {
    return i < self.length - 2
      ? val + ','
      : val
  })
}

export default addComma
