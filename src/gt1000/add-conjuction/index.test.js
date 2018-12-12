import test from 'ava'
import fn from './'

test('should add "e" between some parts', t => {
  t.deepEqual(fn([ '2 mil', '42' ], '2042'), [ '2 mil', '42' ])
  // t.deepEqual(fn([ '2 mil', '200' ], '2200'), [ '2 mil e', '200' ])
  // t.deepEqual(fn([ '2 mil', '420' ], '2420'), [ '2 mil', '420' ])
})
