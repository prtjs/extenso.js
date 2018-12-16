import test from 'ava'
import fn from './'

test('Deve adicionar "e" no final de algumas partes', t => {
  t.deepEqual(fn([ 'mil', '4' ], '1004'), [ 'mil e', '4' ])
  t.deepEqual(fn([ 'mil', '42' ], '1042'), [ 'mil e', '42' ])
   t.deepEqual(fn([ 'mil', '200' ], '1200'), [ 'mil e', '200' ])
})

test('Deve retornar o valor sem alterações', t => {
  t.deepEqual(fn([ 'mil', '420' ], '1420'), [ 'mil', '420' ])
})