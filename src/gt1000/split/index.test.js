import test from 'ava'
import fn from './'

test('should split numbers', t => {
  t.is(fn('1'), [ '1' ])
  t.is(fn('10'), [ '10' ])
  t.is(fn('100'), [ '100' ])
  t.is(fn('1000'), [ '1', '000' ])
  t.is(fn('1000000'), [ '1', '000', '000' ])
})