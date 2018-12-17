import test from 'ava'
import fn from './'

test('Deve retornar "décimo" para alguns números', t => {
  t.is(fn(7), 'décimo')
  t.is(fn(10), 'décimo')
  t.is(fn(13), 'décimo')
})

test('Deve retornar "centésimo" para alguns números', t => {
  t.is(fn(8), 'centésimo')
  t.is(fn(11), 'centésimo')
  t.is(fn(14), 'centésimo')
})