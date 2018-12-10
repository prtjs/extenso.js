const normalize = arr => {
  return arr.map(curr => curr.replace(/^1\smil$/, 'mil'))
}

export default normalize