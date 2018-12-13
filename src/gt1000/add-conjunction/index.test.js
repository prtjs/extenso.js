import test from 'ava'
import fn from './'

test('Deve adicionar "e" no final de algumas partes', t => {
  t.deepEqual(fn([ '2 mil', '42' ], '2042'), [ '2 mil e', '42' ])
   t.deepEqual(fn([ '2 mil', '200' ], '2200'), [ '2 mil e', '200' ])
})

test('Deve retornar o valor sem alterações', t => {
  t.deepEqual(fn([ '2 mil', '420' ], '2420'), [ '2 mil', '420' ])
})