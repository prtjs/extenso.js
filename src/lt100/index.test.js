import test from 'ava'
import fn from './'

test('should write numbers less than 100', t => {

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
})