import test from 'ava'
import fn from './'

test('Deve escrever a parte dos centavos', t => {
  t.is(fn(1), 'um centavo')
  t.is(fn(5), 'cinco centavos')
  t.is(fn(10), 'dez centavos')
  t.is(fn(25), 'vinte e cinco centavos')
  t.is(fn(50), 'cinquenta centavos')
})