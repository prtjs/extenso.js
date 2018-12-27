import test from 'ava'
import writeCurrency, { getIsos, isValidIso, isZero } from './'

/**
 * Função: writeCurrency
 */
test('Deve escrever valores monetários por extenso', (t) => {

  // Testes com o REAL
  t.is(writeCurrency('BRL', '1'),             'um real')
  t.is(writeCurrency('BRL', '2'),             'dois reais')
  t.is(writeCurrency('BRL', '1', '50'),       'um real e cinquenta centavos')
  t.is(writeCurrency('BRL', '2', '5'),        'dois reais e cinco centavos')
  t.is(writeCurrency('BRL', '0', '1'),        'um centavo')
  t.is(writeCurrency('BRL', '0', '5'),        'cinco centavos')
  t.is(writeCurrency('BRL', undefined, '25'), 'vinte e cinco centavos')
  t.is(writeCurrency('BRL', '1000000'),       'um milhão de reais')
  t.is(writeCurrency('BRL', '2000000', '50'), 'dois milhões de reais e cinquenta centavos')

  // Testes com o REAL
  t.is(writeCurrency('EUR', '1'),             'um euro')
  t.is(writeCurrency('EUR', '2'),             'dois euros')
  t.is(writeCurrency('EUR', '1', '50'),       'um euro e cinquenta cêntimos')
  t.is(writeCurrency('EUR', '2', '5'),        'dois euros e cinco cêntimos')
  t.is(writeCurrency('EUR', '0', '1'),        'um cêntimo')
  t.is(writeCurrency('EUR', '0', '5'),        'cinco cêntimos')
  t.is(writeCurrency('EUR', undefined, '25'), 'vinte e cinco cêntimos')
  t.is(writeCurrency('EUR', '1000000'),       'um milhão de euros')
  t.is(writeCurrency('EUR', '2000000', '50'), 'dois milhões de euros e cinquenta cêntimos')
})

/**
 * Função: getIsos
 */
test('Deve retornar lista dos códigos ISO de um registro de moedas', (t) => {
  t.deepEqual(getIsos({ FOO: {}, BAR: {}, BAZ: {} }), [ 'FOO', 'BAR', 'BAZ' ])
})


/**
 * Função: isValidIso
 */
test('Deve verificar se há um código ISO registrado', (t) => {
  t.true(isValidIso('FOO', { FOO: {}, BAR: {}, BAZ: {} }))
})

/**
 * Função: isZero
 */
test('Deve verificar se um número, envolvido em string, é igual a zero', (t) => {
  t.true(isZero('0'))
  t.true(isZero('00'))
  t.true(isZero('000'))
  t.false(isZero('4'))
  t.false(isZero('42'))
  t.false(isZero('420'))
})