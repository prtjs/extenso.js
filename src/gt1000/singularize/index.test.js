import test from 'ava'
import fn from './'

test('Deve singularizar algumas partes', t => {
  t.deepEqual(fn([ '1 milhões' ]), [ '1 milhão' ])
  t.deepEqual(fn([ '1 bilhões' ]), [ '1 bilhão' ])
  t.deepEqual(fn([ '2 milhões' ]), [ '2 milhões' ])
  t.deepEqual(fn([ '2 bilhões' ]), [ '2 bilhões' ])
})
