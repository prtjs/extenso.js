import test from 'ava'
import write from './write'

test('Deve obter o valor escrito por extenso', (t) => {
  const opts = {
    singular: 'real',
    plural: 'reais'
  }

  t.is(write('0', opts),       'zero reais')
  t.is(write('1', opts),       'um real')
  t.is(write('50', opts),      'cinquenta reais')
  t.is(write('1000000', opts), 'um milhão de reais')
})