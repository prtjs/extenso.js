import test from 'ava'
import fn from './'

test('should split numbers', t => {
  t.deepEqual(fn('1'), [ '1' ])
  t.deepEqual(fn('10'), [ '10' ])
  t.deepEqual(fn('100'), [ '100' ])
  t.deepEqual(fn('1000'), [ '1', '000' ])
  t.deepEqual(fn('1000000'), [ '1', '000', '000' ])
})