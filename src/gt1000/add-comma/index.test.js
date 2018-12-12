import test from 'ava'
import fn from './'

test('Deve adicionar vírgula no final de algumas partes', t => {
  t.deepEqual(fn([ '1 milhão', 'mil e', '42' ]), [ '1 milhão,', 'mil e', '42' ])
  t.deepEqual(fn([ '1 milhão', 'mil', '420' ]), [ '1 milhão,', 'mil', '420' ])
})
