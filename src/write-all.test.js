import test from 'ava'
import writeAll, { isValidOpt, toNegative } from './write-all'

test('Deve escrever números simples por extenso', (t) => {
  t.is(writeAll('1'), 'um')
  t.is(writeAll('1', { number: { gender: 'm' } }), 'um')
  t.is(writeAll('1', { number: { gender: 'f' } }), 'uma')
  t.is(writeAll('2'), 'dois')
  t.is(writeAll('42'), 'quarenta e dois')
  t.is(writeAll('100'),'cem')
  t.is(writeAll('1000'), 'mil')
  t.is(writeAll('1001'), 'mil e um')
})

test('Deve escrever números negativos por extenso', (t) => {
  t.is(writeAll('-42'), 'quarenta e dois negativo')
  t.is(writeAll('-42', { negative: 'formal' }), 'quarenta e dois negativo')
  t.is(writeAll('-42', { negative: 'informal' }), 'menos quarenta e dois')
})

test('Deve escrever números decimais por extenso', (t) => {
  t.is(writeAll('0,14'), 'quatorze centésimos')
  t.is(writeAll('0,14', { number: { decimal: 'informal' } }), 'zero vírgula quatorze')
  t.is(writeAll('1,14'), 'um inteiro e quatorze centésimos')
  t.is(writeAll('1,14', { number: { gender: 'f' } }), 'uma inteira e quatorze centésimos')
  t.is(writeAll('3,14'), 'três inteiros e quatorze centésimos')
  t.is(writeAll('3,14', { locale: 'pt' }), 'três inteiros e catorze centésimos')
})

test('Deve escrever valores monetários por extenso', (t) => {
  t.is(writeAll('1', { mode: 'currency' }), 'um real')
  t.is(writeAll('2', { mode: 'currency' }), 'dois reais')
  t.is(writeAll('-2', { mode: 'currency' }), 'dois reais negativo')
  t.is(writeAll('-2', { mode: 'currency', negative: 'informal' }), 'menos dois reais')
  t.is(writeAll('3,50', { mode: 'currency' }), 'três reais e cinquenta centavos')
  t.is(writeAll('17', { mode: 'currency' }), 'dezessete reais')
  t.is(writeAll('17', { mode: 'currency', locale: 'pt' }), 'dezassete reais')
  t.is(writeAll('1000000', { mode: 'currency' }), 'um milhão de reais')
  t.is(writeAll('1', { mode: 'currency', currency: { type: 'EUR' } }), 'um euro')
  t.is(writeAll('1,50', { mode: 'currency', currency: { type: 'EUR' } }), 'um euro e cinquenta cêntimos')
  t.is(writeAll('100', { mode: 'currency', currency: { type: 'EUR' } }), 'cem euros')
})

test('Deve verificar se uma opção é válida', (t) => {
  t.true(isValidOpt('foo', [ 'foo', 'bar', 'baz' ]))
  t.false(isValidOpt('bar', [ 'foo', 'baz' ]))
})

test('Deve passar para o negativo um número escrito por extenso', (t) => {
  t.is(toNegative('um'), 'um negativo')
  t.is(toNegative('um', 'formal'), 'um negativo')
  t.is(toNegative('um', 'informal'), 'menos um')
})