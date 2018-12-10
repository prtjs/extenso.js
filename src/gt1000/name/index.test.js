import test from 'ava'
import fn from './'

test('should add the name of each part', t => {
  t.deepEqual(fn([ '1', '000', '000']), [ '1 milhões', '000 mil', '000' ])
  t.deepEqual(fn([ '1', '000' ]), [ '1 mil', '000' ])
})