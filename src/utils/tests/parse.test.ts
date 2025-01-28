import test from 'ava'
import parse from '../parse'
import DecimalSeparators from '../../ts/enum/decimal-separators.enum'

test('parse(): integer', (t) => {
    t.deepEqual(parse('1'), { integer: '1', decimal: '0' })
    t.deepEqual(parse('10'), { integer: '10', decimal: '0' })
    t.deepEqual(parse('100'), { integer: '100', decimal: '0' })
    t.deepEqual(parse('1000'), { integer: '1000', decimal: '0' })
})

test('parse(): decimal', (t) => {
    t.deepEqual(parse('.5'), { integer: '0', decimal: '5' })
    t.deepEqual(parse('0.5'), { integer: '0', decimal: '5' })
    t.deepEqual(parse('1.5'), { integer: '1', decimal: '5' })
    t.deepEqual(parse('1.50'), { integer: '1', decimal: '50' })
    t.deepEqual(parse('1.05'), { integer: '1', decimal: '05' })
    t.deepEqual(parse('10.5'), { integer: '10', decimal: '5' })
    t.deepEqual(parse('100.05'), { integer: '100', decimal: '05' })
    t.deepEqual(parse('-1.5'), { integer: '1', decimal: '5' })
    t.deepEqual(parse('-10.5'), { integer: '10', decimal: '5' })
    t.deepEqual(parse('-100.05'), { integer: '100', decimal: '05' })
    t.deepEqual(parse('-.5'), { integer: '0', decimal: '5' })
    t.deepEqual(parse('-1.5  '), { integer: '1', decimal: '5' })
    t.deepEqual(parse('  -10.5'), { integer: '10', decimal: '5' })
    t.deepEqual(parse('-  100.05'), { integer: '100', decimal: '05' })
    t.deepEqual(parse('   - .5'), { integer: '0', decimal: '5' })
})

test('parse(): string', (t) => {
    t.deepEqual(parse('1,5', DecimalSeparators.COMMA), { integer: '1', decimal: '5' })
    t.deepEqual(parse('1,50', DecimalSeparators.COMMA), { integer: '1', decimal: '50' })
    t.deepEqual(parse('1,05', DecimalSeparators.COMMA), { integer: '1', decimal: '05' })
    t.deepEqual(parse('10,5', DecimalSeparators.COMMA), { integer: '10', decimal: '5' })
    t.deepEqual(parse('100,05', DecimalSeparators.COMMA), { integer: '100', decimal: '05' })
})

test('parse(): invalid input', (t) => {
    t.throws(() => parse('invalid'), { message: 'Invalid integer number' })
    t.throws(() => parse('abc'), { message: 'Invalid integer number' })
    t.throws(() => parse('12.34.56'), { message: 'Invalid number' })
    t.throws(() => parse('12.34.56.78'), { message: 'Invalid number' })
    t.throws(() => parse('12,34-56'), { message: 'Invalid integer number' })
    t.throws(() => parse('12.34-56'), { message: 'Invalid decimal number' })
    t.throws(() => parse(''), { message: 'Invalid number' })
    t.throws(() => parse('  '), { message: 'Invalid number' })
})
