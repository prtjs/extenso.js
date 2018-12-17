import test from 'ava'
import fn from './'

test('Deve pluralizar qualquer palavra com base na quantidade', t => {
  t.is(fn('foo', 1), 'foo')
  t.is(fn('foo', 2), 'foos')
})