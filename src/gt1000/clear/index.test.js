import test from 'ava'
import fn from './'

test('should remove leading zeros and unread parts', t => {
  t.deepEqual(fn([ '1 milhões', '000 mil', '000' ]), [ '1 milhões' ])
  t.deepEqual(fn([ '1 milhões', '001 mil', '000' ]), [ '1 milhões', '1 mil' ])
  t.deepEqual(fn([ '1 milhões', '001 mil', '001' ]), [ '1 milhões', '1 mil', '1' ])
})