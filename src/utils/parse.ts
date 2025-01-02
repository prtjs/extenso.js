import DecimalSeparators from '../ts/decimal-separators.enum'

const parse = (input: string, decimalSeparator: DecimalSeparators = DecimalSeparators.DOT): {
    integer: string
    decimal: string
} => {
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

export default parse