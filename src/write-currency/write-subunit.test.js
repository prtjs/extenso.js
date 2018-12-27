import test from 'ava'
import writeSubunit from './write-subunit'

test('Deve obter a sub-unidade escrita por extenso', (t) => {
  const opts = {
    subunit: {
      singular: 'centavo',
      plural: 'centavos'
    }
  }

  t.is(writeSubunit('0', opts),  'zero centavos')
  t.is(writeSubunit('1', opts),  'um centavo')
  t.is(writeSubunit('50', opts), 'cinquenta centavos')
})