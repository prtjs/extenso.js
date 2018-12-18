import test from 'ava'
import fn from './'

test('Deve escrever valores em reais', t => {
  t.is(fn('1', 0), 'um real')
  t.is(fn('2', 0), 'dois reais')
  t.is(fn('0', 25), 'vinte e cinco centavos')
  t.is(fn('1', 25), 'um real e vinte e cinco centavos')
  t.is(fn('2', 25), 'dois reais e vinte e cinco centavos')
})