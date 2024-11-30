import test from 'ava'
import writeSubunit from './write-subunit.ts'

test('Deve obter a sub-unidade escrita por extenso', (t) => {
  const opts = {
    subunit: {
      singular: 'centavo',
      plural: 'centavos',
    },
  }

  t.is(writeSubunit('0', 'br', opts), 'zero centavos')
  t.is(writeSubunit('1', 'br', opts), 'um centavo')
  t.is(writeSubunit('19', 'br', opts), 'dezenove centavos')
  t.is(writeSubunit('19', 'pt', opts), 'dezanove centavos')
  t.is(writeSubunit('50', 'br', opts), 'cinquenta centavos')
})
