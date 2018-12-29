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
  t.is(writeInt('1', 'br'),       'um')
  t.is(writeInt('10', 'br'),      'dez')
  t.is(writeInt('19', 'br'),      'dezenove')
  t.is(writeInt('19', 'pt'),      'dezanove')
  t.is(writeInt('100', 'br'),     'cem')
  t.is(writeInt('1000', 'br'),    'mil')
  t.is(writeInt('1001', 'br'),    'mil e um')
  t.is(writeInt('1000000', 'br'), 'um milhão')
  t.is(writeInt('1000001', 'br'), 'um milhão e um')
  t.is(writeInt('2000000', 'br'), 'dois milhões')
  t.is(writeInt('2000001', 'br'), 'dois milhões e um')
})