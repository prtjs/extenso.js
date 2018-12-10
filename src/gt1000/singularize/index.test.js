import test from 'ava'
import fn from './'

test('should singularize some parts', t => {
  t.deepEqual(fn([ '1 milhões' ]), [ '1 milhão' ])
  t.deepEqual(fn([ '100 milhões' ]), [ '100 milhões' ])
})