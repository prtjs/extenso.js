import test from 'ava'
import fn from './'

test('Deve remover zeros à esquerda', t => {
  t.deepEqual(fn([ '2 milhões', '042 mil', '001' ]), [ '2 milhões', '42 mil', '1' ])
})

test('Deve remover partes que não são lidas', t => {
  t.deepEqual(fn([ '2 milhões', '000 mil', '000' ]), [ '2 milhões' ])
})
