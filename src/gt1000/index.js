import is from 'is'
import split from './split'
import name from './name'
import clear from './clear'
import singularize from './singularize'
import normalize from './normalize'
import addConjunction from './add-conjunction'
import addComma from './add-comma'
import write from './write'

const joinArr = arr => arr.join(' ')

const gt1000 = int => {
  if (!is.string(int)) {
    throw new TypeError('Must be a string')
  }
  if (isNaN(int)) {
    throw new TypeError('Can not be NaN')
  }
  if (!is.integer(Number(int))) {
    throw new TypeError('Must be an integer')
  }
  if (!is.gt(parseInt(int), 1000)) {
    throw new TypeError('Must be greater than 1000')
  }

  let splitted = split(int)
  let named = name(splitted)
  let cleared = clear(named)
  let singularized = singularize(cleared)
  let normalized = normalize(singularized)
  let withConjunction = addConjunction(normalized, int)
  let withComma = addComma(withConjunction)
  let writed = write(withComma)

  return joinArr(writed)
}

export default gt1000
