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
  t.is(writeDecimalFormal('1', 'br'),          'um décimo')
  t.is(writeDecimalFormal('01', 'br'),         'um centésimo')
  t.is(writeDecimalFormal('19', 'br'),         'dezenove centésimos')
  t.is(writeDecimalFormal('19', 'pt'),         'dezanove centésimos')
  t.is(writeDecimalFormal('001', 'br'),        'um milésimo')
  t.is(writeDecimalFormal('0000000001', 'br'), 'um décimo de bilionésimo')
  t.is(writeDecimalFormal('005', 'br'),        'cinco milésimos')
  t.is(writeDecimalFormal('125', 'br'),        'cento e vinte e cinco milésimos')
  t.is(writeDecimalFormal('00285026', 'br'),   'duzentos e oitenta e cinco mil e vinte e seis centésimos de milionésimo')
})

/**
 * Função: writeDecimalInformal
 */
test('Deve escrever informalmente a parte decimal de um número', (t) => {
  // Em pt-BR
  t.is(writeDecimalInformal('19', 'br'), 'vírgula dezenove')
  t.is(writeDecimalInformal('42', 'br'), 'vírgula quarenta e dois')

  // Em pt-PT
  t.is(writeDecimalInformal('19', 'pt'), 'vírgula dezanove')
  t.is(writeDecimalInformal('42', 'pt'), 'vírgula quarenta e dois')
})

/**
 * Função: writeDecimal
 */
test('Deve escrever a parte decimal', (t) => {
  // Em pt-BR
  t.is(writeDecimal('14', 'br'),             'quatorze centésimos')
  t.is(writeDecimal('14', 'br', 'formal'),   'quatorze centésimos')
  t.is(writeDecimal('14', 'br', 'informal'), 'vírgula quatorze')

  // Em pt-PT
  t.is(writeDecimal('14', 'pt'),             'catorze centésimos')
  t.is(writeDecimal('14', 'pt', 'formal'),   'catorze centésimos')
  t.is(writeDecimal('14', 'pt', 'informal'), 'vírgula catorze')
})