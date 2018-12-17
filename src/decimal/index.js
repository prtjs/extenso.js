import is from 'is'
import list from './list'
import getType from './get-type'
import pluralize from '../pluralize'
import writeInt from '../write-int'

const decimal = int => {
  if (!is.string(int)) {
    throw new TypeError('Must be a string')
  }
  if (isNaN(int)) {
    throw new TypeError('Can not be NaN')
  }

  let len = int.length
  let intNum = parseInt(int) // Inseguro!
  let intNormalized = int.replace(/^0+/, '')
  let intText = writeInt(intNormalized)
  let intType = pluralize(getType(len), intNum)
  let intTypeOf = list[Math.floor(len / 3 - 1)]

  if (is.lt(len, 3)) {
    return `${intText} ${intType}`
  }
  if (is.divisibleBy(len, 3)) {
    return `${intText} ${pluralize(intTypeOf, intNum)}`
  }
  
  return `${intText} ${intType} de ${intTypeOf}`
}

export default decimal