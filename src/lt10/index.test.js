import test from 'ava'
import fn from './'

test('should write numbers less than 10', t => {
  t.is(fn(0), 'zero')
  t.is(fn(9), 'nove')
})