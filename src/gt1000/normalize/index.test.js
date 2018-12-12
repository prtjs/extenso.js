import test from 'ava'
import fn from './'

test('should replace "1 mil" by "mil"', t => {
  t.deepEqual(fn([ '1 mil' ]), [ 'mil' ])
})
