import test from 'ava'
import fn from './'

test('Deve escrever números inteiros', t => {
  t.is(fn('1'), 'um')
  t.is(fn('10'), 'dez')
  t.is(fn('100'), 'cem')
  t.is(fn('1000'), 'mil')
  t.is(fn('1001'), 'mil e um')
  t.is(fn('1000000'), 'um milhão')
  t.is(fn('1000001'), 'um milhão e um')
  t.is(fn('2000000'), 'dois milhões')
  t.is(fn('2000001'), 'dois milhões e um')
})