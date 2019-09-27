import test from 'ava'
import { split, getLastNumber } from './int-util'

/**
 * Função: split
 */
test('Deve separar as partes de um número', t => {
  t.deepEqual(split(10 ** 0),          ['1']);
  t.deepEqual(split(10 ** 1),          ['10']);
  t.deepEqual(split(10 ** 2),          ['100']);
  t.deepEqual(split(10 ** 3),          ['1', '000']);
  t.deepEqual(split(10 ** 6),          ['1', '000', '000']);
  t.deepEqual(split(10 ** 6, 'long'),  ['1', '000', '000']);

  t.deepEqual(split(10 ** 9, 'long'),        ['1000', '000', '000']);
  t.deepEqual(split(10 ** 9, 'long', true),  ['1 000', '000', '000']);
  t.deepEqual(split(10 ** 10, 'long', true), ['10 000', '000', '000']);
  t.deepEqual(split(10 ** 11, 'long', true), ['100 000', '000', '000']);
  t.deepEqual(split(10 ** 12, 'long', true), ['1', '000 000', '000', '000']);
});

/**
 * Função: getLastNumber
 */
test('Deve retornar a última parte de um número', (t) => {
  t.is(getLastNumber('1000'),      0)
  t.is(getLastNumber('1042'),      42)
  t.is(getLastNumber('314000999'), 999)
})
