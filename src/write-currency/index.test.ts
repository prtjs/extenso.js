import test from 'ava'
import { Currencies, Locales } from '../enums/options.enum'
import writeCurrency, { isZero } from './index'

/**
 * Função: writeCurrency
 */
test('Deve escrever valores monetários por extenso', (t) => {
  // Testes com o REAL
  t.is(writeCurrency(Currencies.BRL, Locales.BR, '0'), 'zero reais')
  t.is(writeCurrency(Currencies.BRL, Locales.BR, '1'), 'um real')
  t.is(writeCurrency(Currencies.BRL, Locales.BR, '2'), 'dois reais')
  t.is(writeCurrency(Currencies.BRL, Locales.BR, '1', '50'), 'um real e cinquenta centavos')
  t.is(writeCurrency(Currencies.BRL, Locales.BR, '2', '5'), 'dois reais e cinquenta centavos')
  t.is(writeCurrency(Currencies.BRL, Locales.BR, '0', '1'), 'dez centavos')
  t.is(writeCurrency(Currencies.BRL, Locales.BR, '0', '5'), 'cinquenta centavos')
  t.is(writeCurrency(Currencies.BRL, Locales.BR, '0', '05'), 'cinco centavos')
  t.is(writeCurrency(Currencies.BRL, Locales.BR, undefined, '25'), 'vinte e cinco centavos')
  t.is(writeCurrency(Currencies.BRL, Locales.BR, '1000000'), 'um milhão de reais')
  t.is(writeCurrency(Currencies.BRL, Locales.BR, '1000011'), 'um milhão e onze reais')
  t.is(writeCurrency(Currencies.BRL, Locales.BR, '2000000', '50'), 'dois milhões de reais e cinquenta centavos')

  // Testes com o ESCUDO
  t.is(writeCurrency(Currencies.CVE, Locales.PT, '1'), 'um escudo')
  t.is(writeCurrency(Currencies.CVE, Locales.PT, '2'), 'dois escudos')
  t.is(writeCurrency(Currencies.CVE, Locales.BR, '14', '50'), 'quatorze escudos e cinquenta centavos')
  t.is(writeCurrency(Currencies.CVE, Locales.PT, '14', '50'), 'catorze escudos e cinquenta centavos')
  t.is(writeCurrency(Currencies.CVE, Locales.PT, '1', '50'), 'um escudo e cinquenta centavos')
  t.is(writeCurrency(Currencies.CVE, Locales.PT, '2', '5'), 'dois escudos e cinquenta centavos')
  t.is(writeCurrency(Currencies.CVE, Locales.PT, '0', '1'), 'dez centavos')
  t.is(writeCurrency(Currencies.CVE, Locales.PT, '0', '5'), 'cinquenta centavos')
  t.is(writeCurrency(Currencies.CVE, Locales.PT, '0', '05'), 'cinco centavos')
  t.is(writeCurrency(Currencies.CVE, Locales.PT, undefined, '25'), 'vinte e cinco centavos')
  t.is(writeCurrency(Currencies.CVE, Locales.PT, '1000000'), 'um milhão de escudos')
  t.is(writeCurrency(Currencies.CVE, Locales.PT, '2000000', '50'), 'dois milhões de escudos e cinquenta centavos')

  // Testes com o EURO
  t.is(writeCurrency(Currencies.EUR, Locales.PT, '0'), 'zero euros')
  t.is(writeCurrency(Currencies.EUR, Locales.PT, '1'), 'um euro')
  t.is(writeCurrency(Currencies.EUR, Locales.PT, '2'), 'dois euros')
  t.is(writeCurrency(Currencies.EUR, Locales.BR, '14', '50'), 'quatorze euros e cinquenta cêntimos')
  t.is(writeCurrency(Currencies.EUR, Locales.PT, '14', '50'), 'catorze euros e cinquenta cêntimos')
  t.is(writeCurrency(Currencies.EUR, Locales.PT, '1', '50'), 'um euro e cinquenta cêntimos')
  t.is(writeCurrency(Currencies.EUR, Locales.PT, '2', '5'), 'dois euros e cinquenta cêntimos')
  t.is(writeCurrency(Currencies.EUR, Locales.PT, '0', '1'), 'dez cêntimos')
  t.is(writeCurrency(Currencies.EUR, Locales.PT, '0', '5'), 'cinquenta cêntimos')
  t.is(writeCurrency(Currencies.EUR, Locales.PT, '0', '05'), 'cinco cêntimos')
  t.is(writeCurrency(Currencies.EUR, Locales.PT, undefined, '25'), 'vinte e cinco cêntimos')
  t.is(writeCurrency(Currencies.EUR, Locales.PT, '1000000'), 'um milhão de euros')
  t.is(writeCurrency(Currencies.EUR, Locales.PT, '2000000', '50'), 'dois milhões de euros e cinquenta cêntimos')

  // Testes com o METICAL
  t.is(writeCurrency(Currencies.MZN, Locales.PT, '1'), 'um metical')
  t.is(writeCurrency(Currencies.MZN, Locales.PT, '2'), 'dois meticais')
  t.is(writeCurrency(Currencies.MZN, Locales.BR, '14', '50'), 'quatorze meticais e cinquenta centavos')
  t.is(writeCurrency(Currencies.MZN, Locales.PT, '14', '50'), 'catorze meticais e cinquenta centavos')
  t.is(writeCurrency(Currencies.MZN, Locales.PT, '1', '50'), 'um metical e cinquenta centavos')
  t.is(writeCurrency(Currencies.MZN, Locales.PT, '2', '5'), 'dois meticais e cinquenta centavos')
  t.is(writeCurrency(Currencies.MZN, Locales.PT, '0', '1'), 'dez centavos')
  t.is(writeCurrency(Currencies.MZN, Locales.PT, '0', '5'), 'cinquenta centavos')
  t.is(writeCurrency(Currencies.MZN, Locales.PT, '0', '05'), 'cinco centavos')
  t.is(writeCurrency(Currencies.MZN, Locales.PT, undefined, '25'), 'vinte e cinco centavos')
  t.is(writeCurrency(Currencies.MZN, Locales.PT, '1000000'), 'um milhão de meticais')
  t.is(writeCurrency(Currencies.MZN, Locales.PT, '2000000', '50'), 'dois milhões de meticais e cinquenta centavos')
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
