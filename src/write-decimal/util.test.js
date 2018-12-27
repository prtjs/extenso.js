import test from 'ava'
import { getType } from './util'

test('Deve retornar "décimo" ou "centésimo" para determinados números', (t) => {
  t.is(fn(7), 'décimo')
  t.is(fn(10), 'décimo')
  t.is(fn(13), 'décimo')
  t.is(fn(8), 'centésimo')
  t.is(fn(11), 'centésimo')
  t.is(fn(14), 'centésimo')
})