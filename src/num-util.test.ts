import test from 'ava'
import {
  DecimalSeparators,
} from './enums/options.enum'
import { validateNumber, parser } from './num-util'

test('Deve validar um número', (t) => {
  t.true(validateNumber('42', DecimalSeparators.COMMA))
  t.true(validateNumber('42,0', DecimalSeparators.COMMA))
  t.true(validateNumber('42,42', DecimalSeparators.COMMA))
  t.true(validateNumber('1000', DecimalSeparators.COMMA))
  t.true(validateNumber('1234567', DecimalSeparators.COMMA))
  t.true(validateNumber('1234567,42', DecimalSeparators.COMMA))
  t.true(validateNumber('1.000', DecimalSeparators.COMMA))
  t.true(validateNumber('1.234.567', DecimalSeparators.COMMA))
  t.true(validateNumber('1.234.567,42', DecimalSeparators.COMMA))
})

test('Deve validar um número (separador decimal = .)', (t) => {
  t.true(validateNumber('1000', DecimalSeparators.DOT))
  t.true(validateNumber('42.5', DecimalSeparators.DOT))
  t.true(validateNumber('1234567.42', DecimalSeparators.DOT))
  t.true(validateNumber('1,234,567', DecimalSeparators.DOT))
  t.true(validateNumber('1,234,567.42', DecimalSeparators.DOT))
})

test('Deve validar um número (tipo number)', (t) => {
  t.true(validateNumber(3.14, DecimalSeparators.COMMA))
  t.true(validateNumber(42, DecimalSeparators.COMMA))
})

test('Deve analisar um número', (t) => {
  t.deepEqual(parser('123', DecimalSeparators.COMMA), { isNegative: false, integer: '123', decimal: '0' })
  t.deepEqual(parser('-123', DecimalSeparators.COMMA), { isNegative: true, integer: '123', decimal: '0' })
  t.deepEqual(parser('123,42', DecimalSeparators.COMMA), { isNegative: false, integer: '123', decimal: '42' })
  t.deepEqual(parser('-42.000,42', DecimalSeparators.COMMA), { isNegative: true, integer: '42000', decimal: '42' })
})

test('Deve analisar um número (separador decimal = .)', (t) => {
  t.deepEqual(parser('123', DecimalSeparators.DOT), { isNegative: false, integer: '123', decimal: '0' })
  t.deepEqual(parser('-123', DecimalSeparators.DOT), { isNegative: true, integer: '123', decimal: '0' })
  t.deepEqual(parser('123.42', DecimalSeparators.DOT), { isNegative: false, integer: '123', decimal: '42' })
  t.deepEqual(parser('-42,000.42', DecimalSeparators.DOT), { isNegative: true, integer: '42000', decimal: '42' })
})

test('Deve analisar um número (tipo number)', (t) => {
  t.deepEqual(parser(3.14, DecimalSeparators.COMMA), { isNegative: false, integer: '3', decimal: '14' })
})
