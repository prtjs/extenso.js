import test from 'ava'
import writeDecimal, { pluralize, writeDecimalFormal, writeDecimalInformal } from './'

/**
 * Função: pluralize
 */
test('Deve pluralizar uma palavra qualquer', (t) => {
  t.is(pluralize('guia', 2),        'guias')
  t.is(pluralize('mochileiro', 42), 'mochileiros')
  t.is(pluralize('guia', 0),        'guia')
  t.is(pluralize('mochileiro', 1),  'mochileiro')
})

/**
 * Função: writeDecimalFormal
 */
test('Deve escrever formalmente a parte decimal de um número', (t) => {
  t.is(writeDecimalFormal('1'),          'um décimo')
  t.is(writeDecimalFormal('01'),         'um centésimo')
  t.is(writeDecimalFormal('001'),        'um milésimo')
  t.is(writeDecimalFormal('0000000001'), 'um décimo de bilionésimo')
  t.is(writeDecimalFormal('005'),        'cinco milésimos')
  t.is(writeDecimalFormal('125'),        'cento e vinte e cinco milésimos')
  t.is(writeDecimalFormal('00285026'),   'duzentos e oitenta e cinco mil e vinte e seis centésimos de milionésimo')
})

/**
 * Função: writeDecimalInformal
 */
test('Deve escrever informalmente a parte decimal de um número', (t) => {
  t.is(writeDecimalInformal('42'), 'vírgula quarenta e dois')
})

/**
 * Função: writeDecimal
 */
test('Deve escrever a parte decimal', (t) => {
  t.is(writeDecimal('42'),             'quarenta e dois centésimos')
  t.is(writeDecimal('42', 'formal'),   'quarenta e dois centésimos')
  t.is(writeDecimal('42', 'informal'), 'vírgula quarenta e dois')
})