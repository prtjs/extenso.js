import test from 'ava'
import fn from './'

test('Deve escrever números maiores que 1000', t => {
  // t.is(fn(''), '')

  t.is(fn('1001'), 'mil e um')
  t.is(fn('1100'), 'mil e cem')
  t.is(fn('1101'), 'mil cento e um')

  t.is(fn('2000'), 'dois mil')
  t.is(fn('2001'), 'dois mil e um')
  t.is(fn('2100'), 'dois mil e cem')
  t.is(fn('2101'), 'dois mil cento e um')

  t.is(fn('1000000'), 'um milhão')
  t.is(fn('1000001'), 'um milhão e um')
  t.is(fn('1000100'), 'um milhão e cem')
  t.is(fn('1000101'), 'um milhão cento e um')

  t.is(fn('1001001'), 'um milhão, mil e um')
  t.is(fn('1001100'), 'um milhão, mil e cem')
  t.is(fn('1001101'), 'um milhão, mil cento e um')

  t.is(fn('2000000'), 'dois milhões')
  t.is(fn('2000001'), 'dois milhões e um')
  t.is(fn('2000100'), 'dois milhões e cem')
  t.is(fn('2000101'), 'dois milhões cento e um')

  t.is(fn('2001001'), 'dois milhões, mil e um')
  t.is(fn('2001100'), 'dois milhões, mil e cem')
  t.is(fn('2001101'), 'dois milhões, mil cento e um')
})
