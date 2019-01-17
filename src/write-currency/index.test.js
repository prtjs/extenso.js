import test from 'ava'
import writeCurrency, { getIsos, isValidIso, isZero } from './'

/**
 * Função: writeCurrency
 */
test('Deve escrever valores monetários por extenso', (t) => {

  // Testes com o REAL
  t.is(writeCurrency('BRL', 'br', '1'),             'um real')
  t.is(writeCurrency('BRL', 'br', '2'),             'dois reais')
  t.is(writeCurrency('BRL', 'br', '1', '50'),       'um real e cinquenta centavos')
  t.is(writeCurrency('BRL', 'br', '2', '5'),        'dois reais e cinco centavos')
  t.is(writeCurrency('BRL', 'br', '0', '1'),        'um centavo')
  t.is(writeCurrency('BRL', 'br', '0', '5'),        'cinco centavos')
  t.is(writeCurrency('BRL', 'br', undefined, '25'), 'vinte e cinco centavos')
  t.is(writeCurrency('BRL', 'br', '1000000'),       'um milhão de reais')
  t.is(writeCurrency('BRL', 'br', '2000000', '50'), 'dois milhões de reais e cinquenta centavos')

  // Testes com o EURO
  t.is(writeCurrency('EUR', 'pt', '1'),             'um euro')
  t.is(writeCurrency('EUR', 'pt', '2'),             'dois euros')
  t.is(writeCurrency('EUR', 'br', '14', '50'),      'quatorze euros e cinquenta cêntimos')
  t.is(writeCurrency('EUR', 'pt', '14', '50'),      'catorze euros e cinquenta cêntimos')
  t.is(writeCurrency('EUR', 'pt', '1', '50'),       'um euro e cinquenta cêntimos')
  t.is(writeCurrency('EUR', 'pt', '2', '5'),        'dois euros e cinco cêntimos')
  t.is(writeCurrency('EUR', 'pt', '0', '1'),        'um cêntimo')
  t.is(writeCurrency('EUR', 'pt', '0', '5'),        'cinco cêntimos')
  t.is(writeCurrency('EUR', 'pt', undefined, '25'), 'vinte e cinco cêntimos')
  t.is(writeCurrency('EUR', 'pt', '1000000'),       'um milhão de euros')
  t.is(writeCurrency('EUR', 'pt', '2000000', '50'), 'dois milhões de euros e cinquenta cêntimos')

    // Testes com o ESCUDO
  t.is(writeCurrency('ECV', 'pt', '1'),             'um escudo')
  t.is(writeCurrency('ECV', 'pt', '2'),             'dois escudos')
  t.is(writeCurrency('ECV', 'br', '14', '50'),      'quatorze escudos e cinquenta cêntimos')
  t.is(writeCurrency('ECV', 'pt', '14', '50'),      'catorze escudos e cinquenta cêntimos')
  t.is(writeCurrency('ECV', 'pt', '1', '50'),       'um escudo e cinquenta cêntimos')
  t.is(writeCurrency('ECV', 'pt', '2', '5'),        'dois escudos e cinco cêntimos')
  t.is(writeCurrency('ECV', 'pt', '0', '1'),        'um cêntimo')
  t.is(writeCurrency('ECV', 'pt', '0', '5'),        'cinco cêntimos')
  t.is(writeCurrency('ECV', 'pt', undefined, '25'), 'vinte e cinco cêntimos')
  t.is(writeCurrency('ECV', 'pt', '1000000'),       'um milhão de escudos')
  t.is(writeCurrency('ECV', 'pt', '2000000', '50'), 'dois milhões de escudos e cinquenta cêntimos')
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