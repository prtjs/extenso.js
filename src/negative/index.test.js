import test from 'ava'
import fn from './'

test('Deve retornar a versão negativa em texto do número', t => {
  t.is(fn('um'), 'um negativo')
  t.is(fn('um', 'formal'), 'um negativo')
  t.is(fn('um', 'informal'), 'menos um')
})