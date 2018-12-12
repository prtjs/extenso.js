import test from 'ava'
import fn from './'

test('should write numbers less than 1000', t => {
  // < 10
  t.is(fn(0), 'zero')
  t.is(fn(9), 'nove')

  // < 100
  t.is(fn(10), 'dez')
  t.is(fn(19), 'dezenove')
  t.is(fn(20), 'vinte')
  t.is(fn(90), 'noventa')
  t.is(fn(21), 'vinte e um')
  t.is(fn(99), 'noventa e nove')

  // < 1000
  t.is(fn(100), 'cem')
  t.is(fn(200), 'duzentos')
  t.is(fn(301), 'trezentos e um')
  t.is(fn(410), 'quatrocentos e dez')
  t.is(fn(519), 'quinhentos e dezenove')
  t.is(fn(620), 'seiscentos e vinte')
  t.is(fn(790), 'setecentos e noventa')
  t.is(fn(821), 'oitocentos e vinte e um')
  t.is(fn(999), 'novecentos e noventa e nove')
})
