import writeInt from '../write-int'

interface Options {
  singular: string
  plural: string
}

export default (val: string, locale: 'br' | 'pt', opts: Options, scale?: string) => {
  const number = parseInt(val)
  const text = writeInt(val, locale, 'm', scale)

  if (number === 1) return `${text} ${opts.singular}`
  if (number >= 1e+6) {
    const numStr = number.toString()
    const hundreds = parseInt(numStr.substr(-6, 3))
    const dozens = parseInt(numStr.substr(-3, 3))

    if (hundreds === 0 && dozens === 0) {
      return `${text} de ${opts.plural}`
    }
  }

  return `${text} ${opts.plural}`
}
