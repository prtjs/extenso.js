import getLastNum from './getLastNum'
import split from './split'
import name from './name'
import clear from './clear'
import singularize from './singularize'
import normalizeExceptions from './normalizeExceptions'
import addComma from './addComma'
import writeNumbers from './writeNumbers'

const gt1000 = int => {
  const splitted = split(val)
  const named = name(splitted)
  const cleared = clear(named)
  const singularized = singularize(cleared)
  const normalizedExceptions = normalizeExceptions(singularized)
  const withConjuction = addConjunction(normalizedExceptions)
  const withComma = addComma(withConjuction)
  const writedNumbers = writedNumbers(withComma)

  return writedNumbers
}

export default gt1000