import test from 'ava'
import writeInt, { toFemale } from './write-int'

/**
 * Função: toFemale
 */
test('Deve passar os números para o feminino', (t) => {
  t.is(toFemale('vinte e um'),      'vinte e uma')
  t.is(toFemale('quarenta e dois'), 'quarenta e duas')
})

/**
 * Função: writeInt
 */
test('Deve escrever números inteiros', (t) => {
  t.is(writeInt('1'),       'um')
  t.is(writeInt('10'),      'dez')
  t.is(writeInt('100'),     'cem')
  t.is(writeInt('1000'),    'mil')
  t.is(writeInt('1001'),    'mil e um')
  t.is(writeInt('1000000'), 'um milhão')
  t.is(writeInt('1000001'), 'um milhão e um')
  t.is(writeInt('2000000'), 'dois milhões')
  t.is(writeInt('2000001'), 'dois milhões e um')
})