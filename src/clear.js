const clear = arr => {
  return arr
    .map(curr => curr.replace(/^0+\s?/, ''))
    .filter(curr => curr.test(/^\d/))
}

export default clear