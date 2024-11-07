import test from 'ava'
import writeAll, { isValidOpt, toNegative } from './write-all'

test('Deve escrever números simples por extenso', (t) => {
  t.is(writeAll(0), 'zero')
  t.is(writeAll(0, { mode: 'number' }), 'zero')
  t.is(writeAll('0'), 'zero')
  t.is(writeAll('0', { mode: 'number' }), 'zero')
  t.is(writeAll(1), 'um')
  t.is(writeAll('1'), 'um')
  t.is(writeAll('1', { number: { gender: 'm' } }), 'um')
  t.is(writeAll('1', { number: { gender: 'f' } }), 'uma')
  t.is(writeAll('2'), 'dois')
  t.is(writeAll('42'), 'quarenta e dois')
  t.is(writeAll('100'), 'cem')
  t.is(writeAll('1000'), 'mil')
  t.is(writeAll('1001'), 'mil e um')
})

test('Deve escrever números negativos por extenso', (t) => {
  t.is(writeAll(-42), 'quarenta e dois negativo')
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

test('Deve escrever números com decimais separados por ponto', (t) => {
  const options = { number: { decimalSeparator: 'dot' } }

  t.is(writeAll('1', options), 'um')
  t.is(writeAll('1,001', options), 'mil e um')
  t.is(writeAll('1,000,000.14', options), 'um milhão inteiros e quatorze centésimos')
  t.is(writeAll('3.14', options), 'três inteiros e quatorze centésimos')
  t.is(writeAll(3.14, options), 'três inteiros e quatorze centésimos')
  t.is(writeAll(3.14), 'três inteiros e quatorze centésimos')
})

test('Deve escrever valores monetários por extenso', (t) => {
  t.is(writeAll(0, { mode: 'currency' }), 'zero reais')
  t.is(writeAll('1', { mode: 'currency' }), 'um real')
  t.is(writeAll('2', { mode: 'currency' }), 'dois reais')
  t.is(writeAll('-2', { mode: 'currency' }), 'dois reais negativo')
  t.is(writeAll('-2', { mode: 'currency', negative: 'informal' }), 'menos dois reais')
  t.is(writeAll('3,50', { mode: 'currency' }), 'três reais e cinquenta centavos')
  t.is(writeAll(1.123456, { mode: 'currency' }), 'um real e doze centavos')
  t.is(writeAll(1882.666, { mode: 'currency' }), 'mil oitocentos e oitenta e dois reais e sessenta e seis centavos')
  t.is(writeAll('17', { mode: 'currency' }), 'dezessete reais')
  t.is(writeAll('17', { mode: 'currency', locale: 'pt' }), 'dezassete reais')
  t.is(writeAll('1000000', { mode: 'currency' }), 'um milhão de reais')
  t.is(writeAll('2000000', { mode: 'currency' }), 'dois milhões de reais')
  t.is(writeAll('33000000', { mode: 'currency' }), 'trinta e três milhões de reais')
  t.is(writeAll('1', { mode: 'currency', currency: { type: 'EUR' } }), 'um euro')
  t.is(writeAll('1,50', { mode: 'currency', currency: { type: 'EUR' } }), 'um euro e cinquenta cêntimos')
  t.is(writeAll('100', { mode: 'currency', currency: { type: 'EUR' } }), 'cem euros')
})

test('Deve escrever conforme a escala desejada', (t) => {
  t.is(writeAll('2.000.000.001', { scale: 'short' }), 'dois bilhões e um')
  t.is(writeAll('2.000.000.001', { scale: 'short', number: { gender: 'f' } }), 'duas bilhões e uma')
  t.is(writeAll('2.000.000.001', { scale: 'long' }), 'dois mil milhões e um')
  t.is(writeAll('2.000.000.001', { scale: 'long', number: { gender: 'f' } }), 'duas mil milhões e uma')

  t.is(writeAll('2.000.000.001', { mode: 'currency', scale: 'short' }), 'dois bilhões e um reais')
  t.is(writeAll('2.000.000.001', { mode: 'currency', scale: 'long' }), 'dois mil milhões e um reais')
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
