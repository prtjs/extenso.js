import is from 'is'
import pluralize from '../../pluralize'
import lt100 from '../../lt100'

const writeCents = cents => {
  if (!is.number(cents)) {
    throw new TypeError('Must be a string')
  }
  if (is.lt(0)) {
    throw new TypeError('Must be a positive number')
  }
  if (is.gt(99)) {
    throw new TypeError('Can not be greater than 99')
  }

  let numName = lt100(cents)
  let centsName = pluralize('centavo', cents)

  return `${numName} ${centsName}`
}

export default writeCents