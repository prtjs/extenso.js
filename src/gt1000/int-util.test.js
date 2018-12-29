import test from 'ava'
import { split, getLastNumber } from './int-util'

/**
 * Função: split
 */
test('Deve separar as partes de um número', (t) => {
  t.deepEqual(split('1'),       [ '1' ])
  t.deepEqual(split('10'),      [ '10' ])
  t.deepEqual(split('100'),     [ '100' ])
  t.deepEqual(split('1000'),    [ '1', '000' ])
  t.deepEqual(split('1000000'), [ '1', '000', '000' ])
})

/**
 * Função: getLastNumber
 */
test('Deve retornar a última parte de um número', (t) => {
  t.is(getLastNumber('1000'),      0)
  t.is(getLastNumber('1042'),      42)
  t.is(getLastNumber('314000999'), 999)
})
