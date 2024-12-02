import test from 'ava'
import { validateNumber, parseNumber } from './num-util'

test('Deve validar um número', (t) => {
  t.true(validateNumber('42'))
  t.true(validateNumber('42,0'))
  t.true(validateNumber('42,42'))
  t.true(validateNumber('1000'))
  t.true(validateNumber('1234567'))
  t.true(validateNumber('1234567,42'))
  t.true(validateNumber('1.000'))
  t.true(validateNumber('1.234.567'))
  t.true(validateNumber('1.234.567,42'))
})

test('Deve validar um número (separador decimal = .)', (t) => {
  t.true(validateNumber('1000', true))
  t.true(validateNumber('42.5', true))
  t.true(validateNumber('1234567.42', true))
  t.true(validateNumber('1,234,567', true))
  t.true(validateNumber('1,234,567.42', true))
})

test('Deve validar um número (tipo number)', (t) => {
  t.true(validateNumber(3.14))
  t.true(validateNumber(42))
})

test('Deve analisar um número', (t) => {
  t.deepEqual(parseNumber('123'), { isNegative: false, integer: '123', decimal: '0' })
  t.deepEqual(parseNumber('-123'), { isNegative: true, integer: '123', decimal: '0' })
  t.deepEqual(parseNumber('123,42'), { isNegative: false, integer: '123', decimal: '42' })
  t.deepEqual(parseNumber('-42.000,42'), { isNegative: true, integer: '42000', decimal: '42' })
})

test('Deve analisar um número (separador decimal = .)', (t) => {
  t.deepEqual(parseNumber('123', true), { isNegative: false, integer: '123', decimal: '0' })
  t.deepEqual(parseNumber('-123', true), { isNegative: true, integer: '123', decimal: '0' })
  t.deepEqual(parseNumber('123.42', true), { isNegative: false, integer: '123', decimal: '42' })
  t.deepEqual(parseNumber('-42,000.42', true), { isNegative: true, integer: '42000', decimal: '42' })
})

test('Deve analisar um número (tipo number)', (t) => {
  t.deepEqual(parseNumber(3.14), { isNegative: false, integer: '3', decimal: '14' })
})
