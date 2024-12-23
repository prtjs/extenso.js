import { DecimalSeparators } from "../enums/options.enum"

interface Parser {
  integer: string
  decimal: string
}

const parser = (input: string | number, decimalSeparator: DecimalSeparators): Parser => {
  if (typeof input === 'number') {
    input = input.toString()
    decimalSeparator = DecimalSeparators.DOT
  }

  input = input.trim()

  const separatorFor = {
    decimal: decimalSeparator === DecimalSeparators.DOT ? '.' : ',',
    thousands: decimalSeparator === DecimalSeparators.DOT ? ',' : '.',
  }
  const number = input.replace(RegExp(`(-|\\${separatorFor.thousands})`, 'g'), '')

  if (!number.includes(separatorFor.decimal)) {
    return {
      integer: number,
      decimal: '0',
    }
  }

  const [integer, decimal] = number
    .split(separatorFor.decimal)
    .map((number) => number.replace(/^0+$/, '0'))

  return {
    integer,
    decimal,
  }
}

export default parser