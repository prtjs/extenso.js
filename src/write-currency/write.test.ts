import test from 'ava'
import write from './write.ts'

test('Deve obter o valor escrito por extenso', (t) => {
  const opts = {
    singular: 'real',
    plural: 'reais',
  }

  t.is(write('0', 'br', opts), 'zero reais')
  t.is(write('1', 'br', opts), 'um real')
  t.is(write('19', 'br', opts), 'dezenove reais')
  t.is(write('19', 'pt', opts), 'dezanove reais')
  t.is(write('50', 'br', opts), 'cinquenta reais')
  t.is(write('1000000', 'br', opts), 'um milhão de reais')
})
