import test from 'ava'
import fn from './'

test('Deve escrever a parte decimal', t => {
  t.is(fn('1'), 'um décimo')
  t.is(fn('01'), 'um centésimo')
  t.is(fn('001'), 'um milésimo')
  t.is(fn('0000000001'), 'um décimo de bilionésimo')
  t.is(fn('005'), 'cinco milésimos')
  t.is(fn('125'), 'cento e vinte e cinco milésimos')
  t.is(fn('00285026'), 'duzentos e oitenta e cinco mil e vinte e seis centésimos de milionésimo')
})