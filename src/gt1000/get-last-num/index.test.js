import test from 'ava'
import fn from './'

test('Deve retornar a última parte de um número', t => {
  t.is(fn('1000'), 0)
  t.is(fn('1042'), 42)
  t.is(fn('314000999'), 999)
})
