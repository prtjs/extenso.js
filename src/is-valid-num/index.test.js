import test from 'ava'
import fn from './'

test('Deve validar um número', t => {
  t.true(fn('42'))
  t.true(fn('42,0'))
  t.true(fn('42,42'))
  t.true(fn('1000'))
  t.true(fn('1234567'))
  t.true(fn('1234567,42'))
  t.true(fn('1.000'))
  t.true(fn('1.234.567'))
  t.true(fn('1.234.567,42'))
})