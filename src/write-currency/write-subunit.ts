import writeInt from '../write-int'

// TODO: Melhorar isso
interface Currency {
  subunit: {
    singular: string
    plural: string
  }
}

export default (val: string, locale: 'br' | 'pt', opts: Currency) => {
  const textNumber = writeInt(val, locale)

  return parseInt(val) === 1
    ? `${textNumber} ${opts.subunit.singular}`
    : `${textNumber} ${opts.subunit.plural}`
}
