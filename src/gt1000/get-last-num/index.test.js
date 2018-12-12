import test from 'ava'
import fn from './'

test('should return the last part of a number', t => {
  t.is(fn('1000'), 0)
  t.is(fn('1042'), 42)
  t.is(fn('314000999'), 999)
})
