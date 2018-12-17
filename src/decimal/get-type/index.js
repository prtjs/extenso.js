import is from 'is'

const getType = place => {
  if (!is.number(place)) {
    throw new TypeError('Must be a number')
  }
  if (is.lt(place, 1)) {
    throw new TypeError('Can not be less than 1')
  }

  switch (place % 3) {
    case 1:
      return 'décimo'
      break
    case 2:
      return 'centésimo'
      break
  }
}

export default getType