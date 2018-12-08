const singularize = arr => {
  return arr.map(curr => curr.replace(/^(1\s.*)ões/, '$1ão'))
}

export default singularize