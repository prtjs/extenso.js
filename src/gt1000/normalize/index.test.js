import test from 'ava'
import fn from './'

test('Deve substituir "1 mil" por mil', t => {
  t.deepEqual(fn([ '1 mil' ]), [ 'mil' ])
  t.deepEqual(fn([ '2 mil' ]), [ '2 mil' ])
  t.deepEqual(fn([ '10 mil' ]), [ '10 mil' ])
  t.deepEqual(fn([ '100 mil' ]), [ '100 mil' ])
})
