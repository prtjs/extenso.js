import test from 'ava'
import {
  Modes,
  Locales,
  Negatives,
  Scales,
  Currencies,
  Genders,
  Decimals,
  DecimalSeparators,
} from './enums/options.enum'
import writeAll, { validateOption, toNegative } from './write-all'

test('Deve escrever números simples por extenso', (t) => {
  t.is(writeAll(0), 'zero')
  t.is(writeAll(100n), 'cem')
  t.is(writeAll(10000000000000001n), 'dez quatrilhões e um')
  t.is(writeAll(0, { mode: Modes.NUMBER }), 'zero')
  t.is(writeAll('0'), 'zero')
  t.is(writeAll('0', { mode: Modes.NUMBER }), 'zero')
  t.is(writeAll(1), 'um')
  t.is(writeAll('1'), 'um')
  t.is(writeAll('1', { number: { gender: Genders.MASCULINE } }), 'um')
  t.is(writeAll('1', { number: { gender: Genders.FEMININE } }), 'uma')
  t.is(writeAll('2'), 'dois')
  t.is(writeAll('42'), 'quarenta e dois')
  t.is(writeAll('100'), 'cem')
  t.is(writeAll('1000'), 'mil')
  t.is(writeAll('1001'), 'mil e um')
})

test('Deve escrever números negativos por extenso', (t) => {
  t.is(writeAll(-42), 'quarenta e dois negativo')
  t.is(writeAll('-42'), 'quarenta e dois negativo')
  t.is(writeAll(-42n), 'quarenta e dois negativo')
  t.is(writeAll('-42', { negative: Negatives.FORMAL }), 'quarenta e dois negativo')
  t.is(writeAll('-42', { negative: Negatives.INFORMAL }), 'menos quarenta e dois')
})

test('Deve escrever números decimais por extenso', (t) => {
  t.is(writeAll('0,14'), 'quatorze centésimos')
  t.is(writeAll('0,14', { number: { decimal: Decimals.INFORMAL } }), 'zero vírgula quatorze')
  t.is(writeAll('1,14'), 'um inteiro e quatorze centésimos')
  t.is(writeAll('1,14', { number: { gender: Genders.FEMININE } }), 'uma inteira e quatorze centésimos')
  t.is(writeAll('3,14'), 'três inteiros e quatorze centésimos')
  t.is(writeAll('3,14', { locale: Locales.PT }), 'três inteiros e catorze centésimos')
})

test('Deve escrever números com decimais separados por ponto', (t) => {
  t.is(writeAll('1', { number: { decimalSeparator: DecimalSeparators.DOT } }), 'um')
  t.is(writeAll('1,001', { number: { decimalSeparator: DecimalSeparators.DOT } }), 'mil e um')
  t.is(writeAll('1,000,000.14', { number: { decimalSeparator: DecimalSeparators.DOT } }), 'um milhão inteiros e quatorze centésimos')
  t.is(writeAll('3.14', { number: { decimalSeparator: DecimalSeparators.DOT } }), 'três inteiros e quatorze centésimos')
  t.is(writeAll(3.14, { number: { decimalSeparator: DecimalSeparators.DOT } }), 'três inteiros e quatorze centésimos')
  t.is(writeAll(3.14), 'três inteiros e quatorze centésimos')
})

test('Deve escrever valores monetários por extenso', (t) => {
  t.is(writeAll(0, { mode: Modes.CURRENCY }), 'zero reais')
  t.is(writeAll('1', { mode: Modes.CURRENCY }), 'um real')
  t.is(writeAll('2', { mode: Modes.CURRENCY }), 'dois reais')
  t.is(writeAll('-2', { mode: Modes.CURRENCY }), 'dois reais negativo')
  t.is(writeAll('-2', { mode: Modes.CURRENCY, negative: Negatives.INFORMAL }), 'menos dois reais')
  t.is(writeAll('3,50', { mode: Modes.CURRENCY }), 'três reais e cinquenta centavos')
  t.is(writeAll(1.123456, { mode: Modes.CURRENCY }), 'um real e doze centavos')
  t.is(writeAll(1882.666, { mode: Modes.CURRENCY }), 'mil oitocentos e oitenta e dois reais e sessenta e seis centavos')
  t.is(writeAll('17', { mode: Modes.CURRENCY }), 'dezessete reais')
  t.is(writeAll('17', { mode: Modes.CURRENCY, locale: Locales.PT }), 'dezassete reais')
  t.is(writeAll('1000000', { mode: Modes.CURRENCY }), 'um milhão de reais')
  t.is(writeAll(1000000n, { mode: Modes.CURRENCY }), 'um milhão de reais')
  t.is(writeAll('2000000', { mode: Modes.CURRENCY }), 'dois milhões de reais')
  t.is(writeAll('33000000', { mode: Modes.CURRENCY }), 'trinta e três milhões de reais')
  t.is(writeAll('1', { mode: Modes.CURRENCY, currency: { type: Currencies.EUR } }), 'um euro')
  t.is(writeAll('1,50', { mode: Modes.CURRENCY, currency: { type: Currencies.EUR } }), 'um euro e cinquenta cêntimos')
  t.is(writeAll('100', { mode: Modes.CURRENCY, currency: { type: Currencies.EUR } }), 'cem euros')
})

test('Deve escrever conforme a escala desejada', (t) => {
  t.is(writeAll('2.000.000.001', { scale: Scales.SHORT }), 'dois bilhões e um')
  t.is(writeAll(2000000001n, { scale: Scales.SHORT }), 'dois bilhões e um')
  t.is(writeAll('2.000.000.001', { scale: Scales.SHORT, number: { gender: Genders.FEMININE } }), 'duas bilhões e uma')
  t.is(writeAll('2.000.000.001', { scale: Scales.LONG }), 'dois mil milhões e um')
  t.is(writeAll('2.000.000.001', { scale: Scales.LONG, number: { gender: Genders.FEMININE } }), 'duas mil milhões e uma')

  t.is(writeAll('2.000.000.001', { mode: Modes.CURRENCY, scale: Scales.SHORT }), 'dois bilhões e um reais')
  t.is(writeAll('2.000.000.001', { mode: Modes.CURRENCY, scale: Scales.LONG }), 'dois mil milhões e um reais')
})

test('Deve verificar se uma opção é válida', (t) => {
  t.true(validateOption('foo', [ 'foo', 'bar', 'baz' ]))
  t.false(validateOption('bar', [ 'foo', 'baz' ]))
})

test('Deve passar para o negativo um número escrito por extenso', (t) => {
  t.is(toNegative('um'), 'um negativo')
  t.is(toNegative('um', 'formal'), 'um negativo')
  t.is(toNegative('um', Negatives.INFORMAL), 'menos um')
})
