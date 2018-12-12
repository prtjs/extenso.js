import test from 'ava'
import fn from './'

test('Deve escrever números menores que 10', t => {
  t.is(fn(0), 'zero')
  t.is(fn(9), 'nove')
})
