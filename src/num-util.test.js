import test from 'ava'
import { isValidNumber, parseNumber } from './num-util'

/**
 * Função: isValidNumber
 */
test('Deve validar um número', (t) => {
  t.true(isValidNumber('42'))
  t.true(isValidNumber('42,0'))
  t.true(isValidNumber('42,42'))
  t.true(isValidNumber('1000'))
  t.true(isValidNumber('1234567'))
  t.true(isValidNumber('1234567,42'))
  t.true(isValidNumber('1.000'))
  t.true(isValidNumber('1.234.567'))
  t.true(isValidNumber('1.234.567,42'))

  /*
   * Number
   */
  t.true(isValidNumber(3.14))
  t.true(isValidNumber(42))

  /*
   * Ponto como separador decimal
   */
  t.true(isValidNumber('1000', true))
  t.true(isValidNumber('42.5', true))
  t.true(isValidNumber('1234567.42', true))
  t.true(isValidNumber('1,234,567', true))
  t.true(isValidNumber('1,234,567.42', true))
})

/**
 * Função: parseNumber
 */
test('Deve fazer um análise do número', (t) => {
  t.deepEqual(parseNumber('123'),        { isNegative: false, integer: '123', decimal: '0' })
  t.deepEqual(parseNumber('-123'),       { isNegative: true, integer: '123', decimal: '0' })
  t.deepEqual(parseNumber('123,42'),     { isNegative: false, integer: '123', decimal: '42' })
  t.deepEqual(parseNumber('-42.000,42'), { isNegative: true, integer: '42000', decimal: '42' })

  /*
   * Float
   */
  t.deepEqual(parseNumber(3.14), { isNegative: false, integer: '3', decimal: '14' })

  /*
   * Ponto como separador decimal
   */
  t.deepEqual(parseNumber('123', true),        { isNegative: false, integer: '123', decimal: '0' })
  t.deepEqual(parseNumber('-123', true),       { isNegative: true, integer: '123', decimal: '0' })
  t.deepEqual(parseNumber('123.42', true),     { isNegative: false, integer: '123', decimal: '42' })
  t.deepEqual(parseNumber('-42,000.42', true), { isNegative: true, integer: '42000', decimal: '42' })
})