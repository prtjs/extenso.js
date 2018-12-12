import test from 'ava'
import fn from './'

test('Deve adicionar o nome de cada parte', t => {
  t.deepEqual(fn([ '1', '000', '000']), [ '1 milhões', '000 mil', '000' ])
  t.deepEqual(fn([ '1', '000' ]), [ '1 mil', '000' ])
})
