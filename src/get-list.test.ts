import test from 'ava'
import { listLt10, listLt100, listLt1000, listGt1000, listDecimals } from './get-list.ts'

/**
 * Função: *
 */
test('Deve ser funções que retornam arrays', (t) => {
  t.true(Array.isArray(listLt10()))
  t.true(Array.isArray(listLt100()))
  t.true(Array.isArray(listLt1000()))
  t.true(Array.isArray(listGt1000()))
  t.true(Array.isArray(listDecimals()))
})

/**
 * Função: listLt100, listGt1000
 */
test('Deve retornar o número com base na localização', (t) => {
  t.is(listLt100('br')[4], 'quatorze')
  t.is(listLt100('pt')[4], 'catorze')
  t.is(listGt1000('br')[2], 'bilhões')
  t.is(listGt1000('pt')[2], 'biliões')
})
