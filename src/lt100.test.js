import test from 'ava'
import lt100 from './lt100'

test('Deve escrever números menores que cem', (t) => {
  t.is(fn(0),  'zero')
  t.is(fn(5),  'cinco')
  t.is(fn(9),  'nove')
  t.is(fn(10), 'dez')
  t.is(fn(19), 'dezenove')
  t.is(fn(20), 'vinte')
  t.is(fn(90), 'noventa')
  t.is(fn(21), 'vinte e um')
  t.is(fn(99), 'noventa e nove')
})