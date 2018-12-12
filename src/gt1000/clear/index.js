const clear = arr => {
  return arr
    .map(curr => curr.replace(/^0+\s?/, ''))
    .filter(curr => /^\d/.test(curr))
}

export default clear
