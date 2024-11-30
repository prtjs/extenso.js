import test from 'ava'
import { getType } from './util.ts'

test('Deve retornar "décimo" ou "centésimo" para determinados números', (t) => {
  t.is(getType(7), 'décimo')
  t.is(getType(10), 'décimo')
  t.is(getType(13), 'décimo')
  t.is(getType(8), 'centésimo')
  t.is(getType(11), 'centésimo')
  t.is(getType(14), 'centésimo')
})
